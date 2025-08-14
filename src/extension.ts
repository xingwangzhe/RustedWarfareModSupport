// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { IniSectionSymbolProvider } from './Section';
import { CoreCompletionProvider } from './core';
import { CanBuildCompletionProvider } from './canBuild';
import { GraphicsCompletionProvider } from './graphics';
import { AttackCompletionProvider } from './attack';

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

	context.subscriptions.push(disposable);
	context.subscriptions.push(sectionParser);
	context.subscriptions.push(coreCompletion);
	context.subscriptions.push(canBuildCompletion);
	context.subscriptions.push(graphicsCompletion);
	context.subscriptions.push(attackCompletion);
}

// This method is called when your extension is deactivated
export function deactivate() {}