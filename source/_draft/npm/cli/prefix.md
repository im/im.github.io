# prefix

> 打印本地目录前缀



#### 概要

```bash
npm prefix [-g]
```



#### 详情

打印本地目录前缀。如果没有 -g 参数，它是包含 package.json 文件或 node_modules 目录的最近的父目录。

如果带有 -g 参数，它就是全局目录前缀。

```bash
npm prefix

# /Users/xiaomi/Desktop/workbench/npm-link-example

npm prefix -g

# /usr/local
```


