import * as vscode from "vscode";
import { ValueItem } from "@/common/types";
import { BaseValueCompletionProvider } from "@/valueComple/BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "@/common/valueCompletionUtils";
import { t } from "@/translationManager";

export class OnlyTeamValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "onlyTeam") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "onlyTeam",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.onlyteam.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
