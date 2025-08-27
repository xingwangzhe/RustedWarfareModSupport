# RustedWarfare Mod Support — Contributor Guide (English)

Thank you for considering contributing to RustedWarfare Mod Support. This document describes the project layout, recommended development environment, where to contribute, how to run and verify changes, and the preferred pull request workflow.

## Checklist — what this file covers

- Local environment and prerequisites
- How to run, build and package the extension
- Where to modify translations, section definitions, and TypeScript code
- Testing and verification steps (F5 + automated checks)
- PR guidance and style expectations

## Prerequisites

- Node.js (LTS recommended). Current project was tested with Node.js 22.x.
- npm (comes with Node.js). bun is optional and may speed up install/build.
- Optional: `vsce` to create/publish VSIX packages: `npm i -g @vscode/vsce`.

## Project layout (important files)

- `src/` — TypeScript source. Contains completion providers, hover provider, decorator, and value completion modules.
- `data/` — JSON data files (section definitions and examples). These drive most completion and hover text.
- `translation/` — L10n source; `merge.js` merges and sorts translations used by the extension.
- `syntaxes/` — VS Code grammar for ini / mod-info files.
- `esbuild.js` and `merge.js` — build scripts used before packaging.
- `package.json` — scripts and extension metadata (see scripts section below).

## Common scripts (from `package.json`) and how to use them

- `npm run compile` — run TypeScript build (uses `tsc -b`).
- `npm run watch` — merge translations then run `tsc -b -w` for incremental compilation.
- `npm run watch:esbuild` — merge translations then run `esbuild.js --watch` to rebuild with esbuild on change.
- `npm run package` — run type check, lint, then build production bundle with esbuild.
- `npm run merge-translations` — run the `merge.js` script to combine translation JSON files into the `translation` output.
- `npm run package:vsix` — merge translations then create a VSIX using `vsce package`.

Use `npm run <script>` in your terminal in the repository root.

## Development workflow (recommended)

1. Fork and clone your fork.
2. Install dependencies: `npm install` (or `bun install`).
3. Start a watch build: `npm run watch` (or `npm run watch:esbuild`).
4. Open the repo in VS Code and press F5 to open a new Extension Development Host window. Use that window to open `.ini` / `mod-info.txt` test files.
5. Iterate and test completion/hover behavior in the Extension Development Host.

Notes:
- `merge.js` must be run before builds so translation JSONs and merged data are up-to-date; the provided npm scripts run it automatically via `pre*` hooks.

## What to modify

- Translations: `translation/en/` and `translation/zh-cn/` contain per-module JSON. Run `npm run merge-translations` after edits.
- Section definitions: add or edit `data/sections/*.json`. Each file must follow the structure used by existing files (name, type, description key, example, version, isOutdated).
- Value completion: `src/valueComple/` contains modular value completion providers. Add a provider and register it in the value completion registry if creating a new type.
- Section completion: `src/completionProvider.ts` and related files — add new completion providers for custom sections and register them in `src/extension.ts`.

## Tests, linting and CI

- Lint: `npm run lint` (runs ESLint against `src` and `translation`).
- Type check: `npm run check-types`.
- Tests: `npm test` (uses `vscode-test`).

Before opening a PR, ensure: type checks pass, lint passes, and basic manual verification in the Extension Development Host.

## Adding a new section — concrete steps

1. Create `data/sections/<sectionName>.json` matching existing patterns (see other files in the folder).
2. If you need special completion logic, add a new provider in `src/` (extend `GenericCompletionProvider` or add small specialized logic).
3. Register the provider in `src/extension.ts` so it gets activated for matching section names.
4. Update or add translations keys in `translation/*` and run `npm run merge-translations`.
5. Build and test in Extension Development Host.

## Submitting a PR

1. Push a feature branch to your fork with a clear name (e.g., `feature/add-foo-section`).
2. Include a description of what changed and how to test it. If data files were added, include example files demonstrating usage.
3. Run `npm run lint` and `npm run check-types` locally and fix issues before PR.

PR Review tips:
- Keep changes scoped and small
- Prefer data-driven changes (editing `data/` and `translation/`) over large code refactors
- Add unit tests where appropriate

## Contact & resources

Open issues for questions, bug reports, or design proposals. Maintain clear, minimal reproduction steps for bugs.

Thank you for contributing!