import * as vscode from 'vscode';
import { getColorLoader } from './colorLoader';

/**
 * 装饰器工厂类
 * 负责创建和管理文本装饰器
 */
export class DecoratorFactory {
    private decorators: Map<string, vscode.TextEditorDecorationType>;

    constructor() {
        this.decorators = new Map();
        this.initializeDecorators();
    }

    /**
     * 初始化装饰器
     */
    private initializeDecorators() {
        const colorLoader = getColorLoader();
        const typeColors = colorLoader.loadTypeColors();

        // 为每种类型创建装饰器
        for (const [typeName, color] of Object.entries(typeColors)) {
            const decorator = vscode.window.createTextEditorDecorationType({
                color: color,
                overviewRulerColor: color,
                overviewRulerLane: vscode.OverviewRulerLane.Right
            });
            this.decorators.set(typeName, decorator);
        }

        // 添加语言键的特殊装饰器
        const languageDecorator = vscode.window.createTextEditorDecorationType({
            color: '#FFD700', // 金色
            fontWeight: 'bold',
            overviewRulerColor: '#FFD700',
            overviewRulerLane: vscode.OverviewRulerLane.Right,
            after: {
                contentText: ' 🌐',
                color: '#FFD700'
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
        return this.decorators.get(typeName);
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
