import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { HoverUtils } from './utils';
import { resolveImagePath } from '../pubfun/imagePathResolver';
import { createImageHoverFromPath } from '../pubfun/imageHover';

/**
 * 悬停内容创建器
 * 负责创建各种类型的悬停信息
 */
export class HoverCreators {
    /**
     * 创建节悬停信息
     * @param sectionName 节名称
     * @returns 悬停信息
     */
    public static createSectionHover(sectionName: string): vscode.Hover | null {
        try {
            // 读取节数据
            const sectionsPath = path.join(__dirname, '..', 'data', 'sections.json');
            const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));

            // 查找匹配的节
            const section = sectionsData.data.find((s: any) => s.name === sectionName);
            if (!section) {
                return null;
            }

            const hoverContent = new vscode.MarkdownString();
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(section.name)}\n\n`);
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(section.description)}`);

            return new vscode.Hover(hoverContent);
        } catch (error) {
            console.error('Error reading sections.json:', error);
            return null;
        }
    }

    /**
     * 创建属性悬停信息
     * @param sectionName 节名称
     * @param propertyName 属性名称
     * @param originalName 原始属性名称（用于语言键）
     * @returns 悬停信息
     */
    public static createPropertyHover(sectionName: string, propertyName: string, originalName?: string): vscode.Hover | null {
        // 如果是语言键，使用原始名称查找属性信息
        const lookupName = originalName || propertyName;

        try {
            // 获取节的基本名称
            const baseSectionName = HoverUtils.getBaseSectionName(sectionName);

            // 构建数据文件路径
            const sectionPath = path.join(__dirname, '..', 'data', 'sections', `${baseSectionName}.json`);

            // 检查是否存在语言特定的文件
            const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${baseSectionName}.json`);
            const finalPath = fs.existsSync(localizedPath) ? localizedPath : sectionPath;

            const sectionData = JSON.parse(fs.readFileSync(finalPath, 'utf8'));
            const property = sectionData.data.find((p: any) => p.name === lookupName);

            if (!property) {
                return null;
            }

            // 创建悬停内容
            const hoverContent = new vscode.MarkdownString();

            // 添加名称字段
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(property.name)}\n\n`);

            // 如果是语言键，添加语言信息
            if (originalName) {
                const languageKeyInfo = HoverCreators.parseLanguageKey(propertyName);
                if (languageKeyInfo) {
                    hoverContent.appendMarkdown(`**${vscode.l10n.t('Language')}:** ${languageKeyInfo.languageCode.toUpperCase()} (${vscode.l10n.t('ISO 639-1')})\n\n`);
                }
            }

            // 添加类型字段
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.type')}:** \`${property.type}\`\n\n`);

            // 添加版本字段
            if (property.version) {
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.version')}:** ${property.version}\n\n`);
            }

            // 添加描述字段
            if (property.description) {
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(property.description)}\n\n`);
            }

            // 添加过时标记
            if (property.isOutdated) {
                hoverContent.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
            }

            // 添加示例字段
            if (property.example) {
                hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${vscode.l10n.t(property.example)}\n\`\`\``);
            }
                const typeLabel = vscode.l10n.t('completionprovider.type');
                let typeDisplay = `\`${property.type}\``;
                try {
                    if ((property.type || '').toLowerCase().includes('image') || (property.name || '').toLowerCase().includes('image')) {
                        typeDisplay += ' 🖼️';
                    }
                } catch {
                    // ignore
                }
                hoverContent.appendMarkdown(`**${typeLabel}:** ${typeDisplay}\n\n`);
            return new vscode.Hover(hoverContent);
        } catch (error) {
            console.error(`Error reading ${sectionName}.json:`, error);
            return null;
        }
    }

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
        const propertyHover = HoverCreators.createPropertyHover(sectionName, propertyName, originalName);
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
                return HoverCreators.createBooleanValueHover(value);
            case 'LogicBoolean':
                return HoverCreators.createLogicBooleanValueHover(value);
            default:
                // 对于其他类型，返回属性信息
                return propertyHover;
        }
    }

    /**
     * 解析语言键
     * @param keyName 键名
     * @returns 语言键信息或null
     */
    private static parseLanguageKey(keyName: string): { baseName: string; languageCode: string } | null {
        // 匹配 key_zh, key_en 等格式（直接以语言代码结尾）
        const languageKeyPattern = /^(.+)_([a-z]{2})$/;
        const match = keyName.match(languageKeyPattern);

        if (match) {
            const [, baseName, languageCode] = match;
            return {
                baseName,
                languageCode: languageCode.toLowerCase()
            };
        }

        return null;
    }

    /**
     * 创建布尔值悬停信息
     * @param word 单词
     * @returns 悬停信息
     */
    private static createBooleanValueHover(word: string): vscode.Hover | null {
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
    private static createLogicBooleanValueHover(word: string): vscode.Hover | null {
        const trimmedWord = word.trim();
        if (!trimmedWord) {
            return null;
        }

        // 检查是否为LogicBoolean关键字
        if (trimmedWord === 'true' || trimmedWord === 'false' || trimmedWord === 'if' ||
            trimmedWord === 'and' || trimmedWord === 'or' || trimmedWord === 'not') {
            return HoverCreators.createLogicBooleanKeywordHover(trimmedWord);
        }

        // 检查是否为self.开头的方法
        if (trimmedWord.startsWith('self.')) {
            return HoverCreators.createLogicBooleanSelfMethodHover(trimmedWord);
        }

        // 检查是否为其他LogicBoolean函数
        return HoverCreators.createLogicBooleanFunctionHover(trimmedWord);
    }

    /**
     * 创建LogicBoolean关键字悬停信息
     * @param keyword 关键字
     * @returns 悬停信息
     */
    private static createLogicBooleanKeywordHover(keyword: string): vscode.Hover | null {
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
    private static createLogicBooleanSelfMethodHover(method: string): vscode.Hover | null {
        // 从logicboolean.json加载数据
        try {
            const valuePath = path.join(__dirname, '..', 'data', 'value', 'logicboolean.json');
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
    private static createLogicBooleanFunctionHover(func: string): vscode.Hover | null {
        // 从logicboolean.json加载数据
        try {
            const valuePath = path.join(__dirname, '..', 'data', 'value', 'logicboolean.json');
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
