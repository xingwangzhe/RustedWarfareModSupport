import * as vscode from "vscode";
import { ValueItem } from "../common/types";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class TeamColoringModeValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "teamColoringMode") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "teamColoringMode",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.teamcoloringmode.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
