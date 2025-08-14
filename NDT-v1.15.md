## 单位代码
| Unnamed: 0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | key代码 | key翻译 | key描述解释 | key举例说明 | key值类型 | NaN | NaN |
| NaN | 核心 | Section | [core] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 通用代码,多是必要的代码，如果不包括这些，可能导致错误(1.13) | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | name | 名字 | 定义单位原始名称，可以是中文。游戏使用它区分其它单位。如果没有在displayText或者语言文件设置显示名称，那么它也将作为单位的显示名称。\n具体描述文件位置:assets/translationsStrings\_zh.properties格式:units.单位名称.name=写单位显示的名称\nunits.单位名称.description= [[填单位显示的描述]] | name:customTank1\nname:自定义坦克\nname:shibainu | string | NaN | NaN |
| NaN | altNames | 别名 | 以逗号分隔的名称列表。像名称一样，但优先级较低，对于启用多个自定义nod有用。 | altNames:custTank1,customTank1,cTank1 | string(s) | NaN | NaN |
| NaN | class | 类 | 无实际用处，可以删除。Luke说：保留供将来使用，默认情况下最好为CustomUnitMetadata。 | class: CustomUnitMetadata | string | NaN | NaN |
| NaN | strictLevel | 严格级别 | 默认值为0，忽略代码重复。设为1时如果当前单位内有重复代码，则报错。建议添加到"all-units.template"以应用于所有单位,进行统一查错。 | strictLevel:1 | float | NaN | NaN |
| NaN | price | 价格 | 设定单位造价，可以是负数，负数时提直接供资金。 | price: 500 | int\nstatic integer(price) | NaN | NaN |
| NaN | mass | 质量 | 单位的“重量”定义了它与其他单位的碰撞方式，值越大，推动就越困难。 | mass: 3000 | int\nstatic integer | NaN | NaN |
| NaN | techLevel | 科技等级 | 设置单位的科技等级，共有3个级别，1级GUI显示为绿色，2、3级显示为黄色。 | techLevel: 1 | int\nstatic integer | NaN | NaN |
| NaN | buildSpeed | 建造速度 | 建造此单位需要的时间，填秒。以前的计算方式为：此处所填时间=1÷(60x您需要的秒)如果定义了工厂速率则需要乘以建造乘数。 | buildSpeed: 3s | float / s | NaN | NaN |
| NaN | radius | 半径 | 单位的实际碰擦体积，也是实际的可选择范围。其光圈在displayRadius覆盖时真实体积不变。 | radius: 20 | int\nstatic integer | NaN | NaN |
| NaN | isBio | 是生物 | 此单位是否为生物，为生物则影响死亡声音和血迹（图像在drawable/blood\_mark.png，hideScorchMark：true时可以隐藏）非生物则为黑色爆炸效果。 | isBio: true | bool | NaN | NaN |
| NaN | isBug | 是虫子 | 是否为虫子，用于沙盒中的单独分类。 | isBug: false | bool | NaN | NaN |
| NaN | isBuilder | 是建造者 | 若需要此单位建造建筑物，则通常需要此代码。并且默认设为[ai] useAsBuilder。 | isBuilder: true | bool | NaN | NaN |
| NaN | streamingCost | 流式造价 | 就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。 | streamingCos:100 | int\nstatic integer(price) | NaN | NaN |
| NaN | switchPriceWithStreamingCost | 切换价格为流式造价 | 快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。 | switchPriceWithStreamingCost:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 单位统计代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | maxHp | 生命值 | 单位最大生命值，默认生成时即为此值。 | maxHp: 200 | int\nstatic integer | NaN | NaN |
| NaN | selfRegenRate | 生命恢复速度 | 此数值决定每帧增加血量。游戏内默认速度下，一秒为60逻辑帧，而您看到的FPS帧数为渲染帧，所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算。所以不要写太大。可以写负值用于自毁。 | selfRegenRate: 0.01 | float | NaN | NaN |
| NaN | maxShield | 护盾值 | 单位最大护盾值，默认生成时即为此值。如果设置了startShieldAtZero:true，则初始为0. | maxShield: 500 | int\nstatic integer | NaN | NaN |
| NaN | startShieldAtZero | 护盾初始为0 | 如果为true，则单位护盾值从0开始增加。 | startShieldAtZero: true | bool | NaN | NaN |
| NaN | shieldRegen | 护盾恢复速度 | 此数值决定每帧增加护盾值，游戏内一秒为60帧，所以不要写太大。可以写负值。 | shieldRegen: 0.15 | float | NaN | NaN |
| NaN | energyMax | 能量值 | 默认值为0。可以用作炮塔，激光防御和行动的弹药的能量。 | energyMax: 1 | float | NaN | NaN |
| NaN | startEnergyAtZero | 能量初始为0 | 如果为true，则单位能量值从0开始增加。 | startEnergyAtZero: true | bool | NaN | NaN |
| NaN | energyRegen | 能量恢复速度 | 能量每帧恢复速度，游戏内一秒为60帧，所以不要写太大。可以写负值。 | energyRegen: 0.01 | float | NaN | NaN |
| NaN | energyRegenWhenRecharging | 充能时能量恢复速度 | 能量恢复是持续的，如果您设置了energyNeedsToRechargeToFull，那么攻击时按energyRegen恢复，耗尽时的灰条按此处设定值恢复。 | energyRegenWhenRecharging:0.1 | float | NaN | NaN |
| NaN | energyStartingPercentage | 能量初始百分比 | 单位生成时所携带的能量百分比。 | energyStartingPercentage: 0.5 | float | NaN | NaN |
| NaN | energyNeedsToRechargeToFull | 能量需要充满 | 若果能量耗尽，则需要完全充能才能进行攻击。 | energyNeedsToRechargeToFull: true | float | NaN | NaN |
| NaN | energyDisplayName | 能量显示名称 | 能量显示名称,目前似乎无效.1.15 | energyDisplayName:chemms | string | NaN | NaN |
| NaN | armour | 装甲 | 抵消敌方攻击所造成的伤害。 | armour: 6 | int\nstatic integer | NaN | NaN |
| NaN | armourMinDamageToKeep | 装甲最低伤害 | 至少造成多少点伤害，默认为1.防止护甲太高完全打不动。 | armourMinDamageToKeep: 2 | int\nstatic integer | NaN | NaN |
| NaN | borrowResourcesWhileAlive | 资源活着时借用 | 创建时获取这些资源，删除或销毁时将其返回。例如用于电力逻辑，负数供电和正数耗电。 | borrowResourcesWhileAlive: gold=10 | price | NaN | NaN |
| NaN | borrowResourcesWhileBuilt | 资源在单位建成后借用 | 类似于[core]borrowResourcesWhileAlive但在单位建成后才会生效。主要对房屋之类的建筑有用，这些建筑有负的资源，可以加到单位上限等 | borrowResourcesWhileBuilt:gold=100 | price | NaN | NaN |
| NaN | generation\_resources | 资源获取 | 单位定时获得的资源，可自定义资源。 | generation\_resources: credits=5, gold=20 | price | NaN | NaN |
| NaN | generation\_active | 资源取得条件 | 获取资源条件。可用于受损时无法产出。 | generation\_active: if not self.hp(lessThan=100) | logicBoolean | NaN | NaN |
| NaN | generation\_credits | 资金获取 | 生成资源，仅用于默认的资金，也就是铁锈默认的金钱。 | generation\_credits: 2 | int\nstatic integer | NaN | NaN |
| NaN | generation\_delay | 资金获取时间 | 多久帧添加添加一次资源(generation\_creditsvi指定数值)。默认值为40，一秒为60帧。Luke不建议使用。 | generation\_delay: 40 | int\nstatic integer | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | UI和图形代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | showInEditor | 显示在沙盒中 | 设置为false可在沙箱编辑器中隐藏此单位。 （默认为true） | showInEditor: false | bool | NaN | NaN |
| NaN | displayText | 界面显示名称 | 默认单位显示给玩家的单位名称。不填则显示core下的单位name。此条目依据语言设定不同会被下一条覆盖。 | displayText: Custom Tank | LocaleString | NaN | NaN |
| NaN | displayText\_[Language] | 界面显示文本多语言 | 为单位名称添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。zh(中文通用) zh-cn(简体) zh-tw(台湾) zh-hk中文(香港) en(英语通用) ru(俄语) 其它自查(此列表并不全)，不过您应该不会闲着支持这么多语言。西班牙语（西班牙）es-ES、葡萄牙语（葡萄牙）pt-PT、日语ja、阿姆哈拉语am、爱沙尼亚语et、保加利亚语bg、冰岛语is、波兰语pl、丹麦语da、德语de、法语（法国）fr-FR、法语（加拿大）fr-CA、菲律宾语fil、芬兰语fi、韩语ko、荷兰语nl、加泰罗尼亚语ca、捷克语cs、克罗地亚语hr、拉脱维亚语lv、立陶宛语lt、罗马尼亚语ro、马来语ms、南非荷兰语af、挪威语no、葡萄牙语（巴西）pt-BR、瑞典语sv、塞尔维亚语sr、斯洛伐克语sk、斯洛文尼亚语sl、斯瓦希里语sw、泰语th、土耳其语tr、乌克兰语uk、西班牙语（拉丁美洲）es-419、希伯来语he、希腊语el、匈牙利语hu、意大利语it、印地语hi、印度尼西亚语id in、英语（美国）en-US、英语（英国）en-GB、越南语vi、祖鲁语zu | displayText\_es: Tanque Personalizado\ndisplayText\_zh:中文名 | string | NaN | NaN |
| NaN | displayDescription | 界面显示描述 | 单位显示给玩家的单位描述。 | displayDescription:-Fast movement\n炮灰 | LocaleString | NaN | NaN |
| NaN | displayDescription\_[Language] | 界面显示描述\_其它语言 | 为单位描述添加多语言支持。此方法并不方便，不如设置游戏内部语言文件，建议催luke改。地区码见上。 | displayDescription\_es: -Movimiento rápido\n-Daño ligero | string | NaN | NaN |
| NaN | displayLocaleKey | 界面显示内部调用 | 调用内部语言文件的单位名称和说明的翻译文件。 | displayLocaleKey: units.mechArtillery | string | NaN | NaN |
| NaN | displayRadius | 单位选择时显示圆圈 | 修改选择单位时显示的绿色圆圈，不更改实际碰撞(radius)和可选择范围。 | displayRadius: 20 | int\nstatic integer | NaN | NaN |
| NaN | uiTargetRadius | 为目标时半径 | 默认值为displayRadius。当攻击/回收/等等这个单位使用半径 | uiTargetRadius:20 | int\nstatic integer | NaN | NaN |
| NaN | shieldRenderRadius | 单位护盾显示半径 | 护盾绘制半径，默认值比半径大一点。可以设置在单位上显示更大或更小的护盾圈。 | shieldRenderRadius: 12 | int\nstatic integer | NaN | NaN |
| NaN | shieldDisplayOnlyDeflection | 护盾只在受攻击时显示 | 隐藏护盾，只在受到攻击时显示。 | shieldDisplayOnlyDeflection: true | bool | NaN | NaN |
| NaN | shieldDeflectionDisplayRate | 护盾消失速度 | 默认值为4。数值越大消失越快。 | shieldDeflectionDisplayRate: 3 | float | NaN | NaN |
| NaN | showOnMinimap | 显示在小地图上 | 默认为true。如果为false，则在小地图上不显示此单位。 | showOnMinimap: false | bool | NaN | NaN |
| NaN | showOnMinimapToEnemies | 显示于敌人小地图 | 是否在敌人小地图上显示。目前不支持逻辑。 | showOnMinimapToEnemies:false | bool | NaN | NaN |
| NaN | showActionsWithMixedSelectionIfOtherUnitsHaveTag | 混合所选单位所显示的行为(标签) | 如果选择的单位都包含此处使用的标签，则合并“行为(action)”。比如您的步单位通过部署转化成另一个单位，在混合时可以当作同一个单位处理，不再是默认的谁都无法执行操作。例子如红警的盟军大单位在混合选中后依旧可执行部署或解除。 | showActionsWithMixedSelectionIfOtherUnitsHaveTag:tag\_联系 | tags | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 仅构建代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | isBuilding | 是建筑 | 定义单位是否为建筑物。 | isBuilding: true | bool | NaN | NaN |
| NaN | footprint | 建筑碰撞范围 | 填四个数值(左，上，右，下)，单位是格子，建筑默认占一格，向左和向上需要填负数，填整数在选择时有偏移。\n四个数值可以完全颠倒，这样不会阻碍单位移动。\n决定建筑单位碰撞体积，此区域内单位不能通过，如果在单位运动途中单位则会绕过。单位实际可选择面积使用的是radius。 | （1x1）footprint: 0,0,0,0\n（2X2）footprint: 0,0,1,1\n（3X3）footprint: -1,-1,1,1 | int\nstatic integers | NaN | NaN |
| NaN | constructionFootprint | 建筑覆盖范围 | 基础规则同上，这个区域内不能建造建筑，但是单位可以通过。一般需要设定比上一个面积大。好处是即使建造的密密麻麻，单位也有路可走 | constructionFootprint: -1,-1,1,3 | int\nstatic integers | NaN | NaN |
| NaN | displayFootprint | 建筑选择UI | 基础规则同上，用于选择单位时UI显示。不设定则默认为建筑覆盖区域。 | displayFootprint: 0,0,1,1 | int\nstatic integers | NaN | NaN |
| NaN | buildingSelectionOffset | 建筑UI调整 | 默认值为0。以像素为单位对选框额外设定。 | buildingSelectionOffset: 4 | int\nstatic integer | NaN | NaN |
| NaN | buildingToFootprintOffsetX | 建筑X轴偏移 | 设置X轴位置偏移，默认10.若设置非对称的建筑，单位会根据覆盖范围会挤在角上，这时如果要准确显示就需要额外偏移。与直接使用图像偏移的区别:\n由于铁锈判断选中单位是根据单位体积(radius),因此图像偏移实际上单位的位置不变，会容易造成点击时的误差。而当前代码实际上是移动单位，则不会造成这个问题。 | buildingToFootprintOffsetX: 4 | float | NaN | NaN |
| NaN | buildingToFootprintOffsetY | 建筑Y轴偏移 | 设置Y轴位置偏移，默认10.其它参上条 | buildingToFootprintOffsetY: 6 | float | NaN | NaN |
| NaN | placeOnlyOnResPool | 建筑只能建造在资源池上 | 通常用于提取器，会强制在资源池中进行建筑物构造。可以用于在自定义战役中限制某单位只能在某地建造。 | placeOnlyOnResPool: true | bool | NaN | NaN |
| NaN | selfBuildRate | 自动建造速度 | 此单位自动构造所需要的时间，目前用于虫族。计算方式为：此处所填时间=1÷(60x您需要的秒)。 | selfBuildRate: 0.0008 | float | NaN | NaN |
| NaN | ignoreInUnitCapCalculation | 不计入单位数量统计 | 铁锈中有单位数量上限设定，填true时不计入统计，多用于辅助单位，建筑物的默认值为true。 | ignoreInUnitCapCalculation:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 杂项代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | copyFrom | 复制数据自 | 加载其它文件的单位数据作为该单位的默认值，支持多个文件。无后缀名限制，可不写dont\_load，用于模块化。 | copyFrom: ROOT:defaultTanks.template, tankT1.ini | file(s) (ini) | NaN | NaN |
| NaN | dont\_load | 禁止加载 | 不加载此单位，缺失数据时不会出错。与copyFrom一起使用时很有用。 | dont\_load: true | bool | NaN | NaN |
| NaN | overrideAndReplace | 覆盖单位 | 用此单位覆盖另一个单位，地图上所有单位也将被替换，可以用来替换dex内无法修改的单位。 | overrideAndReplace: builder, combatEngineer | string(s) | NaN | NaN |
| NaN | overrideResourceLoadPath | 覆盖资源加载路径 | 覆盖掉该单位的资源加载路径 | overrideResourceLoadPath:false | bool | NaN | NaN |
| NaN | logIfCreditResourceUsed | 记录是否使用资源 | 记录该单位是否使用了资源 | logIfCreditResourceUsed:false | bool | NaN | NaN |
| NaN | onNewMapSpawn | 地图位置产生指定单位 | 在地图上添加此单位。可以用于覆盖铁锈默认的资源逻辑。参数：\nemptyResourcePools\_asNeutral 产生位置于空资源池，并且为中立所属\nemptyOrOccupiedResourcePools\_asNeutral 空的或者已经占用的资源池，并且为中立所属\nmapCenter\_asNeutral 地图中心，且为中立所属\nmapCenter\_eachActiveTeam 地图中心，且给与每个玩家\nspawnPoint\_eachActiveTeam 玩家初始位置，给与每个玩家 | [core]\nname:钻矿机\nonNewMapSpawn:emptyResourcePools\_asNeutral | string | NaN | NaN |
| NaN | globalScale | 全局缩放 | 废弃代码，不要用。将一个单位按比例放大，但不放大攻击力。默认值为1。不建议更改。 | globalScale: 2 | float | NaN | NaN |
| NaN | isLocked | 锁定 | 禁止建造该单位。可以与overrideAndReplace一起使用，以限制玩家可以建造的单位。 | isLocked: true | bool | NaN | NaN |
| NaN | isLockedIfGameModeNoNuke | 禁核模式锁定 | 如果在游戏开始前选择了禁用核武器，禁止建造此单位。 | isLockedIfGameModeNoNuke: true | bool | NaN | NaN |
| NaN | experimental | 实验单位标志 | 标记单位为实验单位。影响缩小图标和游戏结束统计。 | experimental: true | bool | NaN | NaN |
| NaN | stayNeutral | 保持中立 | 设置为false时，单位处于中立队伍情况下，禁止靠近时更改为玩家所属。仍然有其它方式获得。 | stayNeutral: false | bool | NaN | NaN |
| NaN | createNeutral | 创建时中立 | 设置为true时，产生该单位总是自动转变为中立队伍。创建时中立，但不妨碍玩家捕获。 | createNeutral: true | bool | NaN | NaN |
| NaN | createOnAggressiveTeam | 创建为敌对中立 | 设置为true时，此中立单位对所有玩家有敌意。 | createOnAggressiveTeam: true | bool | NaN | NaN |
| NaN | tags | 标签 | 标签，用于对单位进行分类，用于实现各种各样的特殊作。比如单位数量限制，伤害修正，增益损益，触发条件等等 | tags: tank, smallTank, piercingDamage | string(s) | NaN | NaN |
| NaN | defineUnitMemory | 定义单位内存 | 为每个单元创建唯一的自定义存储变量。允许的类型:boolean, float/number, unit, string\n格式:defineUnitMemory:类型 变量名称\n"defineUnitMemory: boolean nukeActive,boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText\n" | defineUnitMemory:unit attackunit | memories | NaN | NaN |
| NaN | updateUnitMemory | 更新单位内存 | (类似[action]setUnitMemory但是性能更好)works like [action]setUnitMemory but with better performance and easier timing than triggering an action | updateUnitMemory:hp=self.hp/5 | memories | NaN | NaN |
| NaN | updateUnitMemoryRate | 更新单位内存频率 | (默认1s,填写0则为每帧)How often to call updateUnitMemory, defaults to 1s. At zero would trigger every frame. | NaN | memories | NaN | NaN |
| NaN | fogOfWarSightRange | 视野 | 设置单位视野，在战争迷雾中可以看到的瓷砖数量。默认为15。 | fogOfWarSightRange: 18 | int\nstatic integer | NaN | NaN |
| NaN | fogOfWarSightRangeWhileNotBuilt | 未完成时视野 | 填数值，当建筑或单位没有建造完成时，它的视野范围 | fogOfWarSightRangeWhileNotBuilt:3 | int\nstatic integer | NaN | NaN |
| NaN | softCollisionOnAll | 碰撞体积软化 | 与其他单位碰撞时产生柔和的碰撞效果，填负数会导致单位相互吸引。 | softCollisionOnAll: 3 | int\nstatic integer | NaN | NaN |
| NaN | disableAllUnitCollisions | 禁用碰撞 | 如果为true，则该单位无视与其它单位碰撞。无碰撞体积单位可以用于固定位置制造效果，或是用于一些不影响单位通行的场景。 | disableAllUnitCollisions: true | bool | NaN | NaN |
| NaN | availableInDemo | 在演示版中可用 | 是否能在演示中使用 | availableInDemo:true | bool | NaN | NaN |
| NaN | isUnrepairableUnit | 禁止被修复 | 如果为true，则任何单位都无法修复此单位。但负伤害仍然可以维修。 | isUnrepairableUnit: true | bool | NaN | NaN |
| NaN | isUnselectable | 禁止选择 | 如果为true，则无法选择单位。 （包括AI）可用于效果单位，禁止被玩家选择。 | isUnselectable: true | bool | NaN | NaN |
| NaN | isUnselectableAsTarget | 禁止选择和作为目标 | 默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位 | isUnselectableAsTarget:true | bool | NaN | NaN |
| NaN | isPickableStartingUnit | 为可选初始单位 | 如果为true，则将单位添加到游戏高级设置菜单中，用于可选初始单位菜单。 | isPickableStartingUnit:true | bool | NaN | NaN |
| NaN | startFallingWhenStartingUnit | 为可选单位开局后从天而降 | 如果为true，则游戏开始时，此单位会从从天而降。 | startFallingWhenStartingUnit: true | bool | NaN | NaN |
| NaN | soundOnAttackOrder | 攻击指令音效 | 填音效名称列表。用,隔开。每次下达攻击指令时只播放其中一个。仅支持.ogg和.wav格式，注意如果您mod用于pc端，则不要直接修改后缀名，要转换格式。 | soundOnAttackOrder: tankAttackOrder1.ogg:0.6, tankAttackOrder2.ogg | file (sound(s)) | NaN | NaN |
| NaN | soundOnMoveOrder | 移动指令音效 | 填声音名称列表。用,隔开。每次下达移动指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。 | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg | file (sound(s)) | NaN | NaN |
| NaN | soundOnNewSelection | 选择指令音效 | 填声音名称列表。用,隔开。每次下达选择指令时只播放其中一个。仅支持.ogg和.wav格式，注意不要直接修改后缀名，要转换格式。 | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg | file (sound(s)) | NaN | NaN |
| NaN | canNotBeDirectlyAttacked | 禁止直接攻击 | 无敌，如果为true，任何单位都不能直接瞄准此单位，也不会受到范围武器伤害。则还将在胜利/失败检查中跳过检查。\n注：如果初始单位有这个属性且可能会导致游戏开局就秒输时，Mod作者会看到警告消息 | canNotBeDirectlyAttacked: true | bool | NaN | NaN |
| NaN | canNotBeDamaged | 禁止受到伤害 | 无敌，可被敌方攻击，但不造成实质伤害。如果canNotBeDirectlyAttacked为true,此语句为false,则不可被直接攻击但受到范围伤害。 | canNotBeDamaged:true | bool | NaN | NaN |
| NaN | canNotBeGivenOrdersByPlayer | 禁止接受指令 | 如果为true，则单位不会接受玩家或AI的命令。可以选中查看信息。 | canNotBeGivenOrdersByPlayer: true | bool | NaN | NaN |
| NaN | canOnlyBeAttackedByUnitsWithTags | 仅许带此标签单位攻击 | 填标签，只有带有这些标签的单位才能直接定位到该单位。 | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank | strings(s) | NaN | NaN |
| NaN | allowCaptureWhenNeutralByAI | 允许中立时被AI俘虏 | (推测,以前人机不能捕获中立单位) | allowCaptureWhenNeutralByAI:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 运输代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | transportSlotsNeeded | 运输占用位置 | 默认值为1。此单位在运输载具中占据的格子数。 | transportSlotsNeeded: 2 | int\nstatic integer | NaN | NaN |
| NaN | maxTransportingUnits | 运输槽位数量 | 该单位载员格子数量。 | maxTransportingUnits: 5 | int\nstatic integer | NaN | NaN |
| NaN | transportUnitsRequireTag | 被运输单位需要标签 | 仅允许运输具有这些标签之一的单位。可以用于运输类型分类，如人运物资，步单位车运人，气垫船运车辆。或是子机限制，如航母飞机只能降落到航母。 | transportUnitsRequireTag: smallTank, soldier | string(s) | NaN | NaN |
| NaN | transportUnitsRequireMovementType | 被运输单位类型限制 | 仅允许运输具有这些移动类型之一的单位。默认陆地。比如可以设定某单位可以运输空军以实现停机坪，只运输海军等。 | transportUnitsRequireMovementType: AIR, WATER | movementTypes | NaN | NaN |
| NaN | transportUnitsBlockAirAndWaterUnits | 禁止运输空军和海军 | 禁止运输空军和海军，默认为true。如果为true，则此单位只能运输LAND单位。 | transportUnitsBlockAirAndWaterUnits: false | bool | NaN | NaN |
| NaN | transportUnitsKeepBuiltUnits | 单位建造完成时保留在载具内 | 使建造的单位留在运输者中，而不是造完直接从载具中出来。 | transportUnitsKeepBuiltUnits: true | LogicBoolean | NaN | NaN |
| NaN | transportUnitsCanUnloadUnits | 载具可以卸载单位 | 载具卸载单位需要满足条件，默认为“ if not self.isOverLiquid() and not self.isMoving()”(不在液体上且没有移动) | transportUnitsCanUnloadUnits: false | LogicBoolean | NaN | NaN |
| NaN | transportUnitsAddUnloadOption | 载具显示卸载按钮 | 是否显示卸载按钮 | transportUnitsAddUnloadOption: false | LogicBoolean | NaN | NaN |
| NaN | transportUnitsUnloadDelayBetweenEachUnit | 载具卸载时间间隔 | 卸载单位之间的延迟时间。 | transportUnitsUnloadDelayBetweenEachUnit: 12 | float | NaN | NaN |
| NaN | transportUnitsKillOnDeath | 载具内单位和载具一同死亡 | 默认为true。如果载具死亡，则其中单位也死亡。 | transportUnitsKillOnDeath: if self.isOverLiquid() | LogicBoolean | NaN | NaN |
| NaN | transportUnitsHealBy | 载具治疗内部单位速度 | 填数值，以帧为单位。自动治疗载具内部单位。 | transportUnitsHealBy: 0.1 | float | NaN | NaN |
| NaN | transportUnitsBlockOtherTransports | 载具禁止装载其它载具 | 默认值为true，如果为false，则此载具可以装载其它载具。比如步单位装物资，载具装步单位，运输船装载具。 | transportUnitsBlockOtherTransports: false | bool | NaN | NaN |
| NaN | whileNeutralTransportAnyTeam | 中立时可装载任意所属单位 | 如果是中立的，则这个部队可以装载任何队伍的部队。可用于占领中立单位，比如坦克需要驾驶员，步单位建筑平民建筑。 | whileNeutralTransportAnyTeam: true | bool | NaN | NaN |
| NaN | whileNeutralConvertToTransportedTeam | 中立时转换为载员队伍 | 中立时将其转换为载员队伍。与whileNeutralTransportAnyTeam一起使用，用于占领中立单位。 | whileNeutralConvertToTransportedTeam: true | bool | NaN | NaN |
| NaN | convertToNeutralIfNotTransporting | 卸载所有单位时恢复为中立 | 卸载单位时将其恢复为中立队伍。与whileNeutralTransportAnyTeam一起使用。 | convertToNeutralIfNotTransporting: true | bool | NaN | NaN |
| NaN | transportUnitsOnTeamChangeKeepCurrentTeam | 转换所属时保留内部单位所属 | 如果为true，则单位转换阵营时仍然将运输的单位保留在其原始队伍中。 | transportUnitsOnTeamChangeKeepCurrentTeam: true | bool | NaN | NaN |
| NaN | transportUnitsEachUnitAlwaysUsesSingleSlot | 载员只占用一个槽位 | 所有载员无论体积只占用一个运输槽。但体积大于载员数时仍然不能进入。 | transportUnitsEachUnitAlwaysUsesSingleSlot:true | bool | NaN | NaN |
| NaN | transportUnitsKeepWaypoints | 载员保持路径点 | 目前无效 | transportUnitsKeepWaypoints:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 资源节点代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | resourceRate | 回收速率 | 回收速度。每帧回收血量。与canReclaimResources一起使用。允许其他队伍回收该单位。通常与中立队伍配合使用。使用价格来设置获取哪些资源。 | resourceRate:1 | float | NaN | NaN |
| NaN | similarResourcesHaveTag | 像用于此标签的单位 | 有这些标签时，资源采集单位将视为同一种资源 | similarResourcesHaveTag: goldResource | string(s) | NaN | NaN |
| NaN | resourceMaxConcurrentReclaimingThis | 可同时被此数目单位回收 | 默认为无限制。限制有多少单位可以同时回收此资源。 | resourceMaxConcurrentReclaimingThis: 3 | int\nstatic integer | NaN | NaN |
| NaN | reclaimPrice | 回收价格 | 自定义资源，类似价格。对于自定义资源很有用。 | reclaimPrice: gold=1000 | int\nstatic integer | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 资源收集器代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | canReclaimResources | 可以回收资源 | 如果为true，则此单位可以收集资源，这对于resourceRate很有用。 | canReclaimResources: true | bool | NaN | NaN |
| NaN | canReclaimResourcesNextSearchRange | 搜寻资源范围 | 当一处资源采集完后，搜寻更多资源的范围。 | canReclaimResourcesNextSearchRange: 100 | int\nstatic integer | NaN | NaN |
| NaN | canReclaimResourcesOnlyWithTags | 仅允许回收特定标签资源 | 仅允许回收有此标签的单位。 | canReclaimResourcesOnlyWithTags: foodResource, goldResource | string(s) | NaN | NaN |
| NaN | resourceReclaimMultiplier | 建造单位回收资源的乘数 | 默认为1 | resourceReclaimMultiplier:1 | float | NaN | NaN |
| NaN | nanoUnbuildSpeed | 建造单位回收未完成单位速度 | (俗称"蓝影"，默认为1) | nanoUnbuildSpeed:1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 建筑和工厂代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | canRepairBuildings | 可以修建筑 | 如果为true，该单位可以修复建筑。 （isBuilder：true是必需的） | canRepairBuildings: true | bool | NaN | NaN |
| NaN | canRepairUnits | 可以修单位 | 如果为true，此单位可以修复单位。 （isBuilder：true是必需的） | canRepairUnits: true | bool | NaN | NaN |
| NaN | autoRepair | 可以自动修 | 自动维修附近单位，范围为nanoRange。 （isBuilder：true是必需的） | autoRepair: true | bool | NaN | NaN |
| NaN | canReclaimUnitsOnlyWithTags | 仅允许回收特定标签单位 | 仅允许此单位回收具有特定标签单位。 | canReclaimUnitsOnlyWithTags:shibaInu | tags | NaN | NaN |
| NaN | canRepairUnitsOnlyWithTags | 仅允许维修特定标签单位 | 仅允许此单位维修具有特定标签单位。 | canRepairUnitsOnlyWithTags:cat | tags | NaN | NaN |
| NaN | nanoRange | 维修或建造范围 | 默认值为85。定义单位的构建/修复/回收范围。 | nanoRange: 110 | int\nstatic integer | NaN | NaN |
| NaN | nanoRepairSpeed | 维修速度 | 默认值为0.2。定义单位修复速度。 | nanoRepairSpeed: 0.01 | float | NaN | NaN |
| NaN | nanoBuildSpeed | 建造速度 | 默认值为1。定义单位建造速度。 （可能与目标的buildSpeed相乘） | nanoBuildSpeed: 0.9 | float | NaN | NaN |
| NaN | nanoReclaimSpeed | 回收速度 | 默认为nanoRepairSpeed\*5.1)以符合旧版本的行为 | nanoReclaimSpeed:5.1 | float | NaN | NaN |
| NaN | nanoRangeForRepairIsMelee | 维修范围按近战逻辑 | 定义此单位维修时是否为近战算法，默认计算是从自身中心到目标中心，如果单位过大运动又受到阻碍，则虽然看起来很近，然而实际太远无法建造。\n近战类算法则是算上其半径，由中心计算改为从边缘计算。 | nanoRangeForRepairIsMelee: true | bool | NaN | NaN |
| NaN | nanoRangeForReclaimIsMelee | 回收范围按近战逻辑 | 与上条类似，本条定义其回收范围是否为近战算法。 | nanoRangeForReclaimIsMelee: true | bool | NaN | NaN |
| NaN | nanoRangeForRepair | 维修距离 | 此单位维修距离。 | nanoRangeForRepair: 60 | int\nstatic integer | NaN | NaN |
| NaN | nanoRangeForReclaim | 回收距离 | 此单位回收距离。 | nanoRangeForReclaim: 60 | int\nstatic integer | NaN | NaN |
| NaN | nanoFactorySpeed | 工厂速度乘数 | 默认值为1。如果此单位是工厂，则乘以创建单位的buildSpeed值。用于加速或者减速建造。 | nanoFactorySpeed: 1.2 | float | NaN | NaN |
| NaN | extraBuildRangeWhenBuildingThis | 额外建造距离 | 此单位额外的建造距离，可以使建造者在更远的地方建造它，多用于水上建筑。 | extraBuildRangeWhenBuildingThis: 90 | int\nstatic integer | NaN | NaN |
| NaN | builtFrom\_#\_name | 从此单位建造 | 除非您向原版工厂添加单位，否则不建议使用。将该单位添加到目标建筑物中。 | builtFrom\_1\_name: landFactory, airFactory | string(s) | NaN | NaN |
| NaN | builtFrom\_#\_pos | 从此单位建造排序 | 在列表中的排序，越小越靠前。 | builtFrom\_1\_pos: 0.1 | float | NaN | NaN |
| NaN | builtFrom\_#\_forceNano | 从此单位像建筑一样建造 | 如果为true，则像构建建筑一样造此单位。 （即使是一个单位） | builtFrom\_1\_forceNano: true | bool | NaN | NaN |
| NaN | builtFrom\_#\_isLocked | 从此单位建造条件 | 如果为true，则无法在目标中构建此单位。 （逻辑布尔值，设置建造条件） | builtFrom\_1\_isLocked: if self.hp(lessThan=100) | LogicBoolean | NaN | NaN |
| NaN | builtFrom\_#\_isLockedMessage | 从此单位建造锁定信息 | 无法建造时显示的信息。 | builtFrom\_1\_isLockedMessage: -Needs more population | LocaleString | NaN | NaN |
| NaN | exit\_x | 离开x轴 | 从载具卸载或者工厂生产完成时，单位出现的位置，默认为0 | exit\_x: 0 | float | NaN | NaN |
| NaN | exit\_y | 离开y轴 | 从载具卸载或者工厂生产完成时，单位出现的位置，默认为5，正数向下。 | exit\_x: 5 | float | NaN | NaN |
| NaN | exit\_dirOffset | 离开旋转角度 | 单位默认为180(朝下)，建筑物默认为0(朝右)。定义已创建或卸载单位的退出方向。 | exit\_dirOffset: 140 | float | NaN | NaN |
| NaN | exit\_heightOffset | 离开高度 | 默认值为0。定义创建或卸载的单位出现的高度。 | exit\_heightOffset: 16 | float | NaN | NaN |
| NaN | exit\_moveAwayAmount | 离开距离 | 默认值为70。定义创建或卸载的单位与该单位的距离。 | exit\_moveAwayAmount: 10 | float | NaN | NaN |
| NaN | exitHeightIgnoreParent | 离开高度忽略父单位 | 离开时的高度不考虑父高度;用于与父单位一起建造时分离附件 | exitHeightIgnoreParent:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 死亡代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | dieOnConstruct | 构建时死亡 | 如果为true，则创建建筑时删除自身。（目标建筑物/单位需要selfBuildRate以自动建造完成） | dieOnConstruct: true | bool | NaN | NaN |
| NaN | dieOnZeroEnergy | 无能量时死亡 | 如果能量值为零，该单位死亡。 | dieOnZeroEnergy: true | bool | NaN | NaN |
| NaN | numBitsOnDeath | 死亡产生碎片 | 定义该单位死亡时散落的碎片的数量。 | numBitsOnDeath: 20 | int\nstatic integer | NaN | NaN |
| NaN | fireOnDeath | 死亡发射武器 | 填整数，应该是炮塔的ID | fireOnDeath:1 | int\nstatic integer | NaN | NaN |
| NaN | nukeOnDeath | 死亡核爆 | 不推荐使用。建议使用死亡武器代替，其拥有更丰富的设定选项。如果为true，单位死亡时会生成一个内置的核抛射体爆炸效果。 | nukeOnDeath: true | bool | NaN | NaN |
| NaN | nukeOnDeathRange | 死亡核爆范围 | 不推荐使用。定义使用nukeOnDeath时的核抛射体效果范围。 | nukeOnDeathRange: 140 | float | NaN | NaN |
| NaN | nukeOnDeathDamage | 死亡核爆伤害 | 不推荐使用。定义使用nukeOnDeath时的核武器效果区域伤害。 | nukeOnDeathDamage: 2000 | float | NaN | NaN |
| NaN | nukeOnDeathDisableWhenNoNuke | 死亡核爆条件 | 不推荐使用。默认为false。如果为true，则禁用核武器时，该单位死亡时不会产生核爆炸。 | nukeOnDeathDisableWhenNoNuke: true | bool | NaN | NaN |
| NaN | fireTurretXAtSelfOnDeath | 死亡武器 | 死亡武器。单位死后，使用指定炮塔攻击自身所在位置。 | fireTurretXAtSelfOnDeath: turret\_1 | turret ref | NaN | NaN |
| NaN | explodeOnDeath | 死亡爆炸 | 默认为true。如果为false，则禁用单位死亡时的内置爆炸效果。 | explodeOnDeath: false | bool | NaN | NaN |
| NaN | explodeOnDeathGroundCollision | 死亡撞击地面爆炸 | 默认为true。如果为false，则禁用接触地面时内置爆炸效果。 | explodeOnDeathGroundCollision: false | boolean | NaN | NaN |
| NaN | effectOnDeath | 死亡效果 | 单位死亡时产生内置或自定义效果。 | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound | effect(s) ref | NaN | NaN |
| NaN | effectOnDeathGroundCollision | 死亡撞击地面效果 | 类似于effectOnDeath，但当单位接触地面时。对飞行单位有用。 | effectOnDeathGroundCollision: CUSTOM:bigExplosion | effect(s) ref | NaN | NaN |
| NaN | explodeOnDeathGroundCollosion | 死亡未撞击地面效果 | 类似于effectOnDeath，但当未单位接触地面时。对飞行单位有用。 | effectOnDeathGroundCollision: CUSTOM:bigExplosion | effect(s) ref | NaN | NaN |
| NaN | unitsSpawnedOnDeath | 死亡产生单位 | 死亡时产生这些单位。逗号分隔的单位标识符。 | unitsSpawnedOnDeath: tank\*5, hoverTank | string(s) | NaN | NaN |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker | 死亡产生单位所属 | 如果为true，死亡时产生的单位将更改归属为最后一个攻击者的队伍。 | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true | bool | NaN | NaN |
| NaN | hideScorchMark | 死亡痕迹 | 如果为true，则禁止单位死亡时留下焦痕。 | hideScorchMark: true | bool | NaN | NaN |
| NaN | soundOnDeath | 死亡音效 | 为该单位设置自定义死亡声音。 | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg | file (sound(s)) | NaN | NaN |
| NaN | explodeTypeOnDeath | 死亡时爆炸类型 | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding\n添加内置死亡效果关键字，选项：非常小，很小，正常，大，大单位，建筑物，没有冲击波和烟雾的建筑物，非常大建筑 | explodeTypeOnDeath:small | preset effects | NaN | NaN |
| NaN | effectOnDeathIfUnbuilt | 没建造完成时死亡效果 | 如果这个单位没建造完成就被毁了，则播放此效果 | effectOnDeathIfUnbuilt: CUSTOM:implode | effect(s) ref | NaN | NaN |
| NaN | disableDeathOnZeroHp | 禁用零血死亡 | 如果为true，允许单位在0血量的情况下仍然存活，单位不会自然死亡。对自定义“死亡”动作很有用 | disableDeathOnZeroHp:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 动作代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | autoTriggerCooldownTime | 自动触发间隔 | 设置自动触发动作间隔。默认为1s。警告：对于许多设备，将此值设置得太低可能会影响性能，具体取决于操作效果。 | autoTriggerCooldownTime:0.1s | time (seconds) | NaN | NaN |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU | 允许超高频触发 | 自动触发冷却时间，允许高CPU占用，也就是可以使用非常高频的触发，但不建议这么做。 | autoTriggerCooldownTime\_allowDangerousHighCPU:true | bool | NaN | NaN |
| NaN | autoTriggerCheckWhileNotBuilt | 在未建造完成时依然自动触发 | - 默认为 false - 当 true 时，即使单位未完成建造，所有自动触发器仍在运行 | autoTriggerCheckWhileNotBuilt:true | bool | NaN | NaN |
| NaN | autoTriggerCheckRate | 自动触发检查率 | 选项:everyFrame(默认)，every4Frames, every8Frames。\n注意:所有触发器无论检查率都是在第一次创建和自动触发冷却之后检查的。\n注:使用模板添加[core]autoTriggerCheckRate:every8Frames到所有单位。可以使使用了复杂autoTriggers的mod有巨大的性能提升。 | autoTriggerCheckRate:everyFrame | enum | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 《《《不建议使用的代码》》》 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | action\_#\_convertTo | action\_#\_convertTo: | 在1.13版中已弃用，请改用[action\_x]节 | action\_1\_convertTo: customTank\_2 | string | NaN | NaN |
| NaN | action\_#\_pos | action\_#\_pos: | 订单操作出现在用户界面中 | action\_1\_pos: 0.1 | float | NaN | NaN |
| NaN | action\_#\_price | action\_#\_price: | 您对该单位采取的行动的价格。 （您所有的子操作都将链接到您使用的＃号） | action\_1\_price: 1000 | int\nstatic integer | NaN | NaN |
| NaN | action\_#\_text | action\_#\_text: | 选择单位动作时的显示文本，用于说明其目的。 | action\_1\_text: Upgrade to Custom Tank 2 | string | NaN | NaN |
| NaN | action\_#\_description | action\_#\_description: | 动作说明。 | action\_1\_description: -Converts the tank | string | NaN | NaN |
| NaN | action\_#\_addEnergy | action\_#\_addEnergy: | 为单位增加能量。除非设置了energyMax，否则不起作用 | action\_1\_addEnergy: 10 | float | NaN | NaN |
| NaN | action\_#\_whenBuilding\_cannotMove | action\_#\_whenBuilding\_cannotMove: | 在执行操作时停止单位移动。对于部署类似动作很有用。 | action\_1\_whenBuilding\_cannotMove: true | bool | NaN | NaN |
| NaN | canBuild\_#\_name/pos/isLocked | canBuild\_#\_name/pos/isLocked: | 请改用canBuild部分。 | canBuild\_1\_name: tank | string | NaN | NaN |
| NaN | builtFrom\_#\_name/pos/isLocked | builtFrom\_#\_name/pos/isLocked: | 请改用canBuild部分。 | builtFrom\_1\_name: tank | string | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 可建造 | Section | [canBuild\_NAME] | [canBuild\_ID] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | name | 名字 | 该单位可以创建的单位名列表。可以是建筑物或单位。 | name: tank, hoverTank, heavyTank | string(s) | NaN | NaN |
| NaN | pos | 排序 | 此单位在用户界面中排序，越小越靠上。 | pos: 0.1 | float | NaN | NaN |
| NaN | tech | 科技 | 没啥用。科技等级。通常只会影响此单位界面中的颜色。默认为1，只能填1、2、3。 | tech: 2 | int\nstatic integer | NaN | NaN |
| NaN | forceNano | 建造方式 | 如果为true，则将目标当作是建筑物建造。 （即使是一个单位） | forceNano: true | bool | NaN | NaN |
| NaN | isVisible | 可见条件 | 如果满足条件，则从界面中显示此单位。比如用于科技树。 | isVisible: if not self.energy(greaterThan=100) | LogicBoolean | NaN | NaN |
| NaN | isLocked | 锁定 | 如果满足条件，则从界面中锁定此单位。比如用于科技树，或是限造单位。 | isLocked: if self.hp(lessThan=100) | LogicBoolean | NaN | NaN |
| NaN | isLockedMessage | 锁定原因描述 | 告知玩家单位为何被锁定。 | isLockedMessage: -Needs 2 Barracks | string | NaN | NaN |
| NaN | isLockedMessage\_[Language] | 锁定文本多语言 | 设置锁定文本在不同语言下显示的内容。语言代码点击此处。 | isLockedMessage\_es: -Necesita 2 Cuarteles | string | NaN | NaN |
| NaN | isLockedAlt | 更多锁定原因 | 另一个被锁定原因。只是允许显示不同的消息。 | isLockedAlt: if self.energy(greaterThan=90) | LogicBoolean | NaN | NaN |
| NaN | isLockedAltMessage | 锁定原因描述 | 另一个被锁定原因描述。 | isLockedAltMessage: -Needs less energy | string | NaN | NaN |
| NaN | isLockedAlt2 | 更多锁定原因2 | 更多的锁定原因… | isLockedAlt2: if self.isMoving() | LogicBoolean | NaN | NaN |
| NaN | isLockedAlt2Message | 锁定文本2描述 | 更多的锁定描述… | isLockedAlt2Message: -Needs to be quiet | string | NaN | NaN |
| NaN | addResources | 增加资源 | 在放置建筑物或生产单位时，将这些资源添加到自身中。 | addResources: ammo=5, setFlag=1 | price(s) | NaN | NaN |
| NaN | price | 价格 | 覆盖单位/建筑物的价格。 默认为单位内置的价格。\n用处如建造一个建筑时候附送一个单位。此代码可用设定为两者价钱之和,矿场600,送矿车1400,而建造时花2000,送1400,卖600,可避免玩家生成钱。 | price: credits=1000, ammo=5 | price(s) | NaN | NaN |
| NaN | isGuiBlinking | 界面闪烁 | 如果为true，则在UI中生成闪烁效果。 | isGuiBlinking: true | LogicBoolean | NaN | NaN |
| NaN | extraLagHidingInUI | 消除ui额外延迟 | 用于联机，在UI中立即更新而不需要从服务器确认的等待时间。 | extraLagHidingInUI:true | bool | NaN | NaN |
| NaN | type | 显示类型 | 与行动节的displayType用法相同 | type:action | string | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 图像 | Section | [graphics] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | image | 主体图像 | 填图片名称，格式为png。 | image:base.png | file (image) | NaN | NaN |
| NaN | image\_back | 背景图像 | 可选的在单位后面绘制图像，不随单位转动。可用于工厂底图，单位角标等。 | image\_back:back.png | file (image) | NaN | NaN |
| NaN | image\_back\_always\_use\_full\_image | 图像背景总是使用完整的图像 | 默认会裁剪或拉伸或平铺到和主体图像一致. | image\_back\_always\_use\_full\_image:true | bool | NaN | NaN |
| NaN | image\_wreak | 死亡图像 | 可选的单位死亡时使用的图像。 | image\_wreak:wreak.png | file (image) | NaN | NaN |
| NaN | image\_shield | 护盾图像 | 自定义护盾所使用的图像。 | image\_shield:shibe.png | file (image) | NaN | NaN |
| NaN | image\_offsetX | 图像X轴偏移 | 图像在X轴偏移，用于不对称图像，比如您的单位有个吊臂，这样中心不在正中间。 | image\_offsetX:10 | int\nstatic integer | NaN | NaN |
| NaN | image\_offsetY | 图像Y轴偏移 | 图像在Y轴偏移,用于比较高的单位。 | image\_offsetY:-20 | int\nstatic integer | NaN | NaN |
| NaN | isVisible | 可见 | 默认为true,如果为false将隐藏单位。 | isVisible: if self.hasFlag(id=1) | logic | NaN | NaN |
| NaN | isVisibleToEnemies | 对敌人可见 | 与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时，可以创建隐形系统。 | isVisibleToEnemies:false | bool | NaN | NaN |
| NaN | teamColorsUseHue | 阵营色色相 | luke不建议使用。单位上的绿色像素转换为团队颜色。 若为true整个单位都带有团队色彩。 默认为false，挺难看的。 | teamColorsUseHue:true | bool | NaN | NaN |
| NaN | teamColoringMode | 阵营色模式 | 设置单位着色逻辑，默认是纯绿。有四个值disabled,hueShift,hueAdd,pureGreen。(禁用，色相偏移，色相添加，纯绿) | teamColoringMode:hueAdd | string | NaN | NaN |
| NaN | scaleImagesTo | 缩放图像到 | 单位像素。调整图像大小以使其适合像素值。同时影响腿部和阴影图像。 | scaleImagesTo:15 | float | NaN | NaN |
| NaN | imageScale | 图像缩放比例 | 调整图像大小。默认值为1。也可以影响腿部和阴影图像。 | imageScale:0.9 | float | NaN | NaN |
| NaN | drawLayer | 绘制图层 | 陆上单位通常默认为ground或ground2。运输船为ground2。wreaks, underwater, bottom, ground, ground2, experimentals, air, top | drawLayer:ground | string | NaN | NaN |
| NaN | whenBeingBuiltMakeTransparentTill | 建造时透明度 | 设为0则一开始便完全不透明，设为1则直到建造完成时才不透明。 | whenBeingBuiltMakeTransparentTill:0.5 | float | NaN | NaN |
| NaN | icon\_zoomed\_out | 缩放图标 | 缩放时显示的图标 | icon\_zoomed\_out:tank\_zoomed.png | file (image) | NaN | NaN |
| NaN | icon\_zoomed\_out\_neverShow | 缩放图标永不显示 | 缩放图标永不显示。 | icon\_zoomed\_out\_neverShow:false | bool | NaN | NaN |
| NaN | icon\_build | 建造图标 | 填文件名,指定图像作为单位在列表中显示的图像. | icon\_build:icon\_shiba.pmg | file (image) | NaN | NaN |
| NaN | image\_floatingPointSize | 对奇数大小的图像进行一个像素的调整 | (填写0/1,无直观区别,有说法是把x-1来改变单位坐标系使其更方便使用)--Fixes off by 1 pixel sizing for odd sized images - | image\_floatingPointSize:true | bool | NaN | NaN |
| NaN | image\_offsetH | 高度绘制偏移 | height offset | image\_offsetH:1.2 | float | NaN | NaN |
| NaN | showSelectionIndicator | 显示选择指示 | (单位的选择框) | showSelectionIndicator:false | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 炮塔（也可以在每个炮塔上设置图像） | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | image\_turret | 炮塔图像 | 所有炮塔的默认图像，也可以为每个炮塔设置专用图像。 | image\_turret:tank\_turret.png | file (image) | NaN | NaN |
| NaN | turretImageScale | 炮塔图像缩放 | 按比例缩放炮塔图像 | turretImageScale:2 | float | NaN | NaN |
| NaN | teamColorsOnTurret | 炮塔使用队伍色 | 默认为false。在转塔上也应用团队颜色。 | teamColorsOnTurret:true | bool | NaN | NaN |
| NaN | scaleTurretImagesTo | 炮塔图像缩放 | 单位像素。缩放炮塔图像至指定像素，只用填宽度 | scaleTurretImagesTo:AUTO\_ANIMATED | float | NaN | NaN |
| NaN | lock\_body\_rotation\_with\_main\_turret | 锁定主体旋转随主炮塔 | 锁定主体图像旋转追随主炮塔 | lock\_body\_rotation\_with\_main\_turret:true | bool | NaN | NaN |
| NaN | lock\_leg\_rotation\_with\_main\_turret | 锁定腿脚旋转随主炮塔 | 锁定腿脚图像旋转追随主炮塔 | lock\_leg\_rotation\_with\_main\_turret:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 阴影 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | image\_shadow | 阴影图像 | 填NONE或AUTO,或图像文件。 | image\_shadow:AUTO | file (image) | NaN | NaN |
| NaN | shadowOffsetX | 阴影图像偏移X轴 | 阴影x轴偏移值，正数往右 | shadowOffsetX:1 | float | NaN | NaN |
| NaN | shadowOffsetY | 阴影图像偏移Y轴 | 阴影y轴偏移值，正数往下 | shadowOffsetY:2 | float | NaN | NaN |
| NaN | image\_shadow\_frames | 阴影图像指定 | true时阴影不随单位移动而改变方向。 | image\_shadow\_frames:true | bool | NaN | NaN |
| NaN | lock\_shadow\_rotation\_with\_main\_turret | 阴影锁定为主炮塔方向 | 将身体图像阴影锁定到主炮塔的方向 | lock\_shadow\_rotation\_with\_main\_turret:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 效果和动画 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | total\_frames | 图像帧数 | 默认值为1。将图像分割为指定分数，用于动画。第一帧编号为0 | total\_frames:15 | int\nstatic integer | NaN | NaN |
| NaN | default\_frame | 默认帧 | 指定默认显示为第几帧,默认为0即第一帧 | default\_frame:1 | int\nstatic integer | NaN | NaN |
| NaN | frame\_width | 图像宽度 | 设置单帧宽度，自动计算并覆盖总帧数。 | frame\_width:35 | int\nstatic integer | NaN | NaN |
| NaN | frame\_height | 图像高度 | 默认为图像高度 | frame\_height:35 | int\nstatic integer | NaN | NaN |
| NaN | splastEffect | 水波效果 | 在水上时创建水波效果。默认为false | splastEffect:true | bool | NaN | NaN |
| NaN | dustEffect | 灰尘效果 | 在地面上产生灰尘效果。默认为false | dustEffect:true | bool | NaN | NaN |
| NaN | splastEffectReverse | 逆向水波效果 | 填true时，在倒车时也能产生效果 | splastEffectReverse:true | bool | NaN | NaN |
| NaN | dustEffectReverse | 逆向灰尘效果 | 填true时，在倒车时也能产生效果 | dustEffectReverse:true | bool | NaN | NaN |
| NaN | movementEffect | 运动效果 | 自定义运动效果，可以是内置的或者自定义的。 | movementEffect:smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | effect | NaN | NaN |
| NaN | movementEffectReverse | 逆向运动效果 | 自定义倒车效果。 | movementEffectReverse:smoke | effect | NaN | NaN |
| NaN | movementEffectRate | 运动效果频率 | 自定义效果产生频率，每隔多少帧一次。 | movementEffectRate:8 | float | NaN | NaN |
| NaN | movementEffectReverseFlipEffects | 逆向时反转运动效果 | 倒车时反转效果 | movementEffectReverseFlipEffects:true | bool | NaN | NaN |
| NaN | repairEffect | 维修效果 | 自定义维修效果，可以是任何东西。替换构建时的默认效果 | repairEffect:smoke | effect | NaN | NaN |
| NaN | repairEffectAtTarget | 维修目标效果 | 维修目标上产生的效果。 | repairEffectAtTarget:smoke | effect | NaN | NaN |
| NaN | repairEffectRate | 维修效果频率 | 维修效果每隔多少帧产生一次。 | repairEffectRate:8 | float | NaN | NaN |
| NaN | reclaimEffect | 回收效果 | 自定义回收效果，可以是任何东西。替换回收时的默认效果 | reclaimEffect:smoke | effect | NaN | NaN |
| NaN | reclaimEffectAtTarget | 回收目标效果 | 回收目标上产生的效果。 | reclaimEffectAtTarget:smoke | effect | NaN | NaN |
| NaN | reclaimEffectRate | 回收效果频率 | 回收效果每隔多少帧产生一次。 | reclaimEffectRate:8 | float | NaN | NaN |
| NaN | rotate\_with\_direction | 随角度旋转 | 默认为true。设置为false时将单位图像锁定为0度。通常与animation\_direction\_ \*一起用作多向视图。 | rotate\_with\_direction:false | bool | NaN | NaN |
| NaN | animation\_direction\_useMainTurret | 多向动画使用主炮塔 | 多向动画的执行将以单位主炮塔的角度为基准 | animation\_direction\_useMainTurret:true | bool | NaN | NaN |
| NaN | animation\_direction\_units | 多向动画度数 | 每隔多少度切换一次素材,比如填45代表8个方向，90个代表4个方向的动画。与rotate\_with\_direction一起使用。 | animation\_direction\_units:45 | float | NaN | NaN |
| NaN | animation\_direction\_strideX | 多向动画x向 | 动画帧取值在X方向改变时偏移。一般填0 | animation\_direction\_strideX:0 | int\nstatic integer | NaN | NaN |
| NaN | animation\_direction\_strideY | 多向动画y向 | 动画帧在方向改变Y轴偏移偏移。与frame\_height一起使用。一般填1 | animation\_direction\_strideY:1 | int\nstatic integer | NaN | NaN |
| NaN | animation\_direction\_starting | 多向动画朝向 | 第一帧的方向，取决于您的素材。您要考虑转向后避免正负数交替现象，否则会导致素材朝向异常。 | animation\_direction\_starting:90 | float | NaN | NaN |
| NaN | disableLowHpFire | 禁用低生命冒火 | 禁用低生命值时冒火的视觉效果 | disableLowHpFire:true | bool | NaN | NaN |
| NaN | disableLowHpSmoke | 禁用低生命冒烟 | 禁用低生命值时冒烟的视觉效果 | disableLowHpSmoke:true | bool | NaN | NaN |
| NaN | showTransportBar | 显示运输条 | 填true时显示运输条,false禁用。默认为true. | showTransportBar:false | bool | NaN | NaN |
| NaN | showHealthBar | 显示生命条 | 填true时显示生命条,false禁用。默认为true. | showHealthBar:false | bool | NaN | NaN |
| NaN | showHealthBarChanges | 显示生命条变动 | 填true时显示生命条的生命变动条（黄条） | showHealthBarChanges:false | bool | NaN | NaN |
| NaN | showEnergyBar | 显示能量条 | 填true时显示能量条,false禁用。默认为true. | showEnergyBar:false | bool | NaN | NaN |
| NaN | showShieldBar | 显示护盾条 | 填true时显示护盾条,false禁用。默认为true. | showShieldBar:false | bool | NaN | NaN |
| NaN | showQueueBar | 显示队列条 | 填true时显示操作、生成的队列条,false禁用。默认为true. | showQueueBar:false | bool | NaN | NaN |
| NaN | showShotDelayBar | 显示开火后的冷却条 | (默认为true) - 用于显示开火速度慢的炮塔的冷却指示条(译者注:原文calldown似乎有误，应为cooldown) | showShotDelayBar:false | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 《《《不建议使用的代码》》》 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | animation\_TYPE\_start | 动画\_类型\_开始 | 已弃用，请改用[animation]部分 | animation\_moving\_start: 0 | int\nstatic integer | NaN | NaN |
| NaN | animation\_TYPE\_end | 动画\_类型\_结束: | 结束帧，必须更大然后开始 | animation\_moving\_end: 3 | int\nstatic integer | NaN | NaN |
| NaN | animation\_TYPE\_scale\_start | 动画\_类型\_缩放开始: | 比例单位图像。默认值为1。适用于生物单位或呼吸效果。 | animation\_idle\_scale\_start:0.8 | float | NaN | NaN |
| NaN | animation\_TYPE\_scale\_end | 动画\_类型\_缩放结束: | 比例单位图像。默认值为1。适用于生物单位或呼吸效果。 | animation\_idle\_scale\_end:1.2 | float | NaN | NaN |
| NaN | animation\_TYPE\_speed | 动画\_类型\_速度: | 动画每一帧的延迟。较大的值会导致动画变慢 | animation\_idle\_speed:1 | float | NaN | NaN |
| NaN | animation\_TYPE\_pingPong | 动画\_类型\_膨胀: | 重复播放之前，请反向播放动画。与scale\_start / scale\_end一起使用 | animation\_idle\_pingPong:true | bool | NaN | NaN |
| NaN | NaN | NaN | TYPE的值目前可以是：空闲时（idle），移动中（moving），攻击时（attack） | NaN | NaN | NaN | NaN |
| NaN | 攻击 | Section | [attack] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | maxAttackRange | 攻击距离 | 最大攻击距离。（会乘以globalScale，但不建议使用globalScale） | maxAttackRange:999 | float | NaN | NaN |
| NaN | canAttack | 可以攻击 | 如果设置为false，则不能攻击任何单位。其他canAttack选项将无效。 | canAttack:true | bool | NaN | NaN |
| NaN | canAttackFlyingUnits | 可攻击空中单位 | 可以攻击空中单位，下面的攻击条件代码可于任意炮塔单独设置。 | canAttackFlyingUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackLandUnits | 可攻击表面单位 | 可以攻击表面单位（包括陆地和水面） | canAttackLandUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackUnderwaterUnits | 可攻击水下单位 | 可以攻击水下单位 | canAttackUnderwaterUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits | 可以攻击非接触水单位 | 可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。 | canAttackNotTouchingWaterUnits:true | LogicBoolean | NaN | NaN |
| NaN | canOnlyAttackUnitsWithTags | 只攻击带特定标签单位 | 只能攻击带特定标签的单位 | canOnlyAttackUnitsWithTags:sp\_spy | tags | NaN | NaN |
| NaN | canOnlyAttackUnitsWithoutTags | 不攻击带特定标签单位 | 不能攻击带特定标签的单位 | canOnlyAttackUnitsWithoutTags:sp\_tm | tags | NaN | NaN |
| NaN | setMainTurretAs | 设置主炮塔 | 设置主炮塔，有些代码要锁定主炮塔，对其有用。 | setMainTurretAs:1 | turret ref | NaN | NaN |
| NaN | turretMultiTargeting | 每个炮塔向不同目标射击 | 允许每个炮塔同时向不同的目标射击。如果使用[turretlimitingAngle(限制角度)非常有用 | turretMultiTargeting:true | bool | NaN | NaN |
| NaN | isMelee | 近战 | 近战单位。与低攻击范围配合使用（例如maxAttackRange：9）可使自身和目标半径添加到范围内，并影响AI。 | isMelee:true | bool | NaN | NaN |
| NaN | meleeEngangementDistance | 近战索敌距离 | 使部队游猎，自动移动以攻击附近的敌方部队。近战默认为250，非近战默认为0（即使非近战也可以使用。） | meleeEngangementDistance:255 | int\nstatic integer | NaN | NaN |
| NaN | turretRotateWithBody | 炮塔随主体旋转 | 炮塔随主体旋转。默认true | turretRotateWithBody:true | bool | NaN | NaN |
| NaN | attackMovement | 攻击移动类型 | 移动攻击类型。填normal/bomber。能量耗尽时，轰炸机攻击运动将后退。可填moveaway，strafing但无效。 | attackMovement:normal\nattackMovement:bomber | string | NaN | NaN |
| NaN | dieOnAttack | 自杀攻击 | 攻击时自毁。 | dieOnAttack:true | bool | NaN | NaN |
| NaN | removeOnAttack | 移除攻击 | 攻击时移除自身. | removeOnAttack:true | bool | NaN | NaN |
| NaN | isFixedFiring | 固定射击 | 必须将身体对准目标射击。通常会使得部队需要停下来才能瞄准和射击。比如火炮。 | isFixedFiring:true | bool | NaN | NaN |
| NaN | aimOffsetSpread | 瞄准偏移 | 将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。 | aimOffsetSpread:0 | bool | NaN | NaN |
| NaN | stopTargetingAfterFiring | 自动停火 | 单位射击后停止瞄准。很少使用或需要。如用于您不希望胡乱攻击浪费弹药的单位。 | stopTargetingAfterFiring:true | bool | NaN | NaN |
| NaN | disablePassiveTargeting | 不能主动攻击 | 单位只攻击手动选择的目标。很少使用或需要。如用于自爆卡车守家，如果自动攻击敌人就太蠢了。 | disablePassiveTargetingg:true | bool | NaN | NaN |
| NaN | showRangeUIGuide | 显示范围UI | 显示攻击范围的白圈。默认true. | showRangeUIGuide:false | bool | NaN | NaN |
| NaN | shootDelayMultiplier | 开火间隔乘数 | 默认为1。可以在setUnitStats动态改变 | shootDelayMultiplier:1 | float | NaN | NaN |
| NaN | shootDamageMultiplier | 开火伤害乘数 | 默认为1。可以在setUnitStats动态改变 | shootDamageMultiplier:1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | luke不推荐使用的键-可以使用，但最好在每个炮塔上进行单独设置 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | turretSize | 炮塔大小 | 设置所有炮塔大小。填数值，按像素计算，不决定素材大小，而是以此为半径的开火位置。 | turretSize:10 | float | NaN | NaN |
| NaN | turretTurnSpeed | 炮塔转速 | 炮塔转速，单位是每帧旋转角度。 | turretTurnSpeed:1 | float | NaN | NaN |
| NaN | shootDelay | 攻击间隔 | 开火间隔，也可以在每个转塔上使用延迟 | shootDelay:233 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 炮塔 | Section | [turret\_NAME（非必要请填1-31的数字）] | [turret\_2] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 炮塔上限31个 | 例子 | 值类型 | NaN | NaN |
| NaN | x | x: | 坐标X | x:10 | float | NaN | NaN |
| NaN | y | y: | 坐标Y | y:10 | float | NaN | NaN |
| NaN | height | 炮塔高度 | (用于3d单位,实测链接的炮塔也会跟着改变高度)to help placement on 3d style units | height:1 | float | NaN | NaN |
| NaN | copyFrom | 复制数据自 | 复制指定炮塔的所有值，作为该炮塔的默认值。新写代码重复时则覆盖掉它。 | copyFrom: 1 | turret ref | NaN | NaN |
| NaN | projectile | 抛射体 | 使用此抛射体。默认为第一个抛射体。 | projectile:torpedo | projectile ref | NaN | NaN |
| NaN | altProjectile | 关联抛射体 | 当altProjectileCondition为true时，从此炮塔发射的抛射体。 | altProjectile:lowEnergy | projectile ref | NaN | NaN |
| NaN | altProjectileCondition | 关联抛射体条件 | 用于altProjectile | altProjectileCondition:if not self.energy(full=true) | LogicBoolean | NaN | NaN |
| NaN | barrelX | 抛射体x | 默认值为0。控制抛射体生成的X轴位置。 | barrelX:0 | float | NaN | NaN |
| NaN | barrelY | 抛射体y | 默认为大0。注意：size和barrelY含义相同 | barrelY:10 | float | NaN | NaN |
| NaN | barrelHeight | 抛射体高度 | 高度（用于3d）。影响抛射体产生的高度。 | barrelHeight:10 | float | NaN | NaN |
| NaN | size | 炮塔大小 | 控制炮塔中心与抛射体丸产生点之间的距离。 | size: 5 | float | NaN | NaN |
| NaN | turnSpeed | 炮塔转速 | 炮塔最大转动速度。单位度每帧。 | turnSpeed:5 | float | NaN | NaN |
| NaN | turnSpeedAcceleration | 炮塔旋转加速度 | 炮塔加速度，默认设置为禁用，并使用全转速度。 | turnSpeedAcceleration:1 | float | NaN | NaN |
| NaN | turnSpeedDeceleration | 炮塔旋转减速度 | 默认为turnSpeedAcceleration。将此值设置为高于转弯加速度可能会允许更快地命中目标 | turnSpeedDeceleration:1 | float | NaN | NaN |
| NaN | idleDir | 闲时角度 | 闲置时角度。 | idleDir:90 | float | NaN | NaN |
| NaN | idleDirReversing | 闲时角度反转 | 允许闲置时角度反转。除非连接到另一个炮塔（否则连接的炮塔在反转时通常会旋转），否则默认为idleDir + 180。如重坦逆行时炮塔转向。 | idleDirReversing:1 | float | NaN | NaN |
| NaN | shouldResetTurret | 空闲自动归位 | 默认为true。 填false时禁止炮塔自动归位。 | shouldResetTurret:false | bool | NaN | NaN |
| NaN | idleSweepAngle | 空闲扫描角度 | 炮塔闲时扫描角度。这一系列用于设置炮塔闲置时候转圈警戒动作。 | idleSweepAngle:45 | int\nstatic integer | NaN | NaN |
| NaN | idleSweepDelay | 空闲扫描间隔 | 炮塔闲时扫描间隔，多久动一次。 | idleSweepDelay:120 | float | NaN | NaN |
| NaN | idleSweepSpeed | 空闲扫描速度 | 炮塔闲时扫描转向的速度。 | idleSweepSpeed:0.2 | float | NaN | NaN |
| NaN | idleSweepCondition | 空闲扫描条件 | 炮塔闲时扫描的条件，比如单位移动但没攻击时炮塔确实是闲置的，但这时可能不该旋转。 | idleSweepCondition:if not self.isMoving() | logic boolean | NaN | NaN |
| NaN | idleSweepAddRandomDelay | 空闲扫描随机延迟 | 炮塔闲时扫描的随机延迟 | idleSweepAddRandomDelay:40 | float | NaN | NaN |
| NaN | idleSweepAddRandomAngle | 空闲扫描随机角度 | 炮塔闲时扫描的随机角度 | idleSweepAddRandomAngle:10 | int\nstatic integer | NaN | NaN |
| NaN | attachedTo | 链接到 | 要连接的另一个炮塔的ID，将相对于它定位，并随其旋转。 | attachedTo:1 | turret ref | NaN | NaN |
| NaN | slave | 隶属 | 锁定此转塔的方向，并为附加的转塔发射冷却时间。常用于多炮管单位。 | slave:true | bool | NaN | NaN |
| NaN | isMainNanoTurret | 是主构建炮塔 | 默认为false。用于创建建筑物的炮塔。只能在一个炮塔上为true，并且canShoot设置为false。 | isMainNanoTurret:true | bool | NaN | NaN |
| NaN | energyUsage | 能量需求 | 发射武器所需的能量。与resourceUsage相同：energy = X | energyUsage:1 | float | NaN | NaN |
| NaN | resourceUsage | 资源需求 | 可以使用资金/能源/生命/护盾/弹药等。如果不符合条件则停止攻击。credits/energy/hp/shield/ammo | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | price | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 计时 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | delay | 开火间隔 | 设置攻击间隔，覆盖全局炮塔间隔数据。 | delay:60 | float | NaN | NaN |
| NaN | linkDelayWithTurret | 链接间隔 | 当另一炮塔开火时，该炮塔上的冷却延迟将被重置/删除 | linkDelayWithTurret:1 | turret ref | NaN | NaN |
| NaN | warmup | 预热 | 射击前延迟。需要准备多长时间才能攻击，可以制作出蓄力效果。 | warmup:10 | float | NaN | NaN |
| NaN | warmupCallDownRate | 预热下降速度 | 停止攻击后预热条下降速度 | warmupCallDownRate:0.6 | float | NaN | NaN |
| NaN | warmupNoReset | 预热不重置 | 默认为false。射击后未重设真正的预热时。与warmupCallDownRate一起使用 | warmupNoReset:true | bool | NaN | NaN |
| NaN | warmupShootDelayTransfer | 开火间隔过渡 | 默认值为0，这是一个乘数，用于通过预热值减少下一次开火延迟。与warmupNoReset一起使用时，可以使攻击速度越来越快。 | warmupShootDelayTransfer:17 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 射击时 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | onShoot\_freezeBodyMovementFor | 射击时冻结主体 | 射击时禁止运动。 | onShoot\_freezeBodyMovementFor:true | bool | NaN | NaN |
| NaN | barrelOffsetX\_onOddShots | 奇数射击时抛射体偏移 | 默认0。在奇数射击时横向偏移，用于简化双管单位制作。 | barrelOffsetX\_onOddShots:100 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 定位控制 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | canShoot | 可以开火 | 可以开火，默认为true | canShoot:true | bool | NaN | NaN |
| NaN | canAttackFlyingUnits | 可攻击空中单位 | 可以攻击空中单位，覆盖[attack]的设定。 | canAttackFlyingUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackLandUnits | 可攻击表面单位 | 可以攻击表面单位（包括陆地和水面） | canAttackLandUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackUnderwaterUnits | 可攻击水下单位 | 可以攻击水下单位 | canAttackUnderwaterUnits:true | LogicBoolean | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits | 可以攻击非接触水单位 | 可以攻击非接触水单位，默认为true。如果是false，则只能攻击与水接触的单位，不能攻击岸上。用于鱼雷逻辑。也可以根据炮塔需要设置。 | canAttackNotTouchingWaterUnits:true | LogicBoolean | NaN | NaN |
| NaN | canOnlyAttackUnitsWithTags | 只攻击带特定标签单位 | 只能攻击带特定标签的单位 | canOnlyAttackUnitsWithTags:sp\_spy | tags | NaN | NaN |
| NaN | canOnlyAttackUnitsWithoutTags | 不攻击带特定标签单位 | 不能攻击带特定标签的单位 | canOnlyAttackUnitsWithoutTags:sp\_tm | tags | NaN | NaN |
| NaN | canAttackCondition | 攻击条件 | 攻击需要满足条件。 | canAttackCondition: if not self.flying | LogicBoolean | NaN | NaN |
| NaN | clearTurretTargetAfterFiring | 射击后重置炮塔目标 | 射击后重置炮塔目标。 | clearTurretTargetAfterFiring:true | bool | NaN | NaN |
| NaN | limitingRange | 限制范围 | 限制此炮塔的最远攻击范围。不要将此代码应用到所有炮塔，如果需要则设置maxAttackRange。 | limitingRange:150 | float | NaN | NaN |
| NaN | limitingAngle | 限制角度 | 与idleDir配合。炮塔只能以+/-此角度进行攻击。 | limitingAngle:60 | float | NaN | NaN |
| NaN | limitingMinRange | 最小距离 | 设置炮塔的最小攻击范围，不能攻击此范围内单位，也就是死角。 | limitingMinRange: 60 | float | NaN | NaN |
| NaN | canAttackMaxAngle | 可攻击最大角度 | 设置炮塔的最大射击角度。如果单位在可攻击角度外则不会开火。默认值为5，不要设置得更低。可以设置为181，即不需要转向就可发射抛射体。 | canAttackMaxAngle:90 | float | NaN | NaN |
| NaN | interceptProjectiles\_withTags | 拦截抛射体需有标签 | 拦截具有此标签的抛射体，目前铁锈用于反核武器。 | interceptProjectiles\_withTags: nuke | string | NaN | NaN |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance | 拦截抛射体检索范围 | 守护的范围，只有当敌方攻击目标地点落在此圈子内时才考虑拦截。 | interceptProjectiles\_andTargetingGroundUnderDistance: 500 | int\nstatic integer | NaN | NaN |
| NaN | interceptProjectiles\_andUnderDistance | 拦截抛射体攻击范围 | 默认值为2000，当抛射体到达这个距离时才开始发射拦截。 | interceptProjectiles\_andUnderDistance: 1600 | int\nstatic integer | NaN | NaN |
| NaN | interceptProjectiles\_andOverHeight | 拦截抛射体高度 | 需要超过此高度才会拦截。默认值为0. | interceptProjectiles\_andOverHeight:50 | int\nstatic integer | NaN | NaN |
| NaN | laserDefenceEnergyUse | 激光防御能量需求 | 炮塔启用激光防御拦截敌方抛射体。还应在core中设置energyMax。 | laserDefenceEnergyUse:1 | float | NaN | NaN |
| NaN | aimOffsetSpread | 瞄准偏移 | 将每次攻击时的偏移量乘以目标半径。默认为0.6。设为0则不偏移，对范围武器影响较大。 | aimOffsetSpread:0 | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 图形和效果 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | invisible | 隐藏炮塔图像 | 即不显示炮塔本身图像，但是攻击什么的还是可以。 | invisible:true | LogicBoolean | NaN | NaN |
| NaN | image | 图像 | 使用自定义图片。覆盖单位的主炮塔图像 | image:shibaingtooth.png | file (image) | NaN | NaN |
| NaN | image\_applyTeamColors | 图像应用队伍颜色 | 炮塔图像使用队伍颜色。默认为false。 | image\_applyTeamColors | bool | NaN | NaN |
| NaN | image\_drawOffsetX | 图像绘制偏移x | 炮塔图像在X轴偏移。 | image\_drawOffsetX | float | NaN | NaN |
| NaN | image\_drawOffsetY | 图像绘制偏移y | 炮塔图像在Y轴偏移。 | image\_drawOffsetY | float | NaN | NaN |
| NaN | chargeEffectImage | 充能效果图像 | 预热时的充能效果。默认是由小变大。 | chargeEffectImage:\n | file (image) | NaN | NaN |
| NaN | warmupStartEffect | 预热效果 | 开火延迟时产生效果。 | warmupStartEffect | effects | NaN | NaN |
| NaN | shoot\_sound | 开火音效 | 开火音效，填声音文件。有以下内置条目。attack、move、click、missile\_fire、missile\_hit、unit\_explode、buiding\_explode、\ntank\_firing、cannon\_firing、gun\_fire、lighting\_burst、plasma\_fire、plasma\_fire2、firing3、firing4、large\_gun\_fire1、\nlarge\_gun\_fire2、bug\_die、bug\_attack、interface\_error、nuke\_explode、nuke\_launch、laser\_deflect、laser\_deflect2 | shoot\_sound:move:0.5 | string | NaN | NaN |
| NaN | shoot\_sound\_vol | 开火音效大小 | 播放声音大小。 | shoot\_sound\_vol: | float | NaN | NaN |
| NaN | shoot\_flame | 开火动画 | 开火动画，内置参考表末尾。Luke推荐为：small, large, smoke, shockwave（小，大，烟，冲击波）。可以自定义。\n其余有：medium，largeExplosion，smallExplosion，resourcePoolSmoke，noneExplosion（中等，大爆炸，小爆炸，资源池的绿色烟，没有爆炸） | shoot\_flame: smoke\nshoot\_flame: CUSTOM:lightFade | effects | NaN | NaN |
| NaN | shoot\_light | 开火闪光 | 开火时闪光，16进制argb格式。#AARRGGBB,透明度，红，绿，蓝 | shoot\_light:#afafaf | color | NaN | NaN |
| NaN | idleSpin | 闲时转速 | 炮塔闲置时的旋转速度,单位度每帧。 | idleSpin:2 | float | NaN | NaN |
| NaN | onShoot\_playAnimation | 开火播放动画 | 开火后播放[Animation]中的自定义动画 | onShoot\_playAnimation:animation\_1 | animation ref | NaN | NaN |
| NaN | onShoot\_triggerActions | 开火触发行为 | 每次这个炮塔开火时触发这些动作 | onShoot\_triggerActions:foxsay | action refs | NaN | NaN |
| NaN | unloadUpToXUnitsAndGiveAttackOrder | 卸载单位并赋予攻击目标 | 在炮塔炮筒位置卸下X个单位，并让它们攻击炮塔指定的目标。 | unloadUpToXUnitsAndGiveAttackOrder:5 | int\nstatic integer | NaN | NaN |
| NaN | recoilOffset | 后坐力大小 | 开火后向前或向后推动炮塔，以产生后坐力。填像素。 | recoilOffset:-10 | float | NaN | NaN |
| NaN | recoilOutTime | 后坐力速度 | 开火后到达偏移位置的时间 | recoilOutTime:2 | float | NaN | NaN |
| NaN | recoilReturnTime | 后坐力恢复 | 开火后回到默认位置所需时间。 | recoilReturnTime:15 | float | NaN | NaN |
| NaN | showRangeUIGuide | 显示范围UI | 显示攻击范围的白圈。默认true. | showRangeUIGuide:false | bool | NaN | NaN |
| NaN | yAxisScaling | Y轴缩放比例 | 多用于用于2.5D效果，也就是伪3D。 | yAxisScaling:0.5 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 抛射体 | Section | [projectile\_NAME] | [projectile\_1] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | life | 存在时间 | 开火后抛射体在没命中时的存活时间，单位为帧。60为1s。多少合适取决于速度与射程。 | life:120 | int\nstatic integer | NaN | NaN |
| NaN | delayedStartTimer | 延迟时间 | 抛射体发射延迟时间。 | delayedStartTimer:15 | time | NaN | NaN |
| NaN | interceptProjectile\_removeTargetLifeOnly | 拦截抛射体移除目标存活时间 | 默认值为false，当为false时射抛射体移除。true时使被击中的抛射体爆炸或分裂。用于设定命中抛射体时是否执行分裂逻辑。 | interceptProjectile\_removeTargetLifeOnly:false | bool | NaN | NaN |
| NaN | deflectionPower | 激光拦截耗能 | 默认值为1。此抛射体被激光防御摧毁所需的能量。 -1为禁止拦截。（对特殊武器如火焰） | deflectionPower:-1 | float | NaN | NaN |
| NaN | explodeOnEndOfLife | 寿终爆炸 | 默认为false。True则会在寿命终结时爆炸，并产生其命中时该有的效果。而不是直接消失。 | explodeOnEndOfLife:true | bool | NaN | NaN |
| NaN | autoTargetingOnDeadTarget | 自动切换目标 | 如果目标死亡则自动切换单位。填true时如果有代码"targetGround:true"抛射体将会追踪距离它最近的单位。如果没有"targetGround"时将会在单位死亡后再改变目标。 | autoTargetingOnDeadTarget:true | bool | NaN | NaN |
| NaN | autoTargetingOnDeadTargetRange | 自动切换目标检索范围 | 当旧目标死亡时选择新目标的范围 | autoTargetingOnDeadTargetRange:45 | int\nstatic integer | NaN | NaN |
| NaN | autoTargetingOnDeadTargetLead | 自动切换目标预判 | 尝试新的目标时的预判 | autoTargetingOnDeadTargetLead:1 | float | NaN | NaN |
| NaN | unloadUpToXUnitsFromSource | 卸载单位至命中地 | 将指定个数单位卸载到抛射体爆炸位置。 | unloadUpToXUnitsFromSource:1 | int\nstatic integer | NaN | NaN |
| NaN | teleportSource | 传送 | 将单位移动到抛射体爆炸的位置，用于传送自身。 | teleportSource:true | bool | NaN | NaN |
| NaN | spawnUnit | 产生单位 | 在抛射体丸爆炸位置产生这种单位 | spawnUnit:heavyTank,tank\*5,hoverTank(offsetX=10) | unit types | NaN | NaN |
| NaN | convertHitToSourceTeam | 命中时更改所属 | 将更改被命中的单位转换队伍为自身所属。 | convertHitToSourceTeam:true | bool | NaN | NaN |
| NaN | tags | 标签 | 用于抛射体拦截功能。 | tags:nuke | tags | NaN | NaN |
| NaN | flameWeapon | 火焰武器 | 命中时产生小火焰（仅用于装饰） | flameWeapon:true | bool | NaN | NaN |
| NaN | spawnProjectilesOnEndOfLife | 在寿命结束时生成抛射体 | 填抛射体名。在寿命(life)结束时生成抛射体。生成抛射体逻辑具体参数参考后面生成抛射体大项。这简化了过去许多需要多炮塔(如贯穿攻击)或是生成辅助单位才能实现的操作。 | spawnProjectilesOnEndOfLife:torpedo\_split(offsetDir=90),torpedo\_split(offsetDir=-90) | projectile ref | NaN | NaN |
| NaN | spawnProjectilesOnExplode | 在爆炸时生成抛射体 | 填抛射体名。只在爆炸时生成抛射体，如果耗光life则不会生成。 | spawnProjectilesOnExplode:shiba(offsetDir=60,recursionLimit=6) | projectile ref | NaN | NaN |
| NaN | spawnProjectilesOnCreate | 在创建时生成抛射体 | 填抛射体名。抛射体创建时生成抛射体。 | spawnProjectilesOnCreate:1.5,2,3,4,5 | projectile ref | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 伤害 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | directDamage | 直接伤害 | 击中对目标单位造成伤害。不适用于targetGround:true。 | directDamage:999 | int\nstatic integer | NaN | NaN |
| NaN | areaDamage | 范围伤害 | 范围伤害值，此区域内敌方单位都将受到损伤，默认向边缘递减。 | areaDamage:99 | int\nstatic integer | NaN | NaN |
| NaN | areaRadius | 范围半径 | 范围伤害区域大小，此区域内敌方单位都将受到损伤，默认向边缘递减。数值类型为像素，大小算法为半径，铁锈内地块一格长为20像素。 | areaRadius:99 | float | NaN | NaN |
| NaN | areaDamageNoFalloff | 范围伤害不衰减 | 默认false.为true时范围伤害不再向边缘递减。 | areaDamageNoFalloff:true | bool | NaN | NaN |
| NaN | areaRadiusFromEdge | 范围伤害从边缘计算 | 范围伤害将从单位的边缘计算，而不是默认的中心计算。主要用于攻击大型单位。 | areaRadiusFromEdge:true | bool | NaN | NaN |
| NaN | areaExpandTime | 范围扩展时间 | 将区域伤害变为爆炸波向边缘扩散。效果如核抛射体。 | areaExpandTime:15 | float | NaN | NaN |
| NaN | areaHitAirAndLandAtSameTime | 范围武器同时攻击空中和地面 | 范围武器将同时打击空中和地面。 | areaHitAirAndLandAtSameTime:true | bool | NaN | NaN |
| NaN | areaHitUnderwaterAlways | 范围武器可攻击深海 | 范围武器将可以打击深海单位如潜艇。 | areaHitUnderwaterAlways:true | bool | NaN | NaN |
| NaN | areaIgnoreUnitsCloserThan | 范围伤害忽略区域 | 小于此范围的单位不会受到攻击影响。需要比areaRadius小，否则造不成伤害。 | areaIgnoreUnitsCloserThan:20 | int\nstatic integer | NaN | NaN |
| NaN | buildingDamageMultiplier | 建筑伤害乘数 | 默认为1。对建筑物伤害乘上此数值，用于伤害修正。比如闪电对建筑物伤害低，火焰对建筑物伤害高。 | buildingDamageMultiplier:0.5 | float | NaN | NaN |
| NaN | shieldDamageMultiplier | 护盾伤害乘数 | 默认为1。对护盾伤害乘数。如0对护盾不造成伤害，2对护盾造成双倍伤害 | shieldDamageMultiplier:2 | float | NaN | NaN |
| NaN | shieldDefectionMultiplier | 护盾阻挡乘数 | 护盾阻挡乘数，填0则可无视护盾，同时对单位和盾造成伤害。 | shieldDefectionMultiplier:0 | float | NaN | NaN |
| NaN | hullDamageMultiplier | 护盾损伤乘数 | 可以用来制造只影响护盾的电磁脉冲武器。0忽略单位，只伤害护盾 | hullDamageMultiplier:0 | float | NaN | NaN |
| NaN | ignoreParentShootDamageMultiplier | 忽略父单位射击伤害乘数 | 忽略父单位射击伤害乘数 | ignoreParentShootDamageMultiplier:true | bool | NaN | NaN |
| NaN | armourIgnoreAmount | 无视装甲数量 | 无视目标装甲数量并造成伤害。 | armourIgnoreAmount:10 | int\nstatic integer | NaN | NaN |
| NaN | friendlyFire | 友伤 | 范围武器有友伤，可以伤害自己单位。铁锈限制不能对盟友有伤害。负数友伤可以用于范围维修，如果修盟友则需要用中立单位实现。参数（false，true，only-ignoreEnemy）（假，真，忽略敌人的友伤） | friendlyFire: false/true/only-ignoreEnemy | bool/string | NaN | NaN |
| NaN | mutator<value : string>\_ifUnitWithTags | 修正需要标签 | 伤害修正所需标签，仅对携带标签单位有效。否则为原始伤害。 | mutator???？？？\_ifUnitWithTags: AAA | float | NaN | NaN |
| NaN | mutator<value : string>\_ifUnitWithoutTags | 修正除此标签 | 伤害修正除此标签外有效。 | mutator114514\_ifUnitWithoutTags: strongArmour | float | NaN | NaN |
| NaN | mutator<value : string>\_directDamageMultiplier | 修正直接伤害 | 伤害修正,直接伤害(directDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。 | mutatorABC\_directDamageMultiplier:2 | float | NaN | NaN |
| NaN | mutator<value : string>\_areaDamageMultiplier | 修正范围伤害 | 伤害修正,范围伤害(areaDamage)乘数。比如直接伤害100，这里填2，对目标就造成200伤害。 | mutator解\_areaDamageMultiplier:0.5 | float | NaN | NaN |
| NaN | mutator<value : string>\_changedExplodeEffect | 修正命中效果 | 如果此修正处于有效状态，则更改爆炸效果。 | mutator疑\_changedExplodeEffect:custom:small | effect | NaN | NaN |
| NaN | mutator<value : string>\_addResourcesDirectHit | 修正直接添加资源 | 伤害修正,用于直接伤害(directDamage)，给目标添加指定资源。用途如给目标资源后，目标检测自身资源然后禁止移动。 | mutator一个\_addResourcesDirectHit:shibaMove=1 | resource | NaN | NaN |
| NaN | mutator<value : string>\_addResourcesAreaHit | 修正区域添加资源 | 伤害修正,用于范围伤害(areaDamage)，给目标添加指定资源。 | mutator时\_addResourcesAreaHit:shibaMove=1 | resource | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 运动 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | targetGround | 目标为地面 | 抛射体瞄准并攻击目标所在的地面，而不是追踪目标。直接伤害(directDamage)将会失效，需要使用areaDamage和areaRadius。 | targetGround:true | bool | NaN | NaN |
| NaN | targetGroundSpread | 目标为地面散布 | 填数值，用于目标为地面时随机造成偏差效果 | targetGroundSpread:15 | float | NaN | NaN |
| NaN | targetGround\_includeTargetHeight | 目标为地面包括目标高度 | 区域影响AA武器 | targetGround\_includeTargetHeight:12.5 | float | NaN | NaN |
| NaN | targetGroundHeightOffset | 目标为地面高度偏移 | 在目标上方或下方射击。可能对分裂和落下的抛射体有用。 | targetGroundHeightOffset:10 | float | NaN | NaN |
| NaN | speed | 速度 | 抛射体飞行速度，单位是每帧飞行像素。铁锈地块1格20像素，填1则每秒飞行3格。 | speed:2 | float | NaN | NaN |
| NaN | targetSpeed | 到达速度 | 加速到这个速度 | targetSpeed:8 | float | NaN | NaN |
| NaN | targetSpeedAcceleration | 加速度 | 加速度，控制targetSpeed的速度提升 | targetSpeedAcceleration:1 | float | NaN | NaN |
| NaN | ballistic | 弹道 | 弹道导抛射体效果，使抛射体先飞向空中并向下飞，而不是走直线。 | ballistic:true | bool | NaN | NaN |
| NaN | ballistic\_delaymove\_height | 弹道垂直飞行高度 | 弹道导抛射体发射初期效果，决定弹道一开始先升高多少，再斜向爬升到最高过度。 | ballistic\_delaymove\_height:1 | float | NaN | NaN |
| NaN | ballistic\_height | 弹道高度 | 弹道最终高度。 | ballistic\_height:15 | float | NaN | NaN |
| NaN | speedSpread | 速度散布 | 随机改变抛射体初始速度 | speedSpread:1 | float | NaN | NaN |
| NaN | instant | 瞬间命中 | 开火时立即击中目标,用于激光、闪电、波束。 | instant:true | bool | NaN | NaN |
| NaN | instantReuseLast | 瞬间命中回收最后抛射体 | 用于激光和闪电。激光或闪电命中后还会存在一段时间，当此抛射体命中后，清除上一个抛射体效果。使得只有一个抛射体存在。如使用高频射速变成光束武器，而不是瞎眼叠加。 | instantReuseLast:true | bool | NaN | NaN |
| NaN | instantReuseLast\_alsoChangeTurretAim | 命中回收抛射体且改变瞄准 | 使炮塔瞄准受到命中目标扫描效果的影响，对光束武器有用 | instantReuseLast\_alsoChangeTurretAim:true | bool | NaN | NaN |
| NaN | instantReuseLast\_keepAreaDamageList | 命中回收抛射体区域伤害列表 | 瞬间命中并回收最后的抛射体并且保持区域伤害列表，默认false,保持列表是1.13的正常行为，造成区域伤害不会第二次生效，但不是很有用。只有当您想要旧的行为时才使用这个。 | instantReuseLast\_keepAreaDamageList:false | bool | NaN | NaN |
| NaN | disableLeadTargeting | 禁用预判 | 瞄准移动目标时，禁用预判计算。默认为false。 | disableLeadTargeting:true | bool | NaN | NaN |
| NaN | leadTargetingSpeedCalculation | 预判计算 | 用于使用targetGround时预判计算。目标计算的预期速度。默认为“targetSpeed”。如果设置则基于speed. | leadTargetingSpeedCalculation:0.5 | float | NaN | NaN |
| NaN | initialUnguidedSpeedHeight | 初始非制导垂直速度 | 设置抛射体和地面间的垂直速度，利用gravity制造出平滑的抛物线。比较迷，填1左右，重力可以不填。 | initialUnguidedSpeedHeight:1 | float | NaN | NaN |
| NaN | initialUnguidedSpeedX | 初始非相对制导速度X | 让抛射体以弧线形式移动,负数向左，正数向右。 | initialUnguidedSpeedX:3 | float | NaN | NaN |
| NaN | initialUnguidedSpeedY | 初始非相对制导速度Y | 修改抛射体的高度，正数向下，负数向上。 | initialUnguidedSpeedY:3 | float | NaN | NaN |
| NaN | gravity | 重力 | 控制地面的抛射体丸的拉力。与initialUnguidedSpeedHeight一起使用。 | gravity:0.5 | float | NaN | NaN |
| NaN | trueGravity | 绝对向重力 | 抛射体在靠近单位时因为有该key会低空飞行一段距离，但注意不要填的太大，否则会直接往屏幕下方飞走。 | trueGravity:0.5 | float | NaN | NaN |
| NaN | turnSpeed | 转弯速度 | 限制抛射体的转弯速度，更好的做出弹道效果。 | turnSpeed:2 | float | NaN | NaN |
| NaN | turnSpeedWhenNear | 靠近时转弯速度 | 用于当射抛射体非常接近目标时，默认禁用转弯速度以使其能够命中。 | turnSpeedWhenNear:true | bool | NaN | NaN |
| NaN | wobbleAmplitude | 摆动幅度 | 抛射体飞行中摆动的剧烈程度。 | wobbleAmplitude:0.2 | float | NaN | NaN |
| NaN | wobbleFrequency | 摆动频率 | 抛射体飞行中摆动的频率。 | wobbleFrequency:0.8 | float | NaN | NaN |
| NaN | pushForce | 推动力量 | 抛射体丸所携带的“重量”,质量越大，推力越大。推动（或以负值拉动）被击中的单位。除以目标质量 | pushForce:2 | float | NaN | NaN |
| NaN | pushVelocity | 推进速度 | 抛射体爆炸后可用推动单位,推力相对于方向的速度，推动（或以负值拉动）被击中的单位。忽略目标质量 | pushVelocity:2 | float | NaN | NaN |
| NaN | moveWithParent | 随父物体移动 | 当父单位移动时也移动抛射体。对光束效果武器很有用。 | moveWithParent:true | bool | NaN | NaN |
| NaN | sweepOffset | 扫描偏移 | 扫描偏移，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepOffset:10 | float | NaN | NaN |
| NaN | sweepSpeed | 扫描速度 | 扫描速度，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepSpeed:10 | float | NaN | NaN |
| NaN | sweepOffsetFromTargetRadius | 扫描偏移目标半径 | 以目标半径作为扫描偏移量乘数，用于制作类似于两栖护盾坦克的激光武器。对光束效果很有用。 | sweepOffsetFromTargetRadius:0.4 | float | NaN | NaN |
| NaN | retargetingInFlight | 重新瞄准在飞行时 | 在飞行过程中重新瞄准一个新的目标，非常适合投掷式武器和相互碰撞的抛射体 | retargetingInFlight:true | bool | NaN | NaN |
| NaN | retargetingInFlightSearchDelay | 重新瞄准在飞行时搜索延迟 | 寻找新目标之间的时间。默认5 | retargetingInFlightSearchDelay:10 | float/time | NaN | NaN |
| NaN | retargetingInFlightSearchRange | 重新瞄准在飞行时搜索范围 | 重新选择目标的范围。默认值120 | retargetingInFlightSearchRange:45 | int\nstatic integer | NaN | NaN |
| NaN | retargetingInFlightSearchLead | 重新瞄准在飞行时预判 | 引导射抛射体试图击中目标。默认15 | retargetingInFlightSearchLead:1 | float | NaN | NaN |
| NaN | retargetingInFlightSearchOnlyTags | 重新瞄准在飞行时针对标签 | 只针对具有这些标签的单位进行重定向。 | retargetingInFlightSearchOnlyTags:tg\_project | tag ref | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 图形和效果 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | color | 颜色 | 使用十六进制值对该抛射体重新着色，它也决定了激光颜色，颜色格式为#AARRGGBB。 | color: #bebe50 | color | NaN | NaN |
| NaN | teamColorRatio | 阵营色色相 | 将团队颜色混合到抛射体颜色中，填0-1。 | teamColorRatio:0.5 | float | NaN | NaN |
| NaN | teamColorRatio\_sourceRatio | 阵营色色相比例 | 将团队颜色混合到抛射体颜色中与原色比例，默认为(1-teamColorRatio) | teamColorRatio\_sourceRatio:0.5 | float | NaN | NaN |
| NaN | invisible | 隐藏 | 隐藏抛射体图像。 | invisible:true | bool | NaN | NaN |
| NaN | image | 图像 | 使用自定义图片。覆盖drawType和frame | image:233.png | file (image) | NaN | NaN |
| NaN | shadowFrame | 阴影帧 | 定义哪一帧是单位的阴影 | shadowFrame:1 | int\nstatic integer | NaN | NaN |
| NaN | shadowImage | 阴影图像 | 使用自定义图片给抛射体加阴影。 | shadowImage:SHADOW:PRO\_fd.png | file (image) | NaN | NaN |
| NaN | drawType | 绘制类型 | 使用内置抛射体图像。 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | int\nstatic integer | NaN | NaN |
| NaN | drawSize | 绘制大小 | 缩放抛射体大小。默认为1 | drawSize:0.5 | float | NaN | NaN |
| NaN | frame | 帧 | 使用的内置图像帧，编号从零开始。和drawType结合使用。 | frame:1 | int\nstatic integer | NaN | NaN |
| NaN | hitSound | 打击音效 | 启用命中音效，默认true | hitSound:true | bool | NaN | NaN |
| NaN | explodeEffect | 爆炸效果 | 抛射体爆炸效果 | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | effect ref list | NaN | NaN |
| NaN | explodeEffectOnShield | 护盾上爆炸效果 | 如果目标上有护盾，则使用此效果 | explodeEffectOnShield:small | effect ref list | NaN | NaN |
| NaN | drawUnderUnits | 绘制与单位下 | 绘制于单位下方。 | drawUnderUnits:true | bool | NaN | NaN |
| NaN | effectOnCreate | 创建时效果 | 创建时效果，会追随抛射体。 | effectOnCreate:large | effect ref list | NaN | NaN |
| NaN | shouldRevealFog | 揭开迷雾 | 抛射体在爆炸时向玩家揭开迷雾。 | shouldRevealFog:true | bool | NaN | NaN |
| NaN | alwaysVisibleInFog | 迷雾中显示 | 抛射体总是在迷雾中显示。 | alwaysVisibleInFog:true | bool | NaN | NaN |
| NaN | nukeWeapon | 核武器 | 发射时在迷您地图上显示。还有其他一些效果。 | nukeWeapon:true | bool | NaN | NaN |
| NaN | trailEffect | 尾焰 | 设置为true时为默认的尾焰。但也可以指向任何自定义效果，或使用内置效果。 | trailEffect:true | bool/effect | NaN | NaN |
| NaN | trailEffectRate | 尾焰频率 | 尾焰产生频率，默认为3 | trailEffectRate:8 | float | NaN | NaN |
| NaN | lightSize | 闪光大小 | 抛射体光照大小,单位半径是地块格子 | lightSize:2 | float | NaN | NaN |
| NaN | lightColor | 闪光颜色 | 抛射体光照颜色,不决定激光颜色，激光由color决定。 | lightColor: #ffe92b | color | NaN | NaN |
| NaN | lightCastOnGround | 闪光映射到地面 | 将闪光效果映射到地面，如火炮的光和抛射体是分离的。 | lightCastOnGround:true | bool | NaN | NaN |
| NaN | largeHitEffect | 大的打击效果 | 为true时会产生大的爆炸效果和声音（仅用于装饰），设为false时会禁用范围武器的冲击波效果。 | largeHitEffect:true | bool | NaN | NaN |
| NaN | lightingEffect | 闪电效果 | 将抛射体图像修改为闪电，一般需要instant(瞬间命中)搭配. | lightingEffect:true | bool | NaN | NaN |
| NaN | laserEffect | 激光效果 | 将抛射体图像修改为激光。 | laserEffect:true | bool | NaN | NaN |
| NaN | beamImage | 波束图像 | 用于激光效果的主体图像，图像会被复制为多份显示。例如可用于做红警中的正弦波状辐射武器。因为本质是图像拼接,所以长度限制不能小于20 | beamImage:shibaray.png | file (image) | NaN | NaN |
| NaN | beamImageOffsetRate | 波束偏移频率 | 波束图像的移动频率。 | beamImageOffsetRate:0 | float | NaN | NaN |
| NaN | beamImageStart | 波束开始图像 | 光束动画开火端效果图像 | beamImageStart:beam1\_start.png | file (image) | NaN | NaN |
| NaN | beamImageEnd | 波束命中图像 | 光束动画命中端效果图像 | beamImageEnd:beam1\_end.png | file (image) | NaN | NaN |
| NaN | beamImageStartRotated | 波束始端旋转 | 光束动画开火端效果图像是否以炮塔角度旋转旋转,默认false,不旋转. | beamImageStartRotated:true | bool | NaN | NaN |
| NaN | beamImageEndRotated | 波束末端旋转 | 光束动画命中端效果图像是否旋转,默认false. | beamImageEndRotated:true | bool | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 运动 | Section | [movement] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | movementType | 运动类型 | 定义单位将能够通过的地形以及与单位类型相关的其他属性。类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖\nNONE、LAND、BUILDING、AIR、WATER、HOVER、OVER\_CLIFF、OVER\_CLIFF\_WATER | movementType: LAND | string | NaN | NaN |
| NaN | moveSpeed | 移动速度 | 单位的最大移动速度。 | moveSpeed: 1.2 | float | NaN | NaN |
| NaN | moveAccelerationSpeed | 加速度 | 定义单位加速到最大速度的加速度。 | moveAccelerationSpeed: 0.07 | float | NaN | NaN |
| NaN | moveDecelerationSpeed | 减速度 | 与加速度相对应得减速度。不要设的太小。 | moveDecelerationSpeed: 0.17 | float | NaN | NaN |
| NaN | reverseSpeedPercentage | 倒车速度比率 | 0.6默认值。超过0.4会在短距离（以40％的速度）时反转。 如果设置为1前进后退则不转弯。 填0时禁止倒退，必须旋转。 | reverseSpeedPercentage: 0 | float | NaN | NaN |
| NaN | landOnGround | 降落到地面 | 闲置时使飞行器降落。 | landOnGround: false | bool | NaN | NaN |
| NaN | targetHeight | 到达高度 | 默认为0，但如果运动类型为空军则默认为35。 | targetHeight: 25 | float | NaN | NaN |
| NaN | targetHeightDrift | 高度浮动 | 默认0，空军1.5.单位高度上下浮动高度。 | targetHeightDrift: 1 | float | NaN | NaN |
| NaN | startingHeightOffset | 创建时高度偏移 | 单位在创建时高度。负数上升比较慢。 | startingHeightOffset:100 | float | NaN | NaN |
| NaN | maxTurnSpeed | 转弯速度 | 最大转弯速度。 | maxTurnSpeed:3 | float | NaN | NaN |
| NaN | turnAcceleration | 转弯加速度 | 转弯加速度。 | turnAcceleration:1 | float | NaN | NaN |
| NaN | moveSlidingMode | 移动后滑动 | 移动后滑动，相当于惯性。和单位的速度，加速度，转弯速度有关。True时受推力影响 | moveSlidingMode:true | bool | NaN | NaN |
| NaN | moveIgnoringBody | 移动忽略转向 | true效果即不必转弯便能运动，false效果即原地转弯完成才能运动 | moveIgnoringBody:true | bool | NaN | NaN |
| NaN | moveSlidingDir | 移动滑动角度 | 移动滑动角度。无明显效果。 | moveSlidingDir:100 | int\nstatic integer | NaN | NaN |
| NaN | joinsGroupFormations | 加入队形 | 将单位组成小队。铁锈调集大量部队时将其组成方阵以降低运算压力，但队形可能影响速度或浪费时间。禁用后则不参与组队。 | joinsGroupFormations:false | bool | NaN | NaN |
| NaN | ignoreMoveOrders | 忽略移动指令 | 忽略移动指令,此代码强制要求移动速度为0，适用例子：红警中单位部署忽略移动指令。 | ignoreMoveOrders:true | bool | NaN | NaN |
| NaN | moveYAxisScaling | Y轴速度比例 | 垂直方向单位移动速度乘数，适用于2.5D，也就是用铁锈模拟3D。典型如红警。 | moveYAxisScaling:15.1 | float | NaN | NaN |
| NaN | slowDeathFall | 死亡缓慢降落 | 为"true"时，被击毁时降落速度减慢，并且向前滑行一段距离。注意，必须设置死亡图像，不然坠落后会显示生前图像，而不是直接炸掉。 | slowDeathFall: true | bool | NaN | NaN |
| NaN | heightChangeRate | 高度改变速率 | 单位改变高度的频率，无论是转换还是浮动 | heightChangeRate: 3 | float | NaN | NaN |
| NaN | fallingAcceleration | 降落加速度 | 单位降落时的加速度 | fallingAcceleration:1 | float | NaN | NaN |
| NaN | fallingAccelerationDead | 坠毁加速度 | 单位被摧毁时降落的加速度 | fallingAccelerationDead:1 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | AI | Section | [ai] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 这些代码不一定都有效 | 例子 | 值类型 | NaN | NaN |
| NaN | useAsBuilder | 用作建造者 | 作为建造者。如果单位可以建造或维修建筑物，则设置为true。 默认为[core] isBuilder。 | useAsBuilder:true | bool | NaN | NaN |
| NaN | useAsTransport | 用作运输 | 作为载具。如果单位可以运输单位，则默认为true.如果您的单位可以运输又能攻击，则AI可能囤积起来而不攻击，则需要设置false. | useAsTransport:true | bool | NaN | NaN |
| NaN | useAsAttacker | 用作攻击者 | 是否作为攻击者。 | useAsAttacker:true | bool | NaN | NaN |
| NaN | useAsHarvester | 用作采集 | 作为采集者。如果单位可以回收资源，则默认为true | useAsHarvester:true | bool | NaN | NaN |
| NaN | disableUse | 禁用 | 禁止AI建立这个单位或建筑物 | disableUse:true | bool | NaN | NaN |
| NaN | ai\_upgradePriority | AI升级优先级 | 升级优先级。默认值为0.06。 设置在0-1之间，越高，表示AI更有可能先于其他升级该单位。 | ai\_upgradePriority:0.1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | ++++++++++ | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | buildPriority | 建造优先级 | 建造优先级，填0-1。 越大越AI越可能造。Luke的的第一座土地工厂使用0.8，空中工厂使用0.48，第一炮塔使用0.47。 | buildPriority:0.6 | float | NaN | NaN |
| NaN | noneInBaseExtraPriority | 基地内没有时优先级 | 如果AI基地中不存在此单位，则增加其优先级。 | noneInBaseExtraPriority:0.2 | float | NaN | NaN |
| NaN | noneGlobalExtraPriority | 全图没有时优先级 | 如果此单位在地图上的任何位置都不存在，则增加其优先级。 | noneGlobalExtraPriority:0.4 | float | NaN | NaN |
| NaN | nonInBaseExtraPriority | 基地内没有时的优先级 | 如果AI基地中不存在此单位，则增加其优先级。 | noneInBaseExtraPriority:0.2 | float | NaN | NaN |
| NaN | nonGlobalExtraPriority | 全图没有时的优先级 | 如果此单位在地图上的任何位置都不存在，则增加其优先级。 | noneGlobalExtraPriority:0.4 | float | NaN | NaN |
| NaN | recommendedInEachBaseNum | 推荐在每个基地的数量 | 推荐在每个基地中的数量。 | recommendedInEachBaseNum:5 | int\nstatic integer | NaN | NaN |
| NaN | recommendedInEachBasePriorityIfUnmet | 推荐条件不满足时优先级 | 如果未满足，推荐在基地中的优先级。 | recommendedInEachBasePriorityIfUnmet:0.2 | float | NaN | NaN |
| NaN | upgradedFrom | 升级自 | 创建到另一个单位的链接，用于保留同一单位已升级和未升级的计数。 | upgradedFrom:炮塔 | string | NaN | NaN |
| NaN | maxGlobal | 全图最大数量 | 全图最多拥有的数量。 | maxGlobal:10 | int\nstatic integer | NaN | NaN |
| NaN | maxEachBase | 每个基地最大数量 | 每个基地最多拥有的数量。 | maxEachBase:1 | int\nstatic integer | NaN | NaN |
| NaN | notPassivelyTargetedByOtherUnits | 不被动地被其他单位瞄准 | 允许更好的墙壁建筑物，默认情况下，这些建筑物不会瞄准目标。用于围墙 | notPassivelyTargetedByOtherUnits:true | bool | NaN | NaN |
| NaN | lowPriorityTargetForOtherUnits | 低优先级目标 | 其它单位不优先考虑此单位。用于围墙 | lowPriorityTargetForOtherUnits:true | bool | NaN | NaN |
| NaN | aiTags | ai标签 | 采集 | NaN | NaN | NaN | NaN |
| NaN | whenUsingAsHarvester\_recommendedInEachBase | 每个基地此采集者数量 | 当此单位用作采集者时，每个基地推荐的采集者数量。 | whenUsingAsHarvester\_recommendedInEachBase:10 | int\nstatic integer | NaN | NaN |
| NaN | whenUsingAsHarvester\_recommendedGlobal | 全地图推荐采集者数量 | 当此单位用作采集者时，全图推荐的采集者数量。 | whenUsingAsHarvester\_recommendedGlobal:20 | int\nstatic integer | NaN | NaN |
| NaN | whenUsingAsHarvester\_includeOtherHarvesterCounts | 是否算在采集者计数中 | 当此单位用作采集者时，是否算在其它采集者统计中。 | whenUsingAsHarvester\_includeOtherHarvesterCounts:false | bool | NaN | NaN |
| NaN | onlyUseAsHarvester\_ifBaseHasUnitTagged | 有此标签才作为采集者 | 只有当基地有单位标记时才可以作为采集者使用. | onlyUseAsHarvester\_ifBaseHasUnitTagged:false | string | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 腿脚/胳膊 | 上限各20个 | [leg\_#] / [arm\_#] | [leg\_1] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | NaN | NaN | 腿和胳膊有一个区别，腿可以自由活动，但是胳膊是天生就开了锁定运动的 | NaN | NaN | NaN | NaN |
| NaN | x | x: | 设置脚在X轴上的位置。 | x:15 | float | NaN | NaN |
| NaN | y | y: | 设置脚在Y轴上的位置。 | y:15 | float | NaN | NaN |
| NaN | copyFrom | 复制与 | 从另一条腿复制。仅需设置一次腿部值时有用 | copyFrom:1 | int\nstatic integer | NaN | NaN |
| NaN | attach\_x | x轴链接位置 | 在X轴上设置腿部的附着点。 | attach\_x: -15 | float | NaN | NaN |
| NaN | attach\_y | Y轴链接位置 | 在Y轴上设置腿部的附着点。 | attach\_y: 0 | float | NaN | NaN |
| NaN | rotateSpeed | 旋转速度 | 设置脚旋转速度，非对称情况下很明显。 | rotateSpeed:30 | float | NaN | NaN |
| NaN | endDirOffset | 末端角度偏移值 | 目标脚/末端相对于身体的旋转角度。 | endDirOffset:45 | int\nstatic integer | NaN | NaN |
| NaN | lockMovement | 锁定运动 | 禁止使用腿脚，将其锁定到主体。用于将行走单位转换为飞行单。 | lockMovement:true | bool | NaN | NaN |
| NaN | heightSpeed | 高度速度 | 移动时脚抬高速度和高度。 | heightSpeed:2 | float | NaN | NaN |
| NaN | moveSpeed | 移动速度 | 腿脚移动速度。 | moveSpeed:3 | float | NaN | NaN |
| NaN | moveWarmUp | 移动延迟 | 腿脚移动延迟 | moveWarmUp:15 | float | NaN | NaN |
| NaN | holdDisMin | 最小移动距离 | 默认值为7。如果相邻的腿还没有重新移动，则至少移动此距离。 | holdDisMin:10 | float | NaN | NaN |
| NaN | holdDisMax | 最大移动距离 | 默认值为16。如果已经移动超过此距离则强制重新放置腿。 | holdDisMax:40 | float | NaN | NaN |
| NaN | holdDisMin\_maxMovingLegs | 最大移动腿数目 | 最多移动腿数目 | holdDisMin\_maxMovingLegs:4 | int\nstatic integer | NaN | NaN |
| NaN | hold\_moveOnlyIfFurthest | 只在最远时保持移动 | 保持移动仅在最远时候。 | hold\_moveOnlyIfFurthest:true | bool | NaN | NaN |
| NaN | holdDisMin\_checkNeighbours | 最小移动距离检查相邻 | 移动最小距离时检查相邻的腿脚。 | holdDisMin\_checkNeighbours:true | bool | NaN | NaN |
| NaN | hardLimit | 硬性限制 | 默认值为50。强制腿部不要走的超过此数值。最好不要用到。 | hardLimit:99 | float | NaN | NaN |
| NaN | estimatingPositionMultiplier | 预测位置乘数 | 默认值为1。根据单位速度预测单位可用的腿脚放置位置。 | estimatingPositionMultiplier:1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 图形和效果 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | hidden | 隐藏 | 隐藏 | hidden:if self.isInWater() | logic boolean | NaN | NaN |
| NaN | image\_end | 末端图像 | 末端图像，相当于脚。 | image\_end:爪子.png | image | NaN | NaN |
| NaN | image\_end\_shadow | 末端图像阴影 | 末端图像阴影。 | image\_end\_shadow:SHADOW:爪子.png | image | NaN | NaN |
| NaN | image\_end\_teamColors | 末端图像着色 | 末端图像使用阵营色。 | image\_end\_teamColors:true | bool | NaN | NaN |
| NaN | image\_foot | 脚图像 | 脚图像，与image\_end相同 | image\_foot:爪子.png | image | NaN | NaN |
| NaN | image\_foot\_shadow | 脚图像阴影 | 脚图像阴影。 | image\_foot\_shadow:SHADOW:爪子.png | image | NaN | NaN |
| NaN | image\_middle | 中部图像 | 中部图像，相当于腿。 | image\_middle:腿.png | image | NaN | NaN |
| NaN | image\_leg | 腿图像 | 腿图像，与image\_middle相同 | image\_leg:腿.png | image | NaN | NaN |
| NaN | liftingHeightOffset | 离开高度偏移 | 离开时的脚的高度 | liftingHeightOffset:1.2 | float | NaN | NaN |
| NaN | targetHeight | 目标高度 | 最终高度 | targetHeight:1.5 | float | NaN | NaN |
| NaN | targetHeightRelative | 相对目标高度 | 相对自身的最终高度 | targetHeightRelative:1.2 | float | NaN | NaN |
| NaN | image\_middle\_teamColors | 腿图像阵营色 | 给腿也用上队伍色 | image\_middle\_teamColors:false | bool | NaN | NaN |
| NaN | draw\_foot\_on\_top | 绘制脚在顶层 | 绘制脚在顶层。 | draw\_foot\_on\_top:true | bool | NaN | NaN |
| NaN | drawOverBody | 绘制主体之上 | 绘制在主体之上。 | drawOverBody:true | bool | NaN | NaN |
| NaN | drawUnderAllUnits | 绘制所有单位之下 | 绘制所有单位之下。 | drawUnderAllUnits:true | bool | NaN | NaN |
| NaN | drawDirOffset | 绘制角度偏移 | 绘制角度偏移。 | drawDirOffset:45 | float | NaN | NaN |
| NaN | dust\_effect | 灰尘效果 | 脚落地时产生灰尘。 | dust\_effect:true | bool | NaN | NaN |
| NaN | spinRate | 自身自动旋转速度 | 使手臂/腿脚一直旋转，像转塔的idleSpin。用处如直升机的螺旋桨。 | spinRate:3 | float | NaN | NaN |
| NaN | favourOppositeSideNeighbours | 偏向于临近一侧 | 填true时，使得左右的腿脚拉开时间差，这样更好看。否则看起来顺拐。计算相邻的X比接近的Y查10倍时间。 | favourOppositeSideNeighbours:true | bool | NaN | NaN |
| NaN | drawLegWhenZoomedOut | 缩小时绘制腿 | 在缩小显示倍数(看到东西更多)后绘制腿。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。 | drawLegWhenZoomedOut:true | bool | NaN | NaN |
| NaN | drawFootWhenZoomedOut | 缩小时绘制脚 | 在缩小显示倍数(看到东西更多)后绘制脚。False时不绘制。为了提高绘制腿性能，默认值根据单位大小而变化。如果单独设置阴影则可能比较怪异。 | drawFootWhenZoomedOut:false | bool | NaN | NaN |
| NaN | explodeOnDeath | 死亡时爆炸 | 单位死亡爆炸时腿脚跟着一起爆炸 | explodeOnDeath:false | bool | NaN | NaN |
| NaN | resetAngle | 复位角度 | 复位角度。 | resetAngle:45 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 附属 | Section | [attachment\_NAME] | [attachment\_wolf] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | x | x | 子单位x轴位置 | x:10 | float | NaN | NaN |
| NaN | y | y | 子单位Y轴位置 | y:15 | float | NaN | NaN |
| NaN | height | 高度 | 子单位高度。 | height:3 | float | NaN | NaN |
| NaN | lockDir | 锁定角度 | 是否锁定角度 | lockDir:true | bool | NaN | NaN |
| NaN | idleDir | 闲置方向 | 闲置时角度。 | idleDir:45 | int\nstatic integer | NaN | NaN |
| NaN | idleDirReversing | 闲置方向反转 | 允许朝向反转，比如重坦倒退移动时炮塔反转，而不需要整个单位转向。 | idleDirReversing:1 | float | NaN | NaN |
| NaN | isVisible | 是可见 | 是可见的。 | isVisible:true | bool | NaN | NaN |
| NaN | onCreateSpawnUnitOf | 创建时生成单位 | 此创造时也产生此子单位。 | onCreateSpawnUnitOf:flydog | units | NaN | NaN |
| NaN | canBeAttackedAndDamaged | 可被攻击或损坏 | 可以被攻击或受到伤害。 | canBeAttackedAndDamaged:true | bool | NaN | NaN |
| NaN | isUnselectable | 不可选择 | 是不可选择的。 | isUnselectable:true | bool | NaN | NaN |
| NaN | isUnselectableAsTarget | 禁止选择和作为目标 | 默认效果为isUnselectable。可以用来创造不能被选择但是可以被攻击，回收的单位 | isUnselectableAsTarget:true | bool | NaN | NaN |
| NaN | lockLegMovement | 锁定腿脚运动 | 锁定腿脚防止乱动。 | lockLegMovement:true | bool | NaN | NaN |
| NaN | freezeLegMovement | 冻结腿脚运动 | 冻结腿脚防止乱动。 | freezeLegMovement:true | bool | NaN | NaN |
| NaN | showMiniHp | 显示迷你血条 | 指附属单位下面那个又小又细的血条栏 | showMiniHp:false | bool | NaN | NaN |
| NaN | hideHp | 隐藏血量 | 隐藏单位的血量并不显示 | hideHp:true | bool | NaN | NaN |
| NaN | hidden | 隐藏 | 隐藏整个单位 | hidden:true | bool | NaN | NaN |
| NaN | keepAliveWhenParentDies | 保持子存活 | 当此单位死亡时，子单位保持存活。 | keepAliveWhenParentDies:true | bool | NaN | NaN |
| NaN | setDrawLayerOnTop | 绘制于顶层 | 此子单位绘制于顶层。 | setDrawLayerOnTop:true | bool | NaN | NaN |
| NaN | setDrawLayerOnBottom | 绘制于底层 | 此子单位绘制于底层。 | setDrawLayerOnBottom:true | bool | NaN | NaN |
| NaN | addTransportedUnits | 增加被运输单位 | 添加到运输单位槽中。 | addTransportedUnits:true | bool | NaN | NaN |
| NaN | lockRotation | 锁定旋转 | 锁定方向，禁止旋转。 | lockRotation:true | bool | NaN | NaN |
| NaN | rotateWithParent | 子单位一同旋转 | 旋转时子单位是否一同旋转。 | rotateWithParent:true | bool | NaN | NaN |
| NaN | resetRotationWhenNotAttacking | 不攻击时重置角度 | 不攻击时恢复到自身默认角度 | resetRotationWhenNotAttacking:true | bool | NaN | NaN |
| NaN | deattachIfWantingToMove | 移动时脱离 | 若收到移动命令，子单位将自动分离。这包括来自action的路径点。可以用来制作机场。 | deattachIfWantingToMove:true | bool | NaN | NaN |
| NaN | unloadInCurrentPosition | 卸载于此位置 | 卸载单位时在这个位置进行卸载 | unloadInCurrentPosition:true | bool | NaN | NaN |
| NaN | prioritizeParentsMainTarget | 优先考虑父单位的主要目标 | 子单位优先考虑父单位当前的目标。 | prioritizeParentsMainTarget:true | bool | NaN | NaN |
| NaN | alwaysAllowedToAttackParentsMainTarget | 总是攻击父单位的主要目标 | 子单位总是跟随攻击父单位的主要目标。 | alwaysAllowedToAttackParentsMainTarget:true | bool | NaN | NaN |
| NaN | onlyAttackParentsMainTarget | 只攻击父单位的主要目标 | 子单位只会攻击父单位的攻击目标。 | onlyAttackParentsMainTarget:true | bool | NaN | NaN |
| NaN | canAttack | 可攻击 | 默认值为true。设置为false以阻止子单位自动攻击。 | canAttack:true | bool | NaN | NaN |
| NaN | onParentTeamChangeKeepCurrentTeam | 改变队伍时子单位保持原队伍 | 默认值为false。如果为true则父单位改变队伍时子单位不改变队伍。 | onParentTeamChangeKeepCurrentTeam:true | bool | NaN | NaN |
| NaN | smoothlyBlendPositionWhenExistingUnitAdded | 补充时平滑移动 | 补充所装载单位至槽位时平滑移动。 | smoothlyBlendPositionWhenExistingUnitAdded:true | bool | NaN | NaN |
| NaN | keepWaypointsNeedingMovement | 保持需要移动路径点 | 默认值为false。当为false时，队列中任何需要移动才能完成的队列路径点都会被移除。 | keepWaypointsNeedingMovement:false | bool | NaN | NaN |
| NaN | showAllActionsFrom | 显示所有操作来源 | 当被选中时，在父单元列表中显示所有附加单位的动作 | showAllActionsFrom:if self.hasFlag(id=1) | logic boolean | NaN | NaN |
| NaN | createIncompleteIfParentIs | 创建随父单位 | 如果父节单位不完整，则创建子单位不完整 | createIncompleteIfParentIs:false | bool | NaN | NaN |
| NaN | onConvertKeepExistingUnitInSameSlot | 转换时附属仍然在同一槽位中 | 转换单位时如果有相同ID的附属槽位则子单位就会在那个槽位中 | onConvertKeepExistingUnitInSameSlot:true | bool | NaN | NaN |
| NaN | redirectDamageToParent | 重定向伤害到父单位 | 将对附属造成的伤害重定向到父单位，而不是伤害子单位自身。 | redirectDamageToParent:true | bool | NaN | NaN |
| NaN | redirectDamageToParent\_shieldOnly | 重定向伤害到父单位护盾 | 只将对附属造成的伤害重定向到父单位的护盾，而不是伤害子单位自身。如果盾没了那就伤害自身，如模块蜘蛛。 | redirectDamageToParent\_shieldOnly:true | bool | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 效果 | Section | [effect\_NAME] | [effect\_XXX] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | life | 效果存在时间 | 默认值为200。到时间效果消失。 设置得尽可能低以减少效果开销。 | effect:custom:doge | float | NaN | NaN |
| NaN | lifeRandom | 效果存在时间随机值 | 效果存在时间的随机范围。 | lifeRandom: 12 | float | NaN | NaN |
| NaN | alsoEmitEffectsOnDeath | 死亡时创建效果 | 在生命耗尽的时候创造这些效果。 | alsoEmitEffectsOnDeath:shibadie | effect ref | NaN | NaN |
| NaN | alsoEmitEffects | 也创造效果 | 创建时创建更多效果，对于多效果很有用。 注意：创建的效果上的其他“ alsoEmitEffects”将被忽略，禁止套娃。 | alsoEmitEffects:custom:doge2 | effect ref | NaN | NaN |
| NaN | ifSpawnFailsEmitEffects | 如果失败则创建效果 | 如果此效果的“spawnChance”失败，则产生这些效果。 | ifSpawnFailsEmitEffects:custom:doge3 | effect ref | NaN | NaN |
| NaN | alsoPlaySound | 也播放音效 | 播放音效，填文件名或内置。 | alsoPlaySound:ao.ogg | file (sound(s)) | NaN | NaN |
| NaN | createWhenOffscreen | 可创建于画面之外 | 允许在画面之外产生此效果，默认为false。 | createWhenOffscreen:true | bool | NaN | NaN |
| NaN | createWhenZoomedOut | 缩小时可产生效果 | 允许缩小时产生此效果，默认值为true | createWhenZoomedOut:true | bool | NaN | NaN |
| NaN | createWhenOverLiquid | 创建于液体上 | 允许在液体上方产生此效果，默认值为true | createWhenOverLiquid:true | bool | NaN | NaN |
| NaN | createWhenOverLand | 创建于陆地上 | 允许在陆地上方产生此效果，默认值为true | createWhenOverLand:true | bool | NaN | NaN |
| NaN | spawnChance | 产生几率 | 默认值1.如果小于1，则效果随机被创建 | spawnChance:0.9 | float | NaN | NaN |
| NaN | showInFog | 在雾中显示 | 默认为false | showInFog:true | boolean | NaN | NaN |
| NaN | delayedStartTimer | 延迟创建 | 等待这么久再播放此动画，单位为帧。 | delayedStartTimer:10 | float | NaN | NaN |
| NaN | delayedStartTimerRandom | 延迟创建随机时间 | 等待时间随机变化 | delayedStartTimerRandom:10 | float | NaN | NaN |
| NaN | liveAfterAttachedDies | 目标死后存活 | 目标死后动画继续存活,使用AttachedToUnit时默认为false. | liveAfterAttachedDies:true | bool | NaN | NaN |
| NaN | priority | 优先级 | 默认为高，一次显示太多效果时依据重要程度丢弃不重要的以用于创建新的。verylow/low/high/veryhigh/critical(很低，低，高，很高，至关重要) | priority:low | string | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 移动 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | attachedToUnit | 附着在单位上 | 此效果产生时吸附到目标单位或抛射体。将与之一起移动。 | attachedToUnit:true | bool | NaN | NaN |
| NaN | alwayStartDirAtZero | 初始角度总是为零 | 忽略附属单位或者产者的角度。 | alwayStartDirAtZero:true | bool | NaN | NaN |
| NaN | atmospheric | 空气效果 | 添加阻力使此效果减慢速度，并添加随机移动。用于模拟尾焰。 | atmospheric:true | bool | NaN | NaN |
| NaN | physics | 物理效果 | 撞击地面时反抛射体。需要高度才能生效。 | physics:true | bool | NaN | NaN |
| NaN | physicsGravity | 物理重力 | 默认为1。physics:true时的垂直方向加速度。 | physicsGravity:1 | float | NaN | NaN |
| NaN | xOffsetRelative | X相对偏移量 | 效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向右，负数向左。 | xOffsetRelative:0 | float | NaN | NaN |
| NaN | yOffsetRelative | Y相对偏移量 | 效果起始时相对于炮塔，抛射体，单位的偏移的方向位置。正数向前，负数向后。 | yOffsetRelative:-25 | float | NaN | NaN |
| NaN | xOffsetRelativeRandom | X相对随机偏移量 | X相对目标随机偏移量。随机增加或减少此值，用于偏移像素。 | xOffsetRelativeRandom:1 | float | NaN | NaN |
| NaN | yOffsetRelativeRandom | Y相对随机偏移量 | Y相对目标随机偏移量。随机增加或减少此值，用于偏移像素。 | yOffsetRelativeRandom:10 | float | NaN | NaN |
| NaN | xOffsetAbsolute | X绝对偏移量 | Absolute类为绝对偏移，它不像Relative那样考虑单位的方向。比如设置x向速度为1，绝对偏移则始终向右移动，相对偏移可以向任意方向移动。 | xOffsetAbsolute:0 | float | NaN | NaN |
| NaN | yOffsetAbsolute | Y绝对偏移量 | 按位置偏移起动效果，忽略附加炮塔单位等的方向。 | yOffsetAbsolute:10 | float | NaN | NaN |
| NaN | xOffsetAbsoluteRandom | X绝对随机偏移量 | 随机增加或减少此值，用于偏移像素。 | xOffsetAbsoluteRandom:2 | float | NaN | NaN |
| NaN | yOffsetAbsoluteRandom | Y绝对随机偏移量 | 随机增加或减少此值，用于偏移像素。 | yOffsetAbsoluteRandom:2 | float | NaN | NaN |
| NaN | xSpeedRelative | X相对速度 | X轴相对于目标的移动速度。，正数向右，负数向左。 | xSpeedRelative:1 | float | NaN | NaN |
| NaN | ySpeedRelative | Y相对速度 | Y轴相对于目标的移动速度。正数向前，负数向后。 | ySpeedRelative:1 | float | NaN | NaN |
| NaN | xSpeedRelativeRandom | X随机相对速度 | 随机增加或减少此值，用于偏移像素。 | xSpeedRelativeRandom:0.1 | float | NaN | NaN |
| NaN | ySpeedRelativeRandom | Y随机相对速度 | 随机增加或减少此值，用于偏移像素。 | ySpeedRelativeRandom:0.1 | float | NaN | NaN |
| NaN | xSpeedAbsolute | X绝对速度 | X轴相对于起点的绝对移动速度。 | xSpeedAbsolute:0.1 | float | NaN | NaN |
| NaN | ySpeedAbsolute | Y绝对速度 | Y轴相对于起点的绝对移动速度。 | ySpeedAbsolute:0.6 | float | NaN | NaN |
| NaN | xSpeedAbsoluteRandom | X随机绝对速度 | 按此值随机更改初始值。 | xSpeedAbsoluteRandom:0.1 | float | NaN | NaN |
| NaN | ySpeedAbsoluteRandom | Y随机绝对速度 | 按此值随机更改初始值。 | ySpeedAbsoluteRandom:0.4 | float | NaN | NaN |
| NaN | hOffset | 高度偏移 | 距目标的高度偏移。正数向上，负数向下。 | hOffset:5 | float | NaN | NaN |
| NaN | hOffsetRandom | 随机高度偏移 | 按此值随机更改初始值。 | hOffsetRandom:3 | float | NaN | NaN |
| NaN | hSpeed | 高度速度 | 高度移动速度。正数向上，负数向下。 | hSpeed:1 | float | NaN | NaN |
| NaN | hSpeedRandom | 随机高度速度偏移 | 按此值随机更改初始值。 | hSpeedRandom:0.1 | float | NaN | NaN |
| NaN | dirOffset | 角度偏移 | 角度偏移，修改初始朝向。注意,0度可能存在朝向问题。 | dirOffset:180 | float | NaN | NaN |
| NaN | dirOffsetRandom | 随机角度偏移量 | 按此值随机更改偏移角度。 | dirOffsetRandom:180 | float | NaN | NaN |
| NaN | dirSpeed | 转速 | 修改效果的旋转速度。 | dirSpeed:5 | float | NaN | NaN |
| NaN | dirSpeedRandom | 随机转速 | 按此值随机更改旋转速度。 | dirSpeedRandom:2 | float | NaN | NaN |
| NaN | pivotOffset | 枢轴偏移 | 整个效果的朝向偏移 | pivotOffset:1.2 | float | NaN | NaN |
| NaN | pivotOffsetRandom | 枢轴偏移随机 | 按此值随机更改朝向。 | pivotOffsetRandom:1.2 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 图形 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | frameIndex | 帧索引 | 使用内置效果时所取用的帧编号，0取第一帧。 | frameIndex:1 | int\nstatic integer | NaN | NaN |
| NaN | frameIndexRandom | 帧随机 | 随机增减索引值，用于随机使用同组内不同的图像。 | frameIndexRandom:1 | int\nstatic integer | NaN | NaN |
| NaN | stripIndex | 图像集 | 要使用的内置图像集。不能与自定义图像一起使用。如effects 效果1对应res内文件effects.png，以此类推。\nexplode\_big爆炸效果图、light\_50闪光贴花、flame开火图火焰、dust灰尘贴花、smoke\_black黑烟、shockwave冲击波、fire火焰图、lava\_bubble岩浆泡、effects2效果2、plasma\_shot等离子、shockwave\_large大冲击波、explode\_bits碎片、explode\_big2大爆炸、explode\_bits\_bug虫碎片、projectiles抛射体、projectiles2抛射体2、effects3效果3 | stripIndex:shockwave | int\nstatic integer/string | NaN | NaN |
| NaN | image | 图像 | 要使用的自定义图像文件。不能与stripIndex一起使用。 | Image:shibaing.png | image | NaN | NaN |
| NaN | imageShadow | 阴影图像 | 用于自定义阴影的图像 | imageShadow:SHADOW:shibaing.png | image | NaN | NaN |
| NaN | scaleTo | 结束缩放倍数 | 效果结束时缩放倍数。 | scaleTo:2 | float | NaN | NaN |
| NaN | scaleFrom | 初始缩放倍数 | 效果初始时缩放倍数，用于效果从小到大缩放，或者反向缩放。 | scaleFrom:0.5 | float | NaN | NaN |
| NaN | color | 颜色 | 填16进制颜色值，给图像上叠加颜色。一般建议图像使用灰度图，然后叠加颜色。注意彩色图是无法叠加白色变白的。 | color:#FFFF0000 | color | NaN | NaN |
| NaN | teamColorRatio | 队伍色相 | 填0-1在图像上叠加阵营色，1为完全为阵营色。 | teamColorRatio:0.5 | float | NaN | NaN |
| NaN | drawType | 绘制类型 | 效果的绘制类型 | drawType:displacement/normal | draw type | NaN | NaN |
| NaN | drawUnderUnits | 绘制在单位下方 | 将此效果绘制在单位下方。 | drawUnderUnits:true | bool | NaN | NaN |
| NaN | fadeInTime | 淡入时间 | 设置淡入效果时间，从透明到不透明。透明度值从0%到100%。 | fadeInTime:15 | float | NaN | NaN |
| NaN | fadeOut | 淡出 | 设置淡入效果时间，透明度从100%淡出到%0。把alpha设置为高于1可以延长淡出。 | fadeOut:true | bool | NaN | NaN |
| NaN | alpha | 透明度 | 介于0-1之间。可以设置为大于1以延迟淡出效果 | alpha:1 | float | NaN | NaN |
| NaN | trailEffect | 尾焰效果 | 类似于抛射体的尾焰 | trailEffect:custom:trails | effect ref | NaN | NaN |
| NaN | trailEffectRate | 尾焰效果频率 | 产生频率 | trailEffectRate:0 | float | NaN | NaN |
| NaN | shadow | 阴影 | true时绘制阴影。如果使用imageShadow则强制为true | shadow:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 动画 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | frame\_width | 单帧宽度 | 规定单帧的宽度像素，如果值小于图像本体宽度则选取帧时采用换列方式进行处理。 | frame\_width:1000 | int\nstatic integer | NaN | NaN |
| NaN | frame\_height | 单帧高度 | 规定单帧的高度像素，如果值小于图像本体高度则选取帧时采用换行方式进行处理。 | frame\_height:1000 | int\nstatic integer | NaN | NaN |
| NaN | total\_frames | 动画总帧数 | 动画的总帧数，与图像(image)或frameIndex一起使用。 | total\_frames:15 | int\nstatic integer | NaN | NaN |
| NaN | animateFrameStart | 动画开始帧 | 动画从哪一帧开始,第一帧编号为0 | animateFrameStart:0 | int\nstatic integer | NaN | NaN |
| NaN | animateFrameEnd | 动画结束帧 | 动画在哪一帧结束。 | animateFrameEnd:14 | int\nstatic integer | NaN | NaN |
| NaN | animateFramePingPong | 动画帧重放 | 动画正序播放完毕后再倒序播放一次。 | animateFramePingPong:true | int\nstatic integer | NaN | NaN |
| NaN | animateFrameSpeed | 动画帧速度 | 动画播放速度，单位位游戏帧，一般动画帧数也不高，所以设置一般为0.x | animateFrameSpeed:0.2 | time | NaN | NaN |
| NaN | animateFrameSpeedRandom | 动画帧随机速度 | 按此值随机更改动画速度。 | animateFrameSpeedRandom0.1 | time | NaN | NaN |
| NaN | animateFrameLooping | 动画帧循环 | 默认false。当为false时,效果被移除时，动画结束 | animateFrameLooping:false | bool | NaN | NaN |
| NaN | animateFrameStartRandomAdd | 动画帧随机开始添加 | 以动画起始帧为基准，按照+/-所填数字内随机选取数字进行帧随机偏移（似乎无用） | animateFrameStartRandomAdd:10（似乎无用） | number | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 动画 | Section | [animation\_NAME] | [animation\_ID] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | onActions | 动画条件 | 动画触发条件：移动、攻击、闲置、在建造中、建造中并将动画拉伸至建造时长、生产中、未知、修复、回收、创建时\nmove, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits、Unknown, repair, reclaim, created | onActions : Unknown\nonActions : queuedUnits | string | NaN | NaN |
| NaN | onActionsQueuedUnitPlayAt | 在队列中有单位播放 | 当使用onAction:queueedUnits时，动画开始之前需要达到值，设置为0-1之间 | onActionsQueuedUnitPlayAt :1 | float | NaN | NaN |
| NaN | blendIn | 融入时间 | 与上一个动画融合时间。 | blendIn : time | time | NaN | NaN |
| NaN | blendOut | 融出时间 | 与下一个动画融合时间。 | blendOut : time | time | NaN | NaN |
| NaN | pingPong | 缩放效果 | 结束后反向播放动画，它一般用来做生物的呼吸效果。 | pingPong:true | bool | NaN | NaN |
| NaN | playbackRate | 重复播放频率 | 重复播放该动画的频率 | playbackRate:1 | int\nstatic integer | NaN | NaN |
| NaN | KeyframeTimeScale | 帧时长缩放 | 缩放所有关键帧时间，这有助于在不更改所有内容的情况下更快/更慢地制作动画 | KeyframeTimeScale : float | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 关键帧-根据需要创建多个 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | arm#\_[time] | 胳膊关键帧 | 添加一个关键帧。用来创建多个动作的动画。 | arm1\_5s: {x: 5, dir: 90 } | list | NaN | NaN |
| NaN | leg#\_[time] | 腿关键帧 | 添加一个关键帧。用来创建多个动作的动画。 | leg1\_5s: {x: 5, dir: 90 , alpha: 0.6} | list | NaN | NaN |
| NaN | body\_[time] | 主体关键帧 | 随时为主体添加关键帧。身体仅允许使用frame和scale | body\_4s: {frame: 4, scale: 0.5} | list | NaN | NaN |
| NaN | effect\_[time] | 效果关键帧 | 在播放动画时产生效果 | eg: effect\_2s: {x: 0,y: 5, name: explode} | list | NaN | NaN |
| NaN | turret#\_[time] | 炮塔关键帧 | 添加一个关键帧。用来创建多个动作的动画。（没有明显效果） | turret1\_5s: {x: 5, y: 90 } | list | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 多向动画（指单位转到特定角度所播放的动画） | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | direction\_units | 多向动画度数 | 播放此动画时，覆盖[graphics] animation\_direction\_units。多向动画度数\t45个代表8个方向，90个代表4个方向的动画。 | direction\_units:45 | float | NaN | NaN |
| NaN | direction\_strideX | 多向动画x向 | 覆盖[graphics] animation\_direction\_strideX，动画帧取值在方向改变时偏移。一般填0 | direction\_strideX:0 | int\nstatic integer | NaN | NaN |
| NaN | direction\_strideY | 多向动画y向 | 覆盖[graphics] animation\_direction\_strideY，动画帧在方向改变Y轴偏移偏移。与frame\_height一起使用。一般填1 | direction\_strideY:1 | int\nstatic integer | NaN | NaN |
| NaN | direction\_starting | 多向动画朝向 | 覆盖[graphics] animation\_direction\_starting，第一帧的方向，取决于您的素材。 | direction\_starting:90 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 《《《不建议使用的代码》》》 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | start int | 开始 | 开始图像框。不推荐使用，用于类似此形式的动画。animation\_TYPE\_pingPong | animation\_moving\_start:1 | int\nstatic integer | NaN | NaN |
| NaN | end int | 结束 | 结束图像帧。不推荐使用 | end:3 | int\nstatic integer | NaN | NaN |
| NaN | scale\_start float | 缩放开始 | 开始规模。不推荐使用，而是使用主体关键帧。 | scale\_start:2 | float | NaN | NaN |
| NaN | scale\_end float | 缩放结束 | 最终规模。不推荐使用，而是使用主体关键帧。 | scale\_end:2 | float | NaN | NaN |
| NaN | speed float | 速度 | 速度越小越快。仅效果开始，结束，scale\_start，scale\_end | speed:1 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 行动/隐藏行动 | Section | [action\_NAME] / [hiddenAction\_NAME] | [hiddenAction\_ID] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | text | 文本 | 界面中显示的文字 | text:chemms | string | NaN | NaN |
| NaN | textPostFix | 文本后缀 | 显示为后缀的文本，与textAddUnitName一起用于创建文本UI | text: [ textPostFix: ] \ntextAddUnitName: unitRef self.attachment(slot="${slotId}") | string | NaN | NaN |
| NaN | text\_[Language] | 文字多语言 | 界面中显示的文字，多语言 | text\_zh:chemms | string | NaN | NaN |
| NaN | description | 描述 | 选中时显示的文本，用于解释其用途。 | description:chemms翻译 | string | NaN | NaN |
| NaN | description\_[Language] | 描述 | 描述多语言。 | description\_en:shibainu | string | NaN | NaN |
| NaN | displayType | 显示类型 | 行动的显示类型正常模式为无(绿色)、集结(白色R)、升级(蓝色U)、单位队列（绿色）、建筑(绿色)、行为(蓝色)、仅信息(灰色)、无框信息、仅信息库存（灰色）\nnone, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox,infoOnlyStockpile | displayType:infoOnly | string | NaN | NaN |
| NaN | displayRemainingStockpile | 显示剩余库存 | 显示剩余库存,显示为根据资源计算可以触发操作的次数。 | displayRemainingStockpile:true | bool | NaN | NaN |
| NaN | pos | 位置 | 此动作在用户界面排序。 | pos:0 | float | NaN | NaN |
| NaN | iconImage | 图标 | 使用图像作为此动作图标。 | iconImage:shiba.png | image | NaN | NaN |
| NaN | iconExtraImage | 额外图标图像 | 使用图像作为此动作图标。和上一个一致,但显示更靠上。绘制在图标图像上方。对升级图标等有用 | iconExtraImage:shibaUPD.png | image | NaN | NaN |
| NaN | iconExtraColor | 额外图标颜色 | 将图标叠加上额外的颜色。默认为#64FFFFFF | iconExtraColor:#FFAAAAAA | color | NaN | NaN |
| NaN | iconExtraIsVisible | 额外图标显示条件 | 设置图标什么时候可显示。 | iconExtraIsVisible:if self.hasFlag(id=${slotid}) | logic boolean | NaN | NaN |
| NaN | unitShownInUI | UI中显示的单位 | 使用此单位作为动作图标。 | unitShownInUI: unitRef self.transporting(slot=0)\nunitShownInUI:shibainu | UnitType | NaN | NaN |
| NaN | setBuilt | 设置完成度 | 默认为1。填0-1之间的数字，将指定单位建造完成度。比如填0.5，执行完操作后单位自身建造完成度就成了50% | setBuilt:1 | float | NaN | NaN |
| NaN | guiBuildUnit | 界面显示单位 | 将action图标和鼠标指针改为指定单位，这就像您用建造者去造建筑，会受地形影响，可为action或路径点提供坐标。 | guiBuildUnit:turret\_artillery | unit | NaN | NaN |
| NaN | tags | 标签 | (在使用队列大小时可以用withActionTag=x来获取数量)\nUsed with queueSize(withActionTag=x) and queueItemAdded(withActionTag=x) | tags:customTag1,customTag2 | string(s) | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 单位参考-从已经存在的单位动态的组成部分，有用的/也可以被敌人看到 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | self, self.parent(), self.transporting(slot=S), self.attachment(slot=S) | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | textAddUnitName | 从单元添加名称 | 从指定单位添加名称。 | textAddUnitName:$(section.convertTo) | unit ref/unit type | NaN | NaN |
| NaN | descriptionAddFromUnit | 从单元添加描述 | 从指定单位添加单位描述。 | descriptionAddFromUnit:unitRef self.attachment(slot="unitSlot${slotId}") | unit ref/unit type | NaN | NaN |
| NaN | descriptionAddUnitStats | 从单元添加属性 | 从指定单位添加详细信息描述，比如攻击力，攻击范围。 | descriptionAddUnitStats:unitRef self.attachment(slot="unitSlot${slotId}") | unit ref/unit type | NaN | NaN |
| NaN | unitShownInUIWithHpBar | 单元在UI显示Hp条 | 在ui中显示单位血条。默认true,仅当unitShownInUI是unitRef时使用 | unitShownInUIWithHpBar:true | bool | NaN | NaN |
| NaN | unitShownInUIWithProgressBar | 单元在UI显示进度条 | 在ui中显示单位进度条。默认true,仅当unitShownInUI是unitRef时使用。如果激活，则替换HP bar | unitShownInUIWithProgressBar:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 在UI中显示/ AI的要求 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | price | 价格 | 此行为需要的价格，可以是多种资源或自定义资源。如果不满足则行为不可用。如果没设定资源类型则默认为资金。如果价格为0，AI可能很少甚至不会使用。 | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | resources | NaN | NaN |
| NaN | isActive | 可用 | 默认为true。如果为false，则会禁用操作，并在用户界面中以红色显示。 | isActive:true | LogicBoolean | NaN | NaN |
| NaN | isVisible | 可见 | 默认为true。如果false则从UI中隐藏并被禁用。 | isVisible:true | LogicBoolean | NaN | NaN |
| NaN | isLocked | 锁定 | 默认为false。如果true则禁用操作，则会显示一个锁定文本。可用作禁核或者科技树，或是条件限制。 | isLocked:true | LogicBoolean | NaN | NaN |
| NaN | isLockedMessage | 锁定消息 | 显示锁定的原因。 | isLockedMessage:您不够可爱 | LocaleString | NaN | NaN |
| NaN | isLockedAlt | 更多锁定 | 另一个原因被锁定。用于显示不同的消息。 | isLockedAlt:if not self.isFlying() | LogicBoolean | NaN | NaN |
| NaN | isLockedAltMessage | 更多锁定消息 | 显示更多锁定的原因。 | isLockedAltMessage:上天才给您施展。 | LocaleString | NaN | NaN |
| NaN | isLockedAlt2 | 更多锁定2 | 另一个原因被锁定。用于显示更多锁定的原因。 | isLockedAlt2:if self.isInWater() | LogicBoolean | NaN | NaN |
| NaN | isLockedAlt2Message | 更多锁定消息2 | 显示更多锁定的原因。 | isLockedAlt2Message:水中自然要划水了~ | LocaleString | NaN | NaN |
| NaN | allowMultipleInQueue | 允许多个队列 | 允许多次点击此行为形成队列，false时则只能点一次，不能累加。 | allowMultipleInQueue:true | bool | NaN | NaN |
| NaN | onlyOneUnitAtATime | 一次只有一个单位 | 填true时选中多个同类单位时，只有一个执行此行为。 | onlyOneUnitAtATime:true | bool | NaN | NaN |
| NaN | isGuiBlinking | 界面闪烁 | 此行为在界面中闪烁。 | isGuiBlinking:true | LogicBoolean | NaN | NaN |
| NaN | alwaysSinglePress | 总是按一次 | 点击就执行，不需要确认。默认false,不需要在手机上确认，使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口。 | alwaysSinglePress | bool | NaN | NaN |
| NaN | isAlsoViewableByAllies | 显示给盟友 | 允许盟友玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品) | isAlsoViewableByAllies:false | bool | NaN | NaN |
| NaN | isAlsoViewableByEnemies | 显示给敌人 | 允许敌方玩家看到这个单位的动作，对显示其他玩家有用(例如导抛射体数量，收集的物品) | isAlsoViewableByEnemies:false | bool | NaN | NaN |
| NaN | extraLagHidingInUI | 消除ui额外延迟 | 用于联机，在UI中立即更新而不需要从服务器确认的等待时间。 | extraLagHidingInUI:true | bool | NaN | NaN |
| NaN | streamingCost | 流式造价 | 就像价格，但在建造时逐渐消耗资金，如果在构建过程中资源耗尽，建造或生产队列将暂停。就像是红警中那样。铁锈默认是预先扣除资金。 | streamingCos:100 | int\nstatic integer(price) | NaN | NaN |
| NaN | switchPriceWithStreamingCost | 切换价格为流造价 | 快捷设置为默认资金消耗方式或为流式建造方式。建议使用模板快速将一个模组为所有单位切换流资源。 | switchPriceWithStreamingCost:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | AI使用方式 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | ai\_isDisabled | AI被禁用 | 默认为false。使用此操作停止AI使用此动作。 | ai\_isDisabled:true | LogicBoolean | NaN | NaN |
| NaN | ai\_isHighPriority | AI高优先级 | AI将优先执行此动作。 | ai\_isHighPriority:true | bool | NaN | NaN |
| NaN | ai\_considerSameAsBuilding | AI作为建筑 | 填建筑。考虑动作的优先级将会跟建筑物建优先级一样。 | ai\_considerSameAsBuilding:BU\_cq | building | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 触发器-这些触发器跳过队列并且不使用价格，忽略isLocked，buildTime等 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | autoTriggerOnEvent | 自动触发事件 | 满足此条件则自动触发。参数表：\n创建，完成且激活，销毁，杀死任何单位，队列中单位完成，队列添加项目，队列项目取消，传送，接触目标成功，玩家指定路径，队伍变更，运输新单位，卸载或移除单位，受到伤害[支持可选的(withTag=x)]，进入载具，离开载具，新消息（withTag=x），移除附属，无\ncreated, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded(1,15p9中添加了withActionTag和queueItemCancelled两个参数,用于触发动作时检测标签.), queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit，transportUnloadedOrRemovedUnit，tookDamage[支持可选的(withTag=x)],enteredTransport,leftTransport,newMessage(withTag=x),attachmentRemoved，NONE | autoTriggerOnEvent:destroyed | event type | NaN | NaN |
| NaN | alsoTriggerOrQueueActionWithTarget | 也可以使用单位参考触发或队列操作 | 更改其他触发动作的目标，默认为当前动作的目标。影响诸如 fireTurretXAtGround、spawnUnits、thisActionTarget()等。 | alsoTriggerOrQueueActionWithTarget:nearestUnit() | unit ref | NaN | NaN |
| NaN | autoTrigger | 自动触发 | 如果为true，则立即触发此操作的效果（忽略价格，isActive，isVisible，buildSpeed等） | autoTrigger: if self.overWater() | LogicBoolean | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 当在队列时(准备)时 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | buildSpeed | 建造速度 | 建造此动作所需要的时间，这个读条过程下面称之为准备以区分建造，机翻或是多个动作称之为队列。完成时的效果称为结果。 | buildSpeed:1s | time | NaN | NaN |
| NaN | refundAllQueuedItems | 取消所有队列项目 | 并返还资源 | refundAllQueuedItems:true | bool | NaN | NaN |
| NaN | removeAllQueuedItemsWithoutRefund | 移除所有未建造完成的队列项目 | 不返还资源 | removeAllQueuedItemsWithoutRefund:true | bool | NaN | NaN |
| NaN | highPriorityQueue | 高优先级队列 | 默认为false。如果为true，则此操作将跳过队列中的所有其他低优先级操作。适用于fireTurret类动作。 | highPriorityQueue:true | bool | NaN | NaN |
| NaN | canPlayerCancel | 玩家可以取消 | 玩家可以取消此动作。 | canPlayerCancel:true | bool | NaN | NaN |
| NaN | whenBuilding\_cannotMove | 建造时无法移动 | 执行操作准备时停止单位移动。适用于类似部署类动作。 | whenBuilding\_cannotMove:true | bool | NaN | NaN |
| NaN | whenBuilding\_playAnimation | 建造时播放动画 | 准备此动作时，播放[animation]中自定义的动画。 | whenBuilding\_playAnimation:AM\_shiba | animation ref | NaN | NaN |
| NaN | whenBuilding\_rotateTo | 建造时旋转 | 准备此动作时，将单位主体旋转到该方向 | whenBuilding\_rotateTo:-180 | float | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_orBackwards | 建造时旋转或反转 | 如果为true，则当角度较小时，允许从whenBuilding\_rotateTo旋转180度。 | whenBuilding\_rotateTo\_orBackwards:true | bool | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | 建造时需等待旋转完成 | 暂停准备的行为，直到旋转完成再继续。 | whenBuilding\_rotateTo\_waitTillRotated:true | bool | NaN | NaN |
| NaN | whenBuilding\_temporarilyConvertTo | 建造时临时转换为 | 准备此操作时临时转换为另一个单位。原始单位的操作将保留。 | whenBuilding\_temporarilyConvertTo:TEM\_shiba | unit ref | NaN | NaN |
| NaN | whenBuilding\_temporarilyConvertTo\_keepFields | 建造时保留字段 | 不要在使用whenbuilding\_temporaryconvertto时更改这些字段(无论是从或到)，这对setUnitStats很有用 | whenBuilding\_temporarilyConvertTo\_keepFields:maxHp | fields | NaN | NaN |
| NaN | whenBuilding\_triggerAction | 建造时触发动作 | 准备时触发另一个动作 | whenBuilding\_triggerAction:ACT\_shiba | action | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_aimAtActionTarget | 建造时转向瞄准目标 | 准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的 | whenBuilding\_rotateTo\_aimAtActionTarget:true | bool | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_rotateTurretX | 建造时转向指定炮塔 | 准备此操作时转向指定炮塔。 | whenBuilding\_rotateTo\_rotateTurretX:shi | turret ref | NaN | NaN |
| NaN | spawnEffectsOnQueue | 队列产生效果 | 动作准备开始时产生的效果。 | spawnEffectsOnQueue:custom:shiba | effect ref | NaN | NaN |
| NaN | playSoundToPlayerOnQueue | 队列播放声音 | 动作准备时播放给玩家的声音。 | playSoundToPlayerOnQueue:shiba.ogg | file (sound(s)) | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 杂项结果/结果（发生的情况）\n（注意：要显示的动作必须至少有一项结果，或者有isVisible:true） | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | requireConditional | 需要条件 | 如果结果为false，则跳过此操作所有结果。 | requireConditional:if not numberOfUnitsInTeam(withTag='shiba',withinRange=233,greaterThan=0) | LogicBoolean | NaN | NaN |
| NaN | convertTo | 转换成 | 将您的单位转换为另一个单位。许多属性被保留。 | convertTo:SC\_shiba | unit ref | NaN | NaN |
| NaN | convertTo\_keepCurrentTags | 转换时保留标签 | 将单位转换为另一个单位。并且保留拥有的标签。 | convertTo\_keepCurrentTags:true | boolean | NaN | NaN |
| NaN | convertTo\_keepCurrentFields | 转换时保留字段 | 转换时不要更改这些字段，这在setUnitStats中很有用 | convertTo\_keepCurrentFields:maxHp | fields | NaN | NaN |
| NaN | addEnergy | 增加能量 | 为单位增加能量。需要设置了energyMax，否则不起作用。（与addResources相同：energy = X） | addEnergy:1 | float | NaN | NaN |
| NaN | addResources | 添加资源 | 操作完成后，添加这些资源。 | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | resources | NaN | NaN |
| NaN | addResourcesScaledByAIHandicaps | 根据AI难度添加资源。 | 与addResources类似，但根据AI难度级别增加或减少。比例：最简单40%、简单70%、中等100%、困难140%、很困难180%、不可能370% | addResourcesScaledByAIHandicaps:true/[resource] | bool/resource | NaN | NaN |
| NaN | addResourcesWithLogic | 用逻辑添加资源 | 与addResources类似，但允许对资源值使用逻辑 | addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) | LogicOperation | NaN | NaN |
| NaN | setResourcesWithLogic | 用逻辑设置资源 | 将目标资源设置为此值，而不是添加。小心对全局资源使用。 | setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2 | LogicOperation | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | ++++++++++ | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | deleteSelf | 删除自身 | 删除执行此操作的单位，没有死亡效果，不执行死亡触发。 | deleteSelf:true | LogicBoolean | NaN | NaN |
| NaN | resetCustomTimer | 重置自定义计时器 | 重置自定义计时器，与self.customTimer() | resetCustomTimer:if self.customTimer(laterThanSeconds=5) | LogicBoolean | NaN | NaN |
| NaN | setBodyRotation | 设置躯干旋转 | 设置单位旋转度数。单位朝右为0度。因为是结果而不是准备过程，所以很突然。（支持动态数字比如memory） | setBodyRotation:memory.dir | DynamicsDigital | NaN | NaN |
| NaN | setUnitStats | 设置单位状态 | 字段值。允许在不转换的情况下动态更改选定的字段数量。支持=/+=/-=，动态数学/逻辑。可以改变的领域:maxHp(血量上限)，hp(血量)，selfRegenRate(自身回血速度)，maxShield(护盾上限)，shield(护盾)，shieldRegen(护盾恢复速度)，maxEnergy(能量上限)，energy(能量)，armour(装甲)，mass(质量)，shootDelayMultiplier(开火间隔倍数)，shootDamageMultiplier(开火伤害倍数)，movespeed(最大移动速度)，maxTurnSpeed(最大转弯速度)，maxAttackRange(最大攻击距离)，nanoRange(修复范围)，fogOfWarSightRange(迷雾视野)，nanoFactorySpeed(工厂制造速度倍数)，targetHeight(单位最终高度)， | setUnitStats: maxHp+=self.energy+100, hp+=50, shieldRegen=0.5 | fields values | NaN | NaN |
| NaN | resetUnitStats | 重置单位状态 | 将setUnitStats所做的更改重置为基本值 | resetUnitStats:true | boolean | NaN | NaN |
| NaN | shrinkArrays | 简化数组 | 跟数组有关联 | NaN | NaN | NaN | NaN |
| NaN | setUnitMemory | 设置单位内存 | 键值对。改变此单元的内存，值可以用逻辑设定。内存必须首先用defineUnitMemory定义。 | setUnitMemory: """\ncustomText=memory.customText+'hello',\nnukeActive=true, \nnextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')\n""" | key value pairs | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-连锁动作 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | alsoTriggerAction | 也执行动作 | 触发其他动作的结果。忽略行动的要求。 | alsoTriggerAction: addCredits, playSound | action refs | NaN | NaN |
| NaN | alsoQueueAction | 也添加进队列 | 将另一个动作添加到序列中。忽略行动的要求 | alsoQueueAction | action refs | NaN | NaN |
| NaN | alsoTriggerOrQueueActionConditional | 也执行队列或需执行条件 | 将此操作添加到序列。如果条件不满足(false)则忽略alsoQueueAction。默认true. | alsoTriggerOrQueueActionConditional:if not self.isFlying() | LogicBoolean | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-声音 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | playSoundAtUnit | 播放声音至单位 | 动作结束时在当前位置播放声音。 | playSoundAtUnit:shiba.ogg | file (sound(s)) | NaN | NaN |
| NaN | playSoundGlobally | 播放声音至全图 | 播放全局声音，所有玩家都能听到。 | playSoundGlobally:shiba.ogg:0.5 | file (sound(s)) | NaN | NaN |
| NaN | playSoundToPlayer | 播放声音至玩家 | 播放声音，只有自己能听到。 | playSoundToPlayer:shiba.ogg:999 | file (sound(s)) | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-炮塔发射抛射体 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | fireTurretXAtGround | 指定攻击地面炮塔 | 使用此炮塔攻击玩家所指定的地面。 | fireTurretXAtGround: nukeSilo | turret ref | NaN | NaN |
| NaN | fireTurretXAtGround\_withOffset | 指定攻击地面坐标 | 攻击指定坐标所在地面，不需要手动选择， | fireTurretXAtGround\_withOffset: 0,0 | point\nstatic integer | NaN | NaN |
| NaN | fireTurretXAtGround\_withProjectile | 指定攻击地面抛射体 | 设定使用的抛射体，如果不设置则为炮塔默认的抛射体。 | fireTurretXAtGround\_withProjectile:PRO\_1 | projectile ref | NaN | NaN |
| NaN | fireTurretXAtGround\_withTarget | 指定攻击目标 | 炮塔瞄准指示的单位或标记的位置发射 | fireTurretXAtGround\_withTarget:self.lastDamagedBy | unitref | NaN | NaN |
| NaN | fireTurretXAtGround\_count | 指定攻击地面数量 | 设置发射的抛射体数量，默认为1 | fireTurretXAtGround\_count:9 | int\nstatic integer | NaN | NaN |
| NaN | fireTurretXAtGround\_onlyOverPassableTileOf | 指定攻击地面类型 | 设置手动选择的地面需要满足这种运动方式。列表：无，陆地，建筑，空军，水。两栖，跨悬崖，跨悬崖和度水。\nNONE LAND BUILDING AIR WATER HOVER OVER\_CLIFF OVER\_CLIFF\_WATER | fireTurretXAtGround\_onlyOverPassableTileOf:LAND | string | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-生成单位 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | spawnUnits | 产生单位 | 产生指定单位，可用是多种。 | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) | units | NaN | NaN |
| NaN | spawnEffects | 产生效果 | 产生指定效果 | spawnEffects:custom:shiba | effect ref | NaN | NaN |
| NaN | produceUnits | 生产单位 | 类似spawnUnits，但是单位像正常生产一样，并获得路径的移动。1.13只对非建筑物生成的单位有效。 | produceUnits:bigshibainu | units | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-位置 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | offsetSelfAbsolute | 自身位置偏移 | 使用时将修改单位当前位置，以单位为中心的绝对坐标。 | offsetSelfAbsolute: 0, 0, 40 [x,y,height] | int\nstatic integer list | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 成果-运输变化 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | addUnitsIntoTransport | 添加单位到载具 | 将单位添加到运输槽中，在添加之前会检查空间是否够。 | addUnitsIntoTransport: tank\*3, heavyTank | unit list | NaN | NaN |
| NaN | deleteNumUnitsFromTransport | 从载具中删除单位数 | 从载具中删除指定数量单位。 | deleteNumUnitsFromTransport:3 | int\nstatic integer | NaN | NaN |
| NaN | deleteNumUnitsFromTransport\_onlyWithTags | 从载具删除带标签单位 | 从载具中删除具有此标签的指定数量单位。 | deleteNumUnitsFromTransport\_onlyWithTags:cat | string | NaN | NaN |
| NaN | startUnloadingTransport | 开始卸载单位 | 开始卸载单位 | startUnloadingTransport:true | bool | NaN | NaN |
| NaN | forceUnloadTransportNow | 强制卸载单位 | 立即强制卸载单位 | forceUnloadTransportNow:true | bool | NaN | NaN |
| NaN | forceUnloadTransportNow\_onlyOnSlot | 强制卸载指定槽位单位 | 强制卸载指定槽位单位 | forceUnloadTransportNow\_onlyOnSlot:1 | int\nstatic integer | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-路径点 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | clearAllWaypoints | 清除所有路径点 | 清除当前所有路径。 | clearAllWaypoints:true | bool | NaN | NaN |
| NaN | clearActiveWaypoint | 清除当前路径点 | 清除当前路径，也就是停止当前动作，执行下一个路径点。 | clearActiveWaypoint:true | bool | NaN | NaN |
| NaN | addWaypoint\_type | 添加路径点类型 | 添加的路径点类型。值列表：移动，移动攻击，防守，进入载具，主动装载，攻击，回收，维修，靠近目标，建造，跟随，设置被动目标，卸载至，巡逻，防守至，触发行动，在范围内时触发行动\nmove, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow，setPassiveTarget，unloadAt，patrol，guardAt，triggerAction，triggerActionWhenInRange | addWaypoint\_type:move | way point\nstatic integer type | NaN | NaN |
| NaN | addWaypoint\_unitType | 添加路径点所建造的单位类型 | 用于让当前单位去建造指定单位。仅用于addWaypoint\_type:build | addWaypoint\_unitType:BU\_shiba | building | NaN | NaN |
| NaN | addWaypoint\_prepend | 添加路径点序列位置 | 添加到路径点的开头或结尾 | addWaypoint\_prepend:true | bool | NaN | NaN |
| NaN | addWaypoint\_triggerActionIfFailed | 添加路径点失败触发 | 如果target\_nearestUnit找不到匹配项，因此无法添加路径点，则触发此操作 | addWaypoint\_triggerActionIfFailed:act\_fail | actions | NaN | NaN |
| NaN | addWaypoint\_triggerActionIfMatched | 添加路径点匹配触发 | 如果操作添加的路径点是有效的，则执行指定操作。 | addWaypoint\_triggerActionIfMatched:act\_suc | actions | NaN | NaN |
| NaN | addWaypoint\_maxTime | 添加路径点检索时间 | 如果此路径点这么久还无法执行完成，则取消。 | addWaypoint\_maxTime:10s | time | NaN | NaN |
| NaN | addWaypoint\_target\_nearestUnit\_tagged | 添加路径点检索标签 | 添加的路径点目标为靠近有此标签的单位。 | addWaypoint\_target\_nearestUnit\_tagged:tag\_shiba | tags | NaN | NaN |
| NaN | addWaypoint\_target\_nearestUnit\_team | 添加路径点靠近队伍 | 添加的路径点目标需要的所属方：己方|除自己外任何|中立|除自己外盟友|盟友|敌人|任何，own|notOwn|neutral|allyNotOwn|ally|enemy|any | addWaypoint\_target\_nearestUnit\_team:own | relation | NaN | NaN |
| NaN | addWaypoint\_target\_nearestUnit\_maxRange | 添加路径点检索范围 | 添加的路径点靠近某目标时考虑的最大范围。 | addWaypoint\_target\_nearestUnit\_maxRange:999 | float | NaN | NaN |
| NaN | addWaypoint\_target\_mapMustBeReachable | 添加路径点路径可达 | 添加的路径点靠近某目标时必须是有可到达路径的。 | addWaypoint\_target\_mapMustBeReachable:true | bool | NaN | NaN |
| NaN | addWaypoint\_target\_fromReference | 添加路径点来自参考 | 添加路径点来自单位信息引用。 | addWaypoint\_target\_fromReference: self.memory.lastDock | unit ref | NaN | NaN |
| NaN | addWaypoint\_position\_offsetFromSelf | 添加路径点坐标偏移 | 添加的路径点相对于自身偏移的坐标。 | addWaypoint\_position\_offsetFromSelf:10,10 | point\nstatic integer | NaN | NaN |
| NaN | addWaypoint\_position\_fromAction | 添加路径点动作坐标 | 将当前动作指定的坐标添加进路径序列中。 | addWaypoint\_position\_fromAction:true | bool | NaN | NaN |
| NaN | addWaypoint\_position\_randomOffsetFromSelf | 添加路径点随机偏移 | 添加坐标进路径点时的随机值。 | addWaypoint\_position\_randomOffsetFromSelf:5,5 | int\nstatic integer(s) | NaN | NaN |
| NaN | addWaypoint\_position\_relativeOffsetFromSelf | 添加路径点相对偏移 | 添加路径点位置相对自身偏移量。 | addWaypoint\_position\_relativeOffsetFromSelf:10,10 | int\nstatic integer(s) | NaN | NaN |
| NaN | addWaypoint\_target\_randomUnit\_tagged | 添加指定标签的随机单位 | 添加路径点单位为指定标签的随机单位 | addWaypoint\_target\_randomUnit\_tagged:shibaInu | unit | NaN | NaN |
| NaN | addWaypoint\_target\_randomUnit\_team | 添加指定队伍的随机单位 | 添加路径点单位为指定队伍的随机单位 | addWaypoint\_target\_randomUnit\_team:own | string | NaN | NaN |
| NaN | addWaypoint\_target\_randomUnit\_maxRange | 添加指定范围的随机单位 | 添加路径点单位为指定范围的随机单位 | addWaypoint\_target\_randomUnit\_maxRange:999 | int\nstatic integer | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-冷却 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | addAllActionCooldownsTime | 增加所有动作冷却时间 | 增加所有action的冷却时间。 | addAllActionCooldownsTime:10s | time | NaN | NaN |
| NaN | addAllActionCooldownsFor | 对于所有动作而言增加冷却时间 | 增加所有action的冷却时间。 | addAllActionCooldownsFor:10s | time | NaN | NaN |
| NaN | addActionCooldownTime | 增加动作冷却时间 | 增加动作冷却时间，制作先充能再使用的action更加容易了。 | addActionCooldownTime:10s | time | NaN | NaN |
| NaN | addActionCooldownsFor | 对于动作而言增加冷却时间 | 增加动作冷却时间，制作先充能再使用的action更加容易了。 | addActionCooldownsFor:10s | time | NaN | NaN |
| NaN | addActionCooldownApplyToActions | 添加指定动作冷却时间 | action id，设置addActionCooldownTime的目标。默认情况下是当前操作本身。 | addActionCooldownApplyToActions: | action ids | NaN | NaN |
| NaN | clearAllActionCooldowns | 清除所有动作冷却时间 | 清除所有动作冷却时间，使其立即可用。 | clearAllActionCooldowns:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-动画 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | playAnimation | 播放动画 | 播放[animation\_xx]类型动画。 | playAnimation:shiba | animation ref | NaN | NaN |
| NaN | playAnimationIfNotPlaying | 如果未播放动画则播放动画 | 如果没有播放该动画，就播放该动画 | playAnimationIfNotPlaying:shiba | animation ref | NaN | NaN |
| NaN | finishPlayingLastAnimation | 完成最后一个动画 | 完成最后一个动画，包括融合 | finishPlayingLastAnimation:true | bool | NaN | NaN |
| NaN | stopLastAnimation | 停止最后一个动画 | 停止最后一个动画，跳过融合 | stopLastAnimation:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-中立 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | switchToNeutralTeam | 切换至中立队伍 | 将队伍更改为中立。该队伍与其他所有队伍结盟。除非使用[core]stayNeutral:true，否则它将被附近的单位捕获。 | switchToNeutralTeam:true | boolean | NaN | NaN |
| NaN | switchToAggressiveTeam | 切换至侵略性队伍 | 将此单位队伍更改为侵略性的内置队伍。不能被其它单位捕获。 | switchToAggressiveTeam:true | boolean | NaN | NaN |
| NaN | switchToTeam | 切换至特定队伍 | 切换到小队id。从0开始。(中立-1，敌对中立-2) | switchtoteam:-1 | Logicint\nstatic integer | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-从其他单位获取资源，多数代码我并没有实验。 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | takeResources | 提取资源 | 提取资源，至少写一种资源。 | takeResources: hp=5, gold=10 | customPrice | NaN | NaN |
| NaN | takeResources\_includeUnitsInTransport | 提取资源包括载具内 | 提取资源，包括载具内单位。 | takeResources\_includeUnitsInTransport:true | bool | NaN | NaN |
| NaN | takeResources\_includeParent | 提取资源包括父单位或载具 | 提取资源，包括父单位和运输载具。 | takeResources\_includeParent:true | bool | NaN | NaN |
| NaN | takeResources\_includeReference | 提取资源包括引用 | 提取资源包括指定单位。 | [action]takeResources\_includeReference: self.lastDamagedBy | unit ref | NaN | NaN |
| NaN | takeResources\_includeUnitsWithinRange | 提取资源范围 | 提取资源，在此范围内。 | takeResources\_includeUnitsWithinRange:350 | float | NaN | NaN |
| NaN | takeResources\_includeUnitsWithinRange\_team | 提取资源队伍 | 提取在此范围内队伍的资源。与“includeUnitsWithinRange”一起使用，默认为own。可以是：\n己方|除自己外任何|中立|除自己外盟友|盟友|敌人|任何，own|notOwn|neutral|allyNotOwn|ally|enemy|any | takeResources\_includeUnitsWithinRange\_team:own | TeamRelation | NaN | NaN |
| NaN | takeResources\_excludeUnitsWithoutTags | 提取资源标签 | 提取资源，但排除没有此标签的单位。 | takeResources\_excludeUnitsWithoutTags:TAG\_shiba | tags | NaN | NaN |
| NaN | takeResources\_excludeUnitsWithTheseResources | 提取资源排除资源 | 提取资源，不包括拥有这些资源的单位。 | takeResources\_excludeUnitsWithTheseResources:CP\_shiba | customPrice | NaN | NaN |
| NaN | takeResources\_excludeUnitsWithoutAllResources | 提取资源排除不足 | 提取资源，排除缺乏资源者。默认为true. | takeResources\_excludeUnitsWithoutAllResources:true | bool | NaN | NaN |
| NaN | takeResources\_triggerActionIfAnyCollected | 提取资源成功触发 | 如果有任何收集，则触发动作。 | takeResources\_triggerActionIfAnyCollected:ACT\_shiba | action refs | NaN | NaN |
| NaN | takeResources\_triggerActionIfNoneCollected | 提取资源失败触发 | 如果没有收集，则触发操作。 | takeResources\_triggerActionIfNoneCollected:act\_shibainu | action refs | NaN | NaN |
| NaN | takeResources\_discardCollected | 提取资源删除 | 从目标中获取资源，但不向自身添加也就是删除。 | takeResources\_discardCollected:true | bool | NaN | NaN |
| NaN | takeResources\_keepResourcesOnTarget | 提取资源克隆 | 不从目标添加或删除资源。但克隆资源。与takeResources\_discardCollected和takeResources\_triggerActionIfAnyCollected一起使用以创建资源检测器。 | takeResources\_keepResourcesOnTarget:true | bool | NaN | NaN |
| NaN | takeResources\_maxUnits | 提取资源目标量 | 最多从多少单位提取资源，默认为1。 | takeResources\_maxUnits:1 | int\nstatic integer | NaN | NaN |
| NaN | takeResources\_directTransferStoppingAtZero | 提取资源直接转换至零 | 提取资源直接转换至0,用于完全转换。如果目标上的资源少于转帐金额，则只有剩余的资源将被转帐。不支持使用其他一些takeResources\_\*代码 | takeResources\_directTransferStoppingAtZero:true | bool | NaN | NaN |
| NaN | takeResources\_searchOnly | 获取资源仅供搜索 | #新增快捷方式 eg. (\ntakeResources\_maxUnits=200\ntakeResources\_discardCollected=true\ntakeResources\_keepResourcesOnTarget=true\n)\n注意:填写本代码时必须包含至少一下的其中一个代码\ntakeResources\_includeUnitsWithinRange:# | takeResources\_searchOnly:true | bool | NaN | NaN |
| NaN | takeResources\_saveFirstUnitToCustomTarget1 | 提取资源保存第一个单元自定义目标1 | 提取资源保存第一个单元一定是自定义目标1 | takeResources\_saveFirstUnitToCustomTarget1:trur | bool | NaN | NaN |
| NaN | takeResources\_saveFirstUnitToCustomTarget2 | 提取资源保存第一个单元自定义目标2 | 提取资源保存第一个单元一定是自定义目标2 | takeResources\_saveFirstUnitToCustomTarget2:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-转换资源 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | convertResource\_from | 转换资源来源 | 将此资源转换资源为别的资源。 | convertResource\_from:SP\_cat | customResource | NaN | NaN |
| NaN | convertResource\_to | 转换资源至 | 将资源转后为此资源，要提供的自定义资源的名称 | convertResource\_to:SP\_shiba | customResource | NaN | NaN |
| NaN | convertResource\_minAmount | 转换资源至少 | 如果来源中资源小于该数量，则跳过。默认为0。在大多数情况下可能不需要。 | convertResource\_minAmount:0 | int\nstatic integer | NaN | NaN |
| NaN | convertResource\_maxAmount | 转换资源至多 | “来源资源”和“转换后资源”之间的最大转化量 | convertResource\_maxAmount:999 | int\nstatic integer | NaN | NaN |
| NaN | convertResource\_multiplyAmountBy | 转换资源倍率 | 资源转换倍率，不影响提取的数量。默认值为1。 | convertResource\_multiplyAmountBy:0.1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-设置资源 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | resourceAmount | 资源类型 | 自定义资源的名称，使用以下3个键进行设置。所有键都是可选的，可以一起使用。 | resourceAmount:SP\_cat | customResource | NaN | NaN |
| NaN | resourceAmount\_setValue | 资源类型设置数值 | 设置此资源的绝对值，忽略资源的当前值。默认忽略。 | resourceAmount\_setValue:99 | float | NaN | NaN |
| NaN | resourceAmount\_addOtherResource | 资源类型添加至 | 添加到其中的另一个自定义资源的名称。可以不使用resourceAmount\_setValue，只是添加资源。或者使用resourceAmount\_setValue:0复制一个资源值。 | resourceAmount\_addOtherResource:SP\_shiba | customResource | NaN | NaN |
| NaN | resourceAmount\_multiplyBy | 资源类型乘数 | 默认值为1。将当前资源值乘上此值。 | resourceAmount\_multiplyBy:1 | float | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-附件(附属，子单位)更改 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | attachments\_addNewUnits | 附属添加单位 | 添加单位作为其子单位，需要定义附属位置。 | attachments\_addNewUnits:shiba | unit | NaN | NaN |
| NaN | attachments\_deleteNumUnits | 附属删除单位数 | 删除单位数量 | attachments\_deleteNumUnits:1 | int\nstatic integer | NaN | NaN |
| NaN | attachments\_onlyOnSlots | 附属添加于槽位 | 只将附属物添加于特定的槽位 | attachments\_onlyOnSlots:SL\_shiba | string | NaN | NaN |
| NaN | disconnectFromParent | 脱离父单位 | 用于子单位脱离父单位 | disconnectFromParent:true | bool | NaN | NaN |
| NaN | attachments\_unload | 卸载附属 | 卸载所有附属。可以与attachments\_onlyonslot一起使用。与运输单位卸载相同 | attachments\_unload:true | bool | NaN | NaN |
| NaN | attachments\_disconnect | 附属断开连接 | 断开所有现在所在位置的附属。可以与attachments\_onlyonslot一起使用。 | attachments\_disconnect:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-标签变更 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | temporarilyAddTags | 临时标签添加 | 将标签添加到单位，直到转换或重置。 | temporarilyAddTags:TEM\_PD\_shiba | tags | NaN | NaN |
| NaN | temporarilyRemoveTags | 临时标签删除 | 从单位上删除标签，直到将其转换或重置。 | temporarilyRemoveTags:TEM\_PD\_shiba | tags | NaN | NaN |
| NaN | resetToDefaultTags | 标签重置 | 重置为默认标签。 | resetToDefaultTags:true | bool | NaN | NaN |
| NaN | addGlobalTeamTags | 添加全局标签 | 为玩家的团队添加此全局标签。与self.globalTeamTags()一起使用可创建解锁和升级。 | addGlobalTeamTags:TEM\_UP\_shiba | tags | NaN | NaN |
| NaN | removeGlobalTeamTags | 移除全局标签 | 从玩家队伍中删除此全局标签。 | removeGlobalTeamTags:TEM\_UP\_shiba | tags | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-显示讯息 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | showMessageToPlayer | 发送消息至玩家 | 向玩家个人发送信息。自己发给自己。 | showMessageToPlayer:对面傻蛋，您看不到！ | string | NaN | NaN |
| NaN | showMessageToPlayer\_[Language] | 发送消息至玩家 | 向玩家个人发送信息。自己发给自己。多语言版。注意:这种格式是支持几乎所有字符串显示给玩家，即使当引用不显示它 | showMessageToPlayer\_es:text test shiba\nshowMessageToPlayer\_zh:文本测试chemms | string | NaN | NaN |
| NaN | showMessageToAllPlayers | 发送消息至所有 | 向所有玩家发送消息。 | showMessageToAllPlayers:对面傻猫，队友说是不是？ | string | NaN | NaN |
| NaN | showMessageToAllEnemyPlayers | 发送消息给所有敌人 | 发送消息给所有敌人。 | showMessageToAllEnemyPlayers:我投靠，收不？ | string | NaN | NaN |
| NaN | showQuickWarLogToPlayer | 发送战争快报至玩家 | 向玩家个人发送战争快报。（在左下角） | showQuickWarLogToPlayer:对面制杖，您看不到。 | string | NaN | NaN |
| NaN | showQuickWarLogToAllPlayers | 发送战争快报至所有 | 向所有玩家发送战争快报。（在左下角） | showQuickWarLogToAllPlayers:这是单位全局嘲讽。 | string | NaN | NaN |
| NaN | debugMessage | 调试信息 | 仅在启用调试模式的沙盒模式中显示。 | debugMessage:[string] | string | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-发送数据 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | sendMessageTo | 发送信息至 | 填单位/单位引用 | sendMessageTo:self.lastDamagedBy | unit ref | NaN | NaN |
| NaN | sendMessageWithData | 发送信息与数据 | 填变量=XXX | sendMessageWithData:XXX=XXX | variable List（变量菜单） | NaN | NaN |
| NaN | sendMessageWithTags | 发送标签 | 填指定标签 | sendMessageWithTags:cheems | tag List（标签菜单） | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 结果-设置自定义目标 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | setCustomTarget1 | 设置自定义目标1 | 建议填单位引用 | setCustomTarget1:self | unit ref/unit | NaN | NaN |
| NaN | setCustomTarget2 | 设置自定义目标2 | 建议填单位引用 | setCustomTarget2:self | unit ref/unit | NaN | NaN |
| NaN | swapCustomTarget1And2 | 交换自定义目标1和2 | 填布尔值 | swapCustomTarget1And2:true | bool | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 1.15p11新增 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | setHeight | 设置高度 | 新增设置高度，可以使用逻辑 | setHeight:self.hp | DynamicDigital(动态数字) | NaN | NaN |
| NaN | teleportTo | 传送到 | 传送到(填单位参考) | teleportTo:nearestUnit | unit ref/mark(单位引用/标记) | NaN | NaN |
| NaN | transportTargetNow | 主动装运目标 | 主动装运目标(填单位参考) | transportTargetNow:nearestUnit | unit ref/mark(单位引用/标记) | NaN | NaN |
| NaN | id | 编号 | 允许在单位之间转换时更容易的连接动作（action的id，应该有对应的引用词） | id:1 | int\nstatic integer | NaN | NaN |
| NaN | fireTurretXAtGround\_showGuideDecals | 指定攻击地面时显示贴花 | 当选择发射位置时显示贴花(参考核抛射体选择发射地点时长按显示) | fireTurretXAtGround\_showGuideDecals:<decal:name> | decal name(贴花名称) | NaN | NaN |
| NaN | autoTriggerOnEventRecursionLimit | 自动触发事件递归限制(默认为1) | 同一个事件重复触发的限制次数，默认为1 | autoTriggerOnEventRecursionLimit:1 | int\nstatic integer | NaN | NaN |
| NaN | takeResources\_triggerActionForEach | 为提取资源找到的每个单位(提取目标)调用这个动作 | 引用动作(找到带有资源的目标单位并提取时) | takeResources\_triggerActionForEach:<action:name> | action name(行动名称) | NaN | NaN |
| NaN | aiTags | AI的标签 | 随便填一个得了(专门给AI用的) | aiTags:doge | string(s) | NaN | NaN |
| NaN | aiUse | AI对该行动的使用方式 | 可填：auto(自动)，launch（发射），launchAmmo（增加弹药），disabled（残缺），upGrade(升级)，movementChange(运动改变)，sameAsBuilding（与建筑物相同） | aiUse:launch | use type | NaN | NaN |
| NaN | alsoTriggerActionRepeat | 重复"也触发行动(alsoTriggerAction)"调用 | Dynamic number (Repeats the alsoTriggerAction call, index changed on each repeat) - Useful to create loops or work with arrays\n（动态数字）（每次重复时改变索引 用于创建循环或处理数组） | alsoTriggerActionRepeat:self.hp | DynamicDigital(动态数字) | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 生成单位 | 位于括号中 | Spawn units line | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | spawnUnits | 产生单位 | 用于action生成单位，大多数单位的生成键都支持多个单位且带有参数。注意：与spawnUnit不能混用spawnUnit用于抛射体。 | spawnUnits:crates\*10(neutralTeam=true), tank(spawnChance=0.5) | unitlist | NaN | NaN |
| NaN | neutralTeam | 中立 | 生成这个单位归属于中立队伍而不是所属玩家。 | spawnUnits:cat(neutralTeam=true) | bool | NaN | NaN |
| NaN | aggressiveTeam | 敌对队伍 | 生成这个单位归属于敌对中立队伍而不是所属玩家。 | spawnUnits:cat(aggressiveTeam=true) | bool | NaN | NaN |
| NaN | setToTeamOfLastAttacker | 所属攻击者 | 生成单位归属于攻击者。（在[core] unitsSpawnedOnDeath上有用） | spawnUnits:cat(setToTeamOfLastAttacker=true) | bool | NaN | NaN |
| NaN | spawnChance | 产生几率 | 生成这个单位几率。 默认为1。 | spawnUnits:cat(spawnChance=0.5) | float | NaN | NaN |
| NaN | spawnSource | 产生源 | 改变产生地点和产生单位的队伍到这个单位参考。 | [action]spawnUnits: tank(spawnSource=memory.lastLocation) | unit ref | NaN | NaN |
| NaN | maxSpawnLimit | 最大生成数量 | 与spawnChance一起使用时，总共可以产生的最大单位数。 | spawnUnits:treeA(spawnChance=0.5, maxSpawnLimit=1) | int\nstatic integer | NaN | NaN |
| NaN | gridAlign | 对齐网格 | 将生成位置与网格对齐，对建筑物有用 | spawnUnits:cat(gridAlign=true, skipIfOverlapping=true) | bool | NaN | NaN |
| NaN | skipIfOverlapping | 跳过条件 | 如果在无效的位置忽略单位生成。 例如基于LAND的单位不会产生在水中。 | spawnUnits:cat(gridAlign=true, skipIfOverlapping=true) | bool | NaN | NaN |
| NaN | falling | 降落 | 让单位在生成时从天而降 | spawnUnits:cat(falling=true) | bool | NaN | NaN |
| NaN | offsetX | X偏移 | 生成单位位置X偏移量，单位像素 | spawnUnits:cat(offsetX=10,offsetY=10) | float | NaN | NaN |
| NaN | offsetY | Y偏移 | 生成单位位置Y偏移量 | spawnUnits:cat(offsetX=10,offsetY=10) | float | NaN | NaN |
| NaN | offsetRandomX | X随机偏移 | 生成单位位置X随机偏移量 | spawnUnits:cat(offsetRandomX=10,offsetRandomY=10) | float | NaN | NaN |
| NaN | offsetRandomY | Y随机偏移 | 生成单位位置Y随机偏移量 | spawnUnits:cat(offsetRandomX=10,offsetRandomY=10) | float | NaN | NaN |
| NaN | offsetRandomXY | XY随机偏移 | 生成出的抛射体在两个方向的偏移随机偏移，使真正的在一个区域随机化。 | spawnUnits:cat(offsetRandomXY=10) | float | NaN | NaN |
| NaN | offsetRandomDir | 角度随机偏移 | 生成单位时角度随机偏移量 | spawnUnits:cat(offsetRandomDir=10) | dir | NaN | NaN |
| NaN | offsetHeight | 高度偏移 | 生成此单位的高度偏移量。 | spawnUnits:cat(offsetRandomDir=10) | int\nstatic integer | NaN | NaN |
| NaN | offsetDir | 角度偏移 | 生成单位时角度偏移量。单位度。 | spawnUnits:cat(offsetHeight=10) | dir | NaN | NaN |
| NaN | addResources | 增加资源 | 给生成单位这些资源，可用于设置触发动作的标志 | spawnUnits:crates(addResource=gold:30|stone:10, spawnChance=0.5) | customResource | NaN | NaN |
| NaN | transportedUnitsToTransfer | 载员至载具 | 将指定数量的单元放入生成出的单元的运输槽位中。 | spawnUnits:transporter(transportedUnitsToTransfer=5) | int\nstatic integer | NaN | NaN |
| NaN | copyWaypointsFrom | 复制路径来自 | 复制目标上的所有路径点到创建的单位。 | spawnUnits: tank(copyWaypointsFrom=self) | unit ref | NaN | NaN |
| NaN | alwaysStartDirAtZero | 朝向总是为零 | 生成出的单位朝向总是设置为零度。即朝右。 | spawnUnits:wolf(alwayStartDirAtZero=true) | bool | NaN | NaN |
| NaN | alwayStartDirAtZero | 朝向总是零度 | 生成出的单位朝向总是设置为零度。即朝右。 | spawnUnits:wolf(alwayStartDirAtZero=true) | bool | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 生成抛射体 | 位于括号中 | Spawn Projectiles line | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | NaN | NaN | 大多数生成抛射体代码可用于抛射体参数。 | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) | NaN | NaN | NaN |
| NaN | spawnChance | 产生机会 | 抛射体产生几率，默认为1 | spawnProjectilesOnCreate:1(spawnChance=0.5) | float | NaN | NaN |
| NaN | maxSpawnLimit | 最大产生限制 | 抛射体的最大产生数量 | spawnProjectilesOnCreate:1(maxSpawnLimit=4) | int\nstatic integer | NaN | NaN |
| NaN | recursionLimit | 递归限制 | 用于限制抛射体生成抛射体自身的上限,而不会产生死循环。这对自动生成很有用，因为不会无限生成，有利于链条爆炸 | spawnProjectilesOnCreate:1(recursionLimit=5) | int\nstatic integer | NaN | NaN |
| NaN | offsetX | 偏移量x | 生成出的抛射体的x轴偏移量 | spawnProjectilesOnCreate:1(offsetX=10) | float | NaN | NaN |
| NaN | offsetY | 偏移量y | 生成出的抛射体的y轴偏移量 | spawnProjectilesOnCreate:1(offsetY=11) | float | NaN | NaN |
| NaN | offsetRandomX | 偏移随机X | 生成出的抛射体的x轴的随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomX=12) | float | NaN | NaN |
| NaN | offsetRandomY | 偏移随机Y | 生成出的抛射体的y轴的随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomY=13) | float | NaN | NaN |
| NaN | offsetRandomXY | 偏移随机XY | 生成出的抛射体在两个方向的偏移随机偏移，使真正的在一个区域随机化。 | spawnProjectilesOnCreate:1(offsetRandomXY=14) | float | NaN | NaN |
| NaN | offsetHeight | 偏移高度 | 生成出的抛射体的z轴也就是高度偏移 | spawnProjectilesOnCreate:1(offsetHeight=15) | float | NaN | NaN |
| NaN | offsetDir | 偏移角度 | 生成出的抛射体的角度偏移 | spawnProjectilesOnCreate:1(offsetDir=16) | float | NaN | NaN |
| NaN | offsetRandomDir | 偏移随机角度 | 生成出的抛射体的角度随机偏移量 | spawnProjectilesOnCreate:1(offsetRandomDir=17) | float | NaN | NaN |
| NaN | xOffsetRelative | x相对偏移 | 生成出的抛射体的x轴的相对偏移量 | spawnProjectilesOnCreate:1(xOffsetRelative=19) | float | NaN | NaN |
| NaN | yOffsetRelative | y相对偏移 | 生成出的抛射体的y轴的相对偏移量 | spawnProjectilesOnCreate:1(yOffsetRelative=20) | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 逻辑 | Dynamic | LogicBoolean | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 许多参数可以写等于，但luke没有正式写在代码表中 | 例子 | 值类型 | NaN | NaN |
| NaN | true | 是 | 满足/是/对/为真/1，不建议使用1或0，不是所有代码都支持。 | autoTrigger:true | boolean | NaN | NaN |
| NaN | false | 非 | 不满足/非/错/假/0 | autoTrigger:false | boolean | NaN | NaN |
| NaN | if | 如果 | 所有逻辑布尔值使用if开始，除非仅使用true/false | autoTrigger:if self.hp != 0 | IfEvent | NaN | NaN |
| NaN | and | 和 | 需要and两边条件都满足执行。 | if self.isInWater() and self.energy(greaterThan=1) | connect | NaN | NaN |
| NaN | or | 或者 | or两边条件满足一个即可执行。 | if self.energy(greaterThan=1) or self.ammo(greaterThan=1) and self.isFlying() | connect | NaN | NaN |
| NaN | not | 非 | 将逻辑结果取反。 | if not self.isOverLiquid() | connect | NaN | NaN |
| NaN | < | 小于 | 如果左边的数字较小则返回真 | autoTrigger:if self.hp < 0 | bool | NaN | NaN |
| NaN | > | 大于 | 如果右侧的数字较小则返回真 | autoTrigger:if self.hp > 0 | bool | NaN | NaN |
| NaN | <= | 小于或等于 | 如果左边的数字小于或等于右边，则返回真 | autoTrigger:if self.hp <= 0 | bool | NaN | NaN |
| NaN | >= | 大于或等于 | 如果右侧的数字小于或等于右边，则返回真 | autoTrigger:if self.hp >= 0 | bool | NaN | NaN |
| NaN | == | 全等 | 如果两边的数字、单位、字符串、布尔值相同，则返回真 | autoTrigger:if self.hp == 0 | bool | NaN | NaN |
| NaN | != | 不等于 | 如果两边的数字、单位、字符串、布尔值不同，则返回真 | autoTrigger:if self.hp != 0 | bool | NaN | NaN |
| NaN | + | 加 | 添加两个数字或连接两个字符串 | autoTrigger:if self.hp + self.shield == 0\n%{"剩余血量:" + self.hp} | same type\nconnect string(s) | NaN | NaN |
| NaN | - | 减 | 两个数字相减所得值 | autoTrigger:if self.hp - self.shield == 0 | same type | NaN | NaN |
| NaN | / | 除 | 两个数字相除所得值 | autoTrigger:if self.hp \* self.shield == 0 | same type | NaN | NaN |
| NaN | \* | 乘 | 两个数相乘所得值 | autoTrigger:if self.hp / self.shield == 0 | same type | NaN | NaN |
| NaN | % | 求余 | 将两个数字相除并取余数部分作为计算所得值 | autoTrigger:if self.hp % self.shield == 0 | same type | NaN | NaN |
| NaN | () | 囊括符 | 用于囊括逻辑，可以把诸多逻辑用囊括符囊括成一个逻辑 可以避免像“or”这种衔接字符的烦人问题 | autoTrigger：if (self.hp(empty=true) and self.energy(full=true)) or (self.energy(empty=true) and self.hp(full=true)) | include | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 单位位置和移动 | ++++++++++ | ++++++++++ | NaN | 原本的值类型 |
| NaN | self.isUnderwater() | 自身在水下 | 单位在水下，深水单位如潜艇。 | if self.isUnderwater() | bool | NaN | bool |
| NaN | self.underwater() | 自身在水下 | 同上 | NaN | NaN | NaN | NaN |
| NaN | self.gound() | 自身在地上 | 单位在陆地上 | NaN | NaN | NaN | NaN |
| NaN | self.ground() | 自身在地上 | 同上 | NaN | NaN | NaN | NaN |
| NaN | self.isAtGroundHeight() | 自身在地面高度 | 单位在地面,触发范围是-1~4，如果您单位高度在不断变化时超过此值的话，此条不一定触发，因为铁锈执行频率默认是1s.\n等同于self.gound()或self.ground() | if self.isAtGroundHeight() | bool | NaN | float |
| NaN | self.flying() | 自身在天上 | 同下 | NaN | NaN | NaN | NaN |
| NaN | self.isFlying() | 自身在天上 | 如果单位在天上飞行，则执行。 | if self.isFlying() | bool | NaN | bool |
| NaN | self.isMoving() | 自身在移动 | 如果自身在移动则执行。 | if self.isMoving() | bool | NaN | bool |
| NaN | self.isAtTopSpeed() | 自身到最高速度 | 如果到达最高速度则执行。等同self.maxspeed() | if self.isAtTopSpeed() | bool | NaN | bool |
| NaN | self.isInWater() | 自身在水中 | 如果自身在水中则执行。等同于self.inwater()。 | if self.isInWater() | bool | NaN | bool |
| NaN | self.isOverwater() | 自身在水上 | 如果自身投影在水面这种地形则执行。 | if self.isOverwater() | bool | NaN | bool |
| NaN | self.isOverLiquid() | 自身在液体上 | 如果自身在液体则执行。岩浆算为液体。 | if self.isOverLiquid() | bool | NaN | bool |
| NaN | self.isOverClift() | 自身在悬崖上 | 如果自身在悬崖上则执行。等同self.isOverCliff() | if self.isOverClift() | bool | NaN | bool |
| NaN | self.isOverPassableTile() | 自身在地块类型上 | 如果自身在这类通行地块上则执行，类型：无、陆地、建筑、空中、水面、两栖、跨悬崖、跨水和悬崖\nNONE、LAND、BUILDING、AIR、WATER、HOVER、OVER\_CLIFF、OVER\_CLIFF\_WATER | if self.isOverPassableTile(type="WATER") | bool | NaN | bool |
| NaN | self.isOverOpenLand() | 自身在开阔地带 | 如果自身在开阔地带则执行。self.isOverPassableTile（type ='LAND'）的快捷方式 | if self.isOverOpenLand() | bool | NaN | bool |
| NaN | self.height() | 自身高度 | 如果自身在特定高度则执行。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满)) | if self.height(lessThan=50) | bool | NaN | float |
| NaN | ++++++++++ | ++++++++++ | 单位统计 | ++++++++++ | ++++++++++ | NaN | ++++++++++ |
| NaN | self.hasResources() | 自身有资源 | 可以检查多种资源（所有价格参数） | if self.hasResources(credits=5000) | bool | NaN | resource ref |
| NaN | self.resource() | 自身资源 | 检查单个资源条件。（参数：greaterThan,lessThan,equalTo）参数，超过，少于，等于 | if self.resource(type="NAMMO",greaterThan=35) | bool | NaN | resource ref |
| NaN | self.resource.RESOURCE\_TYPE | 自身资源类型 | 快捷方式：self.resource(type='RESOURCE\_TYPE') | addResourcesWithLogic: hp += self.resource.gold | bool | NaN | resource ref |
| NaN | self.isResourceLargerThan() | 自身资源大于 | 比较两个资源，注意，multiplyTargetBy不造成资源改变。(参数：来源，比较目标，超过，乘数 source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | if self.isResourceLargerThan(compareTarget=nearestUnit) | bool | NaN | compare |
| NaN | self.maxHp() | 自身最大血量 | 自身最大血量条件。 | if self.maxHp >= 10000 | bool | NaN | int\nstatic integer |
| NaN | self.hp() | 自身血量 | 自身血量条件。参数:greaterThan,lessThan,equalTo,empty,full(超过，少于，等于，空，满) | if self.hp(lessThan=100) | bool | NaN | float |
| NaN | self.ammo() | 自身弹药 | 自身弹药条件。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满) | if self.ammo(lessThan=100) | bool | NaN | int\nstatic integer |
| NaN | self.maxShield() | 自身最大护盾 | 自身最大护盾 | if self.maxShield >= 10000 | bool | NaN | int\nstatic integer |
| NaN | self.maxEnergy() | 自身最大能量 | 自身最大能量 | if self.maxEnergy >= 10000 | bool | NaN | int\nstatic integer |
| NaN | self.isEnergyRecharging() | 自身正在充能 | 自身正在充能 | if self.isEnergyRecharging() | bool | NaN | bool |
| NaN | self.isAmmoEmpty() | 自身弹药空 | 自身弹药为空。self.ammo(empty=true)的快捷方式 | if self.isAmmoEmpty() | bool | NaN | bool |
| NaN | self.ammoIncludingQueued() | 自身弹药包括队列 | 自身弹药数量，包括还在队列中的。参数:greaterThan,lessThan,equalTo,empty,full(参数：大于，小于，等于，空，满) | if self.ammoIncludingQueued(lessThan=12) | bool | NaN | int\nstatic integer |
| NaN | self.energy() | 自身能量 | 自身能量数值。参数:greaterThan,lessThan,equalTo,empty,full(参数，超过，少于，等于，空，满) | if self.energy(empty=true) | bool | NaN | float |
| NaN | self.energyIncludingQueued() | 自身能量包括队列 | 自身能量数值，包括还在队列中的。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满 | if self.energyIncludingQueued(lessThan=12) | bool | NaN | float |
| NaN | self.isEnergyFull() | 自身护盾满 | 自身能量为满。self.energy(full=true)的快捷方式 | if self.isEnergyFull() | bool | NaN | bool |
| NaN | self.isEnergyEmpty() | 自身护盾空 | 自身能量为空。self.energy(empty=true)的快捷方式。 | if self.isEnergyEmpty() | bool | NaN | bool |
| NaN | self.shield() | 自身护盾 | 自身护盾数值。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满 | if self.shield(greaterThan=233) | bool | NaN | float |
| NaN | self.kills() | 自身杀敌数 | 自身杀敌数量。(参数:greaterThan,lessThan,equalTo)（参数：大于，小于，等于） | if self.kills(greaterThan=99) | bool | NaN | int\nstatic integer |
| NaN | self.queueSize() | 自身队列量 | 自身队列数量。(参数:greaterThan,lessThan,equalTo,empty,full)参数：大于，小于，等于，空，满 | if self.queueSize(greaterThan=2) | bool | NaN | int\nstatic integer |
| NaN | self.teamId() | 自身队伍id | 返回单位或标记的团队 ID。 从0开始。 | if self.teamId == 1 | bool | NaN | team id |
| NaN | self.x(), self.y(), self.z() | 自身坐标分量 | 返回单位的坐标分量 | if self.x() == 0 and self.y() == 0 and self.z() == 0 | bool | NaN | float |
| NaN | self.dir() | 自身角度 | 返回单位的方向 | if self.dir() == 0 | bool | NaN | float |
| NaN | self.priceCredits() | 自身资源价格 | 返回单位的资源价格 | if self.priceCredits() <= 10000 | bool | NaN | int\nstatic integer |
| NaN | ++++++++++ | ++++++++++ | 杂项 | ++++++++++ | ++++++++++ | NaN | ++++++++++ |
| NaN | self.hasFlag() | 自身有标志 | 自身拥有标志。可用通过增加资源和价格修改。（参数：id = 0-31），使用addResources在action中更改此vaule | if self.hasFlag(id=10) | bool | NaN | bool |
| NaN | self.tags() | 自身有标签 | 自身拥有标签。等同self.hasTags() | if not self.tags(includes='TAG\_shiba') | bool | NaN | bool |
| NaN | self.hasTags() | 自身有标签 | 自身拥有标签。等同self.tags() | if not self.hasTags(includes='TAG\_shiba') | bool | NaN | bool |
| NaN | self.globalTeamTags() | 有全局标签 | 有全局标签，(parameters: includes)参数:包括 | if self.globalTeamTags(includes="GLBTAG\_shiba") | bool | NaN | bool |
| NaN | self.transportingCount() | 自身运输数量 | 载具运输单位数量(parameters: greaterThan, lessThan,equalTo,empty)（参数：大于，小于，等于，为空） | if self.transportingCount(greaterThan=1) | bool | NaN | int\nstatic integer |
| NaN | self.numberOfAttachedUnits() | 自身有子单位 | 自身有子单位数量。（withTag,greaterThan,lessThan,equalTo）参数:标签，大于、小于、等于 | if self.numberOfAttachedUnits(withTag=ANM\_cat',lessThan=1) | bool | NaN | bool |
| NaN | self.isAttacking() | 自身在攻击 | 单位正在攻击。 | if self.isAttacking() | bool | NaN | bool |
| NaN | self.hasActiveWaypoint() | 自身有活动的路径点 | 单位当前活动的路径点为此类型。类型=路径点类型。（[type = WAYPOINT\_TYPE]） | if self.hasActiveWaypoint(type='touchTarget') | bool | NaN | bool |
| NaN | self.transportingUnitWithTags() | 自身运输单位有标签 | 自身运输单位有标签(parameters: includes)参数:包括 | if self.transportingUnitWithTags(includes='human') | bool | NaN | bool |
| NaN | self.isTransportUnloading() | 自身运输在卸载 | 卸载单位时 | NaN | NaN | NaN | NaN |
| NaN | self.hasParent() | 自身有父单位 | 用于子单位和载员逻辑。有父单位时执行。可选参数:需要标签。withTag ="unit" | if self.hasParent() | bool | NaN | bool |
| NaN | self.hasTakenDamage() | 受到伤害 | 单位受到伤害。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.hasTakenDamage(withinSeconds=1) | bool | NaN | bool |
| NaN | self.timeAlive() | 存活时间 | 单位存活时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.timeAlive(laterThanSeconds=10) | bool | NaN | time(s) |
| NaN | self.lastConverted() | 最后转换时间 | 单位最后转换时间。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.lastConverted(laterThanSeconds=10) | bool | NaN | time(s) |
| NaN | self.customTimer() | 自身自定义计时器 | 自身自定义计时器。参数：几秒内，几秒后。(parameters:withinSeconds=X,laterThanSeconds=X) | if self.customTimer(laterThanSeconds=99) | bool | NaN | time(s) |
| NaN | self.isOnNeutralTeam() | 自身在中立队伍 | 自身在中立队伍。 | if self.isOnNeutralTeam() | bool | NaN | bool |
| NaN | numberOfUnitsInTeam() | 队伍中此单位数量 | 玩家自身拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue)\n参数：标签，超过，少于，范围，建造中，队列中 | if numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | bool | NaN | int\nstatic integer |
| NaN | self.numberOfUnitsInAllyNotOwnTeam() | 盟友有单位数量 | 盟友拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if self.numberOfUnitsInAllyNotOwnTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | NaN | int\nstatic integer |
| NaN | numberOfUnitsInEnemyTeam() | 敌人有单位数量 | 敌人拥有此单位的数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if numberOfUnitsInEnemyTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | NaN | int\nstatic integer |
| NaN | numberOfUnitsInNeutralTeam() | 中立有单位数量 | 中立队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if numberOfUnitsInNeutralTeam(withTag="cat",greaterThan=0,withinrange=99) | bool | NaN | int\nstatic integer |
| NaN | numberOfUnitsInAggressiveTeam() | 敌对中立拥有单位数量 | 特殊的“对所有人都有侵略性”的队伍,这与numberOfUnitsInEnemyTeam不同.(参数:withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue | if numberOfUnitsInAggressiveTeam() | bool | NaN | int\nstatic integer |
| NaN | numberOfUnitsInAllTeams() | 所有队伍拥有单位数量 | 所有队伍拥有单位数量。(参数:withTag,greaterThan,lessThan,withinRange,incompleteBuildings,factoryQueue) | if self.numberOfUnitsInAllTeams(withTag="tech") | bool | NaN | int\nstatic integer |
| NaN | self.hasUnitInTeam() | 自身队伍有单位 | 自身队伍拥有单位数量。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名 | if self.hasUnitInTeam(withTag="tech") | bool | NaN | bool |
| NaN | self.noUnitInTeam() | 自身队伍无单位 | 自身队伍单位数量不满足。(参数:withTag，withinRange，incompleteBuildings，factoryQueue)numberOfUnitsInTeam的别名 | if self.noUnitInTeam(withTag="tech") | bool | NaN | bool |
| NaN | self.isInMap() | 自身在地图内 | 判断自身是否在地图内：地图外指那些黑色的边缘外面 | if self.isInMap() | bool | NaN | bool |
| NaN | game.mapWidth() | 正在游戏的地图宽度 | 检测正在游戏的地图宽度 | if game.mapWidth() == 10000 | bool | NaN | float |
| NaN | game.mapHeight() | 正在游戏的地图高度 | 检测正在游戏的地图高度 | if game.mapHeight() == 10000 | bool | NaN | float |
| NaN | self.isReversing() | 自我正在反转 | 逻辑布尔值 | if self.isReversing() | bool | NaN | bool |
| NaN | self.isControlledByAI() | 自身属于AI控制 | 单位归属于AI所属方控制。 | if self.isControlledByAI() | bool | NaN | bool |
| NaN | self.readUnitMemory/eventData() | 读取单位内存 | (name:string, type:string{boolean,unit,float,string}, [default]) | if parent.readUnitMemory('boostTarget', type='unit') == self | bool | NaN | memory type |
| NaN | self.numberOfQueuedWaypoints() | 自身某种路径点的队列数量 | 小括号里写路径点种类(parameters: greaterThan, lessThan,equalTo,empty,full)（参数：大于，小于，等于，为空，为满） | if self.numberOfQueuedWaypoints(move,full=true) | bool | NaN | int\nstatic integer |
| NaN | self.speed() | 自身速度 | Current unit speed（目前的单位速度） | if self.speed() >= 0 | bool | NaN | float |
| NaN | self.maxspeed() | 自身最大速度 | 单位最大能达到的速度 | if self.maxspeed() >= 10 | bool | NaN | float |
| NaN | self.isAtTopSpeed() | 自身到达最大速度 | 单位已经到达单位所能到达的最大速度 | if self.isAtTopSpeed() | bool | NaN | bool |
| NaN | self.builtAmount() | 自身建造数量 | (似乎不包括使用autoTrigger建造的数量)How much this unit is built. 1 when complete. Note only events trigger on incomplete units, not autoTrigger（这个单位建造了多少。 1 完成后。仅注意不完整单位触发的事件，） | if self.builtAmount() > 0 | bool | NaN | int\nstatic integer |
| NaN | self.completed() | 自身建造完成 | (比如建造者造了一半的建筑就是0,建造完成就是1)Shortcut for checking built is（是检查已建成的快捷方式） | if self.completed() | bool | NaN | int\nstatic integer/bool |
| NaN | self.maxMoveSpeed() | 自身最大移动速度 | 自身最大移动速度 | if self.maxMoveSpeed() >= 0 | bool | NaN | float |
| NaN | self.teamDefeatedTech() | 队伍失败 | 队伍失败 | if self.teamDefeatedTech() | bool | NaN | bool |
| NaN | self.teamWipedOut() | 队伍无单位 | (ps:都没单位了哪个单位检测队伍没单位?所以应该是只能由禁止受到攻击的单位(此单位不计入总数)来判断) | if self.teamWipedOut() | bool | NaN | bool |
| NaN | self.numberOfConnections | 自身连接数 | 括号里填写行动名称 | if self.numberOfConnections(name="XXX") >= 10 | bool | NaN | int\nstatic integer |
| NaN | self.teamVictory() | 队伍获胜 | 队伍获胜 | if self.teamVictory() | bool | NaN | bool |
| NaN | ++++++++++ | ++++++++++ | 单位引用，例子太长，写描述里面 | ++++++++++ | ++++++++++ | NaN | ++++++++++ |
| NaN | thisActionTarget | 当前动作目标 | 当前目标或定位的位置。\n • thisActionTarget - 示例：fireTurretXAtGround: mainGun (thisActionTarget==Marker with ground location(带地面位置的标记))\n • autoTriggerOnEvent: tookDamage (thisActionTarget==Unit causing damage(造成伤害的单位))\n • autoTriggerOnEvent: killedAnyUnit (thisActionTarget==Destroyed unit(被摧毁的单位))\n • autoTriggerOnEvent: transportingNewUnit (thisActionTarget==Transported unit(被运输的单位))\n • autoTriggerOnEvent: transportUnloadedOrRemovedUnit (thisActionTarget==Unloaded unit(被卸载的单位))\n • autoTriggerOnEvent: queuedUnitFinished (thisActionTarget==New Units Built(被建造的新单位))\n • autoTriggerOnEvent: touchTargetSuccess (thisActionTarget==Touched target(碰到的目标))\n • alsoTriggerAction: x (thisActionTarget==Same as original action(与原动作相同))\n • [turret]onShoot\_triggerActions: x (thisActionTarget==Target that was shot at(被击中的目标))\n • takeResources\_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources(带有资源的目标))\n • addWaypoint\_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc. Note: use addWaypoint\_maxTime:0 if you want to search only , • (移动动作的标记/攻击的目标等。注：如果只是想搜索，请使用addWaypoint\_maxTime: 0)) | setResourcesWithLogic:Res=(thisActionTarget.resource.credits) | unit / marker | NaN | unit / marker |
| NaN | eventSource | 事件来源 | 来自 autoTriggerOnEvent 的当前触发器，否则为 null\nautoTriggerOnEvent: tookDamage (thisActionTarget==Unit that caused damage（单位受到伤害）)\nautoTriggerOnEvent: killedAnyUnit (thisActionTarget==Unit that was killed（单位击杀了任意一个其他单位）)\nautoTriggerOnEvent: transportingNewUnit (thisActionTarget==Unit that was transported（单位被运输）)\nautoTriggerOnEvent: transportUnloadedOrRemovedUnit (thisActionTarget==Unit unloaded（单位转载其他单位）)\nautoTriggerOnEvent: queuedUnitFinished (thisActionTarget==New unit made（新的单位制造）)\nautoTriggerOnEvent: touchTargetSuccess (thisActionTarget==Target touched（碰撞到了目标单位）) | addResourcesWithLogic:Res=(eventSource.resource.credits) | unit / marker | NaN | unit / marker |
| NaN | attachment | 附件 | （参数：[slot(槽位)]、[withTag(带有标签)]）\nself.attachment(withTag='x').lastDamagedBy.getAsMarker() | setResourcesWithLogic:Res=(attachment.resource.credits) | unit | NaN | unit |
| NaN | transporting | 运输 | （参数：[slot]）\nif self.transporting(slot=0).hasResources(gold=100) | addResourcesWithLogic:Res=(transporting.resource.credits) | unit | NaN | unit |
| NaN | attacking | 攻击 | 当前正在攻击的目标，可能不是当前的路径点目标。\nif attacking.tags(includes='bug') and attacking.hp < 20 | setResourcesWithLogic:Res=(attacking.resource.credits) | unit | NaN | unit |
| NaN | lastDamagedBy | 最后伤害源 | 最后一个攻击这个的单位。 | addResourcesWithLogic:Res=(lastDamagedBy.resource.credits) | unit | NaN | unit |
| NaN | parent | 父单位 | 传输器或附件父级。 （注：单元在无连接槽位时运输时处于暂停状态）\nEg autoTrigger: if parent.energy > 100 | setResourcesWithLogic:Res=(parent.resource.credits) | unit | NaN | unit |
| NaN | activeWaypointTarget | 活动路径点目标 | 当前活动航路点目标。 包括攻击、运输、修理等。\nif distanceBetween(self, activeWaypointTarget) < 100 | addResourcesWithLogic:Res=(activeWaypointTarget.resource.credits) | unit | NaN | unit |
| NaN | customTarget1 | 自定义目标1 | 自定义内存，默认为创建该单位的单位。\nif parent.customTarget1 == self | setResourcesWithLogic:Res=(customTarget1.resource.credits) | unit | NaN | unit |
| NaN | customTarget2 | 自定义目标2 | 自定义内存，默认为空 | addResourcesWithLogic:Res=(customTarget2.resource.credits) | unit | NaN | unit |
| NaN | nearestUnit | 距离自己最近的单位 | (withinRange=500, withTag='x',relation='any') 搜索一个距离自己最近的单位（不推荐在 autoTrigger 中进行检查） | setResourcesWithLogic:Res=(nearestUnit.resource.credits) | unit | NaN | unit |
| NaN | globalSearchForFirstUnit | 全局检查第一个单位 | (withTag=x,relation=any) - 返回找到的与过滤器匹配的第一个（也是最旧的）单元。 慢，避免在 autoTrigger 检查中使用 | addResourcesWithLogic:Res=(globalSearchForFirstUnit.resource.credits) | unit | NaN | unit |
| NaN | nullUnit | 空单位 | 返回一个空单位引用，用于比较 | if self.parent == nullUnit | compare value | NaN | compare value |
| NaN | NaN | 空 | 返回一个零值，可以用来检测单位引用为空 | if self.parent == null | compare value | NaN | compare value |
| NaN | ++++++++++ | ++++++++++ | 标记功能 | ++++++++++ | ++++++++++ | NaN | ++++++++++ |
| NaN | getAsMarker() | 获取为标记 | 在一个单位现在所在的位置创建一个临时标记。 标记的创建速度非常快，不再需要时会自动删除。 不链接到任何单位并且在单位死亡时仍然存在，并且在源移动时保持不变。 | if self.lastDamagedBy.getAsMarker() == nearestUnit() | bool | NaN | marker |
| NaN | getOffsetAbsolute() | 获取绝对偏移 | ([x],[y],[height]) 返回具有绝对偏移量的标记（-y 是北，+x 是东） | if lastDamagedBy.getOffsetAbsolute() == self | bool | NaN | marker |
| NaN | getOffsetRelative() | 获取相对偏移 | ([x],[y],[height],[dirOffset]) 返回具有相对偏移量的标记。 (y+ 是向前)\nself.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null | if lastDamagedBy.getOffsetRelative() == self | bool | NaN | marker |
| NaN | createMarker() | 创造记号 | 创建一个相对于地图的记号用于单位参考 | if createMarker(x=1,y=1).nearestUnit == null | bool | NaN | marker |
| NaN | ++++++++++ | ++++++++++ | 全局功能 | ++++++++++ | ++++++++++ | NaN | ++++++++++ |
| NaN | memory.NAME | 内存 | 使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。 | autoTrigger: if memory.experience > 100 | bool | NaN | memory type |
| NaN | memory.NAME[<Array\_Lower\_Limit>] | 返回内存数组 | 使用当前defineUnitMemory以及@memory类型读取自身的快捷方式。 不能在其他单元上使用，为此使用 readUnitMemory。 不要调用自身。 | autoTrigger: if memory.experience[1] > 100 | bool | NaN | memory array type |
| NaN | distance(x1, y1, x2, y2) | 点距离 | 计算两点之间的距离 | autoTrigger:if distance(self.x(),self.y(),memory.target.x(),memory.target.y()) < 400 | bool | NaN | float |
| NaN | distanceSquared(x1, y1, x2, y2) | 点距离方差 | 返回两点之距离差的平方。 比distance快，因为少了开方这一步。 | autoTrigger:if distanceSquared(self.x(),self.y(),memory.target.x(),memory.target.y()) < 400 | bool | NaN | float |
| NaN | distanceBetween(unit1, unit2) | 单位距离 | 返回两个单位之间的距离 | distanceBetween(self, activeWaypointTarget) < 100 | bool | NaN | float |
| NaN | distanceBetweenSquared(unit1, unit2) | 单位距离方差 | 返回两个单位之间的平方距离。 比 distanceBetween 快一点 | if distanceBetweenSquared(self, self.attacking) > 1000 | bool | NaN | float |
| NaN | game.nukesEnabled() | 核武启用 | 如果在此游戏的设置中启用了核武器，则返回 true。 | if game.nukesEnabled() | bool | NaN | bool |
| NaN | int(x) | 取整 | 从数字中删除小数位。 | int(4.2) == 4 | bool | NaN | int\nstatic integer |
| NaN | select(bool, textA, textB) | 选择 | 如果布尔值为真则返回 textA 否则返回 textB | if select(self.isMoving,5,-5) == 5 | bool | NaN | condition string |
| NaN | debug(logicBoolean) | 调试 | 返回一个文本，显示该单位有关于这个逻辑的数据 | if str(debug(self.hp)) == "Hp=2400" | bool | NaN | logic |
| NaN | debugPassthrough(logicBoolean) | 调试通行 | 显示这个逻辑在该单位上的值，并在调试模式中发送单位本身关于这个逻辑的调试消息，请打开调试模式选中单位后查看 | if str(debugPassthrough(self.hp)) == "2400" | bool | NaN | logic / message |
| NaN | str(x) | 转为字符串 | 将数字、单位、布尔值、逻辑显示值等转换为字符串 | if str(self.energy)+'x' == '100x' | bool | NaN | string |
| NaN | substring(text,start,end) | 子字符串 | 提取指定字符串长度内的字符串，例如 substring('hello',0,2) == 'he' | if substring('hello',0,2) == 'he' | bool | NaN | string |
| NaN | length(string) | 字符串长度 | 以数字形式返回字符串或者值类型是字符串的逻辑长度 | if length("string") == 6 | bool | NaN | int\nstatic integer |
| NaN | squareRoot(num) | 开方 | 返回一个数的平方根 | if squareRoot(4) == 2 | bool | NaN | float |
| NaN | min(num1, min2) | 最小值 | 返回最小的数字 | damage = min(self.hp, self.energy) | bool | NaN | float |
| NaN | max(num1, min2) | 最大值 | 返回最大的数字 | max(5, 10) == 10 | bool | NaN | float |
| NaN | cos([float]) | 算余弦 | 返回填入的值的余弦 | if cos(60) == 0.5 | bool | NaN | float |
| NaN | sin([float]) | 算正弦 | 返回填入的值的正弦 | if sin(30) == 0.5 | bool | NaN | float |
| NaN | thisActionIndex/index | 行动索引/索引 | 行动索引 | if index/thisActionIndex == 1 | bool | NaN | int\nstatic integer |
| NaN | uppercase() | 字符大写 | 给字符串中的所有小写字母进行大写处理 | if uppercase("abc") == "ABC" | bool | NaN | string |
| NaN | lowercase() | 字符小写 | 给字符串中的所有大写字母进行小写处理 | if lowercase("ABC") == "abc" | bool | NaN | string |
| NaN | direction(x1,y1,x2,y2) | 点朝向 | 给出两个点之间的直线相对于前者的点朝向的角度 | if direction(1,1,10,10) == 45 | bool | NaN | float |
| NaN | directionBetween(unit1,unit2) | 单位朝向 | 给出两个单位参考之间的直线相对于前者单位朝向的角度 | if directionBetween(self,self.customTarget1) == 90 | bool | NaN | float |
| NaN | true() | 真() | if语句里套一个true()...... | if true() and true() == true | bool | NaN | True |
| NaN | false() | 假() | if语句里套一个false()...... | if false() and true() == false | bool | NaN | False |
| NaN | rnd(min[float],max[float]) | 范围内随机取数 | 可能会是浮点值，可以使用int()取整数部分 | if rnd(1,100) == 50 | bool | NaN | random float |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 放置规则 | Section | [placementRule\_NAME] | 建造建筑物需要的条件 | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | anyRuleInGroup | 放置规则组 | 放置规则组名。（仅需要通过此组规则中的1条，而不是全部通过。在其他放置规则中可使用相同的组名称来创建组。） | anyRuleInGroup:DogFoodPlace | string | NaN | NaN |
| NaN | searchTags | 检索标签 | 搜索至少包含这些标签之一的任何单位 | searchTags:redFox | tag list | NaN | NaN |
| NaN | searchTeam | 检索队伍 | 要搜索的团队可以是：自身|中立|盟友非自身|盟友|敌人|任何。 own|neutral|allyNotOwn|ally|enemy|any | searchTeam:own | relation | NaN | NaN |
| NaN | searchOffsetX | 检索偏移 | 检索偏移，默认为0 | searchOffsetX:0 | float | NaN | NaN |
| NaN | searchOffsetY | 检索偏移 | 检索偏移，默认为0 | searchOffsetY:0 | float | NaN | NaN |
| NaN | searchDistance | 搜索距离 | 搜索距离 | searchDistance:99 | float | NaN | NaN |
| NaN | excludeIncompleteBuildings | 排除不完整建筑 | 排除不完整的建筑 | excludeIncompleteBuildings:true | bool | NaN | NaN |
| NaN | excludeNonBuildings | 排除非建筑 | 排除非建筑 | excludeNonBuildings:true | bool | NaN | NaN |
| NaN | minCount | 最小数量 | 设定需要在搜索中找到的单位的最小数量。(如需要靠近某物)。默认值为0 | minCount:1 | int\nstatic integer | NaN | NaN |
| NaN | maxCount | 最大数量 | 在匹配失败前设置最大单位数量(例如不能接近某个值)。默认为无限的 | maxCount:1 | int\nstatic integer | NaN | NaN |
| NaN | blocksPlacement | 禁止放置 | 禁止放置。默认为true。 | blocksPlacement:true | bool | NaN | NaN |
| NaN | cannotPlaceMessage | 失败信息 | 如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则） | cannotPlaceMessage:您不能睡觉，因为附近有chemms在游荡~ | LocaleString | NaN | NaN |
| NaN | cannotPlaceMessage\_[Language] | 失败信息(多语言) | 如果此放置规则失败，则会向玩家显示消息（将成为mergedRuleGroup中的第一个失败规则）（支持多种语言显示） | cannotPlaceMessage\_zh:您不能睡觉，因为附近有chemms在游荡~ | LocaleString | NaN | NaN |
| NaN | checkEachTile | 检查每个地块 | [true / false]默认为true（仅对测试单元中心设置为false，true会检查显示在放置网格上的单元下方的每个图块） | checkEachTile:true | bool | NaN | NaN |
| NaN | aiSuggestionOnly | 仅限ai建议 | 不能与blocksPlacement一起使用，仅仅只是建议AI这么做 | aiSuggestionOnly:true | bool | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 内置资源&价格可用资源 | Resources | Built in Resources&Price Available Resources | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 由addResources，price等使用 | 例子 | 值类型 | NaN | NaN |
| NaN | credits | 资金 | 铁锈中默认用于全局的资金。 | credits | Resources | NaN | NaN |
| NaN | energy | 能量 | 单位使用的能量，如可用于开火限制。 | energy | Resources | NaN | NaN |
| NaN | hp | 血量 | 单位血量，一般血量归零时就会销毁单位。 | hp | Resources | NaN | NaN |
| NaN | shield | 护盾 | 单位护盾，一般用于抵挡敌人攻击。 | price: hp=-100, shield=100 | Resources | NaN | NaN |
| NaN | ammo | 弹药 | 弹药，每个单位的隐藏值，供mod使用。 | ammo=1 | int\nstatic integer | NaN | NaN |
| NaN | setFlag | 设置标志 | 设置标志，范围0-31。标志存储在每个单元中，与addResources，resourceUsage或price等一起使用。 | setFlag:1，setFlag=1,3 | int\nstatic integer | NaN | NaN |
| NaN | unsetFlag | 取消标志 | 取消已经设置的标志 | unsetFlag=1 , unsetFlag:1-5 | int\nstatic integer | NaN | NaN |
| NaN | hasFlag | 拥有标志 | 拥有标志。 | hasFlag:1，hasFlag=1|2 | int\nstatic integer | NaN | NaN |
| NaN | hasMissingFlag | 没有标志 | 没有标志。 | hasMissingFlag:1，hasMissingFlag=1|13 | int\nstatic integer | NaN | NaN |
| NaN | [CustomResources] | [CustomResources] | [global\_resource\_x]或[resource\_x]节中定义的任何资源。 | gold=5, stone=20 | Resources | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 全局资源 | Section | [global\_resource\_NAME] | [global\_resource\_Golds] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | stackHorizontal | 堆叠水平 | 定义与玩家所有单位共享的新资源，其工作方式类似于内置的资金。添加到"all-units.template"（位于mod根目录） | NaN | NaN | NaN | NaN |
| NaN | displayName | 显示名称 | 用户界面中此资源的名称 | displayName:资金 | string | NaN | NaN |
| NaN | displayNameShort | 显示短名称 | 在较小的UI上显示的文本（如action的悬浮文本）默认为displayName | displayNameShort:￥ | string | NaN | NaN |
| NaN | hidden | 隐藏 | 向玩家隐藏此资源 | hidden:true | bool | NaN | NaN |
| NaN | priority | 优先级 | 如果多个mod单元中定义了同名的资源，则使用具有最高优先级的displayName/displayColor | priority:1 | float | NaN | NaN |
| NaN | displayColor | 显示颜色 | 颜色，可以是十六进制，带有可选的alpha | displayColor:#FF0000 | color | NaN | NaN |
| NaN | displayRoundedDown | 显示为整数 | 对资源进行舍入显示为整数。 | displayRoundedDown:true | bool | NaN | NaN |
| NaN | displayWhenZero | 为零时显示 | 资源为零时也显示。 | displayWhenZero:true | bool | NaN | NaN |
| NaN | iconImageUseInText | 在动作(action)的描述中显示资源图标 | 默认为true | iconImageUseInText:false | bool | NaN | NaN |
| NaN | iconImage | 图标 | 自定义该资源的象征图像 | iconImage:chemms.png | file (image) | NaN | NaN |
| NaN | displayNameHideWhenIconShownInText | 显示名称在文本中显示图标时隐藏 | (默认为false) - 有助于缩短说明文本 | displayNameHideWhenIconShownInText:true | bool | NaN | NaN |
| NaN | displayNameHideWhenIconShownInHUD | 文本显示名称在HUD中显示图标时隐藏 | 默认为false | displayNameHideWhenIconShownInHUD:true | bool | NaN | NaN |
| NaN | displayColorUseInText | 在动作(action)的描述中显示资源颜色 | 默认为true | displayColorUseInText:false | bool | NaN | NaN |
| NaN | appendResourceInHUD | 在HUD中追加资源 | 使用后，在游戏界面中这个资源值将会叠在目标资源值的后面，并且继承目标资源的颜色和图标。这个资源值后面也能继续叠加其它资源值 | appendResourceInHUD:<resources:name> | resource ref | NaN | NaN |
| NaN | displayPrefixInHUD | 在HUD中显示前缀 | 在资源数值前显示的文本，会替换掉资源原本的名称以及冒号，和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容 | displayPrefixInHUD:321 | string | NaN | NaN |
| NaN | displayPostfixInHUD | 在HUD中显示后缀 | 在资源数值之后显示的文本 | displayPostfixInHUD:123 | string | NaN | NaN |
| NaN | displayTextAppendResourceWithGap | 显示具有间隙的附加资源文本 | 默认为false。将不相关的资源放在同一行时，在资源之间添加空格。 | displayTextAppendResourceWithGap:true | bool | NaN | NaN |
| NaN | appendResourceInHUD\_whenThisZero | 在此为零时在HUD中追加资源 | 默认为true。为false时附加资源（如用于显示最大值的资源）与父资源一起隐藏。 | appendResourceInHUD\_whenThisZero:false | bool | NaN | NaN |
| NaN | includeInStats | 包括值 | 包括该资源，与valueInStats类似 | includeInStats:true | bool | NaN | NaN |
| NaN | valueInStats | 统计值 | (如果全局且未隐藏，则默认为 1(true)，否则默认为 0(false)） - 用于游戏后的统计和回放的排行榜 | valueInStats:true | bool/int\nstatic integer | NaN | NaN |
| NaN | displayInHud | 在HUD里显示 | - 用于 appendResourceInHUD（在HUD中追加资源） 中的资源，而不会隐藏它们，这有其他副作用 | displayInHud:true | bool | NaN | NaN |
| NaN | displayDigitGrouping | 资源数字分组 | none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000) | displayDigitGrouping:none | display type | NaN | NaN |
| NaN | displayTextAppendResource | 显示文本里添加资源 | 往文本里添加一个资源 | displayTextAppendResource:<resource:name> | resource ref | NaN | NaN |
| NaN | displayPos | 显示排序 | 显示优先级，越小越居上 | displayPos:1 | int\nstatic integer | NaN | NaN |
| NaN | displayWithRounding | 四舍五入取整 | 将资源的小数部分用四舍五入法变成整数，此代码为真后，该资源数字一定是整数 | displayWithRounding:true | bool | NaN | NaN |
| NaN | displayTextPrefix | 显示文本前缀 | 与displayPrefixInHUD有着相同的作用，而且它俩不能共存 | displayTextPrefix:321 | string | NaN | NaN |
| NaN | displayTextPostfix | 显示文本后缀 | 与displayPostfixInHUD有着相同的作用，而且它俩不能共存 | displayTextPostfix:123 | string | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 局部资源 | Section | [resource\_NAME] | [resource\_MyMoney] | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | stackHorizontal | 堆叠水平 | 将此代码为真的资源统一排列到同一水平线上。 | stackHorizontal:true | bool | NaN | NaN |
| NaN | displayName | 显示名称 | UI中此资源的名称(如悬停在单元信息上) | displayName:计数器 | string | NaN | NaN |
| NaN | displayNameShort | 显示短名称 | 在较小的UI上显示的文本（如action的悬浮文本）默认为displayName | displayNameShort:s | string | NaN | NaN |
| NaN | hidden | 隐藏 | 对玩家隐藏这个资源 | hidden:true | bool | NaN | NaN |
| NaN | equivalentGlobalResourceForAI | 作为AI的全局资源 | 用于向AI提示具有本地资源的资源节点可用于获取不同的全局资源。例如，当一台收割机卸载资源 | equivalentGlobalResourceForAI:true | bool | NaN | NaN |
| NaN | displayRoundedDown | 显示为整数 | 对资源进行舍入显示为整数。 | displayRoundedDown:true | bool | NaN | NaN |
| NaN | iconImageUseInText | 在动作(action)的描述中显示资源图标 | 默认为true | iconImageUseInText:false | bool | NaN | NaN |
| NaN | iconImage | 图标 | 自定义该资源的象征图像 | iconImage:chemms.png | file (image) | NaN | NaN |
| NaN | displayNameHideWhenIconShownInText | 显示名称在文本中显示图标时隐藏 | (默认为false) - 有助于缩短说明文本 | displayNameHideWhenIconShownInText:true | bool | NaN | NaN |
| NaN | displayNameHideWhenIconShownInHUD | 文本显示名称在HUD中显示图标时隐藏 | 默认为false | displayNameHideWhenIconShownInHUD:true | bool | NaN | NaN |
| NaN | displayColorUseInText | 在动作(action)的描述中显示资源颜色 | 默认为true | displayColorUseInText:false | bool | NaN | NaN |
| NaN | appendResourceInHUD | 在HUD中追加资源 | 使用后，在游戏界面中这个资源值将会叠在目标资源值的后面，并且继承目标资源的颜色和图标。这个资源值后面也能继续叠加其它资源值 | appendResourceInHUD:<resources:name> | resource ref | NaN | NaN |
| NaN | displayPrefixInHUD | 在HUD中显示前缀 | 在资源数值前显示的文本，会替换掉资源原本的名称以及冒号，和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容 | displayPrefixInHUD:321 | string | NaN | NaN |
| NaN | displayPostfixInHUD | 在HUD中显示后缀 | 在资源数值之后显示的文本 | displayPostfixInHUD:123 | string | NaN | NaN |
| NaN | displayTextAppendResourceWithGap | 显示具有间隙的附加资源文本 | 默认为false。将不相关的资源放在同一行时，在资源之间添加空格。 | displayTextAppendResourceWithGap:true | bool | NaN | NaN |
| NaN | appendResourceInHUD\_whenThisZero | 在此为零时在HUD中追加资源 | 默认为true。为false时附加资源（如用于显示最大值的资源）与父资源一起隐藏。 | appendResourceInHUD\_whenThisZero:false | bool | NaN | NaN |
| NaN | includeInStats | 包括值 | 包括该资源，与valueInStats类似 | includeInStats:true | bool | NaN | NaN |
| NaN | valueInStats | 统计值 | (如果全局且未隐藏，则默认为 1(true)，否则默认为 0(false)） - 用于游戏后的统计和回放的排行榜 | valueInStats:1 | bool/int\nstatic integer | NaN | NaN |
| NaN | displayTextAppendResource | 显示文本里添加资源 | 在显示的UI中添加该资源 | displayTextAppendResource:<resource:name> | resource ref | NaN | NaN |
| NaN | displayDigitGrouping | 资源数字分组 | none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000) | displayDigitGrouping:none | display type | NaN | NaN |
| NaN | displayPos | 显示排序 | 显示优先级，越小越居上 | displayPos:1 | int\nstatic integer | NaN | NaN |
| NaN | displayWithRounding | 四舍五入取整 | 将资源的小数部分用四舍五入法变成整数，此代码为真后，该资源数字一定是整数 | displayWithRounding:true | bool | NaN | NaN |
| NaN | displayTextPrefix | 显示文本前缀 | 与displayPrefixInHUD有着相同的作用，而且它俩不能共存 | displayTextPrefix:321 | string | NaN | NaN |
| NaN | displayTextPostfix | 显示文本后缀 | 与displayPostfixInHUD有着相同的作用，而且它俩不能共存 | displayTextPostfix:123 | string | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 贴花/贴花 | 1.15p9新增 | [decal\_NAME] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | layer | 绘制图层,可以是前面几种 | 可以填入的值：shadow(阴影), beforeBody(在主体之上), afterBody(在主体之下), onTop(在最顶端), beforeUI(在显示界面之上)，inactive(在行动中) | layer:beforeUI | layer type | NaN | NaN |
| NaN | order | 排序(默认为0并且按照ini里的顺序) | Order with other decals, defaults 0 and uses order it appears in ini（使用其他贴花排序，默认为0，并使用其在ini中显示的顺序） | order:1 | float | NaN | NaN |
| NaN | onlyWhenSelectedByOwnPlayer | 仅在被拥有者选中时绘制 | Only draw if the viewing player is the same as this unit.（只有当玩家查看本单位时，才可绘制贴花。） | onlyWhenSelectedByOwnPlayer:true | bool | NaN | NaN |
| NaN | onlyWhenSelectedByEnemyPlayer | 被敌方玩家选中时绘制 | 被敌方玩家选中时绘制 | onlyWhenSelectedByEnemyPlayer:true | bool | NaN | NaN |
| NaN | onlyWhenSelectedByAllyNotOwnPlayer | 非自身队伍的盟友选中时绘制 | 非自身队伍的盟友选中时绘制 | onlyWhenSelectedByAllyNotOwnPlayer:false | bool | NaN | NaN |
| NaN | onlyWhenSelectedByAnyPlayer | 被任意玩家选中时绘制 | Show when any player selects this unit.（在任何玩家选中本单位值绘制贴花） | onlyWhenSelectedByAnyPlayer:false | bool | NaN | NaN |
| NaN | includeParentsSelection | 包括被父单位选中 | onlyWhenSelected\*also check parents selection（仅当选定时\*还检查父项选择） | includeParentsSelection:true | bool | NaN | NaN |
| NaN | onlyPlayersWithUnitControl | 仅在查看者能够控制此单位时绘制 | Only draw if viewing player could control this unit（仅当观看者可以控制此单元时才绘制贴花） | onlyPlayersWithUnitControl:false | bool | NaN | NaN |
| NaN | onlyTeam | 仅在查看者为特定队伍时显示 | Only draw when this relation between unit and viewing player，Can be filled in:own|notOwn|neutral|allyNotOwn|ally|enemy|any (仅当单位和查看玩家之间的关系时绘制，可以填写：己方|非己方|中立方|除自己外盟友|盟友|敌方|任意) | onlyTeam:any | TeamRelation | NaN | NaN |
| NaN | onlyWithZoomLevelOrMore | 仅当缩放到当前大小或更大时绘制 | onscreen. Recommended to be set on decals for 3d voxel style units, small details or small shadows.Would hide decal when zoomed out a bit. Useful to reduce draw calls for performance when a lot of units might be\n（屏幕上。建议设置在三维立体体积元素样式单位、小细节或小阴影的贴花上。缩小一点时会隐藏贴花。当许多单元可能需要时，有助于减少性能的调用） | onlyWithZoomLevelOrMore:true | bool | NaN | NaN |
| NaN | onlyWhileActive | 仅在单位建造完成时绘制 | Only draw when unit has been completed（仅在单位完成时绘制，比如建造者建造一般的建筑就不算) | onlyWhileActive:true | bool | NaN | NaN |
| NaN | onlyOnBodyFrameOf | 只在主体关键帧时绘制 | 只有在主体到某个关键帧时绘制 | onlyOnBodyFrameOf:1 | int\nstatic integer | NaN | NaN |
| NaN | onlyWhileAlive | 仅在存活时绘制 | (If beforeUI layer default true, else default false)(如果图层(layer)为beforeUI默认为true,否则false，为ture死后消失) | onlyWhileActive:false | bool | NaN | NaN |
| NaN | onlyInPreview | 仅在侧边栏和建筑放置预览中显示 | Only show in sidebar, and building placement preview（仅在侧边栏中显示，以及建筑布局预览） | onlyInPreview:true | bool | NaN | NaN |
| NaN | onlyOnNonPreview | 仅在非预览中显示(与上一条相反) | Only show on real unit, not action sidebar, etc（仅在真实单元上显示，而不是动作侧边栏等） | onlyOnNonPreview:true | bool | NaN | NaN |
| NaN | imageScale | 图像缩放(倍数) | 图像缩放(倍数) | imageScale:self.hp | dynamic float | NaN | NaN |
| NaN | imageScaleX | 图像X缩放 | 图像X缩放 | imageScaleX:self.shield | dynamic float | NaN | NaN |
| NaN | imageScaleY | 图像Y缩放 | 图像Y缩放 | imageScaleY:self.energy | dynamic float | NaN | NaN |
| NaN | image | 图像 | 图像 | image:XXX.png | file(image) | NaN | NaN |
| NaN | teamColors | 阵营色 | bool. Enable team coloring on image and imageStack（布尔值。在图像和图像堆栈上启用队伍色） | teamColors:true | bool | NaN | NaN |
| NaN | imageStack | 图像列表 | list of images recommended for 3d voxel style units as images can be batch drawn when using the same sprite sheet.（推荐用于三维立体体积元素样式单位的图像列表，因为当使用相同的子画面时，可以批量绘制图像。）(目前没有实例所以不清楚,但确定是用于3d单位) | imageStack:XXX.png | file(image) | NaN | NaN |
| NaN | stack\_hOffset | 列表图像高度偏移 | for 3d voxel style units.（用于三维立体体积元素样式单位。） | stack\_hOffset:1 | int\nstatic integer | NaN | NaN |
| NaN | stack\_frameOffset | 列表图像帧偏移 | for 3d voxel style units.（用于三维立体体积元素样式单位。） | stack\_frameOffset:2 | int\nstatic integer | NaN | NaN |
| NaN | stack\_drawInReverseOrder | 列表图像绘图顺序 | 列表图像绘图顺序 | stack\_drawInReverseOrder:0 | int\nstatic integer | NaN | NaN |
| NaN | stack\_indexStart | 列表图像起始图像 | dynamic int (Starting image of the image stack)（动态整数（图像堆栈的起始图像）） | stack\_indexStart:self.x | dynamic int\nstatic integer | NaN | NaN |
| NaN | stack\_indexCount | 列表图像数量 | dynamic int (Number of images to draw. Could be set to 1 to use stack\_indexStart as an image picker)（动态整数（要绘制的图像数。可以设置为1以使用堆栈索引开始作为图像选择器）） | stack\_indexCount:self.y | dynamic int\nstatic integer | NaN | NaN |
| NaN | total\_frames | 总帧数(跟后面两个二选一使用) | Use total\_frames or frame\_width/frame\_height（使用 总帧数 或者 帧宽度/帧高度） | total\_frames:12 | int\nstatic integer | NaN | NaN |
| NaN | frame\_verticalOrdering | 帧清单 | 是否列出帧清单 | frame\_verticalOrdering:true | bool | NaN | NaN |
| NaN | frame\_width | 帧宽度 | 帧宽度 | frame\_width:2 | int\nstatic integer | NaN | NaN |
| NaN | frame\_height | 帧高度 | 帧高度 | frame\_height:2 | int\nstatic integer | NaN | NaN |
| NaN | frame | 帧 | (与total\_frames相比,frame是动值,可以改变内存来修改第几帧) | frame:self.maxHp | dynamic int\nstatic integer | NaN | NaN |
| NaN | addBodyFrameMultipliedBy | 添加主体帧乘数 | 添加主体帧时的乘数 | addBodyFrameMultipliedBy:1.2 | float | NaN | NaN |
| NaN | isVisible | 可见 | 表明该帖花是否可以被我们看见(可以使用逻辑) | isVisible:if self.isMoving | LogicBoolean | NaN | NaN |
| NaN | xOffsetRelative | X相对偏移 | (note use basePosition with createMarker/etc for dynamic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | xOffsetRelative:200 | float | NaN | NaN |
| NaN | yOffsetRelative | Y相对偏移 | (note use basePosition with createMarker/etc for dynamic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | yOffsetRelative:200 | float | NaN | NaN |
| NaN | xOffsetAbsolute | X绝对偏移 | (note use basePosition with createMarker/etc for dynamic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | xOffsetAbsolute:self.hp | dynamic float | NaN | NaN |
| NaN | yOffsetAbsolute | Y绝对偏移 | (note use basePosition with createMarker/etc for dynamic use)（请注意，动态使用base Position（基本位置）和create Marker（创建标记）/ect（等）） | yOffsetAbsolute:self.hp | dynamic float | NaN | NaN |
| NaN | hOffset | 高度偏移 | height offset（高度偏移） | hOffset:2 | float | NaN | NaN |
| NaN | dirOffset | 角度偏移 | 角度偏移 | dirOffset:25 | float | NaN | NaN |
| NaN | pivotOffset | 坐标系旋转 | (相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy) 只影响X/Y相对偏移,不旋转图像-----only effects xOffsetRelative/yOffsetRelative without rotating image | pivotOffset:125 | float (180>X>-180) | NaN | NaN |
| NaN | alwaysStartDirAtZero | 总是固定角度为零(总是朝上) | Useful for UI(对UI有用) | alwaysStartDirAtZero:true | bool | NaN | NaN |
| NaN | alwaysStartHeightAtZero | 总是固定高度为零 | Useful for UI on air and hover units（对空中和两栖单位的UI有用） | alwaysStartHeightAtZero:false | bool | NaN | NaN |
| NaN | basePosition | 中心位置(填单位参考) | unit or marker to draw from as the base（作为基础绘制的单位或标记） | basePosition:nearestUnit | unit ref | NaN | NaN |
| NaN | basePositionFromLeg | 以脚为中心位置 | Use a leg/arm position instead of unit body as base（使用 腿/脚 位置而不是单位身体作为基础） | basePositionFromLeg:1 | leg ref | NaN | NaN |
| NaN | basePositionFromTurret | 以炮塔为中心位置 | Use a turret position instead of unit body as base（使用炮塔位置而不是单元主体作为底座） | basePositionFromTurret:5 | turret ref | NaN | NaN |
| NaN | basePositionFromLegEnd | 以腿为中心位置 | 填腿脚/胳膊节 | basePositionFromLegEnd:leg\_1 | leg/arm ref | NaN | NaN |
| NaN | drawLineTo | 绘制线条到(受到颜色和宽度影响) | Draws a line to this location affected by color and width（在此位置绘制一条受颜色和宽度影响的线） | drawLineTo:nearestUnit | unit or marker | NaN | NaN |
| NaN | image\_shadow | 阴影图像 | 阴影图像 | image\_shadow:XXX.png | file(image) | NaN | NaN |
| NaN | shadowOffsetX | 阴影偏移X | 阴影偏移X | shadowOffsetX:12 | float | NaN | NaN |
| NaN | shadowOffsetY | 阴影偏移Y | 阴影偏移Y | shadowOffsetY:21 | float | NaN | NaN |
| NaN | color | 颜色(影像图像和线条) | affects image and line.（影响图像和线条。） | color:#acefdb | color | NaN | NaN |
| NaN | alpha | 透明度(影像颜色和线条) | dynamic float (0-1). Stacks with alpha in color. affects image and line.（动态浮点值（0-1）。以颜色堆叠透明度。影响图像和线条。） | alpha:self.shield | dynamic float (0-1) | NaN | NaN |
| NaN | lineWidth | 线宽度 | 表明这条线的宽度 | lineWidth:21.564 | float | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 模板 | Section | [template\_NAME] | NaN | NaN | NaN | NaN |
| NaN | 代码 | 代码翻译 | 描述 | 例子 | 值类型 | NaN | NaN |
| NaN | NaN | NaN | 模板部分可以具有任何键，并且其自身无效。 | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | 可以使用[core]copyFrom从其他文件中引用模板。例如：[core]copyFrom:ROOT:effects/explodeEffects.template。copyFrom可以一次引用多个文件。 | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | -以下所有这些功能都可以与任何部分一起使用，而不仅仅是模板- | NaN | NaN | NaN | NaN |
| NaN | @copyFromSection | 复制节 | 在任何节中使用，以引用节或模板的代码。如@copyFromSection template\_name/action\_name/projectile\_name | @copyFromSection:projectile\_1 | NaN | NaN | NaN |
| NaN | @copyFrom\_skipThisSection | 复制但跳过节 | 在任何节中使用，例如，在引用时候不复制某个action. | [action\_test]\n@copyFrom\_skipThisSection:true | NaN | NaN | NaN |
| NaN | @define X | 局部变量 | 在一个节中定义一个局部变量(最好在模板外部) | @define targetEffect: boom | NaN | NaN | NaN |
| NaN | @global X | 全局变量 | 定义在所有节中使用的全局变量。注意：局部变量具有更高的优先级 | @global targetEffect: pop | NaN | NaN | NaN |
| NaN | ${X} | 变量引用 | ${X}可以用来引用变量(也可以在模板外部完成) | spawnEffects:effect\_${targetEffect} | NaN | NaN | NaN |
| NaN | ${section.key} | 值引用 | ${section.key}可以用来引用键（也可以在模板外部完成）。如果值为小数，可用int取整，例如${int(core.price\*0.25)} | addResources:credits=${core.price \* 2 + 10} | NaN | NaN | NaN |
| NaN | %{X} | %{X} | 可用于将动态逻辑添加到某些字符串中（此方式只能用于字符串(mod-info.txt的除外)）。 该值将每一帧更新。\n [action]text: Missing hp %{self.maxHp - self.hp} | NaN | NaN | NaN | NaN |
| NaN | """[文本]""" | 多行字符串 | 可用于多行字符串。 从最终结果中删除换行符。理论上所有代码(非逻辑)都可使用。 | copyFrom:"""\nROOT:a.ini,\nROOT:b.ini,\nROOT:c.ini\n""" | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 注释 | Section | [comment\_NAME] | NaN | NaN | NaN | NaN |
| NaN | 啥都不是的玩意儿 | NaN | 描述 | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | 注释部分可以有任何键，但没有效果。 | NaN | NaN | NaN | NaN |
| NaN | 游戏默认声音列表(用于炮塔开火声或其他音效参考) | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | 这是luke加上的，更多内置效果、内部参数我在"参数表"内列出。 | NaN | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 特殊参数 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | techLevel | 边界大小 | “techLevel”单位生成参数,主要用于内置的单元和设置damagingBorder大小。计算方式是数值X地块5格。最小值为0，圈不可见。如填1则半径为5格。 | NaN | NaN | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 特殊单位 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | damagingBorder | 伤害边界 | 此内部单位会生成一个圆形的安全区域，所有区域外的单位会不断收到伤害直到死亡。 | spawnUnits:damagingBorder(techLevel=4,offsetRandomX=1,offsetRandomY=1) | NaN | NaN | NaN |
| NaN | zonemarker | 伤害边界区域标记 | 此单位用于指示伤害边框移动到何处，是放大还是缩小，可使用“techLevel”控制大小。 | spawnUnits:zonemarker(techLevel=2,offsetRandomX=1,offsetRandomY=1) | NaN | NaN | NaN |
| NaN | setRally | 设置集结点 | 用于设置建造完成的单位的集结点，而不是建筑门口 | canBuild\_1\_name:setRally\ncanBuild\_1\_pos:1 | NaN | NaN | NaN |
| NaN | reclaim | 回收 | 回收建筑并返还75%资金 | canBuild\_1\_name:reclaim\ncanBuild\_1\_pos:1 | NaN | NaN | NaN |
| NaN | ++++++++++ | ++++++++++ | 一些额外无效代码 | ++++++++++ | ++++++++++ | NaN | NaN |
| NaN | attackMovementSpeed | 攻击时移动速度 | 几乎无影响 | NaN | NaN | NaN | NaN |
| NaN | attackMovementSpread | 攻击时移动散布 | 几乎无影响 | NaN | NaN | NaN | NaN |
| NaN | 以上为攻击节，以下为图像节（填写均没有什么效果，不建议使用） | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | imageSmoothing | 图像平滑 | 几乎无影响 | NaN | NaN | NaN | NaN |
| NaN | imageSmoothingWhenZoomedIn | 在缩放时图像依然平滑 | 几乎无影响 | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 未知代码(不可用(?)) | 从dex的unitCLASS文件夹里搜出来的似乎并不属与单位的代码 | NaN | NaN | NaN | NaN | NaN |
| NaN | onlyIdle | 只在空闲时 | NaN | NaN | NaN | NaN | NaN |
| NaN | maxSpeed | 最大速度 | NaN | NaN | float | NaN | NaN |
| NaN | enabled | 启用 | NaN | NaN | LogicBoolean | NaN | NaN |
| NaN | movement\_repelFromUnits | 单位运动排斥来自 | NaN | NaN | bool | NaN | NaN |
| NaN | onlySameTeam | 仅相同队伍可言 | NaN | NaN | bool | NaN | NaN |
| NaN | otherUnitHasTag | 其他单位有标签 | NaN | NaN | tags | NaN | NaN |
| NaN | movement\_random | 随机移动 | NaN | NaN | bool | NaN | NaN |
| NaN | awayFromEdge | 边缘距离 | NaN | NaN | int\nstatic integer | NaN | NaN |
| NaN | outOfRange | 超出范围 | NaN | NaN | NaN | NaN | NaN |
| NaN | onlyInRange | 在范围内 | NaN | NaN | NaN | NaN | NaN |
| NaN | returnFire | 返回开火 | NaN | NaN | NaN | NaN | NaN |
| NaN | holdFire | 停止射击 | NaN | NaN | NaN | NaN | NaN |
| NaN | guardArea | 守护范围 | NaN | NaN | NaN | NaN | NaN |
| NaN | aggressive | 敌对 | NaN | NaN | NaN | NaN | NaN |
| NaN | mixed | 混合 | NaN | NaN | NaN | NaN | NaN |
| NaN | imageLoad | 加载图像 | NaN | NaN | NaN | NaN | NaN |
| NaN | imageLoadOrGet | 加载或者获取图像 | NaN | NaN | NaN | NaN | NaN |
| NaN | soundLoad | 加载音频 | NaN | NaN | NaN | NaN | NaN |
| NaN | soundLoadOrGet | 加载或者获取音频 | NaN | NaN | NaN | NaN | NaN |
| NaN | iniParse | 分析ini文件 | NaN | NaN | NaN | NaN | NaN |
| NaN | unitParse | 分析单位 | NaN | NaN | NaN | NaN | NaN |
| NaN | iniOpen | 打开ini文件 | NaN | NaN | NaN | NaN | NaN |
| NaN | iniClose | 关闭ini文件 | NaN | NaN | NaN | NaN | NaN |
| NaN | iniSetup | 更新ini文件 | NaN | NaN | NaN | NaN | NaN |
| NaN | actionParse | 分析行动 | NaN | NaN | NaN | NaN | NaN |
| NaN | unitParsePartA | 单位A部分分析 | NaN | NaN | NaN | NaN | NaN |
| NaN | unitParsePartB | 单位B部分分析 | NaN | NaN | NaN | NaN | NaN |
| NaN | unitParsePartC | 单位C部分分析 | NaN | NaN | NaN | NaN | NaN |
| NaN | unitParsePartD | 单位D部分分析 | NaN | NaN | NaN | NaN | NaN |
| NaN | deattachRequest | 取消附加请求 | NaN | NaN | NaN | NaN | NaN |
| NaN | got(非独立代码) | 获取 | NaN | NaN | NaN | NaN | NaN |
| NaN | customUnits(非独立代码) | 自定义单位 | NaN | NaN | NaN | NaN | NaN |
| NaN | setBuilt | 设置建造 | NaN | NaN | NaN | NaN | NaN |
| NaN | convert | 转换 | NaN | NaN | NaN | NaN | NaN |
| NaN | IGNORE | 忽略 | NaN | NaN | NaN | NaN | NaN |
| NaN | 设置特殊行动的单位(不可用?) | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | none | 无 | NaN | NaN | NaN | NaN | NaN |
| NaN | reclaimTarget | 回收目标 | NaN | NaN | NaN | NaN | NaN |
| NaN | repairTarget | 修复目标 | NaN | NaN | NaN | NaN | NaN |
| NaN | attackMove | 进军 | NaN | NaN | NaN | NaN | NaN |
| NaN | targetGround | 目标为地面 | NaN | NaN | NaN | NaN | NaN |
| NaN | pingMap | 地图映射标记 | NaN | NaN | NaN | NaN | NaN |
| NaN | directToAction | 直接行动 | NaN | NaN | NaN | NaN | NaN |
| NaN | guardUnit | 守护单位 | NaN | NaN | NaN | NaN | NaN |
| NaN | patrol | 巡逻 | NaN | NaN | NaN | NaN | NaN |
| NaN | 动画帧设置(不可用(?)) | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | frame | 帧 | NaN | NaN | NaN | NaN | NaN |
| NaN | scale | 缩放 | NaN | NaN | NaN | NaN | NaN |
| NaN | legX | 腿X坐标 | NaN | NaN | NaN | NaN | NaN |
| NaN | legY | 腿Y坐标 | NaN | NaN | NaN | NaN | NaN |
| NaN | legDir | 腿角度 | NaN | NaN | NaN | NaN | NaN |
| NaN | legHeight | 腿高度 | NaN | NaN | NaN | NaN | NaN |
| NaN | turretX | 炮塔X坐标 | NaN | NaN | NaN | NaN | NaN |
| NaN | turretY | 炮塔Y坐标 | NaN | NaN | NaN | NaN | NaN |
| NaN | legAlpha | 腿透明度 | NaN | NaN | NaN | NaN | NaN |
| NaN | event | 事件 | NaN | NaN | NaN | NaN | NaN |
| NaN | 字符串特殊组(不可用?) | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IsDead | 已死 | NaN | NaN | NaN | NaN | NaN |
| NaN | InMap | 在地图内 | NaN | NaN | NaN | NaN | NaN |
| NaN | IsGameFrame(mod=?) | 是游戏框架（模组=？） | NaN | NaN | NaN | NaN | NaN |
| NaN | Tag | 标签 | NaN | NaN | NaN | NaN | NaN |
| NaN | isComplete | 已完成 | NaN | NaN | NaN | NaN | NaN |
| NaN | EventTag | 事件标签 | NaN | NaN | NaN | NaN | NaN |
| NaN | get() | 获取 | NaN | NaN | NaN | NaN | NaN |
| NaN | Dive | 潜行 | NaN | NaN | NaN | NaN | NaN |
| NaN | Data() | 数据 | NaN | NaN | NaN | NaN | NaN |
| NaN | GameMode() | 游戏模式 | NaN | NaN | NaN | NaN | NaN |
| NaN | 未知值(不可用(?)) | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | cast | 投掷 | NaN | NaN | NaN | NaN | NaN |
| NaN | set | 设置 | NaN | NaN | NaN | NaN | NaN |
| NaN | add | 加 | NaN | NaN | NaN | NaN | NaN |
| NaN | subtract | 减 | NaN | NaN | NaN | NaN | NaN |

## 地图代码
| Unnamed: 0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | 代码 | 翻译 | 描述&解释 | 值类型 |
| NaN | 图层信息 | NaN | NaN | NaN |
| NaN | 名称 | 翻译 | 名称是固定的，错误的名称不会起到作用 | 值类型 |
| NaN | Set | 映射层 | 用于自动映射，地图编辑器根据此层生成地面层。\n属于辅助图层。删除不会对游戏有任何影响。也不会在游戏中显示。 | 非地块 |
| NaN | Ground | 地面层 | 地面层。必须存在且必须填满所有的地块，不然无法使用地图。\n不建议使用透明图块，会导致显示异常。 | 非地块 |
| NaN | Units | 单位层 | 不可见图层。它不会在游戏中显示任何图像，只用于生成单位。游戏会根据地块定义的属性生成单位。 | 非地块 |
| NaN | Items | 物品层 | 多功能图层，可以有多个。出现在地面层之上，允许使用透明素材，单位图块正常转化。地块属性并不总是有效。只有最顶层的资源池属性有效。不在小地图上显示。 | 非地块 |
| NaN | Triggers | 对象触发层 | 不可见图层，用于设置地图参数、执行触发、生成单位。 | 非地块 |
| NaN | ========== | ========== | ========== | ========== |
| NaN | Grounddetails | 地面细节层 | 单位可转换，但其它属性无效。且但是覆盖优先级比Iteam低。 | 非地块 |
| NaN | PathingOverride | 路径覆盖 | 单位可转换，覆盖地面层的属性，但不显示图像。 | 非地块 |
| NaN | UnitObjects | 单位对象层 | 刷单位图层。如果只用于放置单位，则任意其它名称都可以。 | 非地块 |
| NaN | ========== | 映射设定层 | 用于地图映射规则制作，这些不会在游戏中用到。 | ========== |
| NaN | Regions | 区域 | 设定参与映射计算的区域。例如 regions、 regions\_ground。（不填则默认为全部图层） | 此为自动映射特殊图层固定名称（可以直接写Regions或“\_”后面填写图层名称） |
| NaN | Input\_ | 输入 | 设定输入数据，如 input\_set | 此为自动映射特殊图层固定名称（“\_”后面填写图层名称） |
| NaN | InputNot\_ | 不输入 | 设定数据不输入，如 InputNot\_set | 此为自动映射特殊图层固定名称（“\_”后面填写图层名称） |
| NaN | Output\_ | 输出 | 设定输入数据在运算后输出的类型。如 output\_Ground 输出到Ground。 | 此为自动映射特殊图层固定名称（“\_”后面填写图层名称） |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 地块类型 | NaN | NaN | NaN |
| NaN | 代码 | 翻译 | 自定义地块的各类自定义属性 | 值类型 |
| NaN | water | 水 | 水面。海军，两栖之类可通过，可建造。 | 不需要填写 |
| NaN | water-bridge | 水桥 | 水面和地面属性混合，都可以通过。建筑都可以建造 | 不需要填写 |
| NaN | lava | 岩浆 | 阻止地面单位通过，并随机播放岩浆动画。 | 不需要填写 |
| NaN | lava-cliff | 岩浆-悬崖 | 只有空军可以通过。阻止机甲。 | 不需要填写 |
| NaN | cliff-soft | 悬崖-软 | 阻止陆军，阻止建造，机甲可通过，两栖可通过，飞机可降落 | 不需要填写 |
| NaN | cliff | 悬崖 | 与cliff-soft没区别 | 不需要填写 |
| NaN | large-cliff | 悬崖-大 | 只允许可跨悬崖单位通过，如机甲。 | 不需要填写 |
| NaN | block-land | 锁定陆军 | 此处阻止陆军通过，阻止机甲用过，飞行器可降落 | 不需要填写 |
| NaN | block-buildings | 锁定建筑 | 此处阻止建造建筑，1.14无效 | 不需要填写 |
| NaN | trees | 树 | 阻止陆军、悬浮通行，阻止建造，但不阻止机甲，不阻止空军降落 | 不需要填写 |
| NaN | large-rock | 大石头 | 禁止通行，禁止建造，只有飞行器能降落 | 不需要填写 |
| NaN | ========== | ========== | ========== | ========== |
| NaN | stone | 石头 | 无用属性 | 不需要填写 |
| NaN | trees | 树 | 无用属性 | 不需要填写 |
| NaN | small-rock | 小石头 | 无用属性 | 不需要填写 |
| NaN | ========== | ========== | ========== | ========== |
| NaN | res\_pool | 资源池 | 只有在此属性才能处放置资源提取器。 | 不需要填写 |
| NaN | ========== | ========== | 地块的自定义属性，用于所属队伍，以及单位和迷雾 | ========== |
| NaN | unit | 单位 | 填要生成的单位 | unit name |
| NaN | team | 队伍 | 填单位所属的玩家 | team id |
| NaN | showFog | 显示迷雾 | 填数值,用于揭开一个区域迷雾 | int |
| NaN | type | 类型 | 只用于树木,填1.0~1.4，2.0~2.4是对应的雪地版本。 | float |
| NaN | MatchType | 匹配类型 | 作用未知，可以填写的有：\nEmpty = 空\nIgnore = 忽略\nNonEmpty = 非空\nOther = 其他任意\nNegate = 否定 | 填Empty，Ignore，NonEmpty，Other，Negate |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 地图信息 | NaN | 固定名称:map\_info（仅设置一个即可） | NaN |
| NaN | 代码 | 翻译 | 名称固定为此。地图的初始化静态设定，注意是名称，不是类型 | 值类型 |
| NaN | fog | 迷雾模式 | 设置战争迷雾模式，有三种类型。不写和无效果一致。无：NONE, 一次性迷雾：map, 普通迷雾：los | NONE, map, los |
| NaN | introText | 载入文本 | 载入地图时的提示信息，即需要点ok的任务简报 | string |
| NaN | type | 类型 | 设置地图模式，不同模式下触发执行或地图设定有所不同。模式有mission（战役）, skirmish（遭遇战）, survival（生存），challenge（挑战） | mission, skirmish, survival,challenge |
| NaN | winCondition | 胜利条件 | 用于达成条件后显示胜利界面，生存下可填单位作为保护对象。\n可以填写的：\nNONE,无\nallUnitsAndBuildings 所有单位和建筑 , allBuildings 所有建筑\nmainBuilings、mainBuildings 主要建筑物，前者似乎包含未完成建筑\ncommandCenter 铁锈默认的指挥中心\nrequiredObjectives 地图所有的事件对象都被触发。 | NONE\nallUnitsAndBuildings\nallBuildings\nmainBuilingsmainBuildings\ncommandCenter\nrequiredObjectives |
| NaN | loseCondition | 失败条件 | 用于达成条件后显示失败界面，生存下可填单位作为保护对象。\n可以填写的：\nNONE,无\nallUnitsAndBuildings 所有单位和建筑 , allBuildings 所有建筑\nmainBuilings、mainBuildings 主要建筑物，前者似乎包含未完成建筑\ncommandCenter 铁锈默认的指挥中心\nrequiredObjectives 地图所有的事件对象都被触发。 | NONE\nallUnitsAndBuildings\nallBuildings\nmainBuilingsmainBuildings\ncommandCenter\nrequiredObjectives |
| NaN | survivalWaves | 生存波次 | 自定义刷兵格式例子:\n+0:30 前面是时间 - 3 tank\n+0:20 中间是名称 - 3 bugWasp\n+0:20 后面是单位 - 3 tank\n+0:20 需要按格式 - 3 tank,1 bugWasp\n+0:05 [win] | string |
| NaN | shareFogWithAllies | 迷雾共享 | 与盟友分享战争迷雾视野 | bool |
| NaN | <<<《《《其他固定名称》》》>>> | NaN | NaN | NaN |
| NaN | attack\_point | 攻击点 | 用于生存，这个不是类型，是固定名称。从多个相同名称中选择一个位置刷兵 | 不需要填写 |
| NaN | camera\_start | 镜头初始位置 | 设置镜头在战斗开始时位置，是固定名称 | 不需要填写 |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 队伍控制 | NaN | team\_#\_info | NaN |
| NaN | 代码 | 翻译 | 初始化每个玩家的设定。名称随意，但类型为team\_info，可以设置玩家各类的初始值 | 值类型 |
| NaN | team | 所属 | 设定触发的所属方。填数值，从0开始。因为铁锈不能自定义位置和颜色，所有0就是绿色玩家；1就是红色玩家，以此类推。-1和不需要填写用于中立，-2是敌对中立。 | 不需要填写 / team id |
| NaN | credits | 资金 | 设定玩家初始资金。 | int |
| NaN | allyGroup | 结盟 | 设定结盟关系，拥有相同组的玩家互为队友。 | int |
| NaN | disabledAI | 禁用AI | 阻止ai索敌、建造和执行action等。 | bool |
| NaN | lockAiDifficulty | 锁定AI难度等级 | 关于数值的说明\n│-4 = 观战\n│ -3 = <unknow>\n│ -2 = Very Easy\n│ -1 = Easy\n│ 0 = Medium\n│ 1 = Hard\n│ 2 = Very Hard\n│ 3 = Impossible\n注：数值大小会影响AI的经济增长，最小为经济每次加1，最大理论上貌似为无限。。。 | int |
| NaN | ai | 人机行为 | 值填写survival，可以让AI更主动地送兵，适用于生存地图\n建造者什么的也会被拿去送，而且对面没有对应的能攻击的单位的话不会移动这个单位。（也就是说当你没有空中单位的时候对方的拦截机并不会过来） | 填survival |
| NaN | allyGroup | 结盟关系 | 设置该玩家所属的阵营，值填写数字\n设定结盟关系，拥有相同组的玩家互为队友。 | int |
| NaN | basicAI | 基本AI | 让该队伍的AI不会建造东西，只出兵，值不填写 | 不需要填写 |
| NaN | 不属于team\_info | ========== | 填于类型，需设所属 | ========== |
| NaN | ai\_allow\_full\_use | 允许AI充分利用 | 允许AI充分使用区域内单位。 | bool |
| NaN | disable\_unit\_ai | 禁止AI使用 | 禁止AI使用区域内单位。 | bool |
| NaN | set\_team | 设置队伍 | 更改放置单位所属的队伍。铁锈是按图块分玩家的，这导致单位类型数量受限，目前1号为最为充足，此操作可把1号位单位变为其它玩家的。 | team id |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 触发控制 | NaN | objective（该类型区内代码全类型通用） | NaN |
| NaN | 代码 | 翻译 | 自身没有作用，仅可以用来作为winCondition为requiredObjectives时的胜利条件 | 值类型 |
| NaN | activatedBy | 激活来源 | 当某触发条件满足时，它的id会标记为激活状态。当ID被激活时，执行此触发。例如：第一关当您建造提取器时，会激活自身定义的id，然后而空降移动炮台随执行。 | id |
| NaN | deactivatedBy | 禁用来源 | 同上，用于禁用触发。 | id |
| NaN | alsoActivate | 也激活 | 用于激活更多的触发。使这个触发器激活另一个触发器。 | id |
| NaN | activateIds | 激活ID | 未测试-无说明 | id |
| NaN | whenActivatedIds | 当激活ID时 | 未测试-无说明 | id |
| NaN | ========== | ========== | 地图代码通用组 | ========== |
| NaN | delay | 延时 | 多久后执行触发，单位毫秒。1000毫秒等于1秒。或是写s作为时间单位。 | time / s |
| NaN | repeatDelay | 重复延迟 | 一旦激活，每隔此时间后再次激活 | time / s |
| NaN | repeatCount | 重复次数 | 重复计数-默认是无限的 | int |
| NaN | resetActivationAfter | 复位后激活 | 在这段时间后，激活，使触发器可以再次激活 | time / s |
| NaN | allToActivate | 全处于激活 | 要求所有链接的触发器都被激活。默认为false，只需要一个 | bool |
| NaN | warmup | 触发延迟 | 满足激活条件后，先延迟此时间 | time / s |
| NaN | ========== | ========== | ========== | ========== |
| NaN | changeCredits | 更改资金 | 设定玩家资金，可重复使用。 | int |
| NaN | teamTags | 队伍标签 | 用于mod。 | team tag(s) |
| NaN | removeTeamTags | 移除队伍标签 | 用于mod。 | team tag(s) |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 队伍标签 | NaN | teamTags | NaN |
| NaN | 代码 | 翻译 | 标签检测 | 值类型 |
| NaN | addTeamTags | 添加队伍标签 | 用于mod，值是字符串，（主要是与单位代码的队伍标签互动） | string |
| NaN | removeTeamTags | 删除队伍标签 | 用于mod，值是字符串，（主要是与单位代码的队伍标签互动） | string |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 标签检测 | NaN | teamTagDetect | NaN |
| NaN | 代码 | 翻译 | 标签检测 | 值类型 |
| NaN | team | 队伍 | 用于mod。 | team id |
| NaN | teamTag | 队伍标签 | 用于mod。 | team tag(s) |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 运动控制 | NaN | move | NaN |
| NaN | 代码 | 翻译 | 该类型填写后，这个事件对象可以指定单位的移动，一般需与“point”类型事件对象一起使用 | 值类型 |
| NaN | delay | 延时 | 多久后执行触发，单位毫秒。1000毫秒等于1秒。或是写s作为时间单位。 | time / s |
| NaN | target | 目标 | 移动单位到指定触发点。 | point name |
| NaN | team | 队伍 | 触发所属方，用于指定移动哪个玩家的单位。 | team id |
| NaN | unload | 卸载 | 到达位置后自动卸载单位，不需要值。 | 不需要填写 |
| NaN | ========== | ========== | ========== | ========== |
| NaN | dir | 角度 | 单位旋转度数，铁锈单位默认朝右为0度。类型填rotate。 | float |
| NaN | unload | 卸载 | 卸载单位 如果是一个载具的话，当移动到目标点后将会卸载载具中的单位 | 不需要填写 |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 单位检测 | NaN | unitDetect | NaN |
| NaN | 代码 | 翻译 | 描述 | 值类型 |
| NaN | id | ID | 用于标记触发。 | int |
| NaN | team | 队伍 | 触发所属方。 | team id |
| NaN | ========== | ========== | ========== | ========== |
| NaN | showOnMap | 显示于地图 | 创建小地图事件，告诉玩家在哪里发生的。 | bool |
| NaN | globalMessage | 显示文本信息 | 在左上角显示文本信息。 | string |
| NaN | globalMessage\_delayPerChar | 显示文本信息延迟 | 用于动态创建文本，类似打字机效果。 | float / 填slow |
| NaN | globalMessage\_textColor | 显示文本信息颜色 | 填文本颜色格式如#000000 | color |
| NaN | debugMessage | 调试文本 | 只有在调试模式开启的沙盒模式中才显示消息 | string |
| NaN | 触发条件（单位） | ========== | 条件，供范围式事件对象使用（PC端的不建议用单点式） | ========== |
| NaN | unit\_type | 单位类型 | 用于指定单位才能达成触发条件 | unit name |
| NaN | minUnits | 最小数量 | 事件对象覆盖范围内，触发事件对象单位最小不小于你所填的数字 | int |
| NaN | maxUnits | 最大数量 | 事件对象覆盖范围内，触发这条事件对象最大不能超过你所填的数字 | int |
| NaN | onlyIdle | 只有闲置 | 单位在事件对象所覆盖的范围内，没有动作指令时触发该事件对象 | bool |
| NaN | onlyBuilders | 只有建造单元 | 事件对象覆盖的范围内，有建造能力的单位的时候触发该事件对象 | bool |
| NaN | onlyMainBuildings | 只有主要建筑 | 事件对象覆盖的范围内，有能够造东西的建筑的时候触发该事件对象 | bool |
| NaN | onlyTechLevel | 只有特定等级 | 事件对象覆盖的范围内，有符合该属性值内科技等级单位时候触发该事件对象 | int |
| NaN | onlyEmptyQueue | 只有空队列 | 事件对象覆盖的范围内，工厂不在生产东西的时候触发该事件对象 | bool |
| NaN | onlyOnResourcePool | 只有在资源池上 | 事件对象覆盖的范围内的矿坑上有资源采集器的时候触发该事件对象 | bool |
| NaN | onlyIfEmpty | 只有为空 | 事件对象覆盖的范围内，什么都没有的时候触发该事件对象 | bool |
| NaN | onlyBuildings | 只有建筑 | 事件对象覆盖的范围内，有建筑物时触发该事件对象 | bool |
| NaN | onlyAttack | 只有攻击 | 事件对象覆盖的范围内，有攻击性的单位时候触发该事件对象 | bool |
| NaN | onlyAttackAir | 只有攻击空中 | 事件对象覆盖的范围内有只攻击空军的单位时候触发该事件对象 | bool |
| NaN | onlyWithTag | 只有标签 | 事件对象覆盖范围内，检测有特定标签的单位，满足此条件才能触发。 | tag(s) |
| NaN | includeIncomplete | 包括不完整 | 事件对象覆盖的范围内有未被建造完成的单位时候触发该事件对象 | bool |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 修改资金 | NaN | changeCredits | NaN |
| NaN | 代码 | 翻译 | 该类型填写后，这个事件对象可以用来更改玩家资金 | 值类型 |
| NaN | set | 设置资金 | 可以为负数，填写数字，这条代码在1.14会报错，但是又可以使用（该bug在1.15修复） | int |
| NaN | add | 添加资金 | 可以为负数，填写数字，该代码在1.14版本会报错并且无效，需要由万恶的第三方触发，但是该bug在1.15被修复 | int |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 添加单位/删除单位 | NaN | unitAdd/unitRemove | NaN |
| NaN | 代码 | 翻译 | 其他条件通用，满足条件即刷单位。 | 值类型 |
| NaN | team | 队伍 | 触发所属方。 | team id |
| NaN | spawnUnits | 产生单位 | 填单位名，可用ini代码表里面的操作。例如mechBunker\*1(falling=true) | units |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 地图文本 | NaN | mapText | NaN |
| NaN | 代码 | 翻译 | 描述 | 值类型 |
| NaN | deactivatedBy | 激活来源 | 您需要通过一些条件激活… | conditional |
| NaN | delay | 延迟 | 延迟一定时间后显示 | delay |
| NaN | textColor | 文本颜色 | 设置文本颜色 | color |
| NaN | textSize | 文本大小 | 设置文本大小 | int |
| NaN | textOffsetX | 文本偏移x | 设置文本偏移x | float |
| NaN | textOffsetY | 文本偏移y | 设置文本偏移y | float |
| NaN | text | 文本 | 设置文本 | string |
| NaN | text\_[language] | 多语言文本 | 设置在不同的语言情况下的地图文本 | string |
| NaN | style | 样式 | 留空或者为arrow（箭头） | style type |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 控制镜头 | NaN | camera\_pan | NaN |
| NaN | 代码 | 翻译 | 该类型填写后，这个事件对象可以更改你的屏幕显示的区域。但是：此类型不可用于自定义地图 | 值类型 |
| NaN | zoomTo | 镜头缩放 | 写于camera\_start下，填整数，越大画面显示内容越少。0报错。 | int |
| NaN | index | 镜头索引 | 镜头移动的顺序 | int |
| NaN | NaN | NaN | NaN | NaN |
| NaN | <<<《《《地图类型汇总》》》>>> | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | team\_info | 该类型填写后，这个事件对象将可以设置玩家的初始值\n如设置某玩家的初始金钱数，盟友关系，特别可以设置当这个玩家为ai时的情况（如主动进攻，是否允许ai使用）等等 | NaN | NaN |
| NaN | unitAdd | 该类型填写后，这个事件对象可以刷兵\n可以刷任何的单位（还可以刷左上角在玩家聊天区系统显示的文字） | NaN | NaN |
| NaN | unitRemove | 该类型填写后，这个事件对象可以删除单位\n和unitAdd一样用法（但是不能指定特定的某个单位） | NaN | NaN |
| NaN | unitDetect | 该类型填写后，这个事件对象可以检测单位\n检测事件对象所覆盖的单位，一旦该事件对象所覆盖的区域内的单位达成该事件对象的触发条件，那么这个事件对象就触发 | NaN | NaN |
| NaN | mapText | 该类型填写后，这个事件对象可以在地图表面上显示文本 | NaN | NaN |
| NaN | camera\_pan | 该类型填写后，这个事件对象可以更改你的屏幕显示的区域\n强制控制镜头在指定位置！属性只用填写index\n注：此类型不可用于自定义地图 | NaN | NaN |
| NaN | objective | 自身没有作用，可以用来作为winCondition为requiredObjectives时的胜利条件（被激活后胜利） | NaN | NaN |
| NaN | fall | 该类型填写后，这个事件对象可以用来开局在该事件对象覆盖区从天而降单位（也可以使用spawnUnits单位附加属性里的falling=true来达到相同的效果）\n对一些单位无效 | NaN | NaN |
| NaN | rotate | 该类型填写后，这个事件对象可以用于改变单位旋转角度\n里面的属性只能填dir | NaN | NaN |
| NaN | move | 该类型填写后，这个事件对象可以指定单位的移动\n移动可移动的单位（不包括建筑），一般与point类型连用 | NaN | NaN |
| NaN | point | 需要与move类型连用，该类型填写后，这个事件对象可以指定单位移动的目的地\n目的地就是该事件对象所在位置 | NaN | NaN |
| NaN | set\_team | 该类型填写后，这个事件对象可以用来设置事件对象所覆盖的区域内单位所属的队伍\n里面的属性只能填team | NaN | NaN |
| NaN | ai\_allow\_full\_use | 该类型填写后将允许AI充分使用该事件对象所覆盖区域内单位，仅需填类即可 | NaN | NaN |
| NaN | disable\_unit\_ai | 该类型填写后将禁止AI使用该事件对象所覆盖区域内单位移动（但不会禁止工厂使用），仅需填类即可 | NaN | NaN |
| NaN | moveCamera | 该类型填写后，这个事件对象可以用来将屏幕视野强制移动到指定位置\n但是特殊的属性代码：spawnUnits、team，无法在这里使用\n里面的属性填写一般通用的属性 | NaN | NaN |
| NaN | teamTags | 该类型填写后，这个事件对象可以用来编辑（添加，删除）队伍标签\n用于mod | NaN | NaN |
| NaN | teamTagDetect | 该类型填写后，这个事件对象可以用来检测队伍标签\n用于mod | NaN | NaN |
| NaN | basic | 自身没有作用，但是可以用来做链接激活的占位符 | NaN | NaN |
| NaN | changeCredits | 该类型填写后，这个事件对象可以用来更改玩家资金 | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | 其他 | NaN | NaN | NaN |
| NaN | predefined Value | NaN | NaN | NaN |

## 参考值
| Unnamed: 0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 | Unnamed: 15 | Unnamed: 16 | Unnamed: 17 | Unnamed: 18 | Unnamed: 19 | Unnamed: 20 | Unnamed: 21 | Unnamed: 22 | Unnamed: 23 | Unnamed: 24 | Unnamed: 25 | Unnamed: 26 | Unnamed: 27 | Unnamed: 28 | Unnamed: 29 | Unnamed: 30 | Unnamed: 31 | Unnamed: 32 | Unnamed: 33 | Unnamed: 34 | Unnamed: 35 | Unnamed: 36 | Unnamed: 37 | Unnamed: 38 | Unnamed: 39 | Unnamed: 40 | Unnamed: 41 | Unnamed: 42 | Unnamed: 43 | Unnamed: 44 | Unnamed: 45 | Unnamed: 46 | Unnamed: 47 | Unnamed: 48 | Unnamed: 49 | Unnamed: 50 | Unnamed: 51 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | 内置爆炸效果 | NaN | NaN | NaN | NaN | NaN | NaN | 运动类型 | NaN | NaN | NaN | NaN | NaN | 行动框类型 | NaN | NaN | NaN | 内存(memory)的种类 | NaN | NaN | NaN | 内存数组 | NaN | NaN | NaN | NaN | NaN | NaN | 单位表 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 1.15 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | none\nsmoke\nshockwave\nlarge\nsmall\nmedium\nsmallExplosion\nlargeExplosion\nnoneExplosion\nverysmall\nnormal\nlargeUnit\nbuilding\nbuildingNoShockwaveOrSmoke\nverylargeBuilding | NaN | NaN | 无\n烟\n冲击波\n开火小\n开火大\n中等\n小爆炸\n大爆炸\n无爆炸\n很小\n普通\n大单位\n建筑\n建筑无冲击烟雾\n特大型建筑 | NaN | NaN | NaN | NONE\nLAND\nBUILDING\nAIR\nWATER\nHOVER\nOVER\_CLIFF\nOVER\_CLIFF\_WATER | NaN | 无\n陆地\n建筑\n空军\n水军\n两栖\n跨悬崖\n跨悬崖和水 | NaN | NaN | NaN | none | NaN | 无(绿色) | NaN | text | NaN | 文本 | NaN | bool[] | NaN | 布尔[] | NaN | NaN | NaN | NaN | dex内部 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 外部 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rally | NaN | 集结(白色) | NaN | string | NaN | 字符串 | NaN | boolean[] | NaN | 布尔值[] | NaN | NaN | NaN | NaN | airFactory | NaN | NaN | NaN | 空军工厂 | NaN | NaN | NaN | NaN | scout | NaN | NaN | NaN | 侦察 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | upgrade | NaN | 升级(蓝色) | NaN | bool | NaN | 布尔 | NaN | unit[] | NaN | 单位[] | NaN | NaN | NaN | NaN | airShip | NaN | NaN | NaN | 航空母舰 | NaN | NaN | NaN | NaN | robotCrabWater | NaN | NaN | NaN | 机器人螃蟹水 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | queueUnit | NaN | 单位队列(绿色) | NaN | boolean | NaN | 布尔值 | NaN | number[] | NaN | 数字[] | NaN | NaN | NaN | NaN | amphibiousJet | NaN | NaN | NaN | 水陆两用喷气式飞机 | NaN | NaN | NaN | NaN | robotCrab | NaN | NaN | NaN | 机器人螃蟹 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | building | NaN | 建筑(绿色) | NaN | unit | NaN | 单位 | NaN | float[] | NaN | 浮点值[] | NaN | NaN | NaN | NaN | antiAirTurret | NaN | NaN | NaN | 防空炮塔 | NaN | NaN | NaN | NaN | plasmaTank | NaN | NaN | NaN | 等离子体罐 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | action | NaN | 行为(蓝色) | NaN | number | NaN | 数字 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | antiAirTurretT2 | NaN | NaN | NaN | 防空炮塔T2 | NaN | NaN | NaN | NaN | outpostT2 | NaN | NaN | NaN | 前哨站t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | infoOnly | NaN | 仅信息(灰色) | NaN | float | NaN | 浮点值 | NaN | NaN | 路径点类型 | NaN | NaN | NaN | NaN | NaN | AntiNukeLaucher | NaN | NaN | NaN | 反核发射塔 | NaN | NaN | NaN | NaN | outpostT1 | NaN | NaN | NaN | 前哨站t1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | infoOnlyNoBox | NaN | 无框信息 | NaN | NaN | NaN | NaN | NaN | NaN | move | NaN | NaN | 移动 | NaN | NaN | artillery | NaN | NaN | NaN | 火炮 | NaN | NaN | NaN | NaN | nukeLauncherC | NaN | NaN | NaN | 核武器发射器c | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | infoOnlyStockpile | NaN | 仅信息库存 | NaN | NaN | NaN | NaN | NaN | NaN | attackMove | NaN | NaN | 移动攻击 | NaN | NaN | attackSubmarine | NaN | NaN | NaN | 攻击潜艇 | NaN | NaN | NaN | NaN | nautilusSubmarineSurface | NaN | NaN | NaN | 鹦鹉螺号【水面】 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | AI不同难度资金比例： | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | guard | NaN | NaN | 防守 | NaN | NaN | battleShip | NaN | NaN | NaN | 战舰 | NaN | NaN | NaN | NaN | nautilusSubmarineLand | NaN | NaN | NaN | 鹦鹉螺号【陆地】 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 最简单(非常简单) | NaN | NaN | 0.4 | NaN | NaN | 地图位置产生指定单位 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | loadInto | NaN | NaN | 进入载具 | NaN | NaN | editorOrBuilder | NaN | NaN | NaN | 沙盒建造者 | NaN | NaN | NaN | NaN | nautilusSubmarine | NaN | NaN | NaN | 鹦鹉螺号 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 简单（简单） | NaN | NaN | 0.7 | NaN | NaN | emptyResourcePools\_asNeutral | NaN | NaN | NaN | 产生于空资源池，且为中立所属 | NaN | NaN | NaN | NaN | loadUp | NaN | NaN | 主动装载 | NaN | NaN | builder | NaN | NaN | NaN | 建造者 | NaN | NaN | NaN | NaN | modularSpider\_smallgunturretT2 | NaN | NaN | NaN | 模块化蜘蛛小炮塔t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 中等（正常） | NaN | NaN | 1.0 | NaN | NaN | emptyOrOccupiedResourcePools\_asNeutral | NaN | NaN | NaN | 空的或已经占用资源池，且为中立所属 | NaN | NaN | NaN | NaN | attack | NaN | NaN | 攻击 | NaN | NaN | builderShip | NaN | NaN | NaN | 海上建造者 | NaN | NaN | NaN | NaN | modularSpider\_smallgunturret | NaN | NaN | NaN | 模块化蜘蛛小型炮塔 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 困难（困难） | NaN | NaN | 1.4 | NaN | NaN | mapCenter\_asNeutral | NaN | NaN | NaN | 地图中心，且为中立所属 | NaN | NaN | NaN | NaN | reclaim | NaN | NaN | 回收 | NaN | NaN | commandCenter | NaN | NaN | NaN | 指挥中心 | NaN | NaN | NaN | NaN | modularSpider\_shieldGen | NaN | NaN | NaN | 模块化护盾发生器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 很困难（非常困难） | NaN | NaN | 1.8 | NaN | NaN | mapCenter\_eachActiveTeam | NaN | NaN | NaN | 地图中心，且给与每个玩家 | NaN | NaN | NaN | NaN | repair | NaN | NaN | 维修 | NaN | NaN | crystal\_mid | NaN | NaN | NaN | 中等水晶 | NaN | NaN | NaN | NaN | modularSpider\_nonEmpty | NaN | NaN | NaN | 模块化蜘蛛非空 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 不可能的（炼狱模式） | NaN | NaN | 3.7 | NaN | NaN | spawnPoint\_eachActiveTeam | NaN | NaN | NaN | 玩家初始位置，给与每个玩家 | NaN | NaN | NaN | NaN | touchTarget | NaN | NaN | 靠近目标 | NaN | NaN | crystalResource | NaN | NaN | NaN | 水晶资源 | NaN | NaN | NaN | NaN | modularSpider\_lightning | NaN | NaN | NaN | 模块化蜘蛛闪电 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | build | NaN | NaN | 建造 | NaN | NaN | damagingBorder | NaN | NaN | NaN | 伤害边界 | NaN | NaN | NaN | NaN | modularSpider\_laserdefense | NaN | NaN | NaN | 模块化蜘蛛激光防御 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | “自动触发事件”(autoTriggerOnEvent)的可填事件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 移动方式 | NaN | NaN | NaN | NaN | NaN | follow | NaN | NaN | 跟随 | NaN | NaN | dropship | NaN | NaN | NaN | 运输船 | NaN | NaN | NaN | NaN | modularSpider\_gunturretT2 | NaN | NaN | NaN | 模块化蜘蛛火炮t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 创建 | NaN | NaN | NaN | created | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 无 | NaN | NONE | NaN | NaN | NaN | setPassiveTarget | NaN | NaN | 被动 | NaN | NaN | experimentalGunship | NaN | NaN | NaN | 实验炮舰 | NaN | NaN | NaN | NaN | modularSpider\_gunturret | NaN | NaN | NaN | 模块化火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 完成且激活 | NaN | NaN | NaN | completeAndActive | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 陆地 | NaN | LAND | NaN | NaN | NaN | unloadAt | NaN | NaN | 卸载至 | NaN | NaN | experimentalGunshipLanded | NaN | NaN | NaN | 实验炮舰陆地 | NaN | NaN | NaN | NaN | modularSpider\_fabricatorT2 | NaN | NaN | NaN | 模块化蜘蛛工厂t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 销毁 | NaN | NaN | NaN | destroyed | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 建筑 | NaN | BUILDING | NaN | NaN | NaN | patrol | NaN | NaN | 巡逻 | NaN | NaN | experimentalHoverTank | NaN | NaN | NaN | 实验悬浮坦克 | NaN | NaN | NaN | NaN | modularSpider\_fabricator | NaN | NaN | NaN | 模块化蜘蛛工厂 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 杀死任何单位 | NaN | NaN | NaN | killedAnyUnit | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 空中 | NaN | AIR | NaN | NaN | NaN | guardAt | NaN | NaN | 防守至 | NaN | NaN | experimentalLandFactory | NaN | NaN | NaN | 实验性陆地工厂 | NaN | NaN | NaN | NaN | modularSpider\_emptySlot | NaN | NaN | NaN | 模块化蜘蛛空插槽 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 队列中单位完成 | NaN | NaN | NaN | queuedUnitFinished | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 水面 | NaN | WATER | NaN | NaN | NaN | triggerAction | NaN | NaN | 触发行动 | NaN | NaN | experimentalTank | NaN | NaN | NaN | 实验坦克 | NaN | NaN | NaN | NaN | modularSpider\_artillery | NaN | NaN | NaN | 模块化蜘蛛式火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 队列添加项目 | NaN | NaN | NaN | queueItemAdded(1.15p9中添加了withActionTag和queueItemCancelled两个参数,用于触发动作时检测标签.) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 两栖 | NaN | HOVER | NaN | NaN | NaN | triggerActionWhenInRange | NaN | NaN | 在范围内时触发行动 | NaN | NaN | extractor | NaN | NaN | NaN | 资源提取器 | NaN | NaN | NaN | NaN | modularSpider\_antinuke | NaN | NaN | NaN | 模块化蜘蛛核弹 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 队列项目取消 | NaN | NaN | NaN | queueItemCancelled | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 跨悬崖 | NaN | OVER\_CLIFF | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | fabricator | NaN | NaN | NaN | 工厂 | NaN | NaN | NaN | NaN | modularSpider\_antiairT2 | NaN | NaN | NaN | 模块化蜘蛛防空t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 传送 | NaN | NaN | NaN | teleported | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 跨水和悬崖 | NaN | OVER\_CLIFF\_WATER | NaN | NaN | 内置音效 | NaN | NaN | NaN | NaN | NaN | NaN | fogRevealer | NaN | NaN | NaN | 揭开迷雾 | NaN | NaN | NaN | NaN | modularSpider\_antiairFlak | NaN | NaN | NaN | 模块化蜘蛛防空高射炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 接触目标成功 | NaN | NaN | NaN | touchTargetSuccess | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bug\_attack | NaN | 虫子攻击音效 | NaN | NaN | NaN | NaN | gunBoat | NaN | NaN | NaN | 炮艇 | NaN | NaN | NaN | NaN | modularSpider\_antiair | NaN | NaN | NaN | 模块化蜘蛛防空 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 玩家指定路径 | NaN | NaN | NaN | newWaypointGivenByPlayer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 效果优先级 | NaN | NaN | NaN | NaN | bug\_die | NaN | 虫子死亡音效 | NaN | NaN | NaN | NaN | gunShip | NaN | NaN | NaN | 炮舰 | NaN | NaN | NaN | NaN | modularSpider | NaN | NaN | NaN | 模块化蜘蛛 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 队伍变更 | NaN | NaN | NaN | teamChanged | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | verylow | NaN | 很低 | NaN | NaN | building\_explode | NaN | 建筑爆炸音效 | NaN | NaN | NaN | NaN | heavyHoverTank | NaN | NaN | NaN | 重型悬浮坦克 | NaN | NaN | NaN | NaN | missing | NaN | NaN | NaN | 数据丢失 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | mia | NaN | NaN | NaN | transportingNewUnit | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | low | NaN | 低 | NaN | NaN | cannon\_firing | NaN | 大炮射击音效 | NaN | NaN | NaN | NaN | heavyTank | NaN | NaN | NaN | 重型坦克 | NaN | NaN | NaN | NaN | missileTank | NaN | NaN | NaN | 导弹坦克 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 卸载或移除单位 | NaN | NaN | NaN | transportUnloadedOrRemovedUnit | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | high | NaN | 高 | NaN | NaN | click | NaN | 按下按钮音效 | NaN | NaN | NaN | NaN | helicopter | NaN | NaN | NaN | 直升机 | NaN | NaN | NaN | NaN | missileAirship | NaN | NaN | NaN | 导弹飞艇 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 受到伤害[支持可选的(withTag=x)] | NaN | NaN | NaN | tookDamage[支持可选的(withTag=x)] | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | veryhigh | NaN | 很高 | NaN | NaN | click\_add | NaN | 按下(增加)音效 | NaN | NaN | NaN | NaN | hovercraft | NaN | NaN | NaN | 气垫船 | NaN | NaN | NaN | NaN | mechMissile | NaN | NaN | NaN | 机械导弹 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 进入载具 | NaN | NaN | NaN | enteredTransport | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | critical | NaN | 至关重要 | NaN | NaN | click\_remove | NaN | 按下(移除)音效 | NaN | NaN | NaN | NaN | hoverTank | NaN | NaN | NaN | 悬浮坦克 | NaN | NaN | NaN | NaN | mechMinigun | NaN | NaN | NaN | 机关枪 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 离开载具 | NaN | NaN | NaN | leftTransport | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | firing3 | NaN | 射击3音效 | NaN | NaN | NaN | NaN | ladybug | NaN | NaN | NaN | 瓢虫 | NaN | NaN | NaN | NaN | mechLightning | NaN | NaN | NaN | 机械闪电 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 新消息(withTag=x) | NaN | NaN | NaN | newMessage(withTag=x) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | aiUse可填值 | NaN | NaN | NaN | NaN | firing4 | NaN | 射击4音效 | NaN | NaN | NaN | NaN | landFactory | NaN | NaN | NaN | 陆地工厂 | NaN | NaN | NaN | NaN | mechLaser | NaN | NaN | NaN | 机械激光器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 移除附属 | NaN | NaN | NaN | attachmentRemoved | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | auto | NaN | 自动 | NaN | NaN | gun\_fire | NaN | 枪炮射击音效 | NaN | NaN | NaN | NaN | laserDefence | NaN | NaN | NaN | 激光防御 | NaN | NaN | NaN | NaN | mechHeavyMissile | NaN | NaN | NaN | 机械重型导弹 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 无 | NaN | NaN | NaN | NONE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | launch | NaN | 发射 | NaN | NaN | interface\_error | NaN | 接口错误音效 | NaN | NaN | NaN | NaN | laserTank | NaN | NaN | NaN | 激光坦克 | NaN | NaN | NaN | NaN | mechGun | NaN | NaN | NaN | 机关枪 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | launchAmmo | NaN | 增加弹药 | NaN | NaN | large\_gun\_fire1 | NaN | 大型枪炮发射1音效 | NaN | NaN | NaN | NaN | mammothTank | NaN | NaN | NaN | 猛犸坦克 | NaN | NaN | NaN | NaN | mechFlyingTakeoff | NaN | NaN | NaN | 机械起飞 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 代码可用内置图像 | NaN | NaN | NaN | NaN | NaN | NaN | 逻辑参数 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | disabled | NaN | 残缺 | NaN | NaN | large\_gun\_fire2 | NaN | 大型枪炮发射2音效 | NaN | NaN | NaN | NaN | mech\_gun | NaN | NaN | NaN | 基础机甲 | NaN | NaN | NaN | NaN | mechFlyingLanded | NaN | NaN | NaN | 机械飞行着陆 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | shared内的可用图像 | NaN | NaN | NaN | NaN | NaN | NaN | withTag | NaN | 需要标签 | NaN | NaN | NaN | NaN | NaN | NaN | upGrade | NaN | 升级 | NaN | NaN | laser\_deflect | NaN | 激光偏转音效 | NaN | NaN | NaN | NaN | mechFlyingLanded | NaN | NaN | NaN | 飞行机甲着陆 | NaN | NaN | NaN | NaN | mechFlame | NaN | NaN | NaN | 机械火焰 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | area\_guide.png | NaN | NaN | 范围预览图 | NaN | NaN | NaN | includes | NaN | 包含标签 | NaN | NaN | NaN | NaN | NaN | NaN | movementChange | NaN | 运动改变 | NaN | NaN | laser\_deflect2 | NaN | 激光偏转2音效 | NaN | NaN | NaN | NaN | megaTank | NaN | NaN | NaN | 巨型坦克 | NaN | NaN | NaN | NaN | mechFactoryT2 | NaN | NaN | NaN | 机械工厂t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | beam1.png | NaN | NaN | 光束1贴图 | NaN | NaN | NaN | type | NaN | 类型 | NaN | NaN | NaN | NaN | NaN | NaN | sameAsBuilding | NaN | 与建筑物相同 | NaN | NaN | lighting\_burst | NaN | 突发照明音效 | NaN | NaN | NaN | NaN | missileShip | NaN | NaN | NaN | 导弹船 | NaN | NaN | NaN | NaN | mechFactory | NaN | NaN | NaN | 机械制造厂 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | beam2.png | NaN | NaN | 光束2贴图 | NaN | NaN | NaN | greaterThan | NaN | 超过 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | message | NaN | 信息音效 | NaN | NaN | NaN | NaN | missing | NaN | NaN | NaN | 数据丢失 | NaN | NaN | NaN | NaN | mechEngineer | NaN | NaN | NaN | 机械工程师 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | beam3.png | NaN | NaN | 光束3贴图 | NaN | NaN | NaN | lessThan | NaN | 少于 | NaN | NaN | 动画触发条件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | missile\_fire | NaN | 导弹发射音效 | NaN | NaN | NaN | NaN | NukeLaucher | NaN | NaN | NaN | 核弹发射井 | NaN | NaN | NaN | NaN | mechBunkerDeployed | NaN | NaN | NaN | 机械掩体已部署 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | beam1\_end.png | NaN | NaN | 光束1击中图 | NaN | NaN | NaN | equalTo | NaN | 等于 | NaN | NaN | 移动 | NaN | NaN | NaN | move | NaN | NaN | NaN | NaN | missile\_hit | NaN | 导弹击中音效 | NaN | NaN | NaN | NaN | repairbay | NaN | NaN | NaN | 修复湾 | NaN | NaN | NaN | NaN | mechBunker | NaN | NaN | NaN | 机械煤仓 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | beam1\_start.png | NaN | NaN | 光束1起始图 | NaN | NaN | NaN | full | NaN | 满 | NaN | NaN | 攻击 | NaN | NaN | NaN | attack | NaN | NaN | NaN | NaN | move | NaN | 移动音效 | NaN | NaN | NaN | NaN | seaFactory | NaN | NaN | NaN | 海军工厂 | NaN | NaN | NaN | NaN | mechArtillery | NaN | NaN | NaN | 机关炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | blank.png | NaN | NaN | 空白贴图 | NaN | NaN | NaN | empty | NaN | 空 | NaN | NaN | 闲置 | NaN | NaN | NaN | idle | NaN | NaN | NaN | NaN | nuke\_explode | NaN | 核弹爆炸音效 | NaN | NaN | NaN | NaN | spiderBot | NaN | NaN | NaN | 蜘蛛机器人 | NaN | NaN | NaN | NaN | lightSub | NaN | NaN | NaN | 轻型潜艇 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | debug\_marker.png | NaN | NaN | 调试缩放标记图 | NaN | NaN | NaN | withinRange | NaN | 范围内 | NaN | NaN | 在建造中 | NaN | NaN | NaN | underConstruction | NaN | NaN | NaN | NaN | nuke\_launch | NaN | 核弹发射音效 | NaN | NaN | NaN | NaN | spreadingFire | NaN | NaN | NaN | 火势蔓延 | NaN | NaN | NaN | NaN | lightGunship | NaN | NaN | NaN | 轻型武装直升机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | experimental\_tank\_turret.png | NaN | NaN | 实验坦克炮塔图 | NaN | NaN | NaN | withTag | NaN | 需标签 | NaN | NaN | 建造中并将动画拉伸至建造时长 | NaN | NaN | NaN | underConstructionWithLinkedBuiltTime | NaN | NaN | NaN | NaN | plasma\_fire | NaN | 等离子射击音效 | NaN | NaN | NaN | NaN | supplyDepot | NaN | NaN | NaN | 补给站 | NaN | NaN | NaN | NaN | laboratory | NaN | NaN | NaN | 实验室 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | experimental\_tank\_turret2.png | NaN | NaN | 实验坦克炮塔图2 | NaN | NaN | NaN | incompleteBuildings | NaN | 包含未完成的 | NaN | NaN | 生产中 | NaN | NaN | NaN | queuedUnits | NaN | NaN | NaN | NaN | plasma\_fire2 | NaN | 等离子射击2音效 | NaN | NaN | NaN | NaN | tank | NaN | NaN | NaN | 坦克 | NaN | NaN | NaN | NaN | heavySub | NaN | NaN | NaN | 重型潜艇 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | experimental\_tank\_turret3.png | NaN | NaN | 实验坦克炮塔图3 | NaN | NaN | NaN | factoryQueue | NaN | 包含队列中的 | NaN | NaN | 未知 | NaN | NaN | NaN | Unknown | NaN | NaN | NaN | NaN | tank\_firing | NaN | 坦克射击音效 | NaN | NaN | NaN | NaN | tankDestroyer | NaN | NaN | NaN | 坦克杀手 | NaN | NaN | NaN | NaN | heavyMissileShip | NaN | NaN | NaN | 重型导弹船 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | foot.png | NaN | NaN | 脚图 | NaN | NaN | NaN | withinSeconds | NaN | 指定时间内 | NaN | NaN | 修复 | NaN | NaN | NaN | repair | NaN | NaN | NaN | NaN | unit\_explode | NaN | 单位爆炸音效 | NaN | NaN | NaN | NaN | test\_tank | NaN | NaN | NaN | 试验坦克 | NaN | NaN | NaN | NaN | heavyInterceptor | NaN | NaN | NaN | 重型拦截器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | leg.png | NaN | NaN | 腿图 | NaN | NaN | NaN | laterThanSeconds | NaN | 指定时间后 | NaN | NaN | 回收 | NaN | NaN | NaN | reclaim | NaN | NaN | NaN | NaN | unit\_explode\_old | NaN | 单位爆炸(旧)音效 | NaN | NaN | NaN | NaN | tree | NaN | NaN | NaN | 树 | NaN | NaN | NaN | NaN | heavyBattleship | NaN | NaN | NaN | 重型战列舰 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | glow\_green.png | NaN | NaN | 绿光 | NaN | NaN | NaN | relation | NaN | 关系 | NaN | NaN | 创建时 | NaN | NaN | NaN | created | NaN | NaN | NaN | NaN | warning | NaN | 警报音效 | NaN | NaN | NaN | NaN | turret | NaN | NaN | NaN | 炮塔 | NaN | NaN | NaN | NaN | heavyArtillery | NaN | NaN | NaN | 重型火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | glow\_sharp.png | NaN | NaN | 发光锐利的图 | NaN | NaN | NaN | source | NaN | 来源 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_artillery | NaN | NaN | NaN | 炮塔火炮 | NaN | NaN | NaN | NaN | flare\_10s | NaN | NaN | NaN | 火炬10s | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_attack\_point.png | NaN | NaN | 攻击点图标 | NaN | NaN | NaN | compareTarget | NaN | 比较目标 | NaN | NaN | 队伍类型 | NaN | NaN | NaN | NaN | 单位的可控制状态 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_flamethrower | NaN | NaN | NaN | 炮塔火焰喷射器 | NaN | NaN | NaN | NaN | fireBee | NaN | NaN | NaN | 火蜂 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_build.png | NaN | NaN | 建造图标 | NaN | NaN | NaN | byMoreThan | NaN | 更多 | NaN | NaN | 己方 | NaN | own | NaN | NaN | maxHp | NaN | 血量上限 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turretT2 | NaN | NaN | NaN | 转塔T2 | NaN | NaN | NaN | NaN | fabricatorT3 | NaN | NaN | NaN | 工厂t3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_downgrade.png | NaN | NaN | 降级图标 | NaN | NaN | NaN | multiplyTargetBy | NaN | 目标乘数 | NaN | NaN | 除自己外任何 | NaN | notOwn | NaN | NaN | hp | NaN | 血量 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turretT3 | NaN | NaN | NaN | 转塔T3 | NaN | NaN | NaN | NaN | fabricatorT2 | NaN | NaN | NaN | 工厂t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_upgrade.png | NaN | NaN | 升级图标 | NaN | NaN | NaN | allteams | NaN | 全体队伍 | NaN | NaN | 中立 | NaN | neutral | NaN | NaN | selfRegenRate | NaN | 自身回血速度 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | wall\_v | NaN | NaN | NaN | 墙壁v | NaN | NaN | NaN | NaN | fabricatorT1 | NaN | NaN | NaN | 工厂t1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_nuke\_stockpile.png | NaN | NaN | 核弹储备图标 | NaN | NaN | NaN | neutralteam | NaN | 中立队伍 | NaN | NaN | 除自己外盟友 | NaN | allyNotOwn | NaN | NaN | maxShield | NaN | 护盾上限 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | zoneMarker | NaN | NaN | NaN | 区域标记 | NaN | NaN | NaN | NaN | extractorT3\_reinforced | NaN | NaN | NaN | 提取器t3加固 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_off.png | NaN | NaN | 关闭图标 | NaN | NaN | NaN | aggressiveteam | NaN | 侵略性队伍 | NaN | NaN | 盟友 | NaN | ally | NaN | NaN | shield | NaN | 护盾 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractorT3\_overclocked | NaN | NaN | NaN | 提取器t3超频 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_on.png | NaN | NaN | 启动图标 | NaN | NaN | NaN | ally | NaN | 盟友 | NaN | NaN | 敌人 | NaN | enemy | NaN | NaN | shieldRegen | NaN | 护盾恢复速度 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractorT3 | NaN | NaN | NaN | 提取器t3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_sell\_top.png | NaN | NaN | 出售图标 | NaN | NaN | NaN | underwater | NaN | 在水下 | NaN | NaN | 任何 | NaN | any | NaN | NaN | maxEnergy | NaN | 能量上限 | NaN | NaN | 代码可用内置图像 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractorT2 | NaN | NaN | NaN | 提取器t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | icon\_upgrade\_top.png | NaN | NaN | 升级到顶图标 | NaN | NaN | NaN | id | NaN | ID | NaN | NaN | NaN | NaN | NaN | NaN | NaN | energy | NaN | 能量 | NaN | NaN | 代码内的可用图像 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractorT1 | NaN | NaN | NaN | 提取器t1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | large\_turret.png | NaN | NaN | 大炮塔图 | NaN | NaN | NaN | includes | NaN | 包括 | NaN | NaN | 贴花绘制图层类型 | NaN | NaN | NaN | NaN | armour | NaN | 装甲 | NaN | NaN | 法线图像(光线扭曲) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimentalSpider | NaN | NaN | NaN | 实验蜘蛛 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | light\_25.png | NaN | NaN | 闪光25图(长宽25格像素) | NaN | NaN | NaN | x | NaN | X坐标 | NaN | NaN | shadow | NaN | 阴影 | NaN | NaN | mass | NaN | 质量 | NaN | NaN | ripple\_normal\_128.png | NaN | NaN | NaN | NaN | 水波法线图(长宽128像素) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimentalGunshipLanded | NaN | NaN | NaN | 实验武装直升机降落 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | light\_50.png | NaN | NaN | 闪光50图(长宽50格像素) | NaN | NaN | NaN | y | NaN | Y坐标 | NaN | NaN | beforeBody | NaN | 在主体之上 | NaN | NaN | shootDelayMultiplier | NaN | 开火间隔倍数 | NaN | NaN | shockwave\_normal\_64.png | NaN | NaN | NaN | NaN | 冲击波法线图(长宽64像素) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimentalGunship | NaN | NaN | NaN | 实验武装直升机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | lighting\_charge.png | NaN | NaN | 蓄能亮光图 | NaN | NaN | NaN | name | NaN | 名称 | NaN | NaN | afterBody | NaN | 在主体之下 | NaN | NaN | shootDamageMultiplier | NaN | 开火伤害倍数 | NaN | NaN | shockwave\_normal\_128.png | NaN | NaN | NaN | NaN | 冲击波法线图(长宽128像素) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimentalDropship | NaN | NaN | NaN | 实验空投船 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | lighting\_charge2.png | NaN | NaN | 蓄能亮光图2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onTop | NaN | 在最顶端 | NaN | NaN | movespeed | NaN | 最大移动速度 | NaN | NaN | shockwave\_normal\_256.png | NaN | NaN | NaN | NaN | 冲击波法线图(长宽256像素) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experiementalCarrier | NaN | NaN | NaN | 经验携带者 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | mammoth\_tank\_turret.png | NaN | NaN | 猛犸坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | beforeUI | NaN | 在显示界面之上 | NaN | NaN | maxTurnSpeed | NaN | 最大转弯速度 | NaN | NaN | 不可用但是drawable文件夹里存在的图像素材 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | example\_faction\_picker | NaN | NaN | NaN | 派系选择器示例 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | mega\_tank\_turret.png | NaN | NaN | 巨型坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | inactive | NaN | 在行动里 | NaN | NaN | maxAttackRange | NaN | 最大攻击距离 | NaN | NaN | air\_factory.png | NaN | NaN | NaN | NaN | 空军工厂图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | custom\_tank | NaN | NaN | NaN | 定制储罐 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | mega\_tank\_turret2.png | NaN | NaN | 巨型坦克炮塔图2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nanoRange | NaN | 修复范围 | NaN | NaN | air\_factory\_t2\_dead.png | NaN | NaN | NaN | NaN | 空军工厂T2死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | crystal\_mid | NaN | NaN | NaN | 中等水晶 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | nano\_turret.png | NaN | NaN | 纳米修复炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | teamColoringMode可填 | NaN | NaN | NaN | NaN | fogOfWarSightRange | NaN | 迷雾视野 | NaN | NaN | amphibious\_jet\_p2.png | NaN | NaN | NaN | NaN | 两栖喷气机左臂图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | creditsCrates | NaN | NaN | NaN | 资金箱子 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | no\_icon.png | NaN | NaN | 禁止图标 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | disabled | NaN | 禁用 | NaN | NaN | nanoFactorySpeed | NaN | 工厂制造速度倍数 | NaN | NaN | amphibious\_jet\_p1.png | NaN | NaN | NaN | NaN | 两栖喷气机右臂图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | combatEngineer | NaN | NaN | NaN | 战斗工程师 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | ripple.png | NaN | NaN | 水波 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hueShift | NaN | 色相偏移 | NaN | NaN | targetHeight | NaN | 单位最终高度 | NaN | NaN | amphibious\_jet\_dead.png | NaN | NaN | NaN | NaN | 两栖喷气机死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t3\_gun | NaN | NaN | NaN | c炮塔t3炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | small\_laser\_turret.png | NaN | NaN | 小激光坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hueAdd | NaN | 色相添加 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | amphibious\_jet\_shadow.png | NaN | NaN | NaN | NaN | 两栖喷气机阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t2\_lightning | NaN | NaN | NaN | c炮塔t2雷电 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | small\_laser\_turretT2.png | NaN | NaN | 小激光坦克T2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | pureGreen | NaN | 纯绿 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | amphibious\_jet.png | NaN | NaN | NaN | NaN | 两栖喷气机图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t2\_gun | NaN | NaN | NaN | c炮塔t2炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | spark.png | NaN | NaN | 电火花图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | anti\_air\_top.png | NaN | NaN | NaN | NaN | 防空炮塔跑塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t2\_flame | NaN | NaN | NaN | c炮塔t2火焰 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | turret\_artillery\_large.png | NaN | NaN | 大型火炮炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | antinuke\_launcher.png | NaN | NaN | NaN | NaN | 反核发射器图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t2\_artillery | NaN | NaN | NaN | c炮塔t2火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | turret\_large\_laser.png | NaN | NaN | 大型激光炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | antinuke\_launcher\_dead.png | NaN | NaN | NaN | NaN | 反核发射器死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t1\_lightning | NaN | NaN | NaN | c炮塔t1闪电 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | turret\_main.png | NaN | NaN | 主要炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | artillery1\_dead.png | NaN | NaN | NaN | NaN | 自行火炮1死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t1\_artillery | NaN | NaN | NaN | c炮塔t1火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | turret\_missile.png | NaN | NaN | 导弹炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | attack\_submarine\_dead.png | NaN | NaN | NaN | NaN | 潜水艇死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_turret\_t1 | NaN | NaN | NaN | c炮塔t1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | turret\_small.png | NaN | NaN | 小炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | base\_dead.png | NaN | NaN | NaN | NaN | 指挥中心死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_tank | NaN | NaN | NaN | c坦克 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | white\_pixel.png | NaN | NaN | 一个白色像素图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship\_t2.png | NaN | NaN | NaN | NaN | 战列舰T2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_mammothTank | NaN | NaN | NaN | c巨型坦克 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 多帧动画 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship\_turret.png | NaN | NaN | NaN | NaN | 战列舰炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_laserTank | NaN | NaN | NaN | c激光槽 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | lightning\_shock.png | NaN | NaN | 击中闪电动画图(共14帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship2\_turret.png | NaN | NaN | NaN | NaN | 战列舰2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_interceptor | NaN | NaN | NaN | c拦截器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 法线图像(光线扭曲) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_black.9.png | NaN | NaN | NaN | NaN | 黑色按钮9图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_helicopter | NaN | NaN | NaN | c直升机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | cone\_inverted\_normal\_128.png | NaN | NaN | 圆锥反转法线图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_dropdown\_pressed.9.png | NaN | NaN | NaN | NaN | 被按下的下拉列表按钮9图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_experimentalTank | NaN | NaN | NaN | c实验槽 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | ripple\_normal\_128.png | NaN | NaN | 水波波纹法线图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_red.9.png | NaN | NaN | NaN | NaN | 红色按钮9图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_artillery | NaN | NaN | NaN | c火炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | shockwave\_normal\_128.png | NaN | NaN | 冲击波法线图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_dead.png | NaN | NaN | NaN | NaN | 建造者死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_antiAirTurretT3 | NaN | NaN | NaN | c防空炮塔t3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_ship\_dead.png | NaN | NaN | NaN | NaN | 战列舰死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_antiAirTurretT2 | NaN | NaN | NaN | c防空炮塔t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 代码可用内置图像帧 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | air\_factory\_dead.png | NaN | NaN | NaN | NaN | 空军工厂死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_antiAirTurret | NaN | NaN | NaN | c防空炮塔 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 代码内的可用图像 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | anti\_air\_top\_flakgun.png | NaN | NaN | NaN | NaN | 火炮T2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_amphibiousJet\_underwater | NaN | NaN | NaN | c水下两栖喷气式飞机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 抛射体节([projectile\_<string>])代码 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | artillery2.png | NaN | NaN | NaN | NaN | 自行火炮2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_amphibiousJet\_transition | NaN | NaN | NaN | c水陆两栖喷气式飞机过渡 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | drawType | 绘制类型 | 左侧数字是绘制类型的可填写数字。 | NaN | NaN | 0：projectiles.png\n1：projectiles\_large.png\n2：projectiles2.png | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | back.png | NaN | NaN | NaN | NaN | 返回图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | c\_amphibiousJet | NaN | NaN | NaN | c水陆两用喷气式飞机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | base.png | NaN | NaN | NaN | NaN | 指挥中心图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugWasp | NaN | NaN | NaN | 昆虫黄蜂 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | base\_no\_front.png | NaN | NaN | NaN | NaN | 无正面指挥中心图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugTurret | NaN | NaN | NaN | 窃听器炮塔 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship\_t2\_dead.png | NaN | NaN | NaN | NaN | 战列舰T2死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugSpore | NaN | NaN | NaN | 昆虫孢子 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship2.png | NaN | NaN | NaN | NaN | 战列舰2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugRangedT2 | NaN | NaN | NaN | 远程虫子t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | blood\_mark.png | NaN | NaN | NaN | NaN | 血印图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugRanged | NaN | NaN | NaN | 远程虫子 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_dropdown\_selected.9.png | NaN | NaN | NaN | NaN | 降级选择按钮9图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugPickup | NaN | NaN | NaN | 运输虫 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder.png | NaN | NaN | NaN | NaN | 建造者图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugNest | NaN | NaN | NaN | 虫巢 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_decharge.png | NaN | NaN | NaN | NaN | 建造者回收效果图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugMeleeT31 | NaN | NaN | NaN | 虫子近战t31 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_ship\_turret.png | NaN | NaN | NaN | NaN | 建造者船炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugMeleeSmall | NaN | NaN | NaN | 小虫子近战 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | frame | 帧 | 左侧数字是帧的可填写数字。当然，需要注意最上面的条件 | NaN | NaN | <绘制类型(drawType)填0时>\n0：黑色抛射体帧\n1：棕色抛射体帧\n2：中等火焰帧\n3：大火焰帧\n4：小导弹帧\n5：黄色抛射体帧\n6：绿色抛射体帧\n7：红色抛射体帧\n8：大离子抛射体帧\n9：大型火抛射体帧\n10：大导弹帧\n11：小离子抛射体帧 | NaN | NaN | NaN | NaN | NaN | <绘制类型(drawType)填1时>\n1：核弹帧\n2：核弹阴影帧\n3：T2核弹帧\n4：[空] | NaN | NaN | NaN | NaN | <绘制类型(drawType)填2时>\n0：白色粗大离子茅弹\n1：黄色粗大离子茅弹\n2：白色中等离子茅弹\n3：黄色中等离子茅弹\n4：白色较细离子茅弹\n5：白色较细离子茅弹\n6：[空]\n7：[空]\n8：[空]\n9：[空]\n10：[空]\n11：[空] | NaN | NaN | NaN | NaN | NaN | air\_factory\_t2.png | NaN | NaN | NaN | NaN | 空军工厂T2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugMeleeLarge | NaN | NaN | NaN | 虫子近战大型 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | anti\_air\_top\_l2.png | NaN | NaN | NaN | NaN | 防空导弹T2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugMelee | NaN | NaN | NaN | 虫族混战 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | artillery1.png | NaN | NaN | NaN | NaN | 自行火炮1图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugGeneratorT2 | NaN | NaN | NaN | 虫子生成器t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | attack\_submarine.png | NaN | NaN | NaN | NaN | 潜水艇图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugGeneratorNT2 | NaN | NaN | NaN | 虫子生成器nt2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | back\_circle.png | NaN | NaN | NaN | NaN | 返回圈图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugGeneratorN | NaN | NaN | NaN | 虫子生成器n | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | base\_back.png | NaN | NaN | NaN | NaN | 指挥中心背景图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugGenerator | NaN | NaN | NaN | 虫子生成器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship\_experimental.png | NaN | NaN | NaN | NaN | 实验级战列舰图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugFly | NaN | NaN | NaN | 飞行建造虫 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship\_t2\_turret.png | NaN | NaN | NaN | NaN | 战列舰T2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugExtractorT2 | NaN | NaN | NaN | 虫族资源提取器t2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battle\_ship2\_dead.png | NaN | NaN | NaN | NaN | 战列舰2死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugExtractor | NaN | NaN | NaN | 虫族资源提取器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_dropdown\_normal.9.png | NaN | NaN | NaN | NaN | 下拉列表按钮9普通图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bugBee | NaN | NaN | NaN | 自爆虫 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_orange.9.png | NaN | NaN | NaN | NaN | 橙色按钮9图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | bomber | NaN | NaN | NaN | 轰炸机 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_charge.png | NaN | NaN | NaN | NaN | 建造者维修(建造)效果图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | antiNukeLauncherC | NaN | NaN | NaN | 反核发射器c | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | builder\_ship.png | NaN | NaN | NaN | NaN | 建造船图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | antiAirTurretFlak | NaN | NaN | NaN | 防空炮塔高射炮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | button\_add.png | NaN | NaN | NaN | NaN | 添加按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | aaBeamGunship\_afterburn | NaN | NaN | NaN | AA炮舰喷射 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | button\_more.png | NaN | NaN | NaN | NaN | 更多按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | aaBeamGunship | NaN | NaN | NaN | 防空AA炮舰 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | button\_no.png | NaN | NaN | NaN | NaN | 否定按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | button\_subtract.png | NaN | NaN | NaN | NaN | 减少按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>陆军工厂 | NaN | NaN | 700 | NaN | NaN | landFactory | NaN | NaN | NaN | <类>虫族隐藏单位 | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | button\_yes.png | NaN | NaN | NaN | NaN | 是的按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | 侦察者 | NaN | NaN | 700 | NaN | NaN | scout | NaN | NaN | NaN | 瓢虫 | NaN | NaN | 400 | NaN | NaN | ladybug |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | crystal.png | NaN | NaN | NaN | NaN | 水晶图 | NaN | NaN | NaN | NaN | NaN | NaN | 建造者 | NaN | NaN | 500 | NaN | NaN | builder | NaN | NaN | NaN | 幼小啃噬虫 | NaN | NaN | 200 | NaN | NaN | bugMeleeSmall |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | dropship.png | NaN | NaN | NaN | NaN | 运输机图 | NaN | NaN | NaN | NaN | NaN | NaN | 小坦克 | NaN | NaN | 350 | NaN | NaN | tank(老)\nc\_tank | NaN | NaN | NaN | 巨型啃噬虫 | NaN | NaN | 1200 | NaN | NaN | bugMeleeLarge |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | dropship\_dead.png | NaN | NaN | NaN | NaN | 运输机死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 悬浮坦克 | NaN | NaN | 450 | NaN | NaN | hoverTank | NaN | NaN | NaN | 近战虫王 | NaN | NaN | 21000 | NaN | NaN | bugMeleeT31 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | dropship\_shadow.png | NaN | NaN | NaN | NaN | 运输机阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 自行火炮 | NaN | NaN | 900 | NaN | NaN | c\_artillery | NaN | NaN | NaN | 资源建造虫幼体 | NaN | NaN | 4000 | NaN | NaN | bugGeneratorN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | error.png | NaN | NaN | NaN | NaN | 错误图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>二级陆军工厂 | NaN | NaN | 2700 | NaN | NaN | NaN | NaN | NaN | NaN | 资源建造虫成体 | NaN | NaN | 16000 | NaN | NaN | bugGeneratorNT2 |
| NaN | 效果节([effect\_<string>])代码 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | error\_general.png | NaN | NaN | NaN | NaN | 错误图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型坦克 | NaN | NaN | 800 | NaN | NaN | heavyTank | NaN | NaN | NaN | <类>铁锈隐藏单位 | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | frameIndex | 帧索引 | 左侧数字是帧索引的可填写数字。当然，需要注意最上面的条件 | NaN | NaN | <集索引(stripIndex)填effect时>\n0：白色烟雾帧\n1：绿色粘液痕迹帧\n2：绿色粘液模糊痕迹帧\n3：[空]\n4：回收时红色光球帧\n5：回收时红色粒子帧\n6：建造或修复时绿色粒子帧\n7：白色迷您云帧\n8：普通路径点选择图标帧\n9：攻击路径点选择图标帧\n10：建造或修复路径点选择图标帧\n11：进入载具路径点选择图标帧\n12：回收路径点选择图标帧\n13：水花帧\n14：小土坑帧/血迹帧\n15：旧版白色烟雾帧\n16：[空]\n17：白色光球帧\n18：旧版迷您云帧1\n19：旧版迷您云帧2\n20：旧版血迹帧\n21：黄色血迹帧\n22：[空]\n23：旧版普通路径点选择图标帧\n24：[空]\n25：旧版建造或修复路径点选择图标帧\n26：旧版进入载具路径点选择图标帧\n27：[空]\n28：[空]\n29：[空] | NaN | NaN | NaN | NaN | NaN | <集索引(stripIndex)填effect2时>\n0：黑屏帧\n1：水渍帧\n2：湮灭的灰色箭头帧\n3：灰尘帧\n4：树叶帧1\n5：树叶帧2\n6："Ping Map"(地图映射标记)指向图标帧(灰色)\n7："Ping Map"(地图映射标记)-提醒此处-图标帧\n8："Ping Map"(地图映射标记)-攻击这里-图标帧\n9："Ping Map"(地图映射标记)-守住这里-图标帧\n10："Ping Map"(地图映射标记)-核平目标-图标帧\n11："Ping Map"(地图映射标记)-在此建造-图标帧\n12："Ping Map"(地图映射标记)-请升级-图标帧\n13："Ping Map"(地图映射标记)-OK-图标帧\n14："Ping Map"(地图映射标记)-No!-图标帧\n15："Ping Map"(地图映射标记)-表示快乐-图标帧\n16："Ping Map"(地图映射标记)-表示难过-图标帧\n17："Ping Map"(地图映射标记)-开始撤退-图标帧 | NaN | NaN | NaN | NaN | <集索引(stripIndex)填effect3时>\n0：攻击路径点选择环绕图标帧\n1：Ping Map - 守住这里 图标帧\n2：进军路径点选择图标帧\n3：[空]\n4：[空] | NaN | NaN | NaN | NaN | NaN | error\_missingmap.png | NaN | NaN | NaN | NaN | 地图图标错误图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型气垫坦克 | NaN | NaN | 1000 | NaN | NaN | heavyhoverTank | NaN | NaN | NaN | 机械螃蟹 | NaN | NaN | robotCrab | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | error\_outmem.png | NaN | NaN | NaN | NaN | 输出内存错误图 | NaN | NaN | NaN | NaN | NaN | NaN | 等离子坦克 | NaN | NaN | 1000 | NaN | NaN | plasmaTank | NaN | NaN | NaN | 水中的机械螃蟹 | NaN | NaN | robotCrabWater | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | error\_toolargethumb.png | NaN | NaN | NaN | NaN | 地图图标过大图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型火炮 | NaN | NaN | 3100 | NaN | NaN | heavyArtillery | NaN | NaN | NaN | 超级坦克 | NaN | NaN | megaTank | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_hovertank.png | NaN | NaN | NaN | NaN | 实验型悬浮坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 猛犸坦克 | NaN | NaN | 3900 | NaN | NaN | mammothTank | NaN | NaN | NaN | 坦克杀手 | NaN | NaN | tankDestroyer | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_hovertank\_dead.png | NaN | NaN | NaN | NaN | 实验型悬浮坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 激光坦克 | NaN | NaN | 1600 | NaN | NaN | laserTank | NaN | NaN | NaN | 悬浮基地 | NaN | NaN | 140000 | NaN | NaN | experimentalGunship |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_hovertank\_shield.png | NaN | NaN | NaN | NaN | 实验型悬浮坦克护盾图 | NaN | NaN | NaN | NaN | NaN | NaN | 防空坦克 | NaN | NaN | 2500 | NaN | NaN | missileTank | NaN | NaN | NaN | 悬浮基地固定状态 | NaN | NaN | experimentalGunshipLanded | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_hovertank\_turret.png | NaN | NaN | NaN | NaN | 实验型悬浮坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 战斗工程师 | NaN | NaN | 4500 | NaN | NaN | combatEngineer | NaN | NaN | NaN | 飞行机甲 | NaN | NaN | 8000 | NaN | NaN | mechFlyingTakeoff |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_tank.png | NaN | NaN | NaN | NaN | 实验型坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>机械工厂 | NaN | NaN | 1000 | NaN | NaN | mechFactory | NaN | NaN | NaN | 飞机甲着陆状态 | NaN | NaN | mechFlyingLanded | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_tank\_dead.png | NaN | NaN | NaN | NaN | 实验型坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 小机甲 | NaN | NaN | 600 | NaN | NaN | mechGun | NaN | NaN | NaN | 城墙 | NaN | NaN | 800 | NaN | NaN | wall\_v |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_tank\_turret.png | NaN | NaN | NaN | NaN | 实验型坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 防空机甲 | NaN | NaN | 900 | NaN | NaN | mechMissile | NaN | NaN | NaN | 补给站 | NaN | NaN | 800 | NaN | NaN | supplyDepot |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_unit\_factory\_base.png | NaN | NaN | NaN | NaN | 实验工厂图 | NaN | NaN | NaN | NaN | NaN | NaN | 火炮机甲 | NaN | NaN | 1600 | NaN | NaN | mechArtillery | NaN | NaN | NaN | 模块化蜘蛛 | NaN | NaN | 90000 | NaN | NaN | modularSpider |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_unit\_factory\_dead.png | NaN | NaN | NaN | NaN | 实验工厂死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 移动炮台 | NaN | NaN | 4500 | NaN | NaN | mechBunker | NaN | NaN | NaN | 永恒之火 | NaN | NaN | 800 | NaN | NaN | spreadingFire |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | experimental\_unit\_factory\_front.png | NaN | NaN | NaN | NaN | 实验工厂工厂框架图 | NaN | NaN | NaN | NaN | NaN | NaN | 移动炮台部署状态 | NaN | NaN | mechBunkerDeployed | NaN | NaN | NaN | NaN | NaN | NaN | 信号烟 | NaN | NaN | flare\_10s | NaN | NaN | 第一关空降移动炮塔的玩意儿 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractor.png | NaN | NaN | NaN | NaN | 资源提取仪图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>二级机械工厂 | NaN | NaN | 5000 | NaN | NaN | mechFactoryT2 | NaN | NaN | NaN | 揭开迷雾 | NaN | NaN | fogRevealer | NaN | NaN | 注：在老版核弹落地时扩视野用，但现在仍有其它用途。 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractor\_back.png | NaN | NaN | NaN | NaN | 资源提取仪背景图 | NaN | NaN | NaN | NaN | NaN | NaN | 机枪机甲 | NaN | NaN | 5000 | NaN | NaN | mechMinigun | NaN | NaN | NaN | 数据丢失 | NaN | NaN | missing | NaN | NaN | 当单位数据丢失时就会出现 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractor\_dead.png | NaN | NaN | NaN | NaN | 资源提取仪死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 机械师 | NaN | NaN | 5000 | NaN | NaN | mechEngineer | NaN | NaN | NaN | 区域标记 | NaN | NaN | zoneMarker | NaN | NaN | 注：一个白色的圈圈，这将是红圈的下一个缩圈阶段 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractor\_t2.png | NaN | NaN | NaN | NaN | 资源提取仪T2图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | 等离子机甲 | NaN | NaN | 7000 | NaN | NaN | mechLaser | NaN | NaN | NaN | 伤害边界 | NaN | NaN | damagingBorder | NaN | NaN | 注：可以对所有在毒区外的单位造成伤害 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | extractor\_t3.png | NaN | NaN | NaN | NaN | 资源提取仪T3图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | 特斯拉机甲 | NaN | NaN | 5500 | NaN | NaN | mechLightning | NaN | NaN | NaN | 沙盒建造者 | NaN | NaN | editorOrBuilder | NaN | NaN | 注：铁锈最强单位，没有之一！ |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | fast.png | NaN | NaN | NaN | NaN | 快进图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型防空机甲 | NaN | NaN | 10000 | NaN | NaN | mechHeavyMissile | NaN | NaN | NaN | 树 | NaN | NaN | tree | NaN | NaN | 注：用于Items层 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | flame\_large.png | NaN | NaN | NaN | NaN | 大开火动画图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | 喷火机甲 | NaN | NaN | 12000 | NaN | NaN | mechFlame | NaN | NaN | NaN | 自定义坦克 | NaN | NaN | custom\_tank | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | fog\_dithering.png | NaN | NaN | NaN | NaN | 迷雾发散图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>空军基地 | NaN | NaN | 1000 | NaN | NaN | airFactory | NaN | NaN | NaN | 阵营选择器 | NaN | NaN | example\_faction\_picker | NaN | NaN | 注：选择虫族或者人类，但是阵营选择器是被禁止加载的。 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | fog\_smooth.png | NaN | NaN | NaN | NaN | 迷雾平滑图(16帧可用,共18帧) | NaN | NaN | NaN | NaN | NaN | NaN | 轻型武装直升机 | NaN | NaN | 250 | NaN | NaN | lightGunship | NaN | NaN | NaN | 核弹发射器（老） | NaN | NaN | nukeLaucher | NaN | NaN | 注：仅可被远古核弹拦截器拦截 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gun\_boat.png | NaN | NaN | NaN | NaN | 机枪艇图 | NaN | NaN | NaN | NaN | NaN | NaN | 拦截机 | NaN | NaN | 600 | NaN | NaN | c\_interceptor | NaN | NaN | NaN | 反核防御（老） | NaN | NaN | antiNukeLaucher | NaN | NaN | 注：用来拦截远古核弹发射器发射的核弹 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gun\_boat\_dead.png | NaN | NaN | NaN | NaN | 机枪艇死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 直升机 | NaN | NaN | 700 | NaN | NaN | helicopter | NaN | NaN | NaN | 水晶资源 | NaN | NaN | crystalResource | NaN | NaN | 注：占地与回收速度较之前不同，可以设定这个水晶的队伍，并且可以被直接攻击到。 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gunship.png | NaN | NaN | NaN | NaN | 武装直升机图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>二级空军基地 | NaN | NaN | 2500 | NaN | NaN | NaN | NaN | NaN | NaN | 队伍的伪装非单位 | NaN | NaN | dummyNonUnitWithTeam | NaN | NaN | 游戏作者专用的调试单位，回收有惊喜 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gunship\_dead.png | NaN | NaN | NaN | NaN | 武装直升机死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 武装直升机 | NaN | NaN | 800 | NaN | NaN | gunShip | NaN | NaN | NaN | 迷雾清除 | NaN | NaN | showFog | NaN | NaN | Units层Items放置均有效 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gunship\_shadow.png | NaN | NaN | NaN | NaN | 武装直升机阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型拦截机 | NaN | NaN | 1200 | NaN | NaN | heavyInterceptor | NaN | NaN | NaN | <类>模块 | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_hover\_tank.png | NaN | NaN | NaN | NaN | 重型气垫坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 运输机 | NaN | NaN | 800 | NaN | NaN | dropship | NaN | NaN | NaN | 空模块 | NaN | NaN | modularSpider\_emptySlot | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_hover\_tank\_dead.png | NaN | NaN | NaN | NaN | 重型气垫坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 两栖战机 | NaN | NaN | 2000 | NaN | NaN | amphibiousjet | NaN | NaN | NaN | 反核模块 | NaN | NaN | modularSpider\_antinuke | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_hover\_tank\_shadow.png | NaN | NaN | NaN | NaN | 重型气垫坦克阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 轰炸机 | NaN | NaN | 4000 | NaN | NaN | bomber | NaN | NaN | NaN | 防空炮塔模块 | NaN | NaN | modularSpider\_antiair | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_tank.png | NaN | NaN | NaN | NaN | 重型坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 导弹飞艇 | NaN | NaN | 4200 | NaN | NaN | missileAirship | NaN | NaN | NaN | 防空炮塔模块T2 | NaN | NaN | modularSpider\_antiairT2 | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | <集索引(stripIndex)填pojectiles时>\n0：黑色抛射体帧\n1：棕色抛射体帧\n2：中等火焰帧\n3：大火焰帧\n4：小导弹帧\n5：黄色抛射体帧\n6：绿色抛射体帧\n7：红色抛射体帧\n8：大离子抛射体帧\n9：大型火抛射体帧\n10：大导弹帧\n11：小离子抛射体帧 | NaN | NaN | NaN | NaN | NaN | <集索引(stripIndex)填projectiles2时>\n0：白色粗大离子茅弹\n1：黄色粗大离子茅弹\n2：白色中等离子茅弹\n3：黄色中等离子茅弹\n4：白色较细离子茅弹\n5：白色较细离子茅弹\n6：[空]\n7：[空]\n8：[空]\n9：[空]\n10：[空]\n11：[空] | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_tank\_dead.png | NaN | NaN | NaN | NaN | 重型坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 激光战机 | NaN | NaN | 6000 | NaN | NaN | aaBeamGunship | NaN | NaN | NaN | 高射炮模块 | NaN | NaN | modularSpider\_antiairFlak | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | heavy\_tank\_turret.png | NaN | NaN | NaN | NaN | 重型坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 间谍无人机 | NaN | NaN | 1500 | NaN | NaN | spyDrone | NaN | NaN | NaN | 火炮模块 | NaN | NaN | modularSpider\_artillery | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | helicopter.png | NaN | NaN | NaN | NaN | 直升机图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>海军工厂 | NaN | NaN | 1000 | NaN | NaN | seaFactory | NaN | NaN | NaN | 资源制造模块 | NaN | NaN | modularSpider\_fabricator | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | helicopter\_blades.png | NaN | NaN | NaN | NaN | 直升机螺旋桨图 | NaN | NaN | NaN | NaN | NaN | NaN | 机枪艇 | NaN | NaN | 300 | NaN | NaN | gunBoat | NaN | NaN | NaN | 资源制造模块T2 | NaN | NaN | modularSpider\_fabricatorT2 | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | helicopter\_dead.png | NaN | NaN | NaN | NaN | 直升机死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 海上建造者 | NaN | NaN | 500 | NaN | NaN | builderShip | NaN | NaN | NaN | 机枪模块 | NaN | NaN | modularSpider\_gunturret | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | helicopter\_shadow.png | NaN | NaN | NaN | NaN | 直升机炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 运输艇 | NaN | NaN | 600 | NaN | NaN | hovercraft | NaN | NaN | NaN | 机枪模块T2 | NaN | NaN | modularSpider\_gunturretT2 | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | helicopter\_shadow\_blades.png | NaN | NaN | NaN | NaN | 直升机螺旋桨阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 导弹舰 | NaN | NaN | 900 | NaN | NaN | missileship | NaN | NaN | NaN | 激光防御模块 | NaN | NaN | modularSpider\_laserdefense | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | help1.png | NaN | NaN | NaN | NaN | 帮助1图 | NaN | NaN | NaN | NaN | NaN | NaN | 潜水艇 | NaN | NaN | 800 | NaN | NaN | attackSubmarine | NaN | NaN | NaN | 护盾增幅模块 | NaN | NaN | modularSpider\_shieldGen | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | help2.png | NaN | NaN | NaN | NaN | 帮助2图 | NaN | NaN | NaN | NaN | NaN | NaN | 战列舰 | NaN | NaN | 1500 | NaN | NaN | battleShip | NaN | NaN | NaN | 等离子炮模块 | NaN | NaN | modularSpider\_smallgunturret | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | help3.png | NaN | NaN | NaN | NaN | 帮助3图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>二级海军工厂 | NaN | NaN | 3000 | NaN | NaN | NaN | NaN | NaN | NaN | 等离子炮模块T2 | NaN | NaN | modularSpider\_smallgunturretT2 | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | help4.png | NaN | NaN | NaN | NaN | 帮助4图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型战列舰 | NaN | NaN | 6000 | NaN | NaN | heavyBattleship | NaN | NaN | NaN | 闪电炮塔模块 | NaN | NaN | modularSpider\_lightning | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hover\_tank.png | NaN | NaN | NaN | NaN | 悬浮坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型潜艇 | NaN | NaN | 5500 | NaN | NaN | heavySub | NaN | NaN | NaN | 速度增幅模块 | NaN | NaN | modularSpider\_speed | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hover\_tank\_dead.png | NaN | NaN | NaN | NaN | 悬浮坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 重型导弹舰 | NaN | NaN | 18000 | NaN | NaN | heavyMissileShip | NaN | NaN | NaN | 传送模块 | NaN | NaN | modularSpider\_blink | NaN | NaN | NaN |
| NaN | 效果节([effect\_<string>])集索引(stripIndex)里的可填值(此处省略.png，不要填写) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hover,\_tank\_shadow.png | NaN | NaN | NaN | NaN | 悬浮坦克阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 鹦鹉螺号 | NaN | NaN | 18000 | NaN | NaN | nautilusSubmarineSurface | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | stripIndex | 图像集 | 左侧数字是帧索引的可填写数字。当然，需要注意最上面的条件 | NaN | NaN | effects：效果集(21帧可用，共30帧)(通用效果图集)\neffects2：效果集二(共18帧)(地图标记效果图集)\neffects3：效果集三(3帧可用，共5帧)(路径点效果图集)\nprojectiles：抛射体集(共12帧)(通用抛射体图集)\nprojectiles2：抛射体集2(前6帧可用，大约12帧)(粒子抛射体图集)\nexplode\_big：爆炸效果动画(共14帧)\nexplode\_big2：爆炸效果动画2(共14帧)\nlight\_50：闪光50贴图(长宽50像素)\nflame：开火图火焰动画(共5帧)\ndust：灰尘贴图(共4帧)\nsmoke\_black：黑烟(共2帧)\nshockwave：冲击波\nfire：火焰图\nlava\_bubble：岩浆冒泡(共16帧)\nplasma\_shot：等离子开火动画(共5帧)(蓝色的开火图火焰动画)\nshockwave\_large：大冲击波\nexplode\_bits：爆炸碎片(共10帧)\nexplode\_bits\_bug：虫爆炸碎片(共7帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hovercraft.png | NaN | NaN | NaN | NaN | 登陆艇图 | NaN | NaN | NaN | NaN | NaN | NaN | 鹦鹉螺潜水状态 | NaN | NaN | nautilusSubmarine | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hovercraft\_dead.png | NaN | NaN | NaN | NaN | 登陆艇死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 航空母舰 | NaN | NaN | 30000 | NaN | NaN | experiementalCarrier | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hovercraft\_shadow.png | NaN | NaN | NaN | NaN | 登陆艇阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | AA重型防空舰 | NaN | NaN | 3500 | NaN | NaN | heavyAAShip | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon.png | NaN | NaN | NaN | NaN | 图标图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>实验工厂 | NaN | NaN | 11000 | NaN | NaN | experimentalLandFactory | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_back\_round.png | NaN | NaN | NaN | NaN | 圆角图标背景图 | NaN | NaN | NaN | NaN | NaN | NaN | 火蜂战机 | NaN | NaN | 12000 | NaN | NaN | fireBee | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_rally.png | NaN | NaN | NaN | NaN | 集结图标图 | NaN | NaN | NaN | NaN | NaN | NaN | 概念坦克 | NaN | NaN | 14000 | NaN | NaN | experimentalTank | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_save.png | NaN | NaN | NaN | NaN | 保存图标图 | NaN | NaN | NaN | NaN | NaN | NaN | 概念悬浮坦克 | NaN | NaN | 21000 | NaN | NaN | experimentalHoverTank | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_search.png | NaN | NaN | NaN | NaN | 搜索图标图 | NaN | NaN | NaN | NaN | NaN | NaN | 飞行堡垒 | NaN | NaN | 30000 | NaN | NaN | experimentalDropship | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_upgrade.png | NaN | NaN | NaN | NaN | 升级图标图 | NaN | NaN | NaN | NaN | NaN | NaN | 实验型战斗蜘蛛 | NaN | NaN | 70000 | NaN | NaN | experimentalSpider | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_window.png | NaN | NaN | NaN | NaN | 电脑图标图 | NaN | NaN | NaN | NaN | NaN | NaN | <类型>建筑 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_window16.png | NaN | NaN | NaN | NaN | 电脑图标16图(长宽16像素) | NaN | NaN | NaN | NaN | NaN | NaN | 指挥中心 | NaN | NaN | 3000 | NaN | NaN | commandCenter | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_window24.png | NaN | NaN | NaN | NaN | 电脑图标24图(长宽24像素) | NaN | NaN | NaN | NaN | NaN | NaN | 资源提取器 | NaN | NaN | 700 | NaN | NaN | extractor | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_window128.png | NaN | NaN | NaN | NaN | 电脑图标128图(长宽128像素) | NaN | NaN | NaN | NaN | NaN | NaN | 二级资源提取器 | NaN | NaN | 2100 | NaN | NaN | extractorT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon2.png | NaN | NaN | NaN | NaN | 图标2图 | NaN | NaN | NaN | NaN | NaN | NaN | 三级资源提取器 | NaN | NaN | 6100 | NaN | NaN | extractorT3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ladybug.png | NaN | NaN | NaN | NaN | 瓢虫图 | NaN | NaN | NaN | NaN | NaN | NaN | 资源提取器守护模式 | NaN | NaN | 10100 | NaN | NaN | extractorT3\_reinforced | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | land\_factory.png | NaN | NaN | NaN | NaN | 陆军工厂图 | NaN | NaN | NaN | NaN | NaN | NaN | 资源提取器超频模式 | NaN | NaN | 14100 | NaN | NaN | extractorT3\_overclocked | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | land\_factory\_back.png | NaN | NaN | NaN | NaN | 陆军工厂背景图 | NaN | NaN | NaN | NaN | NaN | NaN | 资源建造仪 | NaN | NaN | 2200 | NaN | NaN | fabricator | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | land\_factory\_dead.png | NaN | NaN | NaN | NaN | 陆军工厂死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级资源建造仪 | NaN | NaN | 4500 | NaN | NaN | fabricatorT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | land\_factory\_front.png | NaN | NaN | NaN | NaN | 陆军工厂工厂框架图 | NaN | NaN | NaN | NaN | NaN | NaN | 三级资源建造仪 | NaN | NaN | 9500 | NaN | NaN | fabricatorT3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | land\_factory\_front\_t2.png | NaN | NaN | NaN | NaN | 陆军工厂T2工厂框架图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级机枪塔 | NaN | NaN | 1500 | NaN | NaN | turretT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | large\_gunship.png | NaN | NaN | NaN | NaN | 大型武装直升机图 | NaN | NaN | NaN | NaN | NaN | NaN | 三级机枪塔 | NaN | NaN | 1250 | NaN | NaN | turretT3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | large\_gunship\_shadow.png | NaN | NaN | NaN | NaN | 大型武装直升机阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 喷火塔 | NaN | NaN | 1200 | NaN | NaN | turret\_flamethrower | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_defence.png | NaN | NaN | NaN | NaN | 激光拦截仪图(共2帧) | NaN | NaN | NaN | NaN | NaN | NaN | 火炮塔 | NaN | NaN | 2100 | NaN | NaN | turret\_artillery | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_defence\_dead.png | NaN | NaN | NaN | NaN | 激光拦截仪死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级火炮塔 | NaN | NaN | 11100 | NaN | NaN | c\_turret\_t2\_artillery | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_defence\_t2.png | NaN | NaN | NaN | NaN | 激光拦截仪T2图(共2帧) | NaN | NaN | NaN | NaN | NaN | NaN | 电塔 | NaN | NaN | 2700 | NaN | NaN | c\_turret\_t1\_lightning | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_tank\_base.png | NaN | NaN | NaN | NaN | 激光坦克主体图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级电塔 | NaN | NaN | 10700 | NaN | NaN | c\_turret\_t2\_lightnin | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_tank\_charge.png | NaN | NaN | NaN | NaN | 激光坦克充能闪光图 | NaN | NaN | NaN | NaN | NaN | NaN | 防空塔 | NaN | NaN | 600 | NaN | NaN | antiAirTurret | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_tank\_dead.png | NaN | NaN | NaN | NaN | 激光坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级防空塔 | NaN | NaN | 1800 | NaN | NaN | c\_antiAirTurretT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | laser\_tank\_turrent.png | NaN | NaN | NaN | NaN | 激光坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 三级防空塔 | NaN | NaN | 12800 | NaN | NaN | c\_antiAirTurretT3 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | lighting\_charge.png | NaN | NaN | NaN | NaN | 充能闪光图 | NaN | NaN | NaN | NaN | NaN | NaN | 高射炮 | NaN | NaN | 4600 | NaN | NaN | antiAirTurretFlak | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | lock\_icon\_menu.png | NaN | NaN | NaN | NaN | 彩蛋锁定图标图 | NaN | NaN | NaN | NaN | NaN | NaN | 修复湾 | NaN | NaN | 1500 | NaN | NaN | repairbay | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | logo.png | NaN | NaN | NaN | NaN | 标志图 | NaN | NaN | NaN | NaN | NaN | NaN | 激光防御塔 | NaN | NaN | 1200 | NaN | NaN | laserDefence | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mammoth\_tank.png | NaN | NaN | NaN | NaN | 猛犸坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 视野塔 | NaN | NaN | 2500 | NaN | NaN | outpostT1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mammoth\_tank\_dead.png | NaN | NaN | NaN | NaN | 猛犸坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级视野塔 | NaN | NaN | 5500 | NaN | NaN | outpostT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mammoth\_tank\_turret.png | NaN | NaN | NaN | NaN | 猛犸坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 会核爆的实验室 | NaN | NaN | 4000 | NaN | NaN | laboratory | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mega\_tank.png | NaN | NaN | NaN | NaN | 巨型坦克图 | NaN | NaN | NaN | NaN | NaN | NaN | 核弹发射井 | NaN | NaN | 45000 | NaN | NaN | nukeLauncherC | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mega\_tank\_dead.png | NaN | NaN | NaN | NaN | 巨型坦克死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 反核 | NaN | NaN | 15000 | NaN | NaN | antiNukeLauncherC | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mega\_tank\_turret.png | NaN | NaN | NaN | NaN | 巨型坦克炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | 水晶 | NaN | NaN | 5000 | NaN | NaN | crystalResource | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | menu.png | NaN | NaN | NaN | NaN | 菜单按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | 中型水晶 | NaN | NaN | 5000 | NaN | NaN | crystal\_mid | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | metal.png | NaN | NaN | NaN | NaN | 金属背景图 | NaN | NaN | NaN | NaN | NaN | NaN | 钱箱 | NaN | NaN | creditsCrates | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | metal\_dark.png | NaN | NaN | NaN | NaN | 暗金属背景图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>虫族虫巢 | NaN | NaN | 600 | NaN | NaN | bugNest | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | noise.png | NaN | NaN | NaN | NaN | 云彩阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | 建造虫 | NaN | NaN | 100 | NaN | NaN | bugSpore | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | noise3.png | NaN | NaN | NaN | NaN | 云彩阴影3图 | NaN | NaN | NaN | NaN | NaN | NaN | 飞行建造虫 | NaN | NaN | 400 | NaN | NaN | bugFly | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nuke\_launcher.png | NaN | NaN | NaN | NaN | 核弹发射器图 | NaN | NaN | NaN | NaN | NaN | NaN | 噬咬虫 | NaN | NaN | 300 | NaN | NaN | bugMelee | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nuke\_launcher\_dead.png | NaN | NaN | NaN | NaN | 核弹发射器死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 飞行虫 | NaN | NaN | 800 | NaN | NaN | bugWasp | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nuke\_launcher2.png | NaN | NaN | NaN | NaN | 核弹发射器2图 | NaN | NaN | NaN | NaN | NaN | NaN | 运输虫(两格) | NaN | NaN | 600 | NaN | NaN | bugPickup | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | palm\_leaves.png | NaN | NaN | NaN | NaN | 棕榈叶图(共3帧) | NaN | NaN | NaN | NaN | NaN | NaN | 爆炸虫 | NaN | NaN | 700 | NaN | NaN | bugBee | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | palm\_tree.png | NaN | NaN | NaN | NaN | 棕榈树图(共5帧) | NaN | NaN | NaN | NaN | NaN | NaN | 远程虫 | NaN | NaN | 650 | NaN | NaN | bugRanged | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | pause.png | NaN | NaN | NaN | NaN | 设置图 | NaN | NaN | NaN | NaN | NaN | NaN | 二级远程虫 | NaN | NaN | 7000 | NaN | NaN | bugRangedT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | pointer.png | NaN | NaN | NaN | NaN | 鼠标图 | NaN | NaN | NaN | NaN | NaN | NaN | <制造者>虫族建筑 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | power.png | NaN | NaN | NaN | NaN | 资源制造仪图(共3帧) | NaN | NaN | NaN | NaN | NaN | NaN | 虫族炮台 | NaN | NaN | 1000 | NaN | NaN | bugTurret | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | power\_dead.png | NaN | NaN | NaN | NaN | 资源制造仪死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | 虫族一级矿 | NaN | NaN | 1200 | NaN | NaN | bugExtractor | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | power\_t2.png | NaN | NaN | NaN | NaN | 资源制造仪T2图(共3帧) | NaN | NaN | NaN | NaN | NaN | NaN | 虫族二级矿 | NaN | NaN | 2200 | NaN | NaN | bugExtractorT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | power\_t3.png | NaN | NaN | NaN | NaN | 资源制造仪T3图(共3帧) | NaN | NaN | NaN | NaN | NaN | NaN | 虫族资源建造茧 | NaN | NaN | 1000 | NaN | NaN | bugGenerator | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | projectiles\_large.png | NaN | NaN | NaN | NaN | 大抛射体图集(3帧可用,共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | 虫族资源建造茧 | NaN | NaN | 2400 | NaN | NaN | bugGeneratorT2 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | queenbug.png | NaN | NaN | NaN | NaN | 虫后图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | repair\_bay.png | NaN | NaN | NaN | NaN | 修复湾图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | repair\_bay\_dead.png | NaN | NaN | NaN | NaN | 修复湾死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | replay\_leaderboard.png | NaN | NaN | NaN | NaN | 重播排行榜图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | replay\_pause.png | NaN | NaN | NaN | NaN | 重播暂停图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_dark\_box.png | NaN | NaN | NaN | NaN | 暗色圆角盒子图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_dark\_box\_titled.png | NaN | NaN | NaN | NaN | 暗色圆角盒子图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_glow\_button.png | NaN | NaN | NaN | NaN | 圆角发光按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_glow\_highlight\_button.png | NaN | NaN | NaN | NaN | 圆角发光高亮按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_green.png | NaN | NaN | NaN | NaN | 绿色圆角图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_shadow.png | NaN | NaN | NaN | NaN | 圆角阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_white\_button.png | NaN | NaN | NaN | NaN | 圆角白色按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | scorch\_mark.png | NaN | NaN | NaN | NaN | 爆炸焦痕图(共4帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | scorch\_mark\_nuke.png | NaN | NaN | NaN | NaN | 核弹爆炸焦痕图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | scout\_ship.png | NaN | NaN | NaN | NaN | 导弹舰图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | scout\_ship\_dead.png | NaN | NaN | NaN | NaN | 导弹舰死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | sea\_factory.png | NaN | NaN | NaN | NaN | 海军工厂图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | sea\_factory\_dead.png | NaN | NaN | NaN | NaN | 海军工厂死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | sea\_factory\_t2.png | NaN | NaN | NaN | NaN | T2海军工厂图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | shield\_mid.png | NaN | NaN | NaN | NaN | 通用护盾图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ship.png | NaN | NaN | NaN | NaN | 拦截机图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ship\_dead.png | NaN | NaN | NaN | NaN | 拦截机死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ship\_scout\_turret.png | NaN | NaN | NaN | NaN | 机枪炮塔T1炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ship\_shadow.png | NaN | NaN | NaN | NaN | 船阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | shockwave2.png | NaN | NaN | NaN | NaN | 冲击波2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | small\_trees.png | NaN | NaN | NaN | NaN | 小树图(共5帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | smoke\_black\_small.png | NaN | NaN | NaN | NaN | 小型黑烟图(共2帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | smoke\_white.png | NaN | NaN | NaN | NaN | 白烟图(共2帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_button\_armyvalue.png | NaN | NaN | NaN | NaN | 统计单位数量按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_button\_buildingvalue.png | NaN | NaN | NaN | NaN | 统计建筑数量按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_button\_income.png | NaN | NaN | NaN | NaN | 统计资金收入按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_button\_info.png | NaN | NaN | NaN | NaN | 统计信息按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_button\_totalvalue.png | NaN | NaN | NaN | NaN | 统计总值按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_toggle\_relative.png | NaN | NaN | NaN | NaN | 统计信息相对切换图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | stats\_toggle\_teams.png | NaN | NaN | NaN | NaN | 统计切换队伍图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | supply\_depot.png | NaN | NaN | NaN | NaN | 补给站图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | supply\_depot\_dead.png | NaN | NaN | NaN | NaN | 补给站死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | supply\_depot\_t2.png | NaN | NaN | NaN | NaN | t2补给站图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank1.png | NaN | NaN | NaN | NaN | 坦克1图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank1\_dead.png | NaN | NaN | NaN | NaN | 坦克1死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank1\_turret.png | NaN | NaN | NaN | NaN | 坦克1炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank2.png | NaN | NaN | NaN | NaN | 坦克2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank2\_dead.png | NaN | NaN | NaN | NaN | 坦克2死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank2\_shadow.png | NaN | NaN | NaN | NaN | 坦克2阴影图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tank2\_turret.png | NaN | NaN | NaN | NaN | 坦克2炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | temp\_workaround\_bug\_image.png | NaN | NaN | NaN | NaN | 旧版小坦炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | title.png | NaN | NaN | NaN | NaN | 游戏图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | touch\_indicator.png | NaN | NaN | NaN | NaN | 触摸指示图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | trees.png | NaN | NaN | NaN | NaN | 树图(15帧可用,大约20帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | trees\_snow.png | NaN | NaN | NaN | NaN | 雪地树图(15帧可用,大约20帧) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_base.png | NaN | NaN | NaN | NaN | 炮塔主体图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_base\_dead.png | NaN | NaN | NaN | NaN | 炮塔主体死亡图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_top.png | NaN | NaN | NaN | NaN | 顶层炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_top\_artillery.png | NaN | NaN | NaN | NaN | 火炮炮塔图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_top\_flame.png | NaN | NaN | NaN | NaN | 炮塔开火闪光图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_top\_l2.png | NaN | NaN | NaN | NaN | 机枪炮塔炮塔L2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turret\_top\_l3.png | NaN | NaN | NaN | NaN | 机枪炮塔炮塔L3图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_air.png | NaN | NaN | NaN | NaN | 空军单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_builder.png | NaN | NaN | NaN | NaN | 建造者地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_building.png | NaN | NaN | NaN | NaN | 建筑地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_building\_air\_turrent.png | NaN | NaN | NaN | NaN | 空中建筑建造中地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_building\_turrent.png | NaN | NaN | NaN | NaN | 建筑建造中地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_hover.png | NaN | NaN | NaN | NaN | 两栖单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_land.png | NaN | NaN | NaN | NaN | 陆军单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_land\_exp.png | NaN | NaN | NaN | NaN | 实验单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_underwater.png | NaN | NaN | NaN | NaN | 水下单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit\_icon\_water.png | NaN | NaN | NaN | NaN | 海军单位地图缩放图标图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | wall\_b.png | NaN | NaN | NaN | NaN | 墙B图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | wall\_h.png | NaN | NaN | NaN | NaN | 墙H图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | wall\_v.png | NaN | NaN | NaN | NaN | 墙V图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | water\_layer1.png | NaN | NaN | NaN | NaN | 水层1图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | water\_layer2.png | NaN | NaN | NaN | NaN | 水层2图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | zoom\_button.png | NaN | NaN | NaN | NaN | 地图缩放范围按钮图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | JPG图像文件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | water\_cloud.jpg | NaN | NaN | NaN | NaN | 水云图 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | XML文件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | backrepeat.xml | NaN | NaN | NaN | NaN | 后中继器 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | btn\_dropdown.xml | NaN | NaN | NaN | NaN | 按钮下拉 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | border\_shadow.xml | NaN | NaN | NaN | NaN | 边框阴影 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | cell\_shape.xml | NaN | NaN | NaN | NaN | 单元格形状 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | custombutton.xml | NaN | NaN | NaN | NaN | 自定义按钮 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | icon\_round.xml | NaN | NaN | NaN | NaN | 周边图标 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | rounded\_border.xml | NaN | NaN | NaN | NaN | 角边框 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 其他
| Rusted Warfare（铁锈战争）课外书，其他知识。 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 | 铁锈战争做mod和测试mod的部分其他知识 | Unnamed: 16 | Unnamed: 17 | Unnamed: 18 | Unnamed: 19 | Unnamed: 20 | Unnamed: 21 | Unnamed: 22 | Unnamed: 23 | Unnamed: 24 | Unnamed: 25 | Unnamed: 26 | Unnamed: 27 | Unnamed: 28 | Unnamed: 29 | Unnamed: 30 | 铁锈战争电脑端快捷键大全（沙盒的特殊快捷键请在最左边表格查看） | Unnamed: 32 | Unnamed: 33 | Unnamed: 34 | Unnamed: 35 | Unnamed: 36 | Unnamed: 37 | Unnamed: 38 | Unnamed: 39 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ACTION（行动） | NaN | NaN | NaN | NaN | KEY（键） | NaN | NaN | Alt-Key（其他键） |
| NaN | “[Language]”是什么?，要填什么?，干什么用的？ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 路径使用斜杠/\ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Camera Up（屏幕上移） | NaN | NaN | NaN | NaN | ↑（上箭头键） | NaN | NaN | NUMPAD8（小键盘数字8键） |
| NaN | ISO 3166-1 联合国统计局统计用国家地区代码 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | /作为路径是通用的,比如网址、路径 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Camera Down（屏幕下移） | NaN | NaN | NaN | NaN | ↓（下箭头键） | NaN | NaN | NUMPAD2（小键盘数字2键） |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | \似乎只在win资源管理作为路径使用,许多时候作为转义使用， | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Camera Left（屏幕左移） | NaN | NaN | NaN | NaN | ←（左箭头键） | NaN | NaN | NUMPAD4（小键盘数字4键） |
| NaN | 二位字母 | 三位字母 | 数字 | ISO 3166-2相应代码 | 国家或地区 | 分界线 | 二位字母 | 三位字母 | 数字 | ISO 3166-2相应代码 | 国家或地区 | 分界线 | NaN | NaN | NaN | 这意味着\\相当于\,如\n则被解析为换行，处理几次\就没了，而/不存在这种问题。 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Camera Right（屏幕右移） | NaN | NaN | NaN | NaN | →（右箭头键） | NaN | NaN | NUMPAD6（小键盘数字6键） |
| NaN | AD | AND | 20 | ISO 3166-2:AD | 安道尔 | 分界线 | ML | MLI | 466 | ISO 3166-2:ML | 马里 | 分界线 | NaN | NaN | NaN | 注：有一类文件夹叫做..（也就是两个英文句号），这个文件夹里面是上一个文件夹目录（但是铁锈似乎不支持） | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Zoom In（缩放入） | NaN | NaN | NaN | NaN | 滚轮上滑 | NaN | NaN | <unknow> |
| NaN | AE | ARE | 784 | ISO 3166-2:AE | 阿联酋 | 分界线 | MM | MMR | 104 | ISO 3166-2:MM | 缅甸 | 分界线 | NaN | NaN | NaN | 语言文件写法示例 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Zoom Out（缩放出） | NaN | NaN | NaN | NaN | 滚轮下滑 | NaN | NaN | <unknow> |
| NaN | AF | AFG | 4 | ISO 3166-2:AF | 阿富汗 | 分界线 | MN | MNG | 496 | ISO 3166-2:MN | 蒙古 | 分界线 | NaN | NaN | NaN | units.单位名称.name=写单位显示的名称 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Send Chat（发送全局消息） | NaN | NaN | NaN | NaN | ENTER（换行键） | NaN | NaN | T（T键） |
| NaN | AG | ATG | 28 | ISO 3166-2:AG | 安提瓜和巴布达 | 分界线 | MO | MAC | 446 | ISO 3166-2:MO | 澳门 | 分界线 | NaN | NaN | NaN | units.单位名称.description= [[填单位显示的描述]] | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Send Team Chat（发送队伍消息） | NaN | NaN | NaN | NaN | SHIFT+ENTER（Shift键+换行键） | NaN | NaN | Y（Y键） |
| NaN | AI | AIA | 660 | ISO 3166-2:AI | 安圭拉 | 分界线 | MP | MNP | 580 | ISO 3166-2:MP | 北马里亚纳群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Ping Map（地图映射标记） | NaN | NaN | NaN | NaN | CTRL+M（Ctrl键+M键） | NaN | NaN | CTRL+P（Ctrl键+P键） |
| NaN | AL | ALB | 8 | ISO 3166-2:AL | 阿尔巴尼亚 | 分界线 | MQ | MTQ | 474 | ISO 3166-2:MQ | 马提尼克 | 分界线 | NaN | NaN | NaN | 沙盒模式隐藏快捷键 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Show Menu（显示菜单） | NaN | NaN | NaN | NaN | ESCAPE | NaN | NaN | F10（F10键） |
| NaN | AM | ARM | 51 | ISO 3166-2:AM | 亚美尼亚 | 分界线 | MR | MRT | 478 | ISO 3166-2:MR | 毛里塔尼亚 | 分界线 | NaN | NaN | NaN | AI debug模式 | NaN | Map debug模式 | NaN | 单位无敌模式 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Save Game（保存游戏） | NaN | NaN | NaN | NaN | CTRL+S（Ctrl键+S键） | NaN | NaN | <unknow> |
| NaN | AO | AGO | 24 | ISO 3166-2:AO | 安哥拉 | 分界线 | MS | MSR | 500 | ISO 3166-2:MS | 蒙特塞拉特 | 分界线 | NaN | NaN | NaN | 开启按键：Shift+f3 | NaN | 开启按键：Shift+f4 | NaN | 开启按键：Ctrl+shift+I | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Deselect units（取消选择单位） | NaN | NaN | NaN | NaN | SPACE（空格） | NaN | NaN | <unknow> |
| NaN | AQ | ATA | 10 | ISO 3166-2:AQ | 南极洲 | 分界线 | MT | MLT | 470 | ISO 3166-2:MT | 马耳他 | 分界线 | NaN | NaN | NaN | Debug模式 | NaN | NaN | NaN | 停止游戏 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Go to notification（转到快报） | NaN | NaN | NaN | NaN | CTRL+SPACE（Ctrl键+空格） | NaN | NaN | <unknow> |
| NaN | AR | ARG | 32 | ISO 3166-2:AR | 阿根廷 | 分界线 | MU | MUS | 480 | ISO 3166-2:MU | 毛里求斯 | 分界线 | NaN | NaN | NaN | 开启按键：Ctrl+shift+D | NaN | NaN | NaN | 开启按键：Ctrl+shift+p | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Select Whole Army（选择所有的单位，非建筑） | NaN | NaN | NaN | NaN | CTRL+A（Ctrl键+A键） | NaN | NaN | <unknow> |
| NaN | AS | ASM | 16 | ISO 3166-2:AS | 美属萨摩亚 | 分界线 | MV | MDV | 462 | ISO 3166-2:MV | 马尔代夫 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Select Command Center（选择到指挥中心） | NaN | NaN | NaN | NaN | CTRL+C（Ctrl键+C键） | NaN | NaN | <unknow> |
| NaN | AT | AUT | 40 | ISO 3166-2:AT | 奥地利 | 分界线 | MW | MWI | 454 | ISO 3166-2:MW | 马拉维 | 分界线 | NaN | NaN | NaN | 放置规则示例 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cycle Builders（循环选择建造者） | NaN | NaN | NaN | NaN | CTRL+B（Ctrl键+B键） | NaN | NaN | <unknow> |
| NaN | AU | AUS | 36 | ISO 3166-2:AU | 澳大利亚 | 分界线 | MX | MEX | 484 | ISO 3166-2:MX | 墨西哥 | 分界线 | NaN | NaN | NaN | [placementRule\_需要靠近主要建筑] | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cycle Extractors（循环选择资源抽取器） | NaN | NaN | NaN | NaN | CTRL+E（Ctrl键+E键） | NaN | NaN | <unknow> |
| NaN | AW | ABW | 533 | ISO 3166-2:AW | 阿鲁巴 | 分界线 | MY | MYS | 458 | ISO 3166-2:MY | 马来西亚 | 分界线 | NaN | NaN | NaN | #anyRuleInGroup: needmainbuild | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cycle Upgradable Fabricators（循环选择可升级单位） | NaN | NaN | NaN | NaN | CTRL+F（Ctrl键+F键） | NaN | NaN | <unknow> |
| NaN | AX | ALA | 248 | ISO 3166-2:AX | 奥兰 | 分界线 | MZ | MOZ | 508 | ISO 3166-2:MZ | 莫桑比克 | 分界线 | NaN | NaN | NaN | searchTags: BUIYS | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cycle Land Factories（循环选择陆军工厂） | NaN | NaN | NaN | NaN | CTRL+L（Ctrl键+L键） | NaN | NaN | <unknow> |
| NaN | AZ | AZE | 31 | ISO 3166-2:AZ | 阿塞拜疆 | 分界线 | NaN | NAM | 516 | ISO 3166-2:NA | 纳米比亚 | 分界线 | NaN | NaN | NaN | minCount:1 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cycle Air Factories（循环选择空军工厂） | NaN | NaN | NaN | NaN | CTRL+K（Ctrl键+K键） | NaN | NaN | <unknow> |
| NaN | BA | BIH | 70 | ISO 3166-2:BA | 波斯尼亚和黑塞哥维那 | 分界线 | NC | NCL | 540 | ISO 3166-2:NC | 新喀里多尼亚 | 分界线 | NaN | NaN | NaN | checkEachTile:true | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Next Music Track（播放下一首音乐曲目） | NaN | NaN | NaN | NaN | CTRL+N（Ctrl键+N键） | NaN | NaN | <unknow> |
| NaN | BB | BRB | 52 | ISO 3166-2:BB | 巴巴多斯 | 分界线 | NE | NER | 562 | ISO 3166-2:NE | 尼日尔 | 分界线 | NaN | NaN | NaN | blocksPlacement:true | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | BD | BGD | 50 | ISO 3166-2:BD | 孟加拉 | 分界线 | NF | NFK | 574 | ISO 3166-2:NF | 诺福克岛 | 分界线 | NaN | NaN | NaN | cannotPlaceMessage:距离太远,需要靠近主要建筑物 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | <<<Game Speed(Single Player)>>>\n《《《全局游戏速度（仅限单人模式）》》》 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | BE | BEL | 56 | ISO 3166-2:BE | 比利时 | 分界线 | NG | NGA | 566 | ISO 3166-2:NG | 尼日利亚 | 分界线 | NaN | NaN | NaN | searchDistance:180 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Slower（放慢） | NaN | NaN | NaN | NaN | MINUS | NaN | NaN | NUMPADSUBTRACT（小键盘Subtract键） |
| NaN | “[Language]”是什么?，要填什么?，干什么用的？ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | excludeIncompleteBuildings:true | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Faster（快进） | NaN | NaN | NaN | NaN | EQUALS | NaN | NaN | NUMPADADD（小键盘Add键） |
| NaN | ISO 3166-2 联合国统计局统计用国家地区代码 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | excludeNonBuildings:true | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Pause Game（暂停游戏） | NaN | NaN | NaN | NaN | BREAK | NaN | NaN | <unknow> |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 未知 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 二位字母 | 三位字母 | 数字 | ISO 3166-3相应代码 | 国家或地区 | 分界线 | 二位字母 | 三位字母 | 数字 | ISO 3166-3相应代码 | 国家或地区 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | <<<Unit Actions>>>\n《《《单位行动》》》 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | AD | AND | 44.657895 | ISO 3166-3:AD | 安道尔 | 分界线 | ML | MLI | 571.042105 | ISO 3166-3:ML | 马里 | 分界线 | NaN | NaN | NaN | 已知 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Attack Move（进军） | NaN | NaN | NaN | NaN | A（A键） | NaN | NaN | <unknow> |
| NaN | AE | ARE | 35.801504 | ISO 3166-3:AE | 阿联酋 | 分界线 | MM | MMR | 579.627068 | ISO 3166-3:MM | 缅甸 | 分界线 | NaN | NaN | NaN | SHADOW:[文件] | NaN | NaN | 把图像改成全黑 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Stop（停下） | NaN | NaN | NaN | NaN | S（S键） | NaN | NaN | <unknow> |
| NaN | AF | AFG | 26.945113 | ISO 3166-3:AF | 阿富汗 | 分界线 | MN | MNG | 588.21203 | ISO 3166-3:MN | 蒙古 | 分界线 | NaN | NaN | NaN | ROOT:[文件/文件路径] | NaN | NaN | 从目录距离最近的all-units.template(全单位模板)开始进行引用 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Guard Unit（保护单位） | NaN | NaN | NaN | NaN | G（G键） | NaN | NaN | <unknow> |
| NaN | AG | ATG | 18.088722 | ISO 3166-3:AG | 安提瓜和巴布达 | 分界线 | MO | MAC | 596.796992 | ISO 3166-3:MO | 澳门 | 分界线 | NaN | NaN | NaN | CORE:[文件/文件路径] | NaN | NaN | 引用assets/units文件夹里的图像文件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Patrol（巡逻） | NaN | NaN | NaN | NaN | P（P键） | NaN | NaN | <unknow> |
| NaN | AI | AIA | 9.232331 | ISO 3166-3:AI | 安圭拉 | 分界线 | MP | MNP | 605.381955 | ISO 3166-3:MP | 北马里亚纳群岛 | 分界线 | NaN | NaN | NaN | SHARED:[文件] | NaN | NaN | 引用assets/units/shared文件夹里的图像文件 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Reclaim（回收） | NaN | NaN | NaN | NaN | <unknow> | NaN | NaN | <unknow> |
| NaN | AL | ALB | 0.37594 | ISO 3166-3:AL | 阿尔巴尼亚 | 分界线 | MQ | MTQ | 613.966917 | ISO 3166-3:MQ | 马提尼克 | 分界线 | NaN | NaN | NaN | BUILTIN: | NaN | NaN | 使用游戏内置效果 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Action - Upgrade（行动 - 升级） | NaN | NaN | NaN | NaN | U（U键） | NaN | NaN | <unknow> |
| NaN | AM | ARM | -8.480451 | ISO 3166-3:AM | 亚美尼亚 | 分界线 | MR | MRT | 622.55188 | ISO 3166-3:MR | 毛里塔尼亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Action - Set Rally（行动 - 设置集结点） | NaN | NaN | NaN | NaN | R（R键） | NaN | NaN | <unknow> |
| NaN | AO | AGO | -17.336842 | ISO 3166-3:AO | 安哥拉 | 分界线 | MS | MSR | 631.136842 | ISO 3166-3:MS | 蒙特塞拉特 | 分界线 | NaN | NaN | NaN | 十六进制调色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 1（单位行动1） | NaN | NaN | NaN | NaN | Z（Z键） | NaN | NaN | <unknow> |
| NaN | AQ | ATA | -26.193233 | ISO 3166-3:AQ | 南极洲 | 分界线 | MT | MLT | 639.721805 | ISO 3166-3:MT | 马耳他 | 分界线 | NaN | NaN | NaN | -在铁锈代码中，如果您要进行上色，您必须使用十六进制进行调色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 2（单位行动2） | NaN | NaN | NaN | NaN | X（X键） | NaN | NaN | <unknow> |
| NaN | AR | ARG | -35.049624 | ISO 3166-3:AR | 阿根廷 | 分界线 | MU | MUS | 648.306767 | ISO 3166-3:MU | 毛里求斯 | 分界线 | NaN | NaN | NaN | 在十六进制中，1-9不变 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 3（单位行动3） | NaN | NaN | NaN | NaN | C（C键） | NaN | NaN | <unknow> |
| NaN | AS | ASM | -43.906015 | ISO 3166-3:AS | 美属萨摩亚 | 分界线 | MV | MDV | 656.891729 | ISO 3166-3:MV | 马尔代夫 | 分界线 | NaN | NaN | NaN | 此时 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 4（单位行动4） | NaN | NaN | NaN | NaN | V（V键） | NaN | NaN | <unknow> |
| NaN | AT | AUT | -52.762406 | ISO 3166-3:AT | 奥地利 | 分界线 | MW | MWI | 665.476692 | ISO 3166-3:MW | 马拉维 | 分界线 | NaN | NaN | NaN | A = 10 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 5（单位行动5） | NaN | NaN | NaN | NaN | B（B键） | NaN | NaN | <unknow> |
| NaN | AU | AUS | -61.618797 | ISO 3166-3:AU | 澳大利亚 | 分界线 | MX | MEX | 674.061654 | ISO 3166-3:MX | 墨西哥 | 分界线 | NaN | NaN | NaN | B = 11 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 6（单位行动6） | NaN | NaN | NaN | NaN | N（N键） | NaN | NaN | <unknow> |
| NaN | AW | ABW | -70.475188 | ISO 3166-3:AW | 阿鲁巴 | 分界线 | MY | MYS | 682.646617 | ISO 3166-3:MY | 马来西亚 | 分界线 | NaN | NaN | NaN | C = 12 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 7（单位行动7） | NaN | NaN | NaN | NaN | M（M键） | NaN | NaN | <unknow> |
| NaN | AX | ALA | -79.331579 | ISO 3166-3:AX | 奥兰 | 分界线 | MZ | MOZ | 691.231579 | ISO 3166-3:MZ | 莫桑比克 | 分界线 | NaN | NaN | NaN | D = 13 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 8（单位行动8） | NaN | NaN | NaN | NaN | J（J键） | NaN | NaN | <unknow> |
| NaN | AZ | AZE | -88.18797 | ISO 3166-3:AZ | 阿塞拜疆 | 分界线 | NaN | NAM | 699.816541 | ISO 3166-3:NA | 纳米比亚 | 分界线 | NaN | NaN | NaN | E = 14 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 9（单位行动9） | NaN | NaN | NaN | NaN | K（K键） | NaN | NaN | <unknow> |
| NaN | BA | BIH | -97.044361 | ISO 3166-3:BA | 波斯尼亚和黑塞哥维那 | 分界线 | NC | NCL | 708.401504 | ISO 3166-3:NC | 新喀里多尼亚 | 分界线 | NaN | NaN | NaN | F = 15 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unit action 10（单位行动10） | NaN | NaN | NaN | NaN | L（L键） | NaN | NaN | NaN |
| NaN | BB | BRB | -105.900752 | ISO 3166-3:BB | 巴巴多斯 | 分界线 | NE | NER | 716.986466 | ISO 3166-3:NE | 尼日尔 | 分界线 | NaN | NaN | NaN | 十六进制调色分有很多种 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | BD | BGD | -114.757143 | ISO 3166-3:BD | 孟加拉 | 分界线 | NF | NFK | 725.571429 | ISO 3166-3:NF | 诺福克岛 | 分界线 | NaN | NaN | NaN | 铁锈代码使用的是RGB（红绿蓝）或者RGBA（红绿蓝透）调色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | <<<Unit Groups>>>\n《《《单位编队》》》 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | BE | BEL | -123.613534 | ISO 3166-3:BE | 比利时 | 分界线 | NG | NGA | 734.156391 | ISO 3166-3:NG | 尼日利亚 | 分界线 | NaN | NaN | NaN | PS：在调色中，字母可以不分大小写 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 1（创建编队1） | NaN | NaN | NaN | NaN | CTRL+1（Ctrl键+数字1键） | NaN | NaN | <unknow> |
| NaN | CK | COK | 184 | ISO 3166-2:CK | 库克群岛 | 分界线 | RO | ROU | 642 | ISO 3166-2:RO | 罗马尼亚 | 分界线 | NaN | NaN | NaN | 几个例子 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 2（创建编队2） | NaN | NaN | NaN | NaN | CTRL+2（Ctrl键+数字2键） | NaN | NaN | <unknow> |
| NaN | CL | CHL | 152 | ISO 3166-2:CL | 智利 | 分界线 | RS | SRB | 688 | ISO 3166-2:RS | 塞尔维亚 | 分界线 | NaN | NaN | NaN | #FF0000 = 红色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 3（创建编队3） | NaN | NaN | NaN | NaN | CTRL+3（Ctrl键+数字3键） | NaN | NaN | <unknow> |
| NaN | CM | CMR | 120 | ISO 3166-2:CM | 喀麦隆 | 分界线 | RU | RUS | 643 | ISO 3166-2:RU | 俄罗斯 | 分界线 | NaN | NaN | NaN | #00FF00 = 绿色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 4（创建编队4） | NaN | NaN | NaN | NaN | CTRL+4（Ctrl键+数字4键） | NaN | NaN | <unknow> |
| NaN | CN | CHN | 156 | ISO 3166-2:CN | 中国 | 分界线 | RW | RWA | 646 | ISO 3166-2:RW | 卢旺达 | 分界线 | NaN | NaN | NaN | #0000FF = 蓝色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 5（创建编队5） | NaN | NaN | NaN | NaN | CTRL+5（Ctrl键+数字5键） | NaN | NaN | <unknow> |
| NaN | CO | COL | 170 | ISO 3166-2:CO | 哥伦比亚 | 分界线 | SA | SAU | 682 | ISO 3166-2:SA | 沙特阿拉伯 | 分界线 | NaN | NaN | NaN | #FFFF00 = 黄色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 6（创建编队6） | NaN | NaN | NaN | NaN | CTRL+6（Ctrl键+数字6键） | NaN | NaN | <unknow> |
| NaN | CR | CRI | 188 | ISO 3166-2:CR | 哥斯达黎加 | 分界线 | SB | SLB | 90 | ISO 3166-2:SB | 所罗门群岛 | 分界线 | NaN | NaN | NaN | #FF00FF = 紫色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 7（创建编队7） | NaN | NaN | NaN | NaN | CTRL+7（Ctrl键+数字7键） | NaN | NaN | <unknow> |
| NaN | CU | CUB | 192 | ISO 3166-2:CU | 古巴 | 分界线 | SC | SYC | 690 | ISO 3166-2:SC | 塞舌尔 | 分界线 | NaN | NaN | NaN | #00FFFF = 青色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 8（创建编队8） | NaN | NaN | NaN | NaN | CTRL+8（Ctrl键+数字8键） | NaN | NaN | <unknow> |
| NaN | CV | CPV | 132 | ISO 3166-2:CV | 佛得角 | 分界线 | SD | SDN | 729 | ISO 3166-2:SD | 苏丹 | 分界线 | NaN | NaN | NaN | #00FFFF80 = 半透明的青色 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 9（创建编队9） | NaN | NaN | NaN | NaN | CTRL+9（Ctrl键+数字9键） | NaN | NaN | <unknow> |
| NaN | CW | CUW | 531 | ISO 3166-2:CW | 库拉索 | 分界线 | SE | SWE | 752 | ISO 3166-2:SE | 瑞典 | 分界线 | NaN | NaN | NaN | 您可能会没看懂为什么要这么写 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | create group 10（创建编队0(10)） | NaN | NaN | NaN | NaN | CTRL+0（Ctrl键+数字0键） | NaN | NaN | <unknow> |
| NaN | CX | CXR | 162 | ISO 3166-2:CX | 圣诞岛 | 分界线 | SG | SGP | 702 | ISO 3166-2:SG | 新加坡 | 分界线 | NaN | NaN | NaN | 这个规律很简单 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 1（选择编队1） | NaN | NaN | NaN | NaN | 1（数字1键） | NaN | NaN | <unknow> |
| NaN | CY | CYP | 196 | ISO 3166-2:CY | 塞浦路斯 | 分界线 | SH | SHN | 654 | ISO 3166-2:SH | 圣赫勒拿 | 分界线 | NaN | NaN | NaN | 每两位数，用第一位数乘以16，再加上第二位数即可算出RGB或RDBA的值 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 2（选择编队2） | NaN | NaN | NaN | NaN | 2（数字2键） | NaN | NaN | <unknow> |
| NaN | CZ | CZE | 203 | ISO 3166-2:CZ | 捷克 | 分界线 | SI | SVN | 705 | ISO 3166-2:SI | 斯洛文尼亚 | 分界线 | NaN | NaN | NaN | 例子 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 3（选择编队3） | NaN | NaN | NaN | NaN | 3（数字3键） | NaN | NaN | <unknow> |
| NaN | DE | DEU | 276 | ISO 3166-2:DE | 德国 | 分界线 | SJ | SJM | 744 | ISO 3166-2:SJ | 挪威 斯瓦尔巴群岛和扬马延岛 | 分界线 | NaN | NaN | NaN | FA=250 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 4（选择编队4） | NaN | NaN | NaN | NaN | 4（数字4键） | NaN | NaN | <unknow> |
| NaN | DJ | DJI | 262 | ISO 3166-2:DJ | 吉布提 | 分界线 | SK | SVK | 703 | ISO 3166-2:SK | 斯洛伐克 | 分界线 | NaN | NaN | NaN | 80=128 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 5（选择编队5） | NaN | NaN | NaN | NaN | 5（数字5键） | NaN | NaN | <unknow> |
| NaN | DK | DNK | 208 | ISO 3166-2:DK | 丹麦 | 分界线 | SL | SLE | 694 | ISO 3166-2:SL | 塞拉利昂 | 分界线 | NaN | NaN | NaN | A0=160 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 6（选择编队6） | NaN | NaN | NaN | NaN | 6（数字6键） | NaN | NaN | <unknow> |
| NaN | DM | DMA | 212 | ISO 3166-2:DM | 多米尼克 | 分界线 | SM | SMR | 674 | ISO 3166-2:SM | 圣马力诺 | 分界线 | NaN | NaN | NaN | 用其调色就行，记得#后面是按照R（红色），G（绿色），B（蓝色），A（透明度）来调色的哦 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 7（选择编队7） | NaN | NaN | NaN | NaN | 7（数字7键） | NaN | NaN | <unknow> |
| NaN | DO | DOM | 214 | ISO 3166-2:DO | 多米尼加 | 分界线 | SN | SEN | 686 | ISO 3166-2:SN | 塞内加尔 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 8（选择编队8） | NaN | NaN | NaN | NaN | 8（数字8键） | NaN | NaN | <unknow> |
| NaN | DZ | DZA | 12 | ISO 3166-2:DZ | 阿尔及利亚 | 分界线 | SO | SOM | 706 | ISO 3166-2:SO | 索马里 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 9（选择编队9） | NaN | NaN | NaN | NaN | 9（数字9键） | NaN | NaN | <unknow> |
| NaN | EC | ECU | 218 | ISO 3166-2:EC | 厄瓜多尔 | 分界线 | SR | SUR | 740 | ISO 3166-2:SR | 苏里南 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | select group 10（选择编队0(10)） | NaN | NaN | NaN | NaN | 0（数字0键） | NaN | NaN | <unknow> |
| NaN | EE | EST | 233 | ISO 3166-2:EE | 爱沙尼亚 | 分界线 | SS | SSD | 728 | ISO 3166-2:SS | 南苏丹 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 1（添加单位到编队1） | NaN | NaN | NaN | NaN | SHIFT+1（Shift键+数字1键） | NaN | NaN | <unknow> |
| NaN | EG | EGY | 818 | ISO 3166-2:EG | 埃及 | 分界线 | ST | STP | 678 | ISO 3166-2:ST | 圣多美和普林西比 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 2（添加单位到编队2） | NaN | NaN | NaN | NaN | SHIFT+2（Shift键+数字2键） | NaN | NaN | <unknow> |
| NaN | EH | ESH | 732 | ISO 3166-2:EH | 阿拉伯撒哈拉民主共和国 | 分界线 | SV | SLV | 222 | ISO 3166-2:SV | 萨尔瓦多 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 3（添加单位到编队3） | NaN | NaN | NaN | NaN | SHIFT+3（Shift键+数字3键） | NaN | NaN | <unknow> |
| NaN | ER | ERI | 232 | ISO 3166-2:ER | 厄立特里亚 | 分界线 | SX | SXM | 534 | ISO 3166-2:SX | 荷属圣马丁 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 4（添加单位到编队4） | NaN | NaN | NaN | NaN | SHIFT+4（Shift键+数字4键） | NaN | NaN | <unknow> |
| NaN | ES | ESP | 724 | ISO 3166-2:ES | 西班牙 | 分界线 | SY | SYR | 760 | ISO 3166-2:SY | 叙利亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 5（添加单位到编队5） | NaN | NaN | NaN | NaN | SHIFT+5（Shift键+数字5键） | NaN | NaN | <unknow> |
| NaN | ET | ETH | 231 | ISO 3166-2:ET | 埃塞俄比亚 | 分界线 | SZ | SWZ | 748 | ISO 3166-2:SZ | 斯威士兰 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 6（添加单位到编队6） | NaN | NaN | NaN | NaN | SHIFT+6（Shift键+数字6键） | NaN | NaN | <unknow> |
| NaN | FI | FIN | 246 | ISO 3166-2:FI | 芬兰 | 分界线 | TC | TCA | 796 | ISO 3166-2:TC | 特克斯和凯科斯群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 7（添加单位到编队7） | NaN | NaN | NaN | NaN | SHIFT+7（Shift键+数字7键） | NaN | NaN | <unknow> |
| NaN | FJ | FJI | 242 | ISO 3166-2:FJ | 斐济 | 分界线 | TD | TCD | 148 | ISO 3166-2:TD | 乍得 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 8（添加单位到编队8） | NaN | NaN | NaN | NaN | SHIFT+8（Shift键+数字8键） | NaN | NaN | <unknow> |
| NaN | FK | FLK | 238 | ISO 3166-2:FK | 福克兰群岛 | 分界线 | TF | ATF | 260 | ISO 3166-2:TF | 法属南部领地 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 9（添加单位到编队9） | NaN | NaN | NaN | NaN | SHIFT+9（Shift键+数字9键） | NaN | NaN | <unknow> |
| NaN | FM | FSM | 583 | ISO 3166-2:FM | 密克罗尼西亚联邦 | 分界线 | TG | TGO | 768 | ISO 3166-2:TG | 多哥 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Add group to selection 10（添加单位到编队0(100） | NaN | NaN | NaN | NaN | SHIFT+0（Shift键+数字0键） | NaN | NaN | <unknow> |
| NaN | FO | FRO | 234 | ISO 3166-2:FO | 法罗群岛 | 分界线 | TH | THA | 764 | ISO 3166-2:TH | 泰国 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | FR | FRA | 250 | ISO 3166-2:FR | 法国 | 分界线 | TJ | TJK | 762 | ISO 3166-2:TJ | 塔吉克斯坦 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GA | GAB | 266 | ISO 3166-2:GA | 加蓬 | 分界线 | TK | TKL | 772 | ISO 3166-2:TK | 托克劳 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GB | GBR | 826 | ISO 3166-2:GB | 英国 | 分界线 | TL | TLS | 626 | ISO 3166-2:TP | 东帝汶 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GD | GRD | 308 | ISO 3166-2:GD | 格林纳达 | 分界线 | TM | TKM | 795 | ISO 3166-2:TM | 土库曼斯坦 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GE | GEO | 268 | ISO 3166-2:GE | 格鲁吉亚 | 分界线 | TN | TUN | 788 | ISO 3166-2:TN | 突尼斯 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GF | GUF | 254 | ISO 3166-2:GF | 法属圭亚那 | 分界线 | TO | TON | 776 | ISO 3166-2:TO | 汤加 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GG | GGY | 831 | ISO 3166-2:GG | 根西 | 分界线 | TR | TUR | 792 | ISO 3166-2:TR | 土耳其 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GH | GHA | 288 | ISO 3166-2:GH | 加纳 | 分界线 | TT | TTO | 780 | ISO 3166-2:TT | 特立尼达和多巴哥 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GI | GIB | 292 | ISO 3166-2:GI | 直布罗陀 | 分界线 | TV | TUV | 798 | ISO 3166-2:TV | 图瓦卢 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GL | GRL | 304 | ISO 3166-2:GL | 格陵兰 | 分界线 | TW | TWN | 158 | ISO 3166-2:TW | 台湾 台湾 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GM | GMB | 270 | ISO 3166-2:GM | 冈比亚 | 分界线 | TZ | TZA | 834 | ISO 3166-2:TZ | 坦桑尼亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GN | GIN | 324 | ISO 3166-2:GN | 几内亚 | 分界线 | UA | UKR | 804 | ISO 3166-2:UA | 乌克兰 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GP | GLP | 312 | ISO 3166-2:GP | 瓜德罗普 | 分界线 | UG | UGA | 800 | ISO 3166-2:UG | 乌干达 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GQ | GNQ | 226 | ISO 3166-2:GQ | 赤道几内亚 | 分界线 | UM | UMI | 581 | ISO 3166-2:UM | 美国本土外小岛屿 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GR | GRC | 300 | ISO 3166-2:GR | 希腊 | 分界线 | US | USA | 840 | ISO 3166-2:US | 美国 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GS | SGS | 239 | ISO 3166-2:GS | 南乔治亚和南桑威奇群岛 | 分界线 | UY | URY | 858 | ISO 3166-2:UY | 乌拉圭 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GT | GTM | 320 | ISO 3166-2:GT | 危地马拉 | 分界线 | UZ | UZB | 860 | ISO 3166-2:UZ | 乌兹别克斯坦 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GU | GUM | 316 | ISO 3166-2:GU | 关岛 | 分界线 | VA | VAT | 336 | ISO 3166-2:VA | 梵蒂冈 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GW | GNB | 624 | ISO 3166-2:GW | 几内亚比绍 | 分界线 | VC | VCT | 670 | ISO 3166-2:VC | 圣文森特和格林纳丁斯 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | GY | GUY | 328 | ISO 3166-2:GY | 圭亚那 | 分界线 | VE | VEN | 862 | ISO 3166-2:VE | 委内瑞拉 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HK | HKG | 344 | ISO 3166-2:HK | 香港 | 分界线 | VG | VGB | 92 | ISO 3166-2:VG | 英属维尔京群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HM | HMD | 334 | ISO 3166-2:HM | 赫德岛和麦克唐纳群岛 | 分界线 | VI | VIR | 850 | ISO 3166-2:VI | 美属维尔京群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HN | HND | 340 | ISO 3166-2:HN | 洪都拉斯 | 分界线 | VN | VNM | 704 | ISO 3166-2:VN | 越南 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HR | HRV | 191 | ISO 3166-2:HR | 克罗地亚 | 分界线 | VU | VUT | 548 | ISO 3166-2:VU | 瓦努阿图 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HT | HTI | 332 | ISO 3166-2:HT | 海地 | 分界线 | WF | WLF | 876 | ISO 3166-2:WF | 瓦利斯和富图纳 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | HU | HUN | 348 | ISO 3166-2:HU | 匈牙利 | 分界线 | WS | WSM | 882 | ISO 3166-2:WS | 萨摩亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | ID | IDN | 360 | ISO 3166-2:ID | 印尼 | 分界线 | YE | YEM | 887 | ISO 3166-2:YE | 也门 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IE | IRL | 372 | ISO 3166-2:IE | 爱尔兰 | 分界线 | YT | MYT | 175 | ISO 3166-2:YT | 马约特 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IL | ISR | 376 | ISO 3166-2:IL | 以色列 | 分界线 | ZA | ZAF | 710 | ISO 3166-2:ZA | 南非 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IM | IMN | 833 | ISO 3166-2:IM | 马恩岛 | 分界线 | ZM | ZMB | 894 | ISO 3166-2:ZM | 赞比亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IN | IND | 356 | ISO 3166-2:IN | 印度 | 分界线 | ZW | ZWE | 716 | ISO 3166-2:ZW | 津巴布韦 | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IO | IOT | 86 | ISO 3166-2:IO | 英属印度洋领地 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IQ | IRQ | 368 | ISO 3166-2:IQ | 伊拉克 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IR | IRN | 364 | ISO 3166-2:IR | 伊朗 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IS | ISL | 352 | ISO 3166-2:IS | 冰岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | IT | ITA | 380 | ISO 3166-2:IT | 意大利 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | JE | JEY | 832 | ISO 3166-2:JE | 泽西 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | JM | JAM | 388 | ISO 3166-2:JM | 牙买加 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | JO | JOR | 400 | ISO 3166-2:JO | 约旦 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | JP | JPN | 392 | ISO 3166-2:JP | 日本 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KE | KEN | 404 | ISO 3166-2:KE | 肯尼亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KG | KGZ | 417 | ISO 3166-2:KG | 吉尔吉斯斯坦 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KH | KHM | 116 | ISO 3166-2:KH | 柬埔寨 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KI | KIR | 296 | ISO 3166-2:KI | 基里巴斯 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KM | COM | 174 | ISO 3166-2:KM | 科摩罗 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KN | KNA | 659 | ISO 3166-2:KN | 圣基茨和尼维斯 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KP | PRK | 408 | ISO 3166-2:KP | 朝鲜 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KR | KOR | 410 | ISO 3166-2:KR | 韩国 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KW | KWT | 414 | ISO 3166-2:KW | 科威特 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KY | CYM | 136 | ISO 3166-2:KY | 开曼群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | KZ | KAZ | 398 | ISO 3166-2:KZ | 哈萨克斯坦 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LA | LAO | 418 | ISO 3166-2:LA | 老挝 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LB | LBN | 422 | ISO 3166-2:LB | 黎巴嫩 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LC | LCA | 662 | ISO 3166-2:LC | 圣卢西亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LI | LIE | 438 | ISO 3166-2:LI | 列支敦士登 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LK | LKA | 144 | ISO 3166-2:LK | 斯里兰卡 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LR | LBR | 430 | ISO 3166-2:LR | 利比里亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LS | LSO | 426 | ISO 3166-2:LS | 莱索托 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LT | LTU | 440 | ISO 3166-2:LT | 立陶宛 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LU | LUX | 442 | ISO 3166-2:LU | 卢森堡 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LV | LVA | 428 | ISO 3166-2:LV | 拉脱维亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | LY | LBY | 434 | ISO 3166-2:LY | 利比亚 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MA | MAR | 504 | ISO 3166-2:MA | 摩洛哥 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MC | MCO | 492 | ISO 3166-2:MC | 摩纳哥 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MD | MDA | 498 | ISO 3166-2:MD | 摩尔多瓦 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | ME | MNE | 499 | ISO 3166-2:ME | 黑山 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MF | MAF | 663 | ISO 3166-2:MF | 法属圣马丁 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MG | MDG | 450 | ISO 3166-2:MG | 马达加斯加 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MH | MHL | 584 | ISO 3166-2:MH | 马绍尔群岛 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | MK | MKD | 807 | ISO 3166-2:MK | 马其顿 | 分界线 | NaN | NaN | NaN | NaN | NaN | 分界线 | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | ISO 639-1 国际标准化组织语言编码标准(此处的大写字母，填写时建议填小写) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿法尔语 | AA | 分界线 | 卡纳达语 | KN | 分界线 | 英文(美国) | en-US | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 法语 | FR | 分界线 | 普什图语 | PS | 分界线 | 加泰罗尼亚文(西班牙) | ca-ES | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 林堡语 | LI | 分界线 | 沃拉普克语 | VO | 分界线 | 加泰罗尼亚文(西班牙,Euro) | ca-ES-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 北萨米语 | SE | 分界线 | 英语 | EN | 分界线 | 阿拉伯文(阿拉伯联合酋长国) | ar-AE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿布哈兹语 | AB | 分界线 | 朝鲜语、韩语 | KO | 分界线 | 阿拉伯文(巴林) | ar-BH | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 弗里西亚语 | FY | 分界线 | 葡萄牙语 | PT | 分界线 | 阿拉伯文(阿尔及利亚) | ar-DZ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 林加拉语 | LN | 分界线 | 沃伦语 | WA | 分界线 | 阿拉伯文(埃及) | ar-EG | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 桑戈语 | SG | 分界线 | 世界语 | EO | 分界线 | 阿拉伯文(伊拉克) | ar-IQ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿维斯陀语 | AE | 分界线 | 卡努里语 | KR | 分界线 | 阿拉伯文(约旦) | ar-JO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 爱尔兰语 | GA | 分界线 | 凯楚亚语 | QU | 分界线 | 阿拉伯文(科威特) | ar-KW | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 老挝语 | LO | 分界线 | 沃洛夫语 | WO | 分界线 | 阿拉伯文(黎巴嫩) | ar-LB | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塞尔维亚-克罗地亚语 | SH | 分界线 | 西班牙语 | ES | 分界线 | 阿拉伯文(利比亚) | ar-LY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 南非语 | AF | 分界线 | 克什米尔语 | KS | 分界线 | 阿拉伯文(摩洛哥) | ar-MA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 苏格兰盖尔语 | GD | 分界线 | 罗曼什语 | RM | 分界线 | 阿拉伯文(阿曼) | ar-OM | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 立陶宛语 | LT | 分界线 | 科萨语 | XH | 分界线 | 阿拉伯文(卡塔尔) | ar-QA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 僧加罗语 | SI | 分界线 | 爱沙尼亚语 | ET | 分界线 | 阿拉伯文(沙特阿拉伯) | ar-SA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿坎语 | AK | 分界线 | 库尔德语 | KU | 分界线 | 阿拉伯文(苏丹) | ar-SD | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 加利西亚语 | GL | 分界线 | 基隆迪语 | RN | 分界线 | 阿拉伯文(叙利亚) | ar-SY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 卢巴语 | LU | 分界线 | 依地语 | YI | 分界线 | 阿拉伯文(突尼斯) | ar-TN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 斯洛伐克语 | SK | 分界线 | 巴斯克语 | EU | 分界线 | 阿拉伯文(也门) | ar-YE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿姆哈拉语 | AM | 分界线 | 科米语 | KV | 分界线 | 保加利亚文(保加利亚) | bg-BG | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 瓜拉尼语 | GN | 分界线 | 罗马尼亚语 | RO | 分界线 | 捷克文(捷克共和国) | cs-CZ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 拉脱维亚语 | LV | 分界线 | 约鲁巴语 | YO | 分界线 | 丹麦文(丹麦) | da-DK | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 斯洛文尼亚语 | SL | 分界线 | 波斯语 | FA | 分界线 | 白俄罗斯文(白俄罗斯) | be-BY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿拉贡语 | AN | 分界线 | 康沃尔语 | KW | 分界线 | 德文(奥地利) | de-AT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 古吉拉特语 | GU | 分界线 | 俄语 | RU | 分界线 | 德文(奥地利,Euro) | de-AT-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马达加斯加语 | MG | 分界线 | 壮语 | ZA | 分界线 | 德文(瑞士) | de-CH | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 萨摩亚语 | SM | 分界线 | 富拉语 | FF | 分界线 | 德文(德国) | de-DE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿拉伯语 | AR | 分界线 | 吉尔吉斯语 | KY | 分界线 | 德文(德国,Euro) | de-DE-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马恩岛语 | GV | 分界线 | 卢旺达语 | RW | 分界线 | 德文(卢森堡) | de-LU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马绍尔语 | MH | 分界线 | 中文 | ZH | 分界线 | 德文(卢森堡,Euro) | de-LU-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 绍纳语 | SN | 分界线 | 芬兰语 | FI | 分界线 | 希腊文(希腊) | el-GR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿萨姆语 | AS | 分界线 | 拉丁语 | LA | 分界线 | 英文(澳大利亚) | en-AU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 豪萨语 | HA | 分界线 | 梵语 | SA | 分界线 | 英文(加拿大) | en-CA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 毛利语 | MI | 分界线 | 祖鲁语 | ZU | 分界线 | 英文(英国) | en-GB | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 索马里语 | SO | 分界线 | 斐济语 | FJ | 分界线 | 英文(爱尔兰) | en-IE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿瓦尔语 | AV | 分界线 | 卢森堡语 | LB | 分界线 | 英文(爱尔兰,Euro) | en-IE-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 希伯来语 | HE | 分界线 | 萨丁尼亚语 | SC | 分界线 | 英文(新西兰) | en-NZ | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马其顿语 | MK | 分界线 | 法罗语 | FO | 分界线 | 英文(南非) | en-ZA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿尔巴尼亚语 | SQ | 分界线 | 卢干达语 | LG | 分界线 | 西班牙文 | es | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 艾马拉语 | AY | 分界线 | 信德语 | SD | 分界线 | 西班牙文(玻利维亚) | es-BO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 印地语 | HI | 分界线 | NaN | NaN | 分界线 | 西班牙文(阿根廷) | es-AR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马拉亚拉姆语 | ML | 分界线 | NaN | NaN | 分界线 | 西班牙文(智利) | es-CL | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塞尔维亚语 | SR | 分界线 | NaN | NaN | 分界线 | 西班牙文(哥伦比亚) | es-CO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 阿塞拜疆语 | AZ | 分界线 | NaN | NaN | 分界线 | 西班牙文(哥斯达黎加) | es-CR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 希里莫图语 | HO | 分界线 | NaN | NaN | 分界线 | 西班牙文(多米尼加共和国) | es-DO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 蒙古语 | MN | 分界线 | NaN | NaN | 分界线 | 西班牙文(厄瓜多尔) | es-EC | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 斯瓦特语 | SS | 分界线 | NaN | NaN | 分界线 | 西班牙文(西班牙) | es-ES | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 巴什基尔语 | BA | 分界线 | NaN | NaN | 分界线 | 西班牙文(西班牙,Euro) | es-ES-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 克罗地亚语 | HR | 分界线 | NaN | NaN | 分界线 | 西班牙文(危地马拉) | es-GT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 摩尔达维亚语 | MO | 分界线 | NaN | NaN | 分界线 | 西班牙文(洪都拉斯) | es-HN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 南索托语 | ST | 分界线 | NaN | NaN | 分界线 | 西班牙文(墨西哥) | es-MX | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 白俄罗斯语 | BE | 分界线 | NaN | NaN | 分界线 | 西班牙文(尼加拉瓜) | es-NI | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | frame | NaN | imageLoad | NaN | underwater=true | NaN | NaN | atTopSpeed=true | NaN | NaN | .tmx(地图格式，语法和xml无二) | NaN | NaN | NaN | NaN | NaN | newAiDifficultyValue: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 海地克里奥尔语 | HT | 分界线 | NaN | NaN | 分界线 | 爱沙尼亚文 | et | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | legX | NaN | imageLoadOrGet | NaN | self.underwater | NaN | NaN | movement-repelFromUnits: | NaN | NaN | .map(未知文件格式) | NaN | NaN | NaN | NaN | NaN | startingUnits: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马拉提语 | MR | 分界线 | NaN | NaN | 分界线 | 西班牙文(巴拿马) | es-PA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | legY | NaN | soundLoad | NaN | self.isUnderwater | NaN | NaN | self.enabled | NaN | NaN | \_map.png(.tmx配套地图标题图，前面填.tmx文件前缀) | NaN | NaN | NaN | NaN | NaN | newPlayerColorValue: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 巽他语 | SU | 分界线 | NaN | NaN | 分界线 | 西班牙文(秘鲁) | es-PE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turretX | NaN | soundLoadOrGet | NaN | ground=true | NaN | NaN | otherUnitHasTag: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | row.setOnClickListener | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 保加利亚语 | BG | 分界线 | NaN | NaN | 分界线 | 西班牙文(波多黎哥) | es-PR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | turretY | NaN | iniParse | NaN | self.gound | NaN | NaN | onlySameTeam: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Kick | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 匈牙利语 | HU | 分界线 | NaN | NaN | 分界线 | 西班牙文(巴拉圭) | es-PY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | scale | NaN | unitParse | NaN | self.ground | NaN | NaN | movement\_random: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Cancel | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马来语 | MS | 分界线 | NaN | NaN | 分界线 | 西班牙文(萨尔瓦多) | es-SV | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | legDir | NaN | iniOpen | NaN | self.isAtGroundHeight | NaN | NaN | awayFromEdge: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | gameOptions.setOnClickListener | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 瑞典语 | SV | 分界线 | NaN | NaN | 分界线 | 西班牙文(乌拉圭) | es-UY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | legHeight | NaN | iniClose | NaN | self.height | NaN | NaN | stateListener | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | level | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 比哈尔语 | BH | 分界线 | NaN | NaN | 分界线 | 西班牙文(委内瑞拉) | es-VE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | event | NaN | iniSetup | NaN | flying=true | NaN | NaN | sock | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onStartGameFailed | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 亚美尼亚语 | HY | 分界线 | NaN | NaN | 分界线 | 爱沙尼亚文(爱沙尼亚) | et-EE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | legAlpha | NaN | actionParse | NaN | self.flying | NaN | NaN | ReliableServerSocket | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getChangeableSetup | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 马耳他语 | MT | 分界线 | NaN | NaN | 分界线 | 法文(比利时) | fr-BE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unitParsePartA | NaN | self.isFlying | NaN | NaN | rudp-NullSegmentTimer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | applyProxyControl | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 斯瓦希里语 | SW | 分界线 | NaN | NaN | 分界线 | 意大利文(瑞士) | it-CH | NaN | NaN | NaN | NaN | NaN | NaN | NaN | completeQueueItem: | NaN | NaN | unitParsePartB | NaN | self.isMoving | NaN | NaN | rudp-RetransmissionTimer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | true | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 比斯拉马语 | BI | 分界线 | NaN | NaN | 分界线 | 意大利文(意大利) | it-IT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | lockDelay: | NaN | NaN | unitParsePartC | NaN | self.hasActiveWaypoint | NaN | NaN | rudp-CumulativeAckTimer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | false | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 赫雷罗语 | HZ | 分界线 | NaN | NaN | 分界线 | 匈牙利文(匈牙利) | hu-HU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | shootCooldown: | NaN | NaN | unitParsePartD | NaN | atTopSpeed=true | NaN | NaN | rudp-KeepAliveTimer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | addAIToGame | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 缅甸语 | MY | 分界线 | NaN | NaN | 分界线 | 冰岛文(冰岛) | is-IS | NaN | NaN | NaN | NaN | NaN | NaN | NaN | idleDir: | NaN | NaN | NaN | NaN | self.maxspeed | NaN | NaN | ReliableSocket-Closing | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | AI | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 泰米尔语 | TA | 分界线 | NaN | NaN | 分界线 | 克罗地亚文(克罗地亚) | hr-HR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | diffDir: | NaN | NaN | NaN | NaN | self.isAtTopSpeed | NaN | NaN | ReliableSocket | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | -addai | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 班巴拉语 | BM | 分界线 | NaN | NaN | 分界线 | 意大利文(意大利,Euro) | it-IT-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | deattachRequest | NaN | NaN | NaN | NaN | self.inwater | NaN | NaN | maxSendQueueSize | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | addAI.setOnClickListener | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 国际语A | IA | 分界线 | NaN | NaN | 分界线 | 法文(比利时,Euro) | fr-BE-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isInWater | NaN | NaN | maxRecvQueueSize | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Error | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 瑙鲁语 | NaN | 分界线 | NaN | NaN | 分界线 | 法文(加拿大) | fr-CA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | usesCreditResources: | NaN | NaN | NaN | NaN | self.overwater | NaN | NaN | maxSegmentSize | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | maps/skirmish/(路径) | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 泰卢固语 | TE | 分界线 | NaN | NaN | 分界线 | 法文(瑞士) | fr-CH | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isOverwater | NaN | NaN | maxOutstandingSegs | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | -start | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 孟加拉语 | BN | 分界线 | NaN | NaN | 分界线 | 法文(法国) | fr-FR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | otherUnitHasTag | NaN | NaN | NaN | NaN | self.isOverLiquid | NaN | NaN | maxRetrans | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | startNetButton.setOnClickListener | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 印尼语 | ID | 分界线 | NaN | NaN | 分界线 | 法文(法国,Euro) | fr-FR-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onlySameTeam | NaN | NaN | NaN | NaN | self.isOverClift | NaN | NaN | maxCumulativeAcks | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | RustedWarfare | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 书面挪威语 | NB | 分界线 | NaN | NaN | 分界线 | 法文(卢森堡) | fr-LU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | enabled | NaN | NaN | NaN | NaN | self.isOverCliff | NaN | NaN | maxOutOfSequence | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | GameView:GameView() | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塔吉克语 | TG | 分界线 | NaN | NaN | 分界线 | 法文(卢森堡,Euro) | fr-LU-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | speed | NaN | NaN | NaN | NaN | self.isOverPassableTile | NaN | NaN | maxAutoReset | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | GameView:finalize() | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 藏语 | BO | 分界线 | NaN | NaN | 分界线 | 芬兰文(芬兰) | fi-FI | NaN | NaN | NaN | NaN | NaN | NaN | NaN | maxSpeed | NaN | NaN | NaN | NaN | type=\'LAND\' | NaN | NaN | nullSegmentTimeout | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | mSurfaceLock | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 国际语E | IE | 分界线 | NaN | NaN | 分界线 | 芬兰文(芬兰,Euro) | fi-FI-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | movement-random | NaN | NaN | NaN | NaN | self.isOverOpenLand | NaN | NaN | retransmissionTimeout | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | lockHardwareCanvas | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 北恩德贝勒语 | ND | 分界线 | NaN | NaN | 分界线 | 希伯来文(以色列) | iw-IL | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.tags | NaN | NaN | cumulativeAckTimeout | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | surfaceExists= | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 泰语 | TH | 分界线 | NaN | NaN | 分界线 | 日文(日本) | ja-JP | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasTags | NaN | NaN | ACK(攻击伤害) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | , source= | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 布列塔尼语 | BR | 分界线 | NaN | NaN | 分界线 | 朝鲜文(南朝鲜) | ko-KR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.globalTeamTags | NaN | NaN | DAT(防御) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | , hash= | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 伊博语 | IG | 分界线 | NaN | NaN | 分界线 | 马其顿文(马其顿王国) | mk-MK | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasGlobalTeamTags | NaN | NaN | EAK | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | updateResolution | surfaceExists==false | NaN | NaN | NaN | NaN | NaN |
| NaN | 尼泊尔语 | NE | 分界线 | NaN | NaN | 分界线 | 立陶宛文(立陶宛) | lt-LT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasFlag | NaN | NaN | FIN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | GameViewNonSurface: flushCanvas | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 提格里尼亚语 | TI | 分界线 | NaN | NaN | 分界线 | 拉托维亚文(列托) | lv | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.energy | NaN | NaN | NUL(零值) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | flushCanvas: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 波斯尼亚语 | BS | 分界线 | NaN | NaN | 分界线 | 拉托维亚文(列托)(拉脱维亚) | lv-LV | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.energyIncludingQueued | NaN | NaN | RST | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | unlockAndReturnCanvas: | canvasBuffer==null | NaN | NaN | NaN | NaN | NaN |
| NaN | 四川彝语（诺苏语） | II | 分界线 | NaN | NaN | 分界线 | 挪威文(挪威) | no-NO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | full=true | NaN | NaN | SYN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getNewCanvasLock: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 恩敦加语 | NG | 分界线 | NaN | NaN | 分界线 | 挪威文(挪威,Nynorsk) | no-NO-NY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isEnergyFull | NaN | NaN | N/A(无限) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getLock: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 土库曼语 | TK | 分界线 | NaN | NaN | 分界线 | 荷兰文(比利时) | nl-BE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | empty=true | NaN | NaN | ——界限—— | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onDraw: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 加泰隆语 | CA | 分界线 | NaN | NaN | 分界线 | 荷兰文(比利时,Euro) | nl-BE-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isEnergyEmpty | NaN | NaN | mime\_type | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onGenericMotionEvent: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 依努庇克语 | IK | 分界线 | NaN | NaN | 分界线 | 荷兰文(荷兰) | nl-NL | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.transportingCount | NaN | NaN | RustedWarfare | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getNewCanvasLock - Timing out - surfaceExists: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 荷兰语 | NL | 分界线 | NaN | NaN | 分界线 | 荷兰文(荷兰,Euro) | nl-NL-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.transportingUnitWithTags | NaN | NaN | document\_id | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | GL - #tex: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 他加禄语 | TL | 分界线 | NaN | NaN | 分界线 | 罗马尼亚文(罗马尼亚) | ro-RO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isTransportUnloading | NaN | NaN | \_size | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | tex size: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 车臣语 | CE | 分界线 | NaN | NaN | 分界线 | 葡萄牙文(巴西) | pt-BR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hp | NaN | NaN | last\_modified | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | endFrame: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 伊多语 | IO | 分界线 | NaN | NaN | 分界线 | 葡萄牙文(葡萄牙) | pt-PT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.shield | NaN | NaN | \_display\_name | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | currentTransformIndex= | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 新挪威语 | NN | 分界线 | NaN | NaN | 分界线 | 葡萄牙文(葡萄牙,Euro) | pt-PT-EURO | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.ammo | NaN | NaN | r | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | drawnBuffers: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塞茨瓦纳语 | TN | 分界线 | NaN | NaN | 分界线 | 波兰文(波兰) | pl-PL | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isAmmoEmpty | NaN | NaN | /tree/primary(路径) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | GameViewThreaded: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 查莫罗语 | CH | 分界线 | NaN | NaN | 分界线 | 塞波尼斯\_克罗地亚文(南斯拉夫) | sh-YU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.ammoIncludingQueued | NaN | NaN | getReadablePath() | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | text | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 冰岛语 | IS | 分界线 | NaN | NaN | 分界线 | 俄文(俄罗斯) | ru-RU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.resource | NaN | NaN | storage/(路径) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | chat | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 挪威语 | NO | 分界线 | NaN | NaN | 分界线 | 斯洛文尼亚文(斯洛文尼亚) | sl-SI | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.queueSize | NaN | NaN | Ok | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | battleroom | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 汤加语 | TO | 分界线 | NaN | NaN | 分界线 | 斯洛伐克文(斯洛伐克) | sk-SK | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfConnections | NaN | NaN | No | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | lobby | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 科西嘉语 | CO | 分界线 | NaN | NaN | 分界线 | 阿尔巴尼亚文(阿尔巴尼亚) | sq-AL | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfAttachedUnits | NaN | NaN | lockHardwareCanvas | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | refreshServerListRunnable | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 意大利语 | IT | 分界线 | NaN | NaN | 分界线 | 塞尔维亚文(南斯拉夫) | sr-YU | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasParent | NaN | NaN | content | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | menus.lobby.gameState.battleroom | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 南恩德贝勒语 | NR | 分界线 | NaN | NaN | 分界线 | 瑞典文(瑞典) | sv-SE | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasResources | NaN | NaN | selectMenuOption: | inner | NaN | NaN | NaN | NaN | NaN | NaN | NaN | menus.lobby.gameState.ingame | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 土耳其语 | TR | 分界线 | NaN | NaN | 分界线 | 土耳其文(土耳其) | tr-TR | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isResourceLargerThan | NaN | NaN | /SD/rustedWarfare/maps/(路径) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | menus.lobby.gameState.chat | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 克里语 | CR | 分界线 | NaN | NaN | 分界线 | 乌克兰文(乌克兰) | uk-UA | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.kills | NaN | NaN | exited | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nsc | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 因纽特语 | IU | 分界线 | NaN | NaN | 分界线 | 泰文(泰国) | th-TH | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.timeAlive | NaN | NaN | package: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | recycledTextViews: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 纳瓦霍语 | NV | 分界线 | NaN | NaN | 分界线 | 中文(中国) | zh-CN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.lastConverted | NaN | NaN | -surrender | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Url: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 宗加语 | TS | 分界线 | NaN | NaN | 分界线 | 中文(香港) | zh-HK | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.customTimer | NaN | NaN | /SD/(路径) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Lan: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 捷克语 | CS | 分界线 | NaN | NaN | 分界线 | 中文(台湾) | zh-TW | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasTakenDamage | NaN | NaN | /SD/rusted\_warfare\_maps | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | User: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 日语 | JA | 分界线 | NaN | NaN | 分界线 | 英文 | en | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isAttacking | NaN | NaN | /SD/rustedWarfare/maps | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Map: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 尼扬贾语 | NY | 分界线 | NaN | NaN | 分界线 | 阿拉伯文 | ar | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | team=-1 | NaN | NaN | showErrorAndStop | path: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Version: | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塔塔尔语 | TT | 分界线 | NaN | NaN | 分界线 | 白俄罗斯文 | be | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isOnNeutralTeam | NaN | NaN | mode | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 古教会斯拉夫语 | CU | 分界线 | NaN | NaN | 分界线 | 保加利亚文 | bg | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.isControlledByAI | NaN | NaN | Delete: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 爪哇语 | JV | 分界线 | NaN | NaN | 分界线 | 加泰罗尼亚文 | ca | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | numberOfUnitsInTeam | NaN | NaN | Thumbnail | deleted: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 奥克语 | OC | 分界线 | NaN | NaN | 分界线 | 捷克文 | cs | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfUnitsInTeam | NaN | NaN | starting singleplayer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 特威语 | TW | 分界线 | NaN | NaN | 分界线 | 丹麦文 | da | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | greaterThan=0, lessThan=-1 | NaN | NaN | You | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 楚瓦什语 | CV | 分界线 | NaN | NaN | 分界线 | 德文 | de | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | hasUnitInTeam | NaN | NaN | started | startSinglePlayerServer | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 格鲁吉亚语 | KA | 分界线 | NaN | NaN | 分界线 | 希腊文 | el | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.hasUnitInTeam | NaN | NaN | LevelAdapter: | getCount: | levelViews==null | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 奥吉布瓦语 | OJ | 分界线 | NaN | NaN | 分界线 | 芬兰文 | fi | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | greaterThan=-1, lessThan=1 | NaN | NaN | LevelAdapter: | getView: | levelPaths==null | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 塔希提语 | TY | 分界线 | NaN | NaN | 分界线 | 法文 | fr | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | noUnitInTeam | NaN | NaN | LevelAdapter: | getView: | levelViews==null | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 威尔士语 | CY | 分界线 | NaN | NaN | 分界线 | 克罗地亚文 | hr | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.noUnitInTeam | NaN | NaN | Credits | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 刚果语 | KG | 分界线 | NaN | NaN | 分界线 | 匈牙利文 | hu | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | neutralTeam=true | NaN | NaN | Warning | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 奥洛莫语 | OM | 分界线 | NaN | NaN | 分界线 | 冰岛文 | is | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | numberOfUnitsInNeutralTeam | NaN | NaN | Resume | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 维吾尔语 | UG | 分界线 | NaN | NaN | 分界线 | 意大利文 | it | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfUnitsInNeutralTeam | NaN | NaN | Disconnect | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 丹麦语 | DA | 分界线 | NaN | NaN | 分界线 | 希伯来文 | iw | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ally=false | NaN | NaN | layoutInDisplayCutoutMode | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 基库尤语 | KI | 分界线 | NaN | NaN | 分界线 | 日文 | ja | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | numberOfUnitsInEnemyTeam | NaN | NaN | i: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 奥利亚语 | OR | 分界线 | NaN | NaN | 分界线 | 朝鲜文 | ko | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfUnitsInEnemyTeam | NaN | NaN | p | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 乌克兰语 | UK | 分界线 | NaN | NaN | 分界线 | 立陶宛文 | lt | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ally=true | NaN | NaN | ApplicationContext==null | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 德语 | DE | 分界线 | NaN | NaN | 分界线 | 马其顿文 | mk | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | numberOfUnitsInAllyTeam | NaN | NaN | Cancel | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 宽亚玛语 | KJ | 分界线 | NaN | NaN | 分界线 | 荷兰文 | nl | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfUnitsInAllyTeam | NaN | NaN | Yes | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 奥塞梯语 | OS | 分界线 | NaN | NaN | 分界线 | 挪威文 | no | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | numberOfUnitsInAllyNotOwnTeam | NaN | NaN | sourceFolder: \' | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 乌尔都语 | UR | 分界线 | NaN | NaN | 分界线 | 波兰文 | pl | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | self.numberOfUnitsInAllyNotOwnTeam | NaN | NaN | Mod: \' | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 迪维希语 | DV | 分界线 | NaN | NaN | 分界线 | 葡萄牙文 | pt | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | nukesEnabled=true | NaN | NaN | Deleted mod: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 哈萨克语 | KK | 分界线 | NaN | NaN | 分界线 | 罗马尼亚文 | ro | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Delete result: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 旁遮普语 | PA | 分界线 | NaN | NaN | 分界线 | 俄文 | ru | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | Failed to delete: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 乌兹别克语 | UZ | 分界线 | NaN | NaN | 分界线 | 塞波尼斯\_克罗地亚文 | sh | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | savesMods: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 不丹语 | DZ | 分界线 | NaN | NaN | 分界线 | 斯洛伐克文 | sk | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getPointerCount | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 格陵兰语 | KL | 分界线 | NaN | NaN | 分界线 | 斯洛文尼亚文 | sl | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | findPointerIndex | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 巴利语 | PI | 分界线 | NaN | NaN | 分界线 | 阿尔巴尼亚文 | sq | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getPressure | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 文达语 | VE | 分界线 | NaN | NaN | 分界线 | 塞尔维亚文 | sr | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getHistoricalX | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 埃维语 | EE | 分界线 | NaN | NaN | 分界线 | 瑞典文 | sv | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getHistoricalY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 高棉语 | KM | 分界线 | NaN | NaN | 分界线 | 泰文 | th | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getHistoricalPressure | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 波兰语 | PL | 分界线 | NaN | NaN | 分界线 | 土耳其文 | tr | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getX | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 越南语 | VI | 分界线 | NaN | NaN | 分界线 | 乌克兰文 | uk | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getY | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | 现代希腊语 | EL | 分界线 | NaN | NaN | 分界线 | 中文 | zh | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ACTION\_POINTER\_UP | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | ACTION\_POINTER\_INDEX\_SHIFT | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | getButtonState | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MultiTouchController | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | MultiTouchController | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | onTouchEvent() | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## 备注
| -备注：此代码表由"^⁧$"⁧‭（198316694）自己解剖深入游戏代码 |
| --- |
| -以及自行在网络渠道上搜索和参考其他代码表以及教程收集总结制作而成 |
| -群：319198864 |
| -2群：1169645937 |
| -上限均为200人 |
| -本人会不定期更新代码表 |
| -可能是小优化，也可能是大更新 |
| ========================= |
| -此代码表为NDT-v1.15（正式版1.0.1.2）（2023.07.17当天版本） |
| -代码表内部可能有重复，错误等问题 |
| -可能还会有没来得及测试的新代码 |
| -如有问题，可以向作者反映（1980316694） |
| -作者并不建议你去看那些未知的代码 |
| -谢谢 |