/**
 * Hover功能相关的类型定义
 */

export interface SectionHoverInfo {
    sectionName: string;
}

export interface PropertyHoverInfo {
    propertyName: string;
}

export interface PropertyValueHoverInfo {
    propertyName: string;
    value: string;
}

export interface HoverDetectionResult {
    type: 'section' | 'property' | 'value' | null;
    data: SectionHoverInfo | PropertyHoverInfo | PropertyValueHoverInfo | null;
}
