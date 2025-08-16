import * as vscode from 'vscode';
import { extractExampleValue, getSectionProperties, isInsideSection, isAtLineStart } from './dataProcessor';

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

        // 只有在行首时才提供补全项（允许只有空格或制表符）
        if (!isAtLineStart(document, position)) {
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
        super('canBuild', (name: string) => name.startsWith('canBuild_'));
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
        super('turret', (name: string) => name.startsWith('turret_'));
    }
}

export class ProjectileCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('projectile', (name: string) => name.startsWith('projectile_'));
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
        super('leg_arm', (sectionName: string) => sectionName.startsWith('leg_') || sectionName.startsWith('arm_'));
    }
}

export class AttachmentCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('attachment', (name: string) => /^attachment_\w+/.test(name));
    }
}

export class ActionCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('action', (name: string) => /^(action_|hiddenAction_)\w+/.test(name));
    }
}

export class EffectCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('effect', (name: string) => /^effect_\w+/.test(name));
    }
}

export class AnimationCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('animation', (name: string) => /^animation_\w+/.test(name));
    }
}