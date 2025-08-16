import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { generateCompletionDocumentation } from './completionUtils';

export class ActionSection {
    constructor() {}

    getIcon(): vscode.ThemeIcon {
        return new vscode.ThemeIcon('symbol-event');
    }

    getKey(): string {
        return 'action';
    }

    getLabel(): string {
        return '[action_NAME]';
    }

    getDescription(): string {
        return 'Actions that can dynamically cause changes to units and resources';
    }
}

export class HiddenActionSection {
    constructor() {}

    getIcon(): vscode.ThemeIcon {
        return new vscode.ThemeIcon('symbol-event');
    }

    getKey(): string {
        return 'hiddenAction';
    }

    getLabel(): string {
        return '[hiddenAction_NAME]';
    }

    getDescription(): string {
        return 'Actions that can dynamically cause changes to units and resources';
    }
}

export class ActionCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 检查当前是否在[action_*]或[hiddenAction_*]节内
        if (!this.isInsideActionSection(document, position)) {
            return [];
        }

        // 获取action节的属性列表
        const actionProperties = this.getActionProperties();
        const completionItems: vscode.CompletionItem[] = [];

        // 为每个属性创建补全项
        for (const property of actionProperties) {
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

    private isInsideActionSection(document: vscode.TextDocument, position: vscode.Position): boolean {
        let insideAction = false;
        for (let i = 0; i < position.line; i++) {
            const line = document.lineAt(i);
            const lineText = line.text.trim();

            // 检查是否是action或hiddenAction节的开始
            if (lineText.startsWith('[') && lineText.endsWith(']')) {
                const sectionName = lineText.substring(1, lineText.length - 1).trim();
                if (sectionName.match(/^action_\w+/) || sectionName.match(/^hiddenAction_\w+/)) {
                    insideAction = true;
                } else if (sectionName === '/') {
                    // 遇到节结束标记
                    insideAction = false;
                } else {
                    // 其他节开始，重置状态
                    insideAction = false;
                }
            }
        }
        return insideAction;
    }

    private getActionProperties() {
        // 读取action数据文件
        const dataPath = path.join(__dirname, '..', 'data', 'sections', 'action.json');
        if (fs.existsSync(dataPath)) {
            try {
                const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
                return data.data || [];
            } catch (e) {
                console.error('Error reading action data:', e);
                return [];
            }
        }
        return [];
    }
}