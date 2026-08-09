import * as vscode from "vscode";
import { parseHexColor } from "@/common/colorUtils";

class ColorDecoratorFactory {
  private static decorators = new Map<string, vscode.TextEditorDecorationType>();

  static create(colorHex: string): vscode.TextEditorDecorationType {
    const key = colorHex.toUpperCase();
    if (this.decorators.has(key)) {
      return this.decorators.get(key)!;
    }

    // Convert parsed hex (including AARRGGBB) into a CSS color string that VS Code accepts.
    // Prefer rgba(r,g,b,a) so alpha is handled correctly.
    let cssColor = key.startsWith("#") ? key : `#${key}`;
    try {
      const rgba = parseHexColor(cssColor);
      if (rgba) {
        cssColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${Number(rgba.a.toFixed(3))})`;
      }
    } catch {
      // fall back to raw hex
    }

    // Also compute a subtle background color to ensure visibility across themes
    let backgroundColor: string | undefined = undefined;
    try {
      const rgba = parseHexColor(cssColor);
      if (rgba) {
        // use a small alpha for background regardless of original alpha
        const bgAlpha = 0.12;
        backgroundColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${bgAlpha})`;
      }
    } catch {
      // ignore
    }

    const decorator = vscode.window.createTextEditorDecorationType({
      color: cssColor,
      backgroundColor: backgroundColor,
      // Slight text outline to improve readability on similar backgrounds
      textDecoration: "none",
    });

    this.decorators.set(key, decorator);
    return decorator;
  }

  static disposeAll() {
    this.decorators.forEach((d) => d.dispose());
    this.decorators.clear();
  }
}

export default ColorDecoratorFactory;
