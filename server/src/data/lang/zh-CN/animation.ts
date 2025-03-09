import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ANIMATION: CompletionItem[] = [
    {
        label: 'onActions',
        insertText: 'onActions:',
        labelDetails: { detail :' 动画条件', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail :'动画条件',
        documentation :'可用的动画触发的状态有:move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits,Unknown, repair, reclaim, created'
    },
    {
        label: 'onActionsQueuedUnitPlayAt',
        insertText: 'onActionsQueuedUnitPlayAt:',
        labelDetails: { detail :' 在队列中有单位播放', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail :'在队列中有单位播放',
        documentation :'当使用onAction:queueedUnits时,动画开始之前需要达到值,设置为0-1之间'
    },
    {
        label: 'blendIn',
        insertText: 'blendIn:',
        labelDetails: { detail :' 融入时间', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail :'融入时间',
        documentation :'与上一个动画融合时间.'
    },
    {
        label: 'blendOut',
        insertText: 'blendOut:',
        labelDetails: { detail :' 切换融合', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail :'切换融合',
        documentation :'与下一个动画融合时间.'
    },
    {
        label: 'pingPong',
        insertText: 'pingPong:',
        labelDetails: { detail :' 往返效果', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail :'往返效果',
        documentation :'结束后反向播放动画.'
    },
    {
        label: 'playbackRate',
        insertText: 'playbackRate:',
        labelDetails: { detail :' 重复播放频率', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail :'重复播放频率',
        documentation :'重复播放该动画的频率'
    },
    {
        label: 'KeyframeTimeScale',
        insertText: 'KeyframeTimeScale:',
        labelDetails: { detail :' 帧时长缩放', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail :'帧时长缩放',
        documentation :'缩放所有关键帧时间,这有助于在不更改所有内容的情况下更快/更慢地制作动画'
    },
    {
        label: 'armX_Xs',
        insertText: 'armX_Xs:',
        labelDetails: { detail :' 胳膊关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail :'胳膊关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.'
    },
    {
        label: 'legX_Xs',
        insertText: 'legX_Xs:',
        labelDetails: { detail :' 腿部关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail :'腿部关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.'
    },
    {
        label: 'body_Xs',
        insertText: 'body_Xs:',
        labelDetails: { detail :' 身体关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail :'身体关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.'
    },
    {
        label: 'effect_Xs',
        insertText: 'effect_Xs:',
        labelDetails: { detail :' 特效关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail :'特效关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.'
    },
    {
        label: 'turretX_Xs',
        insertText: 'turretX_Xs:',
        labelDetails: { detail :' 炮塔关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail :'炮塔关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.'
    },
    {
        label: 'direction_units',
        insertText: 'direction_units:',
        labelDetails: { detail :' 多向动画方向数', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail :'多向动画方向数',
        documentation :'和多向动画的帧数匹配'
    },
    {
        label: 'direction_strideX',
        insertText: 'direction_strideX:',
        labelDetails: { detail :' 多向动画x轴切换', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail :'多向动画x轴切换',
        documentation :'每次方向改变时x轴方向切换的帧数.'
    },
    {
        label: 'direction_strideY',
        insertText: 'direction_strideY:',
        labelDetails: { detail :' 多向动画y轴切换', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail :'多向动画y轴切换',
        documentation :'每次方向改变时y轴方向切换的帧数.'
    },
    {
        label: 'direction_starting',
        insertText: 'direction_starting:',
        labelDetails: { detail :' 多向动画初始方向', description: '[animation]' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail :'多向动画初始方向',
        documentation :'为多向动画的参考的单位方向总体加一个偏移'
    },
];