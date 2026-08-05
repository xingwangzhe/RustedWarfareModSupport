import * as vscode from "vscode";
import { ValueItem } from "../common/types";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class ConvertToKeepCurrentFieldsValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "convertTo_keepCurrentFields") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "convertTo_keepCurrentFields",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.convertto_keepcurrentfields.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
