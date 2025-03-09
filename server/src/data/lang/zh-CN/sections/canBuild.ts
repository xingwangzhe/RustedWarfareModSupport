import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const CANBUILD: CompletionItem[] = [
    {
        label: 'name',
        insertText: 'name:',
        labelDetails: { detail :' string 名字', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'名字',
        documentation :'该单位可以创建的单位名列表.可以是建筑物或单位.',
        data: 'string'
    },
    {
        label: 'pos',
        insertText: 'pos:',
        labelDetails: { detail :' float 排序', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'排序',
        documentation :'此单位在用户界面中排序,越小越靠上.',
        data: 'float'
    },
    {
        label: 'tech',
        insertText: 'tech:',
        labelDetails: { detail :' int 科技', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'科技',
        documentation :'没啥用.科技等级.通常只会影响此单位界面中的颜色.默认为1,只能填1,2,3.',
        data: 'int'
    },
    {
        label: 'forceNano',
        insertText: 'forceNano:',
        labelDetails: { detail :' bool 建造方式', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'建造方式',
        documentation :'如果为true,则将目标当作是建筑物建造. (即使是一个单位)',
        data: 'bool'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' logicBoolean 可见条件', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'可见条件',
        documentation :'如果满足条件,则从界面中显示此单位.比如用于科技树.',
        data: 'logicBoolean'
    },
    {
        label: 'isLocked',
        insertText: 'isLocked:',
        labelDetails: { detail :' logicBoolean 锁定', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'锁定',
        documentation :'如果满足条件,则从界面中锁定此单位.比如用于科技树,或是限造单位.',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedMessage',
        insertText: 'isLockedMessage:',
        labelDetails: { detail :' string 锁定原因描述', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'锁定原因描述',
        documentation :'告知玩家单位为何被锁定.',
        data: 'string'
    },
    {
        label: 'isLockedMessage_language',
        insertText: 'isLockedMessage_language:',
        labelDetails: { detail :' string 锁定文本多语言', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'锁定文本多语言',
        documentation :'设置锁定文本在不同语言下显示的内容.语言代码点击此处.',
        data: 'string'
    },
    {
        label: 'isLockedAlt',
        insertText: 'isLockedAlt:',
        labelDetails: { detail :' logicBoolean 更多锁定原因', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定原因',
        documentation :'另一个被锁定原因.只是允许显示不同的消息.',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedAltMessage',
        insertText: 'isLockedAltMessage:',
        labelDetails: { detail :' string 锁定原因描述', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'锁定原因描述',
        documentation :'另一个被锁定原因描述.',
        data: 'string'
    },
    {
        label: 'isLockedAlt2',
        insertText: 'isLockedAlt2:',
        labelDetails: { detail :' logicBoolean 更多锁定原因2', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'更多锁定原因2',
        documentation :'更多的锁定原因…',
        data: 'logicBoolean'
    },
    {
        label: 'isLockedAlt2Message',
        insertText: 'isLockedAlt2Message:',
        labelDetails: { detail :' string 锁定文本2描述', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'锁定文本2描述',
        documentation :'更多的锁定描述…',
        data: 'string'
    },
    {
        label: 'addResources',
        insertText: 'addResources:',
        labelDetails: { detail :' resourceRef 增加资源', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'增加资源',
        documentation :'在放置建筑物或生产单位时,将这些资源添加到自身中.',
        data: 'resourceRef'
    },
    {
        label: 'price',
        insertText: 'price:',
        labelDetails: { detail :' int(price) 价格', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'价格',
        documentation :'覆盖单位/建筑物的价格. 默认为单位内置的价格.',
        data: 'int(price)'
    },
    {
        label: 'isGuiBlinking',
        insertText: 'isGuiBlinking:',
        labelDetails: { detail :' logicBoolean 界面闪烁', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'界面闪烁',
        documentation :'如果为true,则在UI中生成闪烁效果.',
        data: 'logicBoolean'
    },
    {
        label: 'extraLagHidingInUI',
        insertText: 'extraLagHidingInUI:',
        labelDetails: { detail :' bool 消除ui额外延迟', description: '[canBuild]' },
        kind: CompletionItemKind.Text,
        detail :'消除ui额外延迟',
        documentation :'用于联机,在UI中立即更新而不需要从服务器确认的等待时间.',
        data: 'bool'
    },
];