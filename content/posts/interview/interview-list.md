---
title: 面试题合集
date: "2023-07-11"
draft: true
categories:
  - interview
---

# HTML + CSS​

* 什么是 BFC ？如何触发？有何特点？如何解决 margin“塌陷”？
* CSS 如何出来溢出？说一下 overflow 不同值的区别。 ​
* 三栏布局有什么实现方式？​
* css calc 属性作用是什么？主要用于解决什么问题？ ​
* 有一个固定长宽div，怎么实现在屏幕上垂直水平居中​
* 描述一下渐进增强（progressive enhancement）和优雅降级（graceful degradation）​
* iframe 有哪些优点？哪些缺点？用它来解决过什么问题？​
* Google Chrome 如何支持大小小于 12px 的文字？​
* 描述一下 css 盒子模型​
* HTML5 的特性有哪些？​
* CSS3 的特性有哪些？​
* 如何实现水平居中？​
* 如何实现垂直居中？​
* 如何实现双圣杯布局？​
* CSS 中选择器的优先级？​
* CSS 权重如何计算？​
* HTML5 input 元素 type 属性有哪些？​
* CSS 中哪些属性可继承，哪些不可以​
* CSS 单位中 px、em 和 rem 的区别？配合 font-size 如何计算？（移动端适配方案）​
* 如何画一条 0.5px 的线​
* 隐藏一个元素有哪些方法？display: none 与 visibility: hidden 与 opacity: 0 之间的区别？​
* position 的值有哪些，分别有什么特点？​
* 什么是浮动，浮动会引起什么问题，有何解决方案？​
* line-height 和 height 的区别​
* 设置一个元素的背景颜色，背景颜色会填充哪些区域？​
* inline-block、inline 和 block 的区别；为什么 img 是 inline 还可以设置宽高​
* 什么是重绘？什么是回流？如何减少？如何让文档脱离文档流？​
* box-sizing 的作用，如何使用？​
* 如何实现清除浮动​
* css 动画如何实现​
* 如何实现在某个容器中居中的？​
* 如何改变一个 DOM 元素的字体颜色？​
* 相对布局和绝对布局，position:relative 和 obsolute。​
* 什么是弹性盒子 flex 布局？​
* 什么是 rem 布局？​
* less 和 scss 有什么区别？​
* ::before 和::after 中双冒号和单冒号的区别？​
* CSS3 新增伪类，以及伪元素？​
* 响应式布局实现方案？​
* link 标签和 import 标签的区别？​
* transition 和 animation 的区别？​
* 说一下块元素、行元素、置换元素​
* 多行元素的文本省略号如何实现？​
* Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义? 


# Javascript​
* javascript 的数据类型有哪些？​
* javascript 有哪些引用类型？​
* 如何判断 javascript 的数据类型？​
* 怎么判断两个对象相等？如何判断空对象？​
* 0.1 + 0.2 为什么不等于 0.3 ？（解释原理）​
* 强制类型转换、隐式类型转换分别是什么，列举场景说明。​
* 创建函数的几种方式？ ​
*  javascript 创建对象的几种方式？ ​
* 列举宿主对象、内置对象、原生对象并说明其定义。​
* === 和 ==的区别？​
* null，undefined 的区别​
* 什么情况下会返回 undefined 值？​
* 如何区分数组和对象？​
* 多维数组如何降维？​
* 怎么获取当前日期（年-月-日 时:分:秒）？​
* 什么是类数组（伪数组），如何将其转化为真实的数组？​
* 如何遍历对象的属性？​
* 如何给一个按钮绑定两个 onclick 事件？​
* 变量提升是什么？与函数提升的区别？​
* 什么是作用域链？如何延长？​
* 如何实现数组的随机排序？​
* dom 节点的 Attribute 和 Property 有何区别？​
* dom 结构操作怎样添加、移除、移动、复制、创建和查找节点？​
* 什么是事件冒泡，它是如何工作的？如何阻止事件冒泡？​
* 什么是事件捕获，它是如何工作的？​
* 如何让事件先冒泡后捕获？​
* JavaScript 动画和 CSS3 动画有什么区别？ ​
* dom 的事件模型​
* 事件三要素是什么？​
* 获取元素位置？​
* 如何绑定事件，如何解除事件？​
* 对事件委托的理解​
* setTimeout 和 setInterval 的区别及用法是什么？​
* 用 setTimeout 来实现 setInterval​
* document.write 和 innerHTML 的区别？​
* 元素拖动如何实现，原理是怎样？​
* 什么是重绘(repaint)？什么是回流(reflow)？如何最小化重绘和回流？​
* 延迟加载的方式有哪些？​
* 垃圾回收机制有哪些？具体怎么如何执行？​
* 什么是内存泄漏 ？​
* 数组遍历的方法有哪些，分别有什么特点，性能如何 ？​
*  ES5 和 ES6 的区别，ES6 新增了什么？​
* ES6 的继承和 ES5 的继承有什么区别？​
* var、let、const 之间的区别？暂时性死区如何理解？​
* Class、extends 是什么，有什么作用？​
* 什么是 JS 闭包​
* 说一下类的创建和继承，列举一下你所知道的继承方式​
* 如何解决异步回调地狱​
* 说一下图片的懒加载和预加载​
* mouseover 和 mouseenter 的区别​
* new 操作符做了哪些事情​
* 改变函数内部 this 指针的指向函数（bind，apply，call 的区别），内在分别是如何实现的？​
* JS 的各种位置，比如 clientHeight, scrollHeight, offsetHeight ,以及 scrollTop, offsetTop, clientTop * 的区别？​
* 异步加载 JS 的方法​
* Ajax 解决浏览器缓存问题​
* 节流和防抖​
* eval 是做什么的​
* 对象深拷贝的简单实现​
* 实现 JS 中所有对象的深度克隆（包装对象，Date 对象，正则对象）​
* 实现一个 once 函数，传入函数参数只执行一次​
* 将原生的 ajax 封装成 promise​
* JS 监听对象属性的改变​
* 如何实现一个私有变量，用 get 可以访问，不能直接访问​
* 怎么控制一次加载一张图片，加载完后再加载下一张​
* 如何实现 sleep 的效果（es5 或者 es6）​
* Function._proto_(getPrototypeOf)是什么？​
* 箭头函数中 this 指向​
* 数组常用方法有哪些​
* 数组去重有哪些方法？​
* 如何去除字符串首尾空格​
* 说说你所知道的 JS 语言特性？​
* 如何判断一个数组？​
* JS 的全排列​
* 谈谈你所理解的跨域，为什么会有这个问题？如何解决？​
* null == undefined 输出什么？null === undefined 呢？​
* 什么是按需加载​
* 简单介绍一下 symbol​
* 介绍一下 promise，及其底层如何实现​
* JS 原型链，原型链的顶端是什么？Object 的原型是什么？Object 的原型的原型是什么？​
* promise+Generator+Async 的使用​
* JS 中 string 的 startwith 和 indexof 两种方法的区别​
* JS 字符串转数字的方法​
* 平时是怎么调试 JS 的​
* 怎么获得对象上的属性​
* async 和 await 具体该怎么用？​
* 知道哪些 ES6，ES7 的语法 ​
* promise 和 await/async 的关系​
* JS 加载过程阻塞，解决方法。​
* JS 对象类型，基本对象类型以及引用对象类型的区别​
* 轮播的实现原理？假如一个页面上有两个轮播，你会怎么实现？
* 解释一下 JS 的事件循​
* Localstorage、sessionStorage、cookie 的区别​
* 解释一下 HTML5 Drag API​
* 解释一下 webworker ​
* {} 和 [] 的 valueOf 和 toString 的结果是什么？​
* 三种事件模型是什么？​
* 介绍一下 V8 隐藏类​
* AMD 和 CMD 规范的区别？说一下 CommonJS、AMD 和 CMD？​
* 谈谈 JS 的运行机制​


# Vue生态
* 说说你对 Vue 的理解，有何优缺点？​
* Vue 和 React 有什么不同？​
* 什么是虚拟 DOM？​
* 描述下 vue 的生命周期有哪些？分别做了什么事情？​
* watch 怎么深度监听对象变化​
* 删除数组用 delete 和 Vue.delete 有什么区别？​
* watch 和 computed 有什么区别？​
* v-for 没有 key 会发生什么问题？​
* 谈谈 Vue 双向绑定原理​
* v-model 是什么？有什么用呢？​
* 在 vue 项目中如何引入第三方库？有哪些具体操作方法？​
* Vue3.0 里为什么要用 Proxy API 替代 defineProperty API？​
* Vue3.0 编译做了哪些优化？​
* Vue3.0 新特性 —— Composition API 与 React.js 中 Hooks 的异同点​
* Vue3.0 是如何变得更快的？dom diff 算法有何优化？​
* vue 要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？​
* vue 在 created 和 mounted 这两个生命周期中请求数据有什么区别呢？​
* 说说你对 Proxy 的理解。​
* Vue3.0性能提升主要是体现在哪些方面？​
* vue3有哪些新的组件？​
* Vue2.0 和 Vue3.0 有什么区别？​
* Composition Api 与 Options Api 有什么不同？​
* 对Vue项目你做过哪些性能优化？​
* Vue组件通信的方式有哪些？​
* Vue常用的修饰符有哪些？​
* Vue中的$nextTick有什么作用？底层如何实现？​
* v-show和v-if有什么区别？​
* 有用过keep-alive吗？它有什么作用？​
* 如何实现一个虚拟DOM吗？​
* 为什么data属性是一个函数而不是一个对象，具体原因是什么？​
* Vue2的初始化过程你有过了解吗，做了哪些事情？​
* Vue3初始化的一个大概流程？​
* vue3响应式api如何编写？​
* 在Vue项目中你是如何做的SSR渲染？​


# 计算机网络​
* 什么是 Ajax，Ajax 都有哪些优点和缺点？​
* 请介绍一下 XMLHTTPrequest 对象及常用方法和属性​
* Ajax 的实现流程是怎样的？​
* Ajax 接收到的数据类型有哪些，数据如何处理？​
* 封装好的 Ajax 里的常见参数及其代表的含义 ​
* Ajax 注意事项及适用和不适用场景​
* 常见的 HTTP 状态码以及代表的意义​
* 301 302 303 状态码的区别？​
* 什么是同源策略​
* 为什么会有跨域的问题出现，如何解决跨域问题​
* Get 和 Post 的区别以及使用场景​
* 解释 jsonp 的原理​
* HTTP 与 HTTPS 的区别 ​
* 简述 web 前端 Cookie 机制，并结合该机制说明会话保持原理​
* 你知道的 HTTP 请求方式有几种​
* 谈谈你理解的 RESTFUL  规范​
* 解释一下三次握手是什么，具体流程。变为二次握手会发生什么问题？​
* TCP 和 UDP  分别是什么？​
* WebSocket 的实现和应用。​
* 一个图片 url 访问后直接下载怎样实现？       ​
* 说一下 http2.0 ​
* 补充 400 和 401、403 状态码       ​
* fetch发送2次请求的原因       ​
* 对 HTML 语义化标签的理解       ​
* Cookie 和 session 的区别    ​
* 强缓存 和 协商缓存  区别？什么时候用哪个 ？本质是？​
* cache-control 的值有哪些       ​
* 谈谈 304 状态码      ​
* 什么是 CDN，以及如何优化？​
* DNS是什么​
* 什么是四层、七层网络模型？​
​

# 网络安全
* 什么是 xss 攻击及如何防范    ​
* 什么是 ddox 攻击及如何防范？​
* 什么是 csrf 攻击及如何防范？​
​
# 前端工程化​
* 如何理解前端模块化、前端组件化，二者有何区别？​
* 如何理解前后端分离？​
* webpack​
* 有自己配置过 webpack 吗？如果需求是多页面与单页面并行，需要如何配置？​
* Webpack 的优点是什么？​
* Webpack 的构建流程是什么?从读取配置到输出文件这个过程尽量说全​
* 说一下 Webpack 的热更新原理​
* 有哪些常见的 Loader？他们是解决什么问题的？​
* Loader 和 Plugin 的不同？​
* 如何利用 Webpack 来优化前端性能​
* 是否写过 Loader 和 Plugin？描述一下编写 loader 或 plugin 的思路？​
* 使用 Webpack 开发时，你用过哪些可以提高效率的插件？​
* 什么是长缓存？在 Webpack 中如何做到长缓存优化？​
* 如何提高 Webpack 的构建速度？​
* 怎么实现 Webpack 的按需加载？什么是神奇注释？​
* Babel 的原理是什么? ​
* 如何写一个 babel 插件？​
* rebase 与 merge 的区别？​
* git reset、git revert 和 git checkout 有什么区别 ？​
* webpack 和 vite 区别（模块化与流的区别）​
* webpack文件指纹策略：hash chunkhash contenthash​
​
# 性能优化​
* 做过哪些前端性能优化相关的事情？​
* 要加载大量图片，你有哪些方法优化方案？​
* 列表无限滚动，数据越来越多，页面卡顿，如何解决？ ​
* for（let i=0;i<1000000;i++）{console.log(i)} 如何优化？​
* 谈谈你是如何判断网站的性能的？​
* 解释一下，性能指标 FP FCP FMP，如何查看 。​
* 谈谈浏览器的渲染过程，DOM 树和渲染树的区别。​
* 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么。​
* 什么是SPA单页面应用，首屏加载你是如何优化的

# 移动 web 开发​
* 知道 PWA 吗​
* 移动布局方案​
* Rem 布局及其优缺点​
* 讲讲 viewport 和移动端布局       ​
* 移动端适配 1px 的问题​
* 移动端性能优化相关经验​
* 移动端兼容性​
* 小程序​
* 2X 图 3X 图适配​
* 图片在安卓上，有些设备模糊问题​
* 固定定位布局键盘挡住输入框内容​
* click 的 300ms 延迟问题和点击穿透问题​
* 防止手机中页面放大和缩小​
* px、em、rem、%、vw、vh、vm 这些单位的区别​
* 移动端适配- dpr 浅析​
* 移动端扩展点击区域​
* 上下拉动滚动条时卡顿、慢​
* 长时间按住页面出现闪退​
* webkit mask 兼容处理​
* transiton 闪屏​
​
# 研发流程​
* 技术设计​
* 设计文档需要涵盖哪些部分？​
* 代码规范​
* 谈谈 eslint​
* 谈谈 commit message 规范​
* 研发协同（Git）​
* git 的基本使用方法​
* git 工作流程​
* 需要合并别人代码进来 ​
* 需要切换分支​
* 我们如何使用 git 和开源的码云或 github 上面的远端仓库的项目进行工作呢​
* git、github、gitlab 三者之间的联系以及区别​
* github 和码云的区别​
* 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的​
* 如果本次提交误操作，如何撤销​
* git 修改提交的历史信息​
* 如何删除 github 和 gitlab 上的文件夹​
* 如何查看分支提交的历史记录？查看某个文件的历史记录呢​
* git 跟 svn 有什么区别​
* 我们在本地工程常会修改一些配置文件，这些文件不需要被提交，而我们又不想每次执行 git status 时都让这些文件显示出来，我们该如何操作？​
* git fetch 和 git merge 和 git pull 的区别。​
* 如何把本地仓库的内容推向一个空的远程仓库​
* 测试​
* 单元测试如何做？​
* 如何解决联调依赖问题？​
* 提测阶段bug 和 线上bug 解决过程有和区别？​
* 发布上线​
* 流水线如何搭建​
* 对 Docker 理解​
* pm2 与 docker 有何区别？​
​
# Nodejs​

* 对 Node.js 有没有了解，它有什么特点，适合做什么业务​
* Node 和 前端项目怎么解决跨域的​
* Node 的优点是什么？缺点是什么​
* commonJS 中的 require/exports 和 ES6 中import/export 的区别是什么​
* 简述同步和异步的区别，如何避免回调地狱，Node 的异步问题是如何解决的
* dependencies 和 devDependencies 两者区别​
* 描述一下从接到 url 开始，到逻辑处理，到DB查询，到返回结果，整个过程是怎么处理的？​
* 谈谈你对 Koa 和 Express 的理解，二者的区别是？​
* 谈谈对 egg 和 nest.js 的理解，二者的区别是？​

