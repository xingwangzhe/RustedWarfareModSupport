import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	//CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';



import { ALLSECTIONS } from './data/lang/zh-CN/sections/1allsections';
import { SECTIONSNAME} from './data/lang/zh-CN/sections/sectionsname';
import { ALLVALUES } from './data/lang/zh-CN/values/1allvalues';

const connection = createConnection(ProposedFeatures.all);

const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			completionProvider: {
				resolveProvider: true
			},
			diagnosticProvider: {
				interFileDependencies: false,
				workspaceDiagnostics: false
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

interface ExampleSettings {
	maxNumberOfProblems: number;
}

const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings = new Map<string, Thenable<ExampleSettings>>();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = (
			(change.settings.languageServerExample || defaultSettings)
		);
	}
	// Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
	// We could optimize things here and re-fetch the setting first can compare it
	// to the existing setting, but this is out of scope for this example.
	connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


connection.languages.diagnostics.on(async (params) => {
	const document = documents.get(params.textDocument.uri);
	if (document !== undefined) {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: await validateTextDocument(document)
		} satisfies DocumentDiagnosticReport;
	} else {
		// We don't know the document. We can either try to read it from disk
		// or we don't report problems for it.
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: []
		} satisfies DocumentDiagnosticReport;
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];
	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index),
				end: textDocument.positionAt(m.index + m[0].length)
			},
			message: `${m[0]} is all uppercase.`,
			source: 'ex'
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Particularly for names'
				}
			];
		}
		diagnostics.push(diagnostic);
	}
	return diagnostics;
}

connection.onDidChangeWatchedFiles(_change => {
	connection.console.log('We received a file change event');
});




connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		const document = documents.get(_textDocumentPosition.textDocument.uri);
		if (!document) {return [];}
	
		// 获取当前行号
		const cursorLine = _textDocumentPosition.position.line;
		
		// 从当前行向上查找最近的一个节定义
		let currentSectionName = null;
		for (let i = cursorLine; i >= 0; i--) {
			const lineStart = document.positionAt(document.offsetAt({ line: i, character: 0 }));
			const lineEnd = document.positionAt(document.offsetAt({ line: i + 1, character: 0 }) - 1);
			const lineContent = document.getText({ start: lineStart, end: lineEnd }).trim();
	
			const sectionMatch = lineContent.match(/^\[(.+)\]$/);
			if (sectionMatch) {
				currentSectionName = sectionMatch[1];
				break;
			}
		}
		const cursorCharacter = _textDocumentPosition.position.character;

		// 获取当前行内容
		const lineStart = document.positionAt(document.offsetAt({ line: cursorLine, character: 0 }));
		const lineEnd = document.positionAt(document.offsetAt({ line: cursorLine + 1, character: 0 }) - 1);
		const currentLineContent = document.getText({ start: lineStart, end: lineEnd });

		// 判断光标是否在 [] 内
		const openBracketIndex = currentLineContent.lastIndexOf('[', cursorCharacter);
		const closeBracketIndex = currentLineContent.indexOf(']', cursorCharacter);
		const isInsideBrackets = (openBracketIndex !== -1 && (closeBracketIndex === -1 || openBracketIndex > closeBracketIndex));
		// 判断光标是否在 :后
		const colonIndex = currentLineContent.indexOf(':');
		const pointIndex = currentLineContent.indexOf('.');
		if (isInsideBrackets) {
			return SECTIONSNAME;
		}
		else if (!currentSectionName) {
			return [];
		} 
		else if((colonIndex!==-1)&&(cursorCharacter>colonIndex)){
            
				if((pointIndex!==-1)&&(cursorCharacter==(pointIndex+1))){
					return ALLVALUES.UNITPROPERTY;
				}

				const key = currentLineContent.substring(0, colonIndex).trim();
				let sectionName=currentSectionName;
				sectionName=sectionName.toUpperCase();
				const sectionConfig = ALLSECTIONS[sectionName];
					let keyConfig = null;
					if (sectionConfig) {
						for (const item of sectionConfig) {
							if (item.label === key) {
								keyConfig = item;
								break;
							}
						}
					}
					if (keyConfig) {
						const data = keyConfig.data;
							if (data.includes('bool')) {
								return ALLVALUES.BOOL;
							} else if (data.includes('logicBoolean')) {
								return [...ALLVALUES.LOGICBBOOLEAN, ...ALLVALUES.BOOL,...ALLVALUES.FUNCTION,...ALLVALUES.UNITREF];
							} else if (key.includes('spawnUnits')){
								return [...ALLVALUES.LOGICBBOOLEAN,...ALLVALUES.BOOL,...ALLVALUES.FUNCTION,...ALLVALUES.UNITREF,...ALLVALUES.SPAWNUNIT];
							} else if (data.includes('projectileRef')){
								return [...ALLVALUES.PROJECTILE];
							} else if (data.includes('event')){
								return [...ALLVALUES.EVENTS];
							} 
					}
				return [];;
		}  
		 else {
		//根据节名返回相应的补全项
			switch (currentSectionName) {
				case 'core':
					return ALLSECTIONS.CORE;
				case 'graphics':
					return ALLSECTIONS.GRAPHICS;
				case 'attack':
					return ALLSECTIONS.ATTACK;
				case 'movement':
					return ALLSECTIONS.MOVEMENT;
				case 'ai':
					return ALLSECTIONS.AI;
				default:
					if (currentSectionName.startsWith('canBuild_')) {
						return ALLSECTIONS.CANBUILD;
					} else if (currentSectionName.startsWith('turret_')) {
						return ALLSECTIONS.TURRET;
					} else if (currentSectionName.startsWith('projectile_')){
						return ALLSECTIONS.PROJECTILE;
					} else if (currentSectionName.startsWith('arm_')){
						return ALLSECTIONS.ARM;
					} else if (currentSectionName.startsWith('leg_')){
						return ALLSECTIONS.LEG;
					} else if (currentSectionName.startsWith('attachment_')){
						return ALLSECTIONS.ATTACHMENT;
					} else if (currentSectionName.startsWith('effect_')){
						return ALLSECTIONS.EFFECT;
					} else if (currentSectionName.startsWith('animation_')){
						return ALLSECTIONS.ANIMATION;
					} else if (currentSectionName.startsWith('action_')){
						return ALLSECTIONS.ACTION;
					} else if (currentSectionName.startsWith('hiddenAction_')){
						return ALLSECTIONS.ACTION;
					} else if (currentSectionName.startsWith('placementRule_')){
						return ALLSECTIONS.PLACEMENTRULE;
					} else if (currentSectionName.startsWith('resource_')){
						return ALLSECTIONS.RESOURCE;
					} else if (currentSectionName.startsWith('global_resource_')){
						return ALLSECTIONS.RESOURCE;
					} else if (currentSectionName.startsWith('decal_')){
						return ALLSECTIONS.DECAL;
					} else if (currentSectionName.startsWith('commnet_')){
						return [];
					} else if (currentSectionName.startsWith('template_')){
						return ALLSECTIONS.TEMPLATE;	
					}
					return [];
			}
		}
		return [];
	});
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		// if (item.data === 1) {
		// 	item.detail = 'TypeScript desadddddddddtails';
		// 	item.documentation = 'Typsadaaaaaaaaaaocumentation';
		// } else if (item.data === 2) {
		// 	item.detail = 'JavaScript detailadfffffffffs';
		// 	item.documentation = 'JavaScript documentatasdddddddion';
		// }
		return item;
	}
);


documents.listen(connection);

connection.listen();
