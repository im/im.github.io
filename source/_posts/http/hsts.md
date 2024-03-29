---
title: HSTS 强制 https
date: "2023-06-07"
tags: ["http"]
---


`HSTS (HTTP Strict Transport Security)` 是一种安全策略，用于强制浏览器使用 HTTPS 进行安全连接，防止恶意攻击者使用中间人攻击 (Man-in-the-middle攻击) 窃取用户数据。

## 🛡️ HSTS 的工作原理

HSTS 通过在 HTTPS 响应头中添加 `Strict-Transport-Security` 参数来实现。当用户第一次访问一个网站时，服务器返回的响应头中包含了 `Strict-Transport-Security` 参数，浏览器会记住该网站的 HSTS 头，之后再次访问该网站时，浏览器就会自动强制使用 HTTPS 进行连接，而不再允许使用 HTTP 协议进行访问。

## 🔑 HSTS 的作用

使用 HSTS 可以提供以下的安全保障：

- 防止中间人攻击：通过强制使用 HTTPS，HSTS 可以防止攻击者在用户和服务器之间插入恶意的中间人攻击，在传输过程中窃取用户的敏感信息。
- 安全可靠：HSTS 可以确保通过 HTTPS 连接的安全性和效率，从而更好地保护用户的隐私和安全。
- 提高搜索引擎排名：使用 HTTPS 进行加密的网站可以获得更高的搜索引擎排名，并提高用户的信任度和转化率。
- 提高网站性能：使用 HTTPS 加密通信可以降低网络拥塞和提高网站的性能。

## ⚙️ 如何设置 HSTS

要在网站中启用 HSTS，您需要在 HTTPS 响应头中添加一个 HSTS headers。您可以在 Web 服务器或应用程序中实现此功能，以下是一些具体步骤：

### Apache 服务器

在 Apache 中，您可以通过编辑您的网站的 .htaccess 文件或 Apache 配置文件来添加 HSTS headers。编辑您的 .htaccess 文件，添加以下内容：

```
Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
```

或者您可以编辑上面配置文件中的 VirtualHost 来全局设置 HSTS headers ，在 VirtualHost 中添加以下配置：

```
<VirtualHost *:80>
    ServerName www.example.com
    Redirect permanent / https://www.example.com/
    Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</VirtualHost>
```

这将把所有请求重定向到 HTTPS 并将 HSTS headers 添加到响应头中。

### Nginx 服务器

在 Nginx 中，编辑 Nginx 配置文件中与您的网站相关的配置。使用 `add_header` 命令添加 HSTS headers：

```
server {
    listen 80;
    server_name www.example.com;
    return 301 https://$server_name$request_uri;
}
 
server {
    listen 443 ssl http2;
    server_name www.example.com;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload;";
    # other ssl settings
}
```

### IIS 服务器

在 IIS 中，您可以通过编辑您的网站的 web.config 文件来添加 HSTS headers。编辑 web.config 文件，添加以下内容：

```
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <add name="Strict-Transport-Security" value="max-age=63072000; includeSubDomains; preload" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```

添加 HSTS headers 之后，访问您的网站时，浏览器将会自动强制使用 HTTPS 进行连接，并且有效期 `max-age` 将在访问期间被记住，直到过期或 HSTS headers 被删除。

在实现 HSTS 的时候，最好先使用小的 `max-age` 值进行测试，以确保一切正常工作，之后再设定长期的值。另外，请注意不要在生产环境之前添加 HSTS 的预加载指令 `preload`。该指令会将网站加入到浏览器的 HSTS 预加载列表中，必须遵守极其严格的要求和审核才能添加，预加载一旦结束就无法回退。

## 🚨 HSTS 的注意事项

- HSTS 只能保证浏览器和网站之间的通信是安全的，但无法防止其他形式的攻击。
- 如果网站使用了 HSTS，在浏览器上访问该网站时，会自动强制使用 HTTPS，请确保网站已正确配置 SSL 证书，否则用户无法访问该网站。
- HSTS 不适用于不支持 HTTPS 加密通信的浏览器或旧版浏览器。

## 💡 总结

HSTS 是一种用于强制浏览器使用 HTTPS 进行安全连接的安全策略，它可以有效地保护用户的隐私和安全，并提高网站的搜索引擎排名和性能。使用 HSTS 需要注意一些细节问题，但只要正确地实现和配置，可以轻松地提供更可靠和安全的服务。