// 定义共享类型和接口
export interface TypeColorMap {
    [key: string]: string;
}

export interface ThemeAwareColorMap {
    light: TypeColorMap;
    dark: TypeColorMap;
}

export interface LanguageKeyInfo {
    baseName: string;
    languageCode: string;
    fullName: string;
}

export interface SectionInfo {
    name: string;
    startLine: number;
    endLine: number;
}

export type ThemeKind = 'light' | 'dark' | 'highContrast' | 'highContrastLight';
