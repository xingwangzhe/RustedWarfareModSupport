import * as vscode from "vscode";
import {
  initializeCustomFileExtensionsManager,
  getCustomFileExtensionsManager,
} from "./customExtensionsManager";

/**
 * 面板管理器 - 管理所有与面板相关的功能
 */
export class PanelManager {
  private static instance: PanelManager;
  private context: vscode.ExtensionContext | null = null;

  private constructor() {}

  /**
   * 获取PanelManager单例实例
   */
  public static getInstance(): PanelManager {
    if (!PanelManager.instance) {
      PanelManager.instance = new PanelManager();
    }
    return PanelManager.instance;
  }

  /**
   * 初始化面板管理器
   */
  public initialize(context: vscode.ExtensionContext): void {
    this.context = context;
    this.registerPanelFeatures();
    this.registerConfigurationListeners();
    this.initializeCustomExtensionsManager();
  }

  /**
   * 初始化自定义文件扩展名管理器
   */
  private initializeCustomExtensionsManager(): void {
    if (!this.context) {
      return;
    }
    initializeCustomFileExtensionsManager(this.context);
  }

  /**
   * 注册面板相关功能
   */
  private registerPanelFeatures(): void {
    if (!this.context) {
      return;
    }

    // 注册面板相关命令
    this.registerPanelCommands();
  }

  /**
   * 注册面板相关命令
   */
  private registerPanelCommands(): void {
    if (!this.context) {
      return;
    }

    // 刷新面板命令已在 panel/index.ts 中注册，这里不再重复注册
    // const refreshPanelCommand = vscode.commands.registerCommand('rustedwarfaremodsupport-panel.refresh', () => {
    //     this.refreshPanel();
    // });

    // this.context.subscriptions.push(refreshPanelCommand);
  }

  /**
   * 注册配置监听器
   */
  private registerConfigurationListeners(): void {
    if (!this.context) {
      return;
    }

    // 监听折叠控件配置变化
    this.context.subscriptions.push(
      vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration("rustedwarfaremodsupport.showFoldingControls")) {
          this.handleFoldingControlsChange();
        }
      }),
    );

    // 监听编辑器打开事件
    this.context.subscriptions.push(
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
    const config = vscode.workspace.getConfiguration();
    const editorConfig = config.get<any>("editor", {});

    // 更新编辑器的折叠控件显示设置
    editorConfig.showFoldingControls = showFoldingControls;

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
  public refreshPanel(): void {
    // 发送命令来刷新面板
    vscode.commands.executeCommand("rustedwarfaremodsupport-panel.refresh").then(
      () => {
        // 刷新成功
      },
      (error: any) => {
        console.error("Failed to refresh panel:", error);
      },
    );
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
