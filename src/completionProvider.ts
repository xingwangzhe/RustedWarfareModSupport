import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { extractExampleValue, getSectionProperties, isInsideSection, isAtValidLineStart, hasColonInLine } from './dataProcessor';

/**
 * 为补全项生成格式化的文档信息
 * @param property 属性对象
 * @returns 格式化的Markdown文档字符串
 */
function generateCompletionDocumentation(property: any): vscode.MarkdownString {
    const doc = new vscode.MarkdownString();
    
    // 添加名称字段
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${vscode.l10n.t(property.name)}\n\n`);
    
    // 添加类型字段
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.type')}:** \`${property.type}\`\n\n`);
    
    // 添加版本字段
    if (property.version) {
        doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.version')}:** ${property.version}\n\n`);
    }
    
    // 添加描述字段
    if (property.description) {
        doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(property.description)}\n\n`);
    }
    
    // 添加过时标记
    if (property.isOutdated) {
        doc.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
    }
    
    // 添加示例字段
    if (property.example) {
        doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${vscode.l10n.t(property.example)}\n\`\`\``);
    }
    
    return doc;
}

/**
 * 创建补全项数组
 * @param sectionName 节名称
 * @param properties 属性数组
 * @returns 补全项数组
 */
function createCompletionItems(sectionName: string, properties: any[]): vscode.CompletionItem[] {
    return properties.map(property => {
        const item = new vscode.CompletionItem(
            property.name,
            vscode.CompletionItemKind.Property
        );
        
        // 设置补全项的详细信息和文档
        item.detail = property.type ? `${property.type} - ${property.version || ''}`.trim() : property.version || '';
        item.documentation = generateCompletionDocumentation(property);
        
        // 设置插入文本格式
        const exampleValue = property.example ? extractExampleValue(property.example) : '';
        item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
        
        return item;
    });
}

/**
 * 创建节名称补全项数组
 * @returns 补全项数组
 */
function createSectionCompletionItems(): vscode.CompletionItem[] {
    try {
        // 读取节数据
        const sectionsPath = path.join(__dirname, '..', 'data', 'sections.json');
        const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));
        
        // 为每个节创建补全项
        return sectionsData.data.map((section: any) => {
            const item = new vscode.CompletionItem(
                section.name,
                vscode.CompletionItemKind.Module
            );
            
            // 设置文档信息
            item.documentation = new vscode.MarkdownString(
                `**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(section.description)}`
            );
            
            // 设置插入文本，包含中括号
            item.insertText = new vscode.SnippetString(`${section.name}`);
            
            // 设置排序优先级
            item.sortText = '0';
            
            return item;
        });
    } catch (error) {
        console.error('Error reading sections.json:', error);
        return [];
    }
}

/**
 * 节名称补全提供者类
 */
export class SectionNameCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 获取光标所在行的文本
        const lineText = document.lineAt(position.line).text;
        
        // 获取光标前的文本
        const textBeforeCursor = lineText.substring(0, position.character);
        
        // 检查光标前是否有[但没有匹配的]
        const lastOpenBracketIndex = textBeforeCursor.lastIndexOf('[');
        const lastCloseBracketIndex = textBeforeCursor.lastIndexOf(']');
        
        // 如果有未闭合的[（即存在[且它在最近的]之后），则提供节名称补全
        if (lastOpenBracketIndex !== -1 && lastOpenBracketIndex > lastCloseBracketIndex) {
            return createSectionCompletionItems();
        }
        
        return [];
    }
}

/**
 * 通用的节补全提供者类
 */
export class GenericCompletionProvider implements vscode.CompletionItemProvider {
    private sectionName: string;
    private sectionMatcher: (sectionName: string) => boolean;

    constructor(sectionName: string, sectionMatcher?: (sectionName: string) => boolean) {
        this.sectionName = sectionName;
        this.sectionMatcher = sectionMatcher || ((name: string) => name === sectionName);
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 如果不在目标节内，返回空数组
        if (!isInsideSection(document, position, this.sectionMatcher)) {
            return [];
        }

        // 检查是否在有效的行首位置（允许输入属性名）
        if (!isAtValidLineStart(document, position)) {
            return [];
        }
        
        // 如果行中已经包含冒号，则不提供属性补全（为值补全保留空间）
        if (hasColonInLine(document, position)) {
            return [];
        }

        // 获取属性并创建补全项
        const properties = getSectionProperties(this.sectionName);
        return createCompletionItems(this.sectionName, properties);
    }
}

// 特定节的补全提供者类
export class CoreCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('core', (name: string) => name === 'core');
    }
}

export class CanBuildCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('canBuild', (name: string) => /^canBuild_\p{L}+$/u.test(name));
    }
}

export class GraphicsCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('graphics', (name: string) => name === 'graphics');
    }
}

export class AttackCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('attack', (name: string) => name === 'attack');
    }
}

export class TurretCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('turret', (name: string) => /^turret_\p{L}+$/u.test(name));
    }
}

export class ProjectileCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('projectile', (name: string) => /^projectile_\p{L}+$/u.test(name));
    }
}

export class MovementCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('movement', (name: string) => name === 'movement');
    }
}

export class AiCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('ai', (name: string) => name === 'ai');
    }
}

export class LegArmCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('leg_arm', (sectionName: string) => /^leg_\p{L}+$/u.test(sectionName) || /^arm_\p{L}+$/u.test(sectionName));
    }
}

export class AttachmentCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('attachment', (name: string) => /^attachment_\p{L}+$/u.test(name));
    }
}

export class ActionCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('action', (name: string) => /^(action_|hiddenAction_)\p{L}+$/u.test(name));
    }
}

export class EffectCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('effect', (name: string) => /^effect_\p{L}+$/u.test(name));
    }
}

export class AnimationCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('animation', (name: string) => /^animation_\p{L}+$/u.test(name));
    }
}

export class ModInfoCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('mod-info', (name: string) => name === 'mod' || name === 'music');
    }
}

export class GlobalResourceCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('global_resource', (name: string) => /^global_resource_\p{L}+$/u.test(name));
    }
}

export class ResourceCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('resource', (name: string) => /^resource_\p{L}+$/u.test(name));
    }
}

// 新增的补全提供者类
export class DecalCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('decal', (name: string) => /^decal_\p{L}+$/u.test(name));
    }
}

export class PlacementRuleCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('placementRule', (name: string) => /^placementRule_\p{L}+$/u.test(name));
    }
}