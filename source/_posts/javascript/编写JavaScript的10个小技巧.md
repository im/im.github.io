---
    {"title":"编写JavaScript的10个小技巧","tags":["javascript"],"date":"","categories":["javascript"],"cover":"https://cdn.jsdelivr.net/gh/im/oss@master/gallery/03.svg","thumbnail":"https://cdn.jsdelivr.net/gh/im/oss@master/gallery/03.svg"}
---
    
## 简化条件表达式
经常碰到这种情况，要判断某个变量是否为指定的某些值，用常规的逻辑表达式会很长。我的做法是把这些值放进数组里：

```javascript
// 太长的逻辑表达式
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
    //其他逻辑
}
// 简写
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
   //其他逻辑
}
```
<!--more-->
## 简化 if ... else
if...else太常用了，以至于很多人都忘了其实还有其他方式来判断条件。比如简单的变量赋值，完全没必要用这种冗长的语句，一行表达式就搞定了：

```javascript
// 新手的写法
let test= boolean;
if (x > 100) {
    test = true;
} else {
    test = false;
}
// 简写表达式
let test = (x > 10) ? true : false;
// 更直接的
let test = x > 10;
console.log(test);
```

三元表达式可以做复杂的条件分支判断，不过牺牲了一些可读性：

```javascript
let x = 300,
let test2 = (x > 100) ? 'greater 100' : (x < 50) ? 'less 50' : 'between 50 and 100';
console.log(test2); // "greater than 100"
```

## 判空并赋默认值
Code Review 的时候我经常看到这样的代码，判断变量不是null，undefined，''的时候赋值给第二个变量，否则给个默认值：

```javascript
if (first !== null || first !== undefined || first !== '') {
    let second = first;
}
// 简写
let second = first || '';
```

## 简写循环遍历
for  循环是最基本的，但是有点繁琐。可以用 for...in、for...of 或者 forEach 代替：

```javascript
// Longhand
for (var i = 0; i < testData.length; i++)

// Shorthand
for (let i in testData) or  for (let i of testData)
```

数组遍历：

```javascript
function testData(element, index, array) {
  console.log('test[' + index + '] = ' + element);
}

[11, 24, 32].forEach(testData);
// 打印输出: test[0] = 11, test[1] = 24, test[2] = 32
```

## 简化 switch
这个技巧也很常用，把switch  转换成对象的key-value形式，代码简洁多了：

```javascript
// Longhand
switch (data) {
  case 1:
    test1();
  break;

  case 2:
    test2();
  break;

  case 3:
    test();
  break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};

data[anything] && data[anything]();
```

## 简化多行字符串拼接
如果一个字符串表达式过长，我们可能会拆成多行拼接的方式。不过随着 ES6 的普及，更好的做法是用模板字符串：

```javascript
//longhand
const data = 'abc abc abc abc abc abc\n\t'
    + 'test test,test test test test\n\t'
//shorthand
const data = `abc abc abc abc abc abc
         test test,test test test test`
```

## 善用箭头函数简化 return
ES6 的箭头函数真是个好东西，当函数简单到只需要返回一个表达式时，用箭头函数最合适不过了，return都不用写：

```javascript
Longhand:
//longhand
function getArea(diameter) {
  return Math.PI * diameter
}
//shorthand
getArea = diameter => (
  Math.PI * diameter;
)
```

## 简化分支条件语句
又是你，if...else if...else！跟 switch类似，也可以用key-value形式简化：

```javascript
// Longhand
if (type === 'test1') {
  test1();
}
else if (type === 'test2') {
  test2();
}
else if (type === 'test3') {
  test3();
}
else if (type === 'test4') {
  test4();
} else {
  throw new Error('Invalid value ' + type);
}
// Shorthand
var types = {
  test1: test1,
  test2: test2,
  test3: test3,
  test4: test4
};

var func = types[type];
(!func) && throw new Error('Invalid value ' + type); func();
```

## 重复字符串 N 次
有时候出于某种目的需要将字符串重复 N 次，最笨的方法就是用for循环拼接。其实更简单的方法是用repeat：

```javascript
//longhand 
let test = ''; 
for(let i = 0; i < 5; i ++) { 
  test += 'test '; 
} 
console.log(str); // test test test test test 
//shorthand 
'test '.repeat(5);
```

## 指数运算
能省则省，低碳环保。

```javascript
//longhand
Math.pow(2,3); // 8
//shorthand
2**3 // 8
```

## 数字分隔符
这是比较新的语法，ES2021 提出来的，数字字面量可以用下划线分割，提高了大数字的可读性：

```javascript
// 旧语法
let number = 98234567
// 新语法
let number = 98_234_567
```

#javascript 