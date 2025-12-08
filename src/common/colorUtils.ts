/**
 * 颜色工具函数
 * 支持解析 #AARRGGBB、#RRGGBB、#ARGB、带或不带# 的十六进制格式
 * 提供 RGBA 输出、标准化 AARRGGBB 输出，并生成用于 Markdown 的颜色预览 HTML
 * 会尝试使用翻译键 `data.value.color.formats` 添加本地化的格式说明
 */
import { t } from "../translationManager";
export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number; // 0..1
}

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export function parseHexColor(input: string): RGBA | null {
  if (!input) return null;
  const s = input.trim();
  const hex = s.startsWith("#") ? s.substring(1) : s;

  // AARRGGBB
  if (/^[0-9a-fA-F]{8}$/.test(hex)) {
    const a = parseInt(hex.substring(0, 2), 16) / 255;
    const r = parseInt(hex.substring(2, 4), 16);
    const g = parseInt(hex.substring(4, 6), 16);
    const b = parseInt(hex.substring(6, 8), 16);
    return { r, g, b, a: clamp01(a) };
  }

  // RRGGBB
  if (/^[0-9a-fA-F]{6}$/.test(hex)) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b, a: 1 };
  }

  // ARGB (4 chars) or RGBA (4 chars)
  if (/^[0-9a-fA-F]{4}$/.test(hex)) {
    const a = parseInt(hex.substring(0, 1).repeat(2), 16) / 255;
    const r = parseInt(hex.substring(1, 2).repeat(2), 16);
    const g = parseInt(hex.substring(2, 3).repeat(2), 16);
    const b = parseInt(hex.substring(3, 4).repeat(2), 16);
    return { r, g, b, a: clamp01(a) };
  }

  // R G B (3 chars)
  if (/^[0-9a-fA-F]{3}$/.test(hex)) {
    const r = parseInt(hex.substring(0, 1).repeat(2), 16);
    const g = parseInt(hex.substring(1, 2).repeat(2), 16);
    const b = parseInt(hex.substring(2, 3).repeat(2), 16);
    return { r, g, b, a: 1 };
  }

  return null;
}

export function toHexAARRGGBB(rgba: RGBA): string {
  const a = Math.round(clamp01(rgba.a) * 255);
  const to2 = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();
  return `#${to2(a)}${to2(rgba.r)}${to2(rgba.g)}${to2(rgba.b)}`;
}

export function toRGBAString(rgba: RGBA): string {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${Number(rgba.a.toFixed(3))})`;
}

export function createColorPreviewMarkdown(rgba: RGBA, label?: string) {
  const hex = toHexAARRGGBB(rgba);
  const rgbaStr = toRGBAString(rgba);
  // small inline preview using HTML (VSCode markdown supports simple HTML)
  const swatch = `<div style="display:inline-block;vertical-align:middle;margin-right:8px;width:40px;height:18px;border:1px solid rgba(0,0,0,0.12);background-color:${rgbaStr}"></div>`;
  const text = `**${label ? label + ": " : ""}${hex} / ${rgbaStr}**`;
  // 尝试追加本地化的格式说明（如果存在的话）
  let formatsNote = "";
  try {
    const fmt = t("data.value.color.formats");
    if (fmt && !fmt.startsWith("data.value.color.formats")) {
      formatsNote = `\n\n${fmt}`;
    }
  } catch {
    // 忽略翻译错误，保持兼容
  }

  const md = `${swatch}${text}${formatsNote}`;
  return md;
}

export function tryParseAndPreview(
  input: string,
  label?: string
): string | null {
  const rgba = parseHexColor(input);
  if (!rgba) return null;
  return createColorPreviewMarkdown(rgba, label);
}

export default {
  parseHexColor,
  toHexAARRGGBB,
  toRGBAString,
  createColorPreviewMarkdown,
  tryParseAndPreview,
};
