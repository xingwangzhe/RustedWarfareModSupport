# RustedWarfare Mod Support 贡献者指南

感谢您对 RustedWarfare Mod Support 插件的兴趣！本指南将帮助您了解如何为该项目做贡献。

## 项目结构概览

```
rustedwarfaremodsupport/
├── data/                 # 数据文件目录
│   ├── sections/         # 各节属性定义文件
│   └── ...
├── src/                  # 源代码目录
│   ├── valueComple/      # 属性值补全提供者
│   └── ...               # 其他核心代码
├── translation/          # 翻译文件目录
│   ├── en/               # 英文翻译
│   ├── zh-cn/            # 中文翻译
│   └── ...
├── dist/                 # 编译后的代码目录
└── ...
```

## 可以修改的内容

### 1. 翻译文件

您可以帮助我们完善各种语言的翻译：

- [translation/en/](./translation/en/) - 英文翻译文件
- [translation/zh-cn/](./translation/zh-cn/) - 中文翻译文件

每个目录中的 JSON 文件对应不同的节或功能模块。

### 2. 属性定义

您可以更新或添加属性定义：

- [data/sections/](./data/sections/) 目录包含了所有节的属性定义文件
- 每个 JSON 文件定义了一个节的属性，包括名称、类型、描述、版本和示例

### 3. 功能扩展

您可以为插件添加新功能：

- 添加新的节补全支持
- 添加新的属性值补全类型
- 改进现有功能

## 不建议修改的内容

为了保持插件的稳定性和一致性，请避免修改以下内容：

1. [extension.ts](./src/extension.ts) - 插件入口文件，除非您需要注册新的补全提供者
2. 核心架构文件，如 [dataProcessor.ts](./src/dataProcessor.ts) 和 [completionProvider.ts](./src/completionProvider.ts)，除非您有重大改进
3. [package.json](./package.json) 中的依赖和脚本配置
4. 构建和发布相关的配置文件

## 如何添加新的节支持

1. 在 [data/sections/](./data/sections/) 目录中创建新的 JSON 文件
2. 在 [src/completionProvider.ts](./src/completionProvider.ts) 中创建新的补全提供者类
3. 在 [src/extension.ts](./src/extension.ts) 中注册新的补全提供者

## 测试您的更改

1. 克隆仓库并安装依赖：
   ```
   npm install
   ```

2. 在 VS Code 中按 F5 启动调试会话测试您的更改

3. 或者构建插件进行测试：
   ```
   npm run package
   ```

## 提交 Pull Request

1. Fork 本仓库
2. 创建您的功能分支
3. 提交您的更改
4. 推送到分支
5. 创建 Pull Request

感谢您的贡献！