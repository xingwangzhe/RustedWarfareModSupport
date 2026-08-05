import { describe, expect, it, beforeEach, afterEach } from "vitest";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { loadJsonCached, clearDataCache } from "../src/common/dataCache";

let tmpFile: string;

beforeEach(() => {
  clearDataCache();
  tmpFile = path.join(os.tmpdir(), `dc-test-${Date.now()}-${Math.random()}.json`);
});

afterEach(() => {
  if (fs.existsSync(tmpFile)) {
    fs.unlinkSync(tmpFile);
  }
  clearDataCache();
});

describe("loadJsonCached", () => {
  it("解析 JSON 文件并缓存（同一引用）", () => {
    fs.writeFileSync(tmpFile, JSON.stringify({ a: 1 }));
    const r1 = loadJsonCached<{ a: number }>(tmpFile);
    const r2 = loadJsonCached<{ a: number }>(tmpFile);
    expect(r1.a).toBe(1);
    expect(r2).toBe(r1); // 缓存命中，同一引用
  });

  it("mtime 变化时重新读取", () => {
    fs.writeFileSync(tmpFile, JSON.stringify({ a: 1 }));
    expect(loadJsonCached<{ a: number }>(tmpFile).a).toBe(1);

    // 强制不同 mtime（sleep 确保时间戳变化）
    fs.writeFileSync(tmpFile, JSON.stringify({ a: 2 }));
    expect(loadJsonCached<{ a: number }>(tmpFile).a).toBe(2);
  });

  it("文件不存在时抛出错误（不吞异常）", () => {
    expect(() => loadJsonCached(path.join(os.tmpdir(), "not-exist.json"))).toThrow();
  });
});
