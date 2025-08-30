const fs = require('fs');
const path = require('path');

// 简单的颜色加载器测试（模拟VS Code环境）
console.log('Testing theme-aware color system...');

// 读取type.json文件
const typePath = path.join(__dirname, 'data', 'type.json');
let typeData = [];

try {
    const data = fs.readFileSync(typePath, 'utf8');
    typeData = JSON.parse(data);
    console.log(`Loaded ${typeData.length} type definitions from type.json`);
} catch (error) {
    console.error('Error loading type.json:', error);
    process.exit(1);
}

// 模拟主题检测
function getCurrentThemeKind(themeName) {
    if (themeName.toLowerCase().includes('light') || themeName.toLowerCase().includes('white')) {
        return 'light';
    } else if (themeName.toLowerCase().includes('high contrast')) {
        return themeName.toLowerCase().includes('light') ? 'highContrastLight' : 'highContrast';
    } else {
        return 'dark';
    }
}

// 模拟颜色获取
function getColor(typeName, themeKind) {
    if (!typeName) {
        return '#888888';
    }

    // 查找精确匹配
    for (const type of typeData) {
        if (type && type.name === typeName) {
            // 如果有主题特定的颜色，使用它；否则使用默认颜色
            return type[`color_${themeKind}`] || type.color || '#888888';
        }
    }

    // 语义规则分组
    const key = typeName.toLowerCase();
    const semanticRules = getSemanticRules(themeKind);

    for (const rule of semanticRules) {
        if (rule.re.test(key)) {
            return rule.color;
        }
    }

    // 生成确定性的hash颜色
    return hashToColor(typeName);
}

function getSemanticRules(themeKind) {
    if (themeKind === 'light') {
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

function hashToColor(input) {
    let hash = 5381;
    for (let i = 0; i < input.length; i++) {
        hash = (hash * 33) ^ input.charCodeAt(i);
    }
    const r = (hash & 0xFF0000) >> 16;
    const g = (hash & 0x00FF0000) >> 8;
    const b = hash & 0x0000FF;
    const toHex = (v) => ('0' + (v & 0xFF).toString(16)).slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 测试不同主题
const testThemes = ['Default Dark Modern', 'Default Light Modern', 'Default High Contrast'];

for (const theme of testThemes) {
    const themeKind = getCurrentThemeKind(theme);
    console.log(`\n=== Testing theme: ${theme} (${themeKind}) ===`);

    const testTypes = ['string', 'int', 'bool', 'price', 'effect', 'resource', 'time'];

    for (const type of testTypes) {
        const color = getColor(type, themeKind);
        console.log(`  ${type.padEnd(12)}: ${color}`);
    }
}

console.log('\n=== Theme-aware color system test completed successfully! ===');
