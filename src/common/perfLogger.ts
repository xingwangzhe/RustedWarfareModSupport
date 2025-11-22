import * as vscode from "vscode";
import { performance } from "perf_hooks";

let perfLoggingEnabled = false;

export function initializePerfLogger(context: vscode.ExtensionContext): void {
  refreshPerfLoggingState();
  const disposable = vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("rustedwarfaremodsupport.enablePerfLogs")) {
      refreshPerfLoggingState();
    }
  });
  context.subscriptions.push(disposable);
}

export function measurePerf<T>(label: string, evaluator: () => T): T {
  if (!perfLoggingEnabled) {
    return evaluator();
  }

  const start = performance.now();
  try {
    const result = evaluator();
    if (isThenable(result)) {
      return (result as Promise<T>)
        .then((value) => {
          logDuration(label, start);
          return value;
        })
        .catch((error) => {
          logDuration(label, start);
          throw error;
        }) as T;
    }

    logDuration(label, start);
    return result;
  } catch (error) {
    logDuration(label, start);
    throw error;
  }
}

function refreshPerfLoggingState() {
  perfLoggingEnabled = vscode.workspace
    .getConfiguration("rustedwarfaremodsupport")
    .get<boolean>("enablePerfLogs", false);
}

function isThenable(value: unknown): value is Promise<unknown> {
  return !!value && typeof (value as Promise<unknown>).then === "function";
}

function logDuration(label: string, start: number) {
  const duration = performance.now() - start;
  console.log(`[perf] ${label}: ${duration.toFixed(2)}ms`);
}
