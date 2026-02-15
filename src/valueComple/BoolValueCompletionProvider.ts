import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import {
  createCompletionItemsFromDataFile,
  getFallbackBoolItems,
} from "../common/valueCompletionUtils";
import { getSectionProperties } from "../dataProcessor";

/**
 * 布尔值补全提供者类
 * 用于提供布尔类型属性的补全建议
 */
export class BoolValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 获取节属性以检查属性类型
    const sectionProperties = getSectionProperties(sectionName);
    const property = sectionProperties.find((prop: any) => prop.name === propertyName);

    // 根据属性类型提供相应的补全项
    if (property && property.type === "bool") {
      return this.getBoolCompletionItems();
    }

    return [];
  }

  /**
   * 获取布尔类型补全项
   * @returns 布尔类型补全项数组
   */
  private getBoolCompletionItems(): vscode.CompletionItem[] {
    const items = createCompletionItemsFromDataFile(
      "bool",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.bool.detail",
    );
    return items.length > 0 ? items : getFallbackBoolItems();
  }
}
