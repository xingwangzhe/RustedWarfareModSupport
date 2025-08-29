import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { TypeColorMap } from './types';
import { getExtensionId } from '../extension';

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
            // 获取扩展的实际路径
            const extension = vscode.extensions.getExtension(getExtensionId());
            if (!extension) {
                console.error('Cannot find extension');
                throw new Error('Cannot find extension');
            }

            const extensionPath = extension.extensionPath;
            const typePath = path.join(extensionPath, 'data', 'type.json');
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
                'string': '#E53E3E',
                'int': '#3182CE',
                'float': '#2C5282',
                'bool': '#38A169',
                'string(s)': '#FC8181',
                'int(s)': '#63B3ED'
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
            { re: /string|locale|name|text|message|leg\/arm/, color: '#E53E3E' },
            { re: /int|float|number|degrees|static integer|logicnumber/, color: '#3182CE' },
            { re: /bool|true|false|logic|logicboolean/, color: '#38A169' },
            { re: /ref|id|ids|refs|action ids|marker ref|animation id/, color: '#805AD5' },
            { re: /price|cost|money/, color: '#D69E2E' },
            { re: /effect|effects|decal|projectile|animation/, color: '#9F7AEA' },
            { re: /sound|audio/, color: '#48BB78' },
            { re: /resource|resources|customResource|dynamic resources|dynamic/, color: '#319795' },
            { re: /time|seconds/, color: '#DD6B20' },
            { re: /point|point3d|marker|marker ref/, color: '#00B5D8' },
            { re: /tag|tags|tag ref/, color: '#718096' },
            { re: /image|file/, color: '#00B5D8' }
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
