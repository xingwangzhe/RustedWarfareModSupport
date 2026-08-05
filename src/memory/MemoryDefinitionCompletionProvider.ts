import * as vscode from "vscode";
import { memoryManager } from "./MemoryManager";
import { t } from "../translationManager";
import { getCurrentSection } from "../common/sectionUtils";
/**
 * @memory定义补全提供者
 * 在core节中提供@memory name:type的补全
 */
export class MemoryDefinitionCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    // 检查是否在core节中
    const currentSection = this.getCurrentSection(document, position);
    if (currentSection !== "core") {
      return [];
    }

    const line = document.lineAt(position.line);
    const lineText = line.text;
    const beforeCursor = lineText.substring(0, position.character);

    // 检查是否正在输入@memory
    if (beforeCursor.includes("@memory")) {
      return this.provideMemoryDefinitionCompletion(beforeCursor, position);
    }

    // 检查是否应该提供@memory补全
    if (beforeCursor.trim() === "" || beforeCursor.trim() === "@") {
      return this.provideMemoryKeywordCompletion();
    }

    return [];
  }

  /**
   * 提供@memory关键词补全
   */
  private provideMemoryKeywordCompletion(): vscode.CompletionItem[] {
    const item = new vscode.CompletionItem("@memory", vscode.CompletionItemKind.Keyword);
    item.detail = t("memory.definition.description");
    item.documentation = new vscode.MarkdownString(
      [
        `**@memory** - ${t("memory.definition.description")}`,
        t("memory.definition.format"),
        `**${t("memory.definition.supportedTypes")}** ${t("memory.definition.supportedTypesList")}`,
        `**${t("memory.definition.example")}**`,
        "```",
        t("memory.definition.exampleHp"),
        t("memory.definition.exampleName"),
        t("memory.definition.exampleIsAlive"),
        "```",
        "",
        t("memory.definition.accessNote"),
      ].join("\n"),
    );
    // 修复重复@的问题：当用户输入@时，只插入memory部分
    item.insertText = new vscode.SnippetString("memory ${1:name}:${2:type}");
    item.sortText = "01"; // 优先级高
    return [item];
  }

  /**
   * 提供@memory定义补全
   */
  private provideMemoryDefinitionCompletion(
    beforeCursor: string,
    _position: vscode.Position,
  ): vscode.CompletionItem[] {
    const completions: vscode.CompletionItem[] = [];

    // 检查是否需要类型补全
    if (beforeCursor.includes("@memory ") && !beforeCursor.includes(":")) {
      // 提供变量名补全（这里可以是建议的变量名）
      const suggestedNames = [
        "customHp",
        "maxHp",
        "currentHp",
        "damage",
        "unitName",
        "unitType",
        "playerId",
        "teamId",
        "isAlive",
        "isMoving",
        "isAttacking",
        "isDamaged",
        "customValue1",
        "customValue2",
        "tempVar",
      ];

      suggestedNames.forEach((name) => {
        const item = new vscode.CompletionItem(name, vscode.CompletionItemKind.Variable);
        item.detail = t("memory.variableName.detail");
        item.insertText = name + ":";
        completions.push(item);
      });
    } else if (beforeCursor.includes(":")) {
      // 提供类型补全
      const supportedTypes = memoryManager.getSupportedTypes();
      supportedTypes.forEach((type) => {
        const item = new vscode.CompletionItem(type, vscode.CompletionItemKind.TypeParameter);
        item.detail = t("memory.variableType.detail", type);
        item.documentation = new vscode.MarkdownString(
          t("memory.variableType.documentation", type, this.getTypeDescription(type)) +
            "\n\n" +
            t("memory.variableType.accessNote"),
        );
        completions.push(item);
      });
    }

    return completions;
  }

  /**
   * 获取当前所在的节
   */
  private getCurrentSection(
    document: vscode.TextDocument,
    position: vscode.Position,
  ): string | null {
    return getCurrentSection(document, position);
  }

  /**
   * 获取类型描述
   */
  private getTypeDescription(type: string): string {
    const descriptions: { [key: string]: string } = {
      // 基础类型使用翻译
      int: t("type.int.description"),
      float: t("type.float.description"),
      string: t("type.string.description"),
      bool: t("type.bool.description"),
      number: t("type.number.description"),
      text: t("type.text.description"),
      boolean: t("type.boolean.description"),
      logic: t("type.logic.description"),
      // 数组类型直接显示原生类型
      "boolean[]": "boolean[] - Boolean array",
      "float[]": "float[] - Float array",
      "number[]": "number[] - Number array",
      "unit[]": "unit[] - Unit array",
    };
    return descriptions[type] || t("type.custom.description");
  }
}
