const fs = require('fs');
const path = require('path');

const translationDir = path.resolve(__dirname, 'translation');
const languages = ['zh-cn', 'en']; // 可根据实际语种扩展

function mergeLang(lang) {
  const langDir = path.join(translationDir, lang);
  if (!fs.existsSync(langDir)) {
    console.log(`Language directory ${langDir} does not exist, skipping...`);
    return;
  }

  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.json'));
  const merged = {};

  console.log(`Processing ${files.length} files for language: ${lang}`);

  let totalKeys = 0;
  for (const file of files) {
    const filePath = path.join(langDir, file);
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // 检查文件是否为空
      if (fileContent.trim() === '') {
        console.log(`Warning: File ${filePath} is empty, skipping...`);
        continue;
      }
      
      const data = JSON.parse(fileContent);
      const keyCount = Object.keys(data).length;
      console.log(`Processing ${filePath} with ${keyCount} keys`);
      
      if (keyCount > 0) {
        Object.assign(merged, data);
        totalKeys += keyCount;
      } else {
        console.log(`File ${filePath} has no keys, skipping...`);
      }
    } catch (e) {
      console.error(`Error parsing ${filePath}:`, e);
    }
  }
  
  console.log(`Total keys collected for ${lang}: ${totalKeys}`);
  
  let outFile;
  if (lang === 'en') {
    outFile = path.join(translationDir, `bundle.l10n.json`);
  } else {
    outFile = path.join(translationDir, `bundle.l10n.${lang}.json`);
  }
  
  // 只有当有内容时才写入文件
  if (Object.keys(merged).length > 0) {
    fs.writeFileSync(outFile, JSON.stringify(merged, null, 2), 'utf8');
    console.log(`Merged ${lang} translations to ${outFile} with ${Object.keys(merged).length} keys`);
  } else {
    console.log(`No translations found for ${lang}, not writing output file`);
  }
}

// 确保translation目录存在
if (!fs.existsSync(translationDir)) {
  console.log(`Translation directory ${translationDir} does not exist!`);
  process.exit(1);
}

console.log(`Starting merge process for languages: ${languages.join(', ')}`);
for (const lang of languages) {
  console.log(`Merging language: ${lang}`);
  mergeLang(lang);
}
console.log('Merge process completed');