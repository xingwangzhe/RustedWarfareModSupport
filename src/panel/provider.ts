import * as vscode from 'vscode';
import { PanelItemData } from './types';

/**
 * 面板数据管理器
 */
export class PanelDataManager {
    private items: PanelItemData[] = [];

    constructor() {
        this.initializeDefaultItems();
    }

    /**
     * 初始化默认面板项
     */
    private initializeDefaultItems(): void {
        this.items = [
            {
                label: 'Welcome',
                tooltip: 'Welcome to RustedWarfare Mod Support',
                collapsibleState: vscode.TreeItemCollapsibleState.None
            }
        ];
    }

    /**
     * 获取所有面板项
     */
    getItems(): PanelItemData[] {
        return this.items;
    }

    /**
     * 添加新的面板项
     */
    addItem(item: PanelItemData): void {
        this.items.push(item);
    }

    /**
     * 移除面板项
     */
    removeItem(label: string): void {
        this.items = this.items.filter(item => item.label !== label);
    }

    /**
     * 清空所有面板项
     */
    clearItems(): void {
        this.items = [];
    }
}
