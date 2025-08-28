const fs = require('fs');
const path = require('path');

const translationDir = path.resolve(__dirname, 'translation');

// 支持的语言列表
const languages = [
  'ar', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh-cn', 'zh-tw'
];

// 英文作为基准
const enDir = path.join(translationDir, 'en');

// 检测结果统计
const results = {
  totalFiles: 0,
  missingFiles: [],
  incompleteTranslations: [],
  emptyFiles: [],
  parseErrors: [],
  summary: {}
};

console.log('🔍 开始翻译质量检测...\n');

// 检查英文基准目录
if (!fs.existsSync(enDir)) {
  console.error('❌ 英文翻译目录不存在！');
  process.exit(1);
}

// 获取英文文件列表
const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.json'));
console.log(`📁 发现 ${enFiles.length} 个英文翻译文件作为基准\n`);

results.totalFiles = enFiles.length;

// 检测每个语言
languages.forEach(lang => {
  console.log(`🌍 检测语言: ${lang}`);
  const langDir = path.join(translationDir, lang);

  if (!fs.existsSync(langDir)) {
    console.log(`  ❌ 语言目录不存在: ${langDir}`);
    results.missingFiles.push(lang);
    return;
  }

  const langFiles = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
  console.log(`  📄 发现 ${langFiles.length} 个翻译文件`);

  let langIssues = 0;

  enFiles.forEach(enFile => {
    const enFilePath = path.join(enDir, enFile);
    const langFilePath = path.join(langDir, enFile);

    // 检查文件是否存在
    if (!fs.existsSync(langFilePath)) {
      console.log(`    ⚠️  缺失文件: ${enFile}`);
      results.incompleteTranslations.push(`${lang}/${enFile} (文件不存在)`);
      langIssues++;
      return;
    }

    try {
      // 读取英文文件
      const enContent = fs.readFileSync(enFilePath, 'utf8');
      const enData = JSON.parse(enContent);

      // 读取翻译文件
      const langContent = fs.readFileSync(langFilePath, 'utf8');

      if (langContent.trim() === '') {
        console.log(`    ⚠️  空文件: ${enFile}`);
        results.emptyFiles.push(`${lang}/${enFile}`);
        langIssues++;
        return;
      }

      const langData = JSON.parse(langContent);

      // 检查翻译完整性
      const enKeys = Object.keys(enData);
      const langKeys = Object.keys(langData);

      const missingKeys = enKeys.filter(key => !(key in langData));
      const extraKeys = langKeys.filter(key => !(key in enData));

      if (missingKeys.length > 0) {
        console.log(`    ⚠️  缺失 ${missingKeys.length} 个翻译键: ${enFile}`);
        results.incompleteTranslations.push(`${lang}/${enFile} (缺失 ${missingKeys.length} 个键)`);
        langIssues++;
      }

      if (extraKeys.length > 0) {
        console.log(`    ℹ️  额外 ${extraKeys.length} 个键: ${enFile}`);
      }

      // 检查是否有未翻译的英文内容
      let untranslatedCount = 0;
      enKeys.forEach(key => {
        if (langData[key] && langData[key] === enData[key]) {
          untranslatedCount++;
        }
      });

      if (untranslatedCount > 0) {
        console.log(`    ⚠️  ${untranslatedCount} 个键未翻译: ${enFile}`);
        results.incompleteTranslations.push(`${lang}/${enFile} (${untranslatedCount} 个键未翻译)`);
        langIssues++;
      }

    } catch (error) {
      console.log(`    ❌ 解析错误: ${enFile} - ${error.message}`);
      results.parseErrors.push(`${lang}/${enFile} (${error.message})`);
      langIssues++;
    }
  });

  results.summary[lang] = {
    totalFiles: langFiles.length,
    issues: langIssues,
    status: langIssues === 0 ? '✅ 完整' : `⚠️  ${langIssues} 个问题`
  };

  console.log(`  ${results.summary[lang].status}\n`);
});

// 输出总结报告
console.log('📊 检测结果总结:');
console.log('='.repeat(50));

console.log(`\n总文件数: ${results.totalFiles}`);
console.log(`支持的语言数: ${languages.length}`);

if (results.missingFiles.length > 0) {
  console.log(`\n❌ 缺失的语言目录 (${results.missingFiles.length}):`);
  results.missingFiles.forEach(lang => console.log(`  - ${lang}`));
}

if (results.emptyFiles.length > 0) {
  console.log(`\n📭 空文件 (${results.emptyFiles.length}):`);
  results.emptyFiles.forEach(file => console.log(`  - ${file}`));
}

if (results.parseErrors.length > 0) {
  console.log(`\n❌ 解析错误 (${results.parseErrors.length}):`);
  results.parseErrors.forEach(file => console.log(`  - ${file}`));
}

if (results.incompleteTranslations.length > 0) {
  console.log(`\n⚠️  不完整的翻译 (${results.incompleteTranslations.length}):`);
  results.incompleteTranslations.forEach(item => console.log(`  - ${item}`));
}

console.log(`\n🌍 各语言状态:`);
languages.forEach(lang => {
  if (results.summary[lang]) {
    console.log(`  ${lang}: ${results.summary[lang].status}`);
  } else {
    console.log(`  ${lang}: ❌ 缺失`);
  }
});

const totalIssues = results.missingFiles.length + results.emptyFiles.length +
                   results.parseErrors.length + results.incompleteTranslations.length;

if (totalIssues === 0) {
  console.log(`\n🎉 所有翻译文件都完整且有效！`);
} else {
  console.log(`\n⚠️  发现 ${totalIssues} 个问题需要处理。`);
}

console.log('\n🔍 翻译质量检测完成！');
