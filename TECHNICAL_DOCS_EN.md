# RustedWarfare Mod Support — Technical Documentation (English)

This document explains the architecture, data formats, and extension points for the RustedWarfare Mod Support VS Code extension. It's intended for maintainers and contributors who need to understand how features are implemented and where to add new ones.

## High-level architecture

- Data-driven core: most completion items and hover docs are produced from JSON files under `data/`.
- Language features (completion/hover/decorations) are implemented in `src/` using small, focused providers.
- Build pipeline: `merge.js` prepares/merges translation and data files; `esbuild.js` bundles code for production.

## Key modules and responsibilities

1) `src/extension.ts`
- Registers language features and activation hooks.
- Registers completion providers for section names, section properties, and value completion providers.

2) `src/dataProcessor.ts`
- Utilities for parsing document text and computing context. Key helpers:
  - `isInsideSection(document, position, sectionName)` — whether the cursor is inside a specific section range.
  - `isAtValidLineStart(lineText, position)` — whether completion for a property name is valid at this position.
  - `hasColonInLine(lineText)` — helper to detect whether the cursor is in a value position.
  - `getSectionProperties(sectionName)` — read property definitions from `data/sections/`.
  - `getBaseSectionName(fullSectionName)` — normalize templated section names (e.g., `turret_basic` -> `turret`).

3) `src/completionProvider.ts`
- Implements `GenericCompletionProvider` (base) and specialized providers for many section types.
- Responsibilities:
  - Detect if provider should activate for a section
  - Load and filter property definitions for the current section and cursor position
  - Produce CompletionItem instances with label, documentation, detail, and appropriate insert text

4) `src/valueComple/`
- Contains providers for property value completion. Important files:
  - `BaseValueCompletionProvider.ts` — base class, provides dispatch and shared helpers
  - `BoolValueCompletionProvider.ts` — provides `true` / `false` suggestions
  - `LogicBooleanValueCompletionProvider.ts` — suggests grammar fragments for logical expressions
  - `UnitSpawnCompletionProvider.ts` — suggests valid unit names from data files
  - `valueCompletionProvider.ts` — orchestrates and routes requests to specific value providers

5) `src/hoverProvider.ts`
- Produces hover content for properties: resolved translated description, example, version notes, and whether the property is deprecated.

6) `src/decorator.ts` and `src/coralor/`
- Visual decorations and colorization logic for better readability.

7) `src/Section.ts`
- Parses document structure into section ranges and metadata used by completion and hover providers.

## Data formats

- `data/sections/<section>.json` — section property definitions.
  Example entry:

```json
{
  "data": [
    {
      "name": "drive",
      "type": "INTEGER",
      "description": "core.drive.description",
      "version": "1.10",
      "example": "18",
      "isOutdated": false
    }
  ]
}
```

- `translation/<lang>/*.json` — key/value translation files for description text shown in hover and completion details. `merge.js` consolidates them.

## Workflows

Property name completion:

1. User types in a section body. The active completion provider inspects the current section via `Section.ts`.
2. Provider calls `dataProcessor.getSectionProperties()` for the base section name.
3. Candidate properties are filtered by context (already present entries, cursor column, etc.) and returned as completion items.

Property value completion:

1. When user types `:` or moves into a value position, the `valueCompletionProvider` is triggered.
2. It determines the property type and dispatches to the appropriate value provider (boolean, unit, enum, etc.).
3. Value provider returns context-aware suggestions with documentation and snippet-like insertion when appropriate.

Hover content:

1. On hover, provider locates the property and reads its definition and translation key.
2. It resolves translation text and composes Markdown with details, example and version notes.

## Extending the extension

1. Add or update `data/sections/*.json` for new properties or sections. Keep descriptions as translation keys (not raw text) so translations can be maintained separately.
2. If a new value type is needed, create a new class under `src/valueComple/`, extend `BaseValueCompletionProvider`, implement `provideValues()` and register it in the central `valueCompletionProvider.ts`.
3. For section-specific logic, create a new completion provider class (extend `GenericCompletionProvider`) and register it in `src/extension.ts`.

## Build & packaging notes

- Always run `merge.js` (via `npm run merge-translations`) before production builds. The npm scripts' `pre*` hooks already call it.
- Production bundling uses `esbuild.js` to produce optimized output under `dist/` that is published as the extension entry via `main: ./dist/extension.js`.

## Troubleshooting

- If completions don't show, open the Extension Development Host (F5) and look for errors in the host's Developer Tools console.
- If translations are stale, re-run `npm run merge-translations` and rebuild.

## Contract (inputs/outputs)

- Inputs: editor document text, cursor position, project `data/` and `translation/` JSON files.
- Outputs: CompletionItem lists, Hover content, decorated ranges.

## Edge cases & notes

- Large documents: providers aim to operate on section-local ranges to avoid scanning entire files.
- Unknown sections: fallback providers attempt to use base section definitions where appropriate.
- Deprecated/outdated properties: `isOutdated` flags are surfaced in hover text and completion details.

If you need more detailed code pointers, tell me which feature or file you want to inspect and I'll list exact functions and usage sites.