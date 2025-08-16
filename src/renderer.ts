import * as vscode from 'vscode';
import { extractExampleValue, generateCompletionDocumentation, isInsideSection, getSectionProperties } from './dataProcessor';

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

        // 为每个属性创建补全项
        return getSectionProperties(this.sectionName).map(property => {
            const item = new vscode.CompletionItem(
                property.name,
                vscode.CompletionItemKind.Property
            );
            
            // 设置补全项的详细信息和文档
            item.detail = `${property.type} - ${property.version}`;
            item.documentation = generateCompletionDocumentation(property);
            
            // 设置插入文本格式
            const exampleValue = property.example ? extractExampleValue(property.example) : '';
            item.insertText = new vscode.SnippetString(`${property.name}: \${1:${exampleValue}}`);
            
            return item;
        });
    }
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