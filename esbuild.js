const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const production = process.argv.includes('--production');
const watch = process.argv.includes('--watch');
const incrementalFlag = process.argv.includes('--incremental') || watch;

/**
 * @type {import('esbuild').Plugin}
 */
const esbuildProblemMatcherPlugin = {
	name: 'esbuild-problem-matcher',

	setup(build) {
		build.onStart(() => {
			console.log('[watch] build started');
		});
		build.onEnd((result) => {
			result.errors.forEach(({ text, location }) => {
				console.error(`✘ [ERROR] ${text}`);
				console.error(`    ${location.file}:${location.line}:${location.column}:`);
			});
			console.log('[watch] build finished');
		});
	},
};

async function main() {
	const outDir = path.resolve(__dirname, "dist");
	fs.rmSync(outDir, { recursive: true, force: true });

	const buildOptions = {
		entryPoints: [
			'src/extension.ts'
		],
		bundle: true,
		format: 'cjs',
		minify: production,
		sourcemap: !production,
		sourcesContent: false,
		platform: 'node',
		outfile: 'dist/extension.js',
		external: ['vscode'],
		logLevel: 'silent',
		plugins: [
			esbuildProblemMatcherPlugin,
		],
	};

	if (incrementalFlag) {
		const ctx = await esbuild.context(buildOptions);
		if (watch) {
			await ctx.watch();
			return;
		}

		await ctx.rebuild();
		console.log('[build] incremental artifacts ready');
		await ctx.dispose();
		return;
	}

	await esbuild.build(buildOptions);
}

main().catch(e => {
	console.error(e);
	process.exit(1);
});
