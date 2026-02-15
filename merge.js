const fs = require("fs");
const path = require("path");
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

const translationDir = path.resolve(__dirname, "translation");
// 支持的国际语言列表（按使用频率和实用性排序）
// 注释：如需添加更多语言，请在此数组中添加对应的语言代码
// 语言代码格式遵循BCP 47标准 (如 zh-cn, zh-tw, en-us, en-gb等)
//
// 当前支持的主要语言：
// - en: English (英语) - 默认语言，VS Code的标准语言
// - zh-cn: Chinese Simplified (简体中文)
// - zh-tw: Chinese Traditional (繁体中文)
// - ja: Japanese (日语)
// - ko: Korean (韩语)
// - de: German (德语)
// - fr: French (法语)
// - es: Spanish (西班牙语)
// - it: Italian (意大利语)
// - pt: Portuguese (葡萄牙语)
// - pt-br: Portuguese Brazilian (巴西葡萄牙语)
// - ru: Russian (俄语)
// - ar: Arabic (阿拉伯语)
// - hi: Hindi (印地语)
//
// 扩展语言（可根据需要启用）：
// - nl: Dutch (荷兰语)
// - sv: Swedish (瑞典语)
// - no: Norwegian (挪威语)
// - da: Danish (丹麦语)
// - fi: Finnish (芬兰语)
// - pl: Polish (波兰语)
// - cs: Czech (捷克语)
// - tr: Turkish (土耳其语)
// - th: Thai (泰语)
// - vi: Vietnamese (越南语)
// - uk: Ukrainian (乌克兰语)
// - he: Hebrew (希伯来语)
// - id: Indonesian (印尼语)
// - ms: Malay (马来语)
// - tl: Tagalog (菲律宾语)
// - bg: Bulgarian (保加利亚语)
// - hr: Croatian (克罗地亚语)
// - sr: Serbian (塞尔维亚语)
// - sl: Slovenian (斯洛文尼亚语)
// - et: Estonian (爱沙尼亚语)
// - lv: Latvian (拉脱维亚语)
// - lt: Lithuanian (立陶宛语)
// - sk: Slovak (斯洛伐克语)
// - hu: Hungarian (匈牙利语)
// - ro: Romanian (罗马尼亚语)
// - el: Greek (希腊语)
// - ca: Catalan (加泰罗尼亚语)
// - eu: Basque (巴斯克语)
// - gl: Galician (加利西亚语)
// - mt: Maltese (马耳他语)
// - is: Icelandic (冰岛语)
// - ga: Irish (爱尔兰语)
// - cy: Welsh (威尔士语)
// - mk: Macedonian (马其顿语)
// - sq: Albanian (阿尔巴尼亚语)
// - bs: Bosnian (波斯尼亚语)
// - me: Montenegrin (黑山语)
// - kk: Kazakh (哈萨克语)
// - uz: Uzbek (乌兹别克语)
// - tk: Turkmen (土库曼语)
// - ky: Kyrgyz (吉尔吉斯语)
// - tg: Tajik (塔吉克语)
// - mn: Mongolian (蒙古语)
// - bo: Tibetan (藏语)
// - ug: Uyghur (维吾尔语)
// - my: Burmese (缅甸语)
// - km: Khmer (高棉语)
// - lo: Lao (老挝语)
// - si: Sinhala (僧伽罗语)
// - ne: Nepali (尼泊尔语)
// - dz: Dzongkha (不丹语)
// - bn: Bengali (孟加拉语)
// - as: Assamese (阿萨姆语)
// - or: Oriya (奥里亚语)
// - gu: Gujarati (古吉拉特语)
// - pa: Punjabi (旁遮普语)
// - mr: Marathi (马拉地语)
// - sa: Sanskrit (梵语)
// - ml: Malayalam (马拉雅拉姆语)
// - kn: Kannada (卡纳达语)
// - te: Telugu (泰卢固语)
// - ta: Tamil (泰米尔语)
// - ur: Urdu (乌尔都语)
// - fa: Persian (波斯语)
// - ps: Pashto (普什图语)
// - sd: Sindhi (信德语)
// - ku: Kurdish (库尔德语)
// - am: Amharic (阿姆哈拉语)
// - ti: Tigrinya (提格里尼亚语)
// - om: Oromo (奥罗莫语)
// - so: Somali (索马里语)
// - sw: Swahili (斯瓦希里语)
// - rw: Kinyarwanda (卢旺达语)
// - lg: Luganda (卢干达语)
// - xh: Xhosa (科萨语)
// - zu: Zulu (祖鲁语)
// - af: Afrikaans (南非荷兰语)
// - st: Southern Sotho (南索托语)
// - tn: Tswana (茨瓦纳语)
// - ts: Tsonga (聪加语)
// - ss: Swati (斯瓦蒂语)
// - ve: Venda (文达语)
// - nr: South Ndebele (南恩德贝莱语)
// - nso: Northern Sotho (北索托语)
const languages = [
  "en", // English (英语) - 默认语言，VS Code的标准语言
  "zh-cn", // Chinese Simplified (简体中文)
  "zh-tw", // Chinese Traditional (繁体中文)
  "zh-hk", // Chinese Traditional (繁体中文)
  "ja", // Japanese (日语)
  "ko", // Korean (韩语)
  "de", // German (德语)
  "fr", // French (法语)
  "es", // Spanish (西班牙语)
  "it", // Italian (意大利语)
  "pt", // Portuguese (葡萄牙语)
  "uk", // Ukrainian (乌克兰语)
  "ru", // Russian (俄语)
  "ar", // Arabic (阿拉伯语)
];

// 进度条显示函数
function showProgressBar(current, total, prefix = "", barLength = 40) {
  if (!isMainThread) {
    return;
  }
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const filledBarLength = Math.round((barLength * current) / Math.max(total, 1));
  const emptyBarLength = barLength - filledBarLength;

  const filledBar = "█".repeat(filledBarLength);
  const emptyBar = "░".repeat(emptyBarLength);

  process.stdout.write(
    `\r${prefix} [${filledBar}${emptyBar}] ${percentage}% (${current}/${total})`,
  );
}

function mergeLang(lang) {
  const langDir = path.join(translationDir, lang);
  if (!fs.existsSync(langDir)) {
    console.log(`Language directory ${langDir} does not exist, skipping...`);
    return { lang, totalKeys: 0, outputFile: null };
  }

  const files = fs.readdirSync(langDir).filter((f) => f.endsWith(".json"));
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
      const fileContent = fs.readFileSync(filePath, "utf8");

      // 检查文件是否为空
      if (fileContent.trim() === "") {
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
  process.stdout.write("\n");
  console.log(`Total keys collected for ${lang}: ${totalKeys}`);

  let outFile;
  if (lang === "en") {
    outFile = path.join(translationDir, `bundle.l10n.json`);
  } else {
    outFile = path.join(translationDir, `bundle.l10n.${lang}.json`);
  }

  // 显示写入进度
  process.stdout.write(`Writing output file for ${lang}... `);

  // 只有当有内容时才写入文件
  const mergedKeyCount = Object.keys(merged).length;
  if (mergedKeyCount > 0) {
    fs.writeFileSync(outFile, JSON.stringify(merged, null, 2), "utf8");
    process.stdout.write("Done\n");
    console.log(`Merged ${lang} translations to ${outFile} with ${mergedKeyCount} keys`);
  } else {
    process.stdout.write("Skipped (no content)\n");
    console.log(`No translations found for ${lang}, not writing output file`);
  }

  return {
    lang,
    totalKeys,
    outputFile: mergedKeyCount > 0 ? outFile : null,
    mergedKeys: mergedKeyCount,
    filesProcessed: totalFiles,
  };
}

// 确保translation目录存在
if (!fs.existsSync(translationDir)) {
  console.log(`Translation directory ${translationDir} does not exist!`);
  process.exit(1);
}

if (!isMainThread) {
  try {
    const result = mergeLang(workerData.lang);
    parentPort?.postMessage(result);
  } catch (error) {
    parentPort?.postMessage({ lang: workerData.lang, error: error?.message });
    throw error;
  }
  return;
}

console.log(`Starting merge process for languages: ${languages.join(", ")}`);

Promise.all(languages.map((lang) => spawnMergeWorker(lang)))
  .then((results) => {
    results.forEach((result) => {
      if (result.error) {
        console.error(`Merge failed for ${result.lang}: ${result.error}`);
        return;
      }
      console.log(
        `[merge] ${result.lang} -> ${result.outputFile || "skipped"} (${result.totalKeys} keys)`,
      );
    });
    console.log("\nMerge process completed");
  })
  .catch((error) => {
    console.error("Merge process failed:", error);
    process.exit(1);
  });

function spawnMergeWorker(lang) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData: { lang } });
    worker.once("message", (message) => {
      resolve(message ?? { lang, error: "Unknown worker response" });
    });
    worker.once("error", reject);
    worker.once("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker for ${lang} exited with code ${code}`));
      }
    });
  });
}
