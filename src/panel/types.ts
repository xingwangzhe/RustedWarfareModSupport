import * as vscode from 'vscode';

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
