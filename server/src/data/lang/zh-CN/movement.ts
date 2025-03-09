import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const MOVEMENT: CompletionItem[] = [
    {
        label: 'movementType',
        insertText: 'movementType:',
        labelDetails: { detail :' 运动类型', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'运动类型',
        documentation :'定义单位将能够通过的地形以及与单位类型相关的其他属性.类型:LAND,BUILDING,AIR,WATER,HOVER,OVER_CLIFF,OVER_CLIFF_WATER'
    },
    {
        label: 'moveSpeed',
        insertText: 'moveSpeed:',
        labelDetails: { detail :' 移动速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'移动速度',
        documentation :'单位的最大移动速度.'
    },
    {
        label: 'moveAccelerationSpeed',
        insertText: 'moveAccelerationSpeed:',
        labelDetails: { detail :' 加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'加速度',
        documentation :'定义单位加速到最大速度的加速度.'
    },
    {
        label: 'moveDecelerationSpeed',
        insertText: 'moveDecelerationSpeed:',
        labelDetails: { detail :' 减速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'减速度',
        documentation :'与加速度相对应得减速度.不要设的太小.'
    },
    {
        label: 'reverseSpeedPercentage',
        insertText: 'reverseSpeedPercentage:',
        labelDetails: { detail :' 倒车速度比率', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'倒车速度比率',
        documentation :'0.6默认值.超过0.4会在短距离(以40％的速度)时反转. 如果设置为1前进后退则不转弯. 填0时禁止倒退,必须旋转.'
    },
    {
        label: 'landOnGround',
        insertText: 'landOnGround:',
        labelDetails: { detail :' 降落到地面', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'降落到地面',
        documentation :'闲置时使飞行器降落.'
    },
    {
        label: 'targetHeight',
        insertText: 'targetHeight:',
        labelDetails: { detail :' 到达高度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'到达高度',
        documentation :'默认为0,但如果运动类型为空军则默认为35.'
    },
    {
        label: 'targetHeightDrift',
        insertText: 'targetHeightDrift:',
        labelDetails: { detail :' 高度浮动', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'高度浮动',
        documentation :'默认0,空军1.5.单位高度上下浮动高度.'
    },
    {
        label: 'startingHeightOffset',
        insertText: 'startingHeightOffset:',
        labelDetails: { detail :' 创建时高度偏移', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'创建时高度偏移',
        documentation :'单位在创建时高度.负数上升比较慢.'
    },
    {
        label: 'maxTurnSpeed',
        insertText: 'maxTurnSpeed:',
        labelDetails: { detail :' 转弯速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'转弯速度',
        documentation :'最大转弯速度.'
    },
    {
        label: 'turnAcceleration',
        insertText: 'turnAcceleration:',
        labelDetails: { detail :' 转弯加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'转弯加速度',
        documentation :'转弯加速度.'
    },
    {
        label: 'moveSlidingMode',
        insertText: 'moveSlidingMode:',
        labelDetails: { detail :' 移动后滑动', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'移动后滑动',
        documentation :'移动后滑动,相当于惯性.和单位的速度,加速度,转弯速度有关.True时受推力影响'
    },
    {
        label: 'moveIgnoringBody',
        insertText: 'moveIgnoringBody:',
        labelDetails: { detail :' 移动忽略转向', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'移动忽略转向',
        documentation :'true效果即不必转弯便能运动,false效果即原地转弯完成才能运动'
    },
    {
        label: 'moveSlidingDir',
        insertText: 'moveSlidingDir:',
        labelDetails: { detail :' 移动滑动角度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'移动滑动角度',
        documentation :'移动滑动角度.无明显效果.'
    },
    {
        label: 'joinsGroupFormations',
        insertText: 'joinsGroupFormations:',
        labelDetails: { detail :' 加入队形', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'加入队形',
        documentation :'将单位组成小队.铁锈调集大量部队时将其组成方阵以降低运算压力,但队形可能影响速度或浪费时间.禁用后则不参与组队.'
    },
    {
        label: 'ignoreMoveOrders',
        insertText: 'ignoreMoveOrders:',
        labelDetails: { detail :' 忽略移动指令', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'忽略移动指令',
        documentation :'忽略移动指令,此代码强制要求移动速度为0,适用例子:红警中单位部署忽略移动指令.'
    },
    {
        label: 'moveYAxisScaling',
        insertText: 'moveYAxisScaling:',
        labelDetails: { detail :' Y轴速度比例', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'Y轴速度比例',
        documentation :'垂直方向单位移动速度乘数,适用于2.5D,也就是用铁锈模拟3D.典型如红警.'
    },
    {
        label: 'slowDeathFall',
        insertText: 'slowDeathFall:',
        labelDetails: { detail :' 死亡缓慢降落', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'死亡缓慢降落',
        documentation :'为true时,被击毁时降落速度减慢,并且向前滑行一段距离.注意,必须设置死亡图像,不然坠落后会显示生前图像,而不是直接炸掉.'
    },
    {
        label: 'heightChangeRate',
        insertText: 'heightChangeRate:',
        labelDetails: { detail :' 高度改变速率', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'高度改变速率',
        documentation :'单位改变高度的频率,无论是转换还是浮动'
    },
    {
        label: 'fallingAcceleration',
        insertText: 'fallingAcceleration:',
        labelDetails: { detail :' 降落加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'降落加速度',
        documentation :'单位降落时的加速度'
    },
    {
        label: 'fallingAccelerationDead',
        insertText: 'fallingAccelerationDead:',
        labelDetails: { detail :' 坠毁加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'坠毁加速度',
        documentation :'单位被摧毁时降落的加速度'
    },
];