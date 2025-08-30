import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import JSZip from 'jszip';

/**
 * 导出管理器：负责导出 zip/rwmod 文件，并集成混淆加密逻辑
 */
export class ExportManager {
    /**
     * 直接导出 zip/rwmod
     */
    public async exportDirect(folderPath: string, exportType: 'zip' | 'rwmod') {
        const zip = new JSZip();
        this.addFolderToZip(zip, folderPath);
        const content = await zip.generateAsync({ type: 'nodebuffer' });
        const outPath = await this.getExportPath(exportType);
        fs.writeFileSync(outPath, content);
        vscode.window.showInformationMessage(`导出成功: ${outPath}`);
    }

    /**
     * 混淆加密后导出 zip/rwmod
     */
    public async exportObfuscated(folderPath: string, exportType: 'zip' | 'rwmod') {
        const zip = new JSZip();
        this.addFolderToZip(zip, folderPath, true);
        const content = await zip.generateAsync({ type: 'nodebuffer' });
        const outPath = await this.getExportPath(exportType);
        fs.writeFileSync(outPath, content);
        vscode.window.showInformationMessage(`混淆加密导出成功: ${outPath}`);
    }

    /**
     * 递归添加文件到 zip
     */
    private addFolderToZip(zip: JSZip, folderPath: string, obfuscate = false) {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
            const fullPath = path.join(folderPath, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                const subZip = zip.folder(file);
                if (subZip) {
                    this.addFolderToZip(subZip, fullPath, obfuscate);
                }
            } else {
                let data = fs.readFileSync(fullPath);
                let name = file;
                if (obfuscate) {
                    // 简单混淆：文件名反转+内容base64
                    name = this.obfuscateFileName(file);
                    data = Buffer.from(data.toString('base64'));
                }
                zip.file(name, data);
            }
        }
    }

    /**
     * 文件名混淆算法（可扩展为更复杂的）
     */
    private obfuscateFileName(name: string): string {
        return name.split('').reverse().join('');
    }

    /**
     * 获取导出路径
     */
    private async getExportPath(exportType: 'zip' | 'rwmod'): Promise<string> {
        const defaultName = exportType === 'zip' ? 'mod_export.zip' : 'mod_export.rwmod';
        const uri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(os.homedir(), defaultName)),
            filters: {
                'Mod Package': [exportType]
            }
        });
    if (!uri) { throw new Error('用户取消导出'); }
        return uri.fsPath;
    }
}

/**
 * 注册导出相关命令
 */
export function registerExportCommands(context: vscode.ExtensionContext) {
    const manager = new ExportManager();
    context.subscriptions.push(
        vscode.commands.registerCommand('rustedwarfaremodsupport.exportDirect', async () => {
            const folder = await vscode.window.showOpenDialog({ canSelectFolders: true, canSelectFiles: false, canSelectMany: false });
            if (folder && folder[0]) {
                await manager.exportDirect(folder[0].fsPath, 'zip');
                await manager.exportDirect(folder[0].fsPath, 'rwmod');
            }
        }),
        vscode.commands.registerCommand('rustedwarfaremodsupport.exportObfuscated', async () => {
            const folder = await vscode.window.showOpenDialog({ canSelectFolders: true, canSelectFiles: false, canSelectMany: false });
            if (folder && folder[0]) {
                await manager.exportObfuscated(folder[0].fsPath, 'zip');
                await manager.exportObfuscated(folder[0].fsPath, 'rwmod');
            }
        })
    );
}
