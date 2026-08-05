import * as vscode from "vscode";
import { SectionProperty } from "../common/types";
import * as fs from "fs";
import * as path from "path";
import { PathCompatibilityUtils } from "../common/pathCompatibility";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { resolveImagePath } from "../common/imagePathResolver";
import { createImageMarkdownWithPath } from "../common/imageHover";
import { getSectionProperties } from "../dataProcessor";
import { debugLog } from "../common/perfLogger";
import { IMAGE_EXTENSIONS } from "../common/constants";

export class ImageValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 获取节属性以检查属性类型
    const sectionProperties = getSectionProperties(sectionName);
    const property = sectionProperties.find((prop: SectionProperty) => prop.name === propertyName);

    if (!property) {
      return [];
    }

    // 仅在属性类型为 file (image) 或 name 包含 image 的时候生效
    const type = (property.type || "").toLowerCase();
    if (!(type.includes("image") || property.name.toLowerCase().includes("image"))) {
      return [];
    }

    // 获取当前文档目录
    const docDir = path.dirname(document.fileName);

    // 支持的图片扩展
    const exts = IMAGE_EXTENSIONS;

    const items: vscode.CompletionItem[] = [];

    try {
      // 列出当前目录下的文件
      if (fs.existsSync(docDir)) {
        const files = fs.readdirSync(docDir);
        for (const f of files) {
          const lower = f.toLowerCase();
          if ([...exts].some((e) => lower.endsWith(e))) {
            const it = new vscode.CompletionItem(f, vscode.CompletionItemKind.File);
            it.detail = "image";

            // 解析图片路径并创建预览
            const fullPath = path.join(docDir, f);
            debugLog(
              `[DEBUG] ImageCompletion - filename: ${f}, fullPath: ${fullPath}, exists: ${fs.existsSync(
                fullPath,
              )}`,
            );
            if (fs.existsSync(fullPath)) {
              // 使用公共函数创建包含路径和图片预览的MarkdownString
              const imageMarkdown = createImageMarkdownWithPath(fullPath);

              if (imageMarkdown) {
                debugLog(`[DEBUG] ImageCompletion - setting image documentation directly`);
                it.documentation = imageMarkdown;
              } else {
                debugLog(
                  `[DEBUG] ImageCompletion - failed to create markdown, fallback to text`,
                );
                it.documentation = new vscode.MarkdownString("Image file in current folder");
              }
            } else {
              debugLog(`[DEBUG] ImageCompletion - file not found, fallback to text`);
              it.documentation = new vscode.MarkdownString("Image file in current folder");
            }

            items.push(it);
          }
        }
      }

      // 尝试 workspace 根目录（ROOT: 映射）
      const workspaceFolders = vscode.workspace.workspaceFolders || [];
      if (workspaceFolders.length > 0) {
        const wf = workspaceFolders[0].uri.fsPath;
        if (fs.existsSync(wf)) {
          const files = fs.readdirSync(wf);
          for (const f of files) {
            const lower = f.toLowerCase();
            if ([...exts].some((e) => lower.endsWith(e))) {
              // 使用PathCompatibilityUtils生成跨平台路径建议
              const suggestions = PathCompatibilityUtils.createPathSuggestions("ROOT:", f);

              for (const suggestion of suggestions) {
                const it = new vscode.CompletionItem(suggestion, vscode.CompletionItemKind.File);
                it.detail = "image (workspace root)";

                // 解析图片路径并创建预览
                const resolvedPath = resolveImagePath(suggestion, document);
                debugLog(
                  `[DEBUG] ImageCompletion - suggestion: ${suggestion}, resolvedPath: ${resolvedPath}`,
                );
                if (resolvedPath && fs.existsSync(resolvedPath)) {
                  // 使用公共函数创建包含路径和图片预览的MarkdownString
                  const imageMarkdown = createImageMarkdownWithPath(resolvedPath);

                  if (imageMarkdown) {
                    debugLog(`[DEBUG] ImageCompletion - setting image documentation directly`);
                    it.documentation = imageMarkdown;
                  } else {
                    debugLog(
                      `[DEBUG] ImageCompletion - failed to create markdown, fallback to text`,
                    );
                    it.documentation = new vscode.MarkdownString(
                      `Image file in workspace root\nPath: ${suggestion}`,
                    );
                  }
                } else {
                  debugLog(
                    `[DEBUG] ImageCompletion - no resolved path or file not found, fallback to text`,
                  );
                  it.documentation = new vscode.MarkdownString(
                    `Image file in workspace root\nPath: ${suggestion}`,
                  );
                }

                items.push(it);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("ImageValueCompletionProvider error:", error);
    }

    return items;
  }
}
