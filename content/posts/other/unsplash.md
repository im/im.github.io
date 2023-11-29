---
title: Unsplash 图片链接
date: "2023-06-01"
tags: ["images"]
---

### 随机图片链接

如果你需要一张随机的图片来让内容更加生动、有趣，只需要在 Unsplash 的基础图片链接后面加上“/random/”即可。例如以下链接将返回一个宽度为 640 像素、高度为 480 像素的随机图片：

```
https://source.unsplash.com/random/640x480
```
![](https://source.unsplash.com/random/640x480?landscape,mountain)

如果需要过滤主题，只需在链接末尾加上标签即可，例如以下链接将会返回一个范围包括 `mountain` 和 `landscape` 的随机图片：

```
https://source.unsplash.com/random/640x480?landscape,mountain
```

### 固定图片链接

如果你需要一张特定的图片，只需使用 Unsplash 图片的 ID，拼接图片链接即可。例如以下链接将会返回 ID 为 "hgytITrCiec" 的 Unsplash 图片，并且将图片宽度设置为 640 像素，高度设置为 480 像素：

```
https://source.unsplash.com/hgytITrCiec/640x480
```

### 在 Markdown 中使用 Unsplash 图片链接

在 Markdown 编辑器中，你可以使用以下语法插入 Unsplash 图片链接：

```
![图片描述](图片链接)
```

例如，在你的文章中插入一张宽度为 640 像素、高度为 480 像素的随机图片，可以使用以下代码：

```
![随机图片](https://source.unsplash.com/random/640x480)
```

如果你想要插入一张特定的图片，可以使用 ID 和固定图片链接：

```
![特定图片](https://source.unsplash.com/hgytITrCiec/640x480)
```

以上就是如何使用 Unsplash 图片链接的简单介绍。希望这篇文章对你有帮助！