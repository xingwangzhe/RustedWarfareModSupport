# 更新日志 / Changelog

## [1.5.19] - 2025-08-29

### ✨ 新增功能 / New Features
- 🛠️ **跨平台路径兼容性** - 全面支持Windows、Linux、macOS的路径格式
  - **自动路径规范化**：将反斜杠路径自动转换为当前平台格式
  - **智能路径检测**：识别并处理多种路径格式
  - **跨平台补全建议**：
    - Windows：同时提供 `ROOT:\images\icon.png` 和 `ROOT:/images/icon.png`
    - Linux/macOS：提供标准正斜杠格式 `ROOT:/images/icon.png`
  - **支持的路径格式**：
    - 相对路径：`images/icon.png`,`images\icon.png`
    - ROOT前缀：`ROOT:/images/icon.png` 或 `ROOT:\images\icon.png`

### 🔧 技术改进 / Technical Improvements
- 📦 新增 `PathCompatibilityUtils` 工具类，提供统一的跨平台路径处理
- 🔄 重构图片路径解析逻辑，使用标准ES模块导入
- 🧹 代码清理：删除不必要的测试文件，优化项目结构

### 🐛 修复 / Fixes
- ✅ 修复 `require('path').sep` 的模块导入问题，使用标准import语法
- ✅ 改进hover显示图片时的路径处理，确保跨平台兼容性

## 1.5.17

- 多语言支持
- multi-language support



---
- 之前日志忘记录了，故遗失
- i forgot to update the changelog, so it's lost


- 节，键值，预览图片，内存上下文实现
- Section, key-value, preview image, memory context implementation