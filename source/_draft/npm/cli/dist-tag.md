# dist-tag

> 操作软件包的标签



#### 概要

```bash
npm dist-tag add <pkg>@<version> [<tag>]
npm dist-tag rm <pkg> <tag>
npm dist-tag ls [<pkg>]

aliases: dist-tags
```



#### 详情

添加，删除和枚举包装上的分发标签：

* **add:** 使用指定的标记或指定的--tag config标记软件包的指定版本。

```bash
npm dist-tag add test-npm-cli@1.0.1 test
+test: test-npm-cli@1.0.1
```

* **rm:** 从包装中清除不再使用的标签。

```bash
npm dist-tag rm test-npm-cli test
-test: test-npm-cli@1.0.1
```

* **ls:** 显示软件包的所有dist标签，默认为当前前缀中的软件包。

```bash
npm dist-tag ls
beta: 1.0.1
latest: 1.0.0
```

在安装软件包时，可以使用标签作为对版本的引用，而不是使用特定的版本号：

```bash
npm install <name>@<tag>
```