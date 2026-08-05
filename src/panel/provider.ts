import * as vscode from "vscode";
import { PanelItemData, FileExtensionConfig, FileExtensionItem } from "./types";
import { t } from "../translationManager";

/**
 * 面板数据管理器
 */
export class PanelDataManager {
  #items: PanelItemData[] = [];
  #fileExtensions!: FileExtensionConfig;
  #disposables: vscode.Disposable[] = [];

  constructor() {
    this.initializeDefaultItems();
    this.initializeFileExtensions();
    this.registerConfigurationListeners();
  }

  /**
   * 初始化默认面板项
   */
  private initializeDefaultItems(): void {
    this.#items = [
      {
        label: t("panel.welcome.label"),
        tooltip: t("panel.welcome.tooltip"),
        collapsibleState: vscode.TreeItemCollapsibleState.None,
      },
      {
        label: t("panel.export.label"),
        tooltip: t("panel.export.tooltip"),
        collapsibleState: vscode.TreeItemCollapsibleState.Expanded,
        command: undefined,
        iconPath: "package",
      },
    ];
  }

  /**
   * 初始化文件后缀配置
   */
  private initializeFileExtensions(): void {
    // 从配置中读取自定义后缀，如果没有则使用默认值
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    const customExtensions = config.get<string[]>("customFileExtensions", []);

    this.#fileExtensions = {
      defaultExtensions: [".ini", ".template", "mod-info.txt"],
      customExtensions: customExtensions,
    };
  }

  /**
   * 注册配置监听器
   */
  private registerConfigurationListeners(): void {
    this.#disposables.push(
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
    // 重新初始化文件扩展名配置
    this.initializeFileExtensions();
    console.log("PanelDataManager: Updated custom file extensions from configuration");
  }

  /**
   * 获取所有面板项
   */
  getItems(): PanelItemData[] {
    return this.#items;
  }

  /**
   * 添加新的面板项
   */
  addItem(item: PanelItemData): void {
    this.#items.push(item);
  }

  /**
   * 移除面板项
   */
  removeItem(label: string): void {
    this.#items = this.#items.filter((item) => item.label !== label);
  }

  /**
   * 清空所有面板项
   */
  clearItems(): void {
    this.#items = [];
  }

  /**
   * 获取文件后缀配置
   */
  getFileExtensions(): FileExtensionConfig {
    return this.#fileExtensions;
  }

  /**
   * 获取所有文件后缀项（用于UI显示）
   */
  getFileExtensionItems(): FileExtensionItem[] {
    const items: FileExtensionItem[] = [];

    // 添加默认后缀
    this.#fileExtensions.defaultExtensions.forEach((ext) => {
      items.push({
        extension: ext,
        isDefault: true,
        label: `${ext} (${t("panel.fileExtensions.defaultExtensions")})`,
        tooltip: t("panel.fileExtensions.defaultExtensions"),
      });
    });

    // 添加自定义后缀
    this.#fileExtensions.customExtensions.forEach((ext) => {
      items.push({
        extension: ext,
        isDefault: false,
        label: ext,
        tooltip: t("panel.fileExtensions.customExtensions"),
      });
    });

    return items;
  }

  /**
   * 添加自定义文件后缀
   */
  addCustomFileExtension(extension: string): { success: boolean; message: string } {
    // 验证格式
    if (!extension.startsWith(".")) {
      return {
        success: false,
        message: t("panel.fileExtensions.invalidFormat"),
      };
    }

    // 检查是否重复
    const allExtensions = [
      ...this.#fileExtensions.defaultExtensions,
      ...this.#fileExtensions.customExtensions,
    ];
    if (allExtensions.includes(extension)) {
      return {
        success: false,
        message: t("panel.fileExtensions.duplicate"),
      };
    }

    // 添加到自定义后缀列表
    const updatedExtensions = [...this.#fileExtensions.customExtensions, extension];

    // 保存到配置（这会触发配置变化监听器，自动更新内部状态）
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    config.update("customFileExtensions", updatedExtensions, vscode.ConfigurationTarget.Global);

    return {
      success: true,
      message: t("panel.fileExtensions.add.success", extension),
    };
  }

  /**
   * 移除自定义文件后缀
   */
  removeCustomFileExtension(extension: string): { success: boolean; message: string } {
    // 检查是否为默认后缀
    if (this.#fileExtensions.defaultExtensions.includes(extension)) {
      return {
        success: false,
        message: t("panel.fileExtensions.remove.cannotDeleteDefault"),
      };
    }

    // 检查是否存在于自定义后缀列表中
    if (!this.#fileExtensions.customExtensions.includes(extension)) {
      return {
        success: false,
        message: t("panel.fileExtensions.remove.notFound"),
      };
    }

    // 从自定义后缀列表中移除
    const updatedExtensions = this.#fileExtensions.customExtensions.filter(
      (ext) => ext !== extension,
    );

    // 保存到配置（这会触发配置变化监听器，自动更新内部状态）
    const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
    config.update("customFileExtensions", updatedExtensions, vscode.ConfigurationTarget.Global);

    return {
      success: true,
      message: t("panel.fileExtensions.remove.success", extension),
    };
  }

  /**
   * 获取所有支持的文件后缀（包括默认和自定义）
   */
  getAllSupportedExtensions(): string[] {
    return [...this.#fileExtensions.defaultExtensions, ...this.#fileExtensions.customExtensions];
  }
}
