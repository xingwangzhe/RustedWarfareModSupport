import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const TEMPLATE: CompletionItem[] = [
    {
        label: '@copyFromSection',
        insertText: '@copyFromSection:',
        labelDetails: { detail :' other 复制自节', description: '[template]' },
        kind: CompletionItemKind.Text,
        detail :'复制自节',
        documentation :'本节的内容从该节复制',
        data: 'other'
    },
    {
        label: '@copyFrom_skipThisSection',
        insertText: '@copyFrom_skipThisSection:',
        labelDetails: { detail :' bool 复制跳过节', description: '[template]' },
        kind: CompletionItemKind.Text,
        detail :'复制跳过节',
        documentation :'让[core]的copyFrom不从目标ini复制该节的内容',
        data: 'bool'
    },
    {
        label: '@define ',
        insertText: '@define :',
        labelDetails: { detail :' other 定义局部宏', description: '[template]' },
        kind: CompletionItemKind.Text,
        detail :'定义局部宏',
        documentation :'定义一个局部宏(作用域为section)',
        data: 'other'
    },
    {
        label: '@global ',
        insertText: '@global :',
        labelDetails: { detail :' other 定义全局宏', description: '[template]' },
        kind: CompletionItemKind.Text,
        detail :'定义全局宏',
        documentation :'定义一个全局宏(作用域为section)',
        data: 'other'
    },
];