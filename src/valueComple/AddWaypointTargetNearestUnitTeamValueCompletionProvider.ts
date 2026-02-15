import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class AddWaypointTargetNearestUnitTeamValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "addWaypoint_target_nearestUnit_team") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "addWaypoint_target_nearestUnit_team",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.addwaypoint_target_nearestunit_team.detail",
      {
        customDocumentation: (item: any) => new vscode.MarkdownString(t(item.description)),
      },
    );
  }
}
