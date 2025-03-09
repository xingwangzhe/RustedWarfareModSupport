import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const PLACEMENTRULE: CompletionItem[] = [
    {
        label: 'anyRuleInGroup',
        insertText: 'anyRuleInGroup:',
        labelDetails: { detail :' 放置规则组', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'放置规则组',
        documentation :'放置规则组名.(仅需要通过此组规则中的1条,而不是全部通过.在其他放置规则中可使用相同的组名称来创建组.)'
    },
    {
        label: 'searchTags',
        insertText: 'searchTags:',
        labelDetails: { detail :' 检索标签', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'检索标签',
        documentation :'搜索至少包含这些标签之一的任何单位'
    },
    {
        label: 'searchTeam',
        insertText: 'searchTeam:',
        labelDetails: { detail :' 检索队伍', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'检索队伍',
        documentation :'要搜索的团队可以是:自身|中立|盟友非自身|盟友|敌人|任何.  own|neutral|allyNotOwn|ally|enemy|any'
    },
    {
        label: 'searchOffsetX',
        insertText: 'searchOffsetX:',
        labelDetails: { detail :' 检索偏移', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'检索偏移',
        documentation :'检索偏移,默认为0'
    },
    {
        label: 'searchOffsetY',
        insertText: 'searchOffsetY:',
        labelDetails: { detail :' 检索偏移', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'检索偏移',
        documentation :'检索偏移,默认为0'
    },
    {
        label: 'searchDistance',
        insertText: 'searchDistance:',
        labelDetails: { detail :' 搜索距离', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'搜索距离',
        documentation :'搜索距离'
    },
    {
        label: 'excludeIncompleteBuildings',
        insertText: 'excludeIncompleteBuildings:',
        labelDetails: { detail :' 排除不完整建筑', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'排除不完整建筑',
        documentation :'排除不完整的建筑'
    },
    {
        label: 'excludeNonBuildings',
        insertText: 'excludeNonBuildings:',
        labelDetails: { detail :' 排除非建筑', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'排除非建筑',
        documentation :'排除非建筑'
    },
    {
        label: 'minCount',
        insertText: 'minCount:',
        labelDetails: { detail :' 最小数量', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'最小数量',
        documentation :'设定需要在搜索中找到的单位的最小数量.(如需要靠近某物).默认值为0'
    },
    {
        label: 'maxCount',
        insertText: 'maxCount:',
        labelDetails: { detail :' 最大数量', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'最大数量',
        documentation :'在匹配失败前设置最大单位数量(例如不能接近某个值).默认为无限的'
    },
    {
        label: 'blocksPlacement',
        insertText: 'blocksPlacement:',
        labelDetails: { detail :' 禁止放置', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'禁止放置',
        documentation :'禁止放置.默认为true.'
    },
    {
        label: 'cannotPlaceMessage',
        insertText: 'cannotPlaceMessage:',
        labelDetails: { detail :' 失败信息', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'失败信息',
        documentation :'如果此放置规则失败,则会向玩家显示消息(将成为mergedRuleGroup中的第一个失败规则)'
    },
    {
        label: 'cannotPlaceMessage_language',
        insertText: 'cannotPlaceMessage_language:',
        labelDetails: { detail :' 失败信息(多语言)', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'失败信息(多语言)',
        documentation :'如果此放置规则失败,则会向玩家显示消息(将成为mergedRuleGroup中的第一个失败规则)(支持多种语言显示)'
    },
    {
        label: 'checkEachTile',
        insertText: 'checkEachTile:',
        labelDetails: { detail :' 检查每个地块', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'检查每个地块',
        documentation :'[true / false]默认为true(仅对测试单元中心设置为false,true会检查显示在放置网格上的单元下方的每个图块)'
    },
    {
        label: 'aiSuggestionOnly',
        insertText: 'aiSuggestionOnly:',
        labelDetails: { detail :' 仅限ai', description: '[placementRule]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'仅限ai',
        documentation :'仅影响ai的行为'
    },
];