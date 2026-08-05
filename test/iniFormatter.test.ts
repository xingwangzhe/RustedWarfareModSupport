import { describe, expect, it } from "vitest";
import { conservativeFormatIni } from "../src/format/iniFormatter";

describe("conservativeFormatIni", () => {
  it("对齐键值并用冒号分隔", () => {
    const input = "[core]\nname:mymod\nhealth:100\n";
    const out = conservativeFormatIni(input);
    expect(out).toBe("[core]\nname: mymod\nhealth: 100\n");
  });

  it("保留注释并规范为单空格", () => {
    const input = "[core]\nname: mymod   # 注释\n";
    const out = conservativeFormatIni(input);
    expect(out).toContain("name: mymod # 注释");
  });

  it("保留节之间空行并清除节内空行", () => {
    const input = "[core]\n\n\nhealth: 100\n\n[turret]\ndamage: 25\n";
    const out = conservativeFormatIni(input);
    expect(out).toBe("[core]\nhealth: 100\n\n[turret]\ndamage: 25\n");
  });

  it("节头无尾随空格", () => {
    const input = "[core]   \nhealth: 1\n";
    const out = conservativeFormatIni(input);
    expect(out).toBe("[core]\nhealth: 1\n");
  });

  it("保留括号外侧空格", () => {
    const input = "[core]\nrateOfFire:1.5(some)\n";
    const out = conservativeFormatIni(input);
    expect(out).toContain("rateOfFire: 1.5 (some)");
  });

  it("保留文件原始尾随换行状态", () => {
    const withTrailing = "[core]\na: 1\n";
    const withoutTrailing = "[core]\na: 1";
    expect(conservativeFormatIni(withTrailing)).toBe("[core]\na: 1\n");
    expect(conservativeFormatIni(withoutTrailing)).toBe("[core]\na: 1");
  });

  it("空行注释不参与对齐", () => {
    const input = "; 注释\n\n[core]\na: 1\n";
    const out = conservativeFormatIni(input);
    expect(out).toBe("; 注释\n\n[core]\na: 1\n");
  });

  it("无节时按整块处理", () => {
    const input = "a: 1\nb: 2\n";
    const out = conservativeFormatIni(input);
    expect(out).toBe("a: 1\nb: 2\n");
  });
});
