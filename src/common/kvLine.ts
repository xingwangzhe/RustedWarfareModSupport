/**
 * INI 键值行解析工具
 * 统一了 colorPropertyDecorator / imagePropertyDecorator / iniFormatter 三处的键值正则。
 */

/** 键值行正则：捕获 前导空白 / 键 / 分隔符(=或:) / 值 / 注释 */
export const KV_LINE_REGEX = /^(\s*)([^=:#]+?)(\s*[:=])(\s*)(.*?)(\s*)([;#].*)?$/;

/** 属性行检测正则（供装饰器用）：键必须是合法标识符，值非空 */
export const PROPERTY_LINE_REGEX = /^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.+)$/;

export interface KvLineMatch {
  leading: string;
  key: string;
  separator: "=" | ":";
  value: string;
  comment: string;
}

/** 解析一行 INI 键值文本；非键值行返回 null */
export function parseKvLine(line: string): KvLineMatch | null {
  const m = line.match(KV_LINE_REGEX);
  if (!m) {
    return null;
  }
  const separator = (m[3] || "=").match(/[:=]/)?.[0] as "=" | ":" | undefined;
  return {
    leading: m[1] || "",
    key: m[2] || "",
    separator: separator ?? "=",
    value: m[5] || "",
    comment: m[7] || "",
  };
}
