import { PathCompatibilityUtils } from './pathCompatibility';

/**
 * 路径兼容性功能演示
 * 展示如何在INI文件中正确处理图片路径
 */
export class PathCompatibilityDemo {
    public static demonstrate(): void {
        console.log('🚀 RustedWarfare Mod Support - 路径兼容性演示\n');

        console.log('📝 INI文件中的图片路径示例：\n');

        // 模拟INI文件中的各种路径格式
        const iniExamples = [
            'image: ROOT:/images/player.png',
            'icon: ROOT:\\sprites\\enemy.jpg',
            'background: images/ui/background.gif',
            'portrait: assets\\portraits\\hero.png',
            'texture: "ROOT:/textures/wall.bmp"',
            'sprite: \'ROOT:\\effects\\explosion.webp\'',
        ];

        iniExamples.forEach((example, index) => {
            console.log(`${index + 1}. INI配置: ${example}`);

            // 提取图片路径
            const extractedPath = PathCompatibilityUtils.extractImagePath(example);
            console.log(`   提取路径: ${extractedPath || '无图片路径'}`);

            if (extractedPath) {
                // 规范化路径
                const normalizedPath = PathCompatibilityUtils.normalizeImagePath(extractedPath);
                console.log(`   规范化: ${normalizedPath}`);

                // 检查是否为图片
                const isImage = PathCompatibilityUtils.isImagePath(normalizedPath);
                console.log(`   是图片: ${isImage ? '✅' : '❌'}`);

                // 生成路径建议
                if (normalizedPath.includes('ROOT:')) {
                    const fileName = normalizedPath.split(/[/\\]/).pop() || '';
                    const suggestions = PathCompatibilityUtils.createPathSuggestions('ROOT:', fileName);
                    console.log(`   建议路径: ${suggestions.join(', ')}`);
                }
            }
            console.log('');
        });

        console.log('💡 路径兼容性优势：');
        console.log('   ✅ 支持Windows反斜杠 (\\) 和Linux正斜杠 (/)');
        console.log('   ✅ 自动路径规范化');
        console.log('   ✅ ROOT: 前缀路径解析');
        console.log('   ✅ 智能图片路径提取');
        console.log('   ✅ 跨平台hover显示图片');
        console.log('');

        console.log('🎯 在VS Code中的实际效果：');
        console.log('   - 鼠标悬停在图片路径上时会显示图片预览');
        console.log('   - 自动补全支持多种路径格式');
        console.log('   - 无论在Windows还是Linux上都能正常工作');
    }
}

// 如果直接运行此文件，则执行演示
if (require.main === module) {
    PathCompatibilityDemo.demonstrate();
}
