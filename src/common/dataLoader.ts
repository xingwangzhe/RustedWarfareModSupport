import * as path from "path";
import { getExtensionPath } from "@/common/extensionPaths";
import { loadJsonCached } from "@/common/dataCache";
import { SectionProperty } from "@/common/types";

let _cachedSections: SectionProperty[] | null = null;
let _sectionsCacheExpires = 0;
let _sectionNameIndex: Map<string, SectionProperty> | null = null;
const SECTIONS_CACHE_TTL_MS = 60 * 1000;

function buildSectionNameIndex(sections: SectionProperty[]): Map<string, SectionProperty> {
  const index = new Map<string, SectionProperty>();
  for (const section of sections) {
    if (section.name) {
      index.set(section.name, section);
    }
  }
  return index;
}

/**
 * 加载节数据
 * @returns 节数据数组
 */
export function loadSectionsData(): SectionProperty[] {
  const now = Date.now();
  if (_cachedSections && _sectionsCacheExpires > now) {
    return _cachedSections;
  }
  try {
    const extensionPath = getExtensionPath();
    if (!extensionPath) {
      console.error("Cannot find extension");
      _cachedSections = [];
      _sectionsCacheExpires = now + SECTIONS_CACHE_TTL_MS;
      _sectionNameIndex = null;
      return [];
    }

    const sectionsPath = path.join(extensionPath, "data", "sections.json");
    const sectionsData = loadJsonCached(sectionsPath);
    const sectionsArray = sectionsData.data || [];
    _cachedSections = sectionsArray;
    _sectionsCacheExpires = now + SECTIONS_CACHE_TTL_MS;
    _sectionNameIndex = buildSectionNameIndex(sectionsArray);
    return sectionsArray;
  } catch (error) {
    console.error("Error reading sections.json:", error);
    _cachedSections = [];
    _sectionsCacheExpires = now + SECTIONS_CACHE_TTL_MS;
    _sectionNameIndex = null;
    return [];
  }
}

/**
 * 根据名称查找节
 * @param sectionName 节名称
 * @returns 节对象或null
 */
export function findSectionByName(sectionName: string): SectionProperty | null {
  if (!_sectionNameIndex) {
    loadSectionsData();
  }
  return _sectionNameIndex?.get(sectionName) ?? null;
}
