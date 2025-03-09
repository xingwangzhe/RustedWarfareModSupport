import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const FUNCTION: CompletionItem[] = [
    {
        label: 'distance',
        insertText: 'distance',
        labelDetails: { detail :' (float,float,float,float)=>float 返回传入的2组坐标之间的距离', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回传入的2组坐标之间的距离',
        documentation :'距离',
        data: '(float,float,float,float)=>float'
    },
    {
        label: 'distanceSquared',
        insertText: 'distanceSquared',
        labelDetails: { detail :' (float,float,float,float)=>float 返回传入的2组坐标之间的距离的平方,因为不用开根号所以稍微快一点', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回传入的2组坐标之间的距离的平方,因为不用开根号所以稍微快一点',
        documentation :'距离平方',
        data: '(float,float,float,float)=>float'
    },
    {
        label: 'distanceBetween',
        insertText: 'distanceBetween',
        labelDetails: { detail :' (unit,unit)=>float 返回传入的2个单位之间的距离', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回传入的2个单位之间的距离',
        documentation :'单位距离',
        data: '(unit,unit)=>float'
    },
    {
        label: 'distanceBetweenSquared',
        insertText: 'distanceBetweenSquared',
        labelDetails: { detail :' (unit,unit)=>float 返回传入的2个单位之间的距离的平方,因为不用开根号所以稍微快一点', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回传入的2个单位之间的距离的平方,因为不用开根号所以稍微快一点',
        documentation :'单位距离平方',
        data: '(unit,unit)=>float'
    },
    {
        label: 'direction',
        insertText: 'direction',
        labelDetails: { detail :' (float,float,float,float)=>float 返回坐标2相对于坐标1的绝对方向', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回坐标2相对于坐标1的绝对方向',
        documentation :'绝对方向夹角',
        data: '(float,float,float,float)=>float'
    },
    {
        label: 'directionBetween',
        insertText: 'directionBetween',
        labelDetails: { detail :' (unit,unit)=>float 返回单位2相对于单位1的绝对方向,如果你需要相对方向那么需要减去单位1的dir', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回单位2相对于单位1的绝对方向,如果你需要相对方向那么需要减去单位1的dir',
        documentation :'单位绝对方向',
        data: '(unit,unit)=>float'
    },
    {
        label: 'int',
        insertText: 'int',
        labelDetails: { detail :' float=>int 对浮点数进行下取整转换为整型', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'对浮点数进行下取整转换为整型',
        documentation :'取整',
        data: 'float=>int'
    },
    {
        label: 'select',
        insertText: 'select',
        labelDetails: { detail :' (logicbBoolean,any,any)=>any 铁锈的三目运算符,语法为select(logicBoolean,A,B),如果为真返回A', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'铁锈的三目运算符,语法为select(logicBoolean,A,B),如果为真返回A',
        documentation :'三目运算',
        data: '(logicbBoolean,any,any)=>any'
    },
    {
        label: 'debug',
        insertText: 'debug',
        labelDetails: { detail :' (logicBoolean,logicbBoolean)=>string 将传入的逻辑值转为一个附带内容的用于调试的字符串', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'将传入的逻辑值转为一个附带内容的用于调试的字符串',
        documentation :'调试',
        data: '(logicBoolean,logicbBoolean)=>string'
    },
    {
        label: 'debugPassthrough',
        insertText: 'debugPassthrough',
        labelDetails: { detail :' (logicBoolean,logicbBoolean)=>string ', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'',
        documentation :'调试直通',
        data: '(logicBoolean,logicbBoolean)=>string'
    },
    {
        label: 'str',
        insertText: 'str',
        labelDetails: { detail :' any=>string 将值转为字符串. (额外: 若传入的值类型为unit则可以返回一些额外的信息包含在字符串里.除位置和id以外还有单位的名字,以及是否被删除(注意单位的这两个属性一般无法直接调用),你可以遍历查找用substring()截取它们用于比较)', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'将值转为字符串. (额外: 若传入的值类型为unit则可以返回一些额外的信息包含在字符串里.除位置和id以外还有单位的名字,以及是否被删除(注意单位的这两个属性一般无法直接调用),你可以遍历查找用substring()截取它们用于比较)',
        documentation :'转字符串',
        data: 'any=>string'
    },
    {
        label: 'substring',
        insertText: 'substring',
        labelDetails: { detail :' (string,int,int)=>string 返回根据填入的整数截取后的字符串,支持动态值', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回根据填入的整数截取后的字符串,支持动态值',
        documentation :'子字符串',
        data: '(string,int,int)=>string'
    },
    {
        label: 'length',
        insertText: 'length',
        labelDetails: { detail :' string=>int 返回字符串的长度', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回字符串的长度',
        documentation :'长度',
        data: 'string=>int'
    },
    {
        label: 'squareRoot',
        insertText: 'squareRoot',
        labelDetails: { detail :' float=>float 返回一个浮点数的算数平方根', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回一个浮点数的算数平方根',
        documentation :'算术平方根',
        data: 'float=>float'
    },
    {
        label: 'min',
        insertText: 'min',
        labelDetails: { detail :' (float,float)=>float 取传入的2个浮点数的小值', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'取传入的2个浮点数的小值',
        documentation :'最小值',
        data: '(float,float)=>float'
    },
    {
        label: 'max',
        insertText: 'max',
        labelDetails: { detail :' (float,float)=>float 取传入的2个浮点数的大值', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'取传入的2个浮点数的大值',
        documentation :'最大值',
        data: '(float,float)=>float'
    },
    {
        label: 'cos',
        insertText: 'cos',
        labelDetails: { detail :' float=>float 余弦函数,可用于极坐标与笛卡尔坐标转换', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'余弦函数,可用于极坐标与笛卡尔坐标转换',
        documentation :'余弦',
        data: 'float=>float'
    },
    {
        label: 'sin',
        insertText: 'sin',
        labelDetails: { detail :' float=>float 正弦函数,可用于极坐标与笛卡尔坐标转换', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'正弦函数,可用于极坐标与笛卡尔坐标转换',
        documentation :'正弦',
        data: 'float=>float'
    },
    {
        label: 'uppercase',
        insertText: 'uppercase',
        labelDetails: { detail :' string=>string 将字符串包含的所有字母全部大写,意义不明的代码', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'将字符串包含的所有字母全部大写,意义不明的代码',
        documentation :'字符大写',
        data: 'string=>string'
    },
    {
        label: 'lowercase',
        insertText: 'lowercase',
        labelDetails: { detail :' string=>string 将字符串包含的所有字母全部小写,意义不明的代码', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'将字符串包含的所有字母全部小写,意义不明的代码',
        documentation :'字符小写',
        data: 'string=>string'
    },
    {
        label: 'rnd',
        insertText: 'rnd',
        labelDetails: { detail :' (float,float)=>float 返回介于传入的两个之间的随机浮点数(精确到小数点后三位),概率分布为均匀分布. (额外: 1.15版本的随机数有一些bug,在某些情况下会连续返回一样的值,如果你遇到了该问题请参考https://rustedWarfare.org/wiki/随机数 )', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回介于传入的两个之间的随机浮点数(精确到小数点后三位),概率分布为均匀分布. (额外: 1.15版本的随机数有一些bug,在某些情况下会连续返回一样的值,如果你遇到了该问题请参考https://rustedWarfare.org/wiki/随机数 )',
        documentation :'随机数',
        data: '(float,float)=>float'
    },
    {
        label: 'game.nukesEnabled()',
        insertText: 'game.nukesEnabled()',
        labelDetails: { detail :' logicBoolean 返回该局游戏是否禁止核弹', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回该局游戏是否禁止核弹',
        documentation :'是否禁核',
        data: 'logicBoolean'
    },
    {
        label: 'game.mapWidth',
        insertText: 'game.mapWidth',
        labelDetails: { detail :' int 返回当前地图的宽度', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回当前地图的宽度',
        documentation :'地图宽度',
        data: 'int'
    },
    {
        label: 'game.mapHeight',
        insertText: 'game.mapHeight',
        labelDetails: { detail :' int 返回当前地图的高度', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'返回当前地图的高度',
        documentation :'地图高度',
        data: 'int'
    },
    {
        label: 'thisActionIndex',
        insertText: 'thisActionIndex',
        labelDetails: { detail :' int 请使用index', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'请使用index',
        documentation :'行动下标',
        data: 'int'
    },
    {
        label: 'index',
        insertText: 'index',
        labelDetails: { detail :' int 该行动被重复触发的次数,目前可以滚动index的触发方式有2种alsoTR以及forEach,作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'该行动被重复触发的次数,目前可以滚动index的触发方式有2种alsoTR以及forEach,作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget',
        documentation :'行动下标',
        data: 'int'
    },
    {
        label: 'readUnitMemory',
        insertText: 'readUnitMemory',
        labelDetails: { detail :' any 用于读取其他单位的内存,语法为readUnitMemory(\'name\',type=\'x\'). 若读取自身内存请使用memory.更为快捷.', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'用于读取其他单位的内存,语法为readUnitMemory(\'name\',type=\'x\'). 若读取自身内存请使用memory.更为快捷.',
        documentation :'读取内存',
        data: 'any'
    },
    {
        label: 'memory',
        insertText: 'memory',
        labelDetails: { detail :' any 用于快捷读取自身的内存. 若读取其他单位的内存请使用readUnitMemory().', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'用于快捷读取自身的内存. 若读取其他单位的内存请使用readUnitMemory().',
        documentation :'读取内存',
        data: 'any'
    },
    {
        label: 'eventData',
        insertText: 'eventData',
        labelDetails: { detail :' any 调用newMessage()携带的数据,语法为eventData(\'name\',type=\'x\'),作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'调用newMessage()携带的数据,语法为eventData(\'name\',type=\'x\'),作用域为单个section(四大局部变量之一).额外机制详见thisActionTarget',
        documentation :'事件数据',
        data: 'any'
    },
    {
        label: 'null',
        insertText: 'null',
        labelDetails: { detail :' any 将memory(支持整个数组)赋值为null以清除它,或是用于比较', description: '[function]' },
        kind: CompletionItemKind.Text,
        detail :'将memory(支持整个数组)赋值为null以清除它,或是用于比较',
        documentation :'空',
        data: 'any'
    },
];