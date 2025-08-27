import { TypeColorMap } from './types';
import { getColorLoader } from './colorLoader';
import { getDecoratorFactory, disposeDecoratorFactory } from './decoratorFactory';

/**
 * 着色器管理器类
 * 整合颜色加载和装饰器管理
 */
export class ColorizerManager {
    /**
     * 获取所有类型颜色映射
     * @returns 类型颜色映射对象
     */
    public getTypeColors(): TypeColorMap {
        const colorLoader = getColorLoader();
        return colorLoader.loadTypeColors();
    }

    /**
     * 获取指定类型的装饰器
     * @param typeName 类型名称
     * @returns 装饰器类型对象，如果未找到则返回undefined
     */
    public getDecorator(typeName: string) {
        const decoratorFactory = getDecoratorFactory();
        return decoratorFactory.getDecorator(typeName);
    }

    /**
     * 清理所有资源
     */
    public dispose() {
        disposeDecoratorFactory();
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