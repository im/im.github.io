---
title: Linux硬链接与软连接
tags:
    - linux
categories:
    - other
thumbnail: https://i.picsum.photos/id/57/1200/700.jpg
---


> 为解决文件的共享使用，Linux 系统引入了两种链接：`硬链接 (hard link)` 与`软链接（又称符号链接，即 soft link 或 symbolic link）`。链接为 Linux 系统解决了文件的共享使用，还带来了隐藏文件路径、增加权限安全及节省存储等好处。

<!--more-->

#### 硬链接 (hard link)  

<span class="vp-primary-text">若一个 inode 号对应多个文件名，则称这些文件为硬链接。换言之，硬链接就是同一个文件使用了多个别名</span>

通过文件名打开文件:

![](https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/image001.jpg)


**在 Linux 系统中查看 `inode` 号可使用命令 `stat` 或 `ls -i`**

```bash
echo "创建文件" > old.file #创建一个文件
ls -i # 查看文件 inode
#14872237 old.file
link old.file new.file # 链接文件
ls -i # 查看文件 inode
#14872237 new.file 14872237 old.file 两个文件的 inode 指向同一个地方
```

**由于硬链接是有着相同 inode 号仅文件名不同的文件，因此硬链接存在以下几点特性**

* 文件有相同的 inode 及 data block；
* 只能对已存在的文件进行创建；
* 不能交叉文件系统进行硬链接的创建；
* 不能对目录进行创建，只可对文件创建；
* 删除一个硬链接文件并不影响其他有相同 inode 号的文件。

> inode 是随着文件的存在而存在，因此只有当文件存在时才可创建硬链接，即当 inode 存在且链接计数器（link count）不为 0 时。inode 号仅在各文件系统下是唯一的，当 Linux 挂载多个文件系统后将出现 inode 号重复的现象，因此硬链接创建时不可跨文件系统。



#### 软链接 （soft link）

<span class="vp-primary-text">软链接与硬链接不同，<span class="vp-danger-text">若文件用户数据块中存放的内容是另一文件的路径名的指向，则该文件就是软连接</span>。软链接就是一个普通文件，只是数据块内容有点特殊。软链接有着自己的 inode 号以及用户数据块。因此软链接的创建与使用没有类似硬链接的诸多限制</span>


**软链接存在以下几点特性**

* 软链接有自己的文件属性及权限等；
* 可对不存在的文件或目录创建软链接；
* 软链接可交叉文件系统；
* 软链接可对文件或目录创建；
* 创建软链接时，链接计数 i_nlink 不会增加；
* 删除软链接并不影响被指向的文件，但若被指向的原文件被删除，则相关软连接被称为死链接（即 dangling link，若被指向路径文件被重新创建，死链接可恢复为正常的软链接）。

软链接访问：

![](https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/image002.jpg)


```bash
ln -s old.file soft.link

ll
# -rw-r--r--  1 xiaomi  staff    13B  9 29 07:27 old.file
# lrwxr-xr-x  1 xiaomi  staff     8B  9 29 07:45 soft.link -> old.file
```

### 参考文档


[https://www.jianshu.com/p/dde6a01c4094](https://www.jianshu.com/p/dde6a01c4094)
[https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/index.html](https://www.ibm.com/developerworks/cn/linux/l-cn-hardandsymb-links/index.html)

