import * as vscode from 'vscode';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';
import { createCompletionItemsFromDataFile } from '../common/valueCompletionUtils';
import { t } from '../translationManager';

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

        return createCompletionItemsFromDataFile('movementType', vscode.CompletionItemKind.Value, 'valuecompletionprovider.movementtype.detail', {
            customDocumentation: (item: any) => new vscode.MarkdownString(t(item.description))
        });
    }
}
