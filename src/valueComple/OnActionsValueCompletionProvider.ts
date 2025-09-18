import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class OnActionsValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    property: any
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (property.name !== "onActions") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "onActions",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.onactions.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
