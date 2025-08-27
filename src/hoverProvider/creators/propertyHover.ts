import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { HoverUtils } from '../utils';

/**
 * 属性悬停创建器
 * 负责创建属性的悬停信息
 */
export class PropertyHoverCreator {
    /**
     * 创建属性悬停信息
     * @param sectionName 节名称
     * @param propertyName 属性名称
     * @param originalName 原始属性名称（用于语言键）
     * @returns 悬停信息
     */
    public static createPropertyHover(sectionName: string, propertyName: string, originalName?: string): vscode.Hover | null {
        // 如果是语言键，使用原始名称查找属性信息
        const lookupName = originalName || propertyName;

        try {
            // 获取节的基本名称
            const baseSectionName = HoverUtils.getBaseSectionName(sectionName);

            // 从当前文件位置向上查找项目根目录
            // src/hoverProvider/creators/propertyHover.ts -> src/hoverProvider/creators/ -> src/hoverProvider/ -> src/ -> 项目根目录
            const currentDir = path.dirname(__filename);
            const projectRoot = path.join(currentDir, '..', '..', '..');

            const sectionPath = path.join(projectRoot, 'data', 'sections', `${baseSectionName}.json`);

            // 检查是否存在语言特定的文件
            const localizedPath = path.join(projectRoot, 'data', 'sections', vscode.env.language, `${baseSectionName}.json`);
            const finalPath = fs.existsSync(localizedPath) ? localizedPath : sectionPath;

            if (!fs.existsSync(finalPath)) {
                console.warn(`Section file not found: ${finalPath}`);
                return null;
            }

            const sectionData = JSON.parse(fs.readFileSync(finalPath, 'utf8'));
            const property = sectionData.data.find((p: any) => p.name === lookupName);

            if (!property) {
                return null;
            }

            // 创建悬停内容
            const hoverContent = new vscode.MarkdownString();

            // 添加名称字段
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(property.name)}\n\n`);

            // 如果是语言键，添加语言信息
            if (originalName) {
                const languageKeyInfo = PropertyHoverCreator.parseLanguageKey(propertyName);
                if (languageKeyInfo) {
                    hoverContent.appendMarkdown(`**${vscode.l10n.t('Language')}:** ${languageKeyInfo.languageCode.toUpperCase()} (${vscode.l10n.t('ISO 639-1')})\n\n`);
                }
            }

            // 类型字段将由下方的增强显示（带图标）统一插入，避免重复

            // 添加版本字段
            if (property.version) {
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.version')}:** ${property.version}\n\n`);
            }

            // 添加描述字段
            if (property.description) {
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(property.description)}\n\n`);
            }

            // 添加过时标记
            if (property.isOutdated) {
                hoverContent.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
            }

            // 添加示例字段
            if (property.example) {
                // 在代码块后追加空行，防止后续 Markdown 元素与代码块闭合符粘连
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${vscode.l10n.t(property.example)}\n\`\`\`\n\n`);
            }
                const typeLabel = vscode.l10n.t('completionprovider.type');
                let typeDisplay = `\`${property.type}\``;
                try {
                    if ((property.type || '').toLowerCase().includes('image') || (property.name || '').toLowerCase().includes('image')) {
                        typeDisplay += ' 🖼️';
                    }
                } catch {
                    // ignore
                }
                hoverContent.appendMarkdown(`**${typeLabel}:** ${typeDisplay}\n\n`);
            return new vscode.Hover(hoverContent);
        } catch (error) {
            console.error(`Error reading ${sectionName}.json:`, error);
            return null;
        }
    }

    /**
     * 解析语言键
     * @param keyName 键名
     * @returns 语言键信息或null
     */
    private static parseLanguageKey(keyName: string): { baseName: string; languageCode: string } | null {
        // 匹配 key_zh, key_en 等格式（直接以语言代码结尾）
        const languageKeyPattern = /^(.+)_([a-z]{2})$/;
        const match = keyName.match(languageKeyPattern);

        if (match) {
            const [, baseName, languageCode] = match;
            return {
                baseName,
                languageCode: languageCode.toLowerCase()
            };
        }

        return null;
    }
}
