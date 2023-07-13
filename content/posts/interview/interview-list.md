---
title: 面试题合集
date: "2023-07-11"
draft: true
categories:
  - interview
---

# HTML + CSS​
什么是 BFC ？如何触发？有何特点？如何解决 margin“塌陷”？
CSS 如何出来溢出？说一下 overflow 不同值的区别。 ​
三栏布局有什么实现方式？​
css calc 属性作用是什么？主要用于解决什么问题？ ​
有一个固定长宽div，怎么实现在屏幕上垂直水平居中​
描述一下渐进增强（progressive enhancement）和优雅降级（graceful degradation）​
iframe 有哪些优点？哪些缺点？用它来解决过什么问题？​
Google Chrome 如何支持大小小于 12px 的文字？​
描述一下 css 盒子模型​
HTML5 的特性有哪些？​
CSS3 的特性有哪些？​
如何实现水平居中？​
如何实现垂直居中？​
如何实现双圣杯布局？​
CSS 中选择器的优先级？​
CSS 权重如何计算？​
HTML5 input 元素 type 属性有哪些？​
CSS 中哪些属性可继承，哪些不可以​
CSS 单位中 px、em 和 rem 的区别？配合 font-size 如何计算？（移动端适配方案）​
如何画一条 0.5px 的线​
隐藏一个元素有哪些方法？display: none 与 visibility: hidden 与 opacity: 0 之间的区别？​
position 的值有哪些，分别有什么特点？​
什么是浮动，浮动会引起什么问题，有何解决方案？​
line-height 和 height 的区别​
设置一个元素的背景颜色，背景颜色会填充哪些区域？​
inline-block、inline 和 block 的区别；为什么 img 是 inline 还可以设置宽高​
什么是重绘？什么是回流？如何减少？如何让文档脱离文档流？​
box-sizing 的作用，如何使用？​
如何实现清除浮动​
css 动画如何实现​
如何实现在某个容器中居中的？​
如何改变一个 DOM 元素的字体颜色？​
相对布局和绝对布局，position:relative 和 obsolute。​
什么是弹性盒子 flex 布局？​
什么是 rem 布局？​
less 和 scss 有什么区别？​
::before 和::after 中双冒号和单冒号的区别？​
CSS3 新增伪类，以及伪元素？​
响应式布局实现方案？​
link 标签和 import 标签的区别？​
transition 和 animation 的区别？​
说一下块元素、行元素、置换元素​
多行元素的文本省略号如何实现？​
Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义? 


# Javascript​
javascript 的数据类型有哪些？​
javascript 有哪些引用类型？​
如何判断 javascript 的数据类型？​
怎么判断两个对象相等？如何判断空对象？​
0.1 + 0.2 为什么不等于 0.3 ？（解释原理）​
强制类型转换、隐式类型转换分别是什么，列举场景说明。​
创建函数的几种方式？ ​
 javascript 创建对象的几种方式？ ​
列举宿主对象、内置对象、原生对象并说明其定义。​
=== 和 ==的区别？​
null，undefined 的区别​
什么情况下会返回 undefined 值？​
如何区分数组和对象？​
多维数组如何降维？​
怎么获取当前日期（年-月-日 时:分:秒）？​
什么是类数组（伪数组），如何将其转化为真实的数组？​
如何遍历对象的属性？​
如何给一个按钮绑定两个 onclick 事件？​
变量提升是什么？与函数提升的区别？​
什么是作用域链？如何延长？​
如何实现数组的随机排序？​
dom 节点的 Attribute 和 Property 有何区别？​
dom 结构操作怎样添加、移除、移动、复制、创建和查找节点？​
什么是事件冒泡，它是如何工作的？如何阻止事件冒泡？​
什么是事件捕获，它是如何工作的？​
如何让事件先冒泡后捕获？​
JavaScript 动画和 CSS3 动画有什么区别？ ​
dom 的事件模型​
事件三要素是什么？​
获取元素位置？​
如何绑定事件，如何解除事件？​
对事件委托的理解​
setTimeout 和 setInterval 的区别及用法是什么？​
用 setTimeout 来实现 setInterval​
document.write 和 innerHTML 的区别？​
元素拖动如何实现，原理是怎样？​
什么是重绘(repaint)？什么是回流(reflow)？如何最小化重绘和回流？​
延迟加载的方式有哪些？​
垃圾回收机制有哪些？具体怎么如何执行？​
什么是内存泄漏 ？​
数组遍历的方法有哪些，分别有什么特点，性能如何 ？​
 ES5 和 ES6 的区别，ES6 新增了什么？​
ES6 的继承和 ES5 的继承有什么区别？​
var、let、const 之间的区别？暂时性死区如何理解？​
Class、extends 是什么，有什么作用？​
什么是 JS 闭包​
说一下类的创建和继承，列举一下你所知道的继承方式​
如何解决异步回调地狱​
说一下图片的懒加载和预加载​
mouseover 和 mouseenter 的区别​
new 操作符做了哪些事情​
改变函数内部 this 指针的指向函数（bind，apply，call 的区别），内在分别是如何实现的？​
JS 的各种位置，比如 clientHeight, scrollHeight, offsetHeight ,以及 scrollTop, offsetTop, clientTop 的区别？​
异步加载 JS 的方法​
Ajax 解决浏览器缓存问题​
节流和防抖​
eval 是做什么的​
对象深拷贝的简单实现​
实现 JS 中所有对象的深度克隆（包装对象，Date 对象，正则对象）​
实现一个 once 函数，传入函数参数只执行一次​
将原生的 ajax 封装成 promise​
JS 监听对象属性的改变​
如何实现一个私有变量，用 get 可以访问，不能直接访问​
怎么控制一次加载一张图片，加载完后再加载下一张​
如何实现 sleep 的效果（es5 或者 es6）​
Function._proto_(getPrototypeOf)是什么？​
箭头函数中 this 指向​
数组常用方法有哪些​
数组去重有哪些方法？​
如何去除字符串首尾空格​
说说你所知道的 JS 语言特性？​
如何判断一个数组？​
JS 的全排列​
谈谈你所理解的跨域，为什么会有这个问题？如何解决？​
null == undefined 输出什么？null === undefined 呢？​
什么是按需加载​
简单介绍一下 symbol​
介绍一下 promise，及其底层如何实现​
JS 原型链，原型链的顶端是什么？Object 的原型是什么？Object 的原型的原型是什么？​
promise+Generator+Async 的使用​
JS 中 string 的 startwith 和 indexof 两种方法的区别​
JS 字符串转数字的方法​
平时是怎么调试 JS 的​
怎么获得对象上的属性​
async 和 await 具体该怎么用？​
知道哪些 ES6，ES7 的语法 ​
promise 和 await/async 的关系​
JS 加载过程阻塞，解决方法。​
JS 对象类型，基本对象类型以及引用对象类型的区别​
轮播的实现原理？假如一个页面上有两个轮播，你会怎么实现？