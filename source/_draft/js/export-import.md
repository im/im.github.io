---
title: export和import
tags:
	- js
categories:
	- front end
thumbnail: https://i.picsum.photos/id/66/1200/700.jpg
---



现在ES6自带了模块化， JS支持module， 我们可以直接作用**import**和**export**在浏览器中导入和导出各个模块了， 一个js文件代表一个js模块；

现代浏览器对模块(module)支持程度不同， 目前都是使用babel 转换， 如果想在浏览器里直接使用 import 或者 export 需要加上 `type="module"`

```html
<script src="index.js" type="module"></script>
```


## ES6的模块化的基本规则或特点
1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；

2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；

3：模块内部的变量或者函数可以通过export导出；

4：一个模块可以导入别的模块