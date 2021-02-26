# pack

> 创建一个压缩包



#### 概要

```bash
npm pack [[<@scope>/]<pkg>...] [--dry-run]
```



#### 详情

- 对于任何可安装的内容（即，软件包文件夹，tarball，tarball url，name@tag，name@version，名称或作用域名称），此命令会将其提取到缓存中，然后将tarball复制到当前的工作环境中
- 目录作为`<name>-<version>.tgz`，然后将文件名写出到stdout。
- 如果多次指定相同的程序包，则文件将第二次被覆盖。
- 如果未提供任何参数，则npm将打包当前的包文件夹。
- --dry-run参数将执行打包通常执行的所有操作，而无需实际打包任何内容。

