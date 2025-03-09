import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const UNITREF: CompletionItem[] = [
    {
        label: 'self',
        insertText: 'self',
        labelDetails: { detail :' unitRef 即该单位自身', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'即该单位自身',
        documentation :'自身',
        data: 'unitRef'
    },
    {
        label: 'attachment',
        insertText: 'attachment',
        labelDetails: { detail :' unitRef 该单位当前的附属,若不填参数则默认为第一个附属', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'该单位当前的附属,若不填参数则默认为第一个附属',
        documentation :'附属',
        data: 'unitRef'
    },
    {
        label: 'transporting',
        insertText: 'transporting',
        labelDetails: { detail :' unitRef 该单位目前装载的单位', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'该单位目前装载的单位',
        documentation :'载员',
        data: 'unitRef'
    },
    {
        label: 'attacking',
        insertText: 'attacking',
        labelDetails: { detail :' unitRef 单位正在攻击的目标', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'单位正在攻击的目标',
        documentation :'攻击目标',
        data: 'unitRef'
    },
    {
        label: 'lastDamagedBy',
        insertText: 'lastDamagedBy',
        labelDetails: { detail :' unitRef 返回最后一个攻击该单位的单位', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'返回最后一个攻击该单位的单位',
        documentation :'最后伤害源',
        data: 'unitRef'
    },
    {
        label: 'parent',
        insertText: 'parent',
        labelDetails: { detail :' unitRef 包括装载和附属父级', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'包括装载和附属父级',
        documentation :'父级',
        data: 'unitRef'
    },
    {
        label: 'activeWaypointTarget',
        insertText: 'activeWaypointTarget',
        labelDetails: { detail :' unitRef 当前单位的路径点目标,若单位当前队列中有多个路径点则返回第一个', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'当前单位的路径点目标,若单位当前队列中有多个路径点则返回第一个',
        documentation :'路径点目标',
        data: 'unitRef'
    },
    {
        label: 'customTarget1',
        insertText: 'customTarget1',
        labelDetails: { detail :' unitRef 简称ct1,默认是制造该单位的单位,可以setUM更改', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'简称ct1,默认是制造该单位的单位,可以setUM更改',
        documentation :'自定义目标1',
        data: 'unitRef'
    },
    {
        label: 'customTarget2',
        insertText: 'customTarget2',
        labelDetails: { detail :' unitRef 简称ct2,默认是nullUnit,可以setUM更改', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'简称ct2,默认是nullUnit,可以setUM更改',
        documentation :'自定义目标2',
        data: 'unitRef'
    },
    {
        label: 'nearestUnit',
        insertText: 'nearestUnit',
        labelDetails: { detail :' unitRef 返回离自身最近的单位,最大检查距离为500.', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'返回离自身最近的单位,最大检查距离为500.',
        documentation :'最近单位',
        data: 'unitRef'
    },
    {
        label: 'globalSearchForFirstUnit',
        insertText: 'globalSearchForFirstUnit',
        labelDetails: { detail :' unitRef 一般配合tag使用,可用于自定义给予路径点特效在多选时避免重复触发.', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'一般配合tag使用,可用于自定义给予路径点特效在多选时避免重复触发.',
        documentation :'全局检查第一个单位',
        data: 'unitRef'
    },
    {
        label: 'nullUnit',
        insertText: 'nullUnit',
        labelDetails: { detail :' unitRef 返回一个空单位用于比较,例如:没赋值的unit类型memory.x==nullUnit', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'返回一个空单位用于比较,例如:没赋值的unit类型memory.x==nullUnit',
        documentation :'空单位',
        data: 'unitRef'
    },
    {
        label: 'getAsMarker',
        insertText: 'getAsMarker',
        labelDetails: { detail :' unitRef 被调用时在单位原地生成一个marker每帧刷新,被引用的单位即为该marker.在不被调用时会自我删除,且检查频率为每帧.(额外: ZXY原理(发现于2024.2):1.15自删机制会忽视来自节作用域变量(局部变量)的调用,这意味着如果你将存储marker的局部变量延迟了一帧后调用(如使用alsoQ)这个原本存储的marker就会自删,而这个局部变量会返回当前该\'marker堆\'最新产生的marker,利用该机制可以获取到一些仅marker才能读到的数据(如摄像头位置,屏幕缩放值,单位是否选中)', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'被调用时在单位原地生成一个marker每帧刷新,被引用的单位即为该marker.在不被调用时会自我删除,且检查频率为每帧.(额外: ZXY原理(发现于2024.2):1.15自删机制会忽视来自节作用域变量(局部变量)的调用,这意味着如果你将存储marker的局部变量延迟了一帧后调用(如使用alsoQ)这个原本存储的marker就会自删,而这个局部变量会返回当前该\'marker堆\'最新产生的marker,利用该机制可以获取到一些仅marker才能读到的数据(如摄像头位置,屏幕缩放值,单位是否选中)',
        documentation :'获取为标记',
        data: 'unitRef'
    },
    {
        label: 'getOffsetAbsolute',
        insertText: 'getOffsetAbsolute',
        labelDetails: { detail :' unitRef 被调用时在单位绝对偏移位置生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'被调用时在单位绝对偏移位置生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker',
        documentation :'获取绝对偏移标记',
        data: 'unitRef'
    },
    {
        label: 'getOffsetRelative',
        insertText: 'getOffsetRelative',
        labelDetails: { detail :' unitRef 被调用时在单位相对偏移位置生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'被调用时在单位相对偏移位置生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker',
        documentation :'获取相对偏移标记',
        data: 'unitRef'
    },
    {
        label: 'createMarker',
        insertText: 'createMarker',
        labelDetails: { detail :' unitRef 在地图上的某个坐标生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'在地图上的某个坐标生成一个marker每帧刷新,被引用的单位即为该marker.参数支持动态值,额外机制详见getAsMarker',
        documentation :'创建标记',
        data: 'unitRef'
    },
    {
        label: 'thisActionTarget',
        insertText: 'thisActionTarget',
        labelDetails: { detail :' unitRef 当前行动的目标,简称thisAT,作用域为单个section(四大局部变量之一). (额外: 不变性原理(发现于2023.1):局部变量不受1.15版本跨单位动态读取数组时变量被错误导向的影响,例如thisActionTarget.readUnitMemory(\'x\',type=\'float\')[memory.customIndex]可以正常读取)(额外2: 局部变量的ZXY原理详见getAsMarker的注释)', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'当前行动的目标,简称thisAT,作用域为单个section(四大局部变量之一). (额外: 不变性原理(发现于2023.1):局部变量不受1.15版本跨单位动态读取数组时变量被错误导向的影响,例如thisActionTarget.readUnitMemory(\'x\',type=\'float\')[memory.customIndex]可以正常读取)(额外2: 局部变量的ZXY原理详见getAsMarker的注释)',
        documentation :'行动目标',
        data: 'unitRef'
    },
    {
        label: 'eventSource',
        insertText: 'eventSource',
        labelDetails: { detail :' unitRef 若该行动为事件触发会返回事件的来源单位,作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget', description: '[unitRef]' },
        kind: CompletionItemKind.Text,
        detail :'若该行动为事件触发会返回事件的来源单位,作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget',
        documentation :'事件来源',
        data: 'unitRef'
    },
];