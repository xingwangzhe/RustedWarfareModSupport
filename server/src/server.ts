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
	type DocumentDiagnosticReport,
	Hover,
	//MarkupContent
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
			// 添加hover支持
			hoverProvider: true,
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
	
		// 获取当前光标位置信息
		const cursorLine = _textDocumentPosition.position.line;
		const cursorCharacter = _textDocumentPosition.position.character;
		
		// 获取当前行内容
		const lineStart = document.positionAt(document.offsetAt({ line: cursorLine, character: 0 }));
		const lineEnd = document.positionAt(document.offsetAt({ line: cursorLine + 1, character: 0 }) - 1);
		const currentLineContent = document.getText({ start: lineStart, end: lineEnd });

			// 处理节名补全
		const openBracketIndex = currentLineContent.lastIndexOf('[', cursorCharacter);
		const closeBracketIndex = currentLineContent.indexOf(']', cursorCharacter);
		// 判断是否在 [] 内部（确保左括号在光标前，右括号在光标后或不存在）
		if (openBracketIndex !== -1 && (closeBracketIndex === -1 || cursorCharacter < closeBracketIndex)) {
			return SECTIONSNAME;
		}

		// 向上查找最近的section定义
		let currentSectionName = null;
		for (let i = cursorLine; i >= 0; i--) {
			const lineText = document.getText({
				start: document.positionAt(document.offsetAt({ line: i, character: 0 })),
				end: document.positionAt(document.offsetAt({ line: i + 1, character: 0 }) - 1)
			}).trim();
			
			const sectionMatch = lineText.match(/^\[(.+?)\]$/);
			if (sectionMatch) {
				currentSectionName = sectionMatch[1];
				break;
			}
		}

		if (!currentSectionName) {
			return [];
		}

		// 处理冒号后的值补全
		const colonIndex = currentLineContent.indexOf(':');
		if (colonIndex !== -1 && cursorCharacter > colonIndex) {
			const key = currentLineContent.substring(0, colonIndex).trim();
			const pointIndex = currentLineContent.indexOf('.', colonIndex);

			// 处理单位属性补全(例如: unit.maxHp)
			if (pointIndex !== -1 && cursorCharacter > pointIndex) {
				return ALLVALUES.UNITPROPERTY;
			}

			// 根据section和key查找对应的配置项
			const sectionConfig = ALLSECTIONS[currentSectionName.toUpperCase()];
			const keyConfig = sectionConfig?.find(item => item.label === key);

			if (keyConfig) {
				const dataType = keyConfig.data;
				// 根据数据类型返回相应的值列表
				if (dataType.includes('bool')) {
					return ALLVALUES.BOOL;
				} 
				if (dataType.includes('logicBoolean')) {
					// 逻辑布尔值可以使用多种类型的值
					return [
						...ALLVALUES.LOGICBBOOLEAN,  // 逻辑操作符
						...ALLVALUES.BOOL,           // 布尔值
						...ALLVALUES.FUNCTION,       // 函数
						...ALLVALUES.UNITREF         // 单位引用
					];
				}
				if (dataType.includes('projectileRef')) {
					return ALLVALUES.SPAWNPROJECTILE;
				}
				if (dataType.includes('event')) {
					return ALLVALUES.EVENTS;
				}
				// 特殊处理spawnUnits相关配置
				if (key.includes('spawnUnits')) {
					return [
						...ALLVALUES.SPAWNUNIT,      // 生成单位配置
						...ALLVALUES.LOGICBBOOLEAN,  // 条件判断
						...ALLVALUES.BOOL,           
						...ALLVALUES.FUNCTION,
						...ALLVALUES.UNITREF
					];
				}
			}
			return [];
		}

		// 处理普通key的补全
		return getKeyCompletionItems(currentSectionName);
	});

// 根据节名获取对应的key补全项
function getKeyCompletionItems(sectionName: string): CompletionItem[] {
	// 处理基础节
	switch (sectionName) {
		case 'core': return ALLSECTIONS.CORE;
		case 'graphics': return ALLSECTIONS.GRAPHICS;
		case 'attack': return ALLSECTIONS.ATTACK;
		case 'movement': return ALLSECTIONS.MOVEMENT;
		case 'ai': return ALLSECTIONS.AI;
	}

	// 处理特殊节(带前缀的节)
	const sectionPrefixes: Record<string, CompletionItem[]> = {
		'canBuild_': ALLSECTIONS.CANBUILD,
		'turret_': ALLSECTIONS.TURRET,
		'projectile_': ALLSECTIONS.PROJECTILE,
		'arm_': ALLSECTIONS.ARM,
		'leg_': ALLSECTIONS.LEG,
		'attachment_': ALLSECTIONS.ATTACHMENT,
		'effect_': ALLSECTIONS.EFFECT,
		'animation_': ALLSECTIONS.ANIMATION,
		'action_': ALLSECTIONS.ACTION,
		'hiddenAction_': ALLSECTIONS.ACTION,
		'placementRule_': ALLSECTIONS.PLACEMENTRULE,
		'resource_': ALLSECTIONS.RESOURCE,
		'global_resource_': ALLSECTIONS.RESOURCE,
		'decal_': ALLSECTIONS.DECAL,
		'template_': ALLSECTIONS.TEMPLATE
	};

	// 遍历前缀匹配
	for (const [prefix, items] of Object.entries(sectionPrefixes)) {
		if (sectionName.startsWith(prefix)) {
			return items;
		}
	}

	return [];
}

// 主hover处理函数
connection.onHover(
    (_textDocumentPosition): Hover | null => {
        console.log('------------------------');
        console.log('触发hover事件');
        
        const document = documents.get(_textDocumentPosition.textDocument.uri);
        if (!document) { 
            console.log('未找到文档');
            return null; 
        }

        const cursorLine = _textDocumentPosition.position.line;
        const cursorCharacter = _textDocumentPosition.position.character;
        const currentLineContent = document.getText({
            start: document.positionAt(document.offsetAt({ line: cursorLine, character: 0 })),
            end: document.positionAt(document.offsetAt({ line: cursorLine + 1, character: 0 }) - 1)
        });

        console.log(`当前行内容: "${currentLineContent}"`);
        console.log(`光标位置: 行${cursorLine + 1}, 列${cursorCharacter + 1}`);

        // 1. 处理section hover
        const sectionMatch = currentLineContent.match(/^\[(.+?)\]/);
        if (sectionMatch) {
            const fullMatch = sectionMatch[0];
            const sectionContent = sectionMatch[1];
            const sectionStart = currentLineContent.indexOf(fullMatch) + 1;
            const sectionEnd = sectionStart + sectionContent.length;

            if (cursorCharacter >= sectionStart && cursorCharacter <= sectionEnd) {
                const sectionName = sectionContent;
                const baseSectionName = sectionName.includes('_') ? 
                    sectionName.substring(0, sectionName.indexOf('_') + 1) : 
                    sectionName;
                
                const item = SECTIONSNAME.find(item => item.label === baseSectionName);
                if (item) {
                    return {
                        contents: {
                            kind: 'markdown',
                            value: [
                                `# ${item.labelDetails?.detail || sectionName}`,
                                `## 说明`,
                                item.labelDetails?.description || '无'
                            ].filter(Boolean).join('\n\n')
                        }
                    };
                }
            }
        }

        // 2. 查找当前所在section
        let currentSectionName = null;
        for (let i = cursorLine; i >= 0; i--) {
            const lineText = document.getText({
                start: document.positionAt(document.offsetAt({ line: i, character: 0 })),
                end: document.positionAt(document.offsetAt({ line: i + 1, character: 0 }) - 1)
            }).trim();
            
            const match = lineText.match(/^\[(.+?)\]$/);
            if (match) {
                currentSectionName = match[1];
                break;
            }
        }

        if (!currentSectionName) {
            return null;
        }

        // 3. 处理key:value hover
        const colonIndex = currentLineContent.indexOf(':');
        if (colonIndex !== -1) {
            const key = currentLineContent.substring(0, colonIndex).trim();
            const value = currentLineContent.substring(colonIndex + 1).trim();
            const sectionConfig = ALLSECTIONS[currentSectionName.toUpperCase()];

            if (!sectionConfig) {
                return null;
            }

            const item = sectionConfig.find(item => item.label === key);
            if (!item) {
                return null;
            }

            // 处理key hover
            if (cursorCharacter <= colonIndex) {
                return {
                    contents: {
                        kind: 'markdown',
                        value: [
                            `# ${item.label}`,
                            item.detail ? `*${item.detail}*` : '',
                            `## 说明`,
                            item.documentation as string,
                            `## 类型`,
                            `\`${item.data}\``,
                            `## 示例`,
                            `\`${item.label}: ${getExampleValue(item.data)}\``
                        ].filter(Boolean).join('\n\n')
                    }
                };
            }

            // 处理value hover
            const pointIndex = currentLineContent.indexOf('.', colonIndex);

            // 处理单位属性引用
            if (pointIndex !== -1 && cursorCharacter > pointIndex) {
                const propertyName = value.substring(value.indexOf('.') + 1).trim();
                const property = ALLVALUES.UNITPROPERTY.find(p => p.label === propertyName);
                if (property) {
                    return {
                        contents: {
                            kind: 'markdown',
                            value: [
                                `# 单位属性: ${property.label}`,
                                property.detail ? `*${property.detail}*` : '',
                                property.documentation as string
                            ].filter(Boolean).join('\n\n')
                        }
                    };
                }
            }

            // 处理常规值
            const valueGroups = getValueGroups(item.data, key);
            const currentValue = value.trim();
            let foundValue: CompletionItem | undefined;
            let valueDoc = '';

            for (const group of valueGroups) {
                foundValue = group.find(v => v.label === currentValue);
                if (foundValue) {
                    valueDoc = foundValue.documentation as string;
                    break;
                }
            }

            return {
                contents: {
                    kind: 'markdown',
                    value: [
                        `# ${key} 的值`,
                        `## 类型`,
                        getValueTypeName(item.data),
                        `## 当前值`,
                        `\`${currentValue}\`${foundValue?.detail ? ` - ${foundValue.detail}` : ''}`,
                        valueDoc ? `## 说明\n${valueDoc}` : '',
                        `## 可能的值`,
                        ...valueGroups.map(group => 
                            group.map(v => `- ${v.label}${v.detail ? `: ${v.detail}` : ''}`).join('\n')
                        )
                    ].filter(Boolean).join('\n\n')
                }
            };
        }

        return null;
    }
);

// 获取数据类型的示例值
function getExampleValue(dataType: string): string {
    if (dataType.includes('bool')) {return 'true';}
    if (dataType.includes('number')) {return '1.0';}
    if (dataType.includes('int')) {return '1';}
    if (dataType.includes('string')) {return 'text';}
    if (dataType.includes('projectileRef')) {return 'projectile_1';}
    if (dataType.includes('event')) {return 'clicked';}
    return 'value';
}

// 获取值类型的中文名称
function getValueTypeName(dataType: string): string {
    if (dataType.includes('bool')) {return '布尔值';}
    if (dataType.includes('logicBoolean')) {return '逻辑布尔值';}
    if (dataType.includes('number')) {return '数值';}
    if (dataType.includes('int')) {return '整数';}
    if (dataType.includes('string')) {return '字符串';}
    if (dataType.includes('projectileRef')) {return '弹头引用';}
    if (dataType.includes('event')) {return '事件';}
    return '未知类型';
}

// 根据数据类型获取可能的值组
function getValueGroups(dataType: string, key: string): CompletionItem[][] {
    const groups: CompletionItem[][] = [];
    
    if (dataType.includes('bool')) {
        groups.push(ALLVALUES.BOOL);
    }
    if (dataType.includes('logicBoolean')) {
        groups.push(ALLVALUES.LOGICBBOOLEAN);
        groups.push(ALLVALUES.BOOL);
        groups.push(ALLVALUES.FUNCTION);
        groups.push(ALLVALUES.UNITREF);
    }
    if (key.includes('spawnUnits')) {
        groups.push(ALLVALUES.SPAWNUNIT);
    }
    if (dataType.includes('projectileRef')) {
        groups.push(ALLVALUES.SPAWNPROJECTILE);
    }
    if (dataType.includes('event')) {
        groups.push(ALLVALUES.EVENTS);
    }
    
    return groups;
}

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
