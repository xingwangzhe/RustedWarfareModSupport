import * as vscode from "vscode";
import { t } from "@/translationManager";
import { ValueDataFile, ValueItem } from "@/common/types";

const PURE_NUMBER_REGEX = /^\d+$/;
const TRAILING_PARENS_REGEX = /\s*\([^)]*\)\s*$/;
/**
 * 在值类型数据中查找匹配的项目
 * @param valueData 值类型数据
 * @param value 值
 * @returns 匹配的项目
 */
export function findMatchingValueItem(valueData: ValueDataFile, value: string): ValueItem | null {
  if (!valueData || !valueData.data || !Array.isArray(valueData.data)) {
    return null;
  }

  // 对于Prices_Resources类型，如果值是纯数字，直接返回null让它显示一般信息
  if (valueData.type === "Prices_Resources") {
    // 检查是否是纯数字（简单价格格式）
    if (PURE_NUMBER_REGEX.test(value.trim())) {
      return null; // 返回null，让createValueTypeGeneralHover处理
    }

    // 检查是否是资源格式（credits=100, energy=50）
    if (
      value.includes("=") &&
      value.split(",").every((part: string) => part.trim().includes("="))
    ) {
      const resources = value.split(",").map((r: string) => r.trim().split("=")[0]);
      for (const resource of resources) {
        for (const item of valueData.data) {
          if (item.name === resource) {
            return item;
          }
        }
      }
    }
  }

  // 精确匹配
  for (const item of valueData.data) {
    if (item.name === value) {
      return item;
    }
  }

  // 前缀匹配（用于处理参数化的值，如 credits=100）
  const valuePrefix = value.split("=")[0];
  for (const item of valueData.data) {
    if (item.name === valuePrefix) {
      return item;
    }
  }

  // 对于LogicBoolean类型，尝试智能匹配函数名
  if (valueData.type === "logicboolean" || valueData.name === "logicboolean") {
    const matchedItem = findLogicBooleanFunction(value, valueData.data);
    if (matchedItem) {
      return matchedItem;
    }
  }

  return null;
}

/**
 * 查找LogicBoolean函数的智能匹配
 * @param inputValue 输入的值
 * @param data 数据数组
 * @returns 匹配的项目
 */
export function findLogicBooleanFunction(inputValue: string, data: ValueItem[]): ValueItem | null {
  // 移除括号和参数
  const cleanInput = inputValue.replace(TRAILING_PARENS_REGEX, "");

  // 精确匹配
  for (const item of data) {
    if (item.name === cleanInput) {
      return item;
    }
  }

  // 对于self.开头的函数，尝试多种匹配方式
  if (cleanInput.startsWith("self.")) {
    const inputBase = cleanInput.substring(5); // 移除"self."前缀

    // 1. 特殊处理已知的函数名变体
    if (inputBase === "overWater") {
      // 查找对应的"isOverwater"
      for (const item of data) {
        if (item.name === "self.isOverwater()") {
          return item;
        }
      }
    }

    // 2. 模糊匹配：查找包含输入字符串的项目
    for (const item of data) {
      if (item.name.includes(inputBase) && item.name.startsWith("self.")) {
        return item;
      }
    }

    // 3. 反向匹配：输入可能是标准函数名的简化版
    const possibleMatches = [
      `self.${inputBase}`,
      `self.${inputBase}()`,
      `self.is${inputBase.charAt(0).toUpperCase()}${inputBase.slice(1)}`,
      `self.is${inputBase.charAt(0).toUpperCase()}${inputBase.slice(1)}()`,
      `self.has${inputBase.charAt(0).toUpperCase()}${inputBase.slice(1)}`,
      `self.has${inputBase.charAt(0).toUpperCase()}${inputBase.slice(1)}()`,
    ];

    for (const possibleMatch of possibleMatches) {
      for (const item of data) {
        if (item.name === possibleMatch) {
          return item;
        }
      }
    }
  }

  // 对于其他函数，也尝试添加括号的匹配
  for (const item of data) {
    if (item.name === `${cleanInput}()` || item.name === cleanInput) {
      return item;
    }
  }

  return null;
}

/**
 * 创建值项目的悬停信息
 * @param item 值项目
 * @param valueData 值类型数据
 * @returns 悬停信息
 */
export function createValueItemHover(
  item: ValueItem,
  valueData: ValueDataFile,
): vscode.Hover | null {
  const hoverContent = new vscode.MarkdownString();

  // 添加标题
  hoverContent.appendMarkdown(`**${valueData.type || "Value"} Parameter**\n\n`);

  // 添加参数名称
  hoverContent.appendMarkdown(`**${t("completionprovider.name")}:** \`${item.name}\`\n\n`);

  // 添加类型
  if (item.type) {
    hoverContent.appendMarkdown(`**${t("completionprovider.type")}:** ${item.type}\n\n`);
  }

  // 添加描述
  if (item.description) {
    hoverContent.appendMarkdown(
      `**${t("completionprovider.description")}:** ${t(item.description)}\n\n`,
    );
  }

  // 添加版本
  if (item.version) {
    hoverContent.appendMarkdown(`**${t("completionprovider.version")}:** ${item.version}\n\n`);
  }

  // 添加示例
  if (item.example) {
    hoverContent.appendMarkdown(
      `**${t("completionprovider.example")}:**\n\`\`\`ini\n${t(item.example)}\n\`\`\`\n\n`,
    );
  }

  return new vscode.Hover(hoverContent);
}

/**
 * 创建值类型的一般悬停信息
 * @param valueData 值类型数据
 * @returns 悬停信息
 */
export function createValueTypeGeneralHover(valueData: ValueDataFile): vscode.Hover | null {
  const hoverContent = new vscode.MarkdownString();

  // 添加标题
  hoverContent.appendMarkdown(`**${valueData.type || "Value Type"}**\n\n`);

  // 添加描述
  if (valueData.description) {
    hoverContent.appendMarkdown(`${t(valueData.description)}\n\n`);
  }

  // 添加示例
  if (valueData.example) {
    hoverContent.appendMarkdown(
      `**${t("completionprovider.example")}:**\n\`\`\`ini\n${t(valueData.example)}\n\`\`\`\n\n`,
    );
  }

  // 列出可用的参数
  if (valueData.data && Array.isArray(valueData.data) && valueData.data.length > 0) {
    hoverContent.appendMarkdown(`**Available parameters:**\n`);
    const maxItems = Math.min(valueData.data.length, 10); // 限制显示数量
    for (let i = 0; i < maxItems; i++) {
      const item = valueData.data[i];
      hoverContent.appendMarkdown(`- \`${item.name}\`\n`);
    }
    if (valueData.data.length > 10) {
      hoverContent.appendMarkdown(`- ... and ${valueData.data.length - 10} more\n`);
    }
  }

  return new vscode.Hover(hoverContent);
}
