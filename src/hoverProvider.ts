import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

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
        const sectionHover = this.checkHoverOnSectionName(lineText, position.character);
        if (sectionHover) {
            console.log(`Hover on section name: ${sectionHover.sectionName}`);
            return this.createSectionHover(sectionHover.sectionName);
        }

        // 判断2: 是否在属性名上悬停（行首到冒号前）
        const propertyHover = this.checkHoverOnPropertyName(lineText, position.character);
        if (propertyHover) {
            const currentSection = this.getCurrentSection(document, position);
            if (currentSection) {
                console.log(`Hover on property name: ${propertyHover.propertyName} in section: ${currentSection}`);
                return this.createPropertyHover(currentSection, propertyHover.propertyName);
            }
        }

        // 判断3: 是否在属性值上悬停（冒号后）
        const valueHover = this.checkHoverOnPropertyValue(lineText, position.character);
        if (valueHover) {
            const currentSection = this.getCurrentSection(document, position);
            if (currentSection) {
                console.log(`Hover on property value: ${valueHover.value} for property: ${valueHover.propertyName} in section: ${currentSection}`);
                return this.createPropertyValueHover(currentSection, valueHover.propertyName, valueHover.value);
            }
        }

        console.log('No hover match found');
        return null;
    }

    /**
     * 检查是否在节名称上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 节名称信息或null
     */
    private checkHoverOnSectionName(lineText: string, characterPosition: number): { sectionName: string } | null {
        // 查找[]的位置
        const openBracketIndex = lineText.indexOf('[');
        const closeBracketIndex = lineText.indexOf(']');

        if (openBracketIndex === -1 || closeBracketIndex === -1 || openBracketIndex >= closeBracketIndex) {
            return null;
        }

        // 检查光标是否在[]内
        if (characterPosition > openBracketIndex && characterPosition < closeBracketIndex) {
            const sectionName = lineText.substring(openBracketIndex + 1, closeBracketIndex);
            return { sectionName };
        }

        return null;
    }

    /**
     * 检查是否在属性名上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 属性名信息或null
     */
    private checkHoverOnPropertyName(lineText: string, characterPosition: number): { propertyName: string } | null {
        // 查找冒号位置
        const colonIndex = lineText.indexOf(':');
        if (colonIndex <= 0) {
            return null;
        }

        // 检查光标是否在冒号之前（属性名部分）
        if (characterPosition >= colonIndex) {
            return null;
        }

        // 提取属性名
        const propertyName = lineText.substring(0, colonIndex).trim();
        if (!propertyName) {
            return null;
        }

        return { propertyName };
    }

    /**
     * 检查是否在属性值上悬停
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @returns 属性值信息或null
     */
    private checkHoverOnPropertyValue(lineText: string, characterPosition: number): { propertyName: string, value: string } | null {
        // 查找冒号位置
        const colonIndex = lineText.indexOf(':');
        if (colonIndex < 0) {
            return null;
        }

        // 检查光标是否在冒号之后（属性值部分）
        if (characterPosition <= colonIndex) {
            return null;
        }

        // 提取属性名
        const propertyName = lineText.substring(0, colonIndex).trim();
        if (!propertyName) {
            return null;
        }

        // 提取属性值
        const value = lineText.substring(colonIndex + 1).trim();
        const word = this.getWordAtPosition(lineText, characterPosition);

        return { propertyName, value: word || value };
    }

    /**
     * 获取当前所在的节名称
     * @param document 文档对象
     * @param position 位置对象
     * @returns 节名称，如果未找到则返回null
     */
    private getCurrentSection(document: vscode.TextDocument, position: vscode.Position): string | null {
        // 从当前位置向上搜索，找到最近的节定义
        for (let i = position.line; i >= 0; i--) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                return line.substring(1, line.length - 1);
            }
        }
        return null;
    }

    /**
     * 创建节悬停信息
     * @param sectionName 节名称
     * @returns 悬停信息
     */
    private createSectionHover(sectionName: string): vscode.Hover | null {
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
     * @returns 悬停信息
     */
    private createPropertyHover(sectionName: string, propertyName: string): vscode.Hover | null {
        try {
            // 获取节的基本名称
            const baseSectionName = this.getBaseSectionName(sectionName);

            // 构建数据文件路径
            const sectionPath = path.join(__dirname, '..', 'data', 'sections', `${baseSectionName}.json`);

            // 检查是否存在语言特定的文件
            const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${baseSectionName}.json`);
            const finalPath = fs.existsSync(localizedPath) ? localizedPath : sectionPath;

            const sectionData = JSON.parse(fs.readFileSync(finalPath, 'utf8'));
            const property = sectionData.data.find((p: any) => p.name === propertyName);

            if (!property) {
                return null;
            }

            // 创建悬停内容
            const hoverContent = new vscode.MarkdownString();

            // 添加名称字段
            hoverContent.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(property.name)}\n\n`);

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
     * @returns 悬停信息
     */
    private createPropertyValueHover(sectionName: string, propertyName: string, value: string): vscode.Hover | null {
        // 先获取属性信息
        const propertyHover = this.createPropertyHover(sectionName, propertyName);
        if (!propertyHover) {
            return null;
        }

        // 从属性悬停中提取类型信息
        const content = propertyHover.contents[0];
        let propertyType = '';

        if (content instanceof vscode.MarkdownString) {
            const match = content.value.match(/\*\*Type:\*\* `([^`]+)`/);
            if (match) {
                propertyType = match[1];
            }
        }

        // 根据属性类型提供额外的值信息
        switch (propertyType) {
            case 'bool':
                return this.createBooleanValueHover(value);
            case 'LogicBoolean':
                return this.createLogicBooleanValueHover(value);
            default:
                // 对于其他类型，返回属性信息
                return propertyHover;
        }
    }

    /**
     * 获取节的基本名称
     * @param name 节名称
     * @returns 基本节名称
     */
    private getBaseSectionName(name: string): string {
        let baseName = name;

        // 处理带下划线的节名称，如 turret_NAME, projectile_NAME 等
        if (name.includes("_")) {
            baseName = name.substring(0, name.indexOf("_"));
        }

        // 特殊处理 leg_ 和 arm_ 类型
        if (name.startsWith("leg_")) {
            baseName = "leg";
        } else if (name.startsWith("arm_")) {
            baseName = "arm";
        }

        // 特殊处理 spawnUnits:LIST 和 spawnProjectiles:LIST 类型
        if (name.startsWith("spawnUnits:")) {
            baseName = "spawnUnits";
        } else if (name.startsWith("spawnProjectiles:")) {
            baseName = "spawnProjectiles";
        }

        // 特殊处理 action_ 和 hiddenAction_ 类型
        if (name.startsWith("action_") || name.startsWith("hiddenAction_")) {
            baseName = "action";
        }

        // 特殊处理 Prices/Resources 类型
        if (name === "Prices/Resources") {
            baseName = "prices";
        }

        if (name.startsWith('global_resource')) {
            baseName = 'global_resource';
        }

        if (name.startsWith('canBuild')) {
            baseName = 'canBuild';
        }

        return baseName;
    }

    /**
     * 获取指定位置的单词
     * @param text 文本
     * @param position 位置
     * @returns 单词
     */
    private getWordAtPosition(text: string, position: number): string {
        if (position < 0 || position > text.length) {
            return '';
        }

        // 以空格等为分隔符查找单词
        const leftPart = text.substring(0, position);
        const rightPart = text.substring(position);

        // 查找左侧边界
        const leftMatch = leftPart.match(/[^\s(),]*$/);
        const leftWord = leftMatch ? leftMatch[0] : '';

        // 查找右侧边界
        const rightMatch = rightPart.match(/^[^\s(),]*/);
        const rightWord = rightMatch ? rightMatch[0] : '';

        const word = leftWord + rightWord;

        // 检查是否是self.xxx格式的方法调用
        if (leftWord.endsWith('.') && leftWord.length > 1) {
            const beforeDot = leftWord.substring(0, leftWord.length - 1);
            if (beforeDot === 'self') {
                const result = beforeDot + '.' + rightWord;
                return result;
            }
        }

        // 如果当前单词是self，且点号右侧有内容，则组合成self.xxx
        if (leftWord === 'self' && rightPart.startsWith('.')) {
            const rightPartAfterDot = rightPart.substring(1);
            const rightWordMatch = rightPartAfterDot.match(/^[^\s(),]*/);
            const rightWordAfterDot = rightWordMatch ? rightWordMatch[0] : '';
            if (rightWordAfterDot) {
                const result = leftWord + '.' + rightWordAfterDot;
                return result;
            }
        }

        return word;
    }

    /**
     * 创建布尔值悬停信息
     * @param word 单词
     * @returns 悬停信息
     */
    private createBooleanValueHover(word: string): vscode.Hover | null {
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
    private createLogicBooleanValueHover(word: string): vscode.Hover | null {
        const trimmedWord = word.trim();
        if (!trimmedWord) {
            return null;
        }

        // 检查是否为LogicBoolean关键字
        if (trimmedWord === 'true' || trimmedWord === 'false' || trimmedWord === 'if' ||
            trimmedWord === 'and' || trimmedWord === 'or' || trimmedWord === 'not') {
            return this.createLogicBooleanKeywordHover(trimmedWord);
        }

        // 检查是否为self.开头的方法
        if (trimmedWord.startsWith('self.')) {
            return this.createLogicBooleanSelfMethodHover(trimmedWord);
        }

        // 检查是否为其他LogicBoolean函数
        return this.createLogicBooleanFunctionHover(trimmedWord);
    }

    /**
     * 创建LogicBoolean关键字悬停信息
     * @param keyword 关键字
     * @returns 悬停信息
     */
    private createLogicBooleanKeywordHover(keyword: string): vscode.Hover | null {
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
    private createLogicBooleanSelfMethodHover(method: string): vscode.Hover | null {
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
    private createLogicBooleanFunctionHover(func: string): vscode.Hover | null {
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