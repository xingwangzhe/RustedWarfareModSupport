import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const EFFECT: CompletionItem[] = [
    {
        label: 'life',
        insertText: 'life:',
        labelDetails: { detail :' float 效果存在时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'效果存在时间',
        documentation :'默认值为200.到时间效果消失. 设置得尽可能低以减少效果开销.',
        data: 'float'
    },
    {
        label: 'lifeRandom',
        insertText: 'lifeRandom:',
        labelDetails: { detail :' float 效果存在时间随机值', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'效果存在时间随机值',
        documentation :'效果存在时间的随机范围.',
        data: 'float'
    },
    {
        label: 'alsoEmitEffectsOnDeath',
        insertText: 'alsoEmitEffectsOnDeath:',
        labelDetails: { detail :' effectRef 死亡时创建效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'死亡时创建效果',
        documentation :'在生命耗尽的时候创造这些效果.',
        data: 'effectRef'
    },
    {
        label: 'alsoEmitEffects',
        insertText: 'alsoEmitEffects:',
        labelDetails: { detail :' effectRef 也创造效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'也创造效果',
        documentation :'创建时创建更多效果,对于多效果很有用. 注意:创建的效果上的其他“ alsoEmitEffects”将被忽略,禁止套娃.',
        data: 'effectRef'
    },
    {
        label: 'ifSpawnFailsEmitEffects',
        insertText: 'ifSpawnFailsEmitEffects:',
        labelDetails: { detail :' effectRef 如果失败则创建效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'如果失败则创建效果',
        documentation :'如果此效果的“spawnChance”失败,则产生这些效果.',
        data: 'effectRef'
    },
    {
        label: 'alsoPlaySound',
        insertText: 'alsoPlaySound:',
        labelDetails: { detail :' file-sound 也播放音效', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'也播放音效',
        documentation :'播放音效,填文件名或内置.',
        data: 'file-sound'
    },
    {
        label: 'createWhenOffscreen',
        insertText: 'createWhenOffscreen:',
        labelDetails: { detail :' bool 可创建于画面之外', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'可创建于画面之外',
        documentation :'允许在画面之外产生此效果,默认为false.',
        data: 'bool'
    },
    {
        label: 'createWhenZoomedOut',
        insertText: 'createWhenZoomedOut:',
        labelDetails: { detail :' bool 缩小时可产生效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'缩小时可产生效果',
        documentation :'允许缩小时产生此效果,默认值为true',
        data: 'bool'
    },
    {
        label: 'createWhenOverLiquid',
        insertText: 'createWhenOverLiquid:',
        labelDetails: { detail :' bool 创建于液体上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'创建于液体上',
        documentation :'允许在液体上方产生此效果,默认值为true',
        data: 'bool'
    },
    {
        label: 'createWhenOverLand',
        insertText: 'createWhenOverLand:',
        labelDetails: { detail :' bool 创建于陆地上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'创建于陆地上',
        documentation :'允许在陆地上方产生此效果,默认值为true',
        data: 'bool'
    },
    {
        label: 'spawnChance',
        insertText: 'spawnChance:',
        labelDetails: { detail :' float 产生几率', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'产生几率',
        documentation :'默认值1.如果小于1,则效果随机被创建',
        data: 'float'
    },
    {
        label: 'showInFog',
        insertText: 'showInFog:',
        labelDetails: { detail :' bool 在雾中显示', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'在雾中显示',
        documentation :'默认为false',
        data: 'bool'
    },
    {
        label: 'delayedStartTimer',
        insertText: 'delayedStartTimer:',
        labelDetails: { detail :' time 延迟创建', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'延迟创建',
        documentation :'等待这么久再播放此动画,单位为帧.',
        data: 'time'
    },
    {
        label: 'delayedStartTimerRandom',
        insertText: 'delayedStartTimerRandom:',
        labelDetails: { detail :' float 延迟创建随机时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'延迟创建随机时间',
        documentation :'等待时间随机变化',
        data: 'float'
    },
    {
        label: 'liveAfterAttachedDies',
        insertText: 'liveAfterAttachedDies:',
        labelDetails: { detail :' bool 目标死后存活', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'目标死后存活',
        documentation :'目标死后动画继续存活,使用AttachedToUnit时默认为false.',
        data: 'bool'
    },
    {
        label: 'priority',
        insertText: 'priority:',
        labelDetails: { detail :' string 优先级', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'优先级',
        documentation :'默认为高,一次显示太多效果时依据重要程度丢弃不重要的以用于创建新的.verylow/low/high/veryhigh/critical(很低,低,高,很高,至关重要)',
        data: 'string'
    },
    {
        label: 'attachedToUnit',
        insertText: 'attachedToUnit:',
        labelDetails: { detail :' bool 附着在单位上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'附着在单位上',
        documentation :'此效果产生时吸附到目标单位或抛射体.将与之一起移动.',
        data: 'bool'
    },
    {
        label: 'alwayStartDirAtZero',
        insertText: 'alwayStartDirAtZero:',
        labelDetails: { detail :' bool 初始角度总是为零', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'初始角度总是为零',
        documentation :'忽略附属单位或者产者的角度.',
        data: 'bool'
    },
    {
        label: 'atmospheric',
        insertText: 'atmospheric:',
        labelDetails: { detail :' bool 空气效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'空气效果',
        documentation :'添加阻力使此效果减慢速度,并添加随机移动.用于模拟尾焰.',
        data: 'bool'
    },
    {
        label: 'physics',
        insertText: 'physics:',
        labelDetails: { detail :' bool 物理效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'物理效果',
        documentation :'撞击地面时反抛射体.需要高度才能生效.',
        data: 'bool'
    },
    {
        label: 'physicsGravity',
        insertText: 'physicsGravity:',
        labelDetails: { detail :' float 物理重力', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'物理重力',
        documentation :'默认为1.physics:true时的垂直方向加速度.',
        data: 'float'
    },
    {
        label: 'xOffsetRelative',
        insertText: 'xOffsetRelative:',
        labelDetails: { detail :' float X相对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X相对偏移量',
        documentation :'效果起始时相对于炮塔,炮抛射体,单位的偏移的方向位置.正数向右,负数向左.',
        data: 'float'
    },
    {
        label: 'yOffsetRelative',
        insertText: 'yOffsetRelative:',
        labelDetails: { detail :' float Y相对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y相对偏移量',
        documentation :'效果起始时相对于炮塔,炮抛射体,单位的偏移的方向位置.正数向前,负数向后.',
        data: 'float'
    },
    {
        label: 'xOffsetRelativeRandom',
        insertText: 'xOffsetRelativeRandom:',
        labelDetails: { detail :' float X相对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X相对随机偏移量',
        documentation :'X相对目标随机偏移量.随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'yOffsetRelativeRandom',
        insertText: 'yOffsetRelativeRandom:',
        labelDetails: { detail :' float Y相对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y相对随机偏移量',
        documentation :'Y相对目标随机偏移量.随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'xOffsetAbsolute',
        insertText: 'xOffsetAbsolute:',
        labelDetails: { detail :' float X绝对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X绝对偏移量',
        documentation :'Absolute类为绝对偏移,它不像Relative那样考虑单位的方向.比如设置x向速度为1,绝对偏移则始终向右移动,相对偏移可以向任意方向移动.',
        data: 'float'
    },
    {
        label: 'yOffsetAbsolute',
        insertText: 'yOffsetAbsolute:',
        labelDetails: { detail :' float Y绝对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y绝对偏移量',
        documentation :'按位置偏移起动效果,忽略附加炮塔单位等的方向.',
        data: 'float'
    },
    {
        label: 'xOffsetAbsoluteRandom',
        insertText: 'xOffsetAbsoluteRandom:',
        labelDetails: { detail :' float X绝对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X绝对随机偏移量',
        documentation :'随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'yOffsetAbsoluteRandom',
        insertText: 'yOffsetAbsoluteRandom:',
        labelDetails: { detail :' float Y绝对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y绝对随机偏移量',
        documentation :'随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'xSpeedRelative',
        insertText: 'xSpeedRelative:',
        labelDetails: { detail :' float X相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X相对速度',
        documentation :'X轴相对于目标的移动速度.,正数向右,负数向左.',
        data: 'float'
    },
    {
        label: 'ySpeedRelative',
        insertText: 'ySpeedRelative:',
        labelDetails: { detail :' float Y相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y相对速度',
        documentation :'Y轴相对于目标的移动速度.正数向前,负数向后.',
        data: 'float'
    },
    {
        label: 'xSpeedRelativeRandom',
        insertText: 'xSpeedRelativeRandom:',
        labelDetails: { detail :' float X随机相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X随机相对速度',
        documentation :'随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'ySpeedRelativeRandom',
        insertText: 'ySpeedRelativeRandom:',
        labelDetails: { detail :' float Y随机相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y随机相对速度',
        documentation :'随机增加或减少此值,用于偏移像素.',
        data: 'float'
    },
    {
        label: 'xSpeedAbsolute',
        insertText: 'xSpeedAbsolute:',
        labelDetails: { detail :' float X绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X绝对速度',
        documentation :'X轴相对于起点的绝对移动速度.',
        data: 'float'
    },
    {
        label: 'ySpeedAbsolute',
        insertText: 'ySpeedAbsolute:',
        labelDetails: { detail :' float Y绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y绝对速度',
        documentation :'Y轴相对于起点的绝对移动速度.',
        data: 'float'
    },
    {
        label: 'xSpeedAbsoluteRandom',
        insertText: 'xSpeedAbsoluteRandom:',
        labelDetails: { detail :' float X随机绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'X随机绝对速度',
        documentation :'按此值随机更改初始值.',
        data: 'float'
    },
    {
        label: 'ySpeedAbsoluteRandom',
        insertText: 'ySpeedAbsoluteRandom:',
        labelDetails: { detail :' float Y随机绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'Y随机绝对速度',
        documentation :'按此值随机更改初始值.',
        data: 'float'
    },
    {
        label: 'hOffset',
        insertText: 'hOffset:',
        labelDetails: { detail :' float 高度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'高度偏移',
        documentation :'距目标的高度偏移.正数向上,负数向下.',
        data: 'float'
    },
    {
        label: 'hOffsetRandom',
        insertText: 'hOffsetRandom:',
        labelDetails: { detail :' float 随机高度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'随机高度偏移',
        documentation :'按此值随机更改初始值.',
        data: 'float'
    },
    {
        label: 'hSpeed',
        insertText: 'hSpeed:',
        labelDetails: { detail :' float 高度速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'高度速度',
        documentation :'高度移动速度.正数向上,负数向下.',
        data: 'float'
    },
    {
        label: 'hSpeedRandom',
        insertText: 'hSpeedRandom:',
        labelDetails: { detail :' float 随机高度速度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'随机高度速度偏移',
        documentation :'按此值随机更改初始值.',
        data: 'float'
    },
    {
        label: 'dirOffset',
        insertText: 'dirOffset:',
        labelDetails: { detail :' float 角度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'角度偏移',
        documentation :'角度偏移,修改初始朝向.注意,0度可能存在朝向问题.',
        data: 'float'
    },
    {
        label: 'dirOffsetRandom',
        insertText: 'dirOffsetRandom:',
        labelDetails: { detail :' float 随机角度偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'随机角度偏移量',
        documentation :'按此值随机更改偏移角度.',
        data: 'float'
    },
    {
        label: 'dirSpeed',
        insertText: 'dirSpeed:',
        labelDetails: { detail :' float 转速', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'转速',
        documentation :'修改效果的旋转速度.',
        data: 'float'
    },
    {
        label: 'dirSpeedRandom',
        insertText: 'dirSpeedRandom:',
        labelDetails: { detail :' float 随机转速', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'随机转速',
        documentation :'按此值随机更改旋转速度.',
        data: 'float'
    },
    {
        label: 'pivotOffset',
        insertText: 'pivotOffset:',
        labelDetails: { detail :' float 枢轴偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'枢轴偏移',
        documentation :'整个效果的朝向偏移',
        data: 'float'
    },
    {
        label: 'pivotOffsetRandom',
        insertText: 'pivotOffsetRandom:',
        labelDetails: { detail :' float 枢轴偏移随机', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'枢轴偏移随机',
        documentation :'按此值随机更改朝向.',
        data: 'float'
    },
    {
        label: 'frameIndex',
        insertText: 'frameIndex:',
        labelDetails: { detail :' int 帧索引', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'帧索引',
        documentation :'使用内置效果时所取用的帧编号,0取第一帧.',
        data: 'int'
    },
    {
        label: 'frameIndexRandom',
        insertText: 'frameIndexRandom:',
        labelDetails: { detail :' int 帧随机', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'帧随机',
        documentation :'随机增减索引值,用于随机使用同组内不同的图像.',
        data: 'int'
    },
    {
        label: 'stripIndex',
        insertText: 'stripIndex:',
        labelDetails: { detail :' int/string 图像集', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'图像集',
        documentation :'要使用的内置图像集.不能与自定义图像一起使用.如effects 效果1对应res内文件effects.png,以此类推.',
        data: 'int/string'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' file-image 图像', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'图像',
        documentation :'要使用的自定义图像文件.不能与stripIndex一起使用.',
        data: 'file-image'
    },
    {
        label: 'imageShadow',
        insertText: 'imageShadow:',
        labelDetails: { detail :' file-image 阴影图像', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像',
        documentation :'用于自定义阴影的图像',
        data: 'file-image'
    },
    {
        label: 'scaleTo',
        insertText: 'scaleTo:',
        labelDetails: { detail :' float 结束缩放倍数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'结束缩放倍数',
        documentation :'效果结束时缩放倍数.',
        data: 'float'
    },
    {
        label: 'scaleFrom',
        insertText: 'scaleFrom:',
        labelDetails: { detail :' float 初始缩放倍数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'初始缩放倍数',
        documentation :'效果初始时缩放倍数,用于效果从小到大缩放,或者反向缩放.',
        data: 'float'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' color 颜色', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'颜色',
        documentation :'填16进制颜色值,给图像上叠加颜色.一般建议图像使用灰度图,然后叠加颜色.注意彩色图是无法叠加白色变白的.',
        data: 'color'
    },
    {
        label: 'teamColorRatio',
        insertText: 'teamColorRatio:',
        labelDetails: { detail :' float 队伍色相', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'队伍色相',
        documentation :'填0-1在图像上叠加阵营色,1为完全为阵营色.',
        data: 'float'
    },
    {
        label: 'drawType',
        insertText: 'drawType:',
        labelDetails: { detail :' string 绘制类型', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'绘制类型',
        documentation :'效果的绘制类型',
        data: 'string'
    },
    {
        label: 'drawUnderUnits',
        insertText: 'drawUnderUnits:',
        labelDetails: { detail :' bool 绘制在单位下方', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'绘制在单位下方',
        documentation :'将此效果绘制在单位下方.',
        data: 'bool'
    },
    {
        label: 'fadeInTime',
        insertText: 'fadeInTime:',
        labelDetails: { detail :' float 淡入时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'淡入时间',
        documentation :'设置淡入效果时间,从透明到不透明.透明度值从0%到100%.',
        data: 'float'
    },
    {
        label: 'fadeOut',
        insertText: 'fadeOut:',
        labelDetails: { detail :' bool 淡出', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'淡出',
        documentation :'设置淡入效果时间,透明度从100%淡出到%0.把alpha设置为高于1可以延长淡出.',
        data: 'bool'
    },
    {
        label: 'alpha',
        insertText: 'alpha:',
        labelDetails: { detail :' float 透明度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'透明度',
        documentation :'介于0-1之间.可以设置为大于1以延迟淡出效果',
        data: 'float'
    },
    {
        label: 'trailEffect',
        insertText: 'trailEffect:',
        labelDetails: { detail :' effectRef 尾焰效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'尾焰效果',
        documentation :'类似于炮抛射体的尾焰',
        data: 'effectRef'
    },
    {
        label: 'trailEffectRate',
        insertText: 'trailEffectRate:',
        labelDetails: { detail :' float 尾焰效果频率', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'尾焰效果频率',
        documentation :'产生频率',
        data: 'float'
    },
    {
        label: 'shadow',
        insertText: 'shadow:',
        labelDetails: { detail :' bool 阴影', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'阴影',
        documentation :'true时绘制阴影.如果使用imageShadow则强制为true',
        data: 'bool'
    },
    {
        label: 'frame_width',
        insertText: 'frame_width:',
        labelDetails: { detail :' int 单帧宽度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'单帧宽度',
        documentation :'规定单帧的宽度像素,如果值小于图像本体宽度则选取帧时采用换列方式进行处理.',
        data: 'int'
    },
    {
        label: 'frame_height',
        insertText: 'frame_height:',
        labelDetails: { detail :' int 单帧高度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'单帧高度',
        documentation :'规定单帧的高度像素,如果值小于图像本体高度则选取帧时采用换行方式进行处理.',
        data: 'int'
    },
    {
        label: 'total_frames',
        insertText: 'total_frames:',
        labelDetails: { detail :' int 动画总帧数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画总帧数',
        documentation :'动画的总帧数,与图像(image)或frameIndex一起使用.',
        data: 'int'
    },
    {
        label: 'animateFrameStart',
        insertText: 'animateFrameStart:',
        labelDetails: { detail :' int 动画开始帧', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画开始帧',
        documentation :'动画从哪一帧开始,第一帧编号为0',
        data: 'int'
    },
    {
        label: 'animateFrameEnd',
        insertText: 'animateFrameEnd:',
        labelDetails: { detail :' int 动画结束帧', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画结束帧',
        documentation :'动画在哪一帧结束.',
        data: 'int'
    },
    {
        label: 'animateFramePingPong',
        insertText: 'animateFramePingPong:',
        labelDetails: { detail :' bool 动画帧重放', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画帧重放',
        documentation :'动画正序播放完毕后再倒序播放一次.',
        data: 'bool'
    },
    {
        label: 'animateFrameSpeed',
        insertText: 'animateFrameSpeed:',
        labelDetails: { detail :' time 动画帧速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画帧速度',
        documentation :'动画播放速度,单位位游戏帧,一般动画帧数也不高,所以设置一般为0.x',
        data: 'time'
    },
    {
        label: 'animateFrameSpeedRandom',
        insertText: 'animateFrameSpeedRandom:',
        labelDetails: { detail :' time 动画帧随机速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画帧随机速度',
        documentation :'按此值随机更改动画速度.',
        data: 'time'
    },
    {
        label: 'animateFrameLooping',
        insertText: 'animateFrameLooping:',
        labelDetails: { detail :' bool 动画帧循环', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画帧循环',
        documentation :'默认false.当为false时,效果被移除时,动画结束',
        data: 'bool'
    },
    {
        label: 'animateFrameStartRandomAdd',
        insertText: 'animateFrameStartRandomAdd:',
        labelDetails: { detail :' float 动画帧随机开始添加', description: '[effect]' },
        kind: CompletionItemKind.Text,
        detail :'动画帧随机开始添加',
        documentation :'以动画起始帧为基准,按照+/-所填数字内随机选取数字进行帧随机偏移',
        data: 'float'
    },
];