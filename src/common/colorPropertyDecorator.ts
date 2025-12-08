import * as vscode from "vscode";
import ColorDecoratorFactory from "./colorDecorator";
import { measurePerf } from "./perfLogger";

/**
 * 装饰文档中的十六进制颜色文本（例如 #RRGGBB, #AARRGGBB, #RGB, #ARGB）
 * 使颜色文本的前景色与表示的颜色一致，覆盖注释灰色样式
 */
export class ColorPropertyDecorator implements vscode.Disposable {
  private decorations = new Map<string, vscode.Range[]>();
  // We do not retain decoration instances between updates — always dispose
  // previous decorators and recreate them to ensure the editor reflects
  // the current hex values immediately.
  private updateTimeout?: NodeJS.Timeout;
  private disposables: vscode.Disposable[] = [];
  private output?: vscode.OutputChannel;
  private outputShown = false;

  constructor() {
    this.disposables.push(
      vscode.window.onDidChangeActiveTextEditor((editor) => {
        this.scheduleUpdate(editor?.document);
      })
    );

    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (vscode.window.activeTextEditor?.document === event.document) {
          // If there are content changes, prefer a faster update for real-time feedback
          const fast =
            (event.contentChanges && event.contentChanges.length > 0) || false;
          this.scheduleUpdate(event.document, fast);
          // For content changes trigger an immediate synchronous refresh for best realtime UX
          if (fast) {
            // log the snippets that changed for debugging in DevHost
            try {
              const snippets = event.contentChanges
                .map((c) => c.text)
                .join(" | ");
              this.log(
                `[ColorDecorator] quick update triggered, changes: ${snippets}`
              );
            } catch {
              // ignore
            }
            try {
              this.updateDecorations();
            } catch {
              // ignore errors during immediate update
            }
          }
        }
      })
    );

    this.scheduleUpdate(vscode.window.activeTextEditor?.document);
  }

  private scheduleUpdate(document?: vscode.TextDocument, fast = false) {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    const baseDelay = this.getThrottleDelay(document);
    const delay = fast
      ? Math.max(30, Math.min(80, Math.round(baseDelay / 4)))
      : baseDelay;
    this.updateTimeout = setTimeout(() => this.updateDecorations(), delay);
  }

  private getThrottleDelay(document?: vscode.TextDocument) {
    if (!document) {
      return 120;
    }
    const lines = document.lineCount;
    if (lines > 4000) {
      return 400;
    }
    if (lines > 2000) {
      return 250;
    }
    if (lines > 800) {
      return 160;
    }
    return 120;
  }

  private updateDecorations() {
    measurePerf("decorator.colors", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.document.languageId !== "ini") {
        return;
      }

      this.decorations.clear();

      // 支持部分输入（实时高亮）：匹配 1 到 8 个 hex 字符
      const hexRegex = /#([0-9a-fA-F]{1,8})\b/g;

      for (let i = 0; i < editor.document.lineCount; i++) {
        const line = editor.document.lineAt(i).text;

        // 简单的键值对检测，避免在非属性行中误匹配
        const kv = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.+)$/);
        if (!kv) {
          continue;
        }

        const valuePart = kv[2];
        // 移除注释尾部（# 后的注释），但保留 #hex 本身，因此只去除非紧跟十六进制的注释
        // 我们通过正则直接在 valuePart 中查找 #hex，避免误删

        let match: RegExpExecArray | null;
        while ((match = hexRegex.exec(valuePart)) !== null) {
          const full = match[0];
          const startInValue = match.index;
          const globalStart = line.indexOf(valuePart);
          if (globalStart === -1) {
            continue;
          }
          const start = globalStart + startInValue;
          const end = start + full.length;

          const range = new vscode.Range(i, start, i, end);

          const colorKey = full.toUpperCase();
          if (!this.decorations.has(colorKey)) {
            this.decorations.set(colorKey, []);
          }
          this.decorations.get(colorKey)?.push(range);
        }
      }

      // Log what colors we found for debugging in DevHost console
      try {
        const keys = Array.from(this.decorations.keys());
        if (keys.length > 0) {
          const counts = keys
            .map((k) => `${k}:${this.decorations.get(k)?.length ?? 0}`)
            .join(", ");
          this.log(
            `[ColorDecorator] updateDecorations - file=${
              editor.document.fileName
            } colors=${keys.join(", ")} counts=${counts}`
          );
        } else {
          this.log(
            `[ColorDecorator] updateDecorations - file=${editor.document.fileName} colors=none`
          );
        }
      } catch {
        // ignore logging failures
      }

      // Apply decorations, reusing decorator per color
      // Dispose any previously-created decorators so we don't retain old
      // decoration types that would make text appear with stale colors.
      ColorDecoratorFactory.disposeAll();

      // Create and apply fresh decorators for the current scan. Because we
      // disposed the previous ones above, there's no risk of stale styling
      // persisting after the edit.
      this.decorations.forEach((ranges, colorKey) => {
        try {
          const decorator = ColorDecoratorFactory.create(colorKey);
          editor.setDecorations(decorator, ranges);
        } catch {
          // ignore invalid color
        }
      });
    });
  }

  private ensureOutput() {
    if (!this.output) {
      try {
        this.output = vscode.window.createOutputChannel(
          "RustedWarfareModSupport"
        );
        this.disposables.push(this.output);
      } catch {
        this.output = undefined;
      }
    }
  }

  private log(message: string) {
    try {
      this.ensureOutput();
      if (this.output) {
        this.output.appendLine(message);
        if (!this.outputShown) {
          try {
            this.output.show(true);
          } catch {
            // ignore show failures
          }
          this.outputShown = true;
        }
      } else {
        // fallback

        console.log(message);
      }
    } catch {
      // ignore logging failures
    }
  }

  dispose() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
    ColorDecoratorFactory.disposeAll();
  }
}

export default ColorPropertyDecorator;
