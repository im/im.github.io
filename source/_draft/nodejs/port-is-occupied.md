---
title: nodejs 判断端口是否被占用
date: 2018-02-013
tags:
    - nodejs
categories:
    - front end
thumbnail: https://i.picsum.photos/id/63/1200/700.jpg
---



> 当你 需要同时启动多个服务的时候，有时候端口可能被其他服务占用，下面这个方法用来 检测接口是否被占用， 如果被占用就会在当前接口递增一个新的端口


<!--more-->

#### 依赖

`net模块为您提供异步网络包装器,它包含用于创建服务器和客户端的方法, net模块为node的内置模块 如果安装了node可以直接使用不需要安装`

```js
const net = require('net')
```



#### 代码

```js
// portIsOccupied.js
const net = require('net')
function portIsOccupied(port) {
    const server = net.createServer().listen(port)
    return new Promise((resolve, reject) => {
        server.on('listening', () => {
            server.close()
            resolve(port)
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(portIsOccupied(port + 1)) // 注意这句，如占用端口号+1
            } else {
                reject(err)
            }
        })
    })
}
module.exports = portIsOccupied
```



#### 使用

```js
const portIsOccupied = require('portIsOccupied')
portIsOccupied(8080).then(port => {
    // 如果该端口没被使用 会直接返回 8080
    console.log(port) // => 8080

    // 如果该端口已经被占用， 会一直递增 返回一个能用得端口号
    console.log(port) // => 8081 || 8082
})
```