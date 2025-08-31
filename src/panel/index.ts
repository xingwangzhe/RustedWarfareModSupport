import * as vscode from 'vscode';
import { PanelDataManager } from './provider';
import { PanelItemData } from './types';
import { t } from '../translationManager';

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
    private _onDidChangeTreeData: vscode.EventEmitter<ModPanelItem | undefined | null | void> = new vscode.EventEmitter<ModPanelItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<ModPanelItem | undefined | null | void> = this._onDidChangeTreeData.event;

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
            const fileExtensionItems = this.createFileExtensionItems();

            return Promise.resolve([
                ...items.map(item => {
                    if (item.label === t('panel.export.label')) {
                        // 导出管理节点，返回子项
                        return new ModPanelItem(
                            item.label,
                            item.tooltip,
                            vscode.TreeItemCollapsibleState.Expanded
                        );
                    }
                    return new ModPanelItem(
                        item.label,
                        item.tooltip,
                        item.collapsibleState,
                        item.command
                    );
                }),
                ...fileExtensionItems
            ]);
        }

        // 如果是"导出管理"节点，返回其子项
        if (element && element.label === t('panel.export.label')) {
            return Promise.resolve([
                new ModPanelItem(
                    t('panel.export.auto'),
                    t('panel.export.auto.tooltip'),
                    vscode.TreeItemCollapsibleState.None,
                    'rustedwarfaremodsupport.exportAuto'
                )
            ]);
        }

        // 如果是文件扩展名管理标题，返回其子项
        if ((element as any).isFileExtensionParent) {
            return Promise.resolve(this.createFileExtensionChildren());
        }

        return Promise.resolve([]);
    }

    /**
     * 创建文件后缀管理项（只返回父项）
     */
    private createFileExtensionItems(): ModPanelItem[] {
        const items: ModPanelItem[] = [];

        // 文件后缀管理标题 - 作为可折叠的父项
        const titleItem = new ModPanelItem(
            t('panel.fileExtensions.title'),
            t('panel.fileExtensions.description'),
            vscode.TreeItemCollapsibleState.Expanded
        );
        // 设置一个标识符来识别这个父项
        (titleItem as any).isFileExtensionParent = true;
        // 设置图标来表示这是一个可展开的项
        titleItem.iconPath = new vscode.ThemeIcon('folder-opened');
        items.push(titleItem);

        return items;
    }

    /**
     * 创建文件后缀管理的子项
     */
    private createFileExtensionChildren(): ModPanelItem[] {
        const items: ModPanelItem[] = [];

        // 添加输入框提示
        items.push(new ModPanelItem(
            `${t('panel.fileExtensions.add.placeholder')} - ${t('panel.fileExtensions.add.button')}`,
            t('panel.fileExtensions.description'),
            vscode.TreeItemCollapsibleState.None,
            'rustedwarfaremodsupport.addFileExtension'
        ));

        // 获取所有文件后缀项
        const fileExtensions = this.dataManager.getFileExtensionItems();
        fileExtensions.forEach(ext => {
            const tooltip = ext.isDefault ? ext.tooltip : `${ext.tooltip} - ${t('panel.fileExtensions.remove.tooltip')}`;
            const item = new ModPanelItem(
                ext.label,
                tooltip,
                vscode.TreeItemCollapsibleState.None
            );

            // 如果不是默认后缀，添加删除命令
            if (!ext.isDefault) {
                item.command = {
                    command: 'rustedwarfaremodsupport.removeFileExtension',
                    title: 'Remove File Extension',
                    arguments: [ext.extension]
                };
            }

            items.push(item);
        });

        return items;
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
        this._onDidChangeTreeData.fire();
    }

    /**
     * 获取数据管理器
     */
    getDataManager(): PanelDataManager {
        return this.dataManager;
    }
}

/**
 * 注册Mod Panel
 * @param context VS Code扩展上下文
 */
export function registerModPanel(context: vscode.ExtensionContext): void {
    const modPanelProvider = new ModPanelProvider();
    const treeDataProvider = vscode.window.registerTreeDataProvider('rustedwarfaremodsupport-panel', modPanelProvider);

    // 将面板提供者引用传递给PanelManager
    import('./panelManager.js').then(({ getPanelManager }) => {
        getPanelManager().setModPanelProvider(modPanelProvider);
    });

    // 注册添加文件后缀命令
    const addFileExtensionCommand = vscode.commands.registerCommand('rustedwarfaremodsupport.addFileExtension', async () => {
        const extension = await vscode.window.showInputBox({
            prompt: t('panel.fileExtensions.add.placeholder'),
            placeHolder: '.cfg',
            validateInput: (value) => {
                if (!value) {
                    return t('panel.fileExtensions.add.emptyInput');
                }
                if (!value.startsWith('.')) {
                    return t('panel.fileExtensions.invalidFormat');
                }
                return null;
            }
        });

        if (extension) {
            const result = modPanelProvider.getDataManager().addCustomFileExtension(extension);
            if (result.success) {
                vscode.window.showInformationMessage(result.message);
                // 刷新面板显示
                modPanelProvider.refresh();
            } else {
                vscode.window.showErrorMessage(result.message);
            }
        }
    });

    // 注册移除文件后缀命令
    const removeFileExtensionCommand = vscode.commands.registerCommand('rustedwarfaremodsupport.removeFileExtension', async (extension: string) => {
        const confirm = await vscode.window.showWarningMessage(
            t('panel.fileExtensions.remove.confirm'),
            { modal: true },
            t('panel.fileExtensions.confirm')
        );

        if (confirm === t('panel.fileExtensions.confirm')) {
            const result = modPanelProvider.getDataManager().removeCustomFileExtension(extension);
            if (result.success) {
                vscode.window.showInformationMessage(result.message);
                // 刷新面板显示
                modPanelProvider.refresh();
            } else {
                vscode.window.showErrorMessage(result.message);
            }
        }
    });

    // 注册刷新面板命令
    const refreshPanelCommand = vscode.commands.registerCommand('rustedwarfaremodsupport-panel.refresh', () => {
        modPanelProvider.refresh();
    });

    context.subscriptions.push(
        treeDataProvider,
        addFileExtensionCommand,
        removeFileExtensionCommand,
        refreshPanelCommand
    );
}
