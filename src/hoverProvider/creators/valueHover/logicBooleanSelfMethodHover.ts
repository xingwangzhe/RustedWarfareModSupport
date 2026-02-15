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

    // 查找匹配的方法
    const methodPart = method.substring(5); // 移除"self."前缀
    const methodBase = methodPart.split("(")[0]; // 获取方法名，忽略参数部分

    for (const item of valueData.data) {
      // 改进匹配逻辑：同时匹配带括号和不带括号的形式
      const itemBase = item.name.replace(/\(\)$/g, ""); // 移除末尾的括号
      const searchTarget = `self.${methodBase}`;

      if (
        itemBase === searchTarget ||
        item.name === searchTarget ||
        item.name.startsWith(searchTarget + ".") ||
        item.name === searchTarget + "()"
      ) {
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
