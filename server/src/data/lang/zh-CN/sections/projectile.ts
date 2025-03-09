import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const PROJECTILE: CompletionItem[] = [
    {
        label: 'life',
        insertText: 'life:',
        labelDetails: { detail :' int 存在时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'存在时间',
        documentation :'开火后炮抛射体在没命中时的存活时间,单位为帧.60为1s.多少合适取决于速度与射程.',
        data: 'int'
    },
    {
        label: 'deflectionPower',
        insertText: 'deflectionPower:',
        labelDetails: { detail :' float 激光拦截耗能', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'激光拦截耗能',
        documentation :'默认值为1.此抛射体被激光防御摧毁所需的能量. -1为禁止拦截.(对特殊武器如火焰)',
        data: 'float'
    },
    {
        label: 'explodeOnEndOfLife',
        insertText: 'explodeOnEndOfLife:',
        labelDetails: { detail :' bool 寿终爆炸', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'寿终爆炸',
        documentation :'默认为false.True则会在寿命终结时爆炸,并产生其命中时该有的效果.而不是直接消失.',
        data: 'bool'
    },
    {
        label: 'autoTargetingOnDeadTarget',
        insertText: 'autoTargetingOnDeadTarget:',
        labelDetails: { detail :' bool 自动切换目标', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'自动切换目标',
        documentation :'如果目标死亡则自动切换单位.填true时如果有targetGround:true抛射体将会追踪距离它最近的单位.如果没有将会在单位死亡后再改变目标.',
        data: 'bool'
    },
    {
        label: 'autoTargetingOnDeadTargetRange',
        insertText: 'autoTargetingOnDeadTargetRange:',
        labelDetails: { detail :' int 自动切换目标检索范围', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'自动切换目标检索范围',
        documentation :'当旧目标死亡时选择新目标的范围',
        data: 'int'
    },
    {
        label: 'autoTargetingOnDeadTargetLead',
        insertText: 'autoTargetingOnDeadTargetLead:',
        labelDetails: { detail :' float 自动切换目标预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'自动切换目标预判',
        documentation :'尝试新的目标时的预判',
        data: 'float'
    },
    {
        label: 'unloadUpToXUnitsFromSource',
        insertText: 'unloadUpToXUnitsFromSource:',
        labelDetails: { detail :' int 卸载单位至命中地', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'卸载单位至命中地',
        documentation :'将指定个数单位卸载到抛射体爆炸位置.',
        data: 'int'
    },
    {
        label: 'teleportSource',
        insertText: 'teleportSource:',
        labelDetails: { detail :' bool 传送', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'传送',
        documentation :'将单位移动到抛射体爆炸的位置,用于传送自身.',
        data: 'bool'
    },
    {
        label: 'spawnUnit',
        insertText: 'spawnUnit:',
        labelDetails: { detail :' unit 产生单位', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'产生单位',
        documentation :'在抛射体丸爆炸位置产生这种单位',
        data: 'unit'
    },
    {
        label: 'convertHitToSourceTeam',
        insertText: 'convertHitToSourceTeam:',
        labelDetails: { detail :' bool 命中时更改所属', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'命中时更改所属',
        documentation :'将更改被命中的单位转换队伍为自身所属.',
        data: 'bool'
    },
    {
        label: 'tags',
        insertText: 'tags:',
        labelDetails: { detail :' string 标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'标签',
        documentation :'用于抛射体拦截功能.',
        data: 'string'
    },
    {
        label: 'flameWeapon',
        insertText: 'flameWeapon:',
        labelDetails: { detail :' bool 火焰武器', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'火焰武器',
        documentation :'命中时产生小火焰(仅用于装饰)',
        data: 'bool'
    },
    {
        label: 'spawnProjectilesOnEndOfLife',
        insertText: 'spawnProjectilesOnEndOfLife:',
        labelDetails: { detail :' projectileRef 在寿命结束时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'在寿命结束时生成抛射体',
        documentation :'填抛射体名.在寿命(life)结束时生成抛射体.生成抛射体逻辑具体参数参考后面生成抛射体大项.这简化了过去许多需要多炮塔(如贯穿攻击)或是生成辅助单位才能实现的操作.',
        data: 'projectileRef'
    },
    {
        label: 'spawnProjectilesOnExplode',
        insertText: 'spawnProjectilesOnExplode:',
        labelDetails: { detail :' projectileRef 在爆炸时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'在爆炸时生成抛射体',
        documentation :'填抛射体名.只在爆炸时生成抛射体,如果耗光life则不会生成.',
        data: 'projectileRef'
    },
    {
        label: 'spawnProjectilesOnCreate',
        insertText: 'spawnProjectilesOnCreate:',
        labelDetails: { detail :' projectileRef 在创建时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'在创建时生成抛射体',
        documentation :'填抛射体名.抛射体创建时生成抛射体.',
        data: 'projectileRef'
    },
    {
        label: 'directDamage',
        insertText: 'directDamage:',
        labelDetails: { detail :' int 直接伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'直接伤害',
        documentation :'击中对目标单位造成伤害.不适用于targetGround:true.',
        data: 'int'
    },
    {
        label: 'areaDamage',
        insertText: 'areaDamage:',
        labelDetails: { detail :' int 范围伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围伤害',
        documentation :'范围伤害值,此区域内敌方单位都将受到损伤,默认向边缘递减.',
        data: 'int'
    },
    {
        label: 'areaRadius',
        insertText: 'areaRadius:',
        labelDetails: { detail :' float 范围半径', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围半径',
        documentation :'范围伤害区域大小,此区域内敌方单位都将受到损伤,默认向边缘递减.数值类型为像素,大小算法为半径,铁锈内地块一格长为20像素.',
        data: 'float'
    },
    {
        label: 'areaDamageNoFalloff',
        insertText: 'areaDamageNoFalloff:',
        labelDetails: { detail :' bool 范围伤害不衰减', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围伤害不衰减',
        documentation :'默认false.为true时范围伤害不再向边缘递减.',
        data: 'bool'
    },
    {
        label: 'areaRadiusFromEdge',
        insertText: 'areaRadiusFromEdge:',
        labelDetails: { detail :' bool 范围伤害从边缘计算', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围伤害从边缘计算',
        documentation :'范围伤害将从单位的边缘计算,而不是默认的中心计算.主要用于攻击大型单位.',
        data: 'bool'
    },
    {
        label: 'areaExpandTime',
        insertText: 'areaExpandTime:',
        labelDetails: { detail :' float 范围扩展时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围扩展时间',
        documentation :'将区域伤害变为爆炸波向边缘扩散.效果如核抛射体.',
        data: 'float'
    },
    {
        label: 'areaHitAirAndLandAtSameTime',
        insertText: 'areaHitAirAndLandAtSameTime:',
        labelDetails: { detail :' bool 范围武器同时攻击空中和地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围武器同时攻击空中和地面',
        documentation :'范围武器将同时打击空中和地面.',
        data: 'bool'
    },
    {
        label: 'areaHitUnderwaterAlways',
        insertText: 'areaHitUnderwaterAlways:',
        labelDetails: { detail :' bool 范围武器可攻击深海', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围武器可攻击深海',
        documentation :'范围武器将可以打击深海单位如潜艇.',
        data: 'bool'
    },
    {
        label: 'areaIgnoreUnitsCloserThan',
        insertText: 'areaIgnoreUnitsCloserThan:',
        labelDetails: { detail :' int 范围伤害忽略区域', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'范围伤害忽略区域',
        documentation :'小于此范围的单位不会受到攻击影响.需要比areaRadius小,否则造不成伤害.',
        data: 'int'
    },
    {
        label: 'buildingDamageMultiplier',
        insertText: 'buildingDamageMultiplier:',
        labelDetails: { detail :' float 建筑伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'建筑伤害乘数',
        documentation :'默认为1.对建筑物伤害乘上此数值,用于伤害修正.比如闪电对建筑物伤害低,火焰对建筑物伤害高.',
        data: 'float'
    },
    {
        label: 'shieldDamageMultiplier',
        insertText: 'shieldDamageMultiplier:',
        labelDetails: { detail :' float 护盾伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'护盾伤害乘数',
        documentation :'默认为1.对护盾伤害乘数.如0对护盾不造成伤害,2对护盾造成双倍伤害',
        data: 'float'
    },
    {
        label: 'shieldDefectionMultiplier',
        insertText: 'shieldDefectionMultiplier:',
        labelDetails: { detail :' float 护盾阻挡乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'护盾阻挡乘数',
        documentation :'护盾阻挡乘数,填0则可无视护盾,同时对单位和盾造成伤害.',
        data: 'float'
    },
    {
        label: 'hullDamageMultiplier',
        insertText: 'hullDamageMultiplier:',
        labelDetails: { detail :' float 护盾损伤乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'护盾损伤乘数',
        documentation :'可以用来制造只影响护盾的电磁脉冲武器.0忽略单位,只伤害护盾',
        data: 'float'
    },
    {
        label: 'ignoreParentShootDamageMultiplier',
        insertText: 'ignoreParentShootDamageMultiplier:',
        labelDetails: { detail :' bool 忽略父单位射击伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'忽略父单位射击伤害乘数',
        documentation :'忽略父单位射击伤害乘数',
        data: 'bool'
    },
    {
        label: 'armourIgnoreAmount',
        insertText: 'armourIgnoreAmount:',
        labelDetails: { detail :' int 无视装甲数量', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'无视装甲数量',
        documentation :'无视目标装甲数量并造成伤害.',
        data: 'int'
    },
    {
        label: 'friendlyFire',
        insertText: 'friendlyFire:',
        labelDetails: { detail :' bool/string 友伤', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'友伤',
        documentation :'范围武器有友伤,可以伤害自己单位.铁锈限制不能对盟友有伤害.负数友伤可以用于范围维修,如果修盟友则需要用中立单位实现.参数(false,true,only-ignoreEnemy)(假,真,忽略敌人的友伤)',
        data: 'bool/string'
    },
    {
        label: 'mutatorX_ifUnitWithTags',
        insertText: 'mutatorX_ifUnitWithTags:',
        labelDetails: { detail :' float 修正需要标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正需要标签',
        documentation :'伤害修正所需标签,仅对携带标签单位有效.否则为原始伤害.',
        data: 'float'
    },
    {
        label: 'mutatorX_ifUnitWithoutTags',
        insertText: 'mutatorX_ifUnitWithoutTags:',
        labelDetails: { detail :' float 修正除此标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正除此标签',
        documentation :'伤害修正除此标签外有效.',
        data: 'float'
    },
    {
        label: 'mutatorX_directDamageMultiplier',
        insertText: 'mutatorX_directDamageMultiplier:',
        labelDetails: { detail :' float 修正直接伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正直接伤害',
        documentation :'伤害修正,直接伤害(directDamage)乘数.比如直接伤害100,这里填2,对目标就造成200伤害.',
        data: 'float'
    },
    {
        label: 'mutatorX_areaDamageMultiplier',
        insertText: 'mutatorX_areaDamageMultiplier:',
        labelDetails: { detail :' float 修正范围伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正范围伤害',
        documentation :'伤害修正,范围伤害(areaDamage)乘数.比如直接伤害100,这里填2,对目标就造成200伤害.',
        data: 'float'
    },
    {
        label: 'mutatorX_changedExplodeEffect',
        insertText: 'mutatorX_changedExplodeEffect:',
        labelDetails: { detail :' effectRef 修正命中效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正命中效果',
        documentation :'如果此修正处于有效状态,则更改爆炸效果.',
        data: 'effectRef'
    },
    {
        label: 'mutatorX_addResourcesDirectHit',
        insertText: 'mutatorX_addResourcesDirectHit:',
        labelDetails: { detail :' resourceRef 修正直接添加资源', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正直接添加资源',
        documentation :'伤害修正,用于直接伤害(directDamage),给目标添加指定资源.用途如给目标资源后,目标检测自身资源然后禁止移动.',
        data: 'resourceRef'
    },
    {
        label: 'mutatorX_addResourcesAreaHit',
        insertText: 'mutatorX_addResourcesAreaHit:',
        labelDetails: { detail :' resourceRef 修正区域添加资源', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'修正区域添加资源',
        documentation :'伤害修正,用于范围伤害(areaDamage),给目标添加指定资源.',
        data: 'resourceRef'
    },
    {
        label: 'targetGround',
        insertText: 'targetGround:',
        labelDetails: { detail :' bool 目标为地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'目标为地面',
        documentation :'抛射体瞄准并攻击目标所在的地面,而不是追踪目标.直接伤害(directDamage)将会失效,需要使用areaDamage和areaRadius.',
        data: 'bool'
    },
    {
        label: 'targetGround_includeTargetHeight',
        insertText: 'targetGround_includeTargetHeight:',
        labelDetails: { detail :' float 目标为地面包括目标高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'目标为地面包括目标高度',
        documentation :'区域影响AA武器',
        data: 'float'
    },
    {
        label: 'targetGroundHeightOffset',
        insertText: 'targetGroundHeightOffset:',
        labelDetails: { detail :' float 目标为地面高度偏移', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'目标为地面高度偏移',
        documentation :'在目标上方或下方射击.可能对分裂和落下的炮抛射体有用.',
        data: 'float'
    },
    {
        label: 'speed',
        insertText: 'speed:',
        labelDetails: { detail :' float 速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'速度',
        documentation :'抛射体飞行速度,单位是每帧飞行像素.铁锈地块1格20像素,填1则每秒飞行3格.',
        data: 'float'
    },
    {
        label: 'targetSpeed',
        insertText: 'targetSpeed:',
        labelDetails: { detail :' float 到达速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'到达速度',
        documentation :'加速到这个速度',
        data: 'float'
    },
    {
        label: 'targetSpeedAcceleration',
        insertText: 'targetSpeedAcceleration:',
        labelDetails: { detail :' float 加速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'加速度',
        documentation :'加速度,控制targetSpeed的速度提升',
        data: 'float'
    },
    {
        label: 'ballistic',
        insertText: 'ballistic:',
        labelDetails: { detail :' bool 抛射体道', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体道',
        documentation :'抛射体道导抛射体效果,使抛射体先飞向空中并向下飞,而不是走直线.',
        data: 'bool'
    },
    {
        label: 'ballistic_delaymove_height',
        insertText: 'ballistic_delaymove_height:',
        labelDetails: { detail :' float 抛射体道垂直飞行高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体道垂直飞行高度',
        documentation :'抛射体道导抛射体发射初期效果,决定抛射体道一开始先升高多少,再斜向爬升到最高过度.',
        data: 'float'
    },
    {
        label: 'ballistic_height',
        insertText: 'ballistic_height:',
        labelDetails: { detail :' float 抛射体道高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体道高度',
        documentation :'抛射体道最终高度.',
        data: 'float'
    },
    {
        label: 'targetGroundSpread',
        insertText: 'targetGroundSpread:',
        labelDetails: { detail :' float 目标为地面散布', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'目标为地面散布',
        documentation :'填数值,用于目标为地面时随机造成偏差效果',
        data: 'float'
    },
    {
        label: 'speedSpread',
        insertText: 'speedSpread:',
        labelDetails: { detail :' float 速度散布', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'速度散布',
        documentation :'随机改变炮抛射体初始速度',
        data: 'float'
    },
    {
        label: 'instant',
        insertText: 'instant:',
        labelDetails: { detail :' bool 瞬间命中', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'瞬间命中',
        documentation :'开火时立即击中目标,用于激光,闪电,波束.',
        data: 'bool'
    },
    {
        label: 'instantReuseLast',
        insertText: 'instantReuseLast:',
        labelDetails: { detail :' bool 瞬间命中回收最后抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'瞬间命中回收最后抛射体',
        documentation :'用于激光和闪电.激光或闪电命中后还会存在一段时间,当此抛射体命中后,清除上一个抛射体效果.使得只有一个抛射体存在.如使用高频射速变成光束武器,而不是瞎眼叠加.',
        data: 'bool'
    },
    {
        label: 'instantReuseLast_alsoChangeTurretAim',
        insertText: 'instantReuseLast_alsoChangeTurretAim:',
        labelDetails: { detail :' bool 命中回收抛射体且改变瞄准', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'命中回收抛射体且改变瞄准',
        documentation :'使炮塔瞄准受到命中目标扫描效果的影响,对光束武器有用',
        data: 'bool'
    },
    {
        label: 'instantReuseLast_keepAreaDamageList',
        insertText: 'instantReuseLast_keepAreaDamageList:',
        labelDetails: { detail :' bool 命中回收抛射体区域伤害列表', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'命中回收抛射体区域伤害列表',
        documentation :'瞬间命中并回收最后的抛射体并且保持区域伤害列表,默认false,保持列表是1.13的正常行为,造成区域伤害不会第二次生效,但不是很有用.只有当你想要旧的行为时才使用这个.',
        data: 'bool'
    },
    {
        label: 'disableLeadTargeting',
        insertText: 'disableLeadTargeting:',
        labelDetails: { detail :' bool 禁用预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'禁用预判',
        documentation :'瞄准移动目标时,禁用预判计算.默认为false.',
        data: 'bool'
    },
    {
        label: 'leadTargetingSpeedCalculation',
        insertText: 'leadTargetingSpeedCalculation:',
        labelDetails: { detail :' float 预判计算', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'预判计算',
        documentation :'用于使用targetGround时预判计算.目标计算的预期速度.默认为“targetSpeed”.如果设置则基于speed.',
        data: 'float'
    },
    {
        label: 'initialUnguidedSpeedHeight',
        insertText: 'initialUnguidedSpeedHeight:',
        labelDetails: { detail :' float 初始非制导垂直速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'初始非制导垂直速度',
        documentation :'设置抛射体和地面间的垂直速度,利用gravity制造出平滑的抛物线.比较迷,填1左右,重力可以不填.',
        data: 'float'
    },
    {
        label: 'initialUnguidedSpeedX',
        insertText: 'initialUnguidedSpeedX:',
        labelDetails: { detail :' float 初非导引速度X', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'初非导引速度X',
        documentation :'让抛射体以弧线形式移动,负数向左,正数向右.',
        data: 'float'
    },
    {
        label: 'initialUnguidedSpeedY',
        insertText: 'initialUnguidedSpeedY:',
        labelDetails: { detail :' float 初非导引速度Y', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'初非导引速度Y',
        documentation :'修改抛射体的高度,正数向下,负数向上.',
        data: 'float'
    },
    {
        label: 'gravity',
        insertText: 'gravity:',
        labelDetails: { detail :' float 重力', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重力',
        documentation :'控制地面的抛射体丸的拉力.与initialUnguidedSpeedHeight一起使用.',
        data: 'float'
    },
    {
        label: 'trueGravity',
        insertText: 'trueGravity:',
        labelDetails: { detail :' float 绝对向重力', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'绝对向重力',
        documentation :'炮弹在靠近单位时因为有该key会低空飞行一段距离,但注意不要填的太大,否则会直接往屏幕下方飞走.',
        data: 'float'
    },
    {
        label: 'turnSpeed',
        insertText: 'turnSpeed:',
        labelDetails: { detail :' float 转弯速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'转弯速度',
        documentation :'限制抛射体的转弯速度,更好的做出抛射体道效果.',
        data: 'float'
    },
    {
        label: 'turnSpeedWhenNear',
        insertText: 'turnSpeedWhenNear:',
        labelDetails: { detail :' bool 靠近时转弯速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'靠近时转弯速度',
        documentation :'用于当射抛射体非常接近目标时,默认禁用转弯速度以使其能够命中.',
        data: 'bool'
    },
    {
        label: 'wobbleAmplitude',
        insertText: 'wobbleAmplitude:',
        labelDetails: { detail :' float 摆动幅度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'摆动幅度',
        documentation :'抛射体飞行中摆动的剧烈程度.',
        data: 'float'
    },
    {
        label: 'wobbleFrequency',
        insertText: 'wobbleFrequency:',
        labelDetails: { detail :' time 摆动频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'摆动频率',
        documentation :'抛射体飞行中摆动的频率.',
        data: 'time'
    },
    {
        label: 'pushForce',
        insertText: 'pushForce:',
        labelDetails: { detail :' float 推动力量', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'推动力量',
        documentation :'抛射体丸所携带的“重量”,质量越大,推力越大.推动(或以负值拉动)被击中的单位.除以目标质量',
        data: 'float'
    },
    {
        label: 'pushVelocity',
        insertText: 'pushVelocity:',
        labelDetails: { detail :' float 推进速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'推进速度',
        documentation :'抛射体爆炸后可用推动单位,推力相对于方向的速度,推动(或以负值拉动)被击中的单位.忽略目标质量',
        data: 'float'
    },
    {
        label: 'moveWithParent',
        insertText: 'moveWithParent:',
        labelDetails: { detail :' bool 随父物体移动', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'随父物体移动',
        documentation :'当父单位移动时也移动抛射体.对光束效果武器很有用.',
        data: 'bool'
    },
    {
        label: 'sweepOffset',
        insertText: 'sweepOffset:',
        labelDetails: { detail :' float 扫描偏移', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'扫描偏移',
        documentation :'扫描偏移,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.',
        data: 'float'
    },
    {
        label: 'sweepSpeed',
        insertText: 'sweepSpeed:',
        labelDetails: { detail :' float 扫描速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'扫描速度',
        documentation :'扫描速度,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.',
        data: 'float'
    },
    {
        label: 'sweepOffsetFromTargetRadius',
        insertText: 'sweepOffsetFromTargetRadius:',
        labelDetails: { detail :' float 扫描偏移目标半径', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'扫描偏移目标半径',
        documentation :'以目标半径作为扫描偏移量乘数,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.',
        data: 'float'
    },
    {
        label: 'retargetingInFlight',
        insertText: 'retargetingInFlight:',
        labelDetails: { detail :' bool 重新瞄准在飞行时', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重新瞄准在飞行时',
        documentation :'在飞行过程中重新瞄准一个新的目标,非常适合投掷式武器和相互碰撞的抛射体',
        data: 'bool'
    },
    {
        label: 'retargetingInFlightSearchDelay',
        insertText: 'retargetingInFlightSearchDelay:',
        labelDetails: { detail :' float/time 重新瞄准在飞行时搜索延迟', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重新瞄准在飞行时搜索延迟',
        documentation :'寻找新目标之间的时间.默认5',
        data: 'float/time'
    },
    {
        label: 'retargetingInFlightSearchRange',
        insertText: 'retargetingInFlightSearchRange:',
        labelDetails: { detail :' int 重新瞄准在飞行时搜索范围', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重新瞄准在飞行时搜索范围',
        documentation :'重新选择目标的范围.默认值120',
        data: 'int'
    },
    {
        label: 'retargetingInFlightSearchLead',
        insertText: 'retargetingInFlightSearchLead:',
        labelDetails: { detail :' float 重新瞄准在飞行时预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重新瞄准在飞行时预判',
        documentation :'引导射抛射体试图击中目标.默认15',
        data: 'float'
    },
    {
        label: 'retargetingInFlightSearchOnlyTags',
        insertText: 'retargetingInFlightSearchOnlyTags:',
        labelDetails: { detail :' string 重新瞄准在飞行时针对标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'重新瞄准在飞行时针对标签',
        documentation :'只针对具有这些标签的单位进行重定向.',
        data: 'string'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' color 颜色', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'颜色',
        documentation :'使用十六进制值对该抛射体重新着色,它也决定了激光颜色,颜色格式为#AARRGGBB.',
        data: 'color'
    },
    {
        label: 'teamColorRatio',
        insertText: 'teamColorRatio:',
        labelDetails: { detail :' float 阵营色色相', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'阵营色色相',
        documentation :'将团队颜色混合到抛射体颜色中,填0-1.',
        data: 'float'
    },
    {
        label: 'teamColorRatio_sourceRatio',
        insertText: 'teamColorRatio_sourceRatio:',
        labelDetails: { detail :' float 阵营色色相比例', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'阵营色色相比例',
        documentation :'将团队颜色混合到抛射体颜色中与原色比例,默认为(1-teamColorRatio)',
        data: 'float'
    },
    {
        label: 'invisible',
        insertText: 'invisible:',
        labelDetails: { detail :' bool 隐藏', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'隐藏',
        documentation :'隐藏抛射体图像.',
        data: 'bool'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' file-image 图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'图像',
        documentation :'使用自定义图片.覆盖drawType和frame',
        data: 'file-image'
    },
    {
        label: 'shadowFrame',
        insertText: 'shadowFrame:',
        labelDetails: { detail :' int 阴影帧', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'阴影帧',
        documentation :'阴影使用的内置图像帧数',
        data: 'int'
    },
    {
        label: 'shadowImage',
        insertText: 'shadowImage:',
        labelDetails: { detail :' file-image 阴影图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像',
        documentation :'使用自定义图片给抛射体加阴影.',
        data: 'file-image'
    },
    {
        label: 'drawType',
        insertText: 'drawType:',
        labelDetails: { detail :' int 绘制类型', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'绘制类型',
        documentation :'使用内置抛射体图像. 0:projectiles.png 1:projectiles_large.png 2:projectiles2.png',
        data: 'int'
    },
    {
        label: 'drawSize',
        insertText: 'drawSize:',
        labelDetails: { detail :' float 绘制大小', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'绘制大小',
        documentation :'缩放抛射体大小.默认为1',
        data: 'float'
    },
    {
        label: 'frame',
        insertText: 'frame:',
        labelDetails: { detail :' int 帧', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'帧',
        documentation :'使用的内置图像帧,编号从零开始.和drawType结合使用.',
        data: 'int'
    },
    {
        label: 'hitSound',
        insertText: 'hitSound:',
        labelDetails: { detail :' bool 打击音效', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'打击音效',
        documentation :'启用命中音效,默认true',
        data: 'bool'
    },
    {
        label: 'explodeEffect',
        insertText: 'explodeEffect:',
        labelDetails: { detail :' effectRef 爆炸效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'爆炸效果',
        documentation :'抛射体爆炸效果',
        data: 'effectRef'
    },
    {
        label: 'explodeEffectOnShield',
        insertText: 'explodeEffectOnShield:',
        labelDetails: { detail :' effectRef 护盾上爆炸效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'护盾上爆炸效果',
        documentation :'如果目标上有护盾,则使用此效果',
        data: 'effectRef'
    },
    {
        label: 'drawUnderUnits',
        insertText: 'drawUnderUnits:',
        labelDetails: { detail :' bool 绘制与单位下', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'绘制与单位下',
        documentation :'绘制于单位下方.',
        data: 'bool'
    },
    {
        label: 'effectOnCreate',
        insertText: 'effectOnCreate:',
        labelDetails: { detail :' effectRef 创建时效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'创建时效果',
        documentation :'创建时效果,会追随抛射体.',
        data: 'effectRef'
    },
    {
        label: 'shouldRevealFog',
        insertText: 'shouldRevealFog:',
        labelDetails: { detail :' bool 揭开迷雾', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'揭开迷雾',
        documentation :'抛射体在爆炸时向玩家揭开迷雾.',
        data: 'bool'
    },
    {
        label: 'alwaysVisibleInFog',
        insertText: 'alwaysVisibleInFog:',
        labelDetails: { detail :' bool 迷雾中显示', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'迷雾中显示',
        documentation :'抛射体总是在迷雾中显示.',
        data: 'bool'
    },
    {
        label: 'nukeWeapon',
        insertText: 'nukeWeapon:',
        labelDetails: { detail :' bool 核武器', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'核武器',
        documentation :'发射时在迷你地图上显示.还有其他一些效果.',
        data: 'bool'
    },
    {
        label: 'trailEffect',
        insertText: 'trailEffect:',
        labelDetails: { detail :' bool/effect 尾焰', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'尾焰',
        documentation :'设置为true时为默认的尾焰.但也可以指向任何自定义效果,或使用内置效果.',
        data: 'bool/effect'
    },
    {
        label: 'trailEffectRate',
        insertText: 'trailEffectRate:',
        labelDetails: { detail :' float 尾焰频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'尾焰频率',
        documentation :'尾焰产生频率,默认为3',
        data: 'float'
    },
    {
        label: 'lightSize',
        insertText: 'lightSize:',
        labelDetails: { detail :' float 闪光大小', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'闪光大小',
        documentation :'抛射体光照大小,单位半径是地块格子',
        data: 'float'
    },
    {
        label: 'lightColor',
        insertText: 'lightColor:',
        labelDetails: { detail :' color 闪光颜色', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'闪光颜色',
        documentation :'抛射体光照颜色,不决定激光颜色,激光由color决定.',
        data: 'color'
    },
    {
        label: 'lightCastOnGround',
        insertText: 'lightCastOnGround:',
        labelDetails: { detail :' bool 闪光映射到地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'闪光映射到地面',
        documentation :'将闪光效果映射到地面,如火炮的光和抛射体是分离的.',
        data: 'bool'
    },
    {
        label: 'largeHitEffect',
        insertText: 'largeHitEffect:',
        labelDetails: { detail :' bool 大的打击效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'大的打击效果',
        documentation :'为true时会产生大的爆炸效果和声音(仅用于装饰),设为false时会禁用范围武器的冲击波效果.',
        data: 'bool'
    },
    {
        label: 'lightingEffect',
        insertText: 'lightingEffect:',
        labelDetails: { detail :' bool 闪电效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'闪电效果',
        documentation :'将抛射体图像修改为闪电,一般需要instant(瞬间命中)搭配.',
        data: 'bool'
    },
    {
        label: 'laserEffect',
        insertText: 'laserEffect:',
        labelDetails: { detail :' bool 激光效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'激光效果',
        documentation :'将抛射体图像修改为激光.',
        data: 'bool'
    },
    {
        label: 'delayedStartTimer',
        insertText: 'delayedStartTimer:',
        labelDetails: { detail :' time 延迟时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'延迟时间',
        documentation :'抛射体发射延迟时间.',
        data: 'time'
    },
    {
        label: 'beamImage',
        insertText: 'beamImage:',
        labelDetails: { detail :' file-image 波束图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束图像',
        documentation :'用于激光效果的主体图像,图像会被复制为多份显示.例如可用于做红警中的正弦波状辐射武器.因为本质是图像拼接,所以长度限制不能小于20',
        data: 'file-image'
    },
    {
        label: 'beamImageOffsetRate',
        insertText: 'beamImageOffsetRate:',
        labelDetails: { detail :' float 波束偏移频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束偏移频率',
        documentation :'波束图像的移动频率.',
        data: 'float'
    },
    {
        label: 'beamImageStart',
        insertText: 'beamImageStart:',
        labelDetails: { detail :' file-image 波束开始图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束开始图像',
        documentation :'光束动画开火端效果图像',
        data: 'file-image'
    },
    {
        label: 'beamImageEnd',
        insertText: 'beamImageEnd:',
        labelDetails: { detail :' file-image 波束命中图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束命中图像',
        documentation :'光束动画命中端效果图像',
        data: 'file-image'
    },
    {
        label: 'beamImageStartRotated',
        insertText: 'beamImageStartRotated:',
        labelDetails: { detail :' bool 波束始端旋转', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束始端旋转',
        documentation :'光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转.',
        data: 'bool'
    },
    {
        label: 'beamImageEndRotated',
        insertText: 'beamImageEndRotated:',
        labelDetails: { detail :' bool 波束末端旋转', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        detail :'波束末端旋转',
        documentation :'光束动画命中端效果图像是否旋转,默认false.',
        data: 'bool'
    },
];