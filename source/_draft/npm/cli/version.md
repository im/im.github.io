# version

> 设置软件包版本



#### 概要

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

npm [-v | --version] to print npm version
npm view <pkg> version to view a package's published version
npm ls to inspect current package/dependency versions
```



#### 详情

* 在软件包目录中运行此命令以更改版本，并将新数据写回到package.json，package-lock.json和npm-shrinkwrap.json（如果存在）中。

* newversion参数应该是有效的semver字符串，semver.inc的有效第二个参数（patch，minor，major，prepatch，preminor，premajor，prerelease）或from-git。

* 在第二种情况下，现有版本将在指定字段中增加1。

* from-git将尝试读取最新的git标记，并将其用作新的npm版本。

* 如果在git repo中运行，它还将创建版本提交和标记。

* 此行为由git-tag-version控制（请参见下文），可以通过运行npm --no-git-tag-version版本在命令行上禁用。

* 如果工作目录不干净，它将失败，除非设置了-f或--force标志。

* 如果提供了-m或--message config选项，则npm在创建版本提交时会将其用作提交消息。

* 如果消息配置中包含％s，则将其替换为结果版本号。



