import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const PLACEMENTRULE: CompletionItem[] = [
    {
        label: 'anyRuleInGroup',
        insertText: 'anyRuleInGroup:',
        labelDetails: { detail :' string 放置规则组', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'放置规则组',
        documentation :'放置规则组名.(仅需要通过此组规则中的1条,而不是全部通过.在其他放置规则中可使用相同的组名称来创建组.)',
        data: 'string'
    },
    {
        label: 'searchTags',
        insertText: 'searchTags:',
        labelDetails: { detail :' string 检索标签', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'检索标签',
        documentation :'搜索至少包含这些标签之一的任何单位',
        data: 'string'
    },
    {
        label: 'searchTeam',
        insertText: 'searchTeam:',
        labelDetails: { detail :' string 检索队伍', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'检索队伍',
        documentation :'要搜索的团队可以是:自身|中立|盟友非自身|盟友|敌人|任何.  own|neutral|allyNotOwn|ally|enemy|any',
        data: 'string'
    },
    {
        label: 'searchOffsetX',
        insertText: 'searchOffsetX:',
        labelDetails: { detail :' float 检索偏移', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'检索偏移',
        documentation :'检索偏移,默认为0',
        data: 'float'
    },
    {
        label: 'searchOffsetY',
        insertText: 'searchOffsetY:',
        labelDetails: { detail :' float 检索偏移', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'检索偏移',
        documentation :'检索偏移,默认为0',
        data: 'float'
    },
    {
        label: 'searchDistance',
        insertText: 'searchDistance:',
        labelDetails: { detail :' float 搜索距离', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'搜索距离',
        documentation :'搜索距离',
        data: 'float'
    },
    {
        label: 'excludeIncompleteBuildings',
        insertText: 'excludeIncompleteBuildings:',
        labelDetails: { detail :' bool 排除不完整建筑', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'排除不完整建筑',
        documentation :'排除不完整的建筑',
        data: 'bool'
    },
    {
        label: 'excludeNonBuildings',
        insertText: 'excludeNonBuildings:',
        labelDetails: { detail :' bool 排除非建筑', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'排除非建筑',
        documentation :'排除非建筑',
        data: 'bool'
    },
    {
        label: 'minCount',
        insertText: 'minCount:',
        labelDetails: { detail :' int 最小数量', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'最小数量',
        documentation :'设定需要在搜索中找到的单位的最小数量.(如需要靠近某物).默认值为0',
        data: 'int'
    },
    {
        label: 'maxCount',
        insertText: 'maxCount:',
        labelDetails: { detail :' int 最大数量', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'最大数量',
        documentation :'在匹配失败前设置最大单位数量(例如不能接近某个值).默认为无限的',
        data: 'int'
    },
    {
        label: 'blocksPlacement',
        insertText: 'blocksPlacement:',
        labelDetails: { detail :' bool 禁止放置', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'禁止放置',
        documentation :'禁止放置.默认为true.',
        data: 'bool'
    },
    {
        label: 'cannotPlaceMessage',
        insertText: 'cannotPlaceMessage:',
        labelDetails: { detail :' other 失败信息', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'失败信息',
        documentation :'如果此放置规则失败,则会向玩家显示消息(将成为mergedRuleGroup中的第一个失败规则)',
        data: 'other'
    },
    {
        label: 'cannotPlaceMessage_language',
        insertText: 'cannotPlaceMessage_language:',
        labelDetails: { detail :' other 失败信息(多语言)', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'失败信息(多语言)',
        documentation :'如果此放置规则失败,则会向玩家显示消息(将成为mergedRuleGroup中的第一个失败规则)(支持多种语言显示)',
        data: 'other'
    },
    {
        label: 'checkEachTile',
        insertText: 'checkEachTile:',
        labelDetails: { detail :' bool 检查每个地块', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'检查每个地块',
        documentation :'[true / false]默认为true(仅对测试单元中心设置为false,true会检查显示在放置网格上的单元下方的每个图块)',
        data: 'bool'
    },
    {
        label: 'aiSuggestionOnly',
        insertText: 'aiSuggestionOnly:',
        labelDetails: { detail :' bool 仅限ai', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        detail :'仅限ai',
        documentation :'仅影响ai的行为',
        data: 'bool'
    },
];