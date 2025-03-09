import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
export const SECTIONSNAME: CompletionItem[] = [
    {
        label: 'core',
        insertText: 'core',
        labelDetails: { detail: '[基础节]', description: '基础节，涉及单位的名称、生命值、体积大小、是建筑与否等基本设置。' },
        kind: CompletionItemKind.Text,
        data: 1,
        detail: '[基础节]',
        documentation: '基础节，涉及单位的名称、生命值、体积大小、是建筑与否等基本设置。'
    },
    {
        label: 'canBuild_',
        insertText: 'canBuild_',
        labelDetails: { detail: '[可建造节]', description: '涉及单位能建造生产那些单位，建造方式和条件等设置。' },
        kind: CompletionItemKind.Text,
        data: 2,
        detail: '[可建造节]',
        documentation: '涉及单位能建造生产那些单位，建造方式和条件等设置。'
    },
    {
        label: 'graphics',
        insertText: 'graphics',
        labelDetails: { detail: '[图像节]', description: '涉及单位主体贴图等设置。' },
        kind: CompletionItemKind.Text,
        data: 3,
        detail: '[图像节]',
        documentation: '涉及单位主体贴图等设置。'
    },
    {
        label: 'attack',
        insertText: 'attack',
        labelDetails: { detail: '[攻击节]', description: '涉及单位能攻击与否、最大攻击范围等设置。' },
        kind: CompletionItemKind.Text,
        data: 4,
        detail: '[攻击节]',
        documentation: '涉及单位能攻击与否、最大攻击范围等设置。'
    },
    {
        label: 'turret_',
        insertText: 'turret_',
        labelDetails: { detail: '[炮塔节]', description: '涉及单位炮塔的贴图、旋转速度、攻击间隔等设置。' },
        kind: CompletionItemKind.Text,
        data: 5,
        detail: '[炮塔节]',
        documentation: '涉及单位炮塔的贴图、旋转速度、攻击间隔等设置。'
    },
    {
        label: 'projectile_',
        insertText: 'projectile_',
        labelDetails: { detail: '[炮弹节]', description: '涉及单位炮塔发射的弹丸的贴图、寿命、飞行速度、伤害等设置。' },
        kind: CompletionItemKind.Text,
        data: 6,
        detail: '[炮弹节]',
        documentation: '涉及单位炮塔发射的弹丸的贴图、寿命、飞行速度、伤害等设置。'
    },
    {
        label: 'movement',
        insertText: 'movement',
        labelDetails: { detail: '[移动节]', description: '涉及单位的移动类型、速度、转向速度等设置。' },
        kind: CompletionItemKind.Text,
        data: 7,
        detail: '[移动节]',
        documentation: '涉及单位的移动类型、速度、转向速度等设置。'
    },
    {
        label: 'ai',
        insertText: 'ai',
        labelDetails: { detail: '[AI节]', description: '涉及AI玩家对该单位的建造、升级概率以及部分单位特性等设置。' },
        kind: CompletionItemKind.Text,
        data: 8,
        detail: '[AI节]',
        documentation: '涉及AI玩家对该单位的建造、升级概率以及部分单位特性等设置。'
    },
    {
        label: 'arm_',
        insertText: 'arm_',
        labelDetails: { detail: '[臂节]', description: '涉及单位臂装饰物的位置、贴图等设置。' },
        kind: CompletionItemKind.Text,
        data: 9,
        detail: '[臂节]',
        documentation: '涉及单位臂装饰物的位置、贴图等设置。'
    },
    {
        label: 'leg_',
        insertText: 'leg_',
        labelDetails: { detail: '[腿节]', description: '同上。' },
        kind: CompletionItemKind.Text,
        data: 10,
        detail: '[腿节]',
        documentation: '同上。'
    },
    {
        label: 'attachment_',
        insertText: 'attachment_',
        labelDetails: { detail: '[附属节]', description: '涉及单位的子附属单位的位置、能攻击与否等设置。' },
        kind: CompletionItemKind.Text,
        data: 11,
        detail: '[附属节]',
        documentation: '涉及单位的子附属单位的位置、能攻击与否等设置。'
    },
    {
        label: 'action_',
        insertText: 'action_',
        labelDetails: { detail: '[操作节]', description: '涉及单位的资源手动添加、手动升级按钮、添加路径点等设置。' },
        kind: CompletionItemKind.Text,
        data: 12,
        detail: '[操作节]',
        documentation: '涉及单位的资源手动添加、手动升级按钮、添加路径点等设置。'
    },
    {
        label: 'hiddenAction_',
        insertText: 'hiddenAction_',
        labelDetails: { detail: '[隐藏的操作节]', description: '同上。' },
        kind: CompletionItemKind.Text,
        data: 13,
        detail: '[隐藏的操作节]',
        documentation: '涉及单位的资源手动添加、手动升级按钮、添加路径点等设置。'
    },
    {
        label: 'effect_',
        insertText: 'effect_',
        labelDetails: { detail: '[特效节]', description: '涉及单位炮塔开火，弹丸飞行、爆炸等生成的特效的设置。' },
        kind: CompletionItemKind.Text,
        data: 14,
        detail: '[特效节]',
        documentation: '涉及单位炮塔开火，弹丸飞行、爆炸等生成的特效的设置。'
    },
    {
        label: 'animation_',
        insertText: 'animation_',
        labelDetails: { detail: '[动画节]', description: '涉及单位移动、部署、攻击等时机播放的帧动画的设置。' },
        kind: CompletionItemKind.Text,
        data: 15,
        detail: '[动画节]',
        documentation: '涉及单位移动、部署、攻击等时机播放的帧动画的设置。'
    },
    {
        label: 'placementRule_',
        insertText: 'placementRule_',
        labelDetails: { detail: '[放置规则节]', description: '单位建造时放置的规则的设置。' },
        kind: CompletionItemKind.Text,
        data: 16,
        detail: '[放置规则节]',
        documentation: '单位建造时放置的规则的设置。'
    },
    {
        label: 'global_resource_',
        insertText: 'global_resource_',
        labelDetails: { detail: '[全局资源节]', description: '队伍内单位通用的自定义资源的名称、样式设置。' },
        kind: CompletionItemKind.Text,
        data: 17,
        detail: '[全局资源节]',
        documentation: '队伍内单位通用的自定义资源的名称、样式设置。'
    },
    {
        label: 'resource_',
        insertText: 'resource_',
        labelDetails: { detail: '[资源节]', description: '具体单位自用的自定义资源的名称样式设置。' },
        kind: CompletionItemKind.Text,
        data: 18,
        detail: '[资源节]',
        documentation: '具体单位自用的自定义资源的名称样式设置。'
    },
    {
        label: 'template_',
        insertText: 'template_',
        labelDetails: { detail: '[模板节]', description: '节之间复制参数时选用。' },
        kind: CompletionItemKind.Text,
        data: 19,
        detail: '[模板节]',
        documentation: '节之间复制参数时选用。'
    },
    {
        label: 'comment_',
        insertText: 'comment_',
        labelDetails: { detail: '[注释节]', description: '用于大篇幅注释。' },
        kind: CompletionItemKind.Text,
        data: 20,
        detail: '[注释节]',
        documentation: '用于大篇幅注释。'
    },
    {
        label: 'decal_',
        insertText: 'decal_',
        labelDetails: { detail: '[贴花节]', description: '单位身上的贴花、伪3D等设置。' },
        kind: CompletionItemKind.Text,
        data: 21,
        detail: '[贴花节]',
        documentation: '单位身上的贴花、伪3D等设置。'
    }
];