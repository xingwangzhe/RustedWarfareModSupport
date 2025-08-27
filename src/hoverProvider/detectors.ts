import * as vscode from 'vscode';
import { SectionHoverInfo, PropertyHoverInfo, PropertyValueHoverInfo } from './types';

/**
 * 悬停检测器
 * 负责检测用户鼠标悬停的位置类型
 */
export class HoverDetectors {
    /**
     * 检查是否在节名称上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 节名称信息或null
     */
    public static checkHoverOnSectionName(lineText: string, characterPosition: number): SectionHoverInfo | null {
        // 查找[]的位置
        const openBracketIndex = lineText.indexOf('[');
        const closeBracketIndex = lineText.indexOf(']');

        if (openBracketIndex === -1 || closeBracketIndex === -1 || openBracketIndex >= closeBracketIndex) {
            return null;
        }

        // 检查光标是否在[]内
        if (characterPosition > openBracketIndex && characterPosition < closeBracketIndex) {
            const sectionName = lineText.substring(openBracketIndex + 1, closeBracketIndex);
            return { sectionName };
        }

        return null;
    }

    /**
     * 检查是否在属性名上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 属性名信息或null
     */
    public static checkHoverOnPropertyName(lineText: string, characterPosition: number): PropertyHoverInfo | null {
        // 查找冒号位置
        const colonIndex = lineText.indexOf(':');
        if (colonIndex <= 0) {
            return null;
        }

        // 检查光标是否在冒号之前（属性名部分）
        if (characterPosition >= colonIndex) {
            return null;
        }

        // 提取属性名
        const propertyName = lineText.substring(0, colonIndex).trim();
        if (!propertyName) {
            return null;
        }

        return { propertyName };
    }

    /**
     * 检查是否在属性值上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 属性值信息或null
     */
    public static checkHoverOnPropertyValue(lineText: string, characterPosition: number): PropertyValueHoverInfo | null {
        // 查找冒号位置
        const colonIndex = lineText.indexOf(':');
        if (colonIndex < 0) {
            return null;
        }

        // 检查光标是否在冒号之后（属性值部分）
        if (characterPosition <= colonIndex) {
            return null;
        }

        // 提取属性名
        const propertyName = lineText.substring(0, colonIndex).trim();
        if (!propertyName) {
            return null;
        }

        // 提取属性值
        const value = lineText.substring(colonIndex + 1).trim();
        const word = HoverDetectors.getWordAtPosition(lineText, characterPosition);

        return { propertyName, value: word || value };
    }

    /**
     * 获取当前所在的节名称
     * @param document 文档对象
     * @param position 位置对象
     * @returns 节名称，如果未找到则返回null
     */
    public static getCurrentSection(document: vscode.TextDocument, position: vscode.Position): string | null {
        // 从当前位置向上搜索，找到最近的节定义
        for (let i = position.line; i >= 0; i--) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                return line.substring(1, line.length - 1);
            }
        }
        return null;
    }

    /**
     * 获取指定位置的单词
     * @param text 文本
     * @param position 位置
     * @returns 单词
     */
    private static getWordAtPosition(text: string, position: number): string {
        if (position < 0 || position > text.length) {
            return '';
        }

        // 以空格等为分隔符查找单词
        const leftPart = text.substring(0, position);
        const rightPart = text.substring(position);

        // 查找左侧边界
        const leftMatch = leftPart.match(/[^\s(),]*$/);
        const leftWord = leftMatch ? leftMatch[0] : '';

        // 查找右侧边界
        const rightMatch = rightPart.match(/^[^\s(),]*/);
        const rightWord = rightMatch ? rightMatch[0] : '';

        const word = leftWord + rightWord;

        // 检查是否是self.xxx格式的方法调用
        if (leftWord.endsWith('.') && leftWord.length > 1) {
            const beforeDot = leftWord.substring(0, leftWord.length - 1);
            if (beforeDot === 'self') {
                const result = beforeDot + '.' + rightWord;
                return result;
            }
        }

        // 如果当前单词是self，且点号右侧有内容，则组合成self.xxx
        if (leftWord === 'self' && rightPart.startsWith('.')) {
            const rightPartAfterDot = rightPart.substring(1);
            const rightWordMatch = rightPartAfterDot.match(/^[^\s(),]*/);
            const rightWordAfterDot = rightWordMatch ? rightWordMatch[0] : '';
            if (rightWordAfterDot) {
                const result = leftWord + '.' + rightWordAfterDot;
                return result;
            }
        }

        return word;
    }
}
