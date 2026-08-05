import * as vscode from "vscode";
import { SectionProperty, ValueItem } from "@/common/types";
import { BaseValueCompletionProvider } from "@/valueComple/BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "@/common/valueCompletionUtils";
import { getSectionProperties } from "@/dataProcessor";
import { t } from "@/translationManager";

export class MovementTypeValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 获取节属性以检查属性类型
    const sectionProperties = getSectionProperties(sectionName);
    const property = sectionProperties.find((prop: SectionProperty) => prop.name === propertyName);

    // 支持 movementType 属性或 type 为 movementTypes 的情况
    if (!property || (property.name !== "movementType" && property.type !== "movementTypes")) {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "movementType",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.movementtype.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
