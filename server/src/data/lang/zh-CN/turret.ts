import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const TURRET: CompletionItem[] = [
    {
        label: 'x',
        insertText: 'x:',
        labelDetails: { detail :' float x:', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'x:',
        documentation :'坐标X',
        data: 'float'
    },
    {
        label: 'y',
        insertText: 'y:',
        labelDetails: { detail :' float y:', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'y:',
        documentation :'坐标Y',
        data: 'float'
    },
    {
        label: 'height',
        insertText: 'height:',
        labelDetails: { detail :' float 炮塔高度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔高度',
        documentation :'(用于3d单位,实测链接的炮塔也会跟着改变高度)to help placement on 3d style units',
        data: 'float'
    },
    {
        label: 'copyFrom',
        insertText: 'copyFrom:',
        labelDetails: { detail :' turretRef 复制数据自', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'复制数据自',
        documentation :'复制指定炮塔的所有值,作为该炮塔的默认值.新写代码重复时则覆盖掉它.',
        data: 'turretRef'
    },
    {
        label: 'projectile',
        insertText: 'projectile:',
        labelDetails: { detail :' projectileRef 抛射体', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'抛射体',
        documentation :'使用此抛射体.默认为第一个抛射体.',
        data: 'projectileRef'
    },
    {
        label: 'altProjectile',
        insertText: 'altProjectile:',
        labelDetails: { detail :' projectileRef 关联抛射体', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'关联抛射体',
        documentation :'当altProjectileCondition为true时,从此炮塔发射的抛射体.',
        data: 'projectileRef'
    },
    {
        label: 'altProjectileCondition',
        insertText: 'altProjectileCondition:',
        labelDetails: { detail :' logicBoolean 关联抛射体条件', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'关联抛射体条件',
        documentation :'用于altProjectile',
        data: 'logicBoolean'
    },
    {
        label: 'barrelX',
        insertText: 'barrelX:',
        labelDetails: { detail :' float 炮抛射体x', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮抛射体x',
        documentation :'默认值为0.控制抛射体生成的X轴位置.',
        data: 'float'
    },
    {
        label: 'barrelY',
        insertText: 'barrelY:',
        labelDetails: { detail :' float 炮抛射体y', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮抛射体y',
        documentation :'默认为大0.注意:size和barrelY含义相同',
        data: 'float'
    },
    {
        label: 'barrelHeight',
        insertText: 'barrelHeight:',
        labelDetails: { detail :' float 炮抛射体高度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮抛射体高度',
        documentation :'高度(用于3d).影响抛射体产生的高度.',
        data: 'float'
    },
    {
        label: 'size',
        insertText: 'size:',
        labelDetails: { detail :' float 炮塔大小', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔大小',
        documentation :'控制炮塔中心与抛射体丸产生点之间的距离.',
        data: 'float'
    },
    {
        label: 'turnSpeed',
        insertText: 'turnSpeed:',
        labelDetails: { detail :' float 炮塔转速', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔转速',
        documentation :'炮塔最大转动速度.单位度每帧.',
        data: 'float'
    },
    {
        label: 'turnSpeedAcceleration',
        insertText: 'turnSpeedAcceleration:',
        labelDetails: { detail :' float 炮塔旋转加速度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔旋转加速度',
        documentation :'炮塔加速度,默认设置为禁用,并使用全转速度.',
        data: 'float'
    },
    {
        label: 'turnSpeedDeceleration',
        insertText: 'turnSpeedDeceleration:',
        labelDetails: { detail :' float 炮塔旋转减速度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔旋转减速度',
        documentation :'默认为turnSpeedAcceleration.将此值设置为高于转弯加速度可能会允许更快地命中目标',
        data: 'float'
    },
    {
        label: 'idleDir',
        insertText: 'idleDir:',
        labelDetails: { detail :' float 闲时角度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'闲时角度',
        documentation :'闲置时角度.',
        data: 'float'
    },
    {
        label: 'idleDirReversing',
        insertText: 'idleDirReversing:',
        labelDetails: { detail :' float 闲时角度反转', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'闲时角度反转',
        documentation :'允许闲置时角度反转.除非连接到另一个炮塔(否则连接的炮塔在反转时通常会旋转),否则默认为idleDir + 180.如重坦逆行时炮塔转向.',
        data: 'float'
    },
    {
        label: 'shouldResetTurret',
        insertText: 'shouldResetTurret:',
        labelDetails: { detail :' bool 空闲自动归位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲自动归位',
        documentation :'默认为true. 填false时禁止炮塔自动归位.',
        data: 'bool'
    },
    {
        label: 'idleSweepAngle',
        insertText: 'idleSweepAngle:',
        labelDetails: { detail :' int 空闲扫描角度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描角度',
        documentation :'炮塔闲时扫描角度.这一系列用于设置炮塔闲置时候转圈警戒动作.',
        data: 'int'
    },
    {
        label: 'idleSweepDelay',
        insertText: 'idleSweepDelay:',
        labelDetails: { detail :' float 空闲扫描间隔', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描间隔',
        documentation :'炮塔闲时扫描间隔,多久动一次.',
        data: 'float'
    },
    {
        label: 'idleSweepSpeed',
        insertText: 'idleSweepSpeed:',
        labelDetails: { detail :' float 空闲扫描速度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描速度',
        documentation :'炮塔闲时扫描转向的速度.',
        data: 'float'
    },
    {
        label: 'idleSweepCondition',
        insertText: 'idleSweepCondition:',
        labelDetails: { detail :' logicBoolean 空闲扫描条件', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描条件',
        documentation :'炮塔闲时扫描的条件,比如单位移动但没攻击时炮塔确实是闲置的,但这时可能不该旋转.',
        data: 'logicBoolean'
    },
    {
        label: 'idleSweepAddRandomDelay',
        insertText: 'idleSweepAddRandomDelay:',
        labelDetails: { detail :' float 空闲扫描随机延迟', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描随机延迟',
        documentation :'炮塔闲时扫描的随机延迟',
        data: 'float'
    },
    {
        label: 'idleSweepAddRandomAngle',
        insertText: 'idleSweepAddRandomAngle:',
        labelDetails: { detail :' int 空闲扫描随机角度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'空闲扫描随机角度',
        documentation :'炮塔闲时扫描的随机角度',
        data: 'int'
    },
    {
        label: 'attachedTo',
        insertText: 'attachedTo:',
        labelDetails: { detail :' turretRef 链接到', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'链接到',
        documentation :'要连接的另一个炮塔的ID,将相对于它定位,并随其旋转.',
        data: 'turretRef'
    },
    {
        label: 'slave',
        insertText: 'slave:',
        labelDetails: { detail :' bool 隶属', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'隶属',
        documentation :'锁定此转塔的方向,并为附加的转塔发射冷却时间.常用于多炮管单位.',
        data: 'bool'
    },
    {
        label: 'isMainNanoTurret',
        insertText: 'isMainNanoTurret:',
        labelDetails: { detail :' bool 是主构建炮塔', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'是主构建炮塔',
        documentation :'默认为false.用于创建建筑物的炮塔.只能在一个炮塔上为true,并且canShoot设置为false.',
        data: 'bool'
    },
    {
        label: 'energyUsage',
        insertText: 'energyUsage:',
        labelDetails: { detail :' float 能量需求', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'能量需求',
        documentation :'发射武器所需的能量.与resourceUsage相同:energy = X',
        data: 'float'
    },
    {
        label: 'resourceUsage',
        insertText: 'resourceUsage:',
        labelDetails: { detail :' resourceRef 资源需求', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'资源需求',
        documentation :'可以使用资金/能源/生命/护盾/弹药等.如果不符合条件则停止攻击.credits/energy/hp/shield/ammo',
        data: 'resourceRef'
    },
    {
        label: 'delay',
        insertText: 'delay:',
        labelDetails: { detail :' time 开火间隔', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火间隔',
        documentation :'设置攻击间隔,覆盖全局炮塔间隔数据.',
        data: 'time'
    },
    {
        label: 'linkDelayWithTurret',
        insertText: 'linkDelayWithTurret:',
        labelDetails: { detail :' turretRef 链接间隔', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'链接间隔',
        documentation :'当另一炮塔开火时,该炮塔上的冷却延迟将被重置/删除',
        data: 'turretRef'
    },
    {
        label: 'warmup',
        insertText: 'warmup:',
        labelDetails: { detail :' time 预热', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'预热',
        documentation :'射击前延迟.需要准备多长时间才能攻击,可以制作出蓄力效果.',
        data: 'time'
    },
    {
        label: 'warmupCallDownRate',
        insertText: 'warmupCallDownRate:',
        labelDetails: { detail :' float 预热下降速度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'预热下降速度',
        documentation :'停止攻击后预热条下降速度',
        data: 'float'
    },
    {
        label: 'warmupNoReset',
        insertText: 'warmupNoReset:',
        labelDetails: { detail :' bool 预热不重置', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'预热不重置',
        documentation :'默认为false.射击后未重设真正的预热时.与warmupCallDownRate一起使用',
        data: 'bool'
    },
    {
        label: 'warmupShootDelayTransfer',
        insertText: 'warmupShootDelayTransfer:',
        labelDetails: { detail :' float 开火间隔过渡', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火间隔过渡',
        documentation :'默认值为0,这是一个乘数,用于通过预热值减少下一次开火延迟.与warmupNoReset一起使用时,可以使攻击速度越来越快.',
        data: 'float'
    },
    {
        label: 'barrelOffsetX_onOddShots',
        insertText: 'barrelOffsetX_onOddShots:',
        labelDetails: { detail :' float 奇数射击时炮抛射体偏移', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'奇数射击时炮抛射体偏移',
        documentation :'默认0.在奇数射击时横向偏移,用于简化双管单位制作.',
        data: 'float'
    },
    {
        label: 'canShoot',
        insertText: 'canShoot:',
        labelDetails: { detail :' bool 可以开火', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可以开火',
        documentation :'可以开火,默认为true',
        data: 'bool'
    },
    {
        label: 'canAttackFlyingUnits',
        insertText: 'canAttackFlyingUnits:',
        labelDetails: { detail :' logicBoolean 可攻击空中单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击空中单位',
        documentation :'可以攻击空中单位,覆盖[attack]的设定.',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackLandUnits',
        insertText: 'canAttackLandUnits:',
        labelDetails: { detail :' logicBoolean 可攻击表面单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击表面单位',
        documentation :'可以攻击表面单位(包括陆地和水面)',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackUnderwaterUnits',
        insertText: 'canAttackUnderwaterUnits:',
        labelDetails: { detail :' logicBoolean 可攻击水下单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击水下单位',
        documentation :'可以攻击水下单位',
        data: 'logicBoolean'
    },
    {
        label: 'canAttackNotTouchingWaterUnits',
        insertText: 'canAttackNotTouchingWaterUnits:',
        labelDetails: { detail :' logicBoolean 可以攻击非接触水单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可以攻击非接触水单位',
        documentation :'可以攻击非接触水单位,默认为true.如果是false,则只能攻击与水接触的单位,不能攻击岸上.用于鱼雷逻辑.也可以根据炮塔需要设置.',
        data: 'logicBoolean'
    },
    {
        label: 'canOnlyAttackUnitsWithTags',
        insertText: 'canOnlyAttackUnitsWithTags:',
        labelDetails: { detail :' string 只攻击带特定标签单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'只攻击带特定标签单位',
        documentation :'只能攻击带特定标签的单位',
        data: 'string'
    },
    {
        label: 'canOnlyAttackUnitsWithoutTags',
        insertText: 'canOnlyAttackUnitsWithoutTags:',
        labelDetails: { detail :' string 不攻击带特定标签单位', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'不攻击带特定标签单位',
        documentation :'不能攻击带特定标签的单位',
        data: 'string'
    },
    {
        label: 'canAttackCondition',
        insertText: 'canAttackCondition:',
        labelDetails: { detail :' logicBoolean 攻击条件', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'攻击条件',
        documentation :'攻击需要满足条件.',
        data: 'logicBoolean'
    },
    {
        label: 'clearTurretTargetAfterFiring',
        insertText: 'clearTurretTargetAfterFiring:',
        labelDetails: { detail :' bool 射击后重置炮塔目标', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'射击后重置炮塔目标',
        documentation :'射击后重置炮塔目标.',
        data: 'bool'
    },
    {
        label: 'limitingRange',
        insertText: 'limitingRange:',
        labelDetails: { detail :' float 限制范围', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'限制范围',
        documentation :'限制此炮塔的最远攻击范围.不要将此代码应用到所有炮塔,如果需要则设置maxAttackRange.',
        data: 'float'
    },
    {
        label: 'limitingAngle',
        insertText: 'limitingAngle:',
        labelDetails: { detail :' float 限制角度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'限制角度',
        documentation :'与idleDir配合.炮塔只能以+/-此角度进行攻击.',
        data: 'float'
    },
    {
        label: 'limitingMinRange',
        insertText: 'limitingMinRange:',
        labelDetails: { detail :' float 最小距离', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'最小距离',
        documentation :'设置炮塔的最小攻击范围,不能攻击此范围内单位,也就是死角.',
        data: 'float'
    },
    {
        label: 'canAttackMaxAngle',
        insertText: 'canAttackMaxAngle:',
        labelDetails: { detail :' float 可攻击最大角度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'可攻击最大角度',
        documentation :'设置炮塔的最大射击角度.如果单位在可攻击角度外则不会开火.默认值为5,不要设置得更低.可以设置为181,即不需要转向就可发射炮抛射体.',
        data: 'float'
    },
    {
        label: 'interceptProjectiles_withTags',
        insertText: 'interceptProjectiles_withTags:',
        labelDetails: { detail :' string 拦截抛射体需有标签', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'拦截抛射体需有标签',
        documentation :'拦截具有此标签的抛射体,目前铁锈用于反核武器.',
        data: 'string'
    },
    {
        label: 'interceptProjectiles_andTargetingGroundUnderDistance',
        insertText: 'interceptProjectiles_andTargetingGroundUnderDistance:',
        labelDetails: { detail :' int 拦截抛射体检索范围', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'拦截抛射体检索范围',
        documentation :'守护的范围,只有当敌方攻击目标地点落在此圈子内时才考虑拦截.',
        data: 'int'
    },
    {
        label: 'interceptProjectiles_andUnderDistance',
        insertText: 'interceptProjectiles_andUnderDistance:',
        labelDetails: { detail :' int 拦截抛射体攻击范围', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'拦截抛射体攻击范围',
        documentation :'默认值为2000,当抛射体到达这个距离时才开始发射拦截.',
        data: 'int'
    },
    {
        label: 'interceptProjectiles_andOverHeight',
        insertText: 'interceptProjectiles_andOverHeight:',
        labelDetails: { detail :' int 拦截抛射体高度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'拦截抛射体高度',
        documentation :'需要超过此高度才会拦截.默认值为0.',
        data: 'int'
    },
    {
        label: 'interceptProjectile_removeTargetLifeOnly',
        insertText: 'interceptProjectile_removeTargetLifeOnly:',
        labelDetails: { detail :' bool 拦截抛射体移除目标存活时间', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'拦截抛射体移除目标存活时间',
        documentation :'默认值为false,当为false时射抛射体移除.true时使被击中的抛射体爆炸或分裂.用于设定命中抛射体时是否执行分裂逻辑.',
        data: 'bool'
    },
    {
        label: 'laserDefenceEnergyUse',
        insertText: 'laserDefenceEnergyUse:',
        labelDetails: { detail :' float 激光防御能量需求', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'激光防御能量需求',
        documentation :'炮塔启用激光防御拦截敌方抛射体.还应在core中设置energyMax.',
        data: 'float'
    },
    {
        label: 'aimOffsetSpread',
        insertText: 'aimOffsetSpread:',
        labelDetails: { detail :' float 瞄准偏移', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'瞄准偏移',
        documentation :'将每次攻击时的偏移量乘以目标半径.默认为0.6.设为0则不偏移,对范围武器影响较大.',
        data: 'float'
    },
    {
        label: 'invisible',
        insertText: 'invisible:',
        labelDetails: { detail :' logicBoolean 隐藏炮塔图像', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'隐藏炮塔图像',
        documentation :'即不显示炮塔本身图像,但是攻击什么的还是可以.',
        data: 'logicBoolean'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' file-image 图像', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'图像',
        documentation :'使用自定义图片.覆盖单位的主炮塔图像',
        data: 'file-image'
    },
    {
        label: 'image_applyTeamColors',
        insertText: 'image_applyTeamColors:',
        labelDetails: { detail :' bool 图像应用队伍颜色', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'图像应用队伍颜色',
        documentation :'炮塔图像使用队伍颜色.默认为false.',
        data: 'bool'
    },
    {
        label: 'image_drawOffsetX',
        insertText: 'image_drawOffsetX:',
        labelDetails: { detail :' float 图像绘制偏移x', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'图像绘制偏移x',
        documentation :'炮塔图像在X轴偏移.',
        data: 'float'
    },
    {
        label: 'image_drawOffsetY',
        insertText: 'image_drawOffsetY:',
        labelDetails: { detail :' float 图像绘制偏移y', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'图像绘制偏移y',
        documentation :'炮塔图像在Y轴偏移.',
        data: 'float'
    },
    {
        label: 'chargeEffectImage',
        insertText: 'chargeEffectImage:',
        labelDetails: { detail :' file-image 充能效果图像', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'充能效果图像',
        documentation :'预热时的充能效果.默认是由小变大.',
        data: 'file-image'
    },
    {
        label: 'warmupStartEffect',
        insertText: 'warmupStartEffect:',
        labelDetails: { detail :' effectRef 预热效果', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'预热效果',
        documentation :'开火延迟时产生效果.',
        data: 'effectRef'
    },
    {
        label: 'shoot_sound',
        insertText: 'shoot_sound:',
        labelDetails: { detail :' string 开火音效', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火音效',
        documentation :'开火音效,填声音文件.',
        data: 'string'
    },
    {
        label: 'shoot_sound_vol',
        insertText: 'shoot_sound_vol:',
        labelDetails: { detail :' float 开火音效大小', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火音效大小',
        documentation :'播放声音大小.',
        data: 'float'
    },
    {
        label: 'shoot_flame',
        insertText: 'shoot_flame:',
        labelDetails: { detail :' effectRef 开火动画', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火动画',
        documentation :'开火动画,内置参考表末尾.Luke推荐为:small, large, smoke, shockwave(小,大,烟,冲击波).可以自定义.',
        data: 'effectRef'
    },
    {
        label: 'shoot_light',
        insertText: 'shoot_light:',
        labelDetails: { detail :' color 开火闪光', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火闪光',
        documentation :'开火时闪光,16进制argb格式.#AARRGGBB,透明度,红,绿,蓝',
        data: 'color'
    },
    {
        label: 'idleSpin',
        insertText: 'idleSpin:',
        labelDetails: { detail :' float 闲时转速', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'闲时转速',
        documentation :'炮塔闲置时的旋转速度,单位度每帧.',
        data: 'float'
    },
    {
        label: 'onShoot_playAnimation',
        insertText: 'onShoot_playAnimation:',
        labelDetails: { detail :' animationRef 开火播放动画', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火播放动画',
        documentation :'开火后播放[Animation]中的自定义动画',
        data: 'animationRef'
    },
    {
        label: 'onShoot_freezeBodyMovementFor',
        insertText: 'onShoot_freezeBodyMovementFor:',
        labelDetails: { detail :' bool 开火冻结移动', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火冻结移动',
        documentation :'开火时冻结单位主体运动.',
        data: 'bool'
    },
    {
        label: 'onShoot_triggerActions',
        insertText: 'onShoot_triggerActions:',
        labelDetails: { detail :' actionRef 开火触发行为', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'开火触发行为',
        documentation :'每次这个炮塔开火时触发这些动作',
        data: 'actionRef'
    },
    {
        label: 'unloadUpToXUnitsAndGiveAttackOrder',
        insertText: 'unloadUpToXUnitsAndGiveAttackOrder:',
        labelDetails: { detail :' int 卸载单位并赋予攻击目标', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'卸载单位并赋予攻击目标',
        documentation :'在炮塔炮筒位置卸下X个单位,并让它们攻击炮塔指定的目标.',
        data: 'int'
    },
    {
        label: 'recoilOffset',
        insertText: 'recoilOffset:',
        labelDetails: { detail :' float 后坐力大小', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'后坐力大小',
        documentation :'开火后向前或向后推动炮塔,以产生后坐力.填像素.',
        data: 'float'
    },
    {
        label: 'recoilOutTime',
        insertText: 'recoilOutTime:',
        labelDetails: { detail :' float 后坐力速度', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'后坐力速度',
        documentation :'开火后到达偏移位置的时间',
        data: 'float'
    },
    {
        label: 'recoilReturnTime',
        insertText: 'recoilReturnTime:',
        labelDetails: { detail :' float 后坐力恢复', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'后坐力恢复',
        documentation :'开火后回到默认位置所需时间.',
        data: 'float'
    },
    {
        label: 'showRangeUIGuide',
        insertText: 'showRangeUIGuide:',
        labelDetails: { detail :' bool 显示范围UI', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'显示范围UI',
        documentation :'显示攻击范围的白圈.默认true.',
        data: 'bool'
    },
    {
        label: 'yAxisScaling',
        insertText: 'yAxisScaling:',
        labelDetails: { detail :' float Y轴缩放比例', description: '[turret]' },
        kind: CompletionItemKind.Text,
        detail :'Y轴缩放比例',
        documentation :'多用于用于2.5D效果,也就是伪3D.',
        data: 'float'
    },
];