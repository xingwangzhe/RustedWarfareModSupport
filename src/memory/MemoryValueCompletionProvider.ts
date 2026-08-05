import * as vscode from "vscode";
import { memoryManager } from "@/memory/MemoryManager";
import { t } from "@/translationManager";

/**
 * 内存变量值补全提供者
 * 在值位置提供memory.xxx的补全
 */
export class MemoryValueCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
    _context: vscode.CompletionContext,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const line = document.lineAt(position.line);
    const lineText = line.text;
    const beforeCursor = lineText.substring(0, position.character);

    // 情况1：正在输入 memory.xxx 或刚输入完 memory.
    // 使用 \b 确保 memory 是单词边界，避免匹配 othermemory
    if (beforeCursor.match(/\bmemory\.\w*$/) || beforeCursor.match(/\bmemory\.$/)) {
      return this.provideMemoryVariableCompletion();
    }

    // 情况2：刚输入完 memory 单词
    if (beforeCursor.match(/\bmemory$/)) {
      return this.provideMemoryKeywordCompletion();
    }

    return [];
  }

  /**
   * 提供memory关键词补全
   */
  private provideMemoryKeywordCompletion(): vscode.CompletionItem[] {
    const item = new vscode.CompletionItem("memory", vscode.CompletionItemKind.Module);
    item.detail = t("memory.description");
    item.documentation = new vscode.MarkdownString(
      [
        `**memory** - ${t("memory.description")}`,
        t("memory.usage"),
        `**${t("memory.availableVariables")}**`,
        t("memory.availableVariablesDescription"),
        `**${t("memory.example")}**`,
        "```",
        t("memory.exampleHp"),
        t("memory.exampleName"),
        t("memory.exampleIsAlive"),
        "```",
        "",
        t("memory.note"),
      ].join("\n"),
    );
    item.insertText = "memory.";
    item.sortText = "01"; // 优先级高
    return [item];
  }

  /**
   * 提供内存变量补全
   */
  private provideMemoryVariableCompletion(): vscode.CompletionItem[] {
    const completions: vscode.CompletionItem[] = [];
    const memoryVariables = memoryManager.getAllMemoryVariables();

    memoryVariables.forEach((variable) => {
      const item = new vscode.CompletionItem(variable.name, vscode.CompletionItemKind.Variable);

      item.detail = `${variable.type} - Memory variable`;
      item.documentation = new vscode.MarkdownString(
        t("memory.variable.documentation", variable.name, variable.type) +
          "\n\n" +
          t("memory.variable.definedIn", variable.document.fileName) +
          "\n" +
          t("memory.variable.line", variable.line + 1) +
          "\n\n" +
          t("memory.variable.access"),
      );

      item.insertText = variable.name;
      item.sortText = "02"; // 比关键词补全优先级低

      completions.push(item);
    });

    return completions;
  }
}
