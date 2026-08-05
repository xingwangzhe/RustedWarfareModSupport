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

/**
 * 调试日志开关：仅在启用 perf 日志时输出。
 * 热路径（hover/补全）上的 [DEBUG] 日志统一收敛到此处，避免生产环境刷屏。
 */
export function debugLog(message: string): void {
  if (perfLoggingEnabled) {
    console.log(message);
  }
}

export async function measurePerf<T>(
  label: string,
  evaluator: () => T | Promise<T>,
): Promise<T> {
  if (!perfLoggingEnabled) {
    return evaluator();
  }

  const start = performance.now();
  try {
    const result = await evaluator();
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

function logDuration(label: string, start: number) {
  const duration = performance.now() - start;
  console.log(`[perf] ${label}: ${duration.toFixed(2)}ms`);
}
