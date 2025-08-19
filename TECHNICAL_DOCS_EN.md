# RustedWarfare Mod Support Technical Documentation

## Overview

RustedWarfare Mod Support is a VS Code plugin that provides intelligent code completion and information tips for Rusted Warfare game mod development. The plugin analyzes the structure of Rusted Warfare unit definition files and provides auto-completion of property names, property values, and documentation information for developers.

## Core Components

### 1. Plugin Entry [extension.ts](./src/extension.ts)

This is the entry file of the plugin, responsible for registering all functional components:

- Document Symbol Provider
- Various Completion Providers
- Hover Information Provider
- Syntax Highlighting Decorator

### 2. Data Processor [dataProcessor.ts](./src/dataProcessor.ts)

This module contains utility functions for processing and analyzing document content:

- `isInsideSection()` - Checks if the cursor is inside a specific section
- `isAtValidLineStart()` - Checks if the cursor is at a valid position
- `hasColonInLine()` - Checks if the line contains a colon
- `getSectionProperties()` - Gets the property definitions of a section
- `getBaseSectionName()` - Gets the base name of a section

### 3. Completion Providers [completionProvider.ts](./src/completionProvider.ts)

This is the core functionality module of the plugin, containing all property completion related classes:

#### 3.1 Generic Completion Provider

`GenericCompletionProvider` is the base class for all section completion providers, which:

- Checks if the current cursor position is within the target section
- Verifies if the cursor position is suitable for entering property names
- Gets the property definitions of the section
- Generates a list of completion items

#### 3.2 Specific Section Completion Providers

For different types of sections, the plugin provides dedicated completion provider classes:

- `CoreCompletionProvider` - core section
- `CanBuildCompletionProvider` - canBuild_* sections
- `GraphicsCompletionProvider` - graphics section
- `AttackCompletionProvider` - attack section
- `TurretCompletionProvider` - turret_* sections
- `ProjectileCompletionProvider` - projectile_* sections
- `MovementCompletionProvider` - movement section
- `AiCompletionProvider` - ai section
- `LegArmCompletionProvider` - leg_* and arm_* sections
- `AttachmentCompletionProvider` - attachment_* sections
- `ActionCompletionProvider` - action_* and hiddenAction_* sections
- `EffectCompletionProvider` - effect_* sections
- `AnimationCompletionProvider` - animation_* sections
- `GlobalResourceCompletionProvider` - global_resource_* sections
- `ResourceCompletionProvider` - resource_* sections
- `DecalCompletionProvider` - decal_* sections
- `PlacementRuleCompletionProvider` - placementRule_* sections

#### 3.3 Section Name Completion Provider

`SectionNameCompletionProvider` provides completion for section names, activated when the user types within square brackets.

### 4. Property Value Completion Providers [valueComple/](./src/valueComple/)

This directory contains modules for handling property value completion:

#### 4.1 Base Value Completion Provider [BaseValueCompletionProvider.ts](./src/valueComple/BaseValueCompletionProvider.ts)

This is the base class for all value completion providers, responsible for:

- Detecting if the cursor is at a property value position (after colon)
- Identifying the current section and property
- Dispatching to specific providers based on property type

#### 4.2 Boolean Value Completion Provider [BoolValueCompletionProvider.ts](./src/valueComple/BoolValueCompletionProvider.ts)

Provides true/false completion for boolean type properties.

#### 4.3 Logic Boolean Value Completion Provider [LogicBooleanValueCompletionProvider.ts](./src/valueComple/LogicBooleanValueCompletionProvider.ts)

Provides completion support for logic boolean expressions.

#### 4.4 Unit Spawn Completion Provider [UnitSpawnCompletionProvider.ts](./src/valueComple/UnitSpawnCompletionProvider.ts)

Provides unit name completion for unit spawn properties.

#### 4.5 Composite Value Completion Provider [valueCompletionProvider.ts](./src/valueComple/valueCompletionProvider.ts)

Integrates all value completion providers and provides unified value completion functionality.

### 5. Hover Information Provider [hoverProvider.ts](./src/hoverProvider.ts)

This module provides detailed information displayed on hover, showing detailed documentation when users hover over properties.

### 6. Decorator [decorator.ts](./src/decorator.ts)

Provides syntax highlighting and visual enhancement features.

### 7. Section Symbol Parser [Section.ts](./src/Section.ts)

Parses document structure, identifying the positions and ranges of various sections.

## Data File Structure

### 1. Section Definition Files [data/sections/](./data/sections/)

Each JSON file defines the properties of a section:

```json
{
  "data": [
    {
      "name": "propertyName",
      "type": "BOOLEAN|STRING|INTEGER|FLOAT|LIST|etc",
      "description": "description_key",
      "version": "version_info",
      "example": "example_value",
      "isOutdated": false
    }
  ]
}
```

### 2. Translation Files [translation/](./translation/)

Provides multilingual support, with each language directory containing corresponding translation key-value pairs.

### 3. Section Index File [data/sections.json](./data/sections.json)

Defines the names and basic descriptions of all available sections.

## Workflow

### 1. Property Name Completion Workflow

1. User types property name within a section
2. The corresponding section completion provider is activated
3. Cursor position is checked for suitability
4. Section property definitions are retrieved
5. Completion item list is generated and displayed to the user

### 2. Property Value Completion Workflow

1. User types colon after property name
2. Value completion provider is activated
3. Current section and property are identified
4. Appropriate value completion is provided based on property type
5. Completion items are displayed to the user

### 3. Hover Information Display Workflow

1. User hovers mouse over a property
2. Hover provider is activated
3. Property definitions and documentation information are retrieved
4. Information is formatted and displayed in detail

## Extensibility Design

The plugin uses a modular and data-driven design that is easy to extend:

1. To add support for a new section:
   - Create a section definition file
   - Create a completion provider class
   - Register in the entry file

2. To add support for a new property value type:
   - Inherit from BaseValueCompletionProvider
   - Implement value completion logic
   - Register in ValueCompletionProvider

3. Property definitions are completely managed through data files, no code modification required