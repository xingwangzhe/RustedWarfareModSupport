import * as vscode from 'vscode';

/**
 * 为补全项生成格式化的文档信息
 * @param property 属性对象
 * @returns 格式化的Markdown文档字符串
 */
export function generateCompletionDocumentation(property: any): vscode.MarkdownString {
    const doc = new vscode.MarkdownString();
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${property.name}\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.type')}:** \`${property.type}\`\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.version')}:** ${property.version}\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(property.description)}\n\n`);
    if (property.isOutdated) {
        doc.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
    }
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${property.example}\n\`\`\``);
    return doc;
}