import * as vscode from "vscode";
import { ValueItem } from "../common/types";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "takeResources_includeUnitsWithinRange_team") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "takeResources_includeUnitsWithinRange_team",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.takeresources_includeunitswithinrange_team.detail",
      {
        customDocumentation: (item: ValueItem) =>
          new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
