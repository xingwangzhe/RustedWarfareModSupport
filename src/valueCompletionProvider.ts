import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
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
        
        // 如果属性不存在，返回空
        if (!property) {
            return [];
        }
        
        // 根据属性类型提供相应的补全项
        if (property.type === 'bool') {
            return this.getBoolCompletionItems();
        } else if (property.type === 'spawnUnits') {
            // 检查光标是否在spawnUnits值的括号内
            if (this.isInsideSpawnUnitsParentheses(textBeforeCursor, lineText, position.character)) {
                return this.getSpawnUnitsParamCompletionItems();
            }
            
            // 否则提供基本格式示例
            return this.getSpawnUnitsCompletionItems();
        }
        
        return [];
    }
    
    /**
     * 检查光标是否在spawnUnits值的括号内
     * @param textBeforeCursor 光标前的文本
     * @param lineText 整行文本
     * @param cursorPosition 光标位置
     * @returns 是否在括号内
     */
    private isInsideSpawnUnitsParentheses(textBeforeCursor: string, lineText: string, cursorPosition: number): boolean {
        // 查找属性值开始位置（冒号后）
        const colonIndex = textBeforeCursor.lastIndexOf(':');
        if (colonIndex === -1) {
            return false;
        }
        
        // 从光标前的位置开始，反向遍历到:位置
        for (let i = cursorPosition - 1; i > colonIndex; i--) {
            if (lineText[i] === '(') {
                console.log('在光标内');
                return true;
            } else if (lineText[i] === ')') {
                return false;
            }
        }
        
        // 如果光标位置处有未闭合的括号，则在括号内
        return false;
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
    
    /**
     * 获取spawnUnits基本格式补全项
     * @returns spawnUnits基本格式补全项数组
     */
    private getSpawnUnitsCompletionItems(): vscode.CompletionItem[] {
        try {
            // 读取spawnUnits的值定义文件
            const valuePath = path.join(__dirname, '..', 'data', 'value', `spawnUnits.json`);
            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));
            
            // 创建一个示例补全项
            const exampleItem = new vscode.CompletionItem(valueData.example.split(':')[1].trim(), vscode.CompletionItemKind.Value);
            exampleItem.detail = vscode.l10n.t('valuecompletionprovider.spawnunits.example.detail');
            exampleItem.documentation = new vscode.MarkdownString(
                vscode.l10n.t('valuecompletionprovider.spawnunits.example.documentation', 'spawnUnits')
            );
            
            return [exampleItem];
        } catch (error) {
            console.error(`Error reading spawnUnits.json:`, error);
            return [];
        }
    }
    
    /**
     * 获取spawnUnits参数补全项（用于括号内）
     * @returns spawnUnits参数补全项数组
     */
    private getSpawnUnitsParamCompletionItems(): vscode.CompletionItem[] {
        try {
            // 读取spawnUnits的值定义文件
            const valuePath = path.join(__dirname, '..', 'data', 'value', `spawnUnits.json`);
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
            console.error(`Error reading spawnUnits.json:`, error);
            return [];
        }
    }
}