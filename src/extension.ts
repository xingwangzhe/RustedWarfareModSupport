// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { t } from './translationManager';
import { IniSectionSymbolProvider } from './Section';
import { IniFoldingRangeProvider } from './IniFoldingProvider';
import {
    SectionNameCompletionProvider,
    GenericCompletionProvider
} from './completionProvider';
import { createCompletionProviders, completionProviderConfigs } from './common/completionFactory';
import { ValueCompletionProvider } from './valueComple/valueCompletionProvider';
import { SectionPropertyDecorator } from './coralor/decorator';
import { RustedWarfareHoverProvider } from './hoverProvider/hoverProvider';
import { MemoryDefinitionCompletionProvider } from './memory/MemoryDefinitionCompletionProvider';
import { MemoryValueCompletionProvider } from './memory/MemoryValueCompletionProvider';
import { initializePanelManager, getPanelManager } from './panel/panelManager';
// image zoom/preview features removed per user request

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

// 应用折叠控件显示设置的函数
function applyFoldingControls(editor: vscode.TextEditor, showFoldingControls: string) {
	const config = vscode.workspace.getConfiguration();
	const editorConfig = config.get<any>('editor', {});

	// 更新编辑器的折叠控件显示设置
	editorConfig.showFoldingControls = showFoldingControls;

	// 应用配置到工作区
	vscode.workspace.getConfiguration().update('editor.showFoldingControls', showFoldingControls, vscode.ConfigurationTarget.Workspace);
}

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(t('Congratulations, your extension "rustedwarfaremodsupport" is now active!'));

	// 读取配置并应用折叠控件显示设置
	const config = vscode.workspace.getConfiguration('rustedwarfaremodsupport');
	const showFoldingControls = config.get<string>('showFoldingControls', 'always');

	// 为所有打开的文本编辑器应用设置
	vscode.window.visibleTextEditors.forEach(editor => {
		if (editor.document.languageId === 'ini') {
			applyFoldingControls(editor, showFoldingControls);
		}
	});

	// 监听配置变化
	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration(e => {
			if (e.affectsConfiguration('rustedwarfaremodsupport.showFoldingControls')) {
				const newConfig = vscode.workspace.getConfiguration('rustedwarfaremodsupport');
				const newShowFoldingControls = newConfig.get<string>('showFoldingControls', 'always');

				vscode.window.visibleTextEditors.forEach(editor => {
					if (editor.document.languageId === 'ini') {
						applyFoldingControls(editor, newShowFoldingControls);
					}
				});
			}
		})
	);

	// 监听编辑器打开事件
	context.subscriptions.push(
		vscode.window.onDidChangeVisibleTextEditors(editors => {
			editors.forEach(editor => {
				if (editor.document.languageId === 'ini') {
					applyFoldingControls(editor, showFoldingControls);
				}
			});
		})
	);

	// 初始化面板管理器
	initializePanelManager(context);

	// 注册导出相关命令
	import('./panel/exportManager.js').then(({ registerExportCommands }) => {
		registerExportCommands(context);
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('rustedwarfaremodsupport.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage(t('Hello World from RustedWarfareModSupport!'));
	});

// image commands removed

	// 注册文档解析器，用于识别节
	const sectionParser = vscode.languages.registerDocumentSymbolProvider(
		{ language: 'ini' }, 
		new IniSectionSymbolProvider()
	);

	// 注册折叠范围提供者，用于节和注释块折叠
	const foldingProvider = vscode.languages.registerFoldingRangeProvider(
		{ language: 'ini' },
		new IniFoldingRangeProvider()
	);

	// 创建所有补全提供者的数组
	const completionProviders = createCompletionProviders(completionProviderConfigs);

	// 注册所有补全提供者（不设置触发字符，使用默认触发机制）
	const completionSubscriptions = completionProviders.map(provider => 
		vscode.languages.registerCompletionItemProvider(
			{ language: 'ini' },
			provider
		)
	);

	// 注册值补全提供者
	const valueCompletionProvider = new ValueCompletionProvider();
	const valueCompletionSubscription = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		valueCompletionProvider,
		':', ' ', ',', '.', 'm' // 在冒号、空格、逗号、点号和m后触发值补全
	);

	// 注册节名称补全提供者，在多种字符输入时都可触发
	const sectionNameCompletionProvider = new SectionNameCompletionProvider();
	const sectionNameCompletionSubscription = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		sectionNameCompletionProvider,
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	);

	// 注册@memory定义补全提供者
	const memoryDefinitionProvider = new MemoryDefinitionCompletionProvider();
	const memoryDefinitionSubscription = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		memoryDefinitionProvider,
		'@', ' ' // 在@和空格后触发
	);

	// 注册memory值补全提供者，在任意位置都可以触发
	const memoryValueProvider = new MemoryValueCompletionProvider();
	const memoryValueSubscription = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		memoryValueProvider,
		'm', '.' // 在m和.后触发memory补全
	);

	// 注册悬停提供者
	const hoverProvider = vscode.languages.registerHoverProvider(
		{ language: 'ini' },
		new RustedWarfareHoverProvider()
	);

	// 注册装饰器
	const decorator = new SectionPropertyDecorator();
	context.subscriptions.push(decorator);

	// 将所有订阅添加到context.subscriptions中
	context.subscriptions.push(
		disposable,
		sectionParser,
		foldingProvider,
		...completionSubscriptions,
		valueCompletionSubscription,
		sectionNameCompletionSubscription,
		memoryDefinitionSubscription,
		memoryValueSubscription,
		hoverProvider,
		...getPanelManager().getCustomExtensionsManager().getSubscriptions()
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}

/**
 * 获取当前扩展的完整ID (publisher.name)
 */
export function getExtensionId(): string {
    const packageJson = require('../package.json');
    return `${packageJson.publisher}.${packageJson.name}`;
}