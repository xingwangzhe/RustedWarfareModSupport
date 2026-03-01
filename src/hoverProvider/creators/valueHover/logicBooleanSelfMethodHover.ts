import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getExtensionId } from "../../../extension";
import { t } from "../../../translationManager";
/**
 * 创建LogicBoolean self方法悬停信息
 * @param method 方法名
 * @returns 悬停信息
 */
export function createLogicBooleanSelfMethodHover(method: string): vscode.Hover | null {
  // 从logicboolean.json加载数据
  try {
    // 获取扩展的实际路径
    const extension = vscode.extensions.getExtension(getExtensionId());
    if (!extension) {
      console.error("Cannot find extension");
      return null;
    }

    const extensionPath = extension.extensionPath;
    const valuePath = path.join(extensionPath, "data", "value", "logicboolean.json");

    if (!fs.existsSync(valuePath)) {
      return null;
    }

    const valueData = JSON.parse(fs.readFileSync(valuePath, "utf8"));

    // 查找匹配的方法（模糊匹配：支持有无()与前缀）
    const methodPart = method.startsWith("self.") ? method.substring(5) : method;
    const methodBase = methodPart
      .replace(/\([^)]*\)/g, "")
      .trim()
      .toLowerCase();

    const normalize = (value: string) =>
      value
        .replace(/\([^)]*\)/g, "")
        .trim()
        .toLowerCase();

    for (const item of valueData.data) {
      const itemName = String(item.name || "");
      const normalizedItemName = normalize(itemName);
      const normalizedSelfTarget = `self.${methodBase}`;

      // 允许：完整匹配、前缀匹配、以及 itemName 带额外链式后缀
      const isMatched =
        normalizedItemName === normalizedSelfTarget ||
        normalizedItemName.startsWith(normalizedSelfTarget) ||
        normalizedSelfTarget.startsWith(normalizedItemName);

      if (isMatched) {
        const hoverContent = new vscode.MarkdownString();
        hoverContent.appendMarkdown(`**LogicBoolean Function**\n\n`);
        hoverContent.appendMarkdown(`${t(item.description)}\n\n`);

        if (item.version) {
          hoverContent.appendMarkdown(`*Version: ${item.version}*\n\n`);
        }

        if (item.example) {
          hoverContent.appendMarkdown(`\`\`\`ini\n${t(item.example)}\n\`\`\``);
        }

        return new vscode.Hover(hoverContent);
      }
    }
  } catch (error) {
    console.error("Error reading logicboolean.json:", error);
  }

  return null;
}
