import { builtinModules } from "node:module";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const srcDir = path.dirname(fileURLToPath(import.meta.url)) + "/src";

// VS Code 扩展打包配置：基于 rolldown（vite 8 内核）+ oxc 压缩
// - CJS 单文件输出（VS Code 扩展主机加载要求）
// - 极致 tree-shaking + oxc 最激烈压缩
export default defineConfig({
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/extension.ts",
      formats: ["cjs"],
      fileName: () => "extension.js",
    },
    rollupOptions: {
      // 仅 vscode API 与 node 内置模块保持 external，其余全部打进产物
      external: ["vscode", ...builtinModules, ...builtinModules.map((m) => `node:${m}`)],
      output: {
        exports: "named",
        codeSplitting: false,
      },
    },
    minify: "oxc", // 最激烈压缩（vite 8 默认压缩器）
    treeshake: {
      // 最激烈 tree-shaking
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      correctModuleValue: true,
      annotations: true,
    },
    target: "node20",
    sourcemap: false,
  },
});
