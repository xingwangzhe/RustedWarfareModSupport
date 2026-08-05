/**
 * Hover功能的工具函数
 */

export class HoverUtils {
  /**
   * 从悬停内容中提取属性类型
   * @param hover 悬停对象
   * @returns 属性类型
   */
  public static extractPropertyType(hover: any): string {
    if (!hover || !hover.contents || hover.contents.length === 0) {
      return "";
    }

    const content = hover.contents[0];
    let text = "";
    if (content && typeof content === "object" && "value" in content) {
      text = content.value;
    } else if (typeof content === "string") {
      text = content;
    }

    // 优先匹配类型字段中的反引号内容
    // 查找包含"类型:"或"Type:"的行，但排除示例代码块
    const lines = text.split("\n");
    for (const line of lines) {
      // 跳过代码块
      if (line.trim().startsWith("```") || line.trim().endsWith("```")) {
        continue;
      }
      // 查找类型相关的行（包含类型关键词且有反引号）
      if (
        (line.includes("类型") || line.includes("Type")) &&
        line.includes("`") &&
        line.includes(":")
      ) {
        const backtickMatch = line.match(/`([^`]+)`/);
        if (backtickMatch) {
          return backtickMatch[1];
        }
      }
    }

    // 如果没找到明确的类型字段，返回空字符串而不是匹配示例代码
    return "";
  }
}
