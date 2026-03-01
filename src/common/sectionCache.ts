import * as vscode from "vscode";

export interface SectionCacheEntry {
  sections: Map<number, string>;
  version: number;
}

const documentSectionCache: WeakMap<vscode.TextDocument, SectionCacheEntry> = new WeakMap();

export function getDocumentSectionCache(document: vscode.TextDocument): SectionCacheEntry {
  const cached = documentSectionCache.get(document);
  if (cached && cached.version === document.version) {
    return cached;
  }
  const entry: SectionCacheEntry = {
    sections: new Map(),
    version: document.version,
  };
  documentSectionCache.set(document, entry);
  return entry;
}

export function buildSectionIndex(document: vscode.TextDocument): Map<number, string> {
  const cache = getDocumentSectionCache(document);
  if (cache.sections.size > 0) {
    return cache.sections;
  }

  const lineCount = document.lineCount;
  for (let i = 0; i < lineCount; i++) {
    const line = document.lineAt(i).text.trim();
    if (line.startsWith("[") && line.endsWith("]")) {
      const sectionName = line.substring(1, line.length - 1);
      cache.sections.set(i, sectionName);
    }
  }
  return cache.sections;
}

export function findNearestSection(
  document: vscode.TextDocument,
  position: vscode.Position,
): string | null {
  const sections = buildSectionIndex(document);
  const targetLine = position.line;

  let nearestSection: string | null = null;
  for (const [line, section] of sections) {
    if (line < targetLine) {
      nearestSection = section;
    } else {
      break;
    }
  }
  return nearestSection;
}

export function clearDocumentCache(document: vscode.TextDocument): void {
  documentSectionCache.delete(document);
}
