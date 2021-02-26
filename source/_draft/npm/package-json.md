---
title:  package.json
tags:
	- npm
categories:
	- front end
thumbnail: https://i.picsum.photos/id/60/1200/700.jpg
---

> 您需要了解所有关于`package.json`文件中所需内容的信息。
> 它必须是实际的 JSON，而不仅仅是 JavaScript 对象。

<!--more-->

### name

如果您打算发布软件包，`package.json`中最重要的是 name 和 version，因为它们是必填字段。
name 和 version 共同构成一个标识符，该标识符被假定为完全唯一。
对软件包的更改应与版本的更改同时进行。
如果您不打算发布您的软件包，则名称和版本字段是可选的。

name 就是软件包的名字。



### 命名规则

-   名称必须少于或等于 214 个字符。

-   名称不能以点或下划线开头。

-   新软件包名称中不得包含大写字母。

-   该名称最终成为 URL，命令行参数和文件夹名称的一部分。因此，名称不能包含任何非 URL 安全的字符。



### 技巧

-   不要使用与核心 Node 模块相同的名称。

-   不要在名称中添加`js`或`node`。 假设它是 js，因为您正在编写 package.json 文件，并且可以使用“ engines”字段指定引擎。

-   该名称可能会作为参数传递给 require()，因此它应该简短一些，但也应具有描述性。

-   可能需要检查 npm 注册表，查看包名是否被占用[https://www.npmjs.com/](https://www.npmjs.com/)



## version

如果你打算发布软件包， 那么 version 为必填项， version 使用[node-semver](https://github.com/npm/node-semver)

有关版本号和范围的更多信息，请参见[semver](https://www.npmjs.cn/misc/semver/)



## description

为软件包添加描述，可以方便用户查找 `npm search`



## keywords

为软件包添加关键字，可以方便用户查找 `npm search`



## homepage

项目首页网址

```json
{
    "homepage": "https://tangxiaomi.top/note/"
}
```



## bugs

项目的问题跟踪器的 URL 或应向其报告问题的电子邮件地址。
这些对于遇到您的软件包问题的人很有帮助。

如果提供了网址，则`npm bugs`命令将使用该网址。

```json
{
    "bugs": "https://github.com/im/note/issues"
}
{
    "bugs": {
        "url": "https://github.com/im/note/issues",
        "email": "tangxiaomiemail@gmail.com"
    }
}
```



## license

您应该为您的软件包指定一个许可证，以便人们知道如何允许他们使用它以及您对该软件包施加的任何限制。



## files

指定软件包安装是需要包括哪些文件，类似白名单。

```json
{
    "files": ["*"]
}
```

不能通过`.npmignore`或`.gitignore`排除 `package.json` files”字段中包含的文件。



## main

设置软件包 入口文件



## browser

指定模块兼容的浏览器



## bin

许多包有一个或多个可执行文件(executable)，他们希望直接导入到全局路径里面,这样可以直接使用

使用这个,在`package.json`提供一个映射到本地本地文件名的`bin`字段,一旦被引入后,npm将软链接这个文件到`prefix/bin`里面,以便于全局引入,或者在`./node_modules/.bin/`目录里

```json
{ 
    "bin": { 
        "myapp": "./cli.js"
    }
}
```

当你引入myapp时,他创建了一个软链接到 cli.js文件

如果你有一个单一可执行文件,他的名字应该是和package名字一样,那样你就可以,想使用字符串一样使用它

```json
{ 
    "bin":  "./cli.js"
}
```

请确保`bin`中引用的文件以`＃/usr/bin/env`节点开头，否则脚本将在没有节点可执行文件的情况下启动！



## repository

指定代码所在的位置。
这对想要贡献的人很有帮助。
如果git repo在GitHub上，那么npm docs命令将能够找到您。


```json
"repository": {
  "type" : "git",
  "url" : "https://github.com/npm/cli.git"
}

"repository": {
  "type" : "svn",
  "url" : "https://v8.googlecode.com/svn/trunk/"
}
```



## script

“ scripts”属性是一个字典，其中包含在包的生命周期中的各个时间运行的脚本命令。
关键是生命周期事件，值是在那一点运行的命令。



## config

`config` 对象可用于设置在升级过程中持续存在的程序包脚本中使用的配置参数。

```bash
{ "name" : "foo"
, "config" : { "port" : "8080" } }
```



## dependencies

依赖关系是在一个简单的对象中指定的，该对象将程序包名称映射到版本范围。
版本范围是一个字符串，具有一个或多个以空格分隔的描述符。
依赖关系也可以通过tarball或git URL进行标识


**请不要在您的依赖项对象中放置测试工具或编译器。请参阅下面的devDependencies。**

有关指定版本范围的更多详细信息:
|版本范围|描述|
|:-| :- |
| **version** | 必须完全匹配版本   |
| **>version** | 必须大于版本 |
| **>=version** | 必须大于等于版本 |
| **>version** | 必须小于版本 |
| **>=version** | 必须小于等于版本 |
| **~version** | 会匹配最近的小版本依赖包<br/>比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0 |
| **^version** | 会匹配最新的大版本依赖包 <br/>比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0 |
| **1.2.x** | 匹配所有1.2.x版本，但是不包括1.3.0 |
| **http://...** | 请参考 [url作为依赖项](#url作为依赖项) |
| **`*`** | 匹配任何版本 |
| **`“”`** | 如果是个空字符串 与 * 相同 |
| **version1 - version2** | >=version1 <=version2 |
| **version1 `||` version2** | 如果version1满足就使用version1 否则使用version2 |
| **git url** | 请参考 [git url作为依赖项](#git-url作为依赖项) |
| **tag** | 使用标记并发布为标记的特定版本 |
| **user/repo** | 请参考 [github-url](#github-url) |
| **path/path/path** | 请参考 [本地路径](#本地路径) |


```json
{ "dependencies" :
  { "foo" : "1.0.0 - 2.9999.9999"
  , "bar" : ">=1.0.2 <2.1.2"
  , "baz" : ">1.0.2 <=2.3.4"
  , "boo" : "2.0.1"
  , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
  , "asd" : "http://asdf.com/asdf.tar.gz"
  , "til" : "~1.2"
  , "elf" : "~1.2.3"
  , "two" : "2.x"
  , "thr" : "3.3.x"
  , "lat" : "latest"
  , "dyl" : "file:../dyl"
  }
}
```



### url作为依赖项

您可以指定压缩包URL代替版本范围。该压缩包将在安装时下载并本地安装到您的软件包中。



### git url作为依赖项

Git网址的格式为：

```bash
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

`<protocol>` 可以设置为 `git+ssh`, `git+http`, `git+https`, `git+file`.


如果提供了`＃<commit-ish>`，它将用于精确克隆该提交。
如果提交格式为#semver：`<semver>`，则`<semver>`可以是任何有效的semver范围或确切版本，并且npm会在远程存储库中查找与该范围匹配的任何标记或引用。注册表依赖项。
如果两者都不

```
git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27
```



### github url

从1.1.65版本开始，您可以将GitHub URL简称为`"foo"："user/foo-project"`。
与git URL一样，可以包含提交后缀。
例如：

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature\/branch"
  }
}
```



### 本地路径

从2.0.0版开始，您可以提供包含软件包的本地目录的路径。
可以使用以下任何形式使用npm install -S或npm install --save保存本地路径：

```
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

在这种情况下，它们将被规范化为相对路径并添加到您的package.json中。
例如：
```
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

此功能对于本地脱机开发和创建需要npm安装的测试很有用，您不想在不打外部服务器的地方安装npm，但是在将程序包发布到公共注册表时不应使用。