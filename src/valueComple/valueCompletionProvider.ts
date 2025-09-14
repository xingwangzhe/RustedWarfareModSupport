import * as vscode from "vscode";
import { BoolValueCompletionProvider } from "./BoolValueCompletionProvider";
import { UnitSpawnCompletionProvider } from "./UnitSpawnCompletionProvider";
import { LogicBooleanValueCompletionProvider } from "./LogicBooleanValueCompletionProvider";
import { MovementTypeValueCompletionProvider } from "./MovementTypeValueCompletionProvider";
import { ImageValueCompletionProvider } from "./ImageValueCompletionProvider";
import { AutoTriggerOnEventValueCompletionProvider } from "./AutoTriggerOnEventValueCompletionProvider";

export class ValueCompletionProvider implements vscode.CompletionItemProvider {
  private providers: vscode.CompletionItemProvider[];

  constructor() {
    this.providers = [
      new BoolValueCompletionProvider(),
      new UnitSpawnCompletionProvider(),
      new LogicBooleanValueCompletionProvider(),
      new MovementTypeValueCompletionProvider(),
      new ImageValueCompletionProvider(),
      new AutoTriggerOnEventValueCompletionProvider(),
    ];
  }

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const completions: vscode.CompletionItem[] = [];

    for (const provider of this.providers) {
      try {
        const providerCompletions = provider.provideCompletionItems(
          document,
          position,
          token,
          context
        );
        if (providerCompletions) {
          if (Array.isArray(providerCompletions)) {
            completions.push(...providerCompletions);
          } else if ("items" in providerCompletions) {
            completions.push(...providerCompletions.items);
          }
        }
      } catch (error) {
        console.error(
          "ValueCompletionProvider: Error calling provider=",
          provider.constructor.name,
          "error=",
          error
        );
      }
    }

    return completions;
  }
}
