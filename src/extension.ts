// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { IniSectionSymbolProvider } from './Section';
import { CoreCompletionProvider } from './core';
import { CanBuildCompletionProvider } from './canBuild';
import { GraphicsCompletionProvider } from './graphics';
import { AttackCompletionProvider } from './attack';
import { TurretCompletionProvider } from './turret';
import { ProjectileCompletionProvider } from './projectile';
import { MovementCompletionProvider } from './movement';
import { AiCompletionProvider } from './ai';
import { LegArmCompletionProvider } from './leg_arm';
import { AttachmentCompletionProvider } from './attachment';
import { ActionCompletionProvider } from './action';
import { EffectCompletionProvider } from './effect';
import { AnimationCompletionProvider } from './animation';

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
		{ language: 'ini' }, 
		new IniSectionSymbolProvider()
	);

	// 注册core节的代码补全提供者
	const coreCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new CoreCompletionProvider(),
		':'
	);

	// 注册canBuild节的代码补全提供者
	const canBuildCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new CanBuildCompletionProvider(),
		':'
	);

	// 注册graphics节的代码补全提供者
	const graphicsCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new GraphicsCompletionProvider(),
		':'
	);

	// 注册attack节的代码补全提供者
	const attackCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new AttackCompletionProvider(),
		':'
	);

	// 注册turret节的代码补全提供者
	const turretCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new TurretCompletionProvider(),
		':'
	);

	// 注册projectile节的代码补全提供者
	const projectileCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new ProjectileCompletionProvider(),
		':'
	);

	// 注册movement节的代码补全提供者
	const movementCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new MovementCompletionProvider(),
		':'
	);

	// 注册ai节的代码补全提供者
	const aiCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new AiCompletionProvider(),
		':'
	);

	// 注册leg_arm节的代码补全提供者
	const legArmCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new LegArmCompletionProvider(),
		':'
	);

	// 注册attachment节的代码补全提供者
	const attachmentCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new AttachmentCompletionProvider(),
		':'
	);

	// 注册action节的代码补全提供者
	const actionCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new ActionCompletionProvider(),
		':'
	);

	// 注册effect节的代码补全提供者
	const effectCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new EffectCompletionProvider(),
		':'
	);

	// 注册animation节的代码补全提供者
	const animationCompletion = vscode.languages.registerCompletionItemProvider(
		{ language: 'ini' },
		new AnimationCompletionProvider(),
		':'
	);

	context.subscriptions.push(disposable);
	context.subscriptions.push(sectionParser);
	context.subscriptions.push(coreCompletion);
	context.subscriptions.push(canBuildCompletion);
	context.subscriptions.push(graphicsCompletion);
	context.subscriptions.push(attackCompletion);
	context.subscriptions.push(turretCompletion);
	context.subscriptions.push(projectileCompletion);
	context.subscriptions.push(movementCompletion);
	context.subscriptions.push(aiCompletion);
	context.subscriptions.push(legArmCompletion);
	context.subscriptions.push(attachmentCompletion);
	context.subscriptions.push(actionCompletion);
	context.subscriptions.push(effectCompletion);
	context.subscriptions.push(animationCompletion);
}

// This method is called when your extension is deactivated
export function deactivate() {}