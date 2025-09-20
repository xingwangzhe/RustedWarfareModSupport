import * as vscode from "vscode";
import { BaseValueCompletionProvider } from "./BaseValueCompletionProvider";
import { createCompletionItemsFromDataFile } from "../common/valueCompletionUtils";
import { t } from "../translationManager";

/**
 * AutoTriggerOnEvent 值补全提供者类
 * 用于提供 autoTriggerOnEvent 属性的补全建议
 */
export class AutoTriggerOnEventValueCompletionProvider extends BaseValueCompletionProvider {
  protected provideValueCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    propertyName: string,
    _sectionName: string
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 检查属性是否为 autoTriggerOnEvent
    if (propertyName === "autoTriggerOnEvent") {
      return this.getAutoTriggerOnEventCompletionItems();
    }

    return [];
  }

  /**
   * 获取 autoTriggerOnEvent 补全项
   * @returns autoTriggerOnEvent 补全项数组
   */
  private getAutoTriggerOnEventCompletionItems(): vscode.CompletionItem[] {
    const items = createCompletionItemsFromDataFile(
      "autoTriggerOnEvent",
      vscode.CompletionItemKind.Enum,
      "valuecompletionprovider.autotriggeronevent.detail",
      {
        customDocumentation: (item) => this.createEventDocumentation(item),
        useNameAsInsertText: true,
      }
    );

    // 为带参数的事件创建代码片段
    const enhancedItems = items.map((item) => {
      const label =
        typeof item.label === "string" ? item.label : item.label.label;
      if (label.includes('(withActionTag="#")')) {
        item.insertText = new vscode.SnippetString(
          'queueItemAdded(withActionTag="$1")'
        );
        item.label = 'queueItemAdded(withActionTag="#")';
      } else if (label.includes('(withTag="#")')) {
        if (label.includes("tookDamage")) {
          item.insertText = new vscode.SnippetString(
            'tookDamage(withTag="$1")'
          );
          item.label = 'tookDamage(withTag="#")';
        } else if (label.includes("newMessage")) {
          item.insertText = new vscode.SnippetString(
            'newMessage(withTag="$1")'
          );
          item.label = 'newMessage(withTag="#")';
        }
      }
      return item;
    });

    return enhancedItems;
  }

  /**
   * 创建事件的文档说明
   * @param item 事件数据项
   * @returns 文档对象
   */
  private createEventDocumentation(item: any): vscode.MarkdownString {
    const documentation = new vscode.MarkdownString();

    // 添加描述
    const descriptionKey = item.description;
    if (descriptionKey) {
      documentation.appendMarkdown(t(descriptionKey));
    }

    // 添加版本信息
    if (item.version) {
      documentation.appendMarkdown(
        `\n\n**${t("completionprovider.version")}:** ${item.version}`
      );
    }

    // 添加示例
    if (item.example) {
      const exampleText = t(item.example);
      documentation.appendMarkdown(
        `\n\n**${t(
          "completionprovider.example"
        )}:**\n\`\`\`ini\n${exampleText}\n\`\`\``
      );
    }

    // 为带参数的事件添加额外说明
    if (item.name.includes("withActionTag")) {
      documentation.appendMarkdown(
        `\n\n**${t("data.value.autotriggeronevent.parameter.actiontag")}:** ${t(
          "data.value.autotriggeronevent.parameter.actiontag.description"
        )}`
      );
    } else if (
      item.name.includes("tookDamage") &&
      item.name.includes("withTag")
    ) {
      documentation.appendMarkdown(
        `\n\n**${t("data.value.autotriggeronevent.parameter.tag")}:** ${t(
          "data.value.autotriggeronevent.parameter.tookdamage.tag.description"
        )}`
      );
    } else if (
      item.name.includes("newMessage") &&
      item.name.includes("withTag")
    ) {
      documentation.appendMarkdown(
        `\n\n**${t("data.value.autotriggeronevent.parameter.tag")}:** ${t(
          "data.value.autotriggeronevent.parameter.newmessage.tag.description"
        )}`
      );
    }

    return documentation;
  }
}
