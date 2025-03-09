import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const SPAWNUNIT: CompletionItem[] = [
    {
        label: 'spawnUnits',
        insertText: 'spawnUnits',
        labelDetails: { detail :' parameter 用于action生成单位,大多数单位的生成键都支持多个单位且带有参数.注意:与spawnUnit不能混用spawnUnit用于抛射体.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'用于action生成单位,大多数单位的生成键都支持多个单位且带有参数.注意:与spawnUnit不能混用spawnUnit用于抛射体.',
        documentation :'产生单位',
        data: 'parameter'
    },
    {
        label: 'neutralTeam',
        insertText: 'neutralTeam',
        labelDetails: { detail :' parameter 生成这个单位归属于中立队伍而不是所属玩家.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成这个单位归属于中立队伍而不是所属玩家.',
        documentation :'中立',
        data: 'parameter'
    },
    {
        label: 'aggressiveTeam',
        insertText: 'aggressiveTeam',
        labelDetails: { detail :' parameter ', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'敌对队伍',
        data: 'parameter'
    },
    {
        label: 'setToTeamOfLastAttacker',
        insertText: 'setToTeamOfLastAttacker',
        labelDetails: { detail :' parameter 生成单位归属于攻击者.(在[core] unitsSpawnedOnDeath上有用)', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位归属于攻击者.(在[core] unitsSpawnedOnDeath上有用)',
        documentation :'所属攻击者',
        data: 'parameter'
    },
    {
        label: 'spawnChance',
        insertText: 'spawnChance',
        labelDetails: { detail :' parameter 生成这个单位几率. 默认为1.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成这个单位几率. 默认为1.',
        documentation :'产生几率',
        data: 'parameter'
    },
    {
        label: 'spawnSource',
        insertText: 'spawnSource',
        labelDetails: { detail :' parameter 改变产生地点和产生单位的队伍到这个单位参考.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'改变产生地点和产生单位的队伍到这个单位参考.',
        documentation :'产生源',
        data: 'parameter'
    },
    {
        label: 'maxSpawnLimit',
        insertText: 'maxSpawnLimit',
        labelDetails: { detail :' parameter 与spawnChance一起使用时,总共可以产生的最大单位数.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'与spawnChance一起使用时,总共可以产生的最大单位数.',
        documentation :'最大生成数量',
        data: 'parameter'
    },
    {
        label: 'gridAlign',
        insertText: 'gridAlign',
        labelDetails: { detail :' parameter 将生成位置与网格对齐,对建筑物有用', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'将生成位置与网格对齐,对建筑物有用',
        documentation :'对齐网格',
        data: 'parameter'
    },
    {
        label: 'skipIfOverlapping',
        insertText: 'skipIfOverlapping',
        labelDetails: { detail :' parameter 如果在无效的位置忽略单位生成. 例如基于LAND的单位不会产生在水中.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'如果在无效的位置忽略单位生成. 例如基于LAND的单位不会产生在水中.',
        documentation :'跳过条件',
        data: 'parameter'
    },
    {
        label: 'falling',
        insertText: 'falling',
        labelDetails: { detail :' parameter ', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'降落',
        data: 'parameter'
    },
    {
        label: 'offsetX',
        insertText: 'offsetX',
        labelDetails: { detail :' parameter 生成单位位置X偏移量,单位像素', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位位置X偏移量,单位像素',
        documentation :'X偏移',
        data: 'parameter'
    },
    {
        label: 'offsetY',
        insertText: 'offsetY',
        labelDetails: { detail :' parameter 生成单位位置Y偏移量', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位位置Y偏移量',
        documentation :'Y偏移',
        data: 'parameter'
    },
    {
        label: 'offsetRandomX',
        insertText: 'offsetRandomX',
        labelDetails: { detail :' parameter 生成单位位置X随机偏移量', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位位置X随机偏移量',
        documentation :'X随机偏移',
        data: 'parameter'
    },
    {
        label: 'offsetRandomY',
        insertText: 'offsetRandomY',
        labelDetails: { detail :' parameter 生成单位位置Y随机偏移量', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位位置Y随机偏移量',
        documentation :'Y随机偏移',
        data: 'parameter'
    },
    {
        label: 'offsetRandomXY',
        insertText: 'offsetRandomXY',
        labelDetails: { detail :' parameter ', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'XY随机偏移',
        data: 'parameter'
    },
    {
        label: 'offsetRandomDir',
        insertText: 'offsetRandomDir',
        labelDetails: { detail :' parameter 生成单位时角度随机偏移量', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位时角度随机偏移量',
        documentation :'角度随机偏移',
        data: 'parameter'
    },
    {
        label: 'offsetHeight',
        insertText: 'offsetHeight',
        labelDetails: { detail :' parameter 生成此单位的高度偏移量.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成此单位的高度偏移量.',
        documentation :'高度偏移',
        data: 'parameter'
    },
    {
        label: 'offsetDir',
        insertText: 'offsetDir',
        labelDetails: { detail :' parameter 生成单位时角度偏移量.单位度.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成单位时角度偏移量.单位度.',
        documentation :'角度偏移',
        data: 'parameter'
    },
    {
        label: 'addResources',
        insertText: 'addResources',
        labelDetails: { detail :' parameter 给生成单位这些资源,可用于设置触发动作的标志', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'给生成单位这些资源,可用于设置触发动作的标志',
        documentation :'增加资源',
        data: 'parameter'
    },
    {
        label: 'transportedUnitsToTransfer',
        insertText: 'transportedUnitsToTransfer',
        labelDetails: { detail :' parameter 将指定数量的单元放入生成出的单元的运输槽位中.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'将指定数量的单元放入生成出的单元的运输槽位中.',
        documentation :'载员至载具',
        data: 'parameter'
    },
    {
        label: 'copyWaypointsFrom',
        insertText: 'copyWaypointsFrom',
        labelDetails: { detail :' parameter 复制目标上的所有路径点到创建的单位.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'复制目标上的所有路径点到创建的单位.',
        documentation :'复制路径来自',
        data: 'parameter'
    },
    {
        label: 'alwaysStartDirAtZero',
        insertText: 'alwaysStartDirAtZero',
        labelDetails: { detail :' parameter 生成出的单位朝向总是设置为零度.即朝右.', description: '[spawnUnit]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的单位朝向总是设置为零度.即朝右.',
        documentation :'朝向总是为零',
        data: 'parameter'
    },
];