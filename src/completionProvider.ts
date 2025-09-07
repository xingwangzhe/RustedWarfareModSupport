import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { extractExampleValue, getSectionProperties, isInsideSection, isAtValidLineStart, hasColonInLine } from './dataProcessor';
import { isBaseSection } from './common/matchRules';
import { getExtensionId } from './extension';
import { t } from './translationManager';
import { loadSectionsData } from './common/dataLoader';

/**
 * 为补全项生成格式化的文档信息
 * @param property 属性对象
 * @returns 格式化的Markdown文档字符串
 */
function generateCompletionDocumentation(property: any): vscode.MarkdownString {
    const doc = new vscode.MarkdownString();

    // 先翻译各字段
    const nameLabel = t('completionprovider.name');
    const typeLabel = t('completionprovider.type');
    const versionLabel = t('completionprovider.version');
    const descriptionLabel = t('completionprovider.description');
    const isOutdatedLabel = t('completionprovider.isOutdated');
    const exampleLabel = t('completionprovider.example');

    const nameValue = t(property.name);
    const typeValue = property.type;
    const versionValue = property.version ? t(property.version) : '';
    const descriptionValue = property.description ? t(property.description) : '';
    const exampleValue = property.example ? t(property.example) : '';

    // 添加名称字段
    doc.appendMarkdown(`**${nameLabel}:** ${nameValue}\n\n`);

    // 添加类型字段
    doc.appendMarkdown(`**${typeLabel}:** \`${typeValue}\`\n\n`);

    // 添加版本字段
    if (property.version) {
        doc.appendMarkdown(`**${versionLabel}:** ${versionValue}\n\n`);
    }

    // 添加描述字段
    if (property.description) {
        doc.appendMarkdown(`**${descriptionLabel}:** ${descriptionValue}\n\n`);
    }

    // 添加过时标记
    if (property.isOutdated) {
        doc.appendMarkdown(`⚠️ **${isOutdatedLabel}:** true\n\n`);
    }

    // 添加示例字段
    if (property.example) {
        doc.appendMarkdown(`**${exampleLabel}:**\n\`\`\`ini\n${exampleValue}\n\`\`\``);
    }

    return doc;
}

/**
 * 创建补全项数组
 * @param sectionName 节名称
 * @param properties 属性数组
 * @returns 补全项数组
 */
function createCompletionItems(sectionName: string, properties: any[]): vscode.CompletionItem[] {
    return properties.map(property => {
        const item = new vscode.CompletionItem(
            property.name,
            vscode.CompletionItemKind.Property
        );
        
        // 设置补全项的详细信息和文档
        item.detail = property.type ? `${property.type} - ${property.version || ''}`.trim() : property.version || '';
        item.documentation = generateCompletionDocumentation(property);
        
        // 设置插入文本格式
        const exampleValue = property.example ? extractExampleValue(property.example) : '';
        item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
        
        return item;
    });
}

/**
 * 创建节名称补全项数组
 * @returns 补全项数组
 */
function createSectionCompletionItems(): vscode.CompletionItem[] {
    try {
        // 读取节数据
        const sectionsData = loadSectionsData();
        
        // 为每个节创建补全项
        return sectionsData.map((section: any) => {
            const item = new vscode.CompletionItem(
                section.name,
                vscode.CompletionItemKind.Module
            );
            
            // 设置文档信息
            item.documentation = new vscode.MarkdownString(
                `**${t('completionprovider.description')}:** ${t(section.description)}`
            );
            
            // 设置插入文本，包含中括号
            item.insertText = new vscode.SnippetString(`${section.name}`);
            
            // 设置排序优先级
            item.sortText = '0';
            
            return item;
        });
    } catch (error) {
        console.error('Error reading sections.json:', error);
        return [];
    }
}

/**
 * 节名称补全提供者类
 */
export class SectionNameCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 获取光标所在行的文本
        const lineText = document.lineAt(position.line).text;

        // 获取光标前的文本
        const textBeforeCursor = lineText.substring(0, position.character);

        // 检查光标前是否有[但没有匹配的]
        const lastOpenBracketIndex = textBeforeCursor.lastIndexOf('[');
        const lastCloseBracketIndex = textBeforeCursor.lastIndexOf(']');

        // 只有当[在行首（前面只有空白字符）且未闭合时，才提供节名称补全
        if (lastOpenBracketIndex !== -1 &&
            lastOpenBracketIndex > lastCloseBracketIndex &&
            /^\s*\[$/.test(textBeforeCursor)) {
            return createSectionCompletionItems();
        }

        return [];
    }
}

/**
 * 通用的节补全提供者类
 */
export class GenericCompletionProvider implements vscode.CompletionItemProvider {
    private sectionName: string;
    private sectionMatcher: (sectionName: string) => boolean;

    constructor(sectionName: string, sectionMatcher?: (sectionName: string) => boolean) {
        this.sectionName = sectionName;
        this.sectionMatcher = sectionMatcher || ((name: string) => name === sectionName);
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 如果不在目标节内，返回空数组
        if (!isInsideSection(document, position, this.sectionMatcher)) {
            return [];
        }

        // 检查是否在有效的行首位置（允许输入属性名）
        if (!isAtValidLineStart(document, position)) {
            return [];
        }
        
        // 如果行中已经包含冒号，则不提供属性补全（为值补全保留空间）
        if (hasColonInLine(document, position)) {
            return [];
        }

        // 获取属性并创建补全项
        const properties = getSectionProperties(this.sectionName);
        return createCompletionItems(this.sectionName, properties);
    }
}