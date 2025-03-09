import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const BOOL: CompletionItem[] = [
    {
        label: 'true',
        insertText: 'true',
        labelDetails: { detail :' bool 静态布尔值1', description: '[bool]' },
        kind: CompletionItemKind.Text,
        detail :'静态布尔值1',
        documentation :'真',
        data: 'bool'
    },
    {
        label: 'false',
        insertText: 'false',
        labelDetails: { detail :' bool 静态布尔值0', description: '[bool]' },
        kind: CompletionItemKind.Text,
        detail :'静态布尔值0',
        documentation :'否',
        data: 'bool'
    },
];