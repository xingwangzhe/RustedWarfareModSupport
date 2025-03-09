import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const DECAL: CompletionItem[] = [
    {
        label: 'layer',
        insertText: 'layer:',
        labelDetails: { detail :' other 绘制图层,可以是前面几种', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'绘制图层,可以是前面几种',
        documentation :'可以填入的值:shadow(阴影), beforeBody(在主体之上), afterBody(在主体之下), onTop(在最顶端), beforeUI(在显示界面之上),inactive(在行动中)',
        data: 'other'
    },
    {
        label: 'order',
        insertText: 'order:',
        labelDetails: { detail :' float 排序(默认为0并且按照ini里的顺序)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'排序(默认为0并且按照ini里的顺序)',
        documentation :'使用其他贴花排序,默认为0,并使用其在ini中显示的顺序.',
        data: 'float'
    },
    {
        label: 'onlyWhenSelectedByOwnPlayer',
        insertText: 'onlyWhenSelectedByOwnPlayer:',
        labelDetails: { detail :' bool 仅在被拥有者选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在被拥有者选中时绘制',
        documentation :'只有当玩家查看本单位时,才可绘制贴花.',
        data: 'bool'
    },
    {
        label: 'onlyWhenSelectedByEnemyPlayer',
        insertText: 'onlyWhenSelectedByEnemyPlayer:',
        labelDetails: { detail :' bool 被敌方玩家选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'被敌方玩家选中时绘制',
        documentation :'被敌方玩家选中时绘制',
        data: 'bool'
    },
    {
        label: 'onlyWhenSelectedByAllyNotOwnPlayer',
        insertText: 'onlyWhenSelectedByAllyNotOwnPlayer:',
        labelDetails: { detail :' bool 非自身队伍的盟友选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'非自身队伍的盟友选中时绘制',
        documentation :'非自身队伍的盟友选中时绘制',
        data: 'bool'
    },
    {
        label: 'onlyWhenSelectedByAnyPlayer',
        insertText: 'onlyWhenSelectedByAnyPlayer:',
        labelDetails: { detail :' bool 被任意玩家选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'被任意玩家选中时绘制',
        documentation :'在任何玩家选中本单位值绘制贴花',
        data: 'bool'
    },
    {
        label: 'includeParentsSelection',
        insertText: 'includeParentsSelection:',
        labelDetails: { detail :' bool 包括被父单位选中', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'包括被父单位选中',
        documentation :'检查父项选择',
        data: 'bool'
    },
    {
        label: 'onlyPlayersWithUnitControl',
        insertText: 'onlyPlayersWithUnitControl:',
        labelDetails: { detail :' bool 仅在查看者能够控制此单位时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在查看者能够控制此单位时绘制',
        documentation :'仅当观看者可以控制此单元时才绘制贴花',
        data: 'bool'
    },
    {
        label: 'onlyTeam',
        insertText: 'onlyTeam:',
        labelDetails: { detail :' string 仅在查看者为特定队伍时显示', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在查看者为特定队伍时显示',
        documentation :'仅当单位和查看玩家之间的关系时绘制,可以填写:己方|非己方|中立方|除自己外盟友|盟友|敌方|任意',
        data: 'string'
    },
    {
        label: 'onlyWithZoomLevelOrMore',
        insertText: 'onlyWithZoomLevelOrMore:',
        labelDetails: { detail :' float 仅当缩放到当前大小或更大时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅当缩放到当前大小或更大时绘制',
        documentation :'屏幕上.建议设置在三维立体体积元素样式单位,小细节或小阴影的贴花上.缩小一点时会隐藏贴花.当许多单元可能需要时,有助于减少性能的调用',
        data: 'float'
    },
    {
        label: 'onlyWhileActive',
        insertText: 'onlyWhileActive:',
        labelDetails: { detail :' bool 仅在单位建造完成时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在单位建造完成时绘制',
        documentation :'仅在单位完成时绘制,比如建造者建造一般的建筑就不算',
        data: 'bool'
    },
    {
        label: 'onlyOnBodyFrameOf',
        insertText: 'onlyOnBodyFrameOf:',
        labelDetails: { detail :' int 只在主体X帧时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'只在主体X帧时绘制',
        documentation :'只在主体X帧时绘制',
        data: 'int'
    },
    {
        label: 'onlyWhileAlive',
        insertText: 'onlyWhileAlive:',
        labelDetails: { detail :' bool 仅在存活时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在存活时绘制',
        documentation :'如果图层(layer)为beforeUI默认为true,否则false,为ture死后消失',
        data: 'bool'
    },
    {
        label: 'onlyInPreview',
        insertText: 'onlyInPreview:',
        labelDetails: { detail :' bool 仅在侧边栏和建筑放置预览中显示', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在侧边栏和建筑放置预览中显示',
        documentation :'仅在侧边栏中显示,以及建筑布局预览',
        data: 'bool'
    },
    {
        label: 'onlyOnNonPreview',
        insertText: 'onlyOnNonPreview:',
        labelDetails: { detail :' bool 仅在非预览中显示(与上一条相反)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'仅在非预览中显示(与上一条相反)',
        documentation :'仅在真实单元上显示,而不是动作侧边栏等',
        data: 'bool'
    },
    {
        label: 'imageScale',
        insertText: 'imageScale:',
        labelDetails: { detail :' dynamicFloat 图像缩放(倍数)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'图像缩放(倍数)',
        documentation :'图像缩放(倍数)',
        data: 'dynamicFloat'
    },
    {
        label: 'imageScaleX',
        insertText: 'imageScaleX:',
        labelDetails: { detail :' dynamicFloat 图像X缩放', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'图像X缩放',
        documentation :'图像X缩放',
        data: 'dynamicFloat'
    },
    {
        label: 'imageScaleY',
        insertText: 'imageScaleY:',
        labelDetails: { detail :' dynamicFloat 图像Y缩放', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'图像Y缩放',
        documentation :'图像Y缩放',
        data: 'dynamicFloat'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' file-image 图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'图像',
        documentation :'图像',
        data: 'file-image'
    },
    {
        label: 'teamColors',
        insertText: 'teamColors:',
        labelDetails: { detail :' bool 阵营色', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'阵营色',
        documentation :'在图像和图像堆栈上启用队伍色',
        data: 'bool'
    },
    {
        label: 'imageStack',
        insertText: 'imageStack:',
        labelDetails: { detail :' file-image 图像列表', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'图像列表',
        documentation :'推荐用于三维立体体积元素样式单位的图像列表,因为当使用相同的子画面时,可以批量绘制图像.)(目前没有实例所以不清楚,但确定是用于3d单位',
        data: 'file-image'
    },
    {
        label: 'stack_hOffset',
        insertText: 'stack_hOffset:',
        labelDetails: { detail :' int 列表图像高度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'列表图像高度偏移',
        documentation :'用于三维立体体积元素样式单位.',
        data: 'int'
    },
    {
        label: 'stack_frameOffset',
        insertText: 'stack_frameOffset:',
        labelDetails: { detail :' int 列表图像帧偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'列表图像帧偏移',
        documentation :'用于三维立体体积元素样式单位.',
        data: 'int'
    },
    {
        label: 'stack_drawInReverseOrder',
        insertText: 'stack_drawInReverseOrder:',
        labelDetails: { detail :' int 列表图像绘图顺序', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'列表图像绘图顺序',
        documentation :'列表图像绘图顺序',
        data: 'int'
    },
    {
        label: 'stack_indexStart',
        insertText: 'stack_indexStart:',
        labelDetails: { detail :' dynamicFloat 列表图像起始图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'列表图像起始图像',
        documentation :'动态整数(图像堆栈的起始图像)',
        data: 'dynamicFloat'
    },
    {
        label: 'stack_indexCount',
        insertText: 'stack_indexCount:',
        labelDetails: { detail :' dynamicFloat 列表图像数量', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'列表图像数量',
        documentation :'动态整数(要绘制的图像数.可以设置为1以使用堆栈索引开始作为图像选择器)',
        data: 'dynamicFloat'
    },
    {
        label: 'total_frames',
        insertText: 'total_frames:',
        labelDetails: { detail :' int 总帧数(跟后面两个二选一使用)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'总帧数(跟后面两个二选一使用)',
        documentation :'使用总帧数或者帧宽度/帧高度',
        data: 'int'
    },
    {
        label: 'frame_verticalOrdering',
        insertText: 'frame_verticalOrdering:',
        labelDetails: { detail :' bool 帧纵向排列', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'帧纵向排列',
        documentation :'如果为true则会竖着切割帧图',
        data: 'bool'
    },
    {
        label: 'frame_width',
        insertText: 'frame_width:',
        labelDetails: { detail :' int 帧宽度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'帧宽度',
        documentation :'帧宽度',
        data: 'int'
    },
    {
        label: 'frame_height',
        insertText: 'frame_height:',
        labelDetails: { detail :' int 帧高度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'帧高度',
        documentation :'帧高度',
        data: 'int'
    },
    {
        label: 'frame',
        insertText: 'frame:',
        labelDetails: { detail :' dynamicFloat 帧', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'帧',
        documentation :'支持动态值',
        data: 'dynamicFloat'
    },
    {
        label: 'addBodyFrameMultipliedBy',
        insertText: 'addBodyFrameMultipliedBy:',
        labelDetails: { detail :' int 添加主体帧乘数', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'添加主体帧乘数',
        documentation :'',
        data: 'int'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' logicBoolean 可见', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'可见',
        documentation :'是否可见,支持动态值',
        data: 'logicBoolean'
    },
    {
        label: 'xOffsetRelative',
        insertText: 'xOffsetRelative:',
        labelDetails: { detail :' float X相对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'X相对偏移',
        documentation :'用于修改decal的相对位置,不支持动态值,动态请使用basePosition',
        data: 'float'
    },
    {
        label: 'yOffsetRelative',
        insertText: 'yOffsetRelative:',
        labelDetails: { detail :' float Y相对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'Y相对偏移',
        documentation :'用于修改decal的相对位置,不支持动态值,动态请使用basePosition',
        data: 'float'
    },
    {
        label: 'xOffsetAbsolute',
        insertText: 'xOffsetAbsolute:',
        labelDetails: { detail :' dynamicFloat X绝对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'X绝对偏移',
        documentation :'用于修改decal的绝对位置,支持动态值',
        data: 'dynamicFloat'
    },
    {
        label: 'yOffsetAbsolute',
        insertText: 'yOffsetAbsolute:',
        labelDetails: { detail :' dynamicFloat Y绝对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'Y绝对偏移',
        documentation :'用于修改decal的绝对位置,支持动态值',
        data: 'dynamicFloat'
    },
    {
        label: 'hOffset',
        insertText: 'hOffset:',
        labelDetails: { detail :' float 高度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'高度偏移',
        documentation :'用于修改decal的高度',
        data: 'float'
    },
    {
        label: 'dirOffset',
        insertText: 'dirOffset:',
        labelDetails: { detail :' float 角度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'角度偏移',
        documentation :'角度偏移',
        data: 'float'
    },
    {
        label: 'pivotOffset',
        insertText: 'pivotOffset:',
        labelDetails: { detail :' float 坐标系旋转', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'坐标系旋转',
        documentation :'相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy. 只影响X/Y相对偏移,不旋转图像',
        data: 'float'
    },
    {
        label: 'alwaysStartDirAtZero',
        insertText: 'alwaysStartDirAtZero:',
        labelDetails: { detail :' bool 总是固定角度为零(总是朝上)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'总是固定角度为零(总是朝上)',
        documentation :'用于制作类似单位UI',
        data: 'bool'
    },
    {
        label: 'alwaysStartHeightAtZero',
        insertText: 'alwaysStartHeightAtZero:',
        labelDetails: { detail :' bool 总是固定高度为零', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'总是固定高度为零',
        documentation :'对制作空中和两栖单位的UI有用',
        data: 'bool'
    },
    {
        label: 'basePosition',
        insertText: 'basePosition:',
        labelDetails: { detail :' unitRef 位置参考来自', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'位置参考来自',
        documentation :'decal将以填入的单位作为中心渲染',
        data: 'unitRef'
    },
    {
        label: 'basePositionFromLeg',
        insertText: 'basePositionFromLeg:',
        labelDetails: { detail :' legRef 以脚为中心位置', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'以脚为中心位置',
        documentation :'decal将以填入的腿脚作为中心渲染',
        data: 'legRef'
    },
    {
        label: 'basePositionFromTurret',
        insertText: 'basePositionFromTurret:',
        labelDetails: { detail :' turretRef 以炮塔为中心位置', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'以炮塔为中心位置',
        documentation :'decal将以填入的炮塔作为中心渲染',
        data: 'turretRef'
    },
    {
        label: 'basePositionFromLegEnd',
        insertText: 'basePositionFromLegEnd:',
        labelDetails: { detail :' leg/armRef decal将以填入的腿脚或胳膊的末端作为中心渲染', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'decal将以填入的腿脚或胳膊的末端作为中心渲染',
        documentation :'',
        data: 'leg/armRef'
    },
    {
        label: 'drawLineTo',
        insertText: 'drawLineTo:',
        labelDetails: { detail :' unitRef 绘制线条到', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'绘制线条到',
        documentation :'绘制一条线在该单位和填入的单位之间',
        data: 'unitRef'
    },
    {
        label: 'image_shadow',
        insertText: 'image_shadow:',
        labelDetails: { detail :' file-image 阴影图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像',
        documentation :'阴影图像',
        data: 'file-image'
    },
    {
        label: 'shadowOffsetX',
        insertText: 'shadowOffsetX:',
        labelDetails: { detail :' float 阴影偏移X', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'阴影偏移X',
        documentation :'阴影偏移X',
        data: 'float'
    },
    {
        label: 'shadowOffsetY',
        insertText: 'shadowOffsetY:',
        labelDetails: { detail :' float 阴影偏移Y', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'阴影偏移Y',
        documentation :'阴影偏移Y',
        data: 'float'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' color 颜色', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'颜色',
        documentation :'影响图像和线条.',
        data: 'color'
    },
    {
        label: 'alpha',
        insertText: 'alpha:',
        labelDetails: { detail :' dynamicFloat 透明度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'透明度',
        documentation :'支持0-1动态浮点数,以颜色堆叠透明度. 影响图像和线条.',
        data: 'dynamicFloat'
    },
    {
        label: 'lineWidth',
        insertText: 'lineWidth:',
        labelDetails: { detail :' float 线宽度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        detail :'线宽度',
        documentation :'线宽度',
        data: 'float'
    },
];