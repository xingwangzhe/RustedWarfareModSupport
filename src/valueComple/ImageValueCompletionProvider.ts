import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { BaseValueCompletionProvider } from './BaseValueCompletionProvider';

export class ImageValueCompletionProvider extends BaseValueCompletionProvider {
    protected provideValueCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        property: any
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 仅在属性类型为 file (image) 或 name 包含 image 的时候生效
        const type = (property.type || '').toLowerCase();
        if (!(type.includes('image') || property.name.toLowerCase().includes('image'))) {
            return [];
        }

        // 获取当前文档目录
        const docDir = path.dirname(document.fileName);

        // 支持的图片扩展
        const exts = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp'];

        const items: vscode.CompletionItem[] = [];

        try {
            // 列出当前目录下的文件
            if (fs.existsSync(docDir)) {
                const files = fs.readdirSync(docDir);
                for (const f of files) {
                    const lower = f.toLowerCase();
                    if (exts.some(e => lower.endsWith(e))) {
                        const it = new vscode.CompletionItem(f, vscode.CompletionItemKind.File);
                        it.detail = 'image';
                        it.documentation = new vscode.MarkdownString('Image file in current folder');
                        items.push(it);
                    }
                }
            }

            // 尝试 workspace 根目录（ROOT: 映射）
            const workspaceFolders = vscode.workspace.workspaceFolders || [];
            if (workspaceFolders.length > 0) {
                const wf = workspaceFolders[0].uri.fsPath;
                if (fs.existsSync(wf)) {
                    const files = fs.readdirSync(wf);
                    for (const f of files) {
                        const lower = f.toLowerCase();
                        if (exts.some(e => lower.endsWith(e))) {
                            // keep existing style using path.sep
                            const it1 = new vscode.CompletionItem('ROOT:' + path.sep + f, vscode.CompletionItemKind.File);
                            it1.detail = 'image (workspace root)';
                            it1.documentation = new vscode.MarkdownString('Image file in workspace root (use ROOT:)');
                            items.push(it1);

                            // also add Windows-style backslash suggestion: ROOT:\sub\file.png (useful for mod files with backslashes)
                            const backslashCandidate = 'ROOT:' + '\\' + f;
                            const it2 = new vscode.CompletionItem(backslashCandidate, vscode.CompletionItemKind.File);
                            it2.detail = 'image (workspace root, backslash)';
                            it2.documentation = new vscode.MarkdownString('Image file in workspace root (use ROOT:\\ )');
                            items.push(it2);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('ImageValueCompletionProvider error:', error);
        }

        return items;
    }
}
