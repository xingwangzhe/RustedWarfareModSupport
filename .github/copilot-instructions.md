# Copilot Instructions for RustedWarfareModSupport

## Project Overview

RustedWarfareModSupport is a VS Code extension that provides intelligent autocompletion, documentation hints, and development tools for RustedWarfare game mod development. The extension supports INI file editing with smart features for game configuration properties.

## Architecture & Patterns

### Core Extension Structure

- **Entry Point**: `src/extension.ts` - Main activation point for the VS Code extension
- **Provider Pattern**: Used for completion, hover, and folding providers
- **Factory Pattern**: Used for creating completion providers and decorators
- **Observer Pattern**: Used for configuration changes and document events

### Key Modules

1. **Completion System** (`src/completionProvider.ts`, `src/valueComple/`)

   - Generic completion for sections and properties
   - Value-specific completion providers for different data types
   - Memory definition completion

2. **Hover System** (`src/hoverProvider/`)

   - Detector/Creator pattern for hover content
   - Support for sections, properties, values, and image previews

3. **Syntax Highlighting** (`src/coralor/`)

   - Decoration system with throttled updates
   - TextMate grammar for INI syntax highlighting

4. **Data Processing** (`src/dataProcessor.ts`)
   - JSON-based configuration data loading
   - Localization support for data files

## Code Style Guidelines

### TypeScript Conventions

```typescript
// Use PascalCase for classes
class ImageValueCompletionProvider extends BaseValueCompletionProvider {}

// Use camelCase for methods and variables
public provideCompletionItems(document: vscode.TextDocument): void {}

// Use UPPER_SNAKE_CASE for constants
const DEFAULT_TRIGGER_CHARACTERS = [':', ' ', ','];

// Always use explicit types for public APIs
public createImageHover(path: string): vscode.Hover | null {}
```

### File Organization

- Group related functionality in modules
- Use `index.ts` files for clean exports
- Keep data files in `data/` directory
- Localization files in `translation/` directory

### Error Handling

```typescript
try {
  const result = await someOperation();
  return result;
} catch (error) {
  console.error("Operation failed:", error);
  return null; // or appropriate fallback
}
```

## VS Code Extension Patterns

### Provider Registration

```typescript
// Register providers in extension.ts
context.subscriptions.push(
  vscode.languages.registerCompletionItemProvider(
    { language: "ini" },
    new CompletionProvider(),
    ...triggerCharacters
  )
);
```

### Configuration Handling

```typescript
const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
const setting = config.get<string>("settingName", defaultValue);
```

### Data Loading Pattern

```typescript
const extension = vscode.extensions.getExtension(getExtensionId());
const extensionPath = extension?.extensionPath;
const dataPath = path.join(
  extensionPath,
  "data",
  "sections",
  `${sectionName}.json`
);
```

## Performance Guidelines

### Throttling for Decorations

```typescript
// Use throttling for expensive operations
private throttledUpdate = throttle(() => {
    this.updateDecorations();
}, 100);
```

### Lazy Loading

- Load data files only when needed
- Cache expensive computations
- Use incremental updates for decorations

### Memory Management

- Dispose subscriptions properly: `context.subscriptions.push(...)`
- Clean up event listeners
- Avoid memory leaks in long-running operations

## Domain-Specific Knowledge

### RustedWarfare INI Structure

- **Sections**: Defined in square brackets `[core]`, `[graphics]`, `[attack]`
- **Properties**: Key-value pairs `propertyName: value`
- **Values**: Various types including booleans, numbers, strings, file paths
- **Memory Definitions**: Special syntax `@memory: variableName`

### Common Value Types

- **Boolean**: `true`, `false`
- **File Paths**: Relative paths, ROOT: prefixed paths, image files
- **Enums**: Predefined sets of valid values
- **Numbers**: Integers, floats, percentages
- **Lists**: Comma-separated values

### File Path Handling

```typescript
// Support multiple path formats
// Relative: "images/icon.png"
// ROOT prefix: "ROOT:/images/icon.png"
// Windows paths: "images\icon.png"
// Cross-platform compatibility required
```

## Testing & Debugging

### Debug Patterns

```typescript
console.log(`[DEBUG] ComponentName - operation: ${details}`);
```

### Testing Approach

- Use Extension Development Host for manual testing
- Test with various INI file structures
- Verify cross-platform path handling
- Check performance with large files

## Common Tasks

### Adding New Value Completion

1. Create new provider extending `BaseValueCompletionProvider`
2. Implement `provideValueCompletionItems` method
3. Register in `valueCompletionProvider.ts`
4. Add trigger characters if needed

### Adding New Hover Content

1. Add detection logic in `detectors.ts`
2. Add creation logic in `creators.ts`
3. Update `hoverProvider.ts` to use new detectors/creators

### Adding New Section Data

1. Create JSON file in `data/sections/`
2. Define properties with types and descriptions
3. Add localized versions if needed

## Localization

### Translation Pattern

```typescript
import { t } from "./translationManager";
const message = t("Hello World from RustedWarfareModSupport!");
```

### Translation File Organization

- **Source Files**: Individual translation files are stored in `translation/{lang}/` directories
- **Bundle Files**: Merged translation files are generated in `translation/bundle.l10n.{lang}.json`
- **Merge Process**: Use `node merge.js` to combine individual translation files into bundle files
- **Never Edit**: Do not manually edit `bundle.l10n*.json` files - they are auto-generated

### Adding New Translations

1. Create translation files in each language directory: `translation/{lang}/filename.json`
2. Add translation key-value pairs to each language file
3. Run `node merge.js` to update bundle files
4. Bundle files will be automatically updated with new translations

### Supported Languages

- English (en) - base language
- Chinese (zh-cn, zh-hk, zh-tw)
- German (de), Spanish (es), French (fr)
- Italian (it), Japanese (ja), Korean (ko)
- Portuguese (pt), Russian (ru), Ukrainian (uk)

## Security Considerations

### File Path Validation

```typescript
// Always validate file paths to prevent directory traversal
if (!path.isAbsolute(resolvedPath) || !resolvedPath.startsWith(workspaceRoot)) {
  return null;
}
```

### Input Sanitization

- Validate user inputs in completion and hover providers
- Use VS Code's URI handling for file operations
- Follow VS Code extension security guidelines

## Build & Development

### Scripts

```bash
bun run compile     # TypeScript compilation
bun run watch       # Watch mode development
bun run package     # Create VSIX package
bun run lint        # ESLint checking
bun run test        # Run tests
```

### Code Quality

- Run `bun run lint` before committing
- Update `CHANGELOG.md` for user-facing changes
- Write descriptive commit messages
- Test in multiple VS Code versions

## Dependencies

### Runtime Dependencies

- `src/translationManager.ts`: localization API do not use VS Code localization API --- IGNORE ---
- `jszip`: ZIP file handling for mod export

### Development Dependencies

- TypeScript compiler and types
- ESLint for code quality
- esbuild for bundling
- Mocha for testing

Remember to always consider the specific context of RustedWarfare game modding when implementing features, and ensure cross-platform compatibility for file path handling.
