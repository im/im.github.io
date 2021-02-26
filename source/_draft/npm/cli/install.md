# install

> 安装软件包



#### 概要

```bash
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle
```



#### 详情

此命令将安装软件包及其依赖的任何软件包。
如果程序包中有程序包锁定或收缩包装文件，则依赖项的安装将由该驱动，如果两个文件都存在，则以`npm-shrinkwrap.json`为准


**npm install**

* 不带参数将依赖项安装在本地`node_modules`文件夹中

* 在全局模式下（即，在命令后附加`-g`或`--global`），它将当前程序包上下文（即当前工作目录）安装为全局程序包。

* 默认情况下，`npm install`将安装所有列为`package.json`中的依赖项的模块。

* 使用`--production`标志（或将`NODE_ENV`环境变量设置为`production`时），npm将不会安装`devDependencies`中列出的模块

<span class="vp-danger-text">注意：`--production`标志在向项目添加依赖项时没有特殊含义。</span>

**npm install `<folder>`**

将软件包作为当前项目中的符号链接安装在目录中。
它的依赖项将在链接之前安装。
如果`<folder>`位于项目的根目录中，则其依赖关系可能会像其他类型的依赖关系一样被提升到顶级`node_modules`。

**npm install `<tarball file>`**

安装位于文件系统上的软件包。注意：如果只想将dev目录链接到npm根目录，则可以使用来更轻松地做到这一点npm link。

* Tarball要求：

- 文件名必须使用`.tar`，`.tar.gz`或`.tgz`作为扩展名。
- 包装内容应位于tarball的子文件夹中（通常称为package/）。安装软件包时，npm会剥离一个目录层（相当于tar x --strip-components=1运行）。
- 程序包必须包含`package.json`具有`name`和`version`属性的文件。

```bash
npm install ./package.tgz
```

**npm install `<tarball url>`**

提取tarball网址，然后安装它。为了区分此选项和其他选项，参数必须以“ `http://`或“ `https://`开头

```bash
npm install https://github.com/indexzero/forever/tarball/v0.5.6
```


**npm install `[<@scope>/]<name>`:**

进行`<name>@<tag>`安装，`<tag>`“标签”配置在哪里。（请参阅 npm-config。配置的默认值为latest。）

在大多数情况下，这将安装latest在npm注册表上标记为的模块的版本 。

```bash
npm install vue
```

* `npm install dependencies` 默认将所有指定的软件包保存到其中。此外，您可以使用一些其他标志来控制在何处以及如何保存它们：

- `-P, --save-prod`：包裹将出现在您的中`dependencies`。这是默认设置，除非`-D`或`-O`存在。

- `-D, --save-dev`：包裹将出现在您的中devDependencies。

- `-O, --save-optional`：包裹将出现在您的中optionalDependencies。

- `--no-save`：防止保存到dependencies。

> 使用上述任何选项将依赖项保存到package.json时，还有两个附加的可选标志：

- `-E, --save-exact注意`：保存的依赖项将使用确切的版本配置，而不是使用npm的默认semver range运算符。

- `-B, --save-bundle`：保存的依赖项也将添加到您的bundleDependencies列表中。

> 此外，如果您具有npm-shrinkwrap.json或，package-lock.json那么它也会被更新。

<span class="vp-warning-text">`<scope>`是可选的。该包将从与指定范围关联的注册表中下载。如果没有注册表与给定范围相关联，则采用默认注册表。</span>  

<span class="vp-danger-text">注意：如果您的作用域名称上未包含@ -symbol，则npm会将其解释为GitHub存储库，请参见下文。范围名称也必须后面加上斜杠。</span>

```bash
npm install sax
npm install githubname/reponame
npm install @myorg/privatepackage
npm install node-tap --save-dev
npm install dtrace-provider --save-optional
npm install readable-stream --save-exact
npm install ansi-regex --save-bundle
```

<span class="vp-danger-text">注意：如果`<name>`当前工作目录中有一个文件或文件夹命名，则它将尝试安装该文件或文件夹，并且仅在名称无效时才尝试按名称获取该软件包。</span>


**npm install `[<@scope>/]<name>@<tag>`**

安装指定标签引用的软件包的版本。如果该程序包的注册表数据中不存在该标记，则此操作将失败。

```bash
npm install sax@latest
npm install @myorg/mypackage@latest
```

**npm install `[<@scope>/]<name>@<version>`**

安装指定版本的软件包。如果该版本尚未发布到注册表，则将失败。

```bash
npm install sax@0.1.1
npm install @myorg/privatepackage@1.5.0
```

