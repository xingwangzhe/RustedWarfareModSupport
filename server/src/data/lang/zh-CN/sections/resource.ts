import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const RESOURCE: CompletionItem[] = [
    {
        label: 'stackHorizontal',
        insertText: 'stackHorizontal:',
        labelDetails: { detail :' bool 堆叠水平', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'堆叠水平',
        documentation :'定义与玩家所有单位共享的新资源,其工作方式类似于内置的资金.添加到all-units.template(位于mod根目录)',
        data: 'bool'
    },
    {
        label: 'displayName',
        insertText: 'displayName:',
        labelDetails: { detail :' string 显示名称', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示名称',
        documentation :'用户界面中此资源的名称',
        data: 'string'
    },
    {
        label: 'displayNameShort',
        insertText: 'displayNameShort:',
        labelDetails: { detail :' string 显示短名称', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示短名称',
        documentation :'在较小的UI上显示的文本(如action的悬浮文本)默认为displayName',
        data: 'string'
    },
    {
        label: 'hidden',
        insertText: 'hidden:',
        labelDetails: { detail :' bool 隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'隐藏',
        documentation :'向玩家隐藏此资源',
        data: 'bool'
    },
    {
        label: 'priority',
        insertText: 'priority:',
        labelDetails: { detail :' float 优先级', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'优先级',
        documentation :'如果多个mod单元中定义了同名的资源,则使用具有最高优先级的displayName/displayColor',
        data: 'float'
    },
    {
        label: 'displayColor',
        insertText: 'displayColor:',
        labelDetails: { detail :' color 显示颜色', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示颜色',
        documentation :'颜色,可以是十六进制,带有可选的alpha',
        data: 'color'
    },
    {
        label: 'displayRoundedDown',
        insertText: 'displayRoundedDown:',
        labelDetails: { detail :' bool 显示为整数', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示为整数',
        documentation :'对资源进行舍入显示为整数.',
        data: 'bool'
    },
    {
        label: 'displayWhenZero',
        insertText: 'displayWhenZero:',
        labelDetails: { detail :' bool 为零时显示', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'为零时显示',
        documentation :'资源为零时也显示.',
        data: 'bool'
    },
    {
        label: 'iconImageUseInText',
        insertText: 'iconImageUseInText:',
        labelDetails: { detail :' bool 在动作(action)的描述中显示资源图标', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在动作(action)的描述中显示资源图标',
        documentation :'默认为true',
        data: 'bool'
    },
    {
        label: 'iconImage',
        insertText: 'iconImage:',
        labelDetails: { detail :' file-image 图标', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'图标',
        documentation :'自定义该资源的象征图像',
        data: 'file-image'
    },
    {
        label: 'displayNameHideWhenIconShownInText',
        insertText: 'displayNameHideWhenIconShownInText:',
        labelDetails: { detail :' bool 显示名称在文本中显示图标时隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示名称在文本中显示图标时隐藏',
        documentation :'(默认为false) - 有助于缩短说明文本',
        data: 'bool'
    },
    {
        label: 'displayNameHideWhenIconShownInHUD',
        insertText: 'displayNameHideWhenIconShownInHUD:',
        labelDetails: { detail :' bool 文本显示名称在HUD中显示图标时隐藏', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'文本显示名称在HUD中显示图标时隐藏',
        documentation :'默认为false',
        data: 'bool'
    },
    {
        label: 'displayColorUseInText',
        insertText: 'displayColorUseInText:',
        labelDetails: { detail :' bool 在动作(action)的描述中显示资源颜色', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在动作(action)的描述中显示资源颜色',
        documentation :'默认为true',
        data: 'bool'
    },
    {
        label: 'appendResourceInHUD',
        insertText: 'appendResourceInHUD:',
        labelDetails: { detail :' resourceRef 在HUD中追加资源', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在HUD中追加资源',
        documentation :'使用后,在游戏界面中这个资源值将会叠在目标资源值的后面,并且继承目标资源的颜色和图标.这个资源值后面也能继续叠加其它资源值',
        data: 'resourceRef'
    },
    {
        label: 'displayPRefixInHUD',
        insertText: 'displayPRefixInHUD:',
        labelDetails: { detail :' string 在HUD中显示前缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在HUD中显示前缀',
        documentation :'在资源数值前显示的文本,会替换掉资源原本的名称以及冒号,和appendResourceInHUD一同使用时可以用来显示资源限制之类的内容',
        data: 'string'
    },
    {
        label: 'displayPostfixInHUD',
        insertText: 'displayPostfixInHUD:',
        labelDetails: { detail :' string 在HUD中显示后缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在HUD中显示后缀',
        documentation :'在资源数值之后显示的文本',
        data: 'string'
    },
    {
        label: 'displayTextAppendResource',
        insertText: 'displayTextAppendResource:',
        labelDetails: { detail :' resourceRef 显示附加资源文本', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示附加资源文本',
        documentation :'',
        data: 'resourceRef'
    },
    {
        label: 'displayTextAppendResourceWithGap',
        insertText: 'displayTextAppendResourceWithGap:',
        labelDetails: { detail :' bool 显示具有间隙的附加资源文本', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示具有间隙的附加资源文本',
        documentation :'默认为false.将不相关的资源放在同一行时,在资源之间添加空格.',
        data: 'bool'
    },
    {
        label: 'appendResourceInHUD_whenThisZero',
        insertText: 'appendResourceInHUD_whenThisZero:',
        labelDetails: { detail :' bool 在此为零时在HUD中追加资源', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在此为零时在HUD中追加资源',
        documentation :'默认为true.为false时附加资源(如用于显示最大值的资源)与父资源一起隐藏.',
        data: 'bool'
    },
    {
        label: 'includeInStats',
        insertText: 'includeInStats:',
        labelDetails: { detail :' bool 统计包括', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'统计包括',
        documentation :'包括在对局结算的统计中',
        data: 'bool'
    },
    {
        label: 'valueInStats',
        insertText: 'valueInStats:',
        labelDetails: { detail :' bool/int 统计值', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'统计值',
        documentation :'(如果全局且未隐藏,则默认为 1(true),否则默认为 0(false)) - 用于游戏后的统计和回放的排行榜',
        data: 'bool/int'
    },
    {
        label: 'displayInHud',
        insertText: 'displayInHud:',
        labelDetails: { detail :' bool 在HUD里显示', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'在HUD里显示',
        documentation :'- 用于 appendResourceInHUD(在HUD中追加资源) 中的资源,而不会隐藏它们,这有其他副作用',
        data: 'bool'
    },
    {
        label: 'displayDigitGrouping',
        insertText: 'displayDigitGrouping:',
        labelDetails: { detail :' string 资源数字分组', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'资源数字分组',
        documentation :'none/comma/space--(空,逗号,空格)(例如资源数量10000,空格分组就是10 000)',
        data: 'string'
    },
    {
        label: 'displayPos',
        insertText: 'displayPos:',
        labelDetails: { detail :' int 显示排序', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示排序',
        documentation :'显示优先级,越小越居上',
        data: 'int'
    },
    {
        label: 'displayWithRounding',
        insertText: 'displayWithRounding:',
        labelDetails: { detail :' bool 四舍五入取整', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'四舍五入取整',
        documentation :'取整后显示',
        data: 'bool'
    },
    {
        label: 'displayTextPRefix',
        insertText: 'displayTextPRefix:',
        labelDetails: { detail :' string 显示文本前缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示文本前缀',
        documentation :'显示文本前缀',
        data: 'string'
    },
    {
        label: 'displayTextPostfix',
        insertText: 'displayTextPostfix:',
        labelDetails: { detail :' string 显示文本后缀', description: '[resource]' },
        kind: CompletionItemKind.Text,
        detail :'显示文本后缀',
        documentation :'显示文本后缀',
        data: 'string'
    },
];