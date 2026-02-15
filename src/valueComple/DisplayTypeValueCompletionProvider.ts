import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class DisplayTypeValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "displayType") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "displayType",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.displaytype.detail",
      {
        customDocumentation: (item: any) => new vscode.MarkdownString(t(item.description)),
      },
    );
  }
}
