---
title: webgl概述
tags:
	- js
categories:
	- front end
thumbnail: https://i.picsum.photos/id/53/1200/700.jpg
---



WebGL，是一项用来在网页上绘制和渲染复杂三维图形（3D图形），并允许用户与之交互的技术。随着个人计算机和浏览器的性能越来越强，我们能够在Web上创建越来越精美、越来越复杂的3D图形。[http://webglsamples.org/](http://webglsamples.org/) 这个网址展示了Google发布的一些示例WebGL程序，在惊叹美轮美奂的效果的同时，我们发现发布和运行也变得非常简单。（就像使用普通的网页一样）

<!--more-->

WebGL是一种免费的、开放的、跨平台的技术；WebGL派生于OpenGL ES，后者是专用于嵌入式计算机、智能手机、家用游戏机等设备；WebGL基于OpenGL ES 2.0。下图显示了OpenGL、OpenGL ES 和 WebGL的关系：

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/25/222059338585675.png)



从2.0版本开始，OpenGL支持了一项非常重要的特性，即**可编程着色器方法**。该特性被OpenGL ES 2.0继承，并成为了WebGL 1.0标准的核心部分。

着色器，使用一种类似于C的编程语言实现了精美的视觉效果。编写着色器的语言又称为**着色器语言**。WebGL基于OpenGL ES 2.0，使用GLSL ES语言编写着色器。

虽然WebGL强大到令人惊叹，但使用这项技术进行开发却异常简单：只需要一个文本编辑器（Notepad或TextEdit）和一个浏览器（Chrome）即可；并且不需要去搭建开发环境，因为WebGL是内嵌在浏览器中的。

下图显示了WebGL程序的结构：



![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/25/222120593439118.png)



由于GLSL ES通常是以字符串的形式在JavaScript中编写的，所以虽然WebGL网页更加复杂，但它仍然保持着与传统的动态网页相同的结构：只用到HTML文件和JavaScript文件。
