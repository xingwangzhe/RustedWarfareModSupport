import * as vscode from "vscode";
import {
  initializeCustomFileExtensionsManager,
  getCustomFileExtensionsManager,
} from "@/panel/customExtensionsManager";

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
