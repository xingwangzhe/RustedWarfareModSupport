import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const AI: CompletionItem[] = [
    {
        label: 'useAsBuilder',
        insertText: 'useAsBuilder:',
        labelDetails: { detail :' bool 用作建造者', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'用作建造者',
        documentation :'作为建造者.如果单位可以建造或维修建筑物,则设置为true. 默认为[core] isBuilder.',
        data: 'bool'
    },
    {
        label: 'useAsTransport',
        insertText: 'useAsTransport:',
        labelDetails: { detail :' bool 用作运输', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'用作运输',
        documentation :'作为载具.如果单位可以运输单位,则默认为true.如果你的单位可以运输又能攻击,则AI可能囤积起来而不攻击,则需要设置false.',
        data: 'bool'
    },
    {
        label: 'useAsAttacker',
        insertText: 'useAsAttacker:',
        labelDetails: { detail :' bool 用作攻击者', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'用作攻击者',
        documentation :'是否作为攻击者.',
        data: 'bool'
    },
    {
        label: 'useAsHarvester',
        insertText: 'useAsHarvester:',
        labelDetails: { detail :' bool 用作采集', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'用作采集',
        documentation :'作为采集者.如果单位可以回收资源,则默认为true',
        data: 'bool'
    },
    {
        label: 'disableUse',
        insertText: 'disableUse:',
        labelDetails: { detail :' bool 禁用', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'禁用',
        documentation :'禁止AI建立这个单位或建筑物',
        data: 'bool'
    },
    {
        label: 'ai_upgradePriority',
        insertText: 'ai_upgradePriority:',
        labelDetails: { detail :' float AI升级优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'AI升级优先级',
        documentation :'升级优先级.默认值为0.06. 设置在0-1之间,越高,表示AI更有可能先于其他升级该单位.',
        data: 'float'
    },
    {
        label: 'buildPriority',
        insertText: 'buildPriority:',
        labelDetails: { detail :' float 建造优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'建造优先级',
        documentation :'建造优先级,填0-1. 越大越AI越可能造.Luke的的第一座土地工厂使用0.8,空中工厂使用0.48,第一炮塔使用0.47.',
        data: 'float'
    },
    {
        label: 'noneInBaseExtraPriority',
        insertText: 'noneInBaseExtraPriority:',
        labelDetails: { detail :' float 基地内没有时优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'基地内没有时优先级',
        documentation :'如果AI基地中不存在此单位,则增加其优先级.',
        data: 'float'
    },
    {
        label: 'noneGlobalExtraPriority',
        insertText: 'noneGlobalExtraPriority:',
        labelDetails: { detail :' float 全图没有时优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'全图没有时优先级',
        documentation :'如果此单位在地图上的任何位置都不存在,则增加其优先级.',
        data: 'float'
    },
    {
        label: 'nonInBaseExtraPriority',
        insertText: 'nonInBaseExtraPriority:',
        labelDetails: { detail :' float 基地内没有时的优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'基地内没有时的优先级',
        documentation :'如果AI基地中不存在此单位,则增加其优先级.',
        data: 'float'
    },
    {
        label: 'nonGlobalExtraPriority',
        insertText: 'nonGlobalExtraPriority:',
        labelDetails: { detail :' float 全图没有时的优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'全图没有时的优先级',
        documentation :'如果此单位在地图上的任何位置都不存在,则增加其优先级.',
        data: 'float'
    },
    {
        label: 'recommendedInEachBaseNum',
        insertText: 'recommendedInEachBaseNum:',
        labelDetails: { detail :' int 推荐在每个基地的数量', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'推荐在每个基地的数量',
        documentation :'推荐在每个基地中的数量.',
        data: 'int'
    },
    {
        label: 'recommendedInEachBasePriorityIfUnmet',
        insertText: 'recommendedInEachBasePriorityIfUnmet:',
        labelDetails: { detail :' float 推荐条件不满足时优先级', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'推荐条件不满足时优先级',
        documentation :'如果未满足,推荐在基地中的优先级.',
        data: 'float'
    },
    {
        label: 'upgradedFrom',
        insertText: 'upgradedFrom:',
        labelDetails: { detail :' string 升级自', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'升级自',
        documentation :'创建到另一个单位的链接,用于保留同一单位已升级和未升级的计数.',
        data: 'string'
    },
    {
        label: 'maxGlobal',
        insertText: 'maxGlobal:',
        labelDetails: { detail :' int 全图最大数量', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'全图最大数量',
        documentation :'全图最多拥有的数量.',
        data: 'int'
    },
    {
        label: 'maxEachBase',
        insertText: 'maxEachBase:',
        labelDetails: { detail :' int 每个基地最大数量', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'每个基地最大数量',
        documentation :'每个基地最多拥有的数量.',
        data: 'int'
    },
    {
        label: 'notPassivelyTargetedByOtherUnits',
        insertText: 'notPassivelyTargetedByOtherUnits:',
        labelDetails: { detail :' bool 不被动地被其他单位瞄准', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'不被动地被其他单位瞄准',
        documentation :'允许更好的墙壁建筑物,默认情况下,这些建筑物不会瞄准目标.用于围墙',
        data: 'bool'
    },
    {
        label: 'lowPriorityTargetForOtherUnits',
        insertText: 'lowPriorityTargetForOtherUnits:',
        labelDetails: { detail :' bool 低优先级目标', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'低优先级目标',
        documentation :'其它单位不优先考虑此单位.用于围墙',
        data: 'bool'
    },
    {
        label: 'aiTags',
        insertText: 'aiTags:',
        labelDetails: { detail :' string ai标签', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'ai标签',
        documentation :'采集',
        data: 'string'
    },
    {
        label: 'whenUsingAsHarvester_recommendedInEachBase',
        insertText: 'whenUsingAsHarvester_recommendedInEachBase:',
        labelDetails: { detail :' int 每个基地此采集者数量', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'每个基地此采集者数量',
        documentation :'当此单位用作采集者时,每个基地推荐的采集者数量.',
        data: 'int'
    },
    {
        label: 'whenUsingAsHarvester_recommendedGlobal',
        insertText: 'whenUsingAsHarvester_recommendedGlobal:',
        labelDetails: { detail :' int 全地图推荐采集者数量', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'全地图推荐采集者数量',
        documentation :'当此单位用作采集者时,全图推荐的采集者数量.',
        data: 'int'
    },
    {
        label: 'whenUsingAsHarvester_includeOtherHarvesterCounts',
        insertText: 'whenUsingAsHarvester_includeOtherHarvesterCounts:',
        labelDetails: { detail :' bool 是否算在采集者计数中', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'是否算在采集者计数中',
        documentation :'当此单位用作采集者时,是否算在其它采集者统计中.',
        data: 'bool'
    },
    {
        label: 'onlyUseAsHarvester_ifBaseHasUnitTagged',
        insertText: 'onlyUseAsHarvester_ifBaseHasUnitTagged:',
        labelDetails: { detail :' string 有此标签才作为采集者', description: '[ai]' },
        kind: CompletionItemKind.Text,
        detail :'有此标签才作为采集者',
        documentation :'只有当基地有单位标记时才可以作为采集者使用.',
        data: 'string'
    },
];