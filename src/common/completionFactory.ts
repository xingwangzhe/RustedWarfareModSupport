import * as vscode from "vscode";
import { GenericCompletionProvider } from "../completionProvider";

/**
 * 补全提供者配置接口
 */
export interface CompletionProviderConfig {
  sectionName: string;
  matcher?: (name: string) => boolean;
}

/**
 * 创建补全提供者的工厂函数
 * @param configs 补全提供者配置数组
 * @returns 补全提供者实例数组
 */
export function createCompletionProviders(
  configs: CompletionProviderConfig[],
): vscode.CompletionItemProvider[] {
  return configs.map((config) => new GenericCompletionProvider(config.sectionName, config.matcher));
}

/**
 * 预定义的补全提供者配置
 */
export const completionProviderConfigs: CompletionProviderConfig[] = [
  { sectionName: "core", matcher: (name: string) => name === "core" },
  { sectionName: "canBuild", matcher: (name: string) => isBaseSection(name, "canBuild") },
  { sectionName: "graphics", matcher: (name: string) => name === "graphics" },
  { sectionName: "attack", matcher: (name: string) => name === "attack" },
  { sectionName: "turret", matcher: (name: string) => isBaseSection(name, "turret") },
  { sectionName: "projectile", matcher: (name: string) => isBaseSection(name, "projectile") },
  { sectionName: "movement", matcher: (name: string) => name === "movement" },
  { sectionName: "ai", matcher: (name: string) => name === "ai" },
  { sectionName: "leg_arm", matcher: (name: string) => isBaseSection(name, "leg_arm") },
  { sectionName: "attachment", matcher: (name: string) => isBaseSection(name, "attachment") },
  { sectionName: "action", matcher: (name: string) => isBaseSection(name, "action") },
  { sectionName: "effect", matcher: (name: string) => isBaseSection(name, "effect") },
  { sectionName: "animation", matcher: (name: string) => isBaseSection(name, "animation") },
  {
    sectionName: "global_resource",
    matcher: (name: string) => isBaseSection(name, "global_resource"),
  },
  { sectionName: "resource", matcher: (name: string) => isBaseSection(name, "resource") },
  { sectionName: "decal", matcher: (name: string) => isBaseSection(name, "decal") },
  { sectionName: "placementRule", matcher: (name: string) => isBaseSection(name, "placementRule") },
];

// 导入isBaseSection函数
import { isBaseSection } from "./matchRules";
