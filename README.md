# RustedWarfare Mod Support

![Rustedwarfare](https://corrodinggames.com/images/rw-title.png)

正在开发的一个 RustedWarfare 模组开发工具，提供编辑器内的补全与文档提示功能。
A RustedWarfare mod development tool that provides in-editor completions and documentation hints.

## 已实现的功能
## Implemented features

### 节属性自动补全
### Section property completion

- 悬停信息提示（说明、示例、版本、弃用提示）
- Hover information with description, example, version and deprecation notes

![complete_section](for_readmeuse/complete_section.webp)

- 节折叠
- Section folding

![sections_folding](for_readmeuse/sections_folding.webp)

### 属性值自动补全
### Property value completion

- 布尔值属性补全（true/false）
- Boolean property completion (true/false)

- 逻辑布尔表达式补全
- Logic boolean expression completion

- 单位生成属性补全（单位名建议）
- Unit spawn property completion (unit name suggestions)

- 图片预览
- Image preview
![showpng1](for_readmeuse/showpng1.webp)
![showpng2](for_readmeuse/showpng2.webp)
- 列表/枚举/特定类型的值补全
- List/enum/other type-specific value completion

### 其他功能
### Other features

- `mod-info.txt` 文件识别与补全
- File recognition and completion for `mod-info.txt`

- 多语言支持（中文/英文 将来会有更多语言支持），翻译由 `merge.js` 合并
- Multi-language support (Chinese/English, more languages will be supported in the future), translations merged by `merge.js`

## 参考资料
## References

- NDT 代码表
- NDT code table

- Google 代码表
- Google code table

## 文档
## Documentation

有关如何为该项目做贡献，请参阅下面的贡献者指南。  
For information on how to contribute to this project, see the contributor guides below.

- 贡献者指南（中文）：`CONTRIBUTING_ZH.md`  
- Contributor guide (English): `CONTRIBUTING_EN.md`

- 技术文档（中文）：`TECHNICAL_DOCS_ZH.md`  
- Technical documentation (English): `TECHNICAL_DOCS_EN.md`

## 许可证
## License

本插件遵循 AGPL-3.0 协议（详见仓库 LICENSE.md）。
This extension is licensed under AGPL-3.0 (see LICENSE.md in the repository).