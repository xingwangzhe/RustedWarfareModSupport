# Copilot Instructions for RustedWarfareModSupport

## Project Overview

RustedWarfareModSupport is a VS Code extension that provides intelligent autocompletion, documentation hints, and development tools for RustedWarfare game mod development. The extension supports INI file editing with smart features for game configuration properties.

## Architecture & Patterns

### Core Extension Structure

- **Entry Point**: `src/extension.ts` - Main activation point for the VS Code extension
- **Provider Pattern**: Used for completion, hover, and folding providers
- **Factory Pattern**: Used for creating completion providers and decorators
- **Observer Pattern**: Used for configuration changes and document events
- **Lazy Activation**: `setupLazyLanguageInitialization` defers heavy provider registration until an INI document is opened. Keep new logic inside `initializeLanguageFeatures` to avoid slowing startup.

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

- Provides cache helpers like `getSectionPropertyMap` and TTL-based file caching; always call these instead of manual `fs.readFileSync`

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

// CRITICAL: Value completion providers must use consistent parameter signatures
protected provideValueCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position,
  propertyName: string,  // ✅ Correct
  sectionName: string    // ✅ Correct
): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>

// ❌ NEVER use this (breaks completion):
protected provideValueCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position,
  property: any  // ❌ Wrong - causes completion to fail
): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>
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
    ...triggerCharacters,
  ),
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
const dataPath = path.join(extensionPath, "data", "sections", `${sectionName}.json`);
```

## Performance Guidelines

### Throttling for Decorations

```typescript
// Use throttling for expensive operations
private throttledUpdate = throttle(() => {
    this.updateDecorations();
}, 100);
```

- `ImagePropertyDecorator` now computes throttle delays based on document size and cleans up its own disposables. Prefer reusing it (or its helpers) over adding new timeouts.

### Lazy Loading

- Load data files only when needed
- Cache expensive computations
- Use incremental updates for decorations
- Extension activation now wires actual providers only after an INI file is opened. Keep expensive registration inside `initializeLanguageFeatures` to maintain fast startup.
- Use the cache helpers (`getSectionPropertyMap`, translation cache) instead of re-reading JSON files.
- `src/common/perfLogger.ts` offers `measurePerf(label, fn)`; wrap long-running logic and enable logs via `rustedwarfaremodsupport.enablePerfLogs` when diagnosing.

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

### Value Completion Provider Architecture

- **Error Handling**: Implement proper error handling in all catch blocks

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
- **CRITICAL**: Test value completion providers after parameter fixes
  - Create test INI files with different property types
  - Verify completion triggers for each provider type
  - Check that `npm run compile` passes without errors (this also regenerates translations/syntax)
  - Test completion in Extension Development Host

### Validation Steps for Completion Providers

1. **Parameter Type Check**: Ensure all providers use `(propertyName: string, sectionName: string)`
2. **Import Verification**: Confirm `getSectionProperties` is imported from `../dataProcessor`
3. **Compilation Test**: Run `bun run compile` to catch type errors
4. **Functional Testing**: Test completion in actual INI files
5. **Error Handling**: Verify proper error handling in catch blocks

## Common Tasks

### Fixing Value Completion Provider Parameter Types

**IMPORTANT**: All value completion providers must use consistent parameter signatures to work properly.

**Correct Signature** (BaseValueCompletionProvider):

```typescript
protected provideValueCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position,
  propertyName: string,
  sectionName: string
): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>
```

**Incorrect Signature** (will cause completion to fail):

```typescript
protected provideValueCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position,
  property: any  // ❌ Wrong parameter type
): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList>
```

**Fixing Steps**:

1. Update parameter signature from `property: any` to `propertyName: string, sectionName: string`
2. Add import: `import { getSectionProperties } from '../dataProcessor';`
3. Replace property access with section lookup:

   ```typescript
   // Before (incorrect):
   if (property.name === 'targetProperty') { ... }

   // After (correct):
   const sectionProperties = getSectionProperties(sectionName);
   const property = sectionProperties.find((prop: any) => prop.name === propertyName);
   if (property && property.name === 'targetProperty') { ... }
   ```

4. Run `bun run compile` to verify no errors

**Recently Fixed Providers**:

- BoolValueCompletionProvider.ts
- ImageValueCompletionProvider.ts
- LogicBooleanValueCompletionProvider.ts
- MovementTypeValueCompletionProvider.ts
- UnitSpawnCompletionProvider.ts

**Problem**: When users type "self." and then trigger completion, selecting items like "self.isUnderwater()" would result in "self.self.isUnderwater()" duplication.

**Solution**: Check if text before cursor ends with "self." and modify completion items accordingly.

**Correct Implementation**:

```typescript
private getBasicLogicBooleanCompletionItems(
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.CompletionItem[] {
  // 获取当前行文本和光标前的文本
  const lineText = document.lineAt(position.line).text;
  const textBeforeCursor = lineText.substring(0, position.character);

  // 检查光标前是否已经包含"self."
  const hasSelfPrefix = textBeforeCursor.endsWith("self.");

  const completionItems = createCompletionItemsFromDataFile(
    "logicboolean",
    vscode.CompletionItemKind.Value,
    "valuecompletionprovider.logicboolean.detail",
    {
      useNameAsInsertText: true,
      customDocumentation: (item: any) =>
        new vscode.MarkdownString(
          t("valuecompletionprovider.logicboolean.documentation", [
            t(item.description),
            item.version,
            t(item.example),
          ])
        ),
    }
  );

  // 如果已经输入了"self."，修改补全项以避免重复
  if (hasSelfPrefix) {
    return completionItems.map((item) => {
      const labelText = typeof item.label === 'string' ? item.label : item.label.label;
      if (labelText.startsWith("self.")) {
        // 创建新的补全项，只显示self.之后的部分
        const newLabel = labelText.substring(5); // 移除"self."前缀
        const newItem = new vscode.CompletionItem(
          newLabel,
          item.kind
        );
        newItem.detail = item.detail;
      return item;
    });
  }

  return completionItems;
}
```

**Validation Steps**:

### Adding New Value Completion

1. Create new provider extending `BaseValueCompletionProvider`
2. Implement `provideValueCompletionItems` method with correct signature
3. Register in `valueCompletionProvider.ts`
4. Add trigger characters if needed

### Adding New Hover Content

1. Add detection logic in `detectors.ts`
2. Add creation logic in `creators.ts`
3. Update `hoverProvider.ts` to use new detectors/creators

### Adding New Section Data

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

1. **PROHIBITED: .description Suffixes**
   - ❌ **NEVER** add `.description` suffix to original keys in data files
   - ❌ **NEVER** use keys like `"data.value.logicboolean.self.isUnderwater.description"`

2. **Translation Key Matching Requirements**
   - **MANDATORY**: Every translation key must exactly match an existing original key in data files

     # Extract keys from data file

     grep -o '"[^"]\*":' data/value/filename.json | sed 's/":$//' | sed 's/^"//'

     # Extract keys from translation file

     grep -o '"[^"]\*":' translation/en/filename.json | sed 's/":$//' | sed 's/^"//'

     # Compare keys (should have identical output)

     comm -23 <(sort data_keys.txt) <(sort translation_keys.txt) # Check for missing
     comm -13 <(sort data_keys.txt) <(sort translation_keys.txt) # Check for extra

     ```

     ```

3. **Translation Addition Process**
   - Step 1: Identify the original key in the data file (e.g., `data/value/logicboolean.json`)
   - Step 2: Verify the key exists and is correctly formatted (no .description suffix)
   - Step 3: Add the exact same key to translation files in each language directory

- Step 4: Run `node merge.js` to update bundle files
- Step 5: Run `npm run compile` to ensure no translation errors

4. **Key Validation Checklist**
   - [ ] Original key exists in data file without .description suffix
   - [ ] Translation key exactly matches original key
   - [ ] No extra keys in translation files
   - [ ] No missing keys in translation files
   - [ ] Compilation passes after changes
   - [ ] Bundle files updated via `node merge.js`

**VIOLATION CONSEQUENCES:**

- Using .description suffixes will break translation loading
- Mismatched keys will cause runtime translation failures
- Extra translation keys waste bundle size and create confusion
- Missing translation keys result in fallback to English or undefined strings

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
bun run compile     # TypeScript compilation - ALWAYS run after parameter fixes
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
- **CRITICAL**: Always run `bun run compile` after modifying completion providers
- Verify parameter type consistency across all value completion providers

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
