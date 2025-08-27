import * as vscode from 'vscode';

/**
 * 创建LogicBoolean关键字悬停信息
 * @param keyword 关键字
 * @returns 悬停信息
 */
export function createLogicBooleanKeywordHover(keyword: string): vscode.Hover | null {
    const hoverContent = new vscode.MarkdownString();

    switch (keyword) {
        case 'true':
            hoverContent.appendMarkdown(`**${vscode.l10n.t('valuecompletionprovider.bool.detail')}**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.true.description'));
            break;
        case 'false':
            hoverContent.appendMarkdown(`**${vscode.l10n.t('valuecompletionprovider.bool.detail')}**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.false.description'));
            break;
        case 'if':
            hoverContent.appendMarkdown(`**LogicBoolean Keyword**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.if.description'));
            break;
        case 'and':
            hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.and.description'));
            break;
        case 'or':
            hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.or.description'));
            break;
        case 'not':
            hoverContent.appendMarkdown(`**LogicBoolean Conditional**\n\n`);
            hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.not.description'));
            break;
        default:
            return null;
    }

    return new vscode.Hover(hoverContent);
}
