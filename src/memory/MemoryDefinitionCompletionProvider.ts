import * as vscode from 'vscode';
import { memoryManager } from './MemoryManager';

/**
 * @memory定义补全提供者
 * 在core节中提供@memory name:type的补全
 */
export class MemoryDefinitionCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        _token: vscode.CancellationToken,
        _context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 检查是否在core节中
        const currentSection = this.getCurrentSection(document, position);
        if (currentSection !== 'core') {
            return [];
        }

        const line = document.lineAt(position.line);
        const lineText = line.text;
        const beforeCursor = lineText.substring(0, position.character);

        // 检查是否正在输入@memory
        if (beforeCursor.includes('@memory')) {
            return this.provideMemoryDefinitionCompletion(beforeCursor, position);
        }

        // 检查是否应该提供@memory补全
        if (beforeCursor.trim() === '' || beforeCursor.trim() === '@') {
            return this.provideMemoryKeywordCompletion();
        }

        return [];
    }

    /**
     * 提供@memory关键词补全
     */
    private provideMemoryKeywordCompletion(): vscode.CompletionItem[] {
        const item = new vscode.CompletionItem('@memory', vscode.CompletionItemKind.Keyword);
        item.detail = vscode.l10n.t('memory.definition.description');
        item.documentation = new vscode.MarkdownString(
            `**@memory** - ${vscode.l10n.t('memory.definition.description')}\n\n` +
            `${vscode.l10n.t('memory.definition.format')}\n\n` +
            `**${vscode.l10n.t('memory.definition.supportedTypes')}** int, float, string, bool, number, text, boolean, logic\n\n` +
            `**${vscode.l10n.t('memory.definition.example')}**\n` +
            '```\n' +
            `${vscode.l10n.t('memory.definition.exampleHp')}\n` +
            `${vscode.l10n.t('memory.definition.exampleName')}\n` +
            `${vscode.l10n.t('memory.definition.exampleIsAlive')}\n` +
            '```\n\n' +
            `${vscode.l10n.t('memory.definition.accessNote')}`
        );
        item.insertText = new vscode.SnippetString('@memory ${1:name}:${2:type}');
        item.sortText = '01'; // 优先级高
        return [item];
    }

    /**
     * 提供@memory定义补全
     */
    private provideMemoryDefinitionCompletion(beforeCursor: string, _position: vscode.Position): vscode.CompletionItem[] {
        const completions: vscode.CompletionItem[] = [];

        // 检查是否需要类型补全
        if (beforeCursor.includes('@memory ') && !beforeCursor.includes(':')) {
            // 提供变量名补全（这里可以是建议的变量名）
            const suggestedNames = [
                'customHp', 'maxHp', 'currentHp', 'damage',
                'unitName', 'unitType', 'playerId', 'teamId',
                'isAlive', 'isMoving', 'isAttacking', 'isDamaged',
                'customValue1', 'customValue2', 'tempVar'
            ];

            suggestedNames.forEach(name => {
                const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
                item.detail = vscode.l10n.t('memory.variableName.detail');
                item.insertText = name + ':';
                completions.push(item);
            });
        } else if (beforeCursor.includes(':')) {
            // 提供类型补全
            const supportedTypes = memoryManager.getSupportedTypes();
            supportedTypes.forEach(type => {
                const item = new vscode.CompletionItem(type, vscode.CompletionItemKind.TypeParameter);
                item.detail = vscode.l10n.t('memory.variableType.detail', type);
                item.documentation = new vscode.MarkdownString(
                    vscode.l10n.t('memory.variableType.documentation', type, this.getTypeDescription(type)) + '\n\n' +
                    vscode.l10n.t('memory.variableType.accessNote')
                );
                completions.push(item);
            });
        }

        return completions;
    }

    /**
     * 获取当前所在的节
     */
    private getCurrentSection(document: vscode.TextDocument, position: vscode.Position): string | null {
        for (let i = position.line; i >= 0; i--) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                return line.substring(1, line.length - 1);
            }
        }
        return null;
    }

    /**
     * 获取类型描述
     */
    private getTypeDescription(type: string): string {
        const descriptions: { [key: string]: string } = {
            'int': vscode.l10n.t('type.int.description'),
            'float': vscode.l10n.t('type.float.description'),
            'string': vscode.l10n.t('type.string.description'),
            'bool': vscode.l10n.t('type.bool.description'),
            'number': vscode.l10n.t('type.number.description'),
            'text': vscode.l10n.t('type.text.description'),
            'boolean': vscode.l10n.t('type.boolean.description'),
            'logic': vscode.l10n.t('type.logic.description')
        };
        return descriptions[type] || vscode.l10n.t('type.custom.description');
    }
}
