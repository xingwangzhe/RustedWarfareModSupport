import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import { getExtensionPath } from "@/common/extensionPaths";

type TranslationCacheEntry = {
  mtimeMs: number;
  entries: [string, string][];
};

const translationFileCache: Map<string, TranslationCacheEntry> = new Map();
const translationResultCache: Map<string, string> = new Map();
const MAX_RESULT_CACHE_SIZE = 500;
const PLACEHOLDER_REGEX = /\{(\d+)\}/g;

/**
 * 自定义翻译管理器
 * 解决VS Code l10n在英文环境下直接返回键值的问题
 */
export class TranslationManager {
  static #instance: TranslationManager;
  #translations: Map<string, string> = new Map();
  #currentLocale: string = "en";

  private constructor() {
    this.loadTranslations();
  }

  public static getInstance(): TranslationManager {
    return (TranslationManager.#instance ??= new TranslationManager());
  }

  /**
   * 加载翻译文件
   */
  private loadTranslations(): void {
    try {
      // 获取当前语言环境
      this.#currentLocale = vscode.env.language || "en";

      // 获取扩展的翻译目录路径（带缓存）
      const extensionPath = getExtensionPath();
      if (!extensionPath) {
        console.warn("无法获取扩展路径，使用默认翻译");
        return;
      }

      const translationDir = path.join(extensionPath, "translation");

      // 尝试加载当前语言的翻译文件
      let translationFile = path.join(translationDir, `bundle.l10n.${this.#currentLocale}.json`);

      // 如果当前语言的翻译文件不存在，尝试加载基础翻译文件
      if (!fs.existsSync(translationFile)) {
        translationFile = path.join(translationDir, "bundle.l10n.json");
      }

      // 如果基础翻译文件也不存在，使用默认翻译
      if (!fs.existsSync(translationFile)) {
        console.warn("翻译文件不存在，使用默认翻译");
        return;
      }

      const cacheKey = `${this.#currentLocale}:${translationFile}`;
      const fileStats = fs.statSync(translationFile);
      const cached = translationFileCache.get(cacheKey);
      if (cached && cached.mtimeMs === fileStats.mtimeMs) {
        this.#translations = new Map(cached.entries);
        console.log(
          `已加载 ${this.#translations.size} 个翻译条目 (语言: ${this.#currentLocale}, 缓存命中)`,
        );
        return;
      }

      // 读取并解析翻译文件
      const translationContent = fs.readFileSync(translationFile, "utf8");
      const translations = JSON.parse(translationContent);

      const entries: [string, string][] = [];
      this.#translations.clear();
      for (const [key, value] of Object.entries(translations)) {
        const stringValue = String(value);
        this.#translations.set(key, stringValue);
        entries.push([key, stringValue]);
      }

      translationFileCache.set(cacheKey, {
        mtimeMs: fileStats.mtimeMs,
        entries,
      });

      console.log(`已加载 ${this.#translations.size} 个翻译条目 (语言: ${this.#currentLocale})`);
    } catch (error) {
      console.error("加载翻译文件时出错:", error);
    }
  }

  /**
   * 获取翻译文本
   * @param key 翻译键
   * @param args 格式化参数
   * @returns 翻译后的文本，如果找不到则返回键值
   */
  public t(key: string, ...args: any[]): string {
    const cacheKey = `${key}:${args.length > 0 ? args.join(",") : ""}`;
    const cached = translationResultCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const translation = this.#translations.get(key);

    let result: string;
    if (translation) {
      if (args.length > 0) {
        result = this.formatString(translation, args);
      } else {
        result = translation;
      }
    } else {
      console.warn(`翻译键未找到: ${key}`);
      result = key;
    }

    if (translationResultCache.size >= MAX_RESULT_CACHE_SIZE) {
      const firstKey = translationResultCache.keys().next().value;
      if (firstKey) {
        translationResultCache.delete(firstKey);
      }
    }
    translationResultCache.set(cacheKey, result);

    return result;
  }

  /**
   * 格式化字符串，支持 {0}, {1} 等占位符
   */
  private formatString(template: string, args: any[]): string {
    return template.replace(PLACEHOLDER_REGEX, (match, index) => {
      const argIndex = parseInt(index, 10);
      return argIndex < args.length ? String(args[argIndex]) : match;
    });
  }

  /**
   * 重新加载翻译（用于语言切换）
   */
  public reloadTranslations(): void {
    this.loadTranslations();
  }

  /**
   * 获取当前语言环境
   */
  public getCurrentLocale(): string {
    return this.#currentLocale;
  }

  /**
   * 获取所有翻译键（用于调试）
   */
  public getAllKeys(): string[] {
    return Array.from(this.#translations.keys());
  }
}

/**
 * 便捷的翻译函数
 */
export function t(key: string, ...args: any[]): string {
  return TranslationManager.getInstance().t(key, ...args);
}

/**
 * 重新加载翻译的函数
 */
export function reloadTranslations(): void {
  TranslationManager.getInstance().reloadTranslations();
}
