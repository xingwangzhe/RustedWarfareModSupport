// 公共匹配规则与工具函数
export type Rule = { test: (n: string) => boolean; base: string };

/**
 * 根据规则匹配并返回 base 名称，若无匹配则返回原始 name
 * 优化版本：使用直接的字符串比较，支持 Unicode，性能更好
 */
export function matchBaseSection(name: string): string {
  // 特殊完全匹配
  if (name === "Prices/Resources") {
    return "prices";
  }

  // 冒号分隔的特殊格式
  if (name.startsWith("spawnUnits:")) {
    return "spawnUnits";
  }
  if (name.startsWith("spawnProjectiles:")) {
    return "spawnProjectiles";
  }

  // 下划线前缀匹配（按使用频率排序以提高性能）
  if (name.startsWith("turret_")) {
    return "turret";
  }
  if (name.startsWith("projectile_")) {
    return "projectile";
  }
  if (name.startsWith("attachment_")) {
    return "attachment";
  }
  if (name.startsWith("action_")) {
    return "action";
  }
  if (name.startsWith("hiddenAction_")) {
    return "action";
  }
  if (name.startsWith("effect_")) {
    return "effect";
  }
  if (name.startsWith("animation_")) {
    return "animation";
  }
  if (name.startsWith("leg_")) {
    return "leg_arm";
  }
  if (name.startsWith("arm_")) {
    return "leg_arm";
  }
  if (name.startsWith("resource_")) {
    return "resource";
  }
  if (name.startsWith("decal_")) {
    return "decal";
  }
  if (name.startsWith("placementRule_")) {
    return "placementRule";
  }

  // 无下划线的前缀匹配
  if (name.startsWith("global_resource")) {
    return "global_resource";
  }
  if (name.startsWith("canBuild")) {
    return "canBuild";
  }

  // 如果没有匹配，返回原始名称
  return name;
}

/**
 * 判断给定节名是否属于指定 base
 */
export function isBaseSection(name: string, base: string): boolean {
  return matchBaseSection(name) === base;
}
