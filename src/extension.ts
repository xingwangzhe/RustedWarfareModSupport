// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { t } from "./translationManager";
import { IniSectionSymbolProvider } from "./Section";
import { IniFoldingRangeProvider } from "./IniFoldingProvider";
import { SectionNameCompletionProvider } from "./completionProvider";
import { createCompletionProviders, completionProviderConfigs } from "./common/completionFactory";
import { ValueCompletionProvider } from "./valueComple/valueCompletionProvider";
import { ImagePropertyDecorator } from "./common/imagePropertyDecorator";
import { RustedWarfareHoverProvider } from "./hoverProvider/hoverProvider";
import { MemoryDefinitionCompletionProvider } from "./memory/MemoryDefinitionCompletionProvider";
import { MemoryValueCompletionProvider } from "./memory/MemoryValueCompletionProvider";
import { initializePanelManager, getPanelManager } from "./panel/panelManager";
// 直接导入面板相关模块，避免动态导入
import { ModPanelProvider } from "./panel/index";
import { EXTENSION_ID } from "./constants";
import { initializePerfLogger } from "./common/perfLogger";
import { registerExportCommands } from "./panel/exportManager";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

// 应用折叠控件显示设置的函数
function applyFoldingControls(editor: vscode.TextEditor, showFoldingControls: string) {
  const config = vscode.workspace.getConfiguration();
  const editorConfig = config.get<any>("editor", {});

  // 更新编辑器的折叠控件显示设置
  editorConfig.showFoldingControls = showFoldingControls;

  // 应用配置到工作区
  vscode.workspace
    .getConfiguration()
    .update(
      "editor.showFoldingControls",
      showFoldingControls,
      vscode.ConfigurationTarget.Workspace,
    );
}

let languageFeaturesInitialized = false;

export function activate(context: vscode.ExtensionContext) {
  initializePerfLogger(context);
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(t('Congratulations, your extension "rustedwarfaremodsupport" is now active!'));

  // 读取配置并应用折叠控件显示设置
  const config = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
  const showFoldingControls = config.get<string>("showFoldingControls", "always");

  // 为所有打开的文本编辑器应用设置
  vscode.window.visibleTextEditors.forEach((editor) => {
    if (editor.document.languageId === "ini") {
      applyFoldingControls(editor, showFoldingControls);
    }
  });

  // 监听配置变化
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("rustedwarfaremodsupport.showFoldingControls")) {
        const newConfig = vscode.workspace.getConfiguration("rustedwarfaremodsupport");
        const newShowFoldingControls = newConfig.get<string>("showFoldingControls", "always");

        vscode.window.visibleTextEditors.forEach((editor) => {
          if (editor.document.languageId === "ini") {
            applyFoldingControls(editor, newShowFoldingControls);
          }
        });
      }
    }),
  );

  // 监听编辑器打开事件
  context.subscriptions.push(
    vscode.window.onDidChangeVisibleTextEditors((editors) => {
      editors.forEach((editor) => {
        if (editor.document.languageId === "ini") {
          applyFoldingControls(editor, showFoldingControls);
        }
      });
    }),
  );

  // 初始化面板管理器
  initializePanelManager(context);

  // 直接注册Mod Panel，避免动态导入
  registerModPanelDirect(context);

  // 注册导出命令
  registerExportCommands(context);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand("rustedwarfaremodsupport.helloWorld", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage(t("Hello World from RustedWarfareModSupport!"));
  });

  context.subscriptions.push(disposable);

  setupLazyLanguageInitialization(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}

/**
 * 获取当前扩展的完整ID (publisher.name)
 */
export function getExtensionId(): string {
  return EXTENSION_ID;
}

/**
 * 直接注册Mod Panel，避免动态导入
 * @param context VS Code扩展上下文
 */
function registerModPanelDirect(context: vscode.ExtensionContext): void {
  const modPanelProvider = new ModPanelProvider();
  const treeDataProvider = vscode.window.registerTreeDataProvider(
    "rustedwarfaremodsupport-panel",
    modPanelProvider,
  );

  // 注册添加文件后缀命令
  const addFileExtensionCommand = vscode.commands.registerCommand(
    "rustedwarfaremodsupport.addFileExtension",
    async () => {
      const extension = await vscode.window.showInputBox({
        prompt: t("panel.fileExtensions.add.placeholder"),
        placeHolder: ".cfg",
        validateInput: (value) => {
          if (!value) {
            return t("panel.fileExtensions.add.emptyInput");
          }
          if (!value.startsWith(".")) {
            return t("panel.fileExtensions.invalidFormat");
          }
          return null;
        },
      });

      if (extension) {
        const result = modPanelProvider.getDataManager().addCustomFileExtension(extension);
        if (result.success) {
          vscode.window.showInformationMessage(result.message);
          // 刷新面板显示
          modPanelProvider.refresh();
        } else {
          vscode.window.showErrorMessage(result.message);
        }
      }
    },
  );

  // 注册移除文件后缀命令
  const removeFileExtensionCommand = vscode.commands.registerCommand(
    "rustedwarfaremodsupport.removeFileExtension",
    async (extension: string) => {
      const confirm = await vscode.window.showWarningMessage(
        t("panel.fileExtensions.remove.confirm"),
        { modal: true },
        t("panel.fileExtensions.confirm"),
      );

      if (confirm === t("panel.fileExtensions.confirm")) {
        const result = modPanelProvider.getDataManager().removeCustomFileExtension(extension);
        if (result.success) {
          vscode.window.showInformationMessage(result.message);
          // 刷新面板显示
          modPanelProvider.refresh();
        } else {
          vscode.window.showErrorMessage(result.message);
        }
      }
    },
  );

  // 注册刷新面板命令
  const refreshPanelCommand = vscode.commands.registerCommand(
    "rustedwarfaremodsupport-panel.refresh",
    () => {
      modPanelProvider.refresh();
    },
  );

  context.subscriptions.push(
    treeDataProvider,
    addFileExtensionCommand,
    removeFileExtensionCommand,
    refreshPanelCommand,
  );
}

function setupLazyLanguageInitialization(context: vscode.ExtensionContext) {
  const lazyDisposables: vscode.Disposable[] = [];

  const ensureInitialized = () => {
    if (languageFeaturesInitialized) {
      return;
    }
    languageFeaturesInitialized = true;
    lazyDisposables.forEach((item) => item.dispose());
    lazyDisposables.length = 0;
    initializeLanguageFeatures(context);
  };

  const hasIniDocument = () =>
    vscode.workspace.textDocuments.some((doc) => doc.languageId === "ini") ||
    vscode.window.visibleTextEditors.some((editor) => editor.document.languageId === "ini");

  if (hasIniDocument()) {
    ensureInitialized();
    return;
  }

  lazyDisposables.push(
    vscode.workspace.onDidOpenTextDocument((document) => {
      if (document.languageId === "ini") {
        ensureInitialized();
      }
    }),
  );

  lazyDisposables.push(
    vscode.window.onDidChangeVisibleTextEditors((editors) => {
      if (editors.some((editor) => editor.document.languageId === "ini")) {
        ensureInitialized();
      }
    }),
  );

  context.subscriptions.push(...lazyDisposables);
}

function initializeLanguageFeatures(context: vscode.ExtensionContext) {
  const sectionParser = vscode.languages.registerDocumentSymbolProvider(
    { language: "ini" },
    new IniSectionSymbolProvider(),
  );

  const foldingProvider = vscode.languages.registerFoldingRangeProvider(
    { language: "ini" },
    new IniFoldingRangeProvider(),
  );

  const completionProviders = createCompletionProviders(completionProviderConfigs);

  const completionSubscriptions = completionProviders.map((provider) =>
    vscode.languages.registerCompletionItemProvider(
      { language: "ini" },
      provider,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "_",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ),
  );

  const valueCompletionProvider = new ValueCompletionProvider();
  const valueCompletionSubscription = vscode.languages.registerCompletionItemProvider(
    { language: "ini" },
    valueCompletionProvider,
    ":",
    " ",
    ",",
    ".",
    "m",
  );

  const sectionNameCompletionProvider = new SectionNameCompletionProvider();
  const sectionNameCompletionSubscription = vscode.languages.registerCompletionItemProvider(
    { language: "ini" },
    sectionNameCompletionProvider,
    "[",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  );

  const memoryDefinitionProvider = new MemoryDefinitionCompletionProvider();
  const memoryDefinitionSubscription = vscode.languages.registerCompletionItemProvider(
    { language: "ini" },
    memoryDefinitionProvider,
    "@",
    " ",
  );

  const memoryValueProvider = new MemoryValueCompletionProvider();
  const memoryValueSubscription = vscode.languages.registerCompletionItemProvider(
    { language: "ini" },
    memoryValueProvider,
    "m",
    ".",
  );

  const hoverProvider = vscode.languages.registerHoverProvider(
    { language: "ini" },
    new RustedWarfareHoverProvider(),
  );
  const imageDecorator = new ImagePropertyDecorator();
  context.subscriptions.push(
    imageDecorator,
    sectionParser,
    foldingProvider,
    ...completionSubscriptions,
    valueCompletionSubscription,
    sectionNameCompletionSubscription,
    memoryDefinitionSubscription,
    memoryValueSubscription,
    hoverProvider,
    ...getPanelManager().getCustomExtensionsManager().getSubscriptions(),
  );
}
