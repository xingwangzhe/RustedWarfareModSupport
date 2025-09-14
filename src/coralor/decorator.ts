import * as vscode from "vscode";
import { getSectionProperties } from "../dataProcessor";
import { getColorizerManager, disposeColorizerManager } from "./colorizer";
import { SectionParser } from "./sectionParser";

// 节属性装饰器类
export class SectionPropertyDecorator {
  private disposable: vscode.Disposable;
  private sectionParser: SectionParser;
  private updateTimeout: NodeJS.Timeout | null = null;
  private lastUpdateTime: number = 0;
  private readonly UPDATE_THROTTLE_MS = 100; // 节流时间100ms

  constructor() {
    this.sectionParser = new SectionParser();

    // 订阅文本编辑器更改事件
    const disposables: vscode.Disposable[] = [];

    // 订阅活动文本编辑器更改事件
    disposables.push(
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
          this.updateDecorations(editor);
        }
      })
    );

    // 订阅文档更改事件 - 使用节流优化性能
    disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        const editor = vscode.window.activeTextEditor;
        if (editor && event.document === editor.document) {
          this.throttledUpdateDecorations(editor);
        }
      })
    );

    // 订阅选择更改事件 - 降低频率
    disposables.push(
      vscode.window.onDidChangeTextEditorSelection((event) => {
        // 只在选择真正改变时更新，避免频繁触发
        const now = Date.now();
        if (now - this.lastUpdateTime > this.UPDATE_THROTTLE_MS) {
          this.throttledUpdateDecorations(event.textEditor);
        }
      })
    );

    // 订阅主题更改事件
    disposables.push(
      vscode.window.onDidChangeActiveColorTheme(() => {
        // 主题改变时，更新所有可见编辑器的装饰
        vscode.window.visibleTextEditors.forEach((editor) => {
          if (editor.document.languageId === "ini") {
            this.updateDecorations(editor);
          }
        });
      })
    );

    this.disposable = vscode.Disposable.from(...disposables);

    // 立即更新当前编辑器的装饰
    if (vscode.window.activeTextEditor) {
      this.updateDecorations(vscode.window.activeTextEditor);
    }
  }

  public dispose() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
      this.updateTimeout = null;
    }
    this.disposable.dispose();
    disposeColorizerManager();
  }

  /**
   * 节流更新装饰，避免频繁调用
   */
  private throttledUpdateDecorations(editor: vscode.TextEditor) {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }

    this.updateTimeout = setTimeout(() => {
      this.updateDecorations(editor);
      this.lastUpdateTime = Date.now();
    }, this.UPDATE_THROTTLE_MS);
  }

  private updateDecorations(editor: vscode.TextEditor) {
    const colorizerManager = getColorizerManager();
    const document = editor.document;
    if (document.languageId !== "ini") {
      return;
    }

    // 存储每种类型的装饰范围
    const decorations = new Map<string, vscode.Range[]>();

    // 获取文档中的所有节
    const sections = this.sectionParser.parseSections(document);

    // 帮助函数：判断是否为独立的三引号行(块注释分隔符)
    const isStandaloneTripleQuote = (text: string) => {
      // 允许前后空白, 中间只有三个引号, 或三个引号后面只跟#注释
      const trimmed = text.trim();
      if (trimmed === '"""') {
        return true;
      }
      if (trimmed.startsWith('"""')) {
        const after = trimmed.substring(3).trimStart();
        if (after.startsWith("#") || after.length === 0) {
          return true; // 行尾只是注释
        }
      }
      return false;
    };

    // 帮助函数：判断一行是否像属性行 (name: value)
    const isPropertyLine = (text: string) => {
      if (!text) {
        return false;
      }
      const colon = text.indexOf(":");
      if (colon <= 0) {
        return false;
      }
      const keyPart = text.substring(0, colon).trim();
      return /[A-Za-z0-9_.-]+$/.test(keyPart);
    };

    // 为每个节获取属性并应用装饰
    for (const section of sections) {
      const properties = getSectionProperties(section.name);
      if (properties.length === 0) {
        continue;
      }

      // 创建属性名称到类型的映射
      const propertyTypeMap = new Map<string, string>();
      for (const prop of properties) {
        propertyTypeMap.set(prop.name, prop.type);
      }

      // 注释状态：多行块注释基于独立三引号行判定；comment_ 节使用节名判定
      let inBlockComment = false;
      let inCommentSection = false;

      // 不跨节继承 comment_ 节; 仅检测三引号是否在节开始前已经打开(理论上不应跨节, 只做安全处理)
      for (let j = section.startLine - 1; j >= 0; j--) {
        const txt = document.lineAt(j).text;
        if (isStandaloneTripleQuote(txt)) {
          // 遇到一个独立分隔符但未遇到起始 => 说明之前已关闭, 停止回溯
          break;
        }
      }

      // 遍历节内的行 (包含节标题行, 但其不会被处理为属性)
      for (let i = section.startLine; i < section.endLine; i++) {
        if (i >= document.lineCount) {
          break;
        }

        const line = document.lineAt(i);
        const text = line.text;
        const trimmed = text.trim();

        // section 标题行跳过属性处理
        if (i === section.startLine) {
          if (/^\s*\[comment_[^\]]*\]\s*$/.test(trimmed)) {
            inCommentSection = true;
          } else {
            inCommentSection = false; // 新节重置 comment_ 区域
          }
          continue;
        }

        // 结束 comment_ 节：遇到下一个节标题
        if (/^\s*\[[^\]]*\]\s*$/.test(trimmed)) {
          inCommentSection = /^\s*\[comment_[^\]]*\]\s*$/.test(trimmed);
          // 不把节标题行当属性
          continue;
        }

        // 处理三引号块注释：只有独立行才切换状态
        if (isStandaloneTripleQuote(text)) {
          inBlockComment = !inBlockComment; // toggle
          continue; // 分隔符行不处理属性
        }

        // 如果在块注释或 comment_ 节中，跳过
        if (inBlockComment || inCommentSection) {
          continue;
        }

        // 如果这一行本质不是属性行，跳过
        if (!isPropertyLine(text)) {
          continue;
        }

        // 检查是否是属性行（包含冒号）
        const colonIndex = text.indexOf(":");
        if (colonIndex > 0) {
          // 提取属性名称
          const propertyName = text.substring(0, colonIndex).trim();
          let lookupName = propertyName;

          // 检查是否为语言键
          const languageKeyInfo =
            this.sectionParser.parseLanguageKey(propertyName);
          if (languageKeyInfo) {
            lookupName = languageKeyInfo.baseName;
          }

          const propertyType = propertyTypeMap.get(lookupName);

          if (propertyType) {
            // 创建装饰范围（装饰属性名称）
            const nameRange = new vscode.Range(
              new vscode.Position(i, colonIndex - propertyName.length),
              new vscode.Position(i, colonIndex)
            );

            // 为语言键使用特殊的装饰类型
            const decorationType = languageKeyInfo ? "language" : propertyType;

            // 添加到对应的装饰类型中（名称部分仍按属性类型或 language 处理）
            if (!decorations.has(decorationType)) {
              decorations.set(decorationType, []);
            }
            decorations.get(decorationType)?.push(nameRange);

            // 创建装饰范围（装饰属性值）
            const valueStart = colonIndex + 1;
            const lineEnd = line.text.length;
            if (valueStart < lineEnd) {
              // 确保有值
              const valueRange = new vscode.Range(
                new vscode.Position(i, valueStart),
                new vscode.Position(i, lineEnd)
              );

              // 如果是 image 类型，则把值用单独的装饰类型（propertyType + '_value'）来装饰，以展示行尾图标；
              // 否则和名称使用相同的装饰类型
              if (propertyType.toLowerCase().includes("image")) {
                const valueDecorationType = `${propertyType}_value`;
                if (!decorations.has(valueDecorationType)) {
                  decorations.set(valueDecorationType, []);
                }
                decorations.get(valueDecorationType)?.push(valueRange);
              } else {
                if (!decorations.has(decorationType)) {
                  decorations.set(decorationType, []);
                }
                decorations.get(decorationType)?.push(valueRange);
              }
            }
          }
        }
      }
    }

    // 优化：只更新有变化的装饰类型，避免闪烁
    const allDecorationTypes = new Set(decorations.keys());

    // 获取当前已应用的装饰类型
    const currentDecorators = colorizerManager.getAllDecorators();
    const currentTypes = new Set(currentDecorators.keys());

    // 清除不再需要的装饰
    for (const typeName of currentTypes) {
      if (typeof typeName === "string" && !allDecorationTypes.has(typeName)) {
        const decorator = colorizerManager.getDecorator(typeName);
        if (decorator) {
          editor.setDecorations(decorator, []);
        }
      }
    }

    // 应用新的装饰
    for (const [typeName, ranges] of decorations.entries()) {
      const decorator = colorizerManager.getDecorator(typeName);
      if (decorator) {
        editor.setDecorations(decorator, ranges);
      }
    }
  }
}
