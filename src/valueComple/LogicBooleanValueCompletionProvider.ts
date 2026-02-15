import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { getSectionProperties } from "../dataProcessor";
import { getExtensionId } from "../extension";
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
    const property = sectionProperties.find((prop: any) => prop.name === propertyName);

    if (property && property.type === "LogicBoolean") {
      return this.getBasicLogicBooleanCompletionItems(document, position);
    }

    return [];
  }

  private getBasicLogicBooleanCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
  ): vscode.CompletionItem[] {
    // 获取当前行文本和光标前的文本
    const lineText = document.lineAt(position.line).text;
    const textBeforeCursor = lineText.substring(0, position.character);

    // 检查光标前是否已经包含"self."
    const hasSelfPrefix = textBeforeCursor.endsWith("self.");

    const completionItems = createCompletionItemsFromDataFile(
      "logicboolean",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.logicboolean.detail",
    );

    // 如果已经输入了"self."，修改补全项以避免重复，并过滤掉不合适的运算符
    if (hasSelfPrefix) {
      // 定义算术运算符列表，这些在self.后不合适
      const arithmeticOperators = ["+", "-", "*", "/", "<", ">", "<=", ">=", "==", "!=", "%"];
      const boolitems = ["true", "false"];
      // 先获取原始数据以便后续使用
      const rawData = this.getRawLogicBooleanData();

      return completionItems
        .map((item, index) => {
          const labelText = typeof item.label === "string" ? item.label : item.label.label;

          // 过滤掉算术运算符
          if (arithmeticOperators.includes(labelText)) {
            return null; // 返回null表示过滤掉
          }

          // 过滤掉true和false
          if (boolitems.includes(labelText)) {
            return null; // 返回null表示过滤掉
          }

          if (labelText.startsWith("self.")) {
            // 创建新的补全项，只显示self.之后的部分
            const newLabel = labelText.substring(5); // 移除"self."前缀
            const newItem = new vscode.CompletionItem(newLabel, item.kind);
            newItem.detail = item.detail;

            // 为简化补全项生成对应的文档
            const originalData = rawData[index]; // 获取对应的原始数据
            // 使用默认的documentation生成逻辑
            let documentation = new vscode.MarkdownString(t(originalData.description));
            if (originalData.example) {
              const exampleText = t(originalData.example);
              documentation.appendMarkdown(
                `\n\n**${t("completionprovider.example")}:**\n\`\`\`ini\n${exampleText}\n\`\`\``,
              );
            }
            newItem.documentation = documentation;

            newItem.insertText = new vscode.SnippetString(newLabel);
            return newItem;
          }
          return item;
        })
        .filter((item) => item !== null); // 过滤掉null项
    }

    return completionItems;
  }

  /**
   * 获取原始的logicboolean数据
   * @returns 原始数据数组
   */
  private getRawLogicBooleanData(): any[] {
    try {
      // 获取扩展路径
      const extension = vscode.extensions.getExtension(getExtensionId());
      if (!extension) {
        return [];
      }

      const extensionPath = extension.extensionPath;
      const filePath = path.join(extensionPath, "data", "value", "logicboolean.json");

      if (!fs.existsSync(filePath)) {
        return [];
      }

      // 读取数据文件
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data.data || [];
    } catch (error) {
      console.error("Error reading raw logicboolean data:", error);
      return [];
    }
  }
}
