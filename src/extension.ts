// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { t } from "@/translationManager";
import { conservativeFormatIni } from "@/format/iniFormatter";
import { ImagePropertyDecorator } from "@/common/imagePropertyDecorator";
import { initializePanelManager, getPanelManager } from "@/panel/panelManager";
// 直接导入面板相关模块，避免动态导入
import { registerModPanel } from "@/panel/index";
import { initializePerfLogger } from "@/common/perfLogger";
import { registerExportCommands } from "@/panel/exportManager";
import { registerIniLanguageFeatures } from "@/common/languageFeatureRegistrar";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

// 应用折叠控件显示设置的函数
const applyFoldingControls = (_editor: vscode.TextEditor, showFoldingControls: string): void => {
  // 应用配置到工作区
  vscode.workspace
    .getConfiguration()
    .update(
      "editor.showFoldingControls",
      showFoldingControls,
      vscode.ConfigurationTarget.Workspace,
    );
};

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

  // 注册 Mod Panel 及面板命令
  registerModPanel(context);

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

  // 注册格式化 INI 文件命令（保守模式：只调整对齐，不改变键或值内容）
  const formatIniCommand = vscode.commands.registerCommand(
    "rustedwarfaremodsupport.formatIni",
    async (uri?: vscode.Uri) => {
      try {
        const editor = vscode.window.activeTextEditor;
        let doc: vscode.TextDocument | undefined;
        if (uri) {
          doc = await vscode.workspace.openTextDocument(uri);
        } else if (editor) {
          doc = editor.document;
        }

        if (!doc || doc.languageId !== "ini") {
          vscode.window.showWarningMessage(t("formatIni.noIniFile"));
          return;
        }

        const fullText = doc.getText();
        const formatted = conservativeFormatIni(fullText);

        if (formatted === fullText) {
          vscode.window.showInformationMessage(t("formatIni.success"));
          return;
        }

        const edit = new vscode.WorkspaceEdit();
        const fullRange = new vscode.Range(doc.positionAt(0), doc.positionAt(fullText.length));
        edit.replace(doc.uri, fullRange, formatted);
        await vscode.workspace.applyEdit(edit);
        await doc.save();
        vscode.window.showInformationMessage(t("formatIni.success"));
      } catch (err) {
        console.error(err);
        vscode.window.showErrorMessage(t("formatIni.failed"));
      }
    },
  );
  context.subscriptions.push(formatIniCommand);

  setupLazyLanguageInitialization(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}

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
  const imageDecorator = new ImagePropertyDecorator();
  context.subscriptions.push(
    imageDecorator,
    ...registerIniLanguageFeatures(),
    ...getPanelManager().getCustomExtensionsManager().getSubscriptions(),
  );
}

/**
 * 保守的 INI 格式化：仅对齐键和值，保留注释、空行、节和键顺序，不修改键或值内容。
 */
// formatter moved to src/format/iniFormatter.ts
