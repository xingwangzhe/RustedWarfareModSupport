import { PathCompatibilityUtils } from './pathCompatibility';

/**
 * 路径兼容性工具测试
 * 测试各种路径格式的兼容性处理
 */
export class PathCompatibilityTests {
    public static runTests(): void {
        console.log('🧪 Running Path Compatibility Tests...\n');

        // 测试1: 路径分隔符规范化
        this.testPathSeparatorNormalization();

        // 测试2: 图片路径提取
        this.testImagePathExtraction();

        // 测试3: 路径建议生成
        this.testPathSuggestions();

        // 测试4: 图片路径检查
        this.testImagePathValidation();

        console.log('✅ All tests completed!');
    }

    private static testPathSeparatorNormalization(): void {
        console.log('📁 Testing Path Separator Normalization:');

        const testCases = [
            { input: 'images\\icon.png', expected: 'images/icon.png' },
            { input: 'ROOT:\\images\\icon.png', expected: 'ROOT:/images/icon.png' },
            { input: 'path/to\\file.png', expected: 'path/to/file.png' },
            { input: 'normal/path/file.png', expected: 'normal/path/file.png' },
        ];

        testCases.forEach((testCase, index) => {
            const result = PathCompatibilityUtils.normalizePathSeparators(testCase.input);
            const passed = result === testCase.expected;
            console.log(`  Test ${index + 1}: ${passed ? '✅' : '❌'} "${testCase.input}" → "${result}"`);
            if (!passed) {
                console.log(`    Expected: "${testCase.expected}"`);
            }
        });
        console.log('');
    }

    private static testImagePathExtraction(): void {
        console.log('🖼️  Testing Image Path Extraction:');

        const testCases = [
            { input: 'image: ROOT:/icons/player.png # comment', expected: 'ROOT:/icons/player.png' },
            { input: 'icon.png', expected: 'icon.png' },
            { input: 'ROOT:\\images\\enemy.jpg', expected: 'ROOT:\\images\\enemy.jpg' },
            { input: 'no image here', expected: null },
        ];

        testCases.forEach((testCase, index) => {
            const result = PathCompatibilityUtils.extractImagePath(testCase.input);
            const passed = result === testCase.expected;
            console.log(`  Test ${index + 1}: ${passed ? '✅' : '❌'} "${testCase.input}" → "${result}"`);
            if (!passed) {
                console.log(`    Expected: "${testCase.expected}"`);
            }
        });
        console.log('');
    }

    private static testPathSuggestions(): void {
        console.log('💡 Testing Path Suggestions:');

        const testCases = [
            { base: 'ROOT:', file: 'icon.png', expectedCount: 2 },
            { base: 'images', file: 'player.jpg', expectedCount: 2 },
        ];

        testCases.forEach((testCase, index) => {
            const suggestions = PathCompatibilityUtils.createPathSuggestions(testCase.base, testCase.file);
            const passed = suggestions.length === testCase.expectedCount;
            console.log(`  Test ${index + 1}: ${passed ? '✅' : '❌'} ${testCase.base} + ${testCase.file} → ${suggestions.length} suggestions`);
            if (!passed) {
                console.log(`    Expected: ${testCase.expectedCount}, Got: ${suggestions.length}`);
            }
            suggestions.forEach((suggestion: string) => {
                console.log(`    - "${suggestion}"`);
            });
        });
        console.log('');
    }

    private static testImagePathValidation(): void {
        console.log('🔍 Testing Image Path Validation:');

        const testCases = [
            { input: 'icon.png', expected: true },
            { input: 'image.jpg', expected: true },
            { input: 'ROOT:/images/sprite.gif', expected: true },
            { input: 'document.pdf', expected: false },
            { input: 'script.js', expected: false },
        ];

        testCases.forEach((testCase, index) => {
            const result = PathCompatibilityUtils.isImagePath(testCase.input);
            const passed = result === testCase.expected;
            console.log(`  Test ${index + 1}: ${passed ? '✅' : '❌'} "${testCase.input}" → ${result}`);
            if (!passed) {
                console.log(`    Expected: ${testCase.expected}`);
            }
        });
        console.log('');
    }
}

// 如果直接运行此文件，则执行测试
if (require.main === module) {
    PathCompatibilityTests.runTests();
}
