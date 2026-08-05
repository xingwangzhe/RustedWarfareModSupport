import * as vscode from "vscode";
import * as path from "path";
import { getExtensionPath } from "../../../common/extensionPaths";
import { loadJsonCached } from "../../../common/dataCache";
import { t } from "../../../translationManager";

interface LogicBooleanItem {
  name?: string;
  description?: string;
  version?: string;
  example?: string;
}
interface LogicBooleanData {
  data: LogicBooleanItem[];
}

const normalize = (value: string): string =>
  value
    .replace(/\([^)]*\)/g, "")
    .trim()
    .toLowerCase();

/**
 * 创建LogicBoolean函数悬停信息
 * @param func 函数名
 * @returns 悬停信息
 */
export function createLogicBooleanFunctionHover(func: string): vscode.Hover | null {
  // 从logicboolean.json加载数据
  try {
    // 获取扩展的实际路径（带缓存）
    const extensionPath = getExtensionPath();
    if (!extensionPath) {
      console.error("Cannot find extension");
      return null;
    }

    const valuePath = path.join(extensionPath, "data", "value", "logicboolean.json");
    const valueData = loadJsonCached<LogicBooleanData>(valuePath);

    // 查找匹配的函数（模糊匹配：支持有无()与前缀）
    const funcBase = normalize(func);

    for (const item of valueData.data) {
      const itemName = String(item.name || "");
      const normalizedItemName = normalize(itemName);
      const isMatched =
        normalizedItemName === funcBase ||
        normalizedItemName.startsWith(funcBase) ||
        funcBase.startsWith(normalizedItemName);

      if (isMatched) {
        const hoverContent = new vscode.MarkdownString();
        hoverContent.appendMarkdown(`**LogicBoolean Function**\n\n`);
        hoverContent.appendMarkdown(`${t(item.description ?? "")}\n\n`);

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

  // 如果没有找到特定的函数，显示通用的LogicBoolean信息
  const hoverContent = new vscode.MarkdownString();
  hoverContent.appendMarkdown(`**LogicBoolean**\n\n`);
  hoverContent.appendMarkdown(t("valuecompletionprovider.logicboolean.example.documentation"));
  return new vscode.Hover(hoverContent);
}
