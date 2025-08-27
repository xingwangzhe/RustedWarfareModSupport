import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { HoverUtils } from '../utils';
import { resolveImagePath } from '../../pubfun/imagePathResolver';
import { createImageHoverFromPath } from '../../pubfun/imageHover';
import { PropertyHoverCreator } from './propertyHover';
import { getExtensionId } from '../../extension';

/**
 * 值悬停创建器
 * 负责创建属性值的悬停信息
 */
export class ValueHoverCreator {
    /**
     * 创建属性值悬停信息
     * @param sectionName 节名称
     * @param propertyName 属性名称
     * @param value 值
     * @param originalName 原始属性名称（用于语言键）
     * @returns 悬停信息
     */
    public static createPropertyValueHover(document: vscode.TextDocument, position: vscode.Position, sectionName: string, propertyName: string, value: string, originalName?: string): vscode.Hover | null {
        // 先获取属性信息
        const propertyHover = PropertyHoverCreator.createPropertyHover(sectionName, propertyName, originalName);
        if (!propertyHover) {
            return null;
        }

        // 提取属性类型
        const propertyType = HoverUtils.extractPropertyType(propertyHover);

        // 如果是图片类型，则尝试生成图片预览
        if (propertyType && propertyType.toLowerCase().includes('image')) {
            try {
                // 获取当前行冒号后的完整值文本（优于只使用传入的 word）
                const lineText = document.lineAt(position.line).text;
                const colonIndex = lineText.indexOf(':');
                const fullValueText = colonIndex >= 0 ? lineText.substring(colonIndex + 1).trim() : (value || '').trim();

                // 移除注释部分
                const cleaned = fullValueText.replace(/#.*$/, '').trim();

                // 在整个值文本中查找包含图片扩展的路径片段（更宽松的后缀匹配）
                // allow paths that include backslashes and unicode characters; stop at whitespace or #
                const imagePathPattern = /[^\s#]+?\.(png|jpe?g|gif|webp|bmp)/i;
                const found = cleaned.match(imagePathPattern);
                let candidate = found ? found[0] : cleaned;

                // normalize windows-style backslashes to platform separator before resolving
                if (candidate.indexOf('\\') >= 0) {
                    candidate = candidate.replace(/\\+/g, require('path').sep);
                }

                if (candidate) {
                    try {
                        const resolvedPath = resolveImagePath(candidate, document);
                        if (resolvedPath) {
                            const hover = createImageHoverFromPath(resolvedPath);
                            if (hover) {
                                return hover;
                            }
                        }
                    } catch (e) {
                        console.error('HoverCreators: error resolving image path', e);
                    }
                }
            } catch (e) {
                console.error('Error resolving image path for hover:', e);
            }
        }

        // 根据属性类型提供额外的值信息
        switch (propertyType) {
            case 'bool':
                return ValueHoverCreator.createBooleanValueHover(value);
            case 'LogicBoolean':
                return ValueHoverCreator.createLogicBooleanValueHover(value);
            default:
                // 对于其他类型，返回属性信息
                return propertyHover;
        }
    }

    /**
     * 创建布尔值悬停信息
     * @param word 单词
     * @returns 悬停信息
     */
    public static createBooleanValueHover(word: string): vscode.Hover | null {
        const trimmedValue = word.trim();
        if (trimmedValue === 'true' || trimmedValue === 'false') {
            const hoverContent = new vscode.MarkdownString();
            hoverContent.appendMarkdown(`**${vscode.l10n.t('valuecompletionprovider.bool.detail')}**\n\n`);

            if (trimmedValue === 'true') {
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.true.description'));
            } else {
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.false.description'));
            }

            return new vscode.Hover(hoverContent);
        }

        return null;
    }

    /**
     * 创建LogicBoolean值悬停信息
     * @param word 单词
     * @returns 悬停信息
     */
    public static createLogicBooleanValueHover(word: string): vscode.Hover | null {
        const trimmedWord = word.trim();
        if (!trimmedWord) {
            return null;
        }

        // 检查是否为LogicBoolean关键字
        if (trimmedWord === 'true' || trimmedWord === 'false' || trimmedWord === 'if' ||
            trimmedWord === 'and' || trimmedWord === 'or' || trimmedWord === 'not') {
            return ValueHoverCreator.createLogicBooleanKeywordHover(trimmedWord);
        }

        // 检查是否为self.开头的方法
        if (trimmedWord.startsWith('self.')) {
            return ValueHoverCreator.createLogicBooleanSelfMethodHover(trimmedWord);
        }

        // 检查是否为其他LogicBoolean函数
        return ValueHoverCreator.createLogicBooleanFunctionHover(trimmedWord);
    }

    /**
     * 创建LogicBoolean关键字悬停信息
     * @param keyword 关键字
     * @returns 悬停信息
     */
    public static createLogicBooleanKeywordHover(keyword: string): vscode.Hover | null {
        const hoverContent = new vscode.MarkdownString();

        switch (keyword) {
            case 'true':
                hoverContent.appendMarkdown(`**${vscode.l10n.t('valuecompletionprovider.bool.detail')}**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.true.description'));
                break;
            case 'false':
                hoverContent.appendMarkdown(`**${vscode.l10n.t('valuecompletionprovider.bool.detail')}**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.false.description'));
                break;
            case 'if':
                hoverContent.appendMarkdown(`**LogicBoolean Keyword**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.if.description'));
                break;
            case 'and':
                hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.and.description'));
                break;
            case 'or':
                hoverContent.appendMarkdown(`**LogicBoolean Connector**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.or.description'));
                break;
            case 'not':
                hoverContent.appendMarkdown(`**LogicBoolean Conditional**\n\n`);
                hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.not.description'));
                break;
            default:
                return null;
        }

        return new vscode.Hover(hoverContent);
    }

    /**
     * 创建LogicBoolean self方法悬停信息
     * @param method 方法名
     * @returns 悬停信息
     */
    public static createLogicBooleanSelfMethodHover(method: string): vscode.Hover | null {
        // 从logicboolean.json加载数据
        try {
            // 获取扩展的实际路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                console.error('Cannot find extension');
                return null;
            }

            const extensionPath = extension.extensionPath;
            const valuePath = path.join(extensionPath, 'data', 'value', 'logicboolean.json');
            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));

            // 查找匹配的方法
            const methodPart = method.substring(5); // 移除"self."前缀
            const methodBase = methodPart.split('(')[0]; // 获取方法名，忽略参数部分

            console.log(`Searching for method: self.${methodBase} or starting with self.${methodBase}.`);

            for (const item of valueData.data) {
                if (item.name === `self.${methodBase}` || item.name.startsWith(`self.${methodBase}.`) || item.name === `self.${methodBase}()`) {
                    console.log(`Found matching method: ${item.name}`);

                    const hoverContent = new vscode.MarkdownString();
                    hoverContent.appendMarkdown(`**LogicBoolean Function**\n\n`);
                    hoverContent.appendMarkdown(`${vscode.l10n.t(item.description)}\n\n`);

                    if (item.version) {
                        hoverContent.appendMarkdown(`*Version: ${item.version}*\n\n`);
                    }

                    if (item.example) {
                        hoverContent.appendMarkdown(`\`\`\`ini\n${vscode.l10n.t(item.example)}\n\`\`\``);
                    }

                    return new vscode.Hover(hoverContent);
                }
            }

            console.log(`No matching method found for: ${method}`);
        } catch (error) {
            console.error('Error reading logicboolean.json:', error);
        }

        return null;
    }

    /**
     * 创建LogicBoolean函数悬停信息
     * @param func 函数名
     * @returns 悬停信息
     */
    public static createLogicBooleanFunctionHover(func: string): vscode.Hover | null {
        // 从logicboolean.json加载数据
        try {
            // 获取扩展的实际路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                console.error('Cannot find extension');
                return null;
            }

            const extensionPath = extension.extensionPath;
            const valuePath = path.join(extensionPath, 'data', 'value', 'logicboolean.json');
            const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));

            // 查找匹配的函数
            const funcBase = func.split('(')[0]; // 获取函数名，忽略参数部分

            for (const item of valueData.data) {
                if (item.name === funcBase) {
                    const hoverContent = new vscode.MarkdownString();
                    hoverContent.appendMarkdown(`**LogicBoolean Function**\n\n`);
                    hoverContent.appendMarkdown(`${vscode.l10n.t(item.description)}\n\n`);

                    if (item.version) {
                        hoverContent.appendMarkdown(`*Version: ${item.version}*\n\n`);
                    }

                    if (item.example) {
                        hoverContent.appendMarkdown(`\`\`\`ini\n${vscode.l10n.t(item.example)}\n\`\`\``);
                    }

                    return new vscode.Hover(hoverContent);
                }
            }
        } catch (error) {
            console.error('Error reading logicboolean.json:', error);
        }

        // 如果没有找到特定的函数，显示通用的LogicBoolean信息
        const hoverContent = new vscode.MarkdownString();
        hoverContent.appendMarkdown(`**LogicBoolean**\n\n`);
        hoverContent.appendMarkdown(vscode.l10n.t('valuecompletionprovider.logicboolean.example.documentation'));
        return new vscode.Hover(hoverContent);
    }
}
