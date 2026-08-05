import * as path from "path";
import { IMAGE_EXTENSIONS } from "@/common/constants";

/**
 * 路径兼容性工具类
 * 提供跨平台路径处理功能，支持正斜杠和反斜杠
 */

/** 匹配图片文件路径的正则（支持反斜杠和 unicode 字符，遇到空格或 # 停止） */
const IMAGE_PATH_REGEX = /[^\s#]+?\.(png|jpe?g|gif|webp|bmp)/i;
const LEADING_QUOTES_REGEX = /^["']|["']$/g;

export class PathCompatibilityUtils {
  /**
   * 规范化路径分隔符，将Windows反斜杠转换为当前平台的路径分隔符
   * @param inputPath 输入路径
   * @returns 规范化后的路径
   */
  public static normalizePathSeparators(inputPath: string): string {
    if (!inputPath) {
      return inputPath;
    }

    // 将所有反斜杠替换为当前平台的路径分隔符
    return inputPath.replace(/\\+/g, path.sep);
  }

  /**
   * 检测路径是否包含反斜杠
   * @param inputPath 输入路径
   * @returns 是否包含反斜杠
   */
  public static hasBackslashes(inputPath: string): boolean {
    return inputPath.includes("\\");
  }

  /**
   * 规范化图片路径，支持多种格式：
   * - 相对路径: images/icon.png
   * - ROOT: 前缀: ROOT:/images/icon.png 或 ROOT:\images\icon.png
   * - 绝对路径: /full/path/to/image.png 或 C:\full\path\to\image.png
   * @param imagePath 图片路径
   * @returns 规范化后的路径
   */
  public static normalizeImagePath(imagePath: string): string {
    if (!imagePath) {
      return imagePath;
    }

    // 移除引号
    let normalized = imagePath.trim().replace(LEADING_QUOTES_REGEX, "");

    // 规范化路径分隔符
    normalized = this.normalizePathSeparators(normalized);

    return normalized;
  }

  /**
   * 检查路径是否为有效的图片路径
   * @param filePath 文件路径
   * @returns 是否为图片文件
   */
  public static isImagePath(filePath: string): boolean {
    if (!filePath) {
      return false;
    }

    const lowerPath = filePath.toLowerCase();

    return [...IMAGE_EXTENSIONS].some((ext) => lowerPath.endsWith(ext));
  }

  /**
   * 从文本中提取图片路径
   * @param text 包含路径的文本
   * @returns 找到的图片路径或null
   */
  public static extractImagePath(text: string): string | null {
    if (!text) {
      return null;
    }

    // 移除注释
    const cleaned = text.replace(/#.*$/gm, "").trim();

    const match = cleaned.match(IMAGE_PATH_REGEX);

    return match ? match[0] : null;
  }

  /**
   * 从文本中提取多个图片路径（支持逗号分隔）
   * @param text 包含路径的文本
   * @returns 找到的图片路径数组
   */
  public static extractImagePaths(text: string): string[] {
    if (!text) {
      return [];
    }

    // 移除注释
    const cleaned = text.replace(/#.*$/gm, "").trim();

    // 按逗号分割，但要小心处理引号内的逗号
    const parts = cleaned.split(",").map((part) => part.trim());

    const imagePaths: string[] = [];

    for (const part of parts) {
      const match = part.match(IMAGE_PATH_REGEX);

      if (match) {
        imagePaths.push(match[0]);
      }
    }

    return imagePaths;
  }

  /**
   * 创建跨平台兼容的路径建议
   * @param basePath 基础路径
   * @param fileName 文件名
   * @returns 路径建议数组
   */
  public static createPathSuggestions(basePath: string, fileName: string): string[] {
    const suggestions: string[] = [];

    // 当前平台格式（使用path.join确保正确）
    const platformPath = path.join(basePath, fileName);
    suggestions.push(platformPath);

    // 如果是Windows，也提供Linux/Mac格式（正斜杠）
    if (path.sep === "\\") {
      const unixStylePath = platformPath.replace(/\\/g, "/");
      suggestions.push(unixStylePath);
    }

    return suggestions;
  }
}
