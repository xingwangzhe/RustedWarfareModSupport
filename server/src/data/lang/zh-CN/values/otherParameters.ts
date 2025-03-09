import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const OTHERPARAMETERS: CompletionItem[] = [
    {
        label: 'move',
        insertText: 'move',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'移动',
        data: 'parameter'
    },
    {
        label: 'attackMove',
        insertText: 'attackMove',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'移动攻击',
        data: 'parameter'
    },
    {
        label: 'guard',
        insertText: 'guard',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'防守',
        data: 'parameter'
    },
    {
        label: 'loadInto',
        insertText: 'loadInto',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'进入载具',
        data: 'parameter'
    },
    {
        label: 'loadUp',
        insertText: 'loadUp',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'主动装载',
        data: 'parameter'
    },
    {
        label: 'attack',
        insertText: 'attack',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'攻击',
        data: 'parameter'
    },
    {
        label: 'reclaim',
        insertText: 'reclaim',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'回收',
        data: 'parameter'
    },
    {
        label: 'repair',
        insertText: 'repair',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'维修',
        data: 'parameter'
    },
    {
        label: 'touchTarget',
        insertText: 'touchTarget',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'靠近目标',
        data: 'parameter'
    },
    {
        label: 'build',
        insertText: 'build',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'建造',
        data: 'parameter'
    },
    {
        label: 'follow',
        insertText: 'follow',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'跟随',
        data: 'parameter'
    },
    {
        label: 'setPassiveTarget',
        insertText: 'setPassiveTarget',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'被动',
        data: 'parameter'
    },
    {
        label: 'unloadAt',
        insertText: 'unloadAt',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'卸载至',
        data: 'parameter'
    },
    {
        label: 'patrol',
        insertText: 'patrol',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'巡逻',
        data: 'parameter'
    },
    {
        label: 'guardAt',
        insertText: 'guardAt',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'防守至',
        data: 'parameter'
    },
    {
        label: 'triggerAction',
        insertText: 'triggerAction',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'触发行动',
        data: 'parameter'
    },
    {
        label: 'triggerActionWhenInRange',
        insertText: 'triggerActionWhenInRange',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'在范围内时触发行动',
        data: 'parameter'
    },
    {
        label: 'own',
        insertText: 'own',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'己方',
        data: 'parameter'
    },
    {
        label: 'notOwn',
        insertText: 'notOwn',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'除自己外任何',
        data: 'parameter'
    },
    {
        label: 'neutral',
        insertText: 'neutral',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'中立',
        data: 'parameter'
    },
    {
        label: 'allyNotOwn',
        insertText: 'allyNotOwn',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'除自己外盟友',
        data: 'parameter'
    },
    {
        label: 'ally',
        insertText: 'ally',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'盟友',
        data: 'parameter'
    },
    {
        label: 'enemy',
        insertText: 'enemy',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'敌人',
        data: 'parameter'
    },
    {
        label: 'any',
        insertText: 'any',
        labelDetails: { detail :' parameter ', description: '[otherParameters]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'任何',
        data: 'parameter'
    },
];