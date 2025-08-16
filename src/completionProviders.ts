import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 为补全项生成格式化的文档信息
 * @param property 属性对象
 * @returns 格式化的Markdown文档字符串
 */
export function generateCompletionDocumentation(property: any): vscode.MarkdownString {
    const doc = new vscode.MarkdownString();
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.name')}:** ${property.name}\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.type')}:** \`${property.type}\`\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.version')}:** ${property.version}\n\n`);
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.description')}:** ${vscode.l10n.t(property.description)}\n\n`);
    if (property.isOutdated) {
        doc.appendMarkdown(`⚠️ **${vscode.l10n.t('completionprovider.isOutdated')}:** true\n\n`);
    }
    doc.appendMarkdown(`**${vscode.l10n.t('completionprovider.example')}:**\n\`\`\`ini\n${property.example}\n\`\`\``);
    return doc;
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
        // 检查当前是否在指定节内
        if (!this.isInsideSection(document, position)) {
            return [];
        }

        // 获取节的属性列表
        const properties = this.getProperties();
        const completionItems: vscode.CompletionItem[] = [];

        // 为每个属性创建补全项
        for (const property of properties) {
            const item = new vscode.CompletionItem(
                property.name,
                vscode.CompletionItemKind.Property
            );
            
            // 设置补全项的详细信息
            item.detail = `${property.type} - ${property.version}`;
            // 使用更丰富的Markdown格式展示文档信息，并使用翻译键值
            item.documentation = generateCompletionDocumentation(property);
            
            // 设置插入文本格式
            if (property.example) {
                // 从示例中提取值部分
                const exampleValue = property.example.split(':')[1]?.trim() || '';
                item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
            } else {
                item.insertText = new vscode.SnippetString(`${property.name}: $1`);
            }
            
            completionItems.push(item);
        }

        return completionItems;
    }

    private isInsideSection(document: vscode.TextDocument, position: vscode.Position): boolean {
        let insideSection = false;
        for (let i = 0; i < position.line; i++) {
            const line = document.lineAt(i).text.trim();
            if (line.startsWith('[') && line.endsWith(']')) {
                const sectionName = line.substring(1, line.length - 1);
                if (this.sectionMatcher(sectionName)) {
                    insideSection = true;
                } else {
                    insideSection = false;
                }
            }
        }
        return insideSection;
    }

    private getProperties(): any[] {
        try {
            // 获取当前VS Code界面语言
            
            // 构建语言特定的数据文件路径
            let sectionPath = path.join(__dirname, '..', 'data', 'sections', `${this.sectionName}.json`);
            
            // 检查是否存在语言特定的文件
            const localizedPath = path.join(__dirname, '..', 'data', 'sections', vscode.env.language, `${this.sectionName}.json`);
            if (fs.existsSync(localizedPath)) {
                sectionPath = localizedPath;
            }
            
            const sectionData = JSON.parse(fs.readFileSync(sectionPath, 'utf8'));
            return sectionData.data || [];
        } catch (error) {
            console.error(`Error reading ${this.sectionName}.json:`, error);
            return [];
        }
    }
}

/**
 * 创建一个简单的节匹配器函数
 * @param sectionName 节名称
 * @returns 匹配器函数
 */
export function createSimpleSectionMatcher(sectionName: string): (name: string) => boolean {
    return (name: string) => name === sectionName;
}

/**
 * 创建一个前缀匹配器函数
 * @param prefix 前缀
 * @returns 匹配器函数
 */
export function createPrefixSectionMatcher(prefix: string): (name: string) => boolean {
    return (name: string) => name.startsWith(prefix);
}

/**
 * 创建一个正则表达式匹配器函数
 * @param pattern 正则表达式模式
 * @returns 匹配器函数
 */
export function createRegexSectionMatcher(pattern: RegExp): (name: string) => boolean {
    return (name: string) => pattern.test(name);
}

// 基于语言分类的补全提供者
export class LanguageBasedCompletionProvider implements vscode.CompletionItemProvider {
    private language: string;
    private sectionProviders: GenericCompletionProvider[];

    constructor(language: string) {
        this.language = language;
        this.sectionProviders = this.createSectionProviders();
    }

    private createSectionProviders(): GenericCompletionProvider[] {
        // 根据语言创建不同的节提供者
        switch (this.language) {
            case 'core':
                return [new CoreCompletionProvider()];
            case 'combat':
                return [new AttackCompletionProvider(), new TurretCompletionProvider(), new ProjectileCompletionProvider()];
            case 'movement':
                return [new MovementCompletionProvider(), new LegArmCompletionProvider()];
            case 'ai':
                return [new AiCompletionProvider(), new CanBuildCompletionProvider()];
            case 'graphics':
                return [new GraphicsCompletionProvider(), new AnimationCompletionProvider(), new EffectCompletionProvider()];
            case 'logic':
                return [new ActionCompletionProvider(), new AttachmentCompletionProvider()];
            default:
                // 默认返回所有提供者
                return [
                    new CoreCompletionProvider(),
                    new AttackCompletionProvider(),
                    new TurretCompletionProvider(),
                    new ProjectileCompletionProvider(),
                    new MovementCompletionProvider(),
                    new LegArmCompletionProvider(),
                    new AiCompletionProvider(),
                    new CanBuildCompletionProvider(),
                    new GraphicsCompletionProvider(),
                    new AnimationCompletionProvider(),
                    new EffectCompletionProvider(),
                    new ActionCompletionProvider(),
                    new AttachmentCompletionProvider()
                ];
        }
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        // 收集所有节提供者的补全项
        const allCompletionItems: vscode.CompletionItem[] = [];
        
        // 这里可以添加更复杂的逻辑来根据语言过滤补全项
        for (const provider of this.sectionProviders) {
            // 注意：这里简化处理，实际应用中可能需要更复杂的逻辑
            const items = provider.provideCompletionItems(document, position, token, context);
            if (items && Array.isArray(items)) {
                allCompletionItems.push(...items as vscode.CompletionItem[]);
            } else if (items instanceof vscode.CompletionList) {
                allCompletionItems.push(...items.items);
            }
        }

        return allCompletionItems;
    }
}

// 特定节的补全提供者类
export class CoreCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('core', createSimpleSectionMatcher('core'));
    }
}

export class CanBuildCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('canBuild', createPrefixSectionMatcher('canBuild_'));
    }
}

export class GraphicsCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('graphics', createSimpleSectionMatcher('graphics'));
    }
}

export class AttackCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('attack', createSimpleSectionMatcher('attack'));
    }
}

export class TurretCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('turret', createPrefixSectionMatcher('turret_'));
    }
}

export class ProjectileCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('projectile', createPrefixSectionMatcher('projectile_'));
    }
}

export class MovementCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('movement', createSimpleSectionMatcher('movement'));
    }
}

export class AiCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('ai', createSimpleSectionMatcher('ai'));
    }
}

export class LegArmCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('leg_arm', (sectionName: string) => sectionName.startsWith('leg_') || sectionName.startsWith('arm_'));
    }
}

export class AttachmentCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('attachment', createRegexSectionMatcher(/^attachment_\w+/));
    }
}

export class ActionCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('action', createRegexSectionMatcher(/^(action_|hiddenAction_)\w+/));
    }
}

export class EffectCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('effect', createRegexSectionMatcher(/^effect_\w+/));
    }
}

export class AnimationCompletionProvider extends GenericCompletionProvider {
    constructor() {
        super('animation', createRegexSectionMatcher(/^animation_\w+/));
    }
}