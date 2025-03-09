import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const EVENTS: CompletionItem[] = [
    {
        label: 'created',
        insertText: 'created',
        labelDetails: { detail :' event 在单位被各种方式创建时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'在单位被各种方式创建时触发',
        documentation :'创建',
        data: 'event'
    },
    {
        label: 'completeAndActive',
        insertText: 'completeAndActive',
        labelDetails: { detail :' event 当单位被建造完成时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'当单位被建造完成时触发',
        documentation :'完成且激活',
        data: 'event'
    },
    {
        label: 'destroyed',
        insertText: 'destroyed',
        labelDetails: { detail :' event 单位被击杀或是删除时触发,注意回收无法触发该事件', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'单位被击杀或是删除时触发,注意回收无法触发该事件',
        documentation :'被摧毁',
        data: 'event'
    },
    {
        label: 'killedAnyUnit',
        insertText: 'killedAnyUnit',
        labelDetails: { detail :' event 当单位通过攻击造成另一个单位死亡时触发,若是使用其它手段造成死亡无法触发(如:提取资源,装载删除)', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'当单位通过攻击造成另一个单位死亡时触发,若是使用其它手段造成死亡无法触发(如:提取资源,装载删除)',
        documentation :'击杀任何单位',
        data: 'event'
    },
    {
        label: 'queuedUnitFinished',
        insertText: 'queuedUnitFinished',
        labelDetails: { detail :' event 当队列建造的单位完成时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'当队列建造的单位完成时触发',
        documentation :'队列建造中的单位完成',
        data: 'event'
    },
    {
        label: 'queuedItemAdded',
        insertText: 'queuedItemAdded',
        labelDetails: { detail :' event 队列中添加新的项目时触发,一般为canBuild或action', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'队列中添加新的项目时触发,一般为canBuild或action',
        documentation :'队列添加新项目',
        data: 'event'
    },
    {
        label: 'queuedItemCanclled',
        insertText: 'queuedItemCanclled',
        labelDetails: { detail :' event 队列中取消项目时触发,一般为canBuild或action', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'队列中取消项目时触发,一般为canBuild或action',
        documentation :'队列取消项目',
        data: 'event'
    },
    {
        label: 'teleported',
        insertText: 'teleported',
        labelDetails: { detail :' event 单位传送时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'单位传送时触发',
        documentation :'传送',
        data: 'event'
    },
    {
        label: 'touchTargetSuccess',
        insertText: 'touchTargetSuccess',
        labelDetails: { detail :' event 当单位带有touchTarget路径点时,接触目标单位成功时触发,成功判定是两个单位的距离小于等于其radius之和', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'当单位带有touchTarget路径点时,接触目标单位成功时触发,成功判定是两个单位的距离小于等于其radius之和',
        documentation :'接触目标成功',
        data: 'event'
    },
    {
        label: 'newWaypointGivenByPlayer',
        insertText: 'newWaypointGivenByPlayer',
        labelDetails: { detail :' event 玩家为单位添加新的路径点时触发,可以为任何type', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'玩家为单位添加新的路径点时触发,可以为任何type',
        documentation :'玩家添加新的路径点',
        data: 'event'
    },
    {
        label: 'teamChanged',
        insertText: 'teamChanged',
        labelDetails: { detail :' event 当单位的队伍变更时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'当单位的队伍变更时触发',
        documentation :'队伍变更',
        data: 'event'
    },
    {
        label: 'transportingNewUnit',
        insertText: 'transportingNewUnit',
        labelDetails: { detail :' event 单位进入该单位运输槽位时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'单位进入该单位运输槽位时触发',
        documentation :'装载新的单位',
        data: 'event'
    },
    {
        label: 'transportUnloadedOrRemovedUnit',
        insertText: 'transportUnloadedOrRemovedUnit',
        labelDetails: { detail :' event 运输槽添加新的单位或是删除单位时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'运输槽添加新的单位或是删除单位时触发',
        documentation :'装载卸载或删除',
        data: 'event'
    },
    {
        label: 'tookDamage',
        insertText: 'tookDamage',
        labelDetails: { detail :' event 单位受到抛射体伤害时触发,可以指定造成伤害的抛射体标签', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'单位受到抛射体伤害时触发,可以指定造成伤害的抛射体标签',
        documentation :'受伤',
        data: 'event'
    },
    {
        label: 'enteredTransport',
        insertText: 'enteredTransport',
        labelDetails: { detail :' event 进入装载时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'进入装载时触发',
        documentation :'进入装载',
        data: 'event'
    },
    {
        label: 'leftTransport',
        insertText: 'leftTransport',
        labelDetails: { detail :' event 离开装载时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'离开装载时触发',
        documentation :'离开装载',
        data: 'event'
    },
    {
        label: 'newMessage',
        insertText: 'newMessage',
        labelDetails: { detail :' event 用于接收其他单位发来的message,类似自定义事件,可以指定标签', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'用于接收其他单位发来的message,类似自定义事件,可以指定标签',
        documentation :'收到新消息',
        data: 'event'
    },
    {
        label: 'attachmentRemoved',
        insertText: 'attachmentRemoved',
        labelDetails: { detail :' event 附属脱离或是被删除时触发', description: '[events]' },
        kind: CompletionItemKind.Text,
        detail :'附属脱离或是被删除时触发',
        documentation :'附属脱离',
        data: 'event'
    },
];