import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class TransportUnitsRequireMovementTypeValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "transportUnitsRequireMovementType") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "transportUnitsRequireMovementType",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.transportunitsrequiremovementtype.detail",
      {
        customDocumentation: (item: any) => new vscode.MarkdownString(t(item.description)),
      },
    );
  }
}
