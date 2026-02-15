import * as vscode from "vscode";
import { HoverUtils } from "../../utils";
import { resolveImagePath } from "../../../common/imagePathResolver";
import { createImageHoverFromPath } from "../../../common/imageHover";
import { PathCompatibilityUtils } from "../../../common/pathCompatibility";
import { tryParseAndPreview as tryColorPreview } from "../../../common/colorUtils";
import { PropertyHoverCreator } from "../propertyHover";
import { createBooleanValueHover } from "./booleanHover";
import { createLogicBooleanValueHover } from "./logicBooleanHover";
import { createValueTypeHover } from "./valueTypeHover";

/**
 * 值悬停创建器
 * 负责创建属性值的悬停信息
 */
export class ValueHoverCreator {
  /**
   * 创建属性值悬停信息
   * @param sectionName 节名称
   * @param propertyName 属性名称
   * @param value 值
   * @param originalName 原始属性名称（用于语言键）
   * @returns 悬停信息
   */
  public static createPropertyValueHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    sectionName: string,
    propertyName: string,
    value: string,
    originalName?: string,
  ): vscode.Hover | null {
    // 先获取属性信息
    const propertyHover = PropertyHoverCreator.createPropertyHover(
      sectionName,
      propertyName,
      originalName,
    );
    if (!propertyHover) {
      return null;
    }

    // 提取属性类型
    const propertyType = HoverUtils.extractPropertyType(propertyHover);

    console.log(
      `[DEBUG] PropertyValueHover - propertyName: ${propertyName}, value: ${value}, extracted propertyType: ${propertyType}`,
    );

    // 如果无法提取到有效的属性类型，返回null
    if (!propertyType || propertyType.trim() === "") {
      console.log(`[DEBUG] PropertyValueHover - No valid propertyType, returning null`);
      return null;
    }

    // 颜色字段快速预览优先（如 shoot_light, color, displayColor 等）
    try {
      const lowerName = (propertyName || "").toLowerCase();
      const looksLikeColorType = propertyType && propertyType.toLowerCase().includes("color");
      if (
        ["shoot_light", "color", "displaycolor", "displaycolour", "display_color"].includes(
          lowerName,
        ) ||
        looksLikeColorType
      ) {
        // 提取行中完整值以支持注释去除
        const lineTextForColor = document.lineAt(position.line).text;
        const colonIndexForColor = lineTextForColor.indexOf(":");
        const fullValueForColor =
          colonIndexForColor >= 0
            ? lineTextForColor.substring(colonIndexForColor + 1).trim()
            : (value || "").trim();
        const cleanedColor = fullValueForColor.replace(/#.*$/, "").trim();
        const previewMd = tryColorPreview(cleanedColor, propertyName);
        if (previewMd) {
          const md = new vscode.MarkdownString(previewMd);
          md.isTrusted = true;
          return new vscode.Hover(md);
        }
      }
    } catch (e) {
      console.error("Color preview error", e);
    }

    // 如果是图片类型，则尝试生成图片预览
    if (propertyType && propertyType.toLowerCase().includes("image")) {
      try {
        // 获取当前行冒号后的完整值文本（优于只使用传入的 word）
        const lineText = document.lineAt(position.line).text;
        const colonIndex = lineText.indexOf(":");
        const fullValueText =
          colonIndex >= 0 ? lineText.substring(colonIndex + 1).trim() : (value || "").trim();

        // 移除注释部分
        const cleaned = fullValueText.replace(/#.*$/, "").trim();

        // 使用PathCompatibilityUtils提取多个图片路径（支持逗号分隔）
        const extractedPaths = PathCompatibilityUtils.extractImagePaths(cleaned);

        if (extractedPaths.length > 0) {
          const hoverContents: vscode.MarkdownString[] = [];

          for (const pathCandidate of extractedPaths) {
            // 规范化路径分隔符，支持正斜杠和反斜杠
            const candidate = PathCompatibilityUtils.normalizePathSeparators(pathCandidate);

            try {
              const resolvedPath = resolveImagePath(candidate, document);
              if (resolvedPath) {
                const hover = createImageHoverFromPath(resolvedPath);
                if (hover && hover.contents) {
                  // 如果是单个MarkdownString
                  if (hover.contents instanceof vscode.MarkdownString) {
                    hoverContents.push(hover.contents);
                  }
                  // 如果是数组，过滤出MarkdownString类型
                  else if (Array.isArray(hover.contents)) {
                    const markdownContents = hover.contents.filter(
                      (content) => content instanceof vscode.MarkdownString,
                    ) as vscode.MarkdownString[];
                    hoverContents.push(...markdownContents);
                  }
                }
              }
            } catch (e) {
              console.error("HoverCreators: error resolving image path", e);
            }
          }

          // 如果有图片内容，返回组合的hover
          if (hoverContents.length > 0) {
            return new vscode.Hover(hoverContents);
          }
        } else {
          // 回退到单个路径处理（保持向后兼容）
          const extractedPath = PathCompatibilityUtils.extractImagePath(cleaned);
          let candidate = extractedPath || cleaned;

          // 规范化路径分隔符，支持正斜杠和反斜杠
          candidate = PathCompatibilityUtils.normalizePathSeparators(candidate);

          if (candidate) {
            try {
              const resolvedPath = resolveImagePath(candidate, document);
              if (resolvedPath) {
                const hover = createImageHoverFromPath(resolvedPath);
                if (hover) {
                  return hover;
                }
              }
            } catch (e) {
              console.error("HoverCreators: error resolving image path", e);
            }
          }
        }
      } catch (e) {
        console.error("Error resolving image path for hover:", e);
      }
    }

    // 根据属性类型提供额外的值信息
    switch (propertyType) {
      case "bool":
        console.log(`[DEBUG] PropertyValueHover - Calling createBooleanValueHover for: ${value}`);
        return createBooleanValueHover(value);
      case "LogicBoolean":
        console.log(
          `[DEBUG] PropertyValueHover - Calling createLogicBooleanValueHover for: ${value}`,
        );
        const logicBooleanResult = createLogicBooleanValueHover(value);
        console.log(
          `[DEBUG] PropertyValueHover - LogicBoolean result: ${
            logicBooleanResult ? "success" : "null"
          }`,
        );
        if (logicBooleanResult) {
          return logicBooleanResult;
        }
        // 如果LogicBoolean处理失败，尝试作为值类型处理
        console.log(
          `[DEBUG] PropertyValueHover - LogicBoolean failed, falling back to valueTypeHover`,
        );
        return createValueTypeHover(propertyType, value);
      default:
        // 对于其他类型，尝试从值类型文件中查找匹配的信息
        console.log(
          `[DEBUG] PropertyValueHover - Calling createValueTypeHover for type: ${propertyType}, value: ${value}`,
        );
        return createValueTypeHover(propertyType, value);
    }
  }
}
