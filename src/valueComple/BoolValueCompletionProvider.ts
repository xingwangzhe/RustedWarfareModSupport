import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';
import { getExtensionId } from '../extension';

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
        try {
            // 获取扩展路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                // 如果无法获取扩展，回退到硬编码的值
                return this.getFallbackBoolItems();
            }

            const extensionPath = extension.extensionPath;
            const boolFilePath = path.join(extensionPath, 'data', 'value', 'bool.json');
            
            if (!fs.existsSync(boolFilePath)) {
                // 如果文件不存在，回退到硬编码的值
                return this.getFallbackBoolItems();
            }

            // 读取bool.json文件
            const boolData = JSON.parse(fs.readFileSync(boolFilePath, 'utf8'));
            
            if (!boolData.data || !Array.isArray(boolData.data)) {
                return this.getFallbackBoolItems();
            }

            // 从数据文件中生成补全项
            const completionItems: vscode.CompletionItem[] = [];
            
            for (const item of boolData.data) {
                const completionItem = new vscode.CompletionItem(item.name, vscode.CompletionItemKind.Value);
                completionItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
                
                // 使用数据文件中的描述
                const descriptionKey = item.description;
                if (descriptionKey) {
                    completionItem.documentation = new vscode.MarkdownString(vscode.l10n.t(descriptionKey));
                }
                
                // 添加示例信息
                if (item.example) {
                    const exampleText = vscode.l10n.t(item.example);
                    if (completionItem.documentation instanceof vscode.MarkdownString) {
                        completionItem.documentation.appendMarkdown(`\n\n**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${exampleText}\n\`\`\``);
                    } else {
                        completionItem.documentation = new vscode.MarkdownString(`${completionItem.documentation}\n\n**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${exampleText}\n\`\`\``);
                    }
                }
                
                completionItems.push(completionItem);
            }
            
            return completionItems;
            
        } catch (error) {
            console.error('Error reading bool.json:', error);
            // 出错时回退到硬编码的值
            return this.getFallbackBoolItems();
        }
    }
    
    /**
     * 获取回退的布尔补全项（硬编码）
     * @returns 布尔类型补全项数组
     */
    private getFallbackBoolItems(): vscode.CompletionItem[] {
        const trueItem = new vscode.CompletionItem('true', vscode.CompletionItemKind.Value);
        trueItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        trueItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.true.description'));
        
        const falseItem = new vscode.CompletionItem('false', vscode.CompletionItemKind.Value);
        falseItem.detail = vscode.l10n.t('valuecompletionprovider.bool.detail');
        falseItem.documentation = new vscode.MarkdownString(vscode.l10n.t('valuecompletionprovider.false.description'));
        
        return [trueItem, falseItem];
    }
}