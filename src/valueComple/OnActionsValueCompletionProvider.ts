import * as vscode from "vscode";
import { ValueItem } from "@/common/types";
import { BaseValueCompletionProvider } from "@/valueComple/BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "@/common/valueCompletionUtils";
import { t } from "@/translationManager";

export class OnActionsValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "onActions") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "onActions",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.onactions.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
