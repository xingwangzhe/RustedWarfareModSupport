/**
 * 通用常量定义（供补全触发器、图片扩展名等复用）
 */

/** 支持的图片扩展名（用于 hover 预览 / 图片路径解析） */
export const IMAGE_EXTENSIONS: ReadonlySet<string> = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".bmp",
]);

/** 补全触发器字符：a-z、A-Z、0-9、_ */
export const ALPHANUMERIC_TRIGGERS: readonly string[] = [
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)), // a-z
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)), // A-Z
  ...Array.from({ length: 10 }, (_, i) => String(i)), // 0-9
  "_",
];
