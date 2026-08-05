import * as vscode from "vscode";
import { EXTENSION_ID } from "../constants";

let _cachedExtensionPath: string | null | undefined;

/**
 * 获取扩展的安装路径（带模块级缓存，避免热路径上重复调用 getExtension）
 */
export function getExtensionPath(): string | null {
  if (_cachedExtensionPath !== undefined) {
    return _cachedExtensionPath;
  }
  const extension = vscode.extensions.getExtension(EXTENSION_ID);
  _cachedExtensionPath = extension?.extensionPath ?? null;
  return _cachedExtensionPath;
}

/** 重置缓存（测试用） */
export function resetExtensionPathCache(): void {
  _cachedExtensionPath = undefined;
}
