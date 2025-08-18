import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';

/**
 * 单位生成类属性补全提供者类
 * 用于提供spawnUnits、produceUnits等属性的补全建议
 */
export class UnitSpawnCompletionProvider extends BaseValueCompletionProvider {
    // 支持单位生成语法的属性列表
    private readonly unitSpawnProperties = [
        'spawnUnits',
        'spawnUnit',
        'produceUnits',
        'addUnitsIntoTransport',
        'attachments_addNewUnits'
    ];

    protected provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 检查是否为单位生成类属性
        if (this.unitSpawnProperties.includes(property.name)) {
            const lineText = document.lineAt(position.line).text;
            const textBeforeCursor = lineText.substring(0, position.character);
            
            // 检查光标是否在值的括号内
            const insideParentheses = this.isInsideParentheses(textBeforeCursor, lineText, position.character);
            if (insideParentheses) {
                // 提供参数补全项
                return this.getUnitSpawnParamCompletionItems(property.name);
            }
            
            // 否则提供基本格式示例
            return this.getUnitSpawnCompletionItems(property.name);
        }
        
        return [];
    }
    
    /**
     * 检查光标是否在属性值的括号内
     * @param textBeforeCursor 光标前的文本
     * @param lineText 整行文本
     * @param cursorPosition 光标位置
     * @returns 是否在括号内
     */
    private isInsideParentheses(textBeforeCursor: string, lineText: string, cursorPosition: number): boolean {
        // 查找属性值开始位置（冒号后）
        const colonIndex = textBeforeCursor.lastIndexOf(':');
        if (colonIndex === -1) {
            return false;
        }
        
        
        // 从光标前的位置开始，反向遍历到:位置
        for (let i = cursorPosition - 1; i > colonIndex; i--) {
            if (lineText[i] === '(') {
                
                return true;
            } else if (lineText[i] === ')') {
                
                return false;
            }
        }
        
        // 如果光标位置处有未闭合的括号，则在括号内
        
        return false;
    }
    
    /**
     * 获取单位生成基本格式补全项
     * @param propertyName 属性名称
     * @returns 单位生成基本格式补全项数组
     */
    private getUnitSpawnCompletionItems(propertyName: string): vscode.CompletionItem[] {
        try {
            // 读取对应属性的值定义文件
            const valueType = propertyName === 'spawnProjectiles' || propertyName === 'spawnProjectile' ? 'spawnProjectiles' : 'spawnUnits';
            const valuePath = path.join(__dirname, '..', 'data', 'value', `${valueType}.json`);
            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));
            
            // 创建一个示例补全项
            const exampleItem = new vscode.CompletionItem(valueData.example.split(':')[1].trim(), vscode.CompletionItemKind.Value);
            exampleItem.detail = vscode.l10n.t('valuecompletionprovider.spawnunits.example.detail');
            exampleItem.documentation = new vscode.MarkdownString(
                vscode.l10n.t('valuecompletionprovider.spawnunits.example.documentation', propertyName)
            );
            
            return [exampleItem];
        } catch (error) {
            
            return [];
        }
    }
    
    /**
     * 获取单位生成参数补全项（用于括号内）
     * @param propertyName 属性名称
     * @returns 单位生成参数补全项数组
     */
    private getUnitSpawnParamCompletionItems(propertyName: string): vscode.CompletionItem[] {
        try {
            // 读取对应属性的值定义文件
            const valueType = propertyName === 'spawnProjectiles' || propertyName === 'spawnProjectile' ? 'spawnProjectiles' : 'spawnUnits';
            const valuePath = path.join(__dirname, '..', 'data', 'value', `${valueType}.json`);
            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));
            
            // 为每个参数创建补全项
            const paramItems: vscode.CompletionItem[] = [];
            if (valueData.data && Array.isArray(valueData.data)) {
                for (const param of valueData.data) {
                    // 创建参数补全项，格式为 paramName=
                    const paramItem = new vscode.CompletionItem(`${param.name}=`, vscode.CompletionItemKind.Property);
                    paramItem.detail = param.type;
                    paramItem.documentation = new vscode.MarkdownString(
                        `${vscode.l10n.t(param.description)}\n\n*${vscode.l10n.t('valuecompletionprovider.spawnunits.version')}: ${param.version}*\n\n\`\`\`ini\n${vscode.l10n.t(param.example)}\n\`\`\``
                    );
                    
                    // 根据参数类型设置插入文本
                    switch (param.type) {
                        case 'bool':
                            // 为布尔类型提供true/false选项
                            paramItem.insertText = new vscode.SnippetString(`${param.name}=\${1|true,false|}`);
                            break;
                        case 'float':
                        case 'int':
                            // 为数值类型提供数字占位符
                            paramItem.insertText = new vscode.SnippetString(`${param.name}=\${1:0}`);
                            break;
                        default:
                            // 其他类型提供通用占位符
                            paramItem.insertText = new vscode.SnippetString(`${param.name}=\${1}`);
                    }
                    
                    paramItems.push(paramItem);
                }
            }
            
            return paramItems;
        } catch (error) {
            console.error(`Error reading value definition file:`, error);
            return [];
        }
    }
}