import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { matchBaseSection } from "./common/matchRules";
import { EXTENSION_ID } from "./constants";

// 文档节位置缓存，用于快速查找当前位置所在节
type DocumentSectionCacheEntry = {
  version: number;
  sections: Array<{ name: string; line: number }>;
};
const documentSectionCache = new Map<string, DocumentSectionCacheEntry>();

type SectionCacheEntry = {
  data: any[];
  expires: number;
};

const SECTION_CACHE_TTL = 5 * 60 * 1000;
const MAX_SECTION_DATA_CACHE_SIZE = 100;
const sectionDataCache: Map<string, SectionCacheEntry> = new Map();
type SectionPropertyMapEntry = {
  map: Map<string, any>;
  expires: number;
};
const MAX_PROPERTY_MAP_CACHE_SIZE = 100;
const sectionPropertyMapCache: Map<string, SectionPropertyMapEntry> = new Map();

const sectionMetadataCache: Map<string, string> = new Map();
let metadataScanComplete = false;

function ensureMetadataScanned(): void {
  if (metadataScanComplete) {
    return;
  }
  metadataScanComplete = true;
  scanSectionsDirectory();
}

function scanSectionsDirectory(): void {
  try {
    const extension = vscode.extensions.getExtension(EXTENSION_ID);
    if (!extension) {
      return;
    }

    const extensionPath = extension.extensionPath;
    const localizedDir = path.join(extensionPath, "data", "sections", vscode.env.language);
    const defaultDir = path.join(extensionPath, "data", "sections");
    const dirs = [] as string[];

    if (fs.existsSync(localizedDir)) {
      dirs.push(localizedDir);
    }
    if (fs.existsSync(defaultDir)) {
      dirs.push(defaultDir);
    }

    for (const dir of dirs) {
      try {
        const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
        for (const f of files) {
          const p = path.join(dir, f);
          try {
            const raw = fs.readFileSync(p, "utf8");
            const json = JSON.parse(raw);
            if (json && typeof json.name === "string") {
              sectionMetadataCache.set(json.name, p);
            }
          } catch (e) {
            console.debug("Ignored parse error for", p, (e as Error).message);
          }
        }
      } catch (e) {
        console.debug("Ignored error while scanning dir:", dir, (e as Error).message);
      }
    }
  } catch (error) {
    console.error("Error scanning sections directory:", error);
  }
}

/**
 * 从示例字符串中提取值部分
 * @param example 示例字符串
 * @returns 提取的值
 */
export function extractExampleValue(example: string): string {
  return example.split(":")[1]?.trim() || "";
}

/**
 * 获取节的基本名称（去除下划线后缀等）
 * @param name 节名称
 * @returns 基本节名称
 */
export function getBaseSectionName(name: string): string {
  // 使用公共匹配规则模块进行匹配
  return matchBaseSection(name);
}

/**
 * 获取节的属性数据
 * @param sectionName 节名称
 * @returns 属性数组
 */
export function getSectionProperties(sectionName: string): any[] {
  try {
    // 获取基本节名称
    const baseSectionName = getBaseSectionName(sectionName);

    // 获取扩展的实际路径
    const extension = vscode.extensions.getExtension(EXTENSION_ID);
    if (!extension) {
      console.error("Cannot find extension");
      return [];
    }

    const extensionPath = extension.extensionPath;

    // 构建语言特定的数据文件路径
    let sectionPath = path.join(extensionPath, "data", "sections", `${baseSectionName}.json`);

    // 检查是否存在语言特定的文件
    const localizedPath = path.join(
      extensionPath,
      "data",
      "sections",
      vscode.env.language,
      `${baseSectionName}.json`,
    );
    if (fs.existsSync(localizedPath)) {
      sectionPath = localizedPath;
    }

    // 如果目标文件不存在，尝试更宽松的匹配：在 sections 目录（或语言子目录）中查找最接近的文件名
    if (!fs.existsSync(sectionPath)) {
      const localizedDir = path.join(extensionPath, "data", "sections", vscode.env.language);
      const defaultDir = path.join(extensionPath, "data", "sections");
      const dirToSearch = fs.existsSync(localizedDir) ? localizedDir : defaultDir;

      try {
        const files = fs.readdirSync(dirToSearch).filter((f) => f.endsWith(".json"));
        // 优先查找精确或前缀匹配
        let matched: string | null = null;
        for (const f of files) {
          const nameWithoutExt = path.basename(f, ".json");
          if (nameWithoutExt === sectionName || nameWithoutExt === baseSectionName) {
            matched = f;
            break;
          }
        }

        if (!matched) {
          for (const f of files) {
            const nameWithoutExt = path.basename(f, ".json");
            // 如果节名以文件名为前缀，或者文件名在节名中出现，则认为匹配
            if (
              sectionName.startsWith(nameWithoutExt + "_") ||
              sectionName.startsWith(nameWithoutExt + ":") ||
              sectionName.includes(nameWithoutExt)
            ) {
              matched = f;
              break;
            }
          }
        }

        if (matched) {
          sectionPath = path.join(dirToSearch, matched);
        }
      } catch (err) {
        // 忽略读取目录错误，稍后会抛出不存在文件的捕获分支
        console.debug("Ignored error while searching sections dir:", err && (err as Error).message);
      }
    }

    if (!fs.existsSync(sectionPath)) {
      // 未找到合适的属性定义文件，作为最后的回退：按文件内部的 metadata(field `name`) 做严格匹配
      const foundByMetadata = findSectionPathByMetadata(sectionName);
      if (foundByMetadata) {
        sectionPath = foundByMetadata;
      }
    }

    if (!fs.existsSync(sectionPath)) {
      // 最终仍未找到合适的属性定义文件
      return [];
    }

    const cacheKey = createSectionCacheKey(sectionPath);
    const cached = sectionDataCache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
      return cached.data;
    }

    const sectionData = JSON.parse(fs.readFileSync(sectionPath, "utf8"));
    const parsedData = sectionData.data || [];
    sectionDataCache.set(cacheKey, {
      data: parsedData,
      expires: Date.now() + SECTION_CACHE_TTL,
    });
    // 仅在需要时清理过期缓存
    cleanupExpiredSectionCacheIfNeeded();
    return parsedData;
  } catch (error) {
    console.error(`Error reading ${sectionName}.json:`, error);
    return [];
  }
}

export function getSectionPropertyMap(sectionName: string): Map<string, any> | null {
  const cacheKey = `${vscode.env.language}:${sectionName}`;
  const cached = sectionPropertyMapCache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.map;
  }

  const properties = getSectionProperties(sectionName);
  if (!properties || !properties.length) {
    return null;
  }

  const propertyMap = new Map<string, any>();
  for (const prop of properties) {
    if (prop && typeof prop.name === "string") {
      propertyMap.set(prop.name, prop);
    }
  }

  sectionPropertyMapCache.set(cacheKey, {
    map: propertyMap,
    expires: Date.now() + SECTION_CACHE_TTL,
  });

  // 仅在需要时清理过期缓存
  cleanupExpiredSectionPropertyCacheIfNeeded();
  return propertyMap;
}

/**
 * 按需扫描 data/sections（先语言子目录，再默认目录），查找内部 metadata 的精确匹配（sectionData.name 字段）
 * 仅在其他快速匹配策略失败后调用。
 */
function findSectionPathByMetadata(sectionName: string): string | null {
  ensureMetadataScanned();

  const cached = sectionMetadataCache.get(sectionName);
  if (cached) {
    return cached;
  }

  return null;
}

/**
 * 清理过期缓存，仅在缓存超过大小限制时调用
 */
function cleanupExpiredSectionCacheIfNeeded() {
  if (sectionDataCache.size <= MAX_SECTION_DATA_CACHE_SIZE) {
    return;
  }
  const now = Date.now();
  let expiredCount = 0;
  for (const [key, entry] of sectionDataCache.entries()) {
    if (entry.expires <= now) {
      sectionDataCache.delete(key);
      expiredCount++;
    }
  }
  // 如果删除过期后仍然超过限制，删除最旧的20%条目
  if (sectionDataCache.size > MAX_SECTION_DATA_CACHE_SIZE) {
    const toDelete = Math.ceil(MAX_SECTION_DATA_CACHE_SIZE * 0.2);
    let count = 0;
    for (const key of sectionDataCache.keys()) {
      if (count++ >= toDelete) {
        break;
      }
      sectionDataCache.delete(key);
    }
  }
}

/**
 * 清理过期属性缓存，仅在缓存超过大小限制时调用
 */
function cleanupExpiredSectionPropertyCacheIfNeeded() {
  if (sectionPropertyMapCache.size <= MAX_PROPERTY_MAP_CACHE_SIZE) {
    return;
  }
  const now = Date.now();
  let expiredCount = 0;
  for (const [key, entry] of sectionPropertyMapCache.entries()) {
    if (entry.expires <= now) {
      sectionPropertyMapCache.delete(key);
      expiredCount++;
    }
  }
  // 如果删除过期后仍然超过限制，删除最旧的20%条目
  if (sectionPropertyMapCache.size > MAX_PROPERTY_MAP_CACHE_SIZE) {
    const toDelete = Math.ceil(MAX_PROPERTY_MAP_CACHE_SIZE * 0.2);
    let count = 0;
    for (const key of sectionPropertyMapCache.keys()) {
      if (count++ >= toDelete) {
        break;
      }
      sectionPropertyMapCache.delete(key);
    }
  }
}

function createSectionCacheKey(sectionPath: string): string {
  return `${vscode.env.language}:${sectionPath}`;
}

/**
 * 创建一个简单的节匹配器函数
 * @param sectionName 节名称
 * @returns 匹配器函数
 */
export function createSimpleSectionMatcher(sectionName: string): (name: string) => boolean {
  return (name: string) => name === sectionName;
}

/**
 * 创建一个前缀匹配器函数
 * @param prefix 前缀
 * @returns 匹配器函数
 */
export function createPrefixSectionMatcher(prefix: string): (name: string) => boolean {
  return (name: string) => name.startsWith(prefix);
}

/**
 * 创建一个正则表达式匹配器函数
 * @param pattern 正则表达式模式
 * @returns 匹配器函数
 */
export function createRegexSectionMatcher(pattern: RegExp): (name: string) => boolean {
  return (name: string) => pattern.test(name);
}

/**
 * 获取文档的所有节信息，并使用版本缓存
 * @param document 文档对象
 * @returns 节信息数组，按行号排序
 */
function getDocumentSections(document: vscode.TextDocument): Array<{ name: string; line: number }> {
  const cacheKey = `${document.uri.toString()}:${document.version}`;
  const cached = documentSectionCache.get(cacheKey);

  if (cached && cached.version === document.version) {
    return cached.sections;
  }

  // 解析所有节位置
  const sections: Array<{ name: string; line: number }> = [];
  const lineCount = document.lineCount;

  for (let i = 0; i < lineCount; i++) {
    const lineText = document.lineAt(i).text.trim();
    if (lineText.startsWith("[") && lineText.endsWith("]")) {
      const sectionName = lineText.substring(1, lineText.length - 1);
      sections.push({ name: sectionName, line: i });
    }
  }

  // 缓存结果，限制缓存大小
  if (documentSectionCache.size >= 20) {
    // 删除最旧的10个条目
    let count = 0;
    for (const key of documentSectionCache.keys()) {
      if (count++ > 10) {
        break;
      }
      documentSectionCache.delete(key);
    }
  }

  documentSectionCache.set(cacheKey, {
    version: document.version,
    sections,
  });

  return sections;
}

/**
 * 检查当前位置是否在指定节内
 * @param document 文档对象
 * @param position 位置对象
 * @param sectionMatcher 节匹配器函数
 * @returns 是否在节内
 */
export function isInsideSection(
  document: vscode.TextDocument,
  position: vscode.Position,
  sectionMatcher: (sectionName: string) => boolean,
): boolean {
  const sections = getDocumentSections(document);

  if (sections.length === 0) {
    return false;
  }

  // 使用二分查找找到最后一个起始行小于当前行的节
  let left = 0;
  let right = sections.length - 1;
  let lastMatchIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sections[mid].line < position.line) {
      lastMatchIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (lastMatchIndex >= 0) {
    return sectionMatcher(sections[lastMatchIndex].name);
  }

  return false;
}

/**
 * 检查光标是否在行首（行首允许有空格或制表符，以及属性名字符）
 * 修复：在输入过程中，光标前可能有已输入的字符，需要检查这些字符是否构成属性名的一部分
 * @param document 文档对象
 * @param position 位置对象
 * @returns 是否在有效行首位置
 */
export function isAtValidLineStart(
  document: vscode.TextDocument,
  position: vscode.Position,
): boolean {
  const line = document.lineAt(position.line).text;
  const beforeCursor = line.substring(0, position.character);

  // 允许行首有空格或制表符
  // 允许有属性名字符（字母、数字、下划线）
  // 不允许有冒号等其他字符
  return /^[ \t]*[a-zA-Z0-9_]*$/.test(beforeCursor);
}

/**
 * 检查行中是否已经包含冒号
 * @param document 文档对象
 * @param position 位置对象
 * @returns 行中是否已包含冒号
 */
export function hasColonInLine(document: vscode.TextDocument, position: vscode.Position): boolean {
  const line = document.lineAt(position.line).text;
  const beforeCursor = line.substring(0, position.character);
  return beforeCursor.includes(":");
}
