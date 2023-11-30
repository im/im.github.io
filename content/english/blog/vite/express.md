---
title: 如何在 Vite 中拦截开发服务器并使用 express
date: "2023-05-23"
tags: ["vite", "typescript", "express"]
categories:
  - Note 
author: "Cotan"
image: "/images/image-placeholder.png"
---


Vite 是一个快速、轻量级、易于使用的前端工具。它为开发者提供了一种现代的构建方式，可以快速地构建出高效且易于维护的 Web 应用程序。

在 Vite 版本 4.2 及以上的版本中，我们可以使用 `configureServer` 方法来拦截 Vite 开发服务器，并将其替换为 express HTTP 服务器。这样，我们就可以使用更加灵活的 HTTP 服务器组合，并且可以方便地实现登录、鉴权等功能。

## 配置 Vite 插件

为了使用自定义的 express 应用程序，我们需要编写一个 Vite 插件

我们可以通过 `myPlugin` 函数来创建一个新插件。这个插件暴露了一个 `configureServer` 方法，我们可以在这个方法中创建并配置一个 express 应用程序。

```ts
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default function myPlugin () {
    return {
        name: 'my-plugin',
        configureServer (server) {
            const app = express()

            app.use(cors({
                credentials: true,
                origin: true
            }))

            app.use(bodyParser.urlencoded({
                extended: false
            }))

            app.use(cookieParser())

            server.middlewares.use(app)

            app.use('/login', () => {
                // login
            })
        }
    }
}
```

在 `configureServer` 方法中，我们首先创建了一个新的 express 应用程序 `app`。

接下来，我们注册了 `cors`、`body-parser` 和 `cookie-parser` 中间件，这样我们就可以在应用程序中使用这些中间件了。

然后，我们将应用程序添加到 Vite 开发服务器的中间件中，这样就可以使用自定义的 `express` 应用程序来处理 HTTP 请求了。

最后，我们向应用程序中添加了一个处理 `/login` URL 路径的路由处理函数，用于执行登录逻辑。

## 配置 Vite

使用 `configureServer` 来配置 Vite 开发服务器也很简单。我们只需要将插件导入应用程序，然后将其添加到 Vite 配置的 `plugins` 队列中，就可以完整地拦截 Vite 开发服务器了。

```ts
import myPlugin from './myPlugin'

export default defineConfig({
    // ...
    plugins: [
        myPlugin()
    ]
})
```

## 结论

通过使用 `configureServer` 方法，我们可以轻松地拦截 Vite 开发服务器，并使用 express HTTP 服务器来替换它。

这种方式可以让我们在 Vite 开发服务器中使用更加灵活的 HTTP 服务器组合，并且可以方便地实现登录、鉴权等功能。
