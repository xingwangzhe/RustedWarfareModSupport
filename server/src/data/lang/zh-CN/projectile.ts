import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const PROJECTILE: CompletionItem[] = [
    {
        label: 'life',
        insertText: 'life:',
        labelDetails: { detail :' 存在时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'存在时间',
        documentation :'开火后炮抛射体在没命中时的存活时间,单位为帧.60为1s.多少合适取决于速度与射程.'
    },
    {
        label: 'deflectionPower',
        insertText: 'deflectionPower:',
        labelDetails: { detail :' 激光拦截耗能', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'激光拦截耗能',
        documentation :'默认值为1.此抛射体被激光防御摧毁所需的能量. -1为禁止拦截.(对特殊武器如火焰)'
    },
    {
        label: 'explodeOnEndOfLife',
        insertText: 'explodeOnEndOfLife:',
        labelDetails: { detail :' 寿终爆炸', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'寿终爆炸',
        documentation :'默认为false.True则会在寿命终结时爆炸,并产生其命中时该有的效果.而不是直接消失.'
    },
    {
        label: 'autoTargetingOnDeadTarget',
        insertText: 'autoTargetingOnDeadTarget:',
        labelDetails: { detail :' 自动切换目标', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'自动切换目标',
        documentation :'如果目标死亡则自动切换单位.填true时如果有targetGround:true抛射体将会追踪距离它最近的单位.如果没有将会在单位死亡后再改变目标.'
    },
    {
        label: 'autoTargetingOnDeadTargetRange',
        insertText: 'autoTargetingOnDeadTargetRange:',
        labelDetails: { detail :' 自动切换目标检索范围', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'自动切换目标检索范围',
        documentation :'当旧目标死亡时选择新目标的范围'
    },
    {
        label: 'autoTargetingOnDeadTargetLead',
        insertText: 'autoTargetingOnDeadTargetLead:',
        labelDetails: { detail :' 自动切换目标预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'自动切换目标预判',
        documentation :'尝试新的目标时的预判'
    },
    {
        label: 'unloadUpToXUnitsFromSource',
        insertText: 'unloadUpToXUnitsFromSource:',
        labelDetails: { detail :' 卸载单位至命中地', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'卸载单位至命中地',
        documentation :'将指定个数单位卸载到抛射体爆炸位置.'
    },
    {
        label: 'teleportSource',
        insertText: 'teleportSource:',
        labelDetails: { detail :' 传送', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'传送',
        documentation :'将单位移动到抛射体爆炸的位置,用于传送自身.'
    },
    {
        label: 'spawnUnit',
        insertText: 'spawnUnit:',
        labelDetails: { detail :' 产生单位', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'产生单位',
        documentation :'在抛射体丸爆炸位置产生这种单位'
    },
    {
        label: 'convertHitToSourceTeam',
        insertText: 'convertHitToSourceTeam:',
        labelDetails: { detail :' 命中时更改所属', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'命中时更改所属',
        documentation :'将更改被命中的单位转换队伍为自身所属.'
    },
    {
        label: 'tags',
        insertText: 'tags:',
        labelDetails: { detail :' 标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'标签',
        documentation :'用于抛射体拦截功能.'
    },
    {
        label: 'flameWeapon',
        insertText: 'flameWeapon:',
        labelDetails: { detail :' 火焰武器', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'火焰武器',
        documentation :'命中时产生小火焰(仅用于装饰)'
    },
    {
        label: 'spawnProjectilesOnEndOfLife',
        insertText: 'spawnProjectilesOnEndOfLife:',
        labelDetails: { detail :' 在寿命结束时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'在寿命结束时生成抛射体',
        documentation :'填抛射体名.在寿命(life)结束时生成抛射体.生成抛射体逻辑具体参数参考后面生成抛射体大项.这简化了过去许多需要多炮塔(如贯穿攻击)或是生成辅助单位才能实现的操作.'
    },
    {
        label: 'spawnProjectilesOnExplode',
        insertText: 'spawnProjectilesOnExplode:',
        labelDetails: { detail :' 在爆炸时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'在爆炸时生成抛射体',
        documentation :'填抛射体名.只在爆炸时生成抛射体,如果耗光life则不会生成.'
    },
    {
        label: 'spawnProjectilesOnCreate',
        insertText: 'spawnProjectilesOnCreate:',
        labelDetails: { detail :' 在创建时生成抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'在创建时生成抛射体',
        documentation :'填抛射体名.抛射体创建时生成抛射体.'
    },
    {
        label: 'directDamage',
        insertText: 'directDamage:',
        labelDetails: { detail :' 直接伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'直接伤害',
        documentation :'击中对目标单位造成伤害.不适用于targetGround:true.'
    },
    {
        label: 'areaDamage',
        insertText: 'areaDamage:',
        labelDetails: { detail :' 范围伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'范围伤害',
        documentation :'范围伤害值,此区域内敌方单位都将受到损伤,默认向边缘递减.'
    },
    {
        label: 'areaRadius',
        insertText: 'areaRadius:',
        labelDetails: { detail :' 范围半径', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'范围半径',
        documentation :'范围伤害区域大小,此区域内敌方单位都将受到损伤,默认向边缘递减.数值类型为像素,大小算法为半径,铁锈内地块一格长为20像素.'
    },
    {
        label: 'areaDamageNoFalloff',
        insertText: 'areaDamageNoFalloff:',
        labelDetails: { detail :' 范围伤害不衰减', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'范围伤害不衰减',
        documentation :'默认false.为true时范围伤害不再向边缘递减.'
    },
    {
        label: 'areaRadiusFromEdge',
        insertText: 'areaRadiusFromEdge:',
        labelDetails: { detail :' 范围伤害从边缘计算', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'范围伤害从边缘计算',
        documentation :'范围伤害将从单位的边缘计算,而不是默认的中心计算.主要用于攻击大型单位.'
    },
    {
        label: 'areaExpandTime',
        insertText: 'areaExpandTime:',
        labelDetails: { detail :' 范围扩展时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'范围扩展时间',
        documentation :'将区域伤害变为爆炸波向边缘扩散.效果如核抛射体.'
    },
    {
        label: 'areaHitAirAndLandAtSameTime',
        insertText: 'areaHitAirAndLandAtSameTime:',
        labelDetails: { detail :' 范围武器同时攻击空中和地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'范围武器同时攻击空中和地面',
        documentation :'范围武器将同时打击空中和地面.'
    },
    {
        label: 'areaHitUnderwaterAlways',
        insertText: 'areaHitUnderwaterAlways:',
        labelDetails: { detail :' 范围武器可攻击深海', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'范围武器可攻击深海',
        documentation :'范围武器将可以打击深海单位如潜艇.'
    },
    {
        label: 'areaIgnoreUnitsCloserThan',
        insertText: 'areaIgnoreUnitsCloserThan:',
        labelDetails: { detail :' 范围伤害忽略区域', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'范围伤害忽略区域',
        documentation :'小于此范围的单位不会受到攻击影响.需要比areaRadius小,否则造不成伤害.'
    },
    {
        label: 'buildingDamageMultiplier',
        insertText: 'buildingDamageMultiplier:',
        labelDetails: { detail :' 建筑伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'建筑伤害乘数',
        documentation :'默认为1.对建筑物伤害乘上此数值,用于伤害修正.比如闪电对建筑物伤害低,火焰对建筑物伤害高.'
    },
    {
        label: 'shieldDamageMultiplier',
        insertText: 'shieldDamageMultiplier:',
        labelDetails: { detail :' 护盾伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'护盾伤害乘数',
        documentation :'默认为1.对护盾伤害乘数.如0对护盾不造成伤害,2对护盾造成双倍伤害'
    },
    {
        label: 'shieldDefectionMultiplier',
        insertText: 'shieldDefectionMultiplier:',
        labelDetails: { detail :' 护盾阻挡乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'护盾阻挡乘数',
        documentation :'护盾阻挡乘数,填0则可无视护盾,同时对单位和盾造成伤害.'
    },
    {
        label: 'hullDamageMultiplier',
        insertText: 'hullDamageMultiplier:',
        labelDetails: { detail :' 护盾损伤乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'护盾损伤乘数',
        documentation :'可以用来制造只影响护盾的电磁脉冲武器.0忽略单位,只伤害护盾'
    },
    {
        label: 'ignoreParentShootDamageMultiplier',
        insertText: 'ignoreParentShootDamageMultiplier:',
        labelDetails: { detail :' 忽略父单位射击伤害乘数', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'忽略父单位射击伤害乘数',
        documentation :'忽略父单位射击伤害乘数'
    },
    {
        label: 'armourIgnoreAmount',
        insertText: 'armourIgnoreAmount:',
        labelDetails: { detail :' 无视装甲数量', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'无视装甲数量',
        documentation :'无视目标装甲数量并造成伤害.'
    },
    {
        label: 'friendlyFire',
        insertText: 'friendlyFire:',
        labelDetails: { detail :' 友伤', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'友伤',
        documentation :'范围武器有友伤,可以伤害自己单位.铁锈限制不能对盟友有伤害.负数友伤可以用于范围维修,如果修盟友则需要用中立单位实现.参数(false,true,only-ignoreEnemy)(假,真,忽略敌人的友伤)'
    },
    {
        label: 'mutatorX_ifUnitWithTags',
        insertText: 'mutatorX_ifUnitWithTags:',
        labelDetails: { detail :' 修正需要标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'修正需要标签',
        documentation :'伤害修正所需标签,仅对携带标签单位有效.否则为原始伤害.'
    },
    {
        label: 'mutatorX_ifUnitWithoutTags',
        insertText: 'mutatorX_ifUnitWithoutTags:',
        labelDetails: { detail :' 修正除此标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'修正除此标签',
        documentation :'伤害修正除此标签外有效.'
    },
    {
        label: 'mutatorX_directDamageMultiplier',
        insertText: 'mutatorX_directDamageMultiplier:',
        labelDetails: { detail :' 修正直接伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'修正直接伤害',
        documentation :'伤害修正,直接伤害(directDamage)乘数.比如直接伤害100,这里填2,对目标就造成200伤害.'
    },
    {
        label: 'mutatorX_areaDamageMultiplier',
        insertText: 'mutatorX_areaDamageMultiplier:',
        labelDetails: { detail :' 修正范围伤害', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'修正范围伤害',
        documentation :'伤害修正,范围伤害(areaDamage)乘数.比如直接伤害100,这里填2,对目标就造成200伤害.'
    },
    {
        label: 'mutatorX_changedExplodeEffect',
        insertText: 'mutatorX_changedExplodeEffect:',
        labelDetails: { detail :' 修正命中效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'修正命中效果',
        documentation :'如果此修正处于有效状态,则更改爆炸效果.'
    },
    {
        label: 'mutatorX_addResourcesDirectHit',
        insertText: 'mutatorX_addResourcesDirectHit:',
        labelDetails: { detail :' 修正直接添加资源', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'修正直接添加资源',
        documentation :'伤害修正,用于直接伤害(directDamage),给目标添加指定资源.用途如给目标资源后,目标检测自身资源然后禁止移动.'
    },
    {
        label: 'mutatorX_addResourcesAreaHit',
        insertText: 'mutatorX_addResourcesAreaHit:',
        labelDetails: { detail :' 修正区域添加资源', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 38,
        detail :'修正区域添加资源',
        documentation :'伤害修正,用于范围伤害(areaDamage),给目标添加指定资源.'
    },
    {
        label: 'targetGround',
        insertText: 'targetGround:',
        labelDetails: { detail :' 目标为地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 39,
        detail :'目标为地面',
        documentation :'抛射体瞄准并攻击目标所在的地面,而不是追踪目标.直接伤害(directDamage)将会失效,需要使用areaDamage和areaRadius.'
    },
    {
        label: 'targetGround_includeTargetHeight',
        insertText: 'targetGround_includeTargetHeight:',
        labelDetails: { detail :' 目标为地面包括目标高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 40,
        detail :'目标为地面包括目标高度',
        documentation :'区域影响AA武器'
    },
    {
        label: 'targetGroundHeightOffset',
        insertText: 'targetGroundHeightOffset:',
        labelDetails: { detail :' 目标为地面高度偏移', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 41,
        detail :'目标为地面高度偏移',
        documentation :'在目标上方或下方射击.可能对分裂和落下的炮抛射体有用.'
    },
    {
        label: 'speed',
        insertText: 'speed:',
        labelDetails: { detail :' 速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 42,
        detail :'速度',
        documentation :'抛射体飞行速度,单位是每帧飞行像素.铁锈地块1格20像素,填1则每秒飞行3格.'
    },
    {
        label: 'targetSpeed',
        insertText: 'targetSpeed:',
        labelDetails: { detail :' 到达速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 43,
        detail :'到达速度',
        documentation :'加速到这个速度'
    },
    {
        label: 'targetSpeedAcceleration',
        insertText: 'targetSpeedAcceleration:',
        labelDetails: { detail :' 加速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 44,
        detail :'加速度',
        documentation :'加速度,控制targetSpeed的速度提升'
    },
    {
        label: 'ballistic',
        insertText: 'ballistic:',
        labelDetails: { detail :' 抛射体道', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 45,
        detail :'抛射体道',
        documentation :'抛射体道导抛射体效果,使抛射体先飞向空中并向下飞,而不是走直线.'
    },
    {
        label: 'ballistic_delaymove_height',
        insertText: 'ballistic_delaymove_height:',
        labelDetails: { detail :' 抛射体道垂直飞行高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 46,
        detail :'抛射体道垂直飞行高度',
        documentation :'抛射体道导抛射体发射初期效果,决定抛射体道一开始先升高多少,再斜向爬升到最高过度.'
    },
    {
        label: 'ballistic_height',
        insertText: 'ballistic_height:',
        labelDetails: { detail :' 抛射体道高度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 47,
        detail :'抛射体道高度',
        documentation :'抛射体道最终高度.'
    },
    {
        label: 'targetGroundSpread',
        insertText: 'targetGroundSpread:',
        labelDetails: { detail :' 目标为地面散布', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 48,
        detail :'目标为地面散布',
        documentation :'填数值,用于目标为地面时随机造成偏差效果'
    },
    {
        label: 'speedSpread',
        insertText: 'speedSpread:',
        labelDetails: { detail :' 速度散布', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 49,
        detail :'速度散布',
        documentation :'随机改变炮抛射体初始速度'
    },
    {
        label: 'instant',
        insertText: 'instant:',
        labelDetails: { detail :' 瞬间命中', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 50,
        detail :'瞬间命中',
        documentation :'开火时立即击中目标,用于激光,闪电,波束.'
    },
    {
        label: 'instantReuseLast',
        insertText: 'instantReuseLast:',
        labelDetails: { detail :' 瞬间命中回收最后抛射体', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 51,
        detail :'瞬间命中回收最后抛射体',
        documentation :'用于激光和闪电.激光或闪电命中后还会存在一段时间,当此抛射体命中后,清除上一个抛射体效果.使得只有一个抛射体存在.如使用高频射速变成光束武器,而不是瞎眼叠加.'
    },
    {
        label: 'instantReuseLast_alsoChangeTurretAim',
        insertText: 'instantReuseLast_alsoChangeTurretAim:',
        labelDetails: { detail :' 命中回收抛射体且改变瞄准', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 52,
        detail :'命中回收抛射体且改变瞄准',
        documentation :'使炮塔瞄准受到命中目标扫描效果的影响,对光束武器有用'
    },
    {
        label: 'instantReuseLast_keepAreaDamageList',
        insertText: 'instantReuseLast_keepAreaDamageList:',
        labelDetails: { detail :' 命中回收抛射体区域伤害列表', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 53,
        detail :'命中回收抛射体区域伤害列表',
        documentation :'瞬间命中并回收最后的抛射体并且保持区域伤害列表,默认false,保持列表是1.13的正常行为,造成区域伤害不会第二次生效,但不是很有用.只有当你想要旧的行为时才使用这个.'
    },
    {
        label: 'disableLeadTargeting',
        insertText: 'disableLeadTargeting:',
        labelDetails: { detail :' 禁用预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 54,
        detail :'禁用预判',
        documentation :'瞄准移动目标时,禁用预判计算.默认为false.'
    },
    {
        label: 'leadTargetingSpeedCalculation',
        insertText: 'leadTargetingSpeedCalculation:',
        labelDetails: { detail :' 预判计算', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 55,
        detail :'预判计算',
        documentation :'用于使用targetGround时预判计算.目标计算的预期速度.默认为“targetSpeed”.如果设置则基于speed.'
    },
    {
        label: 'initialUnguidedSpeedHeight',
        insertText: 'initialUnguidedSpeedHeight:',
        labelDetails: { detail :' 初始非制导垂直速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 56,
        detail :'初始非制导垂直速度',
        documentation :'设置抛射体和地面间的垂直速度,利用gravity制造出平滑的抛物线.比较迷,填1左右,重力可以不填.'
    },
    {
        label: 'initialUnguidedSpeedX',
        insertText: 'initialUnguidedSpeedX:',
        labelDetails: { detail :' 初非导引速度X', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 57,
        detail :'初非导引速度X',
        documentation :'让抛射体以弧线形式移动,负数向左,正数向右.'
    },
    {
        label: 'initialUnguidedSpeedY',
        insertText: 'initialUnguidedSpeedY:',
        labelDetails: { detail :' 初非导引速度Y', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 58,
        detail :'初非导引速度Y',
        documentation :'修改抛射体的高度,正数向下,负数向上.'
    },
    {
        label: 'gravity',
        insertText: 'gravity:',
        labelDetails: { detail :' 重力', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 59,
        detail :'重力',
        documentation :'控制地面的抛射体丸的拉力.与initialUnguidedSpeedHeight一起使用.'
    },
    {
        label: 'trueGravity',
        insertText: 'trueGravity:',
        labelDetails: { detail :' 绝对向重力', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 60,
        detail :'绝对向重力',
        documentation :'炮弹在靠近单位时因为有该key会低空飞行一段距离,但注意不要填的太大,否则会直接往屏幕下方飞走.'
    },
    {
        label: 'turnSpeed',
        insertText: 'turnSpeed:',
        labelDetails: { detail :' 转弯速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 61,
        detail :'转弯速度',
        documentation :'限制抛射体的转弯速度,更好的做出抛射体道效果.'
    },
    {
        label: 'turnSpeedWhenNear',
        insertText: 'turnSpeedWhenNear:',
        labelDetails: { detail :' 靠近时转弯速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 62,
        detail :'靠近时转弯速度',
        documentation :'用于当射抛射体非常接近目标时,默认禁用转弯速度以使其能够命中.'
    },
    {
        label: 'wobbleAmplitude',
        insertText: 'wobbleAmplitude:',
        labelDetails: { detail :' 摆动幅度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 63,
        detail :'摆动幅度',
        documentation :'抛射体飞行中摆动的剧烈程度.'
    },
    {
        label: 'wobbleFrequency',
        insertText: 'wobbleFrequency:',
        labelDetails: { detail :' 摆动频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 64,
        detail :'摆动频率',
        documentation :'抛射体飞行中摆动的频率.'
    },
    {
        label: 'pushForce',
        insertText: 'pushForce:',
        labelDetails: { detail :' 推动力量', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 65,
        detail :'推动力量',
        documentation :'抛射体丸所携带的“重量”,质量越大,推力越大.推动(或以负值拉动)被击中的单位.除以目标质量'
    },
    {
        label: 'pushVelocity',
        insertText: 'pushVelocity:',
        labelDetails: { detail :' 推进速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 66,
        detail :'推进速度',
        documentation :'抛射体爆炸后可用推动单位,推力相对于方向的速度,推动(或以负值拉动)被击中的单位.忽略目标质量'
    },
    {
        label: 'moveWithParent',
        insertText: 'moveWithParent:',
        labelDetails: { detail :' 随父物体移动', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 67,
        detail :'随父物体移动',
        documentation :'当父单位移动时也移动抛射体.对光束效果武器很有用.'
    },
    {
        label: 'sweepOffset',
        insertText: 'sweepOffset:',
        labelDetails: { detail :' 扫描偏移', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 68,
        detail :'扫描偏移',
        documentation :'扫描偏移,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.'
    },
    {
        label: 'sweepSpeed',
        insertText: 'sweepSpeed:',
        labelDetails: { detail :' 扫描速度', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 69,
        detail :'扫描速度',
        documentation :'扫描速度,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.'
    },
    {
        label: 'sweepOffsetFromTargetRadius',
        insertText: 'sweepOffsetFromTargetRadius:',
        labelDetails: { detail :' 扫描偏移目标半径', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 70,
        detail :'扫描偏移目标半径',
        documentation :'以目标半径作为扫描偏移量乘数,用于制作类似于两栖护盾坦克的激光武器.对光束效果很有用.'
    },
    {
        label: 'retargetingInFlight',
        insertText: 'retargetingInFlight:',
        labelDetails: { detail :' 重新瞄准在飞行时', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 71,
        detail :'重新瞄准在飞行时',
        documentation :'在飞行过程中重新瞄准一个新的目标,非常适合投掷式武器和相互碰撞的抛射体'
    },
    {
        label: 'retargetingInFlightSearchDelay',
        insertText: 'retargetingInFlightSearchDelay:',
        labelDetails: { detail :' 重新瞄准在飞行时搜索延迟', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 72,
        detail :'重新瞄准在飞行时搜索延迟',
        documentation :'寻找新目标之间的时间.默认5'
    },
    {
        label: 'retargetingInFlightSearchRange',
        insertText: 'retargetingInFlightSearchRange:',
        labelDetails: { detail :' 重新瞄准在飞行时搜索范围', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 73,
        detail :'重新瞄准在飞行时搜索范围',
        documentation :'重新选择目标的范围.默认值120'
    },
    {
        label: 'retargetingInFlightSearchLead',
        insertText: 'retargetingInFlightSearchLead:',
        labelDetails: { detail :' 重新瞄准在飞行时预判', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 74,
        detail :'重新瞄准在飞行时预判',
        documentation :'引导射抛射体试图击中目标.默认15'
    },
    {
        label: 'retargetingInFlightSearchOnlyTags',
        insertText: 'retargetingInFlightSearchOnlyTags:',
        labelDetails: { detail :' 重新瞄准在飞行时针对标签', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 75,
        detail :'重新瞄准在飞行时针对标签',
        documentation :'只针对具有这些标签的单位进行重定向.'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' 颜色', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 76,
        detail :'颜色',
        documentation :'使用十六进制值对该抛射体重新着色,它也决定了激光颜色,颜色格式为#AARRGGBB.'
    },
    {
        label: 'teamColorRatio',
        insertText: 'teamColorRatio:',
        labelDetails: { detail :' 阵营色色相', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 77,
        detail :'阵营色色相',
        documentation :'将团队颜色混合到抛射体颜色中,填0-1.'
    },
    {
        label: 'teamColorRatio_sourceRatio',
        insertText: 'teamColorRatio_sourceRatio:',
        labelDetails: { detail :' 阵营色色相比例', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 78,
        detail :'阵营色色相比例',
        documentation :'将团队颜色混合到抛射体颜色中与原色比例,默认为(1-teamColorRatio)'
    },
    {
        label: 'invisible',
        insertText: 'invisible:',
        labelDetails: { detail :' 隐藏', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 79,
        detail :'隐藏',
        documentation :'隐藏抛射体图像.'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' 图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 80,
        detail :'图像',
        documentation :'使用自定义图片.覆盖drawType和frame'
    },
    {
        label: 'shadowFrame',
        insertText: 'shadowFrame:',
        labelDetails: { detail :' 阴影帧', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 81,
        detail :'阴影帧',
        documentation :'阴影使用的内置图像帧数'
    },
    {
        label: 'shadowImage',
        insertText: 'shadowImage:',
        labelDetails: { detail :' 阴影图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 82,
        detail :'阴影图像',
        documentation :'使用自定义图片给抛射体加阴影.'
    },
    {
        label: 'drawType',
        insertText: 'drawType:',
        labelDetails: { detail :' 绘制类型', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 83,
        detail :'绘制类型',
        documentation :'使用内置抛射体图像. 0:projectiles.png 1:projectiles_large.png 2:projectiles2.png'
    },
    {
        label: 'drawSize',
        insertText: 'drawSize:',
        labelDetails: { detail :' 绘制大小', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 84,
        detail :'绘制大小',
        documentation :'缩放抛射体大小.默认为1'
    },
    {
        label: 'frame',
        insertText: 'frame:',
        labelDetails: { detail :' 帧', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 85,
        detail :'帧',
        documentation :'使用的内置图像帧,编号从零开始.和drawType结合使用.'
    },
    {
        label: 'hitSound',
        insertText: 'hitSound:',
        labelDetails: { detail :' 打击音效', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 86,
        detail :'打击音效',
        documentation :'启用命中音效,默认true'
    },
    {
        label: 'explodeEffect',
        insertText: 'explodeEffect:',
        labelDetails: { detail :' 爆炸效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 87,
        detail :'爆炸效果',
        documentation :'抛射体爆炸效果'
    },
    {
        label: 'explodeEffectOnShield',
        insertText: 'explodeEffectOnShield:',
        labelDetails: { detail :' 护盾上爆炸效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 88,
        detail :'护盾上爆炸效果',
        documentation :'如果目标上有护盾,则使用此效果'
    },
    {
        label: 'drawUnderUnits',
        insertText: 'drawUnderUnits:',
        labelDetails: { detail :' 绘制与单位下', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 89,
        detail :'绘制与单位下',
        documentation :'绘制于单位下方.'
    },
    {
        label: 'effectOnCreate',
        insertText: 'effectOnCreate:',
        labelDetails: { detail :' 创建时效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 90,
        detail :'创建时效果',
        documentation :'创建时效果,会追随抛射体.'
    },
    {
        label: 'shouldRevealFog',
        insertText: 'shouldRevealFog:',
        labelDetails: { detail :' 揭开迷雾', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 91,
        detail :'揭开迷雾',
        documentation :'抛射体在爆炸时向玩家揭开迷雾.'
    },
    {
        label: 'alwaysVisibleInFog',
        insertText: 'alwaysVisibleInFog:',
        labelDetails: { detail :' 迷雾中显示', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 92,
        detail :'迷雾中显示',
        documentation :'抛射体总是在迷雾中显示.'
    },
    {
        label: 'nukeWeapon',
        insertText: 'nukeWeapon:',
        labelDetails: { detail :' 核武器', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 93,
        detail :'核武器',
        documentation :'发射时在迷你地图上显示.还有其他一些效果.'
    },
    {
        label: 'trailEffect',
        insertText: 'trailEffect:',
        labelDetails: { detail :' 尾焰', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 94,
        detail :'尾焰',
        documentation :'设置为true时为默认的尾焰.但也可以指向任何自定义效果,或使用内置效果.'
    },
    {
        label: 'trailEffectRate',
        insertText: 'trailEffectRate:',
        labelDetails: { detail :' 尾焰频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 95,
        detail :'尾焰频率',
        documentation :'尾焰产生频率,默认为3'
    },
    {
        label: 'lightSize',
        insertText: 'lightSize:',
        labelDetails: { detail :' 闪光大小', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 96,
        detail :'闪光大小',
        documentation :'抛射体光照大小,单位半径是地块格子'
    },
    {
        label: 'lightColor',
        insertText: 'lightColor:',
        labelDetails: { detail :' 闪光颜色', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 97,
        detail :'闪光颜色',
        documentation :'抛射体光照颜色,不决定激光颜色,激光由color决定.'
    },
    {
        label: 'lightCastOnGround',
        insertText: 'lightCastOnGround:',
        labelDetails: { detail :' 闪光映射到地面', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 98,
        detail :'闪光映射到地面',
        documentation :'将闪光效果映射到地面,如火炮的光和抛射体是分离的.'
    },
    {
        label: 'largeHitEffect',
        insertText: 'largeHitEffect:',
        labelDetails: { detail :' 大的打击效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 99,
        detail :'大的打击效果',
        documentation :'为true时会产生大的爆炸效果和声音(仅用于装饰),设为false时会禁用范围武器的冲击波效果.'
    },
    {
        label: 'lightingEffect',
        insertText: 'lightingEffect:',
        labelDetails: { detail :' 闪电效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 100,
        detail :'闪电效果',
        documentation :'将抛射体图像修改为闪电,一般需要instant(瞬间命中)搭配.'
    },
    {
        label: 'laserEffect',
        insertText: 'laserEffect:',
        labelDetails: { detail :' 激光效果', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 101,
        detail :'激光效果',
        documentation :'将抛射体图像修改为激光.'
    },
    {
        label: 'delayedStartTimer',
        insertText: 'delayedStartTimer:',
        labelDetails: { detail :' 延迟时间', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 102,
        detail :'延迟时间',
        documentation :'抛射体发射延迟时间.'
    },
    {
        label: 'beamImage',
        insertText: 'beamImage:',
        labelDetails: { detail :' 波束图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 103,
        detail :'波束图像',
        documentation :'用于激光效果的主体图像,图像会被复制为多份显示.例如可用于做红警中的正弦波状辐射武器.因为本质是图像拼接,所以长度限制不能小于20'
    },
    {
        label: 'beamImageOffsetRate',
        insertText: 'beamImageOffsetRate:',
        labelDetails: { detail :' 波束偏移频率', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 104,
        detail :'波束偏移频率',
        documentation :'波束图像的移动频率.'
    },
    {
        label: 'beamImageStart',
        insertText: 'beamImageStart:',
        labelDetails: { detail :' 波束开始图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 105,
        detail :'波束开始图像',
        documentation :'光束动画开火端效果图像'
    },
    {
        label: 'beamImageEnd',
        insertText: 'beamImageEnd:',
        labelDetails: { detail :' 波束命中图像', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 106,
        detail :'波束命中图像',
        documentation :'光束动画命中端效果图像'
    },
    {
        label: 'beamImageStartRotated',
        insertText: 'beamImageStartRotated:',
        labelDetails: { detail :' 波束始端旋转', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 107,
        detail :'波束始端旋转',
        documentation :'光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转.'
    },
    {
        label: 'beamImageEndRotated',
        insertText: 'beamImageEndRotated:',
        labelDetails: { detail :' 波束末端旋转', description: '[projectile]' },
        kind: CompletionItemKind.Text,
        data: 108,
        detail :'波束末端旋转',
        documentation :'光束动画命中端效果图像是否旋转,默认false.'
    },
];