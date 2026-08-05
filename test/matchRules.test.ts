import { describe, expect, it } from "vitest";
import { matchBaseSection, isBaseSection } from "@/common/matchRules";

describe("matchBaseSection", () => {
  it("普通节名原样返回", () => {
    expect(matchBaseSection("core")).toBe("core");
    expect(matchBaseSection("ai")).toBe("ai");
    expect(matchBaseSection("graphics")).toBe("graphics");
  });

  it("下划线前缀映射到数据文件", () => {
    expect(matchBaseSection("turret_main")).toBe("turret");
    expect(matchBaseSection("projectile_rocket")).toBe("projectile");
    expect(matchBaseSection("action_spawn")).toBe("action");
    expect(matchBaseSection("hiddenAction_foo")).toBe("action");
    expect(matchBaseSection("effect_explosion")).toBe("effect");
    expect(matchBaseSection("animation_walk")).toBe("animation");
    expect(matchBaseSection("attachment_turret")).toBe("attachment");
    expect(matchBaseSection("placementRule_x")).toBe("placementRule");
  });

  it("leg_/arm_ 统一映射到 leg_arm（数据文件为 leg_arm.json）", () => {
    expect(matchBaseSection("leg_front_left")).toBe("leg_arm");
    expect(matchBaseSection("arm_weapon")).toBe("leg_arm");
  });

  it("特殊冒号格式", () => {
    expect(matchBaseSection("spawnUnits:LIST")).toBe("spawnUnits");
    expect(matchBaseSection("spawnProjectiles:LIST")).toBe("spawnProjectiles");
  });

  it("特殊完全匹配", () => {
    expect(matchBaseSection("Prices/Resources")).toBe("prices");
    expect(matchBaseSection("global_resource")).toBe("global_resource");
    expect(matchBaseSection("canBuild")).toBe("canBuild");
  });
});

describe("isBaseSection", () => {
  it("判断节是否属于某 base", () => {
    expect(isBaseSection("leg_front", "leg_arm")).toBe(true);
    expect(isBaseSection("turret_main", "turret")).toBe(true);
    expect(isBaseSection("core", "turret")).toBe(false);
  });
});
