import * as vscode from "vscode";
import { IniFoldingRangeProvider } from "../IniFoldingProvider";
import { IniSectionSymbolProvider } from "../Section";
import { completionProviderConfigs, createCompletionProviders } from "./completionFactory";
import { SectionNameCompletionProvider } from "../completionProvider";
import { RustedWarfareHoverProvider } from "../hoverProvider/hoverProvider";
import { MemoryDefinitionCompletionProvider } from "../memory/MemoryDefinitionCompletionProvider";
import { MemoryValueCompletionProvider } from "../memory/MemoryValueCompletionProvider";
import { ValueCompletionProvider } from "../valueComple/valueCompletionProvider";

/**
 * INI 语言功能注册选项
 */
export interface IniLanguageFeatureOptions {
  /** 补全触发器（默认 [":", " "]） */
  completionTriggers?: readonly string[];
  /** 节名称补全触发器（默认 "["） */
  sectionNameTriggers?: readonly string[];
}

const DEFAULT_COMPLETION_TRIGGERS: readonly string[] = [":", " "];
const DEFAULT_SECTION_NAME_TRIGGERS: readonly string[] = ["["];

/**
 * 注册所有 INI 语言功能（符号、折叠、补全、悬停），返回订阅列表。
 * extension.ts 与 customExtensionsManager 共用，消除重复注册逻辑。
 */
export function registerIniLanguageFeatures(
  options?: IniLanguageFeatureOptions,
): vscode.Disposable[] {
  const subs: vscode.Disposable[] = [];

  subs.push(
    vscode.languages.registerDocumentSymbolProvider(
      { language: "ini" },
      new IniSectionSymbolProvider(),
    ),
  );

  subs.push(
    vscode.languages.registerFoldingRangeProvider(
      { language: "ini" },
      new IniFoldingRangeProvider(),
    ),
  );

  // 属性补全
  const completionTriggers = options?.completionTriggers ?? DEFAULT_COMPLETION_TRIGGERS;
  const completionProviders = createCompletionProviders(completionProviderConfigs);
  for (const provider of completionProviders) {
    subs.push(
      vscode.languages.registerCompletionItemProvider(
        { language: "ini" },
        provider,
        ...completionTriggers,
      ),
    );
  }

  // 值补全
  subs.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "ini" },
      new ValueCompletionProvider(),
      ":",
      " ",
      ",",
      ".",
      "m",
    ),
  );

  // 节名称补全
  const sectionNameTriggers = options?.sectionNameTriggers ?? DEFAULT_SECTION_NAME_TRIGGERS;
  subs.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "ini" },
      new SectionNameCompletionProvider(),
      ...sectionNameTriggers,
    ),
  );

  // @memory 定义补全
  subs.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "ini" },
      new MemoryDefinitionCompletionProvider(),
      "@",
      " ",
    ),
  );

  // memory 值补全
  subs.push(
    vscode.languages.registerCompletionItemProvider(
      { language: "ini" },
      new MemoryValueCompletionProvider(),
      "m",
      ".",
    ),
  );

  // 悬停
  subs.push(
    vscode.languages.registerHoverProvider({ language: "ini" }, new RustedWarfareHoverProvider()),
  );

  return subs;
}
