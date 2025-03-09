import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ATTACK: CompletionItem[] = [
    {
        label: 'maxAttackRange',
        insertText: 'maxAttackRange:',
        labelDetails: { detail :' float 攻击距离', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'攻击距离',
        documentation :'最大攻击距离.(会乘以globalScale,但不建议使用globalScale)',
        data: 'float'
    },
    {
        label: 'canAttack',
        insertText: 'canAttack:',
        labelDetails: { detail :' bool 可以攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'可以攻击',
        documentation :'如果设置为false,则不能攻击任何单位.其他canAttack选项将无效.',
        data: 'bool'
    },
    {
        label: 'canAttackFlyingUnits',
        insertText: 'canAttackFlyingUnits:',
        labelDetails: { detail :' logicBoolean 可攻击空中单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击空中单位',
        documentation :'可以攻击空中单位,下面的攻击条件代码可于任意炮塔单独设置.',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackLandUnits',
        insertText: 'canAttackLandUnits:',
        labelDetails: { detail :' logicBoolean 可攻击表面单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击表面单位',
        documentation :'可以攻击表面单位(包括陆地和水面)',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackUnderwaterUnits',
        insertText: 'canAttackUnderwaterUnits:',
        labelDetails: { detail :' logicBoolean 可攻击水下单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击水下单位',
        documentation :'可以攻击水下单位',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackNotTouchingWaterUnits',
        insertText: 'canAttackNotTouchingWaterUnits:',
        labelDetails: { detail :' logicBoolean 可以攻击非接触水单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'可以攻击非接触水单位',
        documentation :'可以攻击非接触水单位,默认为true.如果是false,则只能攻击与水接触的单位,不能攻击岸上.用于鱼雷逻辑.也可以根据炮塔需要设置.',
        data: 'logicBoolean'
    },
    {
        label: 'canOnlyAttackUnitsWithTags',
        insertText: 'canOnlyAttackUnitsWithTags:',
        labelDetails: { detail :' string 只攻击带特定标签单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'只攻击带特定标签单位',
        documentation :'只能攻击带特定标签的单位',
        data: 'string'
    },
    {
        label: 'canOnlyAttackUnitsWithoutTags',
        insertText: 'canOnlyAttackUnitsWithoutTags:',
        labelDetails: { detail :' string 不攻击带特定标签单位', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'不攻击带特定标签单位',
        documentation :'不能攻击带特定标签的单位',
        data: 'string'
    },
    {
        label: 'setMainTurretAs',
        insertText: 'setMainTurretAs:',
        labelDetails: { detail :' turretRef 设置主炮塔', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'设置主炮塔',
        documentation :'设置主炮塔,有些代码要锁定主炮塔,对其有用.',
        data: 'turretRef'
    },
    {
        label: 'turretMultiTargeting',
        insertText: 'turretMultiTargeting:',
        labelDetails: { detail :' bool 每个炮塔向不同目标射击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'每个炮塔向不同目标射击',
        documentation :'允许每个炮塔同时向不同的目标射击.如果使用turretlimitingAngle(限制角度)非常有用',
        data: 'bool'
    },
    {
        label: 'isMelee',
        insertText: 'isMelee:',
        labelDetails: { detail :' bool 近战', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'近战',
        documentation :'近战单位.与低攻击范围配合使用(例如maxAttackRange:9)可使自身和目标半径添加到范围内,并影响AI.',
        data: 'bool'
    },
    {
        label: 'meleeEngangementDistance',
        insertText: 'meleeEngangementDistance:',
        labelDetails: { detail :' int 近战索敌距离', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'近战索敌距离',
        documentation :'使部队游猎,自动移动以攻击附近的敌方部队.近战默认为250,非近战默认为0(即使非近战也可以使用.)',
        data: 'int'
    },
    {
        label: 'onlyIdle',
        insertText: 'onlyIdle:',
        labelDetails: { detail :' bool 只在空闲时', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'只在空闲时',
        documentation :'只在空闲时才能攻击',
        data: 'bool'
    },
    {
        label: 'turretRotateWithBody',
        insertText: 'turretRotateWithBody:',
        labelDetails: { detail :' bool 炮塔随主体旋转', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔随主体旋转',
        documentation :'炮塔随主体旋转.默认true',
        data: 'bool'
    },
    {
        label: 'attackMovement',
        insertText: 'attackMovement:',
        labelDetails: { detail :' string 攻击移动类型', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'攻击移动类型',
        documentation :'移动攻击类型.填normal/bomber.能量耗尽时,轰炸机攻击运动将后退.可填moveaway,strafing但无效.',
        data: 'string'
    },
    {
        label: 'dieOnAttack',
        insertText: 'dieOnAttack:',
        labelDetails: { detail :' bool 自杀攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'自杀攻击',
        documentation :'攻击时自毁.',
        data: 'bool'
    },
    {
        label: 'removeOnAttack',
        insertText: 'removeOnAttack:',
        labelDetails: { detail :' bool 移除攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'移除攻击',
        documentation :'攻击时移除自身.',
        data: 'bool'
    },
    {
        label: 'isFixedFiring',
        insertText: 'isFixedFiring:',
        labelDetails: { detail :' bool 固定射击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'固定射击',
        documentation :'必须将身体对准目标射击.通常会使得部队需要停下来才能瞄准和射击.比如火炮.',
        data: 'bool'
    },
    {
        label: 'aimOffsetSpread',
        insertText: 'aimOffsetSpread:',
        labelDetails: { detail :' float 瞄准偏移', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'瞄准偏移',
        documentation :'将每次攻击时的偏移量乘以目标半径.默认为0.6.设为0则不偏移,对范围武器影响较大.',
        data: 'float'
    },
    {
        label: 'stopTargetingAfterFiring',
        insertText: 'stopTargetingAfterFiring:',
        labelDetails: { detail :' bool 自动停火', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'自动停火',
        documentation :'单位射击后停止瞄准.很少使用或需要.如用于你不希望胡乱攻击浪费弹药的单位.',
        data: 'bool'
    },
    {
        label: 'disablePassiveTargeting',
        insertText: 'disablePassiveTargeting:',
        labelDetails: { detail :' bool 不能主动攻击', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'不能主动攻击',
        documentation :'单位只攻击手动选择的目标.很少使用或需要.如用于自爆卡车守家,如果自动攻击敌人就太蠢了.',
        data: 'bool'
    },
    {
        label: 'showRangeUIGuide',
        insertText: 'showRangeUIGuide:',
        labelDetails: { detail :' bool 显示范围UI', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'显示范围UI',
        documentation :'显示攻击范围的白圈.默认true.',
        data: 'bool'
    },
    {
        label: 'shootDelayMultiplier',
        insertText: 'shootDelayMultiplier:',
        labelDetails: { detail :' float 开火间隔乘数', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'开火间隔乘数',
        documentation :'默认为1.可以在setUnitStats动态改变',
        data: 'float'
    },
    {
        label: 'shootDamageMultiplier',
        insertText: 'shootDamageMultiplier:',
        labelDetails: { detail :' float 开火伤害乘数', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'开火伤害乘数',
        documentation :'默认为1.可以在setUnitStats动态改变',
        data: 'float'
    },
    {
        label: 'turretSize',
        insertText: 'turretSize:',
        labelDetails: { detail :' float 炮塔大小', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔大小',
        documentation :'设置所有炮塔大小.填数值,按像素计算,不决定素材大小,而是以此为半径的开火位置.',
        data: 'float'
    },
    {
        label: 'turretTurnSpeed',
        insertText: 'turretTurnSpeed:',
        labelDetails: { detail :' float 炮塔转速', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔转速',
        documentation :'炮塔转速,单位是每帧旋转角度.',
        data: 'float'
    },
    {
        label: 'shootDelay',
        insertText: 'shootDelay:',
        labelDetails: { detail :' time 攻击间隔', description: '[attack]' },
        kind: CompletionItemKind.Text,
        detail :'攻击间隔',
        documentation :'开火间隔,也可以在每个转塔上使用延迟',
        data: 'time'
    },
];