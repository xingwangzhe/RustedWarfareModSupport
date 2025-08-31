import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import JSZip from 'jszip';
import { t } from '../translationManager';

/**
 * 导出管理器：负责导出 zip/rwmod 文件
 */
export class ExportManager {
    /**
     * 导出功能 - 让用户选择路径，同时导出ZIP和RWMOD
     */
    public async exportMod(folderPath: string) {
        const baseName = path.basename(folderPath);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

        // 让用户选择ZIP文件的保存路径
        const zipUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(os.homedir(), `${baseName}_${timestamp}.zip`)),
            filters: { 'ZIP Archive': ['zip'] }
        });

        if (!zipUri) {
            throw new Error(t('panel.exportManager.cancelled'));
        }

        // 基于ZIP路径生成RWMOD路径（同名不同扩展名）
        const zipDir = path.dirname(zipUri.fsPath);
        const zipName = path.basename(zipUri.fsPath, '.zip');
        const rwmodPath = path.join(zipDir, `${zipName}.rwmod`);

        // 导出两个文件
        await this.exportToPath(folderPath, 'zip', zipUri.fsPath);
        await this.exportToPath(folderPath, 'rwmod', rwmodPath);

        vscode.window.showInformationMessage(t('panel.exportManager.completed', zipUri.fsPath, rwmodPath));
    }

    /**
     * 递归添加文件到 zip
     */
    private addFolderToZip(zip: JSZip, folderPath: string) {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const fullPath = path.join(folderPath, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                const subZip = zip.folder(file);
                if (subZip) {
                    this.addFolderToZip(subZip, fullPath);
                }
            } else {
                const data = fs.readFileSync(fullPath);
                zip.file(file, data);
            }
        }
    }

    /**
     * 导出到指定路径
     */
    private async exportToPath(folderPath: string, exportType: 'zip' | 'rwmod', outPath: string) {
        const zip = new JSZip();
        this.addFolderToZip(zip, folderPath);
        const content = await zip.generateAsync({ type: 'nodebuffer' });
        fs.writeFileSync(outPath, content);
    }
}

/**
 * 注册导出相关命令
 */
export function registerExportCommands(context: vscode.ExtensionContext) {
    const manager = new ExportManager();
    context.subscriptions.push(
        vscode.commands.registerCommand('rustedwarfaremodsupport.exportAuto', async () => {
            const folder = await vscode.window.showOpenDialog({
                canSelectFolders: true,
                canSelectFiles: false,
                canSelectMany: false
            });
            if (folder && folder[0]) {
                await manager.exportMod(folder[0].fsPath);
            }
        })
    );
}
