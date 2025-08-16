import * as vscode from 'vscode';
import { Section } from './Section';
import { loadSectionData, createCompletionItems } from './completionUtils';

export class AttachmentSection extends Section {
    constructor() {
        super('attachment', vscode.TreeItemCollapsibleState.Collapsed);
    }

    getIcon(): vscode.ThemeIcon {
        return new vscode.ThemeIcon('symbol-property');
    }

    getKey(): string {
        return 'attachment';
    }

    getLabel(): string {
        return '[attachment_NAME]';
    }

    getDescription(): string {
        return 'Attachments are slots where other units can be positioned or carried';
    }
}

export class AttachmentCompletionProvider implements vscode.CompletionItemProvider {
    async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): Promise<vscode.CompletionItem[]> {
        // 检查是否在[attachment_NAME]节中
        const sections = document.getText().split(/\r?\n\s*\[\s*\/\s*\]\s*\r?\n/);
        let inSection = false;
        let lineCount = 0;

        for (const section of sections) {
            const sectionLines = section.split(/\r?\n/);
            const sectionEndLine = lineCount + sectionLines.length;

            if (position.line < sectionEndLine) {
                // 检查节名称是否匹配[attachment_NAME]
                const sectionHeader = sectionLines[0];
                if (sectionHeader && sectionHeader.match(/\[\s*attachment_\w+\s*\]/)) {
                    inSection = true;
                }
                break;
            }

            lineCount = sectionEndLine;
        }

        if (!inSection) {
            return [];
        }

        const data = await loadSectionData('attachment');
        return createCompletionItems(data, 'attachment');
    }
}