---
title: 用VSCode配置ESLint自动保存校验
date: "2023-05-29"
tags: ['vscode']
categories:
  - Note 
author: "Cotan"
image: "/images/image-placeholder.png"
---

## 简介

ESLint是一个开源的 JavaScript 代码检查工具，可以帮助我们发现代码中存在的错误和潜在问题，并给出推荐的修复方案，从而提高代码的质量和可读性。

本文将要介绍如何在VSCode中配置ESLint，实现自动保存校验功能，让我们的代码更加健康。

## 步骤

### 第一步：安装ESLint插件

如果没有安装ESLint插件的话，我们需要先到VSCode插件商店中安装ESLint插件，安装过程非常简单，只需要在搜索框中输入“ESLint”即可。


### 第二步：安装ESLint模块

在项目中安装ESLint模块依赖，可以使用npm或yarn，如下：

```
npm install eslint --save-dev
```

或

```
yarn add eslint --dev
```

### 第三步：创建ESLint配置文件

创建一个名为.eslintrc.json的文件，用来存放ESLint配置信息。

```
{
   "extends": "eslint:recommended",
   "rules": {}
}
```

这里使用了eslint:recommended作为配置的扩展，这些规则是由ESLint核心团队定义的一组推荐的规则。当然你也可以自定义一些规则，具体可参考官方文档。

### 第四步：配置VSCode

我们需要在VSCode的配置文件中，添加以下内容实现自动保存校验。

```
{
  "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "vue", "autoFix": true },
    { "language": "html", "autoFix": true }
  ]
}
```

这里通过`"editor.codeActionsOnSave"`属性实现自动保存校验，当我们保存文件时，如果存在ESLint报错，VSCode会自动执行修复操作。

同时将`"editor.formatOnSave"`设置为`false`，表示不对存储时代码格式进行调整。

最后配置`"eslint.validate"`即可，这里我们对`"javascript"`和`"javascriptreact"`进行校验和自动修复，同时对Vue和HTML代码添加支持。

## 总结

通过这个简单的配置，我们可以让ESLint与VSCode紧密地结合在一起，实现在保存代码之前、常规编写过程中进行代码检查校验。这将使我们能够更快地发现并修复潜在的问题，从而提高代码的质量和可读性。

