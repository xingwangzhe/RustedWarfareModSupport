import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const RESOURCE: CompletionItem[] = [
    {
        label: 'stackHorizontal',
        insertText: 'stackHorizontal:',
        labelDetails: { detail :' 堆叠水平', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'堆叠水平',
        documentation :'定义与玩家所有单位共享的新资源,其工作方式类似于内置的资金.添加到all-units.template(位于mod根目录)'
    },
    {
        label: 'displayName',
        insertText: 'displayName:',
        labelDetails: { detail :' 显示名称', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'显示名称',
        documentation :'用户界面中此资源的名称'
    },
    {
        label: 'displayNameShort',
        insertText: 'displayNameShort:',
        labelDetails: { detail :' 显示短名称', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'显示短名称',
        documentation :'在较小的UI上显示的文本(如action的悬浮文本)默认为displayName'
    },
    {
        label: 'hidden',
        insertText: 'hidden:',
        labelDetails: { detail :' 隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'隐藏',
        documentation :'向玩家隐藏此资源'
    },
    {
        label: 'priority',
        insertText: 'priority:',
        labelDetails: { detail :' 优先级', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'优先级',
        documentation :'如果多个mod单元中定义了同名的资源,则使用具有最高优先级的displayName/displayColor'
    },
    {
        label: 'displayColor',
        insertText: 'displayColor:',
        labelDetails: { detail :' 显示颜色', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'显示颜色',
        documentation :'颜色,可以是十六进制,带有可选的alpha'
    },
    {
        label: 'displayRoundedDown',
        insertText: 'displayRoundedDown:',
        labelDetails: { detail :' 显示为整数', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'显示为整数',
        documentation :'对资源进行舍入显示为整数.'
    },
    {
        label: 'displayWhenZero',
        insertText: 'displayWhenZero:',
        labelDetails: { detail :' 为零时显示', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'为零时显示',
        documentation :'资源为零时也显示.'
    },
    {
        label: 'iconImageUseInText',
        insertText: 'iconImageUseInText:',
        labelDetails: { detail :' 在动作(action)的描述中显示资源图标', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'在动作(action)的描述中显示资源图标',
        documentation :'默认为true'
    },
    {
        label: 'iconImage',
        insertText: 'iconImage:',
        labelDetails: { detail :' 图标', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'图标',
        documentation :'自定义该资源的象征图像'
    },
    {
        label: 'displayNameHideWhenIconShownInText',
        insertText: 'displayNameHideWhenIconShownInText:',
        labelDetails: { detail :' 显示名称在文本中显示图标时隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'显示名称在文本中显示图标时隐藏',
        documentation :'(默认为false) - 有助于缩短说明文本'
    },
    {
        label: 'displayNameHideWhenIconShownInHUD',
        insertText: 'displayNameHideWhenIconShownInHUD:',
        labelDetails: { detail :' 文本显示名称在HUD中显示图标时隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'文本显示名称在HUD中显示图标时隐藏',
        documentation :'默认为false'
    },
    {
        label: 'displayColorUseInText',
        insertText: 'displayColorUseInText:',
        labelDetails: { detail :' 在动作(action)的描述中显示资源颜色', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'在动作(action)的描述中显示资源颜色',
        documentation :'默认为true'
    },
    {
        label: 'appendResourceInHUD',
        insertText: 'appendResourceInHUD:',
        labelDetails: { detail :' 在HUD中追加资源', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'在HUD中追加资源',
        documentation :'使用后,在游戏界面中这个资源值将会叠在目标资源值的后面,并且继承目标资源的颜色和图标.这个资源值后面也能继续叠加其它资源值'
    },
    {
        label: 'displayPRefixInHUD',
        insertText: 'displayPRefixInHUD:',
        labelDetails: { detail :' 在HUD中显示前缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'在HUD中显示前缀',
        documentation :'在资源数值前显示的文本,会替换掉资源原本的名称以及冒号,和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容'
    },
    {
        label: 'displayPostfixInHUD',
        insertText: 'displayPostfixInHUD:',
        labelDetails: { detail :' 在HUD中显示后缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'在HUD中显示后缀',
        documentation :'在资源数值之后显示的文本'
    },
    {
        label: 'displayTextAppendResource',
        insertText: 'displayTextAppendResource:',
        labelDetails: { detail :' 显示附加资源文本', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'显示附加资源文本',
        documentation :''
    },
    {
        label: 'displayTextAppendResourceWithGap',
        insertText: 'displayTextAppendResourceWithGap:',
        labelDetails: { detail :' 显示具有间隙的附加资源文本', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'显示具有间隙的附加资源文本',
        documentation :'默认为false.将不相关的资源放在同一行时,在资源之间添加空格.'
    },
    {
        label: 'appendResourceInHUD_whenThisZero',
        insertText: 'appendResourceInHUD_whenThisZero:',
        labelDetails: { detail :' 在此为零时在HUD中追加资源', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'在此为零时在HUD中追加资源',
        documentation :'默认为true.为false时附加资源(如用于显示最大值的资源)与父资源一起隐藏.'
    },
    {
        label: 'includeInStats',
        insertText: 'includeInStats:',
        labelDetails: { detail :' 统计包括', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'统计包括',
        documentation :'包括在对局结算的统计中'
    },
    {
        label: 'valueInStats',
        insertText: 'valueInStats:',
        labelDetails: { detail :' 统计值', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'统计值',
        documentation :'(如果全局且未隐藏,则默认为 1(true),否则默认为 0(false)) - 用于游戏后的统计和回放的排行榜'
    },
    {
        label: 'displayInHud',
        insertText: 'displayInHud:',
        labelDetails: { detail :' 在HUD里显示', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'在HUD里显示',
        documentation :'- 用于 appendResourceInHUD(在HUD中追加资源) 中的资源,而不会隐藏它们,这有其他副作用'
    },
    {
        label: 'displayDigitGrouping',
        insertText: 'displayDigitGrouping:',
        labelDetails: { detail :' 资源数字分组', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'资源数字分组',
        documentation :'none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000)'
    },
    {
        label: 'displayPos',
        insertText: 'displayPos:',
        labelDetails: { detail :' 显示排序', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'显示排序',
        documentation :'显示优先级,越小越居上'
    },
    {
        label: 'displayWithRounding',
        insertText: 'displayWithRounding:',
        labelDetails: { detail :' 四舍五入取整', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'四舍五入取整',
        documentation :'取整后显示'
    },
    {
        label: 'displayTextPRefix',
        insertText: 'displayTextPRefix:',
        labelDetails: { detail :' 显示文本前缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'显示文本前缀',
        documentation :'显示文本前缀'
    },
    {
        label: 'displayTextPostfix',
        insertText: 'displayTextPostfix:',
        labelDetails: { detail :' 显示文本后缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'显示文本后缀',
        documentation :'显示文本后缀'
    },
];