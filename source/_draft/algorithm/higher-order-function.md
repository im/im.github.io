---
title: 高阶函数
date: 2020-05-21
tags:
    - js
categories:
    - algorithm
thumbnail: https://picsum.photos/id/104/1200/400
cover: https://picsum.photos/id/104/1200/400
---

**JavaScript的函数可以指向某个变量，变量也可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为`高阶函数`。**

## 简单的高阶函数

```js
function add(x, y, f) {
    return f(x) + f(y);
}
//当调用add(-5, 6, Math.abs)时，参数x，y和f分别接收-5，6和函数Math.abs，根据函数定义，可以推导计算过程为：
//x = -5;
//y = 6;
//f = Math.abs;
//f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11;
//return 11;

//用代码验证一下：
add(-5, 6, Math.abs); // 11
```

<!--more-->

## 常用的高阶函数

### map

```js
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//map()传入的参数是pow，即函数对象本身。

//不需要map()，写一个循环，也可以计算出结果：

var f = function (x) {
    return x * x;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i=0; i<arr.length; i++) {
    result.push(f(arr[i]));
}
//的确可以，但是，从上面的循环代码，我们无法一眼看明白“把f(x)作用在Array的每一个元素并把结果生成一个新的Array”。
```

所以，map() 作为高阶函数，事实上它把运算规则抽象了，因此，我们不但可以计算简单的 f(x)=x2，还可以计算任意复杂的函数，比如，把 Array 的所有数字转为字符串：

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
//只需要一行代码。
```

### reduce

再看 `reduce` 的用法。Array 的 `reduce()` 把一个函数作用在这个 Array 的 [x1, x2, x3...] 上，这个函数必须接收两个参数，reduce() 把**结果继续和序列的下一个元素**做累积计算，其效果就是：

```js
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
//比方说对一个Array求和，就可以用reduce实现：

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25
```

### filter

filter 也是一个常用的操作，它用于把 Array 的某些元素过滤掉，然后返回剩下的元素。和 map() 类似，Array 的 filter() 也接收一个函数。和 map() 不同的是，filter() 把传入的函数依次作用于每个元素，然后根据返回值是 true 还是 false 决定保留还是丢弃该元素。

```js
//例如，在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

//把一个Array中的空字符串删掉，可以这么写：
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
arr; // ['A', 'B', 'C']
```

回调函数：filter() 接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示 Array 的某个元素。回调函数还可以接收另外两个参数，表示元素的位置和数组本身：

```js
var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

//利用filter，可以巧妙地去除Array的重复元素：

'use strict';
var r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
alert(r.toString());
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
```

### sort

因为 Array 的 **sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面**，因为字符'1'比字符'2'的ASCII码小。如果不知道 sort() 方法的默认排序规则，直接对数字排序，绝对栽进坑里！

幸运的是，sort() 方法也是一个高阶函数，它还可以接收一个比较函数来实现自定义的排序。



```js
//要按数字大小排序，我们可以这么写：
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]

//如果要倒序排序，我们可以把大的数放前面：
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]

//默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，排序应该忽略大小写，按照字母序排序。
//要实现这个算法，不必对现有代码大加改动，只要我们能定义出忽略大小写的比较算法就可以：

var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']

//忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写（或者都变成小写），再比较。

//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象 
```

