import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getExtensionId } from '../../extension';
import { t } from '../../translationManager';
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
            // 获取扩展的实际路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                console.error('Cannot find extension');
                return null;
            }

            const extensionPath = extension.extensionPath;

            // 读取节数据
            const sectionsPath = path.join(extensionPath, 'data', 'sections.json');
            const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));

            // 查找匹配的节
            const section = sectionsData.data.find((s: any) => s.name === sectionName);
            if (!section) {
                return null;
            }

            const hoverContent = new vscode.MarkdownString();
            hoverContent.appendMarkdown(`**${t('completionprovider.name')}:** ${t(section.name)}\n\n`);
            hoverContent.appendMarkdown(`**${t('completionprovider.description')}:** ${t(section.description)}`);

            return new vscode.Hover(hoverContent);
        } catch (error) {
            console.error('Error reading sections.json:', error);
            return null;
        }
    }
}
