import * as vscode from 'vscode';
import { getSectionProperties, isInsideSection } from './dataProcessor';

/**
 * 值补全提供者类
 * 用于在属性值位置提供补全建议
 */
export class ValueCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 检查当前位置是否在属性值位置（冒号后面）
        const lineText = document.lineAt(position.line).text;
        const textBeforeCursor = lineText.substring(0, position.character);
        
        // 查找冒号位置
        const colonIndex = textBeforeCursor.lastIndexOf(':');
        if (colonIndex === -1) {
            return [];
        }
        
        // 提取属性名称
        const propertyText = textBeforeCursor.substring(0, colonIndex).trim();
        if (!propertyText) {
            return [];
        }
        
        // 确定当前所在的节
        const currentSection = this.getCurrentSection(document, position);
        if (!currentSection) {
            return [];
        }
        
        // 获取节的属性数据
        const properties = getSectionProperties(currentSection);
        const property = properties.find((p: any) => p.name === propertyText);
        
        // 如果属性不存在或类型不是bool，返回空
        if (!property || property.type !== 'bool') {
            return [];
        }
        
        // 为bool类型创建补全项
        const trueItem = new vscode.CompletionItem('true', vscode.CompletionItemKind.Value);
        trueItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        trueItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.true.description'));
        
        const falseItem = new vscode.CompletionItem('false', vscode.CompletionItemKind.Value);
        falseItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        falseItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.false.description'));
        
        return [trueItem, falseItem];
    }
    
    /**
     * 获取当前位置所在的节名称
     * @param document 文档对象
     * @param position 位置对象
     * @returns 节名称，如果未找到则返回null
     */
    private getCurrentSection(document: vscode.TextDocument, position: vscode.Position): string | null {
        for (let i = position.line; i >= 0; i--) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                return line.substring(1, line.length - 1);
            }
        }
        return null;
    }
}