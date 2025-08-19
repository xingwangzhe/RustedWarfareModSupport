import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getSectionProperties } from './dataProcessor';

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
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        // 获取当前行文本
        const line = document.lineAt(position.line);
        const lineText = line.text;
        
        // 检查是否在节内
        const currentSection = this.getCurrentSection(document, position);
        if (!currentSection) {
            return null;
        }
        
        
        // 获取节属性
        const properties = getSectionProperties(currentSection);
        if (properties.length === 0) {
            console.log('No properties found for section');
            return null;
        }
        
        // 创建属性名称到属性对象的映射
        const propertyMap = new Map<string, any>();
        for (const prop of properties) {
            propertyMap.set(prop.name, prop);
        }
        
        // 检查悬停位置是否在属性名上
        const hoverOnPropertyName = this.checkHoverOnPropertyName(lineText, position.character, propertyMap);
        if (hoverOnPropertyName) {
            console.log(`Hover on property name: ${hoverOnPropertyName.property.name}`);
            return this.createPropertyHover(hoverOnPropertyName.property);
        }
        
        // 检查悬停位置是否在属性值上
        const hoverOnPropertyValue = this.checkHoverOnPropertyValue(lineText, position.character, propertyMap);
        if (hoverOnPropertyValue) {
            console.log(`Hover on property value. Property: ${hoverOnPropertyValue.property.name}, Word: ${hoverOnPropertyValue.word}`);
            return this.createPropertyValueHover(hoverOnPropertyValue.property, hoverOnPropertyValue.valuePart, hoverOnPropertyValue.word, 0);
        }
        
        console.log('No hover match found');
        return null;
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
     * 检查悬停是否在属性名上
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @param propertyMap 属性映射
     * @returns 属性对象，如果未找到则返回null
     */
    private checkHoverOnPropertyName(
        lineText: string, 
        characterPosition: number, 
        propertyMap: Map<string, any>
    ): { property: any } | null {
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
        
        // 查找匹配的属性
        const property = propertyMap.get(propertyName);
        if (property) {
            return { property };
        }
        
        return null;
    }
    
    /**
     * 检查悬停是否在属性值上
     * @param lineText 行文本
     * @param characterPosition 字符位置
     * @param propertyMap 属性映射
     * @returns 属性对象和值部分信息，如果未找到则返回null
     */
    private checkHoverOnPropertyValue(
        lineText: string, 
        characterPosition: number, 
        propertyMap: Map<string, any>
    ): { property: any, valuePart: string, word: string } | null {
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
        
        // 查找匹配的属性
        const property = propertyMap.get(propertyName);
        if (property) {
            // 获取值部分
            const valuePart = lineText.substring(colonIndex + 1).trim();
            const word = this.getWordAtPosition(lineText, characterPosition);
            return { property, valuePart, word };
        }
        
        return null;
    }
    
    /**
     * 创建属性悬停信息
     * @param property 属性对象
     * @returns 悬停信息
     */
    private createPropertyHover(property: any): vscode.Hover {
        // 创建悬停内容
        const hoverContent = new vscode.MarkdownString();

        // 先翻译各字段
        const nameLabel = vscode.l10n.t('completionprovider.name');
        const typeLabel = vscode.l10n.t('completionprovider.type');
        const versionLabel = vscode.l10n.t('completionprovider.version');
        const descriptionLabel = vscode.l10n.t('completionprovider.description');
        const isOutdatedLabel = vscode.l10n.t('completionprovider.isOutdated');
        const exampleLabel = vscode.l10n.t('completionprovider.example');

        const nameValue = vscode.l10n.t(property.name);
        const typeValue = property.type;
        const versionValue = property.version ? vscode.l10n.t(property.version) : '';
        const descriptionValue = property.description ? vscode.l10n.t(property.description) : '';
        const exampleValue = property.example ? vscode.l10n.t(property.example) : '';

        // 添加名称字段
        hoverContent.appendMarkdown(`**${nameLabel}:** ${nameValue}\n\n`);

        // 添加类型字段
        hoverContent.appendMarkdown(`**${typeLabel}:** \`${typeValue}\`\n\n`);

        // 添加版本字段
        if (property.version) {
            hoverContent.appendMarkdown(`**${versionLabel}:** ${versionValue}\n\n`);
        }

        // 添加描述字段
        if (property.description) {
            hoverContent.appendMarkdown(`**${descriptionLabel}:** ${descriptionValue}\n\n`);
        }

        // 添加过时标记
        if (property.isOutdated) {
            hoverContent.appendMarkdown(`⚠️ **${isOutdatedLabel}:** true\n\n`);
        }

        // 添加示例字段
        if (property.example) {
            hoverContent.appendMarkdown(`**${exampleLabel}:**\n\`\`\`ini\n${exampleValue}\n\`\`\``);
        }

        return new vscode.Hover(hoverContent);
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
        // 如果当前单词是点号右侧的部分，且点号左侧是self，则组合成self.xxx
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
     * 创建属性值悬停信息
     * @param property 属性对象
     * @param valuePart 值部分文本
     * @param word 光标下的单词
     * @param positionInValue 坐标在值中的位置
     * @returns 悬停信息
     */
    private createPropertyValueHover(
        property: any, 
        valuePart: string, 
        word: string,
        positionInValue: number
    ): vscode.Hover | null {
        // 根据属性类型提供相应的值信息
        switch (property.type) {
            case 'bool':
                return this.createBooleanValueHover(word);
            case 'LogicBoolean':
                return this.createLogicBooleanValueHover(word, valuePart, positionInValue);
            case 'string':
            case 'int':
            case 'float':
            case 'string(s)':
            case 'int(s)':
            case 'float / s':
                // 对于基本类型，显示属性信息
                return this.createPropertyHover(property);
            default:
                // 对于其他类型，也显示属性信息
                return this.createPropertyHover(property);
        }
    }
    
    /**
     * 创建LogicBoolean值悬停信息
     * @param word 单词
     * @param valuePart 值部分文本
     * @param positionInValue 坐标在值中的位置
     * @returns 悬停信息
     */
    private createLogicBooleanValueHover(
        word: string, 
        valuePart: string, 
        positionInValue: number
    ): vscode.Hover | null {
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
}