---
title:  npm 代理设置
tags:
	- npm
categories:
	- front end
thumbnail: https://i.picsum.photos/id/59/1200/700.jpg
---

## **临时使用**

```bash
npm —registry https://registry.npm.taobao.org install express 
```

<!--more-->

## **持久使用**

```bash
npm config set registry https://registry.npm.taobao.org 
```

配置后可通过下面方式来验证是否成功 

```bash
npm config get registry 
```

或 

```bash
npm info express 
```

## **通过cnpm使用**


```bash
npm install -g cnpm —registry=https://registry.npm.taobao.org 
```

## **设置代理**

```bash
npm config set proxy=http://127.0.0.1:8087 
npm config set registry=http://registry.npmjs.org 
```

## **关于https**

```bash
npm config set https-proxy http://server:port 
```

## **代理用户名密码**

```bash
npm config set proxy http://username:password@server:port 
npm confit set https-proxy http://username:password@server:port 
```

## **取消代理**

```bash
npm config delete proxy 
npm config delete https-proxy 
```
