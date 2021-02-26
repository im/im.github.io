# docs

> 浏览器打开软件包文档



#### 概要

```bash
npm docs [<pkgname> [<pkgname> ...]]
npm docs .
npm home [<pkgname> [<pkgname> ...]]
npm home .
```



#### 详情

此命令尝试猜测软件包文档URL的可能位置，然后尝试使用--browser config参数将其打开。
您可以一次传递多个软件包名称。
如果没有提供包名称，它将在当前文件夹中搜索package.json并使用name属性。