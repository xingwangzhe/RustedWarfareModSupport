import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class ConvertToKeepCurrentFieldsValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    property: any
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (property.name !== "convertTo_keepCurrentFields") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "convertTo_keepCurrentFields",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.convertto_keepcurrentfields.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
