// 公共匹配规则与工具函数
export type Rule = { test: (n: string) => boolean; base: string };

// 有序匹配规则，顺序很重要：越特殊的规则应越靠前
export const baseSectionRules: Rule[] = [
    { test: n => n === 'Prices/Resources', base: 'prices' },
    { test: n => /^leg_\p{L}+$/u.test(n) || /^arm_\p{L}+$/u.test(n), base: 'leg_arm' },
    { test: n => n.startsWith('spawnUnits:'), base: 'spawnUnits' },
    { test: n => n.startsWith('spawnProjectiles:'), base: 'spawnProjectiles' },
    { test: n => /^(action_|hiddenAction_)/.test(n), base: 'action' },
    { test: n => n.startsWith('decal_'), base: 'decal' },
    { test: n => /^turret_\p{L}+$/u.test(n), base: 'turret' },
    { test: n => /^projectile_\p{L}+$/u.test(n), base: 'projectile' },
    { test: n => /^attachment_\p{L}+$/u.test(n), base: 'attachment' },
    { test: n => /^effect_\p{L}+$/u.test(n), base: 'effect' },
    { test: n => /^animation_\p{L}+$/u.test(n), base: 'animation' },
    { test: n => n.startsWith('global_resource'), base: 'global_resource' },
    { test: n => n.startsWith('canBuild'), base: 'canBuild' },
    { test: n => /^resource_\p{L}+$/u.test(n), base: 'resource' }
];

/**
 * 根据规则匹配并返回 base 名称，若无匹配则返回原始 name
 */
export function matchBaseSection(name: string): string {
    for (const r of baseSectionRules) {
        try {
            if (r.test(name)) {
                return r.base;
            }
        } catch (e) {
            // 忽略单个规则测试错误，继续下一个规则
            console.debug('match rule error', (e as Error).message);
            continue;
        }
    }
    return name;
}

/**
 * 判断给定节名是否属于指定 base
 */
export function isBaseSection(name: string, base: string): boolean {
    return matchBaseSection(name) === base;
}
