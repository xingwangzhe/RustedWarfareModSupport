# RustedWarfare Mod Support Contributor Guide

Thank you for your interest in the RustedWarfare Mod Support plugin! This guide will help you understand how to contribute to this project.

## Project Structure Overview

```
rustedwarfaremodsupport/
├── data/                 # Data files directory
│   ├── sections/         # Section property definition files
│   └── ...
├── src/                  # Source code directory
│   ├── valueComple/      # Property value completion providers
│   └── ...               # Other core code
├── translation/          # Translation files directory
│   ├── en/               # English translations
│   ├── zh-cn/            # Chinese translations
│   └── ...
├── dist/                 # Compiled code directory
└── ...
```

## Environment Setup

Before you start contributing, please ensure your development environment meets the following requirements:

1. Install Node.js (LTS version 22.18.0 recommended)
2. Install bun package manager (recommended for faster build times)
3. Install the VS Code extension packaging tool globally:
   ```bash
   npm install -g @vscode/vsce
   ```

## What You Can Modify

### 1. Translation Files

You can help us improve translations in various languages:

- [translation/en/](./translation/en/) - English translation files
- [translation/zh-cn/](./translation/zh-cn/) - Chinese translation files

Each JSON file in these directories corresponds to different sections or functional modules.

### 2. Property Definitions

You can update or add property definitions:

- [data/sections/](./data/sections/) directory contains property definition files for all sections
- Each JSON file defines the properties of a section, including name, type, description, version, and example

### 3. Feature Extensions

You can add new features to the plugin:

- Add new section completion support
- Add new property value completion types
- Improve existing functionality

## What Not to Modify

To maintain the stability and consistency of the plugin, please avoid modifying the following content:

1. [extension.ts](./src/extension.ts) - Plugin entry file, unless you need to register new completion providers
2. Core architecture files like [dataProcessor.ts](./src/dataProcessor.ts) and [completionProvider.ts](./src/completionProvider.ts), unless you have significant improvements
3. Dependencies and script configurations in [package.json](./package.json)
4. Build and publish related configuration files

## How to Add New Section Support

1. Create a new JSON file in the [data/sections/](./data/sections/) directory
2. Create a new completion provider class in [src/completionProvider.ts](./src/completionProvider.ts)
3. Register the new completion provider in [src/extension.ts](./src/extension.ts)

## Testing Your Changes

1. Clone the repository and install dependencies:
   ```bash
   npm install
   # Or use bun (if installed)
   # bun install
   ```

2. Press F5 in VS Code to start a debug session to test your changes

3. Or build the plugin for testing:
   ```bash
   # Merge translation files
   npm run merge-translations
   # Or use bun (if installed)
   # bun run merge-translations
   
   # Build the plugin
   npm run package
   # Or use bun (if installed)
   # bun run package
   
   # Create VSIX package
   npm run package:vsix
   # Or use bun (if installed)
   # bun run package:vsix
   ```

## Submitting a Pull Request

1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

Thank you for your contribution!