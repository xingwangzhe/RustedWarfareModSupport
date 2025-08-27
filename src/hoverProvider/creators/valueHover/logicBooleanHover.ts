import * as vscode from 'vscode';
import { createLogicBooleanKeywordHover } from './logicBooleanKeywordHover';
import { createLogicBooleanSelfMethodHover } from './logicBooleanSelfMethodHover';
import { createLogicBooleanFunctionHover } from './logicBooleanFunctionHover';

/**
 * 创建LogicBoolean值悬停信息
 * @param word 单词
 * @returns 悬停信息
 */
export function createLogicBooleanValueHover(word: string): vscode.Hover | null {
    const trimmedWord = word.trim();
    if (!trimmedWord) {
        return null;
    }

    console.log(`[DEBUG] LogicBooleanValueHover - Processing word: ${trimmedWord}`);

    // 检查是否为LogicBoolean关键字
    if (trimmedWord === 'true' || trimmedWord === 'false' || trimmedWord === 'if' ||
        trimmedWord === 'and' || trimmedWord === 'or' || trimmedWord === 'not') {
        console.log(`[DEBUG] LogicBooleanValueHover - Recognized as keyword: ${trimmedWord}`);
        return createLogicBooleanKeywordHover(trimmedWord);
    }

    // 检查是否为self.开头的方法
    if (trimmedWord.startsWith('self.')) {
        console.log(`[DEBUG] LogicBooleanValueHover - Recognized as self method: ${trimmedWord}`);
        return createLogicBooleanSelfMethodHover(trimmedWord);
    }

    // 检查是否为其他LogicBoolean函数
    console.log(`[DEBUG] LogicBooleanValueHover - Treating as function: ${trimmedWord}`);
    return createLogicBooleanFunctionHover(trimmedWord);
}
