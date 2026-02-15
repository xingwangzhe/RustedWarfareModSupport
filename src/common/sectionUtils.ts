import * as vscode from "vscode";

/**
 * 获取当前位置所在的节名称
 * @param document 文档对象
 * @param position 位置对象
 * @returns 节名称，如果未找到则返回null
 */
export function getCurrentSection(
  document: vscode.TextDocument,
  position: vscode.Position,
): string | null {
  for (let i = position.line; i >= 0; i--) {
    const line = document.lineAt(i).text.trim();
    if (line.startsWith("[") && line.endsWith("]")) {
      return line.substring(1, line.length - 1);
    }
  }
  return null;
}
