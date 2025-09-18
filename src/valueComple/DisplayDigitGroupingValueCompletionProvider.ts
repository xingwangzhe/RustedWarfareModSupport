import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class DisplayDigitGroupingValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    property: any
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (property.name !== "displayDigitGrouping") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "displayDigitGrouping",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.displaydigitgrouping.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
