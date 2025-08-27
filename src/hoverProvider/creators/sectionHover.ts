import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 节悬停创建器
 * 负责创建节的悬停信息
 */
export class SectionHoverCreator {
    /**
     * 创建节悬停信息
     * @param sectionName 节名称
     * @returns 悬停信息
     */
    public static createSectionHover(sectionName: string): vscode.Hover | null {
        try {
            // 读取节数据
            const sectionsPath = path.join(__dirname, '..', '..', 'data', 'sections.json');
            const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));

            // 查找匹配的节
            const section = sectionsData.data.find((s: any) => s.name === sectionName);
            if (!section) {
                return null;
            }

            const hoverContent = new vscode.MarkdownString();
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(section.name)}\n\n`);
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(section.description)}`);

            return new vscode.Hover(hoverContent);
        } catch (error) {
            console.error('Error reading sections.json:', error);
            return null;
        }
    }
}
