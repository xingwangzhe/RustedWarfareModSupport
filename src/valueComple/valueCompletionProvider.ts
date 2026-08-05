import * as vscode from "vscode";
import { BoolValueCompletionProvider } from "@/valueComple/BoolValueCompletionProvider";
import { UnitSpawnCompletionProvider } from "@/valueComple/UnitSpawnCompletionProvider";
import { LogicBooleanValueCompletionProvider } from "@/valueComple/LogicBooleanValueCompletionProvider";
import { MovementTypeValueCompletionProvider } from "@/valueComple/MovementTypeValueCompletionProvider";
import { ImageValueCompletionProvider } from "@/valueComple/ImageValueCompletionProvider";
import { AutoTriggerOnEventValueCompletionProvider } from "@/valueComple/AutoTriggerOnEventValueCompletionProvider";
import { AddWaypointTypeValueCompletionProvider } from "@/valueComple/AddWaypointTypeValueCompletionProvider";
import { AutoTriggerCheckRateValueCompletionProvider } from "@/valueComple/AutoTriggerCheckRateValueCompletionProvider";
import { OnActionsValueCompletionProvider } from "@/valueComple/OnActionsValueCompletionProvider";
import { DrawTypeValueCompletionProvider } from "@/valueComple/DrawTypeValueCompletionProvider";
import { AddWaypointTargetNearestUnitTeamValueCompletionProvider } from "@/valueComple/AddWaypointTargetNearestUnitTeamValueCompletionProvider";
import { FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider } from "@/valueComple/FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider";
import { SetUnitStatsValueCompletionProvider } from "@/valueComple/SetUnitStatsValueCompletionProvider";
import { ConvertToKeepCurrentFieldsValueCompletionProvider } from "@/valueComple/ConvertToKeepCurrentFieldsValueCompletionProvider";
import { OnNewMapSpawnValueCompletionProvider } from "@/valueComple/OnNewMapSpawnValueCompletionProvider";
import { DisplayDigitGroupingValueCompletionProvider } from "@/valueComple/DisplayDigitGroupingValueCompletionProvider";
import { TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider } from "@/valueComple/TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider";
import { SearchTeamValueCompletionProvider } from "@/valueComple/SearchTeamValueCompletionProvider";
import { OnlyTeamValueCompletionProvider } from "@/valueComple/OnlyTeamValueCompletionProvider";
import { WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider } from "@/valueComple/WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider";
import { DisplayTypeValueCompletionProvider } from "@/valueComple/DisplayTypeValueCompletionProvider";
import { TransportUnitsRequireMovementTypeValueCompletionProvider } from "@/valueComple/TransportUnitsRequireMovementTypeValueCompletionProvider";
import { TeamColoringModeValueCompletionProvider } from "@/valueComple/TeamColoringModeValueCompletionProvider";
import { DrawLayerValueCompletionProvider } from "@/valueComple/DrawLayerValueCompletionProvider";
import { AttackMovementValueCompletionProvider } from "@/valueComple/AttackMovementValueCompletionProvider";
import { LayerValueCompletionProvider } from "@/valueComple/LayerValueCompletionProvider";
import { measurePerf } from "@/common/perfLogger";

type LazyProvider = () => vscode.CompletionItemProvider;

const providerFactories: LazyProvider[] = [
  () => new BoolValueCompletionProvider(),
  () => new UnitSpawnCompletionProvider(),
  () => new LogicBooleanValueCompletionProvider(),
  () => new MovementTypeValueCompletionProvider(),
  () => new ImageValueCompletionProvider(),
  () => new AutoTriggerOnEventValueCompletionProvider(),
  () => new AddWaypointTypeValueCompletionProvider(),
  () => new AutoTriggerCheckRateValueCompletionProvider(),
  () => new OnActionsValueCompletionProvider(),
  () => new DrawTypeValueCompletionProvider(),
  () => new AddWaypointTargetNearestUnitTeamValueCompletionProvider(),
  () => new FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider(),
  () => new SetUnitStatsValueCompletionProvider(),
  () => new ConvertToKeepCurrentFieldsValueCompletionProvider(),
  () => new OnNewMapSpawnValueCompletionProvider(),
  () => new DisplayDigitGroupingValueCompletionProvider(),
  () => new TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider(),
  () => new SearchTeamValueCompletionProvider(),
  () => new OnlyTeamValueCompletionProvider(),
  () => new WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider(),
  () => new DisplayTypeValueCompletionProvider(),
  () => new TransportUnitsRequireMovementTypeValueCompletionProvider(),
  () => new TeamColoringModeValueCompletionProvider(),
  () => new DrawLayerValueCompletionProvider(),
  () => new AttackMovementValueCompletionProvider(),
  () => new LayerValueCompletionProvider(),
];

export class ValueCompletionProvider implements vscode.CompletionItemProvider {
  private providers: vscode.CompletionItemProvider[] | null = null;

  private ensureProviders(): vscode.CompletionItemProvider[] {
    if (!this.providers) {
      this.providers = providerFactories.map((factory) => factory());
    }
    return this.providers;
  }

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext,
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return measurePerf("completion.values", () => {
      const completions: vscode.CompletionItem[] = [];
      const activeProviders = this.ensureProviders();

      for (const provider of activeProviders) {
        try {
          const providerCompletions = provider.provideCompletionItems(
            document,
            position,
            token,
            context,
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
            error,
          );
        }
      }

      return completions;
    });
  }
}
