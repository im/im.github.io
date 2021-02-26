---
title: Object.defineProperty
tags:
	- js
categories:
	- front end
thumbnail: https://i.picsum.photos/id/67/1200/700.jpg
---


[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

> `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

<!--more-->

#### 用法

```js
Object.defineProperty(obj, prop, descriptor)
```

```js
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// 在严格模式下引发错误

console.log(object1.property1);
// 输出 42
```

##### 参数

* `obj`  
要在其上定义属性的对象。

* `prop`  

要定义或修改的属性的名称。

* `descriptor`  
将被定义或修改的属性描述符。

##### 返回

 被传递给函数的对象。




 #### 描述

 该方法允许精确添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来`（for...in 或 Object.keys 方法）`， 这些属性的值可以被改变，也可以被删除。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用` Object.defineProperty()` 添加的属性值是不可修改的。




 #### 属性描述符

 对象里目前存在的属性描述符有两种主要形式：`数据描述符`和`存取描述符`。`数据描述符`是一个具有值的属性，该值可能是可写的，也可能不是可写的。`存取描述符`是由getter-setter函数对描述的属性。描述符必须是这两种形式之一；不能同时是两者。



 #### 数据描述符和存取描述符均具有以下可选键值

* configurable  
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。`默认为 false`
```js
// configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。
var o = {};
Object.defineProperty(o, "a", { get : function(){return 1;}, 
                                configurable : false } );

// 报错  不能修改 configurable
Object.defineProperty(o, "a", {configurable : true}); 
// 报错  不能修改 enumerable
Object.defineProperty(o, "a", {enumerable : true}); 
// 报错 不能初始化 set
Object.defineProperty(o, "a", {set : function(){}}); 
// 报错 不能初始化 get
Object.defineProperty(o, "a", {get : function(){return 1;}});
// 报错 不能修改 value
Object.defineProperty(o, "a", {value : 12});

console.log(o.a); // 1
delete o.a; // 无法删除
console.log(o.a); // 1
```
* enumerable  
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。`默认为 false`
```js
// enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable:true });
Object.defineProperty(o, "b", { value : 2, enumerable:false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable 默认为false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

for (var i in o) {    
  console.log(i);  
}
// 打印 'a' 和 'd' (in undefined order)

Object.keys(o); // ["a", "d"]

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
```



#### 数据描述符同时具有以下可选键值：

* value  
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。`默认为 undefined`

* writable  
当且仅当该属性的writable为true时，value才能被赋值运算符改变。<span class="vp-danger-text">默认为 false</span>  
<span class="vp-warning-text">use strict 严格模式下如果writable 为false 修改属性value值会报错</span>  

```js
// 当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。
var o = {};

Object.defineProperty(o, 'a', {
    value: 37,
    writable: false
});

console.log(o.a); // 37
o.a = 25; // 无法被修改
console.log(o.a); // 37

// 严格模式
(function () {
    'use strict';
    var o = {};
    Object.defineProperty(o, 'b', {
        value: 2,
        writable: false
    });
    o.b = 3; // 报错
    return o.b;
}());
```



#### 存取描述符同时具有以下可选键值：

* get  
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
`默认为 undefined`

* set  
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
`默认为 undefined`



#### 描述符可同时具有的键值

| | configurable | enumerable | value  | writable | get | get |
| ----| ---- |----|----|----|----|----|
|数据描述符| Yes |Yes|Yes|Yes|No|No|
|存取描述符| Yes |Yes|No|No|Yes|Yes|



> 如果 一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。



####  添加多个属性和默认值

考虑特性被赋予的默认特性值非常重要，通常，使用点运算符和`Object.defineProperty()`为对象的属性赋值时，数据描述符中的属性默认值是不同的，如下例所示。

```js
var o = {};

o.a = 1;
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});


// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : false,
  configurable : false,
  enumerable : false
});
```



#### 一般的 Setters 和 Getters

下面的例子展示了如何实现一个自存档对象。 当设置temperature 属性时，archive 数组会获取日志条目。
```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```