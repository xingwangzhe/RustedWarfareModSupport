# HoverProvider 模块结构说明

本模块已按照功能解耦的原则重构为多个文件，提高代码的可维护性和可读性。

## 文件结构

```
src/hoverProvider/
├── index.ts          # 模块导出文件，统一导出所有类和接口
├── hoverProvider.ts  # 主入口文件，RustedWarfareHoverProvider 类
├── types.ts          # 类型定义文件
├── detectors.ts      # 悬停检测逻辑
├── creators.ts       # 悬停内容创建逻辑
└── utils.ts          # 工具函数
```

## 各文件职责

### 1. `types.ts`
- 定义所有相关的 TypeScript 接口和类型
- 包括 `SectionHoverInfo`, `PropertyHoverInfo`, `PropertyValueHoverInfo` 等

### 2. `detectors.ts`
- 负责检测用户鼠标悬停的位置类型
- 实现三步检测逻辑：
  - 检测是否在节名称上悬停（[]内）
  - 检测是否在属性名上悬停（行首到冒号前）
  - 检测是否在属性值上悬停（冒号后）

### 3. `creators.ts`
- 负责创建各种类型的悬停信息
- 包括节信息、属性信息、属性值信息等
- 特别处理布尔值和 LogicBoolean 类型的值

### 4. `utils.ts`
- 提供工具函数
- 包括节名称转换、类型提取等辅助功能

### 5. `hoverProvider.ts`
- 主入口文件
- 协调各个模块的工作
- 实现 `vscode.HoverProvider` 接口

### 6. `index.ts`
- 统一导出文件
- 方便其他模块引用

## 使用方式

```typescript
import { RustedWarfareHoverProvider } from './hoverProvider';
// 或者
import { RustedWarfareHoverProvider, HoverDetectors, HoverCreators } from './hoverProvider';
```

## 优势

1. **模块化**：功能分离，每个文件职责单一
2. **可维护性**：修改某个功能时只需关注对应文件
3. **可测试性**：各个模块可以独立测试
4. **可扩展性**：新增功能时可以轻松添加新的检测器或创建器
5. **代码复用**：工具函数和类型定义可以在其他地方复用

## 扩展指南

- 添加新的悬停检测逻辑：在 `detectors.ts` 中添加新方法
- 添加新的悬停内容类型：在 `creators.ts` 中添加新方法
- 添加新的工具函数：在 `utils.ts` 中添加
- 添加新的类型定义：在 `types.ts` 中添加
