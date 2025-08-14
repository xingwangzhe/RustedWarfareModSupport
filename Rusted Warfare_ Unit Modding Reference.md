## 1.15
| Version Released | Code | Section Type | Description of the code and how to use it | Actual useage with examples |
| --- | --- | --- | --- | --- |
| NaN | NaN | This sheet contains references to all relevant workshop-related modding code as well as how to use them. Please read the table of contents and the START section below if you are beginning modding | NaN | NaN |
| NaN | Table of Contents | NaN | Use Ctrl + F (PC) or manual Search function (mobile) in order to go to a section you need, copy what is listed exactly: | NaN |
| NaN | Sections with brackets and no name or number (like [core] ) you can only have 1 of | Single | [core] | Core unit functions such as HP and death animation |
| NaN | Sections with NAME at the end can have multiples and be named | Multi | canBuild\_NAME | Build queues for building new units |
| NaN | NaN | Single | [graphics] | Main image configuration and unit trails |
| NaN | NaN | Single | [attack] | Attack permissions against other units |
| NaN | MAX: 30 | Multi | turret\_NAME | Turret that follows attack permissions and uses projectile |
| NaN | NaN | Multi | projectile\_NAME | Can be used by turret and can spawn more projectiles |
| NaN | NaN | Single | [movement] | Speed and movement type characteristics |
| NaN | NaN | Single | [ai] | How AI may use this unit, mostly for buildings |
| NaN | !!! Arm and Leg can ONLY use numbers | Number | leg\_ OR arm\_ | Moveable cosmetics for mechs, infantry etc. |
| NaN | NaN | Multi | attachment\_ | Units stacked onto original to make compound units |
| NaN | NaN | Multi | action\_NAME OR hiddenAction\_NAME | Actions that can do very wide range of things |
| NaN | NaN | Multi | effect\_NAME | Visual effects spawned by unit that eventually disappear |
| NaN | NaN | Multi | animation\_NAME | Animations for leg, arm or main body sprite |
| NaN | Not a section of its own | List | spawnUnits:LIST | Lists you can form for spawning units |
| NaN | Not a section of its own | List | spawnProjectiles:LIST | Lists you can form for spawning projectiles |
| NaN | Not a section of its own | Logic | logicBoolean\_ | Advanced logic to place across all logic fields |
| NaN | NaN | Multi | placementRule\_NAME | Allows creation of rules for buildings |
| NaN | Not a section of its own | List | Prices/Resources | Useable resources for prices using "price:" function |
| NaN | NaN | Multi | global\_resource\_NAME | Global resource collected by team shows up on top |
| NaN | NaN | Multi | resource\_NAME | Local resource used by units can be used for ammo |
| NaN | NaN | Multi | decal\_NAME | Versatile graphics can be stack to make 2.5D sprites |
| NaN | Use # before text to use in any section, example: #This is a note in [core] | Multi | comment\_NAME | Used exclusively for notes, does not read anything |
| NaN | NaN | Multi | template\_NAME | Used to create sections that can be referenced in unit |
| NaN | Is a file that you must create | File | NAME.template | Create chains of unit files doesn't load unless copyFrom: |
| NaN | Is a file that you must create | File | all-units.template | Put in root of mod, will apply to ALL unit .ini files |
| NaN | Is a file that you must create | File | mod-info.txt | Put in root of mod, will change some settings of mod |
| NaN | NaN | Ref | Projectile Draw Types | Default projectiles able to use in [projectile\_NAME] |
| NaN | NaN | Ref | Original Units | All the vanilla units that can be called, by their technical names |
| START | In order to create an unit, you need to create a file with extension of .ini. It can be named anything, even with unicode characters, and it must be in your mod folder inside the rustedWarfare/mods/units/MODNAME folder -- Then, you add the sections in with the code | NaN | NaN | The unit file extension needed: |
| NaN | There are some lines of code that are required before a unit can be useable. These lines of code can be set to anything appropriate, just need to have their fields filled out for initializing or it will give an error | NaN | NaN | Error for not having needed code: |
| NaN | !!! THESE ARE REQUIRED CODE !!! | NaN | Example | NaN |
| Section | Code | Option | NaN | NaN |
| [core] | name: ANY | unit name | NaN | NaN |
| NaN | maxHp: 200 | number | NaN | NaN |
| NaN | price: 500 | number | NaN | NaN |
| NaN | mass: 50 | number | NaN | NaN |
| NaN | radius: 16 | number | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [graphics] | image: ANY.png | image file | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [attack] | canAttack: true | true, false | NaN | NaN |
| NaN | canAttackFlyingUnits: true | true, false | NaN | NaN |
| NaN | canAttackLandUnits: true | true, false | NaN | NaN |
| NaN | canAttackUnderwaterUnits: false | true, false | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [movement] | movementType: | NONE, LAND, AIR, WATER, HOVER, BUILDING, OVER\_CLIFF, OVER\_CLIFF\_WATER | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| ! | For starting out, it is recommended to check out the turret and projectile sections in order to get used to basic vanilla style units, but the modding reference offers a very wide range of things to change in your units, it's encouraged to take your time and read everything | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| Version | Section | NaN | [core] | NaN |
| Added | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code: will cause error if these are not included | NaN |
| NaN | name: | string | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 |
| NaN | mass: | int | The 'weight' of the unit, defines how it collides with other units, a greater value means it's tougher to push. | mass: 3000 |
| NaN | radius: | int | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 |
| NaN | price: | int / price | The unit cost from builders/buildings. Defaults to credits if no resource type is used | price: 500, gold=5, stone=10 |
| NaN | maxHp: | int | The max health for the unit. (will spawn with this value). | maxHp: 200 |
| NaN | #==== | #==== | Common Keys | NaN |
| NaN | buildSpeed: | float / s | Time it takes to build the unit. (may multiply with builder speed) | buildSpeed: 3s |
| NaN | class: | string | Reserved for future use, must be CustomUnitMetadata by default. Is not necessary to include, has no additional functions. | class: CustomUnitMetadata |
| NaN | techLevel: | int | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 |
| NaN | altNames: | string(s) | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 |
| 1.13.3 | strictLevel: | float | Defaults to 0. 1 = Errors if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 |
| NaN | isBio: | bool | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true |
| NaN | isBug: | bool | Changes some death defaults, and sort order in Sandbox. | isBug: false |
| 1.13 | isBuilder: | bool | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true |
| 1.15 | streamingCost: | price | Like price but paid for overtime while this unit is being queued or built. Construction or queue is paused if resources run out while building. | streamingCost: gem=420 |
| 1.15 | switchPriceWithStreamingCost: | bool | Shortcut to set streamingCost to price value and clear price, add to all-units.template to quickly switch a mod over to streaming resources. | switchPriceWithStreamingCost: true |
| NaN | #==== | #==== | Unit Stats Keys | NaN |
| NaN | selfRegenRate: | float | Passive self repair rate. | selfRegenRate: 0.01 |
| NaN | maxShield: | int | The max shield hitpoints of the unit. Can start with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 |
| NaN | startShieldAtZero: | bool | Unit starts with a 0 hitpoints shield on created if true. | startShieldAtZero: true |
| NaN | shieldRegen: | float | Passive shield regen rate. | shieldRegen: 0.15 |
| NaN | energyMax: | float | Defaults to 0. Energy that can be used as ammo for turrets, laser defense and actions. | energyMax: 1 |
| NaN | energyRegen: | float | Passive energy regen rate. | energyRegen: 0.001 |
| NaN | energyStartingPercentage: | float | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 |
| NaN | energyNeedsToRechargeToFull: | float | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true |
| NaN | energyRegenWhenRecharging: | float | Regen rate while recharging. | NaN |
| 1.13 | armour: | int | Damage taken away from each hit. (not currently used in any vanilla units) | armour: 6 |
| 1.13 | armourMinDamageToKeep: | int | Min damage to keep from received damage. Defaults to 1. | armourMinDamageToKeep: 2 |
| 1.13.3 | borrowResourcesWhileAlive: | price | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 |
| 1.15 | borrowResourcesWhileBuilt: | price | Like borrowResourcesWhileAlive but doesn't take affect till built. Mostly useful for buildings like houses that have negative resources to add to the unit cap, etc. | borrowResourcesWhileBuilt: supplyCap = -10 |
| 1.13.3 | generation\_resources: | price | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 |
| 1.13.3 | generation\_active: | logicBoolean | Disables generation\_resources/credits when false. (logic\_boolean) | generation\_active: if not self.hp(lessThan=100) |
| NaN | generation\_credits: | int | Income unit creates. (credits only) | generation\_credits: 2 |
| NaN | generation\_delay: | int | How often generation\_resources/credits is added. Defaults to 40. (changing not recommended) | generation\_delay: 40 |
| NaN | #==== | #==== | UI and Graphics Keys | NaN |
| NaN | showInEditor: | bool | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false |
| NaN | displayText: | LocaleString | The unit name that the game shows to the player. | displayText: Custom Tank |
| 1.13 | displayText\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado |
| NaN | displayDescription: | LocaleString | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage |
| 1.13 | displayDescription\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero |
| NaN | displayLocaleKey: | string | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery |
| NaN | displayRadius: | int | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 |
| NaN | uiTargetRadius | int | Defaults to displayRadius value. Radius used when attacking/reclaiming/etc this unit | uiTargetRadius: 10 |
| NaN | shieldRenderRadius: | int | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 |
| NaN | shieldDisplayOnlyDeflection: | bool | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true |
| NaN | shieldDeflectionDisplayRate: | float | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 |
| 1.13.3 | showOnMinimap: | bool | Defaults to true. Hide units on minimap if false. | showOnMinimap: false |
| 1.14 | showOnMinimapToEnemies | bool | Useful for stealth units | showOnMinimapToEnemies: false |
| 1.13.3 | showActionsWithMixedSelectionIfOtherUnitsHaveTag: | string(s) | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: true |
| NaN | #==== | #==== | Building Only Keys | NaN |
| NaN | isBuilding: | bool | Defines if the unit is a building. | isBuilding: true |
| NaN | footprint: | ints | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 |
| NaN | constructionFootprint: | ints | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 |
| NaN | displayFootprint: | ints | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 |
| NaN | buildingSelectionOffset: | int | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 |
| NaN | buildingToFootprintOffsetX: | float | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 |
| NaN | buildingToFootprintOffsetY: | float | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 4 |
| NaN | placeOnlyOnResPool: | bool | Normally used for extractors, forces building construction in a resource pool. | placeOnlyOnResPool: true |
| NaN | selfBuildRate: | float | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 |
| 1.14 | ignoreInUnitCapCalculation | NaN | defaults to true for buildings otherwise false. Set to true to not count this unit in unit cap. | ignoreInUnitCapCalculation: true |
| NaN | #==== | #==== | Misc Keys | NaN |
| NaN | copyFrom: | file(s) (ini) | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini |
| NaN | dont\_load: | bool | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true |
| NaN | overrideAndReplace: | string(s) | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer |
| 1.13.3 | onNewMapSpawn: | string | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam, spawnPoint\_eachActiveTeam (1.15) | onNewMapSpawn: spawnPoint\_eachActiveTeam |
| NaN | globalScale: | float | Defaults to 1. Changing not recommended. | globalScale: 2 |
| NaN | isLocked: | bool | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true |
| 1.13 | isLockedIfGameModeNoNuke: | bool | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true |
| NaN | experimental: | bool | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true |
| NaN | stayNeutral: | bool | Set to false to disable capture when unit is on the neutral team. | stayNeutral: false |
| 1.13 | createNeutral: | bool | Set to true to always spawn the unit on the neutral team. | createNeutral: true |
| NaN | createOnAggressiveTeam: | bool | Set to true to always spawn the unit on aggressive teams on single player matches. | createOnAggressiveTeam: true |
| 1.13 | tags: | string(s) | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage |
| 1.15 | defineUnitMemory | NaN | Can define several variables for custom storage, unique for each unit. Allowed types: boolean, float/number, unit, string. | defineUnitMemory: boolean nukeActive, boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText\n |
| 1.15p11 | NaN | NaN | Add a pair of square brackets to turn them into arrays for those specific data types | defineUnitMemory: unit[] squad, float[] mango |
| NaN | fogOfWarSightRange: | int | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 35 |
| 1.14 | fogOfWarSightRangeWhileNotBuilt | int | Fog of War range when unit/building is incomplete. Defaults to fogOfWarSightRange | fogOfWarSightRangeWhileNotBuilt: 10 |
| NaN | softCollisionOnAll: | int | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 |
| NaN | disableAllUnitCollisions: | bool | Unit cannot collide with others if true. | disableAllUnitCollisions: true |
| 1.13 | isUnrepairableUnit: | bool | No unit can repair this unit if true. | isUnrepairableUnit: true |
| NaN | isUnselectable: | bool | If true unit cannot be selected. (includes AI players) | isUnselectable: true |
| 1.14 | isUnselectableAsTarget | bool | Defaults to isUnselectable. Can be used to create units that cannot be selected but can be targeted for attack, reclaim, etc | isUnselectableAsTarget: false |
| 1.13 | isPickableStartingUnit: | bool | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true |
| 1.13 | startFallingWhenStartingUnit: | bool | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true |
| NaN | soundOnAttackOrder: | sound(s) | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg |
| NaN | soundOnMoveOrder: | sound(s) | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg |
| 1.13.3 | soundOnNewSelection: | sound(s) | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg |
| NaN | canNotBeDirectlyAttacked: | bool | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. If true, canNotBeDamaged is true by default | canNotBeDirectlyAttacked: true |
| NaN | canNotBeDamaged | bool | Defaults to value of canNotBeDirectlyAttacked (be careful setting this without canNotBeDirectlyAttacked, as AI will attack forever) | canNotBeDamaged: true |
| 1.13.3 | canNotBeGivenOrdersByPlayer: | bool | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true |
| 1.13.3 | canOnlyBeAttackedByUnitsWithTags: | strings(s) | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank |
| 1.14 | disableDeathOnZeroHp | bool | Setting to true allows unit to continue living even at 0 HP, useful for custom "death" action. Warning: If not used with an autoTrigger, etc units will attack this unit forever. | disableDeathOnZeroHp: true |
| 1.15p9 | allowCaptureWhenNeutralByAI | bool | When true, it lets to be captured on contact by AI as well. Defaults as false | allowCaptureWhenNeutralByAI: true |
| NaN | #==== | #==== | Transport Keys | NaN |
| 1.13 | transportSlotsNeeded: | int | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 |
| NaN | maxTransportingUnits | int | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 |
| 1.13 | transportUnitsRequireTag: | string(s) | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier |
| NaN | transportUnitsRequireMovementType: | movementTypes | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER |
| NaN | transportUnitsBlockAirAndWaterUnits: | bool | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false |
| NaN | transportUnitsEachUnitAlwaysUsesSingleSlot: | bool | Defaults to false. Units in this transport occupy 1 slot always if true, ignoring transportSlotsNeeded. | transportUnitsEachUnitAlwaysUsesSingleSlot: true |
| NaN | transportUnitsKeepBuiltUnits: | bool | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true |
| NaN | transportUnitsCanUnloadUnits: | LogicBoolean | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false |
| NaN | transportUnitsAddUnloadOption: | bool | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false |
| 1.13.3 | transportUnitsUnloadDelayBetweenEachUnit: | float | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 |
| 1.13 | transportUnitsKillOnDeath: | LogicBoolean | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() |
| 1.13 | transportUnitsHealBy: | float | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 |
| NaN | transportUnitsBlockOtherTransports: | bool | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false |
| 1.13.3 | whileNeutralTransportAnyTeam: | bool | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true |
| NaN | whileNeutralConvertToTransportedTeam: | bool | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true |
| NaN | convertToNeutralIfNotTransporting: | bool | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true |
| NaN | transportUnitsOnTeamChangeKeepCurrentTeam: | bool | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true |
| 1.13.3 | #==== | #==== | Resource Node Keys | NaN |
| NaN | resourceRate: | float | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | resourceRate: 100 |
| NaN | similarResourcesHaveTag: | string(s) | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource |
| 1.13.3 | resourceMaxConcurrentReclaimingThis: | int | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 |
| NaN | reclaimPrice: | int | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 |
| NaN | #==== | #==== | Resource Harvester Keys | NaN |
| NaN | canReclaimResources: | bool | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true |
| NaN | canReclaimResourcesNextSearchRange: | int | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 |
| NaN | canReclaimResourcesOnlyWithTags: | string(s) | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource |
| NaN | canReclaimUnitsOnlyWithTags | string(s) | This is for reclaiming units, not for resources. See canReclaimResourcesOnlyWithTags | canReclaimUnitsOnlyWithTags: reclaimable |
| 1.15 | resourceReclaimMultiplier | float | Multiplies the builder's reclaim speed. Different from the related key "nanoUnbuildSpeed" | resourceReclaimMultiplier: 1.5 |
| NaN | #==== | #==== | Construction and Factory Keys | NaN |
| NaN | canRepairUnitsOnlyWithTags | string(s) | Repairs units with the specified tags | canRepairUnitsOnlyWithTags: vulnerable |
| NaN | canRepairBuildings: | bool | Can this can heal ally buildings (isBuilder:true is required) | canRepairBuildings: true |
| NaN | canRepairUnits: | bool | Can this can heal ally units. (isBuilder:true is required), canRepairBuildings required for buildings. | canRepairUnits: true |
| NaN | autoRepair: | bool | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true |
| NaN | nanoRange: | int | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 |
| NaN | nanoRepairSpeed: | float | Defaults to 0.2. Defines the unit nano repair/reclaim speed. | nanoRepairSpeed: 0.01 |
| NaN | nanoBuildSpeed: | float | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 |
| 1.15 | nanoUnbuildSpeed: | float | How fast a builder reclaims an incomplete building (defaults to 1) | nanoUnbuildSpeed: 1.4 |
| NaN | nanoReclaimSpeed: | float | How fast a builder reclaims a normal unit (not a resource unit) | nanoReclaimSpeed: 0.23 |
| 1.13.3 | nanoRangeForRepairIsMelee: | bool | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true |
| NaN | nanoRangeForReclaimIsMelee: | bool | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true |
| NaN | nanoRangeForRepair: | int | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 |
| NaN | nanoRangeForReclaim: | int | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 |
| NaN | nanoFactorySpeed: | float | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 |
| NaN | extraBuildRangeWhenBuildingThis: | int | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 |
| NaN | builtFrom\_{NUM}\_name: | string(s) | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory |
| NaN | builtFrom\_{NUM}\_pos: | float | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 |
| NaN | builtFrom\_{NUM}\_forceNano: | bool | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true |
| 1.13.3 | builtFrom\_{NUM}\_isLocked: | LogicBoolean | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) |
| NaN | builtFrom\_{NUM}\_isLockedMessage: | LocaleString | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population |
| NaN | exit\_x: | float | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 |
| NaN | exit\_y: | float | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 |
| 1.13 | exit\_dirOffset: | float | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 |
| NaN | exit\_heightOffset: | float | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 |
| NaN | exit\_moveAwayAmount: | float | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 |
| 1.14 | exitHeightIgnoreParent | bool | Ignores parent height for exit height; useful for separating attachments with their parents for building | exitHeightIgnoreParent: true |
| NaN | #==== | #==== | Death Keys | NaN |
| NaN | dieOnConstruct: | bool | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true |
| 1.13 | dieOnZeroEnergy: | bool | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true |
| NaN | numBitsOnDeath: | int | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 |
| NaN | nukeOnDeath: | bool | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true |
| NaN | nukeOnDeathRange: | float | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 |
| NaN | nukeOnDeathDamage: | float | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 |
| NaN | nukeOnDeathDisableWhenNoNuke: | bool | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true |
| NaN | fireTurretXAtSelfOnDeath: | turret ref | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: turret\_1 |
| 1.13 | explodeOnDeath: | bool | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false |
| NaN | explodeOnDeathGroundCollision: | boolean | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false |
| 1.14 | explodeTypeOnDeath: | preset effects | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding | NaN |
| 1.13 | effectOnDeath: | effect(s) ref | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound |
| NaN | effectOnDeathGroundCollision: | effect(s) ref | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion |
| NaN | unitsSpawnedOnDeath: | string(s) | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | bool | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true |
| NaN | hideScorchMark: | bool | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true |
| NaN | soundOnDeath: | string(s) | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg |
| 1.14 | effectOnDeathIfUnbuilt: | effect(s) ref | If the unit was not completed, and is destroyed, play this effect. Defaults to effectOnDeath | effectOnDeathIfUnbuilt: CUSTOM:implode |
| NaN | #==== | #==== | Action Keys | NaN |
| 1.13.3 | autoTriggerCooldownTime: | time (seconds) | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | autoTriggerCooldownTime: 0.05s |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU: | bool | Allows for auto action cooldown lower than 0.2s. Default to false. Not recommended. | autoTriggerCooldownTime\_allowDangerousHighCPU: true |
| 1.15 | autoTriggerCheckRate: | enum | options: everyFrame (default), every4Frames, every8Frames. Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| 1.15 | autoTriggerCheckWhileNotBuilt: | bool | Defaults to false. autoTrigger of unit actions check even when not completely built if true | autoTriggerCheckWhileNotBuilt: true |
| 1.15p10 | updateUnitMemory: | memory | Faster memory update than [action\_#] setUnitMemory. Useful on many applications. | updateUnitMemory: timeCount = (1 + memory.timeCount) |
| NaN | updateUnitMemoryRate: | int | Sets how often the memory is updated. Defaults at 1s. settings it to 0 will update memory every frame. | updateUnitMemoryRate: 0 |
| NaN | NaN | NaN | NaN | NaN |
| 1.15 | @memory | NaN | A template-friendly method of defineUnitMemory. Declare name followed by type, separated by a colon | @memory fish:unit |
| NaN | NaN | NaN | NaN | @memory bullets:number |
| 1.15p11 | NaN | NaN | Add a pair of square brackets for array memory type | @memory myTargets:unit[] |
| NaN | NaN | NaN | NaN | NaN |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN |
| depr. 1.13 | action\_#\_convertTo: | string | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 |
| NaN | action\_#\_pos: | float | Order action appears in UI | action\_1\_pos: 0.1 |
| NaN | action\_#\_price: | int | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 |
| NaN | action\_#\_text: | string | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 |
| NaN | action\_#\_description: | string | The action description. | action\_1\_description: -Converts the tank |
| NaN | action\_#\_addEnergy: | float | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 |
| NaN | action\_#\_whenBuilding\_cannotMove: | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true |
| NaN | canBuild\_#\_name/pos/isLocked: | string | Use canBuild section instead. | canBuild\_1\_name: tank |
| NaN | Section | NaN | [canBuild\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | name: | string(s) | List of unit identifiers this unit can create. Can be buildings or units. Add "setRally" to create a rally button | name: setRally, tank, hoverTank, heavyTank |
| NaN | pos: | float | Order build link appears in this unit UI. | pos: 0.1 |
| NaN | tech: | int | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 |
| NaN | forceNano: | bool | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true |
| NaN | isVisible: | LogicBoolean | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) |
| NaN | isLocked: | LogicBoolean | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) |
| NaN | isLockedMessage: | string | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks |
| NaN | isLockedMessage\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles |
| NaN | isLockedAlt: | LogicBoolean | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) |
| NaN | isLockedAltMessage: | string | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy |
| NaN | isLockedAlt2: | LogicBoolean | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() |
| NaN | isLockedAlt2Message: | string | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet |
| NaN | addResources: | price(s) | Adds these resources to self when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 |
| NaN | price: | price(s) | Overrides builded units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 |
| NaN | isGuiBlinking: | LogicBoolean | Generates a blinking effect in UI if true. | isGuiBlinking: true |
| NaN | Section | NaN | [graphics] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary code | NaN |
| NaN | NaN | file (image) | image: | NaN |
| NaN | #==== | #==== | Common Keys | NaN |
| NaN | image: | file (image) | File path to png image. | image: body.png |
| 1.13 | teamColoringMode: | NaN | How pixels are used for team coloring, options: pureGreen, hueAdd, hueShift, disabled | (Defaults to pureGreen if no code) teamColoringMode: disabled |
| NaN | image\_back: | file (image) | An optional image drawn behind other units. Useful for factories that units exit | image\_back: floor.png |
| 1.14 | image\_shield | file (image) | Image to show as a custom shield | image\_shield: forcefield.png |
| NaN | image\_wreak: | file (image) | Image to use when unit dies. Can be NONE to leave no wreak | image\_wreak: ded.png |
| NaN | image\_offsetX: | int | Use this to adjust the graphics of a unit if it is too far off one side | image\_offsetX: 21 |
| NaN | image\_offsetY: | int | Use this to adjust the graphics of a unit if it is too far off one side | image\_offsetY: 41 |
| 1.15p9 | image\_offsetH: | int | Use this to adjust the height of the graphic, especially when using decals | image\_offsetH: 25 |
| NaN | image\_floatingPointSize | int | Fixes of by 1 pixel sizing for images with widths and/or height that has odd value | image\_floatingPointSize: 10 |
| 1.13.3 | isVisible | logic | If false will hide the unit. | isVisible: false |
| 1.14 | isVisibleToEnemies | bool | Only visible to player and allies when false. Recommend with showOnMinimapToEnemies. Useful for stealth units. | isVisibleToEnemies: false |
| NaN | scaleImagesTo: | float | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | scaleImagesTo: 1 |
| NaN | imageScale: | float | Resize image. Defaults to 1. Effects leg, and shadow images as well. | imageScale: 1 |
| NaN | drawLayer: | string | Land units normally default to ground or ground2 if transport. Options: wreaks, underwater, bottom, ground, ground2, experimentals, air, top | drawLayer: bottom |
| 1.13 | whenBeingBuiltMakeTransparentTill | float | How long the transparent effect is applied to incomplete units, set to 0 to disable completely. Default: 1 | whenBeingBuiltMakeTransparentTill: 0.4 |
| NaN | icon\_zoomed\_out | file (image) | NaN | icon\_zoomed\_out: unitIcon.png |
| NaN | icon\_zoomed\_out\_neverShow | bool | Sets wheather show the unit icon or not on the zoomed out battle map | icon\_zoomed\_out\_neverShow: false |
| NaN | icon\_build | file (image) | Displays icon of the unit on Build Panel | icon\_build: iconFish.png |
| NaN | #==== | #==== | Turrets (images can also be set on each turret) | NaN |
| NaN | image\_turret: | file (image) | Default image for all turrets, can also be set per turret | image\_turret: gun.png |
| NaN | teamColorsOnTurret: | bool | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | teamColorsOnTurret: true |
| NaN | scaleTurretImagesTo: | float | Will cause crash if image\_turret is not specified, even if image is set per turret | scaleTurretImagesTo: 1.2 |
| NaN | lock\_body\_rotation\_with\_main\_turret: | bool | Locks body image locked to the direction of the turret named "1" (turret\_1) or the first turret defined (if a turret\_1 is not defined) | lock\_body\_rotation\_with\_main\_turret: true |
| 1.13 | lock\_leg\_rotation\_with\_main\_turret | bool | Locks legs and arms to the direction of the turret named "1" (turret\_1) or the first turret defined (if a turret\_1 is not defined) | lock\_leg\_rotation\_with\_main\_turret: true |
| NaN | #==== | #==== | Shadow | NaN |
| NaN | image\_shadow: | file (image) | Image file, NONE, AUTO or AUTO\_ANIMATED. (AUTO will use image and make it transparent black only.) | image\_shadow: shadow.png |
| NaN | shadowOffsetX: | float | Adjusts shadow horizontally | shadowOffsetX: 10 |
| NaN | shadowOffsetY: | float | Adjusts shadow vertically | shadowOffsetY: 10 |
| 1.13.3 | image\_shadow\_frames | bool | If shadow image should use frame animation of main image. .Alternative to AUTO\_ANIMATED shadow value. | image\_shadow\_frames: true |
| NaN | lock\_shadow\_rotation\_with\_main\_turret: | bool | Locks body image shadow locked to first turret's direction | lock\_shadow\_rotation\_with\_main\_turret: true |
| NaN | #==== | #==== | Effects and animation | NaN |
| NaN | total\_frames | int | Defaults to 1. Animations require this. | total\_frames: 3 |
| NaN | frame\_width: | int | Calculated for you if total frames is set, but can be overridden | frame\_width: 40 |
| NaN | frame\_height: | int | Defaults to image height | frame\_height: 60 |
| 1.14? | default\_frame | int | Default frame when not playing an animation. First frame is 0 | default\_frame: 0 |
| NaN | splastEffect: | bool | True to create a water wave effect when over water. Default false | splastEffect: true |
| NaN | dustEffect: | bool | True to create a dust effect when over land. Default false | dustEffect: true |
| NaN | splastEffectReverse: | bool | True to also create effect when unit is reversing | splastEffectReverse: true |
| NaN | dustEffectReverse: | bool | True to also create effect when unit is reversing | dustEffectReverse: true |
| 1.13 | movementEffect | effect | Custom movement effect, can be anything | movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 |
| 1.13 | movementEffectReverse | effect | Reversed version of movementEffect: key | movementEffectReverse: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 |
| 1.13 | movementEffectRate | float | Sets the frequency of effects being spawned while moving | movementEffectRate: 10 |
| 1.13 | movementEffectReverseFlipEffects | bool | Create effect as if unit has rotated 180 when reversing | movementEffectReverseFlipEffects: true |
| NaN | repairEffect | effect ref | Custom repair effect, can be anything. Replaces default effect from builders | repairEffect: CUSTOM:mist\*5 |
| NaN | repairEffectAtTarget | effect | Custom repair effect towards the repaired target | repairEffectAtTarget: CUSTOM:greensparks\*2 |
| NaN | repairEffectRate | int | Sets the frequency of effects being spawned while repairing. Defaults to 5, affects both sides. | repairEffectRate: 20 |
| 1.13.3 | reclaimEffect | effect | Custom reclaim effect, can be anything. Replaces default effect from builders | reclaimEffect: CUSTOM:sap\*5 |
| 1.13.3 | reclaimEffectAtTarget | effect | Custom reclaim effect towards the reclaimed target | reclaimEffectAtTarget: CUSTOM:redsparks\*2 |
| 1.13.3 | reclaimEffectRate | int | Sets the frequency of effects being spawned while reclaiming. Defaults to 5, affects both sides. | reclaimEffectRate: 20 |
| NaN | rotate\_with\_direction: | bool | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | rotate\_with\_direction: false |
| NaN | animation\_direction\_units: | float | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | animation\_direction\_units: 45 |
| NaN | animation\_direction\_strideX: | int | Animation frames to offset on direction change. | animation\_direction\_strideX: 40 |
| NaN | animation\_direction\_strideY: | int | Animation frames to offset on direction change. Used with frame\_height. | animation\_direction\_strideY: 60 |
| NaN | animation\_direction\_starting: | float | Direction for first frame | animation\_direction\_starting: 90 |
| NaN | #==== | #==== | Show and Hide | NaN |
| 1.13.3 | disableLowHpFire | bool | Defaults to false. When true, removes the flames on severely damaged unit/structure. | disableLowHpFire: false |
| 1.13.3 | disableLowHpSmoke | bool | Defaults to false. When true, removes the smokes on severely damaged unit/structure. | disableLowHpSmoke: false |
| 1.13.3 | showTransportBar: | bool | Defaults to true. Shows the transport bar for transport units. | showTransportBar: false |
| 1.13.3 | showHealthBar | bool | Defaults to true. Shows the health bar of a unit. (Still hidden even if true when "Always show unit health" setting is disabled.) | showHealthBar: false |
| 1.13.3 | showEnergyBar | bool | Defaults to true. Shows the energy bar of a unit. | showEnergyBar: false |
| 1.14 | showShieldBar | bool | Defaults to true. Shows the shield bar of a unit. Also affects the presence of set custom shield sprite. | showShieldBar: false |
| 1.14 | showQueueBar | bool | Defaults to true. Shows the bar for build or action queue of a unit. | showQueueBar: false |
| 1.15 | showShotDelayBar | bool | Defaults to true. Shows the shot delay/warmup of a unit before firing. | showShotDelayBar: false |
| 1.15p9 | showSelectionIndicator | bool | Defaults to true. Shows select circle/box if true | showSelectionIndicator: false |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better, more adaptable ways) | NaN |
| NaN | teamColorsUseHue: | bool | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN |
| depr. 1.13 | animation\_TYPE\_start: | int | TYPE can be set to: attack, moving, idle. Use [animation] section instead for more control | animation\_moving\_start: 0 |
| depr. 1.13 | animation\_TYPE\_end: | int | End frame, must be larger then start | animation\_moving\_end: 3 |
| depr. 1.13 | animation\_TYPE\_scale\_start: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_end: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_speed: | float | Delay for each frame of animation. Larger values cause slower animation | NaN |
| depr. 1.13 | animation\_TYPE\_pingPong: | bool | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN |
| NaN | Section | NaN | [attack] | The attack section is for global attack characteristics, per-turret overrides these |
| NaN | Code | Value Type | Description | Example |
| NaN | canAttack: | bool | If set to false, can not attack any unit. Overrides other canAttack options altogether. | canAttack: true |
| NaN | canAttackFlyingUnits: | LogicBoolean | can also be narrowed per turret. Note: not required if canAttack is false. | canAttackFlyingUnits: false |
| NaN | canAttackLandUnits: | LogicBoolean | can also be narrowed per turret in [turret\_NAME] | canAttackLandUnits: true |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | can also be narrowed per turret in [turret\_NAME] | canAttackUnderwaterUnits: false |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | canAttackNotTouchingWaterUnits: false |
| NaN | maxAttackRange: | float | (multiplied by globalScale) | maxAttackRange: 300 |
| NaN | shootDelay: | float | Global delay, can also use delay on each turret. Set in seconds or ticks | shootDelay: 21, shootDelay: 5s |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | Will only attack units that has the specified tags. | canOnlyAttackUnitsWithTags: metallic, ceramic |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | Can only attack units without the specified tags. | canOnlyAttackUnitsWithoutTags: corrosive, magnetic |
| 1.13 | turretMultiTargeting | bool | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | turretMultiTargeting: true |
| NaN | isMelee: | bool | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | isMelee: true |
| 1.13.3 | meleeEngangementDistance | int | Makes unit move to attack nearby units. Defaults to 250 for melee, and 0 for non melee (Works even if non-melee, but might be unexpected to players) | meleeEngangementDistance: 400 |
| NaN | turretRotateWithBody | bool | Are all turrets rotated when body rotates. Defaults to true | turretRotateWithBody: true |
| NaN | attackMovement: | string | normal/bomber. bomber attack movement will retreat when energy runs out | attackMovement: bomber |
| NaN | dieOnAttack: | bool | Will die when it attacks. | dieOnAttack: true |
| NaN | isFixedFiring: | bool | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | isFixedFiring: true |
| NaN | aimOffsetSpread: | float | Offset each shot multiplied by target radius. Defaults to 0.6. aimOffsetSpread:0 will make unit always attack center | aimOffsetSpread:0 |
| 1.13 | stopTargetingAfterFiring | bool | Unit stops targeting after firing a shot. Rarely used or needed. | stopTargetingAfterFiring: true |
| NaN | disablePassiveTargeting: | bool | Unit only attacks manually ordered target. Rarely used or needed. | disablePassiveTargeting: true |
| 1.13.3 | showRangeUIGuide | bool | Will it show the range indicator. Useful for showing ranges in radar and related structures. | showRangeUIGuide: true |
| 1.15 | shootDelayMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | shootDelayMultiplier: 0.75 |
| 1.15 | shootDamageMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | shootDamageMultiplier: 2.43 |
| NaN | #==== | #==== | Deprecated Keys - can be used but better to set these per turret | NaN |
| depr. 1.13 | turretSize: | float | (multiplied by globalScale) | NaN |
| depr. 1.13 | turretTurnSpeed: | float | NaN | NaN |
| NaN | Section | NaN | [turret\_NAME] | Turrets fire projectiles with different traits |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code | NaN |
| NaN | NaN | float | x: | NaN |
| NaN | NaN | float | y: | NaN |
| NaN | #==== | #==== | Positioning/Stats | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | x: | float | Sets the horizontal position of the turret. 0 is center, negatives toward left, positives toward right. | x: 0 |
| NaN | y: | float | Sets the vertical position of the turret. 0 is center, negatives toward bottom, positives toward top. | y: 40 |
| NaN | copyFrom: | turret ref | Copy all values from another turret as defaut values for this turret | copyFrom: 1 |
| NaN | projectile | projectile ref | Projectile fired from this turret. | projectile: torpedo |
| NaN | altProjectile | projectile ref | Alternative projectile fired from this turret when altProjectileCondition is true | altProjectile: spear |
| NaN | altProjectileCondition | LogicBoolean | Used with altProjectile | altProjectileCondition: if self.hp() < 100 |
| 1.13 | barrelX | float | Defaults to 0. Controls horizontal position for projectile spawn. | barrelX: 0 |
| 1.13 | barrelY | float | Defaults to size. Note: size and barrelY have the same meaning | barrelY: 5 |
| 1.13.3 | barrelHeight | float | Height of barrel in 3d. Effect projectile and shoot flame starting height | barrelHeight: 10 |
| 1.15p9 | height: | float | Height of the unit in 3D, to be used with decals | height: 30 |
| NaN | size: | float | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 |
| NaN | turnSpeed | float | Max turn speed of the turret | turnSpeed: 2 |
| NaN | turnSpeedAcceleration | float | Defaults to disabled, and full turn speed is used. | turnSpeedAcceleration: 0.4 |
| NaN | turnSpeedDeceleration | float | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | turnSpeedDeceleration: 0.2 |
| NaN | idleDir | float | Defaults to 0 | idleDir: 180 |
| 1.13 | idleDirReversing | float | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | idleDirReversing: 30 |
| NaN | shouldResetTurret: | bool | Defaults true. False to disable the reseting turret angle when idle | shouldResetTurret: false |
| NaN | idleSpin: | float | Spin rate when idle, used on missile turrets | idleSpin: 2 |
| 1.14 | idleSweepAngle | int | Disabled by default. Controls how far the turret will "look" left and right | idleSweepAngle: 35 |
| 1.14 | idleSweepDelay | float | Controls the delay between idleSweep movements | idleSweepDelay: 20 |
| 1.14 | idleSweepSpeed | float | Controls the speed with which the turret sweeps when idle | idleSweepSpeed: 0.3 |
| 1.14 | idleSweepCondition | LogicBoolean | Disable idle sweep if false | idleSweepCondition: if self.hp() > 400 |
| 1.14 | idleSweepAddRandomDelay | float | Default 1-20 depends on idleSweepDelay, used to stop sweep syncing up with other units | idleSweepAddRandomDelay: 30 |
| 1.14 | idleSweepAddRandomAngle | int | Default 0 | idleSweepAddRandomAngle: 15 |
| NaN | attachedTo: | turret ref | A specific turret to connect to, it will rotate with it. No correlation to [attachment\_x] | attachedTo: base |
| NaN | slave: | bool | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | slave: true |
| NaN | isMainNanoTurret: | bool | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | isMainNanoTurret: true |
| NaN | energyUsage: | float | Required energy to fire weapon. Same as resourceUsage: energy=X | energyUsage: 1 |
| NaN | resourceUsage | price | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | #==== | #==== | Timing | NaN |
| NaN | delay: | float | Override global shootDelay for this turret | delay: 2s |
| NaN | linkDelayWithTurret | turret ref | When this other turret fires the cooldown delay on this turret will be reset/removed | linkDelayWithTurret: 1 |
| NaN | warmup: | float | Delay before firing a shot. | warmup: 5s |
| NaN | warmupCallDownRate | float | Rate to reduce warmup when turret is not ready to fire at any targets | warmupCallDownRate: 10 |
| NaN | warmupNoReset | bool | Defaults to false. When true warmup is not reset after firing a shot and turret doesn't wait for warnup. Used with warmupCallDownRate and warmupShootDelayTransfer. | warmupNoReset: true |
| NaN | warmupShootDelayTransfer | float | Defaults to 0, amount to reduces the next shot delay depending on warmup. When used with warmupNoReset, can make a each shot faster. | warmupShootDelayTransfer: 20 |
| NaN | #==== | #==== | On Shoot | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor: | float | Freezes body movement while shooting. | onShoot\_freezeBodyMovementFor: 2s |
| 1.14 | barrelOffsetX\_onOddShots: | float | 0 by default. Sets a barrelX offset only during odd numbered shots, useful for twin-barreled units. Use with barrelX. Use the opposite value of barrelX for most cases. | barrelOffsetX\_onOddShots: -10 |
| NaN | #==== | #==== | Targeting control | NaN |
| 1.14 | aimOffsetSpread: | NaN | Sets the shot inaccuracy. 0 will make all shots land on target's center | aimOffsetSpread: 14 |
| NaN | canShoot: | bool | Defaults to true | canShoot: true |
| NaN | canAttackFlyingUnits: | LogicBoolean | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | canAttackFlyingUnits: false |
| NaN | canAttackLandUnits: | LogicBoolean | Default true. If false unit cannot attack surface units. | canAttackLandUnits: true |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | Default true. If false unit cannot attack underwaterunits. | canAttackUnderwaterUnits: true |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | canAttackNotTouchingWaterUnits: false |
| 1.13.3 | canOnlyAttackUnitsWithTags: | tags | Only attacks potential targets with specific tags | canOnlyAttackUnitsWithTags: shelled, armoured |
| 1.13.3 | canOnlyAttackUnitsWithoutTags: | tags | Only attacks potential targets without specific tags | canOnlyAttackUnitsWithoutTags: corrosive, fleshy |
| NaN | canAttackCondition: | LogicBoolean | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying |
| 1.14 | canAttackMaxAngle: | float | Max angle to target for turret to be allowed for fire. Defaults to 5, don't set lower. Can be set to 181 for turrets that don't need to turn to fire missiles. | canAttackMaxAngle: 181 |
| 1.13 | clearTurretTargetAfterFiring: | bool | Clears the turrets sub-target when using multi-targeting | clearTurretTargetAfterFiring: |
| NaN | limitingRange: | float | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | limitingRange: 100 |
| 1.13 | limitingAngle | int | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | limitingAngle: 60 |
| 1.13 | limitingMinRange: | int | Sets minimum range for turret. | limitingMinRange: 200 |
| 1.13 | interceptProjectiles\_withTags: | tags | Currently used with anti-nuke units. | interceptProjectiles\_withTags: nuke |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance: | int | Minimum distance required for intercepting projectile | interceptProjectiles\_andTargetingGroundUnderDistance: 100 |
| NaN | interceptProjectiles\_andUnderDistance: | int | Defaults to 2000, distance inflight before firing | interceptProjectiles\_andUnderDistance: 300 |
| NaN | interceptProjectiles\_andOverHeight: | int | Defaults to 0. Sets the projectile target height limit | interceptProjectiles\_andOverHeight: 10 |
| NaN | laserDefenceEnergyUse: | float | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | laserDefenceEnergyUse: 0.25 |
| NaN | #==== | #==== | Graphics and effects | #==== |
| NaN | invisible: | LogicBoolean | Don't render this turret, but still can shoot, etc. | invisible: true |
| NaN | image: | file (image) | Use custom image. Overrides unit's main turret image | image: gun.png |
| NaN | image\_applyTeamColors | bool | When true, the specific turret applies team colors over the special greens in the sprite. | image\_applyTeamColors: true |
| NaN | image\_drawOffsetX | float | Moves the image horizontally from the turret center. | image\_drawOffsetX: 0 |
| NaN | image\_drawOffsetY | float | Moves the image verticallly from the turret center. | image\_drawOffsetY: 30 |
| NaN | chargeEffectImage:\n | file (image) | Used with warmup. Shows a scaling effect image on turret barrel when charging. | chargeEffectImage: glow.png\n |
| NaN | warmupStartEffect | effect ref | Spawns specified effects when the specific turret is charging/warming up | warmupStartEffect: CUSTOM:abosrb |
| NaN | shoot\_sound: | string | Can be linked to an .ogg or .wav file, or one of the default game sounds (list at bottom of reference) | shoot\_sound: tank\_firing | shoot\_sound: missile.wav | shoot\_sound: ROOT:audio/shoot.ogg |
| NaN | shoot\_sound\_vol: | float | Sets the volume of the shoot sound | shoot\_sound\_vol: 0.4 |
| NaN | shoot\_flame: | effects | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 |
| NaN | shoot\_light | color | Produces a colored light upon shooting | shoot\_light: #fafafa |
| 1.13 | onShoot\_playAnimation | animation ref | Play a custom animation from an [animation] section after firing this turret | onShoot\_playAnimation: heatUp |
| 1.14 | onShoot\_triggerActions | action refs | Trigger these actions each time this turret fires | onShoot\_triggerActions: spawnShells |
| 1.15 | unloadUpToXUnitsAndGiveAttackOrder | int | Unloads X units at turret barrel locations and gives them the attack order of turret target | unloadUpToXUnitsAndGiveAttackOrder: 1 |
| NaN | recoilOffset | float | Push turret forward or back after firing for a recoil effect. Value in pixels. | recoilOffset: 10 |
| NaN | recoilOutTime | float | Time to get to offset position after firing | recoilOutTime: 1s |
| NaN | recoilReturnTime | float | Time to return to default position | recoilReturnTime: 0.5s |
| 1.13.3 | showRangeUIGuide | bool | Defaults to true. Displays the attack range for this turret | showRangeUIGuide: true |
| NaN | Section | NaN | [projectile\_NAME] | Projectiles are often used to inflict damage on an enemy, but can also be used for other purposes |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code | NaN |
| NaN | NaN | int | directDamage: or areaDamage: | NaN |
| NaN | NaN | NaN | life: | NaN |
| NaN | #==== | #==== | Core | NaN |
| NaN | life: | NaN | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | life: 300 |
| NaN | deflectionPower: | float | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | deflectionPower: -1 |
| 1.13 | explodeOnEndOfLife | bool | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing. Good for making area-denial weapons. | explodeOnEndOfLife: true |
| NaN | autoTargetingOnDeadTarget: | bool | Retarget to nearby unit if target dies while in transit | autoTargetingOnDeadTarget: true |
| 1.14 | autoTargetingOnDeadTargetRange | int | The range which it will select a new target if old target has died | autoTargetingOnDeadTargetRange: 100 |
| 1.14 | autoTargetingOnDeadTargetLead | float | The lead it will try to have on the new target | autoTargetingOnDeadTargetLead: 300 |
| 1.13 | unloadUpToXUnitsFromSource | int | Unload X units from source unit, to projectile explode location | unloadUpToXUnitsFromSource: 2 |
| 1.13 | teleportSource | bool | Move unit that shot this projectile to projectile explode location | teleportSource: true |
| NaN | NaN | NaN | NOTE: There is a list for all possible modifications to spawnUnit and spawnProjectile, type "spawnUnit:LIST" or "spawnProjectiles:LIST" in the Search function | NaN |
| 1.13 | spawnUnit: | projectile ref | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank(offsetX=10) |
| 1.14 | spawnProjectilesOnEndOfLife | projectile ref | Spawns new projectiles on end of life, useful for secondary projectiles | spawnProjectilesOnEndOfLife: torpedo\_split(offsetDir=90), torpedo\_split(offsetDir=-90) |
| 1.14 | spawnProjectilesOnExplode | projectile ref | Projectiles to spawns when this projectile hits it's target | spawnProjectilesOnExplode: flachette\*4 |
| 1.14 | spawnProjectilesOnCreate | NaN | Spawns projectiles on creation of this projectile, useful for making true shotgun-like projectile spread | spawnProjectilesOnCreate: shotgun |
| 1.13.3 | convertHitToSourceTeam | bool | Convert units hit to the team that fired this projectile. Useful to make capturing systems | convertHitToSourceTeam: true |
| NaN | NaN | NaN | NaN | NaN |
| 1.13 | tags | tags | Used for projectile interceptions (e.g. Nuke and Anti-Nuke Interaction) and in [action] autoTriggerOnEvent: tookDamage(withTag="[tagName]") | tags: nuke, missile |
| NaN | flameWeapon: | bool | Generates small flames on hit (only cosmetic) | flameWeapon: true |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | delayedStartTimer: 2s |
| NaN | #==== | #==== | Damage | NaN |
| NaN | directDamage: | int | Damage to target unit on hit. Does not work with targetGround:true as it won't have a clear unit to target | directDamage: 30 |
| NaN | areaDamage: | int | Damages on arrival of target with an area effect, use areaRadius to adjust size of damage. targetGround needs this to damage | areaDamage: 10 |
| 1.13 | areaRadius: | float | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | areaRadius: 100 |
| NaN | areaDamageNoFalloff | bool | Removes the falloff from areaDamage | areaDamageNoFalloff: true |
| NaN | areaRadiusFromEdge | bool | Applies damage from edge of units instead of center. Mostly effects large units. | areaRadiusFromEdge: true |
| 1.13 | areaExpandTime | float | Applies area damage as an expanding blast wave rather than instantly. Useful for nuke projectiles | areaExpandTime: 1s |
| 1.13 | areaHitAirAndLandAtSameTime | bool | Defaults to false | areaHitAirAndLandAtSameTime: true |
| NaN | areaHitUnderwaterAlways | bool | Defaults to false | areaHitUnderwaterAlways: true |
| NaN | areaIgnoreUnitsCloserThan | int | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | areaIgnoreUnitsCloserThan: 10 |
| 1.13 | buildingDamageMultiplier | float | Defaults to 1 | buildingDamageMultiplier: 3 |
| 1.13 | shieldDamageMultiplier | float | Defaults to 1. 0 to do no damage to shields and 2 to do double damage | shieldDamageMultiplier: 1.4 |
| 1.13 | shieldDefectionMultiplier | float | Defaults to 1. The amount of shield to bypass. 0 to ignore shields and directly damage hull | shieldDefectionMultiplier: 1.55 |
| 1.14 | hullDamageMultiplier | float | Defaults to 1. Can be used to create EMP weapons that affect shields only. 0 to ignore hull and only damage shields | hullDamageMultiplier: 2 |
| 1.15 | ignoreParentShootDamageMultiplier | bool | Sets whether multipliers are applied or not regardless of multipliers set in attack or setUnitStats | ignoreParentShootDamageMultiplier: true |
| NaN | armourIgnoreAmount | int | Amount of armour to ignore on target and do damage as if this armour was not there | armourIgnoreAmount |
| 1.13 | friendlyFire | bool/string | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy |
| 1.13.3 | mutatorX\_ifUnitWithTags | tags | Applies mutators to this projectile if target has corresponding tags | mutator1\_ifUnitWithTags: infantry |
| 1.13.3 | mutatorX\_ifUnitWithoutTags | tags | Same as ifUnitWithTags, but applies if target doesn't have the set tags | mutator1\_ifUnitWithoutTags: strongArmour |
| 1.13.3 | mutatorX\_directDamageMultiplier | float | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible. Replace X with desired name | mutatorX\_directDamageMultiplier: 5 |
| 1.13.3 | mutatorX\_areaDamageMultiplier | float | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | mutatorX\_areaDamageMultiplier: 1.2 |
| 1.13.3 | mutatorX\_changedExplodeEffect | effect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | mutatorX\_changedExplodeEffect: CUSTOM:specialBlast |
| 1.14 | mutatorX\_addResourcesDirectHit | resource | Add resource to all direct hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | mutatorX\_addResourcesDirectHit: oil=1 |
| 1.14 | mutatorX\_addResourcesAreaHit | resource | Add resource to all area hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | mutatorX\_addResourcesAreaHit: rust=4 |
| NaN | #==== | #==== | Movement | NaN |
| NaN | targetGround | bool | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | targetGround: true |
| 1.14 | targetGround\_includeTargetHeight | bool | Default false. for area affect AA weapons | targetGround\_includeTargetHeight: 40 |
| 1.14 | targetGroundHeightOffset | float | Default 0. for shooting over or under a target. Useful for projectiles that split and rain down. | targetGroundHeightOffset: 10 |
| NaN | speed: | float | Projectile default travel speed | speed: 3 |
| NaN | targetSpeed: | float | Accelerate to this speed | targetSpeed: 5 |
| 1.13 | targetSpeedAcceleration | float | Controls the speed rampup for targetSpeed | targetSpeedAcceleration: 0.3 |
| NaN | ballistic: | bool | Makes projectiles fly up into the air and come down, instead of going in a straight line | ballistic: true |
| NaN | ballistic\_delaymove\_height: | float | Sets up to how high the projectile needs to be before moving normally | ballistic\_delaymove\_height: 20 |
| NaN | ballistic\_height: | float | Sets the target height of the projectile | ballistic\_height: 10 |
| NaN | targetGroundSpread: | float | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | targetGroundSpread: 20 |
| NaN | speedSpread: | float | Randomly change the starting projectile speed by this amount | speedSpread: 3 |
| NaN | instant | bool | Hit target instantly | instant: true |
| NaN | instantReuseLast: | bool | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | instantReuseLast: true |
| 1.14 | instantReuseLast\_alsoChangeTurretAim | bool | Make turret's aim include last projectile's spread and sweep offsets, useful for beam weapons | instantReuseLast\_alsoChangeTurretAim: true |
| 1.14 | instantReuseLast\_keepAreaDamageList | bool | Default false. Keeping the list was the normal behaviour in 1.13 making area damage not apply a second time but this is not useful. Use this only if you want the old behaviour. | instantReuseLast\_keepAreaDamageList: true |
| 1.14 | interceptProjectile\_removeTargetLifeOnly | bool | Defaults to false. When false projectiles are just removed. Could be true to make hit projectiles explode or split when hit | interceptProjectile\_removeTargetLifeOnly: true |
| 1.13 | disableLeadTargeting | bool | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | disableLeadTargeting: true |
| 1.13 | leadTargetingSpeedCalculation | float | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | leadTargetingSpeedCalculation: 2 |
| 1.13.3 | initialUnguidedSpeedHeight | NaN | Sets vertical speed for projectiles with targetGround. Use gravity to make smooth arching projectiles. Better have gravity value slightly slower than this key to produce the arches. | initialUnguidedSpeedHeight: 30 |
| 1.13.3 | gravity: | NaN | Controls the pull for projectiles that target ground. Use together with initialUnguidedSpeedHeight | gravity: 29 |
| 1.14 | turnSpeed | float | Limits the turn speed of a projectile, making them inaccurate even with directDamage. Zero value will make it act like if targetGround is set true, but air target friendly option. | turnSpeed: 0 |
| 1.14 | wobbleAmplitude | float | How wide the projectile will wobble | wobbleAmplitude: 10 |
| 1.14 | wobbleFrequency | float | How often the projectile will wobble | wobbleFrequency: 4 |
| 1.14 | pushForce | float | Push (or pull with a negative value) the units that get hit. Divided by target mass | pushForce: 2 |
| 1.14 | pushVelocity | float | Push (or pull with a negative value) the units that get hit. Ignores target mass | pushVelocity: 5 |
| 1.14 | moveWithParent | bool | Move projectile as parent moves. Useful for beam effects that need to stick to source turret. | moveWithParent: true |
| 1.14 | sweepOffset | float | Useful for beam effects. | sweepOffset: 0.5 |
| 1.14 | sweepOffsetFromTargetRadius | float | Add to sweep offset by factor of target's radius. 0.4 would be 40% | sweepOffsetFromTargetRadius: 0.4 |
| 1.14 | sweepSpeed | float | Useful for beam effects. | sweepSpeed: 1.5 |
| 1.14 | retargetingInFlight | bool | Can retarget a new target mid-flight, perfect for flak-style weapons and projectiles that collide | retargetingInFlight: true |
| 1.14 | retargetingInFlightSearchDelay | float/time | How long between searching for new targets. Default 5 | retargetingInFlightSearchDelay: 1s |
| 1.14 | retargetingInFlightSearchRange | int | Range which targets are reselected. Default 120 | retargetingInFlightSearchRange: 300 |
| 1.14 | retargetingInFlightSearchLead | float | The lead of the projectile to try to hit the target. Default 15 | retargetingInFlightSearchLead: 30 |
| 1.14 | retargetingInFlightSearchOnlyTags | tag ref | Only retarget units with these tags | retargetingInFlightSearchOnlyTags: lightArmor |
| NaN | #==== | #==== | Graphics and effects | NaN |
| NaN | color | color | Recolors this projectile using a hex value. | color: #bebe50 |
| 1.13.3 | invisible | bool | When true, the projectile is not rendered but still functional. | invisible: true |
| NaN | image: | file (image) | Use custom image. Overrides drawType and frame | image: bullet |
| NaN | drawType | int | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png. Refer to end of sheet for the projectile images. | drawType:1 |
| NaN | drawSize: | float | Scale image. Defaults to 1 | drawSize: 1.5 |
| NaN | frame | int | Built-in image frame to use, starts at zero. | frame: 0 |
| NaN | hitSound: | bool | Default true | hitSound: true |
| 1.13 | explodeEffect | effect ref list | Produces the specified effects upon explosion. | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect |
| 1.13 | explodeEffectOnShield | effect ref list | Use this effect if shield is active on target | explodeEffectOnShield: CUSTOM:EMPwave |
| 1.13 | teamColorRatio | float | Mix 0-1 of team colour into color field | teamColorRatio: 1 |
| 1.14 | teamColorRatio\_sourceRatio | float | default is (1-teamColorRatio). Keep more of color when mixing. Note this might saturate colors. | teamColorRatio\_sourceRatio: 1 |
| 1.13 | drawUnderUnits | bool | If true, renders the projectile under units. Great for torpedos. | drawUnderUnits: true |
| 1.13 | effectOnCreate | effect ref list | Produces specified effects upon creation of the projectile. | effectOnCreate: CUSTOM:puff |
| 1.13 | shouldRevealFog | bool | Reveal fog to player on explode | shouldRevealFog: true |
| 1.13 | alwaysVisibleInFog | bool | Renders the projectile even when fog is present | alwaysVisibleInFog: false |
| 1.13 | nukeWeapon | bool | Shows on mini-map when fired. Some other side effects as well, like nuke explosion effect | nukeWeapon: true |
| NaN | trailEffect | bool/effect | true for built-in defaults, but can also point to any custom effects | trailEffect: true, trailEffect: CUSTOM:rocketThrust |
| 1.13 | trailEffectRate | float | Defaults to 3 | trailEffectRate: 4 |
| NaN | lightCastOnGround | bool | Renders light under the projectile | lightCastOnGround: true |
| NaN | lightSize: | float | Sets the size of the light emitted by the projectile. 1 value = 1 tile | lightSize: 1.5 |
| NaN | lightColor | color | Sets the color of the light emitted by the projectile. | lightColor: #ffe92b |
| NaN | largeHitEffect: | bool | Creates a large explosion and accompanying sound on hit (only cosmetic) | largeHitEffect: true |
| NaN | lightingEffect: | bool | Draw as lighting works best with instant:true | lightingEffect: true |
| NaN | laserEffect: | bool | Draw as laser works best with instant:true | laserEffect: true |
| 1.14 | beamImage | file (image) | Image to use for beam and laser effect type projectiles. Image is repeated vertically depending on the distance to target. Beam image should be 20 pixels or longer. Width does not matter, only the height. | beamImage: beam.png |
| 1.14 | beamImageOffsetRate | float | Sets how fast the beam image moves towards or away from the target | beamImageOffsetRate: 1 |
| 1.14 | beamImageStart | file (image) | Sprite for the origin point of the custom beam | beamImageStart: beamStart.png |
| 1.14 | beamImageStartRotated | bool | Defaults false. True to rotate with turret angle | beamImageStartRotated: true |
| 1.14 | beamImageEnd | file (image) | Sprite for the end point of the custom beam | beamImageEnd: beamEnd.png |
| 1.14 | beamImageEndRotated | bool | Defaults false | beamImageEndRotated: true |
| NaN | Section | NaN | [movement] | These are traits the unit has as far as movement goes, such as rotation and acceleration speed |
| NaN | Code | Value Type | Description | Example |
| NaN | movementType: | string | Defines what kind of terrain the unit will be able to move, along with other properties. Can use only one: NONE, LAND, AIR, WATER, HOVER, BUILDING, OVER\_CLIFF, OVER\_CLIFF\_WATER | movementType: LAND |
| NaN | slowDeathFall: | bool | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true |
| NaN | moveSpeed: | float | Maximum movement speed of the unit. A value of 1 means (1 pixel \* 60) per second (or 3 tiles per second) | moveSpeed: 1.2 |
| NaN | moveAccelerationSpeed: | float | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 |
| NaN | moveDecelerationSpeed: | float | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 |
| NaN | reverseSpeedPercentage: | float | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 |
| NaN | landOnGround: | bool | Should flying unit land when idle. | landOnGround: false |
| NaN | targetHeight: | float | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 |
| NaN | targetHeightDrift: | float | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 |
| NaN | startingHeightOffset: | float | Sets the initial height on spawn. Defaults at 0. | startingHeightOffset: 40 |
| 1.14 | heightChangeRate: | float | Rate at which the unit changes height, either from converting or drifting | heightChangeRate: 3 |
| 1.14 | fallingAcceleration: | float | The acceleration in which a unit drops | fallingAcceleration: |
| 1.14 | fallingAccelerationDead: | float | fallingAcceleration but when destroyed | fallingAccelerationDead: |
| NaN | maxTurnSpeed: | float | Sets the top turning speed of a unit | maxTurnSpeed: 4 |
| NaN | turnAcceleration: | float | Defines how fast units accelerate to max turn speed. | turnAcceleration: 1 |
| NaN | moveSlidingMode: | bool | Makes the unit slide when moveDecelerationSpeed is lower, making them drift and feel natural | moveSlidingMode: true |
| NaN | moveIgnoringBody: | bool | Allows the unit to move without fully turning in the direction its moving, useful for ships and air units | moveIgnoringBody: true |
| NaN | moveSlidingDir: | int | Sets direction when sliding | moveSlidingDir: 180 |
| NaN | joinsGroupFormations: | bool | Defaults to true. Changing not recommended. When false, the unit will directly move to the assigned waypoint without taking space consideration from neighboring units. | joinsGroupFormations: false |
| NaN | Section | NaN | [ai] | This determines what the AI will use the unit for, does not effect player |
| NaN | Code | Value Type | Description | Example |
| NaN | useAsBuilder: | bool | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | useAsBuilder: |
| NaN | useAsTransport | bool | Defaults to true if unit can transport units | useAsTransport |
| NaN | useAsHarvester | bool | Defaults to true if unit can reclaim resources | useAsHarvester |
| NaN | disableUse: | bool | Disallow AI building this unit or building | disableUse: |
| NaN | ai\_upgradePriority | float | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | ai\_upgradePriority |
| NaN | #==== | #==== | Buildings only | NaN |
| NaN | maxGlobal: | int | Maximum amount allowed for a specific structure for an AI team per map | maxGlobal: 50 |
| NaN | maxEachBase: | int | Maximum amount allowed for a specific structure for an AI team per "base", usually around an extractor or spawn point. To check for an AI base in sandbox, enable Debug Mode and Click Shift + F3 | maxEachBase: 10 |
| NaN | buildPriority: | float | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | buildPriority: 1 |
| NaN | noneInBaseExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the AIs base | noneInBaseExtraPriority: 2 |
| NaN | noneGlobalExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the any where on the map | noneGlobalExtraPriority: 4 |
| NaN | recommendedInEachBaseNum | float | Defaults to 0 | recommendedInEachBaseNum: 2 |
| NaN | recommendedInEachBasePriorityIfUnmet | float | Defaults to 0.5. Overrides buildPriority if recommended in base is too low. | recommendedInEachBasePriorityIfUnmet: 4 |
| NaN | upgradedFrom: | string | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | upgradedFrom: builderLevel1 |
| 1.14 | notPassivelyTargetedByOtherUnits | bool | Useful for walls, etc | notPassivelyTargetedByOtherUnits: true |
| 1.14 | lowPriorityTargetForOtherUnits | bool | Useful for units that cannot attack back. Eg walls | lowPriorityTargetForOtherUnits: true |
| 1.13.3 | whenUsingAsHarvester\_recommendedInEachBase | int | Assigns unit of the same name with certain amount on an AI base | whenUsingAsHarvester\_recommendedInEachBase: 3 |
| 1.13.3 | whenUsingAsHarvester\_recommendedGlobal | int | Assigns unit of the same name with certain amount on map | whenUsingAsHarvester\_recommendedGlobal: 20 |
| 1.13.3 | whenUsingAsHarvester\_includeOtherHarvesterCounts | bool | Includes all harvester types on a single counter | whenUsingAsHarvester\_includeOtherHarvesterCounts: true |
| 1.13.3 | onlyUseAsHarvester\_ifBaseHasUnitTagged | string | Only sets the harvester unit as a harvester if an AI base has a unit with particular tag(s) | onlyUseAsHarvester\_ifBaseHasUnitTagged: mineral, wood, stones |
| NaN | Section | NaN | [leg\_#] / [arm\_#] | Legs can move around when unit moves, Arms need an animation or convert |
| NaN | Code | Value Type | Description | Example |
| NaN | x: | float | Sets position of the foot on the X axis. | x: 10 |
| NaN | y: | float | Sets position of the foot on the Y axis. | y: 20 |
| NaN | copyFrom: | int | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 |
| NaN | attach\_x: | float | Sets the leg's attach point on the X axis. | attach\_x: 10 |
| NaN | attach\_y: | float | Sets the leg's attach point on the Y axis. | attach\_y: 0 |
| NaN | rotateSpeed: | float | Sets the leg's rotation speed on movement | rotateSpeed: 2 |
| NaN | endDirOffset | int | Target foot/end rotation relative to body | endDirOffset: 45 |
| NaN | lockMovement | bool | Lock to unit body. Useful if walking unit converted to a flying unit. | lockMovement: true |
| NaN | heightSpeed: | float | Sets how fast the leg rises while walking | heightSpeed: 2 |
| NaN | moveSpeed | float | Sets how fast the leg moves while walking | moveSpeed: 3 |
| NaN | moveWarmUp | NaN | Delay before the leg moved | moveWarmUp: 2 |
| NaN | holdDisMin: | float | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | holdDisMin: 10 |
| NaN | holdDisMax: | float | Defaults to 16. Force reposition of leg at this distance. Repositions leg at this distance even if a neighboring leg is moving | holdDisMax: 20 |
| NaN | holdDisMin\_maxMovingLegs | int | Sets maximum amount of legs to check before applying distance holding | holdDisMin\_maxMovingLegs: 4 |
| NaN | hold\_moveOnlyIfFurthest | bool | Defaults to true. When true, starting moving leg only if it is currently the furthest leg from where it should be. | hold\_moveOnlyIfFurthest: true |
| NaN | holdDisMin\_checkNeighbours | bool | Checks neighbors before applying distance holding | holdDisMin\_checkNeighbours: true |
| NaN | hardLimit: | float | Defaults to 50. Force leg to never go this far. Better to not be reached. | hardLimit: 60 |
| NaN | estimatingPositionMultiplier | float | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | estimatingPositionMultiplier: 2 |
| NaN | #==== | #==== | Graphics and effects | #==== |
| NaN | hidden: | logic boolean | When true, hides the arm/leg | hidden: true |
| 1.13 | image\_end | file (image) | Sets the main arm end sprite | image\_end: rotor.png |
| 1.13 | image\_end\_shadow | file (image) | Sets the shadow for the arm | image\_end\_shadow: AUTO |
| 1.13 | image\_end\_teamColors | bool | When true, the arm end will apply team colors | image\_end\_teamColors: true |
| 1.13 | image\_foot | file (image) | same as image\_end, but acts as the foot for the leg | image\_foot: footR.png |
| NaN | image\_foot\_shadow | file (image) | Sets the shadow for the foot | image\_foot\_shadow: AUTO |
| 1.13 | image\_middle | file (image) | Sets the arm image | image\_middle: NONE |
| NaN | image\_leg | file (image) | Sets the leg image | image\_leg: legR.png |
| 1.13 | draw\_foot\_on\_top | bool | Renders foot above leg | draw\_foot\_on\_top: true |
| NaN | drawOverBody | bool | Draw over body | drawOverBody: false |
| NaN | drawUnderAllUnits | bool | Draw over all units | drawUnderAllUnits: true |
| NaN | drawDirOffset | float | Rotates the foot/arm sprite to a specified direction | drawDirOffset: 73 |
| NaN | dust\_effect: | bool | Spawns dust particles on each step. | dust\_effect: true |
| NaN | spinRate | float | Makes arm/leg spin, like idleSpin for turrets. Great for helicopters | spinRate: 2 |
| NaN | favourOppositeSideNeighbours | bool | calculate neighbours with X 10 times closer than Y | favourOppositeSideNeighbours: true |
| NaN | drawLegWhenZoomedOut | bool | For performance, defaults changes based on unit size | drawLegWhenZoomedOut: false |
| NaN | drawFootWhenZoomedOut | bool | For performance, defaults changes based on unit size | drawFootWhenZoomedOut: false |
| 1.15p9 | liftingHeightOffset | int | Often used with decals | liftingHeightOffset: 20 |
| NaN | targetHeight | int | Sets height of the leg | targetHeight: 10 |
| NaN | targetHeightRelative | bool | Apply height relative to unit's height | targetHeightRelative: true |
| NaN | resetAngle: | float | Unused | NaN |
| NaN | Section | NaN | [attachment\_NAME] | Attachments are slots where other units can be positioned or carried |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | x | float | Sets the horiztontal position of the attachment | x |
| 1.13.3 | y | float | Sets the vertical position of the attachment | y |
| 1.13.3 | height | float | Sets the elevation of the attachment | height |
| 1.13.3 | idleDir | int | Sets the direction of the attachment when idle | idleDir |
| 1.14 | idleDirReversing | int | Sets the direction of the attachment when the base unit is moving in reverse | idleDirReversing |
| 1.13.3 | isVisible | bool | Defaults to true. If false, the attachment is hidden | isVisible |
| 1.13.3 | onCreateSpawnUnitOf | unit ref | Upon spawning the unit, specified attached unit is also spawned as attachment | onCreateSpawnUnitOf |
| 1.13.3 | isUnselectable | bool | Defaults to false. When true, the player cannot click the attachment. | isUnselectable |
| NaN | canAttack | bool | Defaults to true. Set to false to stop this attachment attacking. | canAttack |
| 1.13.3 | canBeAttackedAndDamaged | bool | When true, the attachment is vulnerable to attacks | canBeAttackedAndDamaged |
| 1.13.3 | deattachIfWantingToMove | bool | If the unit is ordered to move, it will detach. This includes waypoints from actions. | deattachIfWantingToMove |
| 1.13.3 | lockLegMovement | bool | Locks the leg movement while attached. | lockLegMovement |
| 1.13.3 | keepAliveWhenParentDies | bool | Defaults to false | keepAliveWhenParentDies: true |
| 1.13.3 | setDrawLayerOnTop | bool | Renders the attachment above the base unit | setDrawLayerOnTop |
| 1.13.3 | setDrawLayerOnBottom | bool | Renders the attachment below the base unit | setDrawLayerOnBottom |
| 1.13.3 | addTransportedUnits | bool | Often used with transport units, when true, attaches one of the unit passenger to this attachment slot | addTransportedUnits |
| 1.13.3 | lockRotation | bool | When true, stops the attachment from rotating | lockRotation |
| 1.13.3 | rotateWithParent | bool | When true, the attachment rotates with the parent unit | rotateWithParent |
| 1.13.3 | resetRotationWhenNotAttacking | bool | Similar to shouldResetTurret:for turrets. | resetRotationWhenNotAttacking |
| 1.13.3 | prioritizeParentsMainTarget | bool | It will priotize targeting the main target. Defaults to true. | prioritizeParentsMainTarget |
| 1.13.3 | alwaysAllowedToAttackParentsMainTarget | bool | Will always attack the parents main target. | alwaysAllowedToAttackParentsMainTarget |
| 1.14 | onParentTeamChangeKeepCurrentTeam | bool | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | onParentTeamChangeKeepCurrentTeam |
| 1.14 | onConvertKeepExistingUnitInSameSlot | bool | When true, the attachment is retained on the same attachment slot when the parent is converted to another unit | onConvertKeepExistingUnitInSameSlot |
| 1.14 | unloadInCurrentPosition | bool | Defaults false. If true transported attached units are kept current attached location when unloading | unloadInCurrentPosition |
| 1.14 | keepWaypointsNeedingMovement | bool | Defaults false. If true attached units keep waypoints with movement even while they cannot move. Useful if they will be automatically deattached soon. | keepWaypointsNeedingMovement |
| 1.14 | smoothlyBlendPositionWhenExistingUnitAdded | bool | NaN | smoothlyBlendPositionWhenExistingUnitAdded |
| 1.14 | showAllActionsFrom | LogicBoolean | Show all actions of the units attached in the parent unit list when selected | showAllActionsFrom |
| 1.14 | createIncompleteIfParentIs: | bool | If parent hasn't been built, create attachment with the same built value. Links built values till attachment is complete. Useful for buildings built with nano. | createIncompleteIfParentIs: |
| 1.14 | redirectDamageToParent: | bool | Redirects damage done to this attachment to the parent instead of damaging itself directly | redirectDamageToParent: |
| 1.14 | redirectDamageToParent\_shieldOnly: | bool | When enemies attack the attachment, all damage are redirected to the parent's shield | redirectDamageToParent\_shieldOnly: |
| NaN | Section | NaN | [action\_NAME] / [hiddenAction\_NAME] | Actions that can dynamically cause changes to units and resources |
| NaN | Code | Value Type | Description | Example |
| NaN | text | string | Labels the action. Supports dynamic text | text: Catch Fish, text: Fire: %{self.resource.ammo} |
| NaN | textPostFix: | string | Text shown as suffix, useful with textAddUnitName to create text UI | text: [ textPostFix: ] textAddUnitName: unitRef self.attachment(slot="${slotId}") |
| NaN | text\_{LANG} | string | Alternative text for different language. Use ISO 639-1 Language code on the {LANG} prefix. Supports dynamic text | text\_es: Fuego %{self.resource.ammo} |
| NaN | description | string | A display text when you select your unit's action, used to explain it's purpose. Supports dynamic text | description: Fires shot on target area |
| NaN | description\_{LANG} | string | Alternative description for different language. Use ISO 639-1 Language code on the {LANG} prefix. Supports dynamic text | description\_es: Disparos en el área objetivo |
| NaN | displayType | list | Affects how the action button and text is displayed. Options: none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox, infoOnlyStockpile | displayType: upgrade |
| NaN | displayRemainingStockpile | bool | Queue is shown as number of times action can be triggered based on price. Use dynamic text on text as alternative. | displayRemainingStockpile: true |
| NaN | pos | float | Order action appears in UI. Merges with positions from canBuild buttons | pos: 1 |
| NaN | iconImage | file (image) | Sets a thumbnail image for the action button | iconImage: fireShot.png |
| 1.14 | iconExtraImage | file (image) | Drawn over top of icon image. Useful for upgrade icons, etc | iconExtraImage: fireShotNo.png |
| 1.14 | iconExtraColor | colour | Defaults to #64FFFFFF | iconExtraColor: #ff0000 |
| 1.14 | iconExtraIsVisible | LogicBoolean | When the condition is met, the extras for icon is visible. | iconExtraIsVisible: if self.resource.ammo < 1 |
| 1.13.3 | unitShownInUI | unitRef/unitType | Display this unit. (as if this action built this unit) | eg: unitShownInUI: unitRef self.transporting(slot=0) or unitShownInUI: heavyTank |
| NaN | guiBuildUnit | unitRef/unitType | Uses the UI similar when building structures. An alternative to fireTurretX on some cases | guiBuildUnit: placeholderUnit |
| 1.14 | setBuilt | float | Designates how built the unit is from a percentage of 0-100% with a number between 0 and 1. | setBuilt: 0.5 |
| 1.15p9 | tags | tags | To be used with the withTag parameter for self.queueSize(withTag=x) and queueItemAdded and queueItemCanceled events | tags: actionFire |
| 1.15p11 | id | string | Allow same/equivalent actions to be more easily connected when converting between units, to preserve queues, calldowns, etc. (Normally action order is used but can be unstable.) | id: fireShot |
| NaN | #==== | #==== | Unit Reference - Dynamically parts from already existing units, useful w/ isAlsoViewableByEnemies | self, self.parent(), self.transporting(slot=x), self.attachment(slot=X) |
| 1.14 | textAddUnitName | unitRef/unitType | Add this unit's name to this action's text | eg: textAddUnitName: unitRef self.attachment(slot="1") |
| 1.14 | descriptionAddFromUnit | unitRef/unitType | Add this unit's description to this action's description | descriptionAddFromUnit: builder |
| 1.14 | descriptionAddUnitStats: | unitRef/unitType | Add this unit's stats (eg HP, energy, resources) to this action's description | descriptionAddUnitStats: unitRef self.parent() |
| 1.14 | unitShownInUIWithHpBar | bool | default true, Only used when unitShownInUI is a unitRef | unitShownInUIWithHpBar: true |
| 1.14 | unitShownInUIWithProgressBar | bool | default true, Only used when unitShownInUI is a unitRef. Replaces HP bar if active | unitShownInUIWithProgressBar: false |
| NaN | #==== | #==== | Requirements for player/AI to use in UI | NaN |
| 1.14 | alwaysSinglePress | bool | Defaults false. When true no confirmation needed on mobile, when used with canPlayerCancel:false and allowMultipleInQueue:false will also hide the queue interface. | alwaysSinglePress: true |
| NaN | price | resources | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | isActive | LogicBoolean | Defaults true. If false then action is disabled and shown in red in UI. | isActive: true |
| NaN | isVisible | LogicBoolean | Defaults true. If false action is hidden from UI and disabled. | isVisible: true |
| NaN | isLocked | LogicBoolean | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | isLocked: if self.resource.ammo < 1 |
| NaN | isLockedMessage | LocaleString | Shows the message when the isLocked's condition is met | isLockedMessage: Not enough ammunition |
| 1.13.3 | isLockedAlt | LogicBoolean | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | isLockedAlt: if numberOfUnitsInGame(withTag="factory") < 2 |
| 1.13.3 | isLockedAltMessage | LocaleString | Message for isLockedAlt | isLockedAltMessage: Not enough factories! |
| 1.13.3 | isLockedAlt2 | LogicBoolean | Second isLocked alternative | isLockedAlt2: if nearestUnit(withTag="explosive", withinRange="500", relation="own").hp() < 10 |
| 1.13.3 | isLockedAlt2Message | LocaleString | Message for isLockedAlt2 | isLockedAlt2Message: Explosive stockpile is heavily damaged. |
| NaN | allowMultipleInQueue | bool | When false makes it so only one action can be queued of this type (useful for keeping actions with conditions from being spammed) | allowMultipleInQueue: true |
| NaN | onlyOneUnitAtATime | bool | When action is picked in UI, only one unit selected with get this action. Defaults to false. | onlyOneUnitAtATime: true |
| 1.13.3 | isGuiBlinking | LogicBoolean | Flashes in UI to draw attention to it. Might be annoying if used often, recommended only for temporarily states/messages | isGuiBlinking: true |
| 1.14 | isAlsoViewableByAllies | bool | Allows ally players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | isAlsoViewableByAllies: true |
| 1.14 | isAlsoViewableByEnemies | bool | Allows enemy players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | isAlsoViewableByEnemies: true |
| NaN | #==== | #==== | AI - How the AI uses this action | #==== |
| 1.13.3 | ai\_isHighPriority | LogicBoolean | Use this for faction selection actions or other high priority actions such as building high priority units | ai\_isHighPriority: true |
| NaN | ai\_isDisabled | LogicBoolean | Defaults false. Stop AI using this action. (Note when ai\_isHighPriority is true this might be ignored) | ai\_isDisabled: false |
| 1.13.3 | ai\_considerSameAsBuilding | bool | Be careful with | ai\_considerSameAsBuilding: true |
| NaN | #==== | #==== | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically add an action to the queue) |
| 1.13.3 - 1.15p9 | autoTriggerOnEvent: | event | Action will be triggered when an event is happening on a particular unit. Options: created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded(withActionTag="#"), queueItemCancelled(withActionTag="#"), teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit, transportUnloadedOrRemovedUnit, tookDamage(withTag="#"), newMessage(withTag="#"), enteredTransport, leftTransport, attachmentRemoved. withTag parameter for tookDamage uses tag from projectile and it is optional. withTag parameter for newMessage uses message tags. | autoTriggerOnEvent: queueItemCancelled(withActionTag="actionFire") |
| 1.15 | autoTriggerOnEventRecursionLimit | int | Defaults to 1. Prevents loops, useful with triggering itself so it doesn't infinitely triggers, good for repeating action effect on event | autoTriggerOnEventRecursionLimit: 4 |
| NaN | autoTrigger | LogicBoolean | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater(), autoTrigger: if self.customTimer(laterThanSeconds=5) |
| NaN | autoTriggerCheckRate | enum | options: everyFrame (default), every4Frames, every8Frames. This overrides autoTriggerCheckRate set on [core] Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| NaN | #==== | #==== | While action is queued | NaN |
| NaN | buildSpeed | time | Sets how fast the action has to be queued before doing the action behaviors | buildSpeed: 5s |
| NaN | highPriorityQueue | bool | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | highPriorityQueue: true |
| NaN | canPlayerCancel | bool | Defaults to true. When false, players cannot cancel this particular action. | canPlayerCancel: false |
| NaN | whenBuilding\_cannotMove | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | whenBuilding\_cannotMove: true |
| NaN | whenBuilding\_playAnimation | animation ref | Plays a specified animation while the action is queued. | whenBuilding\_playAnimation: firePrepare |
| NaN | whenBuilding\_rotateTo | float | Rotate unit body to this direction when action is in active queue. | whenBuilding\_rotateTo: 45 |
| NaN | whenBuilding\_rotateTo\_orBackwards | bool | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | whenBuilding\_rotateTo\_orBackwards: true |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | bool | Pause action queue till rotation is finished | whenBuilding\_rotateTo\_waitTillRotated: true |
| NaN | whenBuilding\_temporarilyConvertTo | unit ref | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | whenBuilding\_temporarilyConvertTo: cannon\_uberState |
| 1.15 | whenBuilding\_temporarilyConvertTo\_keepFields | fields | Don't change these fields when using whenBuilding\_temporarilyConvertTo (both to and from) | whenBuilding\_temporarilyConvertTo\_keepFields: maxHp, maxEnergy, moveSpeed |
| NaN | whenBuilding\_triggerAction | action ref | While action is queued, another action is triggered. | whenBuilding\_triggerAction: spawnMinions |
| 1.14 | whenBuilding\_rotateTo\_aimAtActionTarget | bool | While action is queued, the unit is rotated to the target. Often used with fireTurretX actions | whenBuilding\_rotateTo\_aimAtActionTarget: true |
| 1.14 | whenBuilding\_rotateTo\_rotateTurretX | turret ref | While action is queued, a specified turret is aimed at the target. Often used with fireTurretX actions | whenBuilding\_rotateTo\_rotateTurretX: cannon |
| NaN | spawnEffectsOnQueue | effect ref | Effects to spawn at unit when action is first added to queue | spawnEffectsOnQueue: CUSTOM:steam |
| NaN | playSoundToPlayerOnQueue | sound ref | Global sound to play to unit's player only when action is first added to queue | playSoundToPlayerOnQueue: eva\_building.ogg |
| NaN | #==== | #==== | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN |
| NaN | requireConditional | LogicBoolean | Skip all effects of this action if this evaluates to false | requireConditional: if self.resource.mass < 300 |
| 1.13.3 | convertTo | unit ref | Convert your unit into another unit. properties are preserved. | convertTo: fishLevel2 |
| 1.14 | convertTo\_keepCurrentTags | bool | Keep current and temporarily tags and ignores default tags on convertTo target. | convertTo\_keepCurrentTags: true |
| 1.15 | convertTo\_keepCurrentFields | fields | Don't change these fields when converting, useful with setUnitStats (Allowed fields: maxHp, maxShield, shieldRegen, maxEnergy, armour, mass, shootDelayMultiplier, moveSpeed, maxAttackRange.)\n | convertTo\_keepCurrentFields: armour, maxEnergy, maxHp |
| NaN | addEnergy | addEnergy | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | addEnergy: 10 |
| NaN | addResources | resources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 |
| NaN | addResourcesScaledByAIHandicaps | resources | Same as addResources, but increased or decreased depending on AI difficulty level.\n\n\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\nVery Easy == x0.3\nEasy == x0.6\nMedium == x1\nHard == x1.3\nVery Hard == x1.7\nImpossible == x3.7 | addResourcesScaledByAIHandicaps: credits=5, hp=-100 |
| 1.15 | addResourcesWithLogic | dynamic resources | Like addResources but allows logic to be used for the resource value | addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) |
| 1.15 | setResourcesWithLogic | dynamic resources | Sets target resources to this value instead of adding. Becareful with global resources. | setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2 |
| NaN | deleteSelf | bool | Remove self with no explosions or sounds | deleteSelf: true |
| NaN | resetCustomTimer | LogicBoolean | Reset timer used with self.customTimer() | resetCustomTimer: true |
| 1.13.3 | setBodyRotation | dynamic | Rotates the unit to a particular direction. Supports dynamic values | setBodyRotation: 270, setBodyRotation: directionBetween(self, customTarget1) |
| 1.15 | setUnitStats | fields values | Allows changing of a select number of fields dynamically without converting. Supports =/+=/-=, with dynamic maths/logic. Changeable fields: maxHp, hp, maxShield, shield, shieldRegen, maxEnergy, energy, armour, mass, shootDelayMultiplier, shootDamageMultiplier, moveSpeed, maxTurnSpeed, maxAttackRange, fogOfWarSightRange, nanoRange, selfRegenRate, targetHeight, nanoFactorySpeed. (targetHeight adjust the unit's height gradually relative to its current height, unlike setting it with setHeight) | setUnitStats: maxShield += 20, moveSpeed += 0.1 |
| 1.15 | resetUnitStats | boolean | Reset changes made by setUnitStats to base values | resetUnitStats: true |
| 1.15 | setUnitMemory | key value pairs | Change this unit's memory, values can be set with logic. Memory must first be defined with defineUnitMemory | setUnitMemory: """\n customText=memory.customText+'hello',\n nukeActive=true, \n nextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')\n""" |
| 1.15p11 | NaN | NaN | NOTE: In setting array memories, it is important to put the array index (supports dynamic values) | setUnitMemory: myTargets[4]=nearestUnit(withTag="fish") |
| 1.15 | setHeight | logicNumber | Changes unit height based on this height value | setHeight: parent.height+5 |
| 1.15 | setCustomTarget1: | unit ref | Used for unit linking without requiring unit memories or markers. It is the unit that built this by default. | setCustomTarget1: self.parent |
| 1.15 | setCustomTarget2: | unit ref | Like setCustomTarget1 and with the same use. It is none by default. | setCustomTarget2: lastDamagedBy |
| 1.15 | sendMessageTo: | unit ref | Sends a message to a targeted unit | sendMessageTo: unitref nearestUnit(withinRange=100, withTag="fish"). |
| 1.15 | sendMessageWithTags: | Message Tag | Useful for message detection in an autoTriggerOnEvent event, eg autoTriggerOnEvent:newMessage(withTag='xyz') | sendMessageWithTags: hitZone |
| 1.15 | sendMessageWithData | key-value | The data that will be sent to the targeted unit. Allows multiple key-value pairs with any dynamic data type, use eventData() to read this data in the event | sendMessageWithData: fish="nice!", cat=self.activeWaypointTarget, amount=4, xyz=memory.something |
| 1.15 | refundAllQueuedItems | boolean | Refunds the spent price in the queue of a specific action; Includes set flags in price | refundAllQueuedItems: true |
| 1.15 | removeAllQueuedItemsWithoutRefund | boolean | Similar to refundAllQueuedItems, but does not refund | removeAllQueuedItemsWithoutRefund: true |
| NaN | #==== | #==== | Outcome - Chaining Actions | NaN |
| NaN | alsoTriggerAction | action refs | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound |
| NaN | alsoQueueAction | action refs | Adds another action into the normal unit's queue. Ignores action's requirements | alsoQueueAction: spawnMinions |
| NaN | alsoTriggerOrQueueActionConditional | LogicBoolean | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | alsoTriggerOrQueueActionConditional: false |
| 1.15p9 | alsoTriggerOrQueueActionWithTarget | unitref | Changes the target of the triggered action, normally defaults to the current action target. Effects things like fireTurretXAtGround, spawnUnits, thisActionTarget(), etc | alsoTriggerOrQueueActionWithTarget: lastDamagedBy |
| 1.15p11 | alsoTriggerActionRepeat | logicNumber | Repeats the alsoTriggerAction call, thisActionIndex changed on each repeat - Useful to create loops or work with arrays | alsoTriggerActionRepeat: 5 |
| NaN | #==== | #==== | Outcome - Sounds | NaN |
| NaN | playSoundAtUnit | sound ref | Local sound to play when action finishes | playSoundAtUnit: engineStart.ogg |
| NaN | playSoundGlobally | sound ref | Global sound to play to all players in game | playSoundGlobally: hornWarn.ogg |
| NaN | playSoundToPlayer | sound ref | Global sound to play to unit's player only | playSoundToPlayer: confirm.wav |
| NaN | #==== | #==== | Outcome - Fire projectile from turret | NaN |
| NaN | fireTurretXAtGround | turret ref | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo |
| NaN | fireTurretXAtGround\_withOffset: | point | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 |
| NaN | fireTurretXAtGround\_withProjectile: | projectile ref | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | fireTurretXAtGround\_withProjectile: nuke |
| 1.15 | fireTurretXAtGround\_withTarget | unitref | Fires a turret aimed at the location of the indicated unit or marker | fireTurretXAtGround\_withTarget: lastDamagedBy |
| 1.13.3 | fireTurretXAtGround\_count | NaN | Number of projectiles to fire. Defaults to 1 | fireTurretXAtGround\_count: 3 |
| 1.13.3 | fireTurretXAtGround\_onlyOverPassableTileOf | NaN | Only allow tiles crossable by this movement type to be selected (e.g., LAND,BUILDING,WATER,HOVER) | fireTurretXAtGround\_onlyOverPassableTileOf: HOVER |
| 1.15p11 | fireTurretXAtGround\_showGuideDecals | decal refs | Draws decals at the target location. Recommend setting up decals with layer: inactive | fireTurretXAtGround\_showGuideDecals: strikeZone300 |
| NaN | #==== | #==== | Outcome - Spawning | NaN |
| NaN | NaN | NaN | NOTE: There is a section for all possible modifications to spawnUnit, type "spawnUnits:LIST" in the Search function of the spreadsheet | NaN |
| 1.13.3 | spawnUnits | unitref | Spawn units at action's target. See 'Spawn units line' section in this doc for details. | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) |
| 1.13.3 | produceUnits | unitref | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | produceUnits: builder\*4, plasmaTank\*8 |
| NaN | spawnEffects | effect ref | Effects to spawn at unit | spawnEffects: CUSTOM:puff |
| NaN | #==== | #==== | Outcome - Position | NaN |
| 1.14 | offsetSelfAbsolute: | point3d | Offsets unit position absolutely by this point. Format: [x,y,height] | offsetSelfAbsolute: 0, 0, 40 |
| 1.15p11 | teleportTo | unit ref/marker | Changes unit position to this position. Great alternative to fireTurretX with teleporting projectile | teleportTo: memory.lastLocation |
| NaN | #==== | #==== | Outcome - Transport Changes | NaN |
| NaN | addUnitsIntoTransport | unitTypes | Creates and add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank(neutralTeam=true) |
| 1.15 | transportTargetNow | unit ref | {Currently broken in 1.15 - don't use} Instantly tries to transports existing units on the map into this transport. Might fail if rules don't allow this unit to be transported. | NaN |
| NaN | deleteNumUnitsFromTransport | int | Removes a specified amount of cargo units | deleteNumUnitsFromTransport: 2 |
| 1.13.3 | deleteNumUnitsFromTransport\_onlyWithTags | string(s) | Removes a specified amount of cargo units, but only those with specified tags | deleteNumUnitsFromTransport\_onlyWithTags: cheapStuff |
| 1.13.3 | startUnloadingTransport | bool | Unloads all cargo units normally | startUnloadingTransport: true |
| 1.13.3 | forceUnloadTransportNow | bool | For unload all units, or slot targeted by forceUnloadTransportNow\_onlyOnSlot. Unloads even if no space or overwater, etc | forceUnloadTransportNow: true |
| 1.14 | forceUnloadTransportNow\_onlyOnSlot | int | Focuses the force unload to a specific slot | forceUnloadTransportNow\_onlyOnSlot: drop1 |
| NaN | #==== | #==== | Outcome - Waypoint Changes | NaN |
| 1.13.3 | clearAllWaypoints | bool | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | clearAllWaypoints: true |
| 1.13.3 | clearActiveWaypoint | bool | Clears only the current waypoint | clearActiveWaypoint: true |
| NaN | addWaypoint\_type | enum | Adds a waypoint with a specific purpose. Options: move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | addWaypoint\_type: move |
| 1.13.3 | addWaypoint\_unitType | unitTypes | Only for use with addWaypoint\_type:build | addWaypoint\_unitType: turret |
| 1.13.3 | addWaypoint\_prepend | bool | Add to the start of the waypoint queue or the end | addWaypoint\_prepend: false |
| 1.13.3 | addWaypoint\_triggerActionIfFailed | actions | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | addWaypoint\_triggerActionIfFailed: retreat |
| 1.14 | addWaypoint\_triggerActionIfMatched | actions | Triggers an action if a waypoint is legal | addWaypoint\_triggerActionIfMatched: VIP\_target |
| 1.13.3 | addWaypoint\_maxTime | time | Automatically remove this waypoint if it has been active for longer than this time. | addWaypoint\_maxTime: 20s |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_tagged | tags | Puts the waypoint to a nearest unit with specific tags | addWaypoint\_target\_nearestUnit\_tagged: assault, mechanized |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_team | relation | Puts the waypoint to a nearest unit with a specific relation to the player's unit. Options: own, neutral, allyNotOwn, ally, enemy, any, notOwn | addWaypoint\_target\_nearestUnit\_team: ally |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_maxRange | float | Puts the waypoint to a nearest unit within the maximum range specified. | addWaypoint\_target\_nearestUnit\_maxRange: 2000 |
| 1.13.3 | addWaypoint\_target\_mapMustBeReachable | bool | Puts the waypoint only if the waypoint target is reachable by the unit (e.g., if a unit cannot cross two islands, the waypoint is not placed.) | addWaypoint\_target\_mapMustBeReachable: true |
| 1.15 | addWaypoint\_target\_fromReference | unit ref | Puts the waypoint to a marker or a reference unit | addWaypoint\_target\_fromReference: self.memory.lastDock |
| 1.13.3 | addWaypoint\_position\_offsetFromSelf | point | Puts the waypoint to an absolute coordinate | addWaypoint\_position\_offsetFromSelf: |
| 1.13.3 | addWaypoint\_position\_fromAction | bool | Puts the waypoint taken from an action that triggered this action | addWaypoint\_position\_fromAction: fireShot |
| 1.13.3 | addWaypoint\_position\_randomOffsetFromSelf | point | Puts the waypoint to a random relative coordinate | addWaypoint\_position\_randomOffsetFromSelf: |
| 1.14 | addWaypoint\_position\_relativeOffsetFromSelf | point | Puts the waypoint to a relative coordinate | addWaypoint\_position\_relativeOffsetFromSelf: 10, 20 |
| 1.14p6 | addWaypoint\_target\_randomUnit\_tagged | tags | Puts the waypoint to a random unit with specific tags | addWaypoint\_target\_randomUnit\_tagged: chargers, strikers |
| 1.14p6 | addWaypoint\_target\_randomUnit\_team | relation | Puts the waypoint to a random unit with a specific relation to the player's unit. Options: own, neutral, allyNotOwn, ally, enemy, any, notOwn | addWaypoint\_target\_randomUnit\_team: any |
| 1.14p6 | addWaypoint\_target\_randomUnit\_maxRange | int | Puts the waypoint to a random unit within the maximum range specified. | addWaypoint\_target\_randomUnit\_maxRange: 1000 |
| NaN | #==== | #==== | Outcome - Cooldown | NaN |
| 1.14 | addAllActionCooldownsTime | time | Adds cooldown on all actions, including canBuilds | addAllActionCooldownsTime: 4s |
| 1.14 | addActionCooldownTime | time | Player cannot use action again for this amount of time | addActionCooldownTime: 20s |
| 1.14 | addActionCooldownApplyToActions | action ids | Sets addActionCooldownTime's target. Defaults to this action. | addActionCooldownApplyToActions: retreat, transformFins |
| 1.14 | clearAllActionCooldowns | bool | Removes all existing cooldowns on all buttons | clearAllActionCooldowns: true |
| NaN | #==== | #==== | Outcome - Animation | NaN |
| 1.13.3 | playAnimation | animation id | Plays animation when the action is triggered | playAnimation: engageThrusters |
| 1.13.3 | playAnimationIfNotPlaying | bool | Don't restart animation if this animation is already playing | playAnimationIfNotPlaying: true |
| 1.13.3 | finishPlayingLastAnimation | bool | Finish last animation, including blend out | finishPlayingLastAnimation: true |
| 1.13.3 | stopLastAnimation | bool | Stop last animation, skipping blend out | stopLastAnimation: true |
| 1.13.3 | switchToNeutralTeam | boolean | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | switchToNeutralTeam: false |
| 1.13.3 | switchToAggressiveTeam | boolean | Change to a built-in team that is aggressive to all other teams. Does not get captured. | switchToAggressiveTeam: true |
| 1.15 | switchToTeam | logicNumber | Team id to switch to. Starts at 0. (but -1 for a neutral team, -2 for aggressive Team). Also supports dynamic values | switchToTeam: 2, switchToTeam: lastDamagedBy.teamId |
| NaN | #==== | #==== | Outcome - Take Resources from other units | NaN |
| 1.13.3 | takeResources | customPrice | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 |
| 1.13.3 | takeResources\_includeUnitsInTransport | bool | Includes cargo units in taking resources | takeResources\_includeUnitsInTransport: true |
| 1.13.3 | takeResources\_includeParent | bool | Include attachment parent or transport parent | takeResources\_includeParent: true |
| 1.15 | takeResources\_includeReference | unit ref | Includes referenced units in taking resources | takeResources\_includeReference: self.lastDamagedBy |
| 1.13.3 | takeResources\_includeUnitsWithinRange | float | Includes all units within the specified range | takeResources\_includeUnitsWithinRange: 300 |
| 1.13.3 | takeResources\_includeUnitsWithinRange\_team | TeamRelation | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | takeResources\_includeUnitsWithinRange\_team: own |
| 1.13.3 | takeResources\_excludeUnitsWithoutTags | tags | Excludes all units without the specified tags in taking resources | takeResources\_excludeUnitsWithoutTags: truck, tanker |
| 1.13.3 | takeResources\_excludeUnitsWithTheseResources | customPrice | Excludes all units with custom prices in them | takeResources\_excludeUnitsWithTheseResources: oil, juice, sauce |
| 1.13.3 | takeResources\_excludeUnitsWithoutAllResources | bool | Defaults to true. | takeResources\_excludeUnitsWithoutAllResources: true |
| 1.13.3 | takeResources\_triggerActionIfAnyCollected | action refs | Triggers an action if any amount of resources is collected in the current collection action | takeResources\_triggerActionIfAnyCollected: purify |
| 1.13.3 | takeResources\_triggerActionIfNoneCollected | action refs | Triggers an action if no amount of resources is collected in the current collection action | takeResources\_triggerActionIfNoneCollected: callOtherTanker |
| 1.15p11 | takeResources\_triggerActionForEach | action refs | Calls this action for each unit found by takeResource with the unit as thisActionTarget, and thisActionIndex counting up from zero. | takeResources\_triggerActionForEach: manufacture |
| 1.13.3 | takeResources\_discardCollected | bool | Just take resources from targets, don't add(or remove) to self | takeResources\_discardCollected: false |
| 1.13.3 | takeResources\_keepResourcesOnTarget | bool | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | takeResources\_keepResourcesOnTarget: true |
| NaN | takeResources\_maxUnits | int | Defaults to 1. Takes resources from specified amount of units | takeResources\_maxUnits: 10 |
| 1.15 | takeResources\_searchOnly | bool | Shortcut for maxUnits: 200, discardCollected: true, keepResourcesOnTarget: true to detect resources only | takeResources\_searchOnly: true |
| 1.14 | takeResources\_directTransferStoppingAtZero | bool | If less resources on target than transfer amount, only remaining resources will be transfered. Doesn't support use with some other takeResources\_\* keys | takeResources\_directTransferStoppingAtZero: true |
| NaN | #==== | #==== | Outcome - Convert Resources | NaN |
| 1.13.3 | convertResource\_from | customResource | Name of custom resource to take from | convertResource\_from: juice |
| 1.13.3 | convertResource\_to | customResource | Name of custom resource to give to | convertResource\_to: sauce |
| 1.13.3 | convertResource\_minAmount | float | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | convertResource\_minAmount: 10 |
| 1.13.3 | convertResource\_maxAmount | float | Max amount to transfer between 'from' and 'to' | convertResource\_maxAmount: 100 |
| 1.13.3 | convertResource\_multiplyAmountBy | float | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | convertResource\_multiplyAmountBy: 1.5 |
| NaN | #==== | #==== | Outcome - Set Resources | NaN |
| 1.13.3 | resourceAmount | customResource | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | resourceAmount: oil |
| 1.13.3 | resourceAmount\_setValue | float | Absolute value to set this resource to, ignores current value of resource. Skipped by default | resourceAmount\_setValue: 20 |
| 1.13.3 | resourceAmount\_addOtherResource | customResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | resourceAmount\_addOtherResource: juice |
| 1.13.3 | resourceAmount\_multiplyBy | float | Defaults to 1. Multiple the current or new value by | resourceAmount\_multiplyBy: 2 |
| NaN | #==== | #==== | Outcome - Attachment changes | NaN |
| 1.13.3 | attachments\_addNewUnits | unit types | Adds specified units to attachments | attachments\_addNewUnits: coreDefense\*3 |
| 1.13.3 | attachments\_deleteNumUnits | int | Removes a specified amount of units attached | attachments\_deleteNumUnits: 3 |
| 1.13.3 | attachments\_onlyOnSlots | attachment ids | Restrict attachments\_\* actions to these attachments | attachments\_onlyOnSlots: drop1, drop2, drop3 |
| 1.14 | attachments\_unload | bool | Unload all attachments. Can be used with attachments\_onlyOnSlots. Same as unloading transported units | attachments\_unload: true |
| 1.14 | attachments\_disconnect | bool | Disconnect all attachments in the place they are right now. Can be used with attachments\_onlyOnSlots. | attachments\_disconnect: true |
| 1.13.3 | disconnectFromParent | bool | Disconnects this unit from parent's attachment slot | disconnectFromParent: true |
| NaN | #==== | #==== | Outcome - Tag changes | NaN |
| 1.13.3 | temporarilyAddTags | tags | Add tag to this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | temporarilyAddTags: emptyJuice, fullSauce |
| 1.13.3 | temporarilyRemoveTags | tags | Remove tag from this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | temporarilyRemoveTags: fullJuice, emptySauce |
| 1.13.3 | resetToDefaultTags | bool | Reset to standard tags | resetToDefaultTags: true |
| 1.13.3 | addGlobalTeamTags | tags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | addGlobalTeamTags: upgrade\_energized, upgrade\_research2 |
| 1.13.3 | removeGlobalTeamTags | tags | Remove a tag from player's team. | removeGlobalTeamTags: buff\_immune |
| NaN | #==== | #==== | Outcome - Show Message | NaN |
| 1.13.3 | showMessageToPlayer | string | Sends a message to the player controlling the unit | showMessageToPlayer: There is a hidden enemy near your defenses |
| 1.13.3 | showMessageToPlayer\_{LANG} | string | Note: This format is support on nearly all strings that show to player even when reference doesn't show it. Use ISO 639-1 Language Code on the {LANG} placeholder | showMessageToPlayer\_fil: May nakatagong kalaban na malapit sa mga depensa mo |
| 1.13.3 | showMessageToAllPlayers | string | Sends a message to all players | showMessageToAllPlayers: %{self.playerName} has captured a point |
| 1.14 | showMessageToAllEnemyPlayers | string | Sends a message to all enemy players only | showMessageToAllEnemyPlayers: Team %{self.playerName} has %{self.resource.gold} |
| 1.13.3 | showQuickWarLogToPlayer | string | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | showQuickWarLogToPlayer: Unit decloaked |
| 1.13.3 | showQuickWarLogToAllPlayers | NaN | Sends a Quick War Log message to all players (in the lower lef) | showQuickWarLogToAllPlayers: 500 oil sold to allied market |
| 1.13.3 | debugMessage | NaN | Only shows in Sandbox with Debug mode on. | debugMessage: [action log] unit launch on %{thisActionTarget.x}, %{thisActionTarget.y} |
| NaN | Section | NaN | [effect\_NAME] | Effects are purely visual, but can be important for a mod |
| NaN | Code | Value Type | Description | Example |
| 1.15p9 | drawType | normal|displacement | Defaults to normal. Changes how effect is rendered. Options: normal|displacement (displacement only shows when shader effects are turned on) | drawType: normal |
| 1.13 | life | float | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | life: 70 |
| 1.14 | lifeRandom | float | Random offset life by +/- this value | lifeRandom: 12 |
| 1.13 | alsoEmitEffects | effect ref | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | alsoEmitEffects: CUSTOM:extraSparks\*2 |
| 1.14 | alsoEmitEffectsOnDeath | effect ref | Create these effects when life runs out. | alsoEmitEffectsOnDeath: CUSTOM:finalPuff |
| NaN | ifSpawnFailsEmitEffects | effect ref | If 'spawnChance' for this effects fails then emit these effects instead | ifSpawnFailsEmitEffects: CUSTOM:greenSparks\*4 |
| 1.13 | alsoPlaySound | sound ref | Plays sound upon spawning the effect. Use OGG or WAV audio files. Appending a colon with a float value sets the volume | alsoPlaySound: meow.wav:0.5 |
| 1.13 | createWhenOffscreen | bool | Defaults false. When true, effect is created when the unit is offscreen | createWhenOffscreen: true |
| 1.13 | createWhenZoomedOut | bool | Defaults true. Effect is created even when the map is zoomed out. Set to false for improving performance | createWhenZoomedOut: false |
| 1.13 | createWhenOverLiquid | bool | Defaults true. Effect is created when the unit is over water | createWhenOverLiquid: false |
| 1.13 | createWhenOverLand | bool | Defaults true. Effect is created when the unit is over land | createWhenOverLand: false |
| 1.13 | spawnChance | float | Default 1. If less than 1 effect only has a random chance of being created | spawnChance: 1 |
| 1.13 | showInFog | bool | Default false. When true, effect is still visible on fog of war | showInFog: true |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | delayedStartTimer: 2s |
| 1.13 | liveAfterAttachedDies | bool | Defaults false when attachedToUnit is being used | liveAfterAttachedDies: false |
| 1.13 | priority | string | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | priority: critical |
| NaN | #==== | #==== | Movement | NaN |
| 1.13 | attachedToUnit | bool | Attach to unit or projectile that created this effect. Will move with this object. Useful for thrust effects | attachedToUnit: true |
| 1.13 | alwayStartDirAtZero | bool | Ignore source/attached unit dir | alwayStartDirAtZero: true |
| 1.13 | atmospheric | bool | Apply drag to slow this effect down and add small wind effects | atmospheric: true |
| 1.13 | physics | bool | Fall to ground and bounces. Needs height to take effect. | physics: true |
| 1.13 | physicsGravity | float | Defaults to 1. height speed acceleration when physics: true | physicsGravity: 0.5 |
| 1.13 | xOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | xOffsetRelative: 2 |
| 1.13 | yOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | yOffsetRelative: 2 |
| 1.13 | xOffsetRelativeRandom | float | Random offset by +/- this value | xOffsetRelativeRandom: 4 |
| 1.13 | yOffsetRelativeRandom | float | Random offset by +/- this value | yOffsetRelativeRandom: 4 |
| 1.13 | xOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | xOffsetAbsolute: 2 |
| 1.13 | yOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | yOffsetAbsolute: 2 |
| 1.13 | xOffsetAbsoluteRandom | float | Random offset by +/- this value | xOffsetAbsoluteRandom: 5 |
| 1.13 | yOffsetAbsoluteRandom | float | Random offset by +/- this value | yOffsetAbsoluteRandom: 5 |
| 1.13 | xSpeedRelative | float | Moves the effect sprite on relative horizontal position with specified speed. Negative will move left relative to source, positive will move right relative to source. Useful for thrust effects for moving units | xSpeedRelative: 2 |
| 1.13 | ySpeedRelative | float | Moves the effect sprite on relative vertical position with specified speed. Negative will move down relative to source, positive will move up relative to source. Useful for thrust effects for moving units | ySpeedRelative: 3 |
| 1.13 | xSpeedRelativeRandom | float | Randomly change by -value to value | xSpeedRelativeRandom: 2 |
| 1.13 | ySpeedRelativeRandom | float | Randomly change by -value to value | ySpeedRelativeRandom: 2 |
| 1.13 | xSpeedAbsolute | float | Moves the effect sprite on absolute horizontal position with specified speed. Negative will move left relative to map, positive will move right relative to map. Useful for smoke effects on structures | xSpeedAbsolute: 5 |
| 1.13 | ySpeedAbsolute | float | Moves the effect sprite on absolute vertical position with specified speed. Negative will move down relative to map, positive will move up relative to map. Useful for smoke effects on structures | ySpeedAbsolute: 5 |
| 1.13 | xSpeedAbsoluteRandom | float | Randomly change by -value to value | xSpeedAbsoluteRandom: 2 |
| 1.13 | ySpeedAbsoluteRandom | float | Randomly change by -value to value | ySpeedAbsoluteRandom: 2 |
| 1.13 | hOffset | float | height offset from source. May be mistakenly confused with yOffsetAbsolute | hOffset: 4 |
| 1.13 | hOffsetRandom | float | Randomly change by -value to value | hOffsetRandom: 5 |
| 1.13 | hSpeed | float | Sets the speed to change the height of the effect | hSpeed: 1 |
| 1.13 | hSpeedRandom | float | Randomly change by -value to value | hSpeedRandom: 1 |
| 1.13 | dirOffset | float | Sets the static direction of the effect | dirOffset: 43 |
| 1.13 | dirOffsetRandom | float | Randomly change by -value to value | dirOffsetRandom: 50 |
| 1.13 | dirSpeed | float | Sets the rotation speed of the effect | dirSpeed: 2 |
| 1.13 | dirSpeedRandom | float | Randomly change by -value to value | dirSpeedRandom: 3 |
| NaN | #==== | #==== | Graphics | NaN |
| 1.13 | frameIndex | int | Use a specific frame from strip index | frameIndex: 0 |
| NaN | frameIndexRandom | bool -? | Use random frame from strip index | frameIndexRandom: true |
| 1.13 | stripIndex | int/string | A built-in image set to use. Cannot be used with custom image. Options: effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | stripIndex: projectiles |
| 1.13 | image | image | Custom image file to use. Cannot be used with stripIndex. | image: whitePuff.png |
| NaN | imageShadow | image | Custom image file to use for shadows | imageShadow: AUTO |
| 1.13 | scaleTo | float | Defaults to 1. Resizes the unit into the specified scale | scaleTo: 2 |
| 1.13 | scaleFrom | float | Defaults to 1. Resizes the unit from the specified scale | scaleFrom: 4 |
| 1.13 | color | color | Defaults #FFFFFFFF. Changes the color of the effect sprite. Use pure white sprite for most use cases. | color: #ff00ff |
| NaN | teamColorRatio | NaN | Sets team coloration between 0-1. Team color is dependent from source unit | teamColorRatio: 1 |
| 1.13 | drawUnderUnits | bool | Renders the effect under all units | drawUnderUnits: false |
| 1.13 | fadeInTime | float | Fade alpha from 0% to 100% for this time at start | fadeInTime: 2s |
| 1.13 | fadeOut | bool | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | fadeOut: 4s |
| NaN | alpha | NaN | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | alpha: 1 |
| NaN | shadow | NaN | True to draw a shadow. Forced true if imageShadow is used | shadow: false |
| 1.15 | pivotOffset | float | Similar to dirOffset, this will also rotate relative keys and child elements | pivotOffset: 20 |
| 1.15 | pivotOffsetRandom | float | Offsets pivot between +/- of specified value | pivotOffsetRandom: 34 |
| NaN | #==== | #==== | Animation | NaN |
| 1.13 | total\_frames | int | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | total\_frames: 10 |
| 1.13 | animateFrameStart | int | Starting frame for the animation | animateFrameStart: 0 |
| 1.13 | animateFrameEnd | int | Ending frame for the animation | animateFrameEnd: 3 |
| 1.13 | animateFramePingPong | int | If true, animation will go back and forth within the frames | animateFramePingPong: true |
| 1.13 | animateFrameSpeed | time | Sets the animation speed. The lower the value, the slower it plays | animateFrameSpeed: 10 |
| 1.13 | animateFrameSpeedRandom | time | Randomizes how fast the effect animation plays | animateFrameSpeedRandom: 20 |
| 1.14 | animateFrameLooping | bool | Defaults false. When false effect is removed when animation ends | animateFrameLooping: true |
| NaN | Section | NaN | [animation\_NAME] | Use this to make intricate animations based on different circumstances |
| NaN | Code | Value Type | Description | Example |
| 1.13 | onActions: | enum | Automatically plays the animation on specified events. Options: move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits, repair | onActions: move |
| 1.13 | onActionsQueuedUnitPlayAt: | float | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | onActionsQueuedUnitPlayAt: 0 |
| 1.13 | blendIn: | time | Blend with last animation for this time | blendIn: 2s |
| 1.13 | blendOut: | time | Blend with next animation for this time | blendOut: 3s |
| 1.13 | pingPong | bool | Play animation in reverse after it ends | pingPong: true |
| 1.13 | KeyframeTimeScale: | float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | KeyframeTimeScale: 1 |
| NaN | #==== | #==== | Keyframes - create as many as needed | NaN |
| 1.13 | arm#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | arm1\_5s: {x: 5, dir: 90 } |
| NaN | leg#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | leg1\_3s: {dir: 300} |
| NaN | body\_[time] | NaN | Adds a keyframe at time for body. Only frame and scale allowed on body | body\_4s: {frame: 4, scale: 0.5} |
| 1.14 | effect\_[time] | NaN | Spawn effects while playing an animation\n | effect\_2s: {name:CUSTOM|myExplode, x: 0,y: 5} |
| NaN | NaN | NaN | NaN | NaN |
| NaN | direction\_units | float | Overrides [graphics]animation\_direction\_units while this animation is playing | direction\_units: 45 |
| NaN | direction\_strideX: | int | Overrides [graphics]animation\_direction\_strideX | direction\_strideX: 20 |
| NaN | direction\_strideY: | int | Overrides [graphics]animation\_direction\_strideY | direction\_strideY: 50 |
| NaN | direction\_starting: | float | Overrides [graphics]animation\_direction\_starting | direction\_starting: 0 |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN |
| 1.13 | start : int | NaN | Start image frame. deprecated | NaN |
| 1.13 | end : int | NaN | End image frame. deprecated | NaN |
| 1.13 | scale\_start : float | NaN | Start scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | scale\_end : float | NaN | End scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | speed : float | NaN | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Type | NaN | spawnUnits:LIST | Spawn lines specifically for units, used with "unit ref" value types |
| NaN | Code | NaN | Description | Example |
| NaN | #==== | #==== | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) |
| 1.13.3 | neutralTeam | NaN | Spawn the unit on the neutral team instead of the same team as source | spawnUnits: tank\*3(neutralTeam=true, offsetRandomX=20, offsetRandomY=20, gridAlign=true) |
| 1.13.3 | setToTeamOfLastAttacker | NaN | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | spawnUnits: egg(setToTeamOfLastAttacker=true) |
| 1.13.3 | spawnChance | 0-1 | Chance this unit will spawn. Defaults to 1. | spawnUnits: shards(spawnChance=0.3) |
| 1.15 | spawnSource | unit ref | Changes spawn location and team of spawned units to this unit ref. | spawnUnits: tank(spawnSource=memory.lastLocation) |
| 1.13.3 | maxSpawnLimit | NaN | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) |
| 1.13.3 | gridAlign | NaN | Align spawn location to grid, useful for buildings | spawnUnits: hovertank(gridAlign: true) |
| 1.13.3 | skipIfOverlapping | bool | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | spawnUnits: crates\*10(skipIfOverlapping=true, offsetRandomX=40, offsetRandomY=40, gridAlign=true) |
| 1.13.3 | offsetX | float | Sets horizontal position relative to source | spawnUnits: jet(offsetX=20), jet(offsetX=-20) |
| 1.13.3 | offsetY | float | Sets vertical position relative to source | spawnUnits: scout(offsetY=40), scout(offsetY=-40) |
| 1.13.3 | offsetDir | float | Set the facing direction of spawned units | spawnUnits: bike(offsetDir=-45) |
| 1.13.3 | offsetHeight | float | Sets the height for spawned units | spawnUnits: drone(offsetHeight=20) |
| 1.13.3 | offsetRandomX | float | Sets random horizontal position relative to source | spawnUnits: k9\*5(offsetRandomX=45) |
| NaN | offsetRandomY | float | Sets random vertical position relative to source | spawnUnits: scanners\*10(offsetRandomY=60) |
| NaN | offsetRandomDir | float | Set random facing direction of spawned units | spawnUnits: chickens\*20(offsetRandomDir=360) |
| 1.13.3 | addResources | resource ref | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResources=gold:30|stone:10, spawnChance=0.5) |
| 1.14 | transportedUnitsToTransfer | int | Puts the designated amount of transported units into the transport of the spawned unit. | spawnUnits: transporter(transportedUnitsToTransfer=5) |
| 1.15 | copyWaypointsFrom | unit ref | Copies all waypoints on target to created units. | spawnUnits: tank(copyWaypointsFrom=self) |
| 1.14 | alwayStartDirAtZero | bool | Sets the direction of spawned unit to 0 degrees. | spawnUnits: builder(alwayStartDirAtZero=true) |
| NaN | damagingBorder | NaN | Used with techLevel | NaN |
| NaN | zoneMarker | NaN | Used with techLevel | NaN |
| NaN | techLevel | int | Usually used in BR maps, controls the size of safe zone markers and damaging borders. 1 techLevel = 10x10 tiles = 200 pixels in diameter | spawnUnits: damagingBorder(techLevel=100), zoneMarker(techLevel=40) |
| 1.14 | Type | NaN | spawnProjectiles:LIST | Spawn lines specifically for projectiles, used with "proj ref" value types |
| 1.14 | Code | NaN | Description | Example |
| NaN | NOTE: If you need to use offsetDir to rotate your projectiles in a different direction (like for shrapnel), you must also set these projectile speeds low enough to force their trajectory | NaN | Example: | [projectile\_main]\nspawnProjectilesOnExplode: shrapnel(offsetDir=90), shrapnel(offsetDir=-90)\n[projectile\_shrapnel]\nturnSpeed: 0 |
| 1.14 | #==== | #==== | Most projectile spawning keys used for projectile ref | NaN |
| 1.14 | spawnChance | float | Chance this projectile will spawn. Defaults to 1. | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) |
| 1.14 | maxSpawnLimit | int | Maximum amount to spawn | spawnProjectilesOnExplode: bomblet\*3(spawnChance=0.5, maxSpawnLimit=2) |
| 1.14 | recursionLimit | int | Prevents loops, useful with spawning itself so it doesn't infinitely spawn, good for chain exploding. (Recommended no more than 4 if spawning more than 3 projectiles) | spawnProjectileOnEndOfLife: flamingBits\*4(spawnChance=0.35, recursionLimit=2) |
| 1.14 | offsetX | float | Sets horizontal position | spawnProjectileOnCreate: shot(offsetX=10, recursionLimit=0), shot(offsetX=-10, recursionLimit=0), shot(offsetY=10, recursionLimit=0) |
| 1.14 | offsetY | float | Sets vertical position | spawnProjectileOnCreate: shot(offsetX=10, recursionLimit=0), shot(offsetX=-10, recursionLimit=0), shot(offsetY=10, recursionLimit=0) |
| 1.14 | xOffsetRelative | float | Similar to offsetX, but the offset is relative to the position of the projectile | spawnProjectileOnCreate: homingEnergy(xOffsetRelative=5, yOffsetRelative=10) |
| 1.14 | yOffsetRelative | float | Similar to xOffsetRelative, but for Y axis | spawnProjectileOnCreate: homingEnergy(xOffsetRelative=5, yOffsetRelative=10) |
| 1.14 | offsetRandomX | float | Random value to offset in the X axis only | spawnProjectileOnExplode: strayBullet(offsetRandomX=10, offsetRandomY=30) |
| 1.14 | offsetRandomY | float | Random value to offset in the Y axis only | spawnProjectileOnExplode: strayBullet(offsetRandomX=10, offsetRandomY=30) |
| 1.14 | offsetRandomXY | float | The offset in both directions to randomly spawn, makes truly random spawning within an area | spawnProjectileOnEndOfLife: shrapnels\*20(spawnChance=0.2, offsetRandomXY=100) |
| 1.14 | offsetHeight | float | Sets height of the projectile | spawnProjectileOnCreate: scythe(offsetHeight=20) |
| 1.14 | offsetDir | degrees | Sets direction of the projectile | spawnProjectileOnExplode: stars(offsetDir=45) |
| 1.14 | offsetRandomDir | degrees | Sets random direction of the projectile | spawnProjectileOnEndOfLife: fireworks(offsetRandomDir=72) |
| NaN | Type | NaN | LogicBoolean\_ | Advanced code to create conditionals and triggers |
| NaN | Code | Returns | Description | Example |
| NaN | true | bool | This value will meet the condition | autoTrigger: true |
| NaN | false | bool | This value will not meet the condition | autoTrigger: false |
| NaN | if | NaN | Start all logic booleans with if, unless just using booleans (true/false) | isActive: if self.hasFlag(id=1) |
| NaN | and | bool | Connector. Adds another condition to the list. All conditions linked by this must be reached to return true. | autoTrigger: if self.isInWater and self.energy>=1 |
| NaN | or | bool | Connector. Adds another condition to the list. Just one of the conditions linked must be reached to return true | autoTrigger: if (self.energy>=2 or self.ammo>=1) and self.isFlying |
| NaN | not | bool | Conditional. Reverts meaning of the next logic boolean. Useful to set negative conditions | if not self.isOverLiquid (the opposite of being over liquid) |
| 1.15 | < | bool | Return true if number on left is smaller. Means less than next value | isLocked: if self.ammo < 1 |
| 1.15 | > | bool | Return true if number on right is smaller. Means greater than next value | autoTrigger: if self.isInWater and self.energy>=1 |
| 1.15 | <= | bool | Return true if number on left is smaller or equal. Means less or equal than next value | requireConditional: if numberOfUnitsInTeam(withTag="fish") >= 10 |
| 1.15 | >= | bool | Return true if number on right is smaller or equal. Means greater or equal than next value | requireConditional: if numberOfUnitsInTeam(withTag="fish") <= 11 |
| 1.15 | == | bool | Return true if number, unit, string, bool on both sides is the same. Means equal to next value | hidden: if memory.tail == 0 |
| 1.15 | != | bool | Return true if number, unit, string, bool on both sides different. Means different to next value | isVisible: if memory.message != parent.readUnitMemory(name="stateMessage", type="string") |
| 1.15 | + | same type | Add two numbers or join two strings. Means addition to this value | setUnitMemory: stockpile = self.ammo + customTarget1.resource.reserve |
| 1.15 | - | same type | Subtract two numbers. Means substraction to this value | setUnitMemory: stockpile = self.ammo - customTarget2.resource.reserve |
| 1.15 | / | same type | Divide two numbers. Means division of two values | setUnitMemory: damageMultiplierBuffer = memory.population / memory.death |
| 1.15 | \* | same type | Multiply two numbers. Means multiplication of two values | setUnitMemory: reserveCash = memory.population \* self.resource.credits |
| 1.15 | % | same type | Divides two numbers and returns the remainder. Means a percentage of a value | setUnitMemory: isEvenX = select(self.x % 2, true, false) |
| NaN | #==== | #==== | Unit location and movement | "self" prefix can be replaced with other unit-based prefixes (more information below) |
| NaN | self.isUnderwater() | bool | Checks if unit is underwater | autoTrigger: if self.isUnderwater() |
| NaN | self.isAtGroundHeight() | bool | Checks if unit is in surface level | autoTrigger: if thisActionTarget.isAtGroundHeight() |
| NaN | self.isFlying() | bool | Checks if unit is flying | isActive: if self.isFlying() |
| NaN | self.isMoving() | bool | Checks if unit is moving on its own by any means | isLocked: if self.isMoving() |
| 1.15 | self.isReversing() | bool | Checks if unit is moving backwards | isLockedAlt2: if self.isReversing() |
| NaN | self.isAtTopSpeed() | bool | Checks if the unit current speed matches the moveSpeed property | autoTrigger: if self.isAtTopSpeed() |
| NaN | self.isInWater() | bool | Checks if unit touches a water tile | isLocked: if not self.isInWater() |
| NaN | self.isOverwater() | bool | Checks if unit is touching or over a water tile | isLocked: if not self.isOverwater() |
| NaN | self.isOverLiquid() | bool | Checks if unit is touching or over a liquid tile (water, lava) | isLocked: if not self.isOverLiquid() |
| NaN | self.isOverClift() | bool | Checks if unit is touching a cliff tile | isLocked: if not self.isOverClift() |
| NaN | self.isOverPassableTile() | bool | Checks if unit is touching or over a specific tile (parameters: type, Type Values: NONE, LAND, BUILDING, HOVER, OVER\_CLIFF, OVER\_CLIFF\_WATER, AIR, WATER) | isLockedAlt: if self.isOverPassableTile(type=OVER\_CLIFF\_WATER) |
| NaN | self.isOverOpenLand() | bool | shortcut for self.isOverPassableTile(type='LAND') | hidden: if not self.isOverOpenLand() |
| NaN | #==== | #==== | Unit stats | NaN |
| 1.13.3 | self.hasResources() | bool | Checks if unit has these resources. Can check multiple resources at the same time (all price parameters). | isActive self.hasResources(credits=1, energy=2) |
| NaN | self.resource() | float / bool | Checks a single resource (parameters: type, greaterThan, lessThan) (1.15 returns float with no parameters) | isActive: self.resource(type=gold) >= 10 |
| 1.15 | self.resource.RESOURCE\_TYPE | float | Shortcut for: self.resource(type='RESOURCE\_TYPE') | addResourcesWithLogic: hp += self.resource.gold |
| 1.14? | self.isResourceLargerThan | bool | Compare two resource between each other, note multiplyTargetBy doesn't make any changes. (parameters: source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | autoTrigger: self.isResourceLargerThan(source=oil, compareTarget=sauce, byMoreThan=100, multiplyTargetBy=0.2) |
| NaN | self.hp() | float / bool | (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | addResourcesWithLogic: energy += select(self.hp > self.energy, 10, 3) |
| 1.15 | self.maxHp() | float / bool | (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | setResourcesWithLogic: sauce = self.maxHp \* self.energy |
| NaN | self.height() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | imageScale: 1 + (self.height \* 0.1) |
| NaN | self.ammo() | int / bool | Returns int if no parameters, boolean with any parameters (parameters: greaterThan, lessThan, empty, full) | isLocked: if self.ammo < 1 |
| NaN | self.isAmmoEmpty() | bool | shortcut for self.ammo(empty=true) | isLockedAlt: self.isAmmoEmpty() |
| NaN | self.ammoIncludingQueued() | int / bool | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | isLocked: if self.ammoIncludingQueued(lessThan=12) |
| NaN | self.energy() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | isVisible: if self.energy() > 50 |
| NaN | self.energyIncludingQueued() | float / bool | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | isVisible: if self.energyIncludingQueued() |
| NaN | self.isEnergyFull() | bool | shortcut for self.energy(full=true) | isLocked: if self.isEnergyFull() |
| NaN | self.isEnergyEmpty() | bool | shortcut for self.energy(empty=true) | isActive: if self.isEnergyEmpty() |
| 1.15p10 | self.maxEnergy() | float / bool | Returns maximum energy (defaults to energyMax value in core, dynamically adjusts to changed value made by setUnitStats) | isLocked: if memory.kills < self.maxEnergy() |
| NaN | self.isEnergyRecharging() | bool | Checks if unit energy is passively recharging | text: Reload %{select(self.isEnergyRecharging(), "", "[ready")} |
| NaN | self.shield() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | isActive: if self.shield() == 0 |
| 1.15p10 | self.maxShield() | float / bool | Returns the maximum shield value (defaults to maxShield value in core, but dynamically adjusts to changes made with setUnitStats) | isLockedAlt2: if self.energy <= self.maxShield()/2 |
| NaN | self.kills() | int / bool | (parameters: greaterThan, lessThan) (1.15 returns int with no parameters) | setUnitMemory: score = self.kills()\*3 |
| 1.13.3 | self.queueSize() | int / bool | (parameters: greaterThan, lessThan, full, empty, equalTo) (1.15 returns float with no parameters) 1.15p9 adds a new parameter: withActionTag="#" | isLocked: if self.queueSize() >= 4 |
| 1.15 | self.id() | int | Returns the id of the unit in question, which increments up the more units are built | setUnitMemory: UID = self.id() |
| NaN | self.teamId() | int | Return team id of unit or marker. Starts at 0. (but -1 for a neutral team) | switchToteam: lastDamagedBy.teamId() |
| NaN | self.teamName() | string | Returns allied group team name | showMessageToAllPlayers: %{attacking.teamName()} dominated %{thisActionTarget.teamName()} |
| NaN | self.playerName() | string | Returns player's name | showQuickWarLogToAllPlayers: %{self.playerName()} destroyed %{thisActionTarget.playerName()}'s %{thisActionTarget} |
| NaN | self.x() | float | Returns the horizontal position of the unit | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.y() | float | Returns the vertical position of the unit | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.z() | float | Returns the elevation position of the unit (identical to self.height) | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.dir() | float | Returns the unit's direction | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.priceCredits() | NaN | Returns the price of the unit. Only returns the credit price. Does not support custom resources. | addResourcesWithLogic: credits = attacking.priceCredits |
| 1.15p9 | self.builtAmount() | float | Returns the current value of build progression of the unit | stack\_indexCount: int(12 \* (self.builtAmount \* 0.1)) |
| 1.15p9 | self.completed() | bool | Shortcut for self.builtAmount() == 1 | autoTrigger: if self.completed() |
| 1.15p9 | self.speed() | float | Returns current speed of the unit | isLockedAlt: if self.speed < 2 |
| 1.15p9 | self.maxMoveSpeed() | float | Returns the maximum possible speed set for the unit (value set for moveSpeed property, may be manipulated with setUnitStats) | autoTrigger: if memory.defaultSpeed < self.maxMoveSpeed |
| NaN | #==== | #==== | Misc | NaN |
| 1.13 | self.hasFlag() | bool | Boolean flag saved into units for mods to use. (parameters: id=0-31) | autoTrigger: if self.hasFlag(id=1) |
| 1.13 | self.tags() | bool | Checks or return tags of a unit (parameters: includes) | autoTrigger: if self.tags(includes='fish') |
| 1.13.3 | self.globalTeamTags() | bool | Checks or returns global tags on a unit (parameters: includes) | autoTrigger: if self.globalTeamTags(includes='animal') |
| 1.13 | self.transportingCount() | int | (parameters: greaterThan, lessThan, empty) (1.15 returns int with no parameters) | text: Load - %{self.transportingCount()} |
| 1.13 | self.numberOfAttachedUnits() | int / bool | (withTag, greaterThan, lessThan) (1.15 returns int with no parameters) | text: Cores - %{self.numberOfAttachedUnits()} |
| 1.13 | self.isAttacking() | bool | Checks if the unit is attacking something | setUnitStats: moveSpeed=select(self.isAttacking, 4, 2) |
| 1.13 | self.hasActiveWaypoint() | bool | (parameters: type=WAYPOINT\_TYPE) Types: move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | text: Waypoint - %{self.hasActiveWaypoint(type='move')} |
| 1.15 | self.numberOfQueuedWaypoints() | int / bool | (parameters: type=WAYPOINT\_TYPE, amount=#) | text: Waypoint Queue - %{self.numberOfQueuedWaypoints(type='attackMove') >= 2} |
| 1.13 | self.transportingUnitWithTags() | bool | (parameters: includes) | requireConditional: if self.transportingUnitWithTags(includes='human') |
| 1.13 | self.hasParent() | bool | Checks if a unit is attached or a passenger of a unit. For both attachments and transports (parameters: [withTag=x] ) | isVisible: if self.hasParent |
| 1.13 | self.hasTakenDamage() | float / bool | Checks when the unit last took damage (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isActive: if self.hasTakenDamage(withinSeconds=1) |
| 1.13 | self.timeAlive() | float / bool | Checks how long the unit is alive (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isLocked: if self.timeAlive() > 100 |
| 1.13 | self.lastConverted() | float / bool | Check the time the unit last converted from (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isLockedAlt2: if self.lastConverted() |
| 1.13 | self.customTimer() | float / bool | Returns the current value in the unit's custom timer (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | autoTrigger: if self.customTimer() > 120 |
| 1.13 | self.isOnNeutralTeam() | bool | Checks if the unit belongs to the neutral team (Team ID -1) | NaN |
| 1.13 | self.numberOfUnitsInTeam() | int / bool | Checks amount of player units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isLocked: if numberOfUnitsInTeam(withTag='techUnlockBuilding', lessThan=5) |
| 1.13 | self.numberOfUnitsInAllyTeam() | int / bool | Checks amount of allied and player units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | description: TEAM %{self.teamName}\n\nTank Population: %{self.numberOfUnitsInAllyTeam()} |
| 1.14 | self.numberOfUnitsInAllyNotOwnTeam() | int / bool | Checks amount of allied only units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isActive: if self.numberOfUnitsInAllyNotOwnTeam() > 100 |
| 1.13.3 | self.numberOfUnitsInEnemyTeam() | int / bool | Checks amount of enemy units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | autoTrigger: if self.numberOfUnitsInEnemyTeam(withinRange=500) > 0 |
| 1.14 | numberOfUnitsInNeutralTeam() | int / bool | Checks amount of neutral units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isVisible: if memory.deadzone.numberOfUnitsInNeutralTeam() >= 10 |
| 1.14 | numberOfUnitsInAggressiveTeam() | int / bool | Checks amount of aggressive neutral units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isVisible: if memory.deadzone.numberOfUnitsInAggressiveTeam() >= 30 |
| 1.15p9 | numberOfUnitsInAllTeams() | int / bool | Checks amount of any units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | text: Birds: %{numberOfUnitsInAllTeams(withTag="bird")} |
| 1.13.3 | self.hasUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | isLocked: if self.hasUnitInTeam(withTag="fish") |
| NaN | self.noUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | isLocked: if self.noUnitInTeam(withTag="infected") |
| NaN | self.isControlledByAI() | bool | Checks if a unit is controlled by AI. | text: Robot? %{select(self.isControlledByAI(), "Yes", "No")} |
| 1.15 | self.readUnitMemory() | any type | (name:string, type:string{boolean,unit,float,string}, [default]) | isActive: if parent.readUnitMemory('boostTarget', type='unit') == self |
| NaN | #==== | #==== | Unit references | NaN |
| NaN | self | NaN | NaN | fireTurretXAtGround: mainGun (thisActionTarget==Marker with ground location)\nalsoTriggerAction: x (thisActionTarget==Same as original action)\n[turret]onShoot\_triggerActions: x (thisActionTarget==Target that was shot at)\ntakeResources\_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources)\naddWaypoint\_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc. Note: use addWaypoint\_maxTime:0 if you want to search only) |
| 1.15 | thisActionTarget | unit / marker | Current target or location targeted. | NaN |
| 1.15 | thisActionIndex | int | Used with alsoTriggerActionRepeat and takeResources\_triggerActionForEach | alsoTriggerActionRepeat: thisActionIndex |
| 1.15 | eventSource | unit / marker | Current trigger from an autoTriggerOnEvent, otherwise null | autoTriggerOnEvent: tookDamage (eventSource==Unit that caused damage)\nautoTriggerOnEvent: killedAnyUnit (eventSource==Unit that was killed)\nautoTriggerOnEvent: transportingNewUnit (eventSource==Unit that was transported)\nautoTriggerOnEvent: transportUnloadedOrRemovedUnit (eventSource==Unit unloaded)\nautoTriggerOnEvent: queuedUnitFinished (eventSource==New unit made)\nautoTriggerOnEvent: touchTargetSuccess (eventSource==Target touched) |
| 1.15 | attachment | unit | Returns unit attachment as reference (parameters: [slot], [withTag]) | setCustomTarget2: self.attachment(withTag='x').lastDamagedBy.getAsMarker() |
| 1.15 | transporting | unit | Returns unit passenger as reference (parameters: [slot]) | autoTrigger: if self.transporting(slot=0).hasResources(gold=100) |
| 1.15 | attacking | unit | Current target this is attacking, might not be the current waypoint target. | isLocked: if attacking.tags(includes='bug') and attacking.hp < 20 |
| 1.15 | lastDamagedBy | unit | Last unit that attacked this. | teleportTo: lastDamagedBy |
| 1.15 | parent | unit | The transporter or attachment parent. (Note: units are suspended state when transported without attachment slot) | autoTrigger: if parent.energy > 100 |
| 1.15 | activeWaypointTarget | unit | Current active waypoint target. Includes attacking, transporting, repairing, etc. | isActive: if distanceBetween(self, activeWaypointTarget) < 100 |
| 1.15 | customTarget1 | unit | Custom memory, defaults to the unit that created this unit. | isLocked: if parent.customTarget1 == self |
| 1.15 | customTarget2 | unit | Custom memory, defaults to null | fireTurretXAtGround\_withPosition: customTarget2 |
| 1.15 | nearestUnit | unit | (withinRange=500, withTag='x', relation='any') Search for a unit (not recommended in autoTrigger check for perfomance) | setCustomTarget1: nearestUnit(withTag="derrick") |
| 1.15 | globalSearchForFirstUnit | unit | (withTag=x, relation) - Returns first (and oldest) unit found matching the filter. Slow, avoid using in autoTrigger checks | self.globalSearchForFirstUnit(withTag='gameController', relation='neutral') |
| 1.15 | nullUnit | unit | returns a null unit reference, useful for comparisons | isLockedAlt2: if self.parent == nullUnit |
| NaN | #==== | #==== | Marker functions (These are considered "Unit" info and not "Number" info if calling them for variables) | NaN |
| 1.15 | getAsMarker | marker | creates a temporary marker at the position a unit is right now. Markers are very fast to create and automatically removed when no longer needed. Is not linked to any unit and still exists when the unit dies, and stays the same when source moves. | lastDamagedBy.getAsMarker() |
| 1.15 | getOffsetAbsolute | marker | ([x],[y],[height]) Returns marker with absolute offset (-y is north, +x is east) | addWaypoint\_target\_fromReference: unitref getOffsetAbsolute(self.x, self.y+1000, self.z) |
| 1.15 | getOffsetRelative | marker | ([x],[y],[height],[dirOffset]) Returns marker with relative offset. (y+ is forwards) | self.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null |
| 1.15 | eventSource | event | Returns the event from autoTriggerOnEvent, null if used outside of a valid autoTriggerOnEvent | text: Event: %{eventSource} |
| NaN | #==== | #==== | Global functions | NaN |
| 1.15 | readUnitMemory | all arguments | Reads memory from the unit reference (e.g. self.readUnitMemory, parent.readUnitMemory, attacking.readUnitMemory) | self.readUnitMemory('ammoType', type='string'), parent.readUnitMemory(''attachmentArray", type="unit[ ]", index=5), attacking.readUnitMemory("wishlist", type="string[ ]")[12] |
| 1.15 | memory.NAME | self only | Shortcut to read the self with current defineUnitMemory types. Cannot be used on other units, use readUnitMemory for that. Don't call with self. | autoTrigger: if memory.experience > 100 |
| NaN | #==== | #==== | Array Memory methods. usable on both memory logic functions above. | NaN |
| 1.15 | memory.NAME.size | int | Returns the size of the array (including empty indexes between indexes) | setUnitMemory: squadSize = memory.squad.size |
| 1.15 | memory.NAME.contains(query) | bool | Returns true if the query is found within the array. Basically searches something if it exists. | autoTrigger: if memory.savedCoord.contains(lastDamagedBy.customTarget1.customTarget1) |
| 1.15 | distance(x1, y1, x2, y2) | float | Returns the difference between two points | isLocked: if distance(self.x, self.y, thisActionTarget.x, thisActionTarget.y) > 350 |
| 1.15 | distanceSquared(x1, y1, x2, y2) | float | Returns the squared difference between two points. Bit faster than distance. | isLocked: if distanceSquared(self.x, self.y, thisActionTarget.x, thisActionTarget.y) > 19 |
| 1.15 | distanceBetween(unit1, unit2) | float | Returns the distance between two units or markers | isLocked: if distanceBetween(self, memory.antenna) > 1000 |
| 1.15 | distanceBetweenSquared(unit1, unit2) | float | Returns the squared distance between two units. Bit faster than distanceBetween | isLocked: if distanceBetweenSquared(self, memory.antenna) > 100 |
| 1.15 | game.nukesEnabled() | bool | Returns true if nukes are enabled in this game's settings. | isActive: if not game.nukesEnabled() |
| 1.15 | int(x) | int | Removes decimal places from a number. | stack\_indexCount: int(12 \* (self.builtAmount \* 0.1)) |
| 1.15 | select(bool, textA, textB) | NaN | returns textA if bool is true otherwise returns textB | setUnitMemory: isEvenX = select(self.x % 2, true, false) |
| 1.15 | debug(logicBoolean) | string | Returns a text string helping to explain the reason for the current result. Can see into nested logic, comparisons, and operators. | description: [DEBUG] %{debug(self.x > self.y)} |
| 1.15 | str(x) | string | Convert a number, unit or boolean into a string | str(self.energy)+'x' == '100x' |
| 1.15 | substring(text,start,end) | string | Takes a part of the string from the indicated start and end parts | substring('hello',0,2) == 'he' |
| 1.15 | length(string) | int | Returns string length as number | length(memory.sms) |
| 1.15 | squareRoot(num) | float | Requires square root of a number | squareRoot(self.x + self.y) |
| 1.15 | min(num1, num2) | float | Returns the smallest number | damage = min(self.hp, self.energy) |
| 1.15 | max(num1, num2) | float | Returns the biggest number | max(5, 10) == 10 |
| 1.15 | createMarker(x, y, [height], [teamId], [dir]) | marker | Creates a marker that can be used to place coordinates for various actions | fireTurretXAtGround\_withTarget: createMarker(self.x + 500, self.y + 500) |
| 1.15 | eventData(name, type, [default]) | any type | Displays the data from a specified message from some unit. Only use in autoTriggerOnEvent:newMessage events | text: %{eventData(name="msg", type="string")} |
| 1.15 | sin(angle) | float | Takes the sine value of a specified number | sin(10) = 0.173 |
| 1.15 | cos(angle) | float | Takes the cosine value of a specified number | cos(60) = 0.5 |
| 1.15 | rnd(min, max) | float | Produces a random number between minimum and maximum input. | rnd(666, 888) |
| 1.15 | lowercase(string) | string | Sets all letters from a string into lowercase | lowercase("Spaghetti Macaroni Lasagna") -> "spaghetti macaroni lasagna" |
| 1.15 | uppercase(string) | string | Sets all letters from a string into uppercase | uppercase("fish dish wish") -> "FISH DISH WISH" |
| 1.15 | direction(x1, y1, x2, y2) | float | Returns the relative angle of x1/y1 and x2/y2 | direction(self.x, self.y, attacking.x, attacking.y) |
| 1.15 | directionBetween(unit1, unit2) | float | Returns the relative angle of unit/marker A and unit/marker B | directionBetween(self, lastDamagedBy) |
| 1.15 | self.isInMap() | bool | Returns true if unit (or marker) is with the game area; Returns false if outside bounds | autoTrigger: if not self.isInMap() |
| 1.15 | game.mapWidth() | float | Returns the width of the map | fireTurretXAtGround\_withTarget: createMarker(rnd(0, game.mapWidth), rnd(0, game.mapHeight)) |
| 1.15 | game.mapHeight() | float | Returns the height of the map | fireTurretXAtGround\_withTarget: createMarker(rnd(0, game.mapWidth), rnd(0, game.mapHeight)) |
| 1.15p9 | self.teamDefeatedTech() | bool | Returns true if team is defeated | autoTrigger: if attacking.teamDefeatedTech() |
| NaN | self.teamWipedOut() | bool | Returns true if team is defeated and wiped out | autoTrigger: if self.teamWipedOut() |
| NaN | self.teamVictory() | bool | Returns true if team is victorious | autoTrigger: if self.teamVictory() |
| 1.14 | Type | NaN | [placementRule\_NAME] | Allows creation of rules for requiring buildings |
| 1.14 | Code | Value Type | Description | Example |
| 1.14 | anyRuleInGroup: | string | (Only require 1 of the rules in this group pass, instead of all. Use the same group name on other placement rules to create a group.) | anyRuleInGroup: struct |
| 1.14 | searchTags: | tag list | Search for any unit with at least one of these tags | searchTags: factory |
| 1.14 | searchTeam: | relation | Teams to include in search, can be: own|neutral|allyNotOwn|ally|enemy|any | searchTeam: own |
| 1.14 | searchOffsetX: | float | defaults to 0 | searchOffsetX: 100 |
| 1.14 | searchOffsetY: | float | defaults to 0 | searchOffsetY: 200 |
| 1.14 | searchDistance: | float | Required | searchDistance: 500 |
| 1.14 | excludeIncompleteBuildings: | bool | defaults to false. Might want to set to true depending on the requirement reason | excludeIncompleteBuildings: true |
| 1.14 | excludeNonBuildings: | bool | defaults to false | excludeNonBuildings:true |
| 1.14 | minCount: | int | Set min amount of units that need to be found in search. (eg needs to be near something). Defaults to 0 | minCount: 0 |
| 1.14 | maxCount: | int | Set max amount of units before match fails (eg cannot be close to something). Defaults to unlimited | maxCount: 1 |
| 1.14 | blocksPlacement: | bool | Defaults to true. | blocksPlacement: false |
| 1.14 | cannotPlaceMessage: | LocaleString | Highly Recommended. Message shown to player if this rule fails (will be first failing rule if using anyRuleInGroup). | cannotPlaceMessage: "No factory is nearby" |
| 1.14 | checkEachTile: | bool | defaults to true (set to false to only test unit center, true checks each tile under the unit which shows up on the placement grid. Can be easier to see requirements with true) | checkEachTile: false |
| NaN | Type | NaN | Prices/Resources lines - used by addResources, price, etc | NaN |
| NaN | Code | Targets | Description | Example |
| NaN | credits | NaN | Global resource | price: 100 |
| NaN | energy | NaN | Energy used for laser shield and ammunition | resourceUsage: energy=1 |
| NaN | hp | NaN | Unit hitpoints | addResources: hp += 100 |
| NaN | shield | NaN | Shielding for units | price: hp=-100, shield=100 |
| NaN | ammo | NaN | Hidden value on each unit for use by mods | price: hp=-100, shield=101 |
| NaN | setFlag | NaN | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | addResources: setFlag=1 |
| NaN | unsetFlag | NaN | use with addResources, resourceUsage or price. 0-31 | NaN |
| NaN | hasFlag | NaN | use with price or resourceUsage | NaN |
| NaN | hasMissingFlag | NaN | use with price or resourceUsage | NaN |
| 1.13.3 | X | NaN | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=21, credits=2001 |
| NaN | Section | NaN | [global\_resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN |
| 1.13.3 | displayName | LocaleString | Name of this resource in UI | displayName: Crude Oil |
| 1.13.3 | displayNameShort | LocaleString | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | displayNameShort: Oil |
| 1.13.3 | hidden | bool | Hide this resource from the player | hidden: false |
| 1.13.3 | priority | float | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | priority: 0.5 |
| 1.13.3 | displayColor | color | Color, can be hex with optional alpha | displayColor: #FF0000 |
| 1.14 | displayRoundedDown | bool | Don't show decimal places to the player | displayRoundedDown |
| 1.15 | displayTextPrefix | string | Adds a string before the resource value | displayTextPrefix: - |
| 1.15 | displayTextPostfix | string | Adds a string after the resource value | displayTextPostfix: x |
| 1.15 | displayTextAppendResource | resource | Appends another resource after this resource. It's recommended to give a "hidden" key on the appended resource to hide duplicate. | displayTextAppendResource: sauce |
| 1.15 | displayWhenZero | bool | Displays the resource even when empty. Set as false by default | displayWhenZero: true |
| 1.15 | displayPos | int | Sets the position of the globa resource in the screen | displayPos: 1 |
| 1.15 | iconImage | image | Shows a custom icon for the specific resource in the HUD and in text | iconImage: icon\_oil.png |
| 1.15 | iconImageUseInText | bool | Default as true; Shows resource icon in action description | iconImageUseInText: false |
| 1.15 | displayNameHideWhenIconShownInText | bool | Default as false | displayNameHideWhenIconShownInText: true |
| 1.15 | displayNameHideWhenIconShownInHUD | bool | Hides the icon in menus referring to resource when true. Default as false | displayNameHideWhenIconShownInHUD: true |
| 1.15 | displayColorUseInText | bool | Shows color in action description | displayColorUseInText: false |
| 1.15 | displayInHud | bool | For resources used in appendResourceInHUD that shouldn't be hidden: true. Defaults true. | displayInHud: false |
| 1.15 | appendResourceInHUD | resource | stacks another resource specified after this resource on the HUD. | appendResourceInHUD: sauce |
| 1.15 | appendResourceInHUD\_whenThisZero: | bool | Defaults as true. When set as false, allows appended resource to be hidden with the parent resource. | appendResourceInHUD\_whenThisZero: true |
| 1.15 | displayPrefixInHUD | string | Displays text to show before resource value - replaces resource name and removes the colon separator | displayPrefixInHUD: - |
| 1.15 | displayPostfixInHUD | string | Similar to the prefix counterpart, but is displayed after the resource value | displayPostfixInHUD: x |
| 1.15 | valueInStats: | float | Affects post game stats and replay leaderboard. Defaults to 1. | valueInStats: 0.5 |
| 1.15 | displayTextAppendResourceWithGap: | bool | Adds a space between this and the appended resource. Defaults as false. | displayTextAppendResourceWithGap: true |
| 1.15p9 | displayDigitGrouping | enum | Sets the symbol for separating place units in: none, comma, space | displayDigitGrouping: comma |
| NaN | Section | NaN | [resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Define a new resource local to unit. Works like build-in ammo resource | NaN |
| 1.13.3 | displayName | LocaleString | Name of this resource in UI (eg hovering over unit info) | displayName: Sauce |
| 1.13.3 | displayNameShort | LocaleString | Shorter version of resource name used on some text ui | displayNameShort: Sus |
| 1.13.3 | hidden | bool | Hide this resource from the player | hidden: true |
| NaN | equivalentGlobalResourceForAI | resource | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | equivalentGlobalResourceForAI: universal\_sauce |
| 1.14 | displayRoundedDown | bool | Rounds off resource values with decimals | displayRoundedDown: true |
| NaN | Type | value type | [decal\_name] | Example |
| 1.15p9 | # Graphical # | NaN | NaN | NaN |
| 1.15p9 | image | image | Takes a single image for the decal - NOT TO BE CONFUSED WITH IMAGE STACK | image: fish.png |
| 1.15p9 | layer | enum | Sets the layer of the decal, values from lowest to highest - shadow, beforeBody, afterBody, onTop, beforeUI, inactive | layer: beforeUI |
| 1.15p9 | order | float | Defaults as 0, sets a more discrete layering if 2 or more decals takes same layer type. Otherwise order in INI file will be used. | order: 2 |
| 1.15p9 | teamColors | bool | When true, automatically reassigns team color to respective teams | teamColors: true |
| 1.15p9 | alpha | logicNumber | 0-1, sets transparency of decal (images or line) | alpha: 0.5 |
| 1.15p9 | isVisible | LogicBoolean | Dynamic Value, draws the decal on a specific condition | isVisible: if self.hp > self.maxHp/2 |
| 1.15p9 | # Player Conditions # | NaN | NaN | NaN |
| 1.15p9 | onlyWhenSelectedByOwnPlayer | bool | Defaults as false, displays the decal only if the owner player clicks on the unit | onlyWhenSelectedByOwnPlayer : true |
| 1.15p9 | onlyWhenSelectedByEnemyPlayer | bool | Defaults as false, displays the decal only if the enemy player clicks on the unit | onlyWhenSelectedByEnemyPlayer: true |
| 1.15p9 | onlyWhenSelectedByAllyNotOwnPlayer | bool | Defaults as false, displays the decal only if the allied player clicks on the unit | onlyWhenSelectedByAllyNotOwnPlayer: true |
| 1.15p9 | onlyWhenSelectedByAnyPlayer | bool | Defaults as false, displays the decal only if any player clicks on the unit | onlyWhenSelectedByAnyPlayer: true |
| 1.15p9 | includeParentsSelection | bool | Useable with onlyWhenSelectedBy[insertplayer], will also checks parent's selection when true. Useful with attachments. | includeParentsSelection: true |
| 1.15p9 | # "Only if" Conditions # | NaN | NaN | NaN |
| 1.15p9 | onlyTeam | TeamRelation | Draws the decal if value matches the player from the following: own, notOwn, ally, allyNotOwn, enemy, any | onlyTeam: any |
| 1.15p9 | onlyWhileActive | bool | Draws the decal only if the unit is fully built | onlyWhileActive: true |
| 1.15p9 | onlyWhileAlive | bool | Draws the decal only if the unit is alive (If beforeUI layer default true, else default false) | onlyWhileAlive: false |
| 1.15p9 | onlyInPreview | bool | Only show in sidebar, and building placement preview | onlyInPreview: false |
| 1.15p9 | onlyWithZoomLevelOrMore | float | Draws the decal only if the zoom level matches or exceeds it, very useful for making 3D units more optimized. | onlyWithZoomLevelOrMore: 0.4 |
| 1.15p9 | onlyOnNonPreview | bool | Draws the decal only on the unit itself, not on the preview from building or in sidebar interface | onlyOnNonPreview: true |
| 1.15p9 | onlyPlayersWithUnitControl | bool | Draws the decal if a player that selects it has control (that includes shared units in multiplayer) | onlyPlayersWithUnitControl: true |
| 1.15p9 | onlyOnBodyFrameOf | int | Only draw decal when body frame is equal to this | onlyOnBodyFrameOf: 0 |
| 1.15p9 | # Offsets (Positioning) # | NaN | NaN | NaN |
| 1.15p9 | xOffsetRelative | int | Sets horizontal offset relative to the unit | xOffsetRelative: 50 |
| 1.15p9 | yOffsetRelative | int | Sets vertical offset relative to the unit | yOffsetRelative: 50 |
| 1.15p9 | xOffsetAbsolute | logicNumber | Dynamic value | xOffsetAbsolute: 40 |
| 1.15p9 | yOffsetAbsolute | logicNumber | Dynamic value | yOffsetAbsolute: 40 |
| 1.15p9 | hOffset | int | Sets the height of the whole decal | hOffset: 10 |
| 1.15p9 | dirOffset | int | Sets the direction of the whole decal. | dirOffset: 45 |
| 1.15p9 | pivotOffset | int | only affects relative offsets without rotating image | pivotOffset: 45 |
| 1.15p9 | alwaysStartDirAtZero | bool | Keeps the decal on north direction regardless of the unit's direction value, useful for custom in-unit interfaces | alwaysStartDirAtZero: true |
| 1.15p9 | # Image specifics / Stacks # | NaN | NaN | NaN |
| 1.15p9 | imageStack | images | Takes one or more image with occassional multipliers for stacking. Also useful for using image stack from a MagicaVoxel slice export | Multiple image file stack: imageStack - carFloor.png, carBody.png\*3, carRoof.png\*2, antenna.png\*10 |
| 1.15p9 | NaN | NaN | NaN | Stack from a sprite sheet - imageStack: carModel.png\*14 |
| 1.15p9 | imageScale | logicNumber | Dynamic value, scales the decal | imageScale: 1 + (self.height \* 0.1) |
| 1.15p9 | imageScaleX | logicNumber | Dynamic value | imageScaleX: 1 |
| 1.15p9 | imageScaleY | logicNumber | Dynamic value | imageScaleY: (self.hp/self.maxHp)\*100 |
| 1.15p9 | stack\_hOffset | float | Sets the height of every layer in a stack. 1 layer = 1 pixel. Can take negative values. | stack\_hOffset: 4 |
| 1.15p9 | stack\_frameOffset | int | Useful for making 3D units, frame to offset by in imageStack. Often a value of 1 is useful in a sprite sheet. | stack\_frameOffset: 1 |
| 1.15p9 | stack\_drawInReverseOrder | bool | Renders the stack in the opposite way - last frame goes on bottom, first frame goes to top | stack\_drawInReverseOrder: true |
| 1.15p9 | stack\_indexStart | logicNumber | Offset to start drawing images in the image stack | stack\_indexStart: 0 |
| 1.15p9 | stack\_indexCount | logicNumber | Number of images in the image stack to draw. | stack\_indexCount: 10 |
| 1.15p9 | total\_frames | int | Sets the number of frames in an image from an imageStack that uses a spritesheet. | total\_frames: 10 |
| 1.15p9 | frame\_width | int | Sets the frame width in the decal stack | frame\_width: 20 |
| 1.15p9 | frame\_height | int | Sets the frame height in the decal stack | frame\_height: 40 |
| 1.15p9 | frame | logicNumber | Dynamic value, useful for animations | frame: memory.frame |
| 1.15p9 | addBodyFrameMultipliedBy | int | Add body frame number to this decal when set to 1. | addBodyFrameMultipliedBy: 2 |
| 1.15p9 | # Shadows # | NaN | NaN | NaN |
| 1.15p9 | image\_shadow | image | Sets shadow for the decal. Note that AUTO does not work in this key. | image\_shadow: shadow.png |
| 1.15p9 | shadowOffsetX | int | Sets the horizontal position of the decal's shadow | shadowOffsetX: 0 |
| 1.15p9 | shadowOffsetY | int | Sets the vertical position of the decal's shadow | shadowOffsetY: 0 |
| 1.15p9 | # Marker Positioning # | NaN | NaN | NaN |
| 1.15p9 | basePosition | marker | Attaches the decal on the specified marker. use "self" if attaching it to the unit itself | basePosition: self |
| 1.15p9 | NaN | NaN | NaN | basePosition: memory.launchPoint |
| 1.15p9 | basePositionFromLegEnd | leg/arm | Attaches the decal to the specified leg or arm ending. | basePositionFromLegEnd: leg\_3, basePositionFromLegEnd: arm\_5 |
| 1.15p9 | basePositionFromTurret | turret | Attaches the decal to the specified turret | basePositionFromTurret: rocketLauncherBase |
| 1.15p9 | # Waypoint Lines # | NaN | NaN | NaN |
| 1.15p9 | drawLineTo | marker ref | Draws a line from the unit to the specified marker, useful for custom waypoints | drawLineTo: attacking.customTarget2 |
| 1.15p9 | color | color hex | Sets the color of the drawn line | color: #ffff00 |
| 1.15p9 | lineWidth | float | Sets the width of the drawn line | lineWidth: 2 |
| NaN | Section | NaN | [comment\_NAME] | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | #==== | #==== | Comment sections can have any keys and have no effect. | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | List of default game noises (for turret fire sound or other sound references): | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [template\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | #==== | #==== | Template sections can have any keys and have no effect by themselves. | NaN |
| NaN | #==== | #==== | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN |
| NaN | #==== | #==== | --All these below features can be used with any section not just templates-- | NaN |
| 1.13.3 | @copyFromSection | NaN | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection: template\_name/action\_name/projectile\_name |
| NaN | @copyFrom\_skipThisSection | NaN | Use in any section to make [core]copyFrom not copy into it. Eg not copy an action when overriding | @copyFrom\_skipThisSection |
| NaN | @define X | NaN | Define a local variable within a section (best outside of template) | @define targetEffect: boom |
| NaN | @global X | NaN | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop |
| 1.15 | @memory X | NaN | Define a memory for this unit, its type must be defined as well. | @memory transportCount: float |
| 1.13.3 | NaN | NaN | ${X} can be used to reference variables (can also be done outside of a template). It is calculated when loading and remains static. Has no impact on runtime performance. | spawnEffects: effect\_${targetEffect} |
| 1.13.3 | NaN | NaN | ${section.key} can be used to reference another key (can also be done outside of a template) Structure is as follows: ${ dataType ( section.key )} | addResources: credits=${ int ( core.price \* 2 + 10 ) |
| 1.15 | NaN | NaN | %{X} can be used to add dynamic logic into some strings. (CAN NOT be used everywhere). The value will update every frame. | [action]text: Missing hp %{self.maxHp - self.hp} |
| 1.15 | NaN | NaN | """ text """ can be used for multiline strings. Newlines with be removed from final result. | copyFrom:"""\nROOT:a.ini,\nROOT:b.ini,\nROOT:c.ini\n"""\n |
| NaN | File | NAME.template | A template that can be used to share many parts across units, used with copyFrom: However, cannot define variables | NaN |
| NaN | NaN | Template Example: | [core] | NaN |
| NaN | NaN | NaN | tags: infantry | NaN |
| NaN | NaN | NaN | [decal] | NaN |
| NaN | NaN | NaN | image: infantryIcon.png | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | Unit Example: | [core] | NaN |
| NaN | NaN | NaN | copyFrom: ROOT:templates\infantry.template | NaN |
| NaN | File | all-units.template | Put at the root of the mod folder, applies anything in it to ALL units across all .ini files so that you have "common characteristics", can have any sections but cannot define local variables. Can define memories though. | NaN |
| NaN | NaN | Global Example: | [core] | NaN |
| NaN | NaN | NaN | explodeTypeOnDeath: large | NaN |
| NaN | NaN | NaN | energyMax: 20 | NaN |
| NaN | NaN | NaN | [action\_spawnedInitialize] | NaN |
| NaN | NaN | NaN | autoTriggerOnEvent: created | NaN |
| NaN | NaN | NaN | playSoundAtUnit: ROOT:audio/spawnSound.ogg | NaN |
| NaN | File | mod-info.txt | This file defines some of properties of a mod for display in mod browser and in Steam Workshop. It should be placed in the top of mod's file hierarchy, otherwise will result in error | NaN |
| Section | Key | Value type | Description | Example |
| [mod] | NaN | NaN | NaN | NaN |
| NaN | title | String | Sets the title of the mod package | title: Sample mod |
| NaN | description | String | Sets the description of the mod package. Doesn't support line breaks. | description: This is a sample of mod that samples a unit to the game |
| NaN | tags | String | Sets varied tags depending on what is specified, can be multiple with comma as separator | tags: units, sample, demo |
| NaN | minVersion | String | Declares the minimum version compatible for the mod. It is important to declare one when using decals and other modding keys starting on version 1.15p9 beta | minVersion: 1.15p9 |
| NaN | thumbnail | image | Sets the mod's thumbnail in Steam Workshop | thumbnail: assets/images/other/thumb.png |
| [music] | NaN | NaN | NaN | NaN |
| NaN | sourceFolder | audio dir | Sets where the custom music will be played for the mod | sourceFolder: assets/audio/music |
| NaN | whenUsingUnitsFromThisMod\_playExclusively | bool | Only plays music from this mod | whenUsingUnitsFromThisMod\_playExclusively: true |
| NaN | Projectile Draw Types | NaN | in [projectile\_#], a unit may use a built-in frame from the res/drawable directory. However, only three strips are designated for this use case. Use the id value for the drawType key, and a frame number for a desired appearance. | If there is no image or frame supplied, the game will display a white dot instead, wherein a modder can change its color using the color key. This is observable to Command Center, Heavy Tank, and Missile Tank |
| id | name | usable frames | image (with frame numbers) | NaN |
| 0 | projectiles.png | 12 | NaN | NaN |
| 1 | projectiles\_large.png | 3 | NaN | NaN |
| 2 | projectiles2.png | 6 | NaN | NaN |
| NaN | Original Units | NaN | Most Vanilla units (original units in the game) are hardcoded and cannot be removed or overwritten without knowing the name of the unit. Here is a list of all the units technical names in case you want to work with them. | NaN |
| NaN | builder | NaN | This is very useful if you want to modify the original units stats | NaN |
| NaN | extractor | NaN | NaN | NaN |
| NaN | landFactory | NaN | NaN | NaN |
| NaN | airFactory | NaN | NaN | NaN |
| NaN | seaFactory | NaN | NaN | NaN |
| NaN | turret | NaN | NaN | NaN |
| NaN | antiAirTurret | NaN | NaN | NaN |
| NaN | tank | NaN | NaN | NaN |
| NaN | hoverTank | NaN | NaN | NaN |
| NaN | artillery | NaN | NaN | NaN |
| NaN | helicopter | NaN | NaN | NaN |
| NaN | gunShip | NaN | NaN | NaN |
| NaN | airShip | NaN | NaN | NaN |
| NaN | missileShip | NaN | NaN | NaN |
| NaN | gunBoat | NaN | NaN | NaN |
| NaN | laserTank | NaN | NaN | NaN |
| NaN | megaTank | NaN | NaN | NaN |
| NaN | hovercraft | NaN | NaN | NaN |
| NaN | ladybug | NaN | NaN | NaN |
| NaN | battleShip | NaN | NaN | NaN |
| NaN | tankDestroyer | NaN | NaN | NaN |
| NaN | heavyTank | NaN | NaN | NaN |
| NaN | heavyHoverTank | NaN | NaN | NaN |
| NaN | laserDefence | NaN | NaN | NaN |
| NaN | dropship | NaN | NaN | NaN |
| NaN | repairbay | NaN | NaN | NaN |
| NaN | NukeLaucher | NaN | NaN | NaN |
| NaN | AntiNukeLaucher | NaN | NaN | NaN |
| NaN | mammothTank | NaN | NaN | NaN |
| NaN | experimentalTank | NaN | NaN | NaN |
| NaN | experimentalLandFactory | NaN | NaN | NaN |
| NaN | crystalResource | NaN | NaN | NaN |
| NaN | wall\_v | NaN | NaN | NaN |
| NaN | fabricator | NaN | NaN | NaN |
| NaN | attackSubmarine | NaN | NaN | NaN |
| NaN | builderShip | NaN | NaN | NaN |
| NaN | amphibiousJet | NaN | NaN | NaN |
| NaN | supplyDepot | NaN | NaN | NaN |
| NaN | experimentalHoverTank | NaN | NaN | NaN |
| NaN | turret\_artillery | NaN | NaN | NaN |
| NaN | turret\_flamethrower | NaN | NaN | NaN |
| NaN | antiAirTurretT2 | NaN | NaN | NaN |
| NaN | turretT2 | NaN | NaN | NaN |
| NaN | turretT3 | NaN | NaN | NaN |
| NaN | aaBeamGunship | NaN | NaN | NaN |
| NaN | c\_amphibiousJet | NaN | NaN | NaN |
| NaN | bomber | NaN | NaN | NaN |
| NaN | bugGeneratorN | NaN | NaN | NaN |
| NaN | bugGeneratorNT2 | NaN | NaN | NaN |
| NaN | bugMeleeT31 | NaN | NaN | NaN |
| NaN | bugBee | NaN | NaN | NaN |
| NaN | bugExtractor | NaN | NaN | NaN |
| NaN | bugFly | NaN | NaN | NaN |
| NaN | bugGenerator | NaN | NaN | NaN |
| NaN | bugMelee | NaN | NaN | NaN |
| NaN | bugMeleeLarge | NaN | NaN | NaN |
| NaN | bugMeleeSmall | NaN | NaN | NaN |
| NaN | bugNest | NaN | NaN | NaN |
| NaN | bugRanged | NaN | NaN | NaN |
| NaN | bugSpore | NaN | NaN | NaN |
| NaN | bugTurret | NaN | NaN | NaN |
| NaN | bugPickup | NaN | NaN | NaN |
| NaN | bugWasp | NaN | NaN | NaN |
| NaN | bugRangedT2 | NaN | NaN | NaN |
| NaN | combatEngineer | NaN | NaN | NaN |
| NaN | experiementalCarrier | NaN | NaN | NaN |
| NaN | experimentalDropship | NaN | NaN | NaN |
| NaN | experimentalGunship | NaN | NaN | NaN |
| NaN | experimentalSpider | NaN | NaN | NaN |
| NaN | c\_experimentalTank | NaN | NaN | NaN |
| NaN | extractorT1 | NaN | NaN | NaN |
| NaN | extractorT2 | NaN | NaN | NaN |
| NaN | extractorT3 | NaN | NaN | NaN |
| NaN | extractorT3\_overclocked | NaN | NaN | NaN |
| NaN | extractorT3\_reinforced | NaN | NaN | NaN |
| NaN | fabricatorT1 | NaN | NaN | NaN |
| NaN | fabricatorT2 | NaN | NaN | NaN |
| NaN | fabricatorT3 | NaN | NaN | NaN |
| NaN | fireBee | NaN | NaN | NaN |
| NaN | heavyBattleship | NaN | NaN | NaN |
| NaN | heavyInterceptor | NaN | NaN | NaN |
| NaN | heavyMissileShip | NaN | NaN | NaN |
| NaN | heavySub | NaN | NaN | NaN |
| NaN | c\_helicopter | NaN | NaN | NaN |
| NaN | c\_interceptor | NaN | NaN | NaN |
| NaN | laboratory | NaN | NaN | NaN |
| NaN | c\_laserTank | NaN | NaN | NaN |
| NaN | lightGunship | NaN | NaN | NaN |
| NaN | lightSub | NaN | NaN | NaN |
| NaN | c\_mammothTank | NaN | NaN | NaN |
| NaN | mechEngineer | NaN | NaN | NaN |
| NaN | mechFactory | NaN | NaN | NaN |
| NaN | mechFactoryT2 | NaN | NaN | NaN |
| NaN | mechArtillery | NaN | NaN | NaN |
| NaN | mechBunker | NaN | NaN | NaN |
| NaN | mechFlame | NaN | NaN | NaN |
| NaN | mechFlyingLanded | NaN | NaN | NaN |
| NaN | mechHeavyMissile | NaN | NaN | NaN |
| NaN | mechLaser | NaN | NaN | NaN |
| NaN | mechLightning | NaN | NaN | NaN |
| NaN | mechMinigun | NaN | NaN | NaN |
| NaN | mechGun | NaN | NaN | NaN |
| NaN | mechMissile | NaN | NaN | NaN |
| NaN | missileAirship | NaN | NaN | NaN |
| NaN | missileTank | NaN | NaN | NaN |
| NaN | modularSpider | NaN | NaN | NaN |
| NaN | nautilusSubmarine | NaN | NaN | NaN |
| NaN | antiNukeLauncherC | NaN | NaN | NaN |
| NaN | nukeLauncherC | NaN | NaN | NaN |
| NaN | outpostT1 | NaN | NaN | NaN |
| NaN | outpostT2 | NaN | NaN | NaN |
| NaN | plasmaTank | NaN | NaN | NaN |
| NaN | creditsCrates | NaN | NaN | NaN |
| NaN | crystal\_mid | NaN | NaN | NaN |
| NaN | scout | NaN | NaN | NaN |
| NaN | c\_artillery | NaN | NaN | NaN |
| NaN | heavyArtillery | NaN | NaN | NaN |
| NaN | c\_tank | NaN | NaN | NaN |
| NaN | c\_antiAirTurret | NaN | NaN | NaN |
| NaN | antiAirTurretFlak | NaN | NaN | NaN |
| NaN | c\_antiAirTurretT2 | NaN | NaN | NaN |
| NaN | c\_antiAirTurretT3 | NaN | NaN | NaN |
| NaN | c\_turret\_t1 | NaN | NaN | NaN |
| NaN | c\_turret\_t2\_gun | NaN | NaN | NaN |
| NaN | c\_turret\_t1\_artillery | NaN | NaN | NaN |
| NaN | c\_turret\_t2\_flame | NaN | NaN | NaN |
| NaN | c\_turret\_t1\_lightning | NaN | NaN | NaN |
| NaN | c\_turret\_t2\_artillery | NaN | NaN | NaN |
| NaN | c\_turret\_t2\_flame | NaN | NaN | NaN |
| NaN | c\_turret\_t3\_gun | NaN | NaN | NaN |
| NaN | c\_turret\_t2\_lightning | NaN | NaN | NaN |
| NaN | heavyAAShip | NaN | NaN | NaN |

## 1.14
| Version | Section | Unnamed: 2 | [core] | Unnamed: 4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| Added | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code, will cause error if these are not included | NaN | NaN |
| NaN | NaN | NaN | name: | NaN | NaN |
| NaN | NaN | NaN | mass: | NaN | NaN |
| NaN | NaN | NaN | radius: | NaN | NaN |
| NaN | NaN | NaN | price: | NaN | NaN |
| NaN | NaN | NaN | maxHp: | NaN | NaN |
| NaN | #==== | #==== | Common Keys | NaN | NaN |
| NaN | name: | string | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 | NaN |
| NaN | altNames: | string(s) | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | NaN |
| NaN | class: | string | Reserved for future use, must be CustomUnitMetadata by default. | class: CustomUnitMetadata | NaN |
| 1.13.3 | strictLevel: | float | Defaults to 0. 1 = Errors if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 | NaN |
| NaN | price: | int | The unit cost from builders/buildings. | price: 500 | NaN |
| NaN | mass: | int | The 'weight' of the unit, defines how it collides with other units, a greater value means it's tougher to push. | mass: 3000 | NaN |
| NaN | techLevel: | int | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | NaN |
| NaN | buildSpeed: | float / s | Time it takes to build the unit. (may multiply with builder speed) | buildSpeed: 3s | NaN |
| NaN | radius: | int | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 | NaN |
| NaN | isBio: | bool | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true | NaN |
| NaN | isBug: | bool | Changes some death defaults, and sort order in Sandbox. | isBug: false | NaN |
| 1.13 | isBuilder: | bool | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true | NaN |
| NaN | #==== | #==== | Unit Stats Keys | NaN | NaN |
| NaN | maxHp: | int | The max health for the unit. (will spawn with this value) | maxHp: 200 | NaN |
| NaN | selfRegenRate: | float | Passive self repair rate. | selfRegenRate: 0.01 | NaN |
| NaN | maxShield: | int | The max shield hitpoints of the unit. Can start with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 | NaN |
| NaN | startShieldAtZero: | bool | Unit starts with a 0 hitpoints shield on created if true. | startShieldAtZero: true | NaN |
| NaN | shieldRegen: | float | Passive shield regen rate. | shieldRegen: 0.15 | NaN |
| NaN | energyMax: | float | Defaults to 0. Energy that can be used as ammo for turrets, laser defense and actions. | energyMax: 1 | NaN |
| NaN | energyRegen: | float | Passive energy regen rate. | energyRegen: 0.001 | NaN |
| NaN | energyStartingPercentage: | float | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 | NaN |
| NaN | energyNeedsToRechargeToFull: | float | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true | NaN |
| NaN | energyRegenWhenRecharging | float | Regen rate while recharging. | NaN | NaN |
| NaN | energyDisplayName | string | Unused, no effect. | NaN | NaN |
| 1.13 | armour: | int | Damage taken away from each hit. (not currently used in any vanilla units) | armour: 6 | NaN |
| 1.13 | armourMinDamageToKeep: | int | Min damage to keep from received damage. Defaults to 1. | armourMinDamageToKeep: 2 | NaN |
| 1.13.3 | borrowResourcesWhileAlive: | price | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 | NaN |
| 1.13.3 | generation\_resources: | price | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 | NaN |
| 1.13.3 | generation\_active: | logicBoolean | Disables generation\_resources/credits when false. (logic\_boolean) | generation\_active: if not self.hp(lessThan=100) | NaN |
| NaN | generation\_credits: | int | Income unit creates. (credits only) | generation\_credits: 2 | NaN |
| NaN | generation\_delay: | int | How often generation\_resources/credits is added. Defaults to 40. (changing not recommended) | generation\_delay: 40 | NaN |
| NaN | #==== | #==== | UI and Graphics Keys | NaN | NaN |
| NaN | showInEditor: | bool | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false | NaN |
| NaN | displayText: | LocaleString | The unit name that the game shows to the player. | displayText: Custom Tank | NaN |
| 1.13 | displayText\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado | NaN |
| NaN | displayDescription: | LocaleString | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage | NaN |
| 1.13 | displayDescription\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero | NaN |
| NaN | displayLocaleKey: | string | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery | NaN |
| NaN | displayRadius: | int | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 | NaN |
| NaN | uiTargetRadius | int | Defaults to displayRadius value. Radius used when attacking/reclaiming/etc this unit | NaN | NaN |
| NaN | shieldRenderRadius: | int | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 | NaN |
| NaN | shieldDisplayOnlyDeflection: | bool | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true | NaN |
| NaN | shieldDeflectionDisplayRate: | float | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 | NaN |
| 1.13.3 | showOnMinimap: | bool | Defaults to true. Hide units on minimap if false. | showOnMinimap: false | NaN |
| 1.13.3 | showActionsWithMixedSelectionIfOtherUnitsHaveTag: | bool | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: true | NaN |
| 1.14 | showOnMinimapToEnemies | bool | Useful for stealth units | NaN | NaN |
| NaN | #==== | #==== | Building Only Keys | NaN | NaN |
| NaN | isBuilding: | bool | Defines if the unit is a building. | isBuilding: true | NaN |
| NaN | footprint: | ints | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 | NaN |
| NaN | constructionFootprint: | ints | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 | NaN |
| NaN | displayFootprint: | ints | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 | NaN |
| NaN | buildingSelectionOffset: | int | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 | NaN |
| NaN | buildingToFootprintOffsetX: | float | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 | NaN |
| NaN | buildingToFootprintOffsetY: | float | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 6 | NaN |
| NaN | placeOnlyOnResPool: | bool | Normally used for extractors, forces building construction in a resource pool. | placeOnlyOnResPool: true | NaN |
| NaN | selfBuildRate: | float | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 | NaN |
| 1.14 | ignoreInUnitCapCalculation | NaN | defaults to true for buildings otherwise false. Set to true to not count this unit in unit cap. | NaN | NaN |
| NaN | #==== | #==== | Misc Keys | NaN | NaN |
| NaN | copyFrom: | file(s) (ini) | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini | NaN |
| NaN | dont\_load: | bool | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true | NaN |
| NaN | overrideAndReplace: | string(s) | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer | NaN |
| 1.13.3 | onNewMapSpawn: | string | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam, spawnPoint\_eachActiveTeam | NaN | NaN |
| NaN | globalScale: | float | Defaults to 1. Changing not recommended. | globalScale: 2 | NaN |
| NaN | isLocked: | bool | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true | NaN |
| 1.13 | isLockedIfGameModeNoNuke: | bool | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true | NaN |
| NaN | experimental: | bool | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true | NaN |
| NaN | stayNeutral: | bool | Set to false to disable capture when unit is on the neutral team. | stayNeutral: false | NaN |
| 1.13 | createNeutral: | bool | Set to true to always spawn the unit on the neutral team. | createNeutral: true | NaN |
| NaN | createOnAggressiveTeam: | bool | Set to true to always spawn the unit on aggressive teams on single player matches. | createOnAggressiveTeam: true | NaN |
| 1.13 | tags: | string(s) | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage | NaN |
| NaN | fogOfWarSightRange: | int | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 18 | NaN |
| 1.14 | fogOfWarSightRangeWhileNotBuilt | int | Fog of War range when unit/building is incomplete. Defaults to fogOfWarSightRange | NaN | NaN |
| NaN | softCollisionOnAll: | int | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 | NaN |
| NaN | disableAllUnitCollisions: | bool | Unit cannot collide with others if true. | disableAllUnitCollisions: true | NaN |
| 1.13 | isUnrepairableUnit: | bool | No unit can repair this unit if true. | isUnrepairableUnit: true | NaN |
| NaN | isUnselectable: | bool | If true unit cannot be selected. (includes AI players) | isUnselectable: true | NaN |
| 1.14 | isUnselectableAsTarget | bool | Defaults to isUnselectable. Can be used to create units that cannot be selected but can be targeted for attack, reclaim, etc | NaN | NaN |
| 1.13 | isPickableStartingUnit: | bool | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true | NaN |
| 1.13 | startFallingWhenStartingUnit: | bool | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true | NaN |
| NaN | soundOnAttackOrder: | sound(s) | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg | NaN |
| NaN | soundOnMoveOrder: | sound(s) | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg | NaN |
| 1.13.3 | soundOnNewSelection: | sound(s) | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg | NaN |
| NaN | canNotBeDirectlyAttacked: | bool | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. | canNotBeDirectlyAttacked: true | NaN |
| NaN | canNotBeDamaged | bool | Defaults to value of canNotBeDirectlyAttacked (be careful setting this without canNotBeDirectlyAttacked, as AI will attack forever) | NaN | NaN |
| 1.13.3 | canNotBeGivenOrdersByPlayer: | bool | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true | NaN |
| 1.13.3 | canOnlyBeAttackedByUnitsWithTags: | strings(s) | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank | NaN |
| 1.14 | disableDeathOnZeroHp | bool | Setting to true allows unit to continue living even at 0 HP, useful for custom "death" action. Warning: If not used with an autoTrigger, etc units will attack this unit forever. | NaN | NaN |
| NaN | #==== | #==== | Transport Keys | NaN | NaN |
| 1.13 | transportSlotsNeeded: | int | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 | NaN |
| NaN | maxTransportingUnits | int | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 | NaN |
| 1.13 | transportUnitsRequireTag: | string(s) | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier | NaN |
| 1.13 | transportUnitsRequireMovementType: | movementTypes | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER | NaN |
| 1.13 | transportUnitsBlockAirAndWaterUnits: | bool | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13 | transportUnitsKeepBuiltUnits: | bool | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true | NaN |
| 1.13 | transportUnitsCanUnloadUnits: | LogicBoolean | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false | NaN |
| 1.13 | transportUnitsAddUnloadOption: | bool | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false | NaN |
| 1.13.3 | transportUnitsUnloadDelayBetweenEachUnit: | float | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 | NaN |
| 1.13 | transportUnitsKillOnDeath: | LogicBoolean | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() | NaN |
| 1.13 | transportUnitsHealBy: | float | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 | NaN |
| NaN | transportUnitsBlockOtherTransports: | bool | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false | NaN |
| 1.13.3 | whileNeutralTransportAnyTeam: | bool | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true | NaN |
| 1.13.3 | whileNeutralConvertToTransportedTeam: | bool | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true | NaN |
| 1.13.3 | convertToNeutralIfNotTransporting: | bool | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true | NaN |
| 1.13.3 | transportUnitsOnTeamChangeKeepCurrentTeam: | bool | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true | NaN |
| NaN | transportUnitsEachUnitAlwaysUsesSingleSlot | bool | Ignore transportSlotsNeeded on transported units. | NaN | NaN |
| NaN | transportUnitsKeepWaypoints | LogicBoolean | Default false. When true transported units keep their original waypoints when unloading, and don't get an unload waypoint. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | #==== | #==== | Resource Node Keys | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | resourceRate: | float | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | NaN | NaN |
| NaN | similarResourcesHaveTag: | string(s) | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource | NaN |
| 1.13.3 | resourceMaxConcurrentReclaimingThis: | int | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 | NaN |
| 1.13.3 | reclaimPrice: | int | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 | NaN |
| 1.13.3 | #==== | #==== | Resource Harvester Keys | NaN | NaN |
| NaN | canReclaimResources: | bool | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true | NaN |
| NaN | canReclaimResourcesNextSearchRange: | int | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 | NaN |
| NaN | canReclaimResourcesOnlyWithTags: | string(s) | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource | NaN |
| NaN | canReclaimUnitsOnlyWithTags | string(s) | This is for reclaiming units, not for resources. See canReclaimResourcesOnlyWithTags | NaN | NaN |
| NaN | #==== | #==== | Construction and Factory Keys | NaN | NaN |
| NaN | canRepairUnitsOnlyWithTags | string(s) | NaN | NaN | NaN |
| NaN | canRepairBuildings: | bool | Can this can heal ally buildings (isBuilder:true is required) | canRepairBuildings: true | NaN |
| NaN | canRepairUnits: | bool | Can this can heal ally units. (isBuilder:true is required), canRepairBuildings required for buildings. | canRepairUnits: true | NaN |
| NaN | autoRepair: | bool | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true | NaN |
| NaN | nanoRange: | int | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 | NaN |
| NaN | nanoRepairSpeed: | float | Defaults to 0.2. Defines the unit nano repair/reclaim speed. | nanoRepairSpeed: 0.01 | NaN |
| NaN | nanoBuildSpeed: | float | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 | NaN |
| 1.13.3 | nanoRangeForRepairIsMelee: | bool | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true | NaN |
| 1.13.3 | nanoRangeForReclaimIsMelee: | bool | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true | NaN |
| 1.13.3 | nanoRangeForRepair: | int | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 | NaN |
| 1.13.3 | nanoRangeForReclaim: | int | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 | NaN |
| NaN | nanoFactorySpeed: | float | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 | NaN |
| NaN | extraBuildRangeWhenBuildingThis: | int | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 | NaN |
| NaN | builtFrom\_#\_name: | string(s) | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory | NaN |
| NaN | builtFrom\_#\_pos: | float | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 | NaN |
| NaN | builtFrom\_#\_forceNano: | bool | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true | NaN |
| 1.13.3 | builtFrom\_#\_isLocked: | LogicBoolean | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) | NaN |
| 1.13.3 | builtFrom\_#\_isLockedMessage: | LocaleString | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population | NaN |
| NaN | exit\_x: | float | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 | NaN |
| NaN | exit\_y: | float | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 | NaN |
| 1.13 | exit\_dirOffset: | float | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 | NaN |
| 1.13 | exit\_heightOffset: | float | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 | NaN |
| 1.13 | exit\_moveAwayAmount: | float | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 | NaN |
| 1.14 | exitHeightIgnoreParent | bool | Ignores parent height for exit height; useful for separating attachments with their parents for building | NaN | NaN |
| NaN | #==== | #==== | Death Keys | NaN | NaN |
| NaN | dieOnConstruct: | bool | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true | NaN |
| 1.13 | dieOnZeroEnergy: | bool | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true | NaN |
| NaN | numBitsOnDeath: | int | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 | NaN |
| NaN | nukeOnDeath: | bool | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true | NaN |
| NaN | nukeOnDeathRange: | float | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 | NaN |
| NaN | nukeOnDeathDamage: | float | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 | NaN |
| NaN | nukeOnDeathDisableWhenNoNuke: | bool | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true | NaN |
| NaN | fireTurretXAtSelfOnDeath: | turret ref | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: turret\_1 | NaN |
| 1.13 | explodeOnDeath: | bool | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false | NaN |
| 1.13 | explodeOnDeathGroundCollision: | boolean | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false | NaN |
| 1.14 | explodeTypeOnDeath: | preset effects | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding | NaN | NaN |
| 1.13 | effectOnDeath: | effect(s) ref | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound | NaN |
| 1.13 | effectOnDeathGroundCollision: | effect(s) ref | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion | NaN |
| 1.13 | unitsSpawnedOnDeath: | string(s) | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank | NaN |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | bool | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true | NaN |
| NaN | hideScorchMark: | bool | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true | NaN |
| NaN | soundOnDeath: | string(s) | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg | NaN |
| NaN | fireOnDeath | bool? | NaN | NaN | NaN |
| 1.14 | effectOnDeathIfUnbuilt: | effect(s) ref | If the unit was not completed, and is destroyed, play this effect. Defaults to effectOnDeath | effectOnDeathIfUnbuilt: CUSTOM:implode | NaN |
| NaN | #==== | #==== | Action Keys | NaN | NaN |
| 1.13.3 | autoTriggerCooldownTime: | time (seconds) | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | NaN | NaN |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU: | bool | Allows for auto actool cooldown lower than 0.2s. Default to false. | NaN | NaN |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN | NaN |
| depr. 1.13 | action\_#\_convertTo: | string | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 | NaN |
| depr. 1.13 | action\_#\_pos: | float | Order action appears in UI | action\_1\_pos: 0.1 | NaN |
| depr. 1.13 | action\_#\_price: | int | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | NaN |
| depr. 1.13 | action\_#\_text: | string | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 | NaN |
| depr. 1.13 | action\_#\_description: | string | The action description. | action\_1\_description: -Converts the tank | NaN |
| depr. 1.13 | action\_#\_addEnergy: | float | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 | NaN |
| depr. 1.13 | action\_#\_whenBuilding\_cannotMove: | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true | NaN |
| depr. 1.13 | canBuild\_#\_name/pos/isLocked: | string | Use canBuild section instead. | canBuild\_1\_name: tank | NaN |
| NaN | Section | NaN | [canBuild\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | name: | string(s) | List of unit identifiers this unit can create. Can be buildings or units. Add "setRally" to create a rally button | name: setRally, tank, hoverTank, heavyTank | NaN |
| 1.13.3 | pos: | float | Order build link appears in this unit UI. | pos: 0.1 | NaN |
| 1.13.3 | tech: | int | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 | NaN |
| 1.13.3 | forceNano: | bool | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true | NaN |
| 1.13.3 | isVisible: | LogicBoolean | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) | NaN |
| 1.13.3 | isLocked: | LogicBoolean | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) | NaN |
| 1.13.3 | isLockedMessage: | string | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks | NaN |
| 1.13.3 | isLockedMessage\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles | NaN |
| 1.13.3 | isLockedAlt: | LogicBoolean | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) | NaN |
| 1.13.3 | isLockedAltMessage: | string | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy | NaN |
| 1.13.3 | isLockedAlt2: | LogicBoolean | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() | NaN |
| 1.13.3 | isLockedAlt2Message: | string | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet | NaN |
| 1.13.3 | addResources: | price(s) | Adds these resources to self when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 | NaN |
| 1.13.3 | price: | price(s) | Overrides builded units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 | NaN |
| 1.13.3 | isGuiBlinking: | LogicBoolean | Generates a blinking effect in UI if true. | isGuiBlinking: true | NaN |
| NaN | Section | NaN | [graphics] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary code | NaN | NaN |
| NaN | NaN | file (image) | image: | NaN | NaN |
| NaN | #==== | NaN | Common Keys | NaN | NaN |
| NaN | image: | file (image) | File path to png image. | NaN | NaN |
| NaN | image\_back: | file (image) | An optional image drawn behind other units. Useful for factories that units exit | NaN | NaN |
| 1.14 | image\_shield | file (image) | Image to show as a custom shield | NaN | NaN |
| NaN | image\_wreak: | file (image) | Image to use when unit dies. Can be NONE to leave no wreak | NaN | NaN |
| NaN | image\_offsetX: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN | NaN |
| NaN | image\_offsetY: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN | NaN |
| 1.13.3 | isVisible | logic | If false will hide the unit. | NaN | NaN |
| 1.14 | isVisibleToEnemies | bool | Only visible to player and allies when false. Recommend with showOnMinimapToEnemies. Useful for stealth units. | NaN | NaN |
| 1.13 | teamColoringMode | NaN | How pixels are used for team coloring, options: pureGreen (default), hueAdd, hueShift, disabled | NaN | NaN |
| NaN | teamColorsUseHue: | bool | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN | NaN |
| NaN | scaleImagesTo: | float | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | NaN | NaN |
| NaN | imageScale: | float | Resize image. Defaults to 1. Effects leg, and shadow images as well. | NaN | NaN |
| NaN | drawLayer: | string | Land units normally default to ground or ground2 if transport. | wreaks, underwater, bottom, ground, ground2, experimentals, air, top | NaN |
| 1.13 | whenBeingBuiltMakeTransparentTill | float | How long the transparent effect is applied to incomplete units, set to 0 to disable completely | Default: 1 | NaN |
| NaN | icon\_zoomed\_out | file (image) | NaN | NaN | NaN |
| NaN | icon\_zoomed\_out\_neverShow | bool | NaN | NaN | NaN |
| NaN | icon\_build | file (image) | When set, it will use the specifed image on build list instead of the unit itself | NaN | NaN |
| NaN | #==== | NaN | Turrets (images can also be set on each turret) | NaN | NaN |
| NaN | image\_turret: | file (image) | Default image for all turrets, can also be set per turret | NaN | NaN |
| NaN | teamColorsOnTurret | bool | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | NaN | NaN |
| NaN | scaleTurretImagesTo: | float | Will cause crash if image\_turret is not specified, even if image is set per turret | NaN | NaN |
| NaN | lock\_body\_rotation\_with\_main\_turret: | bool | Locks body image locked to first turret's direction | NaN | NaN |
| 1.13 | lock\_leg\_rotation\_with\_main\_turret | bool | Locks legs and arms to first turret's direction | NaN | NaN |
| NaN | #==== | NaN | Shadow | NaN | NaN |
| NaN | image\_shadow: | file (image) | Image file, NONE, AUTO, or AUTO\_ANIMATED (AUTO will use image and make it transparent black only.) | NaN | NaN |
| NaN | shadowOffsetX: | float | NaN | NaN | NaN |
| NaN | shadowOffsetY: | float | NaN | NaN | NaN |
| 1.13.3 | image\_shadow\_frames | bool | If shadow image should use frame animation of main image | NaN | NaN |
| NaN | lock\_shadow\_rotation\_with\_main\_turret: | bool | Locks body image shadow locked to first turret's direction | NaN | NaN |
| NaN | #==== | NaN | Effects and animation | NaN | NaN |
| NaN | total\_frames | int | Defaults to 1. Animations require this. | NaN | NaN |
| NaN | default\_frame | int | Sets the default frame to display. Dependent on total\_frames. | NaN | NaN |
| NaN | frame\_width: | int | Calculated for you if total frames is set, but can be overridden | NaN | NaN |
| NaN | frame\_height: | int | Defaults to image height | NaN | NaN |
| NaN | splastEffect: | bool | True to create a water wave effect when over water. Default false | NaN | NaN |
| NaN | dustEffect: | bool | True to create a dust effect when over land. Default false | NaN | NaN |
| NaN | splastEffectReverse: | bool | True to also create effect when unit is reversing | NaN | NaN |
| NaN | dustEffectReverse: | bool | True to also create effect when unit is reversing | NaN | NaN |
| 1.13 | movementEffect | effect | Custom movement effect, can be anything | eg: movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | NaN |
| 1.13 | movementEffectReverse | effect | NaN | NaN | NaN |
| 1.13 | movementEffectRate | float | NaN | NaN | NaN |
| 1.13 | movementEffectReverseFlipEffects | bool | Create effect as if unit has rotated 180 when reversing | NaN | NaN |
| NaN | repairEffect | effect ref | Custom movement effect, can be anything. Replaces default effect from builders | NaN | NaN |
| NaN | repairEffectAtTarget | effect | NaN | NaN | NaN |
| NaN | repairEffectRate | int | Defaults to 5 | NaN | NaN |
| 1.13.3 | reclaimEffect | effect | NaN | NaN | NaN |
| 1.13.3 | reclaimEffectAtTarget | effect | NaN | NaN | NaN |
| 1.13.3 | reclaimEffectRate | int | NaN | NaN | NaN |
| NaN | rotate\_with\_direction: | bool | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN | NaN |
| NaN | animation\_direction\_units: | float | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN | NaN |
| NaN | animation\_direction\_strideX: | int | Animation frames to offset on direction change. | NaN | NaN |
| NaN | animation\_direction\_strideY: | int | Animation frames to offset on direction change. Used with frame\_height. | NaN | NaN |
| NaN | animation\_direction\_starting: | float | Direction for first frame | NaN | NaN |
| NaN | animation\_direction\_useMainTurret | bool | Use main turret | NaN | NaN |
| 1.13.3 | disableLowHpFire | bool | NaN | NaN | NaN |
| 1.13.3 | disableLowHpSmoke | bool | NaN | NaN | NaN |
| 1.13.3 | showTransportBar: | bool | NaN | NaN | NaN |
| 1.13.3 | showHealthBar | bool | NaN | NaN | NaN |
| 1.13.3 | showEnergyBar | bool | NaN | NaN | NaN |
| 1.14 | showShieldBar | bool | NaN | NaN | NaN |
| 1.14 | showQueueBar | bool | NaN | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better, more adaptable ways) | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_start: | int | TYPE can be set to: attack, moving, idle. Use [animation] section instead for more control | animation\_moving\_start: 0 | NaN |
| depr. 1.13 | animation\_TYPE\_end: | int | End frame, must be larger then start | animation\_moving\_end: 3 | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_start: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_end: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_speed: | float | Delay for each frame of animation. Larger values cause slower animation | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_pingPong: | bool | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN | NaN |
| NaN | Section | NaN | [attack] | The attack section is for global attack characteristics, per-turret overrides these | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | canAttack: | bool | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | can also be narrowed per turret. Note: not required if canAttack is false. | NaN | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | can also be narrowed per turret | NaN | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | can also be narrowed per turret | NaN | NaN |
| NaN | maxAttackRange: | float | (multiplied by globalScale) | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | Will only attack units that has the specified tags. | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | Can only attack units without the specified tags. | NaN | NaN |
| 1.13 | turretMultiTargeting | bool | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | NaN | NaN |
| NaN | isMelee: | bool | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN | NaN |
| 1.13.3 | meleeEngangementDistance | int | Makes unit move to attack nearby units. Defaults to 250 for melee, and 0 for non melee (Works even if non-melee, but might be unexpected to players) | NaN | NaN |
| NaN | turretRotateWithBody | bool | Are all turrets rotated when body rotates. Defaults to true | NaN | NaN |
| NaN | attackMovement: | string | normal/bomber. bomber attack movement will retreat when energy runs out | NaN | NaN |
| NaN | dieOnAttack: | bool | Will die when it attacks. | NaN | NaN |
| NaN | removeOnAttack | bool | Remove unit when it attacks. | NaN | NaN |
| NaN | isFixedFiring: | bool | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN | NaN |
| NaN | aimOffsetSpread: | float | Offset each shot multiplied by target radius. Defaults to 0.6 | aimOffsetSpread:0 will make unit always attack center | NaN |
| 1.13 | stopTargetingAfterFiring | bool | Unit stops targeting after firing a shot. Rarely used or needed. | NaN | NaN |
| NaN | disablePassiveTargeting: | bool | Unit only attacks manually ordered target. Rarely used or needed. | NaN | NaN |
| 1.13.3 | showRangeUIGuide | bool | Will it show the range indicator. Useful for showing ranges in radar and related structures. | NaN | NaN |
| NaN | setMainTurretAs | turret ref | Set main turret for lockLegRotationWithMainTurret, lockShadowRotationWithMainTurret, etc | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys - can be used but better to set these per turret | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| depr. 1.13 | turretSize: | float | (multiplied by globalScale) | NaN | NaN |
| depr. 1.13 | turretTurnSpeed: | float | NaN | NaN | NaN |
| depr. 1.13 | shootDelay: | float | Global delay, can also use delay on each turret | NaN | NaN |
| NaN | Section | NaN | [turret\_NAME] | Turrets fire projectiles with different traits | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code | NaN | NaN |
| NaN | NaN | float | x: | NaN | NaN |
| NaN | NaN | float | y: | NaN | NaN |
| NaN | NaN | NaN | Positioning/Stats | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | x: | float | NaN | NaN | NaN |
| NaN | y: | float | NaN | NaN | NaN |
| NaN | copyFrom: | turret ref | Copy all values from another turret as defaut values for this turret | copyFrom: 1 | NaN |
| NaN | projectile | projectile ref | Projectile fired from this turret. | eg: projectile: torpedo | NaN |
| 1.14 | altProjectile | projectile ref | Alternative projectile fired from this turret when altProjectileCondition is true | NaN | NaN |
| 1.14 | altProjectileCondition | LogicBoolean | Used with altProjectile | NaN | NaN |
| 1.13 | barrelX | float | Defaults to 0. Controls horizontal position for projectile spawn. | NaN | NaN |
| 1.13 | barrelY | float | Defaults to size. Note: size and barrelY have the same meaning | NaN | NaN |
| 1.13.3 | barrelHeight | float | Height of barrel in 3d. Effect projectile and shoot flame starting height | NaN | NaN |
| NaN | size: | float | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 | NaN |
| NaN | turnSpeed | float | Max turn speed of the turret | NaN | NaN |
| NaN | turnSpeedAcceleration | float | Defaults to disabled, and full turn speed is used. | NaN | NaN |
| NaN | turnSpeedDeceleration | float | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | NaN | NaN |
| NaN | idleDir | float | Defaults to 0 | NaN | NaN |
| 1.13 | idleDirReversing | float | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | NaN | NaN |
| NaN | shouldResetTurret: | bool | Defaults true. False to disable the reseting turret angle when idle | NaN | NaN |
| 1.14 | idleSweepAngle | int | Disabled by default. Controls how far the turret will "look" left and right | NaN | NaN |
| 1.14 | idleSweepDelay | float | Controls the delay between idleSweep movements | NaN | NaN |
| 1.14 | idleSweepSpeed | float | Controls the speed with which the turret sweeps when idle | NaN | NaN |
| 1.14 | idleSweepCondition | LogicBoolean | Disable idle sweep if false | NaN | NaN |
| 1.14 | idleSweepAddRandomDelay | float | Default 1-20 depends on idleSweepDelay, used to stop sweep syncing up with other units | NaN | NaN |
| 1.14 | idleSweepAddRandomAngle | int | Default 0 | NaN | NaN |
| NaN | attachedTo: | turret ref | Id of another turret to attach to, will be positioned relative to it, and rotate with it. | NaN | NaN |
| NaN | slave: | bool | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN | NaN |
| NaN | isMainNanoTurret: | bool | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN | NaN |
| NaN | energyUsage: | float | Required energy to fire weapon. Same as resourceUsage: energy=X | NaN | NaN |
| NaN | resourceUsage | price | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | NaN |
| NaN | NaN | NaN | Timing | NaN | NaN |
| NaN | delay: | float | Override global shootDelay for this turret | NaN | NaN |
| NaN | linkDelayWithTurret | turret ref | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN | NaN |
| NaN | warmup: | float | Delay before firing a shot. | NaN | NaN |
| NaN | warmupCallDownRate | float | Rate to reduce warmup when turret is not ready to fire at any targets | NaN | NaN |
| NaN | warmupNoReset | bool | Defaults to false. When true warmup is not reset after firing a shot. Used with warmupCallDownRate | NaN | NaN |
| NaN | warmupShootDelayTransfer | float | Defaults to 0, a multiplier which reduces the next shot delay by the warmup value. When used with warmupNoReset, can make a each shot faster. | NaN | NaN |
| NaN | NaN | NaN | On Shoot | NaN | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | NaN | Freezes body movement while shooting. | NaN | NaN |
| 1.14 | barrelOffsetX\_onOddShots: | float | 0 by default. Sets a barrelX offset only during odd numbered shots, useful for twin-barreled units. Use with barrelX | NaN | NaN |
| NaN | NaN | NaN | Targeting control | NaN | NaN |
| 1.14 | aimOffsetSpread | NaN | NaN | NaN | NaN |
| NaN | canShoot: | bool | Defaults to true | NaN | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | NaN | NaN | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | NaN | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | NaN | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | NaN | NaN | NaN |
| NaN | canAttackCondition: | LogicBoolean | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | NaN |
| 1.14 | canAttackMaxAngle | float | Max angle to target for turret to be allowed for fire. Defaults to 5, don't set lower. Can be set to 181 for turrets that don't need to turn to fire missiles. | NaN | NaN |
| 1.13 | clearTurretTargetAfterFiring | bool | Clears the turrets sub-target when using multi-targeting | NaN | NaN |
| NaN | limitingRange: | float | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | NaN |
| 1.13 | limitingAngle | NaN | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN | NaN |
| 1.13 | limitingMinRange | NaN | Sets minimum range for turret. | limitingMinRange: 200 | NaN |
| 1.13 | interceptProjectiles\_withTags | NaN | Currently used with anti-nuke units. | NaN | NaN |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN | NaN |
| NaN | interceptProjectiles\_andUnderDistance | NaN | Defaults to 2000, distance inflight before firing | NaN | NaN |
| NaN | interceptProjectiles\_andOverHeight | NaN | Defaults to 0 | NaN | NaN |
| NaN | laserDefenceEnergyUse: | float | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | invisible: | LogicBoolean | Don't render this turret, but still can shoot, etc. | NaN | NaN |
| NaN | image: | file (image) | Use custom image. Overrides unit's main turret image | NaN | NaN |
| NaN | image\_applyTeamColors | bool | NaN | NaN | NaN |
| NaN | image\_drawOffsetX | float | NaN | NaN | NaN |
| NaN | image\_drawOffsetY | float | NaN | NaN | NaN |
| NaN | chargeEffectImage:\n | file (image) | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | NaN |
| NaN | warmupStartEffect | effect ref | NaN | NaN | NaN |
| NaN | shoot\_sound: | string | Can be linked to an .ogg or .wav file, or one of the default game sounds (list at bottom of reference) | shoot\_sound: tank\_firing | shoot\_sound: missile.wav | shoot\_sound: ROOT:audio/shoot.ogg | NaN |
| NaN | shoot\_sound\_vol: | float | NaN | NaN | NaN |
| NaN | shoot\_flame: | effects | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 | alleged: largeExplosion, smallExplosion, resourcePoolSmoke, noneExplosion |
| NaN | shoot\_light | color | NaN | NaN | NaN |
| NaN | idleSpin: | float | Spin rate when idle, used on missile turrets | NaN | NaN |
| 1.13 | onShoot\_playAnimation | animation ref | Play a custom animation from an [animation] section after firing this turret | NaN | NaN |
| 1.14 | onShoot\_triggerActions | action refs | Trigger these actions each time this turret fires | NaN | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | time | Stops the unit from moving for a certain period of time | NaN | NaN |
| NaN | recoilOffset | float | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN | NaN |
| NaN | recoilOutTime | float | Time to get to offset position after firing | NaN | NaN |
| NaN | recoilReturnTime | float | Time to return to default position | NaN | NaN |
| 1.13.3 | showRangeUIGuide | bool | NaN | NaN | NaN |
| NaN | unloadUpToXUnitsAndGiveAttackOrder | int | After unloading the units, they are automatically given an attack waypoint against the parent's target | NaN | NaN |
| NaN | unloadUpToXUnitsAndGiveAttackOrder\_withTag | tag(s) | Specifies units with specified tag. | NaN | NaN |
| NaN | Section | NaN | [projectile\_NAME] | Projectiles are necessary to inflict damage on an enemy, but also other purposes | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code | NaN | NaN |
| NaN | NaN | int | directDamage: or areaDamage: | NaN | NaN |
| NaN | NaN | NaN | life: | NaN | NaN |
| NaN | NaN | NaN | Core | NaN | NaN |
| NaN | life: | NaN | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | NaN |
| NaN | deflectionPower: | float | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | NaN |
| 1.13 | explodeOnEndOfLife | bool | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing. Good for making area-denial weapons. | NaN | NaN |
| NaN | autoTargetingOnDeadTarget: | bool | Retarget to nearby unit if target dies while in transit | NaN | NaN |
| 1.14 | autoTargetingOnDeadTargetRange | int | The range which it will select a new target if old target has died | NaN | NaN |
| 1.14 | autoTargetingOnDeadTargetLead | float | The lead it will try to have on the new target | NaN | NaN |
| 1.13 | unloadUpToXUnitsFromSource | int | Unload X units from source unit, to projectile explode location | NaN | NaN |
| 1.13 | teleportSource | bool | Move unit that shot this projectile to projectile explode location | NaN | NaN |
| 1.13 | spawnUnit | unit types | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank(offsetX=10) | NaN |
| 1.14 | spawnProjectilesOnEndOfLife | projectile ref | Spawns new projectiles on end of life, useful for secondary projectiles | spawnProjectilesOnEndOfLife: torpedo\_split(offsetDir=90), torpedo\_split(offsetDir=-90)\n | NaN |
| 1.14 | spawnProjectilesOnExplode | projectile ref | Projectiles to spawns when this projectile hits it's target | NaN | NaN |
| 1.14 | spawnProjectilesOnCreate | NaN | Spawns projectiles on creation of this projectile, useful for making true shotgun-like projectile spread | NaN | NaN |
| 1.13.3 | convertHitToSourceTeam | bool | Convert units hit to the team that fired this projectile. Useful to make capturing systems | NaN | NaN |
| 1.13 | tags | tags | Useful for projectile interceptions (e.g. Nuke and Anti-Nuke Interaction) | NaN | NaN |
| NaN | flameWeapon: | bool | Generates small flames on hit (only cosmetic) | NaN | NaN |
| NaN | NaN | NaN | Damage | NaN | NaN |
| NaN | directDamage: | int | Damage to target unit on hit. Does not work with targetGround:true as it won't have a clear unit to target | NaN | NaN |
| NaN | areaDamage: | int | Damages on arrival of target with an area effect, use areaRadius to adjust size of damage. targetGround needs this to damage | NaN | NaN |
| 1.13 | areaRadius: | float | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | NaN | NaN |
| NaN | areaDamageNoFalloff | bool | Removes the falloff from areaDamage | NaN | NaN |
| NaN | areaRadiusFromEdge | bool | Applies damage from edge of units instead of center. Mostly effects large units. | NaN | NaN |
| 1.13 | areaExpandTime | float | Applies area damage as an expanding blast wave rather than instantly. Useful for nuke projectiles | NaN | NaN |
| 1.13 | areaHitAirAndLandAtSameTime | bool | Defaults to false | NaN | NaN |
| NaN | areaHitUnderwaterAlways | bool | Defaults to false | NaN | NaN |
| NaN | areaIgnoreUnitsCloserThan | int | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | NaN | NaN |
| 1.13 | buildingDamageMultiplier | float | Defaults to 1 | NaN | NaN |
| 1.13 | shieldDamageMultiplier | float | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage | NaN |
| 1.13 | shieldDefectionMultiplier | float | Defaults to 1. | eg: 0 to ignore shields and directly damage hull | NaN |
| 1.14 | hullDamageMultiplier | float | Defaults to 1. Can be used to create EMP weapons that affect shields only | eg: 0 to ignore hull and only damage shields | NaN |
| NaN | armourIgnoreAmount | int | Amount of armour to ignore on target and do damage as if this armour was not there | NaN | NaN |
| 1.13 | friendlyFire | bool/string | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy | NaN |
| 1.13.3 | mutatorX\_ifUnitWithTags | tags | Applies mutators to this projectile if target has corresponding tags | eg: mutator1\_ifUnitWithTags: infantry | NaN |
| 1.13.3 | mutatorX\_ifUnitWithoutTags | tags | Same as ifUnitWithTags, but applies if target doesn't have the set tags | eg: mutator1\_ifUnitWithoutTags: strongArmour | NaN |
| 1.13.3 | mutatorX\_directDamageMultiplier | float | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible | NaN | NaN |
| 1.13.3 | mutatorX\_areaDamageMultiplier | float | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | NaN | NaN |
| 1.13.3 | mutatorX\_changedExplodeEffect | effect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | NaN | NaN |
| 1.14 | mutatorX\_addResourcesDirectHit | resource | Add resource to all hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | NaN | NaN |
| 1.14 | mutatorX\_addResourcesAreaHit | resource | NaN | NaN | NaN |
| 1.14 | interceptProjectile\_removeTargetLifeOnly | bool | Defaults to false. When false projectiles are just removed. Could be true to make hit projectiles explode or split when hit | NaN | NaN |
| NaN | targetGround | bool | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN | NaN |
| 1.14 | targetGround\_includeTargetHeight | bool | Default false. for area affect AA weapons | NaN | NaN |
| 1.14 | targetGroundHeightOffset | float | Default 0. for shooting over or under a target. Useful for projectiles that split and rain down. | NaN | NaN |
| NaN | speed: | float | Projectile default travel speed | NaN | NaN |
| NaN | targetSpeed: | float | Accelerate to this speed | NaN | NaN |
| 1.13 | targetSpeedAcceleration | float | Controls the speed rampup for targetSpeed | NaN | NaN |
| NaN | ballistic: | bool | Makes projectiles fly up into the air and come down, instead of going in a straight line | NaN | NaN |
| NaN | ballistic\_delaymove\_height: | float | NaN | NaN | NaN |
| NaN | ballistic\_height: | float | NaN | NaN | NaN |
| NaN | targetGroundSpread: | float | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | NaN |
| NaN | speedSpread: | float | Randomly change the starting projectile speed by this amount | NaN | NaN |
| NaN | instant | bool | Hit target instantly | NaN | NaN |
| NaN | instantReuseLast: | bool | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | NaN |
| 1.14 | instantReuseLast\_alsoChangeTurretAim | bool | Make turret's aim include last projectile's spread and sweep offsets, useful for beam weapons | NaN | NaN |
| 1.14 | instantReuseLast\_keepAreaDamageList | bool | Default false. Keeping the list was the normal behaviour in 1.13 making area damage not apply a second time but this is not useful. Use this only if you want the old behaviour. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13 | disableLeadTargeting | bool | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | NaN | NaN |
| 1.13 | leadTargetingSpeedCalculation | float | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | NaN | NaN |
| 1.13.3 | initialUnguidedSpeedHeight | NaN | Sets vertical speed for projectiles with targetGround. Use gravity to make smooth arching projectiles | NaN | NaN |
| NaN | initialUnguidedSpeedX | NaN | NaN | NaN | NaN |
| NaN | initialUnguidedSpeedX | NaN | NaN | NaN | NaN |
| 1.13.3 | gravity: | NaN | Controls the pull for projectiles that target ground. Use together with initialUnguidedSpeedHeight | NaN | NaN |
| 1.14 | turnSpeed | float | Limits the turn speed of a projectile, making them inaccurate even with directDamage | NaN | NaN |
| 1.14 | wobbleAmplitude | float | How wide the projectile will wobble | NaN | NaN |
| 1.14 | wobbleFrequency | float | How often the projectile will wobble | NaN | NaN |
| 1.14 | pushForce | float | Push (or pull with a negative value) the units that get hit. Divided by target mass | NaN | NaN |
| 1.14 | pushVelocity | float | Push (or pull with a negative value) the units that get hit. Ignores target mass | NaN | NaN |
| 1.14 | moveWithParent | bool | Move projectile as parent moves. Useful for beam effects that need to stick to source turret. | NaN | NaN |
| 1.14 | sweepOffset | float | Useful for beam effects. | NaN | NaN |
| 1.14 | sweepOffsetFromTargetRadius | float | Add to sweep offset by factor of target's radius. 0.4 would be 40% | sweepOffsetFromTargetRadius: 0.4 | NaN |
| 1.14 | sweepSpeed | float | Useful for beam effects. | NaN | NaN |
| 1.14 | retargetingInFlight | bool | Can retarget a new target mid-flight, perfect for flak-style weapons and projectiles that collide | NaN | NaN |
| 1.14 | retargetingInFlightSearchDelay | float/time | How long between searching for new targets. Default 5 | NaN | NaN |
| 1.14 | retargetingInFlightSearchRange | int | Range which targets are reselected. Default 120 | NaN | NaN |
| 1.14 | retargetingInFlightSearchLead | float | The lead of the projectile to try to hit the target. Default 15 | NaN | NaN |
| 1.14 | retargetingInFlightSearchOnlyTags | tag ref | Only retarget units with these tags | NaN | NaN |
| 1.13 | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | color | color | Recolors this projectile using a hex value. | color: #bebe50 | NaN |
| 1.13.3 | invisible | bool | NaN | NaN | NaN |
| NaN | image: | file (image) | Use custom image. Overrides drawType and frame | NaN | NaN |
| NaN | drawType | int | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | NaN |
| NaN | drawSize: | float | Scale image. Defaults to 1 | NaN | NaN |
| NaN | frame | int | Built-in image frame to use, starts at zero. | NaN | NaN |
| NaN | hitSound: | bool | Default true | NaN | NaN |
| 1.13 | explodeEffect | effect ref list | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | NaN |
| 1.13 | explodeEffectOnShield | effect ref list | Use this effect if shield is active on target | NaN | NaN |
| 1.13 | teamColorRatio | float | Mix 0-1 of team colour into color field | NaN | NaN |
| 1.14 | teamColorRatio\_sourceRatio | float | default is (1-teamColorRatio). Keep more of color when mixing. Note this might saturate colors. | NaN | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN | NaN |
| 1.13 | effectOnCreate | effect ref list | NaN | NaN | NaN |
| 1.13 | shouldRevealFog | bool | Reveal fog to player on explode | NaN | NaN |
| 1.13 | alwaysVisibleInFog | bool | NaN | NaN | NaN |
| 1.13 | nukeWeapon | bool | Shows on mini-map when fired. Some other side effects as well. | NaN | NaN |
| NaN | trailEffect | bool/effect | true for built-in defaults, but can also point to any custom effects | NaN | NaN |
| 1.13 | trailEffectRate | float | Defaults to 3 | NaN | NaN |
| NaN | lightCastOnGround | bool | NaN | NaN | NaN |
| NaN | lightSize: | float | NaN | NaN | NaN |
| NaN | lightColor | color | NaN | lightColor: #ffe92b | NaN |
| NaN | largeHitEffect: | bool | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN | NaN |
| NaN | lightingEffect: | bool | Draw as lighting works best with instant:true | NaN | NaN |
| NaN | laserEffect: | bool | Draw as laser works best with instant:true | NaN | NaN |
| 1.14 | beamImage | file (image) | Image to use for laserEffect | NaN | NaN |
| 1.14 | beamImageOffsetRate | float | NaN | NaN | NaN |
| 1.14 | beamImageStart | int | Frame start of beam animationeffect | NaN | NaN |
| 1.14 | beamImageStartRotated | bool | Defaults false. True to rotate with turret angle | NaN | NaN |
| 1.14 | beamImageEnd | int | Frame end of beam animation effect | NaN | NaN |
| 1.14 | beamImageEndRotated | bool | Defaults false | NaN | NaN |
| NaN | Section | NaN | [movement] | These are traits the unit has as far as movement goes, such as rotation and acceleration speed | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | movementType: | string | Defines what kind of terrain the unit will be able to move, along with other properties of unit types. | movementType: LAND | NaN |
| NaN | slowDeathFall: | bool | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true | NaN |
| NaN | moveSpeed: | float | Maximum movement speed of the unit. | moveSpeed: 1.2 | NaN |
| NaN | moveAccelerationSpeed: | float | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 | NaN |
| NaN | moveDecelerationSpeed: | float | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 | NaN |
| NaN | reverseSpeedPercentage: | float | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 | NaN |
| NaN | landOnGround: | bool | Should flying unit land when idle. | landOnGround: false | NaN |
| NaN | targetHeight: | float | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 | NaN |
| NaN | targetHeightDrift: | float | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 | NaN |
| NaN | startingHeightOffset: | float | NaN | NaN | NaN |
| 1.14 | heightChangeRate: | float | Rate at which the unit changes height, either from converting or drifting | heightChangeRate: 3 | NaN |
| 1.14 | fallingAcceleration: | float | The acceleration in which a unit drops | NaN | NaN |
| 1.14 | fallingAccelerationDead: | float | fallingAcceleration but when destroyed | NaN | NaN |
| NaN | maxTurnSpeed: | float | NaN | NaN | NaN |
| NaN | turnAcceleration: | float | NaN | NaN | NaN |
| NaN | moveSlidingMode: | bool | Makes the unit slide when moveDecelerationSpeed is lower, making them drift and feel natural | NaN | NaN |
| NaN | moveIgnoringBody: | bool | Allows the unit to move without fully turning in the direction its moving, useful for ships and air units | NaN | NaN |
| NaN | moveSlidingDir: | int | NaN | NaN | NaN |
| NaN | joinsGroupFormations: | bool | Defaults to true. Changing not recommended | NaN | NaN |
| NaN | ignoreMoveOrders | bool | Ignore and remove movement type waypoints. Always to true for buildings. | NaN | NaN |
| NaN | Section | NaN | [ai] | This determines what the AI will use the unit for, does not effect player | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | useAsBuilder: | bool | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN | NaN |
| NaN | useAsTransport | bool | Defaults to true if unit can transport units | NaN | NaN |
| NaN | useAsHarvester | bool | Defaults to true if unit can reclaim resources | NaN | NaN |
| NaN | useAsAttacker | bool | Can AI use this unit for attacks. Defaults to true. | NaN | NaN |
| NaN | disableUse: | bool | Disallow AI building this unit or building | NaN | NaN |
| NaN | ai\_upgradePriority | float | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN | NaN |
| NaN | NaN | NaN | Buildings only | NaN | NaN |
| NaN | buildPriority: | float | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | NaN |
| NaN | noneInBaseExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | NaN |
| NaN | noneGlobalExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | NaN |
| NaN | recommendedInEachBaseNum | float | Defaults to 0 | NaN | NaN |
| NaN | recommendedInEachBasePriorityIfUnmet | float | Defaults to 0.5. Overrides buildPriority | NaN | NaN |
| NaN | upgradedFrom: | string | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | NaN |
| NaN | maxGlobal: | int | NaN | NaN | NaN |
| NaN | maxEachBase: | int | NaN | NaN | NaN |
| 1.4 | notPassivelyTargetedByOtherUnits | bool | Useful for walls, etc | NaN | NaN |
| 1.4 | lowPriorityTargetForOtherUnits | NaN | Useful for units that cannot attack back. Eg walls | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedInEachBase | NaN | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedGlobal | NaN | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_includeOtherHarvesterCounts | NaN | NaN | NaN | NaN |
| 1.13.3 | onlyUseAsHarvester\_ifBaseHasUnitTagged | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [leg\_#] / [arm\_#] | Legs can move around when unit moves, Arms need an animation or convert | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | x: | float | Sets position of the foot on the X axis. | NaN | NaN |
| NaN | y: | float | Sets position of the foot on the Y axis. | NaN | NaN |
| NaN | copyFrom: | int | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | NaN |
| NaN | attach\_x: | float | Sets the leg's attach point on the X axis. | NaN | NaN |
| NaN | attach\_y: | float | Sets the leg's attach point on the Y axis. | NaN | NaN |
| NaN | rotateSpeed: | float | NaN | NaN | NaN |
| NaN | endDirOffset | NaN | Target foot/end rotation relative to body | NaN | NaN |
| NaN | lockMovement | bool | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | NaN |
| NaN | heightSpeed: | float | NaN | NaN | NaN |
| NaN | moveSpeed | NaN | NaN | NaN | NaN |
| NaN | moveWarmUp | NaN | NaN | NaN | NaN |
| NaN | holdDisMin: | float | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | NaN |
| NaN | holdDisMax: | float | Defaults to 16. Force reposition of leg at this distance. | NaN | NaN |
| NaN | holdDisMin\_maxMovingLegs | NaN | NaN | NaN | NaN |
| NaN | hold\_moveOnlyIfFurthest | NaN | NaN | NaN | NaN |
| NaN | holdDisMin\_checkNeighbours | NaN | NaN | NaN | NaN |
| NaN | hardLimit: | float | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | NaN |
| NaN | estimatingPositionMultiplier | float | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | hidden: | logic boolean | NaN | NaN | NaN |
| 1.13 | image\_end | file (image) | NaN | NaN | NaN |
| 1.13 | image\_end\_shadow | file (image) | NaN | NaN | NaN |
| 1.13 | image\_end\_teamColors | NaN | NaN | NaN | NaN |
| 1.13 | image\_foot | file (image) | same as image\_end | NaN | NaN |
| NaN | image\_foot\_shadow | file (image) | NaN | NaN | NaN |
| 1.13 | image\_middle | file (image) | NaN | NaN | NaN |
| NaN | image\_leg | file (image) | same as image\_middle | NaN | NaN |
| 1.13 | draw\_foot\_on\_top | bool | NaN | NaN | NaN |
| NaN | drawOverBody | bool | Draw over body | NaN | NaN |
| NaN | drawUnderAllUnits | bool | Draw over all units | NaN | NaN |
| NaN | drawDirOffset | float | NaN | NaN | NaN |
| NaN | dust\_effect: | bool | Spawns dust particles on each step. | NaN | NaN |
| NaN | spinRate | float | Makes arm/leg spin, like idleSpin for turrets | NaN | NaN |
| NaN | favourOppositeSideNeighbours | NaN | calculate neighbours with X 10 times closer than Y | NaN | NaN |
| NaN | drawLegWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN | NaN |
| NaN | drawFootWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN | NaN |
| NaN | resetAngle: | float | Unused | NaN | NaN |
| NaN | Section | NaN | [attachment\_NAME] | Attachments are slots where other units can be positioned or carried | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | x | float | NaN | NaN | NaN |
| 1.13.3 | y | float | NaN | NaN | NaN |
| 1.13.3 | height | bool | NaN | NaN | NaN |
| 1.13.3 | idleDir | int | NaN | NaN | NaN |
| 1.14 | idleDirReversing | int | NaN | NaN | NaN |
| 1.13.3 | isVisible | bool | NaN | NaN | NaN |
| 1.13.3 | onCreateSpawnUnitOf | unit ref | NaN | NaN | NaN |
| 1.13.3 | isUnselectable | bool | Defaults to false | NaN | NaN |
| NaN | canAttack | bool | Defaults to true. Set to false to stop this attachment attacking. | NaN | NaN |
| 1.13.3 | canBeAttackedAndDamaged | bool | NaN | NaN | NaN |
| 1.13.3 | deattachIfWantingToMove | bool | If the unit is ordered to move, it will detach. This includes waypoints from actions. | NaN | NaN |
| 1.13.3 | lockLegMovement | bool | NaN | NaN | NaN |
| 1.13.3 | keepAliveWhenParentDies | bool | Defaults to false | NaN | NaN |
| 1.13.3 | setDrawLayerOnTop | bool | NaN | NaN | NaN |
| 1.13.3 | setDrawLayerOnBottom | bool | NaN | NaN | NaN |
| 1.13.3 | addTransportedUnits | bool | NaN | NaN | NaN |
| 1.13.3 | lockRotation | bool | NaN | NaN | NaN |
| 1.13.3 | rotateWithParent | bool | NaN | NaN | NaN |
| 1.13.3 | resetRotationWhenNotAttacking | bool | Similar to shouldResetTurret:for turrets. | NaN | NaN |
| 1.13.3 | prioritizeParentsMainTarget | bool | It will priotize targeting the main target. Defaults to true. | NaN | NaN |
| 1.13.3 | alwaysAllowedToAttackParentsMainTarget | bool | Will always attack the parents main target. | NaN | NaN |
| NaN | onParentTeamChangeKeepCurrentTeam | bool | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | NaN | NaN |
| NaN | onConvertKeepExistingUnitInSameSlot | bool | NaN | NaN | NaN |
| NaN | unloadInCurrentPosition | bool | Defaults false. If true transported attached units are kept current attached location when unloading | NaN | NaN |
| NaN | keepWaypointsNeedingMovement | bool | Defaults false. If true attached units keep waypoints with movement even while they cannot move. Useful if they will be automatically deattached soon. | NaN | NaN |
| 1.14 | smoothlyBlendPositionWhenExistingUnitAdded | bool | NaN | NaN | NaN |
| 1.14 | keepWaypointsNeedingMovement | bool | Defaults to false. When false any queued waypoints needing movement to complete get removed. | NaN | NaN |
| 1.14 | showAllActionsFrom | LogicBoolean | Show all actions of the units attached in the parent unit list when selected | NaN | NaN |
| 1.14 | createIncompleteIfParentIs: | bool | NaN | NaN | NaN |
| 1.14 | redirectDamageToParent: | bool | Redirects damage done to this attachment to the parent instead of damaging itself directly | NaN | NaN |
| 1.14 | redirectDamageToParent\_shieldOnly: | bool | NaN | NaN | NaN |
| NaN | Section | NaN | [effect\_NAME] | Effects are purely visual, but can be important for a mod | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13 | life | float | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | life: 70 | NaN |
| 1.14 | lifeRandom | float | Random offset life by +/- this value | lifeRandom: 12 | NaN |
| 1.13 | alsoEmitEffects | effect ref | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN | NaN |
| 1.14 | alsoEmitEffectsOnDeath | effect ref | Create these effects when life runs out. | NaN | NaN |
| NaN | ifSpawnFailsEmitEffects | effect ref | If 'spawnChance' for this effects fails then emit these effects instead | NaN | NaN |
| 1.13 | alsoPlaySound | sound ref | NaN | NaN | NaN |
| 1.13 | createWhenOffscreen | bool | Defaults false. | NaN | NaN |
| 1.13 | createWhenZoomedOut | bool | Defaults true | NaN | NaN |
| 1.13 | createWhenOverLiquid | bool | Defaults true | NaN | NaN |
| 1.13 | createWhenOverLand | bool | Defaults true | NaN | NaN |
| 1.13 | spawnChance | float | Default 1. If less than 1 effect only has a random chance of being created | NaN | NaN |
| 1.13 | showInFog | bool | Default false | NaN | NaN |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | NaN | NaN |
| 1.13 | liveAfterAttachedDies | bool | Defaults false when attachedToUnit is being used | NaN | NaN |
| 1.13 | priority | string | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN | NaN |
| NaN | NaN | NaN | Movement | NaN | NaN |
| 1.13 | attachedToUnit | bool | Attach to unit or projectile that created this effect. Will move with this object. | NaN | NaN |
| 1.13 | alwayStartDirAtZero | bool | Ignore source/attached unit dir | NaN | NaN |
| 1.13 | atmospheric | bool | Apply drag to slow this effect down and add small wind effects | NaN | NaN |
| 1.13 | physics | bool | Fall to ground and bounces. Needs height to take effect. | NaN | NaN |
| 1.13 | physicsGravity | float | Defaults to 1. height speed acceleration when physics: true | NaN | NaN |
| 1.13 | xOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | yOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | xOffsetRelativeRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | yOffsetRelativeRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | xOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | yOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | xOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | yOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | xSpeedRelative | float | NaN | NaN | NaN |
| 1.13 | ySpeedRelative | float | NaN | NaN | NaN |
| 1.13 | xSpeedRelativeRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | ySpeedRelativeRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | xSpeedAbsolute | float | NaN | NaN | NaN |
| 1.13 | ySpeedAbsolute | float | NaN | NaN | NaN |
| 1.13 | xSpeedAbsoluteRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | ySpeedAbsoluteRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | hOffset | float | height offset from source | NaN | NaN |
| 1.13 | hOffsetRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | hSpeed | float | height speed | NaN | NaN |
| 1.13 | hSpeedRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | dirOffset | float | rotation | NaN | NaN |
| 1.13 | dirOffsetRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | dirSpeed | float | rotation speed | NaN | NaN |
| 1.13 | dirSpeedRandom | float | Randomly change by -value to value | NaN | NaN |
| NaN | NaN | NaN | Graphics | NaN | NaN |
| 1.13 | frameIndex | int | frame of to use | NaN | NaN |
| NaN | frameIndexRandom | NaN | NaN | NaN | NaN |
| 1.13 | stripIndex | int/string | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | NaN |
| 1.13 | Image | image | Custom image file to use. Cannot be used with stripIndex. | NaN | NaN |
| NaN | imageShadow | image | Custom image file to use for shadows | NaN | NaN |
| 1.13 | scaleTo | float | Defaults to 1 | NaN | NaN |
| 1.13 | scaleFrom | float | Defaults to 1 | NaN | NaN |
| 1.13 | color | color | Defaults #FFFFFFFF | NaN | NaN |
| NaN | teamColorRatio | NaN | 0-1 | NaN | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN | NaN |
| 1.13 | fadeInTime | float | Fade alpha from 0% to 100% for this time at start | NaN | NaN |
| 1.13 | fadeOut | bool | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN | NaN |
| NaN | alpha | NaN | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN | NaN |
| NaN | shadow | NaN | True to draw a shadow. Forced true if imageShadow is used | NaN | NaN |
| NaN | NaN | NaN | Animation | NaN | NaN |
| 1.13 | total\_frames | int | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN | NaN |
| 1.13 | animateFrameStart | int | NaN | NaN | NaN |
| 1.13 | animateFrameEnd | int | NaN | NaN | NaN |
| 1.13 | animateFramePingPong | int | NaN | NaN | NaN |
| 1.13 | animateFrameSpeed | time | NaN | NaN | NaN |
| 1.13 | animateFrameSpeedRandom | time | NaN | NaN | NaN |
| 1.14 | animateFrameLooping | bool | Defaults false. When false effect is removed when animation ends | NaN | NaN |
| NaN | Section | NaN | [animation\_NAME] | Use this to make intricate animations based on different circumstances | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13 | onActions : Unknown | NaN | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN | NaN |
| 1.13 | onActionsQueuedUnitPlayAt : float | NaN | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN | NaN |
| 1.13 | blendIn : time | NaN | Blend with last animation for this time | NaN | NaN |
| 1.13 | blendOut : time | NaN | Blend with next animation for this time | NaN | NaN |
| 1.13 | pingPong | bool | Play animation in reverse after it ends | NaN | NaN |
| 1.13 | KeyframeTimeScale : float | float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN | NaN |
| NaN | NaN | NaN | Keyframes - create as many as needed | NaN | NaN |
| 1.13 | arm#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } | NaN |
| NaN | leg#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | NaN | NaN |
| NaN | body\_[time] | NaN | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} | NaN |
| 1.14 | effect\_[time] | NaN | Spawn effects while playing an animation\n | eg: effect\_2s: {name:CUSTOM|myExplode, x: 0,y: 5} | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | direction\_units | float | Overrides [graphics]animation\_direction\_units while this animation is playing | NaN | NaN |
| NaN | direction\_strideX: | int | Overrides [graphics]animation\_direction\_strideX | NaN | NaN |
| NaN | direction\_strideY: | int | Overrides [graphics]animation\_direction\_strideY | NaN | NaN |
| NaN | direction\_starting: | float | Overrides [graphics]animation\_direction\_starting | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN |
| 1.13 | start : int | NaN | Start image frame. deprecated | NaN | NaN |
| 1.13 | end : int | NaN | End image frame. deprecated | NaN | NaN |
| 1.13 | scale\_start : float | NaN | Start scale. Deprecated, use body keyframes instead. | NaN | NaN |
| 1.13 | scale\_end : float | NaN | End scale. Deprecated, use body keyframes instead. | NaN | NaN |
| 1.13 | speed : float | NaN | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [action\_NAME] / [hiddenAction\_NAME] | Actions that can dynamically cause changes to units and resources | NaN |
| NaN | NaN | NaN | [hiddenAction\_NAME] is basically an action with isVisible: false by default | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | text | string | Text shown in UI | NaN | NaN |
| NaN | textPostFix: | string | Text shown as suffix, useful with textAddUnitName to create text UI | text: [ textPostFix: ] textAddUnitName: unitRef self.attachment(slot="${slotId}") | NaN |
| NaN | text\_{LANG} | string | NaN | NaN | NaN |
| NaN | description | string | A display text when you select your unit's action, used to explain it's purpose. | NaN | NaN |
| NaN | description\_{LANG} | string | NaN | NaN | NaN |
| NaN | displayType | list | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN | NaN |
| NaN | displayRemainingStockpile | bool | Queue is shown as number of times action can be triggered based on price | NaN | NaN |
| NaN | pos | float | Order action appears in UI | NaN | NaN |
| NaN | iconImage | file (image) | Adds an icon for the action. | NaN | NaN |
| 1.14 | iconExtraImage | file (image) | Drawn over top of icon image. Useful for upgrade icons, etc | NaN | NaN |
| 1.14 | iconExtraColor | colour | Defaults to #64FFFFFF | NaN | NaN |
| 1.14 | iconExtraIsVisible | LogicBoolean | NaN | NaN | NaN |
| 1.13.3 | unitShownInUI | unitRef/unitType | Display this unit. (as if this action built this unit) | eg: unitShownInUI: unitRef self.transporting(slot=0) or unitShownInUI: heavyTank | NaN |
| 1.14 | setBuilt | float | Designates how built the unit is from a percentage of 0-100% with a number between 0 and 1. | NaN | NaN |
| NaN | guiBuildUnit | unitRef/unitType | UNFINISHED KEY??? Simulates the UI when building units/buildings through nano | NaN | NaN |
| NaN | NaN | NaN | Unit Reference - Dynamically parts from already existing units, useful w/ isAlsoViewableByEnemies | self, self.parent(), self.transporting(slot=x), self.attachment(slot=X) | NaN |
| 1.14 | textAddUnitName | unitRef/unitType | Add this unit's name to this action's text | eg: textAddUnitName: unitRef self.attachment(slot="1") | NaN |
| 1.14 | descriptionAddFromUnit | unitRef/unitType | Add this unit's description to this action's description | NaN | NaN |
| 1.14 | descriptionAddUnitStats: | unitRef/unitType | Add this unit's stats (eg HP, energy, resources) to this action's description | descriptionAddUnitStats: unitRef self.parent() | NaN |
| 1.14 | unitShownInUIWithHpBar | bool | default true, Only used when unitShownInUI is a unitRef | NaN | NaN |
| 1.14 | unitShownInUIWithProgressBar | bool | default true, Only used when unitShownInUI is a unitRef. Replaces HP bar if active | NaN | NaN |
| NaN | NaN | NaN | Requirements for player/AI to use in UI | NaN | NaN |
| 1.14 | alwaysSinglePress | bool | Defaults false. When true no confirmation needed on mobile, when used with canPlayerCancel:false and allowMultipleInQueue:false will also hide the queue interface. | NaN | NaN |
| NaN | price | resources | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | NaN |
| NaN | isActive | LogicBoolean | Defaults true. If false then action is disabled and shown in red in UI. | NaN | NaN |
| NaN | isVisible | LogicBoolean | Defaults true. If false action is hidden from UI and disabled. | NaN | NaN |
| NaN | isLocked | LogicBoolean | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN | NaN |
| NaN | isLockedMessage | LocaleString | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt | LogicBoolean | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | NaN | NaN |
| 1.13.3 | isLockedAltMessage | LocaleString | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt2 | LogicBoolean | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt2Message | LocaleString | NaN | NaN | NaN |
| NaN | allowMultipleInQueue | NaN | NaN | NaN | NaN |
| NaN | onlyOneUnitAtATime | bool | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN | NaN |
| 1.13.3 | isGuiBlinking | LogicBoolean | Flashes in UI to draw attention to it. Might be annoying if used often, recommended only for temporarily states/messages | NaN | NaN |
| 1.14 | isAlsoViewableByAllies | bool | Allows ally players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN | NaN |
| 1.14 | isAlsoViewableByEnemies | bool | Allows enemy players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN | NaN |
| NaN | NaN | NaN | AI - How the AI uses this action | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | ai\_isHighPriority | LogicBoolean | Use this for faction selection actions or other high priority actions such as building high priority units | NaN | NaN |
| NaN | ai\_isDisabled | LogicBoolean | Defaults false. Stop AI using this action. | NaN | NaN |
| 1.13.3 | ai\_considerSameAsBuilding | NaN | Be careful with | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically add an action to the queue) | NaN |
| 1.13.3 | autoTriggerOnEvent | NaN | Parameters: created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded, queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit, transportUnloadedOrRemovedUnit, tookDamage | NaN | NaN |
| NaN | autoTrigger | LogicBoolean | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater(), autoTrigger: if self.customTimer(laterThanSeconds=5) | NaN |
| NaN | NaN | NaN | While action is queued | NaN | NaN |
| NaN | buildSpeed | time | NaN | buildSpeed: 5s | NaN |
| NaN | buildSpeed\_ignoreFactorySpeedModifiers | bool? | NaN | NaN | NaN |
| NaN | highPriorityQueue | bool | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN | NaN |
| NaN | canPlayerCancel | bool | When false, it prevents the player to cancel the action | NaN | NaN |
| NaN | whenBuilding\_cannotMove | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | NaN |
| NaN | whenBuilding\_playAnimation | animation ref | Plays animation when the action is queued | NaN | NaN |
| NaN | whenBuilding\_rotateTo | float | Rotate unit body to this direction when action is in active queue | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_orBackwards | bool | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | bool | Pause action queue till rotation is finished | NaN | NaN |
| NaN | whenBuilding\_temporarilyConvertTo | unit ref | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN | NaN |
| NaN | whenBuilding\_triggerAction | action ref | Triggers a specified action while the action is queued | NaN | NaN |
| 1.14 | whenBuilding\_rotateTo\_aimAtActionTarget | bool | Rotates the unit on the direction where the target is placed (especially when using fireTurretXAtGround) | NaN | NaN |
| 1.14 | whenBuilding\_rotateTo\_rotateTurretX | turret ref | Rotates the specifed turret on the direction where the target is placed | NaN | NaN |
| NaN | spawnEffectsOnQueue | effect ref | Effects to spawn at unit when action is first added to queue | NaN | NaN |
| NaN | playSoundToPlayerOnQueue | sound ref | Global sound to play to unit's player only when action is first added to queue | NaN | NaN |
| NaN | NaN | NaN | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN | NaN |
| NaN | requireConditional | NaN | Skip all effects of this action if this evaluates to false | NaN | NaN |
| 1.13.3 | convertTo | unit ref | Convert your unit into another unit. properties are preserved. | NaN | NaN |
| 1.14 | convertTo\_keepCurrentTags | NaN | Keep current and temporarily tags and ignores default tags on convertTo target. | NaN | NaN |
| NaN | addEnergy | float | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | NaN | NaN |
| NaN | addResources | resources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | NaN |
| NaN | addResourcesScaledByAIHandicaps | NaN | Same as addResources, but increased or decreased depending on AI difficulty level | NaN | NaN |
| NaN | deleteSelf | NaN | Remove self with no explosions or sounds | NaN | NaN |
| NaN | resetCustomTimer | LogicBoolean | Reset timer used with self.customTimer() | NaN | NaN |
| 1.13.3 | setBodyRotation | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Chaining Actions | NaN | NaN |
| NaN | alsoTriggerAction | action refs | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound | NaN |
| NaN | alsoQueueAction | action refs | Adds another action into the normal unit's queue. Ignores action's requirements | NaN | NaN |
| NaN | alsoTriggerOrQueueActionConditional | LogicBoolean | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN | NaN |
| NaN | NaN | NaN | Outcome - Sounds | NaN | NaN |
| NaN | playSoundAtUnit | sound ref | Local sound to play when action finishes | NaN | NaN |
| NaN | playSoundGlobally | sound ref | Global sound to play to all players in game | NaN | NaN |
| NaN | playSoundToPlayer | sound ref | Global sound to play to unit's player only | NaN | NaN |
| NaN | NaN | NaN | Outcome - Fire projectile from turret | NaN | NaN |
| NaN | fireTurretXAtGround | turret ref | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo | NaN |
| NaN | fireTurretXAtGround\_withOffset | point | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 | NaN |
| NaN | fireTurretXAtGround\_withProjectile | projectile ref | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN | NaN |
| 1.13.3 | fireTurretXAtGround\_count | NaN | Number of projectiles to fire. Defaults to 1 | NaN | NaN |
| 1.13.3 | fireTurretXAtGround\_onlyOverPassableTileOf | NaN | Only allow tiles crossable by this movement type to be selected | LAND,BUILDING,WATER,HOVER, etc | NaN |
| NaN | NaN | NaN | Outcome - Spawning | NaN | NaN |
| 1.13.3 | spawnUnits | NaN | Spawns specified units | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) | NaN |
| NaN | spawnEffects | effect ref | Effects to spawn at unit | NaN | NaN |
| 1.13.3 | produceUnits | NaN | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | NaN | NaN |
| NaN | NaN | NaN | Outcome - Position | NaN | NaN |
| 1.14 | offsetSelfAbsolute: | point3d | Changes unit position absolutely to its current position | offsetSelfAbsolute: 0, 0, 40 [x,y,height] | NaN |
| NaN | NaN | NaN | Outcome - Transport Changes | NaN | NaN |
| NaN | addUnitsIntoTransport | unitTypes | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank(neutralTeam=true) | NaN |
| NaN | deleteNumUnitsFromTransport | int | Removes specified number of units on transport | NaN | NaN |
| 1.13.3 | deleteNumUnitsFromTransport\_onlyWithTags | string(s) | Same with deleteNumUnitsFromTransport, but more narrowed | NaN | NaN |
| 1.13.3 | startUnloadingTransport | bool | Unloads unit from transport normally | NaN | NaN |
| 1.13.3 | forceUnloadTransportNow | bool | For unload all units, or slot targeted by forceUnloadTransportNow\_onlyOnSlot. Unloads even if no space or overwater, etc | NaN | NaN |
| 1.14 | forceUnloadTransportNow\_onlyOnSlot | int | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Waypoint Changes | NaN | NaN |
| 1.13.3 | clearAllWaypoints | bool | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | NaN | NaN |
| 1.13.3 | clearActiveWaypoint | bool | NaN | NaN | NaN |
| NaN | addWaypoint\_type | NaN | move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | NaN | NaN |
| 1.13.3 | addWaypoint\_unitType | NaN | Only for use with addWaypoint\_type:build | NaN | NaN |
| 1.13.3 | addWaypoint\_prepend | bool | Add to the start of the waypoint queue or the end | NaN | NaN |
| 1.13.3 | addWaypoint\_triggerActionIfFailed | actions | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | NaN | NaN |
| 1.14 | addWaypoint\_triggerActionIfMatched | actions | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_maxTime | time | Automatically remove this waypoint if it has been active for longer than this time. | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_tagged | tags | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_team | relation | own|neutral|allyNotOwn|ally|enemy|any | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_maxRange | float | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_mapMustBeReachable | bool | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_offsetFromSelf | point | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_fromAction | bool | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_randomOffsetFromSelf | NaN | Same as above, but random. | NaN | NaN |
| 1.14 | addWaypoint\_position\_relativeOffsetFromSelf | point | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_tagged | NaN | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_team | NaN | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_maxRange | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Cooldown | NaN | NaN |
| 1.14 | addActionCooldownTime | time | Player cannot use action again for this amount of time | NaN | NaN |
| 1.14 | addAllActionCooldownsTime | time | Same as addActionCooldownTime, but affects all actions and build menu | NaN | NaN |
| 1.14 | addActionCooldownApplyToActions | action ids | Sets addActionCooldownTime's target. Defaults to this action. | NaN | NaN |
| 1.14 | clearAllActionCooldowns | NaN | Removes all cooldown | NaN | NaN |
| NaN | NaN | NaN | Outcome - Animation | NaN | NaN |
| 1.13.3 | playAnimation | animation id | NaN | NaN | NaN |
| 1.13.3 | playAnimationIfNotPlaying | bool | Don't restart animation if this animation is already playing | NaN | NaN |
| 1.13.3 | finishPlayingLastAnimation | bool | Finish last animation, including blend out | NaN | NaN |
| 1.13.3 | stopLastAnimation | bool | Stop last animation, skipping blend out | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | switchToNeutralTeam | boolean | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | NaN | NaN |
| 1.13.3 | switchToAggressiveTeam | boolean | Change to a built-in team that is aggressive to all other teams. Does not get captured. | NaN | NaN |
| NaN | NaN | NaN | Outcome - Take Resources from other units | NaN | NaN |
| 1.13.3 | takeResources | customPrice | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 | NaN |
| 1.13.3 | takeResources\_includeUnitsInTransport | bool | NaN | NaN | NaN |
| 1.13.3 | takeResources\_includeParent | bool | Include attachment parent or transport parent | NaN | NaN |
| 1.13.3 | takeResources\_includeUnitsWithinRange | float | NaN | NaN | NaN |
| 1.13.3 | takeResources\_includeUnitsWithinRange\_team | TeamRelation | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutTags | tags | NaN | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithTheseResources | customPrice | NaN | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutAllResources | bool | Defaults to true. | NaN | NaN |
| 1.13.3 | takeResources\_triggerActionIfAnyCollected | action refs | NaN | NaN | NaN |
| 1.13.3 | takeResources\_triggerActionIfNoneCollected | action refs | NaN | NaN | NaN |
| 1.13.3 | takeResources\_discardCollected | bool | Just take resources from targets, don't add(or remove) to self | NaN | NaN |
| 1.13.3 | takeResources\_keepResourcesOnTarget | bool | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | NaN | NaN |
| NaN | takeResources\_maxUnits | int | Defaults to 1. | NaN | NaN |
| 1.14 | takeResources\_directTransferStoppingAtZero | bool | If less resources on target than transfer amount, only remaining resources will be transfered. Doesn't support use with some other takeResources\_\* keys | NaN | NaN |
| NaN | NaN | NaN | Outcome - Convert Resources | NaN | NaN |
| 1.13.3 | convertResource\_from | customResource | Name of custom resource to take from | NaN | NaN |
| 1.13.3 | convertResource\_to | customResource | Name of custom resource to give to | NaN | NaN |
| 1.13.3 | convertResource\_minAmount | float | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | NaN | NaN |
| 1.13.3 | convertResource\_maxAmount | float | Max amount to transfer between 'from' and 'to' | NaN | NaN |
| 1.13.3 | convertResource\_multiplyAmountBy | float | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | NaN | NaN |
| NaN | NaN | NaN | Outcome - Set Resources | NaN | NaN |
| 1.13.3 | resourceAmount | customResource | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | resourceAmount: oil | NaN |
| 1.13.3 | resourceAmount\_setValue | float | Absolute value to set this resource to, ignores current value of resource. Skipped by default | resourceAmount\_setValue: 20 | NaN |
| 1.13.3 | resourceAmount\_addOtherResource | customResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | NaN | NaN |
| 1.13.3 | resourceAmount\_multiplyBy | float | Defaults to 1. Multiple the current or new value by | NaN | NaN |
| NaN | NaN | NaN | Outcome - Attachment changes | NaN | NaN |
| 1.13.3 | attachments\_addNewUnits | unit types | NaN | NaN | NaN |
| 1.13.3 | attachments\_deleteNumUnits | int | NaN | NaN | NaN |
| 1.13.3 | attachments\_onlyOnSlots | attachment ids | Restrict attachments\_\* actions to these attachments | NaN | NaN |
| 1.13.3 | disconnectFromParent | bool | NaN | NaN | NaN |
| 1.14 | attachments\_unload | bool | Unload all attachments. Can be used with attachments\_onlyOnSlots. Same as unloading transported units | NaN | NaN |
| 1.14 | attachments\_disconnect | bool | Disconnect all attachments in the place they are right now. Can be used with attachments\_onlyOnSlots. | NaN | NaN |
| NaN | NaN | NaN | Outcome - Tag changes | NaN | NaN |
| 1.13.3 | temporarilyAddTags | tags | Add tag to this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN | NaN |
| 1.13.3 | temporarilyRemoveTags | tags | Remove tag from this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN | NaN |
| 1.13.3 | resetToDefaultTags | bool | Reset to standard tags | NaN | NaN |
| 1.13.3 | addGlobalTeamTags | tags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | NaN | NaN |
| 1.13.3 | removeGlobalTeamTags | tags | Remove a tag from player's team. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Show Message | NaN | NaN |
| 1.13.3 | showMessageToPlayer | string | Sends a message to the player controlling the unit | NaN | NaN |
| 1.13.3 | showMessageToPlayer\_{LANG} | string | Note: This format is support on nearly all strings that show to player even when reference doesn't show it | NaN | NaN |
| 1.13.3 | showMessageToAllPlayers | string | Sends a message to all players | Eg: showMessageToAllPlayers: %{self.playerName} has captured a point | NaN |
| 1.14 | showMessageToAllEnemyPlayers | string | NaN | showMessageToAllEnemyPlayers: Team %{self.playerName} has %{self.resource.gold} | NaN |
| 1.13.3 | showQuickWarLogToPlayer | string | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | NaN | NaN |
| 1.13.3 | showQuickWarLogToAllPlayers | NaN | Sends a Quick War Log message to all players (in the lower lef) | NaN | NaN |
| 1.13.3 | debugMessage | NaN | Only shows in Sandbox with Debug mode on. | NaN | NaN |
| NaN | Type | NaN | Spawn units line | Spawn lines specifically for units, used with "unit ref" value types | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| NaN | NaN | NaN | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) | NaN |
| 1.13.3 | neutralTeam | bool | Spawn the unit on the neutral team instead of the same team as source | NaN | NaN |
| 1.13.3 | setToTeamOfLastAttacker | bool | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | NaN | NaN |
| 1.13.3 | spawnChance | float | Chance this unit will spawn. Defaults to 1. | NaN | NaN |
| 1.13.3 | maxSpawnLimit | int | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) | NaN |
| 1.13.3 | gridAlign | bool | Align spawn location to grid, useful for buildings | NaN | NaN |
| 1.13.3 | skipIfOverlapping | bool | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | NaN | NaN |
| 1.13.3 | offsetX | float | NaN | NaN | NaN |
| 1.13.3 | offsetY | float | NaN | NaN | NaN |
| 1.13.3 | offsetRandomX | float | NaN | NaN | NaN |
| NaN | techLevel | int | Sets unit techLevel, very useful in mods that use the damagingBorder and zone marker (found in BR servers) | NaN | NaN |
| NaN | offsetRandomY | float | NaN | NaN | NaN |
| NaN | offsetRandomDir | float | NaN | NaN | NaN |
| 1.13.3 | offsetHeight | float | NaN | NaN | NaN |
| 1.13.3 | offsetDir | float | NaN | NaN | NaN |
| 1.13.3 | addResources | resource ref | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResource=gold:30|stone:10, spawnChance=0.5) | NaN |
| 1.14 | transportedUnitsToTransfer | int | Puts the designated amount of transported units into the transport of the spawned unit. | spawnUnits: transporter(transportedUnitsToTransfer=5) | NaN |
| 1.14 | alwayStartDirAtZero | bool | NaN | NaN | NaN |
| NaN | Type | NaN | Spawn Projectiles line | Spawn lines specifically for projectiles, used with "proj ref" value types | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| 1.14 | NaN | NaN | Most projectile spawning keys used for projectile ref | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) | NaN |
| 1.14 | spawnChance | float | Chance this projectile will spawn. Defaults to 1. | spawnChance: 0.5 | NaN |
| 1.14 | maxSpawnLimit | int | Maximum amount to spawn | NaN | NaN |
| 1.14 | recursionLimit | int | Prevents loops, useful with spawning itself so it doesn't infinitely spawn, good for chain exploding | recursionLimit: 5 (Recommended no more than 4 if spawning more than 3 projectiles) | NaN |
| 1.14 | offsetX | float | NaN | NaN | NaN |
| 1.14 | offsetY | float | NaN | NaN | NaN |
| 1.14 | xOffsetRelative | float | Similar to offsetX, but the offset is relative to the position of the projectile | NaN | NaN |
| 1.14 | yOffsetRelative | float | Similar to xOffsetRelative, but for Y axis | NaN | NaN |
| 1.14 | offsetRandomX | float | Random value to offset in the X axis only | NaN | NaN |
| 1.14 | offsetRandomY | float | Random value to offset in the Y axis only | NaN | NaN |
| 1.14 | offsetRandomXY | float | The offset in both directions to randomly spawn, makes truly random spawning within an area | NaN | NaN |
| 1.14 | offsetHeight | float | NaN | NaN | NaN |
| 1.14 | offsetDir | degrees | NaN | NaN | NaN |
| 1.14 | offsetRandomDir | degrees | NaN | NaN | NaN |
| NaN | Type | NaN | LogicBoolean | Advanced code to create conditionals and triggers | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| NaN | true | NaN | NaN | NaN | NaN |
| NaN | false | NaN | NaN | NaN | NaN |
| NaN | if | NaN | Start all logic booleans with if, unless just using true/false | NaN | NaN |
| NaN | and | NaN | NaN | if self.isInWater() and self.energy(greaterThan=1) | NaN |
| NaN | or | NaN | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() | NaN |
| NaN | not | NaN | NaN | if not self.isOverLiquid() | NaN |
| NaN | NaN | NaN | Unit location and movement | NaN | NaN |
| NaN | self.isUnderwater() | NaN | NaN | NaN | NaN |
| NaN | self.isAtGroundHeight() | NaN | NaN | NaN | NaN |
| NaN | self.isFlying() | NaN | NaN | NaN | NaN |
| NaN | self.isMoving() | NaN | NaN | NaN | NaN |
| NaN | self.isAtTopSpeed() | NaN | NaN | NaN | NaN |
| NaN | self.isInWater() | NaN | Touching water | NaN | NaN |
| NaN | self.isOverwater() | NaN | Touching or over a water tile | NaN | NaN |
| NaN | self.isOverLiquid() | NaN | NaN | NaN | NaN |
| NaN | self.isOverClift() | NaN | NaN | NaN | NaN |
| NaN | self.isOverPassableTile() | NaN | (parameters: type) | NaN | NaN |
| NaN | self.isOverOpenLand() | NaN | shortcut for self.isOverPassableTile(type='LAND') | NaN | NaN |
| NaN | NaN | NaN | Unit stats | NaN | NaN |
| 1.13.3 | self.hasResources() | NaN | Can check multiple resources (all price parameters) | NaN | NaN |
| NaN | self.resource() | NaN | Checks a single resource (parameters: type, greaterThan, lessThan) | NaN | NaN |
| 1.14? | self.isResourceLargerThan | NaN | Compare two resource between each other, note multiplyTargetBy doesn't make any changes. (parameters: source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | NaN | NaN |
| NaN | self.hp() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.height() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.ammo() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.isAmmoEmpty() | NaN | shortcut for self.ammo(empty=true) | NaN | NaN |
| NaN | self.ammoIncludingQueued() | NaN | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) | NaN |
| NaN | self.energy() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.energyIncludingQueued() | NaN | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.isEnergyFull() | NaN | shortcut for self.energy(full=true) | NaN | NaN |
| NaN | self.isEnergyEmpty() | NaN | shortcut for self.energy(empty=true) | NaN | NaN |
| NaN | self.shield() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.kills() | NaN | (parameters: greaterThan, lessThan) | NaN | NaN |
| 1.13.3 | self.queueSize() | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Misc | NaN | NaN |
| NaN | self.hasFlag() | NaN | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this value | NaN |
| NaN | self.tags() | NaN | (parameters: includes) | NaN | NaN |
| 1.13.3 | self.globalTeamTags() | NaN | (parameters: includes) | NaN | NaN |
| NaN | self.transportingCount() | NaN | (parameters: greaterThan, lessThan, empty) | NaN | NaN |
| NaN | self.numberOfAttachedUnits() | NaN | (withTag, greaterThan, lessThan) | NaN | NaN |
| NaN | self.isAttacking() | NaN | NaN | NaN | NaN |
| NaN | self.hasActiveWaypoint() | NaN | (parameter: type=x [x can be the following: move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget]) | self.hasActiveWaypoint(type='attack') | NaN |
| NaN | self.transportingUnitWithTags() | NaN | (parameters: includes) | self.transportingUnitWithTags(includes='human') | NaN |
| NaN | self.hasParent() | NaN | For both attachments and transports (parameters: [withTag=x] ) | NaN | NaN |
| NaN | self.hasTakenDamage() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | self.hasTakenDamage(withinSeconds=1) | NaN |
| NaN | self.timeAlive() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.lastConverted() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.customTimer() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.isOnNeutralTeam() | NaN | NaN | NaN | NaN |
| 1.13.3 | self.isControlledByAI() | NaN | NaN | NaN | NaN |
| 1.13.3 | self.hasUnitInTeam() | NaN | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN |
| 1.13.3 | self.noUnitInTeam() | NaN | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN |
| NaN | numberOfUnitsInTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | NaN |
| NaN | numberOfUnitsInNeutralTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.13.3 | numberOfUnitsInEnemyTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.14 | numberOfUnitsInAggressiveTeam() | NaN | The special 'aggressive to all' team (this is not the same as numberOfUnitsInEnemyTeam) (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.14 | self.numberOfUnitsInAllyNotOwnTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| NaN | game.nukesEnabled() | NaN | NaN | NaN | NaN |
| 1.14 | Type | NaN | [placementRule\_NAME] | Allows creation of rules for requiring buildings | NaN |
| 1.14 | Code | Value Type | Description | Example | NaN |
| 1.14 | anyRuleInGroup: | string | (Only require 1 of the rules in this group pass, instead of all. Use the same group name on other placement rules to create a group.) | NaN | NaN |
| 1.14 | searchTags: | tag list | Search for any unit with at least one of these tags | NaN | NaN |
| 1.14 | searchTeam: | relation | Teams to include in search, can be: own|neutral|allyNotOwn|ally|enemy|any | NaN | NaN |
| 1.14 | searchOffsetX: | float | defaults to 0 | NaN | NaN |
| 1.14 | searchOffsetY: | float | defaults to 0 | NaN | NaN |
| 1.14 | searchDistance: | float | Required | NaN | NaN |
| 1.14 | excludeIncompleteBuildings: | bool | defaults to false. Might want to set to true depending on the requirement reason | NaN | NaN |
| 1.14 | excludeNonBuildings: | bool | defaults to false | NaN | NaN |
| 1.14 | minCount: | int | Set min amount of units that need to be found in search. (eg needs to be near something). Defaults to 0 | NaN | NaN |
| 1.14 | maxCount: | int | Set max amount of units before match fails (eg cannot be close to something). Defaults to unlimited | NaN | NaN |
| 1.14 | blocksPlacement: | bool | Defaults to true. | NaN | NaN |
| 1.14 | cannotPlaceMessage: | LocaleString | Highly Recommended. Message shown to player if this rule fails (will be first failing rule if using anyRuleInGroup). | NaN | NaN |
| 1.14 | checkEachTile: | bool | defaults to true (set to false to only test unit center, true checks each tile under the unit which shows up on the placement grid. Can be easier to see requirements with true) | NaN | NaN |
| NaN | aiSuggestionOnly | bool? | allegedly only AI is affected | NaN | NaN |
| NaN | Section | NaN | Prices/Resources lines - used by addResources, price, etc | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | credits | NaN | Global resource | NaN | NaN |
| NaN | energy | NaN | NaN | NaN | NaN |
| NaN | hp | NaN | NaN | NaN | NaN |
| NaN | shield | NaN | NaN | price: hp=-100, shield=100 | NaN |
| NaN | ammo | NaN | Hidden value on each unit for use by mods | NaN | NaN |
| NaN | setFlag | NaN | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1, setFlag=0-10 (will set the flags from 0 to 10) | NaN |
| NaN | unsetFlag | NaN | use with addResources, resourceUsage or price. 0-31 | NaN | NaN |
| NaN | hasFlag | NaN | use with price or resourceUsage | NaN | NaN |
| NaN | hasMissingFlag | NaN | use with price or resourceUsage | NaN | NaN |
| 1.13.3 | [resource] | resource ref | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=20 | NaN |
| NaN | Section | NaN | [global\_resource\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI | NaN | NaN |
| 1.13.3 | displayNameShort | NaN | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | NaN | NaN |
| 1.13.3 | hidden | bool | Hide this resource from the player | NaN | NaN |
| 1.13.3 | priority | NaN | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | NaN | NaN |
| 1.13.3 | displayColor | color | Color, can be hex with optional alpha | #FF0000 | NaN |
| 1.14 | displayRoundedDown | bool | Don't show decimal places to the player | NaN | NaN |
| NaN | displayWhenZero | bool | Default false | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [resource\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Define a new resource local to unit. Works like build-in ammo resource | NaN | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI (eg hovering over unit info) | NaN | NaN |
| 1.13.3 | displayNameShort | NaN | NaN | NaN | NaN |
| 1.13.3 | hidden | NaN | Hide this resource from the player | NaN | NaN |
| NaN | equivalentGlobalResourceForAI | NaN | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.14 | displayRoundedDown | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [template\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | NaN | NaN | Template sections can have any keys and have no effect by themselves. | NaN | NaN |
| NaN | NaN | NaN | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN | NaN |
| NaN | NaN | NaN | --All these below features can be used with any section not just templates-- | NaN | NaN |
| 1.13.3 | @copyFromSection | NaN | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection: template\_name/action\_name/projectile\_name | NaN |
| NaN | @copyFrom\_skipThisSection | NaN | Use in any section to make [core]copyFrom not copy into it. Eg not copy an action when overriding | @copyFrom\_skipThisSection | NaN |
| NaN | @define X | NaN | Define a local variable within a section (best outside of template) | @define targetEffect: boom | NaN |
| NaN | @global X | NaN | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop | NaN |
| 1.13.3 | NaN | NaN | ${X} can be used to reference variables (can also be done outside of a template) | spawnEffects: effect\_${targetEffect} | NaN |
| 1.13.3 | NaN | NaN | ${section.key} can be used to reference another key (can also be done outside of a template) | addResources: credits=${ core.price \* 2 + 10 } | NaN |
| NaN | Section | NaN | [comment\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | NaN | NaN | Comment sections can have any keys and have no effect. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | List of default game noises (for turret fire sound or other sound references): | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | NaN | NaN |

## 1.13.3
| Unnamed: 0 | This sheet is for an old version, see sheet tabs below. | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | Might be missing updates try stable version: https://docs.google.com/spreadsheets/d/1vEku\_j8QwgsTzB5oMS\_IDUiHfhzZVESeSrkyrS4tndk/edit#gid=412721476 | NaN | NaN | NaN |
| Section | [core] The basic section, contains important information for the unit | NaN | NaN | NaN |
| Code | Description | Example | Value Type | Version Added |
| #==== | Common Keys | NaN | #==== | NaN |
| name: | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 | String | NaN |
| altNames: | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | String(s) | NaN |
| class: | Reserved for future use, must be CustomUnitMetadata by default. | class: CustomUnitMetadata | String | NaN |
| strictLevel: | Defaults to 0.1 = Error if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 | Float | 1.13.3 |
| price: | The unit cost from builders/buildings (Values: credits, custom resources). | price: credits=500, gold=10 | Int / Price(s) | NaN |
| mass: | The 'weight' of the unit, defines how it collides with others, a greater value means it's tougher to push. | mass: 3000 | Int | NaN |
| techLevel: | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | Int | NaN |
| buildSpeed: | Time the unit takes to be built. (may multiply with builder speed) | buildSpeed: 3s | Float / Seconds | NaN |
| radius: | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 | Int | NaN |
| isBio: | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true | Boolean | NaN |
| isBug: | Changes some death defaults, and sort order in Sandbox. | isBug: false | Boolean | NaN |
| isBuilder: | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true | Boolean | 1.13 |
| #==== | Unit Stats Keys | NaN | #==== | NaN |
| maxHp: | The max health for the unit. (will spawn with this value) | maxHp: 200 | Int | NaN |
| selfRegenRate: | Passive self repair rate. | selfRegenRate: 0.01 | Float | NaN |
| maxShield: | The max shield hitpoints of the unit. Can spawn with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 | Int | NaN |
| startShieldAtZero: | Unit starts with a 0 hitpoints shield when created if true. | startShieldAtZero: true | Boolean | NaN |
| shieldRegen: | Passive shield regen rate. | shieldRegen: 0.15 | Float | NaN |
| energyMax: | Defaults to 0. Local resource, energy that can be used as ammo for turrets, laser defense, actions. | energyMax: 1 | Float | NaN |
| energyRegen: | Passive energy regen rate. | energyRegen: 0.001 | Float | NaN |
| energyStartingPercentage: | Sets the percentage of charged energy when the unit is first built. Must be between 0 and 1. | energyStartingPercentage: 0.5 | Float | NaN |
| energyNeedsToRechargeToFull: | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true | Float | NaN |
| armour: | Damage taken away from each hit received. (not currently used in any vanilla units) | armour: 6 | Int | 1.13 |
| armourMinDamageToKeep: | Min damage to keep from received damage when armour is too high. Defaults to 1. | armourMinDamageToKeep: 2 | Int | 1.13 |
| borrowResourcesWhileAlive: | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 | Int / Price(s) | 1.13.3 |
| generation\_resources: | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 | Int / Price(s) | 1.13.3 |
| generation\_active: | Disables generation\_resources when false. (logic boolean value) | generation\_active: if not self.hp(lessThan=100) | Logic Boolean | 1.13.3 |
| generation\_credits: | Income unit creates. (credits only) | generation\_credits: 2 | Int | NaN |
| generation\_delay: | How often generation\_{INCOME} is added. Defaults to 40. (changing is not recommended) | generation\_delay: 40 | Int | NaN |
| #==== | UI and Graphics Keys | NaN | #==== | NaN |
| showInEditor: | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false | Boolean | NaN |
| displayText: | The unit name that the game shows to the player. | displayText: Custom Tank | Locale String | NaN |
| displayText\_{LANG}: | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado | String | 1.13 |
| displayDescription: | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage | Locale String | NaN |
| displayDescription\_{LANG}: | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero | String | 1.13 |
| displayLocaleKey: | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery | String | NaN |
| displayRadius: | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 | Int | NaN |
| shieldRenderRadius: | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 | Int | NaN |
| shieldDisplayOnlyDeflection: | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true | Boolean | NaN |
| shieldDeflectionDisplayRate: | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 | Float | NaN |
| showOnMinimap: | Defaults to true. Hide units on minimap if false. | showOnMinimap: false | Boolean | 1.13.3 |
| showActionsWithMixedSelectionIfOtherUnitsHaveTag: | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: tank | String(s) | 1.13.3 |
| #==== | Building Only Keys | NaN | #==== | NaN |
| isBuilding: | Defines if the unit is a building. | isBuilding: true | Boolean | NaN |
| footprint: | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 | Ints | NaN |
| constructionFootprint: | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 | Ints | NaN |
| displayFootprint: | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 | Ints | NaN |
| buildingSelectionOffset: | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 | Int | NaN |
| buildingToFootprintOffsetX: | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 | Float | NaN |
| buildingToFootprintOffsetY: | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 6 | Float | NaN |
| placeOnlyOnResPool: | Normally used for extractors, forces building construction on a resource pool. | placeOnlyOnResPool: true | Boolean | NaN |
| selfBuildRate: | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 | Float | NaN |
| #==== | Misc Keys | NaN | #==== | NaN |
| copyFrom: | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini | file (ini)(s) | NaN |
| dont\_load: | Do not load unit if true, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true | Boolean | NaN |
| overrideAndReplace: | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer | String(s) | NaN |
| onNewMapSpawn: | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam | NaN | String | 1.13.3 |
| globalScale: | Defaults to 1, defines the scale taken for other keys. Changing not recommended. | globalScale: 2 | Float | NaN |
| isLocked: | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true | Boolean | NaN |
| isLockedIfGameModeNoNuke: | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true | Boolean | 1.13 |
| experimental: | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true | Boolean | NaN |
| stayNeutral: | Set to false to disable capture when unit is on the neutral team in single player matches. | stayNeutral: false | Boolean | NaN |
| createNeutral: | Set to true to always spawn the unit on the neutral team. | createNeutral: true | Boolean | 1.13 |
| createOnAggressiveTeam: | Set to true to always spawn the unit on an aggressive team, will attack all players. | createOnAggressiveTeam: true | Boolean | NaN |
| tags: | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage | String(s) | 1.13 |
| fogOfWarSightRange: | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 18 | Int | NaN |
| softCollisionOnAll: | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 | Int | NaN |
| disableAllUnitCollisions: | Unit cannot collide with others if true. | disableAllUnitCollisions: true | Boolean | NaN |
| isUnrepairableUnit: | No unit can repair this unit if true. | isUnrepairableUnit: true | Boolean | 1.13 |
| isUnselectable: | If true unit cannot be selected by players. (includes AI players) | isUnselectable: true | Boolean | NaN |
| isPickableStartingUnit: | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true | Boolean | 1.13 |
| startFallingWhenStartingUnit: | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true | Boolean | 1.13 |
| soundOnAttackOrder: | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg:0.2 | File (sound)(s) | NaN |
| soundOnMoveOrder: | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg:0.2 | File (sound)(s) | NaN |
| soundOnNewSelection: | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg:0.2 | File (sound)(s) | 1.13.3 |
| canNotBeDirectlyAttacked: | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. | canNotBeDirectlyAttacked: true | Boolean | NaN |
| canNotBeGivenOrdersByPlayer: | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true | Boolean | 1.13.3 |
| canOnlyBeAttackedByUnitsWithTags: | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank | String(s) | 1.13.3 |
| #==== | Transport Keys | NaN | #==== | NaN |
| transportSlotsNeeded: | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 | Int | 1.13 |
| maxTransportingUnits: | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 | Int | NaN |
| transportUnitsRequireTag: | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier | String(s) | 1.13 |
| transportUnitsRequireMovementType: | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER | String(s) | 1.13 |
| transportUnitsBlockAirAndWaterUnits: | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false | Boolean | 1.13 |
| NaN | NaN | NaN | NaN | NaN |
| transportUnitsKeepBuiltUnits: | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true | Logic Boolean | 1.13 |
| transportUnitsCanUnloadUnits: | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false | Logic Boolean | 1.13 |
| transportUnitsAddUnloadOption: | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false | Boolean | 1.13 |
| transportUnitsUnloadDelayBetweenEachUnit: | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 | Float | 1.13.3 |
| transportUnitsKillOnDeath: | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() | Logic Boolean | 1.13 |
| transportUnitsHealBy: | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 | Float | 1.13 |
| transportUnitsBlockOtherTransports: | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false | Boolean | NaN |
| whileNeutralTransportAnyTeam: | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true | Boolean | 1.13.3 |
| whileNeutralConvertToTransportedTeam: | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true | Boolean | 1.13.3 |
| convertToNeutralIfNotTransporting: | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true | Boolean | 1.13.3 |
| transportUnitsOnTeamChangeKeepCurrentTeam: | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true | Boolean | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| #==== | Resource Node Keys | NaN | #==== | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| resourceRate: | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | NaN | Float | NaN |
| similarResourcesHaveTag: | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource | String(s) | NaN |
| resourceMaxConcurrentReclaimingThis: | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 | Int | 1.13.3 |
| reclaimPrice: | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 | Int / Price(s) | 1.13.3 |
| #==== | Resource Harvester Keys | NaN | #==== | 1.13.3 |
| canReclaimResources: | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true | Boolean | NaN |
| canReclaimResourcesNextSearchRange: | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 | Int | NaN |
| canReclaimResourcesOnlyWithTags: | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource | String(s) | NaN |
| #==== | Construction and Factory Keys | NaN | #==== | NaN |
| canRepairBuildings: | This unit can heal ally buildings if true. (isBuilder:true is required) | canRepairBuildings: true | Boolean | NaN |
| canRepairUnits: | This unit can heal ally units if true. (isBuilder:true is required) | canRepairUnits: true | Boolean | NaN |
| autoRepair: | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true | Boolean | NaN |
| nanoRange: | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 | Int | NaN |
| nanoRepairSpeed: | Defaults to 0.2. Defines the unit nano repair speed. | nanoRepairSpeed: 0.01 | Float | NaN |
| nanoBuildSpeed: | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 | Float | NaN |
| nanoRangeForRepairIsMelee: | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true | Boolean | 1.13.3 |
| nanoRangeForReclaimIsMelee: | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true | Boolean | 1.13.3 |
| nanoRangeForRepair: | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 | Int | 1.13.3 |
| nanoRangeForReclaim: | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 | Int | 1.13.3 |
| nanoFactorySpeed: | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 | Float | NaN |
| extraBuildRangeWhenBuildingThis: | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 | Int | NaN |
| builtFrom\_#\_name: | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory | String(s) | NaN |
| builtFrom\_#\_pos: | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 | Float | NaN |
| builtFrom\_#\_forceNano: | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true | Boolean | NaN |
| builtFrom\_#\_isLocked: | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) | Logic Boolean | 1.13.3 |
| builtFrom\_#\_isLockedMessage: | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population | Locale String(s) | 1.13.3 |
| exit\_x: | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 | Float | NaN |
| exit\_y: | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 | Float | NaN |
| exit\_dirOffset: | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 | Float | 1.13 |
| exit\_heightOffset: | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 | Float | 1.13 |
| exit\_moveAwayAmount: | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 | Float | 1.13 |
| #==== | Death Keys | NaN | #==== | NaN |
| dieOnConstruct: | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true | Boolean | NaN |
| dieOnZeroEnergy: | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true | Boolean | 1.13 |
| numBitsOnDeath: | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 | Int | NaN |
| nukeOnDeath: | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true | Boolean | NaN |
| nukeOnDeathRange: | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 | Float | NaN |
| nukeOnDeathDamage: | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 | Float | NaN |
| nukeOnDeathDisableWhenNoNuke: | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true | Boolean | NaN |
| fireTurretXAtSelfOnDeath: | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: 1 | [turret] Ref | NaN |
| explodeOnDeath: | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false | Boolean | 1.13 |
| explodeOnDeathGroundCollision: | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false | Boolean | 1.13 |
| effectOnDeath: | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound | [effect](s) Ref | 1.13 |
| effectOnDeathGroundCollision: | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion | [effect](s) Ref | 1.13 |
| unitsSpawnedOnDeath: | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank | String(s) | 1.13 |
| unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true | Boolean | NaN |
| hideScorchMark: | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true | Boolean | NaN |
| soundOnDeath: | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg | String(s) | NaN |
| #==== | Action Keys | NaN | #==== | NaN |
| autoTriggerCooldownTime: | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | NaN | Seconds | 1.13.3 |
| #==== | Deprecated Keys (can be used but there are better ways) | NaN | #==== | NaN |
| action\_#\_convertTo: | Converts this unit to another unit, use [action\_NAME] sections instead. | action\_1\_convertTo: customTank\_2 | String | deprecated 1.13 |
| action\_#\_pos: | Order action appears in UI, use [action\_NAME] sections instead. | action\_1\_pos: 0.1 | Float | deprecated 1.13 |
| action\_#\_price: | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | Int | deprecated 1.13 |
| action\_#\_text: | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 | String | deprecated 1.13 |
| action\_#\_description: | The action description. | action\_1\_description: -Converts the tank | String | deprecated 1.13 |
| action\_#\_addEnergy: | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 | Float | deprecated 1.13 |
| action\_#\_whenBuilding\_cannotMove: | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true | Boolean | deprecated 1.13 |
| canBuild\_#\_name/pos/isLocked: | Use canBuild section instead. | canBuild\_1\_name: tank | String(s), Int, B | deprecated 1.13.3 |
| Section | [canBuild\_NAME] Allows the unit to build other units or buildings | NaN | NaN | 1.13.3 |
| Code | Description | Example | Value Type | 1.13.3 |
| name: | List of unit identifiers this unit can create. Can be buildings or units. | name: tank, hoverTank, heavyTank | String(s) | 1.13.3 |
| pos: | Order build link appears in this unit UI. | pos: 0.1 | Float | 1.13.3 |
| tech: | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 | Int | 1.13.3 |
| forceNano: | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true | Boolean | 1.13.3 |
| isVisible: | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) | Logic Boolean | 1.13.3 |
| isLocked: | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) | Logic Boolean | 1.13.3 |
| isLockedMessage: | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks | String | 1.13.3 |
| isLockedMessage\_{LANG}: | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles | String | 1.13.3 |
| isLockedAlt: | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) | Logic Boolean | 1.13.3 |
| isLockedAltMessage: | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy | String | 1.13.3 |
| isLockedAlt2: | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() | Logic Boolean | 1.13.3 |
| isLockedAlt2Message: | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet | String | 1.13.3 |
| addResources: | Adds these resources to team when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 | Int / Price(s) | 1.13.3 |
| price: | Overrides built units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 | Int / Price(s) | 1.13.3 |
| isGuiBlinking: | Generates a blinking effect in UI if true. | isGuiBlinking: true | Logic Boolean | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| Section | [graphics] Defines general graphic configurations | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| image: | File path to a .png image that will be the unit body. | image: tank.png | File (image) | NaN |
| image\_back: | An optional image drawn behind other units and this units. Useful for factories that units exit. | image\_back: tank\_factory\_back.png | File (image) | NaN |
| image\_wreak: | Image to use when unit dies. Can be NONE to leave no wreak. | image\_wreak: tank\_dead.png | File (image) | NaN |
| image\_offsetX: | Changes the body image position on the X-axis. | image\_offsetX: 10 | Int | NaN |
| image\_offsetY: | Changes the body image position on the Y-axis. | image\_offsetY: 10 | Int | NaN |
| isVisible: | If false will hide the unit, supports logic booleans. | isVisible: if not self.hp(lessThan=100) | Logic Boolean | 1.13.3 |
| teamColorsUseHue: | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. | teamColorsUseHue: true | Boolean | NaN |
| teamColoringMode: | Green pixels are team colors by default (Values: pureGreen, hueAdd, hueShift, disabled). | teamColoringMode: hueShift | String | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Boolean | NaN |
| scaleImagesTo: | Resizes all images to fit this value in pixels. Affects leg, and shadow images as well. | scaleImagesTo: 0.8 | Float | NaN |
| imageScale: | Resizes image to fit this value in pixels. Defaults to 1. | imageScale: 0.5 | Float | NaN |
| drawLayer: | Draws the unit into a specific layer in-game (Values: experimentals). | drawLayer: experimentals | String | NaN |
| whenBeingBuiltMakeTransparentTill: | Defines a time to make the unit transparent when being built. | whenBeingBuiltMakeTransparentTill: 1.8 | Float | 1.13 |
| icon\_zoomed\_out: | Specifies a .png file to use as icon for this unit when players makes zoom out. | icon\_zoomed\_out: tank\_icon.png | File (image) | NaN |
| icon\_zoomed\_out\_neverShow: | If true the zoom icon will not be shown to players when zoomed out. | icon\_zoomed\_out\_neverShow: true | Boolean | 1.13.3 |
| #==== | Turret Keys | NaN | #==== | NaN |
| image\_turret: | Defines a default image for all turrets, can also be set on each turret. | image\_turret: tank\_turret.png | File (image) | NaN |
| teamColorsOnTurret: | Defaults to false. Applies team colours on turrets with green pixels. Also affects pre-turret images. | teamColorsOnTurret: true | Boolean | NaN |
| scaleTurretImagesTo: | Resizes turret images to fit this value in pixels. | scaleTurretImagesTo: 0.8 | Float | NaN |
| lock\_body\_rotation\_with\_main\_turret: | Locks body image direction to the first turret's direction. | lock\_body\_rotation\_with\_main\_turret: true | Boolean | NaN |
| lock\_leg\_rotation\_with\_main\_turret: | Locks leg images direction to the first turret's direction. | lock\_leg\_rotation\_with\_main\_turret: true | Boolean | 1.13 |
| #==== | Shadow Keys | NaN | #==== | NaN |
| image\_shadow: | Can be a image file, NONE, or AUTO. (AUTO will use image and make it transparent black only) | image\_shadow: AUTO | File (image) | NaN |
| shadowOffsetX: | Changes the shadow image position on the X-axis. | shadowOffsetX: 10 | Float | NaN |
| shadowOffsetY: | Changes the shadow image position on the Y-axis. | shadowOffsetY: 10 | Float | NaN |
| image\_shadow\_frames: | Used if shadow image should use a frame animation from the main image. | image\_shadow\_frames: 2 | Boolean | 1.13.3 |
| lock\_shadow\_rotation\_with\_main\_turret: | Locks body shadow to the first turret's direction. | lock\_shadow\_rotation\_with\_main\_turret: true | Boolean | NaN |
| #==== | Effects and Animation Keys | NaN | #==== | NaN |
| total\_frames: | Defaults to 1. Animations requires the specific number of frames of the main image. | total\_frames: 4 | Int | NaN |
| frame\_width: | Calculated automatically if total\_frames is set, specifies the width of each frame of image. | frame\_width: 28 | Int | NaN |
| frame\_height: | Defaults to image height, specifies the height of image. | frame\_height: 52 | Int | NaN |
| splastEffect: | Set to true to create a water wave effect when unit is over water. Defaults to false. | splastEffect: true | Boolean | NaN |
| dustEffect: | Set to true to create a dust effect when unit is over land. Defaults to false. | dustEffect: true | Boolean | NaN |
| splastEffectReverse: | Set to true to also create a water wave effect when unit is reversing. | splastEffectReverse: true | Boolean | NaN |
| dustEffectReverse: | Set to true to also create a dust effect when unit is reversing. | dustEffectReverse: true | Boolean | NaN |
| movementEffect: | Custom movement effect, can be anything, needs the CUSTOM prefix to set custom effects. | movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | [effect](s) Ref | 1.13 |
| movementEffectReverse: | Like movementEffect but when unit is reversing. | movementEffectReverse: smoke, CUSTOM:pop\*2 | [effect](s) Ref | 1.13 |
| movementEffectRate: | Sets the rate to generate custom effects, greater values means a slower rate. | movementEffectRate: 8 | Float | 1.13 |
| movementEffectReverseFlipEffects: | Creates effects as if unit has rotated 180 when reversing if true. | movementEffectReverseFlipEffects: true | Boolean | 1.13 |
| repairEffect: | Custom repair effect, can be anything. Replaces default effect from builders. | repairEffect: CUSTOM:smoke\*3 | [effect](s) Ref | NaN |
| repairEffectAtTarget: | Generates a custom effect on the repaired unit. | repairEffectAtTarget: CUSTOM:heal\*2 | [effect](s) Ref | NaN |
| repairEffectRate: | Defaults to 5. Sets the rate to generate custom effects when repairing. | repairEffectRate: 8 | Float | NaN |
| reclaimEffect: | Like repairEffect but when reclaiming. | reclaimEffect: CUSTOM:crush\*3 | [effect](s) Ref | 1.13.3 |
| reclaimEffectAtTarget: | Like repairEffectAtTarget but when reclaiming. | reclaimEffectAtTarget: shockwave, CUSTOM:destroy\*4 | [effect](s) Ref | 1.13.3 |
| reclaimEffectRate: | Defaults to 5. Sets the rate to generate custom effects when reclaiming. | reclaimEffectRate: 8 | Float | 1.13.3 |
| rotate\_with\_direction: | Defaults to true. Makes unit body image locked to 0 degrees when false. | rotate\_with\_direction: false | Boolean | NaN |
| animation\_direction\_units: | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction: false. | animation\_direction\_units: 90 | Float | NaN |
| animation\_direction\_strideX: | Animation frames to offset on direction change. | animation\_direction\_strideX: 2 | Int | NaN |
| animation\_direction\_strideY: | Animation frames to offset on direction change. Used with frame\_height. | animation\_direction\_strideY: 4 | Int | NaN |
| animation\_direction\_starting: | Direction for first frame. | animation\_direction\_starting: 45 | Float | NaN |
| disableLowHpFire: | If true the fire effect showed when unit has low HP will not be shown. | disableLowHpFire: true | Boolean | 1.13.3 |
| disableLowHpSmoke: | Like disableLowHpFire but just with the smoke effect. | disableLowHpSmoke: true | Boolean | 1.13.3 |
| showTransportBar: | Defaults to true, hides the transport count under the unit if false. | showTransportBar: false | Boolean | 1.13.3 |
| showHealthBar: | Defaults to true, hides the HP bar under the unit if false. | showHealthBar: false | Boolean | 1.13.3 |
| showEnergyBar: | Defaults to true, hides the energy bar under the unit if false. Useful for invisible units. | showEnergyBar: false | Boolean | 1.13.3 |
| #==== | Deprecated Keys (can be used but there are better ways) | NaN | #==== | NaN |
| animation\_TYPE\_start: | Deprecated, use [animation] section instead | animation\_moving\_start: 0 | Int | deprecated 1.13 |
| animation\_TYPE\_end: | End frame, must be larger then start | animation\_attack\_end: 3 | Int | deprecated 1.13 |
| animation\_TYPE\_scale\_start: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | animation\_idle\_scale\_start: 1 | Float | deprecated 1.13 |
| animation\_TYPE\_scale\_end: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | animation\_idle\_scale\_end: 1.1 | Float | deprecated 1.13 |
| animation\_TYPE\_speed: | Delay for each frame of animation. Larger values cause slower animation | animation\_moving\_speed: 8 | Float | deprecated 1.13 |
| animation\_TYPE\_pingPong: | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | animation\_attack\_pingPong: true | Boolean | deprecated 1.13 |
| Section | [attack] Sets the basics about the unit attack | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| maxAttackRange: | Maximum attack range this unit can attack (it's multiplied by globalScale). | maxAttackRange: 150 | Float | NaN |
| canAttack: | If false, this unit can not attack any unit. Regards of other canAttack keys below. | canAttack: true | Boolean | NaN |
| canAttackFlyingUnits: | If true, this unit can attack units with the AIR movement type. Can be set for each turret. | canAttackFlyingUnits: false | Logic Boolean | NaN |
| canAttackLandUnits: | If true, this unit can attack units with the LAND/WATER movement type. Can be set for each turret. | canAttackLandUnits: true | Logic Boolean | NaN |
| canAttackUnderwaterUnits: | Like canAttackLandUnits but with WATER only and height under 0. Can be set for each turret. | canAttackUnderwaterUnits: if self.hp(lessThan=10) | Logic Boolean | NaN |
| canAttackNotTouchingWaterUnits: | Defaults to true. If false unit can only attack units in contact with water. Used for units with torpedos. | canAttackNotTouchingWaterUnits: false | Logic Boolean | NaN |
| canOnlyAttackUnitsWithTags: | List of comma separated strings. Unit will only be able to attack units with one of these tags. | canOnlyAttackUnitsWithTags: tank, helicopter, building | String(s) | 1.13.3 |
| canOnlyAttackUnitsWithoutTags: | List of comma separated strings. Unit will only be able to attack units without these tags. | canOnlyAttackUnitsWithoutTags: submarine, ship | String(s) | 1.13.3 |
| turretMultiTargeting: | Allows turrets to fire at a different target at the same time. Useful if [turret]limitingAngle is used. | turretMultiTargeting: true | Boolean | 1.13 |
| isMelee: | Used with a low maximum attack range (like 9). Makes the unit attack melee, and affects AI. | isMelee: true | Boolean | NaN |
| meleeEngangementDistance: | Range in which unit moves to attack nearby units. Defaults to 250 and works with melee units only. | meleeEngangementDistance: 140 | Int | 1.13.3 |
| turretRotateWithBody: | If true all turrets rotates when body rotates. Defaults to true. | turretRotateWithBody: false | Boolean | NaN |
| attackMovement: | Sets a built-in movement when unit attacks (Values: bomber, normal). | attackMovement: bomber | String | NaN |
| dieOnAttack: | If true unit will die when shooting a turret. Useful for suicide but powerful units. | dieOnAttack: true | Boolean | NaN |
| isFixedFiring: | If true unit will need to aim with body to shoot. Often makes the unit need to stop to aim and shoot. | isFixedFiring: true | Boolean | NaN |
| aimOffsetSpread: | Offset each shot multiplied by target radius. Defaults to 0.6 and doesn't really affects unit accuracy. | aimOffsetSpread: 0 (will make unit always attack center) | Boolean | NaN |
| stopTargetingAfterFiring: | If true unit stops targeting after firing a shot. Rarely used or needed. | stopTargetingAfterFiring: true | Boolean | 1.13 |
| disablePassiveTargeting: | If true unit will only attack manually ordered targets. Rarely used or needed. | disablePassiveTargeting: true | Boolean | NaN |
| showRangeUIGuide: | If false unit will not show range circle when selected. | showRangeUIGuide: false | Boolean | 1.13.3 |
| #==== | Deprecated Keys (can be used but there are better ways) | NaN | #==== | NaN |
| turretSize: | Like [turret\_NAME]barrelY or [turret\_NAME]size but for all turrets (multiplied by globalScale). | turretSize: 16 | Float | NaN |
| turretTurnSpeed: | Like [turret\_NAME]turnSpeed but for all turrets. | turretTurnSpeed: 4 | Float | NaN |
| shootDelay: | Delay between shots for all turrets, the higher the number the higher the reload time. | shootDelay: 150 | Float / Secs | NaN |
| Section | [turret\_NAME] Sets a turret for the unit, maximum 32 per unit | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | Defines the turret position on the unit in the X axis. | x: 10 | Float | NaN |
| y: | Defines the turret position on the unit in the Y axis. | y: 16 | Float | NaN |
| copyFrom: | Copy all keys and values from another turret as defauts for this turret. | copyFrom: 1 | [turret] Ref | NaN |
| projectile: | Projectile fired from this turret by default, will shoot causing this projectile's damage and effects. | projectile: 1 | [projectile] Ref | NaN |
| barrelX: | Defaults to 0. Defines the real turret width (turret sprite size doesn't affect the real turret size). | barrelX: 20 | Float | 1.13 |
| barrelY: | Defaults to size. Defines the turret height in the real turret size (size and barrelY have the same use). | barrelY: 20 | Float | 1.13 |
| barrelHeight: | Defines the turret height in 3D. Affects projectile and shoot flame starting height position. | barrelHeight: 18 | Float | 1.13.3 |
| size: | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 | Float | NaN |
| turnSpeed: | Defines the maximum turn speed of the turret, higher numbers means a faster speed. | turnSpeed: 3 | Float | NaN |
| turnSpeedAcceleration: | Defaults is disabled. Sets an acceleration rate for the turret to turn, till reach the maximum speed. | turnSpeedAcceleration: 0.5 | Float | NaN |
| turnSpeedDeceleration: | Defaults to turnSpeedAcceleration. Setting this higher allows the unit to target faster. | turnSpeedDeceleration: 1 | Float | NaN |
| idleDir: | Defaults to 0. Defines the direction in which the turret aims when there aren't enemies near. | idleDir: 180 | Float | NaN |
| idleDirReversing: | Defaults to idleDir+180 unless attached to another turret. Like idleDir but when unit is reversing. | idleDirReversing: 60 | Float | 1.13 |
| shouldResetTurret: | Defaults to true. When false disables the reseting turret angle when idle. | shouldResetTurret: false | Boolean | NaN |
| attachedTo: | Another turret to attach to. This turret will be positioned relative to this, and will rotate with it. | attachedTo: 1 | [turret] Ref | NaN |
| slave: | Locks this turret's direction and shot cooldown to the attached turret. Useful with warmup. | slave: true | Boolean | NaN |
| isMainNanoTurret: | If true turret can be used to build. Can only be set on one turret, and needs canShoot: false. | isMainNanoTurret: true | Boolean | NaN |
| energyUsage: | Required energy for this turret to fire. Same as resourceUsage: energy=X. Needs [core]energyMax. | energyUsage: 2 | Float | NaN |
| resourceUsage: | Required resource for this turret to fire (Values: credits, energy, hp, shield, ammo, custom resources). | resourceUsage: hp=5, energy=5, gold=10 | Int / Price(s) | NaN |
| NaN | Timing | NaN | NaN | NaN |
| delay: | Override global shootDelay for this turret | NaN | float | NaN |
| linkDelayWithTurret | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN | turret ref | NaN |
| warmup: | Delay before firing a shot. | NaN | float | NaN |
| warmupCallDownRate | Rate to reduce warmup when turret is not ready to fire at any targets | NaN | float | NaN |
| warmupNoReset | Defaults to false. When true warmup is not reset after firing a shot. Used with warmupCallDownRate | NaN | bool | NaN |
| warmupShootDelayTransfer | Defaults to 0, a multiplier which reduces the next shot delay by the warmup value. When used with warmupNoReset, can make a each shot faster. | NaN | float | NaN |
| NaN | On Shoot | NaN | NaN | NaN |
| onShoot\_freezeBodyMovementFor | Freezes body movement while shooting. | NaN | NaN | 1.13.3 |
| NaN | Targeting control | NaN | NaN | NaN |
| canShoot: | Defaults to true | NaN | bool | NaN |
| canAttackFlyingUnits: | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | LogicBoolean | NaN |
| canAttackLandUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackUnderwaterUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | LogicBoolean | NaN |
| canOnlyAttackUnitsWithTags | NaN | NaN | tags | 1.13.3 |
| canOnlyAttackUnitsWithoutTags | NaN | NaN | tags | 1.13.3 |
| canAttackCondition: | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | LogicBoolean | NaN |
| clearTurretTargetAfterFiring | NaN | NaN | NaN | 1.13 |
| limitingRange: | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | float | NaN |
| limitingAngle | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN | NaN | 1.13 |
| limitingMinRange | Sets minimum range for turret. | limitingMinRange: 200 | NaN | 1.13 |
| interceptProjectiles\_withTags | Currently used with anti-nuke units. | NaN | NaN | 1.13 |
| interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN | NaN |
| interceptProjectiles\_andUnderDistance | Defaults to 2000, distance inflight before firing | NaN | NaN | NaN |
| interceptProjectiles\_andOverHeight | Defaults to 0 | NaN | NaN | NaN |
| laserDefenceEnergyUse: | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| invisible: | Don't render this turret, but still can shoot, etc. | NaN | LogicBoolean | NaN |
| image: | Use custom image. Overrides unit's main turret image | NaN | file (image) | NaN |
| image\_applyTeamColors | NaN | NaN | bool | NaN |
| image\_drawOffsetX | NaN | NaN | float | NaN |
| image\_drawOffsetY | NaN | NaN | float | NaN |
| chargeEffectImage:\n | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | file (image) | NaN |
| warmupStartEffect | NaN | NaN | effects | NaN |
| shoot\_sound: | NaN | NaN | string | NaN |
| shoot\_sound\_vol: | NaN | NaN | float | NaN |
| shoot\_flame: | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 | effects | NaN |
| shoot\_light | NaN | NaN | color | NaN |
| idleSpin: | Spin rate when idle, used on missile turrets | NaN | float | NaN |
| onShoot\_playAnimation | Play a custom animation from an [animation] section after firing this turret | NaN | animation ref | NaN |
| onShoot\_freezeBodyMovementFor | NaN | NaN | NaN | 1.13.3 |
| recoilOffset | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN | float | NaN |
| recoilOutTime | Time to get to offset position after firing | NaN | float | NaN |
| recoilReturnTime | Time to return to default position | NaN | float | NaN |
| showRangeUIGuide | NaN | NaN | NaN | 1.13.3 |
| Section | [projectile\_NAME] Defines the attack damage and are useful for other purposes | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life: | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | int | NaN |
| deflectionPower: | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | float | NaN |
| explodeOnEndOfLife | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing | NaN | bool | 1.13 |
| autoTargetingOnDeadTarget: | Retarget to nearby unit if target dies while in transit | NaN | bool | NaN |
| unloadUpToXUnitsFromSource | Unload X units from source unit, to projectile explode location | NaN | int | 1.13 |
| teleportSource | Move unit that shot this projectile to projectile explode location | NaN | bool | 1.13 |
| spawnUnit | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank | unit types | 1.13 |
| convertHitToSourceTeam | Convert units hit to the team that fired this projectile. Useful to make capturing systems | NaN | bool | 1.13.3 |
| tags | NaN | NaN | tags | 1.13 |
| flameWeapon: | Generates small flames on hit (only cosmetic) | NaN | bool | NaN |
| NaN | Damage | NaN | NaN | NaN |
| directDamage: | Damage to target unit on hit. Does not work with targetGround:true as we don't have a unit target | NaN | int | NaN |
| areaDamage: | directDamage or areaDamage is required | NaN | int | NaN |
| areaRadius: | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | NaN | float | 1.13 |
| areaDamageNoFalloff | Removes the falloff from areaDamage | NaN | bool | NaN |
| areaRadiusFromEdge | Applies damage from edge of units instead of center. Mostly effects large units. | NaN | NaN | NaN |
| areaExpandTime | NaN | NaN | float | 1.13 |
| areaHitAirAndLandAtSameTime | NaN | NaN | bool | 1.13 |
| areaHitUnderwaterAlways | Defaults to false | NaN | NaN | NaN |
| areaIgnoreUnitsCloserThan | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | NaN | NaN | NaN |
| buildingDamageMultiplier | Defaults to 1 | NaN | float | 1.13 |
| shieldDamageMultiplier | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage | float | 1.13 |
| shieldDefectionMultiplier | Defaults to 1. | eg: 0 to ignore shields and directly damage hull | float | 1.13 |
| armourIgnoreAmount | Amount of armour to ignore on target and do damage as if this armour was not there | NaN | NaN | NaN |
| friendlyFire | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy | bool/string | 1.13 |
| mutatorX\_ifUnitWithTags | NaN | eg: mutator1\_ifUnitWithTags: infantry | NaN | 1.13.3 |
| mutatorX\_ifUnitWithoutTags | NaN | eg: mutator1\_ifUnitWithoutTags: strongArmour | NaN | 1.13.3 |
| mutatorX\_directDamageMultiplier | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible. | NaN | NaN | 1.13.3 |
| mutatorX\_areaDamageMultiplier | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | NaN | NaN | 1.13.3 |
| mutatorX\_changedExplodeEffect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | NaN | NaN | 1.13.3 |
| NaN | Movement | NaN | NaN | NaN |
| targetGround | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN | bool | NaN |
| speed: | NaN | NaN | float | NaN |
| targetSpeed: | Accelerate to this speed | NaN | float | NaN |
| targetSpeedAcceleration | NaN | NaN | float | 1.13 |
| ballistic: | NaN | NaN | bool | NaN |
| ballistic\_delaymove\_height: | NaN | NaN | float | NaN |
| ballistic\_height: | NaN | NaN | float | NaN |
| targetGroundSpread: | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | float | NaN |
| speedSpread: | Randomly change the starting projectile speed by this amount | NaN | float | NaN |
| instant | Hit target instantly | NaN | bool | NaN |
| instantReuseLast: | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | bool | NaN |
| disableLeadTargeting | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | NaN | bool | 1.13 |
| leadTargetingSpeedCalculation | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | NaN | float | 1.13 |
| initialUnguidedSpeedHeight | NaN | NaN | NaN | 1.13.3 |
| gravity | NaN | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | NaN | 1.13.3 |
| NaN | Graphics and effects | NaN | NaN | 1.13 |
| color | NaN | color: #bebe50 | color | NaN |
| invisible | NaN | NaN | bool | 1.13.3 |
| image: | Use custom image. Overrides drawType and frame | NaN | file (image) | NaN |
| drawType | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | int | NaN |
| drawSize: | Scale image. Defaults to 1 | NaN | float | NaN |
| frame | Built-in image frame to use, starts at zero. | NaN | int | NaN |
| hitSound: | Default true | NaN | bool | NaN |
| explodeEffect | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | effect ref list | 1.13 |
| explodeEffectOnShield | Use this effect if shield is active on target | NaN | effect ref list | 1.13 |
| teamColorRatio | Mix 0-1 of team colour into color field | NaN | float | 1.13 |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| effectOnCreate | NaN | NaN | effect ref list | 1.13 |
| shouldRevealFog | Reveal fog to player on explode | NaN | bool | 1.13 |
| alwaysVisibleInFog | NaN | NaN | bool | 1.13 |
| nukeWeapon | Shows on mini-map when fired. Some other side effects as well. | NaN | bool | 1.13 |
| trailEffect | true for built-in defaults, but can also point to any custom effects | NaN | bool/effect | NaN |
| trailEffectRate | Defaults to 3 | NaN | float | 1.13 |
| lightSize: | NaN | NaN | float | NaN |
| lightColor | NaN | lightColor: #ffe92b | color | NaN |
| largeHitEffect: | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN | bool | NaN |
| lightingEffect: | Draw as lighting works best with instant:true | NaN | bool | NaN |
| laserEffect: | Draw as laser works best with instant:true | NaN | bool | NaN |
| Section | [movement] Defines all about the unit movement | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| movementType: | Defines what kind of terrain the unit will be able to move over, along with other properties related to unit types. | movementType: LAND | string | NaN |
| slowDeathFall: | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true | bool | NaN |
| moveSpeed: | Maximum movement speed of the unit. | moveSpeed: 1.2 | float | NaN |
| moveAccelerationSpeed: | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 | float | NaN |
| moveDecelerationSpeed: | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 | float | NaN |
| reverseSpeedPercentage: | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 | float | NaN |
| landOnGround: | Should flying unit land when idle. | landOnGround: false | bool | NaN |
| targetHeight: | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 | float | NaN |
| targetHeightDrift: | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 | float | NaN |
| startingHeightOffset | NaN | NaN | NaN | NaN |
| maxTurnSpeed: | NaN | NaN | float | NaN |
| turnAcceleration: | NaN | NaN | float | NaN |
| moveSlidingMode: | NaN | NaN | bool | NaN |
| moveIgnoringBody: | NaN | NaN | bool | NaN |
| moveSlidingDir: | NaN | NaN | int | NaN |
| joinsGroupFormations: | Defaults to true. Changing not recommended | NaN | bool | NaN |
| Section | [ai] Specifies the AI behavior with the unit | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| useAsBuilder: | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN | bool | NaN |
| useAsTransport | Defaults to true if unit can transport units | NaN | NaN | NaN |
| useAsHarvester | Defaults to true if unit can reclaim resources | NaN | NaN | NaN |
| disableUse: | Disallow AI building this unit or building | NaN | bool | NaN |
| ai\_upgradePriority | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN | float | NaN |
| NaN | Buildings only | NaN | NaN | NaN |
| buildPriority: | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | float | NaN |
| noneInBaseExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | float | NaN |
| noneGlobalExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | float | NaN |
| recommendedInEachBaseNum | Defaults to 0 | NaN | NaN | NaN |
| recommendedInEachBasePriorityIfUnmet | Defaults to 0.5. Overrides buildPriority | NaN | NaN | NaN |
| upgradedFrom: | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | string | NaN |
| maxGlobal: | NaN | NaN | int | NaN |
| maxEachBase: | NaN | NaN | int | NaN |
| NaN | NaN | NaN | NaN | NaN |
| whenUsingAsHarvester\_recommendedInEachBase | NaN | NaN | NaN | NaN |
| whenUsingAsHarvester\_recommendedGlobal | NaN | NaN | NaN | NaN |
| whenUsingAsHarvester\_includeOtherHarvesterCounts | NaN | NaN | NaN | NaN |
| onlyUseAsHarvester\_ifBaseHasUnitTagged | NaN | NaN | NaN | NaN |
| Section | [leg\_NAME] / [arm\_NAME] Useful to make animations | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | Sets position of the foot on the X axis. | NaN | float | NaN |
| y: | Sets position of the foot on the Y axis. | NaN | float | NaN |
| copyFrom: | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | int | NaN |
| attach\_x: | Sets the leg's attach point on the X axis. | NaN | float | NaN |
| attach\_y: | Sets the leg's attach point on the Y axis. | NaN | float | NaN |
| rotateSpeed: | NaN | NaN | float | NaN |
| endDirOffset | Target foot/end rotation relative to body | NaN | NaN | NaN |
| lockMovement | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | bool | NaN |
| heightSpeed: | NaN | NaN | float | NaN |
| moveSpeed | NaN | NaN | NaN | NaN |
| moveWarmUp | NaN | NaN | NaN | NaN |
| holdDisMin: | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | float | NaN |
| holdDisMax: | Defaults to 16. Force reposition of leg at this distance. | NaN | float | NaN |
| holdDisMin\_maxMovingLegs | NaN | NaN | NaN | NaN |
| hold\_moveOnlyIfFurthest | NaN | NaN | NaN | NaN |
| holdDisMin\_checkNeighbours | NaN | NaN | NaN | NaN |
| hardLimit: | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | float | NaN |
| estimatingPositionMultiplier | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| hidden: | NaN | NaN | logic boolean | NaN |
| image\_end | NaN | NaN | image | 1.13 |
| image\_end\_shadow | NaN | NaN | image | 1.13 |
| image\_end\_teamColors | NaN | NaN | NaN | 1.13 |
| image\_foot | same as image\_end | NaN | image | 1.13 |
| image\_foot\_shadow | NaN | NaN | image | NaN |
| image\_middle | NaN | NaN | image | 1.13 |
| image\_leg | same as image\_middle | NaN | image | NaN |
| draw\_foot\_on\_top | NaN | NaN | bool | 1.13 |
| drawOverBody | Draw over body | NaN | bool | NaN |
| drawUnderAllUnits | Draw over all units | NaN | bool | NaN |
| drawDirOffset | NaN | NaN | float | NaN |
| dust\_effect: | Spawns dust particles on each step. | NaN | bool | NaN |
| spinRate | Makes arm/leg spin, like idleSpin for turrets | NaN | float | NaN |
| favourOppositeSideNeighbours | calculate neighbours with X 10 times closer than Y | NaN | NaN | NaN |
| drawLegWhenZoomedOut | For performance, defaults changes based on unit size | NaN | NaN | NaN |
| drawFootWhenZoomedOut | For performance, defaults changes based on unit size | NaN | NaN | NaN |
| resetAngle: | Unused | NaN | float | NaN |
| Section | [attachment\_NAME] Sets attachments into the unit | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x | NaN | NaN | NaN | 1.13.3 |
| y | NaN | NaN | NaN | 1.13.3 |
| height | NaN | NaN | NaN | 1.13.3 |
| idleDir | NaN | NaN | NaN | 1.13.3 |
| isVisible | NaN | NaN | NaN | 1.13.3 |
| onCreateSpawnUnitOf | NaN | NaN | NaN | 1.13.3 |
| canBeAttackedAndDamaged | NaN | NaN | NaN | 1.13.3 |
| isUnselectable | NaN | NaN | NaN | 1.13.3 |
| lockLegMovement | NaN | NaN | NaN | 1.13.3 |
| keepAliveWhenParentDies | NaN | NaN | NaN | 1.13.3 |
| setDrawLayerOnTop | NaN | NaN | NaN | 1.13.3 |
| setDrawLayerOnBottom | NaN | NaN | NaN | 1.13.3 |
| addTransportedUnits | NaN | NaN | NaN | 1.13.3 |
| lockRotation | NaN | NaN | NaN | 1.13.3 |
| rotateWithParent | NaN | NaN | NaN | 1.13.3 |
| resetRotationWhenNotAttacking | Similar to shouldResetTurret:for turrets. | NaN | NaN | 1.13.3 |
| deattachIfWantingToMove | If the unit is ordered to move, it will detach. This includes waypoints from actions. | NaN | NaN | 1.13.3 |
| prioritizeParentsMainTarget | It will priotize targeting the main target. Defaults to true. | NaN | NaN | 1.13.3 |
| alwaysAllowedToAttackParentsMainTarget | Will always attack the parents main target. | NaN | NaN | 1.13.3 |
| canAttack | Defaults to true. Set to false to stop this attachment attacking. | NaN | bool | NaN |
| onParentTeamChangeKeepCurrentTeam | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| Section | [effect\_NAME] Sets a custom effect to be used | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | NaN | float | 1.13 |
| alsoEmitEffects | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN | effect ref | 1.13 |
| ifSpawnFailsEmitEffects | If 'spawnChance' for this effects fails then emit these effects instead | NaN | NaN | NaN |
| alsoPlaySound | NaN | NaN | sound ref | 1.13 |
| createWhenOffscreen | Defaults false. | NaN | bool | 1.13 |
| createWhenZoomedOut | Defaults true | NaN | bool | 1.13 |
| createWhenOverLiquid | Defaults true | NaN | bool | 1.13 |
| createWhenOverLand | Defaults true | NaN | bool | 1.13 |
| spawnChance | Default 1. If less than 1 effect only has a random chance of being created | NaN | float | 1.13 |
| showInFog | Default false | NaN | boolean | 1.13 |
| delayedStartTimer | Hide for x time before showing and updating effect. | NaN | float | 1.13 |
| liveAfterAttachedDies | Defaults false when attachedToUnit is being used | NaN | bool | 1.13 |
| priority | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN | string | 1.13 |
| NaN | Movement | NaN | NaN | NaN |
| attachedToUnit | Attach to unit or projectile that created this effect. Will move with this object. | NaN | bool | 1.13 |
| alwayStartDirAtZero | Ignore source/attached unit dir | NaN | bool | 1.13 |
| atmospheric | Apply drag to slow this effect down and add small wind effects | NaN | bool | 1.13 |
| physics | Fall to ground and bounces. Needs height to take effect. | NaN | bool | 1.13 |
| physicsGravity | Defaults to 1. height speed acceleration when physics: true | NaN | float | 1.13 |
| xOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xSpeedRelative | NaN | NaN | float | 1.13 |
| ySpeedRelative | NaN | NaN | float | 1.13 |
| xSpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| xSpeedAbsolute | NaN | NaN | float | 1.13 |
| ySpeedAbsolute | NaN | NaN | float | 1.13 |
| xSpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hOffset | height offset from source | NaN | float | 1.13 |
| hOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hSpeed | height speed | NaN | float | 1.13 |
| hSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirOffset | rotation | NaN | float | 1.13 |
| dirOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirSpeed | rotation speed | NaN | float | 1.13 |
| dirSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| NaN | Graphics | NaN | NaN | NaN |
| frameIndex | frame of to use | NaN | int | 1.13 |
| frameIndexRandom | NaN | NaN | NaN | NaN |
| stripIndex | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | int/string | 1.13 |
| Image | Custom image file to use. Cannot be used with stripIndex. | NaN | image | 1.13 |
| imageShadow | Custom image file to use for shadows | NaN | image | NaN |
| scaleTo | Defaults to 1 | NaN | float | 1.13 |
| scaleFrom | Defaults to 1 | NaN | float | 1.13 |
| color | Defaults #FFFFFFFF | NaN | color | 1.13 |
| teamColorRatio | 0-1 | NaN | NaN | NaN |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| fadeInTime | Fade alpha from 0% to 100% for this time at start | NaN | float | 1.13 |
| fadeOut | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN | bool | 1.13 |
| alpha | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN | NaN | NaN |
| shadow | True to draw a shadow. Forced true if imageShadow is used | NaN | NaN | NaN |
| NaN | Animation | NaN | NaN | NaN |
| total\_frames | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN | int | 1.13 |
| animateFrameStart | NaN | NaN | int | 1.13 |
| animateFrameEnd | NaN | NaN | int | 1.13 |
| animateFramePingPong | NaN | NaN | int | 1.13 |
| animateFrameSpeed | NaN | NaN | time | 1.13 |
| animateFrameSpeedRandom | NaN | NaN | time | 1.13 |
| Section | [animation\_NAME] Useful to generate animations for the unit | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| onActions : Unknown | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN | NaN | 1.13 |
| onActionsQueuedUnitPlayAt : float | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN | NaN | 1.13 |
| blendIn : time | Blend with last animation for this time | NaN | NaN | 1.13 |
| blendOut : time | Blend with next animation for this time | NaN | NaN | 1.13 |
| pingPong | Play animation in reverse after it ends | NaN | bool | 1.13 |
| KeyframeTimeScale : float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN | float | 1.13 |
| NaN | Keyframes - create as many as needed | NaN | NaN | NaN |
| arm#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } | NaN | 1.13 |
| leg#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | NaN | NaN | NaN |
| body\_[time] | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| animation\_direction\_units | Overrides [graphics]animation\_direction\_units while this animation is playing | NaN | float | NaN |
| animation\_direction\_strideX: | Overrides [graphics]animation\_direction\_strideX | NaN | int | NaN |
| animation\_direction\_strideY: | Overrides [graphics]animation\_direction\_strideY | NaN | int | NaN |
| animation\_direction\_starting: | Overrides [graphics]animation\_direction\_starting | NaN | float | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| start : int | Start image frame. deprecated | NaN | NaN | 1.13 |
| end : int | End image frame. deprecated | NaN | NaN | 1.13 |
| scale\_start : float | Start scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| scale\_end : float | End scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| speed : float | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN | NaN | 1.13 |
| NaN | NaN | NaN | NaN | NaN |
| Section | [action\_NAME] / [hiddenAction\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| text | Text shown in UI | NaN | string | NaN |
| text\_{LANG} | NaN | NaN | NaN | NaN |
| description | A display text when you select your unit's action, used to explain it's purpose. | NaN | string | NaN |
| description\_{LANG} | NaN | NaN | NaN | NaN |
| displayType | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN | NaN | NaN |
| displayRemainingStockpile | Queue is shown as number of times action can be triggered based on price | NaN | bool | NaN |
| pos | Order action appears in UI | NaN | float | NaN |
| iconImage | NaN | NaN | NaN | NaN |
| unitShownInUI | Display this unit. (as if this action built this unit) | NaN | UnitType | 1.13.3 |
| NaN | Requirements for player/AI to use in UI | NaN | NaN | NaN |
| price | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | resources | NaN |
| isActive | Defaults true. If false then action is disabled and shown in red in UI. | NaN | LogicBoolean | NaN |
| isVisible | Defaults true. If false action is hidden from UI and disabled. | NaN | LogicBoolean | NaN |
| isLocked | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN | LogicBoolean | NaN |
| isLockedMessage | NaN | NaN | LocaleString | NaN |
| isLockedAlt | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | NaN | LogicBoolean | 1.13.3 |
| isLockedAltMessage | NaN | NaN | LocaleString | 1.13.3 |
| isLockedAlt2 | NaN | NaN | LogicBoolean | 1.13.3 |
| isLockedAlt2Message | NaN | NaN | LocaleString | 1.13.3 |
| allowMultipleInQueue | NaN | NaN | NaN | NaN |
| onlyOneUnitAtATime | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN | bool | NaN |
| isGuiBlinking | NaN | NaN | LogicBoolean? | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| ai\_isDisabled | Defaults false. Stop AI using this action. | NaN | LogicBoolean | NaN |
| ai\_isHighPriority | NaN | NaN | NaN | 1.13.3 |
| ai\_considerSameAsBuilding | Be careful with | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically an action to the queue) | NaN | NaN |
| autoTriggerOnEvent | created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded, queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit | NaN | NaN | 1.13.3 |
| autoTrigger | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater() | LogicBoolean | NaN |
| NaN | While action is queued | NaN | NaN | NaN |
| buildSpeed | NaN | buildSpeed: 5s | time | NaN |
| highPriorityQueue | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN | bool | NaN |
| canPlayerCancel | NaN | NaN | bool | NaN |
| whenBuilding\_cannotMove | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool | NaN |
| whenBuilding\_playAnimation | Play a custom animation from an [animation] section when in active queue | NaN | animation ref | NaN |
| whenBuilding\_rotateTo | Rotate unit body to this direction when action is in active queue | NaN | float | NaN |
| whenBuilding\_rotateTo\_orBackwards | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN | bool | NaN |
| whenBuilding\_rotateTo\_waitTillRotated | Pause action queue till rotation is finished | NaN | bool | NaN |
| whenBuilding\_temporarilyConvertTo | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN | unit ref | NaN |
| whenBuilding\_triggerAction | NaN | NaN | NaN | NaN |
| spawnEffectsOnQueue | Effects to spawn at unit when action is first added to queue | NaN | effect ref | NaN |
| playSoundToPlayerOnQueue | Global sound to play to unit's player only when action is first added to queue | NaN | sound ref | NaN |
| NaN | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN | NaN | NaN |
| requireConditional | Skip all effects of this action if this evaluates to false | NaN | NaN | NaN |
| convertTo | Convert your unit into another unit. properties are preserved. | NaN | unit ref | 1.13.3 |
| addEnergy | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | NaN | float | NaN |
| addResources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | resources | NaN |
| addResourcesScaledByAIHandicaps | Same as addResources, but increased or decreased depending on AI difficulty level | NaN | NaN | NaN |
| deleteSelf | Remove self with no explosions or sounds | NaN | NaN | NaN |
| resetCustomTimer | Reset timer used with self.customTimer() | NaN | LogicBoolean | NaN |
| setBodyRotation | NaN | NaN | NaN | 1.13.3 |
| NaN | Outcome - Chaining Actions | NaN | NaN | NaN |
| alsoTriggerAction | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound | action refs | NaN |
| alsoQueueAction | Adds another action into the normal unit's queue. Ignores action's requirements | NaN | action refs | NaN |
| alsoTriggerOrQueueActionConditional | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN | LogicBoolean | NaN |
| NaN | Outcome - Sounds | NaN | NaN | NaN |
| playSoundAtUnit | Local sound to play when action finishes | NaN | sound ref | NaN |
| playSoundGlobally | Global sound to play to all players in game | NaN | sound ref | NaN |
| playSoundToPlayer | Global sound to play to unit's player only | NaN | sound ref | NaN |
| NaN | Outcome - Fire projectile from turret | NaN | NaN | NaN |
| fireTurretXAtGround | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo | turret ref | NaN |
| fireTurretXAtGround\_withOffset | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 | point | NaN |
| fireTurretXAtGround\_withProjectile | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN | projectile ref | NaN |
| fireTurretXAtGround\_count | Number of projectiles to fire. Defaults to 1 | NaN | NaN | 1.13.3 |
| fireTurretXAtGround\_onlyOverPassableTileOf | Only allow tiles crossable by this movement type to be selected | LAND,BUILDING,WATER,HOVER, etc | NaN | 1.13.3 |
| NaN | Outcome - Spawning | NaN | NaN | NaN |
| spawnUnits | NaN | NaN | NaN | 1.13.3 |
| spawnEffects | Effects to spawn at unit | NaN | effect ref | NaN |
| produceUnits | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | NaN | NaN | 1.13.3 |
| NaN | Outcome - Transport Changes | NaN | NaN | NaN |
| addUnitsIntoTransport | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank | NaN | NaN |
| deleteNumUnitsFromTransport | NaN | NaN | int | NaN |
| deleteNumUnitsFromTransport\_onlyWithTags | NaN | NaN | NaN | 1.13.3 |
| startUnloadingTransport | NaN | NaN | NaN | 1.13.3 |
| forceUnloadTransportNow | NaN | NaN | NaN | 1.13.3 |
| NaN | Outcome - Waypoint Changes | NaN | NaN | NaN |
| clearAllWaypoints | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | NaN | bool | 1.13.3 |
| clearActiveWaypoint | NaN | NaN | bool | 1.13.3 |
| addWaypoint\_type | move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow | NaN | NaN | NaN |
| addWaypoint\_unitType | Only for use with addWaypoint\_type:build | NaN | NaN | 1.13.3 |
| addWaypoint\_prepend | Add to the start of the waypoint queue or the end | NaN | bool | 1.13.3 |
| addWaypoint\_triggerActionIfFailed | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | NaN | actions | 1.13.3 |
| addWaypoint\_maxTime | Automatically remove this waypoint if it has been active for longer than this time. | NaN | time | 1.13.3 |
| addWaypoint\_target\_nearestUnit\_tagged | NaN | NaN | tags | 1.13.3 |
| addWaypoint\_target\_nearestUnit\_team | own|neutral|ally|enemy|any | NaN | relation | 1.13.3 |
| addWaypoint\_target\_nearestUnit\_maxRange | NaN | NaN | float | 1.13.3 |
| addWaypoint\_target\_mapMustBeReachable | NaN | NaN | bool | 1.13.3 |
| addWaypoint\_position\_offsetFromSelf | NaN | NaN | point | 1.13.3 |
| addWaypoint\_position\_fromAction | NaN | NaN | bool | 1.13.3 |
| addWaypoint\_position\_randomOffsetFromSelf | Same as above, but random. | NaN | NaN | 1.13.3 |
| NaN | Outcome - Animation | NaN | NaN | NaN |
| playAnimation | NaN | NaN | NaN | 1.13.3 |
| playAnimationIfNotPlaying | Don't restart animation if this animation is already playing | NaN | NaN | 1.13.3 |
| finishPlayingLastAnimation | Finish last animation, including blend out | NaN | NaN | 1.13.3 |
| stopLastAnimation | Stop last animation, skipping blend out | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| switchToNeutralTeam | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | NaN | boolean | 1.13.3 |
| switchToAggressiveTeam | Change to a built-in team that is aggressive to all other teams. Does not get captured. | NaN | boolean | 1.13.3 |
| NaN | Outcome - Take Resources from other units | NaN | NaN | NaN |
| takeResources | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 | customPrice | 1.13.3 |
| takeResources\_includeUnitsInTransport | NaN | NaN | bool | 1.13.3 |
| takeResources\_includeParent | Include attachment parent or transport parent | NaN | bool | 1.13.3 |
| takeResources\_includeUnitsWithinRange | NaN | NaN | float | 1.13.3 |
| takeResources\_includeUnitsWithinRange\_team | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | NaN | TeamRelation | 1.13.3 |
| takeResources\_excludeUnitsWithoutTags | NaN | NaN | tags | 1.13.3 |
| takeResources\_excludeUnitsWithTheseResources | NaN | NaN | customPrice | 1.13.3 |
| takeResources\_excludeUnitsWithoutAllResources | Defaults to true. | NaN | bool | 1.13.3 |
| takeResources\_triggerActionIfAnyCollected | NaN | NaN | action refs | 1.13.3 |
| takeResources\_triggerActionIfNoneCollected | NaN | NaN | action refs | 1.13.3 |
| takeResources\_discardCollected | Just take resources from targets, don't add(or remove) to self | NaN | bool | 1.13.3 |
| takeResources\_keepResourcesOnTarget | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | NaN | bool | 1.13.3 |
| takeResources\_maxUnits | Defaults to 1. | NaN | NaN | NaN |
| NaN | Outcome - Convert Resources | NaN | NaN | NaN |
| convertResource\_from | Name of custom resource to take from | NaN | NaN | 1.13.3 |
| convertResource\_to | Name of custom resource to give to | NaN | NaN | 1.13.3 |
| convertResource\_minAmount | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | NaN | NaN | 1.13.3 |
| convertResource\_maxAmount | Max amount to transfer between 'from' and 'to' | NaN | NaN | 1.13.3 |
| convertResource\_multiplyAmountBy | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | NaN | NaN | 1.13.3 |
| NaN | Outcome - Set Resources | NaN | NaN | NaN |
| resourceAmount | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | NaN | customResource | 1.13.3 |
| resourceAmount\_setValue | Absolute value to set this resource to, ignores current value of resource. Skipped by default | NaN | float | 1.13.3 |
| resourceAmount\_addOtherResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | NaN | customResource | 1.13.3 |
| resourceAmount\_multiplyBy | Defaults to 1. Multiple the current or new value by | NaN | float | 1.13.3 |
| NaN | Outcome - Attachment changes | NaN | NaN | NaN |
| attachments\_addNewUnits | NaN | NaN | NaN | 1.13.3 |
| attachments\_deleteNumUnits | NaN | NaN | NaN | 1.13.3 |
| attachments\_onlyOnSlots | NaN | NaN | NaN | 1.13.3 |
| disconnectFromParent | NaN | NaN | NaN | 1.13.3 |
| NaN | Outcome - Tag changes | NaN | NaN | NaN |
| temporarilyAddTags | Add tag to this unit until it is converted or reset | NaN | NaN | 1.13.3 |
| temporarilyRemoveTags | Remove tag from this unit until it is converted or reset | NaN | NaN | 1.13.3 |
| resetToDefaultTags | Reset to standard tags | NaN | NaN | 1.13.3 |
| addGlobalTeamTags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | NaN | NaN | 1.13.3 |
| removeGlobalTeamTags | Remove a tag from player's team. | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Outcome - Show Message | NaN | NaN | NaN |
| showMessageToPlayer | Sends a message to the player controlling the unit | NaN | string | 1.13.3 |
| showMessageToAllPlayers | Sends a message to all players | NaN | string | 1.13.3 |
| showQuickWarLogToPlayer | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | NaN | string | 1.13.3 |
| showQuickWarLogToAllPlayers | Sends a Quick War Log message to all players (in the lower lef) | NaN | NaN | 1.13.3 |
| debugMessage | Only shows in Sandbox with Debug mode on. | NaN | NaN | 1.13.3 |
| NaN | NaN | NaN | Targets | NaN |
| Type | Spawn Units Parameters Used with spawn keys and unit names | NaN | NaN | NaN |
| Code | Description | Example | NaN | NaN |
| NaN | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) | NaN | NaN |
| neutralTeam | Spawn the unit on the neutral team instead of the same team as source | NaN | NaN | 1.13.3 |
| setToTeamOfLastAttacker | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | NaN | NaN | 1.13.3 |
| spawnChance | Chance this unit will spawn. Defaults to 1. | NaN | NaN | 1.13.3 |
| maxSpawnLimit | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) | NaN | 1.13.3 |
| gridAlign | Align spawn location to grid, useful for buildings | NaN | NaN | 1.13.3 |
| skipIfOverlapping | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | NaN | NaN | 1.13.3 |
| offsetX | NaN | NaN | NaN | 1.13.3 |
| offsetY | NaN | NaN | NaN | 1.13.3 |
| offsetRandomX | NaN | NaN | NaN | NaN |
| offsetRandomY | NaN | NaN | NaN | NaN |
| offsetRandomDir | NaN | NaN | NaN | NaN |
| offsetHeight | NaN | NaN | NaN | 1.13.3 |
| offsetDir | NaN | NaN | NaN | 1.13.3 |
| addResources | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResource=gold:30|stone:10, spawnChance=0.5) | NaN | 1.13.3 |
| NaN | NaN | NaN | Targets | NaN |
| Type | Logic Boolean Values Useful to create conditionals with several keys | NaN | NaN | NaN |
| Code | Description | Example | NaN | NaN |
| true | NaN | NaN | NaN | NaN |
| false | NaN | NaN | NaN | NaN |
| if | Start all logic booleans with if, unless just using true/false | NaN | NaN | NaN |
| and | NaN | if self.isInWater() and self.energy(greaterThan=1) | NaN | NaN |
| or | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() | NaN | NaN |
| not | NaN | if not self.isOverLiquid() | NaN | NaN |
| NaN | Unit location and movement | NaN | NaN | NaN |
| self.isUnderwater() | NaN | NaN | NaN | NaN |
| self.isAtGroundHeight() | NaN | NaN | NaN | NaN |
| self.isFlying() | NaN | NaN | NaN | NaN |
| self.isMoving() | NaN | NaN | NaN | NaN |
| self.isAtTopSpeed() | NaN | NaN | NaN | NaN |
| self.isInWater() | Touching water | NaN | NaN | NaN |
| self.isOverwater() | Touching or over a water tile | NaN | NaN | NaN |
| self.isOverLiquid() | NaN | NaN | NaN | NaN |
| self.isOverClift() | NaN | NaN | NaN | NaN |
| self.isOverPassableTile() | (parameters: type) | NaN | NaN | NaN |
| self.isOverOpenLand() | shortcut for self.isOverPassableTile(type='LAND') | NaN | NaN | NaN |
| NaN | Unit stats | NaN | NaN | NaN |
| self.hasResources() | Can check multiple resources (all price parameters) | NaN | NaN | 1.13.3 |
| self.resource() | Checks a single resource (parameters: type, greaterThan, lessThan) | NaN | NaN | NaN |
| self.hp() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.ammo() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isAmmoEmpty() | shortcut for self.ammo(empty=true) | NaN | NaN | NaN |
| self.ammoIncludingQueued() | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) | NaN | NaN |
| self.energy() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.energyIncludingQueued() | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isEnergyFull() | shortcut for self.energy(full=true) | NaN | NaN | NaN |
| self.isEnergyEmpty() | shortcut for self.energy(empty=true) | NaN | NaN | NaN |
| self.shield() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.kills() | (parameters: greaterThan, lessThan) | NaN | NaN | NaN |
| self.queueSize() | NaN | NaN | NaN | 1.13.3 |
| NaN | Misc | NaN | NaN | NaN |
| game.nukesEnabled() | NaN | NaN | NaN | NaN |
| self.hasFlag() | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this vaule | NaN | NaN |
| self.tags() | (parameters: includes) | NaN | NaN | NaN |
| self.globalTeamTags() | (parameters: includes) | NaN | NaN | 1.13.3 |
| self.transportingCount() | (parameters: greaterThan, lessThan, empty) | NaN | NaN | NaN |
| self.numberOfAttachedUnits() | (withTag, greaterThan, lessThan) | NaN | NaN | NaN |
| self.isAttacking() | NaN | NaN | NaN | NaN |
| self.hasActiveWaypoint() | ([type=WAYPOINT\_TYPE]) | NaN | NaN | NaN |
| self.transportingUnitWithTags() | (parameters: includes) | self.transportingUnitWithTags(includes='human') | NaN | NaN |
| self.hasParent() | For attachments only (parameters: withTag='X') | NaN | NaN | NaN |
| self.hasTakenDamage() | (parameters: withinSeconds=X, laterThanSeconds=X) | self.hasTakenDamage(withinSeconds=1) | NaN | NaN |
| self.timeAlive() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.lastConverted() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.customTimer() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.isOnNeutralTeam() | NaN | NaN | NaN | NaN |
| numberOfUnitsInTeam() | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | NaN | NaN |
| numberOfUnitsInEnemyTeam() | NaN | NaN | NaN | 1.13.3 |
| numberOfUnitsInNeutralTeam() | UNTESTED! | NaN | NaN | NaN |
| self.hasUnitInTeam() | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN | 1.13.3 |
| self.noUnitInTeam() | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN | 1.13.3 |
| self.isControlledByAI() | NaN | NaN | NaN | 1.13.3 |
| Type | Built-in Prices/Resources Used in price/resource keys as values | NaN | NaN | NaN |
| Code | Description | Example | Targets | NaN |
| credits | Global resource | NaN | NaN | NaN |
| energy | NaN | NaN | NaN | NaN |
| hp | NaN | NaN | NaN | NaN |
| shield | NaN | price: hp=-100, shield=100 | NaN | NaN |
| ammo | Hidden value on each unit for use by mods | NaN | NaN | NaN |
| setFlag | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1 | NaN | NaN |
| unsetFlag | use with addResources, resourceUsage or price. 0-31 | NaN | NaN | NaN |
| hasFlag | use with price or resourceUsage | NaN | NaN | NaN |
| hasMissingFlag | use with price or resourceUsage | NaN | NaN | NaN |
| X | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=20 | NaN | 1.13.3 |
| Section | [global\_resource\_NAME] Sets a custom resource | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| NaN | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN | NaN | NaN |
| displayName | Name of this resource in UI | NaN | NaN | 1.13.3 |
| displayNameShort | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | NaN | NaN | 1.13.3 |
| hidden | Hide this resource from the player | NaN | bool | 1.13.3 |
| priority | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | NaN | NaN | 1.13.3 |
| displayColor | Color, can be hex with optional alpha | #FF0000 | color | 1.13.3 |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| Section | [resource\_NAME] Sets a custom resource | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| NaN | Define a new resource local to unit. Works like build-in ammo resource | NaN | NaN | NaN |
| displayName | Name of this resource in UI (eg hovering over unit info) | NaN | NaN | 1.13.3 |
| displayNameShort | NaN | NaN | NaN | 1.13.3 |
| hidden | Hide this resource from the player | NaN | NaN | 1.13.3 |
| equivalentGlobalResourceForAI | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | NaN | NaN | NaN |
| Section | [template\_NAME] Useful to copy keys from a section to several sections | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| NaN | Template sections can have any keys and have no effect by themselves. | NaN | NaN | 1.13.3 |
| NaN | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN | NaN | NaN |
| NaN | --All these below features can be used with any section not just templates-- | NaN | NaN | NaN |
| @copyFromSection | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection template\_name/action\_name/projectile\_name | NaN | 1.13.3 |
| @define X | Define a local variable within a section (best outside of template) | @define targetEffect: boom | NaN | NaN |
| @global X | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop | NaN | NaN |
| NaN | ${X} can be used to reference variables (can also be done outside of a template) | spawnEffects: effect\_${targetEffect} | NaN | 1.13.3 |
| NaN | ${section.key} can be used to reference another key (can also be done outside of a template) | addResources: credits=${ core.price \* 2 + 10 } | NaN | 1.13.3 |

## 1.15p4 beta
| Version | Section | Unnamed: 2 | [core] | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Added | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Necessary Code, will cause error if these are not included | NaN |
| NaN | NaN | NaN | name: | NaN |
| NaN | NaN | NaN | mass: | NaN |
| NaN | NaN | NaN | radius: | NaN |
| NaN | NaN | NaN | price: | NaN |
| NaN | NaN | NaN | maxHp: | NaN |
| NaN | #==== | #==== | Common Keys | NaN |
| NaN | name: | string | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 |
| NaN | altNames: | string(s) | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 |
| NaN | class: | string | Reserved for future use, must be CustomUnitMetadata by default. | class: CustomUnitMetadata |
| 1.13.3 | strictLevel: | float | Defaults to 0. 1 = Errors if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 |
| NaN | price: | int / price | The unit cost from builders/buildings. Defaults to credits if no resource type is used | price: 500, price: gold=5, stone=10 |
| NaN | mass: | int | The 'weight' of the unit, defines how it collides with other units, a greater value means it's tougher to push. | mass: 3000 |
| NaN | techLevel: | int | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 |
| NaN | buildSpeed: | float / s | Time it takes to build the unit. (may multiply with builder speed) | buildSpeed: 3s |
| NaN | radius: | int | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 |
| NaN | isBio: | bool | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true |
| NaN | isBug: | bool | Changes some death defaults, and sort order in Sandbox. | isBug: false |
| 1.13 | isBuilder: | bool | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true |
| 1.15 | streamingCost | price | Like price but paid for overtime while this unit is being queued or built. Construction or queue is paused if resources run out while building. | NaN |
| 1.15 | switchPriceWithStreamingCost | bool | Shortcut to set streamingCost to price value and clear price, add to all-units.template to quickly switch a mod over to streaming resources. | NaN |
| NaN | #==== | #==== | Unit Stats Keys | NaN |
| NaN | maxHp: | int | The max health for the unit. (will spawn with this value) | maxHp: 200 |
| NaN | selfRegenRate: | float | Passive self repair rate. | selfRegenRate: 0.01 |
| NaN | maxShield: | int | The max shield hitpoints of the unit. Can start with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 |
| NaN | startShieldAtZero: | bool | Unit starts with a 0 hitpoints shield on created if true. | startShieldAtZero: true |
| NaN | shieldRegen: | float | Passive shield regen rate. | shieldRegen: 0.15 |
| NaN | NaN | float | Defaults to 0. Energy that can be used as ammo for turrets, laser defense and actions. | energyMax: 1 |
| NaN | energyRegen: | float | Passive energy regen rate. | energyRegen: 0.001 |
| NaN | energyStartingPercentage: | float | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 |
| NaN | energyNeedsToRechargeToFull: | float | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true |
| NaN | energyRegenWhenRecharging | float | Regen rate while recharging. | NaN |
| 1.13 | armour: | int | Damage taken away from each hit. (not currently used in any vanilla units) | armour: 6 |
| 1.13 | armourMinDamageToKeep: | int | Min damage to keep from received damage. Defaults to 1. | armourMinDamageToKeep: 2 |
| 1.13.3 | borrowResourcesWhileAlive: | price | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 |
| 1.15 | borrowResourcesWhileBuilt: | price | Like borrowResourcesWhileAlive but doesn't take affect till built. Mostly useful for buildings like houses that have negative resources to add to the unit cap, etc. | borrowResourcesWhileBuilt: supplyCap = -10 |
| 1.13.3 | generation\_resources: | price | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 |
| 1.13.3 | generation\_active: | logicBoolean | Disables generation\_resources/credits when false. (logic\_boolean) | generation\_active: if not self.hp(lessThan=100) |
| NaN | generation\_credits: | int | Income unit creates. (credits only) | generation\_credits: 2 |
| NaN | generation\_delay: | int | How often generation\_resources/credits is added. Defaults to 40. (changing not recommended) | generation\_delay: 40 |
| NaN | #==== | #==== | UI and Graphics Keys | NaN |
| NaN | showInEditor: | bool | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false |
| NaN | displayText: | LocaleString | The unit name that the game shows to the player. | displayText: Custom Tank |
| 1.13 | displayText\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado |
| NaN | displayDescription: | LocaleString | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage |
| 1.13 | displayDescription\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero |
| NaN | displayLocaleKey: | string | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery |
| NaN | displayRadius: | int | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 |
| NaN | uiTargetRadius | int | Defaults to displayRadius value. Radius used when attacking/reclaiming/etc this unit | NaN |
| NaN | shieldRenderRadius: | int | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 |
| NaN | shieldDisplayOnlyDeflection: | bool | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true |
| NaN | shieldDeflectionDisplayRate: | float | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 |
| 1.13.3 | showOnMinimap: | bool | Defaults to true. Hide units on minimap if false. | showOnMinimap: false |
| 1.13.3 | showActionsWithMixedSelectionIfOtherUnitsHaveTag: | bool | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: true |
| 1.14 | showOnMinimapToEnemies | bool | Useful for stealth units | NaN |
| NaN | #==== | #==== | Building Only Keys | NaN |
| NaN | isBuilding: | bool | Defines if the unit is a building. | isBuilding: true |
| NaN | footprint: | ints | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 |
| NaN | constructionFootprint: | ints | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 |
| NaN | displayFootprint: | ints | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 |
| NaN | buildingSelectionOffset: | int | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 |
| NaN | buildingToFootprintOffsetX: | float | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 |
| NaN | buildingToFootprintOffsetY: | float | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 6 |
| NaN | placeOnlyOnResPool: | bool | Normally used for extractors, forces building construction in a resource pool. | placeOnlyOnResPool: true |
| NaN | selfBuildRate: | float | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 |
| 1.14 | ignoreInUnitCapCalculation | NaN | defaults to true for buildings otherwise false. Set to true to not count this unit in unit cap. | NaN |
| NaN | #==== | #==== | Misc Keys | NaN |
| NaN | copyFrom: | file(s) (ini) | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini |
| NaN | dont\_load: | bool | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true |
| NaN | overrideAndReplace: | string(s) | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer |
| 1.13.3 | onNewMapSpawn: | string | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam, spawnPoint\_eachActiveTeam | NaN |
| NaN | globalScale: | float | Defaults to 1. Changing not recommended. | globalScale: 2 |
| NaN | isLocked: | bool | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true |
| 1.13 | isLockedIfGameModeNoNuke: | bool | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true |
| NaN | experimental: | bool | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true |
| NaN | stayNeutral: | bool | Set to false to disable capture when unit is on the neutral team. | stayNeutral: false |
| 1.13 | createNeutral: | bool | Set to true to always spawn the unit on the neutral team. | createNeutral: true |
| NaN | createOnAggressiveTeam: | bool | Set to true to always spawn the unit on aggressive teams on single player matches. | createOnAggressiveTeam: true |
| 1.13 | tags: | string(s) | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage |
| 1.15 | defineUnitMemory | NaN | creates variables for custom storage unique to each unit. Allowed types: boolean, float/number, unit, string | defineUnitMemory: boolean nukeActive, boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText\n |
| NaN | fogOfWarSightRange: | int | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 18 |
| 1.14 | fogOfWarSightRangeWhileNotBuilt | int | Fog of War range when unit/building is incomplete. Defaults to fogOfWarSightRange | NaN |
| NaN | softCollisionOnAll: | int | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 |
| NaN | disableAllUnitCollisions: | bool | Unit cannot collide with others if true. | disableAllUnitCollisions: true |
| 1.13 | isUnrepairableUnit: | bool | No unit can repair this unit if true. | isUnrepairableUnit: true |
| NaN | isUnselectable: | bool | If true unit cannot be selected. (includes AI players) | isUnselectable: true |
| 1.14 | isUnselectableAsTarget | bool | Defaults to isUnselectable. Can be used to create units that cannot be selected but can be targeted for attack, reclaim, etc | NaN |
| 1.13 | isPickableStartingUnit: | bool | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true |
| 1.13 | startFallingWhenStartingUnit: | bool | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true |
| NaN | soundOnAttackOrder: | sound(s) | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg |
| NaN | soundOnMoveOrder: | sound(s) | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg |
| 1.13.3 | soundOnNewSelection: | sound(s) | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg |
| NaN | canNotBeDirectlyAttacked: | bool | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. | canNotBeDirectlyAttacked: true |
| NaN | canNotBeDamaged | bool | Defaults to value of canNotBeDirectlyAttacked (be careful setting this without canNotBeDirectlyAttacked, as AI will attack forever) | NaN |
| 1.13.3 | canNotBeGivenOrdersByPlayer: | bool | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true |
| 1.13.3 | canOnlyBeAttackedByUnitsWithTags: | strings(s) | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank |
| 1.14 | disableDeathOnZeroHp | bool | Setting to true allows unit to continue living even at 0 HP, useful for custom "death" action. Warning: If not used with an autoTrigger, etc units will attack this unit forever. | NaN |
| NaN | #==== | #==== | Transport Keys | NaN |
| 1.13 | transportSlotsNeeded: | int | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 |
| NaN | maxTransportingUnits | int | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 |
| 1.13 | transportUnitsRequireTag: | string(s) | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier |
| 1.13 | transportUnitsRequireMovementType: | movementTypes | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER |
| 1.13 | transportUnitsBlockAirAndWaterUnits: | bool | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false |
| NaN | NaN | NaN | NaN | NaN |
| 1.13 | transportUnitsKeepBuiltUnits: | bool | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true |
| 1.13 | transportUnitsCanUnloadUnits: | LogicBoolean | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false |
| 1.13 | transportUnitsAddUnloadOption: | bool | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false |
| 1.13.3 | transportUnitsUnloadDelayBetweenEachUnit: | float | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 |
| 1.13 | transportUnitsKillOnDeath: | LogicBoolean | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() |
| 1.13 | transportUnitsHealBy: | float | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 |
| NaN | transportUnitsBlockOtherTransports: | bool | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false |
| 1.13.3 | whileNeutralTransportAnyTeam: | bool | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true |
| 1.13.3 | whileNeutralConvertToTransportedTeam: | bool | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true |
| 1.13.3 | convertToNeutralIfNotTransporting: | bool | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true |
| 1.13.3 | transportUnitsOnTeamChangeKeepCurrentTeam: | bool | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true |
| NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | #==== | #==== | Resource Node Keys | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | resourceRate: | float | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | NaN |
| NaN | similarResourcesHaveTag: | string(s) | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource |
| 1.13.3 | resourceMaxConcurrentReclaimingThis: | int | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 |
| 1.13.3 | reclaimPrice: | int | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 |
| 1.13.3 | #==== | #==== | Resource Harvester Keys | NaN |
| NaN | canReclaimResources: | bool | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true |
| NaN | canReclaimResourcesNextSearchRange: | int | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 |
| NaN | canReclaimResourcesOnlyWithTags: | string(s) | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource |
| NaN | canReclaimUnitsOnlyWithTags | string(s) | This is for reclaiming units, not for resources. See canReclaimResourcesOnlyWithTags | NaN |
| NaN | #==== | #==== | Construction and Factory Keys | NaN |
| NaN | canRepairUnitsOnlyWithTags | string(s) | NaN | NaN |
| NaN | canRepairBuildings: | bool | Can this can heal ally buildings (isBuilder:true is required) | canRepairBuildings: true |
| NaN | canRepairUnits: | bool | Can this can heal ally units. (isBuilder:true is required), canRepairBuildings required for buildings. | canRepairUnits: true |
| NaN | autoRepair: | bool | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true |
| NaN | nanoRange: | int | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 |
| NaN | nanoRepairSpeed: | float | Defaults to 0.2. Defines the unit nano repair/reclaim speed. | nanoRepairSpeed: 0.01 |
| NaN | nanoBuildSpeed: | float | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 |
| 1.13.3 | nanoRangeForRepairIsMelee: | bool | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true |
| 1.13.3 | nanoRangeForReclaimIsMelee: | bool | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true |
| 1.13.3 | nanoRangeForRepair: | int | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 |
| 1.13.3 | nanoRangeForReclaim: | int | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 |
| NaN | nanoFactorySpeed: | float | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 |
| NaN | extraBuildRangeWhenBuildingThis: | int | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 |
| NaN | builtFrom\_#\_name: | string(s) | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory |
| NaN | builtFrom\_#\_pos: | float | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 |
| NaN | builtFrom\_#\_forceNano: | bool | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true |
| 1.13.3 | builtFrom\_#\_isLocked: | LogicBoolean | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) |
| 1.13.3 | builtFrom\_#\_isLockedMessage: | LocaleString | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population |
| NaN | exit\_x: | float | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 |
| NaN | exit\_y: | float | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 |
| 1.13 | exit\_dirOffset: | float | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 |
| 1.13 | exit\_heightOffset: | float | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 |
| 1.13 | exit\_moveAwayAmount: | float | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 |
| 1.14 | exitHeightIgnoreParent | bool | Ignores parent height for exit height; useful for separating attachments with their parents for building | NaN |
| NaN | #==== | #==== | Death Keys | NaN |
| NaN | dieOnConstruct: | bool | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true |
| 1.13 | dieOnZeroEnergy: | bool | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true |
| NaN | numBitsOnDeath: | int | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 |
| NaN | nukeOnDeath: | bool | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true |
| NaN | nukeOnDeathRange: | float | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 |
| NaN | nukeOnDeathDamage: | float | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 |
| NaN | nukeOnDeathDisableWhenNoNuke: | bool | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true |
| NaN | fireTurretXAtSelfOnDeath: | turret ref | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: turret\_1 |
| 1.13 | explodeOnDeath: | bool | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false |
| 1.13 | explodeOnDeathGroundCollision: | boolean | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false |
| 1.14 | explodeTypeOnDeath: | preset effects | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding | NaN |
| 1.13 | effectOnDeath: | effect(s) ref | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound |
| 1.13 | effectOnDeathGroundCollision: | effect(s) ref | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion |
| 1.13 | unitsSpawnedOnDeath: | string(s) | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | bool | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true |
| NaN | hideScorchMark: | bool | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true |
| NaN | soundOnDeath: | string(s) | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg |
| 1.14 | effectOnDeathIfUnbuilt: | effect(s) ref | If the unit was not completed, and is destroyed, play this effect. Defaults to effectOnDeath | effectOnDeathIfUnbuilt: CUSTOM:implode |
| NaN | #==== | #==== | Action Keys | NaN |
| 1.13.3 | autoTriggerCooldownTime: | time (seconds) | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | NaN |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU: | bool | Allows for auto actool cooldown lower than 0.2s. Default to false. | NaN |
| 1.15 | autoTriggerCheckRate | enum | options: everyFrame (default), every4Frames, every8Frames. Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN |
| depr. 1.13 | action\_#\_convertTo: | string | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 |
| depr. 1.13 | action\_#\_pos: | float | Order action appears in UI | action\_1\_pos: 0.1 |
| depr. 1.13 | action\_#\_price: | int | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 |
| depr. 1.13 | action\_#\_text: | string | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 |
| depr. 1.13 | action\_#\_description: | string | The action description. | action\_1\_description: -Converts the tank |
| depr. 1.13 | action\_#\_addEnergy: | float | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 |
| depr. 1.13 | action\_#\_whenBuilding\_cannotMove: | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true |
| depr. 1.13 | canBuild\_#\_name/pos/isLocked: | string | Use canBuild section instead. | canBuild\_1\_name: tank |
| NaN | Section | NaN | [canBuild\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | name: | string(s) | List of unit identifiers this unit can create. Can be buildings or units. Add "setRally" to create a rally button | name: setRally, tank, hoverTank, heavyTank |
| 1.13.3 | pos: | float | Order build link appears in this unit UI. | pos: 0.1 |
| 1.13.3 | tech: | int | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 |
| 1.13.3 | forceNano: | bool | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true |
| 1.13.3 | isVisible: | LogicBoolean | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) |
| 1.13.3 | isLocked: | LogicBoolean | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) |
| 1.13.3 | isLockedMessage: | string | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks |
| 1.13.3 | isLockedMessage\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles |
| 1.13.3 | isLockedAlt: | LogicBoolean | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) |
| 1.13.3 | isLockedAltMessage: | string | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy |
| 1.13.3 | isLockedAlt2: | LogicBoolean | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() |
| 1.13.3 | isLockedAlt2Message: | string | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet |
| 1.13.3 | addResources: | price(s) | Adds these resources to self when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 |
| 1.13.3 | price: | price(s) | Overrides builded units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 |
| 1.13.3 | isGuiBlinking: | LogicBoolean | Generates a blinking effect in UI if true. | isGuiBlinking: true |
| NaN | Section | NaN | [graphics] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Necessary code | NaN |
| NaN | NaN | file (image) | image: | NaN |
| NaN | #==== | NaN | Common Keys | NaN |
| NaN | image: | file (image) | File path to png image. | NaN |
| NaN | image\_back: | file (image) | An optional image drawn behind other units. Useful for factories that units exit | NaN |
| 1.14 | image\_shield | file (image) | Image to show as a custom shield | NaN |
| NaN | image\_wreak: | file (image) | Image to use when unit dies. Can be NONE to leave no wreak | NaN |
| NaN | image\_offsetX: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN |
| NaN | image\_offsetY: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN |
| 1.13.3 | isVisible | logic | If false will hide the unit. | NaN |
| 1.14 | isVisibleToEnemies | bool | Only visible to player and allies when false. Recommend with showOnMinimapToEnemies. Useful for stealth units. | NaN |
| 1.13 | teamColoringMode | NaN | How pixels are used for team coloring, options: pureGreen (default), hueAdd, hueShift, disabled | NaN |
| NaN | teamColorsUseHue: | bool | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN |
| NaN | scaleImagesTo: | float | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | NaN |
| NaN | imageScale: | float | Resize image. Defaults to 1. Effects leg, and shadow images as well. | NaN |
| NaN | drawLayer: | string | Land units normally default to ground or ground2 if transport. | wreaks, underwater, bottom, ground, ground2, experimentals, air, top |
| 1.13 | whenBeingBuiltMakeTransparentTill | float | How long the transparent effect is applied to incomplete units, set to 0 to disable completely | Default: 1 |
| NaN | icon\_zoomed\_out | file (image) | NaN | NaN |
| NaN | icon\_zoomed\_out\_neverShow | bool | NaN | NaN |
| NaN | #==== | NaN | Turrets (images can also be set on each turret) | NaN |
| NaN | image\_turret: | file (image) | Default image for all turrets, can also be set per turret | NaN |
| NaN | teamColorsOnTurret | bool | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | NaN |
| NaN | scaleTurretImagesTo: | float | Will cause crash if image\_turret is not specified, even if image is set per turret | NaN |
| NaN | lock\_body\_rotation\_with\_main\_turret: | bool | Locks body image locked to first turret's direction | NaN |
| 1.13 | lock\_leg\_rotation\_with\_main\_turret | bool | Locks legs and arms to first turret's direction | NaN |
| NaN | #==== | NaN | Shadow | NaN |
| NaN | image\_shadow: | file (image) | Image file, NONE, or AUTO. (AUTO will use image and make it transparent black only.) | NaN |
| NaN | shadowOffsetX: | float | NaN | NaN |
| NaN | shadowOffsetY: | float | NaN | NaN |
| 1.13.3 | image\_shadow\_frames | bool | If shadow image should use frame animation of main image | NaN |
| NaN | lock\_shadow\_rotation\_with\_main\_turret: | bool | Locks body image shadow locked to first turret's direction | NaN |
| NaN | #==== | NaN | Effects and animation | NaN |
| NaN | total\_frames | int | Defaults to 1. Animations require this. | NaN |
| NaN | frame\_width: | int | Calculated for you if total frames is set, but can be overridden | NaN |
| NaN | frame\_height: | int | Defaults to image height | NaN |
| NaN | splastEffect: | bool | True to create a water wave effect when over water. Default false | NaN |
| NaN | dustEffect: | bool | True to create a dust effect when over land. Default false | NaN |
| NaN | splastEffectReverse: | bool | True to also create effect when unit is reversing | NaN |
| NaN | dustEffectReverse: | bool | True to also create effect when unit is reversing | NaN |
| 1.13 | movementEffect | effect | Custom movement effect, can be anything | eg: movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 |
| 1.13 | movementEffectReverse | effect | NaN | NaN |
| 1.13 | movementEffectRate | float | NaN | NaN |
| 1.13 | movementEffectReverseFlipEffects | bool | Create effect as if unit has rotated 180 when reversing | NaN |
| NaN | repairEffect | effect ref | Custom movement effect, can be anything. Replaces default effect from builders | NaN |
| NaN | repairEffectAtTarget | effect | NaN | NaN |
| NaN | repairEffectRate | int | Defaults to 5 | NaN |
| 1.13.3 | reclaimEffect | effect | NaN | NaN |
| 1.13.3 | reclaimEffectAtTarget | effect | NaN | NaN |
| 1.13.3 | reclaimEffectRate | int | NaN | NaN |
| NaN | rotate\_with\_direction: | bool | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN |
| NaN | animation\_direction\_units: | float | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN |
| NaN | animation\_direction\_strideX: | int | Animation frames to offset on direction change. | NaN |
| NaN | animation\_direction\_strideY: | int | Animation frames to offset on direction change. Used with frame\_height. | NaN |
| NaN | animation\_direction\_starting: | float | Direction for first frame | NaN |
| 1.13.3 | disableLowHpFire | bool | NaN | NaN |
| 1.13.3 | disableLowHpSmoke | NaN | NaN | NaN |
| 1.13.3 | showTransportBar: | bool | NaN | NaN |
| 1.13.3 | showHealthBar | bool | NaN | NaN |
| 1.13.3 | showEnergyBar | bool | NaN | NaN |
| 1.14 | showShieldBar | bool | NaN | NaN |
| 1.14 | showQueueBar | bool | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better, more adaptable ways) | NaN |
| depr. 1.13 | animation\_TYPE\_start: | int | TYPE can be set to: attack, moving, idle. Use [animation] section instead for more control | animation\_moving\_start: 0 |
| depr. 1.13 | animation\_TYPE\_end: | int | End frame, must be larger then start | animation\_moving\_end: 3 |
| depr. 1.13 | animation\_TYPE\_scale\_start: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_end: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_speed: | float | Delay for each frame of animation. Larger values cause slower animation | NaN |
| depr. 1.13 | animation\_TYPE\_pingPong: | bool | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN |
| NaN | Section | NaN | [attack] | The attack section is for global attack characteristics, per-turret overrides these |
| NaN | Code | Value Type | Description | Example |
| NaN | canAttack: | bool | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | can also be narrowed per turret. Note: not required if canAttack is false. | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | can also be narrowed per turret | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | can also be narrowed per turret | NaN |
| NaN | maxAttackRange: | float | (multiplied by globalScale) | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | Will only attack units that has the specified tags. | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | Can only attack units without the specified tags. | NaN |
| 1.13 | turretMultiTargeting | bool | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | NaN |
| NaN | isMelee: | bool | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN |
| 1.13.3 | meleeEngangementDistance | int | Makes unit move to attack nearby units. Defaults to 250 for melee, and 0 for non melee (Works even if non-melee, but might be unexpected to players) | NaN |
| NaN | turretRotateWithBody | bool | Are all turrets rotated when body rotates. Defaults to true | NaN |
| NaN | attackMovement: | string | normal/bomber. bomber attack movement will retreat when energy runs out | NaN |
| NaN | dieOnAttack: | bool | Will die when it attacks. | NaN |
| NaN | isFixedFiring: | bool | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN |
| NaN | aimOffsetSpread: | float | Offset each shot multiplied by target radius. Defaults to 0.6 | aimOffsetSpread:0 will make unit always attack center |
| 1.13 | stopTargetingAfterFiring | bool | Unit stops targeting after firing a shot. Rarely used or needed. | NaN |
| NaN | disablePassiveTargeting: | bool | Unit only attacks manually ordered target. Rarely used or needed. | NaN |
| 1.13.3 | showRangeUIGuide | bool | Will it show the range indicator. Useful for showing ranges in radar and related structures. | NaN |
| 1.15 | shootDelayMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | NaN |
| 1.15 | shootDamageMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | NaN |
| NaN | NaN | NaN | Deprecated Keys - can be used but better to set these per turret | NaN |
| depr. 1.13 | turretSize: | float | (multiplied by globalScale) | NaN |
| depr. 1.13 | turretTurnSpeed: | float | NaN | NaN |
| depr. 1.13 | shootDelay: | float | Global delay, can also use delay on each turret | NaN |
| NaN | Section | NaN | [turret\_NAME] | Turrets fire projectiles with different traits |
| NaN | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Necessary Code | NaN |
| NaN | NaN | float | x: | NaN |
| NaN | NaN | float | y: | NaN |
| NaN | NaN | NaN | Positioning/Stats | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | x: | float | NaN | NaN |
| NaN | y: | float | NaN | NaN |
| NaN | copyFrom: | turret ref | Copy all values from another turret as defaut values for this turret | copyFrom: 1 |
| NaN | projectile | projectile ref | Projectile fired from this turret. | eg: projectile: torpedo |
| NaN | altProjectile | projectile ref | Alternative projectile fired from this turret when altProjectileCondition is true | NaN |
| NaN | altProjectileCondition | LogicBoolean | Used with altProjectile | NaN |
| 1.13 | barrelX | float | Defaults to 0. Controls horizontal position for projectile spawn. | NaN |
| 1.13 | barrelY | float | Defaults to size. Note: size and barrelY have the same meaning | NaN |
| 1.13.3 | barrelHeight | float | Height of barrel in 3d. Effect projectile and shoot flame starting height | NaN |
| NaN | size: | float | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 |
| NaN | turnSpeed | float | Max turn speed of the turret | NaN |
| NaN | turnSpeedAcceleration | float | Defaults to disabled, and full turn speed is used. | NaN |
| NaN | turnSpeedDeceleration | float | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | NaN |
| NaN | idleDir | float | Defaults to 0 | NaN |
| 1.13 | idleDirReversing | float | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | NaN |
| NaN | shouldResetTurret: | bool | Defaults true. False to disable the reseting turret angle when idle | NaN |
| 1.14 | idleSweepAngle | int | Disabled by default. Controls how far the turret will "look" left and right | NaN |
| 1.14 | idleSweepDelay | float | Controls the delay between idleSweep movements | NaN |
| 1.14 | idleSweepSpeed | float | Controls the speed with which the turret sweeps when idle | NaN |
| 1.14 | idleSweepCondition | LogicBoolean | Disable idle sweep if false | NaN |
| 1.14 | idleSweepAddRandomDelay | float | Default 1-20 depends on idleSweepDelay, used to stop sweep syncing up with other units | NaN |
| 1.14 | idleSweepAddRandomAngle | int | Default 0 | NaN |
| NaN | attachedTo: | turret ref | Id of another turret to attach to, will be positioned relative to it, and rotate with it. | NaN |
| NaN | slave: | bool | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN |
| NaN | isMainNanoTurret: | bool | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN |
| NaN | energyUsage: | float | Required energy to fire weapon. Same as resourceUsage: energy=X | NaN |
| NaN | resourceUsage | price | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | NaN | NaN | Timing | NaN |
| NaN | delay: | float | Override global shootDelay for this turret | NaN |
| NaN | linkDelayWithTurret | turret ref | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN |
| NaN | warmup: | float | Delay before firing a shot. | NaN |
| NaN | warmupCallDownRate | float | Rate to reduce warmup when turret is not ready to fire at any targets | NaN |
| NaN | warmupNoReset | bool | Defaults to false. When true warmup is not reset after firing a shot and turret doesn't wait for warnup. Used with warmupCallDownRate and warmupShootDelayTransfer. | NaN |
| NaN | warmupShootDelayTransfer | float | Defaults to 0, amount to reduces the next shot delay depending on warmup. When used with warmupNoReset, can make a each shot faster. | NaN |
| NaN | NaN | NaN | On Shoot | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | NaN | Freezes body movement while shooting. | NaN |
| 1.14 | barrelOffsetX\_onOddShots: | float | 0 by default. Sets a barrelX offset only during odd numbered shots, useful for twin-barreled units. Use with barrelX | NaN |
| NaN | NaN | NaN | Targeting control | NaN |
| 1.14 | aimOffsetSpread | NaN | NaN | NaN |
| NaN | canShoot: | bool | Defaults to true | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | NaN | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | NaN | NaN |
| NaN | canAttackCondition: | LogicBoolean | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying |
| 1.14 | canAttackMaxAngle | float | Max angle to target for turret to be allowed for fire. Defaults to 5, don't set lower. Can be set to 181 for turrets that don't need to turn to fire missiles. | NaN |
| 1.13 | clearTurretTargetAfterFiring | bool | Clears the turrets sub-target when using multi-targeting | NaN |
| NaN | limitingRange: | float | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN |
| 1.13 | limitingAngle | NaN | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN |
| 1.13 | limitingMinRange | NaN | Sets minimum range for turret. | limitingMinRange: 200 |
| 1.13 | interceptProjectiles\_withTags | NaN | Currently used with anti-nuke units. | NaN |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN |
| NaN | interceptProjectiles\_andUnderDistance | NaN | Defaults to 2000, distance inflight before firing | NaN |
| NaN | interceptProjectiles\_andOverHeight | NaN | Defaults to 0 | NaN |
| 1.14 | interceptProjectile\_removeTargetLifeOnly | bool | Defaults to false. When false projectiles are just removed. Could be true to make hit projectiles explode or split when hit | NaN |
| NaN | laserDefenceEnergyUse: | float | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN |
| NaN | invisible: | LogicBoolean | Don't render this turret, but still can shoot, etc. | NaN |
| NaN | image: | file (image) | Use custom image. Overrides unit's main turret image | NaN |
| NaN | image\_applyTeamColors | bool | NaN | NaN |
| NaN | image\_drawOffsetX | float | NaN | NaN |
| NaN | image\_drawOffsetY | float | NaN | NaN |
| NaN | chargeEffectImage:\n | file (image) | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN |
| NaN | warmupStartEffect | effect ref | NaN | NaN |
| NaN | shoot\_sound: | string | Can be linked to an .ogg or .wav file, or one of the default game sounds (list at bottom of reference) | shoot\_sound: tank\_firing | shoot\_sound: missile.wav | shoot\_sound: ROOT:audio/shoot.ogg |
| NaN | shoot\_sound\_vol: | float | NaN | NaN |
| NaN | shoot\_flame: | effects | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 |
| NaN | shoot\_light | color | NaN | NaN |
| NaN | idleSpin: | float | Spin rate when idle, used on missile turrets | NaN |
| 1.13 | onShoot\_playAnimation | animation ref | Play a custom animation from an [animation] section after firing this turret | NaN |
| 1.14 | onShoot\_triggerActions | action refs | Trigger these actions each time this turret fires | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | time | NaN | NaN |
| 1.15 | unloadUpToXUnitsAndGiveAttackOrder | int | Unloads X units at turret barrel locations and gives them the attack order of turret target | NaN |
| NaN | recoilOffset | float | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN |
| NaN | recoilOutTime | float | Time to get to offset position after firing | NaN |
| NaN | recoilReturnTime | float | Time to return to default position | NaN |
| 1.13.3 | showRangeUIGuide | bool | NaN | NaN |
| NaN | Section | NaN | [projectile\_NAME] | Projectiles are necessary to inflict damage on an enemy, but can also be used for other purposes |
| NaN | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Necessary Code | NaN |
| NaN | NaN | int | directDamage: or areaDamage: | NaN |
| NaN | NaN | NaN | life: | NaN |
| NaN | NaN | NaN | Core | NaN |
| NaN | life: | NaN | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN |
| NaN | deflectionPower: | float | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN |
| 1.13 | explodeOnEndOfLife | bool | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing. Good for making area-denial weapons. | NaN |
| NaN | autoTargetingOnDeadTarget: | bool | Retarget to nearby unit if target dies while in transit | NaN |
| 1.14 | autoTargetingOnDeadTargetRange | int | The range which it will select a new target if old target has died | NaN |
| 1.14 | autoTargetingOnDeadTargetLead | float | The lead it will try to have on the new target | NaN |
| 1.13 | unloadUpToXUnitsFromSource | int | Unload X units from source unit, to projectile explode location | NaN |
| 1.13 | teleportSource | bool | Move unit that shot this projectile to projectile explode location | NaN |
| 1.13 | spawnUnit | unit types | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank(offsetX=10) |
| 1.14 | spawnProjectilesOnEndOfLife | projectile ref | Spawns new projectiles on end of life, useful for secondary projectiles | spawnProjectilesOnEndOfLife: torpedo\_split(offsetDir=90), torpedo\_split(offsetDir=-90)\n |
| 1.14 | spawnProjectilesOnExplode | projectile ref | Projectiles to spawns when this projectile hits it's target | NaN |
| 1.14 | spawnProjectilesOnCreate | NaN | Spawns projectiles on creation of this projectile, useful for making true shotgun-like projectile spread | NaN |
| 1.13.3 | convertHitToSourceTeam | bool | Convert units hit to the team that fired this projectile. Useful to make capturing systems | NaN |
| 1.13 | tags | tags | Useful for projectile interceptions (e.g. Nuke and Anti-Nuke Interaction) | NaN |
| NaN | flameWeapon: | bool | Generates small flames on hit (only cosmetic) | NaN |
| NaN | NaN | NaN | Damage | NaN |
| NaN | directDamage: | int | Damage to target unit on hit. Does not work with targetGround:true as it won't have a clear unit to target | NaN |
| NaN | areaDamage: | int | Damages on arrival of target with an area effect, use areaRadius to adjust size of damage. targetGround needs this to damage | NaN |
| 1.13 | areaRadius: | float | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | NaN |
| NaN | areaDamageNoFalloff | bool | Removes the falloff from areaDamage | NaN |
| NaN | areaRadiusFromEdge | bool | Applies damage from edge of units instead of center. Mostly effects large units. | NaN |
| 1.13 | areaExpandTime | float | Applies area damage as an expanding blast wave rather than instantly. Useful for nuke projectiles | NaN |
| 1.13 | areaHitAirAndLandAtSameTime | bool | Defaults to false | NaN |
| NaN | areaHitUnderwaterAlways | bool | Defaults to false | NaN |
| NaN | areaIgnoreUnitsCloserThan | int | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | NaN |
| 1.13 | buildingDamageMultiplier | float | Defaults to 1 | NaN |
| 1.13 | shieldDamageMultiplier | float | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage |
| 1.13 | shieldDefectionMultiplier | float | Defaults to 1. The amount of shield to bypass | eg: 0 to ignore shields and directly damage hull |
| 1.14 | hullDamageMultiplier | float | Defaults to 1. Can be used to create EMP weapons that affect shields only | eg: 0 to ignore hull and only damage shields |
| 1.15 | ignoreParentShootDamageMultiplier | bool | NaN | NaN |
| NaN | armourIgnoreAmount | int | Amount of armour to ignore on target and do damage as if this armour was not there | NaN |
| 1.13 | friendlyFire | bool/string | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy |
| 1.13.3 | mutatorX\_ifUnitWithTags | tags | Applies mutators to this projectile if target has corresponding tags | eg: mutator1\_ifUnitWithTags: infantry |
| 1.13.3 | mutatorX\_ifUnitWithoutTags | tags | Same as ifUnitWithTags, but applies if target doesn't have the set tags | eg: mutator1\_ifUnitWithoutTags: strongArmour |
| 1.13.3 | mutatorX\_directDamageMultiplier | float | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible | NaN |
| 1.13.3 | mutatorX\_areaDamageMultiplier | float | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | NaN |
| 1.13.3 | mutatorX\_changedExplodeEffect | effect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | NaN |
| 1.14 | mutatorX\_addResourcesDirectHit | resource | Add resource to all hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | NaN |
| 1.14 | mutatorX\_addResourcesAreaHit | resource | NaN | NaN |
| NaN | NaN | NaN | Movement | NaN |
| NaN | targetGround | bool | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN |
| 1.14 | targetGround\_includeTargetHeight | bool | Default false. for area affect AA weapons | NaN |
| 1.14 | targetGroundHeightOffset | float | Default 0. for shooting over or under a target. Useful for projectiles that split and rain down. | NaN |
| NaN | speed: | float | Projectile default travel speed | NaN |
| NaN | targetSpeed: | float | Accelerate to this speed | NaN |
| 1.13 | targetSpeedAcceleration | float | Controls the speed rampup for targetSpeed | NaN |
| NaN | ballistic: | bool | Makes projectiles fly up into the air and come down, instead of going in a straight line | NaN |
| NaN | ballistic\_delaymove\_height: | float | NaN | NaN |
| NaN | ballistic\_height: | float | NaN | NaN |
| NaN | targetGroundSpread: | float | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN |
| NaN | speedSpread: | float | Randomly change the starting projectile speed by this amount | NaN |
| NaN | instant | bool | Hit target instantly | NaN |
| NaN | instantReuseLast: | bool | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN |
| 1.14 | instantReuseLast\_alsoChangeTurretAim | bool | Make turret's aim include last projectile's spread and sweep offsets, useful for beam weapons | NaN |
| 1.14 | instantReuseLast\_keepAreaDamageList | bool | Default false. Keeping the list was the normal behaviour in 1.13 making area damage not apply a second time but this is not useful. Use this only if you want the old behaviour. | NaN |
| 1.13 | disableLeadTargeting | bool | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | NaN |
| 1.13 | leadTargetingSpeedCalculation | float | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | NaN |
| 1.13.3 | initialUnguidedSpeedHeight | NaN | Sets vertical speed for projectiles with targetGround. Use gravity to make smooth arching projectiles | NaN |
| 1.13.3 | gravity: | NaN | Controls the pull for projectiles that target ground. Use together with initialUnguidedSpeedHeight | NaN |
| 1.14 | turnSpeed | float | Limits the turn speed of a projectile, making them inaccurate even with directDamage | NaN |
| 1.14 | wobbleAmplitude | float | How wide the projectile will wobble | NaN |
| 1.14 | wobbleFrequency | float | How often the projectile will wobble | NaN |
| 1.14 | pushForce | float | Push (or pull with a negative value) the units that get hit. Divided by target mass | NaN |
| 1.14 | pushVelocity | float | Push (or pull with a negative value) the units that get hit. Ignores target mass | NaN |
| 1.14 | moveWithParent | bool | Move projectile as parent moves. Useful for beam effects that need to stick to source turret. | NaN |
| 1.14 | sweepOffset | float | Useful for beam effects. | NaN |
| 1.14 | sweepOffsetFromTargetRadius | float | Add to sweep offset by factor of target's radius. 0.4 would be 40% | sweepOffsetFromTargetRadius: 0.4 |
| 1.14 | sweepSpeed | float | Useful for beam effects. | NaN |
| 1.14 | retargetingInFlight | bool | Can retarget a new target mid-flight, perfect for flak-style weapons and projectiles that collide | NaN |
| 1.14 | retargetingInFlightSearchDelay | float/time | How long between searching for new targets. Default 5 | NaN |
| 1.14 | retargetingInFlightSearchRange | int | Range which targets are reselected. Default 120 | NaN |
| 1.14 | retargetingInFlightSearchLead | float | The lead of the projectile to try to hit the target. Default 15 | NaN |
| 1.14 | retargetingInFlightSearchOnlyTags | tag ref | Only retarget units with these tags | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN |
| NaN | color | color | Recolors this projectile using a hex value. | color: #bebe50 |
| 1.13.3 | invisible | bool | NaN | NaN |
| NaN | image: | file (image) | Use custom image. Overrides drawType and frame | NaN |
| NaN | drawType | int | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 |
| NaN | drawSize: | float | Scale image. Defaults to 1 | NaN |
| NaN | frame | int | Built-in image frame to use, starts at zero. | NaN |
| NaN | hitSound: | bool | Default true | NaN |
| 1.13 | explodeEffect | effect ref list | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect |
| 1.13 | explodeEffectOnShield | effect ref list | Use this effect if shield is active on target | NaN |
| 1.13 | teamColorRatio | float | Mix 0-1 of team colour into color field | NaN |
| 1.14 | teamColorRatio\_sourceRatio | float | default is (1-teamColorRatio). Keep more of color when mixing. Note this might saturate colors. | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN |
| 1.13 | effectOnCreate | effect ref list | NaN | NaN |
| 1.13 | shouldRevealFog | bool | Reveal fog to player on explode | NaN |
| 1.13 | alwaysVisibleInFog | bool | NaN | NaN |
| 1.13 | nukeWeapon | bool | Shows on mini-map when fired. Some other side effects as well. | NaN |
| NaN | trailEffect | bool/effect | true for built-in defaults, but can also point to any custom effects | NaN |
| 1.13 | trailEffectRate | float | Defaults to 3 | NaN |
| NaN | lightCastOnGround | bool | NaN | NaN |
| NaN | lightSize: | float | NaN | NaN |
| NaN | lightColor | color | NaN | lightColor: #ffe92b |
| NaN | largeHitEffect: | bool | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN |
| NaN | lightingEffect: | bool | Draw as lighting works best with instant:true | NaN |
| NaN | laserEffect: | bool | Draw as laser works best with instant:true | NaN |
| 1.14 | beamImage | file (image) | Image to use for laserEffect | NaN |
| 1.14 | beamImageOffsetRate | float | NaN | NaN |
| 1.14 | beamImageStart | int | Frame start of beam animationeffect | NaN |
| 1.14 | beamImageStartRotated | bool | Defaults false. True to rotate with turret angle | NaN |
| 1.14 | beamImageEnd | int | Frame end of beam animation effect | NaN |
| 1.14 | beamImageEndRotated | bool | Defaults false | NaN |
| NaN | Section | NaN | [movement] | These are traits the unit has as far as movement goes, such as rotation and acceleration speed |
| NaN | Code | Value Type | Description | Example |
| NaN | movementType: | string | Defines what kind of terrain the unit will be able to move, along with other properties of unit types. | movementType: LAND |
| NaN | slowDeathFall: | bool | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true |
| NaN | moveSpeed: | float | Maximum movement speed of the unit. | moveSpeed: 1.2 |
| NaN | moveAccelerationSpeed: | float | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 |
| NaN | moveDecelerationSpeed: | float | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 |
| NaN | reverseSpeedPercentage: | float | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 |
| NaN | landOnGround: | bool | Should flying unit land when idle. | landOnGround: false |
| NaN | targetHeight: | float | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 |
| NaN | targetHeightDrift: | float | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 |
| NaN | startingHeightOffset: | float | NaN | NaN |
| 1.14 | heightChangeRate: | float | Rate at which the unit changes height, either from converting or drifting | heightChangeRate: 3 |
| 1.14 | fallingAcceleration: | float | The acceleration in which a unit drops | NaN |
| 1.14 | fallingAccelerationDead: | float | fallingAcceleration but when destroyed | NaN |
| NaN | maxTurnSpeed: | float | NaN | NaN |
| NaN | turnAcceleration: | float | NaN | NaN |
| NaN | moveSlidingMode: | bool | Makes the unit slide when moveDecelerationSpeed is lower, making them drift and feel natural | NaN |
| NaN | moveIgnoringBody: | bool | Allows the unit to move without fully turning in the direction its moving, useful for ships and air units | NaN |
| NaN | moveSlidingDir: | int | NaN | NaN |
| NaN | joinsGroupFormations: | bool | Defaults to true. Changing not recommended | NaN |
| NaN | Section | NaN | [ai] | This determines what the AI will use the unit for, does not effect player |
| NaN | Code | Value Type | Description | Example |
| NaN | useAsBuilder: | bool | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN |
| NaN | useAsTransport | bool | Defaults to true if unit can transport units | NaN |
| NaN | useAsHarvester | bool | Defaults to true if unit can reclaim resources | NaN |
| NaN | disableUse: | bool | Disallow AI building this unit or building | NaN |
| NaN | ai\_upgradePriority | float | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN |
| NaN | NaN | NaN | Buildings only | NaN |
| NaN | buildPriority: | float | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN |
| NaN | noneInBaseExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN |
| NaN | noneGlobalExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN |
| NaN | recommendedInEachBaseNum | float | Defaults to 0 | NaN |
| NaN | recommendedInEachBasePriorityIfUnmet | float | Defaults to 0.5. Overrides buildPriority | NaN |
| NaN | upgradedFrom: | string | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN |
| NaN | maxGlobal: | int | NaN | NaN |
| NaN | maxEachBase: | int | NaN | NaN |
| 1.4 | notPassivelyTargetedByOtherUnits | bool | Useful for walls, etc | NaN |
| 1.4 | lowPriorityTargetForOtherUnits | NaN | Useful for units that cannot attack back. Eg walls | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedInEachBase | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedGlobal | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_includeOtherHarvesterCounts | NaN | NaN | NaN |
| 1.13.3 | onlyUseAsHarvester\_ifBaseHasUnitTagged | NaN | NaN | NaN |
| NaN | Section | NaN | [leg\_#] / [arm\_#] | Legs can move around when unit moves, Arms need an animation or convert |
| NaN | Code | Value Type | Description | Example |
| NaN | x: | float | Sets position of the foot on the X axis. | NaN |
| NaN | y: | float | Sets position of the foot on the Y axis. | NaN |
| NaN | copyFrom: | int | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 |
| NaN | attach\_x: | float | Sets the leg's attach point on the X axis. | NaN |
| NaN | attach\_y: | float | Sets the leg's attach point on the Y axis. | NaN |
| NaN | rotateSpeed: | float | NaN | NaN |
| NaN | endDirOffset | NaN | Target foot/end rotation relative to body | NaN |
| NaN | lockMovement | bool | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN |
| NaN | heightSpeed: | float | NaN | NaN |
| NaN | moveSpeed | NaN | NaN | NaN |
| NaN | moveWarmUp | NaN | NaN | NaN |
| NaN | holdDisMin: | float | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN |
| NaN | holdDisMax: | float | Defaults to 16. Force reposition of leg at this distance. | NaN |
| NaN | holdDisMin\_maxMovingLegs | NaN | NaN | NaN |
| NaN | hold\_moveOnlyIfFurthest | NaN | NaN | NaN |
| NaN | holdDisMin\_checkNeighbours | NaN | NaN | NaN |
| NaN | hardLimit: | float | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN |
| NaN | estimatingPositionMultiplier | float | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN |
| NaN | hidden: | logic boolean | NaN | NaN |
| 1.13 | image\_end | file (image) | NaN | NaN |
| 1.13 | image\_end\_shadow | file (image) | NaN | NaN |
| 1.13 | image\_end\_teamColors | NaN | NaN | NaN |
| 1.13 | image\_foot | file (image) | same as image\_end | NaN |
| NaN | image\_foot\_shadow | file (image) | NaN | NaN |
| 1.13 | image\_middle | file (image) | NaN | NaN |
| NaN | image\_leg | file (image) | same as image\_middle | NaN |
| 1.13 | draw\_foot\_on\_top | bool | NaN | NaN |
| NaN | drawOverBody | bool | Draw over body | NaN |
| NaN | drawUnderAllUnits | bool | Draw over all units | NaN |
| NaN | drawDirOffset | float | NaN | NaN |
| NaN | dust\_effect: | bool | Spawns dust particles on each step. | NaN |
| NaN | spinRate | float | Makes arm/leg spin, like idleSpin for turrets | NaN |
| NaN | favourOppositeSideNeighbours | NaN | calculate neighbours with X 10 times closer than Y | NaN |
| NaN | drawLegWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN |
| NaN | drawFootWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN |
| NaN | resetAngle: | float | Unused | NaN |
| NaN | Section | NaN | [attachment\_NAME] | Attachments are slots where other units can be positioned or carried |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | x | float | NaN | NaN |
| 1.13.3 | y | float | NaN | NaN |
| 1.13.3 | height | bool | NaN | NaN |
| 1.13.3 | idleDir | int | NaN | NaN |
| 1.14 | idleDirReversing | int | NaN | NaN |
| 1.13.3 | isVisible | bool | NaN | NaN |
| 1.13.3 | onCreateSpawnUnitOf | unit ref | NaN | NaN |
| 1.13.3 | isUnselectable | bool | Defaults to false | NaN |
| NaN | canAttack | bool | Defaults to true. Set to false to stop this attachment attacking. | NaN |
| 1.13.3 | canBeAttackedAndDamaged | bool | NaN | NaN |
| 1.13.3 | deattachIfWantingToMove | bool | If the unit is ordered to move, it will detach. This includes waypoints from actions. | NaN |
| 1.13.3 | lockLegMovement | bool | NaN | NaN |
| 1.13.3 | keepAliveWhenParentDies | bool | Defaults to false | NaN |
| 1.13.3 | setDrawLayerOnTop | bool | NaN | NaN |
| 1.13.3 | setDrawLayerOnBottom | bool | NaN | NaN |
| 1.13.3 | addTransportedUnits | bool | NaN | NaN |
| 1.13.3 | lockRotation | bool | NaN | NaN |
| 1.13.3 | rotateWithParent | bool | NaN | NaN |
| 1.13.3 | resetRotationWhenNotAttacking | bool | Similar to shouldResetTurret:for turrets. | NaN |
| 1.13.3 | prioritizeParentsMainTarget | bool | It will priotize targeting the main target. Defaults to true. | NaN |
| 1.13.3 | alwaysAllowedToAttackParentsMainTarget | bool | Will always attack the parents main target. | NaN |
| NaN | onParentTeamChangeKeepCurrentTeam | bool | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | NaN |
| 1.14 | smoothlyBlendPositionWhenExistingUnitAdded | bool | NaN | NaN |
| 1.14 | keepWaypointsNeedingMovement | bool | Defaults to false. When false any queued waypoints needing movement to complete get removed. | NaN |
| 1.14 | showAllActionsFrom | LogicBoolean | Show all actions of the units attached in the parent unit list when selected | NaN |
| 1.14 | createIncompleteIfParentIs: | bool | If parent hasn't been built, create attachment with the same built value. Links built values till attachment is complete. Useful for buildings built with nano. | NaN |
| 1.14 | redirectDamageToParent: | bool | Redirects damage done to this attachment to the parent instead of damaging itself directly | NaN |
| 1.14 | redirectDamageToParent\_shieldOnly: | bool | NaN | NaN |
| NaN | Section | NaN | [effect\_NAME] | Effects are purely visual, but can be important for a mod |
| NaN | Code | Value Type | Description | Example |
| 1.13 | life | float | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | life: 70 |
| 1.14 | lifeRandom | float | Random offset life by +/- this value | lifeRandom: 12 |
| 1.13 | alsoEmitEffects | effect ref | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN |
| 1.14 | alsoEmitEffectsOnDeath | effect ref | Create these effects when life runs out. | NaN |
| NaN | ifSpawnFailsEmitEffects | effect ref | If 'spawnChance' for this effects fails then emit these effects instead | NaN |
| 1.13 | alsoPlaySound | sound ref | NaN | NaN |
| 1.13 | createWhenOffscreen | bool | Defaults false. | NaN |
| 1.13 | createWhenZoomedOut | bool | Defaults true | NaN |
| 1.13 | createWhenOverLiquid | bool | Defaults true | NaN |
| 1.13 | createWhenOverLand | bool | Defaults true | NaN |
| 1.13 | spawnChance | float | Default 1. If less than 1 effect only has a random chance of being created | NaN |
| 1.13 | showInFog | bool | Default false | NaN |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | NaN |
| 1.13 | liveAfterAttachedDies | bool | Defaults false when attachedToUnit is being used | NaN |
| 1.13 | priority | string | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN |
| NaN | NaN | NaN | Movement | NaN |
| 1.13 | attachedToUnit | bool | Attach to unit or projectile that created this effect. Will move with this object. | NaN |
| 1.13 | alwayStartDirAtZero | bool | Ignore source/attached unit dir | NaN |
| 1.13 | atmospheric | bool | Apply drag to slow this effect down and add small wind effects | NaN |
| 1.13 | physics | bool | Fall to ground and bounces. Needs height to take effect. | NaN |
| 1.13 | physicsGravity | float | Defaults to 1. height speed acceleration when physics: true | NaN |
| 1.13 | xOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN |
| 1.13 | yOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN |
| 1.13 | xOffsetRelativeRandom | float | Random offset by +/- this value | NaN |
| 1.13 | yOffsetRelativeRandom | float | Random offset by +/- this value | NaN |
| 1.13 | xOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN |
| 1.13 | yOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN |
| 1.13 | xOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN |
| 1.13 | yOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN |
| 1.13 | xSpeedRelative | float | NaN | NaN |
| 1.13 | ySpeedRelative | float | NaN | NaN |
| 1.13 | xSpeedRelativeRandom | float | Randomly change by -value to value | NaN |
| 1.13 | ySpeedRelativeRandom | float | Randomly change by -value to value | NaN |
| 1.13 | xSpeedAbsolute | float | NaN | NaN |
| 1.13 | ySpeedAbsolute | float | NaN | NaN |
| 1.13 | xSpeedAbsoluteRandom | float | Randomly change by -value to value | NaN |
| 1.13 | ySpeedAbsoluteRandom | float | Randomly change by -value to value | NaN |
| 1.13 | hOffset | float | height offset from source | NaN |
| 1.13 | hOffsetRandom | float | Randomly change by -value to value | NaN |
| 1.13 | hSpeed | float | height speed | NaN |
| 1.13 | hSpeedRandom | float | Randomly change by -value to value | NaN |
| 1.13 | dirOffset | float | rotation | NaN |
| 1.13 | dirOffsetRandom | float | Randomly change by -value to value | NaN |
| 1.13 | dirSpeed | float | rotation speed | NaN |
| 1.13 | dirSpeedRandom | float | Randomly change by -value to value | NaN |
| NaN | NaN | NaN | Graphics | NaN |
| 1.13 | frameIndex | int | frame of to use | NaN |
| NaN | frameIndexRandom | NaN | NaN | NaN |
| 1.13 | stripIndex | int/string | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits |
| 1.13 | Image | image | Custom image file to use. Cannot be used with stripIndex. | NaN |
| NaN | imageShadow | image | Custom image file to use for shadows | NaN |
| 1.13 | scaleTo | float | Defaults to 1 | NaN |
| 1.13 | scaleFrom | float | Defaults to 1 | NaN |
| 1.13 | color | color | Defaults #FFFFFFFF | NaN |
| NaN | teamColorRatio | NaN | 0-1 | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN |
| 1.13 | fadeInTime | float | Fade alpha from 0% to 100% for this time at start | NaN |
| 1.13 | fadeOut | bool | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN |
| NaN | alpha | NaN | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN |
| NaN | shadow | NaN | True to draw a shadow. Forced true if imageShadow is used | NaN |
| NaN | NaN | NaN | Animation | NaN |
| 1.13 | total\_frames | int | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN |
| 1.13 | animateFrameStart | int | NaN | NaN |
| 1.13 | animateFrameEnd | int | NaN | NaN |
| 1.13 | animateFramePingPong | int | NaN | NaN |
| 1.13 | animateFrameSpeed | time | NaN | NaN |
| 1.13 | animateFrameSpeedRandom | time | NaN | NaN |
| 1.14 | animateFrameLooping | bool | Defaults false. When false effect is removed when animation ends | NaN |
| NaN | Section | NaN | [animation\_NAME] | Use this to make intricate animations based on different circumstances |
| NaN | Code | Value Type | Description | Example |
| 1.13 | onActions : Unknown | NaN | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN |
| 1.13 | onActionsQueuedUnitPlayAt : float | NaN | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN |
| 1.13 | blendIn : time | NaN | Blend with last animation for this time | NaN |
| 1.13 | blendOut : time | NaN | Blend with next animation for this time | NaN |
| 1.13 | pingPong | bool | Play animation in reverse after it ends | NaN |
| 1.13 | KeyframeTimeScale : float | float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN |
| NaN | NaN | NaN | Keyframes - create as many as needed | NaN |
| 1.13 | arm#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } |
| NaN | leg#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | NaN |
| NaN | body\_[time] | NaN | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} |
| 1.14 | effect\_[time] | NaN | Spawn effects while playing an animation\n | eg: effect\_2s: {name:CUSTOM|myExplode, x: 0,y: 5} |
| NaN | NaN | NaN | NaN | NaN |
| NaN | direction\_units | float | Overrides [graphics]animation\_direction\_units while this animation is playing | NaN |
| NaN | direction\_strideX: | int | Overrides [graphics]animation\_direction\_strideX | NaN |
| NaN | direction\_strideY: | int | Overrides [graphics]animation\_direction\_strideY | NaN |
| NaN | direction\_starting: | float | Overrides [graphics]animation\_direction\_starting | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better ways) | NaN |
| 1.13 | start : int | NaN | Start image frame. deprecated | NaN |
| 1.13 | end : int | NaN | End image frame. deprecated | NaN |
| 1.13 | scale\_start : float | NaN | Start scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | scale\_end : float | NaN | End scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | speed : float | NaN | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [action\_NAME] / [hiddenAction\_NAME] | Actions that can dynamically cause changes to units and resources |
| NaN | Code | Value Type | Description | Example |
| NaN | text | string | NaN | NaN |
| NaN | textPostFix: | string | Text shown as suffix, useful with textAddUnitName to create text UI | text: [ textPostFix: ] textAddUnitName: unitRef self.attachment(slot="${slotId}") |
| NaN | text\_{LANG} | string | NaN | NaN |
| NaN | description | string | A display text when you select your unit's action, used to explain it's purpose. | NaN |
| NaN | description\_{LANG} | string | NaN | NaN |
| NaN | displayType | list | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN |
| NaN | displayRemainingStockpile | bool | Queue is shown as number of times action can be triggered based on price | NaN |
| NaN | pos | float | Order action appears in UI | NaN |
| NaN | iconImage | file (image) | NaN | NaN |
| 1.14 | iconExtraImage | file (image) | Drawn over top of icon image. Useful for upgrade icons, etc | NaN |
| 1.14 | iconExtraColor | colour | Defaults to #64FFFFFF | NaN |
| 1.14 | iconExtraIsVisible | LogicBoolean | NaN | NaN |
| 1.13.3 | unitShownInUI | unitRef/unitType | Display this unit. (as if this action built this unit) | eg: unitShownInUI: unitRef self.transporting(slot=0) or unitShownInUI: heavyTank |
| NaN | guiBuildUnit | NaN | NaN | NaN |
| 1.14 | setBuilt | float | Designates how built the unit is from a percentage of 0-100% with a number between 0 and 1. | NaN |
| NaN | NaN | NaN | Unit Reference - Dynamically parts from already existing units, useful w/ isAlsoViewableByEnemies | self, self.parent(), self.transporting(slot=x), self.attachment(slot=X) |
| 1.14 | textAddUnitName | unitRef/unitType | Add this unit's name to this action's text | eg: textAddUnitName: unitRef self.attachment(slot="1") |
| 1.14 | descriptionAddFromUnit | unitRef/unitType | Add this unit's description to this action's description | NaN |
| 1.14 | descriptionAddUnitStats: | unitRef/unitType | Add this unit's stats (eg HP, energy, resources) to this action's description | descriptionAddUnitStats: unitRef self.parent() |
| 1.14 | unitShownInUIWithHpBar | bool | default true, Only used when unitShownInUI is a unitRef | NaN |
| 1.14 | unitShownInUIWithProgressBar | bool | default true, Only used when unitShownInUI is a unitRef. Replaces HP bar if active | NaN |
| NaN | NaN | NaN | Requirements for player/AI to use in UI | NaN |
| 1.14 | alwaysSinglePress | bool | Defaults false. When true no confirmation needed on mobile, when used with canPlayerCancel:false and allowMultipleInQueue:false will also hide the queue interface. | NaN |
| NaN | price | resources | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | isActive | LogicBoolean | Defaults true. If false then action is disabled and shown in red in UI. | NaN |
| NaN | isVisible | LogicBoolean | Defaults true. If false action is hidden from UI and disabled. | NaN |
| NaN | isLocked | LogicBoolean | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN |
| NaN | isLockedMessage | LocaleString | NaN | NaN |
| 1.13.3 | isLockedAlt | LogicBoolean | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | NaN |
| 1.13.3 | isLockedAltMessage | LocaleString | NaN | NaN |
| 1.13.3 | isLockedAlt2 | LogicBoolean | NaN | NaN |
| 1.13.3 | isLockedAlt2Message | LocaleString | NaN | NaN |
| NaN | allowMultipleInQueue | NaN | This makes it so only one action can be queued of this type (useful for keeping actions with conditions from being spammed) | NaN |
| NaN | onlyOneUnitAtATime | bool | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN |
| 1.13.3 | isGuiBlinking | LogicBoolean | Flashes in UI to draw attention to it. Might be annoying if used often, recommended only for temporarily states/messages | NaN |
| 1.14 | isAlsoViewableByAllies | bool | Allows ally players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN |
| 1.14 | isAlsoViewableByEnemies | bool | Allows enemy players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN |
| NaN | NaN | NaN | AI - How the AI uses this action | NaN |
| 1.13.3 | ai\_isHighPriority | LogicBoolean | Use this for faction selection actions or other high priority actions such as building high priority units | NaN |
| NaN | ai\_isDisabled | LogicBoolean | Defaults false. Stop AI using this action. | NaN |
| 1.13.3 | ai\_considerSameAsBuilding | NaN | Be careful with | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically add an action to the queue) |
| 1.13.3 | autoTriggerOnEvent | NaN | Parameters: created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded, queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit, transportUnloadedOrRemovedUnit, tookDamage | NaN |
| NaN | autoTrigger | LogicBoolean | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater(), autoTrigger: if self.customTimer(laterThanSeconds=5) |
| NaN | autoTriggerCheckRate | enum | options: everyFrame (default), every4Frames, every8Frames. This overrides autoTriggerCheckRate set on [core] Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| NaN | NaN | NaN | While action is queued | NaN |
| NaN | buildSpeed | time | NaN | buildSpeed: 5s |
| NaN | highPriorityQueue | bool | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN |
| NaN | canPlayerCancel | bool | NaN | NaN |
| NaN | whenBuilding\_cannotMove | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN |
| NaN | whenBuilding\_playAnimation | animation ref | NaN | NaN |
| NaN | whenBuilding\_rotateTo | float | Rotate unit body to this direction when action is in active queue | NaN |
| NaN | whenBuilding\_rotateTo\_orBackwards | bool | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | bool | Pause action queue till rotation is finished | NaN |
| NaN | whenBuilding\_temporarilyConvertTo | unit ref | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN |
| 1.15 | whenBuilding\_temporarilyConvertTo\_keepFields | NaN | Don't change these fields when using whenBuilding\_temporarilyConvertTo (both to and from), useful with setUnitStats | NaN |
| NaN | whenBuilding\_triggerAction | action ref | NaN | NaN |
| 1.14 | whenBuilding\_rotateTo\_aimAtActionTarget | bool | BETA NOTE: is broken in some cases | NaN |
| 1.14 | whenBuilding\_rotateTo\_rotateTurretX | turret ref | NaN | NaN |
| NaN | spawnEffectsOnQueue | effect ref | Effects to spawn at unit when action is first added to queue | NaN |
| NaN | playSoundToPlayerOnQueue | sound ref | Global sound to play to unit's player only when action is first added to queue | NaN |
| NaN | NaN | NaN | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN |
| NaN | requireConditional | NaN | Skip all effects of this action if this evaluates to false | NaN |
| 1.13.3 | convertTo | unit ref | Convert your unit into another unit. properties are preserved. | NaN |
| 1.14 | convertTo\_keepCurrentTags | NaN | Keep current and temporarily tags and ignores default tags on convertTo target. | NaN |
| 1.15 | convertTo\_keepCurrentFields | fields | Don't change these fields when converting, useful with setUnitStats (Allowed fields: maxHp, maxShield, shieldRegen, maxEnergy, armour, mass, shootDelayMultiplier, moveSpeed, maxAttackRange.)\n | NaN |
| NaN | addEnergy | float | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | NaN |
| NaN | addResources | resources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 |
| NaN | addResourcesScaledByAIHandicaps | resources | Same as addResources, but increased or decreased depending on AI difficulty level | NaN |
| 1.15 | addResourcesWithLogic | dynamic resources | Like addResources but allows logic to be used for the resource value | addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) |
| 1.15 | setResourcesWithLogic | dynamic resources | Sets target resources to this value instead of adding. Becareful with global resources. | setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2 |
| NaN | deleteSelf | NaN | Remove self with no explosions or sounds | NaN |
| NaN | resetCustomTimer | LogicBoolean | Reset timer used with self.customTimer() | NaN |
| 1.13.3 | setBodyRotation | NaN | NaN | NaN |
| 1.15 | setUnitStats | fields values | Allows changing of a select number of fields dynamically without converting. Supports =/+=/-=, with dynamic maths/logic. Changeable fields: maxHp, hp, maxShield, shield, shieldRegen, maxEnergy, energy, armour, mass, shootDelayMultiplier, shootDamageMultiplier, moveSpeed, maxTurnSpeed, maxAttackRange | NaN |
| 1.15 | resetUnitStats | boolean | Reset changes made by setUnitStats to base values | NaN |
| 1.15 | setUnitMemory | key value pairs | Change this unit's memory, values can be set with logic. Memory must first be defined with defineUnitMemory | setUnitMemory: """\n customText=memory.customText+'hello',\n nukeActive=true, \n nextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')\n""" |
| NaN | NaN | NaN | NaN | NaN |
| 1.15p5 | refundAllQueuedItems | boolean | Refunds the spent price in the queue of a specific action; Includes set flags in price. | NaN |
| 1.15p5 | removeAllQueuedItemsWithoutRefund | boolean | Clears the queue without refunding | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Chaining Actions | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | alsoTriggerAction | action refs | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound |
| NaN | alsoQueueAction | action refs | Adds another action into the normal unit's queue. Ignores action's requirements | NaN |
| NaN | alsoTriggerOrQueueActionConditional | LogicBoolean | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN |
| NaN | NaN | NaN | Outcome - Sounds | NaN |
| NaN | playSoundAtUnit | sound ref | Local sound to play when action finishes | NaN |
| NaN | playSoundGlobally | sound ref | Global sound to play to all players in game | NaN |
| NaN | playSoundToPlayer | sound ref | Global sound to play to unit's player only | NaN |
| NaN | NaN | NaN | Outcome - Fire projectile from turret | NaN |
| NaN | fireTurretXAtGround | turret ref | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo |
| NaN | fireTurretXAtGround\_withOffset | point | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 |
| NaN | fireTurretXAtGround\_withProjectile | projectile ref | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN |
| 1.15p4 | fireTurretXAtGround\_withTarget | unitref | Fires a turret aimed at the location of the indicated unit or marker | NaN |
| 1.13.3 | fireTurretXAtGround\_count | NaN | Number of projectiles to fire. Defaults to 1 | NaN |
| 1.13.3 | fireTurretXAtGround\_onlyOverPassableTileOf | NaN | Only allow tiles crossable by this movement type to be selected | LAND,BUILDING,WATER,HOVER, etc |
| NaN | NaN | NaN | Outcome - Spawning | NaN |
| 1.13.3 | spawnUnits | NaN | Spawn units at action's target. See 'Spawn units line' section in this doc for details. | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) |
| NaN | spawnEffects | effect ref | Effects to spawn at unit | NaN |
| 1.13.3 | produceUnits | NaN | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | NaN |
| NaN | NaN | NaN | Outcome - Position | NaN |
| 1.14 | offsetSelfAbsolute: | point3d | Changes unit position absolutely to its current position | offsetSelfAbsolute: 0, 0, 40 [x,y,height] |
| NaN | NaN | NaN | Outcome - Transport Changes | NaN |
| NaN | addUnitsIntoTransport | unitTypes | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank(neutralTeam=true) |
| NaN | deleteNumUnitsFromTransport | int | NaN | NaN |
| 1.13.3 | deleteNumUnitsFromTransport\_onlyWithTags | string(s) | NaN | NaN |
| 1.13.3 | startUnloadingTransport | bool | NaN | NaN |
| 1.13.3 | forceUnloadTransportNow | bool | For unload all units, or slot targeted by forceUnloadTransportNow\_onlyOnSlot. Unloads even if no space or overwater, etc | NaN |
| 1.14 | forceUnloadTransportNow\_onlyOnSlot | int | NaN | NaN |
| NaN | NaN | NaN | Outcome - Waypoint Changes | NaN |
| 1.13.3 | clearAllWaypoints | bool | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | NaN |
| 1.13.3 | clearActiveWaypoint | bool | NaN | NaN |
| NaN | addWaypoint\_type | NaN | move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | NaN |
| 1.13.3 | addWaypoint\_unitType | NaN | Only for use with addWaypoint\_type:build | NaN |
| 1.13.3 | addWaypoint\_prepend | bool | Add to the start of the waypoint queue or the end | NaN |
| 1.13.3 | addWaypoint\_triggerActionIfFailed | actions | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | NaN |
| 1.14 | addWaypoint\_triggerActionIfMatched | actions | NaN | NaN |
| 1.13.3 | addWaypoint\_maxTime | time | Automatically remove this waypoint if it has been active for longer than this time. | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_tagged | tags | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_team | relation | own|neutral|allyNotOwn|ally|enemy|any | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_maxRange | float | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_mapMustBeReachable | bool | NaN | NaN |
| 1.15 | addWaypoint\_target\_fromReference | unit ref | NaN | addWaypoint\_target\_fromReference: self.memory.lastDock |
| 1.13.3 | addWaypoint\_position\_offsetFromSelf | point | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_fromAction | bool | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_randomOffsetFromSelf | NaN | Same as above, but random. | NaN |
| 1.14 | addWaypoint\_position\_relativeOffsetFromSelf | point | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_tagged | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_team | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_maxRange | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Cooldown | NaN |
| 1.14 | addAllActionCooldownsTime | NaN | NaN | NaN |
| 1.14 | addActionCooldownTime | NaN | Player cannot use action again for this amount of time | NaN |
| 1.14 | addActionCooldownApplyToActions | action ids | Sets addActionCooldownTime's target. Defaults to this action. | NaN |
| 1.14 | clearAllActionCooldowns | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Animation | NaN |
| 1.13.3 | playAnimation | animation id | NaN | NaN |
| 1.13.3 | playAnimationIfNotPlaying | bool | Don't restart animation if this animation is already playing | NaN |
| 1.13.3 | finishPlayingLastAnimation | bool | Finish last animation, including blend out | NaN |
| 1.13.3 | stopLastAnimation | bool | Stop last animation, skipping blend out | NaN |
| NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | switchToNeutralTeam | boolean | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | NaN |
| 1.13.3 | switchToAggressiveTeam | boolean | Change to a built-in team that is aggressive to all other teams. Does not get captured. | NaN |
| 1.15 | switchToTeam | logicNumber | Team id to switch to. Starts at 0. (but -1 for a neutral team, -2 for aggressive Team) | NaN |
| NaN | NaN | NaN | Outcome - Take Resources from other units | NaN |
| 1.13.3 | takeResources | customPrice | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 |
| 1.13.3 | takeResources\_includeUnitsInTransport | bool | NaN | NaN |
| 1.13.3 | takeResources\_includeParent | bool | Include attachment parent or transport parent | NaN |
| 1.15 | takeResources\_includeReference | unit ref | NaN | [action]takeResources\_includeReference: self.lastDamagedBy |
| 1.13.3 | takeResources\_includeUnitsWithinRange | float | NaN | NaN |
| 1.13.3 | takeResources\_includeUnitsWithinRange\_team | TeamRelation | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutTags | tags | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithTheseResources | customPrice | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutAllResources | bool | Defaults to true. | NaN |
| 1.13.3 | takeResources\_triggerActionIfAnyCollected | action refs | NaN | NaN |
| 1.13.3 | takeResources\_triggerActionIfNoneCollected | action refs | NaN | NaN |
| 1.13.3 | takeResources\_discardCollected | bool | Just take resources from targets, don't add(or remove) to self | NaN |
| 1.13.3 | takeResources\_keepResourcesOnTarget | bool | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | NaN |
| NaN | takeResources\_maxUnits | int | Defaults to 1. | NaN |
| 1.14 | takeResources\_directTransferStoppingAtZero | bool | If less resources on target than transfer amount, only remaining resources will be transfered. Doesn't support use with some other takeResources\_\* keys | NaN |
| NaN | NaN | NaN | Outcome - Convert Resources | NaN |
| 1.13.3 | convertResource\_from | customResource | Name of custom resource to take from | NaN |
| 1.13.3 | convertResource\_to | customResource | Name of custom resource to give to | NaN |
| 1.13.3 | convertResource\_minAmount | float | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | NaN |
| 1.13.3 | convertResource\_maxAmount | float | Max amount to transfer between 'from' and 'to' | NaN |
| 1.13.3 | convertResource\_multiplyAmountBy | float | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | NaN |
| NaN | NaN | NaN | Outcome - Set Resources | NaN |
| 1.13.3 | resourceAmount | customResource | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | resourceAmount: oil |
| 1.13.3 | resourceAmount\_setValue | float | Absolute value to set this resource to, ignores current value of resource. Skipped by default | resourceAmount\_setValue: 20 |
| 1.13.3 | resourceAmount\_addOtherResource | customResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | NaN |
| 1.13.3 | resourceAmount\_multiplyBy | float | Defaults to 1. Multiple the current or new value by | NaN |
| NaN | NaN | NaN | Outcome - Attachment changes | NaN |
| 1.13.3 | attachments\_addNewUnits | unit types | NaN | NaN |
| 1.13.3 | attachments\_deleteNumUnits | int | NaN | NaN |
| 1.13.3 | attachments\_onlyOnSlots | attachment ids | Restrict attachments\_\* actions to these attachments | NaN |
| 1.13.3 | disconnectFromParent | bool | NaN | NaN |
| 1.14 | attachments\_unload | bool | Unload all attachments. Can be used with attachments\_onlyOnSlots. Same as unloading transported units | NaN |
| 1.14 | attachments\_disconnect | bool | Disconnect all attachments in the place they are right now. Can be used with attachments\_onlyOnSlots. | NaN |
| NaN | NaN | NaN | Outcome - Tag changes | NaN |
| 1.13.3 | temporarilyAddTags | tags | Add tag to this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN |
| 1.13.3 | temporarilyRemoveTags | tags | Remove tag from this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN |
| 1.13.3 | resetToDefaultTags | bool | Reset to standard tags | NaN |
| 1.13.3 | addGlobalTeamTags | tags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | NaN |
| 1.13.3 | removeGlobalTeamTags | tags | Remove a tag from player's team. | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Show Message | NaN |
| 1.13.3 | showMessageToPlayer | string | Sends a message to the player controlling the unit | NaN |
| 1.13.3 | showMessageToPlayer\_{LANG} | string | Note: This format is support on nearly all strings that show to player even when reference doesn't show it | NaN |
| 1.13.3 | showMessageToAllPlayers | string | Sends a message to all players | Eg: showMessageToAllPlayers: %{self.playerName} has captured a point |
| 1.14 | showMessageToAllEnemyPlayers | string | NaN | showMessageToAllEnemyPlayers: Team %{self.playerName} has %{self.resource.gold} |
| 1.13.3 | showQuickWarLogToPlayer | string | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | NaN |
| 1.13.3 | showQuickWarLogToAllPlayers | NaN | Sends a Quick War Log message to all players (in the lower lef) | NaN |
| 1.13.3 | debugMessage | NaN | Only shows in Sandbox with Debug mode on. | NaN |
| NaN | Type | NaN | Spawn units line | Spawn lines specifically for units, used with "unit ref" value types |
| NaN | Code | NaN | Description | Example |
| NaN | NaN | NaN | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) |
| 1.13.3 | neutralTeam | NaN | Spawn the unit on the neutral team instead of the same team as source | NaN |
| 1.13.3 | setToTeamOfLastAttacker | NaN | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | NaN |
| 1.13.3 | spawnChance | NaN | Chance this unit will spawn. Defaults to 1. | NaN |
| 1.15 | spawnSource | unit ref | Changes spawn location and team of spawned units to this unit ref. | [action]spawnUnits: tank(spawnSource=memory.lastLocation)\n |
| 1.13.3 | maxSpawnLimit | NaN | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) |
| 1.13.3 | gridAlign | NaN | Align spawn location to grid, useful for buildings | NaN |
| 1.13.3 | skipIfOverlapping | bool | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | NaN |
| 1.13.3 | offsetX | float | NaN | NaN |
| 1.13.3 | offsetY | float | NaN | NaN |
| 1.13.3 | offsetRandomX | float | NaN | NaN |
| NaN | offsetRandomY | float | NaN | NaN |
| NaN | offsetRandomDir | float | NaN | NaN |
| 1.13.3 | offsetHeight | float | NaN | NaN |
| 1.13.3 | offsetDir | float | NaN | NaN |
| 1.13.3 | addResources | resource ref | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResource=gold:30|stone:10, spawnChance=0.5) |
| 1.14 | transportedUnitsToTransfer | int | Puts the designated amount of transported units into the transport of the spawned unit. | spawnUnits: transporter(transportedUnitsToTransfer=5) |
| 1.15 | copyWaypointsFrom | unit ref | Copies all waypoints on target to created units. | spawnUnits: tank(copyWaypointsFrom=self) |
| 1.14 | alwayStartDirAtZero | bool | NaN | NaN |
| 1.14 | Type | NaN | Spawn Projectiles line | Spawn lines specifically for projectiles, used with "proj ref" value types |
| 1.14 | Code | NaN | Description | Example |
| 1.14 | NaN | NaN | Most projectile spawning keys used for projectile ref | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) |
| 1.14 | spawnChance | float | Chance this projectile will spawn. Defaults to 1. | spawnChance: 0.5 |
| 1.14 | maxSpawnLimit | int | Maximum amount to spawn | NaN |
| 1.14 | recursionLimit | int | Prevents loops, useful with spawning itself so it doesn't infinitely spawn, good for chain exploding | recursionLimit: 5 (Recommended no more than 4 if spawning more than 3 projectiles) |
| 1.14 | offsetX | float | NaN | NaN |
| 1.14 | offsetY | float | NaN | NaN |
| 1.14 | xOffsetRelative | float | Similar to offsetX, but the offset is relative to the position of the projectile | NaN |
| 1.14 | yOffsetRelative | float | Similar to xOffsetRelative, but for Y axis | NaN |
| 1.14 | offsetRandomX | float | Random value to offset in the X axis only | NaN |
| 1.14 | offsetRandomY | float | Random value to offset in the Y axis only | NaN |
| 1.14 | offsetRandomXY | float | The offset in both directions to randomly spawn, makes truly random spawning within an area | NaN |
| 1.14 | offsetHeight | float | NaN | NaN |
| 1.14 | offsetDir | degrees | NaN | NaN |
| 1.14 | offsetRandomDir | degrees | NaN | NaN |
| NaN | Type | NaN | LogicBoolean | Advanced code to create conditionals and triggers |
| NaN | Code | Returns | Description | Example |
| NaN | true | bool | NaN | NaN |
| NaN | false | bool | NaN | NaN |
| NaN | if | NaN | Start all logic booleans with if, unless just using true/false | NaN |
| NaN | and | bool | NaN | if self.isInWater() and self.energy(greaterThan=1) |
| NaN | or | bool | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() |
| NaN | not | bool | NaN | if not self.isOverLiquid() |
| 1.15 | < | bool | Return true if number on left is smaller | NaN |
| 1.15 | > | bool | Return true if number on right is smaller | NaN |
| 1.15 | <= | bool | Return true if number on left is smaller or equal | NaN |
| 1.15 | >= | bool | Return true if number on right is smaller or equal | NaN |
| 1.15 | == | bool | Return true if number, unit, string, bool on both sides is the same | NaN |
| 1.15 | != | bool | Return true if number, unit, string, bool on both sides different | NaN |
| 1.15 | + | same type | Add two numbers or join two strings | NaN |
| 1.15 | - | same type | Subtract two numbers | NaN |
| 1.15 | / | same type | Divide two numbers | NaN |
| 1.15 | \* | same type | Multiply two numbers | NaN |
| 1.15 | % | same type | Divides two numbers and returns the remainder | NaN |
| NaN | NaN | NaN | Unit location and movement | NaN |
| NaN | self.isUnderwater() | bool | NaN | NaN |
| NaN | self.isAtGroundHeight() | bool | NaN | NaN |
| NaN | self.isFlying() | bool | NaN | NaN |
| NaN | self.isMoving() | bool | NaN | NaN |
| NaN | self.isAtTopSpeed() | bool | NaN | NaN |
| NaN | self.isInWater() | bool | Touching water | NaN |
| NaN | self.isOverwater() | bool | Touching or over a water tile | NaN |
| NaN | self.isOverLiquid() | bool | NaN | NaN |
| NaN | self.isOverClift() | bool | NaN | NaN |
| NaN | self.isOverPassableTile() | bool | (parameters: type) | Type Values: NONE, LAND, BUILDING, HOVER, OVER\_CLIFF, OVER\_CLIFF\_WATER, AIR, WATER |
| NaN | self.isOverOpenLand() | bool | shortcut for self.isOverPassableTile(type='LAND') | NaN |
| NaN | NaN | NaN | Unit stats | NaN |
| 1.13.3 | self.hasResources() | bool | Can check multiple resources (all price parameters) | NaN |
| NaN | self.resource() | float / bool | Checks a single resource (parameters: type, greaterThan, lessThan) (1.15 returns float with no parameters) | NaN |
| 1.15 | self.resource.RESOURCE\_TYPE | float | Shortcut for: self.resource(type='RESOURCE\_TYPE') | addResourcesWithLogic: hp += self.resource.gold |
| 1.14? | self.isResourceLargerThan | bool | Compare two resource between each other, note multiplyTargetBy doesn't make any changes. (parameters: source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | NaN |
| NaN | self.hp() | float / bool | (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | NaN |
| 1.15 | self.maxHp() | float / bool | (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | NaN |
| NaN | self.height() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | NaN |
| NaN | self.ammo() | int / bool | Returns int if no parameters, boolean with any parameters (parameters: greaterThan, lessThan, empty, full) | NaN |
| NaN | self.isAmmoEmpty() | bool | shortcut for self.ammo(empty=true) | NaN |
| NaN | self.ammoIncludingQueued() | int / bool | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) |
| NaN | self.energy() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | if self.energy() > 50 |
| NaN | self.energyIncludingQueued() | float / bool | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN |
| NaN | self.isEnergyFull() | bool | shortcut for self.energy(full=true) | NaN |
| NaN | self.isEnergyEmpty() | bool | shortcut for self.energy(empty=true) | NaN |
| NaN | self.shield() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | NaN |
| NaN | self.kills() | int / bool | (parameters: greaterThan, lessThan) (1.15 returns int with no parameters) | NaN |
| 1.13.3 | self.queueSize() | int / bool | (parameters: greaterThan, lessThan) (1.15 returns float with no parameters) | NaN |
| 1.15 | self.teamId() | int | Return team id of unit or marker. Starts at 0. (but -1 for a neutral team) | NaN |
| 1.15 | self.teamName() | string | Returns allied group team name | NaN |
| NaN | self.playerName() | string | Returns player's name | NaN |
| 1.15 | self.x(), self.y(), self.z() | float | Returns the unit's coordinate parts | NaN |
| 1.15 | self.dir() | float | Returns the unit's direction | NaN |
| 1.15 | self.priceCredits() | NaN | Returns the price of the unit | NaN |
| NaN | NaN | NaN | Misc | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | self.hasFlag() | bool | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this vaule |
| NaN | self.tags() | bool | (parameters: includes) | NaN |
| 1.13.3 | self.globalTeamTags() | bool | (parameters: includes) | NaN |
| NaN | self.transportingCount() | int | (parameters: greaterThan, lessThan, empty) (1.15 returns int with no parameters) | NaN |
| NaN | self.numberOfAttachedUnits() | int / bool | (withTag, greaterThan, lessThan) (1.15 returns int with no parameters) | NaN |
| NaN | self.isAttacking() | bool | NaN | NaN |
| NaN | self.hasActiveWaypoint() | bool | ([type=WAYPOINT\_TYPE]) | NaN |
| NaN | self.transportingUnitWithTags() | bool | (parameters: includes) | self.transportingUnitWithTags(includes='human') |
| NaN | self.hasParent() | bool | For both attachments and transports (parameters: [withTag=x] ) | NaN |
| NaN | self.hasTakenDamage() | float / bool | (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | self.hasTakenDamage(withinSeconds=1) |
| NaN | self.timeAlive() | float / bool | (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | NaN |
| NaN | self.lastConverted() | float / bool | (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | NaN |
| NaN | self.customTimer() | float / bool | (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | NaN |
| NaN | self.isOnNeutralTeam() | bool | NaN | NaN |
| NaN | self.numberOfUnitsInTeam() | int / bool | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) |
| 1.14 | self.numberOfUnitsInAllyNotOwnTeam() | int / bool | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | NaN |
| 1.13.3 | self.numberOfUnitsInEnemyTeam() | int / bool | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | NaN |
| NaN | numberOfUnitsInNeutralTeam() | int / bool | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | NaN |
| 1.14 | numberOfUnitsInAggressiveTeam() | int / bool | The special 'aggressive to all' team (this is not the same as numberOfUnitsInEnemyTeam) (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN |
| 1.13.3 | self.hasUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN |
| 1.13.3 | self.noUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN |
| 1.13.3 | self.isControlledByAI() | bool | NaN | NaN |
| 1.15 | self.readUnitMemory() | any type | (name:string, type:string{boolean,unit,float,string}, [default]) | if parent.readUnitMemory('boostTarget', type='unit') == self |
| NaN | NaN | NaN | NaN | NaN |
| 1.15 | NaN | NaN | Unit references | NaN |
| 1.15 | thisActionTarget | unit / marker | Current target or location targeted. | fireTurretXAtGround: mainGun (thisActionTarget==Marker with ground location)\nalsoTriggerAction: x (thisActionTarget==Same as original action)\n[turret]onShoot\_triggerActions: x (thisActionTarget==Target that was shot at)\ntakeResources\_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources)\naddWaypoint\_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc. Note: use addWaypoint\_maxTime:0 if you want to search only) |
| 1.15 | eventSource | unit / marker | Current trigger from an autoTriggerOnEvent, otherwise null | autoTriggerOnEvent: tookDamage (thisActionTarget==Unit that caused damage)\nautoTriggerOnEvent: killedAnyUnit (thisActionTarget==Unit that was killed)\nautoTriggerOnEvent: transportingNewUnit (thisActionTarget==Unit that was transported)\nautoTriggerOnEvent: transportUnloadedOrRemovedUnit (thisActionTarget==Unit unloaded)\nautoTriggerOnEvent: queuedUnitFinished (thisActionTarget==New unit made)\nautoTriggerOnEvent: touchTargetSuccess (thisActionTarget==Target touched) |
| 1.15 | attachment | unit | (parameters: [slot], [withTag]) | self.attachment(withTag='x').lastDamagedBy.getAsMarker() |
| 1.15 | transporting | unit | (parameters: [slot]) | if self.transporting(slot=0).hasResources(gold=100) |
| 1.15 | attacking | unit | Current target this is attacking, might not be the current waypoint target. | if attacking.tags(includes='bug') and attacking.hp < 20 |
| 1.15 | lastDamagedBy | unit | Last unit that attacked this. | NaN |
| 1.15 | parent | unit | The transporter or attachment parent. (Note: units are suspended state when transported without attachment slot) | Eg autoTrigger: if parent.energy > 100 |
| 1.15 | activeWaypointTarget | unit | Current active waypoint target. Includes attacking, transporting, repairing, etc. | if distanceBetween(self, activeWaypointTarget) < 100 |
| 1.15 | customTarget1 | unit | Custom memory, defaults to the unit that created this unit. | if parent.customTarget1 == self |
| 1.15 | customTarget2 | unit | Custom memory, defaults to null | NaN |
| 1.15 | nearestUnit | unit | (withinRange=500, withTag='x', relation='any') Search for a unit (not recommended in autoTrigger check for perfomance) | NaN |
| 1.15 | globalSearchForFirstUnit | unit | (withTag=x, relation) - Returns first (and oldest) unit found matching the filter. Slow, avoid using in autoTrigger checks | self.globalSearchForFirstUnit(withTag='gameController', relation='neutral') |
| 1.15 | nullUnit | unit | returns a null unit reference, useful for comparisons | if self.parent == nullUnit |
| 1.15 | NaN | NaN | Marker functions | NaN |
| 1.15 | getAsMarker | marker | creates a temporary marker at the position a unit is right now. Markers are very fast to create and automatically removed when no longer needed. Is not linked to any unit and still exists when the unit dies, and stays the same when source moves. | lastDamagedBy.getAsMarker() |
| 1.15 | getOffsetAbsolute | marker | ([x],[y],[height]) Returns marker with absolute offset (-y is north, +x is east) | NaN |
| 1.15 | getOffsetRelative | marker | ([x],[y],[height],[dirOffset]) Returns marker with relative offset. (y+ is forwards) | self.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null |
| 1.15p4 | eventSource | event | Sets "target" based on the event from autoTriggerOnEvent (basically thisActionTarget but for events) | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Global functions | NaN |
| 1.15 | memory.NAME | any type | Shortcut to read the self with current defineUnitMemory types. Cannot be used on other units, use readUnitMemory for that. Don't call with self. | autoTrigger: if memory.experience > 100 |
| 1.15 | distance(x1, y1, x2, y2) | float | Returns the difference between two points | NaN |
| 1.15 | distanceSquared(x1, y1, x2, y2) | float | Returns the squared difference between two points. Bit faster than distance. | NaN |
| 1.15 | distanceBetween(unit1, unit2) | float | Returns the distance between two units | NaN |
| 1.15 | distanceBetweenSquared(unit1, unit2) | float | Returns the squared distance between two units. Bit faster than distanceBetween | NaN |
| NaN | game.nukesEnabled() | bool | Returns true if nukes are enabled in this game's settings. | NaN |
| 1.15 | int(x) | int | Removes decimal places from a number. | int(4.2) == 4 |
| 1.15 | select(bool, textA, textB) | NaN | returns textA if bool is true otherwise returns textB | NaN |
| 1.15 | debug(logicBoolean) | string | Returns a text string helping to explain the reason for the current result. Can see into nested logic, comparisons, and operators. | NaN |
| 1.15 | str(x) | string | Convert a number, unit or boolean into a string | str(self.energy)+'x' == '100x' |
| 1.15 | substring(text,start,end) | string | Takes a part of the string from the indicated start and end parts | substring('hello',0,2) == 'he' |
| 1.15 | length(string) | int | Returns string length as number | NaN |
| 1.15 | squareRoot(num) | float | Requires square root of a number | NaN |
| 1.15 | min(num1, num2) | float | Returns the smallest number | damage = min(self.hp, self.energy) |
| 1.15 | max(num1, num2) | float | Returns the biggest number | max(5, 10) == 10 |
| 1.15 | createMarker(x, y, [height]) | marker | NaN | NaN |
| 1.14 | Type | NaN | [placementRule\_NAME] | Allows creation of rules for requiring buildings |
| 1.14 | Code | Value Type | Description | Example |
| 1.14 | anyRuleInGroup: | string | (Only require 1 of the rules in this group pass, instead of all. Use the same group name on other placement rules to create a group.) | NaN |
| 1.14 | searchTags: | tag list | Search for any unit with at least one of these tags | NaN |
| 1.14 | searchTeam: | relation | Teams to include in search, can be: own|neutral|allyNotOwn|ally|enemy|any | NaN |
| 1.14 | searchOffsetX: | float | defaults to 0 | NaN |
| 1.14 | searchOffsetY: | float | defaults to 0 | NaN |
| 1.14 | searchDistance: | float | Required | NaN |
| 1.14 | excludeIncompleteBuildings: | bool | defaults to false. Might want to set to true depending on the requirement reason | NaN |
| 1.14 | excludeNonBuildings: | bool | defaults to false | NaN |
| 1.14 | minCount: | int | Set min amount of units that need to be found in search. (eg needs to be near something). Defaults to 0 | NaN |
| 1.14 | maxCount: | int | Set max amount of units before match fails (eg cannot be close to something). Defaults to unlimited | NaN |
| 1.14 | blocksPlacement: | bool | Defaults to true. | NaN |
| 1.14 | cannotPlaceMessage: | LocaleString | Highly Recommended. Message shown to player if this rule fails (will be first failing rule if using anyRuleInGroup). | NaN |
| 1.14 | checkEachTile: | bool | defaults to true (set to false to only test unit center, true checks each tile under the unit which shows up on the placement grid. Can be easier to see requirements with true) | NaN |
| NaN | Type | NaN | Prices/Resources lines - used by addResources, price, etc | NaN |
| NaN | Code | Targets | Description | Example |
| NaN | credits | NaN | Global resource | NaN |
| NaN | energy | NaN | NaN | NaN |
| NaN | hp | NaN | NaN | NaN |
| NaN | shield | NaN | NaN | price: hp=-100, shield=100 |
| NaN | ammo | NaN | Hidden value on each unit for use by mods | NaN |
| NaN | setFlag | NaN | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1 |
| NaN | unsetFlag | NaN | use with addResources, resourceUsage or price. 0-31 | NaN |
| NaN | hasFlag | NaN | use with price or resourceUsage | NaN |
| NaN | hasMissingFlag | NaN | use with price or resourceUsage | NaN |
| 1.13.3 | X | NaN | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=20 |
| NaN | Section | NaN | [global\_resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI | NaN |
| 1.13.3 | displayNameShort | NaN | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | NaN |
| 1.13.3 | hidden | bool | Hide this resource from the player | NaN |
| 1.13.3 | priority | NaN | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | NaN |
| 1.13.3 | displayColor | color | Color, can be hex with optional alpha | #FF0000 |
| 1.14 | displayRoundedDown | bool | Don't show decimal places to the player | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | NaN | NaN | Define a new resource local to unit. Works like build-in ammo resource | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI (eg hovering over unit info) | NaN |
| 1.13.3 | displayNameShort | NaN | NaN | NaN |
| 1.13.3 | hidden | NaN | Hide this resource from the player | NaN |
| NaN | equivalentGlobalResourceForAI | NaN | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | NaN |
| 1.14 | displayRoundedDown | NaN | NaN | NaN |
| NaN | Section | NaN | [template\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | NaN | NaN | Template sections can have any keys and have no effect by themselves. | NaN |
| NaN | NaN | NaN | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN |
| NaN | NaN | NaN | --All these below features can be used with any section not just templates-- | NaN |
| 1.13.3 | @copyFromSection | NaN | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection: template\_name/action\_name/projectile\_name |
| NaN | @copyFrom\_skipThisSection | NaN | Use in any section to make [core]copyFrom not copy into it. Eg not copy an action when overriding | @copyFrom\_skipThisSection |
| NaN | @define X | NaN | Define a local variable within a section (best outside of template) | @define targetEffect: boom |
| NaN | @global X | NaN | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop |
| 1.13.3 | NaN | NaN | ${X} can be used to reference variables (can also be done outside of a template). It is calculated when loading and remains static. Has no impact on runtime performance. | spawnEffects: effect\_${targetEffect} |
| 1.13.3 | NaN | NaN | ${section.key} can be used to reference another key (can also be done outside of a template) | addResources: credits=${ core.price \* 2 + 10 } |
| 1.15 | NaN | NaN | %{X} can be used to add dynamic logic into some strings. (CAN NOT be used everywhere). The value will update every frame. | [action]text: Missing hp %{self.maxHp - self.hp} |
| 1.15 | NaN | NaN | """ text """ can be used for multiline strings. Newlines with be removed from final result. | copyFrom:"""\nROOT:a.ini,\nROOT:b.ini,\nROOT:c.ini\n"""\n |
| NaN | Section | NaN | [comment\_NAME] | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | NaN | NaN | Comment sections can have any keys and have no effect. | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | List of default game noises (for turret fire sound or other sound references): | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | NaN |

## 1.13.2
| Unnamed: 0 | This sheet is for an old version, see sheet tabs below. | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Section | [core] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| NaN | Common keys | NaN | NaN | NaN |
| name: | Defines the raw name for your unit, in which case the game uses to identify as a unique name. (This name is not displayed in-game) | name: customTank\_1 | string | NaN |
| altNames: | comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | string(s) | NaN |
| class: | Reserved for future use, must be CustomUnitMetadata | class: CustomUnitMetadata | string | NaN |
| price: | The cost of your unit from builders/buildings. | price: 500 | int | NaN |
| mass: | The 'weight' of your unit, this will define how it collides with other units, a greater value means it is tougher to push. | mass: 3000 | int | NaN |
| techLevel: | Defines the Tech Level of your unit, there are 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | int | NaN |
| buildSpeed: | Time it takes to build unit (may multiply with builder speed) Formulae for seconds: 10 ÷ 60 = 0.16 (0.16 will make it take 10 seconds to build) | buildSpeed: 0.16 | float | NaN |
| radius: | Circular area around your unit that makes it selectable (mouse click/screen touch) | radius: 20 | int | NaN |
| isBio: | Choose whether your unit is bioligical or not, will effect sound and splat (unless hideScorchMark is true) | isBio: false | bool | NaN |
| isBug: | Changes some death defaults, and sort order in sandbox | NaN | bool | NaN |
| isBuilder | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder | NaN | NaN | 1.13 |
| NaN | Unit stats | NaN | NaN | NaN |
| maxHp: | The max health for your unit. (will spawn with this value) | maxHp: 200 | int | NaN |
| selfRegenRate: | Passive self repair rate | NaN | float | NaN |
| maxShield: | The max shield hitpoints of your unit. Can start with 0 hitpoints if startShieldAtZero is set to true | maxShield: 500 | int | NaN |
| startShieldAtZero: | Sets the unit's shield to 0 HP when it is first built. | startShieldAtZero: true | bool | NaN |
| shieldRegen: | Passive shield regen rate | shieldRegen: 0.15 | float | NaN |
| energyMax: | Defaults to 0. Energy can be used as ammo for turrets or for laser defense | energyMax: 1 | float | NaN |
| energyRegen: | NaN | NaN | float | NaN |
| energyStartingPercentage: | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 | float | NaN |
| energyNeedsToRechargeToFull: | Disable weapons using energy after reaching zero till fully recharged | NaN | float | NaN |
| armour | Damage taken away from each hit (not currently used in any core units) | NaN | NaN | 1.13 |
| armourMinDamageToKeep | Min damage to keep. Defaults to 1 | NaN | NaN | 1.13 |
| generation\_credits: | Income unit creates | generation\_credits: 2 | int | NaN |
| generation\_delay: | How often generation\_credits is added. Defaults to 40 (changing not recommended) | generation\_delay: 40 | int | NaN |
| NaN | UI and Graphics related keys | NaN | NaN | NaN |
| showInEditor: | Set to false to hide unit in sandbox editor (Default true) | showInEditor: true | bool | NaN |
| displayText | The name of your unit that the game shows to the player. | displayText: Custom Tank | string | NaN |
| displayText\_{LANG} | LANG=ISO 639-1 Code to show this text instead when game is in this language | displayText\_es: Hola | NaN | 1.13 |
| displayDescription | Description of your unit that the game shows to the player. | displayDescription: - Fast movement.\n- Light damage. | string | NaN |
| displayDescription\_{LANG} | LANG=ISO 639-1 Code to show this text instead when game is in this language | displayDescription\_es: -Movimiento rapido\n-Daño ligero | NaN | 1.13 |
| displayLocaleKey: | Translation file key for unit name and description | displayLocaleKey: units.mechArtillery | string | NaN |
| displayRadius: | Defaults to radius value. Set to show a larger or smaller selection box ui on units. | displayRadius: 20 | int | NaN |
| shieldRenderRadius | NaN | NaN | NaN | NaN |
| shieldDisplayOnlyDeflection: | Hide shield (if active) unless deflecting shot | shieldDisplayOnlyDeflection: false | bool | NaN |
| shieldDeflectionDisplayRate: | Defaults to 4. High value causes shield deflection to fade disappear faster | shieldDeflectionDisplayRate: 3 | float | NaN |
| isUnselectable | Cannot be selected | NaN | NaN | NaN |
| NaN | Building only keys | NaN | NaN | NaN |
| isBuilding: | NaN | NaN | bool | NaN |
| footprint | Only applies to buildings, tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile | footprint: -1,-1,1,1 | NaN | NaN |
| constructionFootprint | Only applies to buildings, tiles taken up for placement of other buildings. Defaults to 0,0,0,0 | constructionFootprint: -1,-1,1,3 | NaN | NaN |
| buildingSelectionOffset: | Defaults to 0. Adds or removes padding on the drawn selection rect in UI | NaN | int | NaN |
| buildingToFootprintOffsetX | Defaults to 10 | NaN | float | NaN |
| buildingToFootprintOffsetY | Defaults to 10 | NaN | float | NaN |
| placeOnlyOnResPool: | Normally used for extractors | NaN | bool | NaN |
| selfBuildRate: | Rate unit builds it's self when placed without a builder | NaN | float | NaN |
| NaN | Misc Keys | NaN | NaN | NaN |
| copyFrom: | Use unit data from another ini file as base | copyFrom: customTank\_Default | file (ini) | NaN |
| dont\_load: | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom | dont\_load: true | bool | NaN |
| overrideAndReplace: | Override another unit with this unit. Build links pointing to target unit will be replaced with this unit. And this unit will replace target on maps. | overrideAndReplace: builder, combatEngineer | string(s) | NaN |
| globalScale: | Defaults to 1. Changing not recommend | globalScale: 1 | float | NaN |
| isLocked: | Disallow building of this unit. Can be used with overrideAndReplace to restrict units the player is allowed to build. | isLocked: false | bool | NaN |
| isLockedIfGameModeNoNuke | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: false | NaN | 1.13 |
| experimental: | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: false | bool | NaN |
| stayNeutral: | Set to false to disable capture when unit is on the neutral team | stayNeutral: false | bool | NaN |
| createNeutral | NaN | NaN | NaN | 1.13 |
| resourceRate: | Used with canReclaimResources. Experimental feature that is not yet finished. | NaN | float | NaN |
| tags | List of any comma separated strings. Only used for transportUnitsRequireTag right now, will be used for other things in future | NaN | NaN | 1.13 |
| fogOfWarSightRange: | Set number of tiles this unit can see. Defaults to 15 | fogOfWarSightRange: 15 | int | NaN |
| softCollisionOnAll: | NaN | NaN | int | NaN |
| disableAllUnitCollisions | NaN | NaN | NaN | NaN |
| isUnrepairableUnit | No unit can repair this unit | NaN | NaN | 1.13 |
| isPickableStartingUnit | If true, unit is added to dropdowns for starting unit in game setup menus. | NaN | NaN | 1.13 |
| startFallingWhenStartingUnit | NaN | NaN | NaN | 1.13 |
| soundOnAttackOrder | List of sounds. Only one will be played each attack order | NaN | sound | NaN |
| soundOnMoveOrder | List of sounds. Only one will be played each move order | NaN | sound | NaN |
| canNotBeDirectlyAttacked | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks | NaN | NaN | NaN |
| NaN | Transport related keys | NaN | NaN | NaN |
| transportSlotsNeeded: | Defaults to 1. Number of slots this unit uses up in a transport, Experimentals are often set to 5 to stop small transports holding them. | NaN | int | 1.13 |
| maxTransportingUnits | Number of slots this units as for transporting other units. | NaN | int | NaN |
| transportUnitsRequireTag | Only allow trasport of units that have one of these tags. | NaN | tags | 1.13 |
| transportUnitsRequireMovementType | Only allow trasport of units that have one of these movement types. | NaN | movementTypes | 1.13 |
| transportUnitsBlockAirAndWaterUnits | Defaults to true if transportUnitsRequireMovementType is empty | NaN | NaN | 1.13 |
| transportUnitsKeepBuiltUnits | Makes built units stay inside transport instead of exiting it once ready | NaN | LogicBoolean | 1.13 |
| transportUnitsCanUnloadUnits | Defaults to: if not self.isOverLiquid() and not self.isMoving() | NaN | LogicBoolean | 1.13 |
| transportUnitsAddUnloadOption | Should unload button be added to the menu | NaN | LogicBoolean | 1.13 |
| transportUnitsKillOnDeath | Default true. If false transporting units don't die when transport dies | eg: if self.isOverLiquid() | LogicBoolean | 1.13 |
| transportUnitsHealBy | Rate to heal units being transported | NaN | float | 1.13 |
| NaN | Construction and factory related keys | NaN | NaN | NaN |
| canRepairBuildings: | isBuilder:true is required as well right now) | NaN | bool | NaN |
| canRepairUnits: | isBuilder:true is required as well right now) | NaN | bool | NaN |
| canReclaimResources: | Used with resourceRate. Experimental feature that is not yet finished. | NaN | bool | NaN |
| autoRepair: | Automatically try and repair damaged units in range ([ai]useAsBuilder:true is required as well right now) | NaN | bool | NaN |
| nanoRange: | Defaults to 85 | NaN | int | NaN |
| nanoRepairSpeed: | Defaults to 0.2 | NaN | float | NaN |
| nanoBuildSpeed: | Defaults to 1 | NaN | float | NaN |
| nanoFactorySpeed: | Defaults to 1 | NaN | float | NaN |
| extraBuildRangeWhenBuildingThis | Temporary add extra build range to builders to build this unit/building. Useful for water based buildings. | NaN | NaN | NaN |
| builtFrom\_#\_name: | canBuild and builtFrom have the same effect just in the opposite direction. BuiltFrom is useful if adding new units to existing buildings | NaN | string | NaN |
| builtFrom\_#\_pos: | Order action appears in UI. | NaN | string | NaN |
| builtFrom\_#\_forceNano: | Build as if this was a building (even if it's a unit) | NaN | bool | NaN |
| canBuild\_#\_name: | List of units this unit can create. Can be buildings or units. (isBuilder:true and canRepairBuildings:true is recommended when adding buildings) | NaN | units | NaN |
| canBuild\_#\_pos: | Order action appears in UI | NaN | string | NaN |
| canBuild\_#\_tech: | Tech level. Mostly just effects action colour in UI. Defaults to 1 | NaN | int | NaN |
| canBuild\_#\_forceNano: | Build target as if it was a building (even if it's a unit) | NaN | bool | NaN |
| canBuild\_#\_isVisible | Hide this build option if true | NaN | NaN | NaN |
| canBuild\_#\_isLocked | Dynamically lock this build option and show isLockedMessage if true. | NaN | NaN | NaN |
| canBuild\_#\_isLockedMessage | To tell the player why a unit is locked | NaN | NaN | NaN |
| canBuild\_#\_isLockedMessage\_{LANG} | Optional. For other languages. | NaN | NaN | NaN |
| exit\_x: | Where created or unloaded units appear. Defaults to 0 | exit\_x: 0 | float | NaN |
| exit\_y: | Where created or unloaded units appear. Defaults to 5. | exit\_x: 5 | float | NaN |
| exit\_dirOffset : float | Defaults to 180 for units. 0 for buildings | NaN | NaN | 1.13 |
| exit\_heightOffset : float | Defaults to 0 | NaN | NaN | 1.13 |
| exit\_moveAwayAmount : float | Defaults to 70 | NaN | NaN | 1.13 |
| NaN | Death related keys | NaN | NaN | NaN |
| dieOnConstruct: | Delete this unit when it starts making a building. Target building likely will need selfBuildRate set to be created without a builder. | NaN | bool | NaN |
| dieOnZeroEnergy | Kill this unit if energy level reaches zero. | dieOnZeroEnergy: false | bool | 1.13 |
| numBitsOnDeath | NaN | NaN | int | NaN |
| nukeOnDeath: | NaN | NaN | bool | NaN |
| nukeOnDeathRange: | NaN | NaN | float | NaN |
| nukeOnDeathDamage: | NaN | NaN | float | NaN |
| nukeOnDeathDisableWhenNoNuke: | Defaults to false | NaN | bool | NaN |
| fireTurretXAtSelfOnDeath | NaN | NaN | NaN | NaN |
| explodeOnDeath | defaults to true | NaN | boolean | 1.13 |
| explodeOnDeathGroundCollision | defaults to true | NaN | boolean | 1.13 |
| effectOnDeath | NaN | NaN | effect ref | 1.13 |
| effectOnDeathGroundCollision | NaN | NaN | effect ref | 1.13 |
| unitsSpawnedOnDeath | unit list | unitsSpawnedOnDeath: tank\*5, hoverTank | units | 1.13 |
| unitsSpawnedOnDeath\_setToTeamOfLastAttacker | NaN | NaN | bool | NaN |
| hideScorchMark: | NaN | NaN | bool | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| action\_#\_convertTo: | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 | string | deprecated 1.13 |
| action\_#\_pos: | Order action appears in UI | NaN | float | deprecated 1.13 |
| action\_#\_price: | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | int | deprecated 1.13 |
| action\_#\_text: | A display text when you select your unit's action, used to explain it's purpose. (All your sub actions will be linked to the # you use) | action\_1\_text: Upgrade to Custom Tank 2 | string | deprecated 1.13 |
| action\_#\_description: | NaN | NaN | string | deprecated 1.13 |
| action\_#\_addEnergy: | Adds energy to unit. Has no effect unless energyMax is set | NaN | float | deprecated 1.13 |
| action\_#\_whenBuilding\_cannotMove: | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool | deprecated 1.13 |
| Section | [graphics] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| image: | File path to png image. | NaN | file (image) | NaN |
| image\_back: | An optional image drawn behind other units. Useful for factories that units exit | NaN | file (image) | NaN |
| image\_wreak: | Image to use when unit dies. Can be NONE to leave no wreak | NaN | file (image) | NaN |
| image\_offsetX: | NaN | NaN | int | NaN |
| image\_offsetY: | NaN | NaN | int | NaN |
| teamColorsUseHue: | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN | bool | NaN |
| imageSmoothing: | NaN | NaN | bool | NaN |
| scaleImagesTo: | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | NaN | float | NaN |
| imageScale: | Resize image. Defaults to 1. Effects leg, and shadow images as well. | NaN | float | NaN |
| drawLayer: | Set to experimentals, or leave line out | NaN | string | NaN |
| whenBeingBuiltMakeTransparentTill | NaN | NaN | float | 1.13 |
| icon\_zoomed\_out | NaN | NaN | file (image) | NaN |
| NaN | Turrets (images can also be set on each turret) | NaN | NaN | NaN |
| image\_turret: | Default image for all turrets, can also be set per turret | NaN | file (image) | NaN |
| teamColorsOnTurret | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | NaN | bool | NaN |
| scaleTurretImagesTo: | NaN | NaN | float | NaN |
| lock\_body\_rotation\_with\_main\_turret: | Locks body image locked to first turret's direction | NaN | bool | NaN |
| lock\_leg\_rotation\_with\_main\_turret | NaN | NaN | bool | 1.13 |
| NaN | Shadow | NaN | NaN | NaN |
| image\_shadow: | Image file, NONE, or AUTO. (AUTO will use image and make it transparent black only.) | NaN | file (image) | NaN |
| shadowOffsetX: | NaN | NaN | float | NaN |
| shadowOffsetY: | NaN | NaN | float | NaN |
| lock\_shadow\_rotation\_with\_main\_turret: | Locks body image shadow locked to first turret's direction | NaN | bool | NaN |
| NaN | Effects and animation | NaN | NaN | NaN |
| total\_frames | Defaults to 1. Animations require this. | NaN | int | NaN |
| frame\_width: | Calculated for you if total frames is set, but can be overridden | NaN | int | NaN |
| frame\_height: | Defaults to image height | NaN | int | NaN |
| splastEffect: | True to create a water wave effect when over water. Default false | NaN | bool | NaN |
| dustEffect: | True to create a dust effect when over land. Default false | NaN | bool | NaN |
| splastEffectReverse: | True to also create effect when unit is reversing | NaN | bool | NaN |
| dustEffectReverse: | True to also create effect when unit is reversing | NaN | bool | NaN |
| movementEffect | Custom movement effect, can be anything | eg: movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | effect | 1.13 |
| movementEffectReverse | NaN | NaN | effect | 1.13 |
| movementEffectRate | NaN | NaN | float | 1.13 |
| movementEffectReverseFlipEffects | Create effect as if unit has rotated 180 when reversing | NaN | bool | 1.13 |
| repairEffect | Custom movement effect, can be anything. Replaces default effect from builders | NaN | NaN | NaN |
| repairEffectAtTarget | NaN | NaN | NaN | NaN |
| repairEffectRate | Defaults to 5 | NaN | NaN | NaN |
| rotate\_with\_direction: | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN | bool | NaN |
| animation\_direction\_units: | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN | float | NaN |
| animation\_direction\_strideX: | Animation frames to offset on direction change. | NaN | int | NaN |
| animation\_direction\_strideY: | Animation frames to offset on direction change. Used with frame\_height. | NaN | int | NaN |
| animation\_direction\_starting: | Direction for first frame | NaN | float | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| animation\_TYPE\_start: | Deprecated, use [animation] section instead | animation\_moving\_start: 0 | int | deprecated 1.13 |
| animation\_TYPE\_end: | End frame, must be larger then start | animation\_moving\_end: 3 | int | deprecated 1.13 |
| animation\_TYPE\_scale\_start: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float | deprecated 1.13 |
| animation\_TYPE\_scale\_end: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float | deprecated 1.13 |
| animation\_TYPE\_speed: | Delay for each frame of animation. Larger values cause slower animation | NaN | float | deprecated 1.13 |
| animation\_TYPE\_pingPong: | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN | bool | deprecated 1.13 |
| Section | [attack] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| maxAttackRange: | (multiplied by globalScale) | NaN | float | NaN |
| canAttack: | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN | bool | NaN |
| canAttackFlyingUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackLandUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackUnderwaterUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN | LogicBoolean | NaN |
| turretMultiTargeting | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | NaN | NaN | 1.13 |
| isMelee: | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN | bool | NaN |
| turretRotateWithBody | Are all turrets rotated when body rotates. Defaults to true | NaN | bool | NaN |
| attackMovement: | normal/bomber. bomber attack movement will retreat when energy runs out | NaN | string | NaN |
| dieOnAttack: | NaN | NaN | bool | NaN |
| isFixedFiring: | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN | bool | NaN |
| aimOffsetSpread: | Offset each shot multiplied by target radius. Defaults to 0.6 | aimOffsetSpread:0 will make unit always attack center | bool | NaN |
| stopTargetingAfterFiring | Unit stops targeting after firing a shot. Rarely used or needed. | NaN | NaN | 1.13 |
| disablePassiveTargeting: | Unit only attacks manually ordered target. Rarely used or needed. | NaN | bool | NaN |
| NaN | Deprecated Keys - can be used but better to set these per turret | NaN | NaN | NaN |
| turretSize: | (multiplied by globalScale) | NaN | float | NaN |
| turretTurnSpeed: | NaN | NaN | float | NaN |
| shootDelay: | Global delay, can also use delay on each turret | NaN | float | NaN |
| Section | [turret\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | NaN | NaN | float | NaN |
| y: | NaN | NaN | float | NaN |
| copyFrom: | Copy all values from another turret as defaut values for this turret | copyFrom: 1 | turret ref | NaN |
| projectile | Projectile fired from this turret. | eg: projectile: torpedo | projectile ref | NaN |
| barrelX | Defaults to 0 | NaN | NaN | 1.13 |
| barrelY | Defaults to size. Note: size and barrelY have the same meaning | NaN | NaN | 1.13 |
| size: | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 | float | NaN |
| turnSpeed | Max turn speed of the turret | NaN | NaN | NaN |
| turnSpeedAcceleration | Defaults to disabled, and full turn speed is used. | NaN | NaN | NaN |
| turnSpeedDeceleration | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | NaN | NaN | NaN |
| idleDir | Defaults to 0 | NaN | float | NaN |
| idleDirReversing | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | NaN | float | 1.13 |
| shouldResetTurret: | Defaults true. False to disable the reseting turret angle when idle | NaN | bool | NaN |
| attachedTo: | Id of another turret to attach to, will be positioned relative to it, and rotate with it. | NaN | turret ref | NaN |
| slave: | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN | bool | NaN |
| isMainNanoTurret: | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN | bool | NaN |
| energyUsage: | Required energy to fire weapon. Same as resourceUsage: energy=X | NaN | float | NaN |
| resourceUsage | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | price | NaN |
| NaN | Timing | NaN | NaN | NaN |
| delay: | Override global shootDelay for this turret | NaN | float | NaN |
| linkDelayWithTurret | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN | turret ref | NaN |
| warmup: | Delay before firing a shot. | NaN | float | NaN |
| warmupCallDownRate | Rate to reduce warmup when turret is not ready to fire at any targets | NaN | float | NaN |
| warmupNoReset | Defaults to false. When true warmup is not reset after firing a shot. Used with warmupCallDownRate | NaN | bool | NaN |
| warmupShootDelayTransfer | Defaults to 0, a multiplier which reduces the next shot delay by the warmup value. When used with warmupNoReset, can make a each shot faster. | NaN | float | NaN |
| NaN | Targeting control | NaN | NaN | NaN |
| canShoot: | Defaults to true | NaN | bool | NaN |
| canAttackFlyingUnits: | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | LogicBoolean | NaN |
| canAttackLandUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackUnderwaterUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | LogicBoolean | NaN |
| canAttackCondition: | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | LogicBoolean | NaN |
| clearTurretTargetAfterFiring | NaN | NaN | NaN | 1.13 |
| limitingRange: | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | float | NaN |
| limitingAngle | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN | NaN | 1.13 |
| limitingMinRange | Sets minimum range for turret. | limitingMinRange: 200 | NaN | 1.13 |
| interceptProjectiles\_withTags | Currently used with anti-nuke units. | NaN | NaN | 1.13 |
| interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN | NaN |
| interceptProjectiles\_andUnderDistance | Defaults to 2000, distance inflight before firing | NaN | NaN | NaN |
| interceptProjectiles\_andOverHeight | Defaults to 0 | NaN | NaN | NaN |
| laserDefenceEnergyUse: | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| invisible: | Don't render this turret, but still can shoot, etc. | NaN | LogicBoolean | NaN |
| image: | Use custom image. Overrides unit's main turret image | NaN | file (image) | NaN |
| image\_applyTeamColors | NaN | NaN | bool | NaN |
| image\_drawOffsetX | NaN | NaN | float | NaN |
| image\_drawOffsetY | NaN | NaN | float | NaN |
| chargeEffectImage:\n | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | file (image) | NaN |
| warmupStartEffect | NaN | NaN | effects | NaN |
| shoot\_sound: | NaN | NaN | string | NaN |
| shoot\_sound\_vol: | NaN | NaN | float | NaN |
| shoot\_flame: | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 | effects | NaN |
| shoot\_light | NaN | NaN | color | NaN |
| idleSpin: | Spin rate when idle, used on missile turrets | NaN | float | NaN |
| onShoot\_playAnimation | Play a custom animation from an [animation] section after firing this turret | NaN | animation ref | NaN |
| recoilOffset | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN | float | NaN |
| recoilOutTime | Time to get to offset position after firing | NaN | float | NaN |
| recoilReturnTime | Time to return to default position | NaN | float | NaN |
| Section | [projectile\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life: | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | int | NaN |
| deflectionPower: | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | float | NaN |
| explodeOnEndOfLife | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing | NaN | bool | 1.13 |
| autoTargetingOnDeadTarget: | Retarget to nearby unit if target dies while in transit | NaN | bool | NaN |
| unloadUpToXUnitsFromSource | Unload X units from source unit, to projectile explode location | NaN | int | 1.13 |
| teleportSource | Move unit that shot this projectile to projectile explode location | NaN | bool | 1.13 |
| spawnUnit | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank | unit types | 1.13 |
| tags | NaN | NaN | tags | 1.13 |
| flameWeapon: | Generates small flames on hit (only cosmetic) | NaN | bool | NaN |
| NaN | Damage | NaN | NaN | NaN |
| directDamage: | Damage to target unit on hit. Does not work with targetGround:true as we don't have a unit target | NaN | int | NaN |
| areaDamage: | directDamage or areaDamage is required | NaN | int | NaN |
| areaRadius: | How wide areaDamage effects. Note this drops off. | NaN | float | 1.13 |
| areaExpandTime | NaN | NaN | float | 1.13 |
| areaHitAirAndLandAtSameTime | NaN | NaN | bool | 1.13 |
| areaHitUnderwaterAlways | Defaults to false | NaN | NaN | NaN |
| buildingDamageMultiplier | Defaults to 1 | NaN | float | 1.13 |
| shieldDamageMultiplier | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage | float | 1.13 |
| shieldDefectionMultiplier | Defaults to 1. | eg: 0 to ignore shields and directly damage hull | float | 1.13 |
| armourIgnoreAmount | Amount of armour to ignore on target and do damage as if this armour was not there | NaN | NaN | NaN |
| friendlyFire | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy | bool/string | 1.13 |
| NaN | Movement | NaN | NaN | NaN |
| targetGround | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN | bool | NaN |
| speed: | NaN | NaN | float | NaN |
| targetSpeed: | Accelerate to this speed | NaN | float | NaN |
| targetSpeedAcceleration | NaN | NaN | float | 1.13 |
| ballistic: | NaN | NaN | bool | NaN |
| ballistic\_delaymove\_height: | NaN | NaN | float | NaN |
| ballistic\_height: | NaN | NaN | float | NaN |
| targetGroundSpread: | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | float | NaN |
| speedSpread: | Randomly change the starting projectile speed by this amount | NaN | float | NaN |
| instant | Hit target instantly | NaN | bool | NaN |
| instantReuseLast: | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | bool | NaN |
| disableLeadTargeting | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | NaN | bool | 1.13 |
| leadTargetingSpeedCalculation | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | NaN | float | 1.13 |
| NaN | Graphics and effects | NaN | NaN | 1.13 |
| color | NaN | color: #bebe50 | color | NaN |
| image: | Use custom image. Overrides drawType and frame | NaN | file (image) | NaN |
| drawType | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | int | NaN |
| drawSize: | Scale image. Defaults to 1 | NaN | float | NaN |
| frame | Built-in image frame to use, starts at zero. | NaN | int | NaN |
| hitSound: | Default true | NaN | bool | NaN |
| explodeEffect | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | effect ref list | 1.13 |
| explodeEffectOnShield | Use this effect if shield is active on target | NaN | effect ref list | 1.13 |
| teamColorRatio | Mix 0-1 of team colour into color field | NaN | float | 1.13 |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| effectOnCreate | NaN | NaN | effect ref list | 1.13 |
| shouldRevealFog | Reveal fog to player on explode | NaN | bool | 1.13 |
| alwaysVisibleInFog | NaN | NaN | bool | 1.13 |
| nukeWeapon | Shows on mini-map when fired. Some other side effects as well. | NaN | bool | 1.13 |
| trailEffect | true for built-in defaults, but can also point to any custom effects | NaN | bool/effect | NaN |
| trailEffectRate | Defaults to 3 | NaN | float | 1.13 |
| lightSize: | NaN | NaN | float | NaN |
| lightColor | NaN | lightColor: #ffe92b | color | NaN |
| largeHitEffect: | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN | bool | NaN |
| lightingEffect: | Draw as lighting works best with instant:true | NaN | bool | NaN |
| laserEffect: | Draw as laser works best with instant:true | NaN | bool | NaN |
| Section | [movement] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| movementType: | Defines what kind of terrain the unit will be able to move over, along with other properties related to unit types. | movementType: LAND | string | NaN |
| slowDeathFall: | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true | bool | NaN |
| moveSpeed: | Maximum movement speed of the unit. | moveSpeed: 1.2 | float | NaN |
| moveAccelerationSpeed: | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 | float | NaN |
| moveDecelerationSpeed: | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 | float | NaN |
| reverseSpeedPercentage: | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 | float | NaN |
| landOnGround: | Should flying unit land when idle. | landOnGround: false | bool | NaN |
| targetHeight: | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 | float | NaN |
| targetHeightDrift: | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 | float | NaN |
| startingHeightOffset | NaN | NaN | NaN | NaN |
| maxTurnSpeed: | NaN | NaN | float | NaN |
| turnAcceleration: | NaN | NaN | float | NaN |
| moveSlidingMode: | NaN | NaN | bool | NaN |
| moveIgnoringBody: | NaN | NaN | bool | NaN |
| moveSlidingDir: | NaN | NaN | int | NaN |
| joinsGroupFormations: | Defaults to true. Changing not recommended | NaN | bool | NaN |
| Section | [ai] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| useAsBuilder: | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN | bool | NaN |
| disableUse: | Disallow AI building this unit or building | NaN | bool | NaN |
| ai\_upgradePriority | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN | float | NaN |
| NaN | Buildings only | NaN | NaN | NaN |
| buildPriority: | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | float | NaN |
| noneInBaseExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | float | NaN |
| noneGlobalExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | float | NaN |
| upgradedFrom: | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | string | NaN |
| maxGlobal: | NaN | NaN | int | NaN |
| maxEachBase: | NaN | NaN | int | NaN |
| Section | [leg\_#] / [arm\_#] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | Sets position of the foot on the X axis. | NaN | float | NaN |
| y: | Sets position of the foot on the Y axis. | NaN | float | NaN |
| copyFrom: | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | int | NaN |
| attach\_x: | Sets the leg's attach point on the X axis. | NaN | float | NaN |
| attach\_y: | Sets the leg's attach point on the Y axis. | NaN | float | NaN |
| rotateSpeed: | NaN | NaN | float | NaN |
| endDirOffset | Target foot/end rotation relative to body | NaN | NaN | NaN |
| lockMovement | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | bool | NaN |
| heightSpeed: | NaN | NaN | float | NaN |
| moveSpeed | NaN | NaN | NaN | NaN |
| moveWarmUp | NaN | NaN | NaN | NaN |
| holdDisMin: | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | float | NaN |
| holdDisMax: | Defaults to 16. Force reposition of leg at this distance. | NaN | float | NaN |
| holdDisMin\_maxMovingLegs | NaN | NaN | NaN | NaN |
| hold\_moveOnlyIfFurthest | NaN | NaN | NaN | NaN |
| holdDisMin\_checkNeighbours | NaN | NaN | NaN | NaN |
| hardLimit: | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | float | NaN |
| estimatingPositionMultiplier | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| hidden: | NaN | NaN | logic boolean | NaN |
| image\_end | NaN | NaN | image | 1.13 |
| image\_end\_shadow | NaN | NaN | image | 1.13 |
| image\_end\_teamColors | NaN | NaN | NaN | 1.13 |
| image\_foot | same as image\_end | NaN | image | 1.13 |
| image\_foot\_shadow | NaN | NaN | image | NaN |
| image\_middle | NaN | NaN | image | 1.13 |
| image\_leg | same as image\_middle | NaN | image | NaN |
| draw\_foot\_on\_top | NaN | NaN | bool | 1.13 |
| drawOverBody | Draw over the body of unit, defaults of false | NaN | bool | NaN |
| drawUnderAllUnits | Draw over all units | NaN | bool | NaN |
| drawDirOffset | NaN | NaN | float | NaN |
| dust\_effect: | Spawns dust particles on each step. | NaN | bool | NaN |
| spinRate | Makes arm/leg spin, like idleSpin for turrets | NaN | float | NaN |
| favourOppositeSideNeighbours | calculate neighbours with X 10 times closer than Y | NaN | NaN | NaN |
| drawLegWhenZoomedOut | For performance, defaults changes based on unit size | NaN | NaN | NaN |
| drawFootWhenZoomedOut | For performance, defaults changes based on unit size | NaN | NaN | NaN |
| resetAngle: | Unused | NaN | float | NaN |
| Section | [effect\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | NaN | float | 1.13 |
| alsoEmitEffects | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN | effect ref | 1.13 |
| ifSpawnFailsEmitEffects | If 'spawnChance' for this effects fails then emit these effects instead | NaN | NaN | NaN |
| alsoPlaySound | NaN | NaN | sound ref | 1.13 |
| createWhenOffscreen | Defaults false. | NaN | bool | 1.13 |
| createWhenZoomedOut | Defaults true | NaN | bool | 1.13 |
| createWhenOverLiquid | Defaults true | NaN | bool | 1.13 |
| createWhenOverLand | Defaults true | NaN | bool | 1.13 |
| spawnChance | Default 1. If less than 1 effect only has a random chance of being created | NaN | float | 1.13 |
| showInFog | Default false | NaN | boolean | 1.13 |
| delayedStartTimer | Hide for x time before showing and updating effect. | NaN | float | 1.13 |
| liveAfterAttachedDies | Defaults false when attachedToUnit is being used | NaN | bool | 1.13 |
| priority | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN | string | 1.13 |
| NaN | Movement | NaN | NaN | NaN |
| attachedToUnit | Attach to unit or projectile that created this effect. Will move with this object. | NaN | bool | 1.13 |
| alwayStartDirAtZero | Ignore source/attached unit dir | NaN | bool | 1.13 |
| atmospheric | Apply drag to slow this effect down and add small wind effects | NaN | bool | 1.13 |
| physics | Fall to ground and bounces. Needs height to take effect. | NaN | bool | 1.13 |
| physicsGravity | Defaults to 1. height speed acceleration when physics: true | NaN | float | 1.13 |
| xOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xSpeedRelative | NaN | NaN | float | 1.13 |
| ySpeedRelative | NaN | NaN | float | 1.13 |
| xSpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| xSpeedAbsolute | NaN | NaN | float | 1.13 |
| ySpeedAbsolute | NaN | NaN | float | 1.13 |
| xSpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hOffset | height offset from source | NaN | float | 1.13 |
| hOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hSpeed | height speed | NaN | float | 1.13 |
| hSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirOffset | rotation | NaN | float | 1.13 |
| dirOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirSpeed | rotation speed | NaN | float | 1.13 |
| dirSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| NaN | Graphics | NaN | NaN | NaN |
| frameIndex | frame of to use | NaN | int | 1.13 |
| stripIndex | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | int/string | 1.13 |
| Image | Custom image file to use. Cannot be used with stripIndex. | NaN | image | 1.13 |
| imageShadow | Custom image file to use for shadows | NaN | image | NaN |
| scaleTo | Defaults to 1 | NaN | float | 1.13 |
| scaleFrom | Defaults to 1 | NaN | float | 1.13 |
| color | Defaults #FFFFFFFF | NaN | color | 1.13 |
| teamColorRatio | 0-1 | NaN | NaN | NaN |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| fadeInTime | Fade alpha from 0% to 100% for this time at start | NaN | float | 1.13 |
| fadeOut | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN | bool | 1.13 |
| alpha | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN | NaN | NaN |
| shadow | True to draw a shadow. Forced true if imageShadow is used | NaN | NaN | NaN |
| NaN | Animation | NaN | NaN | NaN |
| total\_frames | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN | int | 1.13 |
| animateFrameStart | NaN | NaN | int | 1.13 |
| animateFrameEnd | NaN | NaN | int | 1.13 |
| animateFramePingPong | NaN | NaN | int | 1.13 |
| animateFrameSpeed | NaN | NaN | time | 1.13 |
| animateFrameSpeedRandom | NaN | NaN | time | 1.13 |
| Section | [animation\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| onActions : Unknown | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN | NaN | 1.13 |
| onActionsQueuedUnitPlayAt : float | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN | NaN | 1.13 |
| blendIn : time | Blend with last animation for this time | NaN | NaN | 1.13 |
| blendOut : time | Blend with next animation for this time | NaN | NaN | 1.13 |
| pingPong | Play animation in reverse after it ends | NaN | bool | 1.13 |
| KeyframeTimeScale : float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN | float | 1.13 |
| NaN | Keyframes - create as many as needed | NaN | NaN | NaN |
| arm#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } | NaN | 1.13 |
| leg#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | NaN | NaN | NaN |
| body\_[time] | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} | NaN | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| start : int | Start image frame. deprecated | NaN | NaN | 1.13 |
| end : int | End image frame. deprecated | NaN | NaN | 1.13 |
| scale\_start : float | Start scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| scale\_end : float | End scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| speed : float | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN | NaN | 1.13 |
| NaN | NaN | NaN | NaN | NaN |
| Section | [action\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| text | Text shown in UI | NaN | string | NaN |
| text\_{LANG} | NaN | NaN | NaN | NaN |
| description | A display text when you select your unit's action, used to explain it's purpose. | NaN | string | NaN |
| description\_{LANG} | NaN | NaN | NaN | NaN |
| displayType | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN | NaN | NaN |
| displayRemainingStockpile | Queue is shown as number of times action can be triggered based on price | NaN | bool | NaN |
| pos | Order action appears in UI | NaN | float | NaN |
| iconImage | NaN | NaN | NaN | NaN |
| NaN | Requirements to trigger or enable | NaN | NaN | NaN |
| price | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | resources | NaN |
| isActive | Defaults true. If false then action is disabled and shown in red in UI. | NaN | LogicBoolean | NaN |
| isVisible | Defaults true. If false action is hidden from UI and disabled. | NaN | LogicBoolean | NaN |
| isLocked | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN | LogicBoolean | NaN |
| isLockedMessage | NaN | NaN | string | NaN |
| onlyOneUnitAtATime | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN | bool | NaN |
| autoTrigger | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater() | LogicBoolean | NaN |
| ai\_isDisabled | Defaults false. Stop AI using this action. | NaN | LogicBoolean | NaN |
| NaN | While action is queued | NaN | NaN | NaN |
| buildSpeed | NaN | buildSpeed: 5s | time | NaN |
| highPriorityQueue | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN | bool | NaN |
| canPlayerCancel | NaN | NaN | bool | NaN |
| whenBuilding\_cannotMove | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool | NaN |
| whenBuilding\_playAnimation | Play a custom animation from an [animation] section when in active queue | NaN | animation ref | NaN |
| whenBuilding\_rotateTo | Rotate unit body to this direction when action is in active queue | NaN | float | NaN |
| whenBuilding\_rotateTo\_orBackwards | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN | bool | NaN |
| whenBuilding\_rotateTo\_waitTillRotated | Pause action queue till rotation is finished | NaN | bool | NaN |
| whenBuilding\_temporarilyConvertTo | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN | unit ref | NaN |
| spawnEffectsOnQueue | Effects to spawn at unit when action is first added to queue | NaN | effect ref | NaN |
| playSoundToPlayerOnQueue | Global sound to play to unit's player only when action is first added to queue | NaN | sound ref | NaN |
| NaN | Results (What happens) - Must be at least one result listed | NaN | NaN | NaN |
| convertTo | Convert your unit into another unit. properties are preserved. | NaN | unit ref | NaN |
| fireTurretXAtGround | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo | turret ref | NaN |
| fireTurretXAtGround\_withOffset | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 | point | NaN |
| fireTurretXAtGround\_withProjectile | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN | projectile ref | NaN |
| addEnergy | Adds energy to unit. Has no effect unless energyMax is set | NaN | float | NaN |
| addResources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | resources | NaN |
| alsoTriggerAction | Trigger to results of another action as well. Ignores action's requirements | NaN | action ref | NaN |
| alsoQueueAction | Adds another action into the normal unit's queue. Ignores action's requirements | NaN | action ref | NaN |
| alsoTriggerOrQueueActionConditional | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN | LogicBoolean | NaN |
| spawnEffects | Effects to spawn at unit | NaN | effect ref | NaN |
| playSoundAtUnit | Local sound to play when action finishes | NaN | sound ref | NaN |
| playSoundGlobally | Global sound to play to all players in game | NaN | sound ref | NaN |
| playSoundToPlayer | Global sound to play to unit's player only | NaN | sound ref | NaN |
| addUnitsIntoTransport | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank | NaN | NaN |
| deleteNumUnitsFromTransport | NaN | NaN | int | NaN |
| resetCustomTimer | Reset timer used with self.customTimer() | NaN | LogicBoolean | NaN |
| Type | LogicBoolean | NaN | NaN | NaN |
| Code | Description | Example | Targets | NaN |
| true | NaN | NaN | NaN | NaN |
| false | NaN | NaN | NaN | NaN |
| if | Start all logic booleans with if, unless just using true/false | NaN | NaN | NaN |
| and | NaN | if self.isInWater() and self.energy(greaterThan=1) | NaN | NaN |
| or | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() | NaN | NaN |
| not | NaN | if not self.isOverLiquid() | NaN | NaN |
| NaN | Unit location and movement | NaN | NaN | NaN |
| self.isUnderwater() | NaN | NaN | NaN | NaN |
| self.isAtGroundHeight() | NaN | NaN | NaN | NaN |
| self.isFlying() | NaN | NaN | NaN | NaN |
| self.isMoving() | NaN | NaN | NaN | NaN |
| self.isAtTopSpeed() | NaN | NaN | NaN | NaN |
| self.isInWater() | Touching water | NaN | NaN | NaN |
| self.isOverwater() | Touching or over a water tile | NaN | NaN | NaN |
| self.isOverLiquid() | NaN | NaN | NaN | NaN |
| self.isOverClift() | NaN | NaN | NaN | NaN |
| self.isOverPassableTile() | (parameters: type) | NaN | NaN | NaN |
| self.isOverOpenLand() | shortcut for self.isOverPassableTile(type='LAND') | NaN | NaN | NaN |
| NaN | Unit stats | NaN | NaN | NaN |
| self.hp() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.ammo() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isAmmoEmpty() | shortcut for self.ammo(empty=true) | NaN | NaN | NaN |
| self.ammoIncludingQueued() | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) | NaN | NaN |
| self.energy() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.energyIncludingQueued() | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isEnergyFull() | shortcut for self.energy(full=true) | NaN | NaN | NaN |
| self.isEnergyEmpty() | shortcut for self.energy(empty=true) | NaN | NaN | NaN |
| self.shield() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.kills() | (parameters: greaterThan, lessThan) | NaN | NaN | NaN |
| NaN | Misc | NaN | NaN | NaN |
| game.nukesEnabled() | NaN | NaN | NaN | NaN |
| self.hasFlag() | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this vaule | NaN | NaN |
| self.tags() | (parameters: includes) | NaN | NaN | NaN |
| self.transportingCount() | (parameters: greaterThan, lessThan, empty) | NaN | NaN | NaN |
| self.isAttacking() | NaN | NaN | NaN | NaN |
| self.transportingUnitWithTags() | (parameters: includes) | self.transportingUnitWithTags(includes='human') | NaN | NaN |
| self.hasTakenDamage() | (parameters: withinSeconds=X, laterThanSeconds=X) | self.hasTakenDamage(withinSeconds=1) | NaN | NaN |
| self.timeAlive() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.lastConverted() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.customTimer() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.isOnNeutralTeam() | NaN | NaN | NaN | NaN |
| numberOfUnitsInTeam() | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | NaN | NaN |
| Type | Resources - used by addResources, price, etc | NaN | NaN | NaN |
| Code | Description | Example | Targets | NaN |
| credits | Global resource | NaN | NaN | NaN |
| energy | NaN | NaN | NaN | NaN |
| hp | NaN | NaN | NaN | NaN |
| shield | NaN | price: hp=-100, shield=100 | NaN | NaN |
| ammo | Hidden value on each unit for use by mods | NaN | NaN | NaN |
| setFlag | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1 | NaN | NaN |
| unsetFlag | use with addResources, resourceUsage or price. 0-31 | NaN | NaN | NaN |
| hasFlag | use with price or resourceUsage | NaN | NaN | NaN |
| hasMissingFlag | use with price or resourceUsage | NaN | NaN | NaN |

## 1.13
| Unnamed: 0 | This sheet is for 1.13, for 1.13.2 see sheet tabs below. | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Section | [core] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| NaN | Common keys | NaN | NaN | NaN |
| name: | Defines the raw name for your unit, in which case the game uses to identify as a unique name. (This name is not displayed in-game) | name: customTank\_1 | string | NaN |
| altNames: | comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | string(s) | NaN |
| class: | Reserved for future use, must be CustomUnitMetadata | class: CustomUnitMetadata | string | NaN |
| price: | The cost of your unit from builders/buildings. | price: 500 | int | NaN |
| mass: | The 'weight' of your unit, this will define how it collides with other units, a greater value means it is tougher to push. | mass: 3000 | int | NaN |
| techLevel: | Defines the Tech Level of your unit, there are 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | int | NaN |
| buildSpeed: | Time it takes to build unit (may multiply with builder speed) Formulae for seconds: 10 ÷ 60 = 0.16 (0.16 will make it take 10 seconds to build) | buildSpeed: 0.16 | float | NaN |
| radius: | Circular area around your unit that makes it selectable (mouse click/screen touch) | radius: 20 | int | NaN |
| isBio: | Choose whether your unit is bioligical or not, will effect sound and splat (unless hideScorchMark is true) | isBio: false | bool | NaN |
| isBug: | Changes some death defaults, and sort order in sandbox | NaN | bool | NaN |
| isBuilder | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder | NaN | NaN | 1.13 |
| NaN | Unit stats | NaN | NaN | NaN |
| maxHp: | The max health for your unit. (will spawn with this value) | maxHp: 200 | int | NaN |
| selfRegenRate: | Passive self repair rate | NaN | float | NaN |
| maxShield: | The max shield hitpoints of your unit. Can start with 0 hitpoints if startShieldAtZero is set to true | maxShield: 500 | int | NaN |
| startShieldAtZero: | Sets the unit's shield to 0 HP when it is first built. | startShieldAtZero: true | bool | NaN |
| shieldRegen: | Passive shield regen rate | shieldRegen: 0.15 | float | NaN |
| energyMax: | Defaults to 0. Energy can be used as ammo for turrets or for laser defense | energyMax: 1 | float | NaN |
| energyRegen: | NaN | NaN | float | NaN |
| energyStartingPercentage: | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 | float | NaN |
| energyNeedsToRechargeToFull: | Disable weapons using energy after reaching zero till fully recharged | NaN | float | NaN |
| armour | Damage taken away from each hit (not currently used in any core units) | NaN | NaN | 1.13 |
| armourMinDamageToKeep | Min damage to keep. Defaults to 1 | NaN | NaN | 1.13 |
| generation\_credits: | Income unit creates | generation\_credits: 2 | int | NaN |
| generation\_delay: | How often generation\_credits is added. Defaults to 40 (changing not recommended) | generation\_delay: 40 | int | NaN |
| NaN | UI and Graphics related keys | NaN | NaN | NaN |
| showInEditor: | Set to false to hide unit in sandbox editor (Default true) | showInEditor: true | bool | NaN |
| displayText | The name of your unit that the game shows to the player. | displayText: Custom Tank | string | NaN |
| displayText\_{LANG} | LANG=ISO 639-1 Code to show this text instead when game is in this language | displayText\_es: Hola | NaN | 1.13 |
| displayDescription | Description of your unit that the game shows to the player. | displayDescription: - Fast movement.\n- Light damage. | string | NaN |
| displayDescription\_{LANG} | LANG=ISO 639-1 Code to show this text instead when game is in this language | displayDescription\_es: -Movimiento rapido\n-Daño ligero | NaN | 1.13 |
| displayLocaleKey: | Translation file key for unit name and description | displayLocaleKey: units.mechArtillery | string | NaN |
| displayRadius: | Defaults to radius value. Set to show a larger or smaller selection box ui on units. | displayRadius: 20 | int | NaN |
| shieldRenderRadius | NaN | NaN | NaN | NaN |
| shieldDisplayOnlyDeflection: | Hide shield (if active) unless deflecting shot | shieldDisplayOnlyDeflection: false | bool | NaN |
| shieldDeflectionDisplayRate: | Defaults to 4. High value causes shield deflection to fade disappear faster | shieldDeflectionDisplayRate: 3 | float | NaN |
| NaN | Building only keys | NaN | NaN | NaN |
| isBuilding: | NaN | NaN | bool | NaN |
| footprint | Only applies to buildings, tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile | footprint: -1,-1,1,1 | NaN | NaN |
| constructionFootprint | Only applies to buildings, tiles taken up for placement of other buildings. Defaults to 0,0,0,0 | constructionFootprint: -1,-1,1,3 | NaN | NaN |
| buildingSelectionOffset: | Defaults to 0. Adds or removes padding on the drawn selection rect in UI | NaN | int | NaN |
| buildingToFootprintOffsetX | Defaults to 10 | NaN | float | NaN |
| buildingToFootprintOffsetY | Defaults to 10 | NaN | float | NaN |
| placeOnlyOnResPool: | Normally used for extractors | NaN | bool | NaN |
| selfBuildRate: | Rate unit builds it's self when placed without a builder | NaN | float | NaN |
| NaN | Misc Keys | NaN | NaN | NaN |
| copyFrom: | Use unit data from another ini file as base | copyFrom: customTank\_Default | file (ini) | NaN |
| dont\_load: | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom | dont\_load: true | bool | NaN |
| overrideAndReplace: | Override another unit with this unit. Build links pointing to target unit will be replaced with this unit. And this unit will replace target on maps. | overrideAndReplace: builder, combatEngineer | string(s) | NaN |
| globalScale: | Defaults to 1. Changing not recommend | globalScale: 1 | float | NaN |
| isLocked: | Disallow building of this unit. Can be used with overrideAndReplace to restrict units the player is allowed to build. | isLocked: false | bool | NaN |
| isLockedIfGameModeNoNuke | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: false | NaN | 1.13 |
| experimental: | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: false | bool | NaN |
| stayNeutral: | Set to false to disable capture when unit is on the neutral team | stayNeutral: false | bool | NaN |
| createNeutral | NaN | NaN | NaN | 1.13 |
| resourceRate: | Used with canReclaimResources. Experimental feature that is not yet finished. | NaN | float | NaN |
| tags | List of any comma separated strings. Only used for transportUnitsRequireTag right now, will be used for other things in future | NaN | NaN | 1.13 |
| fogOfWarSightRange: | Set number of tiles this unit can see. Defaults to 15 | fogOfWarSightRange: 15 | int | NaN |
| softCollisionOnAll: | NaN | NaN | int | NaN |
| isUnrepairableUnit | No unit can repair this unit | NaN | NaN | 1.13 |
| isPickableStartingUnit | If true, unit is added to dropdowns for starting unit in game setup menus. | NaN | NaN | 1.13 |
| startFallingWhenStartingUnit | NaN | NaN | NaN | 1.13 |
| soundOnAttackOrder | List of sounds. Only one will be played each attack order | NaN | sound | NaN |
| soundOnMoveOrder | List of sounds. Only one will be played each move order | NaN | sound | NaN |
| NaN | Transport related keys | NaN | NaN | NaN |
| transportSlotsNeeded: | Defaults to 1. Number of slots this unit uses up in a transport, Experimentals are often set to 5 to stop small transports holding them. | NaN | int | 1.13 |
| maxTransportingUnits | Number of slots this units as for transporting other units. | NaN | int | NaN |
| transportUnitsRequireTag | Only allow trasport of units that have one of these tags. | NaN | tags | 1.13 |
| transportUnitsRequireMovementType | Only allow trasport of units that have one of these movement types. | NaN | movementTypes | 1.13 |
| transportUnitsBlockAirAndWaterUnits | Defaults to true if transportUnitsRequireMovementType is empty | NaN | NaN | 1.13 |
| transportUnitsKeepBuiltUnits | Makes built units stay inside transport instead of exiting it once ready | NaN | LogicBoolean | 1.13 |
| transportUnitsCanUnloadUnits | Defaults to: if not self.isOverLiquid() and not self.isMoving() | NaN | LogicBoolean | 1.13 |
| transportUnitsAddUnloadOption | Should unload button be added to the menu | NaN | LogicBoolean | 1.13 |
| transportUnitsKillOnDeath | Default true. If false transporting units don't die when transport dies | eg: if self.isOverLiquid() | LogicBoolean | 1.13 |
| transportUnitsHealBy | Rate to heal units being transported | NaN | float | 1.13 |
| NaN | Construction and factory related keys | NaN | NaN | NaN |
| canRepairBuildings: | isBuilder:true is required as well right now) | NaN | bool | NaN |
| canRepairUnits: | isBuilder:true is required as well right now) | NaN | bool | NaN |
| canReclaimResources: | Used with resourceRate. Experimental feature that is not yet finished. | NaN | bool | NaN |
| autoRepair: | Automatically try and repair damaged units in range ([ai]useAsBuilder:true is required as well right now) | NaN | bool | NaN |
| nanoRange: | Defaults to 85 | NaN | int | NaN |
| nanoRepairSpeed: | Defaults to 0.2 | NaN | float | NaN |
| nanoBuildSpeed: | Defaults to 1 | NaN | float | NaN |
| nanoFactorySpeed: | Defaults to 1 | NaN | float | NaN |
| builtFrom\_#\_name: | canBuild and builtFrom have the same effect just in the opposite direction. BuiltFrom is useful if adding new units to existing buildings | NaN | string | NaN |
| builtFrom\_#\_pos: | Order action appears in UI. | NaN | string | NaN |
| builtFrom\_#\_forceNano: | Build as if this was a building (even if it's a unit) | NaN | bool | NaN |
| canBuild\_#\_name: | List of units this unit can create. Can be buildings or units. (isBuilder:true and canRepairBuildings:true is recommended when adding buildings) | NaN | units | NaN |
| canBuild\_#\_pos: | Order action appears in UI | NaN | string | NaN |
| canBuild\_#\_tech: | Tech level. Mostly just effects action colour in UI. Defaults to 1 | NaN | int | NaN |
| canBuild\_#\_forceNano: | Build target as if it was a building (even if it's a unit) | NaN | bool | NaN |
| exit\_x: | Where created or unloaded units appear. Defaults to 0 | exit\_x: 0 | float | NaN |
| exit\_y: | Where created or unloaded units appear. Defaults to 5. | exit\_x: 5 | float | NaN |
| exit\_dirOffset : float | Defaults to 180 for units. 0 for buildings | NaN | NaN | 1.13 |
| exit\_heightOffset : float | Defaults to 0 | NaN | NaN | 1.13 |
| exit\_moveAwayAmount : float | Defaults to 70 | NaN | NaN | 1.13 |
| NaN | Death related keys | NaN | NaN | NaN |
| dieOnConstruct: | Delete this unit when it starts making a building. Target building likely will need selfBuildRate set to be created without a builder. | NaN | bool | NaN |
| dieOnZeroEnergy | Kill this unit if energy level reaches zero. | dieOnZeroEnergy: false | bool | 1.13 |
| numBitsOnDeath | NaN | NaN | int | NaN |
| nukeOnDeath: | NaN | NaN | bool | NaN |
| nukeOnDeathRange: | NaN | NaN | float | NaN |
| nukeOnDeathDamage: | NaN | NaN | float | NaN |
| nukeOnDeathDisableWhenNoNuke: | Defaults to false | NaN | bool | NaN |
| fireTurretXAtSelfOnDeath | NaN | NaN | NaN | NaN |
| explodeOnDeath | defaults to true | NaN | boolean | 1.13 |
| explodeOnDeathGroundCollision | defaults to true | NaN | boolean | 1.13 |
| effectOnDeath | NaN | NaN | effect ref | 1.13 |
| effectOnDeathGroundCollision | NaN | NaN | effect ref | 1.13 |
| unitsSpawnedOnDeath | unit list | unitsSpawnedOnDeath: tank\*5, hoverTank | units | 1.13 |
| unitsSpawnedOnDeath\_setToTeamOfLastAttacker | NaN | NaN | bool | NaN |
| hideScorchMark: | NaN | NaN | bool | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| action\_#\_convertTo: | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 | string | deprecated 1.13 |
| action\_#\_pos: | Order action appears in UI | NaN | float | deprecated 1.13 |
| action\_#\_price: | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | int | deprecated 1.13 |
| action\_#\_text: | A display text when you select your unit's action, used to explain it's purpose. (All your sub actions will be linked to the # you use) | action\_1\_text: Upgrade to Custom Tank 2 | string | deprecated 1.13 |
| action\_#\_description: | NaN | NaN | string | deprecated 1.13 |
| action\_#\_addEnergy: | Adds energy to unit. Has no effect unless energyMax is set | NaN | float | deprecated 1.13 |
| action\_#\_whenBuilding\_cannotMove: | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool | deprecated 1.13 |
| Section | [graphics] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| image: | File path to png image. | NaN | file (image) | NaN |
| image\_back: | An optional image drawn behind other units. Useful for factories that units exit | NaN | file (image) | NaN |
| image\_wreak: | Image to use when unit dies. Can be NONE to leave no wreak | NaN | file (image) | NaN |
| image\_offsetX: | NaN | NaN | int | NaN |
| image\_offsetY: | NaN | NaN | int | NaN |
| teamColorsUseHue: | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN | bool | NaN |
| imageSmoothing: | NaN | NaN | bool | NaN |
| scaleImagesTo: | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | NaN | float | NaN |
| imageScale: | Resize image. Defaults to 1. Effects leg, and shadow images as well. | NaN | float | NaN |
| drawLayer: | Set to experimentals, or leave line out | NaN | string | NaN |
| whenBeingBuiltMakeTransparentTill | NaN | NaN | float | 1.13 |
| NaN | Turrets (images can also be set on each turret) | NaN | NaN | NaN |
| image\_turret: | Default image for all turrets, can also be set per turret | NaN | file (image) | NaN |
| teamColorsOnTurret | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | NaN | bool | NaN |
| scaleTurretImagesTo: | NaN | NaN | float | NaN |
| lock\_body\_rotation\_with\_main\_turret: | Locks body image locked to first turret's direction | NaN | bool | NaN |
| lock\_leg\_rotation\_with\_main\_turret | NaN | NaN | bool | 1.13 |
| NaN | Shadow | NaN | NaN | NaN |
| image\_shadow: | Image file, NONE, or AUTO. (AUTO will use image and make it transparent black only.) | NaN | file (image) | NaN |
| shadowOffsetX: | NaN | NaN | float | NaN |
| shadowOffsetY: | NaN | NaN | float | NaN |
| lock\_shadow\_rotation\_with\_main\_turret: | Locks body image shadow locked to first turret's direction | NaN | bool | NaN |
| NaN | Effects and animation | NaN | NaN | NaN |
| total\_frames | Defaults to 1. Animations require this. | NaN | int | NaN |
| frame\_width: | Calculated for you if total frames is set, but can be overridden | NaN | int | NaN |
| frame\_height: | Defaults to image height | NaN | int | NaN |
| splastEffect: | True to create a water wave effect when over water. Default false | NaN | bool | NaN |
| dustEffect: | True to create a dust effect when over land. Default false | NaN | bool | NaN |
| splastEffectReverse: | True to also create effect when unit is reversing | NaN | bool | NaN |
| dustEffectReverse: | True to also create effect when unit is reversing | NaN | bool | NaN |
| movementEffect | Custom movement effect, can be anything | eg: movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | effect | 1.13 |
| movementEffectReverse | NaN | NaN | effect | 1.13 |
| movementEffectRate | NaN | NaN | float | 1.13 |
| movementEffectReverseFlipEffects | Create effect as if unit has rotated 180 when reversing | NaN | bool | 1.13 |
| repairEffect | Custom movement effect, can be anything. Replaces default effect from builders | NaN | NaN | NaN |
| repairEffectAtTarget | NaN | NaN | NaN | NaN |
| repairEffectRate | Defaults to 5 | NaN | NaN | NaN |
| rotate\_with\_direction: | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN | bool | NaN |
| animation\_direction\_units: | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN | float | NaN |
| animation\_direction\_strideX: | Animation frames to offset on direction change. | NaN | int | NaN |
| animation\_direction\_strideY: | Animation frames to offset on direction change. Used with frame\_height. | NaN | int | NaN |
| animation\_direction\_starting: | Direction for first frame | NaN | float | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| animation\_TYPE\_start: | Deprecated, use [animation] section instead | animation\_moving\_start: 0 | int | deprecated 1.13 |
| animation\_TYPE\_end: | End frame, must be larger then start | animation\_moving\_end: 3 | int | deprecated 1.13 |
| animation\_TYPE\_scale\_start: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float | deprecated 1.13 |
| animation\_TYPE\_scale\_end: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float | deprecated 1.13 |
| animation\_TYPE\_speed: | Delay for each frame of animation. Larger values cause slower animation | NaN | float | deprecated 1.13 |
| animation\_TYPE\_pingPong: | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN | bool | deprecated 1.13 |
| Section | [attack] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| maxAttackRange: | (multiplied by globalScale) | NaN | float | NaN |
| canAttack: | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN | bool | NaN |
| canAttackFlyingUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackLandUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackUnderwaterUnits: | can also be narrowed per turret | NaN | LogicBoolean | NaN |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN | LogicBoolean | NaN |
| turretMultiTargeting | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | NaN | NaN | 1.13 |
| isMelee: | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN | bool | NaN |
| turretRotateWithBody | Are all turrets rotated when body rotates. Defaults to true | NaN | bool | NaN |
| attackMovement: | normal/bomber. bomber attack movement will retreat when energy runs out | NaN | string | NaN |
| dieOnAttack: | NaN | NaN | bool | NaN |
| isFixedFiring: | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN | bool | NaN |
| aimOffsetSpread: | Offset each shot multiplied by target radius. Defaults to 0.6 | aimOffsetSpread:0 will make unit always attack center | bool | NaN |
| stopTargetingAfterFiring | Unit stops targeting after firing a shot. Rarely used or needed. | NaN | NaN | 1.13 |
| disablePassiveTargeting: | Unit only attacks manually ordered target. Rarely used or needed. | NaN | bool | NaN |
| NaN | Deprecated Keys - can be used but better to set these per turret | NaN | NaN | NaN |
| turretSize: | (multiplied by globalScale) | NaN | float | NaN |
| turretTurnSpeed: | NaN | NaN | float | NaN |
| shootDelay: | Global delay, can also use delay on each turret | NaN | float | NaN |
| Section | [turret\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | NaN | NaN | float | NaN |
| y: | NaN | NaN | float | NaN |
| copyFrom: | Copy all values from another turret as defaut values for this turret | copyFrom: 1 | turret ref | NaN |
| projectile | Projectile fired from this turret. | eg: projectile: torpedo | projectile ref | NaN |
| barrelX | Defaults to 0 | NaN | NaN | 1.13 |
| barrelY | Defaults to size. Note: size and barrelY have the same meaning | NaN | NaN | 1.13 |
| size: | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 | float | NaN |
| turnSpeed | Max turn speed of the turret | NaN | NaN | NaN |
| turnSpeedAcceleration | Defaults to disabled, and full turn speed is used. | NaN | NaN | NaN |
| turnSpeedDeceleration | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | NaN | NaN | NaN |
| idleDir | Defaults to 0 | NaN | float | NaN |
| idleDirReversing | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | NaN | float | 1.13 |
| shouldResetTurret: | Defaults true. False to disable the reseting turret angle when idle | NaN | bool | NaN |
| attachedTo: | Id of another turret to attach to, will be positioned relative to it, and rotate with it. | NaN | turret ref | NaN |
| slave: | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN | bool | NaN |
| isMainNanoTurret: | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN | bool | NaN |
| energyUsage: | Required energy to fire weapon. Same as resourceUsage: energy=X | NaN | float | NaN |
| resourceUsage | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | price | NaN |
| NaN | Timing | NaN | NaN | NaN |
| delay: | Override global shootDelay for this turret | NaN | float | NaN |
| linkDelayWithTurret | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN | turret ref | NaN |
| warmup: | Delay before firing a shot. | NaN | float | NaN |
| warmupCallDownRate | Rate to reduce warmup when turret is not ready to fire at any targets | NaN | float | NaN |
| warmupNoReset | Defaults to false. When true warmup is not reset after firing a shot. Used with warmupCallDownRate | NaN | bool | NaN |
| warmupShootDelayTransfer | Defaults to 0, a multiplier which reduces the next shot delay by the warmup value. When used with warmupNoReset, can make a each shot faster. | NaN | float | NaN |
| NaN | Targeting control | NaN | NaN | NaN |
| canShoot: | Defaults to true | NaN | bool | NaN |
| canAttackFlyingUnits: | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | LogicBoolean | NaN |
| canAttackLandUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackUnderwaterUnits: | NaN | NaN | LogicBoolean | NaN |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | LogicBoolean | NaN |
| canAttackCondition: | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | LogicBoolean | NaN |
| clearTurretTargetAfterFiring | NaN | NaN | NaN | 1.13 |
| limitingRange: | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | float | NaN |
| limitingAngle | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN | NaN | 1.13 |
| limitingMinRange | Sets minimum range for turret. | limitingMinRange: 200 | NaN | 1.13 |
| interceptProjectiles\_withTags | Currently used with anti-nuke units. | NaN | NaN | 1.13 |
| interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN | NaN |
| interceptProjectiles\_andUnderDistance | Defaults to 2000, distance inflight before firing | NaN | NaN | NaN |
| interceptProjectiles\_andOverHeight | Defaults to 0 | NaN | NaN | NaN |
| laserDefenceEnergyUse: | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| invisible: | Don't render this turret, but still can shoot, etc. | NaN | bool | NaN |
| image: | Use custom image. Overrides unit's main turret image | NaN | file (image) | NaN |
| chargeEffectImage:\n | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | file (image) | NaN |
| warmupStartEffect | NaN | NaN | effects | NaN |
| shoot\_sound: | NaN | NaN | string | NaN |
| shoot\_sound\_vol: | NaN | NaN | float | NaN |
| shoot\_flame: | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 | effects | NaN |
| shoot\_light | NaN | NaN | color | NaN |
| idleSpin: | Spin rate when idle, used on missile turrets | NaN | float | NaN |
| onShoot\_playAnimation | Play a custom animation from an [animation] section after firing this turret | NaN | animation ref | NaN |
| recoilOffset | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN | float | NaN |
| recoilOutTime | Time to get to offset position after firing | NaN | float | NaN |
| recoilReturnTime | Time to return to default position | NaN | float | NaN |
| Section | [projectile\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life: | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | int | NaN |
| deflectionPower: | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | float | NaN |
| explodeOnEndOfLife | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing | NaN | bool | 1.13 |
| autoTargetingOnDeadTarget: | Retarget to nearby unit if target dies while in transit | NaN | bool | NaN |
| unloadUpToXUnitsFromSource | Unload X units from source unit, to projectile explode location | NaN | int | 1.13 |
| teleportSource | Move unit that shot this projectile to projectile explode location | NaN | bool | 1.13 |
| spawnUnit | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank | unit types | 1.13 |
| tags | NaN | NaN | tags | 1.13 |
| flameWeapon: | Generates small flames on hit (only cosmetic) | NaN | bool | NaN |
| NaN | Damage | NaN | NaN | NaN |
| directDamage: | Damage to target unit on hit. Does not work with targetGround:true as we don't have a unit target | NaN | int | NaN |
| areaDamage: | directDamage or areaDamage is required | NaN | int | NaN |
| areaRadius: | How wide areaDamage effects. Note this drops off. | NaN | float | 1.13 |
| areaExpandTime | NaN | NaN | float | 1.13 |
| areaHitAirAndLandAtSameTime | NaN | NaN | bool | 1.13 |
| areaHitUnderwaterAlways | Defaults to false | NaN | NaN | NaN |
| buildingDamageMultiplier | Defaults to 1 | NaN | float | 1.13 |
| shieldDamageMultiplier | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage | float | 1.13 |
| shieldDefectionMultiplier | Defaults to 1. | eg: 0 to ignore shields and directly damage hull | float | 1.13 |
| armourIgnoreAmount | Amount of armour to ignore on target and do damage as if this armour was not there | NaN | NaN | NaN |
| friendlyFire | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy | bool/string | 1.13 |
| NaN | Movement | NaN | NaN | NaN |
| targetGround | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN | bool | NaN |
| speed: | NaN | NaN | float | NaN |
| targetSpeed: | Accelerate to this speed | NaN | float | NaN |
| targetSpeedAcceleration | NaN | NaN | float | 1.13 |
| ballistic: | NaN | NaN | bool | NaN |
| ballistic\_delaymove\_height: | NaN | NaN | float | NaN |
| ballistic\_height: | NaN | NaN | float | NaN |
| targetGroundSpread: | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | float | NaN |
| speedSpread: | Randomly change the starting projectile speed by this amount | NaN | float | NaN |
| instant | Hit target instantly | NaN | bool | NaN |
| instantReuseLast: | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | bool | NaN |
| disableLeadTargeting | NaN | NaN | bool | 1.13 |
| leadTargetingSpeedCalculation | NaN | NaN | float | 1.13 |
| NaN | Graphics and effects | NaN | NaN | 1.13 |
| color | NaN | color: #bebe50 | color | NaN |
| image: | Use custom image. Overrides drawType and frame | NaN | file (image) | NaN |
| drawType | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | int | NaN |
| drawSize: | Scale image. Defaults to 1 | NaN | float | NaN |
| frame | Built-in image frame to use, starts at zero. | NaN | int | NaN |
| hitSound: | Default true | NaN | bool | NaN |
| explodeEffect | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | effect ref list | 1.13 |
| explodeEffectOnShield | Use this effect if shield is active on target | NaN | effect ref list | 1.13 |
| teamColorRatio | Mix 0-1 of team colour into color field | NaN | float | 1.13 |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| effectOnCreate | NaN | NaN | effect ref list | 1.13 |
| shouldRevealFog | Reveal fog to player on explode | NaN | bool | 1.13 |
| alwaysVisibleInFog | NaN | NaN | bool | 1.13 |
| nukeWeapon | Shows on mini-map when fired. Some other side effects as well. | NaN | bool | 1.13 |
| trailEffect | true for built-in defaults, but can also point to any custom effects | NaN | bool/effect | NaN |
| trailEffectRate | Defaults to 3 | NaN | float | 1.13 |
| lightSize: | NaN | NaN | float | NaN |
| lightColor | NaN | lightColor: #ffe92b | color | NaN |
| largeHitEffect: | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN | bool | NaN |
| lightingEffect: | Draw as lighting works best with instant:true | NaN | bool | NaN |
| laserEffect: | Draw as laser works best with instant:true | NaN | bool | NaN |
| Section | [movement] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| movementType: | Defines what kind of terrain the unit will be able to move over, along with other properties related to unit types. | movementType: LAND | string | NaN |
| slowDeathFall: | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true | bool | NaN |
| moveSpeed: | Maximum movement speed of the unit. | moveSpeed: 1.2 | float | NaN |
| moveAccelerationSpeed: | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 | float | NaN |
| moveDecelerationSpeed: | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 | float | NaN |
| reverseSpeedPercentage: | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 | float | NaN |
| landOnGround: | Should flying unit land when idle. | landOnGround: false | bool | NaN |
| targetHeight: | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 | float | NaN |
| targetHeightDrift: | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 | float | NaN |
| startingHeightOffset | NaN | NaN | NaN | NaN |
| maxTurnSpeed: | NaN | NaN | float | NaN |
| turnAcceleration: | NaN | NaN | float | NaN |
| moveSlidingMode: | NaN | NaN | bool | NaN |
| moveIgnoringBody: | NaN | NaN | bool | NaN |
| moveSlidingDir: | NaN | NaN | int | NaN |
| joinsGroupFormations: | Defaults to true. Changing not recommended | NaN | bool | NaN |
| Section | [ai] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| useAsBuilder: | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN | bool | NaN |
| disableUse: | Disallow AI building this unit or building | NaN | bool | NaN |
| ai\_upgradePriority | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN | float | NaN |
| NaN | Buildings only | NaN | NaN | NaN |
| buildPriority: | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | float | NaN |
| noneInBaseExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | float | NaN |
| noneGlobalExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | float | NaN |
| upgradedFrom: | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | string | NaN |
| maxGlobal: | NaN | NaN | int | NaN |
| maxEachBase: | NaN | NaN | int | NaN |
| Section | [leg\_#] / [arm\_#] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| x: | Sets position of the foot on the X axis. | NaN | float | NaN |
| y: | Sets position of the foot on the Y axis. | NaN | float | NaN |
| copyFrom: | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | int | NaN |
| attach\_x: | Sets the leg's attach point on the X axis. | NaN | float | NaN |
| attach\_y: | Sets the leg's attach point on the Y axis. | NaN | float | NaN |
| rotateSpeed: | NaN | NaN | float | NaN |
| lockMovement | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | bool | NaN |
| heightSpeed: | NaN | NaN | float | NaN |
| moveSpeed | NaN | NaN | NaN | NaN |
| moveWarmUp | NaN | NaN | NaN | NaN |
| holdDisMin: | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | float | NaN |
| holdDisMax: | Defaults to 16. Force reposition of leg at this distance. | NaN | float | NaN |
| holdDisMin\_maxMovingLegs | NaN | NaN | NaN | NaN |
| hold\_moveOnlyIfFurthest | NaN | NaN | NaN | NaN |
| holdDisMin\_checkNeighbours | NaN | NaN | NaN | NaN |
| hardLimit: | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | float | NaN |
| estimatingPositionMultiplier | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN | float | NaN |
| NaN | Graphics and effects | NaN | NaN | NaN |
| hidden: | NaN | NaN | bool | NaN |
| image\_end | NaN | NaN | image | 1.13 |
| image\_end\_shadow | NaN | NaN | image | 1.13 |
| image\_end\_teamColors | NaN | NaN | NaN | 1.13 |
| image\_foot | same as image\_end | NaN | image | 1.13 |
| image\_foot\_shadow | NaN | NaN | image | NaN |
| image\_middle | NaN | NaN | image | 1.13 |
| image\_leg | same as image\_middle | NaN | image | NaN |
| draw\_foot\_on\_top | NaN | NaN | bool | 1.13 |
| drawOverBody | Draw over the body of unit, defaults of false | NaN | bool | NaN |
| drawUnderAllUnits | Draw over all units | NaN | bool | NaN |
| drawDirOffset | NaN | NaN | float | NaN |
| dust\_effect: | Spawns dust particles on each step. | NaN | bool | NaN |
| spinRate | Makes arm/leg spin, like idleSpin for turrets | NaN | float | NaN |
| favourOppositeSideNeighbours | calculate neighbours with X 10 times closer than Y | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| resetAngle: | Unused | NaN | float | NaN |
| Section | [effect\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| life | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | NaN | float | 1.13 |
| alsoEmitEffects | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN | effect ref | 1.13 |
| alsoPlaySound | NaN | NaN | sound ref | 1.13 |
| createWhenOffscreen | Defaults false. | NaN | bool | 1.13 |
| createWhenZoomedOut | Defaults true | NaN | bool | 1.13 |
| createWhenOverLiquid | Defaults true | NaN | bool | 1.13 |
| createWhenOverLand | Defaults true | NaN | bool | 1.13 |
| spawnChance | Default 1. If less than 1 effect only has a random chance of being created | NaN | float | 1.13 |
| showInFog | Default false | NaN | boolean | 1.13 |
| delayedStartTimer | Hide for x time before showing and updating effect. | NaN | float | 1.13 |
| liveAfterAttachedDies | Defaults false when attachedToUnit is being used | NaN | bool | 1.13 |
| priority | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN | string | 1.13 |
| NaN | Movement | NaN | NaN | NaN |
| attachedToUnit | Attach to unit or projectile that created this effect. Will move with this object. | NaN | bool | 1.13 |
| alwayStartDirAtZero | Ignore source/attached unit dir | NaN | bool | 1.13 |
| atmospheric | Apply drag to slow this effect down and add small wind effects | NaN | bool | 1.13 |
| physics | Fall to ground and bounces. Needs height to take effect. | NaN | bool | 1.13 |
| physicsGravity | Defaults to 1. height speed acceleration when physics: true | NaN | float | 1.13 |
| xOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetRelative | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetRelativeRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| yOffsetAbsolute | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | float | 1.13 |
| xOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| yOffsetAbsoluteRandom | Random offset by +/- this value | NaN | float | 1.13 |
| xSpeedRelative | NaN | NaN | float | 1.13 |
| ySpeedRelative | NaN | NaN | float | 1.13 |
| xSpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedRelativeRandom | Randomly change by -value to value | NaN | float | 1.13 |
| xSpeedAbsolute | NaN | NaN | float | 1.13 |
| ySpeedAbsolute | NaN | NaN | float | 1.13 |
| xSpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| ySpeedAbsoluteRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hOffset | height offset from source | NaN | float | 1.13 |
| hOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| hSpeed | height speed | NaN | float | 1.13 |
| hSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirOffset | rotation | NaN | float | 1.13 |
| dirOffsetRandom | Randomly change by -value to value | NaN | float | 1.13 |
| dirSpeed | rotation speed | NaN | float | 1.13 |
| dirSpeedRandom | Randomly change by -value to value | NaN | float | 1.13 |
| NaN | Graphics | NaN | NaN | NaN |
| frameIndex | frame of to use | NaN | int | 1.13 |
| stripIndex | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | int/string | 1.13 |
| Image | Custom image file to use. Cannot be used with stripIndex. | NaN | image | 1.13 |
| imageShadow | Custom image file to use for shadows | NaN | image | NaN |
| scaleTo | Defaults to 1 | NaN | float | 1.13 |
| scaleFrom | Defaults to 1 | NaN | float | 1.13 |
| color | Defaults #FFFFFFFF | NaN | color | 1.13 |
| drawUnderUnits | NaN | NaN | bool | 1.13 |
| fadeInTime | Fade alpha from 0% to 100% for this time at start | NaN | float | 1.13 |
| fadeOut | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN | bool | 1.13 |
| alpha | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN | NaN | NaN |
| shadow | True to draw a shadow. Forced true if imageShadow is used | NaN | NaN | NaN |
| NaN | Animation | NaN | NaN | NaN |
| total\_frames | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN | int | 1.13 |
| animateFrameStart | NaN | NaN | int | 1.13 |
| animateFrameEnd | NaN | NaN | int | 1.13 |
| animateFramePingPong | NaN | NaN | int | 1.13 |
| animateFrameSpeed | NaN | NaN | time | 1.13 |
| animateFrameSpeedRandom | NaN | NaN | time | 1.13 |
| Section | [animation\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| onActions : Unknown | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN | NaN | 1.13 |
| onActionsQueuedUnitPlayAt : float | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN | NaN | 1.13 |
| blendIn : time | Blend with last animation for this time | NaN | NaN | 1.13 |
| blendOut : time | Blend with next animation for this time | NaN | NaN | 1.13 |
| pingPong | Play animation in reverse after it ends | NaN | bool | 1.13 |
| KeyframeTimeScale : float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN | float | 1.13 |
| NaN | Keyframes - create as many as needed | NaN | NaN | NaN |
| arm#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } | NaN | 1.13 |
| leg#\_[time] | Adds a keyframe at time. Use multiple times to create animation. | NaN | NaN | NaN |
| body\_[time] | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} | NaN | NaN |
| NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN | NaN |
| start : int | Start image frame. deprecated | NaN | NaN | 1.13 |
| end : int | End image frame. deprecated | NaN | NaN | 1.13 |
| scale\_start : float | Start scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| scale\_end : float | End scale. Deprecated, use body keyframes instead. | NaN | NaN | 1.13 |
| speed : float | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN | NaN | 1.13 |
| NaN | NaN | NaN | NaN | NaN |
| Section | [action\_NAME] | NaN | NaN | NaN |
| Code | Description | Example | Value Type | NaN |
| text | Text shown in UI | NaN | string | NaN |
| description | A display text when you select your unit's action, used to explain it's purpose. | NaN | string | NaN |
| displayType | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN | NaN | NaN |
| displayRemainingStockpile | Queue is shown as number of times action can be triggered based on price | NaN | bool | NaN |
| pos | Order action appears in UI | NaN | float | NaN |
| NaN | Requirements to trigger or enable | NaN | NaN | NaN |
| price | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | resources | NaN |
| isActive | Defaults true. If false then action is disabled and shown in red in UI. | NaN | LogicBoolean | NaN |
| isVisible | Defaults true. If false action is hidden from UI and disabled. | NaN | LogicBoolean | NaN |
| isLocked | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN | LogicBoolean | NaN |
| isLockedMessage | NaN | NaN | string | NaN |
| onlyOneUnitAtATime | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN | bool | NaN |
| autoTrigger | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater() | LogicBoolean | NaN |
| ai\_isDisabled | Defaults false. Stop AI using this action. | NaN | LogicBoolean | NaN |
| NaN | While action is queued | NaN | NaN | NaN |
| buildSpeed | NaN | buildSpeed: 5s | time | NaN |
| highPriorityQueue | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN | bool | NaN |
| canPlayerCancel | NaN | NaN | bool | NaN |
| whenBuilding\_cannotMove | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool | NaN |
| whenBuilding\_playAnimation | Play a custom animation from an [animation] section when in active queue | NaN | animation ref | NaN |
| whenBuilding\_rotateTo | Rotate unit body to this direction when action is in active queue | NaN | float | NaN |
| whenBuilding\_rotateTo\_orBackwards | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN | bool | NaN |
| whenBuilding\_rotateTo\_waitTillRotated | Pause action queue till rotation is finished | NaN | bool | NaN |
| whenBuilding\_temporarilyConvertTo | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN | unit ref | NaN |
| spawnEffectsOnQueue | Effects to spawn at unit when action is first added to queue | NaN | effect ref | NaN |
| playSoundToPlayerOnQueue | Global sound to play to unit's player only when action is first added to queue | NaN | sound ref | NaN |
| NaN | Results (What happens) - Must be at least one result listed | NaN | NaN | NaN |
| convertTo | Convert your unit into another unit. properties are preserved. | NaN | unit ref | NaN |
| fireTurretXAtGround | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo | turret ref | NaN |
| fireTurretXAtGround\_withOffset | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 | point | NaN |
| fireTurretXAtGround\_withProjectile | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN | projectile ref | NaN |
| addEnergy | Adds energy to unit. Has no effect unless energyMax is set | NaN | float | NaN |
| addResources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | resources | NaN |
| alsoTriggerAction | Trigger to results of another action as well. Ignores action's requirements | NaN | action ref | NaN |
| alsoQueueAction | Adds another action into the normal unit's queue. Ignores action's requirements | NaN | action ref | NaN |
| alsoTriggerOrQueueActionConditional | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN | LogicBoolean | NaN |
| spawnEffects | Effects to spawn at unit | NaN | effect ref | NaN |
| playSoundAtUnit | Local sound to play when action finishes | NaN | sound ref | NaN |
| playSoundGlobally | Global sound to play to all players in game | NaN | sound ref | NaN |
| playSoundToPlayer | Global sound to play to unit's player only | NaN | sound ref | NaN |
| addUnitsIntoTransport | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank | NaN | NaN |
| resetCustomTimer | Reset timer used with self.customTimer() | NaN | LogicBoolean | NaN |
| Type | LogicBoolean | NaN | NaN | NaN |
| Code | Description | Example | Targets | NaN |
| true | NaN | NaN | NaN | NaN |
| false | NaN | NaN | NaN | NaN |
| if | Start all logic booleans with if, unless just using true/false | NaN | NaN | NaN |
| and | NaN | if self.isInWater() and self.energy(greaterThan=1) | NaN | NaN |
| or | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() | NaN | NaN |
| not | NaN | if not self.isOverLiquid() | NaN | NaN |
| NaN | Unit location and movement | NaN | NaN | NaN |
| self.isUnderwater() | NaN | NaN | NaN | NaN |
| self.isAtGroundHeight() | NaN | NaN | NaN | NaN |
| self.isFlying() | NaN | NaN | NaN | NaN |
| self.isMoving() | NaN | NaN | NaN | NaN |
| self.isAtTopSpeed() | NaN | NaN | NaN | NaN |
| self.isInWater() | Touching water | NaN | NaN | NaN |
| self.isOverwater() | Touching or over a water tile | NaN | NaN | NaN |
| self.isOverLiquid() | NaN | NaN | NaN | NaN |
| self.isOverClift() | NaN | NaN | NaN | NaN |
| self.isOverPassableTile() | (parameters: type) | NaN | NaN | NaN |
| self.isOverOpenLand() | shortcut for self.isOverPassableTile(type='LAND') | NaN | NaN | NaN |
| NaN | Unit stats | NaN | NaN | NaN |
| self.hp() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.ammo() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isAmmoEmpty() | shortcut for self.ammo(empty=true) | NaN | NaN | NaN |
| self.ammoIncludingQueued() | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) | NaN | NaN |
| self.energy() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.energyIncludingQueued() | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| self.isEnergyFull() | shortcut for self.energy(full=true) | NaN | NaN | NaN |
| self.isEnergyEmpty() | shortcut for self.energy(empty=true) | NaN | NaN | NaN |
| self.shield() | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN | NaN |
| NaN | Misc | NaN | NaN | NaN |
| game.nukesEnabled() | NaN | NaN | NaN | NaN |
| self.hasFlag() | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this vaule | NaN | NaN |
| self.tags() | (parameters: includes) | NaN | NaN | NaN |
| self.transportingCount() | (parameters: greaterThan, lessThan, empty) | NaN | NaN | NaN |
| self.isAttacking() | NaN | NaN | NaN | NaN |
| self.transportingUnitWithTags() | (parameters: includes) | self.transportingUnitWithTags(includes='human') | NaN | NaN |
| self.hasTakenDamage() | (parameters: withinSeconds=X, laterThanSeconds=X) | self.hasTakenDamage(withinSeconds=1) | NaN | NaN |
| self.timeAlive() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.lastConverted() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| self.customTimer() | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN | NaN |
| Type | Resources - used by addResources, price, etc | NaN | NaN | NaN |
| Code | Description | Example | Targets | NaN |
| credits | Global resource | NaN | NaN | NaN |
| energy | NaN | NaN | NaN | NaN |
| hp | NaN | NaN | NaN | NaN |
| shield | NaN | price: hp=-100, shield=100 | NaN | NaN |
| ammo | Hidden value on each unit for use by mods | NaN | NaN | NaN |
| setFlag | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1 | NaN | NaN |
| unsetFlag | use with addResources, resourceUsage or price. 0-31 | NaN | NaN | NaN |
| hasFlag | use with price or resourceUsage | NaN | NaN | NaN |
| hasMissingFlag | use with price or resourceUsage | NaN | NaN | NaN |

## 1.12
| Unnamed: 0 | This sheet is for 1.12, for 1.13.2 see sheet tabs below. | Unnamed: 2 | Unnamed: 3 |
| --- | --- | --- | --- |
| Section | [core] | NaN | NaN |
| Code | Description | Example | Value Type |
| name: | Defines the raw name for your unit, in which case the game uses to identify as a unique name. (This name is not displayed in-game) | name: customTank\_1 | string |
| class: | Reserved for future use, must be CustomUnitMetadata | class: CustomUnitMetadata | string |
| price: | The cost of your unit from builders/buildings. | price: 500 | int |
| maxHp: | The max health for your unit. (will spawn with this value) | maxHp: 200 | int |
| mass: | The 'weight' of your unit, this will define how it collides with other units, a greater value means it is tougher to push. | mass: 3000 | int |
| techLevel: | Defines the Tech Level of your unit, there are 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | int |
| buildSpeed: | Time it takes to build unit (may multiply with builder speed) Formulae for seconds: 10 ÷ 60 = 0.16 (0.16 will make it take 10 seconds to build) | buildSpeed: 0.16 | float |
| radius: | Circular area around your unit that makes it selectable (mouse click/screen touch) | radius: 20 | int |
| isBio: | Choose wether your unit is bioligical or not, will effect sound and splat (unless hideScorchMark is true) | isBio: false | bool |
| displayText: | The name of your unit that the game shows to the player. | displayText: Custom Tank | string |
| displayDescription: | Description of your unit that the game shows to the player. | displayDescription: - Fast movement.\n- Light damage. | string |
| copyFrom: | Use unit data from another ini file as base | copyFrom: customTank\_Default | file (ini) |
| dont\_load: | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom | dont\_load: true | bool |
| altNames: | comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | string(s) |
| overrideAndReplace: | Override another unit with this unit. Build links pointing to target unit will be replaced with this unit. And this unit will replace target on maps. | overrideAndReplace: builder, combatEngineer | string(s) |
| globalScale: | Defaults to 1. Changing not recommend | globalScale: 1 | float |
| displayLocaleKey: | Translation file key for unit name and description | displayLocaleKey: units.mechArtillery | string |
| showInEditor: | Set to false to hide unit in sandbox editor (Default true) | showInEditor: true | bool |
| isLocked: | Disallow building of this unit. Can be used with overrideAndReplace to restrict units the player is allowed to build. | isLocked: false | bool |
| experimental: | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: false | bool |
| generation\_credits: | Income unit creates | generation\_credits: 2 | int |
| generation\_delay: | Defaults to 40, recommended only changing generation\_credits | generation\_delay: 40 | int |
| stayNeutral: | Set to false to disable capture when unit is on the neutral team | stayNeutral: false | bool |
| resourceRate: | Used with canReclaimResources. Experimental feature that is not yet finished. | NaN | float |
| maxShield: | NaN | NaN | int |
| startShieldAtZero: | NaN | NaN | bool |
| shieldRegen: | NaN | NaN | float |
| shieldDisplayOnlyDeflection: | Hide shield (if active) unless deflecting shot | NaN | bool |
| shieldDeflectionDisplayRate: | Defaults to 4. High value causes shield deflection to fade disappear faster | NaN | float |
| energyMax: | Defaults to 0. Energy can be used as ammo for turrets or for laser defense | NaN | float |
| energyRegen: | NaN | NaN | float |
| energyStartingPercentage: | NaN | NaN | float |
| energyNeedsToRechargeToFull: | Disable weapons using energy after reaching zero till fully recharged | NaN | float |
| displayRadius: | Defaults to radius value. Set to show a larger or smaller selection box ui on units. | displayRadius: 20 | int |
| buildingSelectionOffset: | NaN | NaN | int |
| buildingToFootprintOffsetX: | NaN | NaN | float |
| buildingToFootprintOffsetY: | NaN | NaN | float |
| fogOfWarSightRange: | Set number of tiles this unit can see. Defaults to 15 | fogOfWarSightRange: 15 | int |
| exit\_x: | Defaults to 0 | exit\_x: 0 | float |
| exit\_y: | Defaults to 5. Controls were newly created units appear. | exit\_x: 5 | float |
| softCollisionOnAll: | NaN | NaN | int |
| isBug: | NaN | NaN | bool |
| hideScorchMark: | NaN | NaN | bool |
| isBuilding: | NaN | NaN | bool |
| placeOnlyOnResPool: | Normally used for extractors | NaN | bool |
| canRepairBuildings: | ([ai]useAsBuilder:true is required as well right now) | NaN | bool |
| canRepairUnits: | ([ai]useAsBuilder:true is required as well right now) | NaN | bool |
| autoRepair: | Automatically try and repair damaged units in range ([ai]useAsBuilder:true is required as well right now) | NaN | bool |
| nanoRange: | NaN | NaN | int |
| nanoRepairSpeed: | NaN | NaN | float |
| nanoBuildSpeed: | NaN | NaN | float |
| nanoFactorySpeed: | NaN | NaN | float |
| selfRegenRate: | Passive self repair rate | NaN | float |
| selfBuildRate: | NaN | NaN | float |
| dieOnConstruct: | Delete this unit when it starts making a building. Target building likely will need selfBuildRate set to be created without a builder. | NaN | bool |
| numBitsOnDeath: | NaN | NaN | int |
| nukeOnDeath: | NaN | NaN | bool |
| nukeOnDeathRange: | NaN | NaN | float |
| nukeOnDeathDamage: | NaN | NaN | float |
| nukeOnDeathDisableWhenNoNuke: | Defaults to false | NaN | bool |
| fireOnDeath: | NaN | NaN | int |
| canReclaimResources: | Used with resourceRate. Experimental feature that is not yet finished. | NaN | bool |
| maxTransportingUnits: | Number of slots this units as for transporting other units. | NaN | int |
| transportSlotsNeeded: | Defaults to 1. Number of slots this unit uses up in a transport, Experimentals are often set to 5 to stop small transports holding them. | NaN | int |
| builtFrom\_#\_name: | NaN | NaN | string |
| builtFrom\_#\_pos: | Order action appears in UI | NaN | string |
| builtFrom\_#\_forceNano: | Build as if it was a building even if it's a unit. | NaN | bool |
| canBuild\_#\_name: | (Note: canBuild and builtFrom have the same effect just in the opposite direction. Only one is needed to create a link.) | NaN | string |
| canBuild\_#\_pos: | Order action appears in UI | NaN | string |
| canBuild\_#\_tech: | NaN | NaN | int |
| canBuild\_#\_forceNano: | Build target as if it was a building even if it's a unit. | NaN | bool |
| canBuild\_#\_type: | NaN | NaN | string |
| action\_#\_convertTo: | Convert your unit into another unit. (All your sub actions will be linked to the # you use) (due to bug target must have the same number of legs) | action\_1\_convertTo: customTank\_2 | string |
| action\_#\_pos: | Order action appears in UI | NaN | float |
| action\_#\_price: | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | int |
| action\_#\_text: | A display text when you select your unit's action, used to explain it's purpose. (All your sub actions will be linked to the # you use) | action\_1\_text: Upgrade to Custom Tank 2 | string |
| action\_#\_description: | NaN | NaN | string |
| action\_#\_addEnergy: | Adds energy to unit. Has no effect unless energyMax is set | NaN | float |
| action\_#\_whenBuilding\_cannotMove: | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | bool |
| Section | [graphics] | NaN | NaN |
| Code | Description | Example | Value Type |
| total\_frames | Defaults to 1. Animations require this. | NaN | int |
| frame\_width: | Calculated for you if total frames is set, but can be overridden | NaN | int |
| frame\_height: | Defaults to image height | NaN | int |
| image\_offsetX: | NaN | NaN | int |
| image\_offsetY: | NaN | NaN | int |
| teamColorsUseHue: | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN | bool |
| imageSmoothing: | NaN | NaN | bool |
| image: | NaN | NaN | file (image) |
| image\_back: | NaN | NaN | file (image) |
| image\_wreak: | NaN | NaN | file (image) |
| image\_turret: | NaN | NaN | file (image) |
| image\_shadow: | Image file, NONE, or AUTO. AUTO will use image and make it transparent black only. | NaN | file (image) |
| shadowOffsetX: | NaN | NaN | float |
| shadowOffsetY: | NaN | NaN | float |
| teamColorsOnTurret: | Defaults false. Apply team colours on turret as well. (Only works on image\_turret right now, not image on each turret) | NaN | bool |
| scaleImagesTo: | NaN | NaN | float |
| imageScale: | NaN | NaN | float |
| scaleTurretImagesTo: | NaN | NaN | float |
| splastEffect: | NaN | NaN | bool |
| dustEffect: | NaN | NaN | bool |
| splastEffectReverse: | NaN | NaN | bool |
| dustEffectReverse: | NaN | NaN | bool |
| drawLayer: | Set to experimentals, or leave line out | NaN | string |
| lock\_body\_rotation\_with\_main\_turret: | Locks body image locked to first turret's direction | NaN | bool |
| lock\_shadow\_rotation\_with\_main\_turret: | Locks body image shadow locked to first turret's direction | NaN | bool |
| rotate\_with\_direction: | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN | bool |
| animation\_direction\_units: | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN | float |
| animation\_direction\_strideX: | Animation frames to offset on direction change. | NaN | int |
| animation\_direction\_strideY: | Animation frames to offset on direction change. Used with frame\_height. | NaN | int |
| animation\_direction\_starting: | Direction for first frame | NaN | float |
| animation\_TYPE\_start: | Animation start frame, from 0. Set total\_frames to use (TYPE is moving/idle/attack) | animation\_moving\_start: 0 | int |
| animation\_TYPE\_end: | End frame, must be larger then start | animation\_moving\_end: 3 | int |
| animation\_TYPE\_scale\_start: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float |
| animation\_TYPE\_scale\_end: | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | float |
| animation\_TYPE\_speed: | Delay for each frame of animation. Larger values cause slower animation | NaN | float |
| animation\_TYPE\_pingPong: | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN | bool |
| Section | [attack] | NaN | NaN |
| Code | Description | Example | Value Type |
| turretSize: | (multiplied by globalScale) | NaN | float |
| turretTurnSpeed: | NaN | NaN | float |
| turretRotateWithBody: | NaN | NaN | bool |
| attackMovement: | normal/bomber | NaN | string |
| disablePassiveTargeting: | Unit only attacks manually ordered target. Rarely needed. | NaN | bool |
| attackMovementSpeed: | Unused | NaN | float |
| maxAttackRange: | (multiplied by globalScale) | NaN | float |
| shootDelay: | Global delay, can also use delay on each turret | NaN | float |
| isMelee: | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN | bool |
| dieOnAttack: | NaN | NaN | bool |
| canAttack: | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN | bool |
| canAttackFlyingUnits: | can also be narrowed per turret | NaN | LogicBoolean |
| canAttackLandUnits: | can also be narrowed per turret | NaN | LogicBoolean |
| canAttackUnderwaterUnits: | can also be narrowed per turret | NaN | LogicBoolean |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN | LogicBoolean |
| isFixedFiring: | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN | bool |
| aimOffsetSpread: | NaN | NaN | bool |
| Section | [turret\_#] | NaN | NaN |
| Code | Description | Example | Value Type |
| x: | NaN | NaN | float |
| y: | NaN | NaN | float |
| copyFrom: | Copy all values from another turret as defaut values for this turret | copyFrom: 1 | int |
| idleDir: | NaN | NaN | float |
| linkDelayWithTurret: | NaN | NaN | int |
| delay: | Override global shootDelay for this turret | NaN | float |
| warmup: | NaN | NaN | float |
| warmupCallDownRate: | NaN | NaN | float |
| warmupNoReset: | NaN | NaN | bool |
| warmupShootDelayTransfer: | NaN | NaN | float |
| recoilOffset: | Amount to offset turret after firing | NaN | float |
| recoilOutTime: | How long to get to offset value | NaN | float |
| recoilReturnTime: | How long to return back to default position. | NaN | float |
| energyUsage: | Required energy to fire weapon | NaN | float |
| attachedTo: | Id of another turret to attach to, will be positioned relative to it. | NaN | int |
| canShoot: | Defaults to true | NaN | bool |
| shoot\_sound: | NaN | NaN | string |
| shoot\_sound\_vol: | NaN | NaN | float |
| shoot\_flame: | Current types are: small, large, smoke, shockwave | NaN | string |
| shoot\_light | NaN | NaN | color |
| slave: | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN | bool |
| invisible: | Don't render this turret, but still can shoot, etc | NaN | bool |
| canAttackFlyingUnits: | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | LogicBoolean |
| canAttackLandUnits: | NaN | NaN | LogicBoolean |
| canAttackUnderwaterUnits: | NaN | NaN | LogicBoolean |
| canAttackNotTouchingWaterUnits: | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | LogicBoolean |
| canAttackCondition: | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | LogicBoolean |
| size: | NaN | NaN | float |
| limitingRange: | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | float |
| laserDefenceEnergyUse: | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | float |
| shouldResetTurret: | Defaults true. False to disable the reseting turret angle when idle | NaN | bool |
| idleSpin: | Spin rate when idle, used on missile turrets | NaN | float |
| isMainNanoTurret: | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN | bool |
| image: | Use custom image. Overrides unit's main turret image | NaN | file (image) |
| chargeEffectImage:\n | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | file (image) |
| Section | [projectile\_#] | NaN | NaN |
| Code | Description | Example | Value Type |
| directDamage: | Damage to target unit on hit. Does not work with targetGround. | NaN | int |
| areaDamage: | directDamage or areaDamage is required | NaN | int |
| areaRadius: | How wide areaDamage effects. Note this drops off. | NaN | NaN |
| deflectionPower: | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | float |
| targetGround: | Target ground, and don't home in on target. Only areaDamage is applied if targeting ground. | NaN | bool |
| life: | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | int |
| speed: | NaN | NaN | float |
| instant: | Hit target instantly | NaN | bool |
| instantReuseLast: | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | bool |
| ballistic: | NaN | NaN | bool |
| trailEffect: | NaN | NaN | bool |
| lightSize: | NaN | NaN | float |
| lightColor | NaN | lightColor: #ffe92b | color |
| largeHitEffect: | NaN | NaN | bool |
| lightingEffect: | NaN | NaN | bool |
| laserEffect: | NaN | NaN | bool |
| ballistic\_delaymove\_height: | NaN | NaN | float |
| ballistic\_height: | NaN | NaN | float |
| targetSpeed: | Accelerate to this speed | NaN | float |
| autoTargetingOnDeadTarget: | Retarget to nearby unit if target dies while in transit | NaN | bool |
| drawSize: | Scale image. Defaults to 1 | NaN | float |
| color | NaN | color: #bebe50 | color |
| image: | Use custom image. Overrides drawType and frame | NaN | file (image) |
| drawType | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | int |
| frame | Built-in image frame to use, starts at zero. | NaN | int |
| flameWeapon: | NaN | NaN | bool |
| hitSound: | NaN | NaN | bool |
| targetGroundSpread: | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | float |
| speedSpread: | Randomly change the starting projectile speed by this amount | NaN | float |
| Section | [movement] | NaN | NaN |
| Code | Description | Example | Value Type |
| movementType: | NaN | NaN | string |
| slowDeathFall: | Used with large aircraft | NaN | bool |
| moveSpeed: | NaN | NaN | float |
| moveAccelerationSpeed: | NaN | NaN | float |
| moveDecelerationSpeed: | Don't make this too low or units will have trouble stopping at waypoints | NaN | float |
| reverseSpeedPercentage: | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | NaN | float |
| landOnGround: | Should flying unit land when idle. | NaN | bool |
| targetHeight: | Defaults to 0 but if AIR movementType default is 35 | NaN | float |
| targetHeightDrift: | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | NaN | float |
| maxTurnSpeed: | NaN | NaN | float |
| turnAcceleration: | NaN | NaN | float |
| moveSlidingMode: | NaN | NaN | bool |
| moveIgnoringBody: | NaN | NaN | bool |
| moveSlidingDir: | NaN | NaN | int |
| joinsGroupFormations: | Defaults to true. Changing not recommended | NaN | bool |
| Section | [ai] | NaN | NaN |
| Code | Description | Example | Value Type |
| useAsBuilder: | Set to true if unit can build or repair buildings. | NaN | bool |
| disableUse: | Disallow AI building this unit or building | NaN | bool |
| maxGlobal: | NaN | NaN | int |
| maxEachBase: | NaN | NaN | int |
| buildPriority: | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | float |
| noneInBaseExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | float |
| noneGlobalExtraPriority: | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | float |
| upgradedFrom: | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | string |
| Section | [leg\_#] | NaN | NaN |
| Code | Description | Example | Value Type |
| x: | NaN | NaN | float |
| y: | NaN | NaN | float |
| copyFrom: | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | int |
| attach\_x: | NaN | NaN | float |
| attach\_y: | NaN | NaN | float |
| hidden: | NaN | NaN | bool |
| rotateSpeed: | NaN | NaN | float |
| resetAngle: | Unused | NaN | float |
| lockMovement | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | bool |
| heightSpeed: | NaN | NaN | float |
| draw\_foot\_on\_top: | NaN | NaN | bool |
| dust\_effect: | NaN | NaN | bool |
| holdDisMin: | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | float |
| holdDisMax: | Defaults to 16. Force reposition of leg at this distance. | NaN | float |
| hardLimit: | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | float |

## Tools
| The spreadsheets to the right of this one are tools designed to automate specific processes so that they are not as time consuming for development. | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Feel free to copy and paste the spreadsheet into a new copy in order to edit it yourself, the tools are automated and will compile an Output based on the input values which can be changed in a sheet you own. |
| --- | --- | --- | --- | --- | --- |
| Table of Contents: | NaN | NaN | NaN | NaN | NaN |
| spawnProjectiles:LIST Tool | NaN | A tool that automatically sets up subprojectiles for turrets... | NaN | NaN | NaN |
| Translation Tool | NaN | A tool that automatically compiles translations into fields to insert into an .ini... | NaN | NaN | NaN |

## spawnProjectilesLIST Tool
| Make sure to remove the "," from the end of an output if it is the last subprojectile in a series | Unnamed: 1 | Unnamed: 2 | Spawn Projectiles Tool | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Simply edit the values in a new sheet that you have permissions to edit and the values will change automatically for the outputs. | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Example: If subprojectile1 and subprojectile2 Output is put together, remove the "," from the end of the Output of 2 but not 1 | NaN | NaN | MAKE SURE TO DUPLICATE THIS SHEET TO MODIFY THE FIELDS WHICH WILL UPDATE AUTOMATICALLY | NaN | NaN | NaN | NaN | Only edit the values with numbers in them. Editing anything else will potentially break the Output. | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| NaN | NAME: | subprojectile1 | -- | NAME: | subprojectile2 | -- | NAME: | subprojectile3 | -- | NAME: | subprojectile4 | -- |
| NaN | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , |
| NaN | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , |
| NaN | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , |
| NaN | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , |
| NaN | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , |
| NaN | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , |
| NaN | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , |
| NaN | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , |
| NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN |
| subprojectile1 Combined Output: | subprojectile1(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile2 Combined Output: | subprojectile2(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile3 Combined Output: | subprojectile3(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile4 Combined Output: | subprojectile4(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | -- |
| NaN | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| NaN | NAME: | subprojectile5 | -- | NAME: | subprojectile6 | -- | NAME: | subprojectile7 | -- | NAME: | subprojectile8 | -- |
| NaN | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , |
| NaN | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , |
| NaN | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , |
| NaN | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , |
| NaN | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , |
| NaN | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , |
| NaN | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , |
| NaN | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , |
| NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN |
| subprojectile5 Combined Output: | subprojectile5(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile6 Combined Output: | subprojectile6(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile7 Combined Output: | subprojectile7(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | subprojectile8 Combined Output: | subprojectile8(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | -- |
| NaN | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| NaN | NAME: | SubProjectile9 | -- | NAME: | SubProjectile10 | -- | NAME: | SubProjectile11 | -- | NAME: | SubProjectile12 | -- |
| NaN | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , | recursionLimit= | 1 | , |
| NaN | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , | xOffsetRelative= | 0 | , |
| NaN | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , | yOffsetRelative= | 0 | , |
| NaN | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , | offsetHeight= | 0 | , |
| NaN | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , | offsetDir= | 0 | , |
| NaN | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , | offsetRandomDir= | 0 | , |
| NaN | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , | offsetRandomX= | 0 | , |
| NaN | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , | offsetRandomY= | 0 | , |
| NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN | offsetRandomXY= | 0 | NaN |
| SubProjectile9 Combined Output: | SubProjectile9(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | SubProjectile10 Combined Output: | SubProjectile10(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | SubProjectile11 Combined Output: | SubProjectile11(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | SubProjectile12 Combined Output: | SubProjectile12(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | -- | -- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Projectile 1-4 | NaN | subprojectile1(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0),subprojectile2(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0),subprojectile3(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0),subprojectile4(recursionLimit=1,xOffsetRelative=0,yOffsetRelative=0,offsetHeight=0,offsetDir=0,offsetRandomDir=0,offsetRandomX=0,offsetRandomY=0,offsetRandomXY=0), | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Combined Output: | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |

## Translation Tool
| Unnamed: 0 | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 | Unnamed: 14 | Unnamed: 15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CODE3 | CODE3 | CODE3 | CODE3 | CODE3 | CODE3 | NaN | Text ONLY Output | NaN | Description ONLY Output | Change this column | NaN | NaN | NaN | Full Output | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | English | NaN | English | NaN | NaN | NaN | English | displayText:Cruiser\ndisplayDescription:Cruisers are sea vessels that can shoot down air units but are not very good against other naval vessels. \ndisplayText\_de:Kreuzer\ndisplayDescription\_de:Kreuzer sind Seeschiffe, die Lufteinheiten abschießen können, gegen andere Marineschiffe jedoch nicht sehr gut sind.\ndisplayText\_it:incrociatore\ndisplayDescription\_it:Gli incrociatori sono imbarcazioni che possono abbattere unità aeree, ma non sono molto efficaci contro altre navi militari.\ndisplayText\_zh:巡洋舰\ndisplayDescription\_zh:巡洋舰是一种可以击落空中单位的海上舰艇，但在对抗其他海军舰艇方面表现不佳。\ndisplayText\_ja:クルーザー\ndisplayDescription\_ja:巡洋艦は航空ユニットを撃墜できる海上艦艇ですが、他の海軍艦艇に対してはあまり有効ではありません。\ndisplayText\_ru:Круизер\ndisplayDescription\_ru:Крейсеры — это морские суда, которые могут сбивать воздушные суда, но не очень эффективны против других военных кораблей.\ndisplayText\_es:Crucero\ndisplayDescription\_es:Los cruceros son buques marítimos que pueden derribar unidades aéreas, pero no son muy buenos contra otros buques de guerra.\ndisplayText\_tl:Cruise\ndisplayDescription\_tl:Ang mga cruiser ay mga sasakyang pandagat na maaaring bumaril sa mga yunit ng hangin ngunit hindi masyadong mahusay laban sa iba pang mga sasakyang pandagat. \ndisplayText\_uk:Круїз\ndisplayDescription\_uk:Крейсери — це морські судна, які можуть збивати повітряні одиниці, але не дуже хороші проти інших морських суден. \ndisplayText\_vi:Du thuyền\ndisplayDescription\_vi:Tàu tuần dương là tàu biển có thể bắn hạ các đơn vị không quân nhưng không hiệu quả lắm với các tàu hải quân khác.\ndisplayText\_ms:Kapal layar\ndisplayDescription\_ms:Kapal penjelajah adalah kapal laut yang boleh menembak jatuh unit udara tetapi tidak begitu baik terhadap kapal tentera laut yang lain. \ndisplayText\_ko:범선\ndisplayDescription\_ko:순양함은 공중 유닛을 격추할 수 있는 해상 함선이지만 다른 해군 함선에 대해서는 그다지 효율적이지 않습니다.\ndisplayText\_id:perahu layar\ndisplayDescription\_id:Kapal penjelajah adalah kapal laut yang dapat menembak jatuh unit udara, tetapi tidak terlalu bagus melawan kapal angkatan laut lainnya. |
| NaN | NaN | NaN | NaN | Translate this phrase to the following languages using ISO-639 codes: | NaN | English | displayText:Cruiser | Cruiser | displayDescription:Cruisers are sea vessels that can shoot down air units but are not very good against other naval vessels. | Cruisers are sea vessels that can shoot down air units but are not very good against other naval vessels. | en | displayText | displayDescription | displayText:Cruiser\ndisplayDescription:Cruisers are sea vessels that can shoot down air units but are not very good against other naval vessels. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | German | NaN | German | NaN | NaN | NaN | German | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | German | displayText\_de:Kreuzer | Kreuzer | displayDescription\_de:Kreuzer sind Seeschiffe, die Lufteinheiten abschießen können, gegen andere Marineschiffe jedoch nicht sehr gut sind. | Kreuzer sind Seeschiffe, die Lufteinheiten abschießen können, gegen andere Marineschiffe jedoch nicht sehr gut sind. | de | displayText\_de | displayDescription\_de | displayText\_de:Kreuzer\ndisplayDescription\_de:Kreuzer sind Seeschiffe, die Lufteinheiten abschießen können, gegen andere Marineschiffe jedoch nicht sehr gut sind. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Italian | NaN | Italian | NaN | NaN | NaN | Italian | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Italian | displayText\_it:incrociatore | incrociatore | displayDescription\_it:Gli incrociatori sono imbarcazioni che possono abbattere unità aeree, ma non sono molto efficaci contro altre navi militari. | Gli incrociatori sono imbarcazioni che possono abbattere unità aeree, ma non sono molto efficaci contro altre navi militari. | it | displayText\_it | displayDescription\_it | displayText\_it:incrociatore\ndisplayDescription\_it:Gli incrociatori sono imbarcazioni che possono abbattere unità aeree, ma non sono molto efficaci contro altre navi militari. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Chinese | NaN | Chinese | NaN | NaN | NaN | Chinese | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Chinese | displayText\_zh:巡洋舰 | 巡洋舰 | displayDescription\_zh:巡洋舰是一种可以击落空中单位的海上舰艇，但在对抗其他海军舰艇方面表现不佳。 | 巡洋舰是一种可以击落空中单位的海上舰艇，但在对抗其他海军舰艇方面表现不佳。 | zh | displayText\_zh | displayDescription\_zh | displayText\_zh:巡洋舰\ndisplayDescription\_zh:巡洋舰是一种可以击落空中单位的海上舰艇，但在对抗其他海军舰艇方面表现不佳。 | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Japanese | NaN | Japanese | NaN | NaN | NaN | Japanese | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Japanese | displayText\_ja:クルーザー | クルーザー | displayDescription\_ja:巡洋艦は航空ユニットを撃墜できる海上艦艇ですが、他の海軍艦艇に対してはあまり有効ではありません。 | 巡洋艦は航空ユニットを撃墜できる海上艦艇ですが、他の海軍艦艇に対してはあまり有効ではありません。 | ja | displayText\_ja | displayDescription\_ja | displayText\_ja:クルーザー\ndisplayDescription\_ja:巡洋艦は航空ユニットを撃墜できる海上艦艇ですが、他の海軍艦艇に対してはあまり有効ではありません。 | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Russian | NaN | Russian | NaN | NaN | NaN | Russian | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Russian | displayText\_ru:Круизер | Круизер | displayDescription\_ru:Крейсеры — это морские суда, которые могут сбивать воздушные суда, но не очень эффективны против других военных кораблей. | Крейсеры — это морские суда, которые могут сбивать воздушные суда, но не очень эффективны против других военных кораблей. | ru | displayText\_ru | displayDescription\_ru | displayText\_ru:Круизер\ndisplayDescription\_ru:Крейсеры — это морские суда, которые могут сбивать воздушные суда, но не очень эффективны против других военных кораблей. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Spanish | NaN | Spanish | NaN | NaN | NaN | Spanish | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Spanish | displayText\_es:Crucero | Crucero | displayDescription\_es:Los cruceros son buques marítimos que pueden derribar unidades aéreas, pero no son muy buenos contra otros buques de guerra. | Los cruceros son buques marítimos que pueden derribar unidades aéreas, pero no son muy buenos contra otros buques de guerra. | es | displayText\_es | displayDescription\_es | displayText\_es:Crucero\ndisplayDescription\_es:Los cruceros son buques marítimos que pueden derribar unidades aéreas, pero no son muy buenos contra otros buques de guerra. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Tagalog | NaN | Tagalog | NaN | NaN | NaN | Tagalog | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Tagalog | displayText\_tl:Cruise | Cruise | displayDescription\_tl:Ang mga cruiser ay mga sasakyang pandagat na maaaring bumaril sa mga yunit ng hangin ngunit hindi masyadong mahusay laban sa iba pang mga sasakyang pandagat. | Ang mga cruiser ay mga sasakyang pandagat na maaaring bumaril sa mga yunit ng hangin ngunit hindi masyadong mahusay laban sa iba pang mga sasakyang pandagat. | tl | displayText\_tl | displayDescription\_tl | displayText\_tl:Cruise\ndisplayDescription\_tl:Ang mga cruiser ay mga sasakyang pandagat na maaaring bumaril sa mga yunit ng hangin ngunit hindi masyadong mahusay laban sa iba pang mga sasakyang pandagat. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Ukrainian | NaN | Ukrainian | NaN | NaN | NaN | Ukrainian | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Ukrainian | displayText\_uk:Круїз | Круїз | displayDescription\_uk:Крейсери — це морські судна, які можуть збивати повітряні одиниці, але не дуже хороші проти інших морських суден. | Крейсери — це морські судна, які можуть збивати повітряні одиниці, але не дуже хороші проти інших морських суден. | uk | displayText\_uk | displayDescription\_uk | displayText\_uk:Круїз\ndisplayDescription\_uk:Крейсери — це морські судна, які можуть збивати повітряні одиниці, але не дуже хороші проти інших морських суден. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Vietnamese | NaN | Vietnamese | NaN | NaN | NaN | Vietnamese | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Vietnamese | displayText\_vi:Du thuyền | Du thuyền | displayDescription\_vi:Tàu tuần dương là tàu biển có thể bắn hạ các đơn vị không quân nhưng không hiệu quả lắm với các tàu hải quân khác. | Tàu tuần dương là tàu biển có thể bắn hạ các đơn vị không quân nhưng không hiệu quả lắm với các tàu hải quân khác. | vi | displayText\_vi | displayDescription\_vi | displayText\_vi:Du thuyền\ndisplayDescription\_vi:Tàu tuần dương là tàu biển có thể bắn hạ các đơn vị không quân nhưng không hiệu quả lắm với các tàu hải quân khác. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Malaysian | NaN | Malaysian | NaN | NaN | NaN | Malaysian | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Malaysian | displayText\_ms:Kapal layar | Kapal layar | displayDescription\_ms:Kapal penjelajah adalah kapal laut yang boleh menembak jatuh unit udara tetapi tidak begitu baik terhadap kapal tentera laut yang lain. | Kapal penjelajah adalah kapal laut yang boleh menembak jatuh unit udara tetapi tidak begitu baik terhadap kapal tentera laut yang lain. | ms | displayText\_ms | displayDescription\_ms | displayText\_ms:Kapal layar\ndisplayDescription\_ms:Kapal penjelajah adalah kapal laut yang boleh menembak jatuh unit udara tetapi tidak begitu baik terhadap kapal tentera laut yang lain. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Korean | NaN | Korean | NaN | NaN | NaN | Korean | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Korean | displayText\_ko:범선 | 범선 | displayDescription\_ko:순양함은 공중 유닛을 격추할 수 있는 해상 함선이지만 다른 해군 함선에 대해서는 그다지 효율적이지 않습니다. | 순양함은 공중 유닛을 격추할 수 있는 해상 함선이지만 다른 해군 함선에 대해서는 그다지 효율적이지 않습니다. | ko | displayText\_ko | displayDescription\_ko | displayText\_ko:범선\ndisplayDescription\_ko:순양함은 공중 유닛을 격추할 수 있는 해상 함선이지만 다른 해군 함선에 대해서는 그다지 효율적이지 않습니다. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Language | NaN | Indonesian | NaN | Indonesian | NaN | NaN | NaN | Indonesian | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | Indonesian | displayText\_id:perahu layar | perahu layar | displayDescription\_id:Kapal penjelajah adalah kapal laut yang dapat menembak jatuh unit udara, tetapi tidak terlalu bagus melawan kapal angkatan laut lainnya. | Kapal penjelajah adalah kapal laut yang dapat menembak jatuh unit udara, tetapi tidak terlalu bagus melawan kapal angkatan laut lainnya. | id | displayText\_id | displayDescription\_id | displayText\_id:perahu layar\ndisplayDescription\_id:Kapal penjelajah adalah kapal laut yang dapat menembak jatuh unit udara, tetapi tidak terlalu bagus melawan kapal angkatan laut lainnya. | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | 0 | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | displayText:Cruiser\n\ndisplayText\_de:Kreuzer\n\ndisplayText\_it:incrociatore\n\ndisplayText\_zh:巡洋舰\n\ndisplayText\_ja:クルーザー\n\ndisplayText\_ru:Круизер\n\ndisplayText\_es:Crucero\n\ndisplayText\_tl:Cruise\n\ndisplayText\_uk:Круїз\n\ndisplayText\_vi:Du thuyền\n\ndisplayText\_ms:Kapal layar\n\ndisplayText\_ko:범선 | NaN | displayDescription:Cruisers are sea vessels that can shoot down air units but are not very good against other naval vessels. \n\ndisplayDescription\_de:Kreuzer sind Seeschiffe, die Lufteinheiten abschießen können, gegen andere Marineschiffe jedoch nicht sehr gut sind.\n\ndisplayDescription\_it:Gli incrociatori sono imbarcazioni che possono abbattere unità aeree, ma non sono molto efficaci contro altre navi militari.\n\ndisplayDescription\_zh:巡洋舰是一种可以击落空中单位的海上舰艇，但在对抗其他海军舰艇方面表现不佳。\n\ndisplayDescription\_ja:巡洋艦は航空ユニットを撃墜できる海上艦艇ですが、他の海軍艦艇に対してはあまり有効ではありません。\n\ndisplayDescription\_ru:Крейсеры — это морские суда, которые могут сбивать воздушные суда, но не очень эффективны против других военных кораблей.\n\ndisplayDescription\_es:Los cruceros son buques marítimos que pueden derribar unidades aéreas, pero no son muy buenos contra otros buques de guerra.\n\ndisplayDescription\_tl:Ang mga cruiser ay mga sasakyang pandagat na maaaring bumaril sa mga yunit ng hangin ngunit hindi masyadong mahusay laban sa iba pang mga sasakyang pandagat. \n\ndisplayDescription\_uk:Крейсери — це морські судна, які можуть збивати повітряні одиниці, але не дуже хороші проти інших морських суден. \n\ndisplayDescription\_vi:Tàu tuần dương là tàu biển có thể bắn hạ các đơn vị không quân nhưng không hiệu quả lắm với các tàu hải quân khác.\n\ndisplayDescription\_ms:Kapal penjelajah adalah kapal laut yang boleh menembak jatuh unit udara tetapi tidak begitu baik terhadap kapal tentera laut yang lain. \n\ndisplayDescription\_ko:순양함은 공중 유닛을 격추할 수 있는 해상 함선이지만 다른 해군 함선에 대해서는 그다지 효율적이지 않습니다. | NaN | NaN | NaN | NaN | NaN | NaN |

## 1.16
| Unnamed: 0 | Unnamed: 1 | This sheet contains references to all relevant workshop-related modding code as well as how to use them. Please read the table of contents and the START section below if you are beginning modding | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | Table of Contents | Section Type | Use Ctrl + F (PC) or Search function (mobile) in order to skip to a section you need, copy whats listed exactly: | Function of section/code |
| NaN | Sections with brackets and no name or number (like [core] ) you can only have 1 of | Single | [core] | Core unit functions such as HP and death animation |
| NaN | Sections with NAME at the end can have multiples and be named | Multi | canBuild\_NAME | Build queues for building new units |
| NaN | NaN | Single | [graphics] | Main image configuration and unit trails |
| NaN | NaN | Single | [attack] | Attack permissions against other units |
| NaN | MAX: 30 | Multi | turret\_NAME | Turret that follows attack permissions and uses projectile |
| NaN | NaN | Multi | projectile\_NAME | Can be used by turret and can spawn more projectiles |
| NaN | NaN | Single | [movement] | Speed and movement type characteristics |
| NaN | NaN | Single | [ai] | How AI may use this unit, mostly for buildings |
| NaN | !!! Arm and Leg can ONLY use numbers | Number | leg\_ OR arm\_ | Moveable cosmetics for mechs, infantry etc. |
| NaN | NaN | Multi | attachment\_ | Units stacked onto original to make compound units |
| NaN | NaN | Multi | action\_NAME OR hiddenAction\_NAME | Actions that can do very wide range of things |
| NaN | NaN | Multi | effect\_NAME | Visual effects spawned by unit that eventually disappear |
| NaN | NaN | Multi | animation\_NAME | Animations for leg, arm or main body sprite |
| NaN | Not a section of its own | List | spawnUnits:LIST | Lists you can form for spawning units |
| NaN | Not a section of its own | List | spawnProjectiles:LIST | Lists you can form for spawning projectiles |
| NaN | Not a section of its own | Logic | logicBoolean\_ | Advanced logic to place across all logic fields |
| NaN | NaN | Multi | placementRule\_NAME | Allows creation of rules for buildings |
| NaN | Not a section of its own | List | Prices/Resources | Useable resources for prices using "price:" function |
| NaN | NaN | Multi | global\_resource\_NAME | Global resource collected by team shows up on top |
| NaN | NaN | Multi | resource\_NAME | Local resource used by units can be used for ammo |
| NaN | NaN | Multi | decal\_NAME | Versatile graphics can be stack to make 2.5D sprites |
| NaN | Use # before text to use in any section, example: #This is a note in [core] | Multi | comment\_NAME | Used exclusively for notes, does not read anything |
| NaN | NaN | Multi | template\_NAME | Used to create sections that can be referenced in unit |
| NaN | Is a file that you must create | File | NAME.template | Create chains of unit files doesn't load unless copyFrom: |
| NaN | Is a file that you must create | File | all-units.template | Put in root of mod, will apply to ALL unit .ini files |
| NaN | Is a file that you must create | File | mod-info.txt | Put in root of mod, will change some settings of mod |
| NaN | NaN | Ref | Projectile Draw Types | Default projectiles able to use in [projectile\_NAME] |
| START | In order to create an unit, you need to create a file with extension of .ini. It can be named anything, even with unicode characters, and it must be in your mod folder inside the rustedWarfare/mods/units/MODNAME folder -- Then, you add the sections in with the code | NaN | NaN | The unit file extension needed: |
| NaN | There are some lines of code that are required before a unit can be useable. These lines of code can be set to anything appropriate, just need to have their fields filled out for initializing or it will give an error | NaN | NaN | Error for not having needed code: |
| NaN | !!! THESE ARE REQUIRED CODE !!! | NaN | Example | NaN |
| Section | Code | Option | NaN | NaN |
| [core] | name: ANY | unit name | NaN | NaN |
| NaN | maxHp: 200 | number | NaN | NaN |
| NaN | price: 500 | number | NaN | NaN |
| NaN | mass: 50 | number | NaN | NaN |
| NaN | radius: 16 | number | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [graphics] | image: ANY.png | image file | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [attack] | canAttack: true | true, false | NaN | NaN |
| NaN | canAttackFlyingUnits: true | true, false | NaN | NaN |
| NaN | canAttackLandUnits: true | true, false | NaN | NaN |
| NaN | canAttackUnderwaterUnits: false | true, false | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| [movement] | movementType: | NONE, LAND, AIR, WATER, HOVER, BUILDING, OVER\_CLIFF, OVER\_CLIFF\_WATER | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| ! | For starting out, it is recommended to check out the turret and projectile sections in order to get used to basic vanilla style units, but the modding reference offers a very wide range of things to change in your units, it's encouraged to take your time and read everything | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| Version | Section | NaN | [core] | NaN |
| Added | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code: will cause error if these are not included | NaN |
| NaN | name: | string | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 |
| NaN | mass: | int | The 'weight' of the unit, defines how it collides with other units, a greater value means it's tougher to push. | mass: 3000 |
| NaN | radius: | int | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 |
| NaN | price: | int / price | The unit cost from builders/buildings. Defaults to credits if no resource type is used | price: 500, gold=5, stone=10 |
| NaN | maxHp: | int | The max health for the unit. (will spawn with this value). | maxHp: 200 |
| NaN | #==== | #==== | Common Keys | NaN |
| NaN | buildSpeed: | float / s | Time it takes to build the unit. (may multiply with builder speed) | buildSpeed: 3s |
| NaN | class: | string | Reserved for future use, must be CustomUnitMetadata by default. | class: CustomUnitMetadata |
| NaN | techLevel: | int | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 |
| NaN | altNames: | string(s) | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 |
| 1.13.3 | strictLevel: | float | Defaults to 0. 1 = Errors if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 |
| NaN | isBio: | bool | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true |
| NaN | isBug: | bool | Changes some death defaults, and sort order in Sandbox. | isBug: false |
| 1.13 | isBuilder: | bool | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true |
| 1.15 | streamingCost: | price | Like price but paid for overtime while this unit is being queued or built. Construction or queue is paused if resources run out while building. | streamingCost: gem=420 |
| 1.15 | switchPriceWithStreamingCost: | bool | Shortcut to set streamingCost to price value and clear price, add to all-units.template to quickly switch a mod over to streaming resources. | switchPriceWithStreamingCost: true |
| NaN | #==== | #==== | Unit Stats Keys | NaN |
| NaN | selfRegenRate: | float | Passive self repair rate. | selfRegenRate: 0.01 |
| NaN | maxShield: | int | The max shield hitpoints of the unit. Can start with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 |
| NaN | startShieldAtZero: | bool | Unit starts with a 0 hitpoints shield on created if true. | startShieldAtZero: true |
| NaN | shieldRegen: | float | Passive shield regen rate. | shieldRegen: 0.15 |
| NaN | energyMax: | float | Defaults to 0. Energy that can be used as ammo for turrets, laser defense and actions. | energyMax: 1 |
| NaN | energyRegen: | float | Passive energy regen rate. | energyRegen: 0.001 |
| NaN | energyStartingPercentage: | float | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 |
| NaN | energyNeedsToRechargeToFull: | float | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true |
| NaN | energyRegenWhenRecharging: | float | Regen rate while recharging. | NaN |
| 1.13 | armour: | int | Damage taken away from each hit. (not currently used in any vanilla units) | armour: 6 |
| 1.13 | armourMinDamageToKeep: | int | Min damage to keep from received damage. Defaults to 1. | armourMinDamageToKeep: 2 |
| 1.13.3 | borrowResourcesWhileAlive: | price | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 |
| 1.15 | borrowResourcesWhileBuilt: | price | Like borrowResourcesWhileAlive but doesn't take affect till built. Mostly useful for buildings like houses that have negative resources to add to the unit cap, etc. | borrowResourcesWhileBuilt: supplyCap = -10 |
| 1.13.3 | generation\_resources: | price | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 |
| 1.13.3 | generation\_active: | logicBoolean | Disables generation\_resources/credits when false. (logic\_boolean) | generation\_active: if not self.hp(lessThan=100) |
| NaN | generation\_credits: | int | Income unit creates. (credits only) | generation\_credits: 2 |
| NaN | generation\_delay: | int | How often generation\_resources/credits is added. Defaults to 40. (changing not recommended) | generation\_delay: 40 |
| NaN | #==== | #==== | UI and Graphics Keys | NaN |
| NaN | showInEditor: | bool | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false |
| NaN | displayText: | LocaleString | The unit name that the game shows to the player. | displayText: Custom Tank |
| 1.13 | displayText\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado |
| NaN | displayDescription: | LocaleString | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage |
| 1.13 | displayDescription\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero |
| NaN | displayLocaleKey: | string | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery |
| NaN | displayRadius: | int | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 |
| NaN | uiTargetRadius | int | Defaults to displayRadius value. Radius used when attacking/reclaiming/etc this unit | uiTargetRadius: 10 |
| NaN | shieldRenderRadius: | int | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 |
| NaN | shieldDisplayOnlyDeflection: | bool | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true |
| NaN | shieldDeflectionDisplayRate: | float | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 |
| 1.13.3 | showOnMinimap: | bool | Defaults to true. Hide units on minimap if false. | showOnMinimap: false |
| 1.13.3 | showActionsWithMixedSelectionIfOtherUnitsHaveTag: | string(s) | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: true |
| 1.14 | showOnMinimapToEnemies | bool | Useful for stealth units | showOnMinimapToEnemies: false |
| NaN | #==== | #==== | Building Only Keys | NaN |
| NaN | isBuilding: | bool | Defines if the unit is a building. | isBuilding: true |
| NaN | footprint: | ints | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 |
| NaN | constructionFootprint: | ints | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 |
| NaN | displayFootprint: | ints | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 |
| NaN | buildingSelectionOffset: | int | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 |
| NaN | buildingToFootprintOffsetX: | float | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 |
| NaN | buildingToFootprintOffsetY: | float | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 6 |
| NaN | placeOnlyOnResPool: | bool | Normally used for extractors, forces building construction in a resource pool. | placeOnlyOnResPool: true |
| NaN | selfBuildRate: | float | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 |
| 1.14 | ignoreInUnitCapCalculation | NaN | defaults to true for buildings otherwise false. Set to true to not count this unit in unit cap. | ignoreInUnitCapCalculation: true |
| NaN | #==== | #==== | Misc Keys | NaN |
| NaN | copyFrom: | file(s) (ini) | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini |
| NaN | dont\_load: | bool | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true |
| NaN | overrideAndReplace: | string(s) | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer |
| 1.13.3 | onNewMapSpawn: | string | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam, spawnPoint\_eachActiveTeam (1.15) | onNewMapSpawn: spawnPoint\_eachActiveTeam |
| NaN | globalScale: | float | Defaults to 1. Changing not recommended. | globalScale: 2 |
| NaN | isLocked: | bool | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true |
| 1.13 | isLockedIfGameModeNoNuke: | bool | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true |
| NaN | experimental: | bool | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true |
| NaN | stayNeutral: | bool | Set to false to disable capture when unit is on the neutral team. | stayNeutral: false |
| 1.13 | createNeutral: | bool | Set to true to always spawn the unit on the neutral team. | createNeutral: true |
| NaN | createOnAggressiveTeam: | bool | Set to true to always spawn the unit on aggressive teams on single player matches. | createOnAggressiveTeam: true |
| 1.13 | tags: | string(s) | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage |
| 1.15 | defineUnitMemory | NaN | Can define several variables for custom storage, unique for each unit. Allowed types: boolean, float/number, unit, string. | defineUnitMemory: boolean nukeActive, boolean laserReady, float experience, unit nextTarget, unit homeBase, string customText\n |
| 1.15p11 | NaN | NaN | Add a pair of square brackets to turn them into arrays for those specific data types | defineUnitMemory: unit[] squad, float[] mango |
| NaN | fogOfWarSightRange: | int | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 35 |
| 1.14 | fogOfWarSightRangeWhileNotBuilt | int | Fog of War range when unit/building is incomplete. Defaults to fogOfWarSightRange | fogOfWarSightRangeWhileNotBuilt: 10 |
| NaN | softCollisionOnAll: | int | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 |
| NaN | disableAllUnitCollisions: | bool | Unit cannot collide with others if true. | disableAllUnitCollisions: true |
| 1.13 | isUnrepairableUnit: | bool | No unit can repair this unit if true. | isUnrepairableUnit: true |
| NaN | isUnselectable: | bool | If true unit cannot be selected. (includes AI players) | isUnselectable: true |
| 1.14 | isUnselectableAsTarget | bool | Defaults to isUnselectable. Can be used to create units that cannot be selected but can be targeted for attack, reclaim, etc | isUnselectableAsTarget: false |
| 1.13 | isPickableStartingUnit: | bool | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true |
| 1.13 | startFallingWhenStartingUnit: | bool | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true |
| NaN | soundOnAttackOrder: | sound(s) | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg |
| NaN | soundOnMoveOrder: | sound(s) | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg |
| 1.13.3 | soundOnNewSelection: | sound(s) | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg |
| NaN | canNotBeDirectlyAttacked: | bool | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. If true, canNotBeDamaged is true by default | canNotBeDirectlyAttacked: true |
| NaN | canNotBeDamaged | bool | Defaults to value of canNotBeDirectlyAttacked (be careful setting this without canNotBeDirectlyAttacked, as AI will attack forever) | canNotBeDamaged: true |
| 1.13.3 | canNotBeGivenOrdersByPlayer: | bool | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true |
| 1.13.3 | canOnlyBeAttackedByUnitsWithTags: | strings(s) | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank |
| 1.14 | disableDeathOnZeroHp | bool | Setting to true allows unit to continue living even at 0 HP, useful for custom "death" action. Warning: If not used with an autoTrigger, etc units will attack this unit forever. | disableDeathOnZeroHp: true |
| 1.15p9 | allowCaptureWhenNeutralByAI | bool | When true, it lets to be captured on contact by AI as well. Defaults as false | allowCaptureWhenNeutralByAI: true |
| NaN | #==== | #==== | Transport Keys | NaN |
| 1.13 | transportSlotsNeeded: | int | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 |
| NaN | maxTransportingUnits | int | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 |
| 1.13 | transportUnitsRequireTag: | string(s) | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier |
| NaN | transportUnitsRequireMovementType: | movementTypes | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER |
| NaN | transportUnitsBlockAirAndWaterUnits: | bool | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false |
| NaN | transportUnitsEachUnitAlwaysUsesSingleSlot: | bool | Defaults to false. Units in this transport occupy 1 slot always if true, ignoring transportSlotsNeeded. | transportUnitsEachUnitAlwaysUsesSingleSlot: true |
| NaN | transportUnitsKeepBuiltUnits: | bool | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true |
| NaN | transportUnitsCanUnloadUnits: | LogicBoolean | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false |
| NaN | transportUnitsAddUnloadOption: | bool | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false |
| 1.13.3 | transportUnitsUnloadDelayBetweenEachUnit: | float | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 |
| 1.13 | transportUnitsKillOnDeath: | LogicBoolean | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() |
| 1.13 | transportUnitsHealBy: | float | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 |
| NaN | transportUnitsBlockOtherTransports: | bool | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false |
| 1.13.3 | whileNeutralTransportAnyTeam: | bool | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true |
| NaN | whileNeutralConvertToTransportedTeam: | bool | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true |
| NaN | convertToNeutralIfNotTransporting: | bool | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true |
| NaN | transportUnitsOnTeamChangeKeepCurrentTeam: | bool | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true |
| 1.13.3 | #==== | #==== | Resource Node Keys | NaN |
| NaN | resourceRate: | float | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | resourceRate: 100 |
| NaN | similarResourcesHaveTag: | string(s) | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource |
| 1.13.3 | resourceMaxConcurrentReclaimingThis: | int | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 |
| NaN | reclaimPrice: | int | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 |
| NaN | #==== | #==== | Resource Harvester Keys | NaN |
| NaN | canReclaimResources: | bool | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true |
| NaN | canReclaimResourcesNextSearchRange: | int | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 |
| NaN | canReclaimResourcesOnlyWithTags: | string(s) | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource |
| NaN | canReclaimUnitsOnlyWithTags | string(s) | This is for reclaiming units, not for resources. See canReclaimResourcesOnlyWithTags | canReclaimUnitsOnlyWithTags: reclaimable |
| 1.15 | resourceReclaimMultiplier | float | Multiplies the builder's reclaim speed. Different from the related key "nanoUnbuildSpeed" | resourceReclaimMultiplier: 1.5 |
| NaN | #==== | #==== | Construction and Factory Keys | NaN |
| NaN | canRepairUnitsOnlyWithTags | string(s) | Repairs units with the specified tags | canRepairUnitsOnlyWithTags: vulnerable |
| NaN | canRepairBuildings: | bool | Can this can heal ally buildings (isBuilder:true is required) | canRepairBuildings: true |
| NaN | canRepairUnits: | bool | Can this can heal ally units. (isBuilder:true is required), canRepairBuildings required for buildings. | canRepairUnits: true |
| NaN | autoRepair: | bool | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true |
| NaN | nanoRange: | int | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 |
| NaN | nanoRepairSpeed: | float | Defaults to 0.2. Defines the unit nano repair/reclaim speed. | nanoRepairSpeed: 0.01 |
| NaN | nanoBuildSpeed: | float | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 |
| 1.15 | nanoUnbuildSpeed: | float | How fast a builder reclaims an incomplete building (defaults to 1) | nanoUnbuildSpeed: 1.4 |
| NaN | nanoReclaimSpeed: | float | How fast a builder reclaims a normal unit (not a resource unit) | nanoReclaimSpeed: 0.23 |
| 1.13.3 | nanoRangeForRepairIsMelee: | bool | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true |
| NaN | nanoRangeForReclaimIsMelee: | bool | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true |
| NaN | nanoRangeForRepair: | int | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 |
| NaN | nanoRangeForReclaim: | int | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 |
| NaN | nanoFactorySpeed: | float | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 |
| NaN | extraBuildRangeWhenBuildingThis: | int | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 |
| NaN | builtFrom\_{NUM}\_name: | string(s) | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory |
| NaN | builtFrom\_{NUM}\_pos: | float | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 |
| NaN | builtFrom\_{NUM}\_forceNano: | bool | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true |
| 1.13.3 | builtFrom\_{NUM}\_isLocked: | LogicBoolean | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) |
| NaN | builtFrom\_{NUM}\_isLockedMessage: | LocaleString | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population |
| NaN | exit\_x: | float | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 |
| NaN | exit\_y: | float | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 |
| 1.13 | exit\_dirOffset: | float | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 |
| NaN | exit\_heightOffset: | float | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 |
| NaN | exit\_moveAwayAmount: | float | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 |
| 1.14 | exitHeightIgnoreParent | bool | Ignores parent height for exit height; useful for separating attachments with their parents for building | exitHeightIgnoreParent: true |
| NaN | #==== | #==== | Death Keys | NaN |
| NaN | dieOnConstruct: | bool | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true |
| 1.13 | dieOnZeroEnergy: | bool | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true |
| NaN | numBitsOnDeath: | int | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 |
| NaN | nukeOnDeath: | bool | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true |
| NaN | nukeOnDeathRange: | float | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 |
| NaN | nukeOnDeathDamage: | float | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 |
| NaN | nukeOnDeathDisableWhenNoNuke: | bool | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true |
| NaN | fireTurretXAtSelfOnDeath: | turret ref | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: turret\_1 |
| 1.13 | explodeOnDeath: | bool | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false |
| NaN | explodeOnDeathGroundCollision: | boolean | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false |
| 1.14 | explodeTypeOnDeath: | preset effects | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding | NaN |
| 1.13 | effectOnDeath: | effect(s) ref | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound |
| NaN | effectOnDeathGroundCollision: | effect(s) ref | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion |
| NaN | unitsSpawnedOnDeath: | string(s) | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | bool | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true |
| NaN | hideScorchMark: | bool | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true |
| NaN | soundOnDeath: | string(s) | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg |
| 1.14 | effectOnDeathIfUnbuilt: | effect(s) ref | If the unit was not completed, and is destroyed, play this effect. Defaults to effectOnDeath | effectOnDeathIfUnbuilt: CUSTOM:implode |
| NaN | #==== | #==== | Action Keys | NaN |
| 1.13.3 | autoTriggerCooldownTime: | time (seconds) | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | autoTriggerCooldownTime: 0.05s |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU: | bool | Allows for auto action cooldown lower than 0.2s. Default to false. Not recommended. | autoTriggerCooldownTime\_allowDangerousHighCPU: true |
| 1.15 | autoTriggerCheckRate: | enum | options: everyFrame (default), every4Frames, every8Frames. Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| 1.15 | autoTriggerCheckWhileNotBuilt: | bool | Defaults to false. autoTrigger of unit actions check even when not completely built if true | autoTriggerCheckWhileNotBuilt: true |
| 1.15p10 | updateUnitMemory: | memory | Faster memory update than [action\_#] setUnitMemory. Useful on many applications. | updateUnitMemory: timeCount = (1 + memory.timeCount) |
| NaN | updateUnitMemoryRate: | int | Sets how often the memory is updated. Defaults at 1s. settings it to 0 will update memory every frame. | updateUnitMemoryRate: 0 |
| NaN | NaN | NaN | NaN | NaN |
| 1.15 | @memory | NaN | A template-friendly method of defineUnitMemory. Declare name followed by type, separated by a colon | @memory fish:unit |
| NaN | NaN | NaN | NaN | @memory bullets:number |
| 1.15p11 | NaN | NaN | Add a pair of square brackets for array memory type | @memory myTargets:unit[] |
| NaN | NaN | NaN | NaN | NaN |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN |
| depr. 1.13 | action\_#\_convertTo: | string | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 |
| NaN | action\_#\_pos: | float | Order action appears in UI | action\_1\_pos: 0.1 |
| NaN | action\_#\_price: | int | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 |
| NaN | action\_#\_text: | string | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 |
| NaN | action\_#\_description: | string | The action description. | action\_1\_description: -Converts the tank |
| NaN | action\_#\_addEnergy: | float | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 |
| NaN | action\_#\_whenBuilding\_cannotMove: | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true |
| NaN | canBuild\_#\_name/pos/isLocked: | string | Use canBuild section instead. | canBuild\_1\_name: tank |
| NaN | Section | NaN | [canBuild\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | name: | string(s) | List of unit identifiers this unit can create. Can be buildings or units. Add "setRally" to create a rally button | name: setRally, tank, hoverTank, heavyTank |
| NaN | pos: | float | Order build link appears in this unit UI. | pos: 0.1 |
| NaN | tech: | int | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 |
| NaN | forceNano: | bool | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true |
| NaN | isVisible: | LogicBoolean | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) |
| NaN | isLocked: | LogicBoolean | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) |
| NaN | isLockedMessage: | string | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks |
| NaN | isLockedMessage\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles |
| NaN | isLockedAlt: | LogicBoolean | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) |
| NaN | isLockedAltMessage: | string | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy |
| NaN | isLockedAlt2: | LogicBoolean | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() |
| NaN | isLockedAlt2Message: | string | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet |
| NaN | addResources: | price(s) | Adds these resources to self when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 |
| NaN | price: | price(s) | Overrides builded units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 |
| NaN | isGuiBlinking: | LogicBoolean | Generates a blinking effect in UI if true. | isGuiBlinking: true |
| NaN | Section | NaN | [graphics] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary code | NaN |
| NaN | NaN | file (image) | image: | NaN |
| NaN | #==== | #==== | Common Keys | NaN |
| NaN | image: | file (image) | File path to png image. | image: body.png |
| 1.13 | teamColoringMode: | NaN | How pixels are used for team coloring, options: pureGreen, hueAdd, hueShift, disabled | (Defaults to pureGreen if no code) teamColoringMode: disabled |
| NaN | image\_back: | file (image) | An optional image drawn behind other units. Useful for factories that units exit | image\_back: floor.png |
| 1.14 | image\_shield | file (image) | Image to show as a custom shield | image\_shield: forcefield.png |
| NaN | image\_wreak: | file (image) | Image to use when unit dies. Can be NONE to leave no wreak | image\_wreak: ded.png |
| NaN | image\_offsetX: | int | Use this to adjust the graphics of a unit if it is too far off one side | image\_offsetX: 21 |
| NaN | image\_offsetY: | int | Use this to adjust the graphics of a unit if it is too far off one side | image\_offsetY: 41 |
| 1.15p9 | image\_offsetH: | int | Use this to adjust the height of the graphic, especially when using decals | image\_offsetH: 25 |
| NaN | image\_floatingPointSize | int | Fixes of by 1 pixel sizing for images with widths and/or height that has odd value | image\_floatingPointSize: 10 |
| 1.13.3 | isVisible | logic | If false will hide the unit. | isVisible: false |
| 1.14 | isVisibleToEnemies | bool | Only visible to player and allies when false. Recommend with showOnMinimapToEnemies. Useful for stealth units. | isVisibleToEnemies: false |
| NaN | scaleImagesTo: | float | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | scaleImagesTo: 1 |
| NaN | imageScale: | float | Resize image. Defaults to 1. Effects leg, and shadow images as well. | imageScale: 1 |
| NaN | drawLayer: | string | Land units normally default to ground or ground2 if transport. Options: wreaks, underwater, bottom, ground, ground2, experimentals, air, top | drawLayer: bottom |
| 1.13 | whenBeingBuiltMakeTransparentTill | float | How long the transparent effect is applied to incomplete units, set to 0 to disable completely. Default: 1 | whenBeingBuiltMakeTransparentTill: 0.4 |
| NaN | icon\_zoomed\_out | file (image) | Sets the custom image of the unit icon on the zoomed out battle map | icon\_zoomed\_out: unitIcon.png |
| NaN | icon\_zoomed\_out\_neverShow | bool | Sets wheather show the unit icon or not on the zoomed out battle map | icon\_zoomed\_out\_neverShow: false |
| NaN | icon\_build | file (image) | Displays icon of the unit on Build Panel | icon\_build: iconFish.png |
| NaN | #==== | #==== | Turrets (images can also be set on each turret) | NaN |
| NaN | image\_turret: | file (image) | Default image for all turrets, can also be set per turret | image\_turret: gun.png |
| NaN | teamColorsOnTurret: | bool | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | teamColorsOnTurret: true |
| NaN | scaleTurretImagesTo: | float | Will cause crash if image\_turret is not specified, even if image is set per turret | scaleTurretImagesTo: 1.2 |
| NaN | lock\_body\_rotation\_with\_main\_turret: | bool | Locks body image locked to the direction of the turret named "1" (turret\_1) or the first turret defined (if a turret\_1 is not defined) | lock\_body\_rotation\_with\_main\_turret: true |
| 1.13 | lock\_leg\_rotation\_with\_main\_turret | bool | Locks legs and arms to the direction of the turret named "1" (turret\_1) or the first turret defined (if a turret\_1 is not defined) | lock\_leg\_rotation\_with\_main\_turret: true |
| NaN | #==== | #==== | Shadow | NaN |
| NaN | image\_shadow: | file (image) | Image file, NONE, AUTO or AUTO\_ANIMATED. (AUTO will use image and make it transparent black only.) | image\_shadow: shadow.png |
| NaN | shadowOffsetX: | float | Adjusts shadow horizontally | shadowOffsetX: 10 |
| NaN | shadowOffsetY: | float | Adjusts shadow vertically | shadowOffsetY: 10 |
| 1.13.3 | image\_shadow\_frames | bool | If shadow image should use frame animation of main image. .Alternative to AUTO\_ANIMATED shadow value. | image\_shadow\_frames: true |
| NaN | lock\_shadow\_rotation\_with\_main\_turret: | bool | Locks body image shadow locked to first turret's direction | lock\_shadow\_rotation\_with\_main\_turret: true |
| NaN | #==== | #==== | Effects and animation | NaN |
| NaN | total\_frames | int | Defaults to 1. Animations require this. | total\_frames: 3 |
| NaN | frame\_width: | int | Calculated for you if total frames is set, but can be overridden | frame\_width: 40 |
| NaN | frame\_height: | int | Defaults to image height | frame\_height: 60 |
| 1.14? | default\_frame | int | Default frame when not playing an animation. First frame is 0 | default\_frame: 0 |
| NaN | splastEffect: | bool | True to create a water wave effect when over water. Default false | splastEffect: true |
| NaN | dustEffect: | bool | True to create a dust effect when over land. Default false | dustEffect: true |
| NaN | splastEffectReverse: | bool | True to also create effect when unit is reversing | splastEffectReverse: true |
| NaN | dustEffectReverse: | bool | True to also create effect when unit is reversing | dustEffectReverse: true |
| 1.13 | movementEffect | effect | Custom movement effect, can be anything | movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 |
| 1.13 | movementEffectReverse | effect | Reversed version of movementEffect: key | movementEffectReverse: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 |
| 1.13 | movementEffectRate | float | Sets the frequency of effects being spawned while moving | movementEffectRate: 10 |
| 1.13 | movementEffectReverseFlipEffects | bool | Create effect as if unit has rotated 180 when reversing | movementEffectReverseFlipEffects: true |
| NaN | repairEffect | effect ref | Custom repair effect, can be anything. Replaces default effect from builders | repairEffect: CUSTOM:mist\*5 |
| NaN | repairEffectAtTarget | effect | Custom repair effect towards the repaired target | repairEffectAtTarget: CUSTOM:greensparks\*2 |
| NaN | repairEffectRate | int | Sets the frequency of effects being spawned while repairing. Defaults to 5, affects both sides. | repairEffectRate: 20 |
| 1.13.3 | reclaimEffect | effect | Custom reclaim effect, can be anything. Replaces default effect from builders | reclaimEffect: CUSTOM:sap\*5 |
| 1.13.3 | reclaimEffectAtTarget | effect | Custom reclaim effect towards the reclaimed target | reclaimEffectAtTarget: CUSTOM:redsparks\*2 |
| 1.13.3 | reclaimEffectRate | int | Sets the frequency of effects being spawned while reclaiming. Defaults to 5, affects both sides. | reclaimEffectRate: 20 |
| NaN | rotate\_with\_direction: | bool | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | rotate\_with\_direction: false |
| NaN | animation\_direction\_units: | float | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | animation\_direction\_units: 45 |
| NaN | animation\_direction\_strideX: | int | Animation frames to offset on direction change. | animation\_direction\_strideX: 40 |
| NaN | animation\_direction\_strideY: | int | Animation frames to offset on direction change. Used with frame\_height. | animation\_direction\_strideY: 60 |
| NaN | animation\_direction\_starting: | float | Direction for first frame | animation\_direction\_starting: 90 |
| NaN | #==== | #==== | Show and Hide | NaN |
| 1.13.3 | disableLowHpFire | bool | Defaults to false. When true, removes the flames on severely damaged unit/structure. | disableLowHpFire: false |
| 1.13.3 | disableLowHpSmoke | bool | Defaults to false. When true, removes the smokes on severely damaged unit/structure. | disableLowHpSmoke: false |
| 1.13.3 | showTransportBar: | bool | Defaults to true. Shows the transport bar for transport units. | showTransportBar: false |
| 1.13.3 | showHealthBar | bool | Defaults to true. Shows the health bar of a unit. (Still hidden even if true when "Always show unit health" setting is disabled.) | showHealthBar: false |
| 1.13.3 | showEnergyBar | bool | Defaults to true. Shows the energy bar of a unit. | showEnergyBar: false |
| 1.14 | showShieldBar | bool | Defaults to true. Shows the shield bar of a unit. Also affects the presence of set custom shield sprite. | showShieldBar: false |
| 1.14 | showQueueBar | bool | Defaults to true. Shows the bar for build or action queue of a unit. | showQueueBar: false |
| 1.15 | showShotDelayBar | bool | Defaults to true. Shows the shot delay/warmup of a unit before firing. | showShotDelayBar: false |
| 1.15p9 | showSelectionIndicator | bool | Defaults to true. Shows select circle/box if true | showSelectionIndicator: false |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better, more adaptable ways) | NaN |
| NaN | teamColorsUseHue: | bool | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN |
| depr. 1.13 | animation\_TYPE\_start: | int | TYPE can be set to: attack, moving, idle. Use [animation] section instead for more control | animation\_moving\_start: 0 |
| depr. 1.13 | animation\_TYPE\_end: | int | End frame, must be larger then start | animation\_moving\_end: 3 |
| depr. 1.13 | animation\_TYPE\_scale\_start: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_end: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN |
| depr. 1.13 | animation\_TYPE\_speed: | float | Delay for each frame of animation. Larger values cause slower animation | NaN |
| depr. 1.13 | animation\_TYPE\_pingPong: | bool | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN |
| NaN | Section | NaN | [attack] | The attack section is for global attack characteristics, per-turret overrides these |
| NaN | Code | Value Type | Description | Example |
| NaN | canAttack: | bool | If set to false, can not attack any unit. Overrides other canAttack options altogether. | canAttack: true |
| NaN | canAttackFlyingUnits: | LogicBoolean | can also be narrowed per turret. Note: not required if canAttack is false. | canAttackFlyingUnits: false |
| NaN | canAttackLandUnits: | LogicBoolean | can also be narrowed per turret in [turret\_NAME] | canAttackLandUnits: true |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | can also be narrowed per turret in [turret\_NAME] | canAttackUnderwaterUnits: false |
| NaN | maxAttackRange: | float | (multiplied by globalScale) | maxAttackRange: 300 |
| NaN | shootDelay: | float | Global delay, can also use delay on each turret. Set in seconds or ticks | shootDelay: 21, shootDelay: 5s |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | canAttackNotTouchingWaterUnits: false |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | Will only attack units that has the specified tags. | canOnlyAttackUnitsWithTags: metallic, ceramic |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | Can only attack units without the specified tags. | canOnlyAttackUnitsWithoutTags: corrosive, magnetic |
| 1.13 | turretMultiTargeting | bool | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | turretMultiTargeting: true |
| NaN | isMelee: | bool | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | isMelee: true |
| 1.13.3 | meleeEngangementDistance | int | Makes unit move to attack nearby units. Defaults to 250 for melee, and 0 for non melee (Works even if non-melee, but might be unexpected to players) | meleeEngangementDistance: 400 |
| NaN | turretRotateWithBody | bool | Are all turrets rotated when body rotates. Defaults to true | turretRotateWithBody: true |
| NaN | attackMovement: | string | normal/bomber. bomber attack movement will retreat when energy runs out | attackMovement: bomber |
| NaN | dieOnAttack: | bool | Will die when it attacks. | dieOnAttack: true |
| NaN | isFixedFiring: | bool | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | isFixedFiring: true |
| NaN | aimOffsetSpread: | float | Offset each shot multiplied by target radius. Defaults to 0.6. aimOffsetSpread:0 will make unit always attack center | aimOffsetSpread:0 |
| 1.13 | stopTargetingAfterFiring | bool | Unit stops targeting after firing a shot. Rarely used or needed. | stopTargetingAfterFiring: true |
| NaN | disablePassiveTargeting: | bool | Unit only attacks manually ordered target. Rarely used or needed. | disablePassiveTargeting: true |
| 1.13.3 | showRangeUIGuide | bool | Will it show the range indicator. Useful for showing ranges in radar and related structures. | showRangeUIGuide: true |
| 1.15 | shootDelayMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | shootDelayMultiplier: 0.75 |
| 1.15 | shootDamageMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | shootDamageMultiplier: 2.43 |
| NaN | #==== | #==== | Deprecated Keys - can be used but better to set these per turret | NaN |
| depr. 1.13 | turretSize: | float | (multiplied by globalScale) | NaN |
| depr. 1.13 | turretTurnSpeed: | float | NaN | NaN |
| NaN | Section | NaN | [turret\_NAME] | Turrets fire projectiles with different traits |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code | NaN |
| NaN | NaN | float | x: | NaN |
| NaN | NaN | float | y: | NaN |
| NaN | #==== | #==== | Positioning/Stats | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | x: | float | Sets the horizontal position of the turret. 0 is center, negatives toward left, positives toward right. | x: 0 |
| NaN | y: | float | Sets the vertical position of the turret. 0 is center, negatives toward bottom, positives toward top. | y: 40 |
| NaN | copyFrom: | turret ref | Copy all values from another turret as defaut values for this turret | copyFrom: 1 |
| NaN | projectile | projectile ref | Projectile fired from this turret. | projectile: torpedo |
| NaN | altProjectile | projectile ref | Alternative projectile fired from this turret when altProjectileCondition is true | altProjectile: spear |
| NaN | altProjectileCondition | LogicBoolean | Used with altProjectile | altProjectileCondition: if self.hp() < 100 |
| 1.13 | barrelX | float | Defaults to 0. Controls horizontal position for projectile spawn. | barrelX: 0 |
| 1.13 | barrelY | float | Defaults to size. Note: size and barrelY have the same meaning | barrelY: 5 |
| 1.13.3 | barrelHeight | float | Height of barrel in 3d. Effect projectile and shoot flame starting height | barrelHeight: 10 |
| 1.15p9 | height: | float | Height of the unit in 3D, to be used with decals | height: 30 |
| NaN | size: | float | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 |
| NaN | turnSpeed | float | Max turn speed of the turret | turnSpeed: 2 |
| NaN | turnSpeedAcceleration | float | Defaults to disabled, and full turn speed is used. | turnSpeedAcceleration: 0.4 |
| NaN | turnSpeedDeceleration | float | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | turnSpeedDeceleration: 0.2 |
| NaN | idleDir | float | Defaults to 0 | idleDir: 180 |
| 1.13 | idleDirReversing | float | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | idleDirReversing: 30 |
| NaN | shouldResetTurret: | bool | Defaults true. False to disable the reseting turret angle when idle | shouldResetTurret: false |
| NaN | idleSpin: | float | Spin rate when idle, used on missile turrets | idleSpin: 2 |
| 1.14 | idleSweepAngle | int | Disabled by default. Controls how far the turret will "look" left and right | idleSweepAngle: 35 |
| 1.14 | idleSweepDelay | float | Controls the delay between idleSweep movements | idleSweepDelay: 20 |
| 1.14 | idleSweepSpeed | float | Controls the speed with which the turret sweeps when idle | idleSweepSpeed: 0.3 |
| 1.14 | idleSweepCondition | LogicBoolean | Disable idle sweep if false | idleSweepCondition: if self.hp() > 400 |
| 1.14 | idleSweepAddRandomDelay | float | Default 1-20 depends on idleSweepDelay, used to stop sweep syncing up with other units | idleSweepAddRandomDelay: 30 |
| 1.14 | idleSweepAddRandomAngle | int | Default 0 | idleSweepAddRandomAngle: 15 |
| NaN | attachedTo: | turret ref | A specific turret to connect to, it will rotate with it. No correlation to [attachment\_x] | attachedTo: base |
| NaN | slave: | bool | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | slave: true |
| NaN | isMainNanoTurret: | bool | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | isMainNanoTurret: true |
| NaN | energyUsage: | float | Required energy to fire weapon. Same as resourceUsage: energy=X | energyUsage: 1 |
| NaN | resourceUsage | price | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | #==== | #==== | Timing | NaN |
| NaN | delay: | float | Override global shootDelay for this turret | delay: 2s |
| NaN | linkDelayWithTurret | turret ref | When this other turret fires the cooldown delay on this turret will be reset/removed | linkDelayWithTurret: 1 |
| NaN | warmup: | float | Delay before firing a shot. | warmup: 5s |
| NaN | warmupCallDownRate | float | Rate to reduce warmup when turret is not ready to fire at any targets | warmupCallDownRate: 10 |
| NaN | warmupNoReset | bool | Defaults to false. When true warmup is not reset after firing a shot and turret doesn't wait for warnup. Used with warmupCallDownRate and warmupShootDelayTransfer. | warmupNoReset: true |
| NaN | warmupShootDelayTransfer | float | Defaults to 0, amount to reduces the next shot delay depending on warmup. When used with warmupNoReset, can make a each shot faster. | warmupShootDelayTransfer: 20 |
| NaN | #==== | #==== | On Shoot | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor: | float | Freezes body movement while shooting. | onShoot\_freezeBodyMovementFor: 2s |
| 1.14 | barrelOffsetX\_onOddShots: | float | 0 by default. Sets a barrelX offset only during odd numbered shots, useful for twin-barreled units. Use with barrelX. Use the opposite value of barrelX for most cases. | barrelOffsetX\_onOddShots: -10 |
| NaN | #==== | #==== | Targeting control | NaN |
| 1.14 | aimOffsetSpread: | NaN | Sets the shot inaccuracy. 0 will make all shots land on target's center | aimOffsetSpread: 14 |
| NaN | canShoot: | bool | Defaults to true | canShoot: true |
| NaN | canAttackFlyingUnits: | LogicBoolean | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | canAttackFlyingUnits: false |
| NaN | canAttackLandUnits: | LogicBoolean | Default true. If false unit cannot attack surface units. | canAttackLandUnits: true |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | Default true. If false unit cannot attack underwaterunits. | canAttackUnderwaterUnits: true |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | canAttackNotTouchingWaterUnits: false |
| 1.13.3 | canOnlyAttackUnitsWithTags: | tags | Only attacks potential targets with specific tags | canOnlyAttackUnitsWithTags: shelled, armoured |
| 1.13.3 | canOnlyAttackUnitsWithoutTags: | tags | Only attacks potential targets without specific tags | canOnlyAttackUnitsWithoutTags: corrosive, fleshy |
| NaN | canAttackCondition: | LogicBoolean | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying |
| 1.14 | canAttackMaxAngle: | float | Max angle to target for turret to be allowed for fire. Defaults to 5, don't set lower. Can be set to 181 for turrets that don't need to turn to fire missiles. | canAttackMaxAngle: 181 |
| 1.13 | clearTurretTargetAfterFiring: | bool | Clears the turrets sub-target when using multi-targeting | clearTurretTargetAfterFiring: |
| NaN | limitingRange: | float | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | limitingRange: 100 |
| 1.13 | limitingAngle | int | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | limitingAngle: 60 |
| 1.13 | limitingMinRange: | int | Sets minimum range for turret. | limitingMinRange: 200 |
| 1.13 | interceptProjectiles\_withTags: | tags | Currently used with anti-nuke units. | interceptProjectiles\_withTags: nuke |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance: | int | Minimum distance required for intercepting projectile | interceptProjectiles\_andTargetingGroundUnderDistance: 100 |
| NaN | interceptProjectiles\_andUnderDistance: | int | Defaults to 2000, distance inflight before firing | interceptProjectiles\_andUnderDistance: 300 |
| NaN | interceptProjectiles\_andOverHeight: | int | Defaults to 0. Sets the projectile target height limit | interceptProjectiles\_andOverHeight: 10 |
| NaN | laserDefenceEnergyUse: | float | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | laserDefenceEnergyUse: 0.25 |
| NaN | #==== | #==== | Graphics and effects | #==== |
| NaN | invisible: | LogicBoolean | Don't render this turret, but still can shoot, etc. | invisible: true |
| NaN | image: | file (image) | Use custom image. Overrides unit's main turret image | image: gun.png |
| NaN | image\_applyTeamColors | bool | When true, the specific turret applies team colors over the special greens in the sprite. | image\_applyTeamColors: true |
| NaN | image\_drawOffsetX | float | Moves the image horizontally from the turret center. | image\_drawOffsetX: 0 |
| NaN | image\_drawOffsetY | float | Moves the image verticallly from the turret center. | image\_drawOffsetY: 30 |
| NaN | chargeEffectImage:\n | file (image) | Used with warmup. Shows a scaling effect image on turret barrel when charging. | chargeEffectImage: glow.png\n |
| NaN | warmupStartEffect | effect ref | Spawns specified effects when the specific turret is charging/warming up | warmupStartEffect: CUSTOM:abosrb |
| NaN | shoot\_sound: | string | Can be linked to an .ogg or .wav file, or one of the default game sounds (list at bottom of reference) | shoot\_sound: tank\_firing | shoot\_sound: missile.wav | shoot\_sound: ROOT:audio/shoot.ogg |
| NaN | shoot\_sound\_vol: | float | Sets the volume of the shoot sound | shoot\_sound\_vol: 0.4 |
| NaN | shoot\_flame: | effects | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 |
| NaN | shoot\_light | color | Produces a colored light upon shooting | shoot\_light: #fafafa |
| 1.13 | onShoot\_playAnimation | animation ref | Play a custom animation from an [animation] section after firing this turret | onShoot\_playAnimation: heatUp |
| 1.14 | onShoot\_triggerActions | action refs | Trigger these actions each time this turret fires | onShoot\_triggerActions: spawnShells |
| 1.15 | unloadUpToXUnitsAndGiveAttackOrder | int | Unloads X units at turret barrel locations and gives them the attack order of turret target | unloadUpToXUnitsAndGiveAttackOrder: 1 |
| NaN | recoilOffset | float | Push turret forward or back after firing for a recoil effect. Value in pixels. | recoilOffset: 10 |
| NaN | recoilOutTime | float | Time to get to offset position after firing | recoilOutTime: 1s |
| NaN | recoilReturnTime | float | Time to return to default position | recoilReturnTime: 0.5s |
| 1.13.3 | showRangeUIGuide | bool | Defaults to true. Displays the attack range for this turret | showRangeUIGuide: true |
| NaN | Section | NaN | [projectile\_NAME] | Projectiles are often used to inflict damage on an enemy, but can also be used for other purposes |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Necessary Code | NaN |
| NaN | NaN | int | directDamage: or areaDamage: | NaN |
| NaN | NaN | NaN | life: | NaN |
| NaN | #==== | #==== | Core | NaN |
| NaN | life: | NaN | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | life: 300 |
| NaN | deflectionPower: | float | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | deflectionPower: -1 |
| 1.13 | explodeOnEndOfLife | bool | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing. Good for making area-denial weapons. | explodeOnEndOfLife: true |
| NaN | autoTargetingOnDeadTarget: | bool | Retarget to nearby unit if target dies while in transit | autoTargetingOnDeadTarget: true |
| 1.14 | autoTargetingOnDeadTargetRange | int | The range which it will select a new target if old target has died | autoTargetingOnDeadTargetRange: 100 |
| 1.14 | autoTargetingOnDeadTargetLead | float | The lead it will try to have on the new target | autoTargetingOnDeadTargetLead: 300 |
| 1.13 | unloadUpToXUnitsFromSource | int | Unload X units from source unit, to projectile explode location | unloadUpToXUnitsFromSource: 2 |
| 1.13 | teleportSource | bool | Move unit that shot this projectile to projectile explode location | teleportSource: true |
| NaN | NaN | NaN | NOTE: There is a list for all possible modifications to spawnUnit and spawnProjectile, type "spawnUnit:LIST" or "spawnProjectiles:LIST" in the Search function | NaN |
| 1.13 | spawnUnit: | projectile ref | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank(offsetX=10) |
| 1.14 | spawnProjectilesOnEndOfLife | projectile ref | Spawns new projectiles on end of life, useful for secondary projectiles | spawnProjectilesOnEndOfLife: torpedo\_split(offsetDir=90), torpedo\_split(offsetDir=-90) |
| 1.14 | spawnProjectilesOnExplode | projectile ref | Projectiles to spawns when this projectile hits it's target | spawnProjectilesOnExplode: flachette\*4 |
| 1.14 | spawnProjectilesOnCreate | NaN | Spawns projectiles on creation of this projectile, useful for making true shotgun-like projectile spread | spawnProjectilesOnCreate: shotgun\*12 |
| 1.13.3 | convertHitToSourceTeam | bool | Convert units hit to the team that fired this projectile. Useful to make capturing systems | convertHitToSourceTeam: true |
| NaN | NaN | NaN | NaN | NaN |
| 1.13 | tags | tags | Used for projectile interceptions (e.g. Nuke and Anti-Nuke Interaction) and in [action] autoTriggerOnEvent: tookDamage(withTag="[tagName]") | tags: nuke, missile |
| NaN | flameWeapon: | bool | Generates small flames on hit (only cosmetic) | flameWeapon: true |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | delayedStartTimer: 2s |
| NaN | #==== | #==== | Damage | NaN |
| 1.0 / updated 1.16 | directDamage: | int / 1.16: dynamic | Damage to target unit on hit. Does not work with targetGround:true as it won't have a clear unit to target | directDamage: 30 |
| 1.0 / updated 1.16 | areaDamage: | int / 1.16: dynamic | Damages on arrival of target with an area effect, use areaRadius to adjust size of damage. targetGround needs this to damage | areaDamage: 10 |
| 1.16 change | NaN | NaN | As of 1.16, damage can accept dynamic values | NaN |
| 1.13 | areaRadius: | float | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | areaRadius: 100 |
| NaN | areaDamageNoFalloff | bool | Removes the falloff from areaDamage | areaDamageNoFalloff: true |
| NaN | areaRadiusFromEdge | bool | Applies damage from edge of units instead of center. Mostly effects large units. | areaRadiusFromEdge: true |
| 1.13 | areaExpandTime | float | Applies area damage as an expanding blast wave rather than instantly. Useful for nuke projectiles | areaExpandTime: 1s |
| 1.13 | areaHitAirAndLandAtSameTime | bool | Defaults to false | areaHitAirAndLandAtSameTime: true |
| NaN | areaHitUnderwaterAlways | bool | Defaults to false | areaHitUnderwaterAlways: true |
| NaN | areaIgnoreUnitsCloserThan | int | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | areaIgnoreUnitsCloserThan: 10 |
| 1.13 | buildingDamageMultiplier | float | Defaults to 1 | buildingDamageMultiplier: 3 |
| 1.13 | shieldDamageMultiplier | float | Defaults to 1. 0 to do no damage to shields and 2 to do double damage | shieldDamageMultiplier: 1.4 |
| 1.13 | shieldDefectionMultiplier | float | Defaults to 1. The amount of shield to bypass. 0 to ignore shields and directly damage hull | shieldDefectionMultiplier: 1.55 |
| 1.14 | hullDamageMultiplier | float | Defaults to 1. Can be used to create EMP weapons that affect shields only. 0 to ignore hull and only damage shields | hullDamageMultiplier: 2 |
| 1.15 | ignoreParentShootDamageMultiplier | bool | Sets whether multipliers are applied or not regardless of multipliers set in attack or setUnitStats | ignoreParentShootDamageMultiplier: true |
| NaN | armourIgnoreAmount | int | Amount of armour to ignore on target and do damage as if this armour was not there | armourIgnoreAmount |
| 1.13 | friendlyFire | bool/string | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy |
| 1.13.3 | mutatorX\_ifUnitWithTags | tags | Applies mutators to this projectile if target has corresponding tags | mutator1\_ifUnitWithTags: infantry |
| 1.13.3 | mutatorX\_ifUnitWithoutTags | tags | Same as ifUnitWithTags, but applies if target doesn't have the set tags | mutator1\_ifUnitWithoutTags: strongArmour |
| 1.13.3 | mutatorX\_directDamageMultiplier | float | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible. Replace X with desired name | mutatorX\_directDamageMultiplier: 5 |
| 1.13.3 | mutatorX\_areaDamageMultiplier | float | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | mutatorX\_areaDamageMultiplier: 1.2 |
| 1.13.3 | mutatorX\_changedExplodeEffect | effect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | mutatorX\_changedExplodeEffect: CUSTOM:specialBlast |
| 1.14 | mutatorX\_addResourcesDirectHit | resource | Add resource to all direct hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | mutatorX\_addResourcesDirectHit: oil=1 |
| 1.14 | mutatorX\_addResourcesAreaHit | resource | Add resource to all area hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | mutatorX\_addResourcesAreaHit: rust=4 |
| NaN | #==== | #==== | Movement | NaN |
| NaN | targetGround | bool | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | targetGround: true |
| 1.14 | targetGround\_includeTargetHeight | bool | Default false. for area affect AA weapons | targetGround\_includeTargetHeight: 40 |
| 1.14 | targetGroundHeightOffset | float | Default 0. for shooting over or under a target. Useful for projectiles that split and rain down. | targetGroundHeightOffset: 10 |
| NaN | speed: | float | Projectile default travel speed | speed: 3 |
| NaN | targetSpeed: | float | Accelerate to this speed | targetSpeed: 5 |
| 1.13 | targetSpeedAcceleration | float | Controls the speed rampup for targetSpeed | targetSpeedAcceleration: 0.3 |
| NaN | ballistic: | bool | Makes projectiles fly up into the air and come down, instead of going in a straight line | ballistic: true |
| NaN | ballistic\_delaymove\_height: | float | Sets up to how high the projectile needs to be before moving normally | ballistic\_delaymove\_height: 20 |
| NaN | ballistic\_height: | float | Sets the target height of the projectile | ballistic\_height: 10 |
| NaN | targetGroundSpread: | float | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | targetGroundSpread: 20 |
| NaN | speedSpread: | float | Randomly change the starting projectile speed by this amount | speedSpread: 3 |
| NaN | instant | bool | Hit target instantly | instant: true |
| NaN | instantReuseLast: | bool | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | instantReuseLast: true |
| 1.14 | instantReuseLast\_alsoChangeTurretAim | bool | Make turret's aim include last projectile's spread and sweep offsets, useful for beam weapons | instantReuseLast\_alsoChangeTurretAim: true |
| 1.14 | instantReuseLast\_keepAreaDamageList | bool | Default false. Keeping the list was the normal behaviour in 1.13 making area damage not apply a second time but this is not useful. Use this only if you want the old behaviour. | instantReuseLast\_keepAreaDamageList: true |
| 1.14 | interceptProjectile\_removeTargetLifeOnly | bool | Defaults to false. When false projectiles are just removed. Could be true to make hit projectiles explode or split when hit | interceptProjectile\_removeTargetLifeOnly: true |
| 1.13 | disableLeadTargeting | bool | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | disableLeadTargeting: true |
| 1.13 | leadTargetingSpeedCalculation | float | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | leadTargetingSpeedCalculation: 2 |
| 1.13.3 | initialUnguidedSpeedHeight | NaN | Sets vertical speed for projectiles with targetGround. Use gravity to make smooth arching projectiles. Better have gravity value slightly slower than this key to produce the arches. | initialUnguidedSpeedHeight: 30 |
| 1.13.3 | gravity: | NaN | Controls the pull for projectiles that target ground. Use together with initialUnguidedSpeedHeight | gravity: 29 |
| 1.14 | turnSpeed | float | Limits the turn speed of a projectile, making them inaccurate even with directDamage. Zero value will make it act like if targetGround is set true, but air target friendly option. | turnSpeed: 0 |
| 1.14 | wobbleAmplitude | float | How wide the projectile will wobble | wobbleAmplitude: 10 |
| 1.14 | wobbleFrequency | float | How often the projectile will wobble | wobbleFrequency: 4 |
| 1.14 | pushForce | float | Push (or pull with a negative value) the units that get hit. Divided by target mass | pushForce: 2 |
| 1.14 | pushVelocity | float | Push (or pull with a negative value) the units that get hit. Ignores target mass | pushVelocity: 5 |
| 1.14 | moveWithParent | bool | Move projectile as parent moves. Useful for beam effects that need to stick to source turret. | moveWithParent: true |
| 1.14 | sweepOffset | float | Useful for beam effects. | sweepOffset: 0.5 |
| 1.14 | sweepOffsetFromTargetRadius | float | Add to sweep offset by factor of target's radius. 0.4 would be 40% | sweepOffsetFromTargetRadius: 0.4 |
| 1.14 | sweepSpeed | float | Useful for beam effects. | sweepSpeed: 1.5 |
| 1.14 | retargetingInFlight | bool | Can retarget a new target mid-flight, perfect for flak-style weapons and projectiles that collide | retargetingInFlight: true |
| 1.14 | retargetingInFlightSearchDelay | float/time | How long between searching for new targets. Default 5 | retargetingInFlightSearchDelay: 1s |
| 1.14 | retargetingInFlightSearchRange | int | Range which targets are reselected. Default 120 | retargetingInFlightSearchRange: 300 |
| 1.14 | retargetingInFlightSearchLead | float | The lead of the projectile to try to hit the target. Default 15 | retargetingInFlightSearchLead: 30 |
| 1.14 | retargetingInFlightSearchOnlyTags | tag ref | Only retarget units with these tags | retargetingInFlightSearchOnlyTags: lightArmor |
| NaN | #==== | #==== | Graphics and effects | NaN |
| NaN | color | color | Recolors this projectile using a hex value. | color: #bebe50 |
| 1.13.3 | invisible | bool | When true, the projectile is not rendered but still functional. | invisible: true |
| NaN | image: | file (image) | Use custom image. Overrides drawType and frame | image: bullet |
| NaN | drawType | int | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png. Refer to end of sheet for the projectile images. | drawType:1 |
| NaN | drawSize: | float | Scale image. Defaults to 1 | drawSize: 1.5 |
| NaN | frame | int | Built-in image frame to use, starts at zero. | frame: 0 |
| NaN | hitSound: | bool | Default true | hitSound: true |
| 1.13 | explodeEffect | effect ref list | Produces the specified effects upon explosion. | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect |
| 1.13 | explodeEffectOnShield | effect ref list | Use this effect if shield is active on target | explodeEffectOnShield: CUSTOM:EMPwave |
| 1.13 | teamColorRatio | float | Mix 0-1 of team colour into color field | teamColorRatio: 1 |
| 1.14 | teamColorRatio\_sourceRatio | float | default is (1-teamColorRatio). Keep more of color when mixing. Note this might saturate colors. | teamColorRatio\_sourceRatio: 1 |
| 1.13 | drawUnderUnits | bool | If true, renders the projectile under units. Great for torpedos. | drawUnderUnits: true |
| 1.13 | effectOnCreate | effect ref list | Produces specified effects upon creation of the projectile. | effectOnCreate: CUSTOM:puff |
| 1.13 | shouldRevealFog | bool | Reveal fog to player on explode | shouldRevealFog: true |
| 1.13 | alwaysVisibleInFog | bool | Renders the projectile even when fog is present | alwaysVisibleInFog: false |
| 1.13 | nukeWeapon | bool | Shows on mini-map when fired. Some other side effects as well, like nuke explosion effect | nukeWeapon: true |
| NaN | trailEffect | bool/effect | true for built-in defaults, but can also point to any custom effects | trailEffect: true, trailEffect: CUSTOM:rocketThrust |
| 1.13 | trailEffectRate | float | Defaults to 3 | trailEffectRate: 4 |
| NaN | lightCastOnGround | bool | Renders light under the projectile | lightCastOnGround: true |
| NaN | lightSize: | float | Sets the size of the light emitted by the projectile. 1 value = 1 tile | lightSize: 1.5 |
| NaN | lightColor | color | Sets the color of the light emitted by the projectile. | lightColor: #ffe92b |
| NaN | largeHitEffect: | bool | Creates a large explosion and accompanying sound on hit (only cosmetic) | largeHitEffect: true |
| NaN | lightingEffect: | bool | Draw as lighting works best with instant:true | lightingEffect: true |
| NaN | laserEffect: | bool | Draw as laser works best with instant:true | laserEffect: true |
| 1.14 | beamImage | file (image) | Image to use for beam and laser effect type projectiles. Image is repeated vertically depending on the distance to target. Beam image should be 20 pixels or longer. Width does not matter, only the height. | beamImage: beam.png |
| 1.14 | beamImageOffsetRate | float | Sets how fast the beam image moves towards or away from the target | beamImageOffsetRate: 1 |
| 1.14 | beamImageStart | file (image) | Sprite for the origin point of the custom beam | beamImageStart: beamStart.png |
| 1.14 | beamImageStartRotated | bool | Defaults false. True to rotate with turret angle | beamImageStartRotated: true |
| 1.14 | beamImageEnd | file (image) | Sprite for the end point of the custom beam | beamImageEnd: beamEnd.png |
| 1.14 | beamImageEndRotated | bool | Defaults false | beamImageEndRotated: true |
| NaN | Section | NaN | [movement] | These are traits the unit has as far as movement goes, such as rotation and acceleration speed |
| NaN | Code | Value Type | Description | Example |
| NaN | movementType: | string | Defines what kind of terrain the unit will be able to move, along with other properties. Can use only one: NONE, LAND, AIR, WATER, HOVER, BUILDING, OVER\_CLIFF, OVER\_CLIFF\_WATER | movementType: LAND |
| NaN | slowDeathFall: | bool | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true |
| NaN | moveSpeed: | float | Maximum movement speed of the unit. A value of 1 means (1 pixel \* 60) per second (or 3 tiles per second) | moveSpeed: 1.2 |
| NaN | moveAccelerationSpeed: | float | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 |
| NaN | moveDecelerationSpeed: | float | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 |
| NaN | reverseSpeedPercentage: | float | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 |
| NaN | landOnGround: | bool | Should flying unit land when idle. | landOnGround: false |
| NaN | targetHeight: | float | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 |
| NaN | targetHeightDrift: | float | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 |
| NaN | startingHeightOffset: | float | Sets the initial height on spawn. Defaults at 0. | startingHeightOffset: 40 |
| 1.14 | heightChangeRate: | float | Rate at which the unit changes height, either from converting or drifting | heightChangeRate: 3 |
| 1.14 | fallingAcceleration: | float | The acceleration in which a unit drops | fallingAcceleration: |
| 1.14 | fallingAccelerationDead: | float | fallingAcceleration but when destroyed | fallingAccelerationDead: |
| NaN | maxTurnSpeed: | float | Sets the top turning speed of a unit | maxTurnSpeed: 4 |
| NaN | turnAcceleration: | float | Defines how fast units accelerate to max turn speed. | turnAcceleration: 1 |
| NaN | moveSlidingMode: | bool | Makes the unit slide when moveDecelerationSpeed is lower, making them drift and feel natural | moveSlidingMode: true |
| NaN | moveIgnoringBody: | bool | Allows the unit to move without fully turning in the direction its moving, useful for ships and air units | moveIgnoringBody: true |
| NaN | moveSlidingDir: | int | Sets direction when sliding | moveSlidingDir: 180 |
| NaN | joinsGroupFormations: | bool | Defaults to true. Changing not recommended. When false, the unit will directly move to the assigned waypoint without taking space consideration from neighboring units. | joinsGroupFormations: false |
| NaN | Section | NaN | [ai] | This determines what the AI will use the unit for, does not effect player |
| NaN | Code | Value Type | Description | Example |
| NaN | useAsBuilder: | bool | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | useAsBuilder: |
| NaN | useAsTransport | bool | Defaults to true if unit can transport units | useAsTransport |
| NaN | useAsHarvester | bool | Defaults to true if unit can reclaim resources | useAsHarvester |
| NaN | disableUse: | bool | Disallow AI building this unit or building | disableUse: |
| NaN | aiTags | tags | SPECULATIVE - sets separate set of tags for AI use | aiTags: nukeLauncher, launcher |
| NaN | ai\_upgradePriority | float | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | ai\_upgradePriority |
| NaN | #==== | #==== | Buildings only | NaN |
| NaN | maxGlobal: | int | Maximum amount allowed for a specific structure for an AI team per map | maxGlobal: 50 |
| NaN | maxEachBase: | int | Maximum amount allowed for a specific structure for an AI team per "base", usually around an extractor or spawn point. To check for an AI base in sandbox, enable Debug Mode and Click Shift + F3 | maxEachBase: 10 |
| NaN | buildPriority: | float | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | buildPriority: 1 |
| NaN | noneInBaseExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the AIs base | noneInBaseExtraPriority: 2 |
| NaN | noneGlobalExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the any where on the map | noneGlobalExtraPriority: 4 |
| NaN | recommendedInEachBaseNum | float | Defaults to 0 | recommendedInEachBaseNum: 2 |
| NaN | recommendedInEachBasePriorityIfUnmet | float | Defaults to 0.5. Overrides buildPriority if recommended in base is too low. | recommendedInEachBasePriorityIfUnmet: 4 |
| NaN | upgradedFrom: | string | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | upgradedFrom: builderLevel1 |
| 1.14 | notPassivelyTargetedByOtherUnits | bool | Useful for walls, etc | notPassivelyTargetedByOtherUnits: true |
| 1.14 | lowPriorityTargetForOtherUnits | bool | Useful for units that cannot attack back. Eg walls | lowPriorityTargetForOtherUnits: true |
| 1.13.3 | whenUsingAsHarvester\_recommendedInEachBase | int | Assigns unit of the same name with certain amount on an AI base | whenUsingAsHarvester\_recommendedInEachBase: 3 |
| 1.13.3 | whenUsingAsHarvester\_recommendedGlobal | int | Assigns unit of the same name with certain amount on map | whenUsingAsHarvester\_recommendedGlobal: 20 |
| 1.13.3 | whenUsingAsHarvester\_includeOtherHarvesterCounts | bool | Includes all harvester types on a single counter | whenUsingAsHarvester\_includeOtherHarvesterCounts: true |
| 1.13.3 | onlyUseAsHarvester\_ifBaseHasUnitTagged | string | Only sets the harvester unit as a harvester if an AI base has a unit with particular tag(s) | onlyUseAsHarvester\_ifBaseHasUnitTagged: mineral, wood, stones |
| NaN | Section | NaN | [leg\_#] / [arm\_#] | Legs can move around when unit moves, Arms need an animation or convert |
| NaN | Code | Value Type | Description | Example |
| NaN | x: | float | Sets position of the foot on the X axis. | x: 10 |
| NaN | y: | float | Sets position of the foot on the Y axis. | y: 20 |
| NaN | copyFrom: | int | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 |
| NaN | attach\_x: | float | Sets the leg's attach point on the X axis. | attach\_x: 10 |
| NaN | attach\_y: | float | Sets the leg's attach point on the Y axis. | attach\_y: 0 |
| NaN | rotateSpeed: | float | Sets the leg's rotation speed on movement | rotateSpeed: 2 |
| NaN | endDirOffset | int | Target foot/end rotation relative to body | endDirOffset: 45 |
| NaN | lockMovement | bool | Lock to unit body. Useful if walking unit converted to a flying unit. | lockMovement: true |
| NaN | heightSpeed: | float | Sets how fast the leg rises while walking | heightSpeed: 2 |
| NaN | moveSpeed | float | Sets how fast the leg moves while walking | moveSpeed: 3 |
| NaN | moveWarmUp | NaN | Delay before the leg moved | moveWarmUp: 2 |
| NaN | holdDisMin: | float | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | holdDisMin: 10 |
| NaN | holdDisMax: | float | Defaults to 16. Force reposition of leg at this distance. Repositions leg at this distance even if a neighboring leg is moving | holdDisMax: 20 |
| NaN | holdDisMin\_maxMovingLegs | int | Sets maximum amount of legs to check before applying distance holding | holdDisMin\_maxMovingLegs: 4 |
| NaN | hold\_moveOnlyIfFurthest | bool | Defaults to true. When true, starting moving leg only if it is currently the furthest leg from where it should be. | hold\_moveOnlyIfFurthest: true |
| NaN | holdDisMin\_checkNeighbours | bool | Checks neighbors before applying distance holding | holdDisMin\_checkNeighbours: true |
| NaN | hardLimit: | float | Defaults to 50. Force leg to never go this far. Better to not be reached. | hardLimit: 60 |
| NaN | estimatingPositionMultiplier | float | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | estimatingPositionMultiplier: 2 |
| NaN | #==== | #==== | Graphics and effects | #==== |
| NaN | hidden: | logic boolean | When true, hides the arm/leg | hidden: true |
| 1.13 | image\_end | file (image) | Sets the main arm end sprite | image\_end: rotor.png |
| 1.13 | image\_end\_shadow | file (image) | Sets the shadow for the arm | image\_end\_shadow: AUTO |
| 1.13 | image\_end\_teamColors | bool | When true, the arm end will apply team colors | image\_end\_teamColors: true |
| 1.13 | image\_foot | file (image) | same as image\_end, but acts as the foot for the leg | image\_foot: footR.png |
| NaN | image\_foot\_shadow | file (image) | Sets the shadow for the foot | image\_foot\_shadow: AUTO |
| 1.13 | image\_middle | file (image) | Sets the arm image | image\_middle: NONE |
| NaN | image\_leg | file (image) | Sets the leg image | image\_leg: legR.png |
| 1.13 | draw\_foot\_on\_top | bool | Renders foot above leg | draw\_foot\_on\_top: true |
| NaN | drawOverBody | bool | Draw over body | drawOverBody: false |
| NaN | drawUnderAllUnits | bool | Draw over all units | drawUnderAllUnits: true |
| NaN | drawDirOffset | float | Rotates the foot/arm sprite to a specified direction | drawDirOffset: 73 |
| NaN | dust\_effect: | bool | Spawns dust particles on each step. | dust\_effect: true |
| NaN | spinRate | float | Makes arm/leg spin, like idleSpin for turrets. Great for helicopters | spinRate: 2 |
| NaN | favourOppositeSideNeighbours | bool | calculate neighbours with X 10 times closer than Y | favourOppositeSideNeighbours: true |
| NaN | drawLegWhenZoomedOut | bool | For performance, defaults changes based on unit size | drawLegWhenZoomedOut: false |
| NaN | drawFootWhenZoomedOut | bool | For performance, defaults changes based on unit size | drawFootWhenZoomedOut: false |
| 1.15p9 | liftingHeightOffset | int | Often used with decals | liftingHeightOffset: 20 |
| NaN | targetHeight | int | Sets height of the leg | targetHeight: 10 |
| NaN | targetHeightRelative | bool | Apply height relative to unit's height | targetHeightRelative: true |
| NaN | resetAngle: | float | Unused | NaN |
| NaN | Section | NaN | [attachment\_NAME] | Attachments are slots where other units can be positioned or carried |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | x | float | Sets the horiztontal position of the attachment | x |
| 1.13.3 | y | float | Sets the vertical position of the attachment | y |
| 1.13.3 | height | float | Sets the elevation of the attachment | height |
| 1.13.3 | idleDir | int | Sets the direction of the attachment when idle | idleDir |
| 1.14 | idleDirReversing | int | Sets the direction of the attachment when the base unit is moving in reverse | idleDirReversing |
| 1.13.3 | isVisible | bool | Defaults to true. If false, the attachment is hidden | isVisible |
| 1.13.3 | onCreateSpawnUnitOf | unit ref | Upon spawning the unit, specified attached unit is also spawned as attachment | onCreateSpawnUnitOf |
| 1.13.3 | isUnselectable | bool | Defaults to false. When true, the player cannot click the attachment. | isUnselectable |
| NaN | canAttack | bool | Defaults to true. Set to false to stop this attachment attacking. | canAttack |
| 1.13.3 | canBeAttackedAndDamaged | bool | When true, the attachment is vulnerable to attacks | canBeAttackedAndDamaged |
| 1.13.3 | deattachIfWantingToMove | bool | If the unit is ordered to move, it will detach. This includes waypoints from actions. | deattachIfWantingToMove |
| 1.13.3 | lockLegMovement | bool | Locks the leg movement while attached. | lockLegMovement |
| 1.13.3 | keepAliveWhenParentDies | bool | Defaults to false | keepAliveWhenParentDies: true |
| 1.13.3 | setDrawLayerOnTop | bool | Renders the attachment above the base unit | setDrawLayerOnTop |
| 1.13.3 | setDrawLayerOnBottom | bool | Renders the attachment below the base unit | setDrawLayerOnBottom |
| 1.13.3 | addTransportedUnits | bool | Often used with transport units, when true, attaches one of the unit passenger to this attachment slot | addTransportedUnits |
| 1.13.3 | lockRotation | bool | When true, stops the attachment from rotating | lockRotation |
| 1.13.3 | rotateWithParent | bool | When true, the attachment rotates with the parent unit | rotateWithParent |
| 1.13.3 | resetRotationWhenNotAttacking | bool | Similar to shouldResetTurret:for turrets. | resetRotationWhenNotAttacking |
| 1.13.3 | prioritizeParentsMainTarget | bool | It will priotize targeting the main target. Defaults to true. | prioritizeParentsMainTarget |
| 1.13.3 | alwaysAllowedToAttackParentsMainTarget | bool | Will always attack the parents main target. | alwaysAllowedToAttackParentsMainTarget |
| 1.14 | onParentTeamChangeKeepCurrentTeam | bool | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | onParentTeamChangeKeepCurrentTeam |
| 1.14 | onConvertKeepExistingUnitInSameSlot | bool | When true, the attachment is retained on the same attachment slot when the parent is converted to another unit | onConvertKeepExistingUnitInSameSlot |
| 1.14 | unloadInCurrentPosition | bool | Defaults false. If true transported attached units are kept current attached location when unloading | unloadInCurrentPosition |
| 1.14 | keepWaypointsNeedingMovement | bool | Defaults false. If true attached units keep waypoints with movement even while they cannot move. Useful if they will be automatically deattached soon. | keepWaypointsNeedingMovement |
| 1.14 | smoothlyBlendPositionWhenExistingUnitAdded | bool | NaN | smoothlyBlendPositionWhenExistingUnitAdded |
| 1.14 | showAllActionsFrom | LogicBoolean | Show all actions of the units attached in the parent unit list when selected | showAllActionsFrom |
| 1.14 | createIncompleteIfParentIs: | bool | If parent hasn't been built, create attachment with the same built value. Links built values till attachment is complete. Useful for buildings built with nano. | createIncompleteIfParentIs: |
| 1.14 | redirectDamageToParent: | bool | Redirects damage done to this attachment to the parent instead of damaging itself directly | redirectDamageToParent: |
| 1.14 | redirectDamageToParent\_shieldOnly: | bool | When enemies attack the attachment, all damage are redirected to the parent's shield | redirectDamageToParent\_shieldOnly: |
| NaN | Section | NaN | [action\_NAME] / [hiddenAction\_NAME] | Actions that can dynamically cause changes to units and resources |
| NaN | Code | Value Type | Description | Example |
| NaN | text | string | Labels the action. Supports dynamic text | text: Catch Fish, text: Fire: %{self.resource.ammo} |
| NaN | textPostFix: | string | Text shown as suffix, useful with textAddUnitName to create text UI | text: [ textPostFix: ] textAddUnitName: unitRef self.attachment(slot="${slotId}") |
| NaN | text\_{LANG} | string | Alternative text for different language. Use ISO 639-1 Language code on the {LANG} prefix. Supports dynamic text | text\_es: Fuego %{self.resource.ammo} |
| NaN | description | string | A display text when you select your unit's action, used to explain it's purpose. Supports dynamic text | description: Fires shot on target area |
| NaN | description\_{LANG} | string | Alternative description for different language. Use ISO 639-1 Language code on the {LANG} prefix. Supports dynamic text | description\_es: Disparos en el área objetivo |
| NaN | displayType | list | Affects how the action button and text is displayed. Options: none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox, infoOnlyStockpile | displayType: upgrade |
| NaN | displayRemainingStockpile | bool | Queue is shown as number of times action can be triggered based on price. Use dynamic text on text as alternative. | displayRemainingStockpile: true |
| NaN | pos | float | Order action appears in UI. Merges with positions from canBuild buttons | pos: 1 |
| NaN | iconImage | file (image) | Sets a thumbnail image for the action button | iconImage: fireShot.png |
| 1.14 | iconExtraImage | file (image) | Drawn over top of icon image. Useful for upgrade icons, etc | iconExtraImage: fireShotNo.png |
| 1.14 | iconExtraColor | colour | Defaults to #64FFFFFF | iconExtraColor: #ff0000 |
| 1.14 | iconExtraIsVisible | LogicBoolean | When the condition is met, the extras for icon is visible. | iconExtraIsVisible: if self.resource.ammo < 1 |
| 1.13.3 | unitShownInUI | unitRef/unitType | Display this unit. (as if this action built this unit) | eg: unitShownInUI: unitRef self.transporting(slot=0) or unitShownInUI: heavyTank |
| NaN | guiBuildUnit | unitRef/unitType | Uses the UI similar when building structures. An alternative to fireTurretX on some cases | guiBuildUnit: placeholderUnit |
| 1.14 | setBuilt | float | Designates how built the unit is from a percentage of 0-100% with a number between 0 and 1. | setBuilt: 0.5 |
| 1.15p9 | tags | tags | To be used with the withTag parameter for self.queueSize(withTag=x) and queueItemAdded and queueItemCanceled events | tags: actionFire |
| 1.15p11 | id | string | Allow same/equivalent actions to be more easily connected when converting between units, to preserve queues, calldowns, etc. (Normally action order is used but can be unstable.) | id: fireShot |
| NaN | #==== | #==== | Unit Reference - Dynamically parts from already existing units, useful w/ isAlsoViewableByEnemies | self, self.parent(), self.transporting(slot=x), self.attachment(slot=X) |
| 1.14 | textAddUnitName | unitRef/unitType | Add this unit's name to this action's text | eg: textAddUnitName: unitRef self.attachment(slot="1") |
| 1.14 | descriptionAddFromUnit | unitRef/unitType | Add this unit's description to this action's description | descriptionAddFromUnit: builder |
| 1.14 | descriptionAddUnitStats: | unitRef/unitType | Add this unit's stats (eg HP, energy, resources) to this action's description | descriptionAddUnitStats: unitRef self.parent() |
| 1.14 | unitShownInUIWithHpBar | bool | default true, Only used when unitShownInUI is a unitRef | unitShownInUIWithHpBar: true |
| 1.14 | unitShownInUIWithProgressBar | bool | default true, Only used when unitShownInUI is a unitRef. Replaces HP bar if active | unitShownInUIWithProgressBar: false |
| NaN | #==== | #==== | Requirements for player/AI to use in UI | NaN |
| 1.14 | alwaysSinglePress | bool | Defaults false. When true no confirmation needed on mobile, when used with canPlayerCancel:false and allowMultipleInQueue:false will also hide the queue interface. | alwaysSinglePress: true |
| NaN | price | resources | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 |
| NaN | isActive | LogicBoolean | Defaults true. If false then action is disabled and shown in red in UI. | isActive: true |
| NaN | isVisible | LogicBoolean | Defaults true. If false action is hidden from UI and disabled. | isVisible: true |
| NaN | isLocked | LogicBoolean | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | isLocked: if self.resource.ammo < 1 |
| NaN | isLockedMessage | LocaleString | Shows the message when the isLocked's condition is met | isLockedMessage: Not enough ammunition |
| 1.13.3 | isLockedAlt | LogicBoolean | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | isLockedAlt: if numberOfUnitsInGame(withTag="factory") < 2 |
| 1.13.3 | isLockedAltMessage | LocaleString | Message for isLockedAlt | isLockedAltMessage: Not enough factories! |
| 1.13.3 | isLockedAlt2 | LogicBoolean | Second isLocked alternative | isLockedAlt2: if nearestUnit(withTag="explosive", withinRange="500", relation="own").hp() < 10 |
| 1.13.3 | isLockedAlt2Message | LocaleString | Message for isLockedAlt2 | isLockedAlt2Message: Explosive stockpile is heavily damaged. |
| NaN | allowMultipleInQueue | bool | When false makes it so only one action can be queued of this type (useful for keeping actions with conditions from being spammed) | allowMultipleInQueue: true |
| NaN | onlyOneUnitAtATime | bool | When action is picked in UI, only one unit selected with get this action. Defaults to false. | onlyOneUnitAtATime: true |
| 1.13.3 | isGuiBlinking | LogicBoolean | Flashes in UI to draw attention to it. Might be annoying if used often, recommended only for temporarily states/messages | isGuiBlinking: true |
| 1.14 | isAlsoViewableByAllies | bool | Allows ally players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | isAlsoViewableByAllies: true |
| 1.14 | isAlsoViewableByEnemies | bool | Allows enemy players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | isAlsoViewableByEnemies: true |
| NaN | #==== | #==== | AI - How the AI uses this action | #==== |
| 1.13.3 | ai\_isHighPriority | LogicBoolean | Use this for faction selection actions or other high priority actions such as building high priority units | ai\_isHighPriority: true |
| NaN | ai\_isDisabled | LogicBoolean | Defaults false. Stop AI using this action. (Note when ai\_isHighPriority is true this might be ignored) | ai\_isDisabled: false |
| 1.13.3 | ai\_considerSameAsBuilding | bool | Be careful with | ai\_considerSameAsBuilding: true |
| NaN | #==== | #==== | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically add an action to the queue) |
| 1.13.3 - 1.15p9 | autoTriggerOnEvent: | event | Action will be triggered when an event is happening on a particular unit. Options: created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded(withActionTag="#"), queueItemCancelled(withActionTag="#"), teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit, transportUnloadedOrRemovedUnit, tookDamage(withTag="#"), newMessage(withTag="#"), enteredTransport, leftTransport, attachmentRemoved. withTag parameter for tookDamage uses tag from projectile and it is optional. withTag parameter for newMessage uses message tags. | autoTriggerOnEvent: queueItemCancelled(withActionTag="actionFire") |
| 1.15 | autoTriggerOnEventRecursionLimit | int | Defaults to 1. Prevents loops, useful with triggering itself so it doesn't infinitely triggers, good for repeating action effect on event | autoTriggerOnEventRecursionLimit: 4 |
| NaN | autoTrigger | LogicBoolean | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater(), autoTrigger: if self.customTimer(laterThanSeconds=5) |
| NaN | autoTriggerCheckRate | enum | options: everyFrame (default), every4Frames, every8Frames. This overrides autoTriggerCheckRate set on [core] Note: all triggers regardless of check rate are checked when first created and after an auto trigger cooldown. Note: Adding [core]autoTriggerCheckRate:every8Frames to all-units.template could have a large performance boost for mods with complex autoTriggers. | autoTriggerCheckRate:every8Frames |
| NaN | #==== | #==== | While action is queued | NaN |
| NaN | buildSpeed | time | Sets how fast the action has to be queued before doing the action behaviors | buildSpeed: 5s |
| NaN | highPriorityQueue | bool | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | highPriorityQueue: true |
| NaN | canPlayerCancel | bool | Defaults to true. When false, players cannot cancel this particular action. | canPlayerCancel: false |
| NaN | whenBuilding\_cannotMove | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | whenBuilding\_cannotMove: true |
| NaN | whenBuilding\_playAnimation | animation ref | Plays a specified animation while the action is queued. | whenBuilding\_playAnimation: firePrepare |
| NaN | whenBuilding\_rotateTo | float | Rotate unit body to this direction when action is in active queue. | whenBuilding\_rotateTo: 45 |
| NaN | whenBuilding\_rotateTo\_orBackwards | bool | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | whenBuilding\_rotateTo\_orBackwards: true |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | bool | Pause action queue till rotation is finished | whenBuilding\_rotateTo\_waitTillRotated: true |
| NaN | whenBuilding\_temporarilyConvertTo | unit ref | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | whenBuilding\_temporarilyConvertTo: cannon\_uberState |
| 1.15 | whenBuilding\_temporarilyConvertTo\_keepFields | fields | Don't change these fields when using whenBuilding\_temporarilyConvertTo (both to and from) | whenBuilding\_temporarilyConvertTo\_keepFields: maxHp, maxEnergy, moveSpeed |
| NaN | whenBuilding\_triggerAction | action ref | While action is queued, another action is triggered. | whenBuilding\_triggerAction: spawnMinions |
| 1.14 | whenBuilding\_rotateTo\_aimAtActionTarget | bool | While action is queued, the unit is rotated to the target. Often used with fireTurretX actions | whenBuilding\_rotateTo\_aimAtActionTarget: true |
| 1.14 | whenBuilding\_rotateTo\_rotateTurretX | turret ref | While action is queued, a specified turret is aimed at the target. Often used with fireTurretX actions | whenBuilding\_rotateTo\_rotateTurretX: cannon |
| NaN | spawnEffectsOnQueue | effect ref | Effects to spawn at unit when action is first added to queue | spawnEffectsOnQueue: CUSTOM:steam |
| NaN | playSoundToPlayerOnQueue | sound ref | Global sound to play to unit's player only when action is first added to queue | playSoundToPlayerOnQueue: eva\_building.ogg |
| 1.16 | lockCameraToUnitOnQueue | dynamic unit ref | Only effects player that triggered the action. Locks the camera on this unit and stops if the player tries to move the camera. If multiple units are triggered, the camera won't lock at all. | lockCameraToUnitOnQueue: lastDamagedBy |
| 1.16 | addSelectedUnitOnQueue | dynamic unit ref | Only effects player that triggered action. Modifies the current active player selection to include in addition the unit references. | NaN |
| 1.16 | setSelectedUnitOnQueue | dynamic unit ref | Only effects player that triggered action. Modifies the current active player selection to become the unit references. | NaN |
| NaN | #==== | #==== | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN |
| NaN | requireConditional | LogicBoolean | Skip all effects of this action if this evaluates to false | requireConditional: if self.resource.mass < 300 |
| 1.13.3 | convertTo | unit ref | Convert your unit into another unit. properties are preserved. | convertTo: fishLevel2 |
| 1.14 | convertTo\_keepCurrentTags | bool | Keep current and temporarily tags and ignores default tags on convertTo target. | convertTo\_keepCurrentTags: true |
| 1.15 | convertTo\_keepCurrentFields | fields | Don't change these fields when converting, useful with setUnitStats (Allowed fields: maxHp, maxShield, shieldRegen, maxEnergy, armour, mass, shootDelayMultiplier, moveSpeed, maxAttackRange.)\n | convertTo\_keepCurrentFields: armour, maxEnergy, maxHp |
| NaN | addEnergy | addEnergy | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | addEnergy: 10 |
| NaN | addResources | resources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 |
| NaN | addResourcesScaledByAIHandicaps | resources | Same as addResources, but increased or decreased depending on AI difficulty level | addResourcesScaledByAIHandicaps: credits=5, hp=-100 |
| 1.15 | addResourcesWithLogic | dynamic resources | Like addResources but allows logic to be used for the resource value | addResourcesWithLogic: hp = select( self.parent.energy>5, 10, 20 ) |
| 1.15 | setResourcesWithLogic | dynamic resources | Sets target resources to this value instead of adding. Becareful with global resources. | setResourcesWithLogic: hp=self.parent.hp - 10, energy = self.energy / 2 |
| NaN | deleteSelf | bool | Remove self with no explosions or sounds | deleteSelf: true |
| NaN | resetCustomTimer | LogicBoolean | Reset timer used with self.customTimer() | resetCustomTimer: true |
| 1.13.3 | setBodyRotation | int | Rotates the unit to a particular direction. Supports dynamic values | setBodyRotation: 270, setBodyRotation: directionBetween(self, customTarget1) |
| 1.16 | setSpeed | dynamic vec2 | Sets the units current speed | NaN |
| 1.16 | addSpeed | dynamic vec2 | Adds to the units current speed | NaN |
| 1.15 | setUnitStats | fields values | Allows changing of a select number of fields dynamically without converting. Supports =/+=/-=, with dynamic maths/logic. Changeable fields: maxHp, hp, maxShield, shield, shieldRegen, maxEnergy, energy, armour, mass, shootDelayMultiplier, shootDamageMultiplier, moveSpeed, maxTurnSpeed, maxAttackRange, fogOfWarSightRange, nanoRange, selfRegenRate, targetHeight, nanoFactorySpeed. (targetHeight adjust the unit's height gradually relative to its current height, unlike setting it with setHeight) | setUnitStats: maxShield += 20, moveSpeed += 0.1 |
| 1.15 | resetUnitStats | boolean | Reset changes made by setUnitStats to base values | resetUnitStats: true |
| 1.15 | setUnitMemory | key value pairs | Change this unit's memory, values can be set with logic. Memory must first be defined with defineUnitMemory | setUnitMemory: """\n customText=memory.customText+'hello',\n nukeActive=true, \n nextTarget=self.attacking.nearestUnit(withinRange=300, withTag='x', relation='enemy')\n""" |
| 1.15p11 | NaN | NaN | NOTE: In setting array memories, it is important to put the array index (supports dynamic values) | setUnitMemory: myTargets[4]=nearestUnit(withTag="fish") |
| 1.15 | setHeight | logicNumber | Changes unit height based on this height value | setHeight: parent.height+5 |
| 1.15 | setCustomTarget1: | unit ref | Used for unit linking without requiring unit memories or markers. It is the unit that built this by default. | setCustomTarget1: self.parent |
| 1.15 | setCustomTarget2: | unit ref | Like setCustomTarget1 and with the same use. It is none by default. | setCustomTarget2: lastDamagedBy |
| 1.15 | sendMessageTo: | unit ref | Sends a message to a targeted unit | sendMessageTo: unitref nearestUnit(withinRange=100, withTag="fish"). |
| 1.15 | sendMessageWithTags: | Message Tag | Useful for message detection in an autoTriggerOnEvent event, eg autoTriggerOnEvent:newMessage(withTag='xyz') | sendMessageWithTags: hitZone |
| 1.15 | sendMessageWithData | key-value | The data that will be sent to the targeted unit. Allows multiple key-value pairs with any dynamic data type, use eventData() to read this data in the event | sendMessageWithData: fish="nice!", cat=self.activeWaypointTarget, amount=4, xyz=memory.something |
| 1.15 | refundAllQueuedItems | boolean | Refunds the spent price in the queue of a specific action; Includes set flags in price | refundAllQueuedItems: true |
| 1.15 | removeAllQueuedItemsWithoutRefund | boolean | Similar to refundAllQueuedItems, but does not refund | removeAllQueuedItemsWithoutRefund: true |
| NaN | #==== | #==== | Outcome - Chaining Actions | NaN |
| NaN | alsoTriggerAction | action refs | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound |
| NaN | alsoQueueAction | action refs | Adds another action into the normal unit's queue. Ignores action's requirements | alsoQueueAction: spawnMinions |
| NaN | alsoTriggerOrQueueActionConditional | LogicBoolean | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | alsoTriggerOrQueueActionConditional: false |
| 1.15p9 | alsoTriggerOrQueueActionWithTarget | unitref | Changes the target of the triggered action, normally defaults to the current action target. Effects things like fireTurretXAtGround, spawnUnits, thisActionTarget(), etc | alsoTriggerOrQueueActionWithTarget: lastDamagedBy |
| 1.15p11 | alsoTriggerActionRepeat | logicNumber | Repeats the alsoTriggerAction call, thisActionIndex changed on each repeat - Useful to create loops or work with arrays | alsoTriggerActionRepeat: 5 |
| 1.16 | otherwiseTriggerAction | action refs | Triggers a different action if autoTrigger or requireConditionals return false. (Serves as the "else" in a generic programming syntax) | NaN |
| NaN | #==== | #==== | Outcome - Sounds | NaN |
| NaN | playSoundAtUnit | sound ref | Local sound to play when action finishes | playSoundAtUnit: engineStart.ogg |
| NaN | playSoundGlobally | sound ref | Global sound to play to all players in game | playSoundGlobally: hornWarn.ogg |
| NaN | playSoundToPlayer | sound ref | Global sound to play to unit's player only | playSoundToPlayer: confirm.wav |
| NaN | #==== | #==== | Outcome - Fire projectile from turret | NaN |
| NaN | fireTurretXAtGround | turret ref | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo |
| NaN | fireTurretXAtGround\_withOffset: | point | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 |
| NaN | fireTurretXAtGround\_withProjectile: | projectile ref | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | fireTurretXAtGround\_withProjectile: nuke |
| 1.15 | fireTurretXAtGround\_withTarget | unitref | Fires a turret aimed at the location of the indicated unit or marker | fireTurretXAtGround\_withTarget: lastDamagedBy |
| 1.13.3 | fireTurretXAtGround\_count | NaN | Number of projectiles to fire. Defaults to 1 | fireTurretXAtGround\_count: 3 |
| 1.13.3 | fireTurretXAtGround\_onlyOverPassableTileOf | NaN | Only allow tiles crossable by this movement type to be selected (e.g., LAND,BUILDING,WATER,HOVER) | fireTurretXAtGround\_onlyOverPassableTileOf: HOVER |
| 1.15p11 | fireTurretXAtGround\_showGuideDecals | decal refs | Draws decals at the target location. Recommend setting up decals with layer: inactive | fireTurretXAtGround\_showGuideDecals: strikeZone300 |
| NaN | #==== | #==== | Outcome - Spawning | NaN |
| NaN | NaN | NaN | NOTE: There is a section for all possible modifications to spawnUnit, type "spawnUnits:LIST" in the Search function of the spreadsheet | NaN |
| 1.13.3 | spawnUnits | unitref | Spawn units at action's target. See 'Spawn units line' section in this doc for details. | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) |
| 1.13.3 | produceUnits | unitref | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | produceUnits: builder\*4, plasmaTank\*8 |
| NaN | spawnEffects | effect ref | Effects to spawn at unit | spawnEffects: CUSTOM:puff |
| NaN | #==== | #==== | Outcome - Position | NaN |
| 1.14 | offsetSelfAbsolute: | point3d | Offsets unit position absolutely by this point. Format: [x,y,height] | offsetSelfAbsolute: 0, 0, 40 |
| 1.15p11 | teleportTo | unit ref/marker | Changes unit position to this position. Great alternative to fireTurretX with teleporting projectile | teleportTo: memory.lastLocation |
| NaN | #==== | #==== | Outcome - Transport Changes | NaN |
| NaN | addUnitsIntoTransport | unitTypes | Creates and add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank(neutralTeam=true) |
| 1.15 | transportTargetNow | unit ref | {Currently broken in 1.15 - don't use} Instantly tries to transports existing units on the map into this transport. Might fail if rules don't allow this unit to be transported. | NaN |
| 1.16 | forceTransportTargetNow | dynamic unit ref | Bypasses all transport checks even if the target is not even a transport. Be careful with usage | NaN |
| NaN | deleteNumUnitsFromTransport | int | Removes a specified amount of cargo units | deleteNumUnitsFromTransport: 2 |
| 1.13.3 | deleteNumUnitsFromTransport\_onlyWithTags | string(s) | Removes a specified amount of cargo units, but only those with specified tags | deleteNumUnitsFromTransport\_onlyWithTags: cheapStuff |
| 1.13.3 | startUnloadingTransport | bool | Unloads all cargo units normally | startUnloadingTransport: true |
| 1.13.3 | forceUnloadTransportNow | bool | For unload all units, or slot targeted by forceUnloadTransportNow\_onlyOnSlot. Unloads even if no space or overwater, etc. Take note that the payloads are unloaded on the exit coordinates of the units (exit\_x and exit\_y in [core] section) | forceUnloadTransportNow: true |
| 1.14 | forceUnloadTransportNow\_onlyOnSlot | int | Focuses the force unload to a specific slot | forceUnloadTransportNow\_onlyOnSlot: drop1 |
| NaN | #==== | #==== | Outcome - Waypoint Changes | NaN |
| 1.13.3 | clearAllWaypoints | bool | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | clearAllWaypoints: true |
| 1.13.3 | clearActiveWaypoint | bool | Clears only the current waypoint | clearActiveWaypoint: true |
| NaN | addWaypoint\_type | enum | Adds a waypoint with a specific purpose. Options: move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | addWaypoint\_type: move |
| 1.13.3 | addWaypoint\_unitType | unitTypes | Only for use with addWaypoint\_type:build | addWaypoint\_unitType: turret |
| 1.13.3 | addWaypoint\_prepend | bool | Add to the start of the waypoint queue or the end | addWaypoint\_prepend: false |
| 1.13.3 | addWaypoint\_triggerActionIfFailed | actions | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | addWaypoint\_triggerActionIfFailed: retreat |
| 1.14 | addWaypoint\_triggerActionIfMatched | actions | Triggers an action if a waypoint is legal | addWaypoint\_triggerActionIfMatched: VIP\_target |
| 1.13.3 | addWaypoint\_maxTime | time | Automatically remove this waypoint if it has been active for longer than this time. | addWaypoint\_maxTime: 20s |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_tagged | tags | Puts the waypoint to a nearest unit with specific tags | addWaypoint\_target\_nearestUnit\_tagged: assault, mechanized |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_team | relation | Puts the waypoint to a nearest unit with a specific relation to the player's unit. Options: own, neutral, allyNotOwn, ally, enemy, any, notOwn | addWaypoint\_target\_nearestUnit\_team: ally |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_maxRange | float | Puts the waypoint to a nearest unit within the maximum range specified. | addWaypoint\_target\_nearestUnit\_maxRange: 2000 |
| 1.13.3 | addWaypoint\_target\_mapMustBeReachable | bool | Puts the waypoint only if the waypoint target is reachable by the unit (e.g., if a unit cannot cross two islands, the waypoint is not placed.) | addWaypoint\_target\_mapMustBeReachable: true |
| 1.15 | addWaypoint\_target\_fromReference | unit ref | Puts the waypoint to a marker or a reference unit | addWaypoint\_target\_fromReference: self.memory.lastDock |
| 1.13.3 | addWaypoint\_position\_offsetFromSelf | point | Puts the waypoint to an absolute coordinate | addWaypoint\_position\_offsetFromSelf: |
| 1.13.3 | addWaypoint\_position\_fromAction | bool | Puts the waypoint taken from an action that triggered this action | addWaypoint\_position\_fromAction: fireShot |
| 1.13.3 | addWaypoint\_position\_randomOffsetFromSelf | point | Puts the waypoint to a random relative coordinate | addWaypoint\_position\_randomOffsetFromSelf: |
| 1.14 | addWaypoint\_position\_relativeOffsetFromSelf | point | Puts the waypoint to a relative coordinate | addWaypoint\_position\_relativeOffsetFromSelf: 10, 20 |
| 1.14p6 | addWaypoint\_target\_randomUnit\_tagged | tags | Puts the waypoint to a random unit with specific tags | addWaypoint\_target\_randomUnit\_tagged: chargers, strikers |
| 1.14p6 | addWaypoint\_target\_randomUnit\_team | relation | Puts the waypoint to a random unit with a specific relation to the player's unit. Options: own, neutral, allyNotOwn, ally, enemy, any, notOwn | addWaypoint\_target\_randomUnit\_team: any |
| 1.14p6 | addWaypoint\_target\_randomUnit\_maxRange | int | Puts the waypoint to a random unit within the maximum range specified. | addWaypoint\_target\_randomUnit\_maxRange: 1000 |
| NaN | #==== | #==== | Outcome - Cooldown | NaN |
| 1.14 | addAllActionCooldownsTime | time | Adds cooldown on all actions, including canBuilds | addAllActionCooldownsTime: 4s |
| 1.14 | addActionCooldownTime | time | Player cannot use action again for this amount of time | addActionCooldownTime: 20s |
| 1.14 | addActionCooldownApplyToActions | action ids | Sets addActionCooldownTime's target. Defaults to this action. | addActionCooldownApplyToActions: retreat, transformFins |
| 1.14 | clearAllActionCooldowns | bool | Removes all existing cooldowns on all buttons | clearAllActionCooldowns: true |
| NaN | #==== | #==== | Outcome - Animation | NaN |
| 1.13.3 | playAnimation | animation id | Plays animation when the action is triggered | playAnimation: engageThrusters |
| 1.13.3 | playAnimationIfNotPlaying | bool | Don't restart animation if this animation is already playing | playAnimationIfNotPlaying: true |
| 1.13.3 | finishPlayingLastAnimation | bool | Finish last animation, including blend out | finishPlayingLastAnimation: true |
| 1.13.3 | stopLastAnimation | bool | Stop last animation, skipping blend out | stopLastAnimation: true |
| 1.13.3 | switchToNeutralTeam | boolean | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | switchToNeutralTeam: false |
| 1.13.3 | switchToAggressiveTeam | boolean | Change to a built-in team that is aggressive to all other teams. Does not get captured. | switchToAggressiveTeam: true |
| 1.15 | switchToTeam | logicNumber | Team id to switch to. Starts at 0. (but -1 for a neutral team, -2 for aggressive Team). Also supports dynamic values | switchToTeam: 2, switchToTeam: lastDamagedBy.teamId |
| NaN | #==== | #==== | Outcome - Take Resources from other units | NaN |
| 1.13.3 | takeResources | customPrice | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 |
| 1.13.3 | takeResources\_includeUnitsInTransport | bool | Includes cargo units in taking resources | takeResources\_includeUnitsInTransport: true |
| 1.13.3 | takeResources\_includeParent | bool | Include attachment parent or transport parent | takeResources\_includeParent: true |
| 1.15 | takeResources\_includeReference | unit ref | Includes referenced units in taking resources | takeResources\_includeReference: self.lastDamagedBy |
| 1.13.3 | takeResources\_includeUnitsWithinRange | float | Includes all units within the specified range | takeResources\_includeUnitsWithinRange: 300 |
| 1.13.3 | takeResources\_includeUnitsWithinRange\_team | TeamRelation | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | takeResources\_includeUnitsWithinRange\_team: own |
| 1.13.3 | takeResources\_excludeUnitsWithoutTags | tags | Includes all units without the specified tags in taking resources | takeResources\_excludeUnitsWithoutTags: truck, tanker |
| 1.13.3 | takeResources\_excludeUnitsWithTheseResources | customPrice | Excludes all units with custom prices in them | takeResources\_excludeUnitsWithTheseResources: oil, juice, sauce |
| 1.13.3 | takeResources\_excludeUnitsWithoutAllResources | bool | Defaults to true. | takeResources\_excludeUnitsWithoutAllResources: true |
| 1.13.3 | takeResources\_triggerActionIfAnyCollected | action refs | Triggers an action if any amount of resources is collected in the current collection action | takeResources\_triggerActionIfAnyCollected: purify |
| 1.13.3 | takeResources\_triggerActionIfNoneCollected | action refs | Triggers an action if no amount of resources is collected in the current collection action | takeResources\_triggerActionIfNoneCollected: callOtherTanker |
| 1.15p11 | takeResources\_triggerActionForEach | action refs | Calls this action for each unit found by takeResource with the unit as thisActionTarget, and thisActionIndex counting up from zero. | takeResources\_triggerActionForEach: manufacture |
| 1.13.3 | takeResources\_discardCollected | bool | Just take resources from targets, don't add(or remove) to self | takeResources\_discardCollected: false |
| 1.13.3 | takeResources\_keepResourcesOnTarget | bool | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | takeResources\_keepResourcesOnTarget: true |
| NaN | takeResources\_maxUnits | int | Defaults to 1. Takes resources from specified amount of units | takeResources\_maxUnits: 10 |
| 1.15 | takeResources\_searchOnly | bool | Shortcut for maxUnits: 200, discardCollected: true, keepResourcesOnTarget: true to detect resources only | takeResources\_searchOnly: true |
| 1.14 | takeResources\_directTransferStoppingAtZero | bool | If less resources on target than transfer amount, only remaining resources will be transfered. Doesn't support use with some other takeResources\_\* keys | takeResources\_directTransferStoppingAtZero: true |
| NaN | #==== | #==== | Outcome - Convert Resources | NaN |
| 1.13.3 | convertResource\_from | customResource | Name of custom resource to take from | convertResource\_from: juice |
| 1.13.3 | convertResource\_to | customResource | Name of custom resource to give to | convertResource\_to: sauce |
| 1.13.3 | convertResource\_minAmount | float | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | convertResource\_minAmount: 10 |
| 1.13.3 | convertResource\_maxAmount | float | Max amount to transfer between 'from' and 'to' | convertResource\_maxAmount: 100 |
| 1.13.3 | convertResource\_multiplyAmountBy | float | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | convertResource\_multiplyAmountBy: 1.5 |
| NaN | #==== | #==== | Outcome - Set Resources | NaN |
| 1.13.3 | resourceAmount | customResource | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | resourceAmount: oil |
| 1.13.3 | resourceAmount\_setValue | float | Absolute value to set this resource to, ignores current value of resource. Skipped by default | resourceAmount\_setValue: 20 |
| 1.13.3 | resourceAmount\_addOtherResource | customResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | resourceAmount\_addOtherResource: juice |
| 1.13.3 | resourceAmount\_multiplyBy | float | Defaults to 1. Multiple the current or new value by | resourceAmount\_multiplyBy: 2 |
| NaN | #==== | #==== | Outcome - Attachment changes | NaN |
| 1.13.3 | attachments\_addNewUnits | unit types | Adds specified units to attachments | attachments\_addNewUnits: coreDefense\*3 |
| 1.13.3 | attachments\_deleteNumUnits | int | Removes a specified amount of units attached | attachments\_deleteNumUnits: 3 |
| 1.13.3 | attachments\_onlyOnSlots | attachment ids | Restrict attachments\_\* actions to these attachments | attachments\_onlyOnSlots: drop1, drop2, drop3 |
| 1.14 | attachments\_unload | bool | Unload all attachments. Can be used with attachments\_onlyOnSlots. Same as unloading transported units | attachments\_unload: true |
| 1.14 | attachments\_disconnect | bool | Disconnect all attachments in the place they are right now. Can be used with attachments\_onlyOnSlots. | attachments\_disconnect: true |
| 1.13.3 | disconnectFromParent | bool | Disconnects this unit from parent's attachment slot | disconnectFromParent: true |
| NaN | #==== | #==== | Outcome - Tag changes | NaN |
| 1.13.3 | temporarilyAddTags | tags | Add tag to this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | temporarilyAddTags: emptyJuice, fullSauce |
| 1.13.3 | temporarilyRemoveTags | tags | Remove tag from this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | temporarilyRemoveTags: fullJuice, emptySauce |
| 1.13.3 | resetToDefaultTags | bool | Reset to standard tags | resetToDefaultTags: true |
| 1.13.3 | addGlobalTeamTags | tags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | addGlobalTeamTags: upgrade\_energized, upgrade\_research2 |
| 1.13.3 | removeGlobalTeamTags | tags | Remove a tag from player's team. | removeGlobalTeamTags: buff\_immune |
| NaN | #==== | #==== | Outcome - Show Message | NaN |
| 1.13.3 | showMessageToPlayer | string | Sends a message to the player controlling the unit | showMessageToPlayer: There is a hidden enemy near your defenses |
| 1.13.3 | showMessageToPlayer\_{LANG} | string | Note: This format is support on nearly all strings that show to player even when reference doesn't show it. Use ISO 639-1 Language Code on the {LANG} placeholder | showMessageToPlayer\_fil: May nakatagong kalaban na malapit sa mga depensa mo |
| 1.13.3 | showMessageToAllPlayers | string | Sends a message to all players | showMessageToAllPlayers: %{self.playerName} has captured a point |
| 1.14 | showMessageToAllEnemyPlayers | string | Sends a message to all enemy players only | showMessageToAllEnemyPlayers: Team %{self.playerName} has %{self.resource.gold} |
| 1.13.3 | showQuickWarLogToPlayer | string | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | showQuickWarLogToPlayer: Unit decloaked |
| 1.13.3 | showQuickWarLogToAllPlayers | NaN | Sends a Quick War Log message to all players (in the lower lef) | showQuickWarLogToAllPlayers: 500 oil sold to allied market |
| 1.13.3 | debugMessage | NaN | Only shows in Sandbox with Debug mode on. | debugMessage: [action log] unit launch on %{thisActionTarget.x}, %{thisActionTarget.y} |
| NaN | Section | NaN | [effect\_NAME] | Effects are purely visual, but can be important for a mod |
| NaN | Code | Value Type | Description | Example |
| 1.15p9 | drawType | normal|displacement | Defaults to normal. Changes how effect is rendered. Options: normal|displacement (displacement only shows when shader effects are turned on) | drawType: normal |
| 1.13 | life | float | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | life: 70 |
| 1.14 | lifeRandom | float | Random offset life by +/- this value | lifeRandom: 12 |
| 1.13 | alsoEmitEffects | effect ref | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | alsoEmitEffects: CUSTOM:extraSparks\*2 |
| 1.14 | alsoEmitEffectsOnDeath | effect ref | Create these effects when life runs out. | alsoEmitEffectsOnDeath: CUSTOM:finalPuff |
| NaN | ifSpawnFailsEmitEffects | effect ref | If 'spawnChance' for this effects fails then emit these effects instead | ifSpawnFailsEmitEffects: CUSTOM:greenSparks\*4 |
| 1.13 | alsoPlaySound | sound ref | Plays sound upon spawning the effect. Use OGG or WAV audio files. Appending a colon with a float value sets the volume | alsoPlaySound: meow.wav:0.5 |
| 1.13 | createWhenOffscreen | bool | Defaults false. When true, effect is created when the unit is offscreen | createWhenOffscreen: true |
| 1.13 | createWhenZoomedOut | bool | Defaults true. Effect is created even when the map is zoomed out. Set to false for improving performance | createWhenZoomedOut: false |
| 1.13 | createWhenOverLiquid | bool | Defaults true. Effect is created when the unit is over water | createWhenOverLiquid: false |
| 1.13 | createWhenOverLand | bool | Defaults true. Effect is created when the unit is over land | createWhenOverLand: false |
| 1.13 | spawnChance | float | Default 1. If less than 1 effect only has a random chance of being created | spawnChance: 1 |
| 1.13 | showInFog | bool | Default false. When true, effect is still visible on fog of war | showInFog: true |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | delayedStartTimer: 2s |
| 1.13 | liveAfterAttachedDies | bool | Defaults false when attachedToUnit is being used | liveAfterAttachedDies: false |
| 1.13 | priority | string | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | priority: critical |
| NaN | #==== | #==== | Movement | NaN |
| 1.13 | attachedToUnit | bool | Attach to unit or projectile that created this effect. Will move with this object. Useful for thrust effects | attachedToUnit: true |
| 1.13 | alwayStartDirAtZero | bool | Ignore source/attached unit dir | alwayStartDirAtZero: true |
| 1.13 | atmospheric | bool | Apply drag to slow this effect down and add small wind effects | atmospheric: true |
| 1.13 | physics | bool | Fall to ground and bounces. Needs height to take effect. | physics: true |
| 1.13 | physicsGravity | float | Defaults to 1. height speed acceleration when physics: true | physicsGravity: 0.5 |
| 1.13 | xOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | xOffsetRelative: 2 |
| 1.13 | yOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | yOffsetRelative: 2 |
| 1.13 | xOffsetRelativeRandom | float | Random offset by +/- this value | xOffsetRelativeRandom: 4 |
| 1.13 | yOffsetRelativeRandom | float | Random offset by +/- this value | yOffsetRelativeRandom: 4 |
| 1.13 | xOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | xOffsetAbsolute: 2 |
| 1.13 | yOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | yOffsetAbsolute: 2 |
| 1.13 | xOffsetAbsoluteRandom | float | Random offset by +/- this value | xOffsetAbsoluteRandom: 5 |
| 1.13 | yOffsetAbsoluteRandom | float | Random offset by +/- this value | yOffsetAbsoluteRandom: 5 |
| 1.13 | xSpeedRelative | float | Moves the effect sprite on relative horizontal position with specified speed. Negative will move left relative to source, positive will move right relative to source. Useful for thrust effects for moving units | xSpeedRelative: 2 |
| 1.13 | ySpeedRelative | float | Moves the effect sprite on relative vertical position with specified speed. Negative will move down relative to source, positive will move up relative to source. Useful for thrust effects for moving units | ySpeedRelative: 3 |
| 1.13 | xSpeedRelativeRandom | float | Randomly change by -value to value | xSpeedRelativeRandom: 2 |
| 1.13 | ySpeedRelativeRandom | float | Randomly change by -value to value | ySpeedRelativeRandom: 2 |
| 1.13 | xSpeedAbsolute | float | Moves the effect sprite on absolute horizontal position with specified speed. Negative will move left relative to map, positive will move right relative to map. Useful for smoke effects on structures | xSpeedAbsolute: 5 |
| 1.13 | ySpeedAbsolute | float | Moves the effect sprite on absolute vertical position with specified speed. Negative will move down relative to map, positive will move up relative to map. Useful for smoke effects on structures | ySpeedAbsolute: 5 |
| 1.13 | xSpeedAbsoluteRandom | float | Randomly change by -value to value | xSpeedAbsoluteRandom: 2 |
| 1.13 | ySpeedAbsoluteRandom | float | Randomly change by -value to value | ySpeedAbsoluteRandom: 2 |
| 1.13 | hOffset | float | height offset from source. May be mistakenly confused with yOffsetAbsolute | hOffset: 4 |
| 1.13 | hOffsetRandom | float | Randomly change by -value to value | hOffsetRandom: 5 |
| 1.13 | hSpeed | float | Sets the speed to change the height of the effect | hSpeed: 1 |
| 1.13 | hSpeedRandom | float | Randomly change by -value to value | hSpeedRandom: 1 |
| 1.13 | dirOffset | float | Sets the static direction of the effect | dirOffset: 43 |
| 1.13 | dirOffsetRandom | float | Randomly change by -value to value | dirOffsetRandom: 50 |
| 1.13 | dirSpeed | float | Sets the rotation speed of the effect | dirSpeed: 2 |
| 1.13 | dirSpeedRandom | float | Randomly change by -value to value | dirSpeedRandom: 3 |
| NaN | #==== | #==== | Graphics | NaN |
| 1.13 | frameIndex | int | Use a specific frame from strip index | frameIndex: 0 |
| NaN | frameIndexRandom | bool -? | Use random frame from strip index | frameIndexRandom: true |
| 1.13 | stripIndex | int/string | A built-in image set to use. Cannot be used with custom image. Options: effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | stripIndex: projectiles |
| 1.13 | image | image | Custom image file to use. Cannot be used with stripIndex. | image: whitePuff.png |
| NaN | imageShadow | image | Custom image file to use for shadows | imageShadow: AUTO |
| 1.13 | scaleTo | float | Defaults to 1. Resizes the unit into the specified scale | scaleTo: 2 |
| 1.13 | scaleFrom | float | Defaults to 1. Resizes the unit from the specified scale | scaleFrom: 4 |
| 1.13 | color | color | Defaults #FFFFFFFF. Changes the color of the effect sprite. Use pure white sprite for most use cases. | color: #ff00ff |
| NaN | teamColorRatio | NaN | Sets team coloration between 0-1. Team color is dependent from source unit | teamColorRatio: 1 |
| 1.13 | drawUnderUnits | bool | Renders the effect under all units | drawUnderUnits: false |
| 1.13 | fadeInTime | float | Fade alpha from 0% to 100% for this time at start | fadeInTime: 2s |
| 1.13 | fadeOut | bool | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | fadeOut: 4s |
| NaN | alpha | NaN | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | alpha: 1 |
| NaN | shadow | NaN | True to draw a shadow. Forced true if imageShadow is used | shadow: false |
| 1.15 | pivotOffset | float | Similar to dirOffset, this will also rotate relative keys and child elements | pivotOffset: 20 |
| 1.15 | pivotOffsetRandom | float | Offsets pivot between +/- of specified value | pivotOffsetRandom: 34 |
| NaN | #==== | #==== | Animation | NaN |
| 1.13 | total\_frames | int | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | total\_frames: 10 |
| 1.13 | animateFrameStart | int | Starting frame for the animation | animateFrameStart: 0 |
| 1.13 | animateFrameEnd | int | Ending frame for the animation | animateFrameEnd: 3 |
| 1.13 | animateFramePingPong | int | If true, animation will go back and forth within the frames | animateFramePingPong: true |
| 1.13 | animateFrameSpeed | time | Sets the animation speed. The lower the value, the slower it plays | animateFrameSpeed: 10 |
| 1.13 | animateFrameSpeedRandom | time | Randomizes how fast the effect animation plays | animateFrameSpeedRandom: 20 |
| 1.14 | animateFrameLooping | bool | Defaults false. When false effect is removed when animation ends | animateFrameLooping: true |
| NaN | Section | NaN | [animation\_NAME] | Use this to make intricate animations based on different circumstances |
| NaN | Code | Value Type | Description | Example |
| 1.13 | onActions: | enum | Automatically plays the animation on specified events. Options: move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits, repair | onActions: move |
| 1.13 | onActionsQueuedUnitPlayAt: | float | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | onActionsQueuedUnitPlayAt: 0 |
| 1.13 | blendIn: | time | Blend with last animation for this time | blendIn: 2s |
| 1.13 | blendOut: | time | Blend with next animation for this time | blendOut: 3s |
| 1.13 | pingPong | bool | Play animation in reverse after it ends | pingPong: true |
| 1.13 | KeyframeTimeScale: | float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | KeyframeTimeScale: 1 |
| NaN | #==== | #==== | Keyframes - create as many as needed | NaN |
| 1.13 | arm#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | arm1\_5s: {x: 5, dir: 90 } |
| NaN | leg#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | leg1\_3s: {dir: 300} |
| NaN | body\_[time] | NaN | Adds a keyframe at time for body. Only frame and scale allowed on body | body\_4s: {frame: 4, scale: 0.5} |
| 1.14 | effect\_[time] | NaN | Spawn effects while playing an animation\n | effect\_2s: {name:CUSTOM|myExplode, x: 0,y: 5} |
| NaN | NaN | NaN | NaN | NaN |
| NaN | direction\_units | float | Overrides [graphics]animation\_direction\_units while this animation is playing | direction\_units: 45 |
| NaN | direction\_strideX: | int | Overrides [graphics]animation\_direction\_strideX | direction\_strideX: 20 |
| NaN | direction\_strideY: | int | Overrides [graphics]animation\_direction\_strideY | direction\_strideY: 50 |
| NaN | direction\_starting: | float | Overrides [graphics]animation\_direction\_starting | direction\_starting: 0 |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN |
| 1.13 | start : int | NaN | Start image frame. deprecated | NaN |
| 1.13 | end : int | NaN | End image frame. deprecated | NaN |
| 1.13 | scale\_start : float | NaN | Start scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | scale\_end : float | NaN | End scale. Deprecated, use body keyframes instead. | NaN |
| 1.13 | speed : float | NaN | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Type | NaN | spawnUnits:LIST | Spawn lines specifically for units, used with "unit ref" value types |
| NaN | Code | NaN | Description | Example |
| NaN | #==== | #==== | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) |
| 1.13.3 | neutralTeam | NaN | Spawn the unit on the neutral team instead of the same team as source | spawnUnits: tank\*3(neutralTeam=true, offsetRandomX=20, offsetRandomY=20, gridAlign=true) |
| 1.13.3 | setToTeamOfLastAttacker | NaN | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | spawnUnits: egg(setToTeamOfLastAttacker=true) |
| 1.13.3 | spawnChance | 0-1 | Chance this unit will spawn. Defaults to 1. | spawnUnits: shards(spawnChance=0.3) |
| 1.15 | spawnSource | unit ref | Changes spawn location and team of spawned units to this unit ref. | spawnUnits: tank(spawnSource=memory.lastLocation) |
| 1.13.3 | maxSpawnLimit | NaN | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) |
| 1.13.3 | gridAlign | NaN | Align spawn location to grid, useful for buildings | spawnUnits: hovertank(gridAlign: true) |
| 1.13.3 | skipIfOverlapping | bool | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | spawnUnits: crates\*10(skipIfOverlapping=true, offsetRandomX=40, offsetRandomY=40, gridAlign=true) |
| 1.13.3 | offsetX | float | Sets horizontal position relative to source | spawnUnits: jet(offsetX=20), jet(offsetX=-20) |
| 1.13.3 | offsetY | float | Sets vertical position relative to source | spawnUnits: scout(offsetY=40), scout(offsetY=-40) |
| 1.13.3 | offsetDir | float | Set the facing direction of spawned units | spawnUnits: bike(offsetDir=-45) |
| 1.13.3 | offsetHeight | float | Sets the height for spawned units | spawnUnits: drone(offsetHeight=20) |
| 1.13.3 | offsetRandomX | float | Sets random horizontal position relative to source | spawnUnits: k9\*5(offsetRandomX=45) |
| NaN | offsetRandomY | float | Sets random vertical position relative to source | spawnUnits: scanners\*10(offsetRandomY=60) |
| NaN | offsetRandomDir | float | Set random facing direction of spawned units | spawnUnits: chickens\*20(offsetRandomDir=360) |
| 1.13.3 | addResources | resource ref | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResources=gold:30|stone:10, spawnChance=0.5) |
| 1.14 | transportedUnitsToTransfer | int | Puts the designated amount of transported units into the transport of the spawned unit. | spawnUnits: transporter(transportedUnitsToTransfer=5) |
| 1.15 | copyWaypointsFrom | unit ref | Copies all waypoints on target to created units. | spawnUnits: tank(copyWaypointsFrom=self) |
| 1.14 | alwayStartDirAtZero | bool | Sets the direction of spawned unit to 0 degrees. | spawnUnits: builder(alwayStartDirAtZero=true) |
| NaN | damagingBorder | NaN | Used with techLevel | NaN |
| NaN | zoneMarker | NaN | Used with techLevel | NaN |
| NaN | techLevel | int | Usually used in BR maps, controls the size of safe zone markers and damaging borders. 1 techLevel = 10x10 tiles = 200 pixels in diameter | spawnUnits: damagingBorder(techLevel=100), zoneMarker(techLevel=40) |
| 1.14 | Type | NaN | spawnProjectiles:LIST | Spawn lines specifically for projectiles, used with "proj ref" value types |
| 1.14 | Code | NaN | Description | Example |
| NaN | NOTE: If you need to use offsetDir to rotate your projectiles in a different direction (like for shrapnel), you must also set these projectile speeds low enough to force their trajectory | NaN | Example: | [projectile\_main]\nspawnProjectilesOnExplode: shrapnel(offsetDir=90), shrapnel(offsetDir=-90)\n[projectile\_shrapnel]\nturnSpeed: 0 |
| 1.14 | #==== | #==== | Most projectile spawning keys used for projectile ref | NaN |
| 1.14 | spawnChance | float | Chance this projectile will spawn. Defaults to 1. | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) |
| 1.14 | maxSpawnLimit | int | Maximum amount to spawn | spawnProjectilesOnExplode: bomblet\*3(spawnChance=0.5, maxSpawnLimit=2) |
| 1.14 | recursionLimit | int | Prevents loops, useful with spawning itself so it doesn't infinitely spawn, good for chain exploding. (Recommended no more than 4 if spawning more than 3 projectiles) | spawnProjectileOnEndOfLife: flamingBits\*4(spawnChance=0.35, recursionLimit=2) |
| 1.14 | offsetX | float | Sets horizontal position | spawnProjectileOnCreate: shot(offsetX=10, recursionLimit=0), shot(offsetX=-10, recursionLimit=0), shot(offsetY=10, recursionLimit=0) |
| 1.14 | offsetY | float | Sets vertical position | spawnProjectileOnCreate: shot(offsetX=10, recursionLimit=0), shot(offsetX=-10, recursionLimit=0), shot(offsetY=10, recursionLimit=0) |
| 1.14 | xOffsetRelative | float | Similar to offsetX, but the offset is relative to the position of the projectile | spawnProjectileOnCreate: homingEnergy(xOffsetRelative=5, yOffsetRelative=10) |
| 1.14 | yOffsetRelative | float | Similar to xOffsetRelative, but for Y axis | spawnProjectileOnCreate: homingEnergy(xOffsetRelative=5, yOffsetRelative=10) |
| 1.14 | offsetRandomX | float | Random value to offset in the X axis only | spawnProjectileOnExplode: strayBullet(offsetRandomX=10, offsetRandomY=30) |
| 1.14 | offsetRandomY | float | Random value to offset in the Y axis only | spawnProjectileOnExplode: strayBullet(offsetRandomX=10, offsetRandomY=30) |
| 1.14 | offsetRandomXY | float | The offset in both directions to randomly spawn, makes truly random spawning within an area | spawnProjectileOnEndOfLife: shrapnels\*20(spawnChance=0.2, offsetRandomXY=100) |
| 1.14 | offsetHeight | float | Sets height of the projectile | spawnProjectileOnCreate: scythe(offsetHeight=20) |
| 1.14 | offsetDir | degrees | Sets direction of the projectile | spawnProjectileOnExplode: stars(offsetDir=45) |
| 1.14 | offsetRandomDir | degrees | Sets random direction of the projectile | spawnProjectileOnEndOfLife: fireworks(offsetRandomDir=72) |
| NaN | Type | NaN | LogicBoolean\_ | Advanced code to create conditionals and triggers |
| NaN | Code | Returns | Description | Example |
| NaN | true | bool | This value will meet the condition | autoTrigger: true |
| NaN | false | bool | This value will not meet the condition | autoTrigger: false |
| NaN | if | NaN | Start all logic booleans with if, unless just using booleans (true/false) | isActive: if self.hasFlag(id=1) |
| NaN | and | bool | Connector. Adds another condition to the list. All conditions linked by this must be reached to return true. | autoTrigger: if self.isInWater and self.energy>=1 |
| NaN | or | bool | Connector. Adds another condition to the list. Just one of the conditions linked must be reached to return true | autoTrigger: if (self.energy>=2 or self.ammo>=1) and self.isFlying |
| NaN | not | bool | Conditional. Reverts meaning of the next logic boolean. Useful to set negative conditions | if not self.isOverLiquid (the opposite of being over liquid) |
| 1.15 | < | bool | Return true if number on left is smaller. Means less than next value | isLocked: if self.ammo < 1 |
| 1.15 | > | bool | Return true if number on right is smaller. Means greater than next value | autoTrigger: if self.isInWater and self.energy>=1 |
| 1.15 | <= | bool | Return true if number on left is smaller or equal. Means less or equal than next value | requireConditional: if numberOfUnitsInTeam(withTag="fish") >= 10 |
| 1.15 | >= | bool | Return true if number on right is smaller or equal. Means greater or equal than next value | requireConditional: if numberOfUnitsInTeam(withTag="fish") <= 11 |
| 1.15 | == | bool | Return true if number, unit, string, bool on both sides is the same. Means equal to next value | hidden: if memory.tail == 0 |
| 1.15 | != | bool | Return true if number, unit, string, bool on both sides different. Means different to next value | isVisible: if memory.message != parent.readUnitMemory(name="stateMessage", type="string") |
| 1.15 | + | same type | Add two numbers or join two strings. Means addition to this value | setUnitMemory: stockpile = self.ammo + customTarget1.resource.reserve |
| 1.15 | - | same type | Subtract two numbers. Means substraction to this value | setUnitMemory: stockpile = self.ammo - customTarget2.resource.reserve |
| 1.15 | / | same type | Divide two numbers. Means division of two values | setUnitMemory: damageMultiplierBuffer = memory.population / memory.death |
| 1.15 | \* | same type | Multiply two numbers. Means multiplication of two values | setUnitMemory: reserveCash = memory.population \* self.resource.credits |
| 1.15 | % | same type | Divides two numbers and returns the remainder. Means a percentage of a value | setUnitMemory: isEvenX = select(self.x % 2, true, false) |
| NaN | #==== | #==== | Unit location and movement | "self" prefix can be replaced with other unit-based prefixes (more information below) |
| NaN | self.isUnderwater() | bool | Checks if unit is underwater | autoTrigger: if self.isUnderwater() |
| NaN | self.isAtGroundHeight() | bool | Checks if unit is in surface level | autoTrigger: if thisActionTarget.isAtGroundHeight() |
| NaN | self.isFlying() | bool | Checks if unit is flying | isActive: if self.isFlying() |
| NaN | self.isMoving() | bool | Checks if unit is moving on its own by any means | isLocked: if self.isMoving() |
| 1.15 | self.isReversing() | bool | Checks if unit is moving backwards | isLockedAlt2: if self.isReversing() |
| NaN | self.isAtTopSpeed() | bool | Checks if the unit current speed matches the moveSpeed property | autoTrigger: if self.isAtTopSpeed() |
| NaN | self.isInWater() | bool | Checks if unit touches a water tile | isLocked: if not self.isInWater() |
| NaN | self.isOverwater() | bool | Checks if unit is touching or over a water tile | isLocked: if not self.isOverwater() |
| NaN | self.isOverLiquid() | bool | Checks if unit is touching or over a liquid tile (water, lava) | isLocked: if not self.isOverLiquid() |
| NaN | self.isOverClift() | bool | Checks if unit is touching a cliff tile | isLocked: if not self.isOverClift() |
| NaN | self.isOverPassableTile() | bool | Checks if unit is touching or over a specific tile (parameters: type, Type Values: NONE, LAND, BUILDING, HOVER, OVER\_CLIFF, OVER\_CLIFF\_WATER, AIR, WATER) | isLockedAlt: if self.isOverPassableTile(type="OVER\_CLIFF\_WATER") |
| NaN | self.isOverOpenLand() | bool | shortcut for self.isOverPassableTile(type='LAND') | hidden: if not self.isOverOpenLand() |
| NaN | #==== | #==== | Unit stats | NaN |
| 1.13.3 | self.hasResources() | bool | Checks if unit has these resources. Can check multiple resources at the same time (all price parameters). | isActive self.hasResources(credits=1, energy=2) |
| NaN | self.resource() | float / bool | Checks a single resource (parameters: type, greaterThan, lessThan) (1.15 returns float with no parameters) | isActive: self.resource(type=gold) >= 10 |
| 1.15 | self.resource.RESOURCE\_TYPE | float | Shortcut for: self.resource(type='RESOURCE\_TYPE') | addResourcesWithLogic: hp += self.resource.gold |
| 1.14? | self.isResourceLargerThan | bool | Compare two resource between each other, note multiplyTargetBy doesn't make any changes. (parameters: source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | autoTrigger: self.isResourceLargerThan(source=oil, compareTarget=sauce, byMoreThan=100, multiplyTargetBy=0.2) |
| NaN | self.hp() | float / bool | Returns the current health of the unit (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | addResourcesWithLogic: energy += select(self.hp > self.energy, 10, 3) |
| 1.15 | self.maxHp() | float / bool | Returns the maximum health of the unit (parameters: greaterThan, lessThan, empty, full). (1.15 returns float with no parameters) | setResourcesWithLogic: sauce = self.maxHp \* self.energy |
| NaN | self.height() | float / bool | Returns the height of the unit from the ground (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | imageScale: 1 + (self.height \* 0.1) |
| NaN | self.ammo() | int / bool | Returns int if no parameters, boolean with any parameters (parameters: greaterThan, lessThan, empty, full) | isLocked: if self.ammo < 1 |
| NaN | self.isAmmoEmpty() | bool | shortcut for self.ammo(empty=true) | isLockedAlt: self.isAmmoEmpty() |
| NaN | self.ammoIncludingQueued() | int / bool | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | isLocked: if self.ammoIncludingQueued(lessThan=12) |
| NaN | self.energy() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | isVisible: if self.energy() > 50 |
| NaN | self.energyIncludingQueued() | float / bool | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | isVisible: if self.energyIncludingQueued() |
| NaN | self.isEnergyFull() | bool | shortcut for self.energy(full=true) | isLocked: if self.isEnergyFull() |
| NaN | self.isEnergyEmpty() | bool | shortcut for self.energy(empty=true) | isActive: if self.isEnergyEmpty() |
| 1.15p10 | self.maxEnergy() | float / bool | Returns maximum energy (defaults to energyMax value in core, dynamically adjusts to changed value made by setUnitStats) | isLocked: if memory.kills < self.maxEnergy() |
| NaN | self.isEnergyRecharging() | bool | Checks if unit energy is passively recharging | text: Reload %{select(self.isEnergyRecharging(), "", "[ready")} |
| NaN | self.shield() | float / bool | (parameters: greaterThan, lessThan, empty, full) (1.15 returns float with no parameters) | isActive: if self.shield() == 0 |
| 1.15p10 | self.maxShield() | float / bool | Returns the maximum shield value (defaults to maxShield value in core, but dynamically adjusts to changes made with setUnitStats) | isLockedAlt2: if self.energy <= self.maxShield()/2 |
| NaN | self.kills() | int / bool | Returns the number of kills the unit has done (parameters: greaterThan, lessThan) (1.15 returns int with no parameters) | setUnitMemory: score = self.kills()\*3 |
| 1.13.3 | self.queueSize() | int / bool | Checks the amount of queued build actions and other actions in the invoked unit(parameters: greaterThan, lessThan, full, empty, equalTo) (1.15 returns float with no parameters) 1.15p9 adds a new parameter: withActionTag="#" | isLocked: if self.queueSize() >= 4 |
| 1.15 | self.teamId() | int | Return team id of unit or marker. Starts at 0. (but -1 for a neutral team) | switchToteam: lastDamagedBy.teamId() |
| NaN | self.teamName() | string | Returns allied group team name | showMessageToAllPlayers: %{attacking.teamName()} dominated %{thisActionTarget.teamName()} |
| NaN | self.playerName() | string | Returns player's name | showQuickWarLogToAllPlayers: %{self.playerName()} destroyed %{thisActionTarget.playerName()}'s %{thisActionTarget} |
| NaN | self.x() | float | Returns the horizontal position of the unit | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.y() | float | Returns the vertical position of the unit | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.z() | float | Returns the elevation position of the unit (identical to self.height) | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.dir() | float | Returns the unit's direction | description: [Position]\n[X]: %{self.x}\n[Y]: %{self.y}\n[Z]: %{self.z}\n[D]: %{self.dir} |
| NaN | self.priceCredits() | NaN | Returns the price of the unit. Only returns the credit price. Does not support custom resources. | addResourcesWithLogic: credits = attacking.priceCredits |
| 1.15p9 | self.builtAmount() | float | Returns the current value of build progression of the unit | stack\_indexCount: int(12 \* (self.builtAmount \* 0.1)) |
| 1.15p9 | self.completed() | bool | Shortcut for self.builtAmount() == 1 | autoTrigger: if self.completed() |
| 1.15p9 | self.speed() | float | Returns current speed of the unit | isLockedAlt: if self.speed < 2 |
| 1.15p9 | self.maxMoveSpeed() | float | Returns the maximum possible speed set for the unit (value set for moveSpeed property, may be manipulated with setUnitStats) | autoTrigger: if memory.defaultSpeed < self.maxMoveSpeed |
| NaN | #==== | #==== | Misc | NaN |
| 1.13 | self.hasFlag() | bool | Boolean flag saved into units for mods to use. (parameters: id=0-31) | autoTrigger: if self.hasFlag(id=1) |
| 1.13 | self.tags() | bool | Checks or return tags of a unit (parameters: includes) | autoTrigger: if self.tags(includes='fish') |
| 1.13.3 | self.globalTeamTags() | bool | Checks or returns global tags on a unit (parameters: includes) | autoTrigger: if self.globalTeamTags(includes='animal') |
| 1.13 | self.transportingCount() | int | (parameters: greaterThan, lessThan, empty) (1.15 returns int with no parameters) | text: Load - %{self.transportingCount()} |
| 1.13 | self.numberOfAttachedUnits() | int / bool | (withTag, greaterThan, lessThan) (1.15 returns int with no parameters) | text: Cores - %{self.numberOfAttachedUnits()} |
| 1.13 | self.isAttacking() | bool | Checks if the unit is attacking something | setUnitStats: moveSpeed=select(self.isAttacking, 4, 2) |
| 1.13 | self.hasActiveWaypoint() | bool | (parameters: type=WAYPOINT\_TYPE) | text: Waypoint - %{self.hasActiveWaypoint(type='move')} |
| 1.15 | self.numberOfQueuedWaypoints() | int / bool | (parameters: type=WAYPOINT\_TYPE, amount=#) | text: Waypoint Queue - %{self.numberOfQueuedWaypoints(type='attackMove') >= 2} |
| 1.13 | self.transportingUnitWithTags() | bool | (parameters: includes) | requireConditional: if self.transportingUnitWithTags(includes='human') |
| 1.13 | self.hasParent() | bool | Checks if a unit is attached or a passenger of a unit. For both attachments and transports (parameters: [withTag=x] ) | isVisible: if self.hasParent |
| 1.13 | self.hasTakenDamage() | float / bool | Checks when the unit last took damage (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isActive: if self.hasTakenDamage(withinSeconds=1) |
| 1.13 | self.timeAlive() | float / bool | Checks how long the unit is alive (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isLocked: if self.timeAlive() > 100 |
| 1.13 | self.lastConverted() | float / bool | Check the time the unit last converted from (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | isLockedAlt2: if self.lastConverted() |
| 1.13 | self.customTimer() | float / bool | Returns the current value in the unit's custom timer (parameters: withinSeconds=X, laterThanSeconds=X) (v1.15 returns float in seconds with no parameters) | autoTrigger: if self.customTimer() > 120 |
| 1.13 | self.isOnNeutralTeam() | bool | Checks if the unit belongs to the neutral team (Team ID -1) | NaN |
| 1.13 | self.numberOfUnitsInTeam() | int / bool | Checks amount of player units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isLocked: if numberOfUnitsInTeam(withTag='techUnlockBuilding', lessThan=5) |
| 1.13 | self.numberOfUnitsInAllyTeam() | int / bool | Checks amount of allied and player units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | description: TEAM %{self.teamName}\n\nTank Population: %{self.numberOfUnitsInAllyTeam()} |
| 1.14 | self.numberOfUnitsInAllyNotOwnTeam() | int / bool | Checks amount of allied only units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isActive: if self.numberOfUnitsInAllyNotOwnTeam() > 100 |
| 1.13.3 | self.numberOfUnitsInEnemyTeam() | int / bool | Checks amount of enemy units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | autoTrigger: if self.numberOfUnitsInEnemyTeam(withinRange=500) > 0 |
| 1.14 | numberOfUnitsInNeutralTeam() | int / bool | Checks amount of neutral units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isVisible: if memory.deadzone.numberOfUnitsInNeutralTeam() >= 10 |
| 1.14 | numberOfUnitsInAggressiveTeam() | int / bool | Checks amount of aggressive neutral units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | isVisible: if memory.deadzone.numberOfUnitsInAggressiveTeam() >= 30 |
| 1.15p9 | numberOfUnitsInAllTeams() | int / bool | Checks amount of any units that meet the parameters (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) (v1.15 returns int with no parameters) | text: Birds: %{numberOfUnitsInAllTeams(withTag="bird")} |
| 1.13.3 | self.hasUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | isLocked: if self.hasUnitInTeam(withTag="fish") |
| NaN | self.noUnitInTeam() | bool | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | isLocked: if self.noUnitInTeam(withTag="infected") |
| NaN | self.isControlledByAI() | bool | Checks if a unit is controlled by AI. | text: Robot? %{select(self.isControlledByAI(), "Yes", "No")} |
| 1.15 | self.readUnitMemory() | any type | (name:string, type:string{boolean,unit,float,string}, [default]) | isActive: if parent.readUnitMemory('boostTarget', type='unit') == self |
| NaN | #==== | #==== | Unit references | NaN |
| 1.15 | thisActionTarget | unit / marker | Current target or location targeted. | fireTurretXAtGround: mainGun (thisActionTarget==Marker with ground location)\nalsoTriggerAction: x (thisActionTarget==Same as original action)\n[turret]onShoot\_triggerActions: x (thisActionTarget==Target that was shot at)\ntakeResources\_triggerActionIfAnyCollected: x (thisActionTarget==Target with resources)\naddWaypoint\_triggerActionIfMatched: x (thisActionTarget == Marker for move/Target for attack, etc. Note: use addWaypoint\_maxTime:0 if you want to search only) |
| 1.15 | thisActionIndex | int | Used with alsoTriggerActionRepeat and takeResources\_triggerActionForEach | alsoTriggerActionRepeat: thisActionIndex |
| 1.15 | eventSource | unit / marker | Current trigger from an autoTriggerOnEvent, otherwise null | autoTriggerOnEvent: tookDamage (eventSource==Unit that caused damage)\nautoTriggerOnEvent: killedAnyUnit (eventSource==Unit that was killed)\nautoTriggerOnEvent: transportingNewUnit (eventSource==Unit that was transported)\nautoTriggerOnEvent: transportUnloadedOrRemovedUnit (eventSource==Unit unloaded)\nautoTriggerOnEvent: queuedUnitFinished (eventSource==New unit made)\nautoTriggerOnEvent: touchTargetSuccess (eventSource==Target touched) |
| 1.15 | attachment | unit | Returns unit attachment as reference (parameters: [slot], [withTag]) | setCustomTarget2: self.attachment(withTag='x').lastDamagedBy.getAsMarker() |
| 1.15 | transporting | unit | Returns unit passenger as reference (parameters: [slot]) | autoTrigger: if self.transporting(slot=0).hasResources(gold=100) |
| 1.15 | attacking | unit | Current target this is attacking, might not be the current waypoint target. | isLocked: if attacking.tags(includes='bug') and attacking.hp < 20 |
| 1.15 | lastDamagedBy | unit | Last unit that attacked this. | teleportTo: lastDamagedBy |
| 1.15 | parent | unit | The transporter or attachment parent. (Note: units are suspended state when transported without attachment slot) | autoTrigger: if parent.energy > 100 |
| 1.15 | activeWaypointTarget | unit | Current active waypoint target. Includes attacking, transporting, repairing, etc. | isActive: if distanceBetween(self, activeWaypointTarget) < 100 |
| 1.15 | customTarget1 | unit | Custom memory, defaults to the unit that created this unit. | isLocked: if parent.customTarget1 == self |
| 1.15 | customTarget2 | unit | Custom memory, defaults to null | fireTurretXAtGround\_withPosition: customTarget2 |
| 1.15 | nearestUnit | unit | (withinRange=500, withTag='x', relation='any') Search for a unit (not recommended in autoTrigger check for perfomance) | setCustomTarget1: nearestUnit(withTag="derrick") |
| 1.15 | globalSearchForFirstUnit | unit | (withTag=x, relation) - Returns first (and oldest) unit found matching the filter. Slow, avoid using in autoTrigger checks | self.globalSearchForFirstUnit(withTag='gameController', relation='neutral') |
| 1.15 | nullUnit | unit | returns a null unit reference, useful for comparisons | isLockedAlt2: if self.parent == nullUnit |
| NaN | #==== | #==== | Marker functions (These are considered "Unit" info and not "Number" info if calling them for variables) | NaN |
| 1.15 | getAsMarker | marker | creates a temporary marker at the position a unit is right now. Markers are very fast to create and automatically removed when no longer needed. Is not linked to any unit and still exists when the unit dies, and stays the same when source moves. | lastDamagedBy.getAsMarker() |
| 1.15 | getOffsetAbsolute | marker | ([x],[y],[height]) Returns marker with absolute offset (-y is north, +x is east) | addWaypoint\_target\_fromReference: unitref getOffsetAbsolute(self.x, self.y+1000, self.z) |
| 1.15 | getOffsetRelative | marker | ([x],[y],[height],[dirOffset]) Returns marker with relative offset. (y+ is forwards) | self.getOffsetRelative(y=100).nearestUnit(withinRange=70, withTag='mouse') != null |
| 1.15 | eventSource | event | Returns the event from autoTriggerOnEvent, null if used outside of a valid autoTriggerOnEvent | text: Event: %{eventSource} |
| NaN | #==== | #==== | Global functions | NaN |
| 1.15 | readUnitMemory | all arguments | Reads memory from the unit reference (e.g. self.readUnitMemory, parent.readUnitMemory, attacking.readUnitMemory) | self.readUnitMemory('ammoType', type='string'), parent.readUnitMemory(''attachmentArray", type="unit[ ]", index=5), attacking.readUnitMemory("wishlist", type="string[ ]")[12] |
| 1.15 | memory.NAME | self only | Shortcut to read the self with current defineUnitMemory types. Cannot be used on other units, use readUnitMemory for that. Don't call with self. | autoTrigger: if memory.experience > 100 |
| NaN | #==== | #==== | Array Memory methods. usable on both memory logic functions above. | NaN |
| 1.15 | memory.NAME.size | int | Returns the size of the array (including empty indexes between indexes) | setUnitMemory: squadSize = memory.squad.size |
| 1.15 | memory.NAME.contains(query) | bool | Returns true if the query is found within the array. Basically searches something if it exists. | autoTrigger: if memory.savedCoord.contains(lastDamagedBy.customTarget1.customTarget1) |
| 1.15 | distance(x1, y1, x2, y2) | float | Returns the difference between two points | isLocked: if distance(self.x, self.y, thisActionTarget.x, thisActionTarget.y) > 350 |
| 1.15 | distanceSquared(x1, y1, x2, y2) | float | Returns the squared difference between two points. Bit faster than distance. | isLocked: if distanceSquared(self.x, self.y, thisActionTarget.x, thisActionTarget.y) > 19 |
| 1.15 | distanceBetween(unit1, unit2) | float | Returns the distance between two units or markers | isLocked: if distanceBetween(self, memory.antenna) > 1000 |
| 1.15 | distanceBetweenSquared(unit1, unit2) | float | Returns the squared distance between two units. Bit faster than distanceBetween | isLocked: if distanceBetweenSquared(self, memory.antenna) > 100 |
| 1.15 | game.nukesEnabled() | bool | Returns true if nukes are enabled in this game's settings. | isActive: if not game.nukesEnabled() |
| 1.15 | int(x) | int | Removes decimal places from a number. | stack\_indexCount: int(12 \* (self.builtAmount \* 0.1)) |
| 1.15 | select(bool, textA, textB) | NaN | returns textA if bool is true otherwise returns textB | setUnitMemory: isEvenX = select(self.x % 2, true, false) |
| 1.15 | debug(logicBoolean) | string | Returns a text string helping to explain the reason for the current result. Can see into nested logic, comparisons, and operators. | description: [DEBUG] %{debug(self.x > self.y)} |
| 1.15 | str(x) | string | Convert a number, unit or boolean into a string | str(self.energy)+'x' == '100x' |
| 1.15 | substring(text,start,end) | string | Takes a part of the string from the indicated start and end parts | substring('hello',0,2) == 'he' |
| 1.15 | length(string) | int | Returns string length as number | length(memory.sms) |
| 1.15 | squareRoot(num) | float | Requires square root of a number | squareRoot(self.x + self.y) |
| 1.15 | min(num1, num2) | float | Returns the smallest number | damage = min(self.hp, self.energy) |
| 1.15 | max(num1, num2) | float | Returns the biggest number | max(5, 10) == 10 |
| 1.15 | createMarker(x, y, [height], [teamId], [dir]) | marker | Creates a marker that can be used to place coordinates for various actions | fireTurretXAtGround\_withTarget: createMarker(self.x + 500, self.y + 500) |
| 1.15 | eventData(name, type, [default]) | any type | Displays the data from a specified message from some unit. Only use in autoTriggerOnEvent:newMessage events | text: %{eventData(name="msg", type="string")} |
| 1.15 | sin(angle) | float | Takes the sine value of a specified number | sin(10) = 0.173 |
| 1.15 | cos(angle) | float | Takes the cosine value of a specified number | cos(60) = 0.5 |
| 1.16 | abs(number) | float | Returns absolute value regardless of negative or positive, needs testing | NaN |
| 1.16 | coalesce(A,B,[C]) | float | Returns first non-null element in the array series | NaN |
| 1.16 | vec2(x,y) | float | Returns a vec2 coordinates | NaN |
| 1.16 | vec3(x,y,z) | float | Returns a vec3 coordinates | NaN |
| 1.15 | rnd(min, max) | float | Produces a random number between minimum and maximum input. | rnd(666, 888) |
| 1.15 | lowercase(string) | string | Sets all letters from a string into lowercase | lowercase("Spaghetti Macaroni Lasagna") -> "spaghetti macaroni lasagna" |
| 1.15 | uppercase(string) | string | Sets all letters from a string into uppercase | uppercase("fish dish wish") -> "FISH DISH WISH" |
| 1.15 | direction(x1, y1, x2, y2) | float | Returns the relative angle of x1/y1 and x2/y2 | direction(self.x, self.y, attacking.x, attacking.y) |
| 1.15 | directionBetween(unit1, unit2) | float | Returns the relative angle of unit/marker A and unit/marker B | directionBetween(self, lastDamagedBy) |
| 1.15 | self.isInMap() | bool | Returns true if unit (or marker) is with the game area; Returns false if outside bounds | autoTrigger: if not self.isInMap() |
| 1.15 | game.mapWidth() | float | Returns the width of the map | fireTurretXAtGround\_withTarget: createMarker(rnd(0, game.mapWidth), rnd(0, game.mapHeight)) |
| 1.15 | game.mapHeight() | float | Returns the height of the map | fireTurretXAtGround\_withTarget: createMarker(rnd(0, game.mapWidth), rnd(0, game.mapHeight)) |
| 1.15p9 | self.teamDefeatedTech() | bool | Returns true if team is defeated | autoTrigger: if attacking.teamDefeatedTech() |
| NaN | self.teamWipedOut() | bool | Returns true if team is defeated and wiped out | autoTrigger: if self.teamWipedOut() |
| NaN | self.teamVictory() | bool | Returns true if team is victorious | autoTrigger: if self.teamVictory() |
| 1.14 | Type | NaN | [placementRule\_NAME] | Allows creation of rules for requiring buildings |
| 1.14 | Code | Value Type | Description | Example |
| 1.14 | anyRuleInGroup: | string | (Only require 1 of the rules in this group pass, instead of all. Use the same group name on other placement rules to create a group.) | anyRuleInGroup: struct |
| 1.14 | searchTags: | tag list | Search for any unit with at least one of these tags | searchTags: factory |
| 1.14 | searchTeam: | relation | Teams to include in search, can be: own|neutral|allyNotOwn|ally|enemy|any | searchTeam: own |
| 1.14 | searchOffsetX: | float | defaults to 0 | searchOffsetX: 100 |
| 1.14 | searchOffsetY: | float | defaults to 0 | searchOffsetY: 200 |
| 1.14 | searchDistance: | float | Required | searchDistance: 500 |
| 1.14 | excludeIncompleteBuildings: | bool | defaults to false. Might want to set to true depending on the requirement reason | excludeIncompleteBuildings: true |
| 1.14 | excludeNonBuildings: | bool | defaults to false | excludeNonBuildings:true |
| 1.14 | minCount: | int | Set min amount of units that need to be found in search. (eg needs to be near something). Defaults to 0 | minCount: 0 |
| 1.14 | maxCount: | int | Set max amount of units before match fails (eg cannot be close to something). Defaults to unlimited | maxCount: 1 |
| 1.14 | blocksPlacement: | bool | Defaults to true. | blocksPlacement: false |
| 1.14 | cannotPlaceMessage: | LocaleString | Highly Recommended. Message shown to player if this rule fails (will be first failing rule if using anyRuleInGroup). | cannotPlaceMessage: "No factory is nearby" |
| 1.14 | checkEachTile: | bool | defaults to true (set to false to only test unit center, true checks each tile under the unit which shows up on the placement grid. Can be easier to see requirements with true) | checkEachTile: false |
| NaN | Type | NaN | Prices/Resources lines - used by addResources, price, etc | NaN |
| NaN | Code | Targets | Description | Example |
| NaN | credits | NaN | Global resource | price: 100 |
| NaN | energy | NaN | Energy used for laser shield and ammunition | resourceUsage: energy=1 |
| NaN | hp | NaN | Unit hitpoints | addResources: hp += 100 |
| NaN | shield | NaN | Shielding for units | price: hp=-100, shield=100 |
| NaN | ammo | NaN | Hidden value on each unit for use by mods | price: hp=-100, shield=101 |
| NaN | setFlag | NaN | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | addResources: setFlag=1 |
| NaN | unsetFlag | NaN | use with addResources, resourceUsage or price. 0-31 | NaN |
| NaN | hasFlag | NaN | use with price or resourceUsage | NaN |
| NaN | hasMissingFlag | NaN | use with price or resourceUsage | NaN |
| 1.13.3 | X | NaN | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=21, credits=2001 |
| NaN | Section | NaN | [global\_resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN |
| 1.13.3 | displayName | LocaleString | Name of this resource in UI | displayName: Crude Oil |
| 1.13.3 | displayNameShort | LocaleString | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | displayNameShort: Oil |
| 1.13.3 | hidden | bool | Hide this resource from the player | hidden: false |
| 1.13.3 | priority | float | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | priority: 0.5 |
| 1.13.3 | displayColor | color | Color, can be hex with optional alpha | displayColor: #FF0000 |
| 1.14 | displayRoundedDown | bool | Don't show decimal places to the player | displayRoundedDown |
| 1.15 | displayTextPrefix | string | Adds a string before the resource value | displayTextPrefix: - |
| 1.15 | displayTextPostfix | string | Adds a string after the resource value | displayTextPostfix: x |
| 1.15 | displayTextAppendResource | resource | Appends another resource after this resource. It's recommended to give a "hidden" key on the appended resource to hide duplicate. | displayTextAppendResource: sauce |
| 1.15 | displayWhenZero | bool | Displays the resource even when empty. Set as false by default | displayWhenZero: true |
| 1.15 | displayPos | int | Sets the position of the globa resource in the screen | displayPos: 1 |
| 1.15 | iconImage | image | Shows a custom icon for the specific resource in the HUD and in text | iconImage: icon\_oil.png |
| 1.15 | iconImageUseInText | bool | Default as true; Shows resource icon in action description | iconImageUseInText: false |
| 1.15 | displayNameHideWhenIconShownInText | bool | Default as false | displayNameHideWhenIconShownInText: true |
| 1.15 | displayNameHideWhenIconShownInHUD | bool | Hides the icon in menus referring to resource when true. Default as false | displayNameHideWhenIconShownInHUD: true |
| 1.15 | displayColorUseInText | bool | Shows color in action description | displayColorUseInText: false |
| 1.15 | displayInHud | bool | For resources used in appendResourceInHUD that shouldn't be hidden: true. Defaults true. | displayInHud: false |
| 1.15 | appendResourceInHUD | resource | stacks another resource specified after this resource on the HUD. | appendResourceInHUD: sauce |
| 1.15 | appendResourceInHUD\_whenThisZero: | bool | Defaults as true. When set as false, allows appended resource to be hidden with the parent resource. | appendResourceInHUD\_whenThisZero: true |
| 1.15 | displayPrefixInHUD | string | Displays text to show before resource value - replaces resource name and removes the colon separator | displayPrefixInHUD: - |
| 1.15 | displayPostfixInHUD | string | Similar to the prefix counterpart, but is displayed after the resource value | displayPostfixInHUD: x |
| 1.15 | valueInStats: | float | Affects post game stats and replay leaderboard. Defaults to 1. | valueInStats: 0.5 |
| 1.15 | displayTextAppendResourceWithGap: | bool | Adds a space between this and the appended resource. Defaults as false. | displayTextAppendResourceWithGap: true |
| 1.15p9 | displayDigitGrouping | enum | Sets the symbol for separating place units in: none, comma, space | displayDigitGrouping: comma |
| NaN | Section | NaN | [resource\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| NaN | #==== | #==== | Define a new resource local to unit. Works like build-in ammo resource | NaN |
| 1.13.3 | displayName | LocaleString | Name of this resource in UI (eg hovering over unit info) | displayName: Sauce |
| 1.13.3 | displayNameShort | LocaleString | Shorter version of resource name used on some text ui | displayNameShort: Sus |
| 1.13.3 | hidden | bool | Hide this resource from the player | hidden: true |
| NaN | equivalentGlobalResourceForAI | resource | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | equivalentGlobalResourceForAI: universal\_sauce |
| 1.14 | displayRoundedDown | bool | Rounds off resource values with decimals | displayRoundedDown: true |
| NaN | Type | value type | [decal\_name] | Example |
| 1.15p9 | # Graphical # | NaN | NaN | NaN |
| 1.15p9 | image | image | Takes a single image for the decal - NOT TO BE CONFUSED WITH IMAGE STACK | image: fish.png |
| 1.15p9 | layer | enum | Sets the layer of the decal, values from lowest to highest - shadow, beforeBody, afterBody, onTop, beforeUI, inactive | layer: beforeUI |
| 1.15p9 | order | float | Defaults as 0, sets a more discrete layering if 2 or more decals takes same layer type. Otherwise order in INI file will be used. | order: 2 |
| 1.15p9 | teamColors | bool | When true, automatically reassigns team color to respective teams | teamColors: true |
| 1.15p9 | alpha | logicNumber | 0-1, sets transparency of decal (images or line) | alpha: 0.5 |
| 1.15p9 | isVisible | LogicBoolean | Dynamic Value, draws the decal on a specific condition | isVisible: if self.hp > self.maxHp/2 |
| 1.15p9 | # Player Conditions # | NaN | NaN | NaN |
| 1.15p9 | onlyWhenSelectedByOwnPlayer | bool | Defaults as false, displays the decal only if the owner player clicks on the unit | onlyWhenSelectedByOwnPlayer : true |
| 1.15p9 | onlyWhenSelectedByEnemyPlayer | bool | Defaults as false, displays the decal only if the enemy player clicks on the unit | onlyWhenSelectedByEnemyPlayer: true |
| 1.15p9 | onlyWhenSelectedByAllyNotOwnPlayer | bool | Defaults as false, displays the decal only if the allied player clicks on the unit | onlyWhenSelectedByAllyNotOwnPlayer: true |
| 1.15p9 | onlyWhenSelectedByAnyPlayer | bool | Defaults as false, displays the decal only if any player clicks on the unit | onlyWhenSelectedByAnyPlayer: true |
| 1.15p9 | includeParentsSelection | bool | Useable with onlyWhenSelectedBy[insertplayer], will also checks parent's selection when true. Useful with attachments. | includeParentsSelection: true |
| 1.15p9 | # "Only if" Conditions # | NaN | NaN | NaN |
| 1.15p9 | onlyTeam | TeamRelation | Draws the decal if value matches the player from the following: own, notOwn, ally, allyNotOwn, enemy, any | onlyTeam: any |
| 1.15p9 | onlyWhileActive | bool | Draws the decal only if the unit is fully built | onlyWhileActive: true |
| 1.15p9 | onlyWhileAlive | bool | Draws the decal only if the unit is alive (If beforeUI layer default true, else default false) | onlyWhileAlive: false |
| 1.15p9 | onlyInPreview | bool | Only show in sidebar, and building placement preview | onlyInPreview: false |
| 1.15p9 | onlyWithZoomLevelOrMore | float | Draws the decal only if the zoom level matches or exceeds it, very useful for making 3D units more optimized. | onlyWithZoomLevelOrMore: 0.4 |
| 1.15p9 | onlyOnNonPreview | bool | Draws the decal only on the unit itself, not on the preview from building or in sidebar interface | onlyOnNonPreview: true |
| 1.15p9 | onlyPlayersWithUnitControl | bool | Draws the decal if a player that selects it has control (that includes shared units in multiplayer) | onlyPlayersWithUnitControl: true |
| 1.15p9 | onlyOnBodyFrameOf | int | Only draw decal when body frame is equal to this | onlyOnBodyFrameOf: 0 |
| 1.16 | onlyInBlueprint | bool | Untested prototype | NaN |
| 1.16 | onlyOnNonBlueprint | bool | Untested prototype | NaN |
| 1.15p9 | # Offsets (Positioning) # | NaN | NaN | NaN |
| 1.15p9 | xOffsetRelative | int | Sets horizontal offset relative to the unit | xOffsetRelative: 50 |
| 1.15p9 | yOffsetRelative | int | Sets vertical offset relative to the unit | yOffsetRelative: 50 |
| 1.15p9 | xOffsetAbsolute | logicNumber | Dynamic value | xOffsetAbsolute: 40 |
| 1.15p9 | yOffsetAbsolute | logicNumber | Dynamic value | yOffsetAbsolute: 40 |
| 1.15p9 | hOffset | int | Sets the height of the whole decal | hOffset: 10 |
| 1.15p9 | dirOffset | int | Sets the direction of the whole decal. | dirOffset: 45 |
| 1.15p9 | pivotOffset | int | only affects relative offsets without rotating image | pivotOffset: 45 |
| 1.15p9 | alwaysStartDirAtZero | bool | Keeps the decal on north direction regardless of the unit's direction value, useful for custom in-unit interfaces | alwaysStartDirAtZero: true |
| 1.15p9 | # Image specifics / Stacks # | NaN | NaN | NaN |
| 1.15p9 | imageStack | images | Takes one or more image with occassional multipliers for stacking. Also useful for using image stack from a MagicaVoxel slice export | Multiple image file stack: imageStack - carFloor.png, carBody.png\*3, carRoof.png\*2, antenna.png\*10 |
| 1.15p9 | NaN | NaN | NaN | Stack from a sprite sheet - imageStack: carModel.png\*14 |
| 1.15p9 | imageScale | logicNumber | Dynamic value, scales the decal | imageScale: 1 + (self.height \* 0.1) |
| 1.15p9 | imageScaleX | logicNumber | Dynamic value | imageScaleX: 1 |
| 1.15p9 | imageScaleY | logicNumber | Dynamic value | imageScaleY: (self.hp/self.maxHp)\*100 |
| 1.15p9 | stack\_hOffset | float | Sets the height of every layer in a stack. 1 layer = 1 pixel. Can take negative values. | stack\_hOffset: 4 |
| 1.15p9 | stack\_frameOffset | int | Useful for making 3D units, frame to offset by in imageStack. Often a value of 1 is useful in a sprite sheet. | stack\_frameOffset: 1 |
| 1.15p9 | stack\_drawInReverseOrder | bool | Renders the stack in the opposite way - last frame goes on bottom, first frame goes to top | stack\_drawInReverseOrder: true |
| 1.15p9 | stack\_indexStart | logicNumber | Offset to start drawing images in the image stack | stack\_indexStart: 0 |
| 1.15p9 | stack\_indexCount | logicNumber | Number of images in the image stack to draw. | stack\_indexCount: 10 |
| 1.15p9 | total\_frames | int | Sets the number of frames in an image from an imageStack that uses a spritesheet. | total\_frames: 10 |
| 1.15p9 | frame\_width | int | Sets the frame width in the decal stack | frame\_width: 20 |
| 1.15p9 | frame\_height | int | Sets the frame height in the decal stack | frame\_height: 40 |
| 1.15p9 | frame | logicNumber | Dynamic value, useful for animations | frame: memory.frame |
| 1.15p9 | addBodyFrameMultipliedBy | int | Add body frame number to this decal when set to 1. | addBodyFrameMultipliedBy: 2 |
| 1.15p9 | # Shadows # | NaN | NaN | NaN |
| 1.15p9 | image\_shadow | image | Sets shadow for the decal. Note that AUTO does not work in this key. | image\_shadow: shadow.png |
| 1.15p9 | shadowOffsetX | int | Sets the horizontal position of the decal's shadow | shadowOffsetX: 0 |
| 1.15p9 | shadowOffsetY | int | Sets the vertical position of the decal's shadow | shadowOffsetY: 0 |
| 1.15p9 | # Marker Positioning # | NaN | NaN | NaN |
| 1.15p9 | basePosition | marker | Attaches the decal on the specified marker. use "self" if attaching it to the unit itself | basePosition: self |
| 1.15p9 | NaN | NaN | NaN | basePosition: memory.launchPoint |
| 1.15p9 | basePositionFromLegEnd | leg/arm | Attaches the decal to the specified leg or arm ending. | basePositionFromLeg: leg\_3, basePositionFromLeg: arm\_5 |
| 1.15p9 | basePositionFromTurret | turret | Attaches the decal to the specified turret | basePositionFromTurret: rocketLauncherBase |
| 1.15p9 | # Waypoint Lines # | NaN | NaN | NaN |
| 1.15p9 | drawLineTo | marker ref | Draws a line from the unit to the specified marker, useful for custom waypoints | drawLineTo: attacking.customTarget2 |
| 1.15p9 | color | color hex | Sets the color of the drawn line | color: #ffff00 |
| 1.15p9 | lineWidth | float | Sets the width of the drawn line | lineWidth: 2 |
| NaN | Section | NaN | [comment\_NAME] | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | #==== | #==== | Comment sections can have any keys and have no effect. | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | List of default game noises (for turret fire sound or other sound references): | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [template\_NAME] | NaN |
| NaN | Code | Value Type | Description | Example |
| 1.13.3 | #==== | #==== | Template sections can have any keys and have no effect by themselves. | NaN |
| NaN | #==== | #==== | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN |
| NaN | #==== | #==== | --All these below features can be used with any section not just templates-- | NaN |
| 1.13.3 | @copyFromSection | NaN | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection: template\_name/action\_name/projectile\_name |
| NaN | @copyFrom\_skipThisSection | NaN | Use in any section to make [core]copyFrom not copy into it. Eg not copy an action when overriding | @copyFrom\_skipThisSection |
| NaN | @define X | NaN | Define a local variable within a section (best outside of template) | @define targetEffect: boom |
| NaN | @global X | NaN | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop |
| 1.15 | @memory X | NaN | Define a memory for this unit, its type must be defined as well. | @memory transportCount: float |
| 1.13.3 | NaN | NaN | ${X} can be used to reference variables (can also be done outside of a template). It is calculated when loading and remains static. Has no impact on runtime performance. | spawnEffects: effect\_${targetEffect} |
| 1.13.3 | NaN | NaN | ${section.key} can be used to reference another key (can also be done outside of a template) | addResources: credits=${ core.price \* 2 + 10 } |
| 1.15 | NaN | NaN | %{X} can be used to add dynamic logic into some strings. (CAN NOT be used everywhere). The value will update every frame. | [action]text: Missing hp %{self.maxHp - self.hp} |
| 1.15 | NaN | NaN | """ text """ can be used for multiline strings. Newlines with be removed from final result. | copyFrom:"""\nROOT:a.ini,\nROOT:b.ini,\nROOT:c.ini\n"""\n |
| NaN | File | NAME.template | A template that can be used to share many parts across units, used with copyFrom: However, cannot define variables | NaN |
| NaN | NaN | Template Example: | [core] | NaN |
| NaN | NaN | NaN | tags: infantry | NaN |
| NaN | NaN | NaN | [decal] | NaN |
| NaN | NaN | NaN | image: infantryIcon.png | NaN |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | Unit Example: | [core] | NaN |
| NaN | NaN | NaN | copyFrom: ROOT:templates\infantry.template | NaN |
| NaN | File | all-units.template | Put at the root of the mod folder, applies anything in it to ALL units across all .ini files so that you have "common characteristics", can have any sections but cannot define local variables. Can define memories though. | NaN |
| NaN | NaN | Global Example: | [core] | NaN |
| NaN | NaN | NaN | explodeTypeOnDeath: large | NaN |
| NaN | NaN | NaN | energyMax: 20 | NaN |
| NaN | NaN | NaN | [action\_spawnedInitialize] | NaN |
| NaN | NaN | NaN | autoTriggerOnEvent: created | NaN |
| NaN | NaN | NaN | playSoundAtUnit: ROOT:audio/spawnSound.ogg | NaN |
| NaN | File | mod-info.txt | This file defines some of properties of a mod for display in mod browser and in Steam Workshop. It should be placed in the top of mod's file hierarchy, otherwise will result in error | NaN |
| Section | Key | Value type | Description | Example |
| [mod] | NaN | NaN | NaN | NaN |
| NaN | title | String | Sets the title of the mod package | title: Sample mod |
| NaN | description | String | Sets the description of the mod package. Doesn't support line breaks. | description: This is a sample of mod that samples a unit to the game |
| NaN | tags | String | Sets varied tags depending on what is specified, can be multiple with comma as separator | tags: units, sample, demo |
| NaN | minVersion | String | Declares the minimum version compatible for the mod. It is important to declare one when using decals and other modding keys starting on version 1.15p9 beta | minVersion: 1.15p9 |
| NaN | thumbnail | image | Sets the mod's thumbnail in Steam Workshop | thumbnail: assets/images/other/thumb.png |
| 1.16 | id | string | Can be set to anything. The ID to refer to for dependency of other mods | NaN |
| 1.16 | requiredMods | string/id list | What mod(s) required to use this mod, for stuff like dependent "DLC" expansions | NaN |
| 1.16 | requiredModsMessage | string | The message that displays if you do not have the mod necessary | NaN |
| [music] | NaN | NaN | NaN | NaN |
| NaN | sourceFolder | audio dir | Sets where the custom music will be played for the mod | sourceFolder: assets/audio/music |
| NaN | whenUsingUnitsFromThisMod\_playExclusively | bool | Only plays music from this mod | whenUsingUnitsFromThisMod\_playExclusively: true |
| NaN | Projectile Draw Types | NaN | in [projectile\_#], a unit may use a built-in frame from the res/drawable directory. However, only three strips are designated for this use case. Use the id value for the drawType key, and a frame number for a desired appearance. | If there is no image or frame supplied, the game will display a white dot instead, wherein a modder can change its color using the color key. This is observable to Command Center, Heavy Tank, and Missile Tank |
| id | name | usable frames | image (with frame numbers) | NaN |
| 0 | projectiles.png | 12 | NaN | NaN |
| 1 | projectiles\_large.png | 3 | NaN | NaN |
| 2 | projectiles2.png | 6 | NaN | NaN |

## Map Reference
| Layers | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Name | Type | Description | Extra Notes | NaN | NaN | NaN | NaN |
| set | Tile | Associated with autotiling | Tiles in this layer is not visible in the game | NaN | NaN | NaN | NaN |
| Ground | Tile | Sets the terrain of the map itself | All tiles must be filled. | NaN | NaN | NaN | NaN |
| Items | Tile | For use with decorations and resource pools | Can use multiple layers. Some terrain properties work here as well. | NaN | NaN | NaN | NaN |
| Units | Tile | For placing units based from a tileset | Can use multiple layers. However, it is more flexible to use UnitObjects instead. If a regular unit tile is placed beside a transport unit tile, it gets loaded in the transport, provided that it can be loaded (e.g. allowed movement type, enough transport slots) | NaN | NaN | NaN | NaN |
| Trigger | Object | For map scripting | NaN | NaN | NaN | NaN | NaN |
| UnitObjects | Object | For placing units using objects | Similar to Units layer, but this supports rotation | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Tileset Properties | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Property | Purpose | Intended Layer | Description | NaN | NaN | NaN | NaN |
| large-rock | obstacle | Items | Causes a tileset to block paths | NaN | NaN | NaN | NaN |
| water | terrain | Ground | Makes the tile act as water. Sea and Hover units can move in this terrain type. If shaders are enabled, a very subtle wave effect can be observed. | NaN | NaN | NaN | NaN |
| lava | terrain | Ground | Cause the tile to be impassable by ground and sea units. Also emits lava bubble effects. | NaN | NaN | NaN | NaN |
| lava-cliff | terrain | Ground | Used for boundaries between usual tiles and lava tiles. | NaN | NaN | NaN | NaN |
| block-land | obstacle | Ground | Causes a tileset to block non-aerial units and structures. | NaN | NaN | NaN | NaN |
| water-bridge | terrain | Ground | Allows both land and water units to move on this tile. | NaN | NaN | NaN | NaN |
| cliff-soft | terrain | Ground | Makes the tile act as a cliff, where hover and walker units can pass on this tile | NaN | NaN | NaN | NaN |
| large-cliff | terrain | Ground | Makes the tile act as a cliff, where only walker units can walk on this tile | NaN | NaN | NaN | NaN |
| res\_pool | terrain | Items | Allows placement of Extractors | NaN | NaN | NaN | NaN |
| unit | unit | Units, UnitObjects | Sets which unit will be spawned from this tile. | NaN | NaN | NaN | NaN |
| team | unit | Units, UnitObjects | Sets the team of the unit that is spawned from this tile. | NaN | NaN | NaN | NaN |
| type | unit | Units, UnitObjects | Currently used for spawning vanilla trees, which determines the variant of the tree. | NaN | NaN | NaN | NaN |
| showFog | unit | Units | Sets the size of the fog revealed in the game | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Trigger Types | NaN | NaN | A value of "\*any" means the field value can be customized. An "#" in a trigger name can be replaced by any number | NaN | NaN | NaN | NaN |
| Name | Type/Class | Description | Properties | Property Description | Property Value Type | Property Value Name | Property Value Description |
| map\_info | NaN | Sets the properties of the map itself. It has its own set of properties. | fog | Determines the default type of fog the map will use. Lobby settings will override the fog settings. | string | map | Regular fog |
| NaN | NaN | NaN | NaN | NaN | NaN | los | Line of Sight fog |
| NaN | NaN | NaN | NaN | NaN | NaN | (For no fog, leave this blank or don't put the property at all) | NaN |
| NaN | NaN | NaN | shareFogWithAllies | Sets whether allies will share the same fog visibility | bool | NaN | NaN |
| NaN | NaN | NaN | introText | Sets the briefing text that is displayed in the beginning of the gameplay. This supports multiline text with actual line breaks instead of using \n | string | NaN | NaN |
| NaN | NaN | NaN | type | Sets the type of the map | string | skirmish | Sets the map as a regular skirmish map |
| NaN | NaN | NaN | NaN | NaN | NaN | mission | Sets the map as a mission map |
| NaN | NaN | NaN | NaN | NaN | NaN | survival | Sets the map as a survival map, where waves are active. |
| NaN | NaN | NaN | winCondition | Sets the condition for winning on this map (for missions) | string | requiredObjectives | Requires all conditions to be met |
| NaN | NaN | NaN | NaN | NaN | NaN | mainBuldings | Requires all factories and resource generators to be eliminated |
| NaN | NaN | NaN | NaN | NaN | NaN | allUnitsAndBuildings | Requires all units and structures to be eliminated |
| NaN | NaN | NaN | loseCondition | Sets the condition for losing on this map (for missions) | NaN | allBuildings | Requires all structures to be eliminated |
| NaN | NaN | NaN | NaN | NaN | NaN | commandCenter | Requires all enemy command centers to be eliminated |
| NaN | NaN | NaN | NaN | NaN | NaN | none | No possible conditions |
| team\_#\_info | team\_info | Sets the attributes of a certain team. It has its own set of properties. | allyGroup | Sets the team's allied grouping | number | NaN | NaN |
| NaN | NaN | NaN | credits | Sets the team's initial credit value | number | NaN | NaN |
| NaN | NaN | NaN | disabledAI | Disables the AI from ordering the units normally | bool | NaN | NaN |
| NaN | NaN | NaN | team | Sets the team where this trigger will take effect | number | NaN | NaN |
| move\_team\_# | move | Moves all units within the trigger towards the target | target | Sets the point where the units will move. Use the name of the point | string | NaN | NaN |
| NaN | NaN | NaN | unload | Lets the transport units automatically unload when they get to the set point | bool | NaN | NaN |
| NaN | NaN | NaN | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| \*any | point | Provides a marker/target for other triggers | NaN | NaN | NaN | NaN | NaN |
| \*any | fall | Causes the unit to fall (May not work on some units) | NaN | NaN | NaN | NaN | NaN |
| \*any | rotate | Rotates all units inside the trigger towards a specified direction | dir | Sets the direction. This is mandatory, or the game will crash. | float | NaN | NaN |
| camera\_start | NaN | Sets where on the map will initially show the scene at the start of the game. | NaN | NaN | NaN | NaN | NaN |
| \*any | changeCredits | Changes the credit value of a team in a fixed amount set. | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | set | The value set to this will override the current credit value of a team | float | NaN | NaN |
| NaN | NaN | NaN | add | The value set to this will add to the current credit value of a team | float | NaN | NaN |
| \*any | set\_team | Any units inside this trigger will get their teams changed to the set value. This activates instantly. | team | The value set to this will be the new team for any units inside the trigger. | NaN | NaN | NaN |
| \*any | teamTags | Adds/removes specified tags to all units within the trigger box | addTeamTags | Tags that will be added to the units upon triggering. Separate tags by comma if using more than one tags | string | NaN | NaN |
| NaN | NaN | NaN | removeTeamTags | Tags that will be added to the units upon triggering. Separate tags by comma if using more than one tags | string | NaN | NaN |
| \*any | unitRemove | Removes all units inside the trigger box upon invoking | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| \*any | unitAdd | Adds specified units in the middle of the trigger box | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| \*any | unitDetect | Checks for presence of a unit within the trigger box | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyOnResourcePool | checks for presence of units placed in resource pools | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyMainBuildings | checks for precense of factories | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyBuildings | checks for precense of structures | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyBuilders | checks for presence of any construction units that emits nano beam | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyIdle | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyEmptyQueue | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyIfEmpty | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyTechLevel | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyAttack | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyAttackAir | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | onlyWithTag | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | includeIncomplete | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | unitType | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| \*any | objective | Necessary for winCondition with requireObjectives value. This acts as a flag where it is activated by other triggers | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| \*any | mapText | Displays text on the map | text | Text to be displayed on the map | string | NaN | NaN |
| NaN | NaN | NaN | textColor | Color of the displayed text | string | NaN | NaN |
| NaN | NaN | NaN | textOffsetY | Vertical offset of the text relative to the center of the trigger object center | string | NaN | NaN |
| NaN | NaN | NaN | style | Additional style for the object. Currently "arrow" is the known value. Omitting this will just render the text only | string | arrow | adds an arrow that points down towards the center of the trigger object |
| NaN | NaN | NaN | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| \*any | basic | Generic trigger that can be used for chaining to other triggers | (generic properties are also supported) | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Generic Properties | NaN | NaN | Properties that can be used on multiple kinds of triggers listed above. Take note that some aren't totally great to use on specific triggers, but still work normally. | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Property | Type | Description | Values | NaN | NaN | NaN | NaN |
| Messaging | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| debugMessage | string | Upon triggering, a message will be sent to the player. Only takes effect if ran on a sandbox session with debugging enabled | Any string without line breaks (\n line breaks will still work, but not recommended, for UI purposes) | NaN | NaN | NaN | NaN |
| globalMessage | string | Upon triggering, a message will be sent to the player. Message can be rendered with delays. | Any string without line breaks (\n line breaks will still work, but not recommended, for UI purposes) | NaN | NaN | NaN | NaN |
| globalMessage\_delayPerChar | enum, int | Sets how fast the delay per character is rendered | slow, fast, if a number is inputted - sets a more refined control | NaN | NaN | NaN | NaN |
| globalMessage\_textColor | string, hex | Sets the color of the message in the screen. | regular color names. a hex value allows more precise coloration | NaN | NaN | NaN | NaN |
| showOnMap | bool | Upon triggering, a cross ping is shown in the map, in the relative position where the trigger is found. It will use the cyan cross ping (and there is no way to change colors at the moment) | NaN | NaN | NaN | NaN | NaN |
| Unit Census and Units | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| minUnits | int | Used for conditional checking. Returns true if the number of units inside the trigger box meets the minimum amount of units inside. Can be used together with maxUnits | NaN | NaN | NaN | NaN | NaN |
| maxUnits | int | Used for conditional checking. Returns true if the number of units inside the trigger box meets the maximum amount of units inside. Can be used together with minUnits. | NaN | NaN | NaN | NaN | NaN |
| team | string | Set the team that will be affected by this trigger | NaN | NaN | NaN | NaN | NaN |
| spawnUnits | string | Spawns specified units | NaN | NaN | NaN | NaN | NaN |
| warmup | time | Initial delay before the trigger gets activated | NaN | NaN | NaN | NaN | NaN |
| delay | time | Delay of the effects after the trigger gets activated | NaN | NaN | NaN | NaN | NaN |
| Trigger Loops and Repeat | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| repeatDelay | int | time threshold before the trigger can be activated again | NaN | NaN | NaN | NaN | NaN |
| repeatCount | int | amount of time the trigger can be repeated after a call | NaN | NaN | NaN | NaN | NaN |
| Chaining | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| id | string | Adds an identification for the trigger. It is used for chaining other triggers. | NaN | NaN | NaN | NaN | NaN |
| activatedBy | string | Activates the trigger if a specified trigger is already active | Can use either the id parameter value of a trigger, or alternatively, their set name | NaN | NaN | NaN | NaN |
| deactivatedBy | string | Deactivates the trigger if a specified trigger is already active | NaN | NaN | NaN | NaN | NaN |
| alsoActivate | string | Chains this trigger to another trigger - activating it after this trigger is active | NaN | NaN | NaN | NaN | NaN |
| resetActivationAfter | time | Resets the trigger state after the specifed tag, after that, the action can be activated again | NaN | NaN | NaN | NaN | NaN |
| allToActivate | bool | Activates this trigger if all other linked triggers before this are already active | NaN | NaN | NaN | NaN | NaN |

## Team Reference
| Teams | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Affiliation | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| In the games, multiple team fight against each other either independently or in a certain set of groups. Every team has their own color that also reflects on how their colors appear in game and on the minimap. | NaN | NaN | NaN | NaN | NaN | If skirmishes happen between multiple groups, belligerents will belong to their own affiliation, which acts as a form of super group. If the team-color rendering setting is not set in the client settings, the minimap will show the affiliation colors instead of team color blips. If it is set, only the hint colors are affected. | NaN | NaN | NaN |
| In modding, the game allows units to change team on the fly through various means. Familiarity with the team IDs is necessary. Team color rendering is also affected by the hue settings in the graphics section. | NaN | NaN | NaN | NaN | NaN | In modding, affiliations are also taken in consideration through self.teamName() logical function, and various unit census logics. | NaN | NaN | NaN |
| ID | In Game Number | Color/Team | Default Hex Code (preferences.ini) | Notes | NaN | Affiliation | Minimap/Hint Color | NaN | Notes |
| -2 | NaN | Aggressive Neutral | NaN | Hostile to everyone, except to itself | NaN | Aggressive Neutral | Black | NaN | Hostile to everyone, except to itself |
| -1 | NaN | Passive Neutral | NaN | Usually can be captured by everyone. Does not attack on their own. | NaN | Passive Neutral | White | NaN | Usually can be captured by everyone. Does not attack on their own. |
| 0 | 1 | Green | #00ff00 | NaN | NaN | Player | Green | NaN | NaN |
| 1 | 2 | Red | #d02013 | NaN | NaN | Ally | Yellow | NaN | Does not get affected by any friendly-fire damage at all |
| 2 | 3 | Blue | #0463f3 | NaN | NaN | Enemy | Red | NaN | NaN |
| 3 | 4 | Yellow | #ffff40 | NaN | NaN | NaN | NaN | NaN | NaN |
| 4 | 5 | Cyan | #00ffff | NaN | NaN | NaN | NaN | NaN | NaN |
| 5 | 6 | White | #d0f8f7 | NaN | NaN | NaN | NaN | NaN | NaN |
| 6 | 7 | Black | #000000 | NaN | NaN | NaN | NaN | NaN | NaN |
| 7 | 8 | Pink | #ff00ea | NaN | NaN | NaN | NaN | NaN | NaN |
| 8 | 9 | Orange | #ff7f18 | NaN | NaN | NaN | NaN | NaN | NaN |
| 9 | 10 | Purple | #9368c4 | NaN | NaN | NaN | NaN | NaN | NaN |

## 1.15_out_of_date
| Unnamed: 0 | Unnamed: 1 | Unnamed: 2 | [core] | https://docs.google.com/spreadsheets/d/1aeP3pUic0IutZlgGix\_cM8xR7LEH44gS4itAxETK954/edit?userstoinvite=sadoldporygon24%40gmail.com&ts=5f49ec37&actionButton=1#gid=890975357&range=A4 | Unnamed: 5 |
| --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | [canBuild] | https://docs.google.com/spreadsheets/d/1aeP3pUic0IutZlgGix\_cM8xR7LEH44gS4itAxETK954/edit?userstoinvite=sadoldporygon24%40gmail.com&ts=5f49ec37&actionButton=1#gid=890975357&range=A167 | NaN |
| NaN | NaN | NaN | [graphics] | https://docs.google.com/spreadsheets/d/1aeP3pUic0IutZlgGix\_cM8xR7LEH44gS4itAxETK954/edit?userstoinvite=sadoldporygon24%40gmail.com&ts=5f49ec37&actionButton=1#gid=890975357&range=A186 | NaN |
| Version | Section | NaN | [core] | NaN | NaN |
| Added | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code, will cause error if these are not included | NaN | NaN |
| NaN | NaN | NaN | name: | NaN | NaN |
| NaN | NaN | NaN | mass: | NaN | NaN |
| NaN | NaN | NaN | radius: | NaN | NaN |
| NaN | NaN | NaN | price: | NaN | NaN |
| NaN | NaN | NaN | maxHp: | NaN | NaN |
| NaN | #==== | #==== | Common Keys | NaN | NaN |
| NaN | name: | string | Defines the unit raw name, game uses it to identify as a unique name. (This is not displayed in-game) | name: customTank1 | NaN |
| NaN | altNames: | string(s) | Comma separated list of names. Like name but lower priority, useful for multiple optional mods. | altNames: custTank1, customTank1, cTank1 | NaN |
| NaN | class: | string | Reserved for future use, must be CustomUnitMetadata by default. | class: CustomUnitMetadata | NaN |
| 1.13.3 | strictLevel: | float | Defaults to 0. 1 = Errors if keys are duplicated. Add to "all-units.template" in root to apply to all units. | strictLevel: 1 | NaN |
| NaN | price: | price | The unit cost from builders/buildings. | price: 500 | NaN |
| NaN | mass: | int | The 'weight' of the unit, defines how it collides with other units, a greater value means it's tougher to push. | mass: 3000 | NaN |
| NaN | techLevel: | int | Defines the Tech Level of the unit, there're 3 levels and each will appear in a different color in the GUI. | techLevel: 1 | NaN |
| NaN | buildSpeed: | float / s | Time it takes to build the unit. (may multiply with builder speed) | buildSpeed: 3s | NaN |
| NaN | radius: | int | Circular area around the unit that makes it selectable. (mouse click/screen touch) | radius: 20 | NaN |
| NaN | isBio: | bool | Choose whether the unit is bioligical or not, affects sound and splat (unless hideScorchMark:true) | isBio: true | NaN |
| NaN | isBug: | bool | Changes some death defaults, and sort order in Sandbox. | isBug: false | NaN |
| 1.13 | isBuilder: | bool | Normally required if this unit places buildings. Defaults to [ai]useAsBuilder. | isBuilder: true | NaN |
| 1.15 | streamingCost | price | Like price but paid for overtime while this unit is being queued or built. Construction or queue is paused if resources run out while building. | NaN | NaN |
| 1.15 | switchPriceWithStreamingCost | bool | Shortcut to set streamingCost to price value and clear price, add to all-units.template to quickly switch a mod over to streaming resources. | NaN | NaN |
| NaN | #==== | #==== | Unit Stats Keys | NaN | NaN |
| NaN | maxHp: | int | The max health for the unit. (will spawn with this value) | maxHp: 200 | NaN |
| NaN | selfRegenRate: | float | Passive self repair rate. | selfRegenRate: 0.01 | NaN |
| NaN | maxShield: | int | The max shield hitpoints of the unit. Can start with 0 hitpoints if startShieldAtZero:true. | maxShield: 500 | NaN |
| NaN | startShieldAtZero: | bool | Unit starts with a 0 hitpoints shield on created if true. | startShieldAtZero: true | NaN |
| NaN | shieldRegen: | float | Passive shield regen rate. | shieldRegen: 0.15 | NaN |
| NaN | energyMax: | float | Defaults to 0. Energy that can be used as ammo for turrets, laser defense and actions. | energyMax: 1 | NaN |
| NaN | energyRegen: | float | Passive energy regen rate. | energyRegen: 0.001 | NaN |
| NaN | energyStartingPercentage: | float | Sets the percentage of charged energy when the unit is first built. | energyStartingPercentage: 0.5 | NaN |
| NaN | energyNeedsToRechargeToFull: | float | Disables weapons using energy after reaching zero till fully recharged if true. | energyNeedsToRechargeToFull: true | NaN |
| NaN | energyRegenWhenRecharging | float | Regen rate while recharging. | NaN | NaN |
| NaN | energyDisplayName | string | Unused, no effect. | NaN | NaN |
| 1.13 | armour: | int | Damage taken away from each hit. (not currently used in any vanilla units) | armour: 6 | NaN |
| 1.13 | armourMinDamageToKeep: | int | Min damage to keep from received damage. Defaults to 1. | armourMinDamageToKeep: 2 | NaN |
| 1.13.3 | borrowResourcesWhileAlive: | price | Takes these resources when created and returns them when removed or destroyed. | borrowResourcesWhileAlive: gold=10 | NaN |
| 1.13.3 | generation\_resources: | price | Income unit creates. (custom resource version) | generation\_resources: credits=5, gold=20 | NaN |
| 1.13.3 | generation\_active: | logicBoolean | Disables generation\_resources/credits when false. (logic\_boolean) | generation\_active: if not self.hp(lessThan=100) | NaN |
| NaN | generation\_credits: | int | Income unit creates. (credits only) | generation\_credits: 2 | NaN |
| NaN | generation\_delay: | int | How often generation\_resources/credits is added. Defaults to 40. (changing not recommended) | generation\_delay: 40 | NaN |
| NaN | #==== | #==== | UI and Graphics Keys | NaN | NaN |
| NaN | showInEditor: | bool | Set to false to hide unit in Sandbox editor. (Defaults to true) | showInEditor: false | NaN |
| NaN | displayText: | LocaleString | The unit name that the game shows to the player. | displayText: Custom Tank | NaN |
| 1.13 | displayText\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayText\_es: Tanque Personalizado | NaN |
| NaN | displayDescription: | LocaleString | Unit description that the game shows to the player. | displayDescription: -Fast movement\n-Light damage | NaN |
| 1.13 | displayDescription\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | displayDescription\_es: -Movimiento rápido\n-Daño ligero | NaN |
| NaN | displayLocaleKey: | string | Translation file key for unit name and description. | displayLocaleKey: units.mechArtillery | NaN |
| NaN | displayRadius: | int | Defaults to radius value. Set to show a larger or smaller selection circle UI on units. | displayRadius: 20 | NaN |
| NaN | uiTargetRadius | int | Defaults to displayRadius value. Radius used when attacking/reclaiming/etc this unit | NaN | NaN |
| NaN | shieldRenderRadius: | int | Defaults is a little bigger than radius. Set to show a larger or smaller shield circle on units. | shieldRenderRadius: 12 | NaN |
| NaN | shieldDisplayOnlyDeflection: | bool | Hide shield unless deflecting shot if true. | shieldDisplayOnlyDeflection: true | NaN |
| NaN | shieldDeflectionDisplayRate: | float | Defaults to 4. High value causes shield deflection to fade disappear faster. | shieldDeflectionDisplayRate: 3 | NaN |
| 1.13.3 | showOnMinimap: | bool | Defaults to true. Hide units on minimap if false. | showOnMinimap: false | NaN |
| 1.13.3 | showActionsWithMixedSelectionIfOtherUnitsHaveTag: | bool | Shows a merged action list if all units selected includes one of these tags. Useful for converted units. | showActionsWithMixedSelectionIfOtherUnitsHaveTag: true | NaN |
| 1.14 | showOnMinimapToEnemies | bool | Useful for stealth units | NaN | NaN |
| NaN | #==== | #==== | Building Only Keys | NaN | NaN |
| NaN | isBuilding: | bool | Defines if the unit is a building. | isBuilding: true | NaN |
| NaN | footprint: | ints | Left, up, right, down. Tiles taken up which block unit movement. Defaults to 0,0,0,0 = 1 center tile. | footprint: 0,0,1,1 | NaN |
| NaN | constructionFootprint: | ints | Tiles taken up for placement of other buildings. Defaults to 0,0,0,0 = 1 center tile. | constructionFootprint: -1,-1,1,3 | NaN |
| NaN | displayFootprint: | ints | Left, up, right, down. Only applies to buildings, just used for GUI. Defaults to footprint. | displayFootprint: 0,0,1,1 | NaN |
| NaN | buildingSelectionOffset: | int | Defaults to 0. Adds or removes padding on the drawn selection rect in UI. | buildingSelectionOffset: 4 | NaN |
| NaN | buildingToFootprintOffsetX: | float | Defaults to 10. Change the building position in the footprint on the X-axis. | buildingToFootprintOffsetX: 4 | NaN |
| NaN | buildingToFootprintOffsetY: | float | Defaults to 10. Change the building position in the footprint on the Y-axis. | buildingToFootprintOffsetY: 6 | NaN |
| NaN | placeOnlyOnResPool: | bool | Normally used for extractors, forces building construction in a resource pool. | placeOnlyOnResPool: true | NaN |
| NaN | selfBuildRate: | float | Rate unit builds itself when placed without a builder. | selfBuildRate: 0.0008 | NaN |
| 1.14 | ignoreInUnitCapCalculation | NaN | defaults to true for buildings otherwise false. Set to true to not count this unit in unit cap. | NaN | NaN |
| NaN | #==== | #==== | Misc Keys | NaN | NaN |
| NaN | copyFrom: | file(s) (ini) | Uses unit data from another ini file as default for this unit, supports multiple files. | copyFrom: ROOT:defaultTanks.template, tankT1.ini | NaN |
| NaN | dont\_load: | bool | Do not load unit, and don't error on missing data. Can be useful when used with copyFrom. | dont\_load: true | NaN |
| NaN | overrideAndReplace: | string(s) | Overrides another unit with this unit. Build links and map positions to target unit will be replaced. | overrideAndReplace: builder, combatEngineer | NaN |
| 1.13.3 | onNewMapSpawn: | string | Values: emptyResourcePools\_asNeutral, emptyOrOccupiedResourcePools\_asNeutral, mapCenter\_asNeutral, mapCenter\_eachActiveTeam, spawnPoint\_eachActiveTeam | NaN | NaN |
| NaN | globalScale: | float | Defaults to 1. Changing not recommended. | globalScale: 2 | NaN |
| NaN | isLocked: | bool | Disallow building of this unit. Can be used with overrideAndReplace to restrict units player can build. | isLocked: true | NaN |
| 1.13 | isLockedIfGameModeNoNuke: | bool | Disallows building of this unit if nukes are disabled during match setup. | isLockedIfGameModeNoNuke: true | NaN |
| NaN | experimental: | bool | Tag unit as experimental. Affects zoomed out icon and end game stats. | experimental: true | NaN |
| NaN | stayNeutral: | bool | Set to false to disable capture when unit is on the neutral team. | stayNeutral: false | NaN |
| 1.13 | createNeutral: | bool | Set to true to always spawn the unit on the neutral team. | createNeutral: true | NaN |
| NaN | createOnAggressiveTeam: | bool | Set to true to always spawn the unit on aggressive teams on single player matches. | createOnAggressiveTeam: true | NaN |
| 1.13 | tags: | string(s) | List of comma separated strings. Used to classify units, create special actions and balances. | tags: tank, smallTank, piercingDamage | NaN |
| NaN | fogOfWarSightRange: | int | Sets number of tiles this unit can see through the fog of war. Defaults to 15. | fogOfWarSightRange: 18 | NaN |
| 1.14 | fogOfWarSightRangeWhileNotBuilt | int | Fog of War range when unit/building is incomplete. Defaults to fogOfWarSightRange | NaN | NaN |
| NaN | softCollisionOnAll: | int | Creates a soft collision effect when touching other units. | softCollisionOnAll: 3 | NaN |
| NaN | disableAllUnitCollisions: | bool | Unit cannot collide with others if true. | disableAllUnitCollisions: true | NaN |
| 1.13 | isUnrepairableUnit: | bool | No unit can repair this unit if true. | isUnrepairableUnit: true | NaN |
| NaN | isUnselectable: | bool | If true unit cannot be selected. (includes AI players) | isUnselectable: true | NaN |
| 1.14 | isUnselectableAsTarget | bool | Defaults to isUnselectable. Can be used to create units that cannot be selected but can be targeted for attack, reclaim, etc | NaN | NaN |
| 1.13 | isPickableStartingUnit: | bool | If true, unit is added to dropdowns for starting unit in game setup menus. | isPickableStartingUnit: true | NaN |
| 1.13 | startFallingWhenStartingUnit: | bool | Unit will appear falling from skies when starting unit if true. | startFallingWhenStartingUnit: true | NaN |
| NaN | soundOnAttackOrder: | sound(s) | List of sound names. Only one will be played on each attack order. Only .ogg and .wav formats. | soundOnAttackOrder: tankAttackOrder1.ogg, tankAttackOrder2.ogg | NaN |
| NaN | soundOnMoveOrder: | sound(s) | List of sound names. Only one will be played on each move order. Only .ogg and .wav formats. | soundOnMoveOrder: tankMoveOrder1.ogg, tankMoveOrder2.ogg | NaN |
| 1.13.3 | soundOnNewSelection: | sound(s) | List of sound names. Only one will be played on each unit selection. Only .ogg and .wav formats. | soundOnNewSelection: tankSelection1.ogg, tankSelection2.ogg | NaN |
| NaN | canNotBeDirectlyAttacked: | bool | No unit can directly target this unit. If true this will also skip this unit in victory/defeat checks. | canNotBeDirectlyAttacked: true | NaN |
| NaN | canNotBeDamaged | bool | Defaults to value of canNotBeDirectlyAttacked (be careful setting this without canNotBeDirectlyAttacked, as AI will attack forever) | NaN | NaN |
| 1.13.3 | canNotBeGivenOrdersByPlayer: | bool | If true unit will not take player or AI orders. | canNotBeGivenOrdersByPlayer: true | NaN |
| 1.13.3 | canOnlyBeAttackedByUnitsWithTags: | strings(s) | List of tag strings, only units with these tags can directly target this unit. | canOnlyBeAttackedByUnitsWithTags: piercingTank, powerfulTank | NaN |
| 1.14 | disableDeathOnZeroHp | bool | Setting to true allows unit to continue living even at 0 HP, useful for custom "death" action. Warning: If not used with an autoTrigger, etc units will attack this unit forever. | NaN | NaN |
| NaN | #==== | #==== | Transport Keys | NaN | NaN |
| 1.13 | transportSlotsNeeded: | int | Defaults to 1. Number of slots this unit uses up in a transport, experimentals are often set to 5. | transportSlotsNeeded: 2 | NaN |
| NaN | maxTransportingUnits | int | Number of slots this units has for transporting other units. | maxTransportingUnits: 5 | NaN |
| 1.13 | transportUnitsRequireTag: | string(s) | Only allows trasport of units that have one of these tags. | transportUnitsRequireTag: smallTank, soldier | NaN |
| 1.13 | transportUnitsRequireMovementType: | movementTypes | Only allows trasport of units that have one of these movement types. | transportUnitsRequireMovementType: AIR, WATER | NaN |
| 1.13 | transportUnitsBlockAirAndWaterUnits: | bool | Defaults to true. This unit can only transport LAND units if true. | transportUnitsBlockAirAndWaterUnits: false | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13 | transportUnitsKeepBuiltUnits: | bool | Makes built units stay inside transport instead of exiting it once ready if true. | transportUnitsKeepBuiltUnits: true | NaN |
| 1.13 | transportUnitsCanUnloadUnits: | LogicBoolean | Defaults to: if not self.isOverLiquid() and not self.isMoving(). This unit cannot unload units if false. | transportUnitsCanUnloadUnits: false | NaN |
| 1.13 | transportUnitsAddUnloadOption: | bool | Defines if unload button should be added to the unit menu | transportUnitsAddUnloadOption: false | NaN |
| 1.13.3 | transportUnitsUnloadDelayBetweenEachUnit: | float | Changes the delay it takes between each unit getting unloaded. | transportUnitsUnloadDelayBetweenEachUnit: 12 | NaN |
| 1.13 | transportUnitsKillOnDeath: | LogicBoolean | Defaults to true. If false transported units don't die when transport dies. | transportUnitsKillOnDeath: if self.isOverLiquid() | NaN |
| 1.13 | transportUnitsHealBy: | float | Rate to heal units that are being transported. | transportUnitsHealBy: 0.1 | NaN |
| NaN | transportUnitsBlockOtherTransports: | bool | Defaults to true, if false this transports can hold other transports. | transportUnitsBlockOtherTransports: false | NaN |
| 1.13.3 | whileNeutralTransportAnyTeam: | bool | This unit can transport units of any team while neutral if true. | whileNeutralTransportAnyTeam: true | NaN |
| 1.13.3 | whileNeutralConvertToTransportedTeam: | bool | Converts this unit to transported team while neutral. Useful with whileNeutralTransportAnyTeam. | whileNeutralConvertToTransportedTeam: true | NaN |
| 1.13.3 | convertToNeutralIfNotTransporting: | bool | Reverts back this unit to neutral when unloaded. Useful with whileNeutralTransportAnyTeam. | convertToNeutralIfNotTransporting: true | NaN |
| 1.13.3 | transportUnitsOnTeamChangeKeepCurrentTeam: | bool | Keeps transported units on their orginal team when this unit is converted if true. | transportUnitsOnTeamChangeKeepCurrentTeam: true | NaN |
| NaN | transportUnitsEachUnitAlwaysUsesSingleSlot | bool | Ignore transportSlotsNeeded on transported units. | NaN | NaN |
| NaN | transportUnitsKeepWaypoints | LogicBoolean | Default false. When true transported units keep their original waypoints when unloading, and don't get an unload waypoint. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | #==== | #==== | Resource Node Keys | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | resourceRate: | float | Used with canReclaimResources. Allows other teams to reclaim this unit. Normally used with neutral team. Use price to set what resources are gained. | NaN | NaN |
| NaN | similarResourcesHaveTag: | string(s) | When this has been reclaimed harvester unit moves on to another resource with these tags. | similarResourcesHaveTag: goldResource | NaN |
| 1.13.3 | resourceMaxConcurrentReclaimingThis: | int | Defaults to unlimited. Set to restict how many units can reclaim this resource at the same time. | resourceMaxConcurrentReclaimingThis: 3 | NaN |
| 1.13.3 | reclaimPrice: | int | Like price but for resources. Useful for buildable resources. | reclaimPrice: gold=1000 | NaN |
| 1.13.3 | #==== | #==== | Resource Harvester Keys | NaN | NaN |
| NaN | canReclaimResources: | bool | If true this unit can gather resources, useful with resourceRate. | canReclaimResources: true | NaN |
| NaN | canReclaimResourcesNextSearchRange: | int | Defines the resource search range of this unit when its main gathered resource runs out. | canReclaimResourcesNextSearchRange: 100 | NaN |
| NaN | canReclaimResourcesOnlyWithTags: | string(s) | This unit is only allowed to gather resources with these tags. | canReclaimResourcesOnlyWithTags: foodResource, goldResource | NaN |
| NaN | canReclaimUnitsOnlyWithTags | string(s) | This is for reclaiming units, not for resources. See canReclaimResourcesOnlyWithTags | NaN | NaN |
| NaN | #==== | #==== | Construction and Factory Keys | NaN | NaN |
| NaN | canRepairUnitsOnlyWithTags | string(s) | NaN | NaN | NaN |
| NaN | canRepairBuildings: | bool | Can this can heal ally buildings (isBuilder:true is required) | canRepairBuildings: true | NaN |
| NaN | canRepairUnits: | bool | Can this can heal ally units. (isBuilder:true is required), canRepairBuildings required for buildings. | canRepairUnits: true | NaN |
| NaN | autoRepair: | bool | Automatically try and repair damaged units in nano range. (isBuilder:true is required) | autoRepair: true | NaN |
| NaN | nanoRange: | int | Defaults to 85. Defines the unit building/repair/reclaim range. | nanoRange: 110 | NaN |
| NaN | nanoRepairSpeed: | float | Defaults to 0.2. Defines the unit nano repair/reclaim speed. | nanoRepairSpeed: 0.01 | NaN |
| NaN | nanoBuildSpeed: | float | Defaults to 1. Defines the unit nano building speed. (May multiply with target's buildSpeed) | nanoBuildSpeed: 0.9 | NaN |
| 1.13.3 | nanoRangeForRepairIsMelee: | bool | Defines if this unit must touch its target to repair it. | nanoRangeForRepairIsMelee: true | NaN |
| 1.13.3 | nanoRangeForReclaimIsMelee: | bool | Defines if this unit must touch its target to reclaim it. | nanoRangeForReclaimIsMelee: true | NaN |
| 1.13.3 | nanoRangeForRepair: | int | Defines a specific range for the repair action of this unit. | nanoRangeForRepair: 60 | NaN |
| 1.13.3 | nanoRangeForReclaim: | int | Defines a specific range for the reclaim action of this unit. | nanoRangeForReclaim: 60 | NaN |
| NaN | nanoFactorySpeed: | float | Defaults to 1. Multiplies the buildSpeed value of the created unit if this unit is a factory. | nanoFactorySpeed: 1.2 | NaN |
| NaN | extraBuildRangeWhenBuildingThis: | int | Temporarily adds extra build range to builders to build this unit. Useful for water based buildings. | extraBuildRangeWhenBuildingThis: 90 | NaN |
| NaN | builtFrom\_#\_name: | string(s) | Useful if adding this unit to build to existing buildings. Like canBuild but in opposite direction. | builtFrom\_1\_name: landFactory, airFactory | NaN |
| NaN | builtFrom\_#\_pos: | float | Order this build link appears in UI. Using canBuild instead is more recommended. | builtFrom\_1\_pos: 0.1 | NaN |
| NaN | builtFrom\_#\_forceNano: | bool | Build as if this is a building if true. (even if it's a unit) | builtFrom\_1\_forceNano: true | NaN |
| 1.13.3 | builtFrom\_#\_isLocked: | LogicBoolean | If true this unit cannot be built in this build link. (can be conditioned if logicBooleans are used) | builtFrom\_1\_isLocked: if self.hp(lessThan=100) | NaN |
| 1.13.3 | builtFrom\_#\_isLockedMessage: | LocaleString | Message shown when this build link is locked. | builtFrom\_1\_isLockedMessage: -Needs more population | NaN |
| NaN | exit\_x: | float | Where created or unloaded units appears from the transport or building. Defaults to 0. | exit\_x: 0 | NaN |
| NaN | exit\_y: | float | Where created or unloaded units appears from the transport or building. Defaults to 5. | exit\_x: 5 | NaN |
| 1.13 | exit\_dirOffset: | float | Defaults to 180 for units and 0 for buildings. Defines the exit direction of created or unloaded units. | exit\_dirOffset: 140 | NaN |
| 1.13 | exit\_heightOffset: | float | Defaults to 0. Defines the height where created or unloaded units appears. | exit\_heightOffset: 16 | NaN |
| 1.13 | exit\_moveAwayAmount: | float | Defaults to 70. Defines the distance that created or unloaded units moves from this unit. | exit\_moveAwayAmount: 10 | NaN |
| 1.14 | exitHeightIgnoreParent | bool | Ignores parent height for exit height; useful for separating attachments with their parents for building | NaN | NaN |
| NaN | #==== | #==== | Death Keys | NaN | NaN |
| NaN | dieOnConstruct: | bool | Deletes this unit when it starts to build if true. (target building/unit likely will need selfBuildRate set) | dieOnConstruct: true | NaN |
| 1.13 | dieOnZeroEnergy: | bool | Kills this unit if energy level reaches zero when true. | dieOnZeroEnergy: true | NaN |
| NaN | numBitsOnDeath: | int | Defines the number of scattered bit fragments when this unit dies. | numBitsOnDeath: 20 | NaN |
| NaN | nukeOnDeath: | bool | Unit will spawn a nuke detonation built-in effect when dies if true. | nukeOnDeath: true | NaN |
| NaN | nukeOnDeathRange: | float | Defines the nuke effect range when using nukeOnDeath. | nukeOnDeathRange: 140 | NaN |
| NaN | nukeOnDeathDamage: | float | Defines the nuke effect area damage when using nukeOnDeath. | nukeOnDeathDamage: 2000 | NaN |
| NaN | nukeOnDeathDisableWhenNoNuke: | bool | Defaults to false. If true this unit will not explode with nuke when nukes are disabled in skirmish maps. | nukeOnDeathDisableWhenNoNuke: true | NaN |
| NaN | fireTurretXAtSelfOnDeath: | turret ref | Auto-shoot a specific turret when this unit dies. | fireTurretXAtSelfOnDeath: turret\_1 | NaN |
| 1.13 | explodeOnDeath: | bool | Defaults to true. Disables the unit death explode built-in effect if false. | explodeOnDeath: false | NaN |
| 1.13 | explodeOnDeathGroundCollision: | boolean | Defaults to true. Disables the explode built-in effect on death when unit touches ground if false. | explodeOnDeathGroundCollision: false | NaN |
| 1.14 | explodeTypeOnDeath: | preset effects | options: verysmall, small, normal, large, largeUnit, building, buildingNoShockwaveOrSmoke, verylargeBuilding | NaN | NaN |
| 1.13 | effectOnDeath: | effect(s) ref | Spawns built-in or custom effects when unit dies. | effectOnDeath: shockwave, CUSTOM:pieces\*3, CUSTOM:deathSound | NaN |
| 1.13 | effectOnDeathGroundCollision: | effect(s) ref | Like effectOnDeath but when unit touches ground. Useful for flying units. | effectOnDeathGroundCollision: CUSTOM:bigExplosion | NaN |
| 1.13 | unitsSpawnedOnDeath: | string(s) | Spawns these units when dies. Comma separated unit identifiers. | unitsSpawnedOnDeath: tank\*5, hoverTank | NaN |
| NaN | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: | bool | Units spawned on death will appear on the last attacker team if true. | unitsSpawnedOnDeath\_setToTeamOfLastAttacker: true | NaN |
| NaN | hideScorchMark: | bool | Disables the death scorch mark leaved when unit dies if true. | hideScorchMark: true | NaN |
| NaN | soundOnDeath: | string(s) | Sets a custom sound for this unit death. | soundOnDeath: tankExplosion1.ogg, tankExplosion2.ogg | NaN |
| NaN | fireOnDeath | bool? | NaN | NaN | NaN |
| 1.14 | effectOnDeathIfUnbuilt: | effect(s) ref | If the unit was not completed, and is destroyed, play this effect. Defaults to effectOnDeath | effectOnDeathIfUnbuilt: CUSTOM:implode | NaN |
| NaN | #==== | #==== | Action Keys | NaN | NaN |
| 1.13.3 | autoTriggerCooldownTime: | time (seconds) | Post automatic action cooldown (Not detection cooldown). Defaults to 1s. Warning: Setting this too low for many units might effect performance depending on the action effects. | NaN | NaN |
| NaN | autoTriggerCooldownTime\_allowDangerousHighCPU: | bool | Allows for auto actool cooldown lower than 0.2s. Default to false. | NaN | NaN |
| NaN | #==== | #==== | Deprecated Keys (can be used but there are better ways) | NaN | NaN |
| depr. 1.13 | action\_#\_convertTo: | string | Deprecated in 1.13, use [action\_x] sections instead | action\_1\_convertTo: customTank\_2 | NaN |
| depr. 1.13 | action\_#\_pos: | float | Order action appears in UI | action\_1\_pos: 0.1 | NaN |
| depr. 1.13 | action\_#\_price: | int | The price of your action for the unit. (All your sub actions will be linked to the # you use) | action\_1\_price: 1000 | NaN |
| depr. 1.13 | action\_#\_text: | string | A display text when you select your unit's action, used to explain it's purpose. | action\_1\_text: Upgrade to Custom Tank 2 | NaN |
| depr. 1.13 | action\_#\_description: | string | The action description. | action\_1\_description: -Converts the tank | NaN |
| depr. 1.13 | action\_#\_addEnergy: | float | Adds energy to unit. Has no effect unless energyMax is set | action\_1\_addEnergy: 10 | NaN |
| depr. 1.13 | action\_#\_whenBuilding\_cannotMove: | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | action\_1\_whenBuilding\_cannotMove: true | NaN |
| depr. 1.13 | canBuild\_#\_name/pos/isLocked: | string | Use canBuild section instead. | canBuild\_1\_name: tank | NaN |
| NaN | Section | NaN | [canBuild\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | name: | string(s) | List of unit identifiers this unit can create. Can be buildings or units. Add "setRally" to create a rally button | name: setRally, tank, hoverTank, heavyTank | NaN |
| 1.13.3 | pos: | float | Order build link appears in this unit UI. | pos: 0.1 | NaN |
| 1.13.3 | tech: | int | Tech level. Mostly just affects build link colour in this unit UI. Defaults to 1. | tech: 2 | NaN |
| 1.13.3 | forceNano: | bool | Builds target as if it was a building if true. (even if it's a unit) | forceNano: true | NaN |
| 1.13.3 | isVisible: | LogicBoolean | Hide this build link if true in this unit UI. | isVisible: if not self.energy(greaterThan=100) | NaN |
| 1.13.3 | isLocked: | LogicBoolean | Dynamically locks this build option and shows isLockedMessage if true. | isLocked: if self.hp(lessThan=100) | NaN |
| 1.13.3 | isLockedMessage: | string | Set to tell to players why a unit is locked. | isLockedMessage: -Needs 2 Barracks | NaN |
| 1.13.3 | isLockedMessage\_{LANG}: | string | LANG = ISO 639-1 Code to show this text instead when game is in this language. | isLockedMessage\_es: -Necesita 2 Cuarteles | NaN |
| 1.13.3 | isLockedAlt: | LogicBoolean | Another reason for this to be locked. Just allows a different message to be shown. | isLockedAlt: if self.energy(greaterThan=90) | NaN |
| 1.13.3 | isLockedAltMessage: | string | Message for isLockedAlt. | isLockedAltMessage: -Needs less energy | NaN |
| 1.13.3 | isLockedAlt2: | LogicBoolean | Like isLockedAlt but to show one more message. | isLockedAlt2: if self.isMoving() | NaN |
| 1.13.3 | isLockedAlt2Message: | string | Message for isLockedAlt2. | isLockedAlt2Message: -Needs to be quiet | NaN |
| 1.13.3 | addResources: | price(s) | Adds these resources to self when placing the building or producing the unit. | addResources: ammo=5, setFlag=1 | NaN |
| 1.13.3 | price: | price(s) | Overrides builded units/buildings price. Defaults to target unit prices. | price: credits=1000, ammo=5 | NaN |
| 1.13.3 | isGuiBlinking: | LogicBoolean | Generates a blinking effect in UI if true. | isGuiBlinking: true | NaN |
| NaN | Section | NaN | [graphics] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary code | NaN | NaN |
| NaN | NaN | file (image) | image: | NaN | NaN |
| NaN | #==== | NaN | Common Keys | NaN | NaN |
| NaN | image: | file (image) | File path to png image. | NaN | NaN |
| NaN | image\_back: | file (image) | An optional image drawn behind other units. Useful for factories that units exit | NaN | NaN |
| 1.14 | image\_shield | file (image) | Image to show as a custom shield | NaN | NaN |
| NaN | image\_wreak: | file (image) | Image to use when unit dies. Can be NONE to leave no wreak | NaN | NaN |
| NaN | image\_offsetX: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN | NaN |
| NaN | image\_offsetY: | int | Use this to adjust the graphics of a unit if it is too far off one side | NaN | NaN |
| 1.13.3 | isVisible | logic | If false will hide the unit. | NaN | NaN |
| 1.14 | isVisibleToEnemies | bool | Only visible to player and allies when false. Recommend with showOnMinimapToEnemies. Useful for stealth units. | NaN | NaN |
| 1.13 | teamColoringMode | NaN | How pixels are used for team coloring, options: pureGreen (default), hueAdd, hueShift, disabled | NaN | NaN |
| NaN | teamColorsUseHue: | bool | False: Green pixels on unit gets converted to team color. True: Whole unit is tinted the team colour. Defaults to false | NaN | NaN |
| NaN | scaleImagesTo: | float | Resize image to fit this value in pixels. Effects leg, and shadow images as well. | NaN | NaN |
| NaN | imageScale: | float | Resize image. Defaults to 1. Effects leg, and shadow images as well. | NaN | NaN |
| NaN | drawLayer: | string | Land units normally default to ground or ground2 if transport. | wreaks, underwater, bottom, ground, ground2, experimentals, air, top | NaN |
| 1.13 | whenBeingBuiltMakeTransparentTill | float | How long the transparent effect is applied to incomplete units, set to 0 to disable completely | Default: 1 | NaN |
| NaN | icon\_zoomed\_out | file (image) | NaN | NaN | NaN |
| NaN | icon\_zoomed\_out\_neverShow | bool | NaN | NaN | NaN |
| NaN | icon\_build | file (image) | When set, it will use the specifed image on build list instead of the unit itself | NaN | NaN |
| NaN | #==== | NaN | Turrets (images can also be set on each turret) | NaN | NaN |
| NaN | image\_turret: | file (image) | Default image for all turrets, can also be set per turret | NaN | NaN |
| NaN | teamColorsOnTurret | bool | Defaults false. Apply team colours on turret as well. Also effects pre-turret images | NaN | NaN |
| NaN | scaleTurretImagesTo: | float | Will cause crash if image\_turret is not specified, even if image is set per turret | NaN | NaN |
| NaN | lock\_body\_rotation\_with\_main\_turret: | bool | Locks body image locked to first turret's direction | NaN | NaN |
| 1.13 | lock\_leg\_rotation\_with\_main\_turret | bool | Locks legs and arms to first turret's direction | NaN | NaN |
| NaN | #==== | NaN | Shadow | NaN | NaN |
| NaN | image\_shadow: | file (image) | Image file, NONE, AUTO, or AUTO\_ANIMATED (AUTO will use image and make it transparent black only.) | NaN | NaN |
| NaN | shadowOffsetX: | float | NaN | NaN | NaN |
| NaN | shadowOffsetY: | float | NaN | NaN | NaN |
| 1.13.3 | image\_shadow\_frames | bool | If shadow image should use frame animation of main image | NaN | NaN |
| NaN | lock\_shadow\_rotation\_with\_main\_turret: | bool | Locks body image shadow locked to first turret's direction | NaN | NaN |
| NaN | #==== | NaN | Effects and animation | NaN | NaN |
| NaN | total\_frames | int | Defaults to 1. Animations require this. | NaN | NaN |
| NaN | default\_frame | int | Sets the default frame to display. Dependent on total\_frames. | NaN | NaN |
| NaN | frame\_width: | int | Calculated for you if total frames is set, but can be overridden | NaN | NaN |
| NaN | frame\_height: | int | Defaults to image height | NaN | NaN |
| NaN | splastEffect: | bool | True to create a water wave effect when over water. Default false | NaN | NaN |
| NaN | dustEffect: | bool | True to create a dust effect when over land. Default false | NaN | NaN |
| NaN | splastEffectReverse: | bool | True to also create effect when unit is reversing | NaN | NaN |
| NaN | dustEffectReverse: | bool | True to also create effect when unit is reversing | NaN | NaN |
| 1.13 | movementEffect | effect | Custom movement effect, can be anything | eg: movementEffect: smoke, CUSTOM:fastDust\*2, CUSTOM:pop\*5 | NaN |
| 1.13 | movementEffectReverse | effect | NaN | NaN | NaN |
| 1.13 | movementEffectRate | float | NaN | NaN | NaN |
| 1.13 | movementEffectReverseFlipEffects | bool | Create effect as if unit has rotated 180 when reversing | NaN | NaN |
| NaN | repairEffect | effect ref | Custom movement effect, can be anything. Replaces default effect from builders | NaN | NaN |
| NaN | repairEffectAtTarget | effect | NaN | NaN | NaN |
| NaN | repairEffectRate | int | Defaults to 5 | NaN | NaN |
| 1.13.3 | reclaimEffect | effect | NaN | NaN | NaN |
| 1.13.3 | reclaimEffectAtTarget | effect | NaN | NaN | NaN |
| 1.13.3 | reclaimEffectRate | int | NaN | NaN | NaN |
| NaN | rotate\_with\_direction: | bool | Defaults to true. Makes unit body image locked to 0 degrees when false. Often used with animation\_direction\_\* | NaN | NaN |
| NaN | animation\_direction\_units: | float | 45 for 8 directions, 90 for 4 direction animation. Used with rotate\_with\_direction:false | NaN | NaN |
| NaN | animation\_direction\_strideX: | int | Animation frames to offset on direction change. | NaN | NaN |
| NaN | animation\_direction\_strideY: | int | Animation frames to offset on direction change. Used with frame\_height. | NaN | NaN |
| NaN | animation\_direction\_starting: | float | Direction for first frame | NaN | NaN |
| NaN | animation\_direction\_useMainTurret | bool | Use main turret | NaN | NaN |
| 1.13.3 | disableLowHpFire | bool | NaN | NaN | NaN |
| 1.13.3 | disableLowHpSmoke | bool | NaN | NaN | NaN |
| 1.13.3 | showTransportBar: | bool | NaN | NaN | NaN |
| 1.13.3 | showHealthBar | bool | NaN | NaN | NaN |
| 1.13.3 | showEnergyBar | bool | NaN | NaN | NaN |
| 1.14 | showShieldBar | bool | NaN | NaN | NaN |
| 1.14 | showQueueBar | bool | NaN | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better, more adaptable ways) | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_start: | int | TYPE can be set to: attack, moving, idle. Use [animation] section instead for more control | animation\_moving\_start: 0 | NaN |
| depr. 1.13 | animation\_TYPE\_end: | int | End frame, must be larger then start | animation\_moving\_end: 3 | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_start: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_scale\_end: | float | Scale unit image. Defaults to 1. Useful for bio units or breathing effects. | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_speed: | float | Delay for each frame of animation. Larger values cause slower animation | NaN | NaN |
| depr. 1.13 | animation\_TYPE\_pingPong: | bool | Play animation in reverse before repeating. Useful with scale\_start/scale\_end | NaN | NaN |
| NaN | Section | NaN | [attack] | The attack section is for global attack characteristics, per-turret overrides these | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | canAttack: | bool | If set to false, can not attack any unit. Regards of other canAttack options below. | NaN | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | can also be narrowed per turret. Note: not required if canAttack is false. | NaN | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | can also be narrowed per turret | NaN | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | can also be narrowed per turret | NaN | NaN |
| NaN | maxAttackRange: | float | (multiplied by globalScale) | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. (can also be set per turret) | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | Will only attack units that has the specified tags. | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | Can only attack units without the specified tags. | NaN | NaN |
| 1.13 | turretMultiTargeting | bool | Allow each turrets to fire at a different target at the same time. Very useful if [turret]limitingAngle is used | NaN | NaN |
| NaN | isMelee: | bool | Used with a low attack range (like maxAttackRange: 9) makes src and target radius get added to range, and effects AI. | NaN | NaN |
| 1.13.3 | meleeEngangementDistance | int | Makes unit move to attack nearby units. Defaults to 250 for melee, and 0 for non melee (Works even if non-melee, but might be unexpected to players) | NaN | NaN |
| NaN | turretRotateWithBody | bool | Are all turrets rotated when body rotates. Defaults to true | NaN | NaN |
| NaN | attackMovement: | string | normal/bomber. bomber attack movement will retreat when energy runs out | NaN | NaN |
| NaN | dieOnAttack: | bool | Will die when it attacks. | NaN | NaN |
| NaN | removeOnAttack | bool | Remove unit when it attacks. | NaN | NaN |
| NaN | isFixedFiring: | bool | Must aim body at target to shoot. Will often make the unit need to stop before it can aim and shoot. | NaN | NaN |
| NaN | aimOffsetSpread: | float | Offset each shot multiplied by target radius. Defaults to 0.6 | aimOffsetSpread:0 will make unit always attack center | NaN |
| 1.13 | stopTargetingAfterFiring | bool | Unit stops targeting after firing a shot. Rarely used or needed. | NaN | NaN |
| NaN | disablePassiveTargeting: | bool | Unit only attacks manually ordered target. Rarely used or needed. | NaN | NaN |
| 1.13.3 | showRangeUIGuide | bool | Will it show the range indicator. Useful for showing ranges in radar and related structures. | NaN | NaN |
| NaN | setMainTurretAs | turret ref | Set main turret for lockLegRotationWithMainTurret, lockShadowRotationWithMainTurret, etc | NaN | NaN |
| 1.15 | shootDelayMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | NaN | NaN |
| 1.15 | shootDamageMultiplier | float | Defaults to 1. Can be dynamically changed with setUnitStats | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys - can be used but better to set these per turret | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| depr. 1.13 | turretSize: | float | (multiplied by globalScale) | NaN | NaN |
| depr. 1.13 | turretTurnSpeed: | float | NaN | NaN | NaN |
| depr. 1.13 | shootDelay: | float | Global delay, can also use delay on each turret | NaN | NaN |
| NaN | Section | NaN | [turret\_NAME] | Turrets fire projectiles with different traits | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code | NaN | NaN |
| NaN | NaN | float | x: | NaN | NaN |
| NaN | NaN | float | y: | NaN | NaN |
| NaN | NaN | NaN | Positioning/Stats | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | x: | float | NaN | NaN | NaN |
| NaN | y: | float | NaN | NaN | NaN |
| NaN | copyFrom: | turret ref | Copy all values from another turret as defaut values for this turret | copyFrom: 1 | NaN |
| NaN | projectile | projectile ref | Projectile fired from this turret. | eg: projectile: torpedo | NaN |
| 1.14 | altProjectile | projectile ref | Alternative projectile fired from this turret when altProjectileCondition is true | NaN | NaN |
| 1.14 | altProjectileCondition | LogicBoolean | Used with altProjectile | NaN | NaN |
| 1.13 | barrelX | float | Defaults to 0. Controls horizontal position for projectile spawn. | NaN | NaN |
| 1.13 | barrelY | float | Defaults to size. Note: size and barrelY have the same meaning | NaN | NaN |
| 1.13.3 | barrelHeight | float | Height of barrel in 3d. Effect projectile and shoot flame starting height | NaN | NaN |
| NaN | size: | float | Controls the distance between the center of the turret and the point from where projectiles spawn. | size: 5 | NaN |
| NaN | turnSpeed | float | Max turn speed of the turret | NaN | NaN |
| NaN | turnSpeedAcceleration | float | Defaults to disabled, and full turn speed is used. | NaN | NaN |
| NaN | turnSpeedDeceleration | float | Defaults to turnSpeedAcceleration. Setting this higher than turn acceleration might allow faster targets to be hit | NaN | NaN |
| NaN | idleDir | float | Defaults to 0 | NaN | NaN |
| 1.13 | idleDirReversing | float | Defaults to idleDir+180 unless attached to another turret (as attached turret will often be rotating when reversing) | NaN | NaN |
| NaN | shouldResetTurret: | bool | Defaults true. False to disable the reseting turret angle when idle | NaN | NaN |
| 1.14 | idleSweepAngle | int | Disabled by default. Controls how far the turret will "look" left and right | NaN | NaN |
| 1.14 | idleSweepDelay | float | Controls the delay between idleSweep movements | NaN | NaN |
| 1.14 | idleSweepSpeed | float | Controls the speed with which the turret sweeps when idle | NaN | NaN |
| 1.14 | idleSweepCondition | LogicBoolean | Disable idle sweep if false | NaN | NaN |
| 1.14 | idleSweepAddRandomDelay | float | Default 1-20 depends on idleSweepDelay, used to stop sweep syncing up with other units | NaN | NaN |
| 1.14 | idleSweepAddRandomAngle | int | Default 0 | NaN | NaN |
| NaN | attachedTo: | turret ref | Id of another turret to attach to, will be positioned relative to it, and rotate with it. | NaN | NaN |
| NaN | slave: | bool | Locks this turret's direction and shot cooldown to attached turret. Often used with warmup for multiple barrel guns | NaN | NaN |
| NaN | isMainNanoTurret: | bool | Defaults to false. Turret to use for creating buildings, etc. should only be true on one turret, and should have canShoot set to false | NaN | NaN |
| NaN | energyUsage: | float | Required energy to fire weapon. Same as resourceUsage: energy=X | NaN | NaN |
| NaN | resourceUsage | price | can be in credits/energy/hp/shield/ammo. Stops firing if not met | resourceUsage: credits=5, energy=5, hp=100, shield=5, ammo=1 | NaN |
| NaN | NaN | NaN | Timing | NaN | NaN |
| NaN | delay: | float | Override global shootDelay for this turret | NaN | NaN |
| NaN | linkDelayWithTurret | turret ref | When this other turret fires the cooldown delay on this turret will be reset/removed | NaN | NaN |
| NaN | warmup: | float | Delay before firing a shot. | NaN | NaN |
| NaN | warmupCallDownRate | float | Rate to reduce warmup when turret is not ready to fire at any targets | NaN | NaN |
| NaN | warmupNoReset | bool | Defaults to false. When true warmup is not reset after firing a shot and turret doesn't wait for warnup. Used with warmupCallDownRate and warmupShootDelayTransfer. | NaN | NaN |
| NaN | warmupShootDelayTransfer | float | Defaults to 0, amount to reduces the next shot delay depending on warmup. When used with warmupNoReset, can make a each shot faster. | NaN | NaN |
| NaN | NaN | NaN | On Shoot | NaN | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | NaN | Freezes body movement while shooting. | NaN | NaN |
| 1.14 | barrelOffsetX\_onOddShots: | float | 0 by default. Sets a barrelX offset only during odd numbered shots, useful for twin-barreled units. Use with barrelX | NaN | NaN |
| NaN | NaN | NaN | Targeting control | NaN | NaN |
| 1.14 | aimOffsetSpread | NaN | NaN | NaN | NaN |
| NaN | canShoot: | bool | Defaults to true | NaN | NaN |
| NaN | canAttackFlyingUnits: | LogicBoolean | Narrows targeting for this turret, note targeting for the whole unit in [attack] is applied first. (so you can only use this to target less not more) | NaN | NaN |
| NaN | canAttackLandUnits: | LogicBoolean | NaN | NaN | NaN |
| NaN | canAttackUnderwaterUnits: | LogicBoolean | NaN | NaN | NaN |
| NaN | canAttackNotTouchingWaterUnits: | LogicBoolean | Default true. If false unit can only attack units in contact with the water. Used for units with torpedos. | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithTags | tags | NaN | NaN | NaN |
| 1.13.3 | canOnlyAttackUnitsWithoutTags | tags | NaN | NaN | NaN |
| NaN | canAttackCondition: | LogicBoolean | Normally, used to optionally disable a turret based on a LogicBoolean. Eg: this unit's height | canAttackCondition: if not self.flying | NaN |
| 1.14 | canAttackMaxAngle | float | Max angle to target for turret to be allowed for fire. Defaults to 5, don't set lower. Can be set to 181 for turrets that don't need to turn to fire missiles. | NaN | NaN |
| 1.13 | clearTurretTargetAfterFiring | bool | Clears the turrets sub-target when using multi-targeting | NaN | NaN |
| NaN | limitingRange: | float | Make this turret have less range than the maxAttackRange. Do not apply this to all turrets change maxAttackRange instead. | NaN | NaN |
| 1.13 | limitingAngle | NaN | Linked with idleDir. Turret will only be able to fire at units +/- this angle. | NaN | NaN |
| 1.13 | limitingMinRange | NaN | Sets minimum range for turret. | limitingMinRange: 200 | NaN |
| 1.13 | interceptProjectiles\_withTags | NaN | Currently used with anti-nuke units. | NaN | NaN |
| NaN | interceptProjectiles\_andTargetingGroundUnderDistance | NaN | NaN | NaN | NaN |
| NaN | interceptProjectiles\_andUnderDistance | NaN | Defaults to 2000, distance inflight before firing | NaN | NaN |
| NaN | interceptProjectiles\_andOverHeight | NaN | Defaults to 0 | NaN | NaN |
| 1.14 | interceptProjectile\_removeTargetLifeOnly | bool | Defaults to false. When false projectiles are just removed. Could be true to make hit projectiles explode or split when hit | NaN | NaN |
| NaN | laserDefenceEnergyUse: | float | Set to enable a projectile laser defence from this turret. Should also set the energyMax in core. | NaN | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | invisible: | LogicBoolean | Don't render this turret, but still can shoot, etc. | NaN | NaN |
| NaN | image: | file (image) | Use custom image. Overrides unit's main turret image | NaN | NaN |
| NaN | image\_applyTeamColors | bool | NaN | NaN | NaN |
| NaN | image\_drawOffsetX | float | NaN | NaN | NaN |
| NaN | image\_drawOffsetY | float | NaN | NaN | NaN |
| NaN | chargeEffectImage:\n | file (image) | Used with warmup. Shows a scaling effect image on turret barrel when charging. | NaN | NaN |
| NaN | warmupStartEffect | effect ref | NaN | NaN | NaN |
| NaN | shoot\_sound: | string | Can be linked to an .ogg or .wav file, or one of the default game sounds (list at bottom of reference) | shoot\_sound: tank\_firing | shoot\_sound: missile.wav | shoot\_sound: ROOT:audio/shoot.ogg | NaN |
| NaN | shoot\_sound\_vol: | float | NaN | NaN | NaN |
| NaN | shoot\_flame: | effects | Current types are: small, large, smoke, shockwave, or CUSTOM: effectSectionName | eg: shoot\_flame: smoke, CUSTOM:lightFade, CUSTOM:pop\*5 | alleged: largeExplosion, smallExplosion, resourcePoolSmoke, noneExplosion |
| NaN | shoot\_light | color | NaN | NaN | NaN |
| NaN | idleSpin: | float | Spin rate when idle, used on missile turrets | NaN | NaN |
| 1.13 | onShoot\_playAnimation | animation ref | Play a custom animation from an [animation] section after firing this turret | NaN | NaN |
| 1.14 | onShoot\_triggerActions | action refs | Trigger these actions each time this turret fires | NaN | NaN |
| 1.13.3 | onShoot\_freezeBodyMovementFor | time | Stops the unit from moving for a certain period of time | NaN | NaN |
| NaN | recoilOffset | float | Push turret forward or back after firing for a recoil effect. Value in pixels. | NaN | NaN |
| NaN | recoilOutTime | float | Time to get to offset position after firing | NaN | NaN |
| NaN | recoilReturnTime | float | Time to return to default position | NaN | NaN |
| 1.13.3 | showRangeUIGuide | bool | NaN | NaN | NaN |
| NaN | unloadUpToXUnitsAndGiveAttackOrder | int | After unloading the units, they are automatically given an attack waypoint against the parent's target | NaN | NaN |
| NaN | unloadUpToXUnitsAndGiveAttackOrder\_withTag | tag(s) | Specifies units with specified tag. | NaN | NaN |
| NaN | Section | NaN | [projectile\_NAME] | Projectiles are necessary to inflict damage on an enemy, but also other purposes | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Necessary Code | NaN | NaN |
| NaN | NaN | int | directDamage: or areaDamage: | NaN | NaN |
| NaN | NaN | NaN | life: | NaN | NaN |
| NaN | NaN | NaN | Core | NaN | NaN |
| NaN | life: | NaN | How long till this projectile gets removed if it hasn't hit a target, 300 might be a good starting point, change depending on speed and range | NaN | NaN |
| NaN | deflectionPower: | float | Defaults to 1. Energy needed for laser defence to deflect. -1 to disable deflection (only disable for special weapons like flames) | NaN | NaN |
| 1.13 | explodeOnEndOfLife | bool | Default to false. True to explode at end of life with all side effects and area damage instead of disappearing. Good for making area-denial weapons. | NaN | NaN |
| NaN | autoTargetingOnDeadTarget: | bool | Retarget to nearby unit if target dies while in transit | NaN | NaN |
| 1.14 | autoTargetingOnDeadTargetRange | int | The range which it will select a new target if old target has died | NaN | NaN |
| 1.14 | autoTargetingOnDeadTargetLead | float | The lead it will try to have on the new target | NaN | NaN |
| 1.13 | unloadUpToXUnitsFromSource | int | Unload X units from source unit, to projectile explode location | NaN | NaN |
| 1.13 | teleportSource | bool | Move unit that shot this projectile to projectile explode location | NaN | NaN |
| 1.13 | spawnUnit | unit types | Spawn new units of this type at projectile explode location | eg: spawnUnit: heavyTank, tank\*5, hoverTank(offsetX=10) | NaN |
| 1.14 | spawnProjectilesOnEndOfLife | projectile ref | Spawns new projectiles on end of life, useful for secondary projectiles | spawnProjectilesOnEndOfLife: torpedo\_split(offsetDir=90), torpedo\_split(offsetDir=-90)\n | NaN |
| 1.14 | spawnProjectilesOnExplode | projectile ref | Projectiles to spawns when this projectile hits it's target | NaN | NaN |
| 1.14 | spawnProjectilesOnCreate | NaN | Spawns projectiles on creation of this projectile, useful for making true shotgun-like projectile spread | NaN | NaN |
| 1.13.3 | convertHitToSourceTeam | bool | Convert units hit to the team that fired this projectile. Useful to make capturing systems | NaN | NaN |
| 1.13 | tags | tags | Useful for projectile interceptions (e.g. Nuke and Anti-Nuke Interaction) | NaN | NaN |
| NaN | flameWeapon: | bool | Generates small flames on hit (only cosmetic) | NaN | NaN |
| NaN | NaN | NaN | Damage | NaN | NaN |
| NaN | directDamage: | int | Damage to target unit on hit. Does not work with targetGround:true as it won't have a clear unit to target | NaN | NaN |
| NaN | areaDamage: | int | Damages on arrival of target with an area effect, use areaRadius to adjust size of damage. targetGround needs this to damage | NaN | NaN |
| 1.13 | areaRadius: | float | How wide areaDamage effects. Note this drops off (unless areaDamageNoFalloff is used) | NaN | NaN |
| NaN | areaDamageNoFalloff | bool | Removes the falloff from areaDamage | NaN | NaN |
| NaN | areaRadiusFromEdge | bool | Applies damage from edge of units instead of center. Mostly effects large units. | NaN | NaN |
| 1.13 | areaExpandTime | float | Applies area damage as an expanding blast wave rather than instantly. Useful for nuke projectiles | NaN | NaN |
| 1.13 | areaHitAirAndLandAtSameTime | bool | Defaults to false | NaN | NaN |
| NaN | areaHitUnderwaterAlways | bool | Defaults to false | NaN | NaN |
| NaN | areaIgnoreUnitsCloserThan | int | Units closer than this range aren't effected. Rarely needed. Not recommended for normal projectiles. | NaN | NaN |
| 1.13 | buildingDamageMultiplier | float | Defaults to 1 | NaN | NaN |
| 1.13 | shieldDamageMultiplier | float | Defaults to 1. | eg: 0 to do no damage to shields and 2 to do double damage | NaN |
| 1.13 | shieldDefectionMultiplier | float | Defaults to 1. | eg: 0 to ignore shields and directly damage hull | NaN |
| 1.14 | hullDamageMultiplier | float | Defaults to 1. Can be used to create EMP weapons that affect shields only | eg: 0 to ignore hull and only damage shields | NaN |
| 1.15 | ignoreParentShootDamageMultiplier | bool | NaN | NaN | NaN |
| NaN | armourIgnoreAmount | int | Amount of armour to ignore on target and do damage as if this armour was not there | NaN | NaN |
| 1.13 | friendlyFire | bool/string | Lets area effect projectiles damage own team units (can't damage allies). Useful for nuke-like weapons | friendlyFire: false / friendlyFire: true / friendlyFire: only-ignoreEnemy | NaN |
| 1.13.3 | mutatorX\_ifUnitWithTags | tags | Applies mutators to this projectile if target has corresponding tags | eg: mutator1\_ifUnitWithTags: infantry | NaN |
| 1.13.3 | mutatorX\_ifUnitWithoutTags | tags | Same as ifUnitWithTags, but applies if target doesn't have the set tags | eg: mutator1\_ifUnitWithoutTags: strongArmour | NaN |
| 1.13.3 | mutatorX\_directDamageMultiplier | float | Changes directDamage. Defaults to 1. Be careful not to confuse players using this as the effect may not be clear. Use amour instead when possible | NaN | NaN |
| 1.13.3 | mutatorX\_areaDamageMultiplier | float | Same as directDamageMultiplier but for areaDamage. Defaults to 1. | NaN | NaN |
| 1.13.3 | mutatorX\_changedExplodeEffect | effect | Change explode effect if this mutator is active. Eg make a bounce off amour effect. Helps to make the damage change more clear to players (Doesn't work with targetGround.) | NaN | NaN |
| 1.14 | mutatorX\_addResourcesDirectHit | resource | Add resource to all hit units. Warning: Be careful not be break units from other mods by adding random resources or energy to them that they don't expect. | NaN | NaN |
| 1.14 | mutatorX\_addResourcesAreaHit | resource | NaN | NaN | NaN |
| NaN | NaN | NaN | Movement | NaN | NaN |
| NaN | targetGround | bool | Target ground, and don't home in on target. Note: only areaDamage is applied if targeting ground. | NaN | NaN |
| 1.14 | targetGround\_includeTargetHeight | bool | Default false. for area affect AA weapons | NaN | NaN |
| 1.14 | targetGroundHeightOffset | float | Default 0. for shooting over or under a target. Useful for projectiles that split and rain down. | NaN | NaN |
| NaN | speed: | float | Projectile default travel speed | NaN | NaN |
| NaN | targetSpeed: | float | Accelerate to this speed | NaN | NaN |
| 1.13 | targetSpeedAcceleration | float | Controls the speed rampup for targetSpeed | NaN | NaN |
| NaN | ballistic: | bool | Makes projectiles fly up into the air and come down, instead of going in a straight line | NaN | NaN |
| NaN | ballistic\_delaymove\_height: | float | NaN | NaN | NaN |
| NaN | ballistic\_height: | float | NaN | NaN | NaN |
| NaN | targetGroundSpread: | float | Randomly makes the shot inaccurate by this amount. Also used by weapons like the flamethrower | NaN | NaN |
| NaN | speedSpread: | float | Randomly change the starting projectile speed by this amount | NaN | NaN |
| NaN | instant | bool | Hit target instantly | NaN | NaN |
| NaN | instantReuseLast: | bool | Recycles last projectile fired, only one projectile ever exists. Can turn lasers into beam weapons by using lower rate of fire and setting this to true | NaN | NaN |
| 1.14 | instantReuseLast\_alsoChangeTurretAim | bool | Make turret's aim include last projectile's spread and sweep offsets, useful for beam weapons | NaN | NaN |
| 1.14 | instantReuseLast\_keepAreaDamageList | bool | Default false. Keeping the list was the normal behaviour in 1.13 making area damage not apply a second time but this is not useful. Use this only if you want the old behaviour. | NaN | NaN |
| 1.13 | disableLeadTargeting | bool | Disable the lead targeting calculations when aiming at a moving target. Defaults false. | NaN | NaN |
| 1.13 | leadTargetingSpeedCalculation | float | The expected speed of this projectile for targetGround lead target calculation. Defaults to 'targetSpeed' if set otherwise 'speed'. | NaN | NaN |
| 1.13.3 | initialUnguidedSpeedHeight | NaN | Sets vertical speed for projectiles with targetGround. Use gravity to make smooth arching projectiles | NaN | NaN |
| NaN | initialUnguidedSpeedX | NaN | NaN | NaN | NaN |
| NaN | initialUnguidedSpeedX | NaN | NaN | NaN | NaN |
| 1.13.3 | gravity: | NaN | Controls the pull for projectiles that target ground. Use together with initialUnguidedSpeedHeight | NaN | NaN |
| 1.14 | turnSpeed | float | Limits the turn speed of a projectile, making them inaccurate even with directDamage | NaN | NaN |
| 1.14 | wobbleAmplitude | float | How wide the projectile will wobble | NaN | NaN |
| 1.14 | wobbleFrequency | float | How often the projectile will wobble | NaN | NaN |
| 1.14 | pushForce | float | Push (or pull with a negative value) the units that get hit. Divided by target mass | NaN | NaN |
| 1.14 | pushVelocity | float | Push (or pull with a negative value) the units that get hit. Ignores target mass | NaN | NaN |
| 1.14 | moveWithParent | bool | Move projectile as parent moves. Useful for beam effects that need to stick to source turret. | NaN | NaN |
| 1.14 | sweepOffset | float | Useful for beam effects. | NaN | NaN |
| 1.14 | sweepOffsetFromTargetRadius | float | Add to sweep offset by factor of target's radius. 0.4 would be 40% | sweepOffsetFromTargetRadius: 0.4 | NaN |
| 1.14 | sweepSpeed | float | Useful for beam effects. | NaN | NaN |
| 1.14 | retargetingInFlight | bool | Can retarget a new target mid-flight, perfect for flak-style weapons and projectiles that collide | NaN | NaN |
| 1.14 | retargetingInFlightSearchDelay | float/time | How long between searching for new targets. Default 5 | NaN | NaN |
| 1.14 | retargetingInFlightSearchRange | int | Range which targets are reselected. Default 120 | NaN | NaN |
| 1.14 | retargetingInFlightSearchLead | float | The lead of the projectile to try to hit the target. Default 15 | NaN | NaN |
| 1.14 | retargetingInFlightSearchOnlyTags | tag ref | Only retarget units with these tags | NaN | NaN |
| 1.13 | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | color | color | Recolors this projectile using a hex value. | color: #bebe50 | NaN |
| 1.13.3 | invisible | bool | NaN | NaN | NaN |
| NaN | image: | file (image) | Use custom image. Overrides drawType and frame | NaN | NaN |
| NaN | drawType | int | Built-in image to use. 0:projectiles.png 1:projectiles\_large.png 2:projectiles2.png | drawType:1 | NaN |
| NaN | drawSize: | float | Scale image. Defaults to 1 | NaN | NaN |
| NaN | frame | int | Built-in image frame to use, starts at zero. | NaN | NaN |
| NaN | hitSound: | bool | Default true | NaN | NaN |
| 1.13 | explodeEffect | effect ref list | NaN | explodeEffect: smallExplosion, CUSTOM:myExplodeEffect | NaN |
| 1.13 | explodeEffectOnShield | effect ref list | Use this effect if shield is active on target | NaN | NaN |
| 1.13 | teamColorRatio | float | Mix 0-1 of team colour into color field | NaN | NaN |
| 1.14 | teamColorRatio\_sourceRatio | float | default is (1-teamColorRatio). Keep more of color when mixing. Note this might saturate colors. | NaN | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN | NaN |
| 1.13 | effectOnCreate | effect ref list | NaN | NaN | NaN |
| 1.13 | shouldRevealFog | bool | Reveal fog to player on explode | NaN | NaN |
| 1.13 | alwaysVisibleInFog | bool | NaN | NaN | NaN |
| 1.13 | nukeWeapon | bool | Shows on mini-map when fired. Some other side effects as well. | NaN | NaN |
| NaN | trailEffect | bool/effect | true for built-in defaults, but can also point to any custom effects | NaN | NaN |
| 1.13 | trailEffectRate | float | Defaults to 3 | NaN | NaN |
| NaN | lightCastOnGround | bool | NaN | NaN | NaN |
| NaN | lightSize: | float | NaN | NaN | NaN |
| NaN | lightColor | color | NaN | lightColor: #ffe92b | NaN |
| NaN | largeHitEffect: | bool | Creates a large explosion and accompanying sound on hit (only cosmetic) | NaN | NaN |
| NaN | lightingEffect: | bool | Draw as lighting works best with instant:true | NaN | NaN |
| NaN | laserEffect: | bool | Draw as laser works best with instant:true | NaN | NaN |
| 1.14 | beamImage | file (image) | Image to use for laserEffect | NaN | NaN |
| 1.14 | beamImageOffsetRate | float | NaN | NaN | NaN |
| 1.14 | beamImageStart | int | Frame start of beam animationeffect | NaN | NaN |
| 1.14 | beamImageStartRotated | bool | Defaults false. True to rotate with turret angle | NaN | NaN |
| 1.14 | beamImageEnd | int | Frame end of beam animation effect | NaN | NaN |
| 1.14 | beamImageEndRotated | bool | Defaults false | NaN | NaN |
| NaN | Section | NaN | [movement] | These are traits the unit has as far as movement goes, such as rotation and acceleration speed | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | movementType: | string | Defines what kind of terrain the unit will be able to move, along with other properties of unit types. | movementType: LAND | NaN |
| NaN | slowDeathFall: | bool | Used with large aircraft. Makes the unit fall slowly while maintaining its speed at the time of death. | slowDeathFall: true | NaN |
| NaN | moveSpeed: | float | Maximum movement speed of the unit. | moveSpeed: 1.2 | NaN |
| NaN | moveAccelerationSpeed: | float | Defines how fast units accelerate to max speed. | moveAccelerationSpeed: 0.07 | NaN |
| NaN | moveDecelerationSpeed: | float | Don't make this too low or units will have trouble stopping at waypoints | moveDecelerationSpeed: 0.17 | NaN |
| NaN | reverseSpeedPercentage: | float | 0.6 default. Over 0.4 will reverse for short distances (at 40% speed). If set to 1 will drive in reverse same as forwards. Useful if slow turning | reverseSpeedPercentage: 0 | NaN |
| NaN | landOnGround: | bool | Should flying unit land when idle. | landOnGround: false | NaN |
| NaN | targetHeight: | float | Defaults to 0 but if AIR movementType default is 35 | targetHeight: 25 | NaN |
| NaN | targetHeightDrift: | float | Smooth animated height change. Defaults to 0 but if AIR movementType default is 1.5 | targetHeightDrift: 1 | NaN |
| NaN | startingHeightOffset: | float | NaN | NaN | NaN |
| 1.14 | heightChangeRate: | float | Rate at which the unit changes height, either from converting or drifting | heightChangeRate: 3 | NaN |
| 1.14 | fallingAcceleration: | float | The acceleration in which a unit drops | NaN | NaN |
| 1.14 | fallingAccelerationDead: | float | fallingAcceleration but when destroyed | NaN | NaN |
| NaN | maxTurnSpeed: | float | NaN | NaN | NaN |
| NaN | turnAcceleration: | float | NaN | NaN | NaN |
| NaN | moveSlidingMode: | bool | Makes the unit slide when moveDecelerationSpeed is lower, making them drift and feel natural | NaN | NaN |
| NaN | moveIgnoringBody: | bool | Allows the unit to move without fully turning in the direction its moving, useful for ships and air units | NaN | NaN |
| NaN | moveSlidingDir: | int | NaN | NaN | NaN |
| NaN | joinsGroupFormations: | bool | Defaults to true. Changing not recommended | NaN | NaN |
| NaN | ignoreMoveOrders | bool | Ignore and remove movement type waypoints. Always to true for buildings. | NaN | NaN |
| NaN | Section | NaN | [ai] | This determines what the AI will use the unit for, does not effect player | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | useAsBuilder: | bool | Set to true if unit can build or repair buildings. Defaults to [core]isBuilder. | NaN | NaN |
| NaN | useAsTransport | bool | Defaults to true if unit can transport units | NaN | NaN |
| NaN | useAsHarvester | bool | Defaults to true if unit can reclaim resources | NaN | NaN |
| NaN | useAsAttacker | bool | Can AI use this unit for attacks. Defaults to true. | NaN | NaN |
| NaN | disableUse: | bool | Disallow AI building this unit or building | NaN | NaN |
| NaN | ai\_upgradePriority | float | Defaults to 0.06. Set between 0-1, higher means AI is more likely to upgrade this unit before others | NaN | NaN |
| NaN | NaN | NaN | Buildings only | NaN | NaN |
| NaN | buildPriority: | float | 0-1. AI uses 0.8 for first land factory, 0.48 for air factory, 0.47 for first turret. | NaN | NaN |
| NaN | noneInBaseExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the AIs base | NaN | NaN |
| NaN | noneGlobalExtraPriority: | float | Adds to buildPriority, if this unit doesn't exist in the any where on the map | NaN | NaN |
| NaN | recommendedInEachBaseNum | float | Defaults to 0 | NaN | NaN |
| NaN | recommendedInEachBasePriorityIfUnmet | float | Defaults to 0.5. Overrides buildPriority | NaN | NaN |
| NaN | upgradedFrom: | string | Create link to another unit to preserve max counts for upgraded and non-upgraded types in same base. | NaN | NaN |
| NaN | maxGlobal: | int | NaN | NaN | NaN |
| NaN | maxEachBase: | int | NaN | NaN | NaN |
| 1.4 | notPassivelyTargetedByOtherUnits | bool | Useful for walls, etc | NaN | NaN |
| 1.4 | lowPriorityTargetForOtherUnits | NaN | Useful for units that cannot attack back. Eg walls | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedInEachBase | NaN | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_recommendedGlobal | NaN | NaN | NaN | NaN |
| 1.13.3 | whenUsingAsHarvester\_includeOtherHarvesterCounts | NaN | NaN | NaN | NaN |
| 1.13.3 | onlyUseAsHarvester\_ifBaseHasUnitTagged | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [leg\_#] / [arm\_#] | Legs can move around when unit moves, Arms need an animation or convert | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | x: | float | Sets position of the foot on the X axis. | NaN | NaN |
| NaN | y: | float | Sets position of the foot on the Y axis. | NaN | NaN |
| NaN | copyFrom: | int | Copy from another leg. Useful to only need to set leg values once | copyFrom: 1 | NaN |
| NaN | attach\_x: | float | Sets the leg's attach point on the X axis. | NaN | NaN |
| NaN | attach\_y: | float | Sets the leg's attach point on the Y axis. | NaN | NaN |
| NaN | rotateSpeed: | float | NaN | NaN | NaN |
| NaN | endDirOffset | NaN | Target foot/end rotation relative to body | NaN | NaN |
| NaN | lockMovement | bool | Lock to unit body. Useful if walking unit converted to a flying unit. | NaN | NaN |
| NaN | heightSpeed: | float | NaN | NaN | NaN |
| NaN | moveSpeed | NaN | NaN | NaN | NaN |
| NaN | moveWarmUp | NaN | NaN | NaN | NaN |
| NaN | holdDisMin: | float | Defaults to 7. Reposition leg at this distance if neighbor legs are not already repositioning. | NaN | NaN |
| NaN | holdDisMax: | float | Defaults to 16. Force reposition of leg at this distance. | NaN | NaN |
| NaN | holdDisMin\_maxMovingLegs | NaN | NaN | NaN | NaN |
| NaN | hold\_moveOnlyIfFurthest | NaN | NaN | NaN | NaN |
| NaN | holdDisMin\_checkNeighbours | NaN | NaN | NaN | NaN |
| NaN | hardLimit: | float | Defaults to 50. Force leg to never go this far. Better to not be reached. | NaN | NaN |
| NaN | estimatingPositionMultiplier | float | defaults to 1. Predicts were unit will be for leg placement based on unit speed. | NaN | NaN |
| NaN | NaN | NaN | Graphics and effects | NaN | NaN |
| NaN | hidden: | logic boolean | NaN | NaN | NaN |
| 1.13 | image\_end | file (image) | NaN | NaN | NaN |
| 1.13 | image\_end\_shadow | file (image) | NaN | NaN | NaN |
| 1.13 | image\_end\_teamColors | NaN | NaN | NaN | NaN |
| 1.13 | image\_foot | file (image) | same as image\_end | NaN | NaN |
| NaN | image\_foot\_shadow | file (image) | NaN | NaN | NaN |
| 1.13 | image\_middle | file (image) | NaN | NaN | NaN |
| NaN | image\_leg | file (image) | same as image\_middle | NaN | NaN |
| 1.13 | draw\_foot\_on\_top | bool | NaN | NaN | NaN |
| NaN | drawOverBody | bool | Draw over body | NaN | NaN |
| NaN | drawUnderAllUnits | bool | Draw over all units | NaN | NaN |
| NaN | drawDirOffset | float | NaN | NaN | NaN |
| NaN | dust\_effect: | bool | Spawns dust particles on each step. | NaN | NaN |
| NaN | spinRate | float | Makes arm/leg spin, like idleSpin for turrets | NaN | NaN |
| NaN | favourOppositeSideNeighbours | NaN | calculate neighbours with X 10 times closer than Y | NaN | NaN |
| NaN | drawLegWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN | NaN |
| NaN | drawFootWhenZoomedOut | NaN | For performance, defaults changes based on unit size | NaN | NaN |
| NaN | resetAngle: | float | Unused | NaN | NaN |
| NaN | Section | NaN | [attachment\_NAME] | Attachments are slots where other units can be positioned or carried | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | x | float | NaN | NaN | NaN |
| 1.13.3 | y | float | NaN | NaN | NaN |
| 1.13.3 | height | bool | NaN | NaN | NaN |
| 1.13.3 | idleDir | int | NaN | NaN | NaN |
| 1.14 | idleDirReversing | int | NaN | NaN | NaN |
| 1.13.3 | isVisible | bool | NaN | NaN | NaN |
| 1.13.3 | onCreateSpawnUnitOf | unit ref | NaN | NaN | NaN |
| 1.13.3 | isUnselectable | bool | Defaults to false | NaN | NaN |
| NaN | canAttack | bool | Defaults to true. Set to false to stop this attachment attacking. | NaN | NaN |
| 1.13.3 | canBeAttackedAndDamaged | bool | NaN | NaN | NaN |
| 1.13.3 | deattachIfWantingToMove | bool | If the unit is ordered to move, it will detach. This includes waypoints from actions. | NaN | NaN |
| 1.13.3 | lockLegMovement | bool | NaN | NaN | NaN |
| 1.13.3 | keepAliveWhenParentDies | bool | Defaults to false | NaN | NaN |
| 1.13.3 | setDrawLayerOnTop | bool | NaN | NaN | NaN |
| 1.13.3 | setDrawLayerOnBottom | bool | NaN | NaN | NaN |
| 1.13.3 | addTransportedUnits | bool | NaN | NaN | NaN |
| 1.13.3 | lockRotation | bool | NaN | NaN | NaN |
| 1.13.3 | rotateWithParent | bool | NaN | NaN | NaN |
| 1.13.3 | resetRotationWhenNotAttacking | bool | Similar to shouldResetTurret:for turrets. | NaN | NaN |
| 1.13.3 | prioritizeParentsMainTarget | bool | It will priotize targeting the main target. Defaults to true. | NaN | NaN |
| 1.13.3 | alwaysAllowedToAttackParentsMainTarget | bool | Will always attack the parents main target. | NaN | NaN |
| NaN | onParentTeamChangeKeepCurrentTeam | bool | Defaults false. If true attached units are not converted when parent changes team. Eg from [projectile]convertHitToSourceTeam | NaN | NaN |
| NaN | onConvertKeepExistingUnitInSameSlot | bool | NaN | NaN | NaN |
| NaN | unloadInCurrentPosition | bool | Defaults false. If true transported attached units are kept current attached location when unloading | NaN | NaN |
| NaN | keepWaypointsNeedingMovement | bool | Defaults false. If true attached units keep waypoints with movement even while they cannot move. Useful if they will be automatically deattached soon. | NaN | NaN |
| 1.14 | smoothlyBlendPositionWhenExistingUnitAdded | bool | NaN | NaN | NaN |
| 1.14 | keepWaypointsNeedingMovement | bool | Defaults to false. When false any queued waypoints needing movement to complete get removed. | NaN | NaN |
| 1.14 | showAllActionsFrom | LogicBoolean | Show all actions of the units attached in the parent unit list when selected | NaN | NaN |
| 1.14 | createIncompleteIfParentIs: | bool | NaN | NaN | NaN |
| 1.14 | redirectDamageToParent: | bool | Redirects damage done to this attachment to the parent instead of damaging itself directly | NaN | NaN |
| 1.14 | redirectDamageToParent\_shieldOnly: | bool | NaN | NaN | NaN |
| NaN | Section | NaN | [effect\_NAME] | Effects are purely visual, but can be important for a mod | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13 | life | float | Defaults 200. Time till effect is removed. Set low as possible to reduce effect overhead. | life: 70 | NaN |
| 1.14 | lifeRandom | float | Random offset life by +/- this value | lifeRandom: 12 | NaN |
| 1.13 | alsoEmitEffects | effect ref | Create more effects when created, useful for meta-effects. Note: other 'alsoEmitEffects' on created effects are ignored. | NaN | NaN |
| 1.14 | alsoEmitEffectsOnDeath | effect ref | Create these effects when life runs out. | NaN | NaN |
| NaN | ifSpawnFailsEmitEffects | effect ref | If 'spawnChance' for this effects fails then emit these effects instead | NaN | NaN |
| 1.13 | alsoPlaySound | sound ref | NaN | NaN | NaN |
| 1.13 | createWhenOffscreen | bool | Defaults false. | NaN | NaN |
| 1.13 | createWhenZoomedOut | bool | Defaults true | NaN | NaN |
| 1.13 | createWhenOverLiquid | bool | Defaults true | NaN | NaN |
| 1.13 | createWhenOverLand | bool | Defaults true | NaN | NaN |
| 1.13 | spawnChance | float | Default 1. If less than 1 effect only has a random chance of being created | NaN | NaN |
| 1.13 | showInFog | bool | Default false | NaN | NaN |
| 1.13 | delayedStartTimer | float | Hide for x time before showing and updating effect. | NaN | NaN |
| 1.13 | liveAfterAttachedDies | bool | Defaults false when attachedToUnit is being used | NaN | NaN |
| 1.13 | priority | string | Defaults to high. verylow/low/high/veryhigh/critical. Takes effect when too many effects are being shown at once. | NaN | NaN |
| NaN | NaN | NaN | Movement | NaN | NaN |
| 1.13 | attachedToUnit | bool | Attach to unit or projectile that created this effect. Will move with this object. | NaN | NaN |
| 1.13 | alwayStartDirAtZero | bool | Ignore source/attached unit dir | NaN | NaN |
| 1.13 | atmospheric | bool | Apply drag to slow this effect down and add small wind effects | NaN | NaN |
| 1.13 | physics | bool | Fall to ground and bounces. Needs height to take effect. | NaN | NaN |
| 1.13 | physicsGravity | float | Defaults to 1. height speed acceleration when physics: true | NaN | NaN |
| 1.13 | xOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | yOffsetRelative | float | Offset starting effect position. Relative to direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | xOffsetRelativeRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | yOffsetRelativeRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | xOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | yOffsetAbsolute | float | Offset starting effect by position ignoring direction of attached turret, projectile, unit | NaN | NaN |
| 1.13 | xOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | yOffsetAbsoluteRandom | float | Random offset by +/- this value | NaN | NaN |
| 1.13 | xSpeedRelative | float | NaN | NaN | NaN |
| 1.13 | ySpeedRelative | float | NaN | NaN | NaN |
| 1.13 | xSpeedRelativeRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | ySpeedRelativeRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | xSpeedAbsolute | float | NaN | NaN | NaN |
| 1.13 | ySpeedAbsolute | float | NaN | NaN | NaN |
| 1.13 | xSpeedAbsoluteRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | ySpeedAbsoluteRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | hOffset | float | height offset from source | NaN | NaN |
| 1.13 | hOffsetRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | hSpeed | float | height speed | NaN | NaN |
| 1.13 | hSpeedRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | dirOffset | float | rotation | NaN | NaN |
| 1.13 | dirOffsetRandom | float | Randomly change by -value to value | NaN | NaN |
| 1.13 | dirSpeed | float | rotation speed | NaN | NaN |
| 1.13 | dirSpeedRandom | float | Randomly change by -value to value | NaN | NaN |
| NaN | NaN | NaN | Graphics | NaN | NaN |
| 1.13 | frameIndex | int | frame of to use | NaN | NaN |
| NaN | frameIndexRandom | NaN | NaN | NaN | NaN |
| 1.13 | stripIndex | int/string | A built-in image set to use. Cannot be used with custom image | effects/explode\_big/light\_50/flame/effects/effects2/projectiles/projectiles2/explode\_bits | NaN |
| 1.13 | Image | image | Custom image file to use. Cannot be used with stripIndex. | NaN | NaN |
| NaN | imageShadow | image | Custom image file to use for shadows | NaN | NaN |
| 1.13 | scaleTo | float | Defaults to 1 | NaN | NaN |
| 1.13 | scaleFrom | float | Defaults to 1 | NaN | NaN |
| 1.13 | color | color | Defaults #FFFFFFFF | NaN | NaN |
| NaN | teamColorRatio | NaN | 0-1 | NaN | NaN |
| 1.13 | drawUnderUnits | bool | NaN | NaN | NaN |
| 1.13 | fadeInTime | float | Fade alpha from 0% to 100% for this time at start | NaN | NaN |
| 1.13 | fadeOut | bool | Fade alpha from 100% to 0% based on life. Set alpha is higher than 1 to delay fade | NaN | NaN |
| NaN | alpha | NaN | Capped between 0-1. Can be set higher than 1 to delay fadeOut effects | NaN | NaN |
| NaN | shadow | NaN | True to draw a shadow. Forced true if imageShadow is used | NaN | NaN |
| NaN | NaN | NaN | Animation | NaN | NaN |
| 1.13 | total\_frames | int | Total frames of 'image', used with animation or frameIndex. Only needed with custom images | NaN | NaN |
| 1.13 | animateFrameStart | int | NaN | NaN | NaN |
| 1.13 | animateFrameEnd | int | NaN | NaN | NaN |
| 1.13 | animateFramePingPong | int | NaN | NaN | NaN |
| 1.13 | animateFrameSpeed | time | NaN | NaN | NaN |
| 1.13 | animateFrameSpeedRandom | time | NaN | NaN | NaN |
| 1.14 | animateFrameLooping | bool | Defaults false. When false effect is removed when animation ends | NaN | NaN |
| NaN | Section | NaN | [animation\_NAME] | Use this to make intricate animations based on different circumstances | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13 | onActions : Unknown | NaN | move, attack, idle, underConstruction, underConstructionWithLinkedBuiltTime, queuedUnits | NaN | NaN |
| 1.13 | onActionsQueuedUnitPlayAt : float | NaN | For onAction: queuedUnits. Amount queue needs to reach before starting, set between 0-1 | NaN | NaN |
| 1.13 | blendIn : time | NaN | Blend with last animation for this time | NaN | NaN |
| 1.13 | blendOut : time | NaN | Blend with next animation for this time | NaN | NaN |
| 1.13 | pingPong | bool | Play animation in reverse after it ends | NaN | NaN |
| 1.13 | KeyframeTimeScale : float | float | Scales all keyframe times, useful to make an animation faster/slower without changing everything | NaN | NaN |
| NaN | NaN | NaN | Keyframes - create as many as needed | NaN | NaN |
| 1.13 | arm#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | eg: arm1\_5s: {x: 5, dir: 90 } | NaN |
| NaN | leg#\_[time] | NaN | Adds a keyframe at time. Use multiple times to create animation. | NaN | NaN |
| NaN | body\_[time] | NaN | Adds a keyframe at time for body. Only frame and scale allowed on body | eg: body\_4s: {frame: 4, scale: 0.5} | NaN |
| 1.14 | effect\_[time] | NaN | Spawn effects while playing an animation\n | eg: effect\_2s: {name:CUSTOM|myExplode, x: 0,y: 5} | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | direction\_units | float | Overrides [graphics]animation\_direction\_units while this animation is playing | NaN | NaN |
| NaN | direction\_strideX: | int | Overrides [graphics]animation\_direction\_strideX | NaN | NaN |
| NaN | direction\_strideY: | int | Overrides [graphics]animation\_direction\_strideY | NaN | NaN |
| NaN | direction\_starting: | float | Overrides [graphics]animation\_direction\_starting | NaN | NaN |
| NaN | NaN | NaN | Deprecated Keys (can be used but there are better ways) | NaN | NaN |
| 1.13 | start : int | NaN | Start image frame. deprecated | NaN | NaN |
| 1.13 | end : int | NaN | End image frame. deprecated | NaN | NaN |
| 1.13 | scale\_start : float | NaN | Start scale. Deprecated, use body keyframes instead. | NaN | NaN |
| 1.13 | scale\_end : float | NaN | End scale. Deprecated, use body keyframes instead. | NaN | NaN |
| 1.13 | speed : float | NaN | Speed, smaller is faster. Only effects start, end, scale\_start, scale\_end | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [action\_NAME] / [hiddenAction\_NAME] | Actions that can dynamically cause changes to units and resources | NaN |
| NaN | NaN | NaN | [hiddenAction\_NAME] is basically an action with isVisible: false by default | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | text | dynamicString | Text shown in UI | text: Unload %{self.transportingCount()} units | NaN |
| NaN | textPostFix: | string | Text shown as suffix, useful with textAddUnitName to create text UI | text: [ textPostFix: ] textAddUnitName: unitRef self.attachment(slot="${slotId}") | NaN |
| NaN | text\_{LANG} | string | NaN | NaN | NaN |
| NaN | description | dynamicString | A display text when you select your unit's action, used to explain it's purpose. | NaN | NaN |
| NaN | description\_{LANG} | dynamicString | NaN | NaN | NaN |
| NaN | displayType | list | none, rally, upgrade, queueUnit, building, action, infoOnly, infoOnlyNoBox | NaN | NaN |
| NaN | displayRemainingStockpile | bool | Queue is shown as number of times action can be triggered based on price | NaN | NaN |
| NaN | pos | float | Order action appears in UI | NaN | NaN |
| NaN | iconImage | file (image) | Adds an icon for the action. | NaN | NaN |
| 1.14 | iconExtraImage | file (image) | Drawn over top of icon image. Useful for upgrade icons, etc | NaN | NaN |
| 1.14 | iconExtraColor | colour | Defaults to #64FFFFFF | NaN | NaN |
| 1.14 | iconExtraIsVisible | LogicBoolean | NaN | NaN | NaN |
| 1.13.3 | unitShownInUI | unitRef/unitType | Display this unit. (as if this action built this unit) | eg: unitShownInUI: unitRef self.transporting(slot=0) or unitShownInUI: heavyTank | NaN |
| 1.14 | setBuilt | float | Designates how built the unit is from a percentage of 0-100% with a number between 0 and 1. | NaN | NaN |
| NaN | guiBuildUnit | unitRef/unitType | UNFINISHED KEY??? Simulates the UI when building units/buildings through nano | NaN | NaN |
| NaN | NaN | NaN | Unit Reference - Dynamically parts from already existing units, useful w/ isAlsoViewableByEnemies | self, self.parent(), self.transporting(slot=x), self.attachment(slot=X) | NaN |
| 1.14 | textAddUnitName | unitRef/unitType | Add this unit's name to this action's text | eg: textAddUnitName: unitRef self.attachment(slot="1") | NaN |
| 1.14 | descriptionAddFromUnit | unitRef/unitType | Add this unit's description to this action's description | NaN | NaN |
| 1.14 | descriptionAddUnitStats: | unitRef/unitType | Add this unit's stats (eg HP, energy, resources) to this action's description | descriptionAddUnitStats: unitRef self.parent() | NaN |
| 1.14 | unitShownInUIWithHpBar | bool | default true, Only used when unitShownInUI is a unitRef | NaN | NaN |
| 1.14 | unitShownInUIWithProgressBar | bool | default true, Only used when unitShownInUI is a unitRef. Replaces HP bar if active | NaN | NaN |
| NaN | NaN | NaN | Requirements for player/AI to use in UI | NaN | NaN |
| 1.14 | alwaysSinglePress | bool | Defaults false. When true no confirmation needed on mobile, when used with canPlayerCancel:false and allowMultipleInQueue:false will also hide the queue interface. | NaN | NaN |
| NaN | price | resources | The price of your action for the unit. Disables action if not available. Defaults to credits if unlabelled | price: credits=5, energy=5, hp=100, shield=5, ammo=1 | NaN |
| NaN | isActive | LogicBoolean | Defaults true. If false then action is disabled and shown in red in UI. | NaN | NaN |
| NaN | isVisible | LogicBoolean | Defaults true. If false action is hidden from UI and disabled. | NaN | NaN |
| NaN | isLocked | LogicBoolean | Defaults false. If true action is disabled, and a lock icon is shown. Mostly used for no nuke game modes | NaN | NaN |
| NaN | isLockedMessage | DynamicLocaleString | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt | LogicBoolean | Another reason for this to be locked. Can just use OR on isLocked, but this allows a different message to be shown | NaN | NaN |
| 1.13.3 | isLockedAltMessage | LocaleString | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt2 | LogicBoolean | NaN | NaN | NaN |
| 1.13.3 | isLockedAlt2Message | LocaleString | NaN | NaN | NaN |
| NaN | allowMultipleInQueue | NaN | NaN | NaN | NaN |
| NaN | onlyOneUnitAtATime | bool | When action is picked in UI, only one unit selected with get this action. Defaults to false. | NaN | NaN |
| 1.13.3 | isGuiBlinking | LogicBoolean | Flashes in UI to draw attention to it. Might be annoying if used often, recommended only for temporarily states/messages | NaN | NaN |
| 1.14 | isAlsoViewableByAllies | bool | Allows ally players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN | NaN |
| 1.14 | isAlsoViewableByEnemies | bool | Allows enemy players to see actions from this unit, useful for showing stats to other players (eg missile count, items collected) | NaN | NaN |
| NaN | NaN | NaN | AI - How the AI uses this action | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | ai\_isHighPriority | LogicBoolean | Use this for faction selection actions or other high priority actions such as building high priority units | NaN | NaN |
| NaN | ai\_isDisabled | LogicBoolean | Defaults false. Stop AI using this action. | NaN | NaN |
| 1.13.3 | ai\_considerSameAsBuilding | NaN | Be careful with | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Triggers - These skip the queue and do not use price, ignores isLocked, buildTime, etc | (Use 2 actions and alsoQueueAction to automatically add an action to the queue) | NaN |
| 1.13.3 | autoTriggerOnEvent | NaN | Parameters: created, completeAndActive, destroyed, killedAnyUnit, queuedUnitFinished, queueItemAdded, queueItemCancelled, teleported, touchTargetSuccess, newWaypointGivenByPlayer, teamChanged, transportingNewUnit, transportUnloadedOrRemovedUnit, tookDamage | NaN | NaN |
| NaN | autoTrigger | LogicBoolean | When true triggers the effects of this action instantly (ignoring price, isActive, isVisible, buildSpeed, etc) | autoTrigger: if self.overWater(), autoTrigger: if self.customTimer(laterThanSeconds=5) | NaN |
| NaN | NaN | NaN | While action is queued | NaN | NaN |
| NaN | buildSpeed | time | NaN | buildSpeed: 5s | NaN |
| NaN | buildSpeed\_ignoreFactorySpeedModifiers | bool? | NaN | NaN | NaN |
| NaN | highPriorityQueue | bool | Defaults to false. If true this action skips all other low priority actions in queue. Useful for fireTurret actions. | NaN | NaN |
| NaN | canPlayerCancel | bool | When false, it prevents the player to cancel the action | NaN | NaN |
| NaN | whenBuilding\_cannotMove | bool | Stops unit moving while action is being applied. Useful for deploy like actions. | NaN | NaN |
| NaN | whenBuilding\_playAnimation | animation ref | Plays animation when the action is queued | NaN | NaN |
| NaN | whenBuilding\_rotateTo | float | Rotate unit body to this direction when action is in active queue | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_orBackwards | bool | If true allow rotation in 180 degrees from whenBuilding\_rotateTo when this is a smaller angle | NaN | NaN |
| NaN | whenBuilding\_rotateTo\_waitTillRotated | bool | Pause action queue till rotation is finished | NaN | NaN |
| NaN | whenBuilding\_temporarilyConvertTo | unit ref | Convert to another unit while action is in active queue. Note: actions from the original unit will be kept | NaN | NaN |
| NaN | whenBuilding\_triggerAction | action ref | Triggers a specified action while the action is queued | NaN | NaN |
| 1.14 | whenBuilding\_rotateTo\_aimAtActionTarget | bool | Rotates the unit on the direction where the target is placed (especially when using fireTurretXAtGround) | NaN | NaN |
| 1.14 | whenBuilding\_rotateTo\_rotateTurretX | turret ref | Rotates the specifed turret on the direction where the target is placed | NaN | NaN |
| NaN | spawnEffectsOnQueue | effect ref | Effects to spawn at unit when action is first added to queue | NaN | NaN |
| NaN | playSoundToPlayerOnQueue | sound ref | Global sound to play to unit's player only when action is first added to queue | NaN | NaN |
| NaN | NaN | NaN | Misc outcomes / Results (What happens) (Note: Must be at least one outcome for an action to show) | NaN | NaN |
| NaN | requireConditional | NaN | Skip all effects of this action if this evaluates to false | NaN | NaN |
| 1.13.3 | convertTo | unit ref | Convert your unit into another unit. properties are preserved. | NaN | NaN |
| 1.14 | convertTo\_keepCurrentTags | NaN | Keep current and temporarily tags and ignores default tags on convertTo target. | NaN | NaN |
| NaN | addEnergy | float | Adds energy to unit. Has no effect unless energyMax is set. (Same as addResources: energy=X) | NaN | NaN |
| NaN | addResources | resources | Add these resources when action finishes. | addResources: credits=5, energy=-5, hp=-100, shield=5, ammo=1 | NaN |
| NaN | addResourcesScaledByAIHandicaps | NaN | Same as addResources, but increased or decreased depending on AI difficulty level | NaN | NaN |
| NaN | deleteSelf | NaN | Remove self with no explosions or sounds | NaN | NaN |
| NaN | resetCustomTimer | LogicBoolean | Reset timer used with self.customTimer() | NaN | NaN |
| 1.13.3 | setBodyRotation | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Chaining Actions | NaN | NaN |
| NaN | alsoTriggerAction | action refs | Trigger to results of another action as well. Ignores action's requirements. | alsoTriggerAction: addCredits, playSound | NaN |
| NaN | alsoQueueAction | action refs | Adds another action into the normal unit's queue. Ignores action's requirements | NaN | NaN |
| NaN | alsoTriggerOrQueueActionConditional | LogicBoolean | Defaults true. alsoTriggerAction and alsoQueueAction are ignored if this works out to be false. | NaN | NaN |
| NaN | NaN | NaN | Outcome - Sounds | NaN | NaN |
| NaN | playSoundAtUnit | sound ref | Local sound to play when action finishes | NaN | NaN |
| NaN | playSoundGlobally | sound ref | Global sound to play to all players in game | NaN | NaN |
| NaN | playSoundToPlayer | sound ref | Global sound to play to unit's player only | NaN | NaN |
| NaN | NaN | NaN | Outcome - Fire projectile from turret | NaN | NaN |
| NaN | fireTurretXAtGround | turret ref | When action finishes fire target turret at point on ground, bypasses canShoot rules in turret. | fireTurretXAtGround: nukeSilo | NaN |
| NaN | fireTurretXAtGround\_withOffset | point | If not set player targets the ground with GUI, if a point is set this step is skipped | fireTurretXAtGround\_withOffset: 0,0 | NaN |
| NaN | fireTurretXAtGround\_withProjectile | projectile ref | Used with fireTurretXAtGround. Defaults to target turret's normal projectile. | NaN | NaN |
| 1.13.3 | fireTurretXAtGround\_count | NaN | Number of projectiles to fire. Defaults to 1 | NaN | NaN |
| 1.13.3 | fireTurretXAtGround\_onlyOverPassableTileOf | NaN | Only allow tiles crossable by this movement type to be selected | LAND,BUILDING,WATER,HOVER, etc | NaN |
| NaN | NaN | NaN | Outcome - Spawning | NaN | NaN |
| 1.13.3 | spawnUnits | NaN | Spawns specified units | eg: spawnUnits: heavyTank, tank\*5, hoverTank(offsetX=10) | NaN |
| NaN | spawnEffects | effect ref | Effects to spawn at unit | NaN | NaN |
| 1.13.3 | produceUnits | NaN | Like spawnUnits but unit exits as if it was produced normally, and gets a move away waypoint | NaN | NaN |
| NaN | NaN | NaN | Outcome - Position | NaN | NaN |
| 1.14 | offsetSelfAbsolute: | point3d | Changes unit position absolutely to its current position | offsetSelfAbsolute: 0, 0, 40 [x,y,height] | NaN |
| NaN | NaN | NaN | Outcome - Transport Changes | NaN | NaN |
| NaN | addUnitsIntoTransport | unitTypes | Add units into transport, use self.transportingCount() to check for space before adding | addUnitsIntoTransport: tank\*3, heavyTank(neutralTeam=true) | NaN |
| NaN | deleteNumUnitsFromTransport | int | Removes specified number of units on transport | NaN | NaN |
| 1.13.3 | deleteNumUnitsFromTransport\_onlyWithTags | string(s) | Same with deleteNumUnitsFromTransport, but more narrowed | NaN | NaN |
| 1.13.3 | startUnloadingTransport | bool | Unloads unit from transport normally | NaN | NaN |
| 1.13.3 | forceUnloadTransportNow | bool | For unload all units, or slot targeted by forceUnloadTransportNow\_onlyOnSlot. Unloads even if no space or overwater, etc | NaN | NaN |
| 1.14 | forceUnloadTransportNow\_onlyOnSlot | int | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Waypoint Changes | NaN | NaN |
| 1.13.3 | clearAllWaypoints | bool | Clears all waypoints, be careful not to annoy players by removing their orders, prepending waypoints is often better | NaN | NaN |
| 1.13.3 | clearActiveWaypoint | bool | NaN | NaN | NaN |
| NaN | addWaypoint\_type | NaN | move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget | NaN | NaN |
| 1.13.3 | addWaypoint\_unitType | NaN | Only for use with addWaypoint\_type:build | NaN | NaN |
| 1.13.3 | addWaypoint\_prepend | bool | Add to the start of the waypoint queue or the end | NaN | NaN |
| 1.13.3 | addWaypoint\_triggerActionIfFailed | actions | If target\_nearestUnit fails to find a match so waypoint cannot be added then trigger this action | NaN | NaN |
| 1.14 | addWaypoint\_triggerActionIfMatched | actions | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_maxTime | time | Automatically remove this waypoint if it has been active for longer than this time. | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_tagged | tags | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_team | relation | own|neutral|allyNotOwn|ally|enemy|any | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_nearestUnit\_maxRange | float | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_target\_mapMustBeReachable | bool | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_offsetFromSelf | point | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_fromAction | bool | NaN | NaN | NaN |
| 1.13.3 | addWaypoint\_position\_randomOffsetFromSelf | NaN | Same as above, but random. | NaN | NaN |
| 1.14 | addWaypoint\_position\_relativeOffsetFromSelf | point | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_tagged | NaN | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_team | NaN | NaN | NaN | NaN |
| 1.14p6 | addWaypoint\_target\_randomUnit\_maxRange | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Cooldown | NaN | NaN |
| 1.14 | addActionCooldownTime | time | Player cannot use action again for this amount of time | NaN | NaN |
| 1.14 | addAllActionCooldownsTime | time | Same as addActionCooldownTime, but affects all actions and build menu | NaN | NaN |
| 1.14 | addActionCooldownApplyToActions | action ids | Sets addActionCooldownTime's target. Defaults to this action. | NaN | NaN |
| 1.14 | clearAllActionCooldowns | NaN | Removes all cooldown | NaN | NaN |
| NaN | NaN | NaN | Outcome - Animation | NaN | NaN |
| 1.13.3 | playAnimation | animation id | NaN | NaN | NaN |
| 1.13.3 | playAnimationIfNotPlaying | bool | Don't restart animation if this animation is already playing | NaN | NaN |
| 1.13.3 | finishPlayingLastAnimation | bool | Finish last animation, including blend out | NaN | NaN |
| 1.13.3 | stopLastAnimation | bool | Stop last animation, skipping blend out | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.13.3 | switchToNeutralTeam | boolean | Change team to neutral. This team is allied to all other teams. Will be captured by nearby units unless [core]stayNeutral:true is used | NaN | NaN |
| 1.13.3 | switchToAggressiveTeam | boolean | Change to a built-in team that is aggressive to all other teams. Does not get captured. | NaN | NaN |
| 1.15 | switchToTeam | logicNumber | Team id to switch to. Starts at 0. (but -1 for a neutral team, -2 for aggressive Team) | NaN | NaN |
| NaN | NaN | NaN | Outcome - Take Resources from other units | NaN | NaN |
| 1.13.3 | takeResources | customPrice | Resources to take (required to use take resources). And at-least 1 include key is needed. | takeResources: hp=5, gold=10 | NaN |
| 1.13.3 | takeResources\_includeUnitsInTransport | bool | NaN | NaN | NaN |
| 1.13.3 | takeResources\_includeParent | bool | Include attachment parent or transport parent | NaN | NaN |
| 1.13.3 | takeResources\_includeUnitsWithinRange | float | NaN | NaN | NaN |
| 1.13.3 | takeResources\_includeUnitsWithinRange\_team | TeamRelation | Used with includeUnitsWithinRange, defaults to own. Can be: own|ally|allyNotOwn|enemy|neutral|any | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutTags | tags | NaN | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithTheseResources | customPrice | NaN | NaN | NaN |
| 1.13.3 | takeResources\_excludeUnitsWithoutAllResources | bool | Defaults to true. | NaN | NaN |
| 1.13.3 | takeResources\_triggerActionIfAnyCollected | action refs | NaN | NaN | NaN |
| 1.13.3 | takeResources\_triggerActionIfNoneCollected | action refs | NaN | NaN | NaN |
| 1.13.3 | takeResources\_discardCollected | bool | Just take resources from targets, don't add(or remove) to self | NaN | NaN |
| 1.13.3 | takeResources\_keepResourcesOnTarget | bool | Don't add/remove resource from target. This clones resources. Use with takeResources\_discardCollected and takeResources\_triggerActionIfAnyCollected to make a resource detector. | NaN | NaN |
| NaN | takeResources\_maxUnits | int | Defaults to 1. | NaN | NaN |
| 1.14 | takeResources\_directTransferStoppingAtZero | bool | If less resources on target than transfer amount, only remaining resources will be transfered. Doesn't support use with some other takeResources\_\* keys | NaN | NaN |
| NaN | NaN | NaN | Outcome - Convert Resources | NaN | NaN |
| 1.13.3 | convertResource\_from | customResource | Name of custom resource to take from | NaN | NaN |
| 1.13.3 | convertResource\_to | customResource | Name of custom resource to give to | NaN | NaN |
| 1.13.3 | convertResource\_minAmount | float | Skip if less than this amount in 'from'. Defaults to 0. Likely not needed for most use cases | NaN | NaN |
| 1.13.3 | convertResource\_maxAmount | float | Max amount to transfer between 'from' and 'to' | NaN | NaN |
| 1.13.3 | convertResource\_multiplyAmountBy | float | Defaults to 1. Amount to multiply when adding on 'to' (does not effect amount taken on 'from') | NaN | NaN |
| NaN | NaN | NaN | Outcome - Set Resources | NaN | NaN |
| 1.13.3 | resourceAmount | customResource | Name of custom resource to set with the below 3 keys. All keys are optional, and can be used together. | resourceAmount: oil | NaN |
| 1.13.3 | resourceAmount\_setValue | float | Absolute value to set this resource to, ignores current value of resource. Skipped by default | resourceAmount\_setValue: 20 | NaN |
| 1.13.3 | resourceAmount\_addOtherResource | customResource | Name of another custom resource to add to this on. Can be used without resourceAmount\_setValue, to just add resources. Or with resourceAmount\_setValue:0 to copy a resource value. | NaN | NaN |
| 1.13.3 | resourceAmount\_multiplyBy | float | Defaults to 1. Multiple the current or new value by | NaN | NaN |
| NaN | NaN | NaN | Outcome - Attachment changes | NaN | NaN |
| 1.13.3 | attachments\_addNewUnits | unit types | NaN | NaN | NaN |
| 1.13.3 | attachments\_deleteNumUnits | int | NaN | NaN | NaN |
| 1.13.3 | attachments\_onlyOnSlots | attachment ids | Restrict attachments\_\* actions to these attachments | NaN | NaN |
| 1.13.3 | disconnectFromParent | bool | NaN | NaN | NaN |
| 1.14 | attachments\_unload | bool | Unload all attachments. Can be used with attachments\_onlyOnSlots. Same as unloading transported units | NaN | NaN |
| 1.14 | attachments\_disconnect | bool | Disconnect all attachments in the place they are right now. Can be used with attachments\_onlyOnSlots. | NaN | NaN |
| NaN | NaN | NaN | Outcome - Tag changes | NaN | NaN |
| 1.13.3 | temporarilyAddTags | tags | Add tag to this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN | NaN |
| 1.13.3 | temporarilyRemoveTags | tags | Remove tag from this unit until it is converted or reset (unless convertTo\_keepCurrentTags is used) | NaN | NaN |
| 1.13.3 | resetToDefaultTags | bool | Reset to standard tags | NaN | NaN |
| 1.13.3 | addGlobalTeamTags | tags | Add a tag to player's team. Use with self.globalTeamTags() to create unlocks and upgrades. Unique tags are best to not conflict with other mods. | NaN | NaN |
| 1.13.3 | removeGlobalTeamTags | tags | Remove a tag from player's team. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Outcome - Show Message | NaN | NaN |
| 1.13.3 | showMessageToPlayer | string | Sends a message to the player controlling the unit | NaN | NaN |
| 1.13.3 | showMessageToPlayer\_{LANG} | string | Note: This format is support on nearly all strings that show to player even when reference doesn't show it | NaN | NaN |
| 1.13.3 | showMessageToAllPlayers | string | Sends a message to all players | Eg: showMessageToAllPlayers: %{self.playerName} has captured a point | NaN |
| 1.14 | showMessageToAllEnemyPlayers | string | NaN | showMessageToAllEnemyPlayers: Team %{self.playerName} has %{self.resource.gold} | NaN |
| 1.13.3 | showQuickWarLogToPlayer | string | Sends a Quick War Log message to the player controlling the unit (in the lower lef) | NaN | NaN |
| 1.13.3 | showQuickWarLogToAllPlayers | NaN | Sends a Quick War Log message to all players (in the lower lef) | NaN | NaN |
| 1.13.3 | debugMessage | NaN | Only shows in Sandbox with Debug mode on. | NaN | NaN |
| NaN | Type | NaN | Spawn units line | Spawn lines specifically for units, used with "unit ref" value types | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| NaN | NaN | NaN | Most units spawning keys support multiple units with parameters | spawnUnits: crates\*10(neutralTeam=true), tank(spawnChance=0.5) | NaN |
| 1.13.3 | neutralTeam | bool | Spawn the unit on the neutral team instead of the same team as source | NaN | NaN |
| 1.13.3 | setToTeamOfLastAttacker | bool | Spawn the unit on the last attacker of source (useful on [core]unitsSpawnedOnDeath) | NaN | NaN |
| 1.13.3 | spawnChance | float | Chance this unit will spawn. Defaults to 1. | NaN | NaN |
| 1.13.3 | maxSpawnLimit | int | Useful with spawnChance, max number of units to spawn in total | spawnUnits: treeA(spawnChance=0.5, maxSpawnLimit=1), treeB(maxSpawnLimit=1) | NaN |
| 1.13.3 | gridAlign | bool | Align spawn location to grid, useful for buildings | NaN | NaN |
| 1.13.3 | skipIfOverlapping | bool | Don't spawn this unit if spawn in an invalid location. Eg on units or over water when LAND based | NaN | NaN |
| 1.13.3 | offsetX | float | NaN | NaN | NaN |
| 1.13.3 | offsetY | float | NaN | NaN | NaN |
| 1.13.3 | offsetRandomX | float | NaN | NaN | NaN |
| NaN | techLevel | int | Sets unit techLevel, very useful in mods that use the damagingBorder and zone marker (found in BR servers) | NaN | NaN |
| NaN | offsetRandomY | float | NaN | NaN | NaN |
| NaN | offsetRandomDir | float | NaN | NaN | NaN |
| 1.13.3 | offsetHeight | float | NaN | NaN | NaN |
| 1.13.3 | offsetDir | float | NaN | NaN | NaN |
| 1.13.3 | addResources | resource ref | Give spawn unit those resources, can be used to set flags that trigger actions | spawnUnits: crates(addResource=gold:30|stone:10, spawnChance=0.5) | NaN |
| 1.14 | transportedUnitsToTransfer | int | Puts the designated amount of transported units into the transport of the spawned unit. | spawnUnits: transporter(transportedUnitsToTransfer=5) | NaN |
| 1.14 | alwayStartDirAtZero | bool | NaN | NaN | NaN |
| NaN | Type | NaN | Spawn Projectiles line | Spawn lines specifically for projectiles, used with "proj ref" value types | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| 1.14 | NaN | NaN | Most projectile spawning keys used for projectile ref | spawnProjectilesOnEndOfLife: secondary\*3(spawnChance=0.5) | NaN |
| 1.14 | spawnChance | float | Chance this projectile will spawn. Defaults to 1. | spawnChance: 0.5 | NaN |
| 1.14 | maxSpawnLimit | int | Maximum amount to spawn | NaN | NaN |
| 1.14 | recursionLimit | int | Prevents loops, useful with spawning itself so it doesn't infinitely spawn, good for chain exploding | recursionLimit: 5 (Recommended no more than 4 if spawning more than 3 projectiles) | NaN |
| 1.14 | offsetX | float | NaN | NaN | NaN |
| 1.14 | offsetY | float | NaN | NaN | NaN |
| 1.14 | xOffsetRelative | float | Similar to offsetX, but the offset is relative to the position of the projectile | NaN | NaN |
| 1.14 | yOffsetRelative | float | Similar to xOffsetRelative, but for Y axis | NaN | NaN |
| 1.14 | offsetRandomX | float | Random value to offset in the X axis only | NaN | NaN |
| 1.14 | offsetRandomY | float | Random value to offset in the Y axis only | NaN | NaN |
| 1.14 | offsetRandomXY | float | The offset in both directions to randomly spawn, makes truly random spawning within an area | NaN | NaN |
| 1.14 | offsetHeight | float | NaN | NaN | NaN |
| 1.14 | offsetDir | degrees | NaN | NaN | NaN |
| 1.14 | offsetRandomDir | degrees | NaN | NaN | NaN |
| NaN | Type | NaN | LogicBoolean | Advanced code to create conditionals and triggers | NaN |
| NaN | Code | NaN | Description | Example | NaN |
| NaN | true | NaN | NaN | NaN | NaN |
| NaN | false | NaN | NaN | NaN | NaN |
| NaN | if | NaN | Start all logic booleans with if, unless just using true/false | NaN | NaN |
| NaN | and | NaN | NaN | if self.isInWater() and self.energy(greaterThan=1) | NaN |
| NaN | or | NaN | NaN | if (self.energy(greaterThan=1) or self.ammo(greaterThan=1)) and self.isFlying() | NaN |
| NaN | not | NaN | NaN | if not self.isOverLiquid() | NaN |
| NaN | NaN | NaN | Unit location and movement | NaN | NaN |
| NaN | self.isUnderwater() | NaN | NaN | NaN | NaN |
| NaN | self.isAtGroundHeight() | NaN | NaN | NaN | NaN |
| NaN | self.isFlying() | NaN | NaN | NaN | NaN |
| NaN | self.isMoving() | NaN | NaN | NaN | NaN |
| NaN | self.isAtTopSpeed() | NaN | NaN | NaN | NaN |
| NaN | self.isInWater() | NaN | Touching water | NaN | NaN |
| NaN | self.isOverwater() | NaN | Touching or over a water tile | NaN | NaN |
| NaN | self.isOverLiquid() | NaN | NaN | NaN | NaN |
| NaN | self.isOverClift() | NaN | NaN | NaN | NaN |
| NaN | self.isOverPassableTile() | NaN | (parameters: type) | NaN | NaN |
| NaN | self.isOverOpenLand() | NaN | shortcut for self.isOverPassableTile(type='LAND') | NaN | NaN |
| NaN | NaN | NaN | Unit stats | NaN | NaN |
| 1.13.3 | self.hasResources() | NaN | Can check multiple resources (all price parameters) | NaN | NaN |
| NaN | self.resource() | NaN | Checks a single resource (parameters: type, greaterThan, lessThan) | NaN | NaN |
| 1.14? | self.isResourceLargerThan | NaN | Compare two resource between each other, note multiplyTargetBy doesn't make any changes. (parameters: source=x, compareTarget=x, byMoreThan=x, multiplyTargetBy=x) | NaN | NaN |
| NaN | self.hp() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.height() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.ammo() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.isAmmoEmpty() | NaN | shortcut for self.ammo(empty=true) | NaN | NaN |
| NaN | self.ammoIncludingQueued() | NaN | Also includes ammo from actions still in queue (parameters: greaterThan, lessThan, empty, full) | if self.ammoIncludingQueued(lessThan=12) | NaN |
| NaN | self.energy() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.energyIncludingQueued() | NaN | Also includes energy from actions still in queue (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.isEnergyFull() | NaN | shortcut for self.energy(full=true) | NaN | NaN |
| NaN | self.isEnergyEmpty() | NaN | shortcut for self.energy(empty=true) | NaN | NaN |
| NaN | self.shield() | NaN | (parameters: greaterThan, lessThan, empty, full) | NaN | NaN |
| NaN | self.kills() | NaN | (parameters: greaterThan, lessThan) | NaN | NaN |
| 1.13.3 | self.queueSize() | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | Misc | NaN | NaN |
| NaN | self.hasFlag() | NaN | Boolean flag saved into units for mods to use. (parameters: id=0-31) | Use addResources in action change this value | NaN |
| NaN | self.tags() | NaN | (parameters: includes) | NaN | NaN |
| 1.13.3 | self.globalTeamTags() | NaN | (parameters: includes) | NaN | NaN |
| NaN | self.transportingCount() | NaN | (parameters: greaterThan, lessThan, empty) | NaN | NaN |
| NaN | self.numberOfAttachedUnits() | NaN | (withTag, greaterThan, lessThan) | NaN | NaN |
| NaN | self.isAttacking() | NaN | NaN | NaN | NaN |
| NaN | self.hasActiveWaypoint() | NaN | (parameter: type=x [x can be the following: move, attackMove, guard, loadInto, loadUp, attack, reclaim, repair, touchTarget, build, follow, setPassiveTarget]) | self.hasActiveWaypoint(type='attack') | NaN |
| NaN | self.transportingUnitWithTags() | NaN | (parameters: includes) | self.transportingUnitWithTags(includes='human') | NaN |
| NaN | self.hasParent() | NaN | For both attachments and transports (parameters: [withTag=x] ) | NaN | NaN |
| NaN | self.hasTakenDamage() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | self.hasTakenDamage(withinSeconds=1) | NaN |
| NaN | self.timeAlive() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.lastConverted() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.customTimer() | NaN | (parameters: withinSeconds=X, laterThanSeconds=X) | NaN | NaN |
| NaN | self.isOnNeutralTeam() | NaN | NaN | NaN | NaN |
| 1.13.3 | self.isControlledByAI() | NaN | NaN | NaN | NaN |
| 1.13.3 | self.hasUnitInTeam() | NaN | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN |
| 1.13.3 | self.noUnitInTeam() | NaN | (parameters: withTag, withinRange, incompleteBuildings, factoryQueue) alias for numberOfUnitsInTeam | NaN | NaN |
| NaN | numberOfUnitsInTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | numberOfUnitsInTeam(withTag='techUnlockBuilding', greaterThan=0) | NaN |
| NaN | numberOfUnitsInNeutralTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.13.3 | numberOfUnitsInEnemyTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.14 | numberOfUnitsInAggressiveTeam() | NaN | The special 'aggressive to all' team (this is not the same as numberOfUnitsInEnemyTeam) (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| 1.14 | self.numberOfUnitsInAllyNotOwnTeam() | NaN | (parameters: withTag, greaterThan, lessThan, withinRange, incompleteBuildings, factoryQueue) | NaN | NaN |
| NaN | game.nukesEnabled() | NaN | NaN | NaN | NaN |
| 1.14 | Type | NaN | [placementRule\_NAME] | Allows creation of rules for requiring buildings | NaN |
| 1.14 | Code | Value Type | Description | Example | NaN |
| 1.14 | anyRuleInGroup: | string | (Only require 1 of the rules in this group pass, instead of all. Use the same group name on other placement rules to create a group.) | NaN | NaN |
| 1.14 | searchTags: | tag list | Search for any unit with at least one of these tags | NaN | NaN |
| 1.14 | searchTeam: | relation | Teams to include in search, can be: own|neutral|allyNotOwn|ally|enemy|any | NaN | NaN |
| 1.14 | searchOffsetX: | float | defaults to 0 | NaN | NaN |
| 1.14 | searchOffsetY: | float | defaults to 0 | NaN | NaN |
| 1.14 | searchDistance: | float | Required | NaN | NaN |
| 1.14 | excludeIncompleteBuildings: | bool | defaults to false. Might want to set to true depending on the requirement reason | NaN | NaN |
| 1.14 | excludeNonBuildings: | bool | defaults to false | NaN | NaN |
| 1.14 | minCount: | int | Set min amount of units that need to be found in search. (eg needs to be near something). Defaults to 0 | NaN | NaN |
| 1.14 | maxCount: | int | Set max amount of units before match fails (eg cannot be close to something). Defaults to unlimited | NaN | NaN |
| 1.14 | blocksPlacement: | bool | Defaults to true. | NaN | NaN |
| 1.14 | cannotPlaceMessage: | LocaleString | Highly Recommended. Message shown to player if this rule fails (will be first failing rule if using anyRuleInGroup). | NaN | NaN |
| 1.14 | checkEachTile: | bool | defaults to true (set to false to only test unit center, true checks each tile under the unit which shows up on the placement grid. Can be easier to see requirements with true) | NaN | NaN |
| NaN | aiSuggestionOnly | bool? | allegedly only AI is affected | NaN | NaN |
| NaN | Section | NaN | Prices/Resources lines - used by addResources, price, etc | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | credits | NaN | Global resource | NaN | NaN |
| NaN | energy | NaN | NaN | NaN | NaN |
| NaN | hp | NaN | NaN | NaN | NaN |
| NaN | shield | NaN | NaN | price: hp=-100, shield=100 | NaN |
| NaN | ammo | NaN | Hidden value on each unit for use by mods | NaN | NaN |
| NaN | setFlag | NaN | use with addResources, resourceUsage or price. 0-31. Flags are stored in each unit | setFlag=1, setFlag=0-10 (will set the flags from 0 to 10) | NaN |
| NaN | unsetFlag | NaN | use with addResources, resourceUsage or price. 0-31 | NaN | NaN |
| NaN | hasFlag | NaN | use with price or resourceUsage | NaN | NaN |
| NaN | hasMissingFlag | NaN | use with price or resourceUsage | NaN | NaN |
| 1.13.3 | [resource] | resource ref | Any resource defined in [global\_resource\_x] or [resource\_x] sections | gold=5, stone=20 | NaN |
| NaN | Section | NaN | [global\_resource\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Define a new resource shared with all units in a team, works just like the built-in credits resource. Add to 'all-units.template' (at mod root) for easy use in all of your mods | NaN | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI | NaN | NaN |
| 1.13.3 | displayNameShort | NaN | Resource name on smaller UI elements like action hovertext (Defaults to displayName) | NaN | NaN |
| 1.13.3 | hidden | bool | Hide this resource from the player | NaN | NaN |
| 1.13.3 | priority | NaN | If 2 or mods/units define a resource with the same NAME, the displayName/displayColor with the highest priority is used | NaN | NaN |
| 1.13.3 | displayColor | color | Color, can be hex with optional alpha | #FF0000 | NaN |
| 1.14 | displayRoundedDown | bool | Don't show decimal places to the player | NaN | NaN |
| NaN | displayWhenZero | bool | Default false | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [resource\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| NaN | NaN | NaN | Define a new resource local to unit. Works like build-in ammo resource | NaN | NaN |
| 1.13.3 | displayName | NaN | Name of this resource in UI (eg hovering over unit info) | NaN | NaN |
| 1.13.3 | displayNameShort | NaN | NaN | NaN | NaN |
| 1.13.3 | hidden | NaN | Hide this resource from the player | NaN | NaN |
| NaN | equivalentGlobalResourceForAI | NaN | Used to hint to the AI that a resource node with a local resources could be used to get a different global resource. Eg when a harvester unloads the resource | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| 1.14 | displayRoundedDown | NaN | NaN | NaN | NaN |
| NaN | Section | NaN | [template\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | NaN | NaN | Template sections can have any keys and have no effect by themselves. | NaN | NaN |
| NaN | NaN | NaN | Template can get included from other files with [core]copyFrom. Eg: [core]copyFrom: ROOT:effects/explodeEffects.template (Note that copyFrom can include multiple files. ) | NaN | NaN |
| NaN | NaN | NaN | --All these below features can be used with any section not just templates-- | NaN | NaN |
| 1.13.3 | @copyFromSection | NaN | Use in any section to include keys from a section or template. (Comma separated for multiple) | @copyFromSection: template\_name/action\_name/projectile\_name | NaN |
| NaN | @copyFrom\_skipThisSection | NaN | Use in any section to make [core]copyFrom not copy into it. Eg not copy an action when overriding | @copyFrom\_skipThisSection | NaN |
| NaN | @define X | NaN | Define a local variable within a section (best outside of template) | @define targetEffect: boom | NaN |
| NaN | @global X | NaN | Define a global variable used in all sections. Local variables have a higher priority | @global targetEffect: pop | NaN |
| 1.13.3 | NaN | NaN | ${X} can be used to reference variables (can also be done outside of a template) | spawnEffects: effect\_${targetEffect} | NaN |
| 1.13.3 | NaN | NaN | ${section.key} can be used to reference another key (can also be done outside of a template) | addResources: credits=${ core.price \* 2 + 10 } | NaN |
| NaN | Section | NaN | [comment\_NAME] | NaN | NaN |
| NaN | Code | Value Type | Description | Example | NaN |
| 1.13.3 | NaN | NaN | Comment sections can have any keys and have no effect. | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | List of default game noises (for turret fire sound or other sound references): | NaN | bug\_attack, bug\_die, building\_explode, cannon\_firing, click, click\_add, click\_remove, firing3, firing4, gun\_fire, interface\_error, large\_gun\_fire1, large\_gun\_fire2, laser\_deflect, laser\_deflect2, lighting\_burst, message, missile\_fire, missile\_hit, move, nuke\_explode, nuke\_launch, plasma\_fire, plasma\_fire2, tank\_firing, unit\_explode, unit\_explode\_old, warning | NaN | NaN |