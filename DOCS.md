# Rusted Warfare 模组支持插件技术文档

## 节补全和属性值补全工作原理详解

### 1. 节补全（Section Completion）

节补全是指在Rusted Warfare单位定义文件中，当用户在某个节（section）内部输入时，插件会提供该节支持的属性列表。

#### 1.1 实现原理

节补全主要通过以下组件实现：

1. **GenericCompletionProvider 类**：
   - 位于 [completionProvider.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/completionProvider.ts#L57-L83) 文件中
   - 这是一个通用的补全提供者类，负责为特定节提供属性补全
   - 它通过 `isInsideSection()` 函数判断当前光标是否在目标节内
   - 使用 `isAtValidLineStart()` 函数确保光标位置可以输入属性名
   - 使用 `hasColonInLine()` 函数检查当前行是否已经包含冒号，避免与属性值补全冲突

2. **节检测逻辑**：
   - `isInsideSection()` 函数（位于 [dataProcessor.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/dataProcessor.ts#L109-L120)）从文档开头遍历到光标所在行
   - 找到最近的节定义（以 `[` 开头，`]` 结尾的行）
   - 使用传入的匹配器函数判断是否为目标节

3. **位置检测逻辑**：
   - `isAtValidLineStart()` 函数（位于 [dataProcessor.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/dataProcessor.ts#L128-L138)）确保光标在行首或属性名输入位置
   - `hasColonInLine()` 函数（位于 [dataProcessor.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/dataProcessor.ts#L145-L149)）检查行中是否已经包含冒号

#### 1.2 节匹配器

不同的节类型使用不同的匹配器函数：

- 精确匹配：如 core 节使用 `(name: string) => name === 'core'`
- 前缀匹配：如 turret 节使用 `(name: string) => name.startsWith('turret_')`
- 正则匹配：如 action 节使用 `(name: string) => /^(action_|hiddenAction_)\w+/.test(name)`

#### 1.3 补全项生成

- `createCompletionItems()` 函数（位于 [completionProvider.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/completionProvider.ts#L35-L55)）根据属性数据生成补全项
- 使用 `generateCompletionDocumentation()` 函数为每个补全项生成详细的文档说明
- 插入文本使用 `SnippetString` 格式，包含示例值作为占位符

### 2. 属性值补全（Property Value Completion）

属性值补全是指当用户在属性名后输入冒号时，插件会根据属性类型提供相应的值补全建议。

#### 2.1 实现原理

属性值补全通过以下组件实现：

1. **ValueCompletionProvider 类**：
   - 位于 [valueComple/valueCompletionProvider.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/valueComple/valueCompletionProvider.ts#L11-L47) 文件中
   - 这是一个组合提供者，整合了各种特定类型的补全提供者
   - 目前包括 `BoolValueCompletionProvider` 和 `UnitSpawnCompletionProvider`

2. **BaseValueCompletionProvider 类**：
   - 位于 [valueComple/BaseValueCompletionProvider.ts](file:///home/xingwangzhe/桌面/rustedwarfaremodsupport/src/valueComple/BaseValueCompletionProvider.ts#L9-L85) 文件中
   - 这是一个抽象基类，提供了值补全的通用逻辑
   - 主要负责检测光标是否在属性值位置（冒号后面）
   - 确定当前所在的节和属性
   - 获取属性的类型信息

3. **具体值补全提供者**：
   - `BoolValueCompletionProvider`：为布尔类型属性提供 true/false 补全
   - `UnitSpawnCompletionProvider`：为单位生成属性提供单位名称补全

#### 2.2 值补全触发逻辑

1. **冒号检测**：
   - 在 `BaseValueCompletionProvider.provideCompletionItems()` 中检测光标前是否有冒号
   - 提取冒号前的属性名

2. **节和属性识别**：
   - 使用 `getCurrentSection()` 方法向上查找最近的节定义
   - 通过 `getSectionProperties()` 获取节的所有属性
   - 根据属性名查找对应的属性定义

3. **类型匹配和补全项生成**：
   - 根据属性的类型调用相应的补全项生成方法
   - 不同的提供者处理不同类型的属性值补全

#### 2.3 数据驱动设计

补全功能采用数据驱动的设计方式：

- 属性定义存储在 JSON 文件中（位于 `data/sections/` 目录）
- 节名称处理考虑了变体情况（如下划线后缀）
- 通过 `getBaseSectionName()` 函数统一处理节名称映射

### 3. 补全触发时机

1. **节补全触发**：
   - 光标在节内部
   - 光标在行首或属性名输入位置
   - 当前行未包含冒号

2. **属性值补全触发**：
   - 光标在冒号后面
   - 能够识别当前属性和节
   - 根据属性类型提供相应补全项

### 4. 扩展性设计

插件采用模块化和可扩展的设计：

1. 添加新的节类型只需创建新的 CompletionProvider 类
2. 添加新的属性值类型补全只需继承 BaseValueCompletionProvider 并实现 provideValueCompletionItems 方法
3. 属性定义通过 JSON 文件管理，便于维护和扩展