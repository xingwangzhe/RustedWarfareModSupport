import * as vscode from "vscode";

/**
 * 面板配置接口
 */
export interface PanelConfig {
  /** 面板ID */
  id: string;
  /** 面板标题 */
  title: string;
  /** 面板图标路径 */
  icon?: string;
}

/**
 * 面板项数据接口
 */
export interface PanelItemData {
  /** 显示标签 */
  label: string;
  /** 工具提示 */
  tooltip: string;
  /** 可折叠状态 */
  collapsibleState: vscode.TreeItemCollapsibleState;
  /** 命令ID（可选） */
  command?: string;
  /** 图标路径（可选） */
  iconPath?: string | vscode.Uri | { light: string | vscode.Uri; dark: string | vscode.Uri };
}

/**
 * 文件后缀配置接口
 */
export interface FileExtensionConfig {
  /** 默认文件后缀（不可删除） */
  defaultExtensions: string[];
  /** 自定义文件后缀（可删除） */
  customExtensions: string[];
}

/**
 * 文件后缀项接口
 */
export interface FileExtensionItem {
  /** 文件后缀 */
  extension: string;
  /** 是否为默认后缀 */
  isDefault: boolean;
  /** 显示标签 */
  label: string;
  /** 工具提示 */
  tooltip: string;
}
