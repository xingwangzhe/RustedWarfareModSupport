import { describe, expect, it, vi } from "vitest";

// colorUtils → translationManager → vscode，mock vscode 使纯函数可测
vi.mock("vscode", () => ({
  env: { language: "en" },
  extensions: { getExtension: () => ({ extensionPath: "/tmp" }) },
}));

import { parseHexColor, toHexAARRGGBB, toRGBAString } from "@/common/colorUtils";

describe("parseHexColor", () => {
  it("解析 AARRGGBB", () => {
    const c = parseHexColor("#80FF0000");
    expect(c).toEqual({ r: 255, g: 0, b: 0, a: 0x80 / 255 });
  });

  it("解析 RRGGBB", () => {
    const c = parseHexColor("#FFAA00");
    expect(c).toEqual({ r: 255, g: 170, b: 0, a: 1 });
  });

  it("解析 4 位 ARGB", () => {
    const c = parseHexColor("#8F00"); // a=0x88, r=0xFF, g=0x00, b=0x00
    expect(c?.a).toBeCloseTo(0x88 / 255);
    expect(c?.r).toBe(0xff);
  });

  it("解析 3 位 RGB", () => {
    const c = parseHexColor("#F00");
    expect(c).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it("支持无 # 前缀", () => {
    expect(parseHexColor("00FF00")).toEqual({ r: 0, g: 255, b: 0, a: 1 });
  });

  it("非法输入返回 null", () => {
    expect(parseHexColor("")).toBeNull();
    expect(parseHexColor("#GGG")).toBeNull();
    expect(parseHexColor("not-a-color")).toBeNull();
  });
});

describe("toHexAARRGGBB", () => {
  it("标准转换（首位 alpha）", () => {
    expect(toHexAARRGGBB({ r: 255, g: 0, b: 0, a: 1 })).toBe("#FFFF0000");
    expect(toHexAARRGGBB({ r: 0, g: 255, b: 0, a: 1 })).toBe("#FF00FF00");
  });

  it("alpha 四舍五入", () => {
    expect(toHexAARRGGBB({ r: 1, g: 2, b: 3, a: 0.5 })).toBe("#80010203");
  });
});

describe("toRGBAString", () => {
  it("格式化 rgba", () => {
    expect(toRGBAString({ r: 255, g: 0, b: 0, a: 1 })).toBe("rgba(255, 0, 0, 1)");
  });
});
