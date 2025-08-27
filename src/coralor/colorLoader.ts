import * as fs from 'fs';
import * as path from 'path';
import { TypeColorMap } from './types';

/**
 * 颜色加载器类
 * 负责从配置文件加载类型颜色映射
 */
export class ColorLoader {
    /**
     * 从type.json加载类型颜色映射
     * @returns 类型颜色映射对象
     */
    public loadTypeColors(): TypeColorMap {
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
}

// 创建全局颜色加载器实例
let colorLoader: ColorLoader | null = null;

/**
 * 获取全局颜色加载器实例
 * @returns 颜色加载器实例
 */
export function getColorLoader(): ColorLoader {
    if (!colorLoader) {
        colorLoader = new ColorLoader();
    }
    return colorLoader;
}
