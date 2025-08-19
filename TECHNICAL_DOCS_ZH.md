# RustedWarfare Mod Support 技术文档

## 概述

RustedWarfare Mod Support 是一个 VS Code 插件，为 Rusted Warfare 游戏模组开发提供智能代码补全和信息提示功能。该插件通过分析 Rusted Warfare 单位定义文件的结构，为开发者提供属性名、属性值和文档信息的自动补全。

## 核心组件

### 1. 插件入口 [extension.ts](./src/extension.ts)

这是插件的入口文件，负责注册所有功能组件：

- 文档符号解析器（Document Symbol Provider）
- 各种补全提供者（Completion Providers）
- 悬停信息提供者（Hover Provider）
- 语法高亮装饰器（Decorator）

### 2. 数据处理器 [dataProcessor.ts](./src/dataProcessor.ts)

该模块包含处理和分析文档内容的工具函数：

- `isInsideSection()` - 检查光标是否在特定节内
- `isAtValidLineStart()` - 检查光标是否在有效位置
- `hasColonInLine()` - 检查行中是否包含冒号
- `getSectionProperties()` - 获取节的属性定义
- `getBaseSectionName()` - 获取节的基本名称

### 3. 补全提供者 [completionProvider.ts](./src/completionProvider.ts)

这是插件的核心功能模块，包含所有属性补全相关的类：

#### 3.1 通用补全提供者

`GenericCompletionProvider` 是所有节补全提供者的基类，它：

- 检查当前光标位置是否在目标节内
- 验证光标位置是否适合输入属性名
- 获取节的属性定义
- 生成补全项列表

#### 3.2 特定节补全提供者

针对不同类型的节，插件提供了专门的补全提供者类：

- `CoreCompletionProvider` - core 节
- `CanBuildCompletionProvider` - canBuild_* 节
- `GraphicsCompletionProvider` - graphics 节
- `AttackCompletionProvider` - attack 节
- `TurretCompletionProvider` - turret_* 节
- `ProjectileCompletionProvider` - projectile_* 节
- `MovementCompletionProvider` - movement 节
- `AiCompletionProvider` - ai 节
- `LegArmCompletionProvider` - leg_* 和 arm_* 节
- `AttachmentCompletionProvider` - attachment_* 节
- `ActionCompletionProvider` - action_* 和 hiddenAction_* 节
- `EffectCompletionProvider` - effect_* 节
- `AnimationCompletionProvider` - animation_* 节
- `GlobalResourceCompletionProvider` - global_resource_* 节
- `ResourceCompletionProvider` - resource_* 节
- `DecalCompletionProvider` - decal_* 节
- `PlacementRuleCompletionProvider` - placementRule_* 节

#### 3.3 节名称补全提供者

`SectionNameCompletionProvider` 提供节名称的补全，当用户在方括号内输入时激活。

### 4. 属性值补全提供者 [valueComple/](./src/valueComple/)

该目录包含处理属性值补全的模块：

#### 4.1 基础值补全提供者 [BaseValueCompletionProvider.ts](./src/valueComple/BaseValueCompletionProvider.ts)

这是所有值补全提供者的基类，负责：

- 检测光标是否在属性值位置（冒号后）
- 识别当前节和属性
- 根据属性类型分发给具体提供者

#### 4.2 布尔值补全提供者 [BoolValueCompletionProvider.ts](./src/valueComple/BoolValueCompletionProvider.ts)

为布尔类型属性提供 true/false 补全。

#### 4.3 逻辑布尔值补全提供者 [LogicBooleanValueCompletionProvider.ts](./src/valueComple/LogicBooleanValueCompletionProvider.ts)

为逻辑布尔表达式提供补全支持。

#### 4.4 单位生成补全提供者 [UnitSpawnCompletionProvider.ts](./src/valueComple/UnitSpawnCompletionProvider.ts)

为单位生成属性提供单位名称补全。

#### 4.5 组合值补全提供者 [valueCompletionProvider.ts](./src/valueComple/valueCompletionProvider.ts)

整合所有值补全提供者，统一提供值补全功能。

### 5. 悬停信息提供者 [hoverProvider.ts](./src/hoverProvider.ts)

该模块提供悬停时显示的详细信息，当用户将鼠标悬停在属性上时显示属性的详细文档。

### 6. 装饰器 [decorator.ts](./src/decorator.ts)

提供语法高亮和视觉增强功能。

### 7. 节符号解析器 [Section.ts](./src/Section.ts)

解析文档结构，识别各个节的位置和范围。

## 数据文件结构

### 1. 节定义文件 [data/sections/](./data/sections/)

每个 JSON 文件定义一个节的属性：

```json
{
  "data": [
    {
      "name": "propertyName",
      "type": "BOOLEAN|STRING|INTEGER|FLOAT|LIST|etc",
      "description": "description_key",
      "version": "version_info",
      "example": "example_value",
      "isOutdated": false
    }
  ]
}
```

### 2. 翻译文件 [translation/](./translation/)

提供多语言支持，每个语言目录包含对应的翻译键值对。

### 3. 节索引文件 [data/sections.json](./data/sections.json)

定义所有可用节的名称和基本描述信息。

## 工作流程

### 1. 属性名补全流程

1. 用户在节内输入属性名
2. 对应的节补全提供者被激活
3. 检查光标位置是否合适
4. 获取节属性定义
5. 生成补全项列表并显示给用户

### 2. 属性值补全流程

1. 用户在属性名后输入冒号
2. 值补全提供者被激活
3. 识别当前节和属性
4. 根据属性类型提供相应值补全
5. 显示补全项给用户

### 3. 悬停信息显示流程

1. 用户将鼠标悬停在属性上
2. 悬停提供者被激活
3. 获取属性定义和文档信息
4. 格式化并显示详细信息

## 扩展性设计

插件采用模块化和数据驱动的设计，便于扩展：

1. 添加新节支持只需：
   - 创建节定义文件
   - 创建补全提供者类
   - 在入口文件中注册

2. 添加新属性值类型支持只需：
   - 继承 BaseValueCompletionProvider
   - 实现值补全逻辑
   - 注册到 ValueCompletionProvider

3. 属性定义完全通过数据文件管理，无需修改代码