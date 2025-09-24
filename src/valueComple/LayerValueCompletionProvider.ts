import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class LayerValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "layer") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "layer",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.layer.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
