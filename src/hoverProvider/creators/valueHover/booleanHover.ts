import * as vscode from "vscode";
import { t } from "../../../translationManager";
/**
 * 创建布尔值悬停信息
 * @param word 单词
 * @returns 悬停信息
 */
export function createBooleanValueHover(word: string): vscode.Hover | null {
  const trimmedValue = word.trim();
  if (trimmedValue === "true" || trimmedValue === "false") {
    const hoverContent = new vscode.MarkdownString();
    hoverContent.appendMarkdown(`**${t("valuecompletionprovider.bool.detail")}**\n\n`);

    if (trimmedValue === "true") {
      hoverContent.appendMarkdown(t("valuecompletionprovider.true.description"));
    } else {
      hoverContent.appendMarkdown(t("valuecompletionprovider.false.description"));
    }

    return new vscode.Hover(hoverContent);
  }

  return null;
}
