import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { TypeColorMap, ThemeKind } from './types';
import { getExtensionId } from '../extension';

/**
 * 颜色加载器类
 * 负责从配置文件加载类型颜色映射，支持主题感知
 */
export class ColorLoader {
    private cachedColors: Map<ThemeKind, TypeColorMap> = new Map();

    /**
     * 获取当前VS Code主题类型
     */
    private getCurrentThemeKind(): ThemeKind {
        const config = vscode.workspace.getConfiguration();
        const theme = config.get<string>('workbench.colorTheme', '');

        // 检测主题类型
        if (theme.toLowerCase().includes('light') || theme.toLowerCase().includes('white')) {
            return 'light';
        } else if (theme.toLowerCase().includes('high contrast')) {
            return theme.toLowerCase().includes('light') ? 'highContrastLight' : 'highContrast';
        } else {
            return 'dark';
        }
    }

    /**
     * 从 type.json 加载主题感知的颜色映射
     */
    public loadTypeColors(): TypeColorMap {
        const themeKind = this.getCurrentThemeKind();

        if (this.cachedColors.has(themeKind)) {
            return this.cachedColors.get(themeKind)!;
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

            // 根据主题类型选择颜色
            const colorMap: TypeColorMap = {};
            for (const type of typeData) {
                if (type && type.name && type.color && this.isValidColor(type.color)) {
                    // 如果有主题特定的颜色，使用它；否则使用默认颜色
                    const themeColor = type[`color_${themeKind}`] || type.color;
                    colorMap[type.name] = themeColor;
                }
            }

            this.cachedColors.set(themeKind, colorMap);
            return colorMap;
        } catch (error) {
            console.error('Error loading type colors:', error);
            // 返回合理的默认颜色映射
            const defaultColors = this.getDefaultColors(themeKind);
            this.cachedColors.set(themeKind, defaultColors);
            return defaultColors;
        }
    }

    /**
     * 获取指定主题的默认颜色
     */
    private getDefaultColors(themeKind: ThemeKind): TypeColorMap {
        if (themeKind === 'light') {
            return {
                'string': '#C53030',
                'int': '#2C5282',
                'float': '#2A4365',
                'bool': '#2F855A',
                'string(s)': '#E53E3E',
                'int(s)': '#3182CE'
            };
        } else {
            // 暗色主题
            return {
                'string': '#FC8181',
                'int': '#63B3ED',
                'float': '#4299E1',
                'bool': '#68D391',
                'string(s)': '#FEB2B2',
                'int(s)': '#90CDF4'
            };
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
        const themeKind = this.getCurrentThemeKind();

        // 语义规则分组（优先顺序自上而下）
        const rules = this.getSemanticRules(themeKind);

        for (const r of rules) {
            if (r.re.test(key)) {
                return r.color;
            }
        }

        // 最后使用确定性的 hash color，以保证同名保持一致
        return this.hashToColor(typeName);
    }

    /**
     * 获取主题特定的语义规则
     */
    private getSemanticRules(themeKind: ThemeKind): Array<{ re: RegExp; color: string }> {
        if (themeKind === 'light') {
            // 亮色主题 - 使用更深的颜色以获得更好的对比度
            return [
                { re: /string|locale|name|text|message|leg\/arm/, color: '#C53030' },
                { re: /int|float|number|degrees|static integer|logicnumber/, color: '#2C5282' },
                { re: /bool|true|false|logic|logicboolean/, color: '#2F855A' },
                { re: /ref|id|ids|refs|action ids|marker ref|animation id/, color: '#553C9A' },
                { re: /price|cost|money/, color: '#B7791F' },
                { re: /effect|effects|decal|projectile|animation/, color: '#805AD5' },
                { re: /sound|audio/, color: '#2F855A' },
                { re: /resource|resources|customResource|dynamic resources|dynamic/, color: '#2C7A7B' },
                { re: /time|seconds/, color: '#C05621' },
                { re: /point|point3d|marker|marker ref/, color: '#00B5D8' },
                { re: /tag|tags|tag ref/, color: '#4A5568' },
                { re: /image|file/, color: '#00B5D8' }
            ];
        } else {
            // 暗色主题 - 使用更亮的颜色以获得更好的对比度
            return [
                { re: /string|locale|name|text|message|leg\/arm/, color: '#FC8181' },
                { re: /int|float|number|degrees|static integer|logicnumber/, color: '#63B3ED' },
                { re: /bool|true|false|logic|logicboolean/, color: '#68D391' },
                { re: /ref|id|ids|refs|action ids|marker ref|animation id/, color: '#9F7AEA' },
                { re: /price|cost|money/, color: '#F6AD55' },
                { re: /effect|effects|decal|projectile|animation/, color: '#B794F6' },
                { re: /sound|audio/, color: '#48BB78' },
                { re: /resource|resources|customResource|dynamic resources|dynamic/, color: '#4FD1C5' },
                { re: /time|seconds/, color: '#F6AD55' },
                { re: /point|point3d|marker|marker ref/, color: '#76E4F7' },
                { re: /tag|tags|tag ref/, color: '#A0AEC0' },
                { re: /image|file/, color: '#76E4F7' }
            ];
        }
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
