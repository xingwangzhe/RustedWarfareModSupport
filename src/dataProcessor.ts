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
 * 获取节的基本名称（去除下划线后缀等）
 * @param name 节名称
 * @returns 基本节名称
 */
export function getBaseSectionName(name: string): string {
    let baseName = name;
    
    // 处理带下划线的节名称，如 turret_NAME, projectile_NAME 等
    if (name.includes("_")) {
        baseName = name.substring(0, name.indexOf("_"));
    }
    
    // 特殊处理 leg_ 和 arm_ 类型
    if (name.startsWith("leg_")) {
        baseName = "leg";
    } else if (name.startsWith("arm_")) {
        baseName = "arm";
    }
    
    // 特殊处理 spawnUnits:LIST 和 spawnProjectiles:LIST 类型
    if (name.startsWith("spawnUnits:")) {
        baseName = "spawnUnits";
    } else if (name.startsWith("spawnProjectiles:")) {
        baseName = "spawnProjectiles";
    }
    
    // 特殊处理 Prices/Resources 类型
    if (name === "Prices/Resources") {
        baseName = "prices";
    }
    
    return baseName;
}

/**
 * 获取节的属性数据
 * @param sectionName 节名称
 * @returns 属性数组
 */
export function getSectionProperties(sectionName: string): any[] {
    try {
        console.log('getSectionProperties: sectionName=', sectionName);
        
        // 获取基本节名称
        const baseSectionName = getBaseSectionName(sectionName);
        console.log('getSectionProperties: baseSectionName=', baseSectionName);
        
        // 构建语言特定的数据文件路径
        let sectionPath = path.join(__dirname, '..', 'data', 'sections', `${baseSectionName}.json`);
        
        // 检查是否存在语言特定的文件
        const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${baseSectionName}.json`);
        if (fs.existsSync(localizedPath)) {
            sectionPath = localizedPath;
        }
        
        console.log('getSectionProperties: sectionPath=', sectionPath);
        console.log('getSectionProperties: file exists=', fs.existsSync(sectionPath));
        
        const sectionData = JSON.parse(fs.readFileSync(sectionPath, 'utf8'));
        console.log('getSectionProperties: sectionData=', sectionData);
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

/**
 * 检查光标是否在行首（行首允许有空格或制表符，以及属性名字符）
 * 修复：在输入过程中，光标前可能有已输入的字符，需要检查这些字符是否构成属性名的一部分
 * @param document 文档对象
 * @param position 位置对象
 * @returns 是否在有效行首位置
 */
export function isAtValidLineStart(document: vscode.TextDocument, position: vscode.Position): boolean {
    const line = document.lineAt(position.line).text;
    const beforeCursor = line.substring(0, position.character);
    
    // 允许行首有空格或制表符
    // 允许有属性名字符（字母、数字、下划线）
    // 不允许有冒号等其他字符
    return /^[ \t]*[a-zA-Z0-9_]*$/.test(beforeCursor);
}

/**
 * 检查行中是否已经包含冒号
 * @param document 文档对象
 * @param position 位置对象
 * @returns 行中是否已包含冒号
 */
export function hasColonInLine(document: vscode.TextDocument, position: vscode.Position): boolean {
    const line = document.lineAt(position.line).text;
    const beforeCursor = line.substring(0, position.character);
    return beforeCursor.includes(':');
}