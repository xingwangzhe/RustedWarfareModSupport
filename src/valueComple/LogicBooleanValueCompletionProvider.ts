import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import * as fs from "fs";
import * as path from "path";
import { getExtensionId } from "../extension";

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
    // 获取扩展的实际路径
    const extension = vscode.extensions.getExtension(getExtensionId());
    if (!extension) {
      console.error('Cannot find extension');
      return [];
    }

    const extensionPath = extension.extensionPath;
    const valuePath = path.join(
      extensionPath,
      "data",
      "value",
      "logicboolean.json"
    );
    const valueData = JSON.parse(fs.readFileSync(valuePath, "utf8"));

    return valueData.data.map((item: any) => {
      const completionItem = new vscode.CompletionItem(
        item.name,
        vscode.CompletionItemKind.Value
      );
      completionItem.detail = vscode.l10n.t(item.description);
      completionItem.documentation = new vscode.MarkdownString(
        vscode.l10n.t('valuecompletionprovider.logicboolean.documentation', [
          vscode.l10n.t(item.description),
          item.version,
          vscode.l10n.t(item.example)
        ])
      );

      // 对于LogicBoolean类型，直接插入值而不是name=value格式
      completionItem.insertText = new vscode.SnippetString(item.name);

      return completionItem;
    });
  }
}