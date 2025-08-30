import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { TypeColorMap } from './types';
import { getExtensionId } from '../extension';

/**
 * 颜色加载器类
 * 负责从配置文件加载类型颜色映射，支持暗色和亮色主题
 */
export class ColorLoader {
    private cachedMap: TypeColorMap | null = null;
    private currentTheme: vscode.ColorThemeKind | null = null;

    /**
     * 从 type.json 加载类型颜色映射（带缓存，根据主题）
     */
    public loadTypeColors(): TypeColorMap {
        const activeTheme = vscode.window.activeColorTheme.kind;
        
        // 如果主题改变，清除缓存
        if (this.currentTheme !== activeTheme) {
            this.cachedMap = null;
            this.currentTheme = activeTheme;
        }

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

            // 根据当前主题选择颜色
            const isDarkTheme = activeTheme === vscode.ColorThemeKind.Dark || 
                               activeTheme === vscode.ColorThemeKind.HighContrast;

            for (const type of typeData) {
                if (type && type.name) {
                    let color = type.color; // 默认暗色
                    if (!isDarkTheme && type.color_light) {
                        color = type.color_light;
                    }
                    
                    if (color && this.isValidColor(color)) {
                        colorMap[type.name] = color;
                    }
                }
            }

            this.cachedMap = colorMap;
            return colorMap;
        } catch (error) {
            console.error('Error loading type colors:', error);
            // 返回合理的默认颜色映射，根据主题区分
            const isDarkTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark || 
                               vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.HighContrast;
            
            if (isDarkTheme) {
                this.cachedMap = {
                    'string': '#FF6B6B',
                    'int': '#4ECDC4',
                    'float': '#4ECDC4',
                    'bool': '#51CF66',
                    'string(s)': '#FF6B6B',
                    'int(s)': '#4ECDC4'
                };
            } else {
                this.cachedMap = {
                    'string': '#DC2626',
                    'int': '#0D9488',
                    'float': '#0D9488',
                    'bool': '#16A34A',
                    'string(s)': '#DC2626',
                    'int(s)': '#0D9488'
                };
            }
            return this.cachedMap;
        }
    }

    /**
     * 根据类型名返回颜色，优先使用 type.json 中的精确匹配；否则按语义规则分组；再否则生成确定性的散列色
     */
    public getColor(typeName: string): string {
        const map = this.loadTypeColors();
        if (!typeName) {
            const isDarkTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark || 
                               vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.HighContrast;
            return isDarkTheme ? '#94A3B8' : '#64748B'; // 根据主题返回不同的灰色
        }

        // 精确匹配
        if (map[typeName]) {
            return map[typeName];
        }

        const key = typeName.toLowerCase();
        const isDarkTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark || 
                           vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.HighContrast;

        // 语义规则分组（优先顺序自上而下）
        const rules: Array<{ re: RegExp; darkColor: string; lightColor: string }> = [
            { re: /string|locale|name|text|message|leg\/arm/, darkColor: '#FF6B6B', lightColor: '#DC2626' },
            { re: /int|float|number|degrees|static integer|logicnumber/, darkColor: '#4ECDC4', lightColor: '#0D9488' },
            { re: /bool|true|false|logic|logicboolean/, darkColor: '#51CF66', lightColor: '#16A34A' },
            { re: /ref|id|ids|refs|action ids|marker ref|animation id/, darkColor: '#A855F7', lightColor: '#7C3AED' },
            { re: /price|cost|money/, darkColor: '#FBBF24', lightColor: '#D97706' },
            { re: /effect|effects|decal|projectile|animation/, darkColor: '#EC4899', lightColor: '#BE185D' },
            { re: /sound|audio/, darkColor: '#10B981', lightColor: '#059669' },
            { re: /resource|resources|customResource|dynamic resources|dynamic/, darkColor: '#06B6D4', lightColor: '#0891B2' },
            { re: /time|seconds/, darkColor: '#FF8A65', lightColor: '#C2410C' },
            { re: /point|point3d|marker|marker ref/, darkColor: '#F59E0B', lightColor: '#D97706' },
            { re: /tag|tags|tag ref/, darkColor: '#94A3B8', lightColor: '#64748B' },
            { re: /image|file/, darkColor: '#10B981', lightColor: '#059669' },
            { re: /unit|marker/, darkColor: '#6C5CE7', lightColor: '#4C1D95' },
            { re: /logic|event/, darkColor: '#EF4444', lightColor: '#DC2626' },
            { re: /field|key|value/, darkColor: '#F97316', lightColor: '#EA580C' },
            { re: /color|hex/, darkColor: '#8B5CF6', lightColor: '#7C3AED' },
            { re: /enum|memory|draw|style|relation/, darkColor: '#64748B', lightColor: '#475569' },
            { re: /attachment|leg|arm|frame/, darkColor: '#F472B6', lightColor: '#DB2777' },
            { re: /list|array|collection|items/, darkColor: '#FBBF24', lightColor: '#D97706' }
        ];

        for (const r of rules) {
            if (r.re.test(key)) {
                return isDarkTheme ? r.darkColor : r.lightColor;
            }
        }

        // 最后使用确定性的 hash color，以保证同名保持一致
        return this.hashToColor(typeName);
    }

    private isValidColor(c: string) {
        return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(c);
    }

    private hashToColor(input: string) {
        const isDarkTheme = vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.Dark || 
                           vscode.window.activeColorTheme.kind === vscode.ColorThemeKind.HighContrast;
        
        // djb2 hash
        let hash = 5381;
        for (let i = 0; i < input.length; i++) {
            hash = (hash * 33) ^ input.charCodeAt(i);
        }
        
        // 根据主题调整hash值，确保不同主题下生成不同的颜色
        if (!isDarkTheme) {
            hash = (hash * 31) ^ 0xDEADBEEF; // 亮色主题的种子
        }
        
        const r = (hash & 0xFF0000) >> 16;
        const g = (hash & 0x00FF00) >> 8;
        const b = hash & 0x0000FF;
        
        // 根据主题调整颜色的亮度和饱和度
        let adjustedR = r;
        let adjustedG = g;
        let adjustedB = b;
        
        if (isDarkTheme) {
            // 暗色主题：提高亮度，确保在暗色背景下可见
            adjustedR = Math.min(255, r + 80);
            adjustedG = Math.min(255, g + 80);
            adjustedB = Math.min(255, b + 80);
        } else {
            // 亮色主题：降低亮度，确保在亮色背景下有对比度
            adjustedR = Math.max(0, r - 40);
            adjustedG = Math.max(0, g - 40);
            adjustedB = Math.max(0, b - 40);
        }
        
        const toHex = (v: number) => ('0' + (v & 0xFF).toString(16)).slice(-2);
        return `#${toHex(adjustedR)}${toHex(adjustedG)}${toHex(adjustedB)}`;
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
