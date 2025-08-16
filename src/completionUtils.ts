import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 为补全项生成格式化的文档信息
 * @param property 属性对象
 * @returns 格式化的Markdown文档字符串
 */
export function generateCompletionDocumentation(property: any): vscode.MarkdownString {
    const doc = new vscode.MarkdownString();
    addDocumentField(doc, 'name', property.name);
    addDocumentField(doc, 'type', `\`${property.type}\``, true);
    addDocumentField(doc, 'version', property.version);
    addDocumentField(doc, 'description', property.description, true);
    
    if (property.isOutdated) {
        doc.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
    }
    
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${property.example}\n\`\`\``);
    return doc;
}

/**
 * 向文档中添加字段
 * @param doc 文档对象
 * @param fieldKey 字段键（用于国际化）
 * @param value 字段值
 * @param isTranslatedValue 值是否需要翻译
 */
function addDocumentField(doc: vscode.MarkdownString, fieldKey: string, value: string, isTranslatedValue: boolean = false): void {
    const translatedValue = isTranslatedValue ? vscode.l10n.t(value) : value;
    doc.appendMarkdown(`**${vscode.l10n.t(`completionprovider.${fieldKey}`)}:** ${translatedValue}\n\n`);
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
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 如果不在目标节内，返回空数组
        if (!this.isInsideSection(document, position)) {
            return [];
        }

        // 为每个属性创建补全项
        return this.getProperties().map(property => {
            const item = new vscode.CompletionItem(
                property.name,
                vscode.CompletionItemKind.Property
            );
            
            // 设置补全项的详细信息和文档
            item.detail = `${property.type} - ${property.version}`;
            item.documentation = generateCompletionDocumentation(property);
            
            // 设置插入文本格式
            const exampleValue = property.example ? extractExampleValue(property.example) : '';
            item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
            
            return item;
        });
    }

    private isInsideSection(document: vscode.TextDocument, position: vscode.Position): boolean {
        let insideSection = false;
        for (let i = 0; i < position.line; i++) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                const sectionName = line.substring(1, line.length - 1);
                insideSection = this.sectionMatcher(sectionName);
            }
        }
        return insideSection;
    }

    private getProperties(): any[] {
        try {
            const sectionPath = path.join(__dirname, '..', 'data', 'sections', `${this.sectionName}.json`);
            const sectionData = JSON.parse(fs.readFileSync(sectionPath, 'utf8'));
            return sectionData.data || [];
        } catch (error) {
            console.error(`Error reading ${this.sectionName}.json:`, error);
            return [];
        }
    }
}

/**
 * 从示例字符串中提取值部分
 * @param example 示例字符串
 * @returns 提取的值
 */
function extractExampleValue(example: string): string {
    return example.split(':')[1]?.trim() || '';
}

/**
 * 创建一个简单的节匹配器函数
 * @param sectionName 节名称
 * @returns 匹配器函数
 */
export function createSimpleSectionMatcher(sectionName: string): (name: string) => boolean {
    return (name: string) => name === sectionName;
}

/**
 * 创建一个前缀匹配器函数
 * @param prefix 前缀
 * @returns 匹配器函数
 */
export function createPrefixSectionMatcher(prefix: string): (name: string) => boolean {
    return (name: string) => name.startsWith(prefix);
}

/**
 * 创建一个正则表达式匹配器函数
 * @param pattern 正则表达式模式
 * @returns 匹配器函数
 */
export function createRegexSectionMatcher(pattern: RegExp): (name: string) => boolean {
    return (name: string) => pattern.test(name);
}