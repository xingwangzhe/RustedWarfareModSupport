import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const LOGICBBOOLEAN: CompletionItem[] = [
    {
        label: 'if',
        insertText: 'if',
        labelDetails: { detail :' operator 动态布尔值的开头必要结构', description: '[logicbBoolean]' },
        kind: CompletionItemKind.Text,
        detail :'动态布尔值的开头必要结构',
        documentation :'如果',
        data: 'operator'
    },
    {
        label: 'not',
        insertText: 'not',
        labelDetails: { detail :' operator 对逻辑值取反', description: '[logicbBoolean]' },
        kind: CompletionItemKind.Text,
        detail :'对逻辑值取反',
        documentation :'非',
        data: 'operator'
    },
    {
        label: 'and',
        insertText: 'and',
        labelDetails: { detail :' operator 对2个逻辑值取交集', description: '[logicbBoolean]' },
        kind: CompletionItemKind.Text,
        detail :'对2个逻辑值取交集',
        documentation :'交',
        data: 'operator'
    },
    {
        label: 'or',
        insertText: 'or',
        labelDetails: { detail :' operator 对2个逻辑值取并集', description: '[logicbBoolean]' },
        kind: CompletionItemKind.Text,
        detail :'对2个逻辑值取并集',
        documentation :'并',
        data: 'operator'
    },
];