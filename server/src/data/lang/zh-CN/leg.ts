import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const LEG: CompletionItem[] = [
    {
        label: 'x',
        insertText: 'x:',
        labelDetails: { detail :' x:', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'x:',
        documentation :'设置脚在X轴上的位置.'
    },
    {
        label: 'y',
        insertText: 'y:',
        labelDetails: { detail :' y:', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'y:',
        documentation :'设置脚在Y轴上的位置.'
    },
    {
        label: 'copyFrom',
        insertText: 'copyFrom:',
        labelDetails: { detail :' 复制与', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'复制与',
        documentation :'从另一条腿复制.仅需设置一次腿部值时有用'
    },
    {
        label: 'attach_x',
        insertText: 'attach_x:',
        labelDetails: { detail :' x轴链接位置', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'x轴链接位置',
        documentation :'在X轴上设置腿部的附着点.'
    },
    {
        label: 'attach_y',
        insertText: 'attach_y:',
        labelDetails: { detail :' Y轴链接位置', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'Y轴链接位置',
        documentation :'在Y轴上设置腿部的附着点.'
    },
    {
        label: 'rotateSpeed',
        insertText: 'rotateSpeed:',
        labelDetails: { detail :' 旋转速度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'旋转速度',
        documentation :'设置脚旋转速度,非对称情况下很明显.'
    },
    {
        label: 'endDirOffset',
        insertText: 'endDirOffset:',
        labelDetails: { detail :' 末端角度偏移值', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'末端角度偏移值',
        documentation :'目标脚/末端相对于身体的旋转角度.'
    },
    {
        label: 'lockMovement',
        insertText: 'lockMovement:',
        labelDetails: { detail :' 锁定运动', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'锁定运动',
        documentation :'禁止使用腿脚,将其锁定到主体.用于将行走单位转换为飞行单.'
    },
    {
        label: 'heightSpeed',
        insertText: 'heightSpeed:',
        labelDetails: { detail :' 高度速度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'高度速度',
        documentation :'移动时脚抬高速度和高度.'
    },
    {
        label: 'moveSpeed',
        insertText: 'moveSpeed:',
        labelDetails: { detail :' 移动速度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'移动速度',
        documentation :'腿脚移动速度.'
    },
    {
        label: 'moveWarmUp',
        insertText: 'moveWarmUp:',
        labelDetails: { detail :' 移动延迟', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'移动延迟',
        documentation :'腿脚移动延迟'
    },
    {
        label: 'holdDisMin',
        insertText: 'holdDisMin:',
        labelDetails: { detail :' 最小移动距离', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'最小移动距离',
        documentation :'默认值为7.如果相邻的腿还没有重新移动,则至少移动此距离.'
    },
    {
        label: 'holdDisMax',
        insertText: 'holdDisMax:',
        labelDetails: { detail :' 最大移动距离', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'最大移动距离',
        documentation :'默认值为16.如果已经移动超过此距离则强制重新放置腿.'
    },
    {
        label: 'holdDisMin_maxMovingLegs',
        insertText: 'holdDisMin_maxMovingLegs:',
        labelDetails: { detail :' 最大移动腿数目', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'最大移动腿数目',
        documentation :'最多移动腿数目'
    },
    {
        label: 'hold_moveOnlyIfFurthest',
        insertText: 'hold_moveOnlyIfFurthest:',
        labelDetails: { detail :' 只在最远时保持移动', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'只在最远时保持移动',
        documentation :'保持移动仅在最远时候.'
    },
    {
        label: 'holdDisMin_checkNeighbours',
        insertText: 'holdDisMin_checkNeighbours:',
        labelDetails: { detail :' 最小移动距离检查相邻', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'最小移动距离检查相邻',
        documentation :'移动最小距离时检查相邻的腿脚.'
    },
    {
        label: 'hardLimit',
        insertText: 'hardLimit:',
        labelDetails: { detail :' 硬性限制', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail :'硬性限制',
        documentation :'默认值为50.强制腿部不要走的超过此数值.最好不要用到.'
    },
    {
        label: 'estimatingPositionMultiplier',
        insertText: 'estimatingPositionMultiplier:',
        labelDetails: { detail :' 预测位置乘数', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail :'预测位置乘数',
        documentation :'默认值为1.根据单位速度预测单位可用的腿脚放置位置.'
    },
    {
        label: 'hidden',
        insertText: 'hidden:',
        labelDetails: { detail :' 隐藏', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail :'隐藏',
        documentation :'隐藏'
    },
    {
        label: 'image_end',
        insertText: 'image_end:',
        labelDetails: { detail :' 末端图像', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail :'末端图像',
        documentation :'末端图像,相当于脚.'
    },
    {
        label: 'image_end_shadow',
        insertText: 'image_end_shadow:',
        labelDetails: { detail :' 末端图像阴影', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail :'末端图像阴影',
        documentation :'末端图像阴影.'
    },
    {
        label: 'image_end_teamColors',
        insertText: 'image_end_teamColors:',
        labelDetails: { detail :' 末端图像着色', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 22,
        detail :'末端图像着色',
        documentation :'末端图像使用阵营色.'
    },
    {
        label: 'image_foot',
        insertText: 'image_foot:',
        labelDetails: { detail :' 脚图像', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 23,
        detail :'脚图像',
        documentation :'脚图像,与image_end相同'
    },
    {
        label: 'image_foot_shadow',
        insertText: 'image_foot_shadow:',
        labelDetails: { detail :' 脚图像阴影', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 24,
        detail :'脚图像阴影',
        documentation :'脚图像阴影.'
    },
    {
        label: 'image_middle',
        insertText: 'image_middle:',
        labelDetails: { detail :' 中部图像', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 25,
        detail :'中部图像',
        documentation :'中部图像,相当于腿.'
    },
    {
        label: 'image_leg',
        insertText: 'image_leg:',
        labelDetails: { detail :' 腿图像', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 26,
        detail :'腿图像',
        documentation :'腿图像,与image_middle相同'
    },
    {
        label: 'liftingHeightOffset',
        insertText: 'liftingHeightOffset:',
        labelDetails: { detail :' 离开高度偏移', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 27,
        detail :'离开高度偏移',
        documentation :'离开时的脚的高度'
    },
    {
        label: 'targetHeight',
        insertText: 'targetHeight:',
        labelDetails: { detail :' 目标高度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 28,
        detail :'目标高度',
        documentation :'最终高度'
    },
    {
        label: 'targetHeightRelative',
        insertText: 'targetHeightRelative:',
        labelDetails: { detail :' 相对目标高度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 29,
        detail :'相对目标高度',
        documentation :'相对自身的最终高度'
    },
    {
        label: 'image_middle_teamColors',
        insertText: 'image_middle_teamColors:',
        labelDetails: { detail :' 腿图像阵营色', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 30,
        detail :'腿图像阵营色',
        documentation :'给腿也用上队伍色'
    },
    {
        label: 'draw_foot_on_top',
        insertText: 'draw_foot_on_top:',
        labelDetails: { detail :' 绘制脚在顶层', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 31,
        detail :'绘制脚在顶层',
        documentation :'绘制脚在顶层.'
    },
    {
        label: 'drawOverBody',
        insertText: 'drawOverBody:',
        labelDetails: { detail :' 绘制主体之上', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 32,
        detail :'绘制主体之上',
        documentation :'绘制在主体之上.'
    },
    {
        label: 'drawUnderAllUnits',
        insertText: 'drawUnderAllUnits:',
        labelDetails: { detail :' 绘制所有单位之下', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 33,
        detail :'绘制所有单位之下',
        documentation :'绘制所有单位之下.'
    },
    {
        label: 'drawDirOffset',
        insertText: 'drawDirOffset:',
        labelDetails: { detail :' 绘制角度偏移', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 34,
        detail :'绘制角度偏移',
        documentation :'绘制角度偏移.'
    },
    {
        label: 'dust_effect',
        insertText: 'dust_effect:',
        labelDetails: { detail :' 灰尘效果', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 35,
        detail :'灰尘效果',
        documentation :'脚落地时产生灰尘.'
    },
    {
        label: 'spinRate',
        insertText: 'spinRate:',
        labelDetails: { detail :' 自身自动旋转速度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 36,
        detail :'自身自动旋转速度',
        documentation :'使手臂/腿脚一直旋转,像转塔的idleSpin.用处如直升机的螺旋桨.'
    },
    {
        label: 'favourOppositeSideNeighbours',
        insertText: 'favourOppositeSideNeighbours:',
        labelDetails: { detail :' 偏向于临近一侧', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 37,
        detail :'偏向于临近一侧',
        documentation :'填true时,使得左右的腿脚拉开时间差,这样更好看.否则看起来顺拐.计算相邻的X比接近的Y查10倍时间.'
    },
    {
        label: 'drawLegWhenZoomedOut',
        insertText: 'drawLegWhenZoomedOut:',
        labelDetails: { detail :' 缩小时绘制腿', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 38,
        detail :'缩小时绘制腿',
        documentation :'在缩小显示倍数(看到东西更多)后绘制腿.False时不绘制.为了提高绘制腿性能,默认值根据单位大小而变化.'
    },
    {
        label: 'drawFootWhenZoomedOut',
        insertText: 'drawFootWhenZoomedOut:',
        labelDetails: { detail :' 缩小时绘制脚', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 39,
        detail :'缩小时绘制脚',
        documentation :'在缩小显示倍数(看到东西更多)后绘制脚.False时不绘制.为了提高绘制腿性能,默认值根据单位大小而变化.如果单独设置阴影则可能比较怪异.'
    },
    {
        label: 'explodeOnDeath',
        insertText: 'explodeOnDeath:',
        labelDetails: { detail :' 死亡时爆炸', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 40,
        detail :'死亡时爆炸',
        documentation :'腿脚在单位死亡时是否有爆炸效果'
    },
    {
        label: 'resetAngle',
        insertText: 'resetAngle:',
        labelDetails: { detail :' 复位角度', description: '[leg]' },
        kind: CompletionItemKind.Text,
        data: 41,
        detail :'复位角度',
        documentation :'复位角度.'
    },
];