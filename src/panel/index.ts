import * as vscode from 'vscode';
import { PanelDataManager } from './provider';
import { PanelItemData } from './types';

/**
 * Mod Panel Item - 面板中的树节点项
 */
export class ModPanelItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly tooltip: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly commandId?: string
    ) {
        super(label, collapsibleState);

        if (commandId) {
            this.command = {
                command: commandId,
                title: label,
                arguments: []
            };
        }
    }
}

/**
 * Mod Panel Provider - 提供面板数据的Tree Data Provider
 */
export class ModPanelProvider implements vscode.TreeDataProvider<ModPanelItem> {
    private dataManager: PanelDataManager;

    constructor() {
        this.dataManager = new PanelDataManager();
    }

    getTreeItem(element: ModPanelItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: ModPanelItem): Thenable<ModPanelItem[]> {
        if (!element) {
            // Root level items
            const items = this.dataManager.getItems();
            return Promise.resolve(
                items.map(item => new ModPanelItem(
                    item.label,
                    item.tooltip,
                    item.collapsibleState,
                    item.command
                ))
            );
        }
        return Promise.resolve([]);
    }

    /**
     * 添加新的面板项
     */
    addItem(item: PanelItemData): void {
        this.dataManager.addItem(item);
    }

    /**
     * 移除面板项
     */
    removeItem(label: string): void {
        this.dataManager.removeItem(label);
    }

    /**
     * 刷新面板
     */
    refresh(): void {
        // 触发树视图刷新
        // 注意：这里需要外部调用者来触发刷新事件
    }
}

/**
 * 注册Mod Panel
 * @param context VS Code扩展上下文
 */
export function registerModPanel(context: vscode.ExtensionContext): void {
    const modPanelProvider = new ModPanelProvider();
    const treeDataProvider = vscode.window.registerTreeDataProvider('rustedwarfaremodsupport-panel', modPanelProvider);

    context.subscriptions.push(treeDataProvider);
}
