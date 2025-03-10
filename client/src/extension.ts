/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
			// 注册服务器支持的文件类型
			documentSelector: [
				{ scheme: 'file', language: 'ini' },  // ini文件
				{ scheme: 'file', language: 'plaintext' }, // txt文件
				{ 
					scheme: 'file',
					pattern: '**/*.{ini,txt,template}' // 通过文件扩展名匹配
				}
			],
			synchronize: {
				// 监听这些文件的变化
				fileEvents: workspace.createFileSystemWatcher('**/*.{ini,txt,template}')
			},
			markdown: {
				isTrusted: true, // 允许可信的markdown内容
				supportHtml: true // 支持hover时显示HTML
			}
		};

	// Create the language client and start the client.
	client = new LanguageClient(
		'rustedWarfareMod', // 修改为更合适的ID
		'Rusted Warfare Mod Support', // 修改为更友好的名称
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
