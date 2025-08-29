import * as vscode from 'vscode';
import { PanelItemData, FileExtensionConfig, FileExtensionItem } from './types';

/**
 * 面板数据管理器
 */
export class PanelDataManager {
    private items: PanelItemData[] = [];
    private fileExtensions!: FileExtensionConfig;

    constructor() {
        this.initializeDefaultItems();
        this.initializeFileExtensions();
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
     * 初始化文件后缀配置
     */
    private initializeFileExtensions(): void {
        // 从配置中读取自定义后缀，如果没有则使用默认值
        const config = vscode.workspace.getConfiguration('rustedwarfaremodsupport');
        const customExtensions = config.get<string[]>('customFileExtensions', []);

        this.fileExtensions = {
            defaultExtensions: ['.ini', '.template', 'mod-info.txt'],
            customExtensions: customExtensions
        };
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

    /**
     * 获取文件后缀配置
     */
    getFileExtensions(): FileExtensionConfig {
        return this.fileExtensions;
    }

    /**
     * 获取所有文件后缀项（用于UI显示）
     */
    getFileExtensionItems(): FileExtensionItem[] {
        const items: FileExtensionItem[] = [];

        // 添加默认后缀
        this.fileExtensions.defaultExtensions.forEach(ext => {
            items.push({
                extension: ext,
                isDefault: true,
                label: `${ext} (${vscode.l10n.t('panel.fileExtensions.defaultExtensions')})`,
                tooltip: vscode.l10n.t('panel.fileExtensions.defaultExtensions')
            });
        });

        // 添加自定义后缀
        this.fileExtensions.customExtensions.forEach(ext => {
            items.push({
                extension: ext,
                isDefault: false,
                label: ext,
                tooltip: vscode.l10n.t('panel.fileExtensions.customExtensions')
            });
        });

        return items;
    }

    /**
     * 添加自定义文件后缀
     */
    addCustomFileExtension(extension: string): { success: boolean; message: string } {
        // 验证格式
        if (!extension.startsWith('.')) {
            return {
                success: false,
                message: vscode.l10n.t('panel.fileExtensions.invalidFormat')
            };
        }

        // 检查是否重复
        const allExtensions = [...this.fileExtensions.defaultExtensions, ...this.fileExtensions.customExtensions];
        if (allExtensions.includes(extension)) {
            return {
                success: false,
                message: vscode.l10n.t('panel.fileExtensions.duplicate')
            };
        }

        // 添加到自定义后缀列表
        this.fileExtensions.customExtensions.push(extension);

        // 保存到配置
        const config = vscode.workspace.getConfiguration('rustedwarfaremodsupport');
        config.update('customFileExtensions', this.fileExtensions.customExtensions, vscode.ConfigurationTarget.Global);

        return {
            success: true,
            message: vscode.l10n.t('panel.fileExtensions.add.success', extension)
        };
    }

    /**
     * 移除自定义文件后缀
     */
    removeCustomFileExtension(extension: string): { success: boolean; message: string } {
        // 检查是否为默认后缀
        if (this.fileExtensions.defaultExtensions.includes(extension)) {
            return {
                success: false,
                message: vscode.l10n.t('panel.fileExtensions.remove.cannotDeleteDefault')
            };
        }

        // 从自定义后缀列表中移除
        const index = this.fileExtensions.customExtensions.indexOf(extension);
        if (index === -1) {
            return {
                success: false,
                message: vscode.l10n.t('panel.fileExtensions.remove.notFound')
            };
        }

        this.fileExtensions.customExtensions.splice(index, 1);

        // 保存到配置
        const config = vscode.workspace.getConfiguration('rustedwarfaremodsupport');
        config.update('customFileExtensions', this.fileExtensions.customExtensions, vscode.ConfigurationTarget.Global);

        return {
            success: true,
            message: vscode.l10n.t('panel.fileExtensions.remove.success', extension)
        };
    }

    /**
     * 获取所有支持的文件后缀（包括默认和自定义）
     */
    getAllSupportedExtensions(): string[] {
        return [...this.fileExtensions.defaultExtensions, ...this.fileExtensions.customExtensions];
    }
}
