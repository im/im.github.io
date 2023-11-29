const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path')

const watchDir = path.resolve(__dirname, 'content')
console.log('watchDir: ', watchDir);

const git = simpleGit({
    baseDir: watchDir,
    binary: 'git',
});


// 添加远程仓库
const remoteName = 'origin';

// 监控文件变化
const watcher = chokidar.watch(watchDir);
watcher.on('change', path => {
    console.log(`File ${path} has been modified`);
    git.add(path)
        .commit(`Auto commit at ${new Date().toISOString()}`)
        .push(remoteName, 'master')
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err);
        });
});

console.log(`Monitor ${watchDir} for changes...`);
