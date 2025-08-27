import { SectionHoverCreator } from './creators/sectionHover';
import { PropertyHoverCreator } from './creators/propertyHover';
import { ValueHoverCreator } from './creators/valueHover';
import { createBooleanValueHover } from './creators/valueHover/booleanHover';
import { createLogicBooleanValueHover } from './creators/valueHover/logicBooleanHover';
import { createLogicBooleanKeywordHover } from './creators/valueHover/logicBooleanKeywordHover';
import { createLogicBooleanSelfMethodHover } from './creators/valueHover/logicBooleanSelfMethodHover';
import { createLogicBooleanFunctionHover } from './creators/valueHover/logicBooleanFunctionHover';

/**
 * 悬停内容创建器
 * 负责创建各种类型的悬停信息
 * 此文件现在作为入口点，重新导出拆分后的创建器类
 */
export class HoverCreators {
    // 重新导出拆分后的创建器方法以保持向后兼容
    public static createSectionHover = SectionHoverCreator.createSectionHover;
    public static createPropertyHover = PropertyHoverCreator.createPropertyHover;
    public static createPropertyValueHover = ValueHoverCreator.createPropertyValueHover;
    public static createBooleanValueHover = createBooleanValueHover;
    public static createLogicBooleanValueHover = createLogicBooleanValueHover;
    public static createLogicBooleanKeywordHover = createLogicBooleanKeywordHover;
    public static createLogicBooleanSelfMethodHover = createLogicBooleanSelfMethodHover;
    public static createLogicBooleanFunctionHover = createLogicBooleanFunctionHover;
}
