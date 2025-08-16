import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

/**
 * 从示例字符串中提取值部分
 * @param example 示例字符串
 * @returns 提取的值
 */
export function extractExampleValue(example: string): string {
    return example.split(':')[1]?.trim() || '';
}

/**
 * 获取节的属性数据
 * @param sectionName 节名称
 * @returns 属性数组
 */
export function getSectionProperties(sectionName: string): any[] {
    try {
        // 构建语言特定的数据文件路径
        let sectionPath = path.join(__dirname, '..', 'data', 'sections', `${sectionName}.json`);
        
        // 检查是否存在语言特定的文件
        const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${sectionName}.json`);
        if (fs.existsSync(localizedPath)) {
            sectionPath = localizedPath;
        }
        
        const sectionData = JSON.parse(fs.readFileSync(sectionPath, 'utf8'));
        return sectionData.data || [];
    } catch (error) {
        console.error(`Error reading ${sectionName}.json:`, error);
        return [];
    }
}

/**
 * 创建一个简单的节匹配器函数
 * @param sectionName 节名称
 * @returns 匹配器函数
 */
export function createSimpleSectionMatcher(sectionName: string): (name: string) => boolean {
    return (name: string) => name === sectionName;
}

/**
 * 创建一个前缀匹配器函数
 * @param prefix 前缀
 * @returns 匹配器函数
 */
export function createPrefixSectionMatcher(prefix: string): (name: string) => boolean {
    return (name: string) => name.startsWith(prefix);
}

/**
 * 创建一个正则表达式匹配器函数
 * @param pattern 正则表达式模式
 * @returns 匹配器函数
 */
export function createRegexSectionMatcher(pattern: RegExp): (name: string) => boolean {
    return (name: string) => pattern.test(name);
}

/**
 * 检查当前位置是否在指定节内
 * @param document 文档对象
 * @param position 位置对象
 * @param sectionMatcher 节匹配器函数
 * @returns 是否在节内
 */
export function isInsideSection(document: vscode.TextDocument, position: vscode.Position, sectionMatcher: (sectionName: string) => boolean): boolean {
    let insideSection = false;
    for (let i = 0; i < position.line; i++) {
        const line = document.lineAt(i).text.trim();
        if (line.startsWith('[') && line.endsWith(']')) {
            const sectionName = line.substring(1, line.length - 1);
            if (sectionMatcher(sectionName)) {
                insideSection = true;
            } else {
                insideSection = false;
            }
        }
    }
    return insideSection;
}