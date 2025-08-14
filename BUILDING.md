# Building and Packaging the Extension

## 编译和打包扩展

This document explains how to compile and package the RustedWarfareModSupport extension for distribution.

本文档介绍了如何编译和打包 RustedWarfareModSupport 扩展以供分发。

### Prerequisites

### 先决条件

- [Node.js](https://nodejs.org/) version 16 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

- [Node.js](https://nodejs.org/) 16 或更高版本
- [npm](https://www.npmjs.com/)（随 Node.js 一起提供）

### Development Build

### 开发构建

To compile the extension for development:

要为开发编译扩展：

```bash
npm run compile
```

This command:
1. Checks TypeScript types
2. Runs ESLint for code linting
3. Bundles the extension using esbuild

该命令会：
1. 检查 TypeScript 类型
2. 运行 ESLint 进行代码检查
3. 使用 esbuild 打包扩展

### Watch Mode

### 监视模式

For continuous development with automatic rebuilding when files change:

在文件更改时自动重新构建的持续开发模式：

```bash
npm run watch
```

This will watch both TypeScript files and run esbuild in watch mode.

这将同时监视 TypeScript 文件并在监视模式下运行 esbuild。

### Production Package

### 生产打包

To create a production-ready package:

创建生产就绪的包：

```bash
npm run package
```

This command:
1. Checks TypeScript types
2. Runs ESLint for code linting
3. Bundles and minifies the extension using esbuild in production mode

该命令会：
1. 检查 TypeScript 类型
2. 运行 ESLint 进行代码检查
3. 在生产模式下使用 esbuild 打包并压缩扩展

The output will be in the `dist` folder as `extension.js`.

输出将在 [dist](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/dist) 文件夹中，文件名为 [extension.js](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/dist/extension.js)。

### Testing

### 测试

To run tests:

运行测试：

```bash
npm test
```

### Publishing

### 发布

Before publishing to the marketplace, make sure to run:

在发布到市场之前，请确保运行：

```bash
npm run vscode:prepublish
```

This will automatically run the package script to create a production build.

这将自动运行打包脚本以创建生产构建。

### Structure

### 结构

- `src/` - TypeScript source files
- `dist/` - Compiled output (generated)
- `l10n/` - Localization files
- `esbuild.js` - Build configuration

- [src/](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/src) - TypeScript 源文件
- [dist/](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/dist) - 编译输出（生成的）
- [l10n/](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/l10n) - 本地化文件
- [esbuild.js](file:///home/xingwangzhe/%E6%A1%8C%E9%9D%A2/rustedwarfaremodsupport/esbuild.js) - 构建配置

The extension uses esbuild for fast bundling and minification.

扩展使用 esbuild 进行快速打包和压缩。