import * as vscode from "vscode";
import { ValueItem } from "@/common/types";
import { BaseValueCompletionProvider } from "@/valueComple/BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "@/common/valueCompletionUtils";
import { t } from "@/translationManager";

export class DrawLayerValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "drawLayer") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "drawLayer",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.drawlayer.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
