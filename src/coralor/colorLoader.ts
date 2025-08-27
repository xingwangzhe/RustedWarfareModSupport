import * as fs from 'fs';
import * as path from 'path';
import { TypeColorMap } from './types';

/**
 * 颜色加载器类
 * 负责从配置文件加载类型颜色映射
 */
export class ColorLoader {
    private cachedMap: TypeColorMap | null = null;

    /**
     * 从 type.json 加载类型颜色映射（带缓存）
     */
    public loadTypeColors(): TypeColorMap {
        if (this.cachedMap) {
            return this.cachedMap;
        }

        try {
            const typePath = path.join(__dirname, '..', 'data', 'type.json');
            const typeData = JSON.parse(fs.readFileSync(typePath, 'utf8'));
            const colorMap: TypeColorMap = {};

            for (const type of typeData) {
                if (type && type.name && type.color && this.isValidColor(type.color)) {
                    colorMap[type.name] = type.color;
                }
            }

            this.cachedMap = colorMap;
            return colorMap;
        } catch (error) {
            console.error('Error loading type colors:', error);
            // 返回合理的默认颜色映射
            this.cachedMap = {
                'string': '#D9534F',
                'int': '#2A9DF4',
                'float': '#3AA0D8',
                'bool': '#28A745',
                'string(s)': '#E94B3C',
                'int(s)': '#1F78B4'
            };
            return this.cachedMap;
        }
    }

    /**
     * 根据类型名返回颜色，优先使用 type.json 中的精确匹配；否则按语义规则分组；再否则生成确定性的散列色
     */
    public getColor(typeName: string): string {
        const map = this.loadTypeColors();
        if (!typeName) {
            return '#888888';
        }

        // 精确匹配
        if (map[typeName]) {
            return map[typeName];
        }

        const key = typeName.toLowerCase();

        // 语义规则分组（优先顺序自上而下）
        const rules: Array<{ re: RegExp; color: string }> = [
            { re: /string|locale|name|text|message|leg\/arm/, color: '#D9534F' },
            { re: /int|float|number|degrees|static integer|logicnumber/, color: '#2A9DF4' },
            { re: /bool|true|false|logic|logicboolean/, color: '#28A745' },
            { re: /ref|id|ids|refs|action ids|marker ref|animation id/, color: '#7B2CBF' },
            { re: /price|cost|money/, color: '#D4A017' },
            { re: /effect|effects|decal|projectile|animation/, color: '#8E44AD' },
            { re: /sound|audio/, color: '#5EA14B' },
            { re: /resource|resources|customResource|dynamic resources|dynamic/, color: '#1E9A81' },
            { re: /time|seconds/, color: '#FF8C42' },
            { re: /point|point3d|marker|marker ref/, color: '#17A2B8' },
            { re: /tag|tags|tag ref/, color: '#8A5A44' },
            { re: /image|file/, color: '#9FA8DA' }
        ];

        for (const r of rules) {
            if (r.re.test(key)) {
                return r.color;
            }
        }

        // 最后使用确定性的 hash color，以保证同名保持一致
        return this.hashToColor(typeName);
    }

    private isValidColor(c: string) {
        return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(c);
    }

    private hashToColor(input: string) {
        // djb2 hash
        let hash = 5381;
        for (let i = 0; i < input.length; i++) {
            hash = (hash * 33) ^ input.charCodeAt(i);
        }
        const r = (hash & 0xFF0000) >> 16;
        const g = (hash & 0x00FF00) >> 8;
        const b = hash & 0x0000FF;
        const toHex = (v: number) => ('0' + (v & 0xFF).toString(16)).slice(-2);
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
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
