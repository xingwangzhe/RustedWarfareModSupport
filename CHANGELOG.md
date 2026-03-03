# 更新日志 / Changelog

## [1.9.51] - 2026-03-03

- fix the placementRule
- 修复 placementRule 的问题

## [1.9.50] - 2026-03-01

- 性能优化：添加 getCurrentSection 文档级缓存，避免重复遍历
- 性能优化：为 findSectionByName 添加 name→index 映射缓存，O(n) → O(1)
- 性能优化：优化 findSectionPathByMetadata，改为启动时预扫描 sections 目录
- 性能优化：MemoryManager 添加防抖和版本检查，减少重复解析
- 性能优化：ValueCompletionProvider 延迟初始化，首次使用时才创建 provider 实例
- 性能优化：翻译结果添加 LRU 缓存（500条上限）
- 性能优化：精简补全触发字符，从 50+ 减少到 2-3 个
- 性能优化：iniFormatter 预编译正则表达式

### Notes

- Performance: Added document-level cache for getCurrentSection to avoid repeated traversal
- Performance: Added name→index mapping cache for findSectionByName, O(n) → O(1)
- Performance: Optimized findSectionPathByMetadata with startup pre-scan of sections directory
- Performance: MemoryManager added debounce and version check to reduce redundant parsing
- Performance: ValueCompletionProvider lazy initialization
- Performance: Added LRU cache for translation results (500 entries max)
- Performance: Simplified completion trigger characters from 50+ to 2-3
- Performance: Pre-compiled regular expressions in iniFormatter

## [1.8.50] - 2026-03-01

- 重构 LogicBoolean 点链补全逻辑：当 `.` 前为 `self` 时显示 `self.function`，否则显示 `function`，并统一避免重复插入 `self.`。
- 修复单位/标记引用链式调用中的补全与替换行为（如 `eventSource.`、`eventSource.has`、`eventSource.self` 等场景）。
- 改进 LogicBoolean 链式悬停：支持带/不带 `()` 的模糊匹配；链式表达式按光标所在片段显示 hover，避免整链信息堆叠。

### Notes

- Reworked LogicBoolean dot-chain completion: show `self.function` when the token before `.` is `self`, otherwise show `function`, while preventing duplicated `self.` insertion.
- Fixed completion behavior for unit/marker reference chains (such as `eventSource.`, `eventSource.has`, and `eventSource.self`).
- Improved LogicBoolean chain hover with fuzzy matching (with/without `()`), and show hover for the hovered segment only instead of merging the whole chain.

## [1.8.48] - 2026-02-15

- 增加 INI 文件右键格式化支持：在编辑器右键菜单新增 `Format INI File` 命令并实现保守格式化（分隔符紧贴键名、分隔符后保留一个空格、节内移除多余空行、节间保留单空行），保留注释与键值顺序。
- 调整扩展激活策略：采用现代贡献声明按需激活命令和语言，移除不必要的显式 `activationEvents`。

### Notes

- Added context-menu formatting command for INI files and conservative formatter implementation.

## [1.7.48] - 2025-12-12

- 修复一些翻译错误
- fix the bug of transltion

## [1.7.47] - 2025-12-08

- 添加颜色预览本地化说明，支持 `#AARRGGBB`、`#RRGGBB`、简写 `#ARGB`/`#RGB` 格式
- 新增翻译键 `data.value.color.formats`（已添加 `en` 与 `zh-cn` 示例）并合并翻译包
- 若干小修与翻译同步

- Add localized color preview note and support for `#AARRGGBB`, `#RRGGBB`, shorthand `#ARGB`/`#RGB`
- Added translation key `data.value.color.formats` (examples added for `en` and `zh-cn`) and merged bundles
- Misc small fixes and translation sync

## [1.7.46] - 2025-11-30

## [1.7.46] - 2025-11-30

- 将 VS Code 引擎要求提升至 `^1.106.1`，对齐最新稳定版 API
- 更新类型定义与 Lint 工具链（@types/vscode、@types/node、TS ESLint 系列）保持构建稳定
- bump 扩展版本并重新打包 VSIX，确保商店提交的元数据最新

- Raised VS Code engine requirement to `^1.106.1` to match the latest stable API
- Refreshed type definitions and linting toolchain (@types/vscode, @types/node, TS ESLint) for a reliable build
- Bumped the extension version and rebuilt the VSIX so marketplace metadata stays current

## [1.7.44] - 2025-11-30

- 将 `canOnlyAttackUnitsWithoutTags` 的中文翻译统一为“不要攻击带特定标签单位”，避免歧义
- 将 `isActive` 翻译调整为“可用”，准确反映动作可用状态
- 将 `delayedStartTimer` 翻译更新为“延迟时间/延遲時間”，提升可读性

- Align `canOnlyAttackUnitsWithoutTags` Chinese wording to “don’t attack units with specific tags” for clarity
- Update `isActive` translation to “available” to reflect actual behavior
- Refresh `delayedStartTimer` wording to “delay duration” across Chinese locales for better readability

## [1.7.43] - 2025-11-22

- 延迟初始化补全、悬停、面板等耗时模块，加快扩展激活速度
- 为数据解析与翻译加载新增内存缓存，减少重复 IO
- 图片装饰与值补全增加节流/索引，并可按需输出性能日志
- 重写构建脚本：并行生成语法与翻译、启用 esbuild 增量构建
- 新增配置 `rustedwarfaremodsupport.enablePerfLogs` 便于诊断性能

- Lazily initialize completion, hover, and panel modules to speed up activation
- Add in-memory caches for data parsing and translations to cut repeated IO
- Throttle image decorators and value completions, with optional performance logging
- Rework build scripts to parallelize syntax/translation generation and enable incremental esbuild
- Introduce `rustedwarfaremodsupport.enablePerfLogs` setting for easier diagnostics

## [1.7.42] - 2025-11-22

- 修复构建依赖
- fix the depec~

## [1.7.41] - 2025-11-19

- 修复翻译问题：将 onActions 翻译从"触发动作"改为"动画条件"（Issue #9）
- 修复翻译问题：将 alpha 翻译从"Alpha"改为"透明度"（Issue #8）
- 提升用户体验，使中文翻译更加准确易懂

- Fixed translation issue: Changed onActions translation from "trigger action" to "animation condition" (Issue #9)
- Fixed translation issue: Changed alpha translation from "Alpha" to "transparency" (Issue #8)
- Improved user experience with more accurate and understandable Chinese translations

## [1.7.40] - 2025-11-04

- 修正动画帧重放的翻译文本
- 添加导出命令支持，增强导出功能并更新本地化文本
- 移除所有require陈旧语法，转换为ES6模块语法
- 解决循环依赖问题，优化代码结构

- Fixed animation frame replay translation text
- Added export command support, enhanced export functionality and updated localization text
- Removed all require legacy syntax, converted to ES6 module syntax
- Resolved circular dependency issues, optimized code structure

## [1.7.35] - 2025-10-13

- 修复字符串高亮
- fix the highlight for string

## [1.7.34] - 2025-10-6

- 修复翻译键一致性问题，移除logicboolean.json中所有错误的.description后缀
- 清理翻译文件中多余的翻译键，确保翻译键与原始键完全匹配
- 更新Copilot指令文档，添加严格的翻译键管理规定，禁止使用.description后缀
- 建立翻译键验证流程，确保每次翻译添加都经过验证
- 修正LogicBoolean补全中self.前缀重复bug，并过滤掉不合适的算术运算符

- Fixed translation key consistency issues, removed all incorrect .description suffixes from logicboolean.json
- Cleaned up extra translation keys in translation files to ensure perfect matching with original keys
- Updated Copilot instruction documentation with strict translation key management rules prohibiting .description suffixes
- Established translation key validation process to ensure all translation additions are verified
- Fixed LogicBoolean completion self. prefix duplication bug and filtered out inappropriate arithmetic operators

## [1.7.33] - 2025-10-4

- 更新npm依赖
- Update npm dependencies

```bash
↑ @types/node 22.18.0 → 22.18.8
↑ @typescript-eslint/eslint-plugin 8.41.0 → 8.45.0
↑ @typescript-eslint/parser 8.41.0 → 8.45.0
↑ eslint 9.34.0 → 9.37.0
↑ typescript 5.9.2 → 5.9.3
```

## [1.7.32] - 2025-9-24

- 修复系统性翻译键缺失问题，为所有值补全提供者添加完整的多语言翻译支持（27个翻译键，13种语言）
- 解决值补全详情显示错误翻译键的问题，现在显示正确的本地化文本

- Fixed systematic missing translation keys issue, added comprehensive multilingual translation support for all value completion providers (27 translation keys, 13 languages)
- Resolved value completion detail display showing incorrect translation keys, now displays proper localized text

## [1.7.31] - 2025-9-20

- 修复值补全提供者参数类型不一致问题
- 更新AI指南文档

- Fix parameter type inconsistency in value completion providers
- Update AI guide documentation

## [1.7.30] - 2025-9-19

- 补全一些枚举类
- 添加缺失的翻译键

- Complete some enum classes
- Add missing translation keys

## [1.7.29] - 2025-09-15

- 添加数据驱动语法高亮系统，基于项目数据文件自动生成语法高亮规则，支持所有17个节类型和969个属性
- 精简图片装饰器，保留图片图标显示功能，移除复杂的着色器系统，提升性能
- 性能优化，使用startsWith()替代正则表达式进行节匹配
- 构建流程自动化，集成语法生成到构建流程
- 代码架构优化，重构装饰器系统，专注核心功能，减少代码复杂度
- 修复语法高亮配置，修复scopeName不匹配问题，移除单引号字符串错误识别
- 改进节名匹配算法，支持复杂的多下划线节名
- 移除复杂着色器系统，保留核心图片图标显示功能

- Data-driven syntax highlighting system, automatically generate syntax highlighting rules based on project data files, supporting all 17 section types and 969 properties
- Streamlined image decorator, retain image icon display functionality while removing complex colorizer system for better performance
- Performance optimization, replace regex with startsWith() for section matching
- Automated build process, integrate syntax generation into build pipeline
- Code architecture optimization, refactored decorator system to focus on core functionality and reduce code complexity
- Fixed syntax highlighting configuration, fixed scopeName mismatch and removed incorrect single quote string recognition
- Enhanced section name matching to support complex multi-underscore patterns
- Removed complex colorizer system while preserving core image icon display

## [1.7.28] - 2025-09-15

修正匹配方法，使用更简单的`startsWiths()`匹配节，同时优化了性能
Fixed matching method, using simpler `startsWith()` for section matching while optimizing performance

## [1.7.27] - 2025-09-14

- 添加完整的autoTriggerOnEvent枚举值补全支持
- 更新CI/CD工作流，支持手动触发构建和自动创建发布草稿
- 修复三引号注释块语法高亮问题，完全重构注释检测逻辑
- 改进多行值块检测准确性，避免误判注释为属性值
- 修复节名称在特定上下文中的解析问题
- 完善INI文件的语法高亮规则，改进注释和多行块的识别
- 实现基于状态机的注释检测逻辑，准确区分注释块和多行字符串值
- 重构装饰器工厂的注释处理逻辑，提高代码可维护性
- 为新功能添加完整的多语言翻译支持（14种语言）

- Added comprehensive autoTriggerOnEvent enum value completion support
- Updated CI/CD workflow with manual trigger support and automatic release draft creation
- Fixed triple-quote comment block syntax highlighting issue with complete refactoring of comment detection logic
- Improved multiline value block detection accuracy to prevent misidentifying comments as property values
- Fixed section name parsing issues in specific contexts
- Enhanced TextMate syntax rules for INI files with improved comment and multiline block recognition
- Implemented state machine-based comment detection to accurately distinguish comment blocks from multiline string values
- Refactored decorator factory's comment handling logic for better maintainability
- Added comprehensive multilingual translation support for new features (14 languages)

## [1.7.25] - 2025-09-07

- 增强图片预览功能，在hover和补全中同时显示图片路径和预览
- 提取图片预览逻辑到公共函数，提高代码复用性
- 修复补全列表中图片预览无法正确显示的问题
- 改进图片路径解析逻辑，支持更多路径格式

- Enhanced image preview functionality, display both image path and preview in hover and completion
- Extract image preview logic into public functions for better code reusability
- Fixed image preview display issues in completion list
- Improved image path resolution logic with better format support

## [1.7.24] - 2025-09-07

- 添加节流机制限制装饰更新频率，避免过度触发
- 优化装饰更新逻辑，只更新有变化的装饰类型
- 添加装饰类型跟踪，自动清除不需要的装饰
- 修复节名称补全时的上下文位置问题
- 解决@符号的重复补全问题

- Added throttling to limit decoration update frequency and prevent excessive triggering
- Optimized decoration updates to only refresh changed decoration types
- Added decoration type tracking with automatic cleanup of unused decorations
- Fixed section name context completion positioning
- Fixed duplicate @ completion issue

## [1.7.23] - 2025-08-31

- 面板现在可以导出模组为.zip 和.rwmod 格式
- The panel can now export mods as .zip and .rwmod files

## [1.6.23] - 2025-08-30

- 更易阅读的颜色高对比度
- Improved color contrast for better readability

## [1.6.22] - 2025-08-29

- 自定义翻译实现，弃用 vscode 翻译 api，修正 en 翻译问题
- Custom translation implementation, abandoning vscode translation API, fixing en translation issues
- 更友好的颜色高亮
- Improved color highlighting for better readability

## [1.6.20] - 2025-08-29

- **面板提供后缀选项，额外的后缀支持**  
  通过左侧边栏的面板来实现配置后缀，用户可以方便地添加、删除和管理自定义文件后缀。
- **panel support for custom file extensions**  
  The panel now supports managing custom file extensions through the sidebar.

## [1.5.20] - 2025-08-29

- 支持逗号分隔的多个图片路径显示
- 全面支持Windows、Linux、macOS的路径格式
- 支持的路径格式：相对路径images/icon.png、images\icon.png，ROOT前缀ROOT:/images/icon.png或ROOT:\images\icon.png
- 修复require('path').sep的模块导入问题，使用标准import语法
- 改进hover显示图片时的路径处理，确保跨平台兼容性

- Support for displaying multiple image paths separated by commas
- Fully compatible with Windows, Linux, and macOS path formats
- Supported path formats: relative path images/icon.png, images\icon.png, ROOT prefix ROOT:/images/icon.png or ROOT:\images\icon.png
- Fixed module import issue for require('path').sep, now using standard import syntax
- Improved path handling when displaying images on hover, ensuring cross-platform compatibility

## 1.5.17

- 多语言支持 / Multi-language support

---

- 之前日志忘记录了，故遗失 / Previous logs were lost due to missing updates
- i forgot to update the changelog, so it's lost

- 节，键值，预览图片，内存上下文实现 / Section, key-value, preview image, memory context implementation
- 节，键值，预览图片，内存上下文实现 / Section, key-value, preview image, memory context implementation
- 节，键值，预览图片，内存上下文实现 / Section, key-value, preview image, memory context implementation
