# Rusted Warfare 语法兼容说明

本扩展处理的是 Rusted Warfare 的 INI-like 模组文件，不是通用 INI 解析器。语法提示以仓库 `data/**` schema 和生成的 `syntaxes/ini.tmLanguage.json` 为准，并参考官方页面链接的 Modding Reference；社区资料只用于交叉验证。

## 参考来源

### 官方链接的主参考

- [Rusted Warfare Modding Reference](https://docs.google.com/spreadsheets/d/1vEku_j8QwgsTzB5oMS_IDUiHfhzZVESeSrkyrS4tndk/edit?usp=sharing)
- [Rusted Warfare Unit Modding Reference (Beta)](https://docs.google.com/spreadsheets/d/1aeP3pUic0IutZlgGix_cM8xR7LEH44gS4itAxETK954/edit?usp=sharing)

Beta 参考包含 1.16 时代的内容。标注为 `1.15`、`1.15p9`、`1.15p10` 或 `1.15p11` 的字段不能默认视为所有版本可用。

### 社区交叉参考

- [RWini_Plugin](https://github.com/Blackburn507/RWini_Plugin)
- [RustedWarfare-ModEditor](https://github.com/CLRedfield/RustedWarfare-ModEditor)

社区代码表可用于发现实际用法和版本差异，但与官方参考冲突时不作为规范覆盖来源。

## 基础结构

```ini
[core]
name: customTank
maxHp: 200
price: 500

[graphics]
image: customTank.png

[movement]
movementType: LAND
```

支持的基础形式包括：

- `[section]` 和命名节，如 `[action_fire]`、`[turret_main]`、`[resource_ammo]`。
- `key: value` 属性行。
- `#` 注释、双引号值和三引号多行值。
- 根目录 `mod-info.txt`。
- `.ini`、`.template` 文件以及 `ROOT:` 路径。

常见命名节还包括 `projectile_NAME`、`hiddenAction_NAME`、`effect_NAME`、`animation_NAME`、`attachment_NAME`、`global_resource_NAME`、`spawnUnits:LIST` 和 `spawnProjectiles:LIST`。

## 模板与内存

```ini
[core]
copyFrom: ROOT:defaultTanks.template, tankT1.ini
@memory nextTarget:unit
@memory score:float

defineUnitMemory: boolean active, float experience, unit[] squad
updateUnitMemory: score = memory.score + 1
```

`@memory` 和 `defineUnitMemory` 都是游戏参考中出现的声明形式。扩展目前对 `@memory` 提供专门的索引和补全；`defineUnitMemory` 的完整跨文件语义仍应保守处理。已确认的读写形式是 `readUnitMemory(...)`、`setUnitMemory` 和 `updateUnitMemory`，不要把未经版本资料确认的 `writeUnitMemory` 当作内置函数。

## LogicBoolean 与单位引用

LogicBoolean 嵌入属性值，不是独立文件语言：

```ini
autoTrigger: if self.isInWater and self.energy >= 1
isLocked: if parent.readUnitMemory('state', type='string') == self
setUnitMemory: reserve = self.ammo + customTarget1.resource.reserve
text: Ammo: %{self.resource.ammo}
```

支持的常见运算符为 `<`、`>`、`<=`、`>=`、`==`、`!=`、`+`、`-`、`*`、`/`、`%`，以及 `and`、`or`、`not` 和括号。

单位引用包括 `self`、`parent`、`attacking`、`lastDamagedBy`、`customTarget1`、`customTarget2`、`eventSource`、`attachment(...)`、`nearestUnit(...)` 等。游戏资料中同时存在属性式和函数式写法，例如 `self.hp` 与 `self.hp()`；补全和悬停因此采用上下文感知而不是过度严格的静态类型检查。

## 事件与复杂列表

```ini
autoTriggerOnEvent: newMessage(withTag='hitZone')
spawnUnits: tank*3(neutralTeam=true, offsetRandomX=20)
spawnProjectilesOnExplode: bomblet*2(spawnChance=0.5)
```

事件可带 `withTag`、`withActionTag` 等参数。生成列表支持重复次数 `*N`、逗号分隔条目和括号参数；嵌套资源参数可能使用 `=`、`:` 或 `|`，不能用单一的平面分隔规则解析所有上下文。

## 版本与实现边界

- schema 中的版本字段应在悬停中保留，避免把 1.16 Beta 属性无条件提示给 1.15 用户。
- TextMate grammar 负责分层高亮；嵌套列表、LogicBoolean、事件参数和跨文件引用由 completion/hover provider 处理。
- 资源、单位、动作、投射物、模板和 `copyFrom` 的跨文件解析应先以保守提示为主，避免把合法的上下文相关表达式误报为错误。
- `/test/core.ini` 只是最小测试 fixture，不代表完整可运行的游戏单位文件；仓库 `data/**` 主要是 schema 和示例元数据。
