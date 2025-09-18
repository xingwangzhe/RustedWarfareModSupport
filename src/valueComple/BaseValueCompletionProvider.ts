import * as vscode from "vscode";
import { getSectionProperties } from "../dataProcessor";
import { getCurrentSection } from "../common/sectionUtils";

/**
 * 基础值补全提供者抽象类
 * 用于在属性值位置提供补全建议
 */
export abstract class BaseValueCompletionProvider
  implements vscode.CompletionItemProvider
{
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 检查当前位置是否在属性值位置（冒号后面）
    const lineText = document.lineAt(position.line).text;
    const textBeforeCursor = lineText.substring(0, position.character);

    // 查找冒号位置
    const colonIndex = textBeforeCursor.lastIndexOf(":");
    if (colonIndex === -1) {
      return [];
    }

    // 获取属性名
    const propertyName = textBeforeCursor.substring(0, colonIndex).trim();
    if (!propertyName) {
      return [];
    }

    // 获取当前section
    const currentSection = getCurrentSection(document, position);
    if (!currentSection) {
      return [];
    }

    // 检查属性是否属于当前section
    const sectionProperties = getSectionProperties(currentSection);

    // 检查属性是否存在于section的属性列表中
    const propertyExists = sectionProperties.some(
      (prop: any) => prop.name === propertyName
    );
    if (!sectionProperties || !propertyExists) {
      return [];
    }

    // 调用子类实现的具体补全逻辑
    return this.provideValueCompletionItems(
      document,
      position,
      propertyName,
      currentSection
    );
  }

  /**
   * 子类需要实现的抽象方法
   * 提供具体的属性值补全项
   */
  protected abstract provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    sectionName: string
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>;
}
