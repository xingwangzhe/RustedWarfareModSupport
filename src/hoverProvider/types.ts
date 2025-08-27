/**
 * Hover功能相关的类型定义
 */

export interface SectionHoverInfo {
    sectionName: string;
}

export interface PropertyHoverInfo {
    propertyName: string;
    originalName?: string; // 对于语言后缀的键，存储原始键名
    isLanguageKey?: boolean; // 是否为语言键
    languageCode?: string; // 语言代码，如 'zh', 'en'
}

export interface PropertyValueHoverInfo {
    propertyName: string;
    value: string;
    originalName?: string; // 对于语言后缀的键，存储原始键名
    isLanguageKey?: boolean; // 是否为语言键
    languageCode?: string; // 语言代码，如 'zh', 'en'
}

export interface HoverDetectionResult {
    type: 'section' | 'property' | 'value' | null;
    data: SectionHoverInfo | PropertyHoverInfo | PropertyValueHoverInfo | null;
}

/**
 * 语言键信息
 */
export interface LanguageKeyInfo {
    fullName: string; // 完整的键名，如 "name_zh"
    baseName: string; // 基础键名，如 "name"
    languageCode: string; // 语言代码，如 "zh"
}
