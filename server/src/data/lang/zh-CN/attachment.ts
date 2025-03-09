import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ATTACHMENT: CompletionItem[] = [
    {
        label: 'x',
        insertText: 'x:',
        labelDetails: { detail :' x', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'x',
        documentation :'子单位x轴位置'
    },
    {
        label: 'y',
        insertText: 'y:',
        labelDetails: { detail :' y', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'y',
        documentation :'子单位Y轴位置'
    },
    {
        label: 'height',
        insertText: 'height:',
        labelDetails: { detail :' 高度', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'高度',
        documentation :'子单位高度.'
    },
    {
        label: 'lockDir',
        insertText: 'lockDir:',
        labelDetails: { detail :' 锁定角度', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'锁定角度',
        documentation :'锁定附属的角度为0'
    },
    {
        label: 'idleDir',
        insertText: 'idleDir:',
        labelDetails: { detail :' 闲置方向', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'闲置方向',
        documentation :'闲置时角度.'
    },
    {
        label: 'idleDirReversing',
        insertText: 'idleDirReversing:',
        labelDetails: { detail :' 闲置方向反转', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'闲置方向反转',
        documentation :'允许朝向反转,比如重坦倒退移动时炮塔反转,而不需要整个单位转向.'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' 是可见', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'是可见',
        documentation :'是可见的.'
    },
    {
        label: 'onCreateSpawnUnitOf',
        insertText: 'onCreateSpawnUnitOf:',
        labelDetails: { detail :' 创建时生成单位', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'创建时生成单位',
        documentation :'此创造时也产生此子单位.'
    },
    {
        label: 'canBeAttackedAndDamaged',
        insertText: 'canBeAttackedAndDamaged:',
        labelDetails: { detail :' 可被攻击或损坏', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'可被攻击或损坏',
        documentation :'可以被攻击或受到伤害.'
    },
    {
        label: 'isUnselectable',
        insertText: 'isUnselectable:',
        labelDetails: { detail :' 不可选择', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'不可选择',
        documentation :'是不可选择的.'
    },
    {
        label: 'isUnselectableAsTarget',
        insertText: 'isUnselectableAsTarget:',
        labelDetails: { detail :' 禁止选择和作为目标', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'禁止选择和作为目标',
        documentation :'默认效果为isUnselectable.可以用来创造不能被选择但是可以被攻击,回收的单位'
    },
    {
        label: 'lockLegMovement',
        insertText: 'lockLegMovement:',
        labelDetails: { detail :' 锁定腿脚运动', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'锁定腿脚运动',
        documentation :'锁定腿脚防止乱动.'
    },
    {
        label: 'freezeLegMovement',
        insertText: 'freezeLegMovement:',
        labelDetails: { detail :' 冻结腿脚运动', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'冻结腿脚运动',
        documentation :'禁用附属的腿脚自动移动'
    },
    {
        label: 'showMiniHp',
        insertText: 'showMiniHp:',
        labelDetails: { detail :' 显示迷你血条', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'显示迷你血条',
        documentation :'指附属单位下面那个又小又细的血条栏'
    },
    {
        label: 'hideHp',
        insertText: 'hideHp:',
        labelDetails: { detail :' 隐藏血量', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'隐藏血量',
        documentation :'隐藏附属的hp条'
    },
    {
        label: 'hidden',
        insertText: 'hidden:',
        labelDetails: { detail :' 隐藏', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'隐藏',
        documentation :'隐藏附属的图像'
    },
    {
        label: 'keepAliveWhenParentDies',
        insertText: 'keepAliveWhenParentDies:',
        labelDetails: { detail :' 保持子存活', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'保持子存活',
        documentation :'当此单位死亡时,子单位保持存活.'
    },
    {
        label: 'setDrawLayerOnTop',
        insertText: 'setDrawLayerOnTop:',
        labelDetails: { detail :' 绘制于顶层', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'绘制于顶层',
        documentation :'此子单位绘制于顶层.'
    },
    {
        label: 'setDrawLayerOnBottom',
        insertText: 'setDrawLayerOnBottom:',
        labelDetails: { detail :' 绘制于底层', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'绘制于底层',
        documentation :'此子单位绘制于底层.'
    },
    {
        label: 'addTransportedUnits',
        insertText: 'addTransportedUnits:',
        labelDetails: { detail :' 增加被运输单位', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'增加被运输单位',
        documentation :'添加到运输单位槽中.'
    },
    {
        label: 'lockRotation',
        insertText: 'lockRotation:',
        labelDetails: { detail :' 锁定旋转', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'锁定旋转',
        documentation :'锁定方向,禁止旋转.'
    },
    {
        label: 'rotateWithParent',
        insertText: 'rotateWithParent:',
        labelDetails: { detail :' 子单位一同旋转', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'子单位一同旋转',
        documentation :'旋转时子单位是否一同旋转.'
    },
    {
        label: 'resetRotationWhenNotAttacking',
        insertText: 'resetRotationWhenNotAttacking:',
        labelDetails: { detail :' 不攻击时重置角度', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'不攻击时重置角度',
        documentation :'不攻击时恢复到自身默认角度'
    },
    {
        label: 'deattachIfWantingToMove',
        insertText: 'deattachIfWantingToMove:',
        labelDetails: { detail :' 移动时脱离', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'移动时脱离',
        documentation :'若收到移动命令,子单位将自动分离.这包括来自action的路径点.可以用来制作机场.'
    },
    {
        label: 'unloadInCurrentPosition',
        insertText: 'unloadInCurrentPosition:',
        labelDetails: { detail :' 卸载于此位置', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'卸载于此位置',
        documentation :'在附属在父级上的原位置卸载附属'
    },
    {
        label: 'prioritizeParentsMainTarget',
        insertText: 'prioritizeParentsMainTarget:',
        labelDetails: { detail :' 优先考虑父单位的主要目标', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'优先考虑父单位的主要目标',
        documentation :'子单位优先考虑父单位当前的目标.'
    },
    {
        label: 'alwaysAllowedToAttackParentsMainTarget',
        insertText: 'alwaysAllowedToAttackParentsMainTarget:',
        labelDetails: { detail :' 总是攻击父单位的主要目标', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'总是攻击父单位的主要目标',
        documentation :'子单总是跟随攻击父单位的主要目标.'
    },
    {
        label: 'onlyAttackParentsMainTarget',
        insertText: 'onlyAttackParentsMainTarget:',
        labelDetails: { detail :' 只攻击父单位的主要目标', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'只攻击父单位的主要目标',
        documentation :'添加后附属不能攻击父级不攻击的目标'
    },
    {
        label: 'canAttack',
        insertText: 'canAttack:',
        labelDetails: { detail :' 可攻击', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'可攻击',
        documentation :'默认值为true.设置为false以阻止子单位自动攻击.'
    },
    {
        label: 'onParentTeamChangeKeepCurrentTeam',
        insertText: 'onParentTeamChangeKeepCurrentTeam:',
        labelDetails: { detail :' 改变队伍时子单位保持原队伍', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'改变队伍时子单位保持原队伍',
        documentation :'默认值为false.如果为true则父单位改变队伍时子单位不改变队伍.'
    },
    {
        label: 'smoothlyBlendPositionWhenExistingUnitAdded',
        insertText: 'smoothlyBlendPositionWhenExistingUnitAdded:',
        labelDetails: { detail :' 补充时平滑移动', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'补充时平滑移动',
        documentation :'补充所装载单位至槽位时平滑移动.'
    },
    {
        label: 'keepWaypointsNeedingMovement',
        insertText: 'keepWaypointsNeedingMovement:',
        labelDetails: { detail :' 保持需要移动路径点', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'保持需要移动路径点',
        documentation :'默认值为false.当为false时,队列中任何需要移动才能完成的队列路径点都会被移除.'
    },
    {
        label: 'showAllActionsFrom',
        insertText: 'showAllActionsFrom:',
        labelDetails: { detail :' 显示所有操作来源', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'显示所有操作来源',
        documentation :'当被选中时,在父单元列表中显示所有附加单位的动作'
    },
    {
        label: 'createIncompleteIfParentIs',
        insertText: 'createIncompleteIfParentIs:',
        labelDetails: { detail :' 创建随父单位', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'创建随父单位',
        documentation :'如果父节单位不完整,则创建子单位不完整'
    },
    {
        label: 'onConvertKeepExistingUnitInSameSlot',
        insertText: 'onConvertKeepExistingUnitInSameSlot:',
        labelDetails: { detail :' 转换时附属仍然在同一槽位中', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'转换时附属仍然在同一槽位中',
        documentation :'转换后保留附属在当前所在的slot(如定义)'
    },
    {
        label: 'redirectDamageToParent',
        insertText: 'redirectDamageToParent:',
        labelDetails: { detail :' 重定向伤害到父单位', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'重定向伤害到父单位',
        documentation :'将对附属造成的伤害重定向到父单位,而不是伤害子单位自身.'
    },
    {
        label: 'redirectDamageToParent_shieldOnly',
        insertText: 'redirectDamageToParent_shieldOnly:',
        labelDetails: { detail :' 重定向伤害到父单位护盾', description: '[attachment]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'重定向伤害到父单位护盾',
        documentation :'只将对附属造成的伤害重定向到父单位的护盾,而不是伤害子单位自身.如果盾没了那就伤害自身,如模块蜘蛛.'
    },
];