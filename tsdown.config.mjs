// tsdown.config.mjs
import { defineConfig } from "tsdown";
const production = process.argv.includes("--production") || process.argv.includes("--minify");

export default defineConfig({
  input: "src/extension.ts",
  output: {
    file: "dist/extension.js",
    format: "cjs",
  },
  target: "node",
  platform: "node",
  external: ["vscode"],
  cleanDir: true,
  minify: production
    ? { compress: { ecma: 2022, toplevel: true }, mangle: { toplevel: true } }
    : false,
});
