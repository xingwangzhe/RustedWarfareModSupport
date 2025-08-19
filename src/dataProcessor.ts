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
    
    // 特殊处理 action_ 和 hiddenAction_ 类型
    if (name.startsWith("action_") || name.startsWith("hiddenAction_")) {
        baseName = "action";
    }
    
    // 特殊处理 Prices/Resources 类型
    if (name === "Prices/Resources") {
        baseName = "prices";
    }

    if (name.startsWith('global_resource')) {
        baseName = 'global_resource';
    }

    if (name.startsWith('canBuild')) {
        baseName = 'canBuild';
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
        // 获取基本节名称
        const baseSectionName = getBaseSectionName(sectionName);
        
        // 构建语言特定的数据文件路径
        let sectionPath = path.join(__dirname, '..', 'data', 'sections', `${baseSectionName}.json`);
        
        // 检查是否存在语言特定的文件
        const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${baseSectionName}.json`);
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
    // 从光标所在行向上遍历，查找最近的节定义
    let stop = false;
    for (let i = position.line - 1; i >= 0; i--) {
        const line = document.lineAt(i).text.trim();
        //弱匹配，因为只有节存在[]符号
        if (line.startsWith('[') && line.endsWith(']')) {
            const sectionName = line.substring(1, line.length - 1);
            stop = true;
            return sectionMatcher(sectionName);
        }
        if(stop) break;
    }
    
    // // 特殊处理 mod-info.txt 文件
    // // 如果文件名是 mod-info.txt，则检查是否在文件开头（没有节的情况下）
    // if (document.fileName.endsWith('mod-info.txt')) {
    //     // 检查是否在文件的前几行且没有遇到任何节
    //     let hasSection = false;
    //     for (let i = 0; i < Math.min(position.line, 10); i++) {
    //         const line = document.lineAt(i).text.trim();
    //         if (line.startsWith('[') && line.endsWith(']')) {
    //             hasSection = true;
    //             break;
    //         }
    //     }
        
    //     // 如果没有节且在文件开头附近，则认为是在mod-info节中
    //     if (!hasSection && position.line < 10) {
    //         // 直接检查是否匹配mod或music节
    //         return sectionMatcher('mod') || sectionMatcher('music');
    //     }
    // }
    
    return false;
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