---
title: 获取git用户名、邮箱
date: 2019-11-29
tags:
    - nodejs
categories:
    - front end
thumbnail: https://i.picsum.photos/id/60/1200/700.jpg
---


获取git用户名及邮箱

<!--more-->

#### 依赖 `child_process 用来生成子进程 `

[参考地址 segmentfault](https://segmentfault.com/a/1190000016169207)

[node child_process](https://nodejs.org/api/child_process.html)

[node child_process execSync](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)


```js
require('child_process').execSync
// execSync 同步执行子进程
```



#### 代码

```js
// getGitUser.js
const exec = require('child_process').execSync
module.exports = () => {
    let name
    let email

    try {
        name = exec('git config --get user.name')
        email = exec('git config --get user.email')
    } catch (e) { }

    name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
    email = email && email.toString().trim()
    return {
        name,
        email
    }
}
```

#### 使用

```js
const getGitUser = require('getGitUser')

getGitUser() // => { name: '糖小米 .', email: 'tangxiaomiemail@gmail.com' }
```