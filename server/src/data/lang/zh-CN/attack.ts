import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ATTACK: CompletionItem[] = [
    {
        label: 'maxAttackRange',
        insertText: 'maxAttackRange:',
        labelDetails: { detail :' 攻击距离', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'攻击距离',
        documentation :'最大攻击距离.(会乘以globalScale,但不建议使用globalScale)'
    },
    {
        label: 'canAttack',
        insertText: 'canAttack:',
        labelDetails: { detail :' 可以攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'可以攻击',
        documentation :'如果设置为false,则不能攻击任何单位.其他canAttack选项将无效.'
    },
    {
        label: 'canAttackFlyingUnits',
        insertText: 'canAttackFlyingUnits:',
        labelDetails: { detail :' 可攻击空中单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'可攻击空中单位',
        documentation :'可以攻击空中单位,下面的攻击条件代码可于任意炮塔单独设置.'
    },
    {
        label: 'canAttackLandUnits',
        insertText: 'canAttackLandUnits:',
        labelDetails: { detail :' 可攻击表面单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'可攻击表面单位',
        documentation :'可以攻击表面单位(包括陆地和水面)'
    },
    {
        label: 'canAttackUnderwaterUnits',
        insertText: 'canAttackUnderwaterUnits:',
        labelDetails: { detail :' 可攻击水下单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'可攻击水下单位',
        documentation :'可以攻击水下单位'
    },
    {
        label: 'canAttackNotTouchingWaterUnits',
        insertText: 'canAttackNotTouchingWaterUnits:',
        labelDetails: { detail :' 可以攻击非接触水单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'可以攻击非接触水单位',
        documentation :'可以攻击非接触水单位,默认为true.如果是false,则只能攻击与水接触的单位,不能攻击岸上.用于鱼雷逻辑.也可以根据炮塔需要设置.'
    },
    {
        label: 'canOnlyAttackUnitsWithTags',
        insertText: 'canOnlyAttackUnitsWithTags:',
        labelDetails: { detail :' 只攻击带特定标签单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'只攻击带特定标签单位',
        documentation :'只能攻击带特定标签的单位'
    },
    {
        label: 'canOnlyAttackUnitsWithoutTags',
        insertText: 'canOnlyAttackUnitsWithoutTags:',
        labelDetails: { detail :' 不攻击带特定标签单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'不攻击带特定标签单位',
        documentation :'不能攻击带特定标签的单位'
    },
    {
        label: 'setMainTurretAs',
        insertText: 'setMainTurretAs:',
        labelDetails: { detail :' 设置主炮塔', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'设置主炮塔',
        documentation :'设置主炮塔,有些代码要锁定主炮塔,对其有用.'
    },
    {
        label: 'turretMultiTargeting',
        insertText: 'turretMultiTargeting:',
        labelDetails: { detail :' 每个炮塔向不同目标射击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'每个炮塔向不同目标射击',
        documentation :'允许每个炮塔同时向不同的目标射击.如果使用turretlimitingAngle(限制角度)非常有用'
    },
    {
        label: 'isMelee',
        insertText: 'isMelee:',
        labelDetails: { detail :' 近战', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'近战',
        documentation :'近战单位.与低攻击范围配合使用(例如maxAttackRange:9)可使自身和目标半径添加到范围内,并影响AI.'
    },
    {
        label: 'meleeEngangementDistance',
        insertText: 'meleeEngangementDistance:',
        labelDetails: { detail :' 近战索敌距离', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'近战索敌距离',
        documentation :'使部队游猎,自动移动以攻击附近的敌方部队.近战默认为250,非近战默认为0(即使非近战也可以使用.)'
    },
    {
        label: 'onlyIdle',
        insertText: 'onlyIdle:',
        labelDetails: { detail :' 只在空闲时', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'只在空闲时',
        documentation :'只在空闲时才能攻击'
    },
    {
        label: 'turretRotateWithBody',
        insertText: 'turretRotateWithBody:',
        labelDetails: { detail :' 炮塔随主体旋转', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'炮塔随主体旋转',
        documentation :'炮塔随主体旋转.默认true'
    },
    {
        label: 'attackMovement',
        insertText: 'attackMovement:',
        labelDetails: { detail :' 攻击移动类型', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'攻击移动类型',
        documentation :'移动攻击类型.填normal/bomber.能量耗尽时,轰炸机攻击运动将后退.可填moveaway,strafing但无效.'
    },
    {
        label: 'dieOnAttack',
        insertText: 'dieOnAttack:',
        labelDetails: { detail :' 自杀攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'自杀攻击',
        documentation :'攻击时自毁.'
    },
    {
        label: 'removeOnAttack',
        insertText: 'removeOnAttack:',
        labelDetails: { detail :' 移除攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'移除攻击',
        documentation :'攻击时移除自身.'
    },
    {
        label: 'isFixedFiring',
        insertText: 'isFixedFiring:',
        labelDetails: { detail :' 固定射击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'固定射击',
        documentation :'必须将身体对准目标射击.通常会使得部队需要停下来才能瞄准和射击.比如火炮.'
    },
    {
        label: 'aimOffsetSpread',
        insertText: 'aimOffsetSpread:',
        labelDetails: { detail :' 瞄准偏移', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'瞄准偏移',
        documentation :'将每次攻击时的偏移量乘以目标半径.默认为0.6.设为0则不偏移,对范围武器影响较大.'
    },
    {
        label: 'stopTargetingAfterFiring',
        insertText: 'stopTargetingAfterFiring:',
        labelDetails: { detail :' 自动停火', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'自动停火',
        documentation :'单位射击后停止瞄准.很少使用或需要.如用于你不希望胡乱攻击浪费弹药的单位.'
    },
    {
        label: 'disablePassiveTargeting',
        insertText: 'disablePassiveTargeting:',
        labelDetails: { detail :' 不能主动攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'不能主动攻击',
        documentation :'单位只攻击手动选择的目标.很少使用或需要.如用于自爆卡车守家,如果自动攻击敌人就太蠢了.'
    },
    {
        label: 'showRangeUIGuide',
        insertText: 'showRangeUIGuide:',
        labelDetails: { detail :' 显示范围UI', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'显示范围UI',
        documentation :'显示攻击范围的白圈.默认true.'
    },
    {
        label: 'shootDelayMultiplier',
        insertText: 'shootDelayMultiplier:',
        labelDetails: { detail :' 开火间隔乘数', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'开火间隔乘数',
        documentation :'默认为1.可以在setUnitStats动态改变'
    },
    {
        label: 'shootDamageMultiplier',
        insertText: 'shootDamageMultiplier:',
        labelDetails: { detail :' 开火伤害乘数', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'开火伤害乘数',
        documentation :'默认为1.可以在setUnitStats动态改变'
    },
    {
        label: 'turretSize',
        insertText: 'turretSize:',
        labelDetails: { detail :' 炮塔大小', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'炮塔大小',
        documentation :'设置所有炮塔大小.填数值,按像素计算,不决定素材大小,而是以此为半径的开火位置.'
    },
    {
        label: 'turretTurnSpeed',
        insertText: 'turretTurnSpeed:',
        labelDetails: { detail :' 炮塔转速', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'炮塔转速',
        documentation :'炮塔转速,单位是每帧旋转角度.'
    },
    {
        label: 'shootDelay',
        insertText: 'shootDelay:',
        labelDetails: { detail :' 攻击间隔', description: '[attack]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'攻击间隔',
        documentation :'开火间隔,也可以在每个转塔上使用延迟'
    },
];