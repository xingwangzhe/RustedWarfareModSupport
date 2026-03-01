import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getExtensionId } from "../extension";

let _cachedSections: any[] | null = null;
let _sectionsCacheExpires = 0;
let _sectionNameIndex: Map<string, any> | null = null;
const SECTIONS_CACHE_TTL_MS = 60 * 1000;

function buildSectionNameIndex(sections: any[]): Map<string, any> {
  const index = new Map<string, any>();
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
export function loadSectionsData(): any[] {
  const now = Date.now();
  if (_cachedSections && _sectionsCacheExpires > now) {
    return _cachedSections;
  }
  try {
    const extension = vscode.extensions.getExtension(getExtensionId());
    if (!extension) {
      console.error("Cannot find extension");
      _cachedSections = [];
      _sectionsCacheExpires = now + SECTIONS_CACHE_TTL_MS;
      _sectionNameIndex = null;
      return [];
    }

    const extensionPath = extension.extensionPath;
    const sectionsPath = path.join(extensionPath, "data", "sections.json");
    const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, "utf8"));
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
export function findSectionByName(sectionName: string): any | null {
  if (!_sectionNameIndex) {
    loadSectionsData();
  }
  return _sectionNameIndex?.get(sectionName) || null;
}
