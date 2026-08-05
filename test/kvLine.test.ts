import { describe, expect, it } from "vitest";
import { parseKvLine, KV_LINE_REGEX, PROPERTY_LINE_REGEX } from "@/common/kvLine";

describe("parseKvLine", () => {
  it("解析带冒号的键值行", () => {
    const kv = parseKvLine("name: mymod");
    expect(kv).toEqual({ leading: "", key: "name", separator: ":", value: "mymod", comment: "" });
  });

  it("解析带等号的键值行", () => {
    const kv = parseKvLine("health=100");
    expect(kv).toEqual({ leading: "", key: "health", separator: "=", value: "100", comment: "" });
  });

  it("提取尾随注释（尾随空格归独立捕获组）", () => {
    const kv = parseKvLine("name: mymod   # 注释");
    expect(kv?.value).toBe("mymod");
    expect(kv?.comment).toBe("# 注释");
  });

  it("保留前导空白", () => {
    const kv = parseKvLine("  damage: 25");
    expect(kv?.leading).toBe("  ");
    expect(kv?.key).toBe("damage");
  });

  it("非键值行返回 null", () => {
    expect(parseKvLine("[core]")).toBeNull();
    expect(parseKvLine("; 注释")).toBeNull();
    expect(parseKvLine("")).toBeNull();
  });
});

describe("正则常量", () => {
  it("KV_LINE_REGEX 匹配带空格键", () => {
    expect("move speed: 10").toMatch(KV_LINE_REGEX);
  });

  it("PROPERTY_LINE_REGEX 匹配合法标识符属性行", () => {
    expect("name: mymod").toMatch(PROPERTY_LINE_REGEX);
    expect("2name: x").not.toMatch(PROPERTY_LINE_REGEX);
    expect("a b: c").not.toMatch(PROPERTY_LINE_REGEX);
  });
});
