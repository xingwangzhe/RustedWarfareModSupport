import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const EFFECT: CompletionItem[] = [
    {
        label: 'life',
        insertText: 'life:',
        labelDetails: { detail :' 效果存在时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'效果存在时间',
        documentation :'默认值为200.到时间效果消失. 设置得尽可能低以减少效果开销.'
    },
    {
        label: 'lifeRandom',
        insertText: 'lifeRandom:',
        labelDetails: { detail :' 效果存在时间随机值', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'效果存在时间随机值',
        documentation :'效果存在时间的随机范围.'
    },
    {
        label: 'alsoEmitEffectsOnDeath',
        insertText: 'alsoEmitEffectsOnDeath:',
        labelDetails: { detail :' 死亡时创建效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'死亡时创建效果',
        documentation :'在生命耗尽的时候创造这些效果.'
    },
    {
        label: 'alsoEmitEffects',
        insertText: 'alsoEmitEffects:',
        labelDetails: { detail :' 也创造效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'也创造效果',
        documentation :'创建时创建更多效果,对于多效果很有用. 注意:创建的效果上的其他“ alsoEmitEffects”将被忽略,禁止套娃.'
    },
    {
        label: 'ifSpawnFailsEmitEffects',
        insertText: 'ifSpawnFailsEmitEffects:',
        labelDetails: { detail :' 如果失败则创建效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'如果失败则创建效果',
        documentation :'如果此效果的“spawnChance”失败,则产生这些效果.'
    },
    {
        label: 'alsoPlaySound',
        insertText: 'alsoPlaySound:',
        labelDetails: { detail :' 也播放音效', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'也播放音效',
        documentation :'播放音效,填文件名或内置.'
    },
    {
        label: 'createWhenOffscreen',
        insertText: 'createWhenOffscreen:',
        labelDetails: { detail :' 可创建于画面之外', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'可创建于画面之外',
        documentation :'允许在画面之外产生此效果,默认为false.'
    },
    {
        label: 'createWhenZoomedOut',
        insertText: 'createWhenZoomedOut:',
        labelDetails: { detail :' 缩小时可产生效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'缩小时可产生效果',
        documentation :'允许缩小时产生此效果,默认值为true'
    },
    {
        label: 'createWhenOverLiquid',
        insertText: 'createWhenOverLiquid:',
        labelDetails: { detail :' 创建于液体上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'创建于液体上',
        documentation :'允许在液体上方产生此效果,默认值为true'
    },
    {
        label: 'createWhenOverLand',
        insertText: 'createWhenOverLand:',
        labelDetails: { detail :' 创建于陆地上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'创建于陆地上',
        documentation :'允许在陆地上方产生此效果,默认值为true'
    },
    {
        label: 'spawnChance',
        insertText: 'spawnChance:',
        labelDetails: { detail :' 产生几率', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'产生几率',
        documentation :'默认值1.如果小于1,则效果随机被创建'
    },
    {
        label: 'showInFog',
        insertText: 'showInFog:',
        labelDetails: { detail :' 在雾中显示', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'在雾中显示',
        documentation :'默认为false'
    },
    {
        label: 'delayedStartTimer',
        insertText: 'delayedStartTimer:',
        labelDetails: { detail :' 延迟创建', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'延迟创建',
        documentation :'等待这么久再播放此动画,单位为帧.'
    },
    {
        label: 'delayedStartTimerRandom',
        insertText: 'delayedStartTimerRandom:',
        labelDetails: { detail :' 延迟创建随机时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'延迟创建随机时间',
        documentation :'等待时间随机变化'
    },
    {
        label: 'liveAfterAttachedDies',
        insertText: 'liveAfterAttachedDies:',
        labelDetails: { detail :' 目标死后存活', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'目标死后存活',
        documentation :'目标死后动画继续存活,使用AttachedToUnit时默认为false.'
    },
    {
        label: 'priority',
        insertText: 'priority:',
        labelDetails: { detail :' 优先级', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'优先级',
        documentation :'默认为高,一次显示太多效果时依据重要程度丢弃不重要的以用于创建新的.verylow/low/high/veryhigh/critical(很低,低,高,很高,至关重要)'
    },
    {
        label: 'attachedToUnit',
        insertText: 'attachedToUnit:',
        labelDetails: { detail :' 附着在单位上', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'附着在单位上',
        documentation :'此效果产生时吸附到目标单位或抛射体.将与之一起移动.'
    },
    {
        label: 'alwayStartDirAtZero',
        insertText: 'alwayStartDirAtZero:',
        labelDetails: { detail :' 初始角度总是为零', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'初始角度总是为零',
        documentation :'忽略附属单位或者产者的角度.'
    },
    {
        label: 'atmospheric',
        insertText: 'atmospheric:',
        labelDetails: { detail :' 空气效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'空气效果',
        documentation :'添加阻力使此效果减慢速度,并添加随机移动.用于模拟尾焰.'
    },
    {
        label: 'physics',
        insertText: 'physics:',
        labelDetails: { detail :' 物理效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'物理效果',
        documentation :'撞击地面时反抛射体.需要高度才能生效.'
    },
    {
        label: 'physicsGravity',
        insertText: 'physicsGravity:',
        labelDetails: { detail :' 物理重力', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'物理重力',
        documentation :'默认为1.physics:true时的垂直方向加速度.'
    },
    {
        label: 'xOffsetRelative',
        insertText: 'xOffsetRelative:',
        labelDetails: { detail :' X相对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'X相对偏移量',
        documentation :'效果起始时相对于炮塔,炮抛射体,单位的偏移的方向位置.正数向右,负数向左.'
    },
    {
        label: 'yOffsetRelative',
        insertText: 'yOffsetRelative:',
        labelDetails: { detail :' Y相对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'Y相对偏移量',
        documentation :'效果起始时相对于炮塔,炮抛射体,单位的偏移的方向位置.正数向前,负数向后.'
    },
    {
        label: 'xOffsetRelativeRandom',
        insertText: 'xOffsetRelativeRandom:',
        labelDetails: { detail :' X相对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'X相对随机偏移量',
        documentation :'X相对目标随机偏移量.随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'yOffsetRelativeRandom',
        insertText: 'yOffsetRelativeRandom:',
        labelDetails: { detail :' Y相对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'Y相对随机偏移量',
        documentation :'Y相对目标随机偏移量.随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'xOffsetAbsolute',
        insertText: 'xOffsetAbsolute:',
        labelDetails: { detail :' X绝对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'X绝对偏移量',
        documentation :'Absolute类为绝对偏移,它不像Relative那样考虑单位的方向.比如设置x向速度为1,绝对偏移则始终向右移动,相对偏移可以向任意方向移动.'
    },
    {
        label: 'yOffsetAbsolute',
        insertText: 'yOffsetAbsolute:',
        labelDetails: { detail :' Y绝对偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'Y绝对偏移量',
        documentation :'按位置偏移起动效果,忽略附加炮塔单位等的方向.'
    },
    {
        label: 'xOffsetAbsoluteRandom',
        insertText: 'xOffsetAbsoluteRandom:',
        labelDetails: { detail :' X绝对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'X绝对随机偏移量',
        documentation :'随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'yOffsetAbsoluteRandom',
        insertText: 'yOffsetAbsoluteRandom:',
        labelDetails: { detail :' Y绝对随机偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'Y绝对随机偏移量',
        documentation :'随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'xSpeedRelative',
        insertText: 'xSpeedRelative:',
        labelDetails: { detail :' X相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'X相对速度',
        documentation :'X轴相对于目标的移动速度.,正数向右,负数向左.'
    },
    {
        label: 'ySpeedRelative',
        insertText: 'ySpeedRelative:',
        labelDetails: { detail :' Y相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'Y相对速度',
        documentation :'Y轴相对于目标的移动速度.正数向前,负数向后.'
    },
    {
        label: 'xSpeedRelativeRandom',
        insertText: 'xSpeedRelativeRandom:',
        labelDetails: { detail :' X随机相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'X随机相对速度',
        documentation :'随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'ySpeedRelativeRandom',
        insertText: 'ySpeedRelativeRandom:',
        labelDetails: { detail :' Y随机相对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'Y随机相对速度',
        documentation :'随机增加或减少此值,用于偏移像素.'
    },
    {
        label: 'xSpeedAbsolute',
        insertText: 'xSpeedAbsolute:',
        labelDetails: { detail :' X绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'X绝对速度',
        documentation :'X轴相对于起点的绝对移动速度.'
    },
    {
        label: 'ySpeedAbsolute',
        insertText: 'ySpeedAbsolute:',
        labelDetails: { detail :' Y绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'Y绝对速度',
        documentation :'Y轴相对于起点的绝对移动速度.'
    },
    {
        label: 'xSpeedAbsoluteRandom',
        insertText: 'xSpeedAbsoluteRandom:',
        labelDetails: { detail :' X随机绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'X随机绝对速度',
        documentation :'按此值随机更改初始值.'
    },
    {
        label: 'ySpeedAbsoluteRandom',
        insertText: 'ySpeedAbsoluteRandom:',
        labelDetails: { detail :' Y随机绝对速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'Y随机绝对速度',
        documentation :'按此值随机更改初始值.'
    },
    {
        label: 'hOffset',
        insertText: 'hOffset:',
        labelDetails: { detail :' 高度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 38,
        detail :'高度偏移',
        documentation :'距目标的高度偏移.正数向上,负数向下.'
    },
    {
        label: 'hOffsetRandom',
        insertText: 'hOffsetRandom:',
        labelDetails: { detail :' 随机高度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 39,
        detail :'随机高度偏移',
        documentation :'按此值随机更改初始值.'
    },
    {
        label: 'hSpeed',
        insertText: 'hSpeed:',
        labelDetails: { detail :' 高度速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 40,
        detail :'高度速度',
        documentation :'高度移动速度.正数向上,负数向下.'
    },
    {
        label: 'hSpeedRandom',
        insertText: 'hSpeedRandom:',
        labelDetails: { detail :' 随机高度速度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 41,
        detail :'随机高度速度偏移',
        documentation :'按此值随机更改初始值.'
    },
    {
        label: 'dirOffset',
        insertText: 'dirOffset:',
        labelDetails: { detail :' 角度偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 42,
        detail :'角度偏移',
        documentation :'角度偏移,修改初始朝向.注意,0度可能存在朝向问题.'
    },
    {
        label: 'dirOffsetRandom',
        insertText: 'dirOffsetRandom:',
        labelDetails: { detail :' 随机角度偏移量', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 43,
        detail :'随机角度偏移量',
        documentation :'按此值随机更改偏移角度.'
    },
    {
        label: 'dirSpeed',
        insertText: 'dirSpeed:',
        labelDetails: { detail :' 转速', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 44,
        detail :'转速',
        documentation :'修改效果的旋转速度.'
    },
    {
        label: 'dirSpeedRandom',
        insertText: 'dirSpeedRandom:',
        labelDetails: { detail :' 随机转速', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 45,
        detail :'随机转速',
        documentation :'按此值随机更改旋转速度.'
    },
    {
        label: 'pivotOffset',
        insertText: 'pivotOffset:',
        labelDetails: { detail :' 枢轴偏移', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 46,
        detail :'枢轴偏移',
        documentation :'整个效果的朝向偏移'
    },
    {
        label: 'pivotOffsetRandom',
        insertText: 'pivotOffsetRandom:',
        labelDetails: { detail :' 枢轴偏移随机', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 47,
        detail :'枢轴偏移随机',
        documentation :'按此值随机更改朝向.'
    },
    {
        label: 'frameIndex',
        insertText: 'frameIndex:',
        labelDetails: { detail :' 帧索引', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 48,
        detail :'帧索引',
        documentation :'使用内置效果时所取用的帧编号,0取第一帧.'
    },
    {
        label: 'frameIndexRandom',
        insertText: 'frameIndexRandom:',
        labelDetails: { detail :' 帧随机', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 49,
        detail :'帧随机',
        documentation :'随机增减索引值,用于随机使用同组内不同的图像.'
    },
    {
        label: 'stripIndex',
        insertText: 'stripIndex:',
        labelDetails: { detail :' 图像集', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 50,
        detail :'图像集',
        documentation :'要使用的内置图像集.不能与自定义图像一起使用.如effects 效果1对应res内文件effects.png,以此类推.'
    },
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' 图像', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 51,
        detail :'图像',
        documentation :'要使用的自定义图像文件.不能与stripIndex一起使用.'
    },
    {
        label: 'imageShadow',
        insertText: 'imageShadow:',
        labelDetails: { detail :' 阴影图像', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 52,
        detail :'阴影图像',
        documentation :'用于自定义阴影的图像'
    },
    {
        label: 'scaleTo',
        insertText: 'scaleTo:',
        labelDetails: { detail :' 结束缩放倍数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 53,
        detail :'结束缩放倍数',
        documentation :'效果结束时缩放倍数.'
    },
    {
        label: 'scaleFrom',
        insertText: 'scaleFrom:',
        labelDetails: { detail :' 初始缩放倍数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 54,
        detail :'初始缩放倍数',
        documentation :'效果初始时缩放倍数,用于效果从小到大缩放,或者反向缩放.'
    },
    {
        label: 'color',
        insertText: 'color:',
        labelDetails: { detail :' 颜色', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 55,
        detail :'颜色',
        documentation :'填16进制颜色值,给图像上叠加颜色.一般建议图像使用灰度图,然后叠加颜色.注意彩色图是无法叠加白色变白的.'
    },
    {
        label: 'teamColorRatio',
        insertText: 'teamColorRatio:',
        labelDetails: { detail :' 队伍色相', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 56,
        detail :'队伍色相',
        documentation :'填0-1在图像上叠加阵营色,1为完全为阵营色.'
    },
    {
        label: 'drawType',
        insertText: 'drawType:',
        labelDetails: { detail :' 绘制类型', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 57,
        detail :'绘制类型',
        documentation :'效果的绘制类型'
    },
    {
        label: 'drawUnderUnits',
        insertText: 'drawUnderUnits:',
        labelDetails: { detail :' 绘制在单位下方', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 58,
        detail :'绘制在单位下方',
        documentation :'将此效果绘制在单位下方.'
    },
    {
        label: 'fadeInTime',
        insertText: 'fadeInTime:',
        labelDetails: { detail :' 淡入时间', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 59,
        detail :'淡入时间',
        documentation :'设置淡入效果时间,从透明到不透明.透明度值从0%到100%.'
    },
    {
        label: 'fadeOut',
        insertText: 'fadeOut:',
        labelDetails: { detail :' 淡出', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 60,
        detail :'淡出',
        documentation :'设置淡入效果时间,透明度从100%淡出到%0.把alpha设置为高于1可以延长淡出.'
    },
    {
        label: 'alpha',
        insertText: 'alpha:',
        labelDetails: { detail :' 透明度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 61,
        detail :'透明度',
        documentation :'介于0-1之间.可以设置为大于1以延迟淡出效果'
    },
    {
        label: 'trailEffect',
        insertText: 'trailEffect:',
        labelDetails: { detail :' 尾焰效果', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 62,
        detail :'尾焰效果',
        documentation :'类似于炮抛射体的尾焰'
    },
    {
        label: 'trailEffectRate',
        insertText: 'trailEffectRate:',
        labelDetails: { detail :' 尾焰效果频率', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 63,
        detail :'尾焰效果频率',
        documentation :'产生频率'
    },
    {
        label: 'shadow',
        insertText: 'shadow:',
        labelDetails: { detail :' 阴影', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 64,
        detail :'阴影',
        documentation :'true时绘制阴影.如果使用imageShadow则强制为true'
    },
    {
        label: 'frame_width',
        insertText: 'frame_width:',
        labelDetails: { detail :' 单帧宽度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 65,
        detail :'单帧宽度',
        documentation :'规定单帧的宽度像素,如果值小于图像本体宽度则选取帧时采用换列方式进行处理.'
    },
    {
        label: 'frame_height',
        insertText: 'frame_height:',
        labelDetails: { detail :' 单帧高度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 66,
        detail :'单帧高度',
        documentation :'规定单帧的高度像素,如果值小于图像本体高度则选取帧时采用换行方式进行处理.'
    },
    {
        label: 'total_frames',
        insertText: 'total_frames:',
        labelDetails: { detail :' 动画总帧数', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 67,
        detail :'动画总帧数',
        documentation :'动画的总帧数,与图像(image)或frameIndex一起使用.'
    },
    {
        label: 'animateFrameStart',
        insertText: 'animateFrameStart:',
        labelDetails: { detail :' 动画开始帧', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 68,
        detail :'动画开始帧',
        documentation :'动画从哪一帧开始,第一帧编号为0'
    },
    {
        label: 'animateFrameEnd',
        insertText: 'animateFrameEnd:',
        labelDetails: { detail :' 动画结束帧', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 69,
        detail :'动画结束帧',
        documentation :'动画在哪一帧结束.'
    },
    {
        label: 'animateFramePingPong',
        insertText: 'animateFramePingPong:',
        labelDetails: { detail :' 动画帧重放', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 70,
        detail :'动画帧重放',
        documentation :'动画正序播放完毕后再倒序播放一次.'
    },
    {
        label: 'animateFrameSpeed',
        insertText: 'animateFrameSpeed:',
        labelDetails: { detail :' 动画帧速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 71,
        detail :'动画帧速度',
        documentation :'动画播放速度,单位位游戏帧,一般动画帧数也不高,所以设置一般为0.x'
    },
    {
        label: 'animateFrameSpeedRandom',
        insertText: 'animateFrameSpeedRandom:',
        labelDetails: { detail :' 动画帧随机速度', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 72,
        detail :'动画帧随机速度',
        documentation :'按此值随机更改动画速度.'
    },
    {
        label: 'animateFrameLooping',
        insertText: 'animateFrameLooping:',
        labelDetails: { detail :' 动画帧循环', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 73,
        detail :'动画帧循环',
        documentation :'默认false.当为false时,效果被移除时,动画结束'
    },
    {
        label: 'animateFrameStartRandomAdd',
        insertText: 'animateFrameStartRandomAdd:',
        labelDetails: { detail :' 动画帧随机开始添加', description: '[effect]' },
        kind: CompletionItemKind.Text,
        data: 74,
        detail :'动画帧随机开始添加',
        documentation :'以动画起始帧为基准,按照+/-所填数字内随机选取数字进行帧随机偏移'
    },
];