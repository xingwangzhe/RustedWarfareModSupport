/**
 * 基于数据集自动生成语法高亮规则
 * 这个脚本读取 data/ 文件夹中的数据，自动生成优化的语法高亮配置
 */

const fs = require('fs');
const path = require('path');

class SyntaxGenerator {
    constructor() {
        this.dataPath = path.join(__dirname, '..', 'data');
        this.sectionsData = this.loadSectionsData();
        this.typeData = this.loadTypeData();
        this.propertyData = this.loadPropertyData();
    }

    loadSectionsData() {
        const sectionsPath = path.join(this.dataPath, 'sections.json');
        return JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));
    }

    loadTypeData() {
        const typePath = path.join(this.dataPath, 'type.json');
        return JSON.parse(fs.readFileSync(typePath, 'utf8'));
    }

    loadPropertyData() {
        const sectionsDir = path.join(this.dataPath, 'sections');
        const propertyData = {};
        
        fs.readdirSync(sectionsDir).forEach(file => {
            if (file.endsWith('.json')) {
                const sectionName = path.basename(file, '.json');
                const filePath = path.join(sectionsDir, file);
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                propertyData[sectionName] = data.data || [];
            }
        });
        
        return propertyData;
    }

    generateSectionPatterns() {
        const patterns = [];
        
        // 特殊节处理
        const specialSections = {
            'core': 'core',
            'graphics': 'standard', 
            'attack': 'standard',
            'movement': 'standard',
            'ai': 'standard',
            'Prices/Resources': 'prices'
        };

        // 带下划线的节
        const underscoreSections = [
            'action', 'hiddenAction', 'turret', 'projectile', 'attachment', 
            'effect', 'animation', 'leg', 'arm', 'resource', 'global_resource',
            'decal', 'canBuild', 'placementRule', 'template'
        ];

        // 冒号分隔的节
        const colonSections = ['spawnUnits', 'spawnProjectiles'];

        // 生成特殊节的模式
        for (const [section, type] of Object.entries(specialSections)) {
            patterns.push({
                match: `^\\s*\\[(${this.escapeRegex(section)})\\]`,
                name: `entity.name.section.${type}.ini`,
                captures: {
                    "1": { name: `keyword.control.section.${type}.ini` }
                }
            });
        }

        // 生成下划线节的模式
        underscoreSections.forEach(section => {
            patterns.push({
                match: `^\\s*\\[(${section})_([^\\]]+)\\]`,
                name: `entity.name.section.${section}.ini`,
                captures: {
                    "1": { name: `keyword.control.section.${section}.ini` },
                    "2": { name: `variable.parameter.section.${section}.ini` }
                }
            });
        });

        // 生成冒号节的模式
        colonSections.forEach(section => {
            patterns.push({
                match: `^\\s*\\[${section}:([^\\]]+)\\]`,
                name: `entity.name.section.${section}.ini`,
                captures: {
                    "1": { name: `variable.parameter.section.${section}.ini` }
                }
            });
        });

        // 通用节匹配
        patterns.push({
            match: "^\\s*\\[([^\\]]+)\\]",
            name: "entity.name.section.generic.ini",
            captures: {
                "1": { name: "variable.other.section.generic.ini" }
            }
        });

        return patterns;
    }

    generatePropertyPatterns() {
        const patterns = {};
        
        // 按类型分组属性
        const typeGroups = {};
        
        Object.entries(this.propertyData).forEach(([_sectionName, properties]) => {
            properties.forEach(prop => {
                const type = this.normalizeType(prop.type);
                if (!typeGroups[type]) {
                    typeGroups[type] = new Set();
                }
                typeGroups[type].add(prop.name);
            });
        });

        // 为每种类型生成关键字列表
        Object.entries(typeGroups).forEach(([type, propertiesSet]) => {
            const properties = Array.from(propertiesSet).sort();
            const scopeName = this.getTypeScope(type);
            
            patterns[type] = {
                match: `\\b(${properties.map(this.escapeRegex).join('|')})\\s*(:)`,
                captures: {
                    "1": { name: `variable.other.property.${scopeName}.ini` },
                    "2": { name: "punctuation.separator.keyvalue.ini" }
                }
            };
        });

        return patterns;
    }

    generateEnumPatterns() {
        const valueData = path.join(this.dataPath, 'value');
        const enumPatterns = [];
        
        if (fs.existsSync(valueData)) {
            fs.readdirSync(valueData).forEach(file => {
                if (file.endsWith('.json')) {
                    const enumName = path.basename(file, '.json');
                    const filePath = path.join(valueData, file);
                    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    
                    if (data.data && Array.isArray(data.data)) {
                        const values = data.data.map(item => 
                            typeof item === 'string' ? item : item.name || item.value
                        ).filter(Boolean);
                        
                        if (values.length > 0) {
                            enumPatterns.push({
                                match: `\\b(${values.map(this.escapeRegex).join('|')})\\b`,
                                name: `constant.language.enum.${enumName}.ini`
                            });
                        }
                    }
                }
            });
        }

        return enumPatterns;
    }

    generateLogicExpressionPatterns() {
        return {
            patterns: [
                {
                    match: "\\b(self|memory\\.\\w+|resource\\.\\w+|null|index|thisActionTarget|eventSource|activeWaypointTarget|customTarget[12])\\b",
                    name: "variable.language.logic.ini"
                },
                {
                    match: "\\.(x|y|z|dir|speed|maxMoveSpeed|size|teamId|id|builtAmount|hp|maxHp|maxShield|maxEnergy|height|ammo|energy|shield|kills|isFlying|isMoving|underwater|flying|completed)\\b",
                    name: "variable.other.property.logic.ini"
                },
                {
                    match: "\\b(distance|distanceSquared|min|max|sin|cos|rnd|direction|squareRoot|int|length)(?=\\()",
                    name: "support.function.math.logic.ini"
                },
                {
                    match: "\\b(nearestUnit|globalSearchForFirstUnit|attachment|transporting|numberOfUnitsInTeam|hasUnitInTeam|readUnitMemory|createMarker)(?=\\()",
                    name: "support.function.unit.logic.ini"
                },
                {
                    match: "\\b(and|or|not)\\b",
                    name: "keyword.operator.logical.logic.ini"
                },
                {
                    match: "(<=|>=|<|>|==|!=|=|\\+|-|/|\\*|%)",
                    name: "keyword.operator.comparison.logic.ini"
                },
                {
                    match: "\\b(true|false|if)\\b",
                    name: "constant.language.boolean.logic.ini"
                },
                {
                    match: "\\b(select)(?=\\()",
                    name: "support.function.control.logic.ini"
                }
            ]
        };
    }

    generateValueTypePatterns() {
        return {
            patterns: [
                {
                    include: "#multistring"
                },
                {
                    include: "#logicExpression"
                },
                {
                    match: "\\b(true|false|0|1)\\b",
                    name: "constant.language.boolean.ini"
                },
                {
                    match: "\\b(?:-)?(?:NaN|Infinity|\\d*\\.\\d+|\\d+)\\b",
                    name: "constant.numeric.ini"
                },
                {
                    match: "\\b(?:-)?(?:NaN|Infinity|\\d*\\.\\d+|\\d+)(?:s|ms)?\\b",
                    name: "constant.numeric.time.ini"
                },
                {
                    match: "#[0-9a-fA-F]{6}\\b",
                    name: "constant.other.color.hex.ini"
                },
                ...this.generateEnumPatterns(),
                {
                    match: "\\b(ROOT:)?[^\\s,]+\\.(ini|txt|template|png|jpg|jpeg|ogg|wav|mp3)\\b",
                    name: "string.other.filepath.ini"
                },
                {
                    match: "\\$\\{[^}]+\\}",
                    name: "variable.other.placeholder.ini"
                },
                {
                    begin: "\"",
                    end: "\"",
                    name: "string.quoted.double.ini",
                    patterns: [{ include: "#logicExpression" }]
                }
            ]
        };
    }

    generateCompleteSyntax() {
        return {
            name: "RustedWarfare INI",
            scopeName: "source.ini",
            patterns: [
                { include: "#multilineComment" },
                { include: "#commentSection" },
                { include: "#multistring" },
                { include: "#comment" },
                { include: "#section" },
                { include: "#templateKey" },
                { include: "#memoryDefinition" },
                { include: "#keyvalue" }
            ],
            repository: {
                multistring: {
                    begin: "\"\"\"",
                    end: "\"\"\"",
                    name: "string.quoted.triple.ini",
                    patterns: [
                        { include: "#logicExpression" },
                        { include: "#filePath" },
                        { include: "#customVariable" }
                    ]
                },
                multilineComment: {
                    begin: "^\\s*\"\"\"",
                    end: "\"\"\"",
                    name: "comment.block.ini",
                    contentName: "comment.block.ini"
                },
                commentSection: {
                    begin: "^\\s*\\[comment_[^\\]]*\\]",
                    end: "(?=^\\s*\\[[^\\]]*\\])",
                    name: "comment.block.section.ini",
                    contentName: "comment.block.content.ini",
                    patterns: [
                        {
                            match: ".*",
                            name: "comment.block.ini"
                        }
                    ]
                },
                comment: {
                    match: "#.*$",
                    name: "comment.line.number-sign.ini"
                },
                section: {
                    patterns: this.generateSectionPatterns()
                },
                templateKey: {
                    patterns: [
                        {
                            match: "^\\s*(@(?:copyFromSection|copyFrom_skipThisSection)):\\s*(.*)$",
                            captures: {
                                "1": { name: "keyword.control.template.ini" },
                                "2": { name: "variable.parameter.template.ini" }
                            }
                        },
                        {
                            match: "^\\s*(@(?:define|global))\\b",
                            name: "keyword.control.template.ini"
                        },
                        {
                            match: "(?<!\\w+:\\s*)(@\\w+)",
                            name: "keyword.control.template.ini"
                        }
                    ]
                },
                memoryDefinition: {
                    match: "^\\s*@memory\\s+(\\w+)\\s*:\\s*(unit|float|boolean|bool|number|string)(\\[\\])?",
                    captures: {
                        "1": { name: "variable.other.memory.name.ini" },
                        "2": { name: "storage.type.memory.type.ini" },
                        "3": { name: "storage.modifier.memory.array.ini" }
                    }
                },
                keyvalue: {
                    begin: "^\\s*([A-Za-z0-9_\\.\\-]+)\\s*(:)",
                    beginCaptures: {
                        "1": { name: "variable.other.key.ini" },
                        "2": { name: "punctuation.separator.keyvalue.ini" }
                    },
                    end: "$",
                    name: "meta.key-value.ini",
                    patterns: [
                        { include: "#valueTypes" },
                        { include: "#comment" }
                    ]
                },
                valueTypes: this.generateValueTypePatterns(),
                logicExpression: this.generateLogicExpressionPatterns(),
                filePath: {
                    patterns: [
                        {
                            match: "\\b(ROOT:)?[^\\s,]+\\.(ini|txt|template|png|jpg|jpeg|ogg|wav|mp3)\\b",
                            name: "string.other.filepath.ini"
                        }
                    ]
                },
                customVariable: {
                    patterns: [
                        {
                            match: "\\$\\{[^}]+\\}",
                            name: "variable.other.placeholder.ini"
                        },
                        {
                            match: "\\bmemory\\.\\w+\\b",
                            name: "variable.other.memory.ini"
                        },
                        {
                            match: "\\bresource\\.\\w+\\b",
                            name: "variable.other.resource.ini"
                        }
                    ]
                }
            }
        };
    }

    // 辅助方法
    escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    normalizeType(type) {
        if (!type) {
            return 'unknown';
        }
        
        const normalizedType = type.toLowerCase()
            .replace(/\s*\/\s*s$/, '') // 移除 "/ s" 后缀
            .replace(/\([^)]*\)/g, '') // 移除括号内容
            .replace(/\s+/g, '') // 移除空格
            .split('/')[0] // 取第一个类型
            .split(',')[0]; // 取第一个选项
            
        // 类型映射
        const typeMap = {
            'int': 'number',
            'float': 'number', 
            'number': 'number',
            'static integer': 'number',
            'logicnumber': 'number',
            'degrees': 'number',
            'bool': 'boolean',
            'boolean': 'boolean',
            'logicboolean': 'boolean',
            'price': 'price',
            'customprice': 'price',
            'time': 'time',
            'timeseconds': 'time',
            'string': 'string',
            'strings': 'string',
            'localestring': 'string',
            'enum': 'enum',
            'file': 'file',
            'image': 'file',
            'sound': 'file',
            'tags': 'tags',
            'memory': 'memory'
        };
        
        return typeMap[normalizedType] || 'unknown';
    }

    getTypeScope(type) {
        const scopeMap = {
            'number': 'numeric',
            'boolean': 'boolean', 
            'price': 'price',
            'time': 'time',
            'string': 'string',
            'enum': 'enum',
            'file': 'file',
            'tags': 'tags',
            'memory': 'memory',
            'unknown': 'generic'
        };
        
        return scopeMap[type] || 'generic';
    }

    // 主要方法
    generate() {
        console.log('Generating data-driven syntax highlighting configuration...');
        
        const syntax = this.generateCompleteSyntax();
        
        // 直接写入到最终的语法文件位置
        const outputPath = path.join(__dirname, '..', 'syntaxes', 'ini.tmLanguage.json');
        fs.writeFileSync(outputPath, JSON.stringify(syntax, null, 2), 'utf8');
        
        console.log(`Syntax highlighting configuration generated: ${outputPath}`);
        
        // 输出简单统计信息到控制台
        const stats = this.calculateStats();
        console.log('Syntax statistics:', stats);
        
        return syntax;
    }

    calculateStats() {
        const stats = {
            sectionsCount: this.sectionsData.data.length,
            totalProperties: Object.values(this.propertyData).reduce((sum, props) => sum + props.length, 0),
            propertiesBySection: Object.fromEntries(
                Object.entries(this.propertyData).map(([name, props]) => [name, props.length])
            )
        };

        // 统计类型分布
        const typeDistribution = {};
        Object.values(this.propertyData).forEach(properties => {
            properties.forEach(prop => {
                const type = this.normalizeType(prop.type);
                typeDistribution[type] = (typeDistribution[type] || 0) + 1;
            });
        });
        stats.typeDistribution = typeDistribution;

        return stats;
    }
}

// 运行生成器
if (require.main === module) {
    const generator = new SyntaxGenerator();
    generator.generate();
}

module.exports = SyntaxGenerator;