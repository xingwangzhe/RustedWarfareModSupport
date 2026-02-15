import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import path from 'path'
import fs from 'fs'

const pkgPath = path.resolve(__dirname, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

const isMinimal = process.env.MINIMAL === 'true'

const externalDeps = Object.keys(pkg.dependencies || {})

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/extension.ts'),
      formats: ['cjs'],
      fileName: () => 'extension.js'
    },
    outDir: 'dist',
    sourcemap: !isMinimal,
    target: 'node18',
    emptyOutDir: true,
    minify: isMinimal ? 'terser' : 'esbuild',
    terserOptions: isMinimal
      ? {
          compress: {
            passes: 2,
            drop_console: true,
            drop_debugger: true
          },
          format: {
            comments: false
          }
        }
      : undefined,
    rollupOptions: {
      external: ['vscode', ...builtinModules, ...externalDeps],
      output: {
        exports: 'named'
      }
    }
  }
})
