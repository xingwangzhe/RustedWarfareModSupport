import * as vscode from "vscode";
import { IniFoldingRangeProvider } from "../IniFoldingProvider";
import { IniSectionSymbolProvider } from "../Section";
import { completionProviderConfigs, createCompletionProviders } from "../common/completionFactory";
import { SectionNameCompletionProvider } from "../completionProvider";
import { RustedWarfareHoverProvider } from "../hoverProvider/hoverProvider";
import { MemoryDefinitionCompletionProvider } from "../memory/MemoryDefinitionCompletionProvider";
import { MemoryValueCompletionProvider } from "../memory/MemoryValueCompletionProvider";
import { ValueCompletionProvider } from "../valueComple/valueCompletionProvider";

/**
 * 自定义文件扩展名管理器
 */
export class CustomFileExtensionsManager {
  private static instance: CustomFileExtensionsManager;
  private context: vscode.ExtensionContext | null = null;
  private customExtensionSubscriptions: vscode.Disposable[] = [];
  private currentExtensions: string[] = [];

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): CustomFileExtensionsManager {
    if (!CustomFileExtensionsManager.instance) {
      CustomFileExtensionsManager.instance = new CustomFileExtensionsManager();
    }
    return CustomFileExtensionsManager.instance;
  }

  /**
   * 初始化管理器
   */
  public initialize(context: vscode.ExtensionContext): void {
    this.context = context;
    this.registerConfigurationListeners();
    this.initializeCustomExtensions();
  }

  /**
   * 初始化自定义扩展名
   */
  private initializeCustomExtensions(): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    this.currentExtensions = config.get<string[]>("customFileExtensions", []);
    this.setupCustomFileExtensions(this.currentExtensions);
  }

  /**
   * 注册配置监听器
   */
  private registerConfigurationListeners(): void {
    if (!this.context) {
      return;
    }

    this.context.subscriptions.push(
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
    const addedExtensions = newExtensions.filter((ext) => !this.currentExtensions.includes(ext));
    // 找出删除的扩展名
    const removedExtensions = this.currentExtensions.filter((ext) => !newExtensions.includes(ext));

    // 为新增的扩展名注册支持
    if (addedExtensions.length > 0) {
      this.setupCustomFileExtensions(addedExtensions);
    }

    // 清理删除的扩展名的支持
    if (removedExtensions.length > 0) {
      this.cleanupCustomFileExtensions(removedExtensions);
      // 释放相关订阅
      this.customExtensionSubscriptions.forEach((sub) => sub.dispose());
      this.customExtensionSubscriptions = [];
    }

    // 更新当前扩展名列表
    this.currentExtensions = newExtensions;

    // 通知面板刷新
    this.notifyPanelRefresh();
  }

  /**
   * 通知面板刷新
   */
  private notifyPanelRefresh(): void {
    // 动态导入PanelManager并刷新面板
    import("./panelManager.js")
      .then(({ getPanelManager }) => {
        getPanelManager().refreshPanel();
      })
      .catch((error) => {
        console.error("Failed to refresh panel:", error);
      });
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
      const symbolProvider = vscode.languages.registerDocumentSymbolProvider(
        { language: "ini" },
        new IniSectionSymbolProvider(),
      );

      // 注册折叠范围提供者
      const foldingProvider = vscode.languages.registerFoldingRangeProvider(
        { language: "ini" },
        new IniFoldingRangeProvider(),
      );

      // 注册补全提供者
      const completionProviders = createCompletionProviders(completionProviderConfigs);

      const completionSubscriptions = completionProviders.map((provider) =>
        vscode.languages.registerCompletionItemProvider(
          { language: "ini" },
          provider,
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "_",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9", // 包含下划线和数字
        ),
      );

      // 注册值补全提供者
      const valueCompletionProvider = new ValueCompletionProvider();
      const valueCompletionSubscription = vscode.languages.registerCompletionItemProvider(
        { language: "ini" },
        valueCompletionProvider,
        ":",
        " ",
        ",",
        ".",
        "m",
      );

      // 注册节名称补全提供者
      const sectionNameCompletionProvider = new SectionNameCompletionProvider();
      const sectionNameCompletionSubscription = vscode.languages.registerCompletionItemProvider(
        { language: "ini" },
        sectionNameCompletionProvider,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      );

      // 注册@memory定义补全提供者
      const memoryDefinitionProvider = new MemoryDefinitionCompletionProvider();
      const memoryDefinitionSubscription = vscode.languages.registerCompletionItemProvider(
        { language: "ini" },
        memoryDefinitionProvider,
        "@",
        " ",
      );

      // 注册memory值补全提供者
      const memoryValueProvider = new MemoryValueCompletionProvider();
      const memoryValueSubscription = vscode.languages.registerCompletionItemProvider(
        { language: "ini" },
        memoryValueProvider,
        "m",
        ".",
      );

      // 注册悬停提供者
      const hoverProvider = vscode.languages.registerHoverProvider(
        { language: "ini" },
        new RustedWarfareHoverProvider(),
      );

      // 将所有订阅添加到全局订阅列表中
      this.customExtensionSubscriptions.push(
        documentOpenHandler,
        symbolProvider,
        foldingProvider,
        ...completionSubscriptions,
        valueCompletionSubscription,
        sectionNameCompletionSubscription,
        memoryDefinitionSubscription,
        memoryValueSubscription,
        hoverProvider,
      );

      console.log(`Registered language support for custom extension: ${extension}`);
    });
  }

  /**
   * 获取当前自定义扩展名列表
   */
  public getCurrentExtensions(): string[] {
    return [...this.currentExtensions];
  }

  /**
   * 获取自定义扩展名的订阅列表
   */
  public getSubscriptions(): vscode.Disposable[] {
    return [...this.customExtensionSubscriptions];
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
