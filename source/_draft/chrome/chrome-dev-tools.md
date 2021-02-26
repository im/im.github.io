---
title: Chrome DevTools中的这些骚操作，你都知道吗？
tags:
    - chrome
    - tools
categories:
    - front end
thumbnail: https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/30/Chrome.jpg
---



## 引言 

作为开发人员，平时用的最多的就是 `Chrome devtools` 了，但是可能很多同学都像我一样平时用的最多也就只是 `Console` 和 `Elements` 面板了。

我整理了一些我平时用的比较多的一些调试小技巧，相信对提高你的工作效率能起到不小的帮助！

<!-- more -->

## 命令（ `Command` ） 菜单 

“命令”菜单是最最常用的，本文也会多次用到，所以这里先说一下打开方式:

按 `Cmd + Shift + P` （如果使用 `Windows` ，则按 `Ctrl + Shift + P` ）打开“命令”菜单。 

<img src="https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/30/image-20200530093057787.png" style="zoom:50%;" />

## 截图 `DOM` 元素 

当你只想对一个特别的 `DOM` 节点进行截图时，你可能需要使用其他工具弄半天，但现在你直接选中那个节点，打开 命令（ `Command` ） 菜单并且使用 `节点截图` 就可以了。 

<img src="https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/30/image-20200530093353360.png" style="zoom:50%;" />

截取特定节点对应上图命令是 `Screenshot Capture node screenshot` 。

<img src="https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/30/image-20200530094444826.png" style="zoom: 33%;" />

截取特定 `DOM` 元素示例：

<img src="https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/30/github.com_im%20%281%29.png" style="zoom:50%;" />

不只是这样，你同样可以用这种方式 实现 `全屏截图` ：通过 `Screenshot Capture full size screenshot` 命令。

> 请注意，这里说的是全屏，并不只是页面可视区域，而是包含滚动条在内的所有页面内容。  

## 在控制台中使用上次操作的值 

我是最近才发现这个技巧。使用 `$_` 可以引用在控制台执行的前一步操作的返回值。如果您正在控制台调试一些 `JavaScript` 代码，并且需要引用先前的返回值，那么这可能非常方便。 

<img src="https://i.loli.net/2020/05/30/v25xdCgNBFOypWj.png" style="zoom:50%;" />

## 编辑页面上的任何文本

在控制台输入 `document.body.contentEditable="true"` 或者 `document.designMode = 'on'` 就可以实现对网页的编辑了。 
git

其实这个还是比较实用的，比如你要测试一个 `DOM` 节点文字太长时，样式是否会混乱，或者要去直接修改页面元素去满足一些业务需求时。（我之前是在 `Elements` 面板一个一个去修改的，，，）



## 网络面板（ `Network` ）的幻灯片模式 

启动 `Network` 面板下的 `Capture screenshots` 就可以在页面加载时捕捉屏幕截图。有点 `幻灯片` 的感觉。 

![](https://i.loli.net/2020/05/30/SmH5KLdraq41GeD.png)

单击每一帧截图，显示的就是对应时刻发生的网络请求。这种可视化的展现形式会让你更加清楚每一时刻发生的网络请求情况。

![](https://i.loli.net/2020/05/30/jeQBJquRFTOZmIN.png)

## 递增/递减 CSS 属性值 

作为前端开发，平时少不了通过 `Elements` 面板去查找元素以及它的 `css` 样式。有时调整像素 `px` 会比较麻烦一点，这时就可以使用快捷键去帮你完成：



```jsx
* 增量0.1
  * Mac： Option +向上和Option +向下
  * Windows： Alt +向上和Alt +向下
* 增量1
  * Mac：向上+向下
  * Windows：向上+向下
* 增量10
  * Mac：⇧+向上和⇧+向下
  * Windows：⇧+向上和⇧+向下
* 递增100
  * Mac： ⌘+向上和⌘+向下
  * Windows： Ctrl +向上和Ctrl +向下
复制代码
```



## 在低端设备和弱网情况下进行测试 

我们平时开发一般都是在办公室（wifi 网速加快），而且设备一般都是市面上较新的。但是产品的研发和推广，一定要考虑低设备人群和弱网的情况。

在 `Chrome DevTools` 中可以轻松调节 `CPU` 功能和 `网络速度` 。这样，我们就可以测试 Web 应用程序性能并进行相应优化。



<img src="https://i.loli.net/2020/05/30/X3ZwBeAPbHxvs9O.png" style="zoom:50%;" />





具体打开方式是：在 `Chrome DevTools` 中通过 `CMD/Ctrl + Shift + p` 打开命令菜单。然后输入 `Show Performance` 打开性能面板。 

![](https://i.loli.net/2020/05/30/uWipbkgdGYjEeBF.png)

## copying & saving 

在调试的过程中，我们总会有对 `Dev Tools` 里面的数据进行 `复制` 或者 `保存` 的操作，其实他们也是有一些小技巧的！

### copy()

可以通过全局的方法 `copy()` 在 `console` 里 `copy` 任何你能拿到的资源 

### Store as global variable

如果在 `console` 中打印了一堆数据，想对这堆数据做额外的操作，可以将它存储为一个全局变量。只需要右击它，并选择 `Store as global variable`选项。 

第一次使用的话，它会创建一个名为 `temp1` 的变量，第二次创建 `temp2` ，第三次 ... 。通过使用这些变量来操作对应的数据，不用再担心影响到他们原来的值。

## 切换主题

![](https://i.loli.net/2020/05/30/YqpygdKejrGWn2Q.png)

## 自定义代码片段 Snippets 

在平常开发过程中，我们经常有些 `JavaScript` 的代码想在 `Chrome Devtools` 中调试，直接在 `console` 下 写比较麻烦，或者我们经常有些代码片段(防抖、节流、获取地址栏参数等)想保存起来，每次打开 `Devtools` 都能获取到这些代码片段，而不用再去 `google` ，正好 `Chrome Devtool` 就提供了这种功能。

如图所示，在 `Sources` 这个 `tab` 栏下，有个 `Snippets` 标签，在里面可以添加一些常用的代码片段。 

<img src="https://i.loli.net/2020/05/30/SpNFocgR9MKPuCE.png" style="zoom:50%;" />

## 将图片复制为数据 URI 

* 选择 `Network` 面板

* 在资源面板中选择 `Img`

* 右键单击将其复制为数据 `URI` （已编码为 `base 64` ）

    ![](https://i.loli.net/2020/05/30/13IUEzrtsKvHCWe.png)

## keys/values 

这个是 `Devtools` 提供的快速查看一个对象的 `key`、`values` 的 `API` 。用起来也很简单： 

![](https://i.loli.net/2020/05/30/JrLUqwQFlv2DV6T.png)

> 你可能会说 `Object.keys()` 和 `Object.values()` 也可以实现啊，但这个不是更简单点吗 🤠  

## table 

`Devtools` 提供的用于将对象数组记录为表格的 `API`: 

![](https://i.loli.net/2020/05/30/E4FJcXASDtfRkZw.png)

## console

```js
console.log("打印字符串"); // 在控制台打印自定义字符串
console.error("我是个错误"); // 在控制台打印自定义错误信息
console.info("我是个信息"); // 在控制台打印自定义信息
console.warn("我是个警告"); // 在控制台打印自定义警告信息
console.debug("我是个调试"); // 在控制台打印自定义调试信息
console.clear(); // 清空控制台（这个下方截图中没有）
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527215730244.png)


## 格式化输出

```js
console.log("%s年", 2016); // %s表示字符串
console.log("%d年%d月", 2016, 11); // %d表示整数
console.log("%f", 3.1415926); // %f小数
console.log("%o",console); // %o表示对象
console.log("%c自定义样式", "font-size: 30px;color: #00f");
console.log("%c我是%c自定义样式", "font-size: 20px; color: green", "font-size: 10px; color: red");
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527215806044.png)

## DOM输出

```jsx
var ul = document.getElementsByTagName("ul");
console.dirxml(ul);
```

## 对象输出

```jsx
var o = {
    name: "Lily",
    age: 18
};
console.dir(o);
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527215900409.png)

## 成组输出

```jsx
//建立一个参数组
console.group("start"); // 引号里是组名，自己起
console.log("sub1");
console.log("sub1");
console.log("sub1");
console.groupEnd("end");
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527172705493.png)

## 函数计数和跟踪

```jsx
function fib(n){
    //输出前n个斐波那契数列值
    if (n == 0) return;
    console.count("调用次数");
    //放在函数里，每当这句代码运行输出所在函数执行次数
    console.trace();
    //显示函数调用轨迹(访问调用栈）
    var a = arguments[1] || 1;
    var b = arguments[2] || 1;
    console.log("fib=" + a);
    [a, b] = [b, a + b];
    fib(--n, a, b);
}
fib(6);
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527172625875.png)

## 计时

```jsx
console.time(); //计时开始
fib(100); // 用上述函数计算100个斐波那契数
console.timeEnd(); // 计时结束并输出时长
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527172523846.png)

## 断言

> js中断言语句，当第一个表达式或参数为true时候什么也不发生，为false时报错，虽然会报错但是不会终止程序执行  

```jsx
console.assert(true, '我错了');
console.assert(false, '我真的错了');
```

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/image-20200527172338831.png)