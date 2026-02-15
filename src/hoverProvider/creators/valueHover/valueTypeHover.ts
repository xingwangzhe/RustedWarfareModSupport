import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getExtensionId } from "../../../extension";
import { findMatchingValueItem, createValueItemHover, createValueTypeGeneralHover } from "./utils";

/**
 * 创建基于值类型的悬停信息
 * @param propertyType 属性类型
 * @param value 值
 * @returns 悬停信息
 */
export function createValueTypeHover(propertyType: string, value: string): vscode.Hover | null {
  if (!propertyType || !value) {
    return null;
  }

  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return null;
  }

  // 如果属性类型看起来像是示例代码而不是真正的类型，返回null
  if (
    propertyType.includes(":") ||
    propertyType.includes("if ") ||
    propertyType.includes("self.")
  ) {
    return null;
  }

  try {
    // 获取扩展的实际路径
    const extension = vscode.extensions.getExtension(getExtensionId());
    if (!extension) {
      console.error("Cannot find extension");
      return null;
    }

    const extensionPath = extension.extensionPath;
    const valueDir = path.join(extensionPath, "data", "value");

    // 根据属性类型映射到值类型文件
    const valueTypeFile = mapPropertyTypeToValueFile(propertyType);
    if (!valueTypeFile) {
      return null;
    }

    const valuePath = path.join(valueDir, `${valueTypeFile}.json`);
    if (!fs.existsSync(valuePath)) {
      return null;
    }

    const valueData = JSON.parse(fs.readFileSync(valuePath, "utf8"));

    // 在值类型文件中查找匹配的参数
    const matchedItem = findMatchingValueItem(valueData, trimmedValue);
    if (matchedItem) {
      return createValueItemHover(matchedItem, valueData);
    }

    // 如果没有找到精确匹配，显示类型的一般信息
    return createValueTypeGeneralHover(valueData);
  } catch (error) {
    console.error("Error reading value type file:", error);
    return null;
  }
}

/**
 * 将属性类型映射到值类型文件
 * @param propertyType 属性类型
 * @returns 值类型文件名
 */
function mapPropertyTypeToValueFile(propertyType: string): string | null {
  const typeMapping: { [key: string]: string } = {
    price: "Prices_Resources",
    "int / price": "Prices_Resources",
    logicBoolean: "logicboolean",
    LogicBoolean: "logicboolean",
    bool: "bool",
    spawnProjectiles: "spawnProjectiles",
    spawnUnits: "spawnUnits",
  };

  // 直接匹配
  if (typeMapping[propertyType]) {
    return typeMapping[propertyType];
  }

  // 模糊匹配
  for (const [key, value] of Object.entries(typeMapping)) {
    if (propertyType.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  return null;
}
