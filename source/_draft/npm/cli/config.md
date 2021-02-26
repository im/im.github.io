# config

> 设置配置文件



#### 概要

```bash
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list [-l] [--json]
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]

aliases: c
```



#### 详情

* npm从命令行，环境变量，.npmrc文件以及某些情况下（从package.json文件中）获取其配置设置。

* 有关npmrc文件的更多信息，请参见[npmrc](https://www.npmjs.cn/files/npmrc)。

* 有关[npm-config](https://www.npmjs.cn/misc/config/)更详尽的讨论，请参见参考资料。

* 该[npm-config](https://www.npmjs.cn/misc/config/)命令可用于更新和编辑用户和全局npmrc文件的内容



#### 子命令

* **set**

```bash
npm config set key value
```

将配置键设置为该值。
如果省略value，则将其设置为“ true”。

* **get**

```bash
npm config get key
```

获取配置值


* **get**

```bash
npm config list
```

显示所有配置设置。
使用`-l`还显示默认值。
使用`--json`以`json`格式显示设置。

* **delete**

```bash
npm config delete key
```

从配置文件删除指定项

* **edit**

```bash
npm config edit
```

在编辑器中打开配置文件。
使用--global标志来编辑全局配置。