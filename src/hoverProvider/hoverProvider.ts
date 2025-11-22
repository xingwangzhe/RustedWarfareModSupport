import * as vscode from "vscode";
import { HoverDetectors } from "./detectors";
import { HoverCreators } from "./creators";
import { measurePerf } from "../common/perfLogger";

/**
 * RustedWarfare配置文件的悬停提供者
 * 当用户将鼠标悬停在属性或值上时，显示详细信息
 */
export class RustedWarfareHoverProvider implements vscode.HoverProvider {
  /**
   * 当用户将鼠标悬停在文档上时调用
   * @param document 当前文档
   * @param position 鼠标位置
   * @param token 取消令牌
   * @returns 悬停信息或Promise
   */
  public provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Hover> {
    return measurePerf("hover.provide", () => {
      const line = document.lineAt(position.line);
      const lineText = line.text;

      const sectionHover = HoverDetectors.checkHoverOnSectionName(
        lineText,
        position.character
      );
      if (sectionHover) {
        return HoverCreators.createSectionHover(sectionHover.sectionName);
      }

      const propertyHover = HoverDetectors.checkHoverOnPropertyName(
        lineText,
        position.character
      );
      if (propertyHover) {
        const currentSection = HoverDetectors.getCurrentSection(
          document,
          position
        );
        if (currentSection) {
          return HoverCreators.createPropertyHover(
            currentSection,
            propertyHover.propertyName,
            propertyHover.originalName
          );
        }
      }

      const valueHover = HoverDetectors.checkHoverOnPropertyValue(
        lineText,
        position.character
      );
      if (valueHover) {
        const currentSection = HoverDetectors.getCurrentSection(
          document,
          position
        );
        if (currentSection) {
          return HoverCreators.createPropertyValueHover(
            document,
            position,
            currentSection,
            valueHover.propertyName,
            valueHover.value,
            valueHover.originalName
          );
        }
      }
      return null;
    });
  }
}
