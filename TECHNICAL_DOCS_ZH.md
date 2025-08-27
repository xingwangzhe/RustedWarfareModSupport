# RustedWarfare Mod Support — 技术文档（中文）

本文档面向维护者与开发者，说明扩展的架构、数据格式与扩展点，以便快速定位实现并安全地添加新特性。

## 概览（高层）

- 插件以数据驱动为主：大多数补全项和悬停文本来自 `data/` 下的 JSON。
- 编辑器功能由 `src/` 中的小型提供者实现（completion/hover/decorator）。
- 构建流程依赖 `merge.js`（合并翻译/数据）和 `esbuild.js`（生产打包）。

## 关键模块说明

1) `src/extension.ts`
- 注册语言功能（补全、悬停、符号解析等）和激活事件。

2) `src/dataProcessor.ts`
- 文档解析与上下文识别工具函数，常用方法：
  - `isInsideSection(document, position, sectionName)`：判断光标是否处在某节范围内。
  - `isAtValidLineStart(lineText, position)`：判断是否适合补全属性名的位置。
  - `hasColonInLine(lineText)`：检测是否进入值位置。
  - `getSectionProperties(sectionName)`：读取并返回该节的属性定义。
  - `getBaseSectionName(fullSectionName)`：规范化节名（例如 `turret_basic` -> `turret`）。

3) `src/completionProvider.ts`
- 实现 `GenericCompletionProvider`（基类）和多个针对不同节类型的完成器。
- 职责：判断是否应激活、加载/过滤属性定义、生成 CompletionItem（含文档与插入文本）。

4) `src/valueComple/`
- 属性值补全提供者集合：
  - `BaseValueCompletionProvider.ts`：基类，负责调度与共享工具。
  - `BoolValueCompletionProvider.ts`：生成 `true` / `false` 补全。
  - `LogicBooleanValueCompletionProvider.ts`：为逻辑表达式提供片段建议。
  - `UnitSpawnCompletionProvider.ts`：基于数据建议单位名。
  - `valueCompletionProvider.ts`：集中调度不同值类型的提供者。

5) `src/hoverProvider.ts`
- 悬停时显示属性描述、示例、版本与弃用提示，翻译 key 会被解析为可读文本。

6) `src/decorator.ts` 与 `src/coralor/`
- 提供视觉修饰、颜色化与装饰器逻辑，增强可读性。

7) `src/Section.ts`
- 将文档解析为节范围与元数据，供各提供者查询使用。

## 数据与翻译格式

- `data/sections/<section>.json` — 节的属性定义，字段示例：

```json
{
  "data": [
    {
      "name": "drive",
      "type": "INTEGER",
      "description": "core.drive.description",
      "version": "1.10",
      "example": "18",
      "isOutdated": false
    }
  ]
}
```

- 翻译文件位于 `translation/<lang>/*.json`，翻译键由 `merge.js` 合并为最终输出，扩展使用翻译 key 以便国际化。

## 常见工作流

属性名补全：

1. 用户在节体内输入。完成器通过 `Section.ts` 确定当前节范围。
2. 使用 `dataProcessor.getSectionProperties()` 读取节的属性定义。
3. 根据上下文（是否已存在、光标位置等）过滤并返回补全项。

属性值补全：

1. 当用户输入 `:` 或光标到达值位置时，`valueCompletionProvider` 被触发。
2. 根据属性类型分发到对应的值提供者（布尔、单位、枚举等）。
3. 提供者返回带文档的建议项，必要时带 snippet 插入。

悬停：

1. 悬停触发后，提供者定位属性并读取其定义与翻译 key。
2. 解析翻译并生成含示例与版本说明的 Markdown 内容展示。

## 扩展步骤（如何添加功能）

1. 编辑或新增 `data/sections/*.json` 来声明新属性或节，描述字段应为翻译 key。
2. 如需新增值类型，在 `src/valueComple/` 下新增类，继承 `BaseValueCompletionProvider` 并实现 `provideValues()`，然后在 central registry 注册。
3. 如需节级别特殊行为，实现新的 completion provider（继承 `GenericCompletionProvider`），并在 `src/extension.ts` 注册。

## 构建与打包注意事项

- 在生产构建前，请运行 `merge.js`（或运行 `npm run merge-translations`），以确保翻译和合并数据是最新的；npm 脚本的 `pre*` 钩子会自动调用它。
- 使用 `esbuild.js` 进行生产打包，输出目录为 `dist/`，扩展入口为 `main: ./dist/extension.js`。

## 常见问题与排查

- 补全不出现：在 Extension Development Host（F5 打开）中查看控制台错误信息。
- 翻译不更新：执行 `npm run merge-translations` 并重启调试主机。

## 简明契约（Contract）

- 输入：编辑器文档文本，光标位置，仓库 `data/` 与 `translation/` JSON 数据。
- 输出：CompletionItem 列表、Hover 内容、装饰范围。

## 边界情况

- 大文件：提供者仅在节级别范围内工作以避免全局扫描性能问题。
- 未知节名：尝试以 base section 的定义作为回退。
- 弃用属性：`isOutdated` 字段会在悬停与补全提示中标注。

需要查看具体函数或文件实现细节时，告诉我你想定位的功能或符号，我会列出精确的函数名和使用位置。