import { SectionHoverCreator } from './creators/sectionHover';
import { PropertyHoverCreator } from './creators/propertyHover';
import { ValueHoverCreator } from './creators/valueHover';

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
    public static createBooleanValueHover = ValueHoverCreator.createBooleanValueHover;
    public static createLogicBooleanValueHover = ValueHoverCreator.createLogicBooleanValueHover;
    public static createLogicBooleanKeywordHover = ValueHoverCreator.createLogicBooleanKeywordHover;
    public static createLogicBooleanSelfMethodHover = ValueHoverCreator.createLogicBooleanSelfMethodHover;
    public static createLogicBooleanFunctionHover = ValueHoverCreator.createLogicBooleanFunctionHover;
}
