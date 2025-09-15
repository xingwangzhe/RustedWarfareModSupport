# 更新日志 / Changelog

## [1.7.29] - 2025-09-15

### ✨ 新增功能 / New Features

- **数据驱动语法高亮系统**  
  基于项目数据文件自动生成语法高亮规则，支持所有17个节类型和969个属性  
  **Data-driven Syntax Highlighting System**  
  Automatically generate syntax highlighting rules based on project data files, supporting all 17 section types and 969 properties

- **精简图片装饰器**  
  保留图片图标显示功能，移除复杂的着色器系统，提升性能  
  **Streamlined Image Decorator**  
  Retain image icon display functionality while removing complex colorizer system for better performance

### 🔧 技术改进 / Technical Improvements

- **性能优化**  
  使用 `startsWith()` 替代正则表达式进行节匹配，显著提升性能  
  **Performance Optimization**  
  Replace regex with `startsWith()` for section matching, significantly improving performance

- **构建流程自动化**  
  集成语法生成到构建流程，自动化开发和发布过程  
  **Automated Build Process**  
  Integrate syntax generation into build pipeline for automated development and release

- **代码架构优化**  
  重构装饰器系统，专注核心功能，减少代码复杂度  
  **Code Architecture Optimization**  
  Refactored decorator system to focus on core functionality and reduce code complexity

### 🐛 修复 / Fixes

- ✅ **语法高亮配置修复**  
   修复 scopeName 不匹配问题，移除单引号字符串错误识别  
   Fixed scopeName mismatch and removed incorrect single quote string recognition

- ✅ **多下划线节名支持**  
   改进节名匹配算法，支持复杂的多下划线节名（如 `[attachment_word1_word2]`）  
   Enhanced section name matching to support complex multi-underscore patterns

### 🗑️ 移除功能 / Removed Features

- **复杂着色器系统**  
  移除 `src/coralor/` 文件夹中的复杂着色器功能，保留核心图片图标显示  
  **Complex Colorizer System**  
  Removed complex colorizer functionality from `src/coralor/` folder while preserving core image icon display

## [1.7.28] - 2025-09-15

修正匹配方法，使用更简单的`startsWiths()`匹配节，同时优化了性能

## [1.7.27] - 2025-09-14

### ✨ 新增功能 / New Features

- **AutoTriggerOnEvent 枚举支持**  
  添加了完整的 autoTriggerOnEvent 枚举值补全支持  
  **AutoTriggerOnEvent Enum Support**  
  Added comprehensive autoTriggerOnEvent enum value completion support

- **构建流程优化**  
  更新 CI/CD 工作流，支持手动触发构建和自动创建发布草稿  
  **Build Process Enhancement**  
  Updated CI/CD workflow with manual trigger support and automatic release draft creation

### 🐛 修复 / Fixes

- ✅ **三引号注释块语法高亮修复**  
   完全重构了注释检测逻辑，解决三引号注释块仍显示属性装饰的问题  
   Fixed triple-quote comment block syntax highlighting issue with complete refactoring of comment detection logic

- ✅ **多行值块检测优化**  
   改进了多行块的检测准确性，避免误判注释为属性值  
   Improved multiline value block detection accuracy to prevent misidentifying comments as property values

- ✅ **节名称解析修复**  
   修复节名称在特定上下文中的解析问题  
   Fixed section name parsing issues in specific contexts

- ✅ **TextMate 语法规则完善**  
   完善了 INI 文件的语法高亮规则，改进注释和多行块的识别  
   Enhanced TextMate syntax rules for INI files with improved comment and multiline block recognition

### 🔧 技术改进 / Technical Improvements

- **状态机注释检测**  
  实现了基于状态机的注释检测逻辑，准确区分注释块和多行字符串值  
  **State Machine Comment Detection**  
  Implemented state machine-based comment detection to accurately distinguish comment blocks from multiline string values

- **装饰器逻辑重构**  
  重构了装饰器工厂的注释处理逻辑，提高代码可维护性  
  **Decorator Logic Refactoring**  
  Refactored decorator factory's comment handling logic for better maintainability

- **多语言翻译扩展**  
  为新功能添加了完整的多语言翻译支持（14 种语言）  
  **Multilingual Translation Extension**  
  Added comprehensive multilingual translation support for new features (14 languages)

## [1.7.25] - 2025-09-07

### ✨ 新增功能 / New Features

- **图片预览功能增强**  
  在 hover 和补全中同时显示图片路径和预览  
  **Enhanced Image Preview**  
  Display both image path and preview in hover and completion

- **公共函数重构**  
  提取图片预览逻辑到公共函数，提高代码复用性  
  **Public Function Refactoring**  
  Extract image preview logic into public functions for better code reusability

### 🐛 修复 / Fixes

- ✅ **修复图片补全预览显示问题**  
   解决补全列表中图片预览无法正确显示的问题  
   Fixed image preview display issues in completion list

- ✅ **优化图片路径解析**  
   改进图片路径解析逻辑，支持更多路径格式  
   Improved image path resolution logic with better format support

## [1.7.24] - 2025-09-07

### ⚡ 性能优化 / Performance Improvements

- **节流机制优化**  
  添加节流机制限制装饰更新频率，避免过度触发  
  **Throttling Mechanism**  
  Added throttling to limit decoration update frequency and prevent excessive triggering

- **增量装饰更新**  
  优化装饰更新逻辑，只更新有变化的装饰类型  
  **Incremental Decoration Updates**  
  Optimized decoration updates to only refresh changed decoration types

- **智能装饰管理**  
  添加装饰类型跟踪，自动清除不需要的装饰  
  **Smart Decoration Management**  
  Added decoration type tracking with automatic cleanup of unused decorations

### 🐛 修复 / Fixes

- ✅ **修正节名称上下文补全位置**  
   修复节名称补全时的上下文位置问题  
   Fixed section name context completion positioning

- ✅ **修复@重复补全**  
   解决@符号的重复补全问题  
   Fixed duplicate @ completion issue

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

### ✨ 新增功能 / New Features

- **多图片路径支持**  
  支持逗号分隔的多个图片路径显示  
  **Multiple Image Path Support**  
  Support for displaying multiple image paths separated by commas

- **跨平台路径兼容性**  
  全面支持 Windows、Linux、macOS 的路径格式  
  **Cross-platform Path Compatibility**  
  Fully compatible with Windows, Linux, and macOS path formats

- **支持的路径格式**  
  相对路径：`images/icon.png`,`images\icon.png`  
  ROOT 前缀：`ROOT:/images/icon.png` 或 `ROOT:\images\icon.png`  
  **Supported Path Formats**  
  Relative path: `images/icon.png`, `images\icon.png`  
  ROOT prefix: `ROOT:/images/icon.png` or `ROOT:\images\icon.png`

### 🐛 修复 / Fixes

- ✅ 修复 `require('path').sep` 的模块导入问题  
   使用标准 import 语法  
   Fixed module import issue for `require('path').sep`  
   Now using standard import syntax

- ✅ 改进 hover 显示图片时的路径处理  
   确保跨平台兼容性  
   Improved path handling when displaying images on hover  
   Ensuring cross-platform compatibility

## 1.5.17

- 多语言支持 / Multi-language support

---

- 之前日志忘记录了，故遗失 / Previous logs were lost due to missing updates
- i forgot to update the changelog, so it's lost

- 节，键值，预览图片，内存上下文实现 / Section, key-value, preview image, memory context implementation
- 节，键值，预览图片，内存上下文实现 / Section, key-value, preview image, memory context implementation
