import * as vscode from "vscode";
import { ImageDecoratorFactory } from "../common/imageDecorator";

/**
 * 精简的图片装饰器 - 只显示图片图标
 */
export class ImagePropertyDecorator implements vscode.Disposable {
  private decorations = new Map<string, vscode.Range[]>();
  private updateTimeout: NodeJS.Timeout | undefined;

  constructor() {
    // 监听活动编辑器变化
    vscode.window.onDidChangeActiveTextEditor(() => {
      this.scheduleUpdate();
    });

    // 监听文档内容变化
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (vscode.window.activeTextEditor?.document === event.document) {
        this.scheduleUpdate();
      }
    });

    // 初始更新
    this.scheduleUpdate();
  }

  private scheduleUpdate() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.updateTimeout = setTimeout(() => {
      this.updateDecorations();
    }, 100);
  }

  private updateDecorations() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "ini") {
      return;
    }

    this.decorations.clear();
    const text = editor.document.getText();
    const lines = text.split("\n");

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];

      // 匹配 key: value 格式
      const keyValueMatch = line.match(
        /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.+)$/
      );
      if (!keyValueMatch) {
        continue;
      }

      const [, key, value] = keyValueMatch;

      // 只处理包含 "image" 的属性
      if (!key.toLowerCase().includes("image")) {
        continue;
      }

      // 检查值是否是图片文件路径
      if (this.isImageFile(value.trim())) {
        const valueStart = line.indexOf(value);
        if (valueStart !== -1) {
          const range = new vscode.Range(
            lineIndex,
            valueStart,
            lineIndex,
            valueStart + value.length
          );

          const decorationType = "image_value";
          if (!this.decorations.has(decorationType)) {
            this.decorations.set(decorationType, []);
          }
          this.decorations.get(decorationType)?.push(range);
        }
      }
    }

    // 应用装饰
    this.decorations.forEach((ranges, decorationType) => {
      const decorator =
        ImageDecoratorFactory.createImageDecorator(decorationType);
      editor.setDecorations(decorator, ranges);
    });
  }

  private isImageFile(value: string): boolean {
    const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"];
    const lowercaseValue = value.toLowerCase();
    return imageExtensions.some((ext) => lowercaseValue.endsWith(ext));
  }

  dispose() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    ImageDecoratorFactory.disposeAll();
  }
}
