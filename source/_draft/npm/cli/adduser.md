# adduser

> 添加注册表用户帐户
>
> 

#### 概要

```bash
npm adduser [--registry=url] [--scope=@orgname] [--always-auth] [--auth-type=legacy]

aliases: login, add-user
```



#### 详情

* 在指定的注册表中创建或验证名为`<username>`的用户，并将凭据保存到`.npmrc`文件。如果未指定注册表，则将使用默认注册表（请参阅[npm-config](https://www.npmjs.cn/misc/config/)

* 用户名，密码和电子邮件是命令行中提取的

* 要重置密码，请访问[https://www.npmjs.com/forgot](https://www.npmjs.com/forgot)

* 要更改您的电子邮件地址，请访问[https://www.npmjs.com/email-edit](https://www.npmjs.com/email-edit)

* 您可以使用同一用户帐户多次使用此命令在新计算机上进行授权。在新计算机上进行身份验证时，用户名，密码和电子邮件地址都必须与您现有的记录匹配。

* `npm login`是`adduser`的别名，其行为完全相同。



#### 配置

[npm注册表](https://cloud.tencent.com/developer/section/1490267)
* **registry**
    - `默认值:` [https://registry.npmjs.org/](https://registry.npmjs.org/)

npm程序包注册表的基本URL。如果还指定了作用域，则此注册表将仅用于具有该作用域的软件包。scope默认为您当前所在项目目录的范围（如果有）。请参阅[npm-scope](/npm/cli/scope/)

* **scope**
    - `默认值:` none

如果指定，则给定的用户和登录凭据将与指定的范围相关联。
请参阅[npm-scope](/npm/cli/scope/)。
您可以同时使用两者，例如:

```bash
npm adduser --registry=http://myregistry.example.com --scope=@myco
```

这将为给定范围设置注册表，并同时登录或为该注册表创建用户

* **always-auth**
    - `默认值:` false

如果指定，请保存配置，该配置指示对给定注册表的所有请求都应包括授权信息。
对私人注册表有用。
可以与`--registry`和`--scope一`起使用，例如:

```bash
npm adduser --registry=http://private-registry.example.com --always-auth
```
确保对注册表的所有请求都包括授权信息。
此设置对于将元数据和软件包tarball存储在具有不同主机名的主机上的私有注册表可能是必需的。
有关always-auth的更多详细信息，请参见[npm-config](https://www.npmjs.cn/misc/config/)中的always-auth。
Always-auth的特定于注册表的配置优先于任何全局配置。


* **auth-type**
    - `默认值:` 'legacy'
    - `Type:` 'legacy', 'sso', 'saml', 'oauth'

与adduser / login一起使用的身份验证策略。
除旧版npm中的经典用户名/密码输入外，某些npm注册表（例如npmE）可能还支持其他身份验证策略。