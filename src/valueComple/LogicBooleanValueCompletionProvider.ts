import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';

/**
 * LogicBoolean值补全提供者类
 * 用于提供LogicBoolean类型属性的补全建议
 */
export class LogicBooleanValueCompletionProvider extends BaseValueCompletionProvider {
    protected provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 根据属性类型提供相应的补全项
        if (property.type === 'LogicBoolean') {
            return this.getLogicBooleanCompletionItems();
        }
        
        return [];
    }
    
    /**
     * 获取LogicBoolean类型补全项
     * @returns LogicBoolean类型补全项数组
     */
    private getLogicBooleanCompletionItems(): vscode.CompletionItem[] {
        try {
            // 读取logicBoolean节定义文件
            const logicBooleanPath = path.join(__dirname, '..', 'data', 'sections', 'logicBoolean.json');
            const logicBooleanData = JSON.parse(fs.readFileSync(logicBooleanPath, 'utf8'));
            
            // 创建示例补全项
            const exampleItem = new vscode.CompletionItem('if self.hp(lessThan=100)', vscode.CompletionItemKind.Value);
            exampleItem.detail = vscode.l10n.t('valuecompletionprovider.logicboolean.example.detail');
            exampleItem.documentation = new vscode.MarkdownString(
                vscode.l10n.t('valuecompletionprovider.logicboolean.example.documentation')
            );
            
            return [exampleItem];
        } catch (error) {
            console.error('Error reading logicBoolean definition file:', error);
            // 如果无法读取文件，返回默认示例
            const exampleItem = new vscode.CompletionItem('if self.hp(lessThan=100)', vscode.CompletionItemKind.Value);
            exampleItem.detail = vscode.l10n.t('valuecompletionprovider.logicboolean.example.detail');
            exampleItem.documentation = new vscode.MarkdownString(
                vscode.l10n.t('valuecompletionprovider.logicboolean.example.documentation')
            );
            return [exampleItem];
        }
    }
}