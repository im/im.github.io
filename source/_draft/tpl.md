---
title: git 常用命令
toc: true
date: 2021-02-26
categories:
    - git
cover: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/05.svg
thumbnail: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/05.svg
---

### 恢复修改过的文件

```bash
git checkout file_name
```

### 获取远程分支

```bash
git checkout --track origin/branch_name
```

### 本地分支关联远程分支

```bash
git branch --set-upstream-to=origin branch_name
```

<!--more-->

### 合并某一次提交
```bash
git cherry-pick commit_id
```
