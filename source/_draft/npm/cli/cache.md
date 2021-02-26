# cache



> 处理软件包缓存



#### 概要

```bash
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <name>@<version>

npm cache clean [<path>]
aliases: npm cache clear, npm cache rm

npm cache verify
```



#### 详情

> 用于添加，列出或清理npm缓存文件夹。

* **add:** 将指定的软件包添加到本地缓存中。该命令主要供npm在内部使用，但是它可以提供一种将数据显式添加到本地安装缓存的方法

* **clean:** 从缓存文件夹中删除所有数据

* **verify:** 验证缓存文件夹的内容，对所有不需要的数据进行垃圾回收，并验证缓存索引和所有缓存数据的完整性。



#### 细节

* npm将缓存数据存储在已配置的cache名为的不透明目录中_cacache。该目录是cacache基于目录的内容可寻址缓存，用于存储所有http请求数据以及其他与程序包相关的数据。该目录主要通过进行访问pacote，该库负责从npm @ 5开始获取所有软件包。

* 完全验证了通过缓存的所有数据的插入和提取完整性。缓存损坏将触发错误，或者pacote提示必须重新提取数据，这将自动执行。由于这个原因，除了回收磁盘空间（因此clean现在 为什么--force要运行）之外，永远不需要出于任何其他原因清除缓存。

* 当前没有通过npm公开的方法来检查或直接管理此缓存的内容。为了访问它，cacache必须直接使用。

* npm不会单独删除数据：随着安装新软件包，缓存将增长。



#### 缓存位置

* mac:  ~/.npm/_cacache

* windows:  %AppData%/npm-cache

