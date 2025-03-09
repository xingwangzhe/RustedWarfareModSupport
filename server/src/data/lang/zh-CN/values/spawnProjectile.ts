import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const SPAWNPROJECTILE: CompletionItem[] = [
    {
        label: 'spawnChance',
        insertText: 'spawnChance',
        labelDetails: { detail :' parameter 抛射体产生几率,默认为1', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体产生几率,默认为1',
        documentation :'产生机会',
        data: 'parameter'
    },
    {
        label: 'maxSpawnLimit',
        insertText: 'maxSpawnLimit',
        labelDetails: { detail :' parameter 抛射体的最大产生数量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体的最大产生数量',
        documentation :'最大产生限制',
        data: 'parameter'
    },
    {
        label: 'recursionLimit',
        insertText: 'recursionLimit',
        labelDetails: { detail :' parameter 用于限制抛射体生成抛射体自身的上限,而不会产生死循环.这对自动生成很有用,因为不会无限生成,有利于链条爆炸', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'用于限制抛射体生成抛射体自身的上限,而不会产生死循环.这对自动生成很有用,因为不会无限生成,有利于链条爆炸',
        documentation :'递归限制',
        data: 'parameter'
    },
    {
        label: 'offsetX',
        insertText: 'offsetX',
        labelDetails: { detail :' parameter 生成出的抛射体的x轴偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的x轴偏移量',
        documentation :'偏移量x',
        data: 'parameter'
    },
    {
        label: 'offsetY',
        insertText: 'offsetY',
        labelDetails: { detail :' parameter 生成出的抛射体的y轴偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的y轴偏移量',
        documentation :'偏移量y',
        data: 'parameter'
    },
    {
        label: 'offsetRandomX',
        insertText: 'offsetRandomX',
        labelDetails: { detail :' parameter 生成出的抛射体的x轴的随机偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的x轴的随机偏移量',
        documentation :'偏移随机X',
        data: 'parameter'
    },
    {
        label: 'offsetRandomY',
        insertText: 'offsetRandomY',
        labelDetails: { detail :' parameter 生成出的抛射体的y轴的随机偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的y轴的随机偏移量',
        documentation :'偏移随机Y',
        data: 'parameter'
    },
    {
        label: 'offsetRandomXY',
        insertText: 'offsetRandomXY',
        labelDetails: { detail :' parameter 生成出的抛射体在两个方向的偏移随机偏移,使真正的在一个区域随机化.', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体在两个方向的偏移随机偏移,使真正的在一个区域随机化.',
        documentation :'偏移随机XY',
        data: 'parameter'
    },
    {
        label: 'offsetHeight',
        insertText: 'offsetHeight',
        labelDetails: { detail :' parameter 生成出的抛射体的z轴也就是高度偏移', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的z轴也就是高度偏移',
        documentation :'偏移高度',
        data: 'parameter'
    },
    {
        label: 'offsetDir',
        insertText: 'offsetDir',
        labelDetails: { detail :' parameter 生成出的抛射体的角度偏移', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的角度偏移',
        documentation :'偏移角度',
        data: 'parameter'
    },
    {
        label: 'offsetRandomDir',
        insertText: 'offsetRandomDir',
        labelDetails: { detail :' parameter 生成出的抛射体的角度随机偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的角度随机偏移量',
        documentation :'偏移随机角度',
        data: 'parameter'
    },
    {
        label: 'xOffsetRelative',
        insertText: 'xOffsetRelative',
        labelDetails: { detail :' parameter 生成出的抛射体的x轴的相对偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的x轴的相对偏移量',
        documentation :'x相对偏移',
        data: 'parameter'
    },
    {
        label: 'yOffsetRelative',
        insertText: 'yOffsetRelative',
        labelDetails: { detail :' parameter 生成出的抛射体的y轴的相对偏移量', description: '[spawnProjectile]' },
        kind: CompletionItemKind.Text,
        detail :'生成出的抛射体的y轴的相对偏移量',
        documentation :'y相对偏移',
        data: 'parameter'
    },
];