import * as vscode from "vscode";
import { createLogicBooleanKeywordHover } from "@/hoverProvider/creators/valueHover/logicBooleanKeywordHover";
import { createLogicBooleanSelfMethodHover } from "@/hoverProvider/creators/valueHover/logicBooleanSelfMethodHover";
import { createLogicBooleanFunctionHover } from "@/hoverProvider/creators/valueHover/logicBooleanFunctionHover";
import { debugLog } from "@/common/perfLogger";

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

  debugLog(`[DEBUG] LogicBooleanValueHover - Processing word: ${trimmedWord}`);

  // 检查是否为LogicBoolean关键字
  if (
    trimmedWord === "true" ||
    trimmedWord === "false" ||
    trimmedWord === "if" ||
    trimmedWord === "and" ||
    trimmedWord === "or" ||
    trimmedWord === "not"
  ) {
    debugLog(`[DEBUG] LogicBooleanValueHover - Recognized as keyword: ${trimmedWord}`);
    return createLogicBooleanKeywordHover(trimmedWord);
  }

  // 检查是否为简单 self.方法 调用（非多链）
  const simpleSelfMethodPattern = /^self\.[A-Za-z0-9_]+(?:\([^)]*\))?$/;
  if (simpleSelfMethodPattern.test(trimmedWord)) {
    debugLog(`[DEBUG] LogicBooleanValueHover - Recognized as self method: ${trimmedWord}`);
    return createLogicBooleanSelfMethodHover(trimmedWord);
  }

  // 处理链式调用：只展示当前片段对应的 hover，不展示整条链
  if (trimmedWord.includes(".")) {
    const normalized = trimmedWord.replace(/\s+/g, "");
    const parts = normalized.split(".").filter(Boolean);
    const lastPart = parts.at(-1) || "";

    // self.xxx.yyy 时，优先按最后片段作为 self 方法匹配
    if (parts.length >= 2 && parts[parts.length - 2] === "self") {
      const selfHover = createLogicBooleanSelfMethodHover(`self.${lastPart}`);
      if (selfHover) {
        return selfHover;
      }
    }

    // 一般链式：优先尝试方法片段作为 self 方法
    const methodLikeHover = createLogicBooleanSelfMethodHover(`self.${lastPart}`);
    if (methodLikeHover) {
      return methodLikeHover;
    }

    // 兜底：按最后片段普通函数匹配
    const partHover = createLogicBooleanFunctionHover(lastPart);
    if (partHover) {
      return partHover;
    }
  }

  // 单片段（不带点）也支持模糊作为 self 方法匹配
  const methodLikeHover = createLogicBooleanSelfMethodHover(`self.${trimmedWord}`);
  if (methodLikeHover) {
    return methodLikeHover;
  }

  // 检查是否为其他LogicBoolean函数
  debugLog(`[DEBUG] LogicBooleanValueHover - Treating as function: ${trimmedWord}`);
  return createLogicBooleanFunctionHover(trimmedWord);
}
