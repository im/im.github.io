本文介绍如何在 Node.js 环境下调用 AppleScript，实现对 macOS 系统功能的自动化控制。


## 目录

- [目录](#目录)
- [前置准备](#前置准备)
- [调用 AppleScript 的方法](#调用-applescript-的方法)
- [示例代码](#示例代码)
  - [示例1 显示对话框](#示例1-显示对话框)
  - [示例2 获取当前系统时间](#示例2-获取当前系统时间)
  - [示例3 控制应用程序（打开或关闭）](#示例3-控制应用程序打开或关闭)
- [总结](#总结)
- [参考资料](#参考资料)


## 前置准备

- macOS 操作系统  
- 安装 [Node.js](https://nodejs.org/)  
- 熟悉 AppleScript 基础语法  
- 本教程使用 Node.js 自带的 `child_process` 模块调用 AppleScript  


## 调用 AppleScript 的方法

在 Node.js 中，可以使用 `child_process.exec` 或 `child_process.execFile` 执行 `osascript` 命令，调用 AppleScript 代码。

示例调用命令行：

```bash
osascript -e 'display dialog "Hello from AppleScript"'
````

Node.js 调用示例：

```js
const { exec } = require('child_process');

exec(`osascript -e 'display dialog "Hello from AppleScript"'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`AppleScript 返回: ${stdout}`);
});
```


## 示例代码

### 示例1 显示对话框

调用 AppleScript 弹出一个对话框：

```js
const { exec } = require('child_process');

exec(`osascript -e 'display dialog "Hello from Node.js and AppleScript!"'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  console.log('对话框已显示');
});
```


### 示例2 获取当前系统时间

通过 AppleScript 获取当前时间，Node.js 读取并输出：

```js
const { exec } = require('child_process');

exec(`osascript -e 'set currentTime to (time string of (current date))' -e 'return currentTime'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  console.log(`当前系统时间: ${stdout.trim()}`);
});
```


### 示例3 控制应用程序（打开或关闭）

打开“访达”应用：

```js
const { exec } = require('child_process');

exec(`osascript -e 'tell application "Finder" to activate'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  console.log('Finder 已打开');
});
```

关闭“访达”应用：

```js
const { exec } = require('child_process');

exec(`osascript -e 'tell application "Finder" to quit'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行错误: ${error.message}`);
    return;
  }
  console.log('Finder 已关闭');
});
```


## 总结

* Node.js 可以通过 `child_process` 调用系统命令 `osascript` 来执行 AppleScript。
* AppleScript 是 macOS 系统自动化利器，可以控制应用、系统行为。
* 利用两者结合，可以实现强大的跨平台自动化脚本。


## 参考资料

* [AppleScript 教程 (Apple 官方)](https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html)
* [Node.js child\_process 官方文档](https://nodejs.org/api/child_process.html)
* [osascript man page](https://ss64.com/osx/osascript.html)


