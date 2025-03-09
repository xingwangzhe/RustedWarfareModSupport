import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const CORE: CompletionItem[] = [
    {
        label: 'name',
        insertText: 'name:',
        labelDetails: { detail :' string 名字', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'名字',
        documentation :'定义单位原始名称,可以是中文.游戏使用它区分其它单位.如果没有在displayText或者语言文件设置显示名称,那么它也将作为单位的显示名称.',
        data: 'string'
    },
    {
        label: 'altNames',
        insertText: 'altNames:',
        labelDetails: { detail :' string 别名', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'别名',
        documentation :'以逗号分隔的名称列表.像名称一样,但优先级较低,对于启用多个自定义nod有用.',
        data: 'string'
    },
    {
        label: 'class',
        insertText: 'class:',
        labelDetails: { detail :' string 类', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'类',
        documentation :'无实际用处,可以删除.Luke说:保留供将来使用,默认情况下最好为CustomUnitMetadata.',
        data: 'string'
    },
    {
        label: 'strictLevel',
        insertText: 'strictLevel:',
        labelDetails: { detail :' float 严格级别', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'严格级别',
        documentation :'默认值为0,忽略代码重复.设为1时如果当前单位内有重复代码,则报错.建议添加到all-units.template以应用于所有单位,进行统一查错.',
        data: 'float'
    },
    {
        label: 'price',
        insertText: 'price:',
        labelDetails: { detail :' int(price) 价格', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'价格',
        documentation :'设定单位造价,可以是负数,负数时提直接供资金.',
        data: 'int(price)'
    },
    {
        label: 'mass',
        insertText: 'mass:',
        labelDetails: { detail :' int 质量', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'质量',
        documentation :'影响与其他单位的碰撞方式,值越大,推动就越困难.',
        data: 'int'
    },
    {
        label: 'techLevel',
        insertText: 'techLevel:',
        labelDetails: { detail :' int 科技等级', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'科技等级',
        documentation :'设置单位的科技等级,共有3个级别,1级GUI显示为绿色,2,3级显示为黄色.',
        data: 'int'
    },
    {
        label: 'buildSpeed',
        insertText: 'buildSpeed:',
        labelDetails: { detail :' time 建造速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建造速度',
        documentation :'建造此单位需要的时间,填秒.以前的计算方式为:此处所填时间=1÷(60x你需要的秒)如果定义了工厂速率则需要乘以建造乘数.',
        data: 'time'
    },
    {
        label: 'radius',
        insertText: 'radius:',
        labelDetails: { detail :' int 半径', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'半径',
        documentation :'单位的实际碰擦体积,也是实际的可选择范围.其光圈在displayRadius覆盖时真实体积不变.',
        data: 'int'
    },
    {
        label: 'isBio',
        insertText: 'isBio:',
        labelDetails: { detail :' bool 是生物', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'是生物',
        documentation :'此单位是否为生物,为生物则影响死亡声音和血迹(图像在drawable/blood_mark.png,hideScorchMark:true时可以隐藏)非生物则为黑色爆炸效果.',
        data: 'bool'
    },
    {
        label: 'isBug',
        insertText: 'isBug:',
        labelDetails: { detail :' bool 是虫子', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'是虫子',
        documentation :'是否为虫子,用于沙盒中的单独分类.',
        data: 'bool'
    },
    {
        label: 'isBuilder',
        insertText: 'isBuilder:',
        labelDetails: { detail :' bool 是建造者', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'是建造者',
        documentation :'若需要此单位建造建筑物,则通常需要此代码.并且默认设为[ai]useAsBuilder.',
        data: 'bool'
    },
    {
        label: 'streamingCost',
        insertText: 'streamingCost:',
        labelDetails: { detail :' int(price) 流式造价', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'流式造价',
        documentation :'就像价格,但在建造时逐渐消耗资金,如果在构建过程中资源耗尽,建造或生产队列将暂停.就像是红警中那样.铁锈默认是预先扣除资金.',
        data: 'int(price)'
    },
    {
        label: 'switchPriceWithStreamingCost',
        insertText: 'switchPriceWithStreamingCost:',
        labelDetails: { detail :' bool 切换价格为流造价', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'切换价格为流造价',
        documentation :'快捷设置为默认资金消耗方式或为流式建造方式.建议使用模板快速将一个模组为所有单位切换流资源.',
        data: 'bool'
    },
    {
        label: 'maxHp',
        insertText: 'maxHp:',
        labelDetails: { detail :' int 生命值', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'生命值',
        documentation :'单位最大生命值,默认生成时即为此值.',
        data: 'int'
    },
    {
        label: 'selfRegenRate',
        insertText: 'selfRegenRate:',
        labelDetails: { detail :' float 生命恢复速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'生命恢复速度',
        documentation :'此数值决定每帧增加血量.游戏内默认速度下,一秒为60逻辑帧,而你看到的FPS帧数为渲染帧,所以电脑上几百帧和手机上60帧和省电模式下30帧并不影响计算.所以不要写太大.可以写负值用于自毁.',
        data: 'float'
    },
    {
        label: 'maxShield',
        insertText: 'maxShield:',
        labelDetails: { detail :' int 护盾值', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'护盾值',
        documentation :'单位最大护盾值,默认生成时即为此值.如果设置了startShieldAtZero:true,则初始为0.',
        data: 'int'
    },
    {
        label: 'startShieldAtZero',
        insertText: 'startShieldAtZero:',
        labelDetails: { detail :' bool 护盾初始为0', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'护盾初始为0',
        documentation :'如果为true,则单位护盾值从0开始增加.',
        data: 'bool'
    },
    {
        label: 'shieldRegen',
        insertText: 'shieldRegen:',
        labelDetails: { detail :' float 护盾恢复速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'护盾恢复速度',
        documentation :'此数值决定每帧增加护盾值,游戏内一秒为60帧,所以不要写太大.可以写负值.',
        data: 'float'
    },
    {
        label: 'energyMax',
        insertText: 'energyMax:',
        labelDetails: { detail :' float 能量值', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量值',
        documentation :'默认值为0.可以用作炮塔,激光防御和行动的弹药的能量.',
        data: 'float'
    },
    {
        label: 'startEnergyAtZero',
        insertText: 'startEnergyAtZero:',
        labelDetails: { detail :' bool 能量初始为0', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量初始为0',
        documentation :'如果为true,则单位能量值从0开始增加.',
        data: 'bool'
    },
    {
        label: 'energyRegen',
        insertText: 'energyRegen:',
        labelDetails: { detail :' float 能量恢复速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量恢复速度',
        documentation :'能量每帧恢复速度,游戏内一秒为60帧,所以不要写太大.可以写负值.',
        data: 'float'
    },
    {
        label: 'energyRegenWhenRecharging',
        insertText: 'energyRegenWhenRecharging:',
        labelDetails: { detail :' float 充能时能量恢复速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'充能时能量恢复速度',
        documentation :'能量恢复是持续的,如果你设置了energyNeedsToRechargeToFull,那么攻击时按energyRegen恢复,耗尽时的灰条按此处设定值恢复.',
        data: 'float'
    },
    {
        label: 'energyStartingPercentage',
        insertText: 'energyStartingPercentage:',
        labelDetails: { detail :' float 能量初始百分比', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量初始百分比',
        documentation :'单位生成时所携带的能量百分比.',
        data: 'float'
    },
    {
        label: 'energyNeedsToRechargeToFull',
        insertText: 'energyNeedsToRechargeToFull:',
        labelDetails: { detail :' bool 能量需要充满', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量需要充满',
        documentation :'若果能量耗尽,则需要完全充能才能进行攻击.',
        data: 'bool'
    },
    {
        label: 'energyDisplayName',
        insertText: 'energyDisplayName:',
        labelDetails: { detail :' string 能量显示名称', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'能量显示名称',
        documentation :'能量显示名称,截止1.15似乎无效',
        data: 'string'
    },
    {
        label: 'armour',
        insertText: 'armour:',
        labelDetails: { detail :' int 装甲', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'装甲',
        documentation :'抵消敌方攻击所造成的伤害.',
        data: 'int'
    },
    {
        label: 'armourMinDamageToKeep',
        insertText: 'armourMinDamageToKeep:',
        labelDetails: { detail :' int 装甲最低伤害', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'装甲最低伤害',
        documentation :'至少造成多少点伤害,默认为1,防止护甲太高完全打不动.',
        data: 'int'
    },
    {
        label: 'borrowResourcesWhileAlive',
        insertText: 'borrowResourcesWhileAlive:',
        labelDetails: { detail :' price 资源活着时借用', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资源活着时借用',
        documentation :'创建时获取这些资源,删除或销毁时将其返回.例如用于电力逻辑,负数供电和正数耗电.',
        data: 'price'
    },
    {
        label: 'borrowResourcesWhileBuilt',
        insertText: 'borrowResourcesWhileBuilt:',
        labelDetails: { detail :' price 资源在单位建成后借用', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资源在单位建成后借用',
        documentation :'类似于[core]borrowResourcesWhileAlive但在单位建成后才会生效.主要对房屋之类的建筑有用,这些建筑有负的资源,可以加到单位上限等',
        data: 'price'
    },
    {
        label: 'generation_resources',
        insertText: 'generation_resources:',
        labelDetails: { detail :' price 资源获取', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资源获取',
        documentation :'单位定时获得的资源,可自定义资源.',
        data: 'price'
    },
    {
        label: 'generation_active',
        insertText: 'generation_active:',
        labelDetails: { detail :' logicBoolean 资源取得条件', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资源取得条件',
        documentation :'获取资源条件.可用于受损时无法产出.',
        data: 'logicBoolean'
    },
    {
        label: 'generation_credits',
        insertText: 'generation_credits:',
        labelDetails: { detail :' int 资金获取', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资金获取',
        documentation :'生成资源,仅用于默认的资金,也就是铁锈默认的金钱.',
        data: 'int'
    },
    {
        label: 'generation_delay',
        insertText: 'generation_delay:',
        labelDetails: { detail :' int 资金获取时间', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'资金获取时间',
        documentation :'多久帧添加添加一次资源(generation_creditsvi指定数值).默认值为40,一秒为60帧.Luke不建议使用.',
        data: 'int'
    },
    {
        label: 'showInEditor',
        insertText: 'showInEditor:',
        labelDetails: { detail :' bool 显示在沙盒中', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'显示在沙盒中',
        documentation :'设置为false可在沙箱编辑器中隐藏此单位. (默认为true)',
        data: 'bool'
    },
    {
        label: 'displayText',
        insertText: 'displayText:',
        labelDetails: { detail :' string 界面显示名称', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示名称',
        documentation :'默认单位显示给玩家的单位名称.不填则显示core下的单位name.此条目依据语言设定不同会被下一条覆盖.',
        data: 'string'
    },
    {
        label: 'displayText_language',
        insertText: 'displayText_language:',
        labelDetails: { detail :' string 界面显示文本多语言', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示文本多语言',
        documentation :'为单位名称添加多语言支持.',
        data: 'string'
    },
    {
        label: 'displayDescription',
        insertText: 'displayDescription:',
        labelDetails: { detail :' string 界面显示描述', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示描述',
        documentation :'单位显示给玩家的单位描述.',
        data: 'string'
    },
    {
        label: 'displayDescription_language',
        insertText: 'displayDescription_language:',
        labelDetails: { detail :' string 界面显示描述_其它语言', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示描述_其它语言',
        documentation :'为单位描述添加多语言支持.此方法并不方便,不如设置游戏内部语言文件,建议催luke改.地区码见上.',
        data: 'string'
    },
    {
        label: 'displayLocaleKey',
        insertText: 'displayLocaleKey:',
        labelDetails: { detail :' string 界面显示内部调用', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示内部调用',
        documentation :'调用内部语言文件的单位名称和说明的翻译文件.',
        data: 'string'
    },
    {
        label: 'displayRadius',
        insertText: 'displayRadius:',
        labelDetails: { detail :' int 单位选择时显示圆圈', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'单位选择时显示圆圈',
        documentation :'修改选择单位时显示的绿色圆圈,不更改实际碰撞(radius)和可选择范围.',
        data: 'int'
    },
    {
        label: 'uiTargetRadius',
        insertText: 'uiTargetRadius:',
        labelDetails: { detail :' int 为目标时半径', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'为目标时半径',
        documentation :'默认值为displayRadius.当攻击/回收/等等这个单位使用半径',
        data: 'int'
    },
    {
        label: 'shieldRenderRadius',
        insertText: 'shieldRenderRadius:',
        labelDetails: { detail :' int 单位护盾显示半径', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'单位护盾显示半径',
        documentation :'护盾绘制半径,默认值比半径大一点.可以设置在单位上显示更大或更小的护盾圈.',
        data: 'int'
    },
    {
        label: 'shieldDisplayOnlyDeflection',
        insertText: 'shieldDisplayOnlyDeflection:',
        labelDetails: { detail :' bool 护盾只在受攻击时显示', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'护盾只在受攻击时显示',
        documentation :'隐藏护盾,只在受到攻击时显示.',
        data: 'bool'
    },
    {
        label: 'shieldDeflectionDisplayRate',
        insertText: 'shieldDeflectionDisplayRate:',
        labelDetails: { detail :' float 护盾消失速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'护盾消失速度',
        documentation :'默认值为4.数值越大消失越快.',
        data: 'float'
    },
    {
        label: 'showOnMinimap',
        insertText: 'showOnMinimap:',
        labelDetails: { detail :' bool 显示在小地图上', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'显示在小地图上',
        documentation :'默认为true.如果为false,则在小地图上不显示此单位.',
        data: 'bool'
    },
    {
        label: 'showOnMinimapToEnemies',
        insertText: 'showOnMinimapToEnemies:',
        labelDetails: { detail :' bool 显示于敌人小地图', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'显示于敌人小地图',
        documentation :'是否在敌人小地图上显示.目前不支持逻辑.',
        data: 'bool'
    },
    {
        label: 'showActionsWithMixedSelectionIfOtherUnitsHaveTag',
        insertText: 'showActionsWithMixedSelectionIfOtherUnitsHaveTag:',
        labelDetails: { detail :' string 混合所选单位所显示的行为(标签)', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'混合所选单位所显示的行为(标签)',
        documentation :'如果选择的单位都包含此处使用的标签,则合并“行为(action)”.比如你的步单位通过部署转化成另一个单位,在混合时可以当作同一个单位处理,不再是默认的谁都无法执行操作.例子如红警的盟军大单位在混合选中后依旧可执行部署或解除.',
        data: 'string'
    },
    {
        label: 'isBuilding',
        insertText: 'isBuilding:',
        labelDetails: { detail :' bool 是建筑', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'是建筑',
        documentation :'定义单位是否为建筑物.',
        data: 'bool'
    },
    {
        label: 'footprint',
        insertText: 'footprint:',
        labelDetails: { detail :' other 建筑碰撞范围', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑碰撞范围',
        documentation :'填四个数值(左,上,右,下),单位是格子,建筑默认占一格,向左和向上需要填负数,填整数在选择时有偏移.四个数值可以完全颠倒,这样不会阻碍单位移动.决定建筑单位碰撞体积,此区域内单位不能通过,如果在单位运动途中单位则会绕过.单位实际可选择面积使用的是radius.',
        data: 'other'
    },
    {
        label: 'constructionFootprint',
        insertText: 'constructionFootprint:',
        labelDetails: { detail :' other 建筑覆盖范围', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑覆盖范围',
        documentation :'基础规则同上,这个区域内不能建造建筑,但是单位可以通过.一般需要设定比上一个面积大.好处是即使建造的密密麻麻,单位也有路可走',
        data: 'other'
    },
    {
        label: 'displayFootprint',
        insertText: 'displayFootprint:',
        labelDetails: { detail :' other 建筑选择UI', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑选择UI',
        documentation :'基础规则同上,用于选择单位时UI显示.不设定则默认为建筑覆盖区域.',
        data: 'other'
    },
    {
        label: 'buildingSelectionOffset',
        insertText: 'buildingSelectionOffset:',
        labelDetails: { detail :' int 建筑UI调整', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑UI调整',
        documentation :'默认值为0.以像素为单位对选框额外设定.',
        data: 'int'
    },
    {
        label: 'buildingToFootprintOffsetX',
        insertText: 'buildingToFootprintOffsetX:',
        labelDetails: { detail :' float 建筑X轴偏移', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑X轴偏移',
        documentation :'设置X轴位置偏移,默认10.若设置非对称的建筑,单位会根据覆盖范围会挤在角上,这时如果要准确显示就需要额外偏移.与直接使用图像偏移的区别:由于铁锈判断选中单位是根据单位体积(radius),因此图像偏移实际上单位的位置不变,会容易造成点击时的误差.而当前代码实际上是移动单位,则不会造成这个问题.',
        data: 'float'
    },
    {
        label: 'buildingToFootprintOffsetY',
        insertText: 'buildingToFootprintOffsetY:',
        labelDetails: { detail :' float 建筑Y轴偏移', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑Y轴偏移',
        documentation :'设置Y轴位置偏移,默认10.其它参上条',
        data: 'float'
    },
    {
        label: 'placeOnlyOnResPool',
        insertText: 'placeOnlyOnResPool:',
        labelDetails: { detail :' bool 建筑只能建造在资源池上', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建筑只能建造在资源池上',
        documentation :'通常用于提取器,会强制在资源池中进行建筑物构造.可以用于在自定义战役中限制某单位只能在某地建造.',
        data: 'bool'
    },
    {
        label: 'selfBuildRate',
        insertText: 'selfBuildRate:',
        labelDetails: { detail :' float 自动建造速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'自动建造速度',
        documentation :'此单位自动构造所需要的时间,目前用于虫族.计算方式为:此处所填时间=1÷(60x你需要的秒).',
        data: 'float'
    },
    {
        label: 'ignoreInUnitCapCalculation',
        insertText: 'ignoreInUnitCapCalculation:',
        labelDetails: { detail :' bool 不计入单位数量统计', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'不计入单位数量统计',
        documentation :'铁锈中有单位数量上限设定,填true时不计入统计,多用于辅助单位,建筑物的默认值为true.',
        data: 'bool'
    },
    {
        label: 'copyFrom',
        insertText: 'copyFrom:',
        labelDetails: { detail :' file-text 复制数据自', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'复制数据自',
        documentation :'加载其它文件的单位数据作为该单位的默认值,支持多个文件.无后缀名限制,可不写dont_load,用于模块化.',
        data: 'file-text'
    },
    {
        label: 'dont_load',
        insertText: 'dont_load:',
        labelDetails: { detail :' bool 禁止加载', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止加载',
        documentation :'不加载此单位,缺失数据时不会出错.与copyFrom一起使用时很有用.',
        data: 'bool'
    },
    {
        label: 'overrideAndReplace',
        insertText: 'overrideAndReplace:',
        labelDetails: { detail :' unit 覆盖单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'覆盖单位',
        documentation :'用此单位覆盖另一个单位,地图上所有单位也将被替换,可以用来替换dex内无法修改的单位.',
        data: 'unit'
    },
    {
        label: 'overrideResourceLoadPath',
        insertText: 'overrideResourceLoadPath:',
        labelDetails: { detail :' bool 覆盖资源加载路径', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'覆盖资源加载路径',
        documentation :'',
        data: 'bool'
    },
    {
        label: 'logIfCreditResourceUsed',
        insertText: 'logIfCreditResourceUsed:',
        labelDetails: { detail :' bool 记录是否使用资源', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'记录是否使用资源',
        documentation :'',
        data: 'bool'
    },
    {
        label: 'onNewMapSpawn',
        insertText: 'onNewMapSpawn:',
        labelDetails: { detail :' string 地图位置产生指定单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'地图位置产生指定单位',
        documentation :'在地图上添加此单位.可以用于覆盖铁锈默认的资源逻辑.参数:emptyResourcePools_asNeutral 产生位置于空资源池为中立所属, emptyOrOccupiedResourcePools_asNeutral空的或者已经占用的资源池为中立所属, mapCenter_asNeutral地图中心为中立所属, mapCenter_eachActiveTeam地图中心给与每个队伍, spawnPoint_eachActiveTeam玩家初始位置给与每个队伍',
        data: 'string'
    },
    {
        label: 'globalScale',
        insertText: 'globalScale:',
        labelDetails: { detail :' float 全局缩放', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'全局缩放',
        documentation :'废弃代码,不要用.将一个单位按比例放大,但不放大攻击力.默认值为1.不建议更改.',
        data: 'float'
    },
    {
        label: 'isLocked',
        insertText: 'isLocked:',
        labelDetails: { detail :' bool 锁定', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'锁定',
        documentation :'禁止建造该单位.可以与overrideAndReplace一起使用,以限制玩家可以建造的单位.',
        data: 'bool'
    },
    {
        label: 'isLockedIfGameModeNoNuke',
        insertText: 'isLockedIfGameModeNoNuke:',
        labelDetails: { detail :' bool 禁核模式锁定', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁核模式锁定',
        documentation :'如果在游戏开始前选择了禁用核武器,禁止建造此单位.',
        data: 'bool'
    },
    {
        label: 'experimental',
        insertText: 'experimental:',
        labelDetails: { detail :' bool 实验单位标志', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'实验单位标志',
        documentation :'标记单位为实验单位.影响缩小图标和游戏结束统计.',
        data: 'bool'
    },
    {
        label: 'stayNeutral',
        insertText: 'stayNeutral:',
        labelDetails: { detail :' bool 保持中立', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'保持中立',
        documentation :'设置为false时,单位处于中立队伍情况下,禁止靠近时更改为玩家所属.仍然有其它方式获得.',
        data: 'bool'
    },
    {
        label: 'createNeutral',
        insertText: 'createNeutral:',
        labelDetails: { detail :' bool 创建时中立', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'创建时中立',
        documentation :'设置为true时,产生该单位总是自动转变为中立队伍.创建时中立,但不妨碍玩家捕获.',
        data: 'bool'
    },
    {
        label: 'createOnAggressiveTeam',
        insertText: 'createOnAggressiveTeam:',
        labelDetails: { detail :' bool 创建为敌对中立', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'创建为敌对中立',
        documentation :'设置为true时,此中立单位对所有玩家有敌意.',
        data: 'bool'
    },
    {
        label: 'tags',
        insertText: 'tags:',
        labelDetails: { detail :' string 标签', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'标签',
        documentation :'标签,用于对单位进行分类,用于实现各种各样的特殊作.比如单位数量限制,伤害修正,增益损益,触发条件等等',
        data: 'string'
    },
    {
        label: 'defineUnitMemory',
        insertText: 'defineUnitMemory:',
        labelDetails: { detail :' other 定义内存变量', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'定义内存变量',
        documentation :'为单位创建一个自定义变量(作用域为单个ini). 支持的类型:boolean(bool),float,number,unit,string,text,boolean[],float[],number[],unit[]. (格式:defineUnitMemory:boolean nukeActive, float[] newHp)',
        data: 'other'
    },
    {
        label: 'updateUnitMemory',
        insertText: 'updateUnitMemory:',
        labelDetails: { detail :' memory 更新单位内存', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'更新单位内存',
        documentation :'类似[action]setUnitMemory但是性能更好',
        data: 'memory'
    },
    {
        label: 'updateUnitMemoryRate',
        insertText: 'updateUnitMemoryRate:',
        labelDetails: { detail :' time 更新单位内存频率', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'更新单位内存频率',
        documentation :'默认1s,填写0则为每帧',
        data: 'time'
    },
    {
        label: 'fogOfWarSightRange',
        insertText: 'fogOfWarSightRange:',
        labelDetails: { detail :' int 视野', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'视野',
        documentation :'设置单位视野,在战争迷雾中可以看到的瓷砖数量.默认为15.',
        data: 'int'
    },
    {
        label: 'fogOfWarSightRangeWhileNotBuilt',
        insertText: 'fogOfWarSightRangeWhileNotBuilt:',
        labelDetails: { detail :' int 未完成时视野', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'未完成时视野',
        documentation :'填数值,当建筑或单位没有建造完成时,它的视野范围',
        data: 'int'
    },
    {
        label: 'softCollisionOnAll',
        insertText: 'softCollisionOnAll:',
        labelDetails: { detail :' int 碰撞体积软化', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'碰撞体积软化',
        documentation :'与其他单位碰撞时产生柔和的碰撞效果,填负数会导致单位相互吸引.',
        data: 'int'
    },
    {
        label: 'disableAllUnitCollisions',
        insertText: 'disableAllUnitCollisions:',
        labelDetails: { detail :' bool 禁用碰撞', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁用碰撞',
        documentation :'如果为true,则该单位无视与其它单位碰撞.无碰撞体积单位可以用于固定位置制造效果,或是用于一些不影响单位通行的场景.',
        data: 'bool'
    },
    {
        label: 'availableInDemo',
        insertText: 'availableInDemo:',
        labelDetails: { detail :' bool 在演示版中可用', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'在演示版中可用',
        documentation :'是否能在演示中使用',
        data: 'bool'
    },
    {
        label: 'isUnrepairableUnit',
        insertText: 'isUnrepairableUnit:',
        labelDetails: { detail :' bool 禁止被修复', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止被修复',
        documentation :'如果为true,则任何单位都无法修复此单位.但负伤害仍然可以维修.',
        data: 'bool'
    },
    {
        label: 'isUnselectable',
        insertText: 'isUnselectable:',
        labelDetails: { detail :' bool 禁止选择', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止选择',
        documentation :'如果为true,则无法选择单位. (包括AI)可用于效果单位,禁止被玩家选择.',
        data: 'bool'
    },
    {
        label: 'isUnselectableAsTarget',
        insertText: 'isUnselectableAsTarget:',
        labelDetails: { detail :' bool 禁止选择和作为目标', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止选择和作为目标',
        documentation :'默认效果为isUnselectable.可以用来创造不能被选择但是可以被攻击,回收的单位',
        data: 'bool'
    },
    {
        label: 'isPickableStartingUnit',
        insertText: 'isPickableStartingUnit:',
        labelDetails: { detail :' bool 为可选初始单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'为可选初始单位',
        documentation :'如果为true,则将单位添加到游戏高级设置菜单中,用于可选初始单位菜单.',
        data: 'bool'
    },
    {
        label: 'startFallingWhenStartingUnit',
        insertText: 'startFallingWhenStartingUnit:',
        labelDetails: { detail :' bool 为可选单位开局后从天而降', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'为可选单位开局后从天而降',
        documentation :'如果为true,则游戏开始时,此单位会从从天而降.',
        data: 'bool'
    },
    {
        label: 'soundOnAttackOrder',
        insertText: 'soundOnAttackOrder:',
        labelDetails: { detail :' file-sound 攻击指令音效', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'攻击指令音效',
        documentation :'填音效名称列表.用,隔开.每次下达攻击指令时只播放其中一个.仅支持.ogg和.wav格式,注意如果你mod用于pc端,则不要直接修改后缀名,要转换格式.',
        data: 'file-sound'
    },
    {
        label: 'soundOnMoveOrder',
        insertText: 'soundOnMoveOrder:',
        labelDetails: { detail :' file-sound 移动指令音效', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'移动指令音效',
        documentation :'填声音名称列表.用,隔开.每次下达移动指令时只播放其中一个.仅支持.ogg和.wav格式,注意不要直接修改后缀名,要转换格式.',
        data: 'file-sound'
    },
    {
        label: 'soundOnNewSelection',
        insertText: 'soundOnNewSelection:',
        labelDetails: { detail :' file-sound 选择指令音效', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'选择指令音效',
        documentation :'填声音名称列表.用,隔开.每次下达选择指令时只播放其中一个.仅支持.ogg和.wav格式,注意不要直接修改后缀名,要转换格式.',
        data: 'file-sound'
    },
    {
        label: 'canNotBeDirectlyAttacked',
        insertText: 'canNotBeDirectlyAttacked:',
        labelDetails: { detail :' bool 禁止直接攻击', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止直接攻击',
        documentation :'注:如果初始单位有这个属性且可能会导致游戏开局就秒输时,Mod作者会看到警告消息',
        data: 'bool'
    },
    {
        label: 'canNotBeDamaged',
        insertText: 'canNotBeDamaged:',
        labelDetails: { detail :' bool 禁止受到伤害', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止受到伤害',
        documentation :'无敌,可被敌方攻击,但不造成实质伤害.如果canNotBeDirectlyAttacked为true,此语句为false,则不可被直接攻击但受到范围伤害.',
        data: 'bool'
    },
    {
        label: 'canNotBeGivenOrdersByPlayer',
        insertText: 'canNotBeGivenOrdersByPlayer:',
        labelDetails: { detail :' bool 禁止接受指令', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止接受指令',
        documentation :'如果为true,则单位不会接受玩家或AI的命令.可以选中查看信息.',
        data: 'bool'
    },
    {
        label: 'canOnlyBeAttackedByUnitsWithTags',
        insertText: 'canOnlyBeAttackedByUnitsWithTags:',
        labelDetails: { detail :' string 仅许带此标签单位攻击', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'仅许带此标签单位攻击',
        documentation :'填标签,只有带有这些标签的单位才能直接定位到该单位.',
        data: 'string'
    },
    {
        label: 'allowCaptureWhenNeutralByAI',
        insertText: 'allowCaptureWhenNeutralByAI:',
        labelDetails: { detail :' bool 允许中立时被AI俘虏', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'允许中立时被AI俘虏',
        documentation :'(推测,以前人机不能捕获中立单位)',
        data: 'bool'
    },
    {
        label: 'transportSlotsNeeded',
        insertText: 'transportSlotsNeeded:',
        labelDetails: { detail :' int 运输占用位置', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'运输占用位置',
        documentation :'默认值为1.此单位在运输载具中占据的格子数.',
        data: 'int'
    },
    {
        label: 'maxTransportingUnits',
        insertText: 'maxTransportingUnits:',
        labelDetails: { detail :' int 运输槽位数量', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'运输槽位数量',
        documentation :'该单位载员格子数量.',
        data: 'int'
    },
    {
        label: 'transportUnitsRequireTag',
        insertText: 'transportUnitsRequireTag:',
        labelDetails: { detail :' string 被运输单位需要标签', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'被运输单位需要标签',
        documentation :'仅允许运输具有这些标签之一的单位.可以用于运输类型分类,如人运物资,步单位车运人,气垫船运车辆.或是子机限制,如航母飞机只能降落到航母.',
        data: 'string'
    },
    {
        label: 'transportUnitsRequireMovementType',
        insertText: 'transportUnitsRequireMovementType:',
        labelDetails: { detail :' other 被运输单位类型限制', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'被运输单位类型限制',
        documentation :'仅允许运输具有这些移动类型之一的单位.默认陆地.比如可以设定某单位可以运输空军以实现停机坪,只运输海军等.',
        data: 'other'
    },
    {
        label: 'transportUnitsBlockAirAndWaterUnits',
        insertText: 'transportUnitsBlockAirAndWaterUnits:',
        labelDetails: { detail :' bool 禁止运输空军和海军', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁止运输空军和海军',
        documentation :'禁止运输空军和海军,默认为true.如果为true,则此单位只能运输LAND单位.',
        data: 'bool'
    },
    {
        label: 'transportUnitsKeepBuiltUnits',
        insertText: 'transportUnitsKeepBuiltUnits:',
        labelDetails: { detail :' logicBoolean 单位建造完成时保留在载具内', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'单位建造完成时保留在载具内',
        documentation :'使建造的单位留在运输者中,而不是造完直接从载具中出来.',
        data: 'logicBoolean'
    },
    {
        label: 'transportUnitsCanUnloadUnits',
        insertText: 'transportUnitsCanUnloadUnits:',
        labelDetails: { detail :' logicBoolean 载具可以卸载单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具可以卸载单位',
        documentation :'载具卸载单位需要满足条件,默认为“ if not self.isOverLiquid() and not self.isMoving()”(不在液体上且没有移动)',
        data: 'logicBoolean'
    },
    {
        label: 'transportUnitsAddUnloadOption',
        insertText: 'transportUnitsAddUnloadOption:',
        labelDetails: { detail :' logicBoolean 载具显示卸载按钮', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具显示卸载按钮',
        documentation :'是否显示卸载按钮',
        data: 'logicBoolean'
    },
    {
        label: 'transportUnitsUnloadDelayBetweenEachUnit',
        insertText: 'transportUnitsUnloadDelayBetweenEachUnit:',
        labelDetails: { detail :' float 载具卸载时间间隔', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具卸载时间间隔',
        documentation :'卸载单位之间的延迟时间.',
        data: 'float'
    },
    {
        label: 'transportUnitsKillOnDeath',
        insertText: 'transportUnitsKillOnDeath:',
        labelDetails: { detail :' logicBoolean 载具内单位和载具一同死亡', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具内单位和载具一同死亡',
        documentation :'默认为true.如果载具死亡,则其中单位也死亡.',
        data: 'logicBoolean'
    },
    {
        label: 'transportUnitsHealBy',
        insertText: 'transportUnitsHealBy:',
        labelDetails: { detail :' float 载具治疗内部单位速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具治疗内部单位速度',
        documentation :'填数值,以帧为单位.自动治疗载具内部单位.',
        data: 'float'
    },
    {
        label: 'transportUnitsBlockOtherTransports',
        insertText: 'transportUnitsBlockOtherTransports:',
        labelDetails: { detail :' bool 载具禁止装载其它载具', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载具禁止装载其它载具',
        documentation :'默认值为true,如果为false,则此载具可以装载其它载具.比如步单位装物资,载具装步单位,运输船装载具.',
        data: 'bool'
    },
    {
        label: 'whileNeutralTransportAnyTeam',
        insertText: 'whileNeutralTransportAnyTeam:',
        labelDetails: { detail :' bool 中立时可装载任意所属单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'中立时可装载任意所属单位',
        documentation :'如果是中立的,则这个部队可以装载任何队伍的部队.可用于占领中立单位,比如坦克需要驾驶员,步单位建筑平民建筑.',
        data: 'bool'
    },
    {
        label: 'whileNeutralConvertToTransportedTeam',
        insertText: 'whileNeutralConvertToTransportedTeam:',
        labelDetails: { detail :' bool 中立时转换为载员队伍', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'中立时转换为载员队伍',
        documentation :'中立时将其转换为载员队伍.与whileNeutralTransportAnyTeam一起使用,用于占领中立单位.',
        data: 'bool'
    },
    {
        label: 'convertToNeutralIfNotTransporting',
        insertText: 'convertToNeutralIfNotTransporting:',
        labelDetails: { detail :' bool 卸载所有单位时恢复为中立', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'卸载所有单位时恢复为中立',
        documentation :'卸载单位时将其恢复为中立队伍.与whileNeutralTransportAnyTeam一起使用.',
        data: 'bool'
    },
    {
        label: 'transportUnitsOnTeamChangeKeepCurrentTeam',
        insertText: 'transportUnitsOnTeamChangeKeepCurrentTeam:',
        labelDetails: { detail :' bool 转换所属时保留内部单位所属', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'转换所属时保留内部单位所属',
        documentation :'如果为true,则单位转换阵营时仍然将运输的单位保留在其原始队伍中.',
        data: 'bool'
    },
    {
        label: 'transportUnitsEachUnitAlwaysUsesSingleSlot',
        insertText: 'transportUnitsEachUnitAlwaysUsesSingleSlot:',
        labelDetails: { detail :' bool 载员只占用一个槽位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载员只占用一个槽位',
        documentation :'所有载员无论体积只占用一个运输槽.但体积大于载员数时仍然不能进入.',
        data: 'bool'
    },
    {
        label: 'transportUnitsKeepWaypoints',
        insertText: 'transportUnitsKeepWaypoints:',
        labelDetails: { detail :' bool 载员保持路径点', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'载员保持路径点',
        documentation :'目前无效',
        data: 'bool'
    },
    {
        label: 'resourceRate',
        insertText: 'resourceRate:',
        labelDetails: { detail :' float 回收速率', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'回收速率',
        documentation :'回收速度.每帧回收血量.与canReclaimResources一起使用.允许其他队伍回收该单位.通常与中立队伍配合使用.使用价格来设置获取哪些资源.',
        data: 'float'
    },
    {
        label: 'similarResourcesHaveTag',
        insertText: 'similarResourcesHaveTag:',
        labelDetails: { detail :' string 像用于此标签的单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'像用于此标签的单位',
        documentation :'有这些标签时,资源采集单位将视为同一种资源',
        data: 'string'
    },
    {
        label: 'resourceMaxConcurrentReclaimingThis',
        insertText: 'resourceMaxConcurrentReclaimingThis:',
        labelDetails: { detail :' int 可同时被此数目单位回收', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'可同时被此数目单位回收',
        documentation :'默认为无限制.限制有多少单位可以同时回收此资源.',
        data: 'int'
    },
    {
        label: 'reclaimPrice',
        insertText: 'reclaimPrice:',
        labelDetails: { detail :' int 回收价格', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'回收价格',
        documentation :'自定义资源,类似价格.对于自定义资源很有用.',
        data: 'int'
    },
    {
        label: 'canReclaimResources',
        insertText: 'canReclaimResources:',
        labelDetails: { detail :' bool 可以回收资源', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'可以回收资源',
        documentation :'如果为true,则此单位可以收集资源,这对于resourceRate很有用.',
        data: 'bool'
    },
    {
        label: 'canReclaimResourcesNextSearchRange',
        insertText: 'canReclaimResourcesNextSearchRange:',
        labelDetails: { detail :' int 搜寻资源范围', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'搜寻资源范围',
        documentation :'当一处资源采集完后,搜寻更多资源的范围.',
        data: 'int'
    },
    {
        label: 'canReclaimResourcesOnlyWithTags',
        insertText: 'canReclaimResourcesOnlyWithTags:',
        labelDetails: { detail :' string 仅允许回收特定标签资源', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'仅允许回收特定标签资源',
        documentation :'仅允许回收有此标签的单位.',
        data: 'string'
    },
    {
        label: 'resourceReclaimMultiplier',
        insertText: 'resourceReclaimMultiplier:',
        labelDetails: { detail :' float 建造单位回收资源的乘数', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建造单位回收资源的乘数',
        documentation :'默认为1',
        data: 'float'
    },
    {
        label: 'nanoUnbuildSpeed',
        insertText: 'nanoUnbuildSpeed:',
        labelDetails: { detail :' float 建造单位回收未完成单位速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建造单位回收未完成单位速度',
        documentation :'默认值为1',
        data: 'float'
    },
    {
        label: 'canRepairBuildings',
        insertText: 'canRepairBuildings:',
        labelDetails: { detail :' bool 可以修建筑', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'可以修建筑',
        documentation :'如果为true,该单位可以修复建筑. (isBuilder:true是必需的)',
        data: 'bool'
    },
    {
        label: 'canRepairUnits',
        insertText: 'canRepairUnits:',
        labelDetails: { detail :' bool 可以修单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'可以修单位',
        documentation :'如果为true,此单位可以修复单位. (isBuilder:true是必需的)',
        data: 'bool'
    },
    {
        label: 'autoRepair',
        insertText: 'autoRepair:',
        labelDetails: { detail :' bool 可以自动修', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'可以自动修',
        documentation :'自动维修附近单位,范围为nanoRange. (isBuilder:true是必需的)',
        data: 'bool'
    },
    {
        label: 'canReclaimUnitsOnlyWithTags',
        insertText: 'canReclaimUnitsOnlyWithTags:',
        labelDetails: { detail :' string 仅允许回收特定标签单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'仅允许回收特定标签单位',
        documentation :'仅允许此单位回收具有特定标签单位.',
        data: 'string'
    },
    {
        label: 'canRepairUnitsOnlyWithTags',
        insertText: 'canRepairUnitsOnlyWithTags:',
        labelDetails: { detail :' string 仅允许维修特定标签单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'仅允许维修特定标签单位',
        documentation :'仅允许此单位维修具有特定标签单位.',
        data: 'string'
    },
    {
        label: 'nanoRange',
        insertText: 'nanoRange:',
        labelDetails: { detail :' int 维修或建造范围', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'维修或建造范围',
        documentation :'默认值为85.定义单位的构建/修复/回收范围.',
        data: 'int'
    },
    {
        label: 'nanoRepairSpeed',
        insertText: 'nanoRepairSpeed:',
        labelDetails: { detail :' float 维修速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'维修速度',
        documentation :'默认值为0.2.定义单位修复速度.',
        data: 'float'
    },
    {
        label: 'nanoBuildSpeed',
        insertText: 'nanoBuildSpeed:',
        labelDetails: { detail :' float 建造速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'建造速度',
        documentation :'默认值为1.定义单位建造速度. (可能与目标的buildSpeed相乘)',
        data: 'float'
    },
    {
        label: 'nanoReclaimSpeed',
        insertText: 'nanoReclaimSpeed:',
        labelDetails: { detail :' float 回收速度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'回收速度',
        documentation :'默认为nanoRepairSpeed*5.1',
        data: 'float'
    },
    {
        label: 'nanoRangeForRepairIsMelee',
        insertText: 'nanoRangeForRepairIsMelee:',
        labelDetails: { detail :' bool 维修范围按近战逻辑', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'维修范围按近战逻辑',
        documentation :'定义此单位维修时是否为近战算法,默认计算是从自身中心到目标中心,如果单位过大运动会受到阻碍,则虽然看起来很近然而实际中心太远无法修复. 近战类算法则是算上其半径,由中心计算改为从边缘计算.',
        data: 'bool'
    },
    {
        label: 'nanoRangeForReclaimIsMelee',
        insertText: 'nanoRangeForReclaimIsMelee:',
        labelDetails: { detail :' bool 回收范围按近战逻辑', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'回收范围按近战逻辑',
        documentation :'与上条类似,本条定义其回收范围是否为近战算法.',
        data: 'bool'
    },
    {
        label: 'nanoRangeForRepair',
        insertText: 'nanoRangeForRepair:',
        labelDetails: { detail :' int 维修距离', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'维修距离',
        documentation :'此单位维修距离.',
        data: 'int'
    },
    {
        label: 'nanoRangeForReclaim',
        insertText: 'nanoRangeForReclaim:',
        labelDetails: { detail :' int 回收距离', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'回收距离',
        documentation :'此单位回收距离.',
        data: 'int'
    },
    {
        label: 'nanoFactorySpeed',
        insertText: 'nanoFactorySpeed:',
        labelDetails: { detail :' float 工厂速度乘数', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'工厂速度乘数',
        documentation :'默认值为1.如果此单位是工厂,则乘以创建单位的buildSpeed值.用于加速或者减速建造.',
        data: 'float'
    },
    {
        label: 'extraBuildRangeWhenBuildingThis',
        insertText: 'extraBuildRangeWhenBuildingThis:',
        labelDetails: { detail :' int 额外建造距离', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'额外建造距离',
        documentation :'此单位额外的建造距离,可以使建造者在更远的地方建造它,多用于水上建筑.',
        data: 'int'
    },
    {
        label: 'builtFrom_x_name',
        insertText: 'builtFrom_x_name:',
        labelDetails: { detail :' string 从此单位建造', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'从此单位建造',
        documentation :'除非你向原版工厂添加单位,否则不建议使用.将该单位添加到目标建筑物中.',
        data: 'string'
    },
    {
        label: 'builtFrom_x_pos',
        insertText: 'builtFrom_x_pos:',
        labelDetails: { detail :' float 从此单位建造排序', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'从此单位建造排序',
        documentation :'在列表中的排序,越小越靠前.',
        data: 'float'
    },
    {
        label: 'builtFrom_x_forceNano',
        insertText: 'builtFrom_x_forceNano:',
        labelDetails: { detail :' bool 从此单位像建筑一样建造', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'从此单位像建筑一样建造',
        documentation :'如果为true,则像构建建筑一样造此单位. (即使是一个单位)',
        data: 'bool'
    },
    {
        label: 'builtFrom_x_isLocked',
        insertText: 'builtFrom_x_isLocked:',
        labelDetails: { detail :' logicBoolean 从此单位建造条件', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'从此单位建造条件',
        documentation :'如果为true,则无法在目标中构建此单位. (逻辑布尔值,设置建造条件)',
        data: 'logicBoolean'
    },
    {
        label: 'builtFrom_x_isLockedMessage',
        insertText: 'builtFrom_x_isLockedMessage:',
        labelDetails: { detail :' string 从此单位建造锁定信息', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'从此单位建造锁定信息',
        documentation :'无法建造时显示的信息.',
        data: 'string'
    },
    {
        label: 'exit_x',
        insertText: 'exit_x:',
        labelDetails: { detail :' float 离开x轴', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开x轴',
        documentation :'从载具卸载或者工厂生产完成时,单位出现的位置,默认为0',
        data: 'float'
    },
    {
        label: 'exit_y',
        insertText: 'exit_y:',
        labelDetails: { detail :' float 离开y轴', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开y轴',
        documentation :'从载具卸载或者工厂生产完成时,单位出现的位置,默认为5,正数向下.',
        data: 'float'
    },
    {
        label: 'exit_dirOffset',
        insertText: 'exit_dirOffset:',
        labelDetails: { detail :' float 离开旋转角度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开旋转角度',
        documentation :'单位默认为180(朝下),建筑物默认为0(朝右).定义已创建或卸载单位的退出方向.',
        data: 'float'
    },
    {
        label: 'exit_heightOffset',
        insertText: 'exit_heightOffset:',
        labelDetails: { detail :' float 离开高度', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开高度',
        documentation :'默认值为0.定义创建或卸载的单位出现的高度.',
        data: 'float'
    },
    {
        label: 'exit_moveAwayAmount',
        insertText: 'exit_moveAwayAmount:',
        labelDetails: { detail :' float 离开距离', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开距离',
        documentation :'默认值为70.定义创建或卸载的单位与该单位的距离.',
        data: 'float'
    },
    {
        label: 'exitHeightIgnoreParent',
        insertText: 'exitHeightIgnoreParent:',
        labelDetails: { detail :' bool 离开高度忽略父单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'离开高度忽略父单位',
        documentation :'离开时的高度不考虑父高度;用于与父单位一起建造时分离附件',
        data: 'bool'
    },
    {
        label: 'dieOnConstruct',
        insertText: 'dieOnConstruct:',
        labelDetails: { detail :' bool 构建时死亡', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'构建时死亡',
        documentation :'如果为true,则创建建筑时删除自身.(目标建筑物/单位需要selfBuildRate以自动建造完成)',
        data: 'bool'
    },
    {
        label: 'dieOnZeroEnergy',
        insertText: 'dieOnZeroEnergy:',
        labelDetails: { detail :' bool 无能量时死亡', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'无能量时死亡',
        documentation :'如果能量值为零,该单位死亡.',
        data: 'bool'
    },
    {
        label: 'numBitsOnDeath',
        insertText: 'numBitsOnDeath:',
        labelDetails: { detail :' int 死亡产生碎片', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡产生碎片',
        documentation :'定义该单位死亡时散落的碎片的数量.',
        data: 'int'
    },
    {
        label: 'nukeOnDeath',
        insertText: 'nukeOnDeath:',
        labelDetails: { detail :' bool 死亡核爆', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡核爆',
        documentation :'不推荐使用.建议使用死亡武器代替,其拥有更丰富的设定选项.如果为true,单位死亡时会生成一个内置的核抛射体爆炸效果.',
        data: 'bool'
    },
    {
        label: 'nukeOnDeathRange',
        insertText: 'nukeOnDeathRange:',
        labelDetails: { detail :' float 死亡核爆范围', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡核爆范围',
        documentation :'不推荐使用.定义使用nukeOnDeath时的核抛射体效果范围.',
        data: 'float'
    },
    {
        label: 'nukeOnDeathDamage',
        insertText: 'nukeOnDeathDamage:',
        labelDetails: { detail :' float 死亡核爆伤害', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡核爆伤害',
        documentation :'不推荐使用.定义使用nukeOnDeath时的核武器效果区域伤害.',
        data: 'float'
    },
    {
        label: 'nukeOnDeathDisableWhenNoNuke',
        insertText: 'nukeOnDeathDisableWhenNoNuke:',
        labelDetails: { detail :' bool 死亡核爆条件', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡核爆条件',
        documentation :'不推荐使用.默认为false.如果为true,则禁用核武器时,该单位死亡时不会产生核爆炸.',
        data: 'bool'
    },
    {
        label: 'fireTurretXAtSelfOnDeath',
        insertText: 'fireTurretXAtSelfOnDeath:',
        labelDetails: { detail :' turretRef 死亡武器', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡武器',
        documentation :'死亡武器.单位死后,使用指定炮塔攻击自身所在位置.',
        data: 'turretRef'
    },
    {
        label: 'explodeOnDeath',
        insertText: 'explodeOnDeath:',
        labelDetails: { detail :' bool 死亡爆炸', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡爆炸',
        documentation :'默认为true.如果为false,则禁用单位死亡时的内置爆炸效果.',
        data: 'bool'
    },
    {
        label: 'explodeOnDeathGroundCollision',
        insertText: 'explodeOnDeathGroundCollision:',
        labelDetails: { detail :' boolean 死亡撞击地面爆炸', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡撞击地面爆炸',
        documentation :'默认为true.如果为false,则禁用接触地面时内置爆炸效果.',
        data: 'boolean'
    },
    {
        label: 'effectOnDeath',
        insertText: 'effectOnDeath:',
        labelDetails: { detail :' effectRef 死亡效果', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡效果',
        documentation :'单位死亡时产生内置或自定义效果.',
        data: 'effectRef'
    },
    {
        label: 'effectOnDeathGroundCollision',
        insertText: 'effectOnDeathGroundCollision:',
        labelDetails: { detail :' effectRef 死亡撞击地面效果', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡撞击地面效果',
        documentation :'类似于effectOnDeath,但当单位接触地面时.对飞行单位有用.',
        data: 'effectRef'
    },
    {
        label: 'explodeOnDeathGroundCollosion',
        insertText: 'explodeOnDeathGroundCollosion:',
        labelDetails: { detail :' effectRef 死亡未撞击地面效果', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡未撞击地面效果',
        documentation :'类似于effectOnDeath,但当未单位接触地面时.对飞行单位有用.',
        data: 'effectRef'
    },
    {
        label: 'unitsSpawnedOnDeath',
        insertText: 'unitsSpawnedOnDeath:',
        labelDetails: { detail :' string 死亡产生单位', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡产生单位',
        documentation :'死亡时产生这些单位.逗号分隔的单位标识符.',
        data: 'string'
    },
    {
        label: 'unitsSpawnedOnDeath_setToTeamOfLastAttacker',
        insertText: 'unitsSpawnedOnDeath_setToTeamOfLastAttacker:',
        labelDetails: { detail :' bool 死亡产生单位所属', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡产生单位所属',
        documentation :'如果为true,死亡时产生的单位将更改归属为最后一个攻击者的队伍.',
        data: 'bool'
    },
    {
        label: 'hideScorchMark',
        insertText: 'hideScorchMark:',
        labelDetails: { detail :' bool 死亡痕迹', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡痕迹',
        documentation :'如果为true,则禁止单位死亡时留下焦痕.',
        data: 'bool'
    },
    {
        label: 'soundOnDeath',
        insertText: 'soundOnDeath:',
        labelDetails: { detail :' file-sound 死亡音效', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡音效',
        documentation :'为该单位设置自定义死亡声音.',
        data: 'file-sound'
    },
    {
        label: 'explodeTypeOnDeath',
        insertText: 'explodeTypeOnDeath:',
        labelDetails: { detail :' effectRef 死亡时爆炸类型', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'死亡时爆炸类型',
        documentation :'可用的值:verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding',
        data: 'effectRef'
    },
    {
        label: 'effectOnDeathIfUnbuilt',
        insertText: 'effectOnDeathIfUnbuilt:',
        labelDetails: { detail :' effectRef 没建造完成时死亡效果', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'没建造完成时死亡效果',
        documentation :'如果这个单位没建造完成就被毁了,则播放此效果',
        data: 'effectRef'
    },
    {
        label: 'disableDeathOnZeroHp',
        insertText: 'disableDeathOnZeroHp:',
        labelDetails: { detail :' bool 禁用零血死亡', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'禁用零血死亡',
        documentation :'如果为true,允许单位在0血量的情况下仍然存活,单位不会自然死亡.对自定义“死亡”动作很有用',
        data: 'bool'
    },
    {
        label: 'autoTriggerCooldownTime',
        insertText: 'autoTriggerCooldownTime:',
        labelDetails: { detail :' time 自动触发间隔', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'自动触发间隔',
        documentation :'设置自动触发动作间隔.默认为1s.警告:对于许多设备,将此值设置得太低可能会影响性能,具体取决于操作效果.',
        data: 'time'
    },
    {
        label: 'autoTriggerCooldownTime_allowDangerousHighCPU',
        insertText: 'autoTriggerCooldownTime_allowDangerousHighCPU:',
        labelDetails: { detail :' bool 允许超高频触发', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'允许超高频触发',
        documentation :'自动触发冷却时间,允许高CPU占用,也就是可以使用非常高频的触发,但不建议这么做.',
        data: 'bool'
    },
    {
        label: 'autoTriggerCheckWhileNotBuilt',
        insertText: 'autoTriggerCheckWhileNotBuilt:',
        labelDetails: { detail :' bool 在未建造完成时依然自动触发', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'在未建造完成时依然自动触发',
        documentation :'- 默认为 false - 当 true 时,即使单位未完成建造,所有自动触发器仍在运行',
        data: 'bool'
    },
    {
        label: 'autoTriggerCheckRate',
        insertText: 'autoTriggerCheckRate:',
        labelDetails: { detail :' other 自动触发检查率', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'自动触发检查率',
        documentation :'选项:everyFrame(默认), every4Frames, every8Frames. 注:所有触发器无论检查率都是在第一次创建和自动触发冷却之后检查的. 注:应用every8Frames到所有单位,可以让使用了复杂autoTriggers的mod有巨大的性能提升.',
        data: 'other'
    },
    {
        label: '@memory',
        insertText: '@memory:',
        labelDetails: { detail :' other 定义内存变量', description: '[core]' },
        kind: CompletionItemKind.Text,
        detail :'定义内存变量',
        documentation :'defineUnitMemory的快捷方式(格式:@memory name:type)',
        data: 'other'
    },
];