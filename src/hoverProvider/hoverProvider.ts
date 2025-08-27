import * as vscode from 'vscode';
import { HoverDetectors } from './detectors';
import { HoverCreators } from './creators';

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
        const line = document.lineAt(position.line);
        const lineText = line.text;

        // 判断1: 是否在节名称上悬停（[]内）
        const sectionHover = HoverDetectors.checkHoverOnSectionName(lineText, position.character);
        if (sectionHover) {
            console.log(`Hover on section name: ${sectionHover.sectionName}`);
            return HoverCreators.createSectionHover(sectionHover.sectionName);
        }

        // 判断2: 是否在属性名上悬停（行首到冒号前）
        const propertyHover = HoverDetectors.checkHoverOnPropertyName(lineText, position.character);
        if (propertyHover) {
            const currentSection = HoverDetectors.getCurrentSection(document, position);
            if (currentSection) {
                console.log(`Hover on property name: ${propertyHover.propertyName} in section: ${currentSection}`);
                return HoverCreators.createPropertyHover(
                    currentSection,
                    propertyHover.propertyName,
                    propertyHover.originalName
                );
            }
        }

        // 判断3: 是否在属性值上悬停（冒号后）
        const valueHover = HoverDetectors.checkHoverOnPropertyValue(lineText, position.character);
        if (valueHover) {
            const currentSection = HoverDetectors.getCurrentSection(document, position);
            if (currentSection) {
                console.log(`Hover on property value: ${valueHover.value} for property: ${valueHover.propertyName} in section: ${currentSection}`);
                return HoverCreators.createPropertyValueHover(
                    currentSection,
                    valueHover.propertyName,
                    valueHover.value,
                    valueHover.originalName
                );
            }
        }

        console.log('No hover match found');
        return null;
    }
}