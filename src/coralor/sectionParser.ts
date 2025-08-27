import * as vscode from 'vscode';
import { SectionInfo, LanguageKeyInfo } from './types';

/**
 * 节解析器类
 * 负责解析文档中的节信息
 */
export class SectionParser {
    /**
     * 解析文档中的所有节
     * @param document 文本文档
     * @returns 节信息数组
     */
    public parseSections(document: vscode.TextDocument): SectionInfo[] {
        const sections: SectionInfo[] = [];
        let currentSection: { name: string; startLine: number } | null = null;

        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const text = line.text.trim();

            // 检查是否是节开始
            if (text.startsWith('[') && text.endsWith(']')) {
                // 如果已经有节在进行中，结束它
                if (currentSection) {
                    sections.push({
                        name: currentSection.name,
                        startLine: currentSection.startLine,
                        endLine: i
                    });
                }

                // 开始新节
                const sectionName = text.substring(1, text.length - 1);
                currentSection = {
                    name: sectionName,
                    startLine: i
                };
            }
        }

        // 结束最后一个节
        if (currentSection) {
            sections.push({
                name: currentSection.name,
                startLine: currentSection.startLine,
                endLine: document.lineCount
            });
        }

        return sections;
    }

    /**
     * 解析语言键
     * @param keyName 键名
     * @returns 语言键信息或null
     */
    public parseLanguageKey(keyName: string): LanguageKeyInfo | null {
        // 匹配 key_zh, key_en 等格式（直接以语言代码结尾）
        const languageKeyPattern = /^(.+)_([a-z]{2})$/;
        const match = keyName.match(languageKeyPattern);

        if (match) {
            const [, baseName, languageCode] = match;
            return {
                fullName: keyName,
                baseName,
                languageCode: languageCode.toLowerCase()
            };
        }

        return null;
    }
}
