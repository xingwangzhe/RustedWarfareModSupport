import * as vscode from "vscode";

export class IniFoldingRangeProvider implements vscode.FoldingRangeProvider {
  public provideFoldingRanges(
    document: vscode.TextDocument,
    _context: vscode.FoldingContext,
    _token: vscode.CancellationToken,
  ): vscode.ProviderResult<vscode.FoldingRange[]> {
    const foldingRanges: vscode.FoldingRange[] = [];
    let sectionStart: number = -1;

    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const lineText = line.text.trim();

      // 处理节
      if (lineText.startsWith("[") && lineText.endsWith("]")) {
        // 如果之前有一个节，结束它
        if (sectionStart !== -1) {
          foldingRanges.push(new vscode.FoldingRange(sectionStart, i - 1));
        }
        // 开始新的节
        sectionStart = i;
      }
    }

    // 处理最后一个节
    if (sectionStart !== -1) {
      foldingRanges.push(new vscode.FoldingRange(sectionStart, document.lineCount - 1));
    }

    return foldingRanges;
  }
}
