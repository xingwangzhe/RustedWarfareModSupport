import * as vscode from 'vscode';
import { t } from '../../../translationManager';
/**
 * 创建LogicBoolean关键字悬停信息
 * @param keyword 关键字
 * @returns 悬停信息
 */
export function createLogicBooleanKeywordHover(keyword: string): vscode.Hover | null {
    const hoverContent = new vscode.MarkdownString();

    console.log(`[DEBUG] LogicBooleanKeywordHover - Creating hover for keyword: ${keyword}`);

    switch (keyword) {
        case 'true':
            hoverContent.appendMarkdown(`**${t('valuecompletionprovider.bool.detail')}**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.true.description'));
            break;
        case 'false':
            hoverContent.appendMarkdown(`**${t('valuecompletionprovider.bool.detail')}**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.false.description'));
            break;
        case 'if':
            hoverContent.appendMarkdown(`**LogicBoolean Keyword**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.if.description'));
            break;
        case 'and':
            hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.and.description'));
            break;
        case 'or':
            hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.or.description'));
            break;
        case 'not':
            hoverContent.appendMarkdown(`**LogicBoolean Conditional**\n\n`);
            hoverContent.appendMarkdown(t('valuecompletionprovider.logicboolean.not.description'));
            break;
        default:
            console.log(`[DEBUG] LogicBooleanKeywordHover - Unknown keyword: ${keyword}, returning null`);
            return null;
    }

    console.log(`[DEBUG] LogicBooleanKeywordHover - Successfully created hover for: ${keyword}`);
    return new vscode.Hover(hoverContent);
}
