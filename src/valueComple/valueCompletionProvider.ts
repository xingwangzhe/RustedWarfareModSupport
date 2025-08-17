import * as vscode from 'vscode';
import { BoolValueCompletionProvider } from './BoolValueCompletionProvider';
import { UnitSpawnCompletionProvider } from './UnitSpawnCompletionProvider';

/**
 * 值补全提供者类
 * 用于在属性值位置提供补全建议
 * 这是一个组合提供者，整合了各种特定类型的补全提供者
 */
export class ValueCompletionProvider implements vscode.CompletionItemProvider {
    private providers: vscode.CompletionItemProvider[];

    constructor() {
        // 初始化各种特定类型的补全提供者
        this.providers = [
            new BoolValueCompletionProvider(),
            new UnitSpawnCompletionProvider()
        ];
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 收集所有提供者的补全项
        const completions: vscode.CompletionItem[] = [];
        
        // 依次调用每个提供者的补全方法
        for (const provider of this.providers) {
            const providerCompletions = provider.provideCompletionItems(document, position, token, context);
            if (providerCompletions) {
                if (Array.isArray(providerCompletions)) {
                    completions.push(...providerCompletions);
                } else if ('items' in providerCompletions) {
                    completions.push(...providerCompletions.items);
                }
            }
        }
        
        return completions;
    }
}