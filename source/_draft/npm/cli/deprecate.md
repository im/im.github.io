

# deprecate [ˈdeprəkeɪt]

> 作废指定包的指定版本



#### 概要

```bash
npm deprecate <pkg>[@<version>] <message>
```



#### 详情

此命令将更新 npm 注册表中指定包所对应的数据条目， 为尝试安装它的所有人提示版本作废的警告信息。

它适用于 [版本范围](https://semver.npmjs.com/) 以及指定版本，因此你可以执行以下操作：

```bash
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

请注意，你必须是包的所有者才能作废某些内容。请参阅 owner 和 adduser 帮助主题。

如需取消作废操作，可以为 message 参数指定一个空字符串（""）。 注意，必须使用双引号，并且双引号之间不能有空格，这是为了 构造一个空字符串。