import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// 定义类型颜色映射接口
interface TypeColorMap {
    [key: string]: string;
}

/**
 * 着色器管理器类
 * 负责加载和管理不同属性类型的着色信息
 */
export class ColorizerManager {
    private typeColors: TypeColorMap;
    private decorators: Map<string, vscode.TextEditorDecorationType>;

    constructor() {
        this.typeColors = this.loadTypeColors();
        this.decorators = new Map();
        this.initializeDecorators();
    }

    /**
     * 从type.json加载类型颜色映射
     * @returns 类型颜色映射对象
     */
    private loadTypeColors(): TypeColorMap {
        try {
            const typePath = path.join(__dirname, '..', 'data', 'type.json');
            const typeData = JSON.parse(fs.readFileSync(typePath, 'utf8'));
            const colorMap: TypeColorMap = {};
            
            for (const type of typeData) {
                colorMap[type.name] = type.color;
            }
            
            return colorMap;
        } catch (error) {
            console.error('Error loading type colors:', error);
            // 返回默认颜色映射
            return {
                'string': '#FF6B6B',
                'int': '#4ECDC4',
                'float': '#45B7D1',
                'bool': '#96CEB4',
                'string(s)': '#FFEAA7',
                'int(s)': '#DDA0DD'
            };
        }
    }

    /**
     * 初始化装饰器
     */
    private initializeDecorators() {
        // 为每种类型创建装饰器
        for (const [typeName, color] of Object.entries(this.typeColors)) {
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
     * 获取所有类型颜色映射
     * @returns 类型颜色映射对象
     */
    public getTypeColors(): TypeColorMap {
        return { ...this.typeColors };
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

// 创建全局着色器管理器实例
let colorizerManager: ColorizerManager | null = null;

/**
 * 获取全局着色器管理器实例
 * @returns 着色器管理器实例
 */
export function getColorizerManager(): ColorizerManager {
    if (!colorizerManager) {
        colorizerManager = new ColorizerManager();
    }
    return colorizerManager;
}

/**
 * 销毁全局着色器管理器实例
 */
export function disposeColorizerManager() {
    if (colorizerManager) {
        colorizerManager.dispose();
        colorizerManager = null;
    }
}