# 更新日志 / Changelog

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
