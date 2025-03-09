import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const MOVEMENT: CompletionItem[] = [
    {
        label: 'movementType',
        insertText: 'movementType:',
        labelDetails: { detail :' other 运动类型', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'运动类型',
        documentation :'定义单位将能够通过的地形以及与单位类型相关的其他属性.类型:LAND,BUILDING,AIR,WATER,HOVER,OVER_CLIFF,OVER_CLIFF_WATER',
        data: 'other'
    },
    {
        label: 'moveSpeed',
        insertText: 'moveSpeed:',
        labelDetails: { detail :' float 移动速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'移动速度',
        documentation :'单位的最大移动速度.',
        data: 'float'
    },
    {
        label: 'moveAccelerationSpeed',
        insertText: 'moveAccelerationSpeed:',
        labelDetails: { detail :' float 加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'加速度',
        documentation :'定义单位加速到最大速度的加速度.',
        data: 'float'
    },
    {
        label: 'moveDecelerationSpeed',
        insertText: 'moveDecelerationSpeed:',
        labelDetails: { detail :' float 减速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'减速度',
        documentation :'与加速度相对应得减速度.不要设的太小.',
        data: 'float'
    },
    {
        label: 'reverseSpeedPercentage',
        insertText: 'reverseSpeedPercentage:',
        labelDetails: { detail :' float 倒车速度比率', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'倒车速度比率',
        documentation :'0.6默认值.超过0.4会在短距离(以40％的速度)时反转. 如果设置为1前进后退则不转弯. 填0时禁止倒退,必须旋转.',
        data: 'float'
    },
    {
        label: 'landOnGround',
        insertText: 'landOnGround:',
        labelDetails: { detail :' other 降落到地面', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'降落到地面',
        documentation :'闲置时使飞行器降落.',
        data: 'other'
    },
    {
        label: 'targetHeight',
        insertText: 'targetHeight:',
        labelDetails: { detail :' float 到达高度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'到达高度',
        documentation :'默认为0,但如果运动类型为空军则默认为35.',
        data: 'float'
    },
    {
        label: 'targetHeightDrift',
        insertText: 'targetHeightDrift:',
        labelDetails: { detail :' float 高度浮动', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'高度浮动',
        documentation :'默认0,空军1.5.单位高度上下浮动高度.',
        data: 'float'
    },
    {
        label: 'startingHeightOffset',
        insertText: 'startingHeightOffset:',
        labelDetails: { detail :' float 创建时高度偏移', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'创建时高度偏移',
        documentation :'单位在创建时高度.负数上升比较慢.',
        data: 'float'
    },
    {
        label: 'maxTurnSpeed',
        insertText: 'maxTurnSpeed:',
        labelDetails: { detail :' float 转弯速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'转弯速度',
        documentation :'最大转弯速度.',
        data: 'float'
    },
    {
        label: 'turnAcceleration',
        insertText: 'turnAcceleration:',
        labelDetails: { detail :' float 转弯加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'转弯加速度',
        documentation :'转弯加速度.',
        data: 'float'
    },
    {
        label: 'moveSlidingMode',
        insertText: 'moveSlidingMode:',
        labelDetails: { detail :' bool 移动后滑动', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'移动后滑动',
        documentation :'移动后滑动,相当于惯性.和单位的速度,加速度,转弯速度有关.True时受推力影响',
        data: 'bool'
    },
    {
        label: 'moveIgnoringBody',
        insertText: 'moveIgnoringBody:',
        labelDetails: { detail :' bool 移动忽略转向', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'移动忽略转向',
        documentation :'true效果即不必转弯便能运动,false效果即原地转弯完成才能运动',
        data: 'bool'
    },
    {
        label: 'moveSlidingDir',
        insertText: 'moveSlidingDir:',
        labelDetails: { detail :' int 移动滑动角度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'移动滑动角度',
        documentation :'移动滑动角度.无明显效果.',
        data: 'int'
    },
    {
        label: 'joinsGroupFormations',
        insertText: 'joinsGroupFormations:',
        labelDetails: { detail :' bool 加入队形', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'加入队形',
        documentation :'将单位组成小队.铁锈调集大量部队时将其组成方阵以降低运算压力,但队形可能影响速度或浪费时间.禁用后则不参与组队.',
        data: 'bool'
    },
    {
        label: 'ignoreMoveOrders',
        insertText: 'ignoreMoveOrders:',
        labelDetails: { detail :' bool 忽略移动指令', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'忽略移动指令',
        documentation :'忽略移动指令,此代码强制要求移动速度为0,适用例子:红警中单位部署忽略移动指令.',
        data: 'bool'
    },
    {
        label: 'moveYAxisScaling',
        insertText: 'moveYAxisScaling:',
        labelDetails: { detail :' float Y轴速度比例', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'Y轴速度比例',
        documentation :'垂直方向单位移动速度乘数,适用于2.5D,也就是用铁锈模拟3D.典型如红警.',
        data: 'float'
    },
    {
        label: 'slowDeathFall',
        insertText: 'slowDeathFall:',
        labelDetails: { detail :' bool 死亡缓慢降落', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'死亡缓慢降落',
        documentation :'为true时,被击毁时降落速度减慢,并且向前滑行一段距离.注意,必须设置死亡图像,不然坠落后会显示生前图像,而不是直接炸掉.',
        data: 'bool'
    },
    {
        label: 'heightChangeRate',
        insertText: 'heightChangeRate:',
        labelDetails: { detail :' float 高度改变速率', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'高度改变速率',
        documentation :'单位改变高度的频率,无论是转换还是浮动',
        data: 'float'
    },
    {
        label: 'fallingAcceleration',
        insertText: 'fallingAcceleration:',
        labelDetails: { detail :' float 降落加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'降落加速度',
        documentation :'单位降落时的加速度',
        data: 'float'
    },
    {
        label: 'fallingAccelerationDead',
        insertText: 'fallingAccelerationDead:',
        labelDetails: { detail :' float 坠毁加速度', description: '[movement]' },
        kind: CompletionItemKind.Text,
        detail :'坠毁加速度',
        documentation :'单位被摧毁时降落的加速度',
        data: 'float'
    },
];