// 节解析器类
import * as vscode from "vscode";
import { t } from "./translationManager";

export class IniSectionSymbolProvider implements vscode.DocumentSymbolProvider {
  // 缓存 getSymbolKindForKey 的计算结果，避免重复正则计算
  private static symbolKindCache = new Map<string, vscode.SymbolKind>();
  private static readonly MAX_CACHE_SIZE = 500;

  public generateSectionData(name: string): string {
    // 处理不同类型的节
    let baseName = name;

    // 特殊处理 spawnUnits:LIST 和 spawnProjectiles:LIST 类型（优先处理冒号格式）
    if (name.startsWith("spawnUnits:")) {
      baseName = "spawnUnits";
    } else if (name.startsWith("spawnProjectiles:")) {
      baseName = "spawnProjectiles";
    }
    // 特殊处理 Prices/Resources 类型
    else if (name === "Prices/Resources") {
      baseName = "prices";
    }
    // 处理带下划线的节名称，支持多个下划线，如 turret_main_cannon, leg_front_left 等
    else if (name.includes("_")) {
      // 获取第一个下划线之前的部分作为基础节名
      baseName = name.split("_")[0];

      // 特殊处理一些可能的节类型
      const knownSectionTypes = [
        "turret",
        "projectile",
        "leg",
        "arm",
        "action",
        "hiddenAction",
        "effect",
        "animation",
        "attachment",
        "placementRule",
        "resource",
        "decal",
        "logicBoolean",
      ];

      // 如果第一部分不是已知的节类型，可能是复合节名，尝试匹配
      if (!knownSectionTypes.includes(baseName)) {
        // 对于一些特殊情况，比如 global_resource
        if (name.startsWith("global_resource")) {
          baseName = "global_resource";
        }
        // 如果还是不匹配，保持原有的第一部分
      }
    }

    return t(`data.sections.${baseName}`);
  }

  // 根据键名和值确定符号类型
  private getSymbolKindForKey(key: string, value: string): vscode.SymbolKind {
    // 使用缓存避免重复计算正则表达式和条件判断
    const cacheKey = `${key}:${value}`;
    const cached = IniSectionSymbolProvider.symbolKindCache.get(cacheKey);
    if (cached !== undefined) {
      return cached;
    }

    let result: vscode.SymbolKind;

    // 数字类型
    if (!isNaN(Number(value)) || /^\d+\.?\d*$/.test(value)) {
      result = vscode.SymbolKind.Number;
    }

    // 布尔类型
    else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
      result = vscode.SymbolKind.Boolean;
    }

    // 颜色类型（RGB或颜色名称）
    else if (
      /^(#|rgb|rgba|hsl|hsla)/.test(value) ||
      /^(red|blue|green|yellow|black|white|gray|grey)/i.test(value)
    ) {
      result = vscode.SymbolKind.Constant;
    }

    // 文件路径类型
    else if (value.includes("/") || value.includes("\\") || value.includes(".")) {
      result = vscode.SymbolKind.File;
    }

    // 数组/列表类型
    else if (value.includes(",") || value.startsWith("[") || value.endsWith("]")) {
      result = vscode.SymbolKind.Array;
    }

    // 特殊配置类型
    else if (key.toLowerCase().includes("price") || key.toLowerCase().includes("cost")) {
      result = vscode.SymbolKind.Number;
    } else if (key.toLowerCase().includes("name") || key.toLowerCase().includes("title")) {
      result = vscode.SymbolKind.String;
    } else if (key.toLowerCase().includes("description") || key.toLowerCase().includes("text")) {
      result = vscode.SymbolKind.String;
    } else if (
      key.toLowerCase().includes("image") ||
      key.toLowerCase().includes("icon") ||
      key.toLowerCase().includes("texture")
    ) {
      result = vscode.SymbolKind.File;
    } else if (
      key.toLowerCase().includes("sound") ||
      key.toLowerCase().includes("music") ||
      key.toLowerCase().includes("audio")
    ) {
      result = vscode.SymbolKind.File;
    }

    // 默认类型
    else {
      result = vscode.SymbolKind.Property;
    }

    // 检查缓存大小限制
    if (IniSectionSymbolProvider.symbolKindCache.size >= IniSectionSymbolProvider.MAX_CACHE_SIZE) {
      // LRU: 删除最旧的前100个条目
      let count = 0;
      for (const cacheKey of IniSectionSymbolProvider.symbolKindCache.keys()) {
        if (count++ > 100) {
          break;
        }
        IniSectionSymbolProvider.symbolKindCache.delete(cacheKey);
      }
    }

    IniSectionSymbolProvider.symbolKindCache.set(cacheKey, result);
    return result;
  }

  public provideDocumentSymbols(
    document: vscode.TextDocument,
    _token: vscode.CancellationToken,
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
              new vscode.Range(sectionStart, sectionStart),
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
        else if (
          sectionStart !== null &&
          lineText.includes(":") &&
          !lineText.startsWith("#") &&
          !lineText.startsWith(";")
        ) {
          const colonIndex = lineText.indexOf(":");
          if (colonIndex > 0) {
            const key = lineText.substring(0, colonIndex).trim();
            const value = lineText.substring(colonIndex + 1).trim();

            if (key) {
              // 根据键的类型确定符号类型
              const symbolKind = this.getSymbolKindForKey(key, value);
              const keyRange = new vscode.Range(
                new vscode.Position(i, line.text.indexOf(key)),
                new vscode.Position(i, line.text.indexOf(key) + key.length),
              );

              const keySymbol = new vscode.DocumentSymbol(
                key,
                value || "",
                symbolKind,
                keyRange,
                keyRange,
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
          new vscode.Range(sectionStart, sectionStart),
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
