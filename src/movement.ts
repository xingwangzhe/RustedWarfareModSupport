import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { generateCompletionDocumentation } from './completionUtils';

export class MovementCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 检查当前是否在[movement]节内
        if (!this.isInsideMovementSection(document, position)) {
            return [];
        }

        // 获取movement节的属性列表
        const movementProperties = this.getMovementProperties();
        const completionItems: vscode.CompletionItem[] = [];

        // 为每个属性创建补全项
        for (const property of movementProperties) {
            const item = new vscode.CompletionItem(
                property.name,
                vscode.CompletionItemKind.Property
            );
            
            // 设置补全项的详细信息
            item.detail = `${property.type} - ${property.version}`;
            // 使用更丰富的Markdown格式展示文档信息，并使用翻译键值
            item.documentation = generateCompletionDocumentation(property);
            
            // 设置插入文本格式
            if (property.example) {
                // 从示例中提取值部分
                const exampleValue = property.example.split(':')[1]?.trim() || '';
                item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
            } else {
                item.insertText = new vscode.SnippetString(`${property.name}: $1`);
            }
            
            completionItems.push(item);
        }

        return completionItems;
    }

    private isInsideMovementSection(document: vscode.TextDocument, position: vscode.Position): boolean {
        let insideMovement = false;
        for (let i = 0; i < position.line; i++) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                const sectionName = line.substring(1, line.length - 1);
                if (sectionName === 'movement') {
                    insideMovement = true;
                } else {
                    insideMovement = false;
                }
            }
        }
        return insideMovement;
    }

    private getMovementProperties(): any[] {
        try {
            const movementPath = path.join(__dirname, '..', 'data', 'sections', 'movement.json');
            const movementData = JSON.parse(fs.readFileSync(movementPath, 'utf8'));
            return movementData.data || [];
        } catch (error) {
            console.error('Error reading movement.json:', error);
            return [];
        }
    }
}