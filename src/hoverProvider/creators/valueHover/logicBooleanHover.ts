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

    // 检查是否为LogicBoolean关键字
    if (trimmedWord === 'true' || trimmedWord === 'false' || trimmedWord === 'if' ||
        trimmedWord === 'and' || trimmedWord === 'or' || trimmedWord === 'not') {
        return createLogicBooleanKeywordHover(trimmedWord);
    }

    // 检查是否为self.开头的方法
    if (trimmedWord.startsWith('self.')) {
        return createLogicBooleanSelfMethodHover(trimmedWord);
    }

    // 检查是否为其他LogicBoolean函数
    return createLogicBooleanFunctionHover(trimmedWord);
}
