---
title:  git 将远程分支拉到本地
date: "2023-05-29"
categories:
  - Note 
author: "Cotan"
image: "/images/image-placeholder.png"
tags: ["git"]
draft: true
---

可以使用以下命令将远程分支拉到本地：

1. 首先，使用 `git remote` 命令查看已经添加的远程仓库：

```bash
git remote
```

2. 然后，使用 `git fetch` 命令将远程分支拉取到本地仓库（不会进行合并）：

```bash
git fetch origin remote_branch
```

3. 最后，使用 `git checkout` 命令将远程分支切换到本地分支：

```bash
git checkout local_branch
```

4. 组合命令


```bash
git fetch origin remote_branch:local_branch
```

其中，`remote_branch` 为远程分支名称，`origin` 为远程仓库名称，`local_branch` 为本地分支名称，可以根据实际情况进行替换。
