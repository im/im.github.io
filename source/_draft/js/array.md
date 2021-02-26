---
title: Array 方法
tags:
    - js
categories:
    - front end
thumbnail: https://i.picsum.photos/id/64/1200/700.jpg
---

数组常用方法

<!--more-->

#### every() [ˈevri]

回调函数的每一次返回都为 true 值，返回 true ，否则返回 false。

##### 语法
```js
arr.every(callback)
```

##### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
      用于测试的当前值。
    - index可选  
      用于测试的当前值的索引。
    - array可选  
      调用 every 的当前数组。

```js
function isBelowThreshold(currentValue, index, array) {
    console.log('array: ', array); // [ 1, 30, 39, 29, 10, 13 ]
    console.log('index: ', index); // 0,1,2,3
    console.log('currentValue: ', currentValue); // 1, 30 , 39.....
    return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

var array1 = [1, 30, 39, 29, 50, 13];
console.log(array1.every(isBelowThreshold)); // false 这里面有个 50
```



#### some()[səm; sʌm]

回调函数的第一次返回为 true 值，直接返回 true ，所有的元素都 为false 才会返回false

##### 语法
```js
arr.some(callback)
```

##### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
      用于测试的当前值。
    - index可选  
      用于测试的当前值的索引。
    - array可选  
      调用 every 的当前数组。

```js
function isBelowThreshold(currentValue, index, array) {
    return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.some(isBelowThreshold)); // true

var array1 = [1, 30, 39, 40, 10, 13];
console.log(array1.some(isBelowThreshold)); // 就算里面有一个值大于40 也会返回true
```



#### Array 对象方法



| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [concat()](https://www.w3school.com.cn/jsref/jsref_concat_array.asp) | 连接两个或更多的数组，并返回结果。                           |
| [join()](https://www.w3school.com.cn/jsref/jsref_join.asp)   | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 |
| [pop()](https://www.w3school.com.cn/jsref/jsref_pop.asp)     | 删除并返回数组的最后一个元素                                 |
| [push()](https://www.w3school.com.cn/jsref/jsref_push.asp)   | 向数组的末尾添加一个或更多元素，并返回新的长度。             |
| [reverse()](https://www.w3school.com.cn/jsref/jsref_reverse.asp) | 颠倒数组中元素的顺序。                                       |
| [shift()](https://www.w3school.com.cn/jsref/jsref_shift.asp) | 删除并返回数组的第一个元素                                   |
| [slice()](https://www.w3school.com.cn/jsref/jsref_slice_array.asp) | 从某个已有的数组返回选定的元素                               |
| [sort()](https://www.w3school.com.cn/jsref/jsref_sort.asp)   | 对数组的元素进行排序                                         |
| [splice()](https://www.w3school.com.cn/jsref/jsref_splice.asp) | 删除元素，并向数组添加新元素。                               |
| [toSource()](https://www.w3school.com.cn/jsref/jsref_tosource_array.asp) | 返回该对象的源代码。                                         |
| [toString()](https://www.w3school.com.cn/jsref/jsref_toString_array.asp) | 把数组转换为字符串，并返回结果。                             |
| [toLocaleString()](https://www.w3school.com.cn/jsref/jsref_toLocaleString_array.asp) | 把数组转换为本地数组，并返回结果。                           |
| [unshift()](https://www.w3school.com.cn/jsref/jsref_unshift.asp) | 向数组的开头添加一个或更多元素，并返回新的长度。             |
| [valueOf()](https://www.w3school.com.cn/jsref/jsref_valueof_array.asp) | 返回数组对象的原始值                                         |