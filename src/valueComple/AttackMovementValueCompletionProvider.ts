import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class AttackMovementValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "attackMovement") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "attackMovement",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.attackmovement.detail",
      {
        customDocumentation: (item: any) =>
          new vscode.MarkdownString(t(item.description)),
      }
    );
  }
}
