import * as vscode from 'vscode';
import { IniSectionSymbolProvider } from './Section';
import {
    CoreCompletionProvider,
    CanBuildCompletionProvider,
    GraphicsCompletionProvider,
    AttackCompletionProvider,
    TurretCompletionProvider,
    ProjectileCompletionProvider,
    MovementCompletionProvider,
    AiCompletionProvider,
    LegArmCompletionProvider,
    AttachmentCompletionProvider,
    ActionCompletionProvider,
    EffectCompletionProvider,
    AnimationCompletionProvider,
    ModInfoCompletionProvider,
    ModInfoFileCompletionProvider} from './completionProvider';
import { SectionPropertyDecorator } from './decorator';
import { ValueCompletionProvider } from './valueComple/valueCompletionProvider';
import { RustedWarfareHoverProvider } from './hoverProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(vscode.l10n.t('Congratulations, your extension "rustedwarfaremodsupport" is now active!'));

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('rustedwarfaremodsupport.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage(vscode.l10n.t('Hello World from RustedWarfareModSupport!'));
	});

	// 注册文档解析器，用于识别节
	const sectionParser = vscode.languages.registerDocumentSymbolProvider(
		[{ language: 'ini' }, { pattern: '**/mod-info.txt' }], 
		new IniSectionSymbolProvider()
	);

	// 创建所有补全提供者的数组
	const completionProviders = [
		new CoreCompletionProvider(),
		new CanBuildCompletionProvider(),
		new GraphicsCompletionProvider(),
		new AttackCompletionProvider(),
		new TurretCompletionProvider(),
		new ProjectileCompletionProvider(),
		new MovementCompletionProvider(),
		new AiCompletionProvider(),
		new LegArmCompletionProvider(),
		new AttachmentCompletionProvider(),
		new ActionCompletionProvider(),
		new EffectCompletionProvider(),
		new AnimationCompletionProvider(),
		new ModInfoCompletionProvider()
	];

	// 注册所有补全提供者（不设置触发字符，使用默认触发机制）
	const completionSubscriptions = completionProviders.map(provider => 
		vscode.languages.registerCompletionItemProvider(
			[{ language: 'ini' }, { pattern: '**/mod-info.txt' }],
			provider
		)
	);

	// 为mod-info.txt文件注册专门的补全提供者
	const modInfoFileCompletionProvider = new ModInfoFileCompletionProvider();
	const modInfoFileCompletionSubscription = vscode.languages.registerCompletionItemProvider(
		{ pattern: '**/mod-info.txt' },
		modInfoFileCompletionProvider
	);

	// 注册值补全提供者
	const valueCompletionProvider = new ValueCompletionProvider();
	const valueCompletionSubscription = vscode.languages.registerCompletionItemProvider(
		[{ language: 'ini' }, { pattern: '**/mod-info.txt' }],
		valueCompletionProvider,
		':', ' ', ',' // 在冒号、空格和逗号后触发值补全
	);

	// 注册悬停提供者
	const hoverProvider = vscode.languages.registerHoverProvider(
		[{ language: 'ini' }, { pattern: '**/mod-info.txt' }],
		new RustedWarfareHoverProvider()
	);

	// 注册装饰器
	const decorator = new SectionPropertyDecorator();
	context.subscriptions.push(decorator);

	context.subscriptions.push(disposable);
	context.subscriptions.push(sectionParser);
	context.subscriptions.push(valueCompletionSubscription);
	context.subscriptions.push(hoverProvider);
	context.subscriptions.push(modInfoFileCompletionSubscription);
	completionSubscriptions.forEach(subscription => context.subscriptions.push(subscription));
}

// This method is called when your extension is deactivated
export function deactivate() {}