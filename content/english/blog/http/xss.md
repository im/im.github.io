---
title: xss攻击
date: "2023-11-30"
categories: []
tags: [] 
author: "Cotan"
---


#### 简述
跨站脚本（Cross-site scripting，简称为：CSS, 但这会与层叠样式表`（Cascading Style Sheets，CSS）`的缩写混淆。因此，跨站脚本攻击缩写为XSS）是一种网站应用程序的安全漏洞攻击。
XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是 `JavaScript`，但实际上也可以包括`Java`、 `VBScript`、 `LiveScript`、`ActiveX`、 `Flash` 或者甚至是普通的HTML。攻击成功后，攻击者可能得到包括但不限于更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容。


#### XSS类型

{{< tabs >}}

{{< tab "反射型XSS" >}}

反射型XSS只是简单的把用户输入的数据从服务器反射给用户浏览器，要利用这个漏洞，攻击者必须以某种方式诱导用户访问一个精心设计的URL（恶意链接），才能实施攻击。
举例来说，当一个网站的代码中包含类似下面的语句:

```php
<?php echo "<p>hello,$_GET['user']</p>"; ?>
```

如果未做防范XSS，用户名设为<script>alert("Tz")</script>,则会执行预设好的JavaScript代码。

##### 漏洞成因

当用户的输入或者一些用户可控参数未经处理地输出到页面上，就容易产生XSS漏洞。主要场景有以下几种：


将不可信数据插入到HTML标签之间时；`// 例如div, p, td；`


将不可信数据插入到HTML属性里时；`// 例如：<div width=$INPUT></div>`


将不可信数据插入到SCRIPT里时；`// 例如：<script>var message = ” $INPUT “;</script>`


还有插入到Style属性里的情况，同样具有一定的危害性；`// 例如<span style=” property : $INPUT ”></span>`


将不可信数据插入到HTML URL里时，`// 例如：<a href=”[http://www.abcd.com?param=](http://www.ccc.com/?param=) $INPUT ”></a>`


使用富文本时，没有使用XSS规则引擎进行编码过滤。


对于以上的几个场景，若服务端或者前端没有做好防范措施，就会出现漏洞隐患

##### 攻击流程

反射型XSS通常出现在搜索等功能中，需要被攻击者点击对应的链接才能触发，且受到XSS Auditor(chrome内置的XSS保护)、NoScript等防御手段的影响较大，所以它的危害性较存储型要小。

![](/images/posts/xss1.png)

{{< image src="images/image-placeholder.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

{{< /tab >}}

{{< /tabs >}}


