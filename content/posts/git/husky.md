---
title: husky
date: "2023-05-30"
categories:
  - 笔记
tags: ["git"]
---


1. 安装 Husky

使用 npm 进行安装：

```bash
npm install husky --save-dev
```

2. 配置 Git 钩子

在 package.json 文件中添加 "husky" 配置：

```json
"husky": {
    "hooks": {
    "pre-commit": "npm run lint", // 在执行 git commit 命令时，会执行 npm run lint 命令
    "pre-push": "npm run test" // 在执行 git push 命令时，会执行 npm run test 命令
    }
}
```

3. 配置 pre-commit 钩子

在 package.json 文件中添加 "scripts" 属性：

```json
"scripts": {
    "lint": "eslint ."
}
```

这里的 "lint" 命令使用 ESlint 对整个项目进行代码风格检查。

4. 配置 pre-push 钩子

在 package.json 文件中添加另一个 "scripts" 属性：

```json
"scripts": {
    "test": "jest"
}
```

这里的 "test" 命令使用 Jest 对整个项目进行测试。

5. 完成

现在，当您在项目中运行 git commit 或 git push 命令时，Husky 将自动执行 lint 和 test 命令。如果命令返回任何错误，Husky 将阻止您的提交或推送。

您可以使用 Husky 的其他功能来执行其他任务，例如在 commit 或 push 之前自动发布代码，或在代码风格测试失败时发送电子邮件等。

更多详细的配置信息请查看 Husky 的官方文档: [https://github.com/typicode/husky](https://github.com/typicode/husky)