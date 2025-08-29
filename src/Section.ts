// 节解析器类
import * as vscode from "vscode";
import { t } from './translationManager';

export class IniSectionSymbolProvider implements vscode.DocumentSymbolProvider {
  public generateSectionData(name: string): string {
    // 处理不同类型的节
    let baseName = name;
    
    // 处理带下划线的节名称，如 turret_NAME, projectile_NAME 等
    if (name.includes("_")) {
      baseName = name.substring(0, name.indexOf("_"));
    }
    
    // 特殊处理 leg_ 和 arm_ 类型
    if (name.startsWith("leg_")) {
      baseName = "leg";
    } else if (name.startsWith("arm_")) {
      baseName = "arm";
    }
    
    // 特殊处理 spawnUnits:LIST 和 spawnProjectiles:LIST 类型
    if (name.startsWith("spawnUnits:")) {
      baseName = "spawnUnits";
    } else if (name.startsWith("spawnProjectiles:")) {
      baseName = "spawnProjectiles";
    }
    
    // 特殊处理 Prices/Resources 类型
    if (name === "Prices/Resources") {
      baseName = "prices";
    }
    
    return t(`data.sections.${baseName}`);
  }

  // 根据键名和值确定符号类型
  private getSymbolKindForKey(key: string, value: string): vscode.SymbolKind {
    // 数字类型
    if (!isNaN(Number(value)) || /^\d+\.?\d*$/.test(value)) {
      return vscode.SymbolKind.Number;
    }

    // 布尔类型
    if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
      return vscode.SymbolKind.Boolean;
    }

    // 颜色类型（RGB或颜色名称）
    if (/^(#|rgb|rgba|hsl|hsla)/.test(value) || /^(red|blue|green|yellow|black|white|gray|grey)/i.test(value)) {
      return vscode.SymbolKind.Constant;
    }

    // 文件路径类型
    if (value.includes('/') || value.includes('\\') || value.includes('.')) {
      return vscode.SymbolKind.File;
    }

    // 数组/列表类型
    if (value.includes(',') || value.startsWith('[') || value.endsWith(']')) {
      return vscode.SymbolKind.Array;
    }

    // 特殊配置类型
    if (key.toLowerCase().includes('price') || key.toLowerCase().includes('cost')) {
      return vscode.SymbolKind.Number;
    }

    if (key.toLowerCase().includes('name') || key.toLowerCase().includes('title')) {
      return vscode.SymbolKind.String;
    }

    if (key.toLowerCase().includes('description') || key.toLowerCase().includes('text')) {
      return vscode.SymbolKind.String;
    }

    if (key.toLowerCase().includes('image') || key.toLowerCase().includes('icon') || key.toLowerCase().includes('texture')) {
      return vscode.SymbolKind.File;
    }

    if (key.toLowerCase().includes('sound') || key.toLowerCase().includes('music') || key.toLowerCase().includes('audio')) {
      return vscode.SymbolKind.File;
    }

    // 默认类型
    return vscode.SymbolKind.Property;
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    _token: vscode.CancellationToken
  ): Promise<vscode.DocumentSymbol[]> {
    return new Promise((resolve) => {
      const symbols: vscode.DocumentSymbol[] = [];
      let sectionStart: vscode.Position | null = null;
      let sectionName: string | null = null;
      let sectionChildren: vscode.DocumentSymbol[] = [];

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
            // 添加子符号（键值对）
            sectionSymbol.children = sectionChildren;
            symbols.push(sectionSymbol);
          }

          // 开始新的节
          sectionStart = line.range.start;
          sectionName = lineText.substring(1, lineText.length - 1);
          sectionChildren = []; // 重置子符号数组
        }
        // 处理键值对（在节内部）
        else if (sectionStart !== null && lineText.includes(':') && !lineText.startsWith('#') && !lineText.startsWith(';')) {
          const colonIndex = lineText.indexOf(':');
          if (colonIndex > 0) {
            const key = lineText.substring(0, colonIndex).trim();
            const value = lineText.substring(colonIndex + 1).trim();

            if (key) {
              // 根据键的类型确定符号类型
              const symbolKind = this.getSymbolKindForKey(key, value);
              const keyRange = new vscode.Range(
                new vscode.Position(i, line.text.indexOf(key)),
                new vscode.Position(i, line.text.indexOf(key) + key.length)
              );

              const keySymbol = new vscode.DocumentSymbol(
                key,
                value || '',
                symbolKind,
                keyRange,
                keyRange
              );

              sectionChildren.push(keySymbol);
            }
          }
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
        // 添加子符号（键值对）
        sectionSymbol.children = sectionChildren;
        symbols.push(sectionSymbol);
      }

      resolve(symbols);
    });
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}