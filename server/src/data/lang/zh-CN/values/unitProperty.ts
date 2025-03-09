import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const UNITPROPERTY: CompletionItem[] = [
    {
        label: 'isUnderwater()',
        insertText: 'isUnderwater()',
        labelDetails: { detail :' logicBoolean 当单位处于WATER地块上,且高度<0时返回true', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当单位处于WATER地块上,且高度<0时返回true',
        documentation :'在水下',
        data: 'logicBoolean'
    },
    {
        label: 'underwater()',
        insertText: 'underwater()',
        labelDetails: { detail :' logicBoolean 当单位处于WATER地块上,且高度<0时返回真,同isUnderWater', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当单位处于WATER地块上,且高度<0时返回真,同isUnderWater',
        documentation :'在水下',
        data: 'logicBoolean'
    },
    {
        label: 'ground()',
        insertText: 'ground()',
        labelDetails: { detail :' logicBoolean 在地面上', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在地面上',
        documentation :'在地面上',
        data: 'logicBoolean'
    },
    {
        label: 'isAtGroundHeight()',
        insertText: 'isAtGroundHeight()',
        labelDetails: { detail :' logicBoolean 单位高度为1-4时返回true', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位高度为1-4时返回true',
        documentation :'在地面高度',
        data: 'logicBoolean'
    },
    {
        label: 'flying()',
        insertText: 'flying()',
        labelDetails: { detail :' logicBoolean 在飞行', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在飞行',
        documentation :'在飞行',
        data: 'logicBoolean'
    },
    {
        label: 'isFlying()',
        insertText: 'isFlying()',
        labelDetails: { detail :' logicBoolean 字面意思', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'字面意思',
        documentation :'在飞行',
        data: 'logicBoolean'
    },
    {
        label: 'isMoving()',
        insertText: 'isMoving()',
        labelDetails: { detail :' logicBoolean 若当前速度不为0则返回true', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'若当前速度不为0则返回true',
        documentation :'在移动',
        data: 'logicBoolean'
    },
    {
        label: 'isAtTopSpeed()',
        insertText: 'isAtTopSpeed()',
        labelDetails: { detail :' logicBoolean 当单位当前速度等于movement填入的最大速度时返回true', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当单位当前速度等于movement填入的最大速度时返回true',
        documentation :'在最高速度',
        data: 'logicBoolean'
    },
    {
        label: 'isInWater()',
        insertText: 'isInWater()',
        labelDetails: { detail :' logicBoolean 同在水下', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'同在水下',
        documentation :'在水中',
        data: 'logicBoolean'
    },
    {
        label: 'isOverwater()',
        insertText: 'isOverwater()',
        labelDetails: { detail :' logicBoolean 在水上', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在水上',
        documentation :'在水上',
        data: 'logicBoolean'
    },
    {
        label: 'isOverLiquid()',
        insertText: 'isOverLiquid()',
        labelDetails: { detail :' logicBoolean 在水或岩浆上', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在水或岩浆上',
        documentation :'在液体上',
        data: 'logicBoolean'
    },
    {
        label: 'isOverClift()',
        insertText: 'isOverClift()',
        labelDetails: { detail :' logicBoolean 在悬崖上', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在悬崖上',
        documentation :'在悬崖上',
        data: 'logicBoolean'
    },
    {
        label: 'isOverPassableTile()',
        insertText: 'isOverPassableTile()',
        labelDetails: { detail :' logicBoolean 在自身movementType允许的地块上', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在自身movementType允许的地块上',
        documentation :'在可达地块上',
        data: 'logicBoolean'
    },
    {
        label: 'isOverOpenLand()',
        insertText: 'isOverOpenLand()',
        labelDetails: { detail :' logicBoolean 对在悬崖上取非', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'对在悬崖上取非',
        documentation :'在开阔地带',
        data: 'logicBoolean'
    },
    {
        label: 'height',
        insertText: 'height',
        labelDetails: { detail :' float 返回单位当前高度', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回单位当前高度',
        documentation :'高度',
        data: 'float'
    },
    {
        label: 'hasResources()',
        insertText: 'hasResources()',
        labelDetails: { detail :' logicBoolean 不建议使用,用resource.type', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,用resource.type',
        documentation :'有资源',
        data: 'logicBoolean'
    },
    {
        label: 'resource()',
        insertText: 'resource()',
        labelDetails: { detail :' logicBoolean 返回某个资源值,语法:unitRef.resource.type', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回某个资源值,语法:unitRef.resource.type',
        documentation :'资源',
        data: 'logicBoolean'
    },
    {
        label: 'isResourceLargerThan()',
        insertText: 'isResourceLargerThan()',
        labelDetails: { detail :' logicBoolean 不建议使用,用resource.type', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,用resource.type',
        documentation :'资源大于',
        data: 'logicBoolean'
    },
    {
        label: 'maxHp',
        insertText: 'maxHp',
        labelDetails: { detail :' int 单位的血量上限', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位的血量上限',
        documentation :'最大血量',
        data: 'int'
    },
    {
        label: 'hp',
        insertText: 'hp',
        labelDetails: { detail :' int 单位当前血量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位当前血量',
        documentation :'血量',
        data: 'int'
    },
    {
        label: 'ammo',
        insertText: 'ammo',
        labelDetails: { detail :' int 返回当前弹药量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回当前弹药量',
        documentation :'弹药',
        data: 'int'
    },
    {
        label: 'maxShield',
        insertText: 'maxShield',
        labelDetails: { detail :' int 返回最大护盾', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回最大护盾',
        documentation :'最大护盾',
        data: 'int'
    },
    {
        label: 'maxEnergy',
        insertText: 'maxEnergy',
        labelDetails: { detail :' int 返回最大能量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回最大能量',
        documentation :'最大能量',
        data: 'int'
    },
    {
        label: 'isEnergyRecharging()',
        insertText: 'isEnergyRecharging()',
        labelDetails: { detail :' logicBoolean 能量在回复', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'能量在回复',
        documentation :'能量在回复',
        data: 'logicBoolean'
    },
    {
        label: 'isAmmoEmpty()',
        insertText: 'isAmmoEmpty()',
        labelDetails: { detail :' logicBoolean ammo为0', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'ammo为0',
        documentation :'弹药为空',
        data: 'logicBoolean'
    },
    {
        label: 'ammoIncludingQueued',
        insertText: 'ammoIncludingQueued',
        labelDetails: { detail :' int 不建议使用,可被queueSize(withActionTag=)取代', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,可被queueSize(withActionTag=)取代',
        documentation :'包括在队列内建造的弹药',
        data: 'int'
    },
    {
        label: 'energy',
        insertText: 'energy',
        labelDetails: { detail :' float 返回当前能量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回当前能量',
        documentation :'能量',
        data: 'float'
    },
    {
        label: 'energyIncludingQueued',
        insertText: 'energyIncludingQueued',
        labelDetails: { detail :' float 不建议使用,可被queueSize(withActionTag=)取代', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,可被queueSize(withActionTag=)取代',
        documentation :'包括在队列内建造的能量',
        data: 'float'
    },
    {
        label: 'isEnergyFull()',
        insertText: 'isEnergyFull()',
        labelDetails: { detail :' logicBoolean 不建议使用,用energy逻辑比较', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,用energy逻辑比较',
        documentation :'如果能量满',
        data: 'logicBoolean'
    },
    {
        label: 'isEnergyEmpty()',
        insertText: 'isEnergyEmpty()',
        labelDetails: { detail :' logicBoolean 不建议使用,用energy逻辑比较', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,用energy逻辑比较',
        documentation :'如果能量空',
        data: 'logicBoolean'
    },
    {
        label: 'shield',
        insertText: 'shield',
        labelDetails: { detail :' int 返回当前护盾量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回当前护盾量',
        documentation :'护盾',
        data: 'int'
    },
    {
        label: 'kills',
        insertText: 'kills',
        labelDetails: { detail :' int 该单位击杀的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'该单位击杀的单位数量',
        documentation :'击杀数',
        data: 'int'
    },
    {
        label: 'queueSize',
        insertText: 'queueSize',
        labelDetails: { detail :' int 当前队列的数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当前队列的数量',
        documentation :'队列数',
        data: 'int'
    },
    {
        label: 'teamId',
        insertText: 'teamId',
        labelDetails: { detail :' int 返回队伍编号', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回队伍编号',
        documentation :'队伍',
        data: 'int'
    },
    {
        label: 'x',
        insertText: 'x',
        labelDetails: { detail :' float 返回单位所在的x坐标', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回单位所在的x坐标',
        documentation :'x坐标',
        data: 'float'
    },
    {
        label: 'y',
        insertText: 'y',
        labelDetails: { detail :' float 返回单位所在的y坐标', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回单位所在的y坐标',
        documentation :'y坐标',
        data: 'float'
    },
    {
        label: 'z',
        insertText: 'z',
        labelDetails: { detail :' float 返回单位所在的z坐标,同height', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回单位所在的z坐标,同height',
        documentation :'z坐标',
        data: 'float'
    },
    {
        label: 'dir',
        insertText: 'dir',
        labelDetails: { detail :' float 单位朝向的方向', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位朝向的方向',
        documentation :'方向',
        data: 'float'
    },
    {
        label: 'priceCredits',
        insertText: 'priceCredits',
        labelDetails: { detail :' int 单位的价格,不能返回价格包含的自定义资源', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位的价格,不能返回价格包含的自定义资源',
        documentation :'价格',
        data: 'int'
    },
    {
        label: 'hasFlag()',
        insertText: 'hasFlag()',
        labelDetails: { detail :' logicBoolean 不建议使用,使用@memory boolean', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,使用@memory boolean',
        documentation :'有标志',
        data: 'logicBoolean'
    },
    {
        label: 'tags',
        insertText: 'tags',
        labelDetails: { detail :' string 单位目前携带的标签,布尔值变量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位目前携带的标签,布尔值变量',
        documentation :'标签',
        data: 'string'
    },
    {
        label: 'hasTags()',
        insertText: 'hasTags()',
        labelDetails: { detail :' logicBoolean 建议用tags', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'建议用tags',
        documentation :'有标签',
        data: 'logicBoolean'
    },
    {
        label: 'globalTeamTags()',
        insertText: 'globalTeamTags()',
        labelDetails: { detail :' logicBoolean 单位携带的全局标签', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位携带的全局标签',
        documentation :'全局标签',
        data: 'logicBoolean'
    },
    {
        label: 'transportingCount',
        insertText: 'transportingCount',
        labelDetails: { detail :' int 单位当前正在装载的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位当前正在装载的单位数量',
        documentation :'载员数',
        data: 'int'
    },
    {
        label: 'numberOfAttachedUnits',
        insertText: 'numberOfAttachedUnits',
        labelDetails: { detail :' int 当前附属的数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当前附属的数量',
        documentation :'附属数',
        data: 'int'
    },
    {
        label: 'isAttacking()',
        insertText: 'isAttacking()',
        labelDetails: { detail :' logicBoolean 在攻击其他单位', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'在攻击其他单位',
        documentation :'在攻击',
        data: 'logicBoolean'
    },
    {
        label: 'hasActiveWaypoint()',
        insertText: 'hasActiveWaypoint()',
        labelDetails: { detail :' logicBoolean 当前是否有路径点', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'当前是否有路径点',
        documentation :'有路径点',
        data: 'logicBoolean'
    },
    {
        label: 'transportingUnitWithTags()',
        insertText: 'transportingUnitWithTags()',
        labelDetails: { detail :' logicBoolean 检查所有运输单位是否包含', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'检查所有运输单位是否包含',
        documentation :'运输单位有标签',
        data: 'logicBoolean'
    },
    {
        label: 'isTransportUnloading()',
        insertText: 'isTransportUnloading()',
        labelDetails: { detail :' logicBoolean 正在卸载', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'正在卸载',
        documentation :'正在卸载',
        data: 'logicBoolean'
    },
    {
        label: 'hasParent()',
        insertText: 'hasParent()',
        labelDetails: { detail :' logicBoolean 有父级,包括装载,和附属父级', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'有父级,包括装载,和附属父级',
        documentation :'有父级',
        data: 'logicBoolean'
    },
    {
        label: 'hasTakenDamage()',
        insertText: 'hasTakenDamage()',
        labelDetails: { detail :' logicBoolean 检查单位在一定时间内是否受到过伤害', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'检查单位在一定时间内是否受到过伤害',
        documentation :'受到伤害',
        data: 'logicBoolean'
    },
    {
        label: 'timeAlive',
        insertText: 'timeAlive',
        labelDetails: { detail :' float 精准到小数点后2位,每帧刷新,可用于避免降低autoT间隔的前提下制作decal流畅动画', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'精准到小数点后2位,每帧刷新,可用于避免降低autoT间隔的前提下制作decal流畅动画',
        documentation :'自身存活时间',
        data: 'float'
    },
    {
        label: 'lastConverted',
        insertText: 'lastConverted',
        labelDetails: { detail :' float 检查单位在一定时间范围内是否转换过', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'检查单位在一定时间范围内是否转换过',
        documentation :'最后转换时间',
        data: 'float'
    },
    {
        label: 'customTimer',
        insertText: 'customTimer',
        labelDetails: { detail :' float 一次性计时器,如果不懒建议用memory', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'一次性计时器,如果不懒建议用memory',
        documentation :'自定义计时器',
        data: 'float'
    },
    {
        label: 'isOnNeutralTeam()',
        insertText: 'isOnNeutralTeam()',
        labelDetails: { detail :' logicBoolean teamId小于0为中立队伍', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'teamId小于0为中立队伍',
        documentation :'在中立阵营',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInTeam()',
        insertText: 'numberOfUnitsInTeam()',
        labelDetails: { detail :' logicBoolean 返回自身所在队伍的单位数量,如限定范围则最大为1500', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回自身所在队伍的单位数量,如限定范围则最大为1500',
        documentation :'队伍单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInAllyNotOwnTeam()',
        insertText: 'numberOfUnitsInAllyNotOwnTeam()',
        labelDetails: { detail :' logicBoolean 返回所有盟友的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回所有盟友的单位数量',
        documentation :'盟友单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInEnemyTeam()',
        insertText: 'numberOfUnitsInEnemyTeam()',
        labelDetails: { detail :' logicBoolean 返回所有敌人的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回所有敌人的单位数量',
        documentation :'敌人单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInNeutralTeam()',
        insertText: 'numberOfUnitsInNeutralTeam()',
        labelDetails: { detail :' logicBoolean 返回中立的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回中立的单位数量',
        documentation :'中立单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInAggressiveTeam()',
        insertText: 'numberOfUnitsInAggressiveTeam()',
        labelDetails: { detail :' logicBoolean 返回敌对中立的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回敌对中立的单位数量',
        documentation :'敌对中立单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfUnitsInAllTeams()',
        insertText: 'numberOfUnitsInAllTeams()',
        labelDetails: { detail :' logicBoolean 返回全队伍的单位数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'返回全队伍的单位数量',
        documentation :'全队伍单位数量',
        data: 'logicBoolean'
    },
    {
        label: 'hasUnitInTeam()',
        insertText: 'hasUnitInTeam()',
        labelDetails: { detail :' logicBoolean 不建议使用,使用numberOfUnitsInTeam', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,使用numberOfUnitsInTeam',
        documentation :'队伍中有单位',
        data: 'logicBoolean'
    },
    {
        label: 'noUnitInTeam()',
        insertText: 'noUnitInTeam()',
        labelDetails: { detail :' logicBoolean 不建议使用,使用numberOfUnitsInTeam', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'不建议使用,使用numberOfUnitsInTeam',
        documentation :'队伍中无单位',
        data: 'logicBoolean'
    },
    {
        label: 'isInMap()',
        insertText: 'isInMap()',
        labelDetails: { detail :' logicBoolean 检测单位是否还在地图内', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'检测单位是否还在地图内',
        documentation :'在地图内',
        data: 'logicBoolean'
    },
    {
        label: 'isReversing()',
        insertText: 'isReversing()',
        labelDetails: { detail :' logicBoolean 单位在反向移动', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位在反向移动',
        documentation :'在倒车',
        data: 'logicBoolean'
    },
    {
        label: 'isControlledByAI()',
        insertText: 'isControlledByAI()',
        labelDetails: { detail :' logicBoolean 控制该队伍的如果是ai则返回true', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'控制该队伍的如果是ai则返回true',
        documentation :'被ai操控',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfQueuedWaypoints',
        insertText: 'numberOfQueuedWaypoints',
        labelDetails: { detail :' int 目前已添加的路径点数量', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'目前已添加的路径点数量',
        documentation :'路径点队列数量',
        data: 'int'
    },
    {
        label: 'speed',
        insertText: 'speed',
        labelDetails: { detail :' float 单位当前速度', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位当前速度',
        documentation :'速度',
        data: 'float'
    },
    {
        label: 'maxspeed',
        insertText: 'maxspeed',
        labelDetails: { detail :' float 单位的最大速度', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位的最大速度',
        documentation :'最大速度',
        data: 'float'
    },
    {
        label: 'builtAmount',
        insertText: 'builtAmount',
        labelDetails: { detail :' float 单位建造完成了多少,从0-1', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位建造完成了多少,从0-1',
        documentation :'建造完成度',
        data: 'float'
    },
    {
        label: 'completed()',
        insertText: 'completed()',
        labelDetails: { detail :' logicBoolean 单位是否完成建造', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'单位是否完成建造',
        documentation :'完成',
        data: 'logicBoolean'
    },
    {
        label: 'maxMoveSpeed',
        insertText: 'maxMoveSpeed',
        labelDetails: { detail :' float 同maxspeed', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'同maxspeed',
        documentation :'最大移动速度',
        data: 'float'
    },
    {
        label: 'teamDefeatedTech()',
        insertText: 'teamDefeatedTech()',
        labelDetails: { detail :' logicBoolean 队伍失败', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'队伍失败',
        documentation :'队伍失败',
        data: 'logicBoolean'
    },
    {
        label: 'teamWipedOut()',
        insertText: 'teamWipedOut()',
        labelDetails: { detail :' logicBoolean 队伍出局', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'队伍出局',
        documentation :'队伍出局',
        data: 'logicBoolean'
    },
    {
        label: 'numberOfConnections',
        insertText: 'numberOfConnections',
        labelDetails: { detail :' int ', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'自身连接数',
        data: 'int'
    },
    {
        label: 'teamVictory()',
        insertText: 'teamVictory()',
        labelDetails: { detail :' logicBoolean 队伍胜利', description: '[unitProperty]' },
        kind: CompletionItemKind.Text,
        detail :'队伍胜利',
        documentation :'队伍胜利',
        data: 'logicBoolean'
    },
];