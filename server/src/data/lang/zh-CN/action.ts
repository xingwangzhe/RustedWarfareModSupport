import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ACTION: CompletionItem[] = [
    {
        label: 'text',
        insertText: 'text:',
        labelDetails: { detail :' file-text 文本', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'文本',
        documentation :'界面中显示的文字',
        data: 'file-text'
    },
    {
        label: 'textPostFix',
        insertText: 'textPostFix:',
        labelDetails: { detail :' file-text 文本动态更改', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'文本动态更改',
        documentation :'显示为后缀的文本,与textAddUnitName一起用于创建文本UI',
        data: 'file-text'
    },
    {
        label: 'text_language',
        insertText: 'text_language:',
        labelDetails: { detail :' file-text 文字多语言', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'文字多语言',
        documentation :'界面中显示的文字,多语言',
        data: 'file-text'
    },
    {
        label: 'description',
        insertText: 'description:',
        labelDetails: { detail :' file-text 描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'描述',
        documentation :'选中时显示的文本,用于解释其用途.',
        data: 'file-text'
    },
    {
        label: 'description_language',
        insertText: 'description_language:',
        labelDetails: { detail :' file-text 描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'描述',
        documentation :'描述多语言.',
        data: 'file-text'
    },
    {
        label: 'displayType',
        insertText: 'displayType:',
        labelDetails: { detail :' string 显示类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'显示类型',
        documentation :'可用的行动的显示类型有:none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox, infoOnlyStockpile',
        data: 'string'
    },
    {
        label: 'displayRemainingStockpile',
        insertText: 'displayRemainingStockpile:',
        labelDetails: { detail :' bool 显示剩余库存', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'显示剩余库存',
        documentation :'显示剩余库存,显示为根据资源计算可以触发操作的次数.',
        data: 'bool'
    },
    {
        label: 'pos',
        insertText: 'pos:',
        labelDetails: { detail :' float 位置', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'位置',
        documentation :'此动作在用户界面排序.',
        data: 'float'
    },
    {
        label: 'iconImage',
        insertText: 'iconImage:',
        labelDetails: { detail :' file-image 图标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'图标',
        documentation :'使用图像作为此动作图标.',
        data: 'file-image'
    },
    {
        label: 'iconExtraImage',
        insertText: 'iconExtraImage:',
        labelDetails: { detail :' file-image 额外图标图像', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'额外图标图像',
        documentation :'使用图像作为此动作图标.和上一个一致,但显示更靠上.绘制在图标图像上方.对升级图标等有用',
        data: 'file-image'
    },
    {
        label: 'iconExtraColor',
        insertText: 'iconExtraColor:',
        labelDetails: { detail :' color 额外图标颜色', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'额外图标颜色',
        documentation :'将图标叠加上额外的颜色.默认为#64FFFFFF',
        data: 'color'
    },
    {
        label: 'iconExtraIsVisible',
        insertText: 'iconExtraIsVisible:',
        labelDetails: { detail :' logicBoolean 额外图标显示条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'额外图标显示条件',
        documentation :'设置图标什么时候可显示.',
        data: 'logicBoolean'
    },
    {
        label: 'unitShownInUI',
        insertText: 'unitShownInUI:',
        labelDetails: { detail :' unitRef UI中显示的单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'UI中显示的单位',
        documentation :'使用此单位作为动作图标.',
        data: 'unitRef'
    },
    {
        label: 'setBuilt',
        insertText: 'setBuilt:',
        labelDetails: { detail :' float 设置完成度', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置完成度',
        documentation :'默认为1.填0-1之间的数字,将指定单位建造完成度.比如填0.5,执行完操作后单位自身建造完成度就成了50%',
        data: 'float'
    },
    {
        label: 'guiBuildUnit',
        insertText: 'guiBuildUnit:',
        labelDetails: { detail :' unit 界面显示单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'界面显示单位',
        documentation :'将action图标和鼠标指针改为指定单位,这就像你用建造者去造建筑,会受地形影响,可为action或路径点提供坐标.',
        data: 'unit'
    },
    {
        label: 'tags',
        insertText: 'tags:',
        labelDetails: { detail :' string 标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'标签',
        documentation :'可与queueSize(withActionTag=x)和queueItemAdded(withActionTag=x)结合使用',
        data: 'string'
    },
    {
        label: 'textAddUnitName',
        insertText: 'textAddUnitName:',
        labelDetails: { detail :' unitRef/unit 从单元添加名称', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'从单元添加名称',
        documentation :'从指定单位添加名称.',
        data: 'unitRef/unit'
    },
    {
        label: 'descriptionAddFromUnit',
        insertText: 'descriptionAddFromUnit:',
        labelDetails: { detail :' unitRef/unit 从单元添加描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'从单元添加描述',
        documentation :'从指定单位添加单位描述.',
        data: 'unitRef/unit'
    },
    {
        label: 'descriptionAddUnitStats',
        insertText: 'descriptionAddUnitStats:',
        labelDetails: { detail :' unitRef/unit 从单元添加属性', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'从单元添加属性',
        documentation :'从指定单位添加详细信息描述,比如攻击力,攻击范围.',
        data: 'unitRef/unit'
    },
    {
        label: 'unitShownInUIWithHpBar',
        insertText: 'unitShownInUIWithHpBar:',
        labelDetails: { detail :' bool 单元在UI显示Hp条', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'单元在UI显示Hp条',
        documentation :'在ui中显示单位血条.默认true,仅当unitShownInUI是unitRef时使用',
        data: 'bool'
    },
    {
        label: 'unitShownInUIWithProgressBar',
        insertText: 'unitShownInUIWithProgressBar:',
        labelDetails: { detail :' bool 单元在UI显示进度条', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'单元在UI显示进度条',
        documentation :'在ui中显示单位进度条.默认true,仅当unitShownInUI是unitRef时使用.如果激活,则替换HP bar',
        data: 'bool'
    },
    {
        label: 'price',
        insertText: 'price:',
        labelDetails: { detail :' int(price) 价格', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'价格',
        documentation :'此行为需要的价格,可以是多种资源或自定义资源.如果不满足则行为不可用.如果没设定资源类型则默认为资金.如果价格为0,AI可能很少甚至不会使用.',
        data: 'int(price)'
    },
    {
        label: 'isActive',
        insertText: 'isActive:',
        labelDetails: { detail :' logicBoolean 可用', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'可用',
        documentation :'默认为true.如果为false,则会禁用操作,并在用户界面中以红色显示.',
        data: 'logicBoolean'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' logicBoolean 可见', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'可见',
        documentation :'默认为true.如果false则从UI中隐藏并被禁用.',
        data: 'logicBoolean'
    },
    {
        label: 'isLocked',
        insertText: 'isLocked:',
        labelDetails: { detail :' logicBoolean 锁定', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'锁定',
        documentation :'默认为false.如果true则禁用操作,则会显示一个锁定文本.可用作禁核或者科技树,或是条件限制.',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedMessage',
        insertText: 'isLockedMessage:',
        labelDetails: { detail :' image-text 锁定消息', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'锁定消息',
        documentation :'显示锁定的原因.',
        data: 'image-text'
    },
    {
        label: 'isLockedAlt',
        insertText: 'isLockedAlt:',
        labelDetails: { detail :' logicBoolean 更多锁定', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定',
        documentation :'另一个原因被锁定.用于显示不同的消息.',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedAltMessage',
        insertText: 'isLockedAltMessage:',
        labelDetails: { detail :' image-text 更多锁定消息', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定消息',
        documentation :'显示更多锁定的原因.',
        data: 'image-text'
    },
    {
        label: 'isLockedAlt2',
        insertText: 'isLockedAlt2:',
        labelDetails: { detail :' logicBoolean 更多锁定2', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定2',
        documentation :'另一个原因被锁定.用于显示更多锁定的原因.',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedAlt2Message',
        insertText: 'isLockedAlt2Message:',
        labelDetails: { detail :' image-text 更多锁定消息2', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定消息2',
        documentation :'显示更多锁定的原因.',
        data: 'image-text'
    },
    {
        label: 'allowMultipleInQueue',
        insertText: 'allowMultipleInQueue:',
        labelDetails: { detail :' bool 允许多个队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'允许多个队列',
        documentation :'允许多次点击此行为形成队列,false时则只能点一次,不能累加.',
        data: 'bool'
    },
    {
        label: 'onlyOneUnitAtATime',
        insertText: 'onlyOneUnitAtATime:',
        labelDetails: { detail :' bool 一次只有一个单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'一次只有一个单位',
        documentation :'填true时选中多个同类单位时,只有一个执行此行为.',
        data: 'bool'
    },
    {
        label: 'isGuiBlinking',
        insertText: 'isGuiBlinking:',
        labelDetails: { detail :' logicBoolean 界面闪烁', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'界面闪烁',
        documentation :'此行为在界面中闪烁.',
        data: 'logicBoolean'
    },
    {
        label: 'alwaysSinglePress',
        insertText: 'alwaysSinglePress:',
        labelDetails: { detail :' bool 总是按一次', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'总是按一次',
        documentation :'点击就执行,不需要确认.默认false,不需要在手机上确认,使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口.',
        data: 'bool'
    },
    {
        label: 'isAlsoViewableByAllies',
        insertText: 'isAlsoViewableByAllies:',
        labelDetails: { detail :' bool 显示给盟友', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'显示给盟友',
        documentation :'允许盟友玩家看到这个单位的动作,对显示其他玩家有用(例如导抛射体数量,收集的物品)',
        data: 'bool'
    },
    {
        label: 'isAlsoViewableByEnemies',
        insertText: 'isAlsoViewableByEnemies:',
        labelDetails: { detail :' bool 显示给敌人', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'显示给敌人',
        documentation :'允许敌方玩家看到这个单位的动作,对显示其他玩家有用(例如导抛射体数量,收集的物品)',
        data: 'bool'
    },
    {
        label: 'extraLagHidingInUI',
        insertText: 'extraLagHidingInUI:',
        labelDetails: { detail :' bool 消除ui额外延迟', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'消除ui额外延迟',
        documentation :'用于联机,在UI中立即更新而不需要从服务器确认的等待时间.',
        data: 'bool'
    },
    {
        label: 'streamingCost',
        insertText: 'streamingCost:',
        labelDetails: { detail :' int 流式造价', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'流式造价',
        documentation :'就像价格,但在建造时逐渐消耗资金,如果在构建过程中资源耗尽,建造或生产队列将暂停.就像是红警中那样.铁锈默认是预先扣除资金.',
        data: 'int'
    },
    {
        label: 'switchPriceWithStreamingCost',
        insertText: 'switchPriceWithStreamingCost:',
        labelDetails: { detail :' bool 切换价格为流造价', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'切换价格为流造价',
        documentation :'快捷设置为默认资金消耗方式或为流式建造方式.建议使用模板快速将一个模组为所有单位切换流资源.',
        data: 'bool'
    },
    {
        label: 'ai_isDisabled',
        insertText: 'ai_isDisabled:',
        labelDetails: { detail :' logicBoolean AI被禁用', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'AI被禁用',
        documentation :'默认为false.使用此操作停止AI使用此动作.',
        data: 'logicBoolean'
    },
    {
        label: 'ai_isHighPriority',
        insertText: 'ai_isHighPriority:',
        labelDetails: { detail :' logicBoolean AI高优先级', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'AI高优先级',
        documentation :'AI将优先执行此动作.',
        data: 'logicBoolean'
    },
    {
        label: 'ai_considerSameAsBuilding',
        insertText: 'ai_considerSameAsBuilding:',
        labelDetails: { detail :' unitRef AI作为建筑', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'AI作为建筑',
        documentation :'填建筑.考虑动作的优先级将会跟建筑物建优先级一样.',
        data: 'unitRef'
    },
    {
        label: 'RefundAllQueuedItems',
        insertText: 'RefundAllQueuedItems:',
        labelDetails: { detail :' bool 取消所有队列项目', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'取消所有队列项目',
        documentation :'并返还资源',
        data: 'bool'
    },
    {
        label: 'removeAllQueuedItemsWithoutRefund',
        insertText: 'removeAllQueuedItemsWithoutRefund:',
        labelDetails: { detail :' bool 移除所有未建造完成的队列项目', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'移除所有未建造完成的队列项目',
        documentation :'不返还资源',
        data: 'bool'
    },
    {
        label: 'highPriorityQueue',
        insertText: 'highPriorityQueue:',
        labelDetails: { detail :' bool 高优先级队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'高优先级队列',
        documentation :'默认为false.如果为true,则此操作将跳过队列中的所有其他低优先级操作.适用于fireTurret类动作.',
        data: 'bool'
    },
    {
        label: 'canPlayerCancel',
        insertText: 'canPlayerCancel:',
        labelDetails: { detail :' bool 玩家可以取消', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'玩家可以取消',
        documentation :'玩家可以取消此动作.',
        data: 'bool'
    },
    {
        label: 'whenBuilding_cannotMove',
        insertText: 'whenBuilding_cannotMove:',
        labelDetails: { detail :' bool 建造时无法移动', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时无法移动',
        documentation :'执行操作准备时停止单位移动.适用于类似部署类动作.',
        data: 'bool'
    },
    {
        label: 'whenBuilding_playAnimation',
        insertText: 'whenBuilding_playAnimation:',
        labelDetails: { detail :' animationRef 建造时播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时播放动画',
        documentation :'准备此动作时,播放[animation]中自定义的动画.',
        data: 'animationRef'
    },
    {
        label: 'whenBuilding_rotateTo',
        insertText: 'whenBuilding_rotateTo:',
        labelDetails: { detail :' float 建造时旋转', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时旋转',
        documentation :'准备此动作时,将单位主体旋转到该方向',
        data: 'float'
    },
    {
        label: 'whenBuilding_rotateTo_orBackwards',
        insertText: 'whenBuilding_rotateTo_orBackwards:',
        labelDetails: { detail :' bool 建造时旋转或反转', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时旋转或反转',
        documentation :'如果为true,则当角度较小时,允许从whenBuilding_rotateTo旋转180度.',
        data: 'bool'
    },
    {
        label: 'whenBuilding_rotateTo_waitTillRotated',
        insertText: 'whenBuilding_rotateTo_waitTillRotated:',
        labelDetails: { detail :' bool 建造时需等待旋转完成', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时需等待旋转完成',
        documentation :'暂停准备的行为,直到旋转完成再继续.',
        data: 'bool'
    },
    {
        label: 'whenBuilding_temporarilyConvertTo',
        insertText: 'whenBuilding_temporarilyConvertTo:',
        labelDetails: { detail :' unitRef 建造时临时转换为', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时临时转换为',
        documentation :'准备此操作时临时转换为另一个单位.原始单位的操作将保留.',
        data: 'unitRef'
    },
    {
        label: 'whenBuilding_temporarilyConvertTo_keepFields',
        insertText: 'whenBuilding_temporarilyConvertTo_keepFields:',
        labelDetails: { detail :' other 建造时保留字段', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时保留字段',
        documentation :'不要在使用whenbuilding_temporaryconvertto时更改这些字段(无论是从或到),这对setUnitStats很有用',
        data: 'other'
    },
    {
        label: 'whenBuilding_triggerAction',
        insertText: 'whenBuilding_triggerAction:',
        labelDetails: { detail :' actionRef 建造时触发动作', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时触发动作',
        documentation :'准备时触发另一个动作',
        data: 'actionRef'
    },
    {
        label: 'whenBuilding_rotateTo_aimAtActionTarget',
        insertText: 'whenBuilding_rotateTo_aimAtActionTarget:',
        labelDetails: { detail :' bool 建造时转向瞄准目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时转向瞄准目标',
        documentation :'准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的',
        data: 'bool'
    },
    {
        label: 'whenBuilding_rotateTo_rotateTurretX',
        insertText: 'whenBuilding_rotateTo_rotateTurretX:',
        labelDetails: { detail :' turretRef 建造时转向指定炮塔', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'建造时转向指定炮塔',
        documentation :'准备此操作时转向指定炮塔.',
        data: 'turretRef'
    },
    {
        label: 'spawnEffectsOnQueue',
        insertText: 'spawnEffectsOnQueue:',
        labelDetails: { detail :' effectRef 队列产生效果', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'队列产生效果',
        documentation :'动作准备开始时产生的效果.',
        data: 'effectRef'
    },
    {
        label: 'playSoundToPlayerOnQueue',
        insertText: 'playSoundToPlayerOnQueue:',
        labelDetails: { detail :' file-sound 队列播放声音', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'队列播放声音',
        documentation :'动作准备时播放给玩家的声音.',
        data: 'file-sound'
    },
    {
        label: 'convertTo',
        insertText: 'convertTo:',
        labelDetails: { detail :' unitRef 转换成', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换成',
        documentation :'将你的单位转换为另一个单位.许多属性被保留.',
        data: 'unitRef'
    },
    {
        label: 'convertTo_keepCurrentTags',
        insertText: 'convertTo_keepCurrentTags:',
        labelDetails: { detail :' bool 转换时保留标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换时保留标签',
        documentation :'将单位转换为另一个单位.并且保留拥有的标签.',
        data: 'bool'
    },
    {
        label: 'convertTo_keepCurrentFields',
        insertText: 'convertTo_keepCurrentFields:',
        labelDetails: { detail :' other 转换时保留字段', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换时保留字段',
        documentation :'转换时不要更改这些字段,这在setUnitStats中很有用',
        data: 'other'
    },
    {
        label: 'addEnergy',
        insertText: 'addEnergy:',
        labelDetails: { detail :' float 增加能量', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'增加能量',
        documentation :'为单位增加能量.需要设置了energyMax,否则不起作用.(与addResources相同:energy = X)',
        data: 'float'
    },
    {
        label: 'addResources',
        insertText: 'addResources:',
        labelDetails: { detail :' resourcesRef 添加资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加资源',
        documentation :'操作完成后,添加这些资源.',
        data: 'resourcesRef'
    },
    {
        label: 'addResourcesScaledByAIHandicaps',
        insertText: 'addResourcesScaledByAIHandicaps:',
        labelDetails: { detail :' bool 根据AI难度添加资源.', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'根据AI难度添加资源.',
        documentation :'与addResources类似,但根据AI难度级别增加或减少.比例:最简单40%,简单70%,中等100%,困难140%,很困难180%,不可能370%',
        data: 'bool'
    },
    {
        label: 'addResourcesWithLogic',
        insertText: 'addResourcesWithLogic:',
        labelDetails: { detail :' dynamicFloat 用逻辑添加资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'用逻辑添加资源',
        documentation :'与addResources类似,但允许对资源值使用逻辑',
        data: 'dynamicFloat'
    },
    {
        label: 'setResourcesWithLogic',
        insertText: 'setResourcesWithLogic:',
        labelDetails: { detail :' dynamicFloat 用逻辑设置资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'用逻辑设置资源',
        documentation :'将目标资源设置为此值,而不是添加.小心对全局资源使用.',
        data: 'dynamicFloat'
    },
    {
        label: 'deleteSelf',
        insertText: 'deleteSelf:',
        labelDetails: { detail :' logicBoolean 删除自身', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'删除自身',
        documentation :'删除执行此操作的单位,没有死亡效果,不执行死亡触发.',
        data: 'logicBoolean'
    },
    {
        label: 'resetCustomTimer',
        insertText: 'resetCustomTimer:',
        labelDetails: { detail :' logicBoolean 重置自定义计时器', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'重置自定义计时器',
        documentation :'重置自定义计时器,与self.customTimer()结合使用',
        data: 'logicBoolean'
    },
    {
        label: 'setBodyRotation',
        insertText: 'setBodyRotation:',
        labelDetails: { detail :' dynamicFloat 设置躯干旋转', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置躯干旋转',
        documentation :'支持动态值',
        data: 'dynamicFloat'
    },
    {
        label: 'setUnitStats',
        insertText: 'setUnitStats:',
        labelDetails: { detail :' other 设置单位状态', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置单位状态',
        documentation :'字段值.允许在不转换的情况下动态更改选定的字段数量.支持=/+=/-=,动态数学/逻辑.',
        data: 'other'
    },
    {
        label: 'resetUnitStats',
        insertText: 'resetUnitStats:',
        labelDetails: { detail :' bool 重置单位状态', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'重置单位状态',
        documentation :'将setUnitStats所做的更改重置为基本值',
        data: 'bool'
    },
    {
        label: 'playSoundAtUnit',
        insertText: 'playSoundAtUnit:',
        labelDetails: { detail :' file-sound 播放声音至单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'播放声音至单位',
        documentation :'动作结束时在当前位置播放声音.',
        data: 'file-sound'
    },
    {
        label: 'playSoundGlobally',
        insertText: 'playSoundGlobally:',
        labelDetails: { detail :' file-sound 播放声音至全图', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'播放声音至全图',
        documentation :'播放全局声音,所有玩家都能听到.',
        data: 'file-sound'
    },
    {
        label: 'playSoundToPlayer',
        insertText: 'playSoundToPlayer:',
        labelDetails: { detail :' file-sound 播放声音至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'播放声音至玩家',
        documentation :'播放声音,只有自己能听到.',
        data: 'file-sound'
    },
    {
        label: 'fireTurretXAtGround',
        insertText: 'fireTurretXAtGround:',
        labelDetails: { detail :' turretRef 指定攻击地面炮塔', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面炮塔',
        documentation :'使用此炮塔攻击玩家所指定的地面.',
        data: 'turretRef'
    },
    {
        label: 'fireTurretXAtGround_withOffset',
        insertText: 'fireTurretXAtGround_withOffset:',
        labelDetails: { detail :' int 指定攻击地面坐标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面坐标',
        documentation :'攻击指定坐标所在地面,不需要手动选择,',
        data: 'int'
    },
    {
        label: 'fireTurretXAtGround_withProjectile',
        insertText: 'fireTurretXAtGround_withProjectile:',
        labelDetails: { detail :' projectileRef 指定攻击地面抛射体', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面抛射体',
        documentation :'设定使用的抛射体,如果不设置则为炮塔默认的抛射体.',
        data: 'projectileRef'
    },
    {
        label: 'fireTurretXAtGround_withTarget',
        insertText: 'fireTurretXAtGround_withTarget:',
        labelDetails: { detail :' unitRef 指定攻击目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击目标',
        documentation :'炮塔瞄准指示的单位或标记的位置发射',
        data: 'unitRef'
    },
    {
        label: 'fireTurretXAtGround_count',
        insertText: 'fireTurretXAtGround_count:',
        labelDetails: { detail :' int 指定攻击地面数量', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面数量',
        documentation :'设置发射的抛射体数量,默认为1',
        data: 'int'
    },
    {
        label: 'fireTurretXAtGround_onlyOverPassableTileOf',
        insertText: 'fireTurretXAtGround_onlyOverPassableTileOf:',
        labelDetails: { detail :' string 指定攻击地面类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面类型',
        documentation :'设置手动选择的地面需要满足这种运动方式.列表:NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER',
        data: 'string'
    },
    {
        label: 'spawnUnits',
        insertText: 'spawnUnits:',
        labelDetails: { detail :' unitName 产生单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'产生单位',
        documentation :'产生指定单位,可用是多种.',
        data: 'unitName'
    },
    {
        label: 'spawnEffects',
        insertText: 'spawnEffects:',
        labelDetails: { detail :' effectRef 产生效果', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'产生效果',
        documentation :'产生指定效果',
        data: 'effectRef'
    },
    {
        label: 'produceUnits',
        insertText: 'produceUnits:',
        labelDetails: { detail :' unitRef 生产单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'生产单位',
        documentation :'类似spawnUnits,但是单位像正常生产一样,并获得路径的移动.1.13只对非建筑物生成的单位有效.',
        data: 'unitRef'
    },
    {
        label: 'offsetSelfAbsolute',
        insertText: 'offsetSelfAbsolute:',
        labelDetails: { detail :' int 自身位置偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'自身位置偏移',
        documentation :'使用时将修改单位当前位置,以单位为中心的绝对坐标.',
        data: 'int'
    },
    {
        label: 'addUnitsIntoTransport',
        insertText: 'addUnitsIntoTransport:',
        labelDetails: { detail :' unitRef 添加单位到载具', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加单位到载具',
        documentation :'将单位添加到运输槽中,在添加之前会检查空间是否够.',
        data: 'unitRef'
    },
    {
        label: 'deleteNumUnitsFromTransport',
        insertText: 'deleteNumUnitsFromTransport:',
        labelDetails: { detail :' int 从载具中删除单位数', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'从载具中删除单位数',
        documentation :'从载具中删除指定数量单位.',
        data: 'int'
    },
    {
        label: 'deleteNumUnitsFromTransport_onlyWithTags',
        insertText: 'deleteNumUnitsFromTransport_onlyWithTags:',
        labelDetails: { detail :' string 从载具删除带标签单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'从载具删除带标签单位',
        documentation :'从载具中删除具有此标签的指定数量单位.',
        data: 'string'
    },
    {
        label: 'startUnloadingTransport',
        insertText: 'startUnloadingTransport:',
        labelDetails: { detail :' bool 开始卸载单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'开始卸载单位',
        documentation :'开始卸载单位',
        data: 'bool'
    },
    {
        label: 'forceUnloadTransportNow',
        insertText: 'forceUnloadTransportNow:',
        labelDetails: { detail :' bool 强制卸载单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'强制卸载单位',
        documentation :'立即强制卸载单位',
        data: 'bool'
    },
    {
        label: 'forceUnloadTransportNow_onlyOnSlot',
        insertText: 'forceUnloadTransportNow_onlyOnSlot:',
        labelDetails: { detail :' int 强制卸载指定槽位单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'强制卸载指定槽位单位',
        documentation :'强制卸载指定槽位单位',
        data: 'int'
    },
    {
        label: 'clearAllWaypoints',
        insertText: 'clearAllWaypoints:',
        labelDetails: { detail :' bool 清除所有路径点', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'清除所有路径点',
        documentation :'清除当前所有路径.',
        data: 'bool'
    },
    {
        label: 'clearActiveWaypoint',
        insertText: 'clearActiveWaypoint:',
        labelDetails: { detail :' bool 清除当前路径点', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'清除当前路径点',
        documentation :'清除当前路径,也就是停止当前动作,执行下一个路径点.',
        data: 'bool'
    },
    {
        label: 'addWaypoint_type',
        insertText: 'addWaypoint_type:',
        labelDetails: { detail :' other 添加路径点类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点类型',
        documentation :'填入添加的路径点类型.',
        data: 'other'
    },
    {
        label: 'addWaypoint_unitType',
        insertText: 'addWaypoint_unitType:',
        labelDetails: { detail :' unitRef 添加路径点所建造的单位类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点所建造的单位类型',
        documentation :'用于让当前单位去建造指定单位.仅用于addWaypoint_type:build',
        data: 'unitRef'
    },
    {
        label: 'addWaypoint_prepend',
        insertText: 'addWaypoint_prepend:',
        labelDetails: { detail :' bool 添加路径点序列位置', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点序列位置',
        documentation :'添加到路径点的开头或结尾',
        data: 'bool'
    },
    {
        label: 'addWaypoint_triggerActionIfFailed',
        insertText: 'addWaypoint_triggerActionIfFailed:',
        labelDetails: { detail :' actionRef 添加路径点失败触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点失败触发',
        documentation :'如果target_nearestUnit找不到匹配项,因此无法添加路径点,则触发此操作',
        data: 'actionRef'
    },
    {
        label: 'addWaypoint_triggerActionIfMatched',
        insertText: 'addWaypoint_triggerActionIfMatched:',
        labelDetails: { detail :' actionRef 添加路径点匹配触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点匹配触发',
        documentation :'如果操作添加的路径点是有效的,则执行指定操作.',
        data: 'actionRef'
    },
    {
        label: 'addWaypoint_maxTime',
        insertText: 'addWaypoint_maxTime:',
        labelDetails: { detail :' time 添加路径点检索时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点检索时间',
        documentation :'如果此路径点这么久还无法执行完成,则取消.',
        data: 'time'
    },
    {
        label: 'addWaypoint_target_nearestUnit_tagged',
        insertText: 'addWaypoint_target_nearestUnit_tagged:',
        labelDetails: { detail :' string 添加路径点检索标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点检索标签',
        documentation :'添加的路径点目标为靠近有此标签的单位.',
        data: 'string'
    },
    {
        label: 'addWaypoint_target_nearestUnit_team',
        insertText: 'addWaypoint_target_nearestUnit_team:',
        labelDetails: { detail :' string 添加路径点靠近队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点靠近队伍',
        documentation :'添加的路径点目标需要的所属方:own|notOwn|neutral|allyNotOwn|ally|enemy|any',
        data: 'string'
    },
    {
        label: 'addWaypoint_target_nearestUnit_maxRange',
        insertText: 'addWaypoint_target_nearestUnit_maxRange:',
        labelDetails: { detail :' float 添加路径点检索范围', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点检索范围',
        documentation :'添加的路径点靠近某目标时考虑的最大范围.',
        data: 'float'
    },
    {
        label: 'addWaypoint_target_mapMustBeReachable',
        insertText: 'addWaypoint_target_mapMustBeReachable:',
        labelDetails: { detail :' bool 添加路径点路径可达', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点路径可达',
        documentation :'添加的路径点靠近某目标时必须是有可到达路径的.',
        data: 'bool'
    },
    {
        label: 'addWaypoint_target_fromReference',
        insertText: 'addWaypoint_target_fromReference:',
        labelDetails: { detail :' unitRef 添加路径点来自参考', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点来自参考',
        documentation :'添加路径点来自单位信息引用.',
        data: 'unitRef'
    },
    {
        label: 'addWaypoint_position_offsetFromSelf',
        insertText: 'addWaypoint_position_offsetFromSelf:',
        labelDetails: { detail :' int 添加路径点坐标偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点坐标偏移',
        documentation :'添加的路径点相对于自身偏移的坐标.',
        data: 'int'
    },
    {
        label: 'addWaypoint_position_fromAction',
        insertText: 'addWaypoint_position_fromAction:',
        labelDetails: { detail :' bool 添加路径点动作坐标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点动作坐标',
        documentation :'将当前动作指定的坐标添加进路径序列中.',
        data: 'bool'
    },
    {
        label: 'addWaypoint_position_randomOffsetFromSelf',
        insertText: 'addWaypoint_position_randomOffsetFromSelf:',
        labelDetails: { detail :' int 添加路径点随机偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点随机偏移',
        documentation :'添加坐标进路径点时的随机值.',
        data: 'int'
    },
    {
        label: 'addWaypoint_position_relativeOffsetFromSelf',
        insertText: 'addWaypoint_position_relativeOffsetFromSelf:',
        labelDetails: { detail :' int 添加路径点相对偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加路径点相对偏移',
        documentation :'添加路径点位置相对自身偏移量.',
        data: 'int'
    },
    {
        label: 'addWaypoint_target_randomUnit_tagged',
        insertText: 'addWaypoint_target_randomUnit_tagged:',
        labelDetails: { detail :' unit 添加指定标签的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加指定标签的随机单位',
        documentation :'添加路径点单位为指定标签的随机单位',
        data: 'unit'
    },
    {
        label: 'addWaypoint_target_randomUnit_team',
        insertText: 'addWaypoint_target_randomUnit_team:',
        labelDetails: { detail :' string 添加指定队伍的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加指定队伍的随机单位',
        documentation :'添加路径点单位为指定队伍的随机单位',
        data: 'string'
    },
    {
        label: 'addWaypoint_target_randomUnit_maxRange',
        insertText: 'addWaypoint_target_randomUnit_maxRange:',
        labelDetails: { detail :' int 添加指定范围的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加指定范围的随机单位',
        documentation :'添加路径点单位为指定范围的随机单位',
        data: 'int'
    },
    {
        label: 'addAllActionCooldownsTime',
        insertText: 'addAllActionCooldownsTime:',
        labelDetails: { detail :' time 增加所有动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'增加所有动作冷却时间',
        documentation :'增加所有action的冷却时间.',
        data: 'time'
    },
    {
        label: 'addAllActionCooldownsFor',
        insertText: 'addAllActionCooldownsFor:',
        labelDetails: { detail :' time 对于所有动作而言增加冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'对于所有动作而言增加冷却时间',
        documentation :'',
        data: 'time'
    },
    {
        label: 'addActionCooldownTime',
        insertText: 'addActionCooldownTime:',
        labelDetails: { detail :' time 增加动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'增加动作冷却时间',
        documentation :'增加动作冷却时间,制作先充能再使用的action更加容易了.',
        data: 'time'
    },
    {
        label: 'addActionCooldownApplyToActions',
        insertText: 'addActionCooldownApplyToActions:',
        labelDetails: { detail :' actionRef 添加指定动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加指定动作冷却时间',
        documentation :'设置addActionCooldownTime的目标.默认情况下是当前操作本身.',
        data: 'actionRef'
    },
    {
        label: 'clearAllActionCooldowns',
        insertText: 'clearAllActionCooldowns:',
        labelDetails: { detail :' bool 清除所有动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'清除所有动作冷却时间',
        documentation :'清除所有动作冷却时间,使其立即可用.',
        data: 'bool'
    },
    {
        label: 'playAnimation',
        insertText: 'playAnimation:',
        labelDetails: { detail :' animationRef 播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'播放动画',
        documentation :'播放[animation_xx]类型动画.',
        data: 'animationRef'
    },
    {
        label: 'playAnimationIfNotPlaying',
        insertText: 'playAnimationIfNotPlaying:',
        labelDetails: { detail :' animationRef 如果未播放动画则播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'如果未播放动画则播放动画',
        documentation :'如果没有播放该动画,就播放该动画',
        data: 'animationRef'
    },
    {
        label: 'finishPlayingLastAnimation',
        insertText: 'finishPlayingLastAnimation:',
        labelDetails: { detail :' bool 完成最会动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'完成最会动画',
        documentation :'完成最后一个动画,包括融合',
        data: 'bool'
    },
    {
        label: 'stopLastAnimation',
        insertText: 'stopLastAnimation:',
        labelDetails: { detail :' bool 停止最后动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'停止最后动画',
        documentation :'停止最后一个动画,跳过融合',
        data: 'bool'
    },
    {
        label: 'switchToNeutralTeam',
        insertText: 'switchToNeutralTeam:',
        labelDetails: { detail :' bool 切换至中立队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'切换至中立队伍',
        documentation :'将队伍更改为中立.该队伍与其他所有队伍结盟.除非使用[core]stayNeutral:true,否则它将被附近的单位捕获.',
        data: 'bool'
    },
    {
        label: 'switchToAggressiveTeam',
        insertText: 'switchToAggressiveTeam:',
        labelDetails: { detail :' bool 切换至侵略性队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'切换至侵略性队伍',
        documentation :'将此单位队伍更改为侵略性的内置队伍.不能被其它单位捕获.',
        data: 'bool'
    },
    {
        label: 'switchToTeam',
        insertText: 'switchToTeam:',
        labelDetails: { detail :' dynamicFloat 切换至特定队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'切换至特定队伍',
        documentation :'切换到小队id.从0开始.(中立-1,敌对中立-2)',
        data: 'dynamicFloat'
    },
    {
        label: 'takeResources',
        insertText: 'takeResources:',
        labelDetails: { detail :' resourceRef 提取资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源',
        documentation :'提取资源,至少写一种资源.',
        data: 'resourceRef'
    },
    {
        label: 'takeResources_includeUnitsInTransport',
        insertText: 'takeResources_includeUnitsInTransport:',
        labelDetails: { detail :' bool 提取资源包括载具内', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源包括载具内',
        documentation :'提取资源,包括载具内单位.',
        data: 'bool'
    },
    {
        label: 'takeResources_includeParent',
        insertText: 'takeResources_includeParent:',
        labelDetails: { detail :' bool 提取资源包括父单位或载具', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源包括父单位或载具',
        documentation :'提取资源,包括父单位和运输载具.',
        data: 'bool'
    },
    {
        label: 'takeResources_includeReference',
        insertText: 'takeResources_includeReference:',
        labelDetails: { detail :' unitRef 提取资源包括引用', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源包括引用',
        documentation :'提取资源包括指定单位.',
        data: 'unitRef'
    },
    {
        label: 'takeResources_includeUnitsWithinRange',
        insertText: 'takeResources_includeUnitsWithinRange:',
        labelDetails: { detail :' float 提取资源范围', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源范围',
        documentation :'提取资源,在此范围内.',
        data: 'float'
    },
    {
        label: 'takeResources_includeUnitsWithinRange_team',
        insertText: 'takeResources_includeUnitsWithinRange_team:',
        labelDetails: { detail :' string 提取资源队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源队伍',
        documentation :'提取在此范围内队伍的资源.与“includeUnitsWithinRange”一起使用,默认为own.可以是:own|notOwn|neutral|allyNotOwn|ally|enemy|any',
        data: 'string'
    },
    {
        label: 'takeResources_excludeUnitsWithoutTags',
        insertText: 'takeResources_excludeUnitsWithoutTags:',
        labelDetails: { detail :' string 提取资源标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源标签',
        documentation :'提取资源,但排除没有此标签的单位.',
        data: 'string'
    },
    {
        label: 'takeResources_excludeUnitsWithTheseResources',
        insertText: 'takeResources_excludeUnitsWithTheseResources:',
        labelDetails: { detail :' resourceRef 提取资源排除资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源排除资源',
        documentation :'提取资源,不包括拥有这些资源的单位.',
        data: 'resourceRef'
    },
    {
        label: 'takeResources_excludeUnitsWithoutAllResources',
        insertText: 'takeResources_excludeUnitsWithoutAllResources:',
        labelDetails: { detail :' bool 提取资源排除不足', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源排除不足',
        documentation :'提取资源,排除缺乏资源者.默认为true.',
        data: 'bool'
    },
    {
        label: 'takeResources_triggerActionIfAnyCollected',
        insertText: 'takeResources_triggerActionIfAnyCollected:',
        labelDetails: { detail :' actionRef 提取资源成功触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源成功触发',
        documentation :'如果有任何收集,则触发动作.',
        data: 'actionRef'
    },
    {
        label: 'takeResources_triggerActionIfNoneCollected',
        insertText: 'takeResources_triggerActionIfNoneCollected:',
        labelDetails: { detail :' actionRef 提取资源失败触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源失败触发',
        documentation :'如果没有收集,则触发操作.',
        data: 'actionRef'
    },
    {
        label: 'takeResources_discardCollected',
        insertText: 'takeResources_discardCollected:',
        labelDetails: { detail :' bool 提取资源删除', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源删除',
        documentation :'从目标中获取资源,但不向自身添加也就是删除.',
        data: 'bool'
    },
    {
        label: 'takeResources_keepResourcesOnTarget',
        insertText: 'takeResources_keepResourcesOnTarget:',
        labelDetails: { detail :' bool 提取资源克隆', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源克隆',
        documentation :'不从目标添加或删除资源.但克隆资源.与takeResources_discardCollected和takeResources_triggerActionIfAnyCollected一起使用以创建资源检测器.',
        data: 'bool'
    },
    {
        label: 'takeResources_maxUnits',
        insertText: 'takeResources_maxUnits:',
        labelDetails: { detail :' int 提取资源目标量', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源目标量',
        documentation :'最多从多少单位提取资源,默认为1.',
        data: 'int'
    },
    {
        label: 'takeResources_directTransferStoppingAtZero',
        insertText: 'takeResources_directTransferStoppingAtZero:',
        labelDetails: { detail :' bool 提取资源直接转换至零', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源直接转换至零',
        documentation :'提取资源直接转换至0,用于完全转换.如果目标上的资源少于转帐金额,则只有剩余的资源将被转帐.不支持使用其他一些takeResources_*代码',
        data: 'bool'
    },
    {
        label: 'takeResources_searchOnly',
        insertText: 'takeResources_searchOnly:',
        labelDetails: { detail :' bool 获取资源仅供搜索', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'获取资源仅供搜索',
        documentation :'提取资源完全用于搜索范围内的单位而不是改动资源,与forEach配合使用',
        data: 'bool'
    },
    {
        label: 'takeResources_saveFirstUnitToCustomTarget1',
        insertText: 'takeResources_saveFirstUnitToCustomTarget1:',
        labelDetails: { detail :' bool 提取资源保存第一个单元自定义目标1', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源保存第一个单元自定义目标1',
        documentation :'提取资源保存第一个单元一定是自定义目标1',
        data: 'bool'
    },
    {
        label: 'takeResources_saveFirstUnitToCustomTarget2',
        insertText: 'takeResources_saveFirstUnitToCustomTarget2:',
        labelDetails: { detail :' bool 提取资源保存第一个单元自定义目标2', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'提取资源保存第一个单元自定义目标2',
        documentation :'提取资源保存第一个单元一定是自定义目标2',
        data: 'bool'
    },
    {
        label: 'convertResource_from',
        insertText: 'convertResource_from:',
        labelDetails: { detail :' resourceRef 转换资源来源', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换资源来源',
        documentation :'将此资源转换资源为别的资源.',
        data: 'resourceRef'
    },
    {
        label: 'convertResource_to',
        insertText: 'convertResource_to:',
        labelDetails: { detail :' resourceRef 转换资源至', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换资源至',
        documentation :'将资源转后为此资源,要提供的自定义资源的名称',
        data: 'resourceRef'
    },
    {
        label: 'convertResource_minAmount',
        insertText: 'convertResource_minAmount:',
        labelDetails: { detail :' int 转换资源至少', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换资源至少',
        documentation :'如果来源中资源小于该数量,则跳过.默认为0.在大多数情况下可能不需要.',
        data: 'int'
    },
    {
        label: 'convertResource_maxAmount',
        insertText: 'convertResource_maxAmount:',
        labelDetails: { detail :' int 转换资源至多', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换资源至多',
        documentation :'“来源资源”和“转换后资源”之间的最大转化量',
        data: 'int'
    },
    {
        label: 'convertResource_multiplyAmountBy',
        insertText: 'convertResource_multiplyAmountBy:',
        labelDetails: { detail :' float 转换资源倍率', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'转换资源倍率',
        documentation :'资源转换倍率,不影响提取的数量.默认值为1.',
        data: 'float'
    },
    {
        label: 'resourceAmount',
        insertText: 'resourceAmount:',
        labelDetails: { detail :' resourceRef 资源类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'资源类型',
        documentation :'自定义资源的名称,使用以下3个键进行设置.所有键都是可选的,可以一起使用.',
        data: 'resourceRef'
    },
    {
        label: 'resourceAmount_setValue',
        insertText: 'resourceAmount_setValue:',
        labelDetails: { detail :' float 资源类型设置数值', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'资源类型设置数值',
        documentation :'设置此资源的绝对值,忽略资源的当前值.默认忽略.',
        data: 'float'
    },
    {
        label: 'resourceAmount_addOtherResource',
        insertText: 'resourceAmount_addOtherResource:',
        labelDetails: { detail :' resourceRef 资源类型添加至', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'资源类型添加至',
        documentation :'添加到其中的另一个自定义资源的名称.可以不使用resourceAmount_setValue,只是添加资源.或者使用resourceAmount_setValue:0复制一个资源值.',
        data: 'resourceRef'
    },
    {
        label: 'resourceAmount_multiplyBy',
        insertText: 'resourceAmount_multiplyBy:',
        labelDetails: { detail :' float 资源类型乘数', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'资源类型乘数',
        documentation :'默认值为1.将当前资源值乘上此值.',
        data: 'float'
    },
    {
        label: 'attachments_addNewUnits',
        insertText: 'attachments_addNewUnits:',
        labelDetails: { detail :' unit 附属添加单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'附属添加单位',
        documentation :'添加单位作为其子单位,需要定义附属位置.',
        data: 'unit'
    },
    {
        label: 'attachments_deleteNumUnits',
        insertText: 'attachments_deleteNumUnits:',
        labelDetails: { detail :' int 附属删除单位数', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'附属删除单位数',
        documentation :'删除单位数量',
        data: 'int'
    },
    {
        label: 'attachments_onlyOnSlots',
        insertText: 'attachments_onlyOnSlots:',
        labelDetails: { detail :' string 附属添加于槽位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'附属添加于槽位',
        documentation :'只将附属物添加于特定的槽位',
        data: 'string'
    },
    {
        label: 'disconnectFromParent',
        insertText: 'disconnectFromParent:',
        labelDetails: { detail :' bool 脱离父单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'脱离父单位',
        documentation :'用于子单位脱离父单位',
        data: 'bool'
    },
    {
        label: 'attachments_unload',
        insertText: 'attachments_unload:',
        labelDetails: { detail :' bool 卸载附属', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'卸载附属',
        documentation :'卸载所有附属.可以与attachments_onlyonslot一起使用.与运输单位卸载相同',
        data: 'bool'
    },
    {
        label: 'attachments_disconnect',
        insertText: 'attachments_disconnect:',
        labelDetails: { detail :' bool 附属断开连接', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'附属断开连接',
        documentation :'断开所有现在所在位置的附属.可以与attachments_onlyonslot一起使用.',
        data: 'bool'
    },
    {
        label: 'temporarilyAddTags',
        insertText: 'temporarilyAddTags:',
        labelDetails: { detail :' string 临时标签添加', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'临时标签添加',
        documentation :'将标签添加到单位,直到转换或重置.',
        data: 'string'
    },
    {
        label: 'temporarilyRemoveTags',
        insertText: 'temporarilyRemoveTags:',
        labelDetails: { detail :' string 临时标签删除', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'临时标签删除',
        documentation :'从单位上删除标签,直到将其转换或重置.',
        data: 'string'
    },
    {
        label: 'resetToDefaultTags',
        insertText: 'resetToDefaultTags:',
        labelDetails: { detail :' bool 标签重置', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'标签重置',
        documentation :'重置为默认标签.',
        data: 'bool'
    },
    {
        label: 'addGlobalTeamTags',
        insertText: 'addGlobalTeamTags:',
        labelDetails: { detail :' string 添加全局标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加全局标签',
        documentation :'为玩家的团队添加此全局标签.与self.globalTeamTags()一起使用可创建解锁和升级.',
        data: 'string'
    },
    {
        label: 'removeGlobalTeamTags',
        insertText: 'removeGlobalTeamTags:',
        labelDetails: { detail :' string 移除全局标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'移除全局标签',
        documentation :'从玩家队伍中删除此全局标签.',
        data: 'string'
    },
    {
        label: 'showMessageToPlayer',
        insertText: 'showMessageToPlayer:',
        labelDetails: { detail :' string 发送消息至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送消息至玩家',
        documentation :'向玩家个人发送信息.自己发给自己.',
        data: 'string'
    },
    {
        label: 'showMessageToPlayer_language',
        insertText: 'showMessageToPlayer_language:',
        labelDetails: { detail :' string 发送消息至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送消息至玩家',
        documentation :'向玩家个人发送信息.自己发给自己.多语言版.注意:这种格式是支持几乎所有字符串显示给玩家,即使当引用不显示它',
        data: 'string'
    },
    {
        label: 'showMessageToAllPlayers',
        insertText: 'showMessageToAllPlayers:',
        labelDetails: { detail :' string 发送消息至所有', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送消息至所有',
        documentation :'向所有玩家发送消息.',
        data: 'string'
    },
    {
        label: 'showMessageToAllEnemyPlayers',
        insertText: 'showMessageToAllEnemyPlayers:',
        labelDetails: { detail :' string 发送消息给所有敌人', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送消息给所有敌人',
        documentation :'发送消息给所有敌人.',
        data: 'string'
    },
    {
        label: 'showQuickWarLogToPlayer',
        insertText: 'showQuickWarLogToPlayer:',
        labelDetails: { detail :' string 发送战争快报至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送战争快报至玩家',
        documentation :'向玩家个人发送战争快报.(在左下角)',
        data: 'string'
    },
    {
        label: 'showQuickWarLogToAllPlayers',
        insertText: 'showQuickWarLogToAllPlayers:',
        labelDetails: { detail :' string 发送战争快报至所有', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送战争快报至所有',
        documentation :'向所有玩家发送战争快报.(在左下角)',
        data: 'string'
    },
    {
        label: 'debugMessage',
        insertText: 'debugMessage:',
        labelDetails: { detail :' string 排错信息', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'排错信息',
        documentation :'仅在启用调试模式的沙盒模式中显示.',
        data: 'string'
    },
    {
        label: 'setHeight',
        insertText: 'setHeight:',
        labelDetails: { detail :' dynamicFloat 设置高度', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置高度',
        documentation :'新增设置高度,可以使用逻辑',
        data: 'dynamicFloat'
    },
    {
        label: 'transportTargetNow',
        insertText: 'transportTargetNow:',
        labelDetails: { detail :' unitRef 主动装运目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'主动装运目标',
        documentation :'立即主动装载目标(1.15版本无法正常使用,会导致单位装载自己)',
        data: 'unitRef'
    },
    {
        label: 'id',
        insertText: 'id:',
        labelDetails: { detail :' string 编号', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'编号',
        documentation :'用于在单位转换时的连接被加入队列的动作',
        data: 'string'
    },
    {
        label: 'fireTurretXAtGround_showGuideDecals',
        insertText: 'fireTurretXAtGround_showGuideDecals:',
        labelDetails: { detail :' decalRef 指定攻击地面时显示贴花', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'指定攻击地面时显示贴花',
        documentation :'当选择发射位置时显示贴花(参考核抛射体选择发射地点时长按显示)',
        data: 'decalRef'
    },
    {
        label: 'aiTags',
        insertText: 'aiTags:',
        labelDetails: { detail :' string AI的标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'AI的标签',
        documentation :'随便填一个得了(专门给AI用的)',
        data: 'string'
    },
    {
        label: 'aiUse',
        insertText: 'aiUse:',
        labelDetails: { detail :' string AI对该行动的使用方式', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'AI对该行动的使用方式',
        documentation :'可填:auto(自动),launch(发射),launchAmmo(增加弹药),disabled(残缺),upGrade(升级),movementChange(运动改变),sameAsBuilding(与建筑物相同)',
        data: 'string'
    },
    {
        label: 'teleportTo',
        insertText: 'teleportTo:',
        labelDetails: { detail :' unitRef 传送到', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'传送到',
        documentation :'简称tp. 立即传送到单位参考的位置,性能最好的位移手段',
        data: 'unitRef'
    },
    {
        label: 'setUnitMemory',
        insertText: 'setUnitMemory:',
        labelDetails: { detail :' memory 设置单位内存', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置单位内存',
        documentation :'简称setM. 为内存变量赋值,可以使用动态值.使用内存变量需要先在core节定义.',
        data: 'memory'
    },
    {
        label: 'setCustomTarget1',
        insertText: 'setCustomTarget1:',
        labelDetails: { detail :' unitRef/unit 设置自定义目标1', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置自定义目标1',
        documentation :'对ct1快捷赋值',
        data: 'unitRef/unit'
    },
    {
        label: 'setCustomTarget2',
        insertText: 'setCustomTarget2:',
        labelDetails: { detail :' unitRef/unit 设置自定义目标2', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'设置自定义目标2',
        documentation :'对ct2快捷赋值',
        data: 'unitRef/unit'
    },
    {
        label: 'swapCustomTarget1And2',
        insertText: 'swapCustomTarget1And2:',
        labelDetails: { detail :' bool 交换自定义目标1和2', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'交换自定义目标1和2',
        documentation :'对易ct1和ct2的值',
        data: 'bool'
    },
    {
        label: 'shrinkArrays',
        insertText: 'shrinkArrays:',
        labelDetails: { detail :' memory 收缩数组', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'收缩数组',
        documentation :'在数组中清除一些不需要的值并向前收缩(例如:unit[]中的死亡或是被删除的单位(以及null),float[]/number[]中的0)',
        data: 'memory'
    },
    {
        label: 'sendMessageTo',
        insertText: 'sendMessageTo:',
        labelDetails: { detail :' unitRef 发送信息至', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送信息至',
        documentation :'简称sendM. 类似创建一个自定义事件',
        data: 'unitRef'
    },
    {
        label: 'sendMessageWithData',
        insertText: 'sendMessageWithData:',
        labelDetails: { detail :' other 发送数据', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'发送数据',
        documentation :'简称sendMD. 让自定义事件可以携带数据,1.15不支持发送整个数组',
        data: 'other'
    },
    {
        label: 'sendMessageWithTags',
        insertText: 'sendMessageWithTags:',
        labelDetails: { detail :' string 信息标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'信息标签',
        documentation :'简称sendMT. 与newMessage(withTag=\'\')结合使用,类似为自定义事件命名',
        data: 'string'
    },
    {
        label: 'autoTrigger',
        insertText: 'autoTrigger:',
        labelDetails: { detail :' logicBoolean 自动触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'自动触发',
        documentation :'简称autoT,满足条件时触发该action,触发间隔可在core节调整',
        data: 'logicBoolean'
    },
    {
        label: 'requireConditional',
        insertText: 'requireConditional:',
        labelDetails: { detail :' logicBoolean 需要条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'需要条件',
        documentation :'简称rC,如果结果为false,则跳过此操作所有结果.',
        data: 'logicBoolean'
    },
    {
        label: 'autoTriggerCheckRate',
        insertText: 'autoTriggerCheckRate:',
        labelDetails: { detail :' other 触发检查频率', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'触发检查频率',
        documentation :'同core节的触发检查频率',
        data: 'other'
    },
    {
        label: 'autoTriggerOnEvent',
        insertText: 'autoTriggerOnEvent:',
        labelDetails: { detail :' event 自动触发事件', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'自动触发事件',
        documentation :'简称autoE,基于事件触发,事件有较短的有效时间',
        data: 'event'
    },
    {
        label: 'autoTriggerOnEventRecursionLimit',
        insertText: 'autoTriggerOnEventRecursionLimit:',
        labelDetails: { detail :' int 自动触发事件递归限制(默认为4)', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'自动触发事件递归限制(默认为4)',
        documentation :'同一个事件重复触发的限制次数,默认为4',
        data: 'int'
    },
    {
        label: 'alsoTriggerAction',
        insertText: 'alsoTriggerAction:',
        labelDetails: { detail :' actionRef 也触发行动', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'也触发行动',
        documentation :'简称alsoT,该action被执行后执行另一个action',
        data: 'actionRef'
    },
    {
        label: 'alsoQueueAction',
        insertText: 'alsoQueueAction:',
        labelDetails: { detail :' actionRef 添加进队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'添加进队列',
        documentation :'简称alsoQ,将另一个action添加到队列中,类似于异步执行,注意队列只能单线程',
        data: 'actionRef'
    },
    {
        label: 'buildSpeed',
        insertText: 'buildSpeed:',
        labelDetails: { detail :' time 队列速度', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'队列速度',
        documentation :'决定了当该action被添加到队列时到被执行的时间.',
        data: 'time'
    },
    {
        label: 'alsoTriggerOrQueueActionConditional',
        insertText: 'alsoTriggerOrQueueActionConditional:',
        labelDetails: { detail :' logicBoolean 也执行队列或需执行条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'也执行队列或需执行条件',
        documentation :'简称alsoTQRC如果条件不满足则跳过alsoT和alsoQ.',
        data: 'logicBoolean'
    },
    {
        label: 'alsoTriggerActionRepeat',
        insertText: 'alsoTriggerActionRepeat:',
        labelDetails: { detail :' dynamicFloat 重复触发行动次数', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'重复触发行动次数',
        documentation :'简称alsoTR. 每次重复执行时自动index++,用于创建循环或处理数组.',
        data: 'dynamicFloat'
    },
    {
        label: 'alsoTriggerOrQueueActionWithTarget',
        insertText: 'alsoTriggerOrQueueActionWithTarget:',
        labelDetails: { detail :' unitRef 回调传入单位参考', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'回调传入单位参考',
        documentation :'简称alsoTQWT. 将被触发的action的thisActionTarget传入该值.',
        data: 'unitRef'
    },
    {
        label: 'takeResources_triggerActionForEach',
        insertText: 'takeResources_triggerActionForEach:',
        labelDetails: { detail :' actionRef 为提取资源找到的每个目标单位调用这个动作', description: '[action]' },
        kind: CompletionItemKind.Text,
        detail :'为提取资源找到的每个目标单位调用这个动作',
        documentation :'简称forEach. 遍历提取资源搜索到的每个单位,每次重复执行时自动index++并将thisActionTarget设为该单位并触发填入的action. 该代码功能十分强大,常见于复杂机制',
        data: 'actionRef'
    },
];