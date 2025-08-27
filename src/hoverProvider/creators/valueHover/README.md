# ValueHover 模块结构

这个文件夹包含了重构后的 ValueHover 相关代码，按功能进行了模块化拆分：

## 文件结构

- `index.ts` - 主入口文件，包含 `ValueHoverCreator` 类和主要的悬停创建逻辑
- `booleanHover.ts` - 布尔值悬停创建功能
- `logicBooleanHover.ts` - LogicBoolean 值悬停创建功能（入口）
- `logicBooleanKeywordHover.ts` - LogicBoolean 关键字悬停创建功能
- `logicBooleanSelfMethodHover.ts` - LogicBoolean self 方法悬停创建功能
- `logicBooleanFunctionHover.ts` - LogicBoolean 函数悬停创建功能
- `valueTypeHover.ts` - 值类型悬停创建功能
- `utils.ts` - 辅助函数和工具方法

## 主要功能

### ValueHoverCreator 类
- `createPropertyValueHover()` - 创建属性值悬停信息的主入口方法
- 处理图片类型的值，生成图片预览
- 根据属性类型分发到不同的处理方法

### 布尔值处理
- `createBooleanValueHover()` - 创建布尔值悬停信息

### LogicBoolean 处理
- `createLogicBooleanValueHover()` - LogicBoolean 值悬停的主入口
- `createLogicBooleanKeywordHover()` - 处理关键字（true, false, if, and, or, not）
- `createLogicBooleanSelfMethodHover()` - 处理 self. 开头的方法
- `createLogicBooleanFunctionHover()` - 处理其他 LogicBoolean 函数

### 值类型处理
- `createValueTypeHover()` - 创建基于值类型的悬停信息
- `findMatchingValueItem()` - 在值类型数据中查找匹配的项目
- `findLogicBooleanFunction()` - LogicBoolean 函数的智能匹配
- `createValueItemHover()` - 创建值项目的悬停信息
- `createValueTypeGeneralHover()` - 创建值类型的一般悬停信息

## 依赖关系

```
index.ts (ValueHoverCreator)
├── booleanHover.ts
├── logicBooleanHover.ts
│   ├── logicBooleanKeywordHover.ts
│   ├── logicBooleanSelfMethodHover.ts
│   └── logicBooleanFunctionHover.ts
├── valueTypeHover.ts
│   └── utils.ts
└── utils.ts
```

## 使用方式

```typescript
import { ValueHoverCreator } from './valueHover/index';

// 创建属性值悬停
const hover = ValueHoverCreator.createPropertyValueHover(
    document, position, sectionName, propertyName, value, originalName
);
```

## 重构优势

1. **模块化** - 每个文件专注于单一职责
2. **可维护性** - 更容易定位和修改特定功能
3. **可测试性** - 可以单独测试每个模块
4. **代码复用** - 各个模块可以独立使用
5. **向后兼容** - 通过入口文件保持 API 一致性
