import * as vscode from "vscode";
import { ImageDecoratorFactory } from "@/common/imageDecorator";
import { measurePerf } from "@/common/perfLogger";
import { IMAGE_EXTENSIONS } from "@/common/constants";
import { PROPERTY_LINE_REGEX } from "@/common/kvLine";

/**
 * 精简的图片装饰器 - 只显示图片图标
 */
export class ImagePropertyDecorator implements vscode.Disposable {
  private decorations = new Map<string, vscode.Range[]>();
  private updateTimeout: NodeJS.Timeout | undefined;
  private disposables: vscode.Disposable[] = [];

  constructor() {
    this.disposables.push(
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        this.scheduleUpdate(editor?.document);
      }),
    );

    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (vscode.window.activeTextEditor?.document === event.document) {
          this.scheduleUpdate(event.document);
        }
      }),
    );

    this.scheduleUpdate(vscode.window.activeTextEditor?.document);
  }

  private scheduleUpdate(document?: vscode.TextDocument) {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    const delay = this.getThrottleDelay(document);
    this.updateTimeout = setTimeout(() => {
      this.updateDecorations();
    }, delay);
  }

  private getThrottleDelay(document?: vscode.TextDocument): number {
    if (!document) {
      return 120;
    }
    const lineCount = document.lineCount;
    if (lineCount > 4000) {
      return 400;
    }
    if (lineCount > 2000) {
      return 250;
    }
    if (lineCount > 800) {
      return 160;
    }
    return 120;
  }

  private updateDecorations() {
    void measurePerf("decorator.images", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.document.languageId !== "ini") {
        return;
      }

      this.decorations.clear();
      for (let lineIndex = 0; lineIndex < editor.document.lineCount; lineIndex++) {
        const line = editor.document.lineAt(lineIndex).text;

        const keyValueMatch = line.match(PROPERTY_LINE_REGEX);
        if (!keyValueMatch) {
          continue;
        }

        const [, key, value] = keyValueMatch;
        if (!key.toLowerCase().includes("image")) {
          continue;
        }

        if (this.isImageFile(value.trim())) {
          const valueStart = line.indexOf(value);
          if (valueStart !== -1) {
            const range = new vscode.Range(
              lineIndex,
              valueStart,
              lineIndex,
              valueStart + value.length,
            );

            const decorationType = "image_value";
            if (!this.decorations.has(decorationType)) {
              this.decorations.set(decorationType, []);
            }
            this.decorations.get(decorationType)?.push(range);
          }
        }
      }

      this.decorations.forEach((ranges, decorationType) => {
        const decorator = ImageDecoratorFactory.createImageDecorator(decorationType);
        editor.setDecorations(decorator, ranges);
      });
    });
  }

  private isImageFile(value: string): boolean {
    const lowercaseValue = value.toLowerCase();
    return [...IMAGE_EXTENSIONS].some((ext) => lowercaseValue.endsWith(ext));
  }

  dispose() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
    ImageDecoratorFactory.disposeAll();
  }
}
