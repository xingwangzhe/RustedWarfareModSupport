import * as vscode from 'vscode';
import { getSectionProperties } from '../dataProcessor';

/**
 * 基础值补全提供者抽象类
 * 用于在属性值位置提供补全建议
 */
export abstract class BaseValueCompletionProvider implements vscode.CompletionItemProvider {
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
        let propertyText = textBeforeCursor.substring(0, colonIndex).trim();
        
        // 处理可能的前缀，如 autoTrigger:
        const prefixPattern = /^([a-zA-Z0-9]+:\s*)+/;  // 匹配类似 "prefix1: prefix2: " 的结构
        propertyText = propertyText.replace(prefixPattern, '').trim();
        
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
        // 调用子类的具体实现
        return this.provideValueCompletionItems(document, position, property);
    }
    
    /**
     * 抽象方法，由子类实现具体的补全逻辑
     */
    protected abstract provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>;
    
    /**
     * 获取当前位置所在的节名称
     * @param document 文档对象
     * @param position 位置对象
     * @returns 节名称，如果未找到则返回null
     */
    protected getCurrentSection(document: vscode.TextDocument, position: vscode.Position): string | null {
        let stop = false;
        for (let i = position.line; i >= 0; i--) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                const sectionName = line.substring(1, line.length - 1);
                stop = true;
                return sectionName;
            }
            if (stop) {break;}
        }
        return null;
    }
}