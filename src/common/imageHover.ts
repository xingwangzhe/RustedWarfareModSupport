import * as vscode from 'vscode';
import * as fs from 'fs';

/**
 * Create a hover containing an image for the given absolute file path.
 * Uses the configured zoom (keeps aspect ratio by specifying max-width/max-height).
 * Returns null if the file does not exist.
 */
export function createImageHoverFromPath(absPath: string): vscode.Hover | null {
    try {
        if (!absPath || !fs.existsSync(absPath)) {
            return null;
        }

        const uri = vscode.Uri.file(absPath);
        const hoverContent = new vscode.MarkdownString();
        
        // 添加路径信息
        hoverContent.appendMarkdown(`**Path:** \`${absPath}\`\n\n`);
        
        // 添加图片预览
        hoverContent.appendMarkdown(`![](${uri.toString()})`);
        hoverContent.isTrusted = true;
        
        return new vscode.Hover(hoverContent);
    } catch {
        return null;
    }
}
