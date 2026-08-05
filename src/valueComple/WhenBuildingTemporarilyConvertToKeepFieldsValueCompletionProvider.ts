import * as vscode from "vscode";
import { ValueItem } from "../common/types";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "whenBuilding_temporarilyConvertTo_keepFields") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "whenBuilding_temporarilyConvertTo_keepFields",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.whenbuilding_temporarilyconvertto_keepfields.detail",
      {
        customDocumentation: (item: ValueItem) => new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
