const fs = require('fs');
const path = require('path');

const notesDir = path.resolve(__dirname, '../docs');
const sidebarFile = path.resolve(__dirname, '../_sidebar.md');
const wikiBaseUrl = '/docs';

function formatDate(date) {
    const pad = n => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
        `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// 从文件内容获取第一个 # 开头的标题
function getTitleFromFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const match = content.match(/^#\s+(.*)/m);
        if (match) return match[1].trim();
    } catch (e) {
        console.warn(`读取文件标题失败: ${filePath}`, e.message);
    }
    return path.basename(filePath, '.md'); // 默认使用文件名
}

function readDirTree(dirPath, relativePath = '', level = 0) {
    let output = '';

    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    const dirs = items.filter(i => i.isDirectory());
    let files = items.filter(i => !i.isDirectory() && i.name.endsWith('.md'));

    // 目录按名称排序
    dirs.sort((a, b) => a.name.localeCompare(b.name));

    // 文件按修改时间排序（最新修改排在前）
    files.sort((a, b) => {
        const aStat = fs.statSync(path.join(dirPath, a.name));
        const bStat = fs.statSync(path.join(dirPath, b.name));
        const aTime = aStat.mtimeMs || aStat.birthtimeMs;
        const bTime = bStat.mtimeMs || bStat.birthtimeMs;
        return bTime - aTime;
    });

    // 输出目录
    dirs.forEach(dir => {
        const indent = '  '.repeat(level);
        output += `${indent}- **${dir.name}**\n`;
        const newRelativePath = path.posix.join(relativePath, dir.name);
        output += readDirTree(path.join(dirPath, dir.name), newRelativePath, level + 1);
    });

    // 输出文件（带链接和标题）
    files.forEach(file => {
        const indent = '  '.repeat(level);
        const filePath = path.posix.join(relativePath, file.name);
        const stat = fs.statSync(path.join(dirPath, file.name));
        const title = getTitleFromFile(path.join(dirPath, file.name));
        const updatedDate = formatDate(stat.mtime || stat.birthtime);
        output += `${indent}* [${title}](${wikiBaseUrl}/${encodeURIComponent(filePath)}) \n`;
    });

    return output;
}

function updateSidebar() {
    const treeStr = readDirTree(notesDir, '');
    fs.writeFileSync(sidebarFile, treeStr, 'utf-8');
    console.log(`目录结构已写入到 ${sidebarFile}`);
}

module.exports = updateSidebar;
