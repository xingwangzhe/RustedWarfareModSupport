import * as vscode from "vscode";
import { registerIniLanguageFeatures } from "../common/languageFeatureRegistrar";
import { ALPHANUMERIC_TRIGGERS } from "../common/constants";

/**
 * 自定义文件扩展名管理器
 */
export class CustomFileExtensionsManager {
  static #instance: CustomFileExtensionsManager;
  #context: vscode.ExtensionContext | null = null;
  #customExtensionSubscriptions: vscode.Disposable[] = [];
  #currentExtensions: string[] = [];

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): CustomFileExtensionsManager {
    return (CustomFileExtensionsManager.#instance ??= new CustomFileExtensionsManager());
  }

  /**
   * 初始化管理器
   */
  public initialize(context: vscode.ExtensionContext): void {
    this.#context = context;
    this.registerConfigurationListeners();
    this.initializeCustomExtensions();
  }

  /**
   * 初始化自定义扩展名
   */
  private initializeCustomExtensions(): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    this.#currentExtensions = config.get<string[]>("customFileExtensions", []);
    this.setupCustomFileExtensions(this.#currentExtensions);
  }

  /**
   * 注册配置监听器
   */
  private registerConfigurationListeners(): void {
    if (!this.#context) {
      return;
    }

    this.#context.subscriptions.push(
      vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration("rustedwarfaremodsupport.customFileExtensions")) {
          this.handleCustomExtensionsChange();
        }
      }),
    );
  }

  /**
   * 处理自定义扩展名配置变化
   */
  private handleCustomExtensionsChange(): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    const newExtensions = config.get<string[]>("customFileExtensions", []);

    // 找出新增的扩展名
    const addedExtensions = newExtensions.filter((ext) => !this.#currentExtensions.includes(ext));
    // 找出删除的扩展名
    const removedExtensions = this.#currentExtensions.filter(
      (ext) => !newExtensions.includes(ext),
    );

    // 为新增的扩展名注册支持
    if (addedExtensions.length > 0) {
      this.setupCustomFileExtensions(addedExtensions);
    }

    // 清理删除的扩展名的支持
    if (removedExtensions.length > 0) {
      this.cleanupCustomFileExtensions(removedExtensions);
      // 释放相关订阅
      this.#customExtensionSubscriptions.forEach((sub) => sub.dispose());
      this.#customExtensionSubscriptions = [];
    }

    // 更新当前扩展名列表
    this.#currentExtensions = newExtensions;

    // 通知面板刷新
    this.notifyPanelRefresh();
  }

  /**
   * 通知面板刷新
   */
  private async notifyPanelRefresh(): Promise<void> {
    try {
      // 动态导入 PanelManager 并刷新面板
      const { getPanelManager } = await import("./panelManager.js");
      getPanelManager().refreshPanel();
    } catch (error) {
      console.error("Failed to refresh panel:", error);
    }
  }

  /**
   * 清理自定义文件扩展名的语言支持
   */
  private cleanupCustomFileExtensions(removedExtensions: string[]): void {
    removedExtensions.forEach((extension) => {
      if (!extension.startsWith(".")) {
        return;
      }

      // 重置已经打开的该扩展名文件的语言
      vscode.workspace.textDocuments.forEach((document) => {
        if (document.fileName.endsWith(extension) && document.languageId === "ini") {
          // 将语言重置为默认的纯文本
          vscode.languages.setTextDocumentLanguage(document, "plaintext");
        }
      });
    });

    console.log("Cleaned up custom file extensions support for:", removedExtensions);
  }

  /**
   * 设置自定义文件扩展名的语言支持
   */
  private setupCustomFileExtensions(extensions: string[]): void {
    // 为每个自定义扩展名注册语言支持
    extensions.forEach((extension) => {
      if (!extension.startsWith(".")) {
        console.warn(`Invalid file extension: ${extension}. Extension must start with a dot.`);
        return;
      }

      // 注册文档打开事件处理器，为自定义扩展名的文件设置语言类型
      const documentOpenHandler = vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.fileName.endsWith(extension)) {
          // 如果文档还没有设置语言，或者语言不是ini，则设置为ini
          if (document.languageId !== "ini") {
            vscode.languages.setTextDocumentLanguage(document, "ini");
          }
        }
      });

      // 处理当前已经打开的文档
      vscode.workspace.textDocuments.forEach((document) => {
        if (document.fileName.endsWith(extension) && document.languageId !== "ini") {
          vscode.languages.setTextDocumentLanguage(document, "ini");
        }
      });

      // 注册文档符号提供者
      // 注册 INI 语言功能（补全/折叠/符号/悬停），使用全字符触发
      const languageFeatureSubscriptions = registerIniLanguageFeatures({
        completionTriggers: ALPHANUMERIC_TRIGGERS,
        sectionNameTriggers: ALPHANUMERIC_TRIGGERS,
      });

      // 将所有订阅添加到全局订阅列表中
      this.#customExtensionSubscriptions.push(
        documentOpenHandler,
        ...languageFeatureSubscriptions,
      );

      console.log(`Registered language support for custom extension: ${extension}`);
    });
  }

  /**
   * 获取当前自定义扩展名列表
   */
  public getCurrentExtensions(): string[] {
    return [...this.#currentExtensions];
  }

  /**
   * 获取自定义扩展名的订阅列表
   */
  public getSubscriptions(): vscode.Disposable[] {
    return [...this.#customExtensionSubscriptions];
  }
}

/**
 * 获取自定义文件扩展名管理器实例
 */
export function getCustomFileExtensionsManager(): CustomFileExtensionsManager {
  return CustomFileExtensionsManager.getInstance();
}

/**
 * 初始化自定义文件扩展名管理器
 */
export function initializeCustomFileExtensionsManager(context: vscode.ExtensionContext): void {
  const manager = CustomFileExtensionsManager.getInstance();
  manager.initialize(context);
}
