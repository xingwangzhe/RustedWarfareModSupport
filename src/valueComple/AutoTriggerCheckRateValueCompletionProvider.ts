import * as vscode from "vscode";
import { ValueItem } from "../common/types";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

export class AutoTriggerCheckRateValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (propertyName !== "autoTriggerCheckRate") {
      return [];
    }

    return createCompletionItemsFromDataFile(
      "autoTriggerCheckRate",
      vscode.CompletionItemKind.Value,
      "valuecompletionprovider.autotriggercheckrate.detail",
      {
        customDocumentation: (item: ValueItem) => new vscode.MarkdownString(t(item.description ?? "")),
      },
    );
  }
}
