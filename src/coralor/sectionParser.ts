import * as vscode from "vscode";
import { SectionInfo, LanguageKeyInfo } from "./types";

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

      // 检查是否是节开始 - 改进逻辑，避免误识别数组索引等
      if (this.isValidSectionStart(text)) {
        // 如果已经有节在进行中，结束它
        if (currentSection) {
          sections.push({
            name: currentSection.name,
            startLine: currentSection.startLine,
            endLine: i,
          });
        }

        // 开始新节
        const sectionName = text.substring(1, text.length - 1);
        currentSection = {
          name: sectionName,
          startLine: i,
        };
      }
    }

    // 结束最后一个节
    if (currentSection) {
      sections.push({
        name: currentSection.name,
        startLine: currentSection.startLine,
        endLine: document.lineCount,
      });
    }

    return sections;
  }

  /**
   * 检查是否是有效的节开始
   * @param text 行文本
   * @returns 是否是有效的节
   */
  private isValidSectionStart(text: string): boolean {
    // 必须以 [ 开头，以 ] 结尾
    if (!text.startsWith("[") || !text.endsWith("]")) {
      return false;
    }

    // 提取中间内容
    const content = text.substring(1, text.length - 1);

    // 不能为空
    if (content.length === 0) {
      return false;
    }

    // 不应该包含其他 [ 或 ]
    if (content.includes("[") || content.includes("]")) {
      return false;
    }

    // 不应该包含数组索引模式 (如数字[数字])
    if (/\w+\[\d+\]/.test(text)) {
      return false;
    }

    // 节名称应该只包含字母、数字、下划线和连字符
    // 允许中文字符和其他语言字符
    const validSectionNamePattern =
      /^[\w\-\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]+$/;
    return validSectionNamePattern.test(content);
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
        languageCode: languageCode.toLowerCase(),
      };
    }

    return null;
  }
}
