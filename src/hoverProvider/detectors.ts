import * as vscode from "vscode";
import {
  SectionHoverInfo,
  PropertyHoverInfo,
  PropertyValueHoverInfo,
  LanguageKeyInfo,
} from "@/hoverProvider/types";
import { findNearestSection } from "@/common/sectionCache";

/** 语言键正则：匹配 key_zh / key_en 等格式 */
const LANGUAGE_KEY_REGEX = /^(.+)_([a-z]{2})$/;
const LEFT_WORD_REGEX = /[^\s,]*$/;
const RIGHT_WORD_REGEX = /^[^\s,]*/;

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
  public static checkHoverOnSectionName(
    lineText: string,
    characterPosition: number,
  ): SectionHoverInfo | null {
    // 查找[]的位置
    const openBracketIndex = lineText.indexOf("[");
    const closeBracketIndex = lineText.indexOf("]");

    if (
      openBracketIndex === -1 ||
      closeBracketIndex === -1 ||
      openBracketIndex >= closeBracketIndex
    ) {
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
  public static checkHoverOnPropertyName(
    lineText: string,
    characterPosition: number,
  ): PropertyHoverInfo | null {
    // 移除注释部分（#之后的内容）
    const lineWithoutComment = lineText.split("#")[0];

    // 查找冒号位置
    const colonIndex = lineWithoutComment.indexOf(":");
    if (colonIndex <= 0) {
      return null;
    }

    // 检查光标是否在冒号之前（属性名部分）
    if (characterPosition >= colonIndex) {
      return null;
    }

    // 提取属性名
    const propertyName = lineWithoutComment.substring(0, colonIndex).trim();
    if (!propertyName) {
      return null;
    }

    // 检查是否为语言键
    const languageKeyInfo = HoverDetectors.parseLanguageKey(propertyName);
    if (languageKeyInfo) {
      return {
        propertyName: languageKeyInfo.fullName,
        originalName: languageKeyInfo.baseName,
        isLanguageKey: true,
      };
    }

    return { propertyName };
  }

  /**
   * 检查是否在属性值上悬停
   * @param lineText 行文本
   * @param characterPosition 字符位置
   * @returns 属性值信息或null
   */
  public static checkHoverOnPropertyValue(
    lineText: string,
    characterPosition: number,
  ): PropertyValueHoverInfo | null {
    // 移除注释部分（#之后的内容）
    const lineWithoutComment = lineText.split("#")[0];

    // 查找冒号位置
    const colonIndex = lineWithoutComment.indexOf(":");
    if (colonIndex < 0) {
      return null;
    }

    // 检查光标是否在冒号之后（属性值部分）
    if (characterPosition <= colonIndex) {
      return null;
    }

    // 提取属性名
    const propertyName = lineWithoutComment.substring(0, colonIndex).trim();
    if (!propertyName) {
      return null;
    }

    // 提取属性值
    const value = lineWithoutComment.substring(colonIndex + 1).trim();
    const word = HoverDetectors.getWordAtPosition(lineWithoutComment, characterPosition);

    // 检查是否为语言键
    const languageKeyInfo = HoverDetectors.parseLanguageKey(propertyName);
    if (languageKeyInfo) {
      return {
        propertyName: languageKeyInfo.fullName,
        value: word || value,
        originalName: languageKeyInfo.baseName,
        isLanguageKey: true,
      };
    }

    return { propertyName, value: word || value };
  }

  /**
   * 解析语言键
   * @param keyName 键名
   * @returns 语言键信息或null
   */
  public static parseLanguageKey(keyName: string): LanguageKeyInfo | null {
    const match = keyName.match(LANGUAGE_KEY_REGEX);

    if (match) {
      const [, baseName, languageCode] = match;
      return {
        fullName: keyName,
        baseName,
        languageCode: languageCode.toLowerCase(),
      };
    }

    return null;
  }

  /**
   * 获取当前所在的节名称
   * @param document 文档对象
   * @param position 位置对象
   * @returns 节名称，如果未找到则返回null
   */
  public static getCurrentSection(
    document: vscode.TextDocument,
    position: vscode.Position,
  ): string | null {
    return findNearestSection(document, position);
  }

  /**
   * 获取指定位置的单词
   * @param text 文本
   * @param position 位置
   * @returns 单词
   */
  private static getWordAtPosition(text: string, position: number): string {
    if (position < 0 || position > text.length) {
      return "";
    }

    // 以空白/逗号为分隔符查找单词（保留链式调用中的 . 和 ()）
    const leftPart = text.substring(0, position);
    const rightPart = text.substring(position);

    // 查找左侧边界
    const leftMatch = leftPart.match(LEFT_WORD_REGEX);
    const leftWord = leftMatch ? leftMatch[0] : "";

    // 查找右侧边界
    const rightMatch = rightPart.match(RIGHT_WORD_REGEX);
    const rightWord = rightMatch ? rightMatch[0] : "";

    const word = leftWord + rightWord;
    if (!word) {
      return "";
    }

    // 对链式表达式，仅返回光标所在片段（而非整条链）
    // 例如 eventSource.getAsMarker().hasActiveWaypoint()：
    // - 悬停 eventSource => eventSource
    // - 悬停 hasActiveWaypoint => hasActiveWaypoint()
    if (word.includes(".")) {
      const wordStart = position - leftWord.length;
      const localPos = Math.max(0, Math.min(word.length, position - wordStart));

      const segments: string[] = [];
      const ranges: Array<{ start: number; end: number }> = [];
      let start = 0;

      for (let i = 0; i <= word.length; i++) {
        if (i === word.length || word[i] === ".") {
          segments.push(word.substring(start, i));
          ranges.push({ start, end: i });
          start = i + 1;
        }
      }

      // 优先命中光标所在的片段区间
      let segIndex = ranges.findIndex((r) => localPos >= r.start && localPos <= r.end);

      // 光标刚好在 '.' 上时，回退到点左侧片段
      if (segIndex === -1) {
        segIndex = ranges.findIndex((r) => localPos === r.end + 1);
      }

      if (segIndex >= 0 && segments[segIndex]) {
        const seg = segments[segIndex];
        // self.xxx 场景保留前缀，便于后续命中 self 方法数据
        if (segIndex > 0 && segments[segIndex - 1] === "self") {
          return `self.${seg}`;
        }
        return seg;
      }
    }

    return word;
  }
}
