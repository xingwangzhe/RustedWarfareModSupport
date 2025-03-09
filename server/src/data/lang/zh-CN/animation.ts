import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const ANIMATION: CompletionItem[] = [
    {
        label: 'onActions',
        insertText: 'onActions:',
        labelDetails: { detail :' string 动画条件', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'动画条件',
        documentation :'可用的动画触发的状态有:move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits,Unknown, repair, reclaim, created',
        data: 'string'
    },
    {
        label: 'onActionsQueuedUnitPlayAt',
        insertText: 'onActionsQueuedUnitPlayAt:',
        labelDetails: { detail :' float 在队列中有单位播放', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'在队列中有单位播放',
        documentation :'当使用onAction:queueedUnits时,动画开始之前需要达到值,设置为0-1之间',
        data: 'float'
    },
    {
        label: 'blendIn',
        insertText: 'blendIn:',
        labelDetails: { detail :' time 融入时间', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'融入时间',
        documentation :'与上一个动画融合时间.',
        data: 'time'
    },
    {
        label: 'blendOut',
        insertText: 'blendOut:',
        labelDetails: { detail :' time 切换融合', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'切换融合',
        documentation :'与下一个动画融合时间.',
        data: 'time'
    },
    {
        label: 'pingPong',
        insertText: 'pingPong:',
        labelDetails: { detail :' bool 往返效果', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'往返效果',
        documentation :'结束后反向播放动画.',
        data: 'bool'
    },
    {
        label: 'playbackRate',
        insertText: 'playbackRate:',
        labelDetails: { detail :' float 重复播放频率', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'重复播放频率',
        documentation :'重复播放该动画的频率',
        data: 'float'
    },
    {
        label: 'KeyframeTimeScale',
        insertText: 'KeyframeTimeScale:',
        labelDetails: { detail :' float 帧时长缩放', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'帧时长缩放',
        documentation :'缩放所有关键帧时间,这有助于在不更改所有内容的情况下更快/更慢地制作动画',
        data: 'float'
    },
    {
        label: 'armX_Xs',
        insertText: 'armX_Xs:',
        labelDetails: { detail :' other 胳膊关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'胳膊关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.',
        data: 'other'
    },
    {
        label: 'legX_Xs',
        insertText: 'legX_Xs:',
        labelDetails: { detail :' other 腿部关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'腿部关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.',
        data: 'other'
    },
    {
        label: 'body_Xs',
        insertText: 'body_Xs:',
        labelDetails: { detail :' other 身体关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'身体关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.',
        data: 'other'
    },
    {
        label: 'effect_Xs',
        insertText: 'effect_Xs:',
        labelDetails: { detail :' other 特效关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'特效关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.',
        data: 'other'
    },
    {
        label: 'turretX_Xs',
        insertText: 'turretX_Xs:',
        labelDetails: { detail :' other 炮塔关键帧', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'炮塔关键帧',
        documentation :'添加一个关键帧.用来创建多个动作的动画.',
        data: 'other'
    },
    {
        label: 'direction_units',
        insertText: 'direction_units:',
        labelDetails: { detail :' float 多向动画方向数', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画方向数',
        documentation :'和多向动画的帧数匹配',
        data: 'float'
    },
    {
        label: 'direction_strideX',
        insertText: 'direction_strideX:',
        labelDetails: { detail :' int 多向动画x轴切换', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画x轴切换',
        documentation :'每次方向改变时x轴方向切换的帧数.',
        data: 'int'
    },
    {
        label: 'direction_strideY',
        insertText: 'direction_strideY:',
        labelDetails: { detail :' int 多向动画y轴切换', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画y轴切换',
        documentation :'每次方向改变时y轴方向切换的帧数.',
        data: 'int'
    },
    {
        label: 'direction_starting',
        insertText: 'direction_starting:',
        labelDetails: { detail :' float 多向动画初始方向', description: '[animation]' },
        kind: CompletionItemKind.Text,
        detail :'多向动画初始方向',
        documentation :'为多向动画的参考的单位方向总体加一个偏移',
        data: 'float'
    },
];