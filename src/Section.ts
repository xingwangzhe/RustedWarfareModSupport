// 节解析器类
import * as vscode from "vscode";

export class IniSectionSymbolProvider implements vscode.DocumentSymbolProvider {
  public generateSectionData(name: string): string {
    if (name.includes("_")) 
    {
      name = name.substring(0, name.indexOf("_"));
    }
      return vscode.l10n.t(`data.sections.${name}`);
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    token: vscode.CancellationToken
  ): Promise<vscode.DocumentSymbol[]> {
    return new Promise((resolve, reject) => {
      const symbols: vscode.DocumentSymbol[] = [];
      let sectionStart: vscode.Position | null = null;
      let sectionName: string | null = null;

      for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i);
        const lineText = line.text.trim();

        // 判断是否为节的开始 - 以 [ 开头，以 ] 结尾
        if (lineText.startsWith("[") && lineText.endsWith("]")) {
          // 如果之前已经有一个节，那么结束它
          if (sectionStart !== null && sectionName !== null) {
            const sectionEnd = new vscode.Position(i - 1, document.lineAt(i - 1).text.length);
            const sectionRange = new vscode.Range(sectionStart, sectionEnd);
            const sectionSymbol = new vscode.DocumentSymbol(
              sectionName,
              this.generateSectionData(sectionName),
              vscode.SymbolKind.Module,
              sectionRange,
              new vscode.Range(sectionStart, sectionStart)
            );
            symbols.push(sectionSymbol);
          }

          // 开始新的节
          sectionStart = line.range.start;
          sectionName = lineText.substring(1, lineText.length - 1);
        }
      }

      // 处理最后一个节（如果文件以节结尾）
      if (sectionStart !== null && sectionName !== null) {
        const lastLine = document.lineAt(document.lineCount - 1);
        const sectionEnd = new vscode.Position(lastLine.lineNumber, lastLine.text.length);
        const sectionRange = new vscode.Range(sectionStart, sectionEnd);
        const sectionSymbol = new vscode.DocumentSymbol(
          sectionName,
          this.generateSectionData(sectionName),
          vscode.SymbolKind.Module,
          sectionRange,
          new vscode.Range(sectionStart, sectionStart)
        );
        symbols.push(sectionSymbol);
      }

      resolve(symbols);
    });
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
