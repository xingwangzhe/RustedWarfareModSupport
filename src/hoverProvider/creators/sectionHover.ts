import * as vscode from "vscode";
import { findSectionByName } from "@/common/dataLoader";
import { t } from "@/translationManager";
/**
 * 节悬停创建器
 * 负责创建节的悬停信息
 */
export class SectionHoverCreator {
  /**
   * 创建节悬停信息
   * @param sectionName 节名称
   * @returns 悬停信息
   */
  public static createSectionHover(sectionName: string): vscode.Hover | null {
    try {
      // 查找匹配的节
      const section = findSectionByName(sectionName);
      if (!section) {
        return null;
      }

      const hoverContent = new vscode.MarkdownString();
      hoverContent.appendMarkdown(`**${t("completionprovider.name")}:** ${t(section.name)}\n\n`);
      hoverContent.appendMarkdown(
        `**${t("completionprovider.description")}:** ${t(section.description ?? "")}`,
      );

      return new vscode.Hover(hoverContent);
    } catch (error) {
      console.error("Error reading sections.json:", error);
      return null;
    }
  }
}
