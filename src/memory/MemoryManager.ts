import * as vscode from "vscode";

interface MemoryVariable {
  name: string;
  type: string;
  section: string;
  line: number;
  document: vscode.TextDocument;
}

interface DocumentState {
  variables: Map<string, MemoryVariable>;
  version: number;
  lastUpdate: number;
}

export class MemoryManager {
  private static instance: MemoryManager;
  private documentStates: Map<number, DocumentState> = new Map();
  private disposables: vscode.Disposable[] = [];
  private updateTimeout: NodeJS.Timeout | null = null;
  private pendingUpdates: Set<vscode.TextDocument> = new Set();
  private static readonly DEBOUNCE_MS = 150;

  private constructor() {
    this.initialize();
  }

  public static getInstance(): MemoryManager {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager();
    }
    return MemoryManager.instance;
  }

  private getDocKey(document: vscode.TextDocument): number {
    return document.uri.toString().length;
  }

  private initialize() {
    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (event.document.languageId === "ini") {
          this.scheduleUpdate(event.document);
        }
      }),
    );

    this.disposables.push(
      vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === "ini") {
          this.updateMemoryVariables(document);
        }
      }),
    );

    this.disposables.push(
      vscode.workspace.onDidCloseTextDocument((document) => {
        if (document.languageId === "ini") {
          this.documentStates.delete(this.getDocKey(document));
        }
      }),
    );

    vscode.workspace.textDocuments.forEach((document) => {
      if (document.languageId === "ini") {
        this.updateMemoryVariables(document);
      }
    });
  }

  private scheduleUpdate(document: vscode.TextDocument): void {
    this.pendingUpdates.add(document);
    
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    
    this.updateTimeout = setTimeout(() => {
      this.processPendingUpdates();
    }, MemoryManager.DEBOUNCE_MS);
  }

  private processPendingUpdates(): void {
    for (const doc of this.pendingUpdates) {
      this.updateMemoryVariables(doc);
    }
    this.pendingUpdates.clear();
  }

  private updateMemoryVariables(document: vscode.TextDocument) {
    const key = this.getDocKey(document);
    const state = this.documentStates.get(key);
    if (state && state.version === document.version) {
      return;
    }

    const text = document.getText();
    const lines = text.split("\n");

    const variables = new Map<string, MemoryVariable>();
    let currentSection = "";
    let inCoreSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("[") && line.endsWith("]")) {
        currentSection = line.substring(1, line.length - 1);
        inCoreSection = currentSection === "core";
        continue;
      }

      if (!inCoreSection) {
        continue;
      }

      if (line.startsWith("@memory")) {
        const memoryVar = this.parseMemoryDefinition(line, document, i);
        if (memoryVar) {
          variables.set(memoryVar.name, memoryVar);
        }
      }
    }

    this.documentStates.set(key, {
      variables,
      version: document.version,
      lastUpdate: Date.now(),
    });
  }

  private parseMemoryDefinition(
    line: string,
    document: vscode.TextDocument,
    lineNumber: number,
  ): MemoryVariable | null {
    const match = line.match(/^@memory\s+(\w+):\s*([^\s]+)$/);
    if (!match) {
      return null;
    }

    const [, name, type] = match;
    return {
      name,
      type,
      section: "core",
      line: lineNumber,
      document,
    };
  }

  public getAllMemoryVariables(): MemoryVariable[] {
    const result: MemoryVariable[] = [];
    for (const state of this.documentStates.values()) {
      result.push(...state.variables.values());
    }
    return result;
  }

  public getMemoryVariable(name: string): MemoryVariable | undefined {
    for (const state of this.documentStates.values()) {
      const found = state.variables.get(name);
      if (found) {
        return found;
      }
    }
    return undefined;
  }

  public getMemoryVariableNames(): string[] {
    const names: string[] = [];
    for (const state of this.documentStates.values()) {
      for (const name of state.variables.keys()) {
        names.push(name);
      }
    }
    return names;
  }

  public getSupportedTypes(): string[] {
    return ["int", "float", "string", "bool", "number", "text", "boolean", "logic"];
  }

  public dispose() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    this.disposables.forEach((disposable) => disposable.dispose());
    this.documentStates.clear();
  }
}

export const memoryManager = MemoryManager.getInstance();
