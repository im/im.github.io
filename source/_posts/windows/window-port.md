---
title: Windows下如何查看某个端口被谁占用
date: 2021-03-23
toc: true
tags:
    - windows
categories:
    - other
cover: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/30.svg
thumbnail: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/30.svg
---


## 打开命令窗口(以管理员身份运行)

开始—->运行—->`cmd`，或者是 `window+R` 组合键，调出命令窗口。

## 查找所有运行的端口

```bash
netstat -ano
```

## 查看被占用端口对应的 PID

```bash
netstat -aon|findstr "8081"
```

## 查看指定 PID 的进程

```bash
tasklist|findstr "9088"
```

## 结束进程

强制（/F参数）杀死 pid 为 9088 的所有进程包括子进程（/T参数）：

```bash
taskkill /T /F /PID 9088 
```
