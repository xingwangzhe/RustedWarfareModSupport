/**
 * 数据文件通用类型定义
 */

/** 节属性（data/sections/*.json 中的条目） */
export interface SectionProperty {
  name: string;
  type?: string;
  version?: string;
  description?: string;
  example?: string;
  [key: string]: unknown;
}

/** 值类型条目（data/value/*.json 中的条目） */
export interface ValueItem {
  name: string;
  type?: string;
  version?: string;
  description?: string;
  example?: string;
  [key: string]: unknown;
}

/** 值类型数据文件结构 */
export interface ValueDataFile {
  type?: string;
  name?: string;
  description?: string;
  example?: string;
  data: ValueItem[];
}
