# 更新日志 / Changelog

## [1.7.23] - 2025-08-31

- 面板现在可以导出模组为.zip和.rwmod格式
- The panel can now export mods as .zip and .rwmod files

## [1.6.23] - 2025-08-30

- 更易阅读的颜色高对比度 
- Improved color contrast for better readability

## [1.6.22] - 2025-08-29

- 自定义翻译实现，弃用vscode翻译api，修正en翻译问题
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
