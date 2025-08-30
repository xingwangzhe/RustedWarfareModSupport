import * as vscode from 'vscode';
import { getColorLoader } from './colorLoader';

/**
 * 装饰器工厂类
 * 负责创建和管理文本装饰器，支持主题感知
 */
export class DecoratorFactory {
    private decorators: Map<string, vscode.TextEditorDecorationType>;
    private themeChangeDisposable: vscode.Disposable | null = null;

    constructor() {
        this.decorators = new Map();
        this.setupThemeChangeListener();
    }

    /**
     * 设置主题变化监听器
     */
    private setupThemeChangeListener() {
        // 监听主题配置变化
        this.themeChangeDisposable = vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('workbench.colorTheme')) {
                // 主题变化时清理所有装饰器，下次使用时会重新创建
                this.disposeDecorators();
            }
        });
    }

    /**
     * 清理所有装饰器（但不销毁工厂）
     */
    private disposeDecorators() {
        for (const decorator of this.decorators.values()) {
            decorator.dispose();
        }
        this.decorators.clear();
    }

    /**
     * 初始化装饰器
     */
    /**
     * 按需创建或获取装饰器
     */
    private getOrCreateDecorator(typeName: string): vscode.TextEditorDecorationType {
        const existing = this.decorators.get(typeName);
        if (existing) {
            return existing;
        }

        const loader = getColorLoader();
        const color = loader.getColor(typeName);

        // 为 image 类型提供一个轻量的行尾图标装饰（虚掩提示），其余类型使用普通颜色装饰
        let decorator: vscode.TextEditorDecorationType;
        try {
            if (typeName && typeName.toLowerCase().includes('image')) {
                // 仅当是值装饰（约定：propertyType + '_value'）时才显示行尾图片图标；其他 image 类型使用普通颜色装饰
                if (typeName.toLowerCase().endsWith('_value')) {
                    decorator = vscode.window.createTextEditorDecorationType({
                        color: color,
                        overviewRulerColor: color,
                        overviewRulerLane: vscode.OverviewRulerLane.Right,
                        after: {
                            contentText: '    🖼️',
                            color: '#95a5a6'
                        }
                    });
                } else {
                    decorator = vscode.window.createTextEditorDecorationType({
                        color: color,
                        overviewRulerColor: color,
                        overviewRulerLane: vscode.OverviewRulerLane.Right
                    });
                }
            } else {
                decorator = vscode.window.createTextEditorDecorationType({
                    color: color,
                    overviewRulerColor: color,
                    overviewRulerLane: vscode.OverviewRulerLane.Right
                });
            }
    } catch {
            // fallback
            decorator = vscode.window.createTextEditorDecorationType({
                color: color,
                overviewRulerColor: color,
                overviewRulerLane: vscode.OverviewRulerLane.Right
            });
        }
        this.decorators.set(typeName, decorator);
        return decorator;
    }

    /**
     * 初始化语言键装饰器（保留特殊样式，支持主题感知）
     */
    private ensureLanguageDecorator() {
        if (this.decorators.has('language')) {
            return;
        }

        // 根据当前主题选择合适的颜色
        const config = vscode.workspace.getConfiguration();
        const theme = config.get<string>('workbench.colorTheme', '');
        const isLightTheme = theme.toLowerCase().includes('light') || theme.toLowerCase().includes('white');

        const languageColor = isLightTheme ? '#B7791F' : '#F6AD55'; // 金色在亮色主题下稍深，在暗色主题下稍亮

        const languageDecorator = vscode.window.createTextEditorDecorationType({
            color: languageColor,
            fontWeight: 'bold',
            overviewRulerColor: languageColor,
            overviewRulerLane: vscode.OverviewRulerLane.Right,
            after: {
                contentText: ' 🌐',
                color: languageColor
            }
        });
        this.decorators.set('language', languageDecorator);
    }

    /**
     * 获取指定类型的装饰器
     * @param typeName 类型名称
     * @returns 装饰器类型对象，如果未找到则返回undefined
     */
    public getDecorator(typeName: string): vscode.TextEditorDecorationType | undefined {
        if (!typeName) {
            return undefined;
        }

        // 特殊处理 language 键
        if (typeName === 'language') {
            this.ensureLanguageDecorator();
            return this.decorators.get('language');
        }

        return this.getOrCreateDecorator(typeName);
    }

    /**
     * 获取所有装饰器
     * @returns 装饰器映射
     */
    public getAllDecorators(): Map<string, vscode.TextEditorDecorationType> {
        return new Map(this.decorators);
    }

    /**
     * 清理所有装饰器资源
     */
    public dispose() {
        // 清理主题变化监听器
        if (this.themeChangeDisposable) {
            this.themeChangeDisposable.dispose();
            this.themeChangeDisposable = null;
        }

        // 清理所有装饰器
        for (const decorator of this.decorators.values()) {
            decorator.dispose();
        }
        this.decorators.clear();
    }
}

// 创建全局装饰器工厂实例
let decoratorFactory: DecoratorFactory | null = null;

/**
 * 获取全局装饰器工厂实例
 * @returns 装饰器工厂实例
 */
export function getDecoratorFactory(): DecoratorFactory {
    if (!decoratorFactory) {
        decoratorFactory = new DecoratorFactory();
    }
    return decoratorFactory;
}

/**
 * 销毁全局装饰器工厂实例
 */
export function disposeDecoratorFactory() {
    if (decoratorFactory) {
        decoratorFactory.dispose();
        decoratorFactory = null;
    }
}
