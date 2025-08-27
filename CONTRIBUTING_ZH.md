# RustedWarfare Mod Support — 贡献者指南（中文）

感谢您愿意为 RustedWarfare Mod Support 做贡献。本指南描述了仓库结构、推荐开发环境、常用脚本、修改位置、验证步骤以及提交 PR 的建议流程。

## 本文档覆盖的要点

- 开发环境与前置条件
- 如何运行、构建与打包扩展
- 可修改的位置（翻译、数据、代码）
- 在 Extension Development Host 中测试的步骤
- 提交 PR 的要求与建议

## 前置条件

- Node.js（推荐使用 LTS 版本，如 22.x）。
- npm（随 Node.js 提供）。bun 可选以加速安装/构建流程。
- 可选：全局安装 `vsce` 用于生成 VSIX：`npm i -g @vscode/vsce`。

## 项目主要目录

- `src/` — TypeScript 源代码，包含补全、悬停、装饰器与属性值补全模块。
- `data/` — 数据驱动的节定义与示例 JSON，控制自动补全与说明文本。
- `translation/` — 翻译源文件；`merge.js` 将多个翻译文件合并为最终 l10n 输出。
- `syntaxes/` — 语法文件与文件名识别（用于 `mod-info.txt`）。
- `esbuild.js` 与 `merge.js` — 打包/合并脚本。
- `package.json` — 脚本与扩展元数据。

## 常用 npm 脚本（摘自 `package.json`）

- `npm run compile` — TypeScript 构建（`tsc -b`）。
- `npm run watch` — 合并翻译后运行 `tsc -b -w`（增量编译）。
- `npm run watch:esbuild` — 合并翻译后运行 `esbuild.js --watch`（使用 esbuild 实时打包）。
- `npm run package` — 运行类型检查、lint，然后用 esbuild 生成生产包。
- `npm run merge-translations` — 执行 `merge.js`，合并翻译文件。
- `npm run package:vsix` — 合并翻译并执行 `vsce package` 生成 VSIX。

使用例子：

```bash
npm install
npm run watch:esbuild
# 或者在另一个终端里直接按 F5 调试
```

## 开发流程（推荐）

1. Fork 并 clone 仓库。
2. 安装依赖：`npm install`（或 `bun install`）。
3. 启动监听构建：`npm run watch` 或 `npm run watch:esbuild`。
4. 在 VS Code 中打开项目并按 F5，使用 Extension Development Host 测试补全与悬停。
5. 迭代开发并在 Host 窗口中验证变更。

注意：脚本中的 `pre*` 钩子会自动运行 `merge.js`，确保翻译和合并数据是最新的。

## 可修改的内容和位置

- 翻译：`translation/en/` 与 `translation/zh-cn/`，编辑后运行 `npm run merge-translations`。
- 节定义：`data/sections/*.json`，新增或更新属性定义（字段需遵循现有文件结构）。
- 值补全：`src/valueComple/` 中添加或修改值补全提供者，并在值补全注册器中注册。
- 节补全：在 `src/completionProvider.ts` 中添加新的完成器类，如有需要在 `src/extension.ts` 注册。

## 测试、类型检查与 lint

- 类型检查：`npm run check-types`。
- Lint：`npm run lint`。
- 测试：`npm test`（运行 `vscode-test`）。

在提交 PR 之前，请确保本地通过类型检查、lint，并在 Extension Development Host 中做基本手动验证。

## 新增节的具体步骤

1. 在 `data/sections/` 下创建 `<sectionName>.json`，参考已有 JSON 文件字段：name/type/description/example/version/isOutdated。
2. 如需额外逻辑，创建或扩展 `src/` 下的补全提供者类（可继承 `GenericCompletionProvider`）。
3. 在 `src/extension.ts` 中注册该提供者（使其在对应节名出现时生效）。
4. 更新翻译条目并运行 `npm run merge-translations`。
5. 构建并在 Extension Development Host 中验证。

## 提交 PR

1. 使用描述性分支名（例如 `feature/add-foo-section`）。
2. PR 描述中写明变更和验证步骤，若添加数据文件请附示例用法。
3. 在本地运行 `npm run lint` 与 `npm run check-types` 并修正问题后再提交。

PR 建议：
- 变更粒度小，单一责任优先
- 优先数据驱动变更（修改 `data/` 与 `translation/`）而非大面积重构
- 适当添加测试以减少回归

如有疑问或需要设计讨论，请在 Issue 中描述复现步骤和预期行为。

感谢你的贡献！