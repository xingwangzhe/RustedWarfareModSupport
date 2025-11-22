import * as vscode from "vscode";
import { BoolValueCompletionProvider } from "./BoolValueCompletionProvider";
import { UnitSpawnCompletionProvider } from "./UnitSpawnCompletionProvider";
import { LogicBooleanValueCompletionProvider } from "./LogicBooleanValueCompletionProvider";
import { MovementTypeValueCompletionProvider } from "./MovementTypeValueCompletionProvider";
import { ImageValueCompletionProvider } from "./ImageValueCompletionProvider";
import { AutoTriggerOnEventValueCompletionProvider } from "./AutoTriggerOnEventValueCompletionProvider";
import { AddWaypointTypeValueCompletionProvider } from "./AddWaypointTypeValueCompletionProvider";
import { AutoTriggerCheckRateValueCompletionProvider } from "./AutoTriggerCheckRateValueCompletionProvider";
import { OnActionsValueCompletionProvider } from "./OnActionsValueCompletionProvider";
import { DrawTypeValueCompletionProvider } from "./DrawTypeValueCompletionProvider";
import { AddWaypointTargetNearestUnitTeamValueCompletionProvider } from "./AddWaypointTargetNearestUnitTeamValueCompletionProvider";
import { FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider } from "./FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider";
import { SetUnitStatsValueCompletionProvider } from "./SetUnitStatsValueCompletionProvider";
import { ConvertToKeepCurrentFieldsValueCompletionProvider } from "./ConvertToKeepCurrentFieldsValueCompletionProvider";
import { OnNewMapSpawnValueCompletionProvider } from "./OnNewMapSpawnValueCompletionProvider";
import { DisplayDigitGroupingValueCompletionProvider } from "./DisplayDigitGroupingValueCompletionProvider";
import { TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider } from "./TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider";
import { SearchTeamValueCompletionProvider } from "./SearchTeamValueCompletionProvider";
import { OnlyTeamValueCompletionProvider } from "./OnlyTeamValueCompletionProvider";
import { WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider } from "./WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider";
import { DisplayTypeValueCompletionProvider } from "./DisplayTypeValueCompletionProvider";
import { TransportUnitsRequireMovementTypeValueCompletionProvider } from "./TransportUnitsRequireMovementTypeValueCompletionProvider";
import { TeamColoringModeValueCompletionProvider } from "./TeamColoringModeValueCompletionProvider";
import { DrawLayerValueCompletionProvider } from "./DrawLayerValueCompletionProvider";
import { AttackMovementValueCompletionProvider } from "./AttackMovementValueCompletionProvider";
import { LayerValueCompletionProvider } from "./LayerValueCompletionProvider";
import { measurePerf } from "../common/perfLogger";

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
      new AddWaypointTypeValueCompletionProvider(),
      new AutoTriggerCheckRateValueCompletionProvider(),
      new OnActionsValueCompletionProvider(),
      new DrawTypeValueCompletionProvider(),
      new AddWaypointTargetNearestUnitTeamValueCompletionProvider(),
      new FireTurretXAtGroundOnlyOverPassableTileOfValueCompletionProvider(),
      new SetUnitStatsValueCompletionProvider(),
      new ConvertToKeepCurrentFieldsValueCompletionProvider(),
      new OnNewMapSpawnValueCompletionProvider(),
      new DisplayDigitGroupingValueCompletionProvider(),
      new TakeResourcesIncludeUnitsWithinRangeTeamValueCompletionProvider(),
      new SearchTeamValueCompletionProvider(),
      new OnlyTeamValueCompletionProvider(),
      new WhenBuildingTemporarilyConvertToKeepFieldsValueCompletionProvider(),
      new DisplayTypeValueCompletionProvider(),
      new TransportUnitsRequireMovementTypeValueCompletionProvider(),
      new TeamColoringModeValueCompletionProvider(),
      new DrawLayerValueCompletionProvider(),
      new AttackMovementValueCompletionProvider(),
      new LayerValueCompletionProvider(),
    ];
  }

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    return measurePerf("completion.values", () => {
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
    });
  }
}
