

# init

> 创建一个package.json文件



#### 概要

```bash
npm init [--force|-f|--yes|-y|--scope]
npm init <@scope> (same as `npx <@scope>/create`)
npm init [<@scope>/]<name> (same as `npx [<@scope>/]create-<name>`)

```



#### 实例

使用以下命令创建一个新的基于React的项目[create-react-app](https://www.npmjs.com/package/create-react-app)：

```bash
npm init react-app ./my-react-app
```

esm使用[create-esm](https://www.npmjs.com/package/create-esm)以下命令创建一个新的兼容软件包：

```bash
mkdir my-esm-lib && cd my-esm-lib
npm init esm --yes
```

使用旧版init生成普通的旧package.json：

```bash
mkdir my-npm-pkg && cd my-npm-pkg
git init
npm init
```

生成它时不会问任何问题:

```bash
npm init -y
```



#### 详情

* nnpm init `<initializer>` 可用于设置新的或现有的npm软件包。

`initializer`在这种情况下`create-<initializer>`，将使用一个名为的npm软件包，该软件包将由安装，然后执行其主bin-大概会创建或更新并运行任何其他与初始化相关的操作。npxpackage.json

* 将init命令转换为相应的npx操作，如下所示：

- `npm init foo` - > npx create-foo
- `npm init @usr/foo` - > npx @usr/create-foo
- `npm init @usr` - > npx @usr/create

* 任何其他选项将直接传递到命令，因此`npm init foo --hello`将映射到`npx create-foo --hello`

* 如果省略了初始化程序（仅通过调用`npm init`），则init将退回到传统的init行为。它会问您很多问题，然后为您编写一个`package.json`。它将尝试根据现有字段，依赖项和选择的选项做出合理的猜测。它是严格加法的，因此它将保留所有已设置的字段和值。您也可以使用 `-y 或 --yes`完全跳过所有询问。如果通过`--scope`，它将创建一个有范围的包。