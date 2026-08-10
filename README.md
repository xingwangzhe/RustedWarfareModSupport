> 🤖 感谢 GitHub Copilot 在代码开发过程中提供的智能辅助和支持！
> 🤖 Thanks to GitHub Copilot for intelligent assistance and support during development!

> 欢迎给仓库点个 ⭐，您的支持是我们持续开发的动力！
> Welcome to star this repository ⭐, your support motivates us to keep improving!

# RustedWarfare Mod Support

欢迎在群聊交流 RustedWarfare 模组开发

QQ:GMBOX 的 mod 群: [1006360455](https://qm.qq.com/q/3ivoMQepwA)

![Rustedwarfare](https://corrodinggames.com/images/rw-title.png)

[![版本 / Version](https://img.shields.io/badge/version-1.9.58-blue)](CHANGELOG.md)
[![许可证 / License](https://img.shields.io/badge/license-AGPL--3.0-green.svg)](LICENSE.md)

> 安装本插件前，请先更新 VS Code 到最新版本，以避免插件兼容性过期问题。
> Before installing this extension, please update VS Code to the latest version to avoid compatibility expiration issues.

> 📋 [更新日志 / Changelog](CHANGELOG.md) | 🐛 [报告问题 / Report Issues](https://github.com/xingwangzhe/RustedWarfareModSupport/issues)

一款 RustedWarfare 模组开发工具，在编辑器内提供智能补全、文档提示、代码格式化、颜色/图片预览与 Mod 导出，支持多语言界面。

A RustedWarfare mod development toolkit for VS Code, providing in-editor intelligent completions, documentation hints, code formatting, color/image previews and mod export with multi-language UI.

## 功能特性 / Features

### 智能补全 / Intelligent Completion

- **节属性自动补全**：绝大部分节的属性键自动补全，附悬停信息（说明、示例、版本、弃用提示）

- **Section property completion**: property-key autocompletion for most sections, with hover info (description, example, version, deprecation notes)

![complete_section](for_readmeuse/complete_section.webp)

- **节折叠**：代码大纲折叠，快速定位

- **Section folding**: outline folding for quick navigation

![sections_folding](for_readmeuse/sections_folding.webp)

- **属性值自动补全**：布尔值、逻辑布尔表达式、单位生成、列表/枚举/类型特定值的补全

- **Property value completion**: boolean, logic-boolean expressions, unit spawn, list/enum/type-specific values

![showpng1](for_readmeuse/showpng1.webp)

![showpng2](for_readmeuse/showpng2.webp)

- **内存值补全**：`@memory` 变量定义与使用上下文感知补全

- **Memory value completion**: context-aware completion for `@memory` variables

![memory1](for_readmeuse/easymemory1.webp)

- **`mod-info.txt` 识别与补全**：自动识别并补全 mod 信息文件

- **`mod-info.txt` support**: automatic recognition and completion for mod-info files

### 文档提示 / Documentation Hints

- 属性键悬停提示：说明、示例、版本、弃用标记

- Hover hints for property keys: description, example, version, deprecation

- 逻辑布尔函数/方法悬停文档

- Hover docs for logic-boolean functions and self-methods

### 颜色与图片预览 / Color & Image Previews

- **颜色值实时预览**：十六进制颜色（`#AARRGGBB` / `#RRGGBB`）在编辑器中着色并悬停预览

- **Live color previews**: hex colors tinted in the editor with hover swatches

- **图片预览**：`image` 属性路径的图片悬停预览（支持相对路径与 `ROOT:` 前缀）

- **Image previews**: hover previews for image paths (relative and `ROOT:`-prefixed)

### 代码格式化 / Code Formatting

- INI 文件格式化：对齐键值、规范化分隔符与括号空格，保留注释/空行/节结构与键顺序

- Conservative INI formatting: aligns keys/values, normalizes separators and parenthesis spacing while preserving comments, blank lines, section structure and key order

- 右键菜单一键格式化

- Right-click "Format INI File" command

### 侧边栏管理面板 / Sidebar Panel

- 左侧边栏管理自定义文件后缀：添加、删除、管理自定义文件扩展名

- Manage custom file extensions (add / remove / configure) via the sidebar panel

### Mod 导出 / Mod Export

- 一键导出 Mod 包（ZIP / RWMOD），支持直接选择导出目录或自动导出

- One-click mod export (ZIP / RWMOD) with direct-folder or automatic export

## 多语言 / Multi-language

内置多语言翻译（中文、English、Deutsch、Français、Español、日本語、한국어 等 14 种），跟随 VS Code 显示语言自动切换。

Built-in l10n for 14 languages, automatically matching the VS Code display language.

## 参考资料 / References

- NDT 代码表 / NDT code table

- Google 代码表 / Google code table

- [RWini_Plugin](https://github.com/Blackburn507/RWini_Plugin) 部分语法高亮 / partial syntax highlighting

- INI 代码高亮 v0.99 — 娱乐部部长

- 部分枚举属性 — GMBOX

您可以通过在 [GitHub](https://github.com/xingwangzhe/RustedWarfareModSupport) 上提交问题来改进本插件。

You can improve this extension by submitting issues on [GitHub](https://github.com/xingwangzhe/RustedWarfareModSupport).

## 许可证 / License

本插件遵循 AGPL-3.0 协议（详见仓库 LICENSE.md）。

This extension is licensed under AGPL-3.0 (see LICENSE.md in the repository).

## 赞助 / Sponsor

如果这个扩展对你有帮助，欢迎扫码赞助，感谢支持！

If this extension helps you, feel free to scan the QR code to sponsor us. Thanks for your support!

<p align="center">
  <img src="https://xingwangzhe.fun/ali_pay.webp" alt="支付宝赞赏码 / Alipay" width="220" />
  <img src="https://xingwangzhe.fun/wechat_pay.webp" alt="微信赞赏码 / WeChat Pay" width="220" />
</p>
