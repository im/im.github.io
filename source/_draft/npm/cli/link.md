# link

> 链接软件包



#### 概要


```bash
npm link (in package dir)
npm link [<@scope>/]<pkg>[@<version>]

alias: npm ln
```



#### 描述


获取 prefix

```bash
npm config get prefix
# /usr/local/   mac
```

package 链接过程分为两步
首先、`npm link`将会在全局包`{prefix}/lib/node_modules/`下面创建一个指向命令执行的地方的符号链接。同时也会创建一个`{prefix}/bin/{name}`下面对应的bin包。
另一种情况下，npm link package-name 将会创建一个从global包指向当前文件夹node_modules/下对应的链接。
注意：package-name是依据package.json的name而非文件名称。



#### 实例

在这里，我们有两个项目，一个是npm-link-module，是我们要开发的npm模块,另一个是npm-link-example,是我们要运行npm模块的项目

首先，进入我们的npm-link-module项目，执行npm link


```bash
npm link
# /usr/local/lib/node_modules/npm-link-module -> /Users/xiaomi/Desktop/workbench/npm-link-module
```



执行命令后，`npm-link-module`会根据`package.json`上的配置，被链接到全局，路径是`{prefix}/lib/node_modules/<package>`，我们可以使用`npm config get prefix`命令获取到`prefix`的值(mac 链接的地址是 `{prefix}/lib/node_modules/<package>`)，操作完成后 会发现 `/usr/local/lib/node_modules/npm-link-module` 是一个快捷方式

**进入 /usr/local/lib/node_modules/**

这个快捷方式会指向刚才执行npm link的软件包位置

```bash
cd  /usr/local/lib/node_modules
# npm-link-module -> /Users/xiaomi/Desktop/workbench/npm-link-module
```

然后，进入`npm-link-example`项目，执行 `npm link npm-link-module`

npm-link-module 会被链接到 npm-link-example/node_modules下面，同样也是快捷方式

```bash
npm link npm-link-module
# /Users/xiaomi/Desktop/workbench/npm-link-example/node_modules/npm-link-module -> /usr/local/lib/node_modules/npm-link-module -> /Users/xiaomi/Desktop/workbench/npm-link-module
```



#### 细节

当你直接 link 软件包一个目录时:

```bash
npm link ../npm-link-module
```

其实npm link 还是做了两步操作， 第将软件包链接到全局 node_modules 然后再在当前项目 node_modules 建立链接

```bash
cd npm-link-module
npm link
cd npm-link-example
npm link npm-link-module
```



#### 总结
`npm link`的用途可以用于自己本地开发的模块调试过程
避免每次都`publish npm`包，然后安装调试。
这时候就可以先将该模块link到全局，然后在需要调试的项目里，将该命令链接到本地node_modules下面。