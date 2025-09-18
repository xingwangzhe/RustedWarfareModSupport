import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class AddWaypointTypeValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    property: any
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (property.name !== "addWaypoint_type") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "addWaypoint_type",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.addwaypoint_type.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
