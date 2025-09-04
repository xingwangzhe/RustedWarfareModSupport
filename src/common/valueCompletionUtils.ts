import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getExtensionId } from '../extension';
import { t } from '../translationManager';

/**
 * 从数据文件创建补全项的通用函数
 * @param fileName 数据文件名（不含扩展名）
 * @param kind 补全项类型
 * @param detailKey 详情翻译键
 * @param options 额外选项
 * @returns 补全项数组
 */
export function createCompletionItemsFromDataFile(
    fileName: string,
    kind: vscode.CompletionItemKind,
    detailKey: string,
    options?: {
        useNameAsInsertText?: boolean;
        customDocumentation?: (item: any) => vscode.MarkdownString;
    }
): vscode.CompletionItem[] {
    try {
        // 获取扩展路径
        const extension = vscode.extensions.getExtension(getExtensionId());
        if (!extension) {
            console.error(`Cannot find extension for ${fileName}`);
            return [];
        }

        const extensionPath = extension.extensionPath;
        const filePath = path.join(extensionPath, 'data', 'value', `${fileName}.json`);

        if (!fs.existsSync(filePath)) {
            console.error(`Data file not found: ${filePath}`);
            return [];
        }

        // 读取数据文件
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        if (!data.data || !Array.isArray(data.data)) {
            console.error(`Invalid data format in ${filePath}`);
            return [];
        }

        // 从数据文件中生成补全项
        const completionItems: vscode.CompletionItem[] = [];

        for (const item of data.data) {
            const completionItem = new vscode.CompletionItem(item.name, kind);
            completionItem.detail = t(detailKey);

            // 使用自定义文档生成器或默认
            if (options?.customDocumentation) {
                completionItem.documentation = options.customDocumentation(item);
            } else {
                // 使用数据文件中的描述
                const descriptionKey = item.description;
                if (descriptionKey) {
                    completionItem.documentation = new vscode.MarkdownString(t(descriptionKey));
                }

                // 添加示例信息
                if (item.example) {
                    const exampleText = t(item.example);
                    if (completionItem.documentation instanceof vscode.MarkdownString) {
                        completionItem.documentation.appendMarkdown(`\n\n**${t('completionprovider.example')}:**\n\`\`\`ini\n${exampleText}\n\`\`\``);
                    } else {
                        completionItem.documentation = new vscode.MarkdownString(`${completionItem.documentation}\n\n**${t('completionprovider.example')}:**\n\`\`\`ini\n${exampleText}\n\`\`\``);
                    }
                }
            }

            // 设置插入文本
            if (options?.useNameAsInsertText) {
                completionItem.insertText = new vscode.SnippetString(item.name);
            }

            completionItems.push(completionItem);
        }

        return completionItems;

    } catch (error) {
        console.error(`Error reading ${fileName}.json:`, error);
        return [];
    }
}

/**
 * 获取布尔类型补全项的回退函数
 * @returns 布尔类型补全项数组
 */
export function getFallbackBoolItems(): vscode.CompletionItem[] {
    const trueItem = new vscode.CompletionItem('true', vscode.CompletionItemKind.Value);
    trueItem.detail = t('valuecompletionprovider.bool.detail');
    trueItem.documentation = new vscode.MarkdownString(t('valuecompletionprovider.true.description'));

    const falseItem = new vscode.CompletionItem('false', vscode.CompletionItemKind.Value);
    falseItem.detail = t('valuecompletionprovider.bool.detail');
    falseItem.documentation = new vscode.MarkdownString(t('valuecompletionprovider.false.description'));

    return [trueItem, falseItem];
}
