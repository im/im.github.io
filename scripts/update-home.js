const fs = require('fs');
const path = require('path');

const notesDir = path.resolve(__dirname, '../notes');
const homeFile = path.resolve(__dirname, '../Home.md');
const wikiBaseUrl = 'https://github.com/im/noto/wiki';

function formatDate(date) {
    const pad = n => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
        `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function readDirTree(dirPath, relativePath = '', level = 0) {
    let output = '';

    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    const dirs = items.filter(i => i.isDirectory());
    let files = items.filter(i => !i.isDirectory() && i.name.endsWith('.md'));

    // 目录按名称排序
    dirs.sort((a, b) => a.name.localeCompare(b.name));

    // 文件按创建时间降序排序（新 -> 旧）
    files.sort((a, b) => {
        const aStat = fs.statSync(path.join(dirPath, a.name));
        const bStat = fs.statSync(path.join(dirPath, b.name));
        return bStat.birthtimeMs - aStat.birthtimeMs;
    });

    // 输出目录
    dirs.forEach(dir => {
        const indent = '  '.repeat(level);
        output += `${indent}- **${dir.name}**\n`;
        const newRelativePath = path.posix.join(relativePath, dir.name);
        output += readDirTree(path.join(dirPath, dir.name), newRelativePath, level + 1);
    });

    // 输出文件（带链接和时间）
    files.forEach(file => {
        const indent = '  '.repeat(level);
        const fileNameWithoutExt = file.name.replace(/\.md$/, '');
        const filePath = path.posix.join(relativePath, file.name);
        const stat = fs.statSync(path.join(dirPath, file.name));
        const createdDate = formatDate(stat.birthtime);
        output += `${indent}- [${fileNameWithoutExt}](${wikiBaseUrl}/${encodeURIComponent(fileNameWithoutExt)}) (${createdDate})\n`;
    });

    return output;
}



function updateHomeMd() {
    const treeStr = readDirTree(notesDir, '');

    const content = `# 目录结构\n\n${treeStr}`;

    fs.writeFileSync(homeFile, content, 'utf-8');
    console.log(`目录结构已写入到 ${homeFile}`);
}

module.exports = updateHomeMd;