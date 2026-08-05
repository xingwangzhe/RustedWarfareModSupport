import * as vscode from "vscode";
import {
  initializeCustomFileExtensionsManager,
  getCustomFileExtensionsManager,
} from "./customExtensionsManager";

/**
 * 面板管理器 - 管理所有与面板相关的功能
 */
export class PanelManager {
  static #instance: PanelManager;
  #context: vscode.ExtensionContext | null = null;

  private constructor() {}

  /**
   * 获取PanelManager单例实例
   */
  public static getInstance(): PanelManager {
    return (PanelManager.#instance ??= new PanelManager());
  }

  /**
   * 初始化面板管理器
   */
  public initialize(context: vscode.ExtensionContext): void {
    this.#context = context;
    this.registerConfigurationListeners();
    this.initializeCustomExtensionsManager();
  }

  /**
   * 初始化自定义文件扩展名管理器
   */
  private initializeCustomExtensionsManager(): void {
    if (!this.#context) {
      return;
    }
    initializeCustomFileExtensionsManager(this.#context);
  }

  /**
   * 注册配置监听器
   */
  private registerConfigurationListeners(): void {
    if (!this.#context) {
      return;
    }

    // 监听折叠控件配置变化
    this.#context.subscriptions.push(
      vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration("rustedwarfaremodsupport.showFoldingControls")) {
          this.handleFoldingControlsChange();
        }
      }),
    );

    // 监听编辑器打开事件
    this.#context.subscriptions.push(
      vscode.window.onDidChangeVisibleTextEditors((editors) => {
        this.handleVisibleEditorsChange(editors);
      }),
    );
  }

  /**
   * 处理折叠控件配置变化
   */
  private handleFoldingControlsChange(): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    const showFoldingControls = config.get<string>("showFoldingControls", "always");

    vscode.window.visibleTextEditors.forEach((editor) => {
      if (editor.document.languageId === "ini") {
        this.applyFoldingControls(editor, showFoldingControls);
      }
    });
  }

  /**
   * 处理可见编辑器变化
   */
  private handleVisibleEditorsChange(editors: readonly vscode.TextEditor[]): void {
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    const showFoldingControls = config.get<string>("showFoldingControls", "always");

    editors.forEach((editor) => {
      if (editor.document.languageId === "ini") {
        this.applyFoldingControls(editor, showFoldingControls);
      }
    });
  }

  /**
   * 应用折叠控件显示设置
   */
  private applyFoldingControls(editor: vscode.TextEditor, showFoldingControls: string): void {
    // 应用配置到工作区
    vscode.workspace
      .getConfiguration()
      .update(
        "editor.showFoldingControls",
        showFoldingControls,
        vscode.ConfigurationTarget.Workspace,
      );
  }

  /**
   * 刷新面板
   */
  public async refreshPanel(): Promise<void> {
    try {
      await vscode.commands.executeCommand("rustedwarfaremodsupport-panel.refresh");
    } catch (error) {
      console.error("Failed to refresh panel:", error);
    }
  }
  /**
   * 获取自定义文件扩展名管理器
   */
  public getCustomExtensionsManager() {
    return getCustomFileExtensionsManager();
  }
}

/**
 * 获取面板管理器实例的便捷函数
 */
export function getPanelManager(): PanelManager {
  return PanelManager.getInstance();
}

/**
 * 初始化面板管理器
 */
export function initializePanelManager(context: vscode.ExtensionContext): void {
  const panelManager = PanelManager.getInstance();
  panelManager.initialize(context);
}
