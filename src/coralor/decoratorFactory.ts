import * as vscode from "vscode";
import { getColorLoader } from "./colorLoader";

/**
 * 装饰器工厂类
 * 负责创建和管理文本装饰器，支持主题切换
 */
export class DecoratorFactory {
  private decorators: Map<string, vscode.TextEditorDecorationType>;
  private currentTheme: vscode.ColorThemeKind | null = null;

  constructor() {
    this.decorators = new Map();
  }

  /**
   * 按需创建或获取装饰器
   */
  private getOrCreateDecorator(
    typeName: string
  ): vscode.TextEditorDecorationType {
    const activeTheme = vscode.window.activeColorTheme.kind;

    // 如果主题改变，清除所有装饰器缓存
    if (this.currentTheme !== activeTheme) {
      this.dispose();
      this.currentTheme = activeTheme;
    }

    const existing = this.decorators.get(typeName);
    if (existing) {
      return existing;
    }

    // 特殊处理三引号注释
    if (typeName === "tripleQuoteComment") {
      const isDarkTheme =
        activeTheme === vscode.ColorThemeKind.Dark ||
        activeTheme === vscode.ColorThemeKind.HighContrast;
      const commentColor = isDarkTheme ? "#6A9955" : "#008000"; // VS Code默认注释颜色

      const decorator = vscode.window.createTextEditorDecorationType({
        color: commentColor,
        fontStyle: "italic",
        overviewRulerColor: commentColor,
        overviewRulerLane: vscode.OverviewRulerLane.Right,
      });
      this.decorators.set(typeName, decorator);
      return decorator;
    }

    const loader = getColorLoader();
    const color = loader.getColor(typeName);

    // 为 image 类型提供一个轻量的行尾图标装饰（虚掩提示），其余类型使用普通颜色装饰
    let decorator: vscode.TextEditorDecorationType;
    try {
      if (typeName && typeName.toLowerCase().includes("image")) {
        // 仅当是值装饰（约定：propertyType + '_value'）时才显示行尾图片图标；其他 image 类型使用普通颜色装饰
        if (typeName.toLowerCase().endsWith("_value")) {
          decorator = vscode.window.createTextEditorDecorationType({
            color: color,
            overviewRulerColor: color,
            overviewRulerLane: vscode.OverviewRulerLane.Right,
            after: {
              contentText: "    🖼️",
              color: "#95a5a6",
            },
          });
        } else {
          decorator = vscode.window.createTextEditorDecorationType({
            color: color,
            overviewRulerColor: color,
            overviewRulerLane: vscode.OverviewRulerLane.Right,
          });
        }
      } else {
        decorator = vscode.window.createTextEditorDecorationType({
          color: color,
          overviewRulerColor: color,
          overviewRulerLane: vscode.OverviewRulerLane.Right,
        });
      }
    } catch {
      // fallback
      decorator = vscode.window.createTextEditorDecorationType({
        color: color,
        overviewRulerColor: color,
        overviewRulerLane: vscode.OverviewRulerLane.Right,
      });
    }
    this.decorators.set(typeName, decorator);
    return decorator;
  }

  /**
   * 初始化语言键装饰器（保留特殊样式）
   */
  private ensureLanguageDecorator() {
    if (this.decorators.has("language")) {
      return;
    }

    const isDarkTheme =
      vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark ||
      vscode.window.activeColorTheme.kind ===
        vscode.ColorThemeKind.HighContrast;

    const languageColor = isDarkTheme ? "#FFD700" : "#B45309"; // 暗色用金色，亮色用深橙色

    const languageDecorator = vscode.window.createTextEditorDecorationType({
      color: languageColor,
      fontWeight: "bold",
      overviewRulerColor: languageColor,
      overviewRulerLane: vscode.OverviewRulerLane.Right,
      after: {
        contentText: " 🌐",
        color: languageColor,
      },
    });
    this.decorators.set("language", languageDecorator);
  }

  /**
   * 获取指定类型的装饰器
   * @param typeName 类型名称
   * @returns 装饰器类型对象，如果未找到则返回undefined
   */
  public getDecorator(
    typeName: string
  ): vscode.TextEditorDecorationType | undefined {
    if (!typeName) {
      return undefined;
    }

    // 特殊处理 language 键
    if (typeName === "language") {
      // 检查当前主题是否与缓存的主题匹配
      const currentTheme = vscode.window.activeColorTheme.kind;
      const cachedTheme = this.currentTheme;

      // 如果主题改变，重新创建language装饰器
      if (cachedTheme !== currentTheme) {
        this.decorators.delete("language");
        this.currentTheme = currentTheme;
      }

      this.ensureLanguageDecorator();
      return this.decorators.get("language");
    }

    return this.getOrCreateDecorator(typeName);
  }

  /**
   * 获取所有装饰器
   * @returns 装饰器映射
   */
  public getAllDecorators(): Map<string, vscode.TextEditorDecorationType> {
    return new Map(this.decorators);
  }

  /**
   * 清理所有装饰器资源
   */
  public dispose() {
    // 清理所有装饰器
    for (const decorator of this.decorators.values()) {
      decorator.dispose();
    }
    this.decorators.clear();
  }
}

// 创建全局装饰器工厂实例
let decoratorFactory: DecoratorFactory | null = null;

/**
 * 获取全局装饰器工厂实例
 * @returns 装饰器工厂实例
 */
export function getDecoratorFactory(): DecoratorFactory {
  if (!decoratorFactory) {
    decoratorFactory = new DecoratorFactory();
  }
  return decoratorFactory;
}

/**
 * 销毁全局装饰器工厂实例
 */
export function disposeDecoratorFactory() {
  if (decoratorFactory) {
    decoratorFactory.dispose();
    decoratorFactory = null;
  }
}
