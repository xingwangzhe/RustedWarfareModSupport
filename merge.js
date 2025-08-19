const fs = require('fs');
const path = require('path');

const translationDir = path.resolve(__dirname, 'translation');
const languages = ['zh-cn', 'en']; // 可根据实际语种扩展

// 进度条显示函数
function showProgressBar(current, total, prefix = '', barLength = 40) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const filledBarLength = Math.round((barLength * current) / Math.max(total, 1));
  const emptyBarLength = barLength - filledBarLength;
  
  const filledBar = '█'.repeat(filledBarLength);
  const emptyBar = '░'.repeat(emptyBarLength);
  
  process.stdout.write(`\r${prefix} [${filledBar}${emptyBar}] ${percentage}% (${current}/${total})`);
}

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
  let processedFiles = 0;
  const totalFiles = files.length;
  
  // 显示文件处理进度条
  showProgressBar(processedFiles, totalFiles, `Processing files for ${lang}`);
  
  for (const file of files) {
    const filePath = path.join(langDir, file);
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // 检查文件是否为空
      if (fileContent.trim() === '') {
        console.log(`\nWarning: File ${filePath} is empty, skipping...`);
        processedFiles++;
        showProgressBar(processedFiles, totalFiles, `Processing files for ${lang}`);
        continue;
      }
      
      const data = JSON.parse(fileContent);
      const keyCount = Object.keys(data).length;
      
      if (keyCount > 0) {
        Object.assign(merged, data);
        totalKeys += keyCount;
        processedFiles++;
        showProgressBar(processedFiles, totalFiles, `Processing files for ${lang}`);
      } else {
        console.log(`\nFile ${filePath} has no keys, skipping...`);
        processedFiles++;
        showProgressBar(processedFiles, totalFiles, `Processing files for ${lang}`);
      }
    } catch (e) {
      console.log(`\nError parsing ${filePath}:`, e);
      processedFiles++;
      showProgressBar(processedFiles, totalFiles, `Processing files for ${lang}`);
    }
  }
  
  // 完成后换行
  process.stdout.write('\n');
  console.log(`Total keys collected for ${lang}: ${totalKeys}`);
  
  let outFile;
  if (lang === 'en') {
    outFile = path.join(translationDir, `bundle.l10n.json`);
  } else {
    outFile = path.join(translationDir, `bundle.l10n.${lang}.json`);
  }
  
  // 显示写入进度
  process.stdout.write(`Writing output file for ${lang}... `);
  
  // 只有当有内容时才写入文件
  if (Object.keys(merged).length > 0) {
    fs.writeFileSync(outFile, JSON.stringify(merged, null, 2), 'utf8');
    process.stdout.write('Done\n');
    console.log(`Merged ${lang} translations to ${outFile} with ${Object.keys(merged).length} keys`);
  } else {
    process.stdout.write('Skipped (no content)\n');
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
  console.log(`\nMerging language: ${lang}`);
  mergeLang(lang);
}
console.log('\nMerge process completed');