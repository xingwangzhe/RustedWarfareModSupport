import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "fireTurretXAtGround_onlyOverPassableTileOf") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "fireTurretXAtGround_onlyOverPassableTileOf",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.fireturretxatground_onlyoverpassabletileof.detail",
      {
        customDocumentation: (item: any) => new vscode.MarkdownString(t(item.description)),
      },
    );
  }
}
