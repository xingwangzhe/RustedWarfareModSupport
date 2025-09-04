import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from '../common/valueCompletionUtils';
import { t } from '../translationManager';

/**
 * LogicBoolean值补全提供者类
 * 用于提供LogicBoolean类型属性的补全建议
 */
export class LogicBooleanValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    property: any
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    if (property && property.type === "LogicBoolean") {
      return this.getBasicLogicBooleanCompletionItems();
    }

    return [];
  }

  private getBasicLogicBooleanCompletionItems(): vscode.CompletionItem[] {
    return createCompletionItemsFromDataFile('logicboolean', vscode.CompletionItemKind.Value, 'valuecompletionprovider.logicboolean.detail', {
      useNameAsInsertText: true,
      customDocumentation: (item: any) => new vscode.MarkdownString(
        t('valuecompletionprovider.logicboolean.documentation', [
          t(item.description),
          item.version,
          t(item.example)
        ])
      )
    });
  }
}