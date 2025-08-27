import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getExtensionId } from '../../../extension';

/**
 * 创建LogicBoolean函数悬停信息
 * @param func 函数名
 * @returns 悬停信息
 */
export function createLogicBooleanFunctionHover(func: string): vscode.Hover | null {
    // 从logicboolean.json加载数据
    try {
        // 获取扩展的实际路径
        const extension = vscode.extensions.getExtension(getExtensionId());
        if (!extension) {
            console.error('Cannot find extension');
            return null;
        }

        const extensionPath = extension.extensionPath;
        const valuePath = path.join(extensionPath, 'data', 'value', 'logicboolean.json');
        const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));

        // 查找匹配的函数
        const funcBase = func.split('(')[0]; // 获取函数名，忽略参数部分

        for (const item of valueData.data) {
            if (item.name === funcBase) {
                const hoverContent = new vscode.MarkdownString();
                hoverContent.appendMarkdown(`**LogicBoolean Function**\n\n`);
                hoverContent.appendMarkdown(`${vscode.l10n.t(item.description)}\n\n`);

                if (item.version) {
                    hoverContent.appendMarkdown(`*Version: ${item.version}*\n\n`);
                }

                if (item.example) {
                    hoverContent.appendMarkdown(`\`\`\`ini\n${vscode.l10n.t(item.example)}\n\`\`\``);
                }

                return new vscode.Hover(hoverContent);
            }
        }
    } catch (error) {
        console.error('Error reading logicboolean.json:', error);
    }

    // 如果没有找到特定的函数，显示通用的LogicBoolean信息
    const hoverContent = new vscode.MarkdownString();
    hoverContent.appendMarkdown(`**LogicBoolean**\n\n`);
    hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.example.documentation'));
    return new vscode.Hover(hoverContent);
}
