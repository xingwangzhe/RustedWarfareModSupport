import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ACTION: CompletionItem[] = [
    {
        label: 'text',
        insertText: 'text:',
        labelDetails: { detail :' 文本', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'文本',
        documentation :'界面中显示的文字'
    },
    {
        label: 'textPostFix',
        insertText: 'textPostFix:',
        labelDetails: { detail :' 文本动态更改', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'文本动态更改',
        documentation :'显示为后缀的文本,与textAddUnitName一起用于创建文本UI'
    },
    {
        label: 'text_language',
        insertText: 'text_language:',
        labelDetails: { detail :' 文字多语言', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'文字多语言',
        documentation :'界面中显示的文字,多语言'
    },
    {
        label: 'description',
        insertText: 'description:',
        labelDetails: { detail :' 描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'描述',
        documentation :'选中时显示的文本,用于解释其用途.'
    },
    {
        label: 'description_language',
        insertText: 'description_language:',
        labelDetails: { detail :' 描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'描述',
        documentation :'描述多语言.'
    },
    {
        label: 'displayType',
        insertText: 'displayType:',
        labelDetails: { detail :' 显示类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'显示类型',
        documentation :'可用的行动的显示类型有:none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox, infoOnlyStockpile'
    },
    {
        label: 'displayRemainingStockpile',
        insertText: 'displayRemainingStockpile:',
        labelDetails: { detail :' 显示剩余库存', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'显示剩余库存',
        documentation :'显示剩余库存,显示为根据资源计算可以触发操作的次数.'
    },
    {
        label: 'pos',
        insertText: 'pos:',
        labelDetails: { detail :' 位置', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'位置',
        documentation :'此动作在用户界面排序.'
    },
    {
        label: 'iconImage',
        insertText: 'iconImage:',
        labelDetails: { detail :' 图标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'图标',
        documentation :'使用图像作为此动作图标.'
    },
    {
        label: 'iconExtraImage',
        insertText: 'iconExtraImage:',
        labelDetails: { detail :' 额外图标图像', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'额外图标图像',
        documentation :'使用图像作为此动作图标.和上一个一致,但显示更靠上.绘制在图标图像上方.对升级图标等有用'
    },
    {
        label: 'iconExtraColor',
        insertText: 'iconExtraColor:',
        labelDetails: { detail :' 额外图标颜色', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'额外图标颜色',
        documentation :'将图标叠加上额外的颜色.默认为#64FFFFFF'
    },
    {
        label: 'iconExtraIsVisible',
        insertText: 'iconExtraIsVisible:',
        labelDetails: { detail :' 额外图标显示条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'额外图标显示条件',
        documentation :'设置图标什么时候可显示.'
    },
    {
        label: 'unitShownInUI',
        insertText: 'unitShownInUI:',
        labelDetails: { detail :' UI中显示的单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'UI中显示的单位',
        documentation :'使用此单位作为动作图标.'
    },
    {
        label: 'setBuilt',
        insertText: 'setBuilt:',
        labelDetails: { detail :' 设置完成度', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'设置完成度',
        documentation :'默认为1.填0-1之间的数字,将指定单位建造完成度.比如填0.5,执行完操作后单位自身建造完成度就成了50%'
    },
    {
        label: 'guiBuildUnit',
        insertText: 'guiBuildUnit:',
        labelDetails: { detail :' 界面显示单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'界面显示单位',
        documentation :'将action图标和鼠标指针改为指定单位,这就像你用建造者去造建筑,会受地形影响,可为action或路径点提供坐标.'
    },
    {
        label: 'tags',
        insertText: 'tags:',
        labelDetails: { detail :' 标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'标签',
        documentation :'可与queueSize(withActionTag=x)和queueItemAdded(withActionTag=x)结合使用'
    },
    {
        label: 'textAddUnitName',
        insertText: 'textAddUnitName:',
        labelDetails: { detail :' 从单元添加名称', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'从单元添加名称',
        documentation :'从指定单位添加名称.'
    },
    {
        label: 'descriptionAddFromUnit',
        insertText: 'descriptionAddFromUnit:',
        labelDetails: { detail :' 从单元添加描述', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'从单元添加描述',
        documentation :'从指定单位添加单位描述.'
    },
    {
        label: 'descriptionAddUnitStats',
        insertText: 'descriptionAddUnitStats:',
        labelDetails: { detail :' 从单元添加属性', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'从单元添加属性',
        documentation :'从指定单位添加详细信息描述,比如攻击力,攻击范围.'
    },
    {
        label: 'unitShownInUIWithHpBar',
        insertText: 'unitShownInUIWithHpBar:',
        labelDetails: { detail :' 单元在UI显示Hp条', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'单元在UI显示Hp条',
        documentation :'在ui中显示单位血条.默认true,仅当unitShownInUI是unitRef时使用'
    },
    {
        label: 'unitShownInUIWithProgressBar',
        insertText: 'unitShownInUIWithProgressBar:',
        labelDetails: { detail :' 单元在UI显示进度条', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'单元在UI显示进度条',
        documentation :'在ui中显示单位进度条.默认true,仅当unitShownInUI是unitRef时使用.如果激活,则替换HP bar'
    },
    {
        label: 'price',
        insertText: 'price:',
        labelDetails: { detail :' 价格', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'价格',
        documentation :'此行为需要的价格,可以是多种资源或自定义资源.如果不满足则行为不可用.如果没设定资源类型则默认为资金.如果价格为0,AI可能很少甚至不会使用.'
    },
    {
        label: 'isActive',
        insertText: 'isActive:',
        labelDetails: { detail :' 可用', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'可用',
        documentation :'默认为true.如果为false,则会禁用操作,并在用户界面中以红色显示.'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' 可见', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'可见',
        documentation :'默认为true.如果false则从UI中隐藏并被禁用.'
    },
    {
        label: 'isLocked',
        insertText: 'isLocked:',
        labelDetails: { detail :' 锁定', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'锁定',
        documentation :'默认为false.如果true则禁用操作,则会显示一个锁定文本.可用作禁核或者科技树,或是条件限制.'
    },
    {
        label: 'isLockedMessage',
        insertText: 'isLockedMessage:',
        labelDetails: { detail :' 锁定消息', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'锁定消息',
        documentation :'显示锁定的原因.'
    },
    {
        label: 'isLockedAlt',
        insertText: 'isLockedAlt:',
        labelDetails: { detail :' 更多锁定', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'更多锁定',
        documentation :'另一个原因被锁定.用于显示不同的消息.'
    },
    {
        label: 'isLockedAltMessage',
        insertText: 'isLockedAltMessage:',
        labelDetails: { detail :' 更多锁定消息', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'更多锁定消息',
        documentation :'显示更多锁定的原因.'
    },
    {
        label: 'isLockedAlt2',
        insertText: 'isLockedAlt2:',
        labelDetails: { detail :' 更多锁定2', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'更多锁定2',
        documentation :'另一个原因被锁定.用于显示更多锁定的原因.'
    },
    {
        label: 'isLockedAlt2Message',
        insertText: 'isLockedAlt2Message:',
        labelDetails: { detail :' 更多锁定消息2', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'更多锁定消息2',
        documentation :'显示更多锁定的原因.'
    },
    {
        label: 'allowMultipleInQueue',
        insertText: 'allowMultipleInQueue:',
        labelDetails: { detail :' 允许多个队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'允许多个队列',
        documentation :'允许多次点击此行为形成队列,false时则只能点一次,不能累加.'
    },
    {
        label: 'onlyOneUnitAtATime',
        insertText: 'onlyOneUnitAtATime:',
        labelDetails: { detail :' 一次只有一个单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'一次只有一个单位',
        documentation :'填true时选中多个同类单位时,只有一个执行此行为.'
    },
    {
        label: 'isGuiBlinking',
        insertText: 'isGuiBlinking:',
        labelDetails: { detail :' 界面闪烁', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'界面闪烁',
        documentation :'此行为在界面中闪烁.'
    },
    {
        label: 'alwaysSinglePress',
        insertText: 'alwaysSinglePress:',
        labelDetails: { detail :' 总是按一次', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'总是按一次',
        documentation :'点击就执行,不需要确认.默认false,不需要在手机上确认,使用canPlayerCancel: false和allowMultipleInQueue: false也隐藏队列接口.'
    },
    {
        label: 'isAlsoViewableByAllies',
        insertText: 'isAlsoViewableByAllies:',
        labelDetails: { detail :' 显示给盟友', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'显示给盟友',
        documentation :'允许盟友玩家看到这个单位的动作,对显示其他玩家有用(例如导抛射体数量,收集的物品)'
    },
    {
        label: 'isAlsoViewableByEnemies',
        insertText: 'isAlsoViewableByEnemies:',
        labelDetails: { detail :' 显示给敌人', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'显示给敌人',
        documentation :'允许敌方玩家看到这个单位的动作,对显示其他玩家有用(例如导抛射体数量,收集的物品)'
    },
    {
        label: 'extraLagHidingInUI',
        insertText: 'extraLagHidingInUI:',
        labelDetails: { detail :' 消除ui额外延迟', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'消除ui额外延迟',
        documentation :'用于联机,在UI中立即更新而不需要从服务器确认的等待时间.'
    },
    {
        label: 'streamingCost',
        insertText: 'streamingCost:',
        labelDetails: { detail :' 流式造价', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 38,
        detail :'流式造价',
        documentation :'就像价格,但在建造时逐渐消耗资金,如果在构建过程中资源耗尽,建造或生产队列将暂停.就像是红警中那样.铁锈默认是预先扣除资金.'
    },
    {
        label: 'switchPriceWithStreamingCost',
        insertText: 'switchPriceWithStreamingCost:',
        labelDetails: { detail :' 切换价格为流造价', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 39,
        detail :'切换价格为流造价',
        documentation :'快捷设置为默认资金消耗方式或为流式建造方式.建议使用模板快速将一个模组为所有单位切换流资源.'
    },
    {
        label: 'ai_isDisabled',
        insertText: 'ai_isDisabled:',
        labelDetails: { detail :' AI被禁用', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 40,
        detail :'AI被禁用',
        documentation :'默认为false.使用此操作停止AI使用此动作.'
    },
    {
        label: 'ai_isHighPriority',
        insertText: 'ai_isHighPriority:',
        labelDetails: { detail :' AI高优先级', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 41,
        detail :'AI高优先级',
        documentation :'AI将优先执行此动作.'
    },
    {
        label: 'ai_considerSameAsBuilding',
        insertText: 'ai_considerSameAsBuilding:',
        labelDetails: { detail :' AI作为建筑', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 42,
        detail :'AI作为建筑',
        documentation :'填建筑.考虑动作的优先级将会跟建筑物建优先级一样.'
    },
    {
        label: 'RefundAllQueuedItems',
        insertText: 'RefundAllQueuedItems:',
        labelDetails: { detail :' 取消所有队列项目', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 43,
        detail :'取消所有队列项目',
        documentation :'并返还资源'
    },
    {
        label: 'removeAllQueuedItemsWithoutRefund',
        insertText: 'removeAllQueuedItemsWithoutRefund:',
        labelDetails: { detail :' 移除所有未建造完成的队列项目', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 44,
        detail :'移除所有未建造完成的队列项目',
        documentation :'不返还资源'
    },
    {
        label: 'highPriorityQueue',
        insertText: 'highPriorityQueue:',
        labelDetails: { detail :' 高优先级队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 45,
        detail :'高优先级队列',
        documentation :'默认为false.如果为true,则此操作将跳过队列中的所有其他低优先级操作.适用于fireTurret类动作.'
    },
    {
        label: 'canPlayerCancel',
        insertText: 'canPlayerCancel:',
        labelDetails: { detail :' 玩家可以取消', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 46,
        detail :'玩家可以取消',
        documentation :'玩家可以取消此动作.'
    },
    {
        label: 'whenBuilding_cannotMove',
        insertText: 'whenBuilding_cannotMove:',
        labelDetails: { detail :' 建造时无法移动', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 47,
        detail :'建造时无法移动',
        documentation :'执行操作准备时停止单位移动.适用于类似部署类动作.'
    },
    {
        label: 'whenBuilding_playAnimation',
        insertText: 'whenBuilding_playAnimation:',
        labelDetails: { detail :' 建造时播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 48,
        detail :'建造时播放动画',
        documentation :'准备此动作时,播放[animation]中自定义的动画.'
    },
    {
        label: 'whenBuilding_rotateTo',
        insertText: 'whenBuilding_rotateTo:',
        labelDetails: { detail :' 建造时旋转', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 49,
        detail :'建造时旋转',
        documentation :'准备此动作时,将单位主体旋转到该方向'
    },
    {
        label: 'whenBuilding_rotateTo_orBackwards',
        insertText: 'whenBuilding_rotateTo_orBackwards:',
        labelDetails: { detail :' 建造时旋转或反转', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 50,
        detail :'建造时旋转或反转',
        documentation :'如果为true,则当角度较小时,允许从whenBuilding_rotateTo旋转180度.'
    },
    {
        label: 'whenBuilding_rotateTo_waitTillRotated',
        insertText: 'whenBuilding_rotateTo_waitTillRotated:',
        labelDetails: { detail :' 建造时需等待旋转完成', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 51,
        detail :'建造时需等待旋转完成',
        documentation :'暂停准备的行为,直到旋转完成再继续.'
    },
    {
        label: 'whenBuilding_temporarilyConvertTo',
        insertText: 'whenBuilding_temporarilyConvertTo:',
        labelDetails: { detail :' 建造时临时转换为', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 52,
        detail :'建造时临时转换为',
        documentation :'准备此操作时临时转换为另一个单位.原始单位的操作将保留.'
    },
    {
        label: 'whenBuilding_temporarilyConvertTo_keepFields',
        insertText: 'whenBuilding_temporarilyConvertTo_keepFields:',
        labelDetails: { detail :' 建造时保留字段', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 53,
        detail :'建造时保留字段',
        documentation :'不要在使用whenbuilding_temporaryconvertto时更改这些字段(无论是从或到),这对setUnitStats很有用'
    },
    {
        label: 'whenBuilding_triggerAction',
        insertText: 'whenBuilding_triggerAction:',
        labelDetails: { detail :' 建造时触发动作', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 54,
        detail :'建造时触发动作',
        documentation :'准备时触发另一个动作'
    },
    {
        label: 'whenBuilding_rotateTo_aimAtActionTarget',
        insertText: 'whenBuilding_rotateTo_aimAtActionTarget:',
        labelDetails: { detail :' 建造时转向瞄准目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 55,
        detail :'建造时转向瞄准目标',
        documentation :'准备时转向瞄准目标,luke:测试版注意:在某些情况下是坏的'
    },
    {
        label: 'whenBuilding_rotateTo_rotateTurretX',
        insertText: 'whenBuilding_rotateTo_rotateTurretX:',
        labelDetails: { detail :' 建造时转向指定炮塔', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 56,
        detail :'建造时转向指定炮塔',
        documentation :'准备此操作时转向指定炮塔.'
    },
    {
        label: 'spawnEffectsOnQueue',
        insertText: 'spawnEffectsOnQueue:',
        labelDetails: { detail :' 队列产生效果', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 57,
        detail :'队列产生效果',
        documentation :'动作准备开始时产生的效果.'
    },
    {
        label: 'playSoundToPlayerOnQueue',
        insertText: 'playSoundToPlayerOnQueue:',
        labelDetails: { detail :' 队列播放声音', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 58,
        detail :'队列播放声音',
        documentation :'动作准备时播放给玩家的声音.'
    },
    {
        label: 'convertTo',
        insertText: 'convertTo:',
        labelDetails: { detail :' 转换成', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 59,
        detail :'转换成',
        documentation :'将你的单位转换为另一个单位.许多属性被保留.'
    },
    {
        label: 'convertTo_keepCurrentTags',
        insertText: 'convertTo_keepCurrentTags:',
        labelDetails: { detail :' 转换时保留标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 60,
        detail :'转换时保留标签',
        documentation :'将单位转换为另一个单位.并且保留拥有的标签.'
    },
    {
        label: 'convertTo_keepCurrentFields',
        insertText: 'convertTo_keepCurrentFields:',
        labelDetails: { detail :' 转换时保留字段', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 61,
        detail :'转换时保留字段',
        documentation :'转换时不要更改这些字段,这在setUnitStats中很有用'
    },
    {
        label: 'addEnergy',
        insertText: 'addEnergy:',
        labelDetails: { detail :' 增加能量', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 62,
        detail :'增加能量',
        documentation :'为单位增加能量.需要设置了energyMax,否则不起作用.(与addResources相同:energy = X)'
    },
    {
        label: 'addResources',
        insertText: 'addResources:',
        labelDetails: { detail :' 添加资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 63,
        detail :'添加资源',
        documentation :'操作完成后,添加这些资源.'
    },
    {
        label: 'addResourcesScaledByAIHandicaps',
        insertText: 'addResourcesScaledByAIHandicaps:',
        labelDetails: { detail :' 根据AI难度添加资源.', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 64,
        detail :'根据AI难度添加资源.',
        documentation :'与addResources类似,但根据AI难度级别增加或减少.比例:最简单40%,简单70%,中等100%,困难140%,很困难180%,不可能370%'
    },
    {
        label: 'addResourcesWithLogic',
        insertText: 'addResourcesWithLogic:',
        labelDetails: { detail :' 用逻辑添加资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 65,
        detail :'用逻辑添加资源',
        documentation :'与addResources类似,但允许对资源值使用逻辑'
    },
    {
        label: 'setResourcesWithLogic',
        insertText: 'setResourcesWithLogic:',
        labelDetails: { detail :' 用逻辑设置资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 66,
        detail :'用逻辑设置资源',
        documentation :'将目标资源设置为此值,而不是添加.小心对全局资源使用.'
    },
    {
        label: 'deleteSelf',
        insertText: 'deleteSelf:',
        labelDetails: { detail :' 删除自身', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 67,
        detail :'删除自身',
        documentation :'删除执行此操作的单位,没有死亡效果,不执行死亡触发.'
    },
    {
        label: 'resetCustomTimer',
        insertText: 'resetCustomTimer:',
        labelDetails: { detail :' 重置自定义计时器', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 68,
        detail :'重置自定义计时器',
        documentation :'重置自定义计时器,与self.customTimer()结合使用'
    },
    {
        label: 'setBodyRotation',
        insertText: 'setBodyRotation:',
        labelDetails: { detail :' 设置躯干旋转', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 69,
        detail :'设置躯干旋转',
        documentation :'支持动态值'
    },
    {
        label: 'setUnitStats',
        insertText: 'setUnitStats:',
        labelDetails: { detail :' 设置单位状态', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 70,
        detail :'设置单位状态',
        documentation :'字段值.允许在不转换的情况下动态更改选定的字段数量.支持=/+=/-=,动态数学/逻辑.'
    },
    {
        label: 'resetUnitStats',
        insertText: 'resetUnitStats:',
        labelDetails: { detail :' 重置单位状态', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 71,
        detail :'重置单位状态',
        documentation :'将setUnitStats所做的更改重置为基本值'
    },
    {
        label: 'playSoundAtUnit',
        insertText: 'playSoundAtUnit:',
        labelDetails: { detail :' 播放声音至单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 72,
        detail :'播放声音至单位',
        documentation :'动作结束时在当前位置播放声音.'
    },
    {
        label: 'playSoundGlobally',
        insertText: 'playSoundGlobally:',
        labelDetails: { detail :' 播放声音至全图', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 73,
        detail :'播放声音至全图',
        documentation :'播放全局声音,所有玩家都能听到.'
    },
    {
        label: 'playSoundToPlayer',
        insertText: 'playSoundToPlayer:',
        labelDetails: { detail :' 播放声音至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 74,
        detail :'播放声音至玩家',
        documentation :'播放声音,只有自己能听到.'
    },
    {
        label: 'fireTurretXAtGround',
        insertText: 'fireTurretXAtGround:',
        labelDetails: { detail :' 指定攻击地面炮塔', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 75,
        detail :'指定攻击地面炮塔',
        documentation :'使用此炮塔攻击玩家所指定的地面.'
    },
    {
        label: 'fireTurretXAtGround_withOffset',
        insertText: 'fireTurretXAtGround_withOffset:',
        labelDetails: { detail :' 指定攻击地面坐标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 76,
        detail :'指定攻击地面坐标',
        documentation :'攻击指定坐标所在地面,不需要手动选择,'
    },
    {
        label: 'fireTurretXAtGround_withProjectile',
        insertText: 'fireTurretXAtGround_withProjectile:',
        labelDetails: { detail :' 指定攻击地面抛射体', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 77,
        detail :'指定攻击地面抛射体',
        documentation :'设定使用的抛射体,如果不设置则为炮塔默认的抛射体.'
    },
    {
        label: 'fireTurretXAtGround_withTarget',
        insertText: 'fireTurretXAtGround_withTarget:',
        labelDetails: { detail :' 指定攻击目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 78,
        detail :'指定攻击目标',
        documentation :'炮塔瞄准指示的单位或标记的位置发射'
    },
    {
        label: 'fireTurretXAtGround_count',
        insertText: 'fireTurretXAtGround_count:',
        labelDetails: { detail :' 指定攻击地面数量', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 79,
        detail :'指定攻击地面数量',
        documentation :'设置发射的抛射体数量,默认为1'
    },
    {
        label: 'fireTurretXAtGround_onlyOverPassableTileOf',
        insertText: 'fireTurretXAtGround_onlyOverPassableTileOf:',
        labelDetails: { detail :' 指定攻击地面类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 80,
        detail :'指定攻击地面类型',
        documentation :'设置手动选择的地面需要满足这种运动方式.列表:NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER'
    },
    {
        label: 'spawnUnits',
        insertText: 'spawnUnits:',
        labelDetails: { detail :' 产生单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 81,
        detail :'产生单位',
        documentation :'产生指定单位,可用是多种.'
    },
    {
        label: 'spawnEffects',
        insertText: 'spawnEffects:',
        labelDetails: { detail :' 产生效果', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 82,
        detail :'产生效果',
        documentation :'产生指定效果'
    },
    {
        label: 'produceUnits',
        insertText: 'produceUnits:',
        labelDetails: { detail :' 生产单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 83,
        detail :'生产单位',
        documentation :'类似spawnUnits,但是单位像正常生产一样,并获得路径的移动.1.13只对非建筑物生成的单位有效.'
    },
    {
        label: 'offsetSelfAbsolute',
        insertText: 'offsetSelfAbsolute:',
        labelDetails: { detail :' 自身位置偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 84,
        detail :'自身位置偏移',
        documentation :'使用时将修改单位当前位置,以单位为中心的绝对坐标.'
    },
    {
        label: 'addUnitsIntoTransport',
        insertText: 'addUnitsIntoTransport:',
        labelDetails: { detail :' 添加单位到载具', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 85,
        detail :'添加单位到载具',
        documentation :'将单位添加到运输槽中,在添加之前会检查空间是否够.'
    },
    {
        label: 'deleteNumUnitsFromTransport',
        insertText: 'deleteNumUnitsFromTransport:',
        labelDetails: { detail :' 从载具中删除单位数', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 86,
        detail :'从载具中删除单位数',
        documentation :'从载具中删除指定数量单位.'
    },
    {
        label: 'deleteNumUnitsFromTransport_onlyWithTags',
        insertText: 'deleteNumUnitsFromTransport_onlyWithTags:',
        labelDetails: { detail :' 从载具删除带标签单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 87,
        detail :'从载具删除带标签单位',
        documentation :'从载具中删除具有此标签的指定数量单位.'
    },
    {
        label: 'startUnloadingTransport',
        insertText: 'startUnloadingTransport:',
        labelDetails: { detail :' 开始卸载单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 88,
        detail :'开始卸载单位',
        documentation :'开始卸载单位'
    },
    {
        label: 'forceUnloadTransportNow',
        insertText: 'forceUnloadTransportNow:',
        labelDetails: { detail :' 强制卸载单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 89,
        detail :'强制卸载单位',
        documentation :'立即强制卸载单位'
    },
    {
        label: 'forceUnloadTransportNow_onlyOnSlot',
        insertText: 'forceUnloadTransportNow_onlyOnSlot:',
        labelDetails: { detail :' 强制卸载指定槽位单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 90,
        detail :'强制卸载指定槽位单位',
        documentation :'强制卸载指定槽位单位'
    },
    {
        label: 'clearAllWaypoints',
        insertText: 'clearAllWaypoints:',
        labelDetails: { detail :' 清除所有路径点', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 91,
        detail :'清除所有路径点',
        documentation :'清除当前所有路径.'
    },
    {
        label: 'clearActiveWaypoint',
        insertText: 'clearActiveWaypoint:',
        labelDetails: { detail :' 清除当前路径点', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 92,
        detail :'清除当前路径点',
        documentation :'清除当前路径,也就是停止当前动作,执行下一个路径点.'
    },
    {
        label: 'addWaypoint_type',
        insertText: 'addWaypoint_type:',
        labelDetails: { detail :' 添加路径点类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 93,
        detail :'添加路径点类型',
        documentation :'填入添加的路径点类型.'
    },
    {
        label: 'addWaypoint_unitType',
        insertText: 'addWaypoint_unitType:',
        labelDetails: { detail :' 添加路径点所建造的单位类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 94,
        detail :'添加路径点所建造的单位类型',
        documentation :'用于让当前单位去建造指定单位.仅用于addWaypoint_type:build'
    },
    {
        label: 'addWaypoint_prepend',
        insertText: 'addWaypoint_prepend:',
        labelDetails: { detail :' 添加路径点序列位置', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 95,
        detail :'添加路径点序列位置',
        documentation :'添加到路径点的开头或结尾'
    },
    {
        label: 'addWaypoint_triggerActionIfFailed',
        insertText: 'addWaypoint_triggerActionIfFailed:',
        labelDetails: { detail :' 添加路径点失败触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 96,
        detail :'添加路径点失败触发',
        documentation :'如果target_nearestUnit找不到匹配项,因此无法添加路径点,则触发此操作'
    },
    {
        label: 'addWaypoint_triggerActionIfMatched',
        insertText: 'addWaypoint_triggerActionIfMatched:',
        labelDetails: { detail :' 添加路径点匹配触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 97,
        detail :'添加路径点匹配触发',
        documentation :'如果操作添加的路径点是有效的,则执行指定操作.'
    },
    {
        label: 'addWaypoint_maxTime',
        insertText: 'addWaypoint_maxTime:',
        labelDetails: { detail :' 添加路径点检索时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 98,
        detail :'添加路径点检索时间',
        documentation :'如果此路径点这么久还无法执行完成,则取消.'
    },
    {
        label: 'addWaypoint_target_nearestUnit_tagged',
        insertText: 'addWaypoint_target_nearestUnit_tagged:',
        labelDetails: { detail :' 添加路径点检索标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 99,
        detail :'添加路径点检索标签',
        documentation :'添加的路径点目标为靠近有此标签的单位.'
    },
    {
        label: 'addWaypoint_target_nearestUnit_team',
        insertText: 'addWaypoint_target_nearestUnit_team:',
        labelDetails: { detail :' 添加路径点靠近队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 100,
        detail :'添加路径点靠近队伍',
        documentation :'添加的路径点目标需要的所属方:own|notOwn|neutral|allyNotOwn|ally|enemy|any'
    },
    {
        label: 'addWaypoint_target_nearestUnit_maxRange',
        insertText: 'addWaypoint_target_nearestUnit_maxRange:',
        labelDetails: { detail :' 添加路径点检索范围', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 101,
        detail :'添加路径点检索范围',
        documentation :'添加的路径点靠近某目标时考虑的最大范围.'
    },
    {
        label: 'addWaypoint_target_mapMustBeReachable',
        insertText: 'addWaypoint_target_mapMustBeReachable:',
        labelDetails: { detail :' 添加路径点路径可达', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 102,
        detail :'添加路径点路径可达',
        documentation :'添加的路径点靠近某目标时必须是有可到达路径的.'
    },
    {
        label: 'addWaypoint_target_fromReference',
        insertText: 'addWaypoint_target_fromReference:',
        labelDetails: { detail :' 添加路径点来自参考', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 103,
        detail :'添加路径点来自参考',
        documentation :'添加路径点来自单位信息引用.'
    },
    {
        label: 'addWaypoint_position_offsetFromSelf',
        insertText: 'addWaypoint_position_offsetFromSelf:',
        labelDetails: { detail :' 添加路径点坐标偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 104,
        detail :'添加路径点坐标偏移',
        documentation :'添加的路径点相对于自身偏移的坐标.'
    },
    {
        label: 'addWaypoint_position_fromAction',
        insertText: 'addWaypoint_position_fromAction:',
        labelDetails: { detail :' 添加路径点动作坐标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 105,
        detail :'添加路径点动作坐标',
        documentation :'将当前动作指定的坐标添加进路径序列中.'
    },
    {
        label: 'addWaypoint_position_randomOffsetFromSelf',
        insertText: 'addWaypoint_position_randomOffsetFromSelf:',
        labelDetails: { detail :' 添加路径点随机偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 106,
        detail :'添加路径点随机偏移',
        documentation :'添加坐标进路径点时的随机值.'
    },
    {
        label: 'addWaypoint_position_relativeOffsetFromSelf',
        insertText: 'addWaypoint_position_relativeOffsetFromSelf:',
        labelDetails: { detail :' 添加路径点相对偏移', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 107,
        detail :'添加路径点相对偏移',
        documentation :'添加路径点位置相对自身偏移量.'
    },
    {
        label: 'addWaypoint_target_randomUnit_tagged',
        insertText: 'addWaypoint_target_randomUnit_tagged:',
        labelDetails: { detail :' 添加指定标签的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 108,
        detail :'添加指定标签的随机单位',
        documentation :'添加路径点单位为指定标签的随机单位'
    },
    {
        label: 'addWaypoint_target_randomUnit_team',
        insertText: 'addWaypoint_target_randomUnit_team:',
        labelDetails: { detail :' 添加指定队伍的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 109,
        detail :'添加指定队伍的随机单位',
        documentation :'添加路径点单位为指定队伍的随机单位'
    },
    {
        label: 'addWaypoint_target_randomUnit_maxRange',
        insertText: 'addWaypoint_target_randomUnit_maxRange:',
        labelDetails: { detail :' 添加指定范围的随机单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 110,
        detail :'添加指定范围的随机单位',
        documentation :'添加路径点单位为指定范围的随机单位'
    },
    {
        label: 'addAllActionCooldownsTime',
        insertText: 'addAllActionCooldownsTime:',
        labelDetails: { detail :' 增加所有动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 111,
        detail :'增加所有动作冷却时间',
        documentation :'增加所有action的冷却时间.'
    },
    {
        label: 'addAllActionCooldownsFor',
        insertText: 'addAllActionCooldownsFor:',
        labelDetails: { detail :' 对于所有动作而言增加冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 112,
        detail :'对于所有动作而言增加冷却时间',
        documentation :''
    },
    {
        label: 'addActionCooldownTime',
        insertText: 'addActionCooldownTime:',
        labelDetails: { detail :' 增加动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 113,
        detail :'增加动作冷却时间',
        documentation :'增加动作冷却时间,制作先充能再使用的action更加容易了.'
    },
    {
        label: 'addActionCooldownApplyToActions',
        insertText: 'addActionCooldownApplyToActions:',
        labelDetails: { detail :' 添加指定动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 114,
        detail :'添加指定动作冷却时间',
        documentation :'设置addActionCooldownTime的目标.默认情况下是当前操作本身.'
    },
    {
        label: 'clearAllActionCooldowns',
        insertText: 'clearAllActionCooldowns:',
        labelDetails: { detail :' 清除所有动作冷却时间', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 115,
        detail :'清除所有动作冷却时间',
        documentation :'清除所有动作冷却时间,使其立即可用.'
    },
    {
        label: 'playAnimation',
        insertText: 'playAnimation:',
        labelDetails: { detail :' 播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 116,
        detail :'播放动画',
        documentation :'播放[animation_xx]类型动画.'
    },
    {
        label: 'playAnimationIfNotPlaying',
        insertText: 'playAnimationIfNotPlaying:',
        labelDetails: { detail :' 如果未播放动画则播放动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 117,
        detail :'如果未播放动画则播放动画',
        documentation :'如果没有播放该动画,就播放该动画'
    },
    {
        label: 'finishPlayingLastAnimation',
        insertText: 'finishPlayingLastAnimation:',
        labelDetails: { detail :' 完成最会动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 118,
        detail :'完成最会动画',
        documentation :'完成最后一个动画,包括融合'
    },
    {
        label: 'stopLastAnimation',
        insertText: 'stopLastAnimation:',
        labelDetails: { detail :' 停止最后动画', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 119,
        detail :'停止最后动画',
        documentation :'停止最后一个动画,跳过融合'
    },
    {
        label: 'switchToNeutralTeam',
        insertText: 'switchToNeutralTeam:',
        labelDetails: { detail :' 切换至中立队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 120,
        detail :'切换至中立队伍',
        documentation :'将队伍更改为中立.该队伍与其他所有队伍结盟.除非使用[core]stayNeutral:true,否则它将被附近的单位捕获.'
    },
    {
        label: 'switchToAggressiveTeam',
        insertText: 'switchToAggressiveTeam:',
        labelDetails: { detail :' 切换至侵略性队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 121,
        detail :'切换至侵略性队伍',
        documentation :'将此单位队伍更改为侵略性的内置队伍.不能被其它单位捕获.'
    },
    {
        label: 'switchToTeam',
        insertText: 'switchToTeam:',
        labelDetails: { detail :' 切换至特定队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 122,
        detail :'切换至特定队伍',
        documentation :'切换到小队id.从0开始.(中立-1,敌对中立-2)'
    },
    {
        label: 'takeResources',
        insertText: 'takeResources:',
        labelDetails: { detail :' 提取资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 123,
        detail :'提取资源',
        documentation :'提取资源,至少写一种资源.'
    },
    {
        label: 'takeResources_includeUnitsInTransport',
        insertText: 'takeResources_includeUnitsInTransport:',
        labelDetails: { detail :' 提取资源包括载具内', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 124,
        detail :'提取资源包括载具内',
        documentation :'提取资源,包括载具内单位.'
    },
    {
        label: 'takeResources_includeParent',
        insertText: 'takeResources_includeParent:',
        labelDetails: { detail :' 提取资源包括父单位或载具', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 125,
        detail :'提取资源包括父单位或载具',
        documentation :'提取资源,包括父单位和运输载具.'
    },
    {
        label: 'takeResources_includeReference',
        insertText: 'takeResources_includeReference:',
        labelDetails: { detail :' 提取资源包括引用', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 126,
        detail :'提取资源包括引用',
        documentation :'提取资源包括指定单位.'
    },
    {
        label: 'takeResources_includeUnitsWithinRange',
        insertText: 'takeResources_includeUnitsWithinRange:',
        labelDetails: { detail :' 提取资源范围', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 127,
        detail :'提取资源范围',
        documentation :'提取资源,在此范围内.'
    },
    {
        label: 'takeResources_includeUnitsWithinRange_team',
        insertText: 'takeResources_includeUnitsWithinRange_team:',
        labelDetails: { detail :' 提取资源队伍', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 128,
        detail :'提取资源队伍',
        documentation :'提取在此范围内队伍的资源.与“includeUnitsWithinRange”一起使用,默认为own.可以是:own|notOwn|neutral|allyNotOwn|ally|enemy|any'
    },
    {
        label: 'takeResources_excludeUnitsWithoutTags',
        insertText: 'takeResources_excludeUnitsWithoutTags:',
        labelDetails: { detail :' 提取资源标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 129,
        detail :'提取资源标签',
        documentation :'提取资源,但排除没有此标签的单位.'
    },
    {
        label: 'takeResources_excludeUnitsWithTheseResources',
        insertText: 'takeResources_excludeUnitsWithTheseResources:',
        labelDetails: { detail :' 提取资源排除资源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 130,
        detail :'提取资源排除资源',
        documentation :'提取资源,不包括拥有这些资源的单位.'
    },
    {
        label: 'takeResources_excludeUnitsWithoutAllResources',
        insertText: 'takeResources_excludeUnitsWithoutAllResources:',
        labelDetails: { detail :' 提取资源排除不足', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 131,
        detail :'提取资源排除不足',
        documentation :'提取资源,排除缺乏资源者.默认为true.'
    },
    {
        label: 'takeResources_triggerActionIfAnyCollected',
        insertText: 'takeResources_triggerActionIfAnyCollected:',
        labelDetails: { detail :' 提取资源成功触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 132,
        detail :'提取资源成功触发',
        documentation :'如果有任何收集,则触发动作.'
    },
    {
        label: 'takeResources_triggerActionIfNoneCollected',
        insertText: 'takeResources_triggerActionIfNoneCollected:',
        labelDetails: { detail :' 提取资源失败触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 133,
        detail :'提取资源失败触发',
        documentation :'如果没有收集,则触发操作.'
    },
    {
        label: 'takeResources_discardCollected',
        insertText: 'takeResources_discardCollected:',
        labelDetails: { detail :' 提取资源删除', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 134,
        detail :'提取资源删除',
        documentation :'从目标中获取资源,但不向自身添加也就是删除.'
    },
    {
        label: 'takeResources_keepResourcesOnTarget',
        insertText: 'takeResources_keepResourcesOnTarget:',
        labelDetails: { detail :' 提取资源克隆', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 135,
        detail :'提取资源克隆',
        documentation :'不从目标添加或删除资源.但克隆资源.与takeResources_discardCollected和takeResources_triggerActionIfAnyCollected一起使用以创建资源检测器.'
    },
    {
        label: 'takeResources_maxUnits',
        insertText: 'takeResources_maxUnits:',
        labelDetails: { detail :' 提取资源目标量', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 136,
        detail :'提取资源目标量',
        documentation :'最多从多少单位提取资源,默认为1.'
    },
    {
        label: 'takeResources_directTransferStoppingAtZero',
        insertText: 'takeResources_directTransferStoppingAtZero:',
        labelDetails: { detail :' 提取资源直接转换至零', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 137,
        detail :'提取资源直接转换至零',
        documentation :'提取资源直接转换至0,用于完全转换.如果目标上的资源少于转帐金额,则只有剩余的资源将被转帐.不支持使用其他一些takeResources_*代码'
    },
    {
        label: 'takeResources_searchOnly',
        insertText: 'takeResources_searchOnly:',
        labelDetails: { detail :' 获取资源仅供搜索', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 138,
        detail :'获取资源仅供搜索',
        documentation :'提取资源完全用于搜索范围内的单位而不是改动资源,与forEach配合使用'
    },
    {
        label: 'takeResources_saveFirstUnitToCustomTarget1',
        insertText: 'takeResources_saveFirstUnitToCustomTarget1:',
        labelDetails: { detail :' 提取资源保存第一个单元自定义目标1', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 139,
        detail :'提取资源保存第一个单元自定义目标1',
        documentation :'提取资源保存第一个单元一定是自定义目标1'
    },
    {
        label: 'takeResources_saveFirstUnitToCustomTarget2',
        insertText: 'takeResources_saveFirstUnitToCustomTarget2:',
        labelDetails: { detail :' 提取资源保存第一个单元自定义目标2', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 140,
        detail :'提取资源保存第一个单元自定义目标2',
        documentation :'提取资源保存第一个单元一定是自定义目标2'
    },
    {
        label: 'convertResource_from',
        insertText: 'convertResource_from:',
        labelDetails: { detail :' 转换资源来源', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 141,
        detail :'转换资源来源',
        documentation :'将此资源转换资源为别的资源.'
    },
    {
        label: 'convertResource_to',
        insertText: 'convertResource_to:',
        labelDetails: { detail :' 转换资源至', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 142,
        detail :'转换资源至',
        documentation :'将资源转后为此资源,要提供的自定义资源的名称'
    },
    {
        label: 'convertResource_minAmount',
        insertText: 'convertResource_minAmount:',
        labelDetails: { detail :' 转换资源至少', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 143,
        detail :'转换资源至少',
        documentation :'如果来源中资源小于该数量,则跳过.默认为0.在大多数情况下可能不需要.'
    },
    {
        label: 'convertResource_maxAmount',
        insertText: 'convertResource_maxAmount:',
        labelDetails: { detail :' 转换资源至多', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 144,
        detail :'转换资源至多',
        documentation :'“来源资源”和“转换后资源”之间的最大转化量'
    },
    {
        label: 'convertResource_multiplyAmountBy',
        insertText: 'convertResource_multiplyAmountBy:',
        labelDetails: { detail :' 转换资源倍率', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 145,
        detail :'转换资源倍率',
        documentation :'资源转换倍率,不影响提取的数量.默认值为1.'
    },
    {
        label: 'resourceAmount',
        insertText: 'resourceAmount:',
        labelDetails: { detail :' 资源类型', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 146,
        detail :'资源类型',
        documentation :'自定义资源的名称,使用以下3个键进行设置.所有键都是可选的,可以一起使用.'
    },
    {
        label: 'resourceAmount_setValue',
        insertText: 'resourceAmount_setValue:',
        labelDetails: { detail :' 资源类型设置数值', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 147,
        detail :'资源类型设置数值',
        documentation :'设置此资源的绝对值,忽略资源的当前值.默认忽略.'
    },
    {
        label: 'resourceAmount_addOtherResource',
        insertText: 'resourceAmount_addOtherResource:',
        labelDetails: { detail :' 资源类型添加至', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 148,
        detail :'资源类型添加至',
        documentation :'添加到其中的另一个自定义资源的名称.可以不使用resourceAmount_setValue,只是添加资源.或者使用resourceAmount_setValue:0复制一个资源值.'
    },
    {
        label: 'resourceAmount_multiplyBy',
        insertText: 'resourceAmount_multiplyBy:',
        labelDetails: { detail :' 资源类型乘数', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 149,
        detail :'资源类型乘数',
        documentation :'默认值为1.将当前资源值乘上此值.'
    },
    {
        label: 'attachments_addNewUnits',
        insertText: 'attachments_addNewUnits:',
        labelDetails: { detail :' 附属添加单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 150,
        detail :'附属添加单位',
        documentation :'添加单位作为其子单位,需要定义附属位置.'
    },
    {
        label: 'attachments_deleteNumUnits',
        insertText: 'attachments_deleteNumUnits:',
        labelDetails: { detail :' 附属删除单位数', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 151,
        detail :'附属删除单位数',
        documentation :'删除单位数量'
    },
    {
        label: 'attachments_onlyOnSlots',
        insertText: 'attachments_onlyOnSlots:',
        labelDetails: { detail :' 附属添加于槽位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 152,
        detail :'附属添加于槽位',
        documentation :'只将附属物添加于特定的槽位'
    },
    {
        label: 'disconnectFromParent',
        insertText: 'disconnectFromParent:',
        labelDetails: { detail :' 脱离父单位', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 153,
        detail :'脱离父单位',
        documentation :'用于子单位脱离父单位'
    },
    {
        label: 'attachments_unload',
        insertText: 'attachments_unload:',
        labelDetails: { detail :' 卸载附属', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 154,
        detail :'卸载附属',
        documentation :'卸载所有附属.可以与attachments_onlyonslot一起使用.与运输单位卸载相同'
    },
    {
        label: 'attachments_disconnect',
        insertText: 'attachments_disconnect:',
        labelDetails: { detail :' 附属断开连接', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 155,
        detail :'附属断开连接',
        documentation :'断开所有现在所在位置的附属.可以与attachments_onlyonslot一起使用.'
    },
    {
        label: 'temporarilyAddTags',
        insertText: 'temporarilyAddTags:',
        labelDetails: { detail :' 临时标签添加', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 156,
        detail :'临时标签添加',
        documentation :'将标签添加到单位,直到转换或重置.'
    },
    {
        label: 'temporarilyRemoveTags',
        insertText: 'temporarilyRemoveTags:',
        labelDetails: { detail :' 临时标签删除', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 157,
        detail :'临时标签删除',
        documentation :'从单位上删除标签,直到将其转换或重置.'
    },
    {
        label: 'resetToDefaultTags',
        insertText: 'resetToDefaultTags:',
        labelDetails: { detail :' 标签重置', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 158,
        detail :'标签重置',
        documentation :'重置为默认标签.'
    },
    {
        label: 'addGlobalTeamTags',
        insertText: 'addGlobalTeamTags:',
        labelDetails: { detail :' 添加全局标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 159,
        detail :'添加全局标签',
        documentation :'为玩家的团队添加此全局标签.与self.globalTeamTags()一起使用可创建解锁和升级.'
    },
    {
        label: 'removeGlobalTeamTags',
        insertText: 'removeGlobalTeamTags:',
        labelDetails: { detail :' 移除全局标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 160,
        detail :'移除全局标签',
        documentation :'从玩家队伍中删除此全局标签.'
    },
    {
        label: 'showMessageToPlayer',
        insertText: 'showMessageToPlayer:',
        labelDetails: { detail :' 发送消息至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 161,
        detail :'发送消息至玩家',
        documentation :'向玩家个人发送信息.自己发给自己.'
    },
    {
        label: 'showMessageToPlayer_language',
        insertText: 'showMessageToPlayer_language:',
        labelDetails: { detail :' 发送消息至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 162,
        detail :'发送消息至玩家',
        documentation :'向玩家个人发送信息.自己发给自己.多语言版.注意:这种格式是支持几乎所有字符串显示给玩家,即使当引用不显示它'
    },
    {
        label: 'showMessageToAllPlayers',
        insertText: 'showMessageToAllPlayers:',
        labelDetails: { detail :' 发送消息至所有', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 163,
        detail :'发送消息至所有',
        documentation :'向所有玩家发送消息.'
    },
    {
        label: 'showMessageToAllEnemyPlayers',
        insertText: 'showMessageToAllEnemyPlayers:',
        labelDetails: { detail :' 发送消息给所有敌人', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 164,
        detail :'发送消息给所有敌人',
        documentation :'发送消息给所有敌人.'
    },
    {
        label: 'showQuickWarLogToPlayer',
        insertText: 'showQuickWarLogToPlayer:',
        labelDetails: { detail :' 发送战争快报至玩家', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 165,
        detail :'发送战争快报至玩家',
        documentation :'向玩家个人发送战争快报.(在左下角)'
    },
    {
        label: 'showQuickWarLogToAllPlayers',
        insertText: 'showQuickWarLogToAllPlayers:',
        labelDetails: { detail :' 发送战争快报至所有', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 166,
        detail :'发送战争快报至所有',
        documentation :'向所有玩家发送战争快报.(在左下角)'
    },
    {
        label: 'debugMessage',
        insertText: 'debugMessage:',
        labelDetails: { detail :' 排错信息', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 167,
        detail :'排错信息',
        documentation :'仅在启用调试模式的沙盒模式中显示.'
    },
    {
        label: 'setHeight',
        insertText: 'setHeight:',
        labelDetails: { detail :' 设置高度', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 168,
        detail :'设置高度',
        documentation :'新增设置高度,可以使用逻辑'
    },
    {
        label: 'transportTargetNow',
        insertText: 'transportTargetNow:',
        labelDetails: { detail :' 主动装运目标', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 169,
        detail :'主动装运目标',
        documentation :'立即主动装载目标(1.15版本无法正常使用,会导致单位装载自己)'
    },
    {
        label: 'id',
        insertText: 'id:',
        labelDetails: { detail :' 编号', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 170,
        detail :'编号',
        documentation :'用于在单位转换时的连接被加入队列的动作'
    },
    {
        label: 'fireTurretXAtGround_showGuideDecals',
        insertText: 'fireTurretXAtGround_showGuideDecals:',
        labelDetails: { detail :' 指定攻击地面时显示贴花', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 171,
        detail :'指定攻击地面时显示贴花',
        documentation :'当选择发射位置时显示贴花(参考核抛射体选择发射地点时长按显示)'
    },
    {
        label: 'aiTags',
        insertText: 'aiTags:',
        labelDetails: { detail :' AI的标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 172,
        detail :'AI的标签',
        documentation :'随便填一个得了(专门给AI用的)'
    },
    {
        label: 'aiUse',
        insertText: 'aiUse:',
        labelDetails: { detail :' AI对该行动的使用方式', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 173,
        detail :'AI对该行动的使用方式',
        documentation :'可填:auto(自动),launch(发射),launchAmmo(增加弹药),disabled(残缺),upGrade(升级),movementChange(运动改变),sameAsBuilding(与建筑物相同)'
    },
    {
        label: 'teleportTo',
        insertText: 'teleportTo:',
        labelDetails: { detail :' 传送到', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 174,
        detail :'传送到',
        documentation :'简称tp. 立即传送到单位参考的位置,性能最好的位移手段'
    },
    {
        label: 'setUnitMemory',
        insertText: 'setUnitMemory:',
        labelDetails: { detail :' 设置单位内存', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 175,
        detail :'设置单位内存',
        documentation :'简称setM. 为内存变量赋值,可以使用动态值.使用内存变量需要先在core节定义.'
    },
    {
        label: 'setCustomTarget1',
        insertText: 'setCustomTarget1:',
        labelDetails: { detail :' 设置自定义目标1', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 176,
        detail :'设置自定义目标1',
        documentation :'对ct1快捷赋值'
    },
    {
        label: 'setCustomTarget2',
        insertText: 'setCustomTarget2:',
        labelDetails: { detail :' 设置自定义目标2', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 177,
        detail :'设置自定义目标2',
        documentation :'对ct2快捷赋值'
    },
    {
        label: 'swapCustomTarget1And2',
        insertText: 'swapCustomTarget1And2:',
        labelDetails: { detail :' 交换自定义目标1和2', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 178,
        detail :'交换自定义目标1和2',
        documentation :'对易ct1和ct2的值'
    },
    {
        label: 'shrinkArrays',
        insertText: 'shrinkArrays:',
        labelDetails: { detail :' 收缩数组', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 179,
        detail :'收缩数组',
        documentation :'在数组中清除一些不需要的值并向前收缩(例如:unit[]中的死亡或是被删除的单位(以及null),float[]/number[]中的0)'
    },
    {
        label: 'sendMessageTo',
        insertText: 'sendMessageTo:',
        labelDetails: { detail :' 发送信息至', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 180,
        detail :'发送信息至',
        documentation :'简称sendM. 类似创建一个自定义事件'
    },
    {
        label: 'sendMessageWithData',
        insertText: 'sendMessageWithData:',
        labelDetails: { detail :' 发送数据', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 181,
        detail :'发送数据',
        documentation :'简称sendMD. 让自定义事件可以携带数据,1.15不支持发送整个数组'
    },
    {
        label: 'sendMessageWithTags',
        insertText: 'sendMessageWithTags:',
        labelDetails: { detail :' 信息标签', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 182,
        detail :'信息标签',
        documentation :'简称sendMT. 与newMessage(withTag=\'\')结合使用,类似为自定义事件命名'
    },
    {
        label: 'autoTrigger',
        insertText: 'autoTrigger:',
        labelDetails: { detail :' 自动触发', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 183,
        detail :'自动触发',
        documentation :'简称autoT,满足条件时触发该action,触发间隔可在core节调整'
    },
    {
        label: 'requireConditional',
        insertText: 'requireConditional:',
        labelDetails: { detail :' 需要条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 184,
        detail :'需要条件',
        documentation :'简称rC,如果结果为false,则跳过此操作所有结果.'
    },
    {
        label: 'autoTriggerCheckRate',
        insertText: 'autoTriggerCheckRate:',
        labelDetails: { detail :' 触发检查频率', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 185,
        detail :'触发检查频率',
        documentation :'同core节的触发检查频率'
    },
    {
        label: 'autoTriggerOnEvent',
        insertText: 'autoTriggerOnEvent:',
        labelDetails: { detail :' 自动触发事件', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 186,
        detail :'自动触发事件',
        documentation :'简称autoE,基于事件触发,事件有较短的有效时间'
    },
    {
        label: 'autoTriggerOnEventRecursionLimit',
        insertText: 'autoTriggerOnEventRecursionLimit:',
        labelDetails: { detail :' 自动触发事件递归限制(默认为4)', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 187,
        detail :'自动触发事件递归限制(默认为4)',
        documentation :'同一个事件重复触发的限制次数,默认为4'
    },
    {
        label: 'alsoTriggerAction',
        insertText: 'alsoTriggerAction:',
        labelDetails: { detail :' 也触发行动', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 188,
        detail :'也触发行动',
        documentation :'简称alsoT,该action被执行后执行另一个action'
    },
    {
        label: 'alsoQueueAction',
        insertText: 'alsoQueueAction:',
        labelDetails: { detail :' 添加进队列', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 189,
        detail :'添加进队列',
        documentation :'简称alsoQ,将另一个action添加到队列中,类似于异步执行,注意队列只能单线程'
    },
    {
        label: 'buildSpeed',
        insertText: 'buildSpeed:',
        labelDetails: { detail :' 队列速度', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 190,
        detail :'队列速度',
        documentation :'决定了当该action被添加到队列时到被执行的时间.'
    },
    {
        label: 'alsoTriggerOrQueueActionConditional',
        insertText: 'alsoTriggerOrQueueActionConditional:',
        labelDetails: { detail :' 也执行队列或需执行条件', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 191,
        detail :'也执行队列或需执行条件',
        documentation :'简称alsoTQRC如果条件不满足则跳过alsoT和alsoQ.'
    },
    {
        label: 'alsoTriggerActionRepeat',
        insertText: 'alsoTriggerActionRepeat:',
        labelDetails: { detail :' 重复触发行动次数', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 192,
        detail :'重复触发行动次数',
        documentation :'简称alsoTR. 每次重复执行时自动index++,用于创建循环或处理数组.'
    },
    {
        label: 'alsoTriggerOrQueueActionWithTarget',
        insertText: 'alsoTriggerOrQueueActionWithTarget:',
        labelDetails: { detail :' 回调传入单位参考', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 193,
        detail :'回调传入单位参考',
        documentation :'简称alsoTQWT. 将被触发的action的thisActionTarget传入该值.'
    },
    {
        label: 'takeResources_triggerActionForEach',
        insertText: 'takeResources_triggerActionForEach:',
        labelDetails: { detail :' 为提取资源找到的每个目标单位调用这个动作', description: '[action]' },
        kind: CompletionItemKind.Text,
        data: 194,
        detail :'为提取资源找到的每个目标单位调用这个动作',
        documentation :'简称forEach. 遍历提取资源搜索到的每个单位,每次重复执行时自动index++并将thisActionTarget设为该单位并触发填入的action. 该代码功能十分强大,常见于复杂机制'
    },
];