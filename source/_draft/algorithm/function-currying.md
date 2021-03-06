---
title: 函数柯里化
date: 2020-05-21
tags:
    - js
categories:
    - algorithm
cover: https://picsum.photos/id/101/1200/400
---

> [维基百科]([https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96](https://zh.wikipedia.org/wiki/柯里化))：把接受多个`参数`的`函数`变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

## **柯里化有3个常见作用：**

1. 参数复用
2. 提前确定
3. 延迟计算/运行

## **基本实现**

```js
var foo = function(a) {
    return function(b) {
      	return a * a + b * b;
    }
}
```

调用上述函数：`(foo(3))(4)`，或直接`foo(3)(4)`

<!--more-->

## 参数复用

```js
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false
```

上面的示例是一个正则的校验，正常来说直接调用check函数就可以了，但是如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数reg进行复用，这样别的地方就能够直接调用hasNumber，hasLetter等函数，让参数能够复用，调用起来也更方便。

## 提前确定

```js
function makeMap(str) {
  var map = Object.create(null);
  var list = str.split(",");
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return function (val) {
    return map[val.toLowerCase()];
  };
}

```

```js
var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );
```



这是vue源码中的一个方法，用这个方法来判断当前自定义标签跟html，这里就用了提前确认， 先将所有的标签都存入一个对象，然后每次查找只需要匹配对象里面是否存在该标签，这样就能防止多次循环遍历查找对应的标签

```js
isHTMLTag('div')
```

### 延迟执行

```js
const curryAdd = function(...rest) {
  const _args = rest
  return function cb(...rest) {
    if (rest.length === 0) {
      return _args.reduce((sum, single) => sum += single)
    } else {
      _args.push(...rest)
      return cb
    }
  }
}()                        // 为了保存添加的数，这里要返回一个闭包
curryAdd(1)
curryAdd(2)
curryAdd(3)
curryAdd(4)
curryAdd()               // 最后计算输出:10
```

## 经典面试题

```jsx
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
```