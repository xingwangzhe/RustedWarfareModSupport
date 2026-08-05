import * as vscode from "vscode";
import { SectionProperty, ValueItem } from "../common/types";
import * as path from "path";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { getSectionProperties } from "../dataProcessor";
import { getExtensionPath } from "../common/extensionPaths";
import { loadJsonCached } from "../common/dataCache";
import { t } from "../translationManager";

/**
 * LogicBoolean值补全提供者类
 * 用于提供LogicBoolean类型属性的补全建议
 */
export class LogicBooleanValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 获取节属性以检查属性类型
    const sectionProperties = getSectionProperties(sectionName);
    const property = sectionProperties.find((prop: SectionProperty) => prop.name === propertyName);

    if (property && property.type === "LogicBoolean") {
      return this.getBasicLogicBooleanCompletionItems(
        document,
        position,
        propertyName,
        sectionName,
      );
    }

    return [];
  }

  private getBasicLogicBooleanCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _propertyName: string,
    _sectionName: string,
  ): vscode.CompletionItem[] {
    // 获取当前行文本和光标前的文本
    const lineText = document.lineAt(position.line).text;
    const textBeforeCursor = lineText.substring(0, position.character);

    // 只处理属性值部分
    const colonIndex = textBeforeCursor.lastIndexOf(":");
    const valueText = colonIndex >= 0 ? textBeforeCursor.substring(colonIndex + 1).trim() : "";

    // 链式输入识别：xxx.yyy / xxx.
    const lastDotIndex = valueText.lastIndexOf(".");
    const isDotChainInput = lastDotIndex !== -1;

    // 提取最后一个点左侧的 token，用于区分 self 与非 self
    let tokenBeforeDot: string | null = null;
    if (isDotChainInput) {
      const leftText = valueText.substring(0, lastDotIndex);
      const tokenMatch = leftText.match(/([A-Za-z0-9_]+)$/);
      tokenBeforeDot = tokenMatch ? tokenMatch[1] : null;
    }
    const isSelfChain = tokenBeforeDot === "self";

    const completionItems = createCompletionItemsFromDataFile(
      "logicboolean",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.logicboolean.detail",
    );

    // 非点链输入时，保持原始补全
    if (!isDotChainInput) {
      return completionItems;
    }

    // 点链输入按两态规则处理：
    // 1) 点前 token 是 self -> 显示 self.function
    // 2) 点前 token 不是 self -> 显示 function
    const rawData = this.getRawLogicBooleanData();

    // 定义算术运算符列表，这些在self.后不合适
    const arithmeticOperators = ["+", "-", "*", "/", "<", ">", "<=", ">=", "==", "!=", "%"];
    const boolitems = ["true", "false"];

    return completionItems
      .map((item, index) => {
        const labelText = typeof item.label === "string" ? item.label : item.label.label;

        if (arithmeticOperators.includes(labelText) || boolitems.includes(labelText)) {
          return null;
        }

        // 只重写 self.* 系列，其他函数保持原样
        if (!labelText.startsWith("self.")) {
          return item;
        }

        const functionName = labelText.substring(5);
        const displayLabel = isSelfChain ? labelText : functionName;
        const newItem = new vscode.CompletionItem(displayLabel, item.kind);
        newItem.detail = item.detail;

        const originalData = rawData[index];
        if (originalData && originalData.description) {
          let documentation = new vscode.MarkdownString(t(originalData.description));
          if (originalData.example) {
            const exampleText = t(originalData.example);
            documentation.appendMarkdown(
              `\n\n**${t("completionprovider.example")}:**\n\`\`\`ini\n${exampleText}\n\`\`\``,
            );
          }
          newItem.documentation = documentation;
        } else {
          newItem.documentation = item.documentation;
        }

        // 插入文本始终只插函数名，避免重复写出 self.
        newItem.insertText = new vscode.SnippetString(functionName);
        // 保证 self 链输入时可按 self.xxx 过滤命中
        newItem.filterText = labelText;

        return newItem;
      })
      .filter((item): item is vscode.CompletionItem => item !== null);
  }

  /**
   * 获取原始的logicboolean数据
   * @returns 原始数据数组
   */
  private getRawLogicBooleanData(): ValueItem[] {
    try {
      // 获取扩展路径（带缓存）
      const extensionPath = getExtensionPath();
      if (!extensionPath) {
        return [];
      }

      const filePath = path.join(extensionPath, "data", "value", "logicboolean.json");

      // 读取数据文件（mtime 缓存）
      const data = loadJsonCached(filePath);
      return data.data || [];
    } catch (error) {
      console.error("Error reading raw logicboolean data:", error);
      return [];
    }
  }
}
