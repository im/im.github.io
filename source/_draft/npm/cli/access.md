---
title: access
---

# access

> 设置软件包的读写权限



#### 概要

```bash
npm access public [<package>]
npm access restricted [<package>]

npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]

npm access 2fa-required [<package>]
npm access 2fa-not-required [<package>]

npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]
```



#### 详情

> 如果执行 `npm access` 没有指定软件包，将会对当前工作目录中的软件包执行操作

* **public / restricted:** 设置为软件包可公开（public）访问或受限制（restricted）
* **grant / revoke:** 添加或删除 用户和团队对程序包具有只读或读写权限
* **2fa-required / 2fa-not-required:** 是否启用身份双重验证
* **ls-packages:** 显示用户或团队可以访问的所有软件包以及访问级别，但只读的公共软件包除外（它不会显示整个注册表列表）
* **ls-collaborators:** 显示软件包的所有访问权限. 仅显示您具有读取权限的软件包的权限. 如果传入`<user>`，则仅将列表过滤到该用户恰好所属的团队. 
* **edit:** 设置软件包的访问权限 






#### 细节

* `npm access` 始终直接在当前注册表上运行，可使用以下命令从命令行进行配置 `--registry=<registry url>`.

* 无作用域的软件包始终是公共的。

* 作用域包默认为受访问限制软件包，但您可以使用以下方式将它们发布为公共包 `npm publish --access=public` 或在首次发布后使用`npm access public` 将其访问权限设置为public .

* 你必须有以下几种情况才能设置软件包的访问权限:
    - 你是当前软件包的所有者
    - 你是当前软件包的团队成员
    - 您已经以团队成员或直接拥有者的身份获得了程序包的读写特权

* 如果启用了双重身份验证，则在进行访问权限更改时必须使用 `--otp` 传递 `otp` 

* 如果你的账户未付款，发布私有软件包将会失败

* 团队和团队成员的管理是通过 `npm team` 命令完成的