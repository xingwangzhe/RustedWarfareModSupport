import * as vscode from "vscode";

/**
 * 自定义文件扩展名管理器
 */
export class CustomFileExtensionsManager {
  static #instance: CustomFileExtensionsManager;
  #context: vscode.ExtensionContext | null = null;
  #configurationSubscription: vscode.Disposable | undefined;
  #customExtensionSubscriptions: vscode.Disposable[] = [];
  #currentExtensions: string[] = [];
  #managedDocuments = new Set<string>();

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
    if (this.#context === context) {
      return;
    }

    this.#context = context;
    this.#configurationSubscription = vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration("rustedwarfaremodsupport.customFileExtensions")) {
        this.handleCustomExtensionsChange();
      }
    });
    context.subscriptions.push(this.#configurationSubscription);
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
   * 处理自定义扩展名配置变化
   */
  private handleCustomExtensionsChange(): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    const newExtensions = config.get<string[]>("customFileExtensions", []);

    const addedExtensions = newExtensions.filter(
      (extension) => !this.#currentExtensions.includes(extension),
    );
    const removedExtensions = this.#currentExtensions.filter(
      (extension) => !newExtensions.includes(extension),
    );

    if (addedExtensions.length === 0 && removedExtensions.length === 0) {
      return;
    }

    if (removedExtensions.length > 0) {
      this.resetManagedDocuments(removedExtensions);
    }

    this.#customExtensionSubscriptions.forEach((subscription) => subscription.dispose());
    this.#customExtensionSubscriptions = [];
    this.#currentExtensions = newExtensions;
    this.setupCustomFileExtensions(newExtensions);
    void this.notifyPanelRefresh();
  }

  /**
   * 通知面板刷新
   */
  private async notifyPanelRefresh(): Promise<void> {
    try {
      const { getPanelManager } = await import("@/panel/panelManager.js");
      await getPanelManager().refreshPanel();
    } catch (error) {
      console.error("Failed to refresh panel:", error);
    }
  }

  /**
   * 清理已删除扩展名对应的语言支持
   */
  private resetManagedDocuments(removedExtensions: string[]): void {
    for (const extension of removedExtensions) {
      if (!extension.startsWith(".")) {
        continue;
      }

      vscode.workspace.textDocuments.forEach((document) => {
        if (
          document.fileName.endsWith(extension) &&
          document.languageId === "ini" &&
          this.#managedDocuments.has(document.uri.toString())
        ) {
          void vscode.languages.setTextDocumentLanguage(document, "plaintext");
          this.#managedDocuments.delete(document.uri.toString());
        }
      });
    }

    console.log("Cleaned up custom file extensions support for:", removedExtensions);
  }

  /**
   * 设置自定义文件扩展名的语言支持
   */
  private setupCustomFileExtensions(extensions: string[]): void {
    for (const extension of extensions) {
      if (!extension.startsWith(".")) {
        console.warn(`Invalid file extension: ${extension}. Extension must start with a dot.`);
        continue;
      }

      const documentOpenHandler = vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.fileName.endsWith(extension)) {
          this.setManagedDocumentLanguage(document);
        }
      });
      this.#customExtensionSubscriptions.push(documentOpenHandler);

      vscode.workspace.textDocuments.forEach((document) => {
        if (document.fileName.endsWith(extension)) {
          this.setManagedDocumentLanguage(document);
        }
      });

      console.log(`Registered language support for custom extension: ${extension}`);
    }
  }

  private setManagedDocumentLanguage(document: vscode.TextDocument): void {
    // Respect a language explicitly provided by another extension or the user.
    if (document.languageId !== "plaintext") {
      return;
    }

    this.#managedDocuments.add(document.uri.toString());
    void vscode.languages.setTextDocumentLanguage(document, "ini");
  }

  /**
   * 获取当前自定义扩展名列表
   */
  public getCurrentExtensions(): string[] {
    return [...this.#currentExtensions];
  }

  public dispose(): void {
    this.#customExtensionSubscriptions.forEach((subscription) => subscription.dispose());
    this.#customExtensionSubscriptions = [];
    this.#configurationSubscription?.dispose();
    this.#configurationSubscription = undefined;
    this.#managedDocuments.clear();
    this.#context = null;
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
