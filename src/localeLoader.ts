import * as fs from 'fs';
import * as path from 'path';

/**
 * 加载并聚合所有本地化文件
 * @param lang 语言代码 (例如: 'zh-cn', 'en', 'ja')
 * @param dir 本地化文件目录路径
 * @returns 聚合后的本地化数据对象
 */
export function loadLocale(lang: string, dir: string = path.join(__dirname, '..', 'translation', 'locales')): Record<string, string> {
    try {
        // 查找所有匹配的语言文件
        const files = fs.readdirSync(dir).filter(f => 
            f.startsWith(`bundle.l10n.${lang}`) && f.endsWith('.json')
        );
        
        // 如果没有找到特定语言的文件，使用默认的英文文件
        if (files.length === 0 && lang !== 'en') {
            return loadLocale('en', dir);
        }
        
        let localeData: Record<string, string> = {};
        
        // 读取并合并所有文件
        for (const file of files) {
            const filePath = path.join(dir, file);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            Object.assign(localeData, data);
        }
        
        return localeData;
    } catch (error) {
        console.error('Error loading locale files:', error);
        return {};
    }
}

/**
 * 按需加载特定模块的本地化数据
 * @param lang 语言代码
 * @param module 模块名称
 * @param dir 本地化文件目录路径
 * @returns 特定模块的本地化数据对象
 */
export function loadLocaleForModule(
    lang: string, 
    module: string, 
    dir: string = path.join(__dirname, '..', 'translation', 'locales')
): Record<string, string> {
    try {
        const fileName = `bundle.l10n.${lang}.part.${module}.json`;
        const filePath = path.join(dir, fileName);
        
        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } else if (lang !== 'en') {
            // 回退到英文版本
            return loadLocaleForModule('en', module, dir);
        }
        
        return {};
    } catch (error) {
        console.error(`Error loading locale for module ${module}:`, error);
        return {};
    }
}

/**
 * 预加载并缓存所有本地化数据
 * @param supportedLanguages 支持的语言列表
 * @param dir 本地化文件目录路径
 * @returns 所有语言的本地化数据映射
 */
export function preloadAllLocales(
    supportedLanguages: string[] = ['en'],
    dir: string = path.join(__dirname, '..', 'translation', 'locales')
): Record<string, Record<string, string>> {
    const allLocales: Record<string, Record<string, string>> = {};
    
    for (const lang of supportedLanguages) {
        allLocales[lang] = loadLocale(lang, dir);
    }
    
    return allLocales;
}