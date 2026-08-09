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
