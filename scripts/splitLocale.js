const fs = require('fs');
const path = require('path');

// 确保翻译目录存在
const translationDir = path.join(__dirname, '..', 'translation');
const localeDir = path.join(translationDir, 'locales');
if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
}

// 读取主翻译文件
const mainBundlePath = path.join(translationDir, 'bundle.l10n.json');
const mainBundle = JSON.parse(fs.readFileSync(mainBundlePath, 'utf8'));

// 按类别分组翻译键
const groupedTranslations = {};

// 定义分组规则
const groupRules = {
    'core': ['data.sections.core'],
    'modinfo': ['data.sections.mod-info'],
    'resource': ['data.sections.resource', 'data.sections.global_resource'],
    'combat': ['data.sections.attack', 'data.sections.turret', 'data.sections.projectile'],
    'movement': ['data.sections.movement', 'data.sections.leg', 'data.sections.arm'],
    'ai': ['data.sections.ai', 'data.sections.canBuild'],
    'graphics': ['data.sections.graphics', 'data.sections.animation', 'data.sections.effect'],
    'logic': ['data.sections.action', 'data.sections.hiddenAction', 'data.sections.logicBoolean'],
    'misc': ['data.sections.template', 'data.sections.decal', 'data.sections.comment', 'data.sections.prices', 'data.sections.spawnUnits', 'data.sections.spawnProjectiles'],
    'completion': ['completionprovider', 'valuecompletionprovider'],
    'base': ['Hello World from RustedWarfareModSupport!', 'Congratulations, your extension "rustedwarfaremodsupport" is now active!']
};

// 初始化分组
Object.keys(groupRules).forEach(group => {
    groupedTranslations[group] = {};
});

// 将翻译键分配到各个组
Object.keys(mainBundle).forEach(key => {
    let assigned = false;
    
    // 根据规则分配到组
    for (const [group, prefixes] of Object.entries(groupRules)) {
        if (prefixes.some(prefix => key.startsWith(prefix))) {
            groupedTranslations[group][key] = mainBundle[key];
            assigned = true;
            break;
        }
    }
    
    // 如果没有匹配任何规则，放入misc组
    if (!assigned) {
        groupedTranslations['misc'][key] = mainBundle[key];
    }
});

// 将每个组写入单独的文件
Object.entries(groupedTranslations).forEach(([group, translations]) => {
    if (Object.keys(translations).length > 0) {
        const filePath = path.join(localeDir, `bundle.l10n.part.${group}.json`);
        fs.writeFileSync(filePath, JSON.stringify(translations, null, 2));
        console.log(`Created ${filePath} with ${Object.keys(translations).length} entries`);
    }
});

console.log('Localization files split successfully!');