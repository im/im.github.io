---
title: webhook 简介
tags:
	- webhook
categories:
	- front end
thumbnail: https://i.picsum.photos/id/52/1200/700.jpg
---

Webhook是一个API概念，并且变得越来越流行。我们能用事件描述的事物越多，webhook的作用范围也就越大。Webhook作为一个轻量的事件处理应用，正变得越来越有用。

准确的说`webhook是一种 web 回调或者http的push API`，是向APP或者其他应用提供实时信息的一种方式。Webhook在数据产生时立即发送数据，也就是你能实时收到数据。这一种不同于典型的API，需要用了实时性需要足够快的轮询。这无论是对生产还是对消费者都是高效的，唯一的缺点是初始建立困难。

Webhook有时也被称为反向API，因为他提供了API规则，你需要设计要使用的API。Webhook将向你的应用发起http请求，典型的是post请求，应用程序由请求驱动。

