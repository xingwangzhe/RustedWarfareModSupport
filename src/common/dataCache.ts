import * as fs from "fs";

/**
 * 带 mtime 检测的 JSON 文件加载缓存。
 * 解决 hover/补全热路径上重复 `fs.readFileSync` + `JSON.parse` 的问题。
 * 文件 mtime 变化时自动重新读取；缓存超过上限时整体清空防内存膨胀。
 */
const cache = new Map<string, { mtimeMs: number; data: unknown }>();
const MAX_CACHE_ENTRIES = 200;

/** 缓存读取并解析 JSON 文件 */
export function loadJsonCached<T>(filePath: string): T {
  const stat = fs.statSync(filePath);
  const cached = cache.get(filePath);
  if (cached && cached.mtimeMs === stat.mtimeMs) {
    return cached.data as T;
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw) as T;
  cache.set(filePath, { mtimeMs: stat.mtimeMs, data });
  if (cache.size > MAX_CACHE_ENTRIES) {
    cache.clear();
  }
  return data;
}

/** 清理缓存（语言切换/测试用） */
export function clearDataCache(): void {
  cache.clear();
}
