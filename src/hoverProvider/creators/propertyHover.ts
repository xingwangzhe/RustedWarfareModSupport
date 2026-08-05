import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getExtensionPath } from "../../common/extensionPaths";
import { loadJsonCached } from "../../common/dataCache";
import { getBaseSectionName } from "../../dataProcessor";
import { SectionProperty } from "../../common/types";
import { t } from "../../translationManager";

/** 语言键正则：匹配 key_zh / key_en 等格式 */
const LANGUAGE_KEY_REGEX = /^(.+)_([a-z]{2})$/;

/**
 * 属性悬停创建器
 * 负责创建属性的悬停信息
 */
export class PropertyHoverCreator {
  /**
   * 创建属性悬停信息
   * @param sectionName 节名称
   * @param propertyName 属性名称
   * @param originalName 原始属性名称（用于语言键）
   * @returns 悬停信息
   */
  public static createPropertyHover(
    sectionName: string,
    propertyName: string,
    originalName?: string,
  ): vscode.Hover | null {
    // 如果是语言键，使用原始名称查找属性信息
    const lookupName = originalName || propertyName;

    try {
      // 获取节的基本名称（统一走 matchBaseSection：leg_/arm_ → leg_arm 等）
      const baseSectionName = getBaseSectionName(sectionName);

      // 获取扩展的实际路径（带缓存）
      const extensionPath = getExtensionPath();
      if (!extensionPath) {
        console.error("Cannot find extension");
        return null;
      }

      const sectionPath = path.join(extensionPath, "data", "sections", `${baseSectionName}.json`);

      // 检查是否存在语言特定的文件
      const localizedPath = path.join(
        extensionPath,
        "data",
        "sections",
        vscode.env.language,
        `${baseSectionName}.json`,
      );
      const finalPath = fs.existsSync(localizedPath) ? localizedPath : sectionPath;

      if (!fs.existsSync(finalPath)) {
        console.warn(`Section file not found: ${finalPath}`);
        return null;
      }

      const sectionData = loadJsonCached<{ data: SectionProperty[] }>(finalPath);
      const property = sectionData.data.find((p: SectionProperty) => p.name === lookupName);

      if (!property) {
        return null;
      }

      // 创建悬停内容
      const hoverContent = new vscode.MarkdownString();

      // 添加名称字段
      hoverContent.appendMarkdown(`**${t("completionprovider.name")}:** ${t(property.name)}\n\n`);

      // 如果是语言键，添加语言信息
      if (originalName) {
        const languageKeyInfo = PropertyHoverCreator.parseLanguageKey(propertyName);
        if (languageKeyInfo) {
          hoverContent.appendMarkdown(
            `**${t("Language")}:** ${languageKeyInfo.languageCode.toUpperCase()} (${t("ISO 639-1")})\n\n`,
          );
        }
      }

      // 类型字段将由下方的增强显示（带图标）统一插入，避免重复

      // 添加版本字段
      if (property.version) {
        hoverContent.appendMarkdown(
          `**${t("completionprovider.version")}:** ${property.version}\n\n`,
        );
      }

      // 添加描述字段
      if (property.description) {
        hoverContent.appendMarkdown(
          `**${t("completionprovider.description")}:** ${t(property.description)}\n\n`,
        );
      }

      // 添加过时标记
      if (property.isOutdated) {
        hoverContent.appendMarkdown(`⚠️ **${t("completionprovider.isOutdated")}:** true\n\n`);
      }

      // 添加示例字段
      if (property.example) {
        // 在代码块后追加空行，防止后续 Markdown 元素与代码块闭合符粘连
        hoverContent.appendMarkdown(
          `**${t("completionprovider.example")}:**\n\`\`\`ini\n${t(property.example)}\n\`\`\`\n\n`,
        );
      }

      // 添加类型字段
      const typeLabel = t("completionprovider.type");
      let typeDisplay = `\`${property.type}\``;
      try {
        if (
          (property.type || "").toLowerCase().includes("image") ||
          (property.name || "").toLowerCase().includes("image")
        ) {
          typeDisplay += " 🖼️";
        }
      } catch {
        // ignore
      }
      hoverContent.appendMarkdown(`**${typeLabel}:** ${typeDisplay}\n\n`);

      return new vscode.Hover(hoverContent);
    } catch (error) {
      console.error(`Error reading ${sectionName}.json:`, error);
      return null;
    }
  }

  /**
   * 解析语言键
   * @param keyName 键名
   * @returns 语言键信息或null
   */
  private static parseLanguageKey(
    keyName: string,
  ): { baseName: string; languageCode: string } | null {
    const match = keyName.match(LANGUAGE_KEY_REGEX);

    if (match) {
      const [, baseName, languageCode] = match;
      return {
        baseName,
        languageCode: languageCode.toLowerCase(),
      };
    }

    return null;
  }
}
