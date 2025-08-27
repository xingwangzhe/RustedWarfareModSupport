import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';
import { getExtensionId } from '../extension';

export class MovementTypeValueCompletionProvider extends BaseValueCompletionProvider {
    protected provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 支持 movementType 属性或 type 为 movementTypes 的情况
        if (property.name !== 'movementType' && property.type !== 'movementTypes') {
            return [];
        }

        try {
            // 获取扩展的实际路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                console.error('Cannot find extension');
                return [];
            }

            const extensionPath = extension.extensionPath;
            const valuePath = path.join(extensionPath, 'data', 'value', `movementType.json`);
            if (!fs.existsSync(valuePath)) {
                return [];
            }

            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));
            const items: vscode.CompletionItem[] = [];
            if (valueData.data && Array.isArray(valueData.data)) {
                for (const v of valueData.data) {
                    const it = new vscode.CompletionItem(v.name, vscode.CompletionItemKind.Value);
                    it.detail = v.version || '';
                    it.documentation = new vscode.MarkdownString(vscode.l10n.t(v.description));
                    items.push(it);
                }
            }

            return items;
        } catch (error) {
            console.error('MovementTypeValueCompletionProvider error:', error);
            return [];
        }
    }
}
