import * as vscode from 'vscode';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';

/**
 * 布尔值补全提供者类
 * 用于提供布尔类型属性的补全建议
 */
export class BoolValueCompletionProvider extends BaseValueCompletionProvider {
    protected provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 根据属性类型提供相应的补全项
        if (property.type === 'bool') {
            return this.getBoolCompletionItems();
        }
        
        return [];
    }
    
    /**
     * 获取布尔类型补全项
     * @returns 布尔类型补全项数组
     */
    private getBoolCompletionItems(): vscode.CompletionItem[] {
        const trueItem = new vscode.CompletionItem('true', vscode.CompletionItemKind.Value);
        trueItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        trueItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.true.description'));
        
        const falseItem = new vscode.CompletionItem('false', vscode.CompletionItemKind.Value);
        falseItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        falseItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.false.description'));
        
        return [trueItem, falseItem];
    }
}