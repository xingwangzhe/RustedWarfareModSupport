import * as vscode from "vscode";
import * as fs from "fs";

/**
 * Create a MarkdownString containing image path and preview for the given absolute file path.
 * Returns null if the file does not exist.
 */
export function createImageMarkdownWithPath(absPath: string): vscode.MarkdownString | null {
  try {
    if (!absPath || !fs.existsSync(absPath)) {
      return null;
    }

    const uri = vscode.Uri.file(absPath);
    const markdown = new vscode.MarkdownString();

    // 添加路径信息
    markdown.appendMarkdown(`**Path:** \`${absPath}\`\n\n`);

    // 添加图片预览
    markdown.appendMarkdown(`![](${uri.toString()})`);
    markdown.isTrusted = true;

    return markdown;
  } catch {
    return null;
  }
}

/**
 * Create a hover containing an image for the given absolute file path.
 * Uses the configured zoom (keeps aspect ratio by specifying max-width/max-height).
 * Returns null if the file does not exist.
 */
export function createImageHoverFromPath(absPath: string): vscode.Hover | null {
  const markdown = createImageMarkdownWithPath(absPath);
  return markdown ? new vscode.Hover(markdown) : null;
}
