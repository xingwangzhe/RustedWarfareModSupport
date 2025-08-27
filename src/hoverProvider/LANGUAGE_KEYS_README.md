# 语言键功能测试

## 功能说明

本扩展现在支持带有语言代码后缀的语言键，这些键将：

1. **被特殊上色**：使用金色高亮显示，并带有 🌐 图标
2. **悬停识别**：hover 时会识别为对应的原键
3. **符合 ISO 639-1 标准**：只识别有效的2字母语言代码

## 测试示例

```ini
[unit]
# 普通键
name: Test Unit
description: A test unit

# 语言键（会被特殊装饰）
name_zh: 测试单位
description_en: A test unit in English
name_fr: Unité de test

# 无效的语言键（不会被特殊处理）
name_abc: Invalid language code
name_123: Invalid language code
```

## 语言代码示例

- `zh` - 中文 (Chinese)
- `en` - 英语 (English)
- `fr` - 法语 (French)
- `de` - 德语 (German)
- `es` - 西班牙语 (Spanish)
- `ja` - 日语 (Japanese)
- `ko` - 韩语 (Korean)
- `ru` - 俄语 (Russian)

## 注意事项

1. 语言键必须以 `_` + 2字母语言代码结尾（如 `_zh`、`_en`）
2. 语言代码必须是有效的 ISO 639-1 标准（2个字母）
3. Hover 时会显示对应的原键信息，并标注语言信息
4. 语言键在视觉上会有特殊的装饰效果
