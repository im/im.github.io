---
title: git 修改远程仓库地址
toc: true
date: 2021-03-09
categories:
    - git
cover: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/36.svg
thumbnail: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/36.svg
---


## 命令直接修改

```bash
git remote set-url origin [url]
```

## 先删后加

```bash
git remote rm origin
git remote add origin [url]
```

## 直接修改配置文件

```bash
cd .git
vim config
```

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = https://github.com/im/im.github.io.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
[submodule "themes/icarus"]
	active = true
	url = https://github.com/im/hexo-theme.git
[submodule "themes/cactus"]
	url = https://github.com/im/hexo-theme.git
	active = true
```

## 查看远程地址

```bash
git remote -v
```

