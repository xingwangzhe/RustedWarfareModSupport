import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const DECAL: CompletionItem[] = [
    {
        label: 'layer',
        insertText: 'layer:',
        labelDetails: { detail :' 绘制图层,可以是前面几种', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'绘制图层,可以是前面几种',
        documentation :'可以填入的值:shadow(阴影), beforeBody(在主体之上), afterBody(在主体之下), onTop(在最顶端), beforeUI(在显示界面之上),inactive(在行动中)'
    },
    {
        label: 'order',
        insertText: 'order:',
        labelDetails: { detail :' 排序(默认为0并且按照ini里的顺序)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'排序(默认为0并且按照ini里的顺序)',
        documentation :'使用其他贴花排序,默认为0,并使用其在ini中显示的顺序.'
    },
    {
        label: 'onlyWhenSelectedByOwnPlayer',
        insertText: 'onlyWhenSelectedByOwnPlayer:',
        labelDetails: { detail :' 仅在被拥有者选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'仅在被拥有者选中时绘制',
        documentation :'只有当玩家查看本单位时,才可绘制贴花.'
    },
    {
        label: 'onlyWhenSelectedByEnemyPlayer',
        insertText: 'onlyWhenSelectedByEnemyPlayer:',
        labelDetails: { detail :' 被敌方玩家选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'被敌方玩家选中时绘制',
        documentation :'被敌方玩家选中时绘制'
    },
    {
        label: 'onlyWhenSelectedByAllyNotOwnPlayer',
        insertText: 'onlyWhenSelectedByAllyNotOwnPlayer:',
        labelDetails: { detail :' 非自身队伍的盟友选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'非自身队伍的盟友选中时绘制',
        documentation :'非自身队伍的盟友选中时绘制'
    },
    {
        label: 'onlyWhenSelectedByAnyPlayer',
        insertText: 'onlyWhenSelectedByAnyPlayer:',
        labelDetails: { detail :' 被任意玩家选中时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'被任意玩家选中时绘制',
        documentation :'在任何玩家选中本单位值绘制贴花'
    },
    {
        label: 'includeParentsSelection',
        insertText: 'includeParentsSelection:',
        labelDetails: { detail :' 包括被父单位选中', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'包括被父单位选中',
        documentation :'检查父项选择'
    },
    {
        label: 'onlyPlayersWithUnitControl',
        insertText: 'onlyPlayersWithUnitControl:',
        labelDetails: { detail :' 仅在查看者能够控制此单位时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'仅在查看者能够控制此单位时绘制',
        documentation :'仅当观看者可以控制此单元时才绘制贴花'
    },
    {
        label: 'onlyTeam',
        insertText: 'onlyTeam:',
        labelDetails: { detail :' 仅在查看者为特定队伍时显示', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'仅在查看者为特定队伍时显示',
        documentation :'仅当单位和查看玩家之间的关系时绘制,可以填写:己方|非己方|中立方|除自己外盟友|盟友|敌方|任意'
    },
    {
        label: 'onlyWithZoomLevelOrMore',
        insertText: 'onlyWithZoomLevelOrMore:',
        labelDetails: { detail :' 仅当缩放到当前大小或更大时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'仅当缩放到当前大小或更大时绘制',
        documentation :'屏幕上.建议设置在三维立体体积元素样式单位,小细节或小阴影的贴花上.缩小一点时会隐藏贴花.当许多单元可能需要时,有助于减少性能的调用'
    },
    {
        label: 'onlyWhileActive',
        insertText: 'onlyWhileActive:',
        labelDetails: { detail :' 仅在单位建造完成时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'仅在单位建造完成时绘制',
        documentation :'仅在单位完成时绘制,比如建造者建造一般的建筑就不算'
    },
    {
        label: 'onlyOnBodyFrameOf',
        insertText: 'onlyOnBodyFrameOf:',
        labelDetails: { detail :' 只在主体X帧时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'只在主体X帧时绘制',
        documentation :'只在主体X帧时绘制'
    },
    {
        label: 'onlyWhileAlive',
        insertText: 'onlyWhileAlive:',
        labelDetails: { detail :' 仅在存活时绘制', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'仅在存活时绘制',
        documentation :'如果图层(layer)为beforeUI默认为true,否则false,为ture死后消失'
    },
    {
        label: 'onlyInPreview',
        insertText: 'onlyInPreview:',
        labelDetails: { detail :' 仅在侧边栏和建筑放置预览中显示', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'仅在侧边栏和建筑放置预览中显示',
        documentation :'仅在侧边栏中显示,以及建筑布局预览'
    },
    {
        label: 'onlyOnNonPreview',
        insertText: 'onlyOnNonPreview:',
        labelDetails: { detail :' 仅在非预览中显示(与上一条相反)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'仅在非预览中显示(与上一条相反)',
        documentation :'仅在真实单元上显示,而不是动作侧边栏等'
    },
    {
        label: 'imageScale',
        insertText: 'imageScale:',
        labelDetails: { detail :' 图像缩放(倍数)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'图像缩放(倍数)',
        documentation :'图像缩放(倍数)'
    },
    {
        label: 'imageScaleX',
        insertText: 'imageScaleX:',
        labelDetails: { detail :' 图像X缩放', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'图像X缩放',
        documentation :'图像X缩放'
    },
    {
        label: 'imageScaleY',
        insertText: 'imageScaleY:',
        labelDetails: { detail :' 图像Y缩放', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'图像Y缩放',
        documentation :'图像Y缩放'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' 图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'图像',
        documentation :'图像'
    },
    {
        label: 'teamColors',
        insertText: 'teamColors:',
        labelDetails: { detail :' 阵营色', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'阵营色',
        documentation :'在图像和图像堆栈上启用队伍色'
    },
    {
        label: 'imageStack',
        insertText: 'imageStack:',
        labelDetails: { detail :' 图像列表', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'图像列表',
        documentation :'推荐用于三维立体体积元素样式单位的图像列表,因为当使用相同的子画面时,可以批量绘制图像.)(目前没有实例所以不清楚,但确定是用于3d单位'
    },
    {
        label: 'stack_hOffset',
        insertText: 'stack_hOffset:',
        labelDetails: { detail :' 列表图像高度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'列表图像高度偏移',
        documentation :'用于三维立体体积元素样式单位.'
    },
    {
        label: 'stack_frameOffset',
        insertText: 'stack_frameOffset:',
        labelDetails: { detail :' 列表图像帧偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'列表图像帧偏移',
        documentation :'用于三维立体体积元素样式单位.'
    },
    {
        label: 'stack_drawInReverseOrder',
        insertText: 'stack_drawInReverseOrder:',
        labelDetails: { detail :' 列表图像绘图顺序', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'列表图像绘图顺序',
        documentation :'列表图像绘图顺序'
    },
    {
        label: 'stack_indexStart',
        insertText: 'stack_indexStart:',
        labelDetails: { detail :' 列表图像起始图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'列表图像起始图像',
        documentation :'动态整数(图像堆栈的起始图像)'
    },
    {
        label: 'stack_indexCount',
        insertText: 'stack_indexCount:',
        labelDetails: { detail :' 列表图像数量', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'列表图像数量',
        documentation :'动态整数(要绘制的图像数.可以设置为1以使用堆栈索引开始作为图像选择器)'
    },
    {
        label: 'total_frames',
        insertText: 'total_frames:',
        labelDetails: { detail :' 总帧数(跟后面两个二选一使用)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'总帧数(跟后面两个二选一使用)',
        documentation :'使用总帧数或者帧宽度/帧高度'
    },
    {
        label: 'frame_verticalOrdering',
        insertText: 'frame_verticalOrdering:',
        labelDetails: { detail :' 帧纵向排列', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'帧纵向排列',
        documentation :'如果为true则会竖着切割帧图'
    },
    {
        label: 'frame_width',
        insertText: 'frame_width:',
        labelDetails: { detail :' 帧宽度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'帧宽度',
        documentation :'帧宽度'
    },
    {
        label: 'frame_height',
        insertText: 'frame_height:',
        labelDetails: { detail :' 帧高度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'帧高度',
        documentation :'帧高度'
    },
    {
        label: 'frame',
        insertText: 'frame:',
        labelDetails: { detail :' 帧', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'帧',
        documentation :'支持动态值'
    },
    {
        label: 'addBodyFrameMultipliedBy',
        insertText: 'addBodyFrameMultipliedBy:',
        labelDetails: { detail :' 添加主体帧乘数', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'添加主体帧乘数',
        documentation :''
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' 可见', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'可见',
        documentation :'是否可见,支持动态值'
    },
    {
        label: 'xOffsetRelative',
        insertText: 'xOffsetRelative:',
        labelDetails: { detail :' X相对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'X相对偏移',
        documentation :'用于修改decal的相对位置,不支持动态值,动态请使用basePosition'
    },
    {
        label: 'yOffsetRelative',
        insertText: 'yOffsetRelative:',
        labelDetails: { detail :' Y相对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'Y相对偏移',
        documentation :'用于修改decal的相对位置,不支持动态值,动态请使用basePosition'
    },
    {
        label: 'xOffsetAbsolute',
        insertText: 'xOffsetAbsolute:',
        labelDetails: { detail :' X绝对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'X绝对偏移',
        documentation :'用于修改decal的绝对位置,支持动态值'
    },
    {
        label: 'yOffsetAbsolute',
        insertText: 'yOffsetAbsolute:',
        labelDetails: { detail :' Y绝对偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'Y绝对偏移',
        documentation :'用于修改decal的绝对位置,支持动态值'
    },
    {
        label: 'hOffset',
        insertText: 'hOffset:',
        labelDetails: { detail :' 高度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 38,
        detail :'高度偏移',
        documentation :'用于修改decal的高度'
    },
    {
        label: 'dirOffset',
        insertText: 'dirOffset:',
        labelDetails: { detail :' 角度偏移', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 39,
        detail :'角度偏移',
        documentation :'角度偏移'
    },
    {
        label: 'pivotOffset',
        insertText: 'pivotOffset:',
        labelDetails: { detail :' 坐标系旋转', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 40,
        detail :'坐标系旋转',
        documentation :'相当于把单位定位的直角坐标系旋转该角度,然后重新确定xy. 只影响X/Y相对偏移,不旋转图像'
    },
    {
        label: 'alwaysStartDirAtZero',
        insertText: 'alwaysStartDirAtZero:',
        labelDetails: { detail :' 总是固定角度为零(总是朝上)', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 41,
        detail :'总是固定角度为零(总是朝上)',
        documentation :'用于制作类似单位UI'
    },
    {
        label: 'alwaysStartHeightAtZero',
        insertText: 'alwaysStartHeightAtZero:',
        labelDetails: { detail :' 总是固定高度为零', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 42,
        detail :'总是固定高度为零',
        documentation :'对制作空中和两栖单位的UI有用'
    },
    {
        label: 'basePosition',
        insertText: 'basePosition:',
        labelDetails: { detail :' 位置参考来自', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 43,
        detail :'位置参考来自',
        documentation :'decal将以填入的单位作为中心渲染'
    },
    {
        label: 'basePositionFromLeg',
        insertText: 'basePositionFromLeg:',
        labelDetails: { detail :' 以脚为中心位置', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 44,
        detail :'以脚为中心位置',
        documentation :'decal将以填入的腿脚作为中心渲染'
    },
    {
        label: 'basePositionFromTurret',
        insertText: 'basePositionFromTurret:',
        labelDetails: { detail :' 以炮塔为中心位置', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 45,
        detail :'以炮塔为中心位置',
        documentation :'decal将以填入的炮塔作为中心渲染'
    },
    {
        label: 'basePositionFromLegEnd',
        insertText: 'basePositionFromLegEnd:',
        labelDetails: { detail :' decal将以填入的腿脚或胳膊的末端作为中心渲染', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 46,
        detail :'decal将以填入的腿脚或胳膊的末端作为中心渲染',
        documentation :''
    },
    {
        label: 'drawLineTo',
        insertText: 'drawLineTo:',
        labelDetails: { detail :' 绘制线条到', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 47,
        detail :'绘制线条到',
        documentation :'绘制一条线在该单位和填入的单位之间'
    },
    {
        label: 'image_shadow',
        insertText: 'image_shadow:',
        labelDetails: { detail :' 阴影图像', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 48,
        detail :'阴影图像',
        documentation :'阴影图像'
    },
    {
        label: 'shadowOffsetX',
        insertText: 'shadowOffsetX:',
        labelDetails: { detail :' 阴影偏移X', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 49,
        detail :'阴影偏移X',
        documentation :'阴影偏移X'
    },
    {
        label: 'shadowOffsetY',
        insertText: 'shadowOffsetY:',
        labelDetails: { detail :' 阴影偏移Y', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 50,
        detail :'阴影偏移Y',
        documentation :'阴影偏移Y'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' 颜色', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 51,
        detail :'颜色',
        documentation :'影响图像和线条.'
    },
    {
        label: 'alpha',
        insertText: 'alpha:',
        labelDetails: { detail :' 透明度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 52,
        detail :'透明度',
        documentation :'支持0-1动态浮点数,以颜色堆叠透明度. 影响图像和线条.'
    },
    {
        label: 'lineWidth',
        insertText: 'lineWidth:',
        labelDetails: { detail :' 线宽度', description: '[decal]' },
        kind: CompletionItemKind.Text,
        data: 53,
        detail :'线宽度',
        documentation :'线宽度'
    },
];