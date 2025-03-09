import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const GRAPHICS: CompletionItem[] = [
    {
        label: 'image',
        insertText: 'image:',
        labelDetails: { detail :' file-image 主体图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'主体图像',
        documentation :'填图片名称,格式为png.',
        data: 'file-image'
    },
    {
        label: 'image_back',
        insertText: 'image_back:',
        labelDetails: { detail :' file-image 背景图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'背景图像',
        documentation :'可选的在单位后面绘制图像,不随单位转动.可用于工厂底图,单位角标等.',
        data: 'file-image'
    },
    {
        label: 'image_back_always_use_full_image',
        insertText: 'image_back_always_use_full_image:',
        labelDetails: { detail :' bool 图像背景总是使用完整的图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像背景总是使用完整的图像',
        documentation :'默认会裁剪或拉伸或平铺到和主体图像一致.',
        data: 'bool'
    },
    {
        label: 'image_wreak',
        insertText: 'image_wreak:',
        labelDetails: { detail :' file-image 死亡图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'死亡图像',
        documentation :'可选的单位死亡时使用的图像.',
        data: 'file-image'
    },
    {
        label: 'image_shield',
        insertText: 'image_shield:',
        labelDetails: { detail :' file-image 护盾图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'护盾图像',
        documentation :'自定义护盾所使用的图像.',
        data: 'file-image'
    },
    {
        label: 'image_offsetX',
        insertText: 'image_offsetX:',
        labelDetails: { detail :' int 图像X轴偏移', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像X轴偏移',
        documentation :'图像在X轴偏移,用于不对称图像,比如你的单位有个吊臂,这样中心不在正中间.',
        data: 'int'
    },
    {
        label: 'image_offsetY',
        insertText: 'image_offsetY:',
        labelDetails: { detail :' int 图像Y轴偏移', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像Y轴偏移',
        documentation :'图像在Y轴偏移,用于比较高的单位.',
        data: 'int'
    },
    {
        label: 'isVisible',
        insertText: 'isVisible:',
        labelDetails: { detail :' logicBoolean 可见', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'可见',
        documentation :'默认为true,如果为false将隐藏单位.',
        data: 'logicBoolean'
    },
    {
        label: 'isVisibleToEnemies',
        insertText: 'isVisibleToEnemies:',
        labelDetails: { detail :' logicBoolean 对敌人可见', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'对敌人可见',
        documentation :'与showOnMinimapToEnemies,canOnlyBeAttackedByUnitsWithTags一起使用时,可以创建隐形系统.',
        data: 'logicBoolean'
    },
    {
        label: 'teamColorsUseHue',
        insertText: 'teamColorsUseHue:',
        labelDetails: { detail :' bool 阵营色色相', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阵营色色相',
        documentation :'luke不建议使用.单位上的绿色像素转换为团队颜色. 若为true整个单位都带有团队色彩. 默认为false,挺难看的.',
        data: 'bool'
    },
    {
        label: 'teamColoringMode',
        insertText: 'teamColoringMode:',
        labelDetails: { detail :' string 阵营色模式', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阵营色模式',
        documentation :'设置单位着色逻辑,默认是纯绿.有四个值disabled,hueShift,hueAdd,pureGreen.(禁用,色相偏移,色相添加,纯绿)',
        data: 'string'
    },
    {
        label: 'scaleImagesTo',
        insertText: 'scaleImagesTo:',
        labelDetails: { detail :' float 缩放图像到', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'缩放图像到',
        documentation :'单位像素.调整图像大小以使其适合像素值.同时影响腿部和阴影图像.',
        data: 'float'
    },
    {
        label: 'imageScale',
        insertText: 'imageScale:',
        labelDetails: { detail :' float 图像缩放比例', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像缩放比例',
        documentation :'调整图像大小.默认值为1.也可以影响腿部和阴影图像.',
        data: 'float'
    },
    {
        label: 'drawLayer',
        insertText: 'drawLayer:',
        labelDetails: { detail :' string 绘制图层', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'绘制图层',
        documentation :'陆上单位通常默认为ground或ground2.运输船为ground2.wreaks, underwater, bottom, ground, ground2, experimentals, air, top',
        data: 'string'
    },
    {
        label: 'whenBeingBuiltMakeTransparentTill',
        insertText: 'whenBeingBuiltMakeTransparentTill:',
        labelDetails: { detail :' float 建造时透明度', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'建造时透明度',
        documentation :'设为0则一开始便完全不透明,设为1则直到建造完成时才不透明.',
        data: 'float'
    },
    {
        label: 'icon_zoomed_out',
        insertText: 'icon_zoomed_out:',
        labelDetails: { detail :' file-image 缩放图标', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'缩放图标',
        documentation :'缩放时显示的图标',
        data: 'file-image'
    },
    {
        label: 'icon_zoomed_out_neverShow',
        insertText: 'icon_zoomed_out_neverShow:',
        labelDetails: { detail :' bool 缩放图标永不显示', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'缩放图标永不显示',
        documentation :'缩放图标永不显示.',
        data: 'bool'
    },
    {
        label: 'icon_build',
        insertText: 'icon_build:',
        labelDetails: { detail :' file-image 建造图标', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'建造图标',
        documentation :'填文件名,指定图像作为单位在列表中显示的图像.',
        data: 'file-image'
    },
    {
        label: 'image_floatingPointSize',
        insertText: 'image_floatingPointSize:',
        labelDetails: { detail :' bool 对奇数大小的图像进行一个像素的调整', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'对奇数大小的图像进行一个像素的调整',
        documentation :'(填写0/1,无直观区别,有说法是把x-1来改变单位坐标系使其更方便使用)--Fixes off by 1 pixel sizing for odd sized images -',
        data: 'bool'
    },
    {
        label: 'image_offsetH',
        insertText: 'image_offsetH:',
        labelDetails: { detail :' float 高度绘制偏移', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'高度绘制偏移',
        documentation :'height offset',
        data: 'float'
    },
    {
        label: 'showSelectionIndicator',
        insertText: 'showSelectionIndicator:',
        labelDetails: { detail :' bool 显示选择指示', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示选择指示',
        documentation :'(单位的选择框)',
        data: 'bool'
    },
    {
        label: 'image_turret',
        insertText: 'image_turret:',
        labelDetails: { detail :' file-image 炮塔图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔图像',
        documentation :'所有炮塔的默认图像,也可以为每个炮塔设置专用图像.',
        data: 'file-image'
    },
    {
        label: 'turretImageScale',
        insertText: 'turretImageScale:',
        labelDetails: { detail :' float 炮塔图像缩放', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔图像缩放',
        documentation :'按比例缩放炮塔图像',
        data: 'float'
    },
    {
        label: 'teamColorsOnTurret',
        insertText: 'teamColorsOnTurret:',
        labelDetails: { detail :' bool 炮塔使用队伍色', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔使用队伍色',
        documentation :'默认为false.在转塔上也应用团队颜色.',
        data: 'bool'
    },
    {
        label: 'scaleTurretImagesTo',
        insertText: 'scaleTurretImagesTo:',
        labelDetails: { detail :' float 炮塔图像缩放', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔图像缩放',
        documentation :'单位像素.缩放炮塔图像至指定像素,只用填宽度',
        data: 'float'
    },
    {
        label: 'lock_body_rotation_with_main_turret',
        insertText: 'lock_body_rotation_with_main_turret:',
        labelDetails: { detail :' bool 锁定主体旋转随主炮塔', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'锁定主体旋转随主炮塔',
        documentation :'锁定主体图像旋转追随主炮塔',
        data: 'bool'
    },
    {
        label: 'lock_leg_rotation_with_main_turret',
        insertText: 'lock_leg_rotation_with_main_turret:',
        labelDetails: { detail :' bool 锁定腿脚旋转随主炮塔', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'锁定腿脚旋转随主炮塔',
        documentation :'锁定腿脚图像旋转追随主炮塔',
        data: 'bool'
    },
    {
        label: 'image_shadow',
        insertText: 'image_shadow:',
        labelDetails: { detail :' file-image 阴影图像', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像',
        documentation :'填NONE或AUTO,或图像文件.',
        data: 'file-image'
    },
    {
        label: 'shadowOffsetX',
        insertText: 'shadowOffsetX:',
        labelDetails: { detail :' float 阴影图像偏移X轴', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像偏移X轴',
        documentation :'阴影x轴偏移值,正数往右',
        data: 'float'
    },
    {
        label: 'shadowOffsetY',
        insertText: 'shadowOffsetY:',
        labelDetails: { detail :' float 阴影图像偏移Y轴', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像偏移Y轴',
        documentation :'阴影y轴偏移值,正数往下',
        data: 'float'
    },
    {
        label: 'image_shadow_frames',
        insertText: 'image_shadow_frames:',
        labelDetails: { detail :' bool 阴影图像指定', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阴影图像指定',
        documentation :'true时阴影不随单位移动而改变方向.',
        data: 'bool'
    },
    {
        label: 'lock_shadow_rotation_with_main_turret',
        insertText: 'lock_shadow_rotation_with_main_turret:',
        labelDetails: { detail :' bool 阴影锁定为主炮塔方向', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'阴影锁定为主炮塔方向',
        documentation :'将身体图像阴影锁定到主炮塔的方向',
        data: 'bool'
    },
    {
        label: 'total_frames',
        insertText: 'total_frames:',
        labelDetails: { detail :' int 图像帧数', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像帧数',
        documentation :'默认值为1.将图像分割为指定分数,用于动画.第一帧编号为0',
        data: 'int'
    },
    {
        label: 'default_frame',
        insertText: 'default_frame:',
        labelDetails: { detail :' int 默认帧', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'默认帧',
        documentation :'指定默认显示为第几帧,默认为0即第一帧',
        data: 'int'
    },
    {
        label: 'frame_width',
        insertText: 'frame_width:',
        labelDetails: { detail :' int 图像宽度', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像宽度',
        documentation :'设置单帧宽度,自动计算并覆盖总帧数.',
        data: 'int'
    },
    {
        label: 'frame_height',
        insertText: 'frame_height:',
        labelDetails: { detail :' int 图像高度', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'图像高度',
        documentation :'默认为图像高度',
        data: 'int'
    },
    {
        label: 'splastEffect',
        insertText: 'splastEffect:',
        labelDetails: { detail :' bool 水波效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'水波效果',
        documentation :'在水上时创建水波效果.默认为false',
        data: 'bool'
    },
    {
        label: 'dustEffect',
        insertText: 'dustEffect:',
        labelDetails: { detail :' bool 灰尘效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'灰尘效果',
        documentation :'在地面上产生灰尘效果.默认为false',
        data: 'bool'
    },
    {
        label: 'splastEffectReverse',
        insertText: 'splastEffectReverse:',
        labelDetails: { detail :' bool 逆向水波效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'逆向水波效果',
        documentation :'填true时,在倒车时也能产生效果',
        data: 'bool'
    },
    {
        label: 'dustEffectReverse',
        insertText: 'dustEffectReverse:',
        labelDetails: { detail :' bool 逆向灰尘效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'逆向灰尘效果',
        documentation :'填true时,在倒车时也能产生效果',
        data: 'bool'
    },
    {
        label: 'movementEffect',
        insertText: 'movementEffect:',
        labelDetails: { detail :' effectRef 运动效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'运动效果',
        documentation :'自定义运动效果,可以是内置的或者自定义的.',
        data: 'effectRef'
    },
    {
        label: 'movementEffectReverse',
        insertText: 'movementEffectReverse:',
        labelDetails: { detail :' effectRef 逆向运动效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'逆向运动效果',
        documentation :'自定义倒车效果.',
        data: 'effectRef'
    },
    {
        label: 'movementEffectRate',
        insertText: 'movementEffectRate:',
        labelDetails: { detail :' float 运动效果频率', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'运动效果频率',
        documentation :'自定义效果产生频率,每隔多少帧一次.',
        data: 'float'
    },
    {
        label: 'movementEffectReverseFlipEffects',
        insertText: 'movementEffectReverseFlipEffects:',
        labelDetails: { detail :' bool 逆向时反转运动效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'逆向时反转运动效果',
        documentation :'倒车时反转效果',
        data: 'bool'
    },
    {
        label: 'repairEffect',
        insertText: 'repairEffect:',
        labelDetails: { detail :' effectRef 维修效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'维修效果',
        documentation :'自定义维修效果,可以是任何东西.替换构建时的默认效果',
        data: 'effectRef'
    },
    {
        label: 'repairEffectAtTarget',
        insertText: 'repairEffectAtTarget:',
        labelDetails: { detail :' effectRef 维修目标效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'维修目标效果',
        documentation :'维修目标上产生的效果.',
        data: 'effectRef'
    },
    {
        label: 'repairEffectRate',
        insertText: 'repairEffectRate:',
        labelDetails: { detail :' float 维修效果频率', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'维修效果频率',
        documentation :'维修效果每隔多少帧产生一次.',
        data: 'float'
    },
    {
        label: 'reclaimEffect',
        insertText: 'reclaimEffect:',
        labelDetails: { detail :' effectRef 回收效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'回收效果',
        documentation :'自定义回收效果,可以是任何东西.替换回收时的默认效果',
        data: 'effectRef'
    },
    {
        label: 'reclaimEffectAtTarget',
        insertText: 'reclaimEffectAtTarget:',
        labelDetails: { detail :' effectRef 回收目标效果', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'回收目标效果',
        documentation :'回收目标上产生的效果.',
        data: 'effectRef'
    },
    {
        label: 'reclaimEffectRate',
        insertText: 'reclaimEffectRate:',
        labelDetails: { detail :' float 回收效果频率', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'回收效果频率',
        documentation :'回收效果每隔多少帧产生一次.',
        data: 'float'
    },
    {
        label: 'rotate_with_direction',
        insertText: 'rotate_with_direction:',
        labelDetails: { detail :' bool 随角度旋转', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'随角度旋转',
        documentation :'默认为true.设置为false时将单位图像锁定为0度.通常与animation_direction_ *一起用作多向视图.',
        data: 'bool'
    },
    {
        label: 'animation_direction_useMainTurret',
        insertText: 'animation_direction_useMainTurret:',
        labelDetails: { detail :' bool 多向动画使用主炮塔', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画使用主炮塔',
        documentation :'将炮塔的方向作为当前多向动画的使用的方向',
        data: 'bool'
    },
    {
        label: 'animation_direction_units',
        insertText: 'animation_direction_units:',
        labelDetails: { detail :' float 多向动画度数', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画度数',
        documentation :'每隔多少度切换一次素材,比如填45代表8个方向,90个代表4个方向的动画.与rotate_with_direction一起使用.',
        data: 'float'
    },
    {
        label: 'animation_direction_strideX',
        insertText: 'animation_direction_strideX:',
        labelDetails: { detail :' int 多向动画x向', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画x向',
        documentation :'动画帧取值在X方向改变时偏移.一般填0',
        data: 'int'
    },
    {
        label: 'animation_direction_strideY',
        insertText: 'animation_direction_strideY:',
        labelDetails: { detail :' int 多向动画y向', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画y向',
        documentation :'动画帧在方向改变Y轴偏移偏移.与frame_height一起使用.一般填1',
        data: 'int'
    },
    {
        label: 'animation_direction_starting',
        insertText: 'animation_direction_starting:',
        labelDetails: { detail :' float 多向动画朝向', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画朝向',
        documentation :'第一帧的方向,取决于你的素材.你要考虑转向后避免正负数交替现象,否则会导致素材朝向异常.',
        data: 'float'
    },
    {
        label: 'disableLowHpFire',
        insertText: 'disableLowHpFire:',
        labelDetails: { detail :' bool 禁用低生命冒火', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'禁用低生命冒火',
        documentation :'禁用低生命值时冒火的视觉效果',
        data: 'bool'
    },
    {
        label: 'disableLowHpSmoke',
        insertText: 'disableLowHpSmoke:',
        labelDetails: { detail :' bool 禁用低生命冒烟', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'禁用低生命冒烟',
        documentation :'禁用低生命值时冒烟的视觉效果',
        data: 'bool'
    },
    {
        label: 'showTransportBar',
        insertText: 'showTransportBar:',
        labelDetails: { detail :' bool 显示运输条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示运输条',
        documentation :'填true时显示运输条,false禁用.默认为true.',
        data: 'bool'
    },
    {
        label: 'showHealthBar',
        insertText: 'showHealthBar:',
        labelDetails: { detail :' bool 显示生命条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示生命条',
        documentation :'填true时显示生命条,false禁用.默认为true.',
        data: 'bool'
    },
    {
        label: 'showHealthBarChanges',
        insertText: 'showHealthBarChanges:',
        labelDetails: { detail :' bool 显示生命条变动', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示生命条变动',
        documentation :'显示生命条变动',
        data: 'bool'
    },
    {
        label: 'showEnergyBar',
        insertText: 'showEnergyBar:',
        labelDetails: { detail :' bool 显示能量条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示能量条',
        documentation :'填true时显示能量条,false禁用.默认为true.',
        data: 'bool'
    },
    {
        label: 'showShieldBar',
        insertText: 'showShieldBar:',
        labelDetails: { detail :' bool 显示护盾条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示护盾条',
        documentation :'填true时显示护盾条,false禁用.默认为true.',
        data: 'bool'
    },
    {
        label: 'showQueueBar',
        insertText: 'showQueueBar:',
        labelDetails: { detail :' bool 显示队列条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示队列条',
        documentation :'填true时显示操作,生成的队列条,false禁用.默认为true.',
        data: 'bool'
    },
    {
        label: 'showShotDelayBar',
        insertText: 'showShotDelayBar:',
        labelDetails: { detail :' bool 显示开火后的冷却条', description: '[graphics]' },
        kind: CompletionItemKind.Text,
        detail :'显示开火后的冷却条',
        documentation :'(默认为true) - 用于显示开火速度慢的炮塔的冷却指示条(译者注:原文calldown似乎有误,应为cooldown)',
        data: 'bool'
    },
];