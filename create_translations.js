const fs = require('fs');
const path = require('path');

// 定义需要添加的语言列表
const newLanguages = [
  'zh-tw',  // 繁体中文
  'ja',      // 日语
  'ko',      // 韩语
  'de',      // 德语
  'fr',      // 法语
  'es',      // 西班牙语
  'it',      // 意大利语
  'pt',      // 葡萄牙语
  'ru',      // 俄语
  'ar'       // 阿拉伯语
];

const translationDir = path.resolve(__dirname, 'translation');
const enDir = path.join(translationDir, 'en');

// 检查en目录是否存在
if (!fs.existsSync(enDir)) {
  console.error('English translation directory not found!');
  process.exit(1);
}

// 获取en目录下的所有文件
const enFiles = fs.readdirSync(enDir).filter(f => f.endsWith('.json'));

console.log(`Found ${enFiles.length} translation files in en/ directory`);
console.log(`Creating translation directories for ${newLanguages.length} languages: ${newLanguages.join(', ')}`);

newLanguages.forEach(lang => {
  const langDir = path.join(translationDir, lang);

  // 创建语言目录
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
    console.log(`Created directory: ${langDir}`);
  }

  // 为每个语言复制en目录的文件结构
  enFiles.forEach(file => {
    const enFilePath = path.join(enDir, file);
    const langFilePath = path.join(langDir, file);

    // 如果目标文件不存在，则创建
    if (!fs.existsSync(langFilePath)) {
      try {
        // 读取英文文件内容
        const enContent = fs.readFileSync(enFilePath, 'utf8');
        const enData = JSON.parse(enContent);

        // 创建翻译模板（使用英文作为基础）
        const translatedData = {};
        Object.keys(enData).forEach(key => {
          // 对于中文繁体，我们可以保持原样或者添加繁体转换标记
          if (lang === 'zh-tw') {
            translatedData[key] = enData[key] + ' (繁体)'; // 临时标记，需要后续翻译
          } else {
            translatedData[key] = enData[key]; // 其他语言暂时使用英文，需要后续翻译
          }
        });

        // 写入翻译文件
        fs.writeFileSync(langFilePath, JSON.stringify(translatedData, null, 2), 'utf8');
        console.log(`Created ${lang}/${file}`);
      } catch (error) {
        console.error(`Error creating ${lang}/${file}:`, error.message);
      }
    } else {
      console.log(`File ${lang}/${file} already exists, skipping...`);
    }
  });
});

console.log('\nTranslation directories creation completed!');
console.log(`\nNext steps:`);
console.log(`1. Update merge.js to include the new languages`);
console.log(`2. Translate the content in each language folder`);
console.log(`3. Run 'node merge.js' to generate merged translation files`);
