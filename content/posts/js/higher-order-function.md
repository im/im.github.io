---
title: js高阶函数
date: "2023-05-26"
categories:
  - 笔记
tags: ["javascript"]
---


JavaScript的高阶函数是一个非常强大的特性，它允许我们编写更加灵活和可重用的代码。在本文中，我们将探讨高阶函数的概念、它们如何实现以及一些示例。

## 什么是高阶函数

高阶函数是指接受一个或多个函数作为参数，并可以返回函数作为结果的函数。这种函数可以用来将其他函数“包装起来”或者实现某种通用的行为。ES6的箭头函数使得编写高阶函数变得更加简单和方便。

## 高阶函数的实现

下面是一个使用普通函数实现高阶函数的例子：

```javascript
function map(arr, fn) {
    const mappedArr = [];
    for (let i=0; i<arr.length; i++) {
        const val = fn(arr[i], i, arr);
        mappedArr.push(val);
    }
    return mappedArr;
}
```

这个函数实现了一个非常常见的高阶函数——map()。它接受一个数组和一个函数作为参数，并返回一个新数组，这个新数组的元素是将原数组的每个元素传递给函数之后得到的新值。

使用箭头函数，我们可以更加简洁地实现同样的功能：

```javascript
const map = (arr, fn) => arr.map(fn);
```

这个例子中，我们用箭头函数实现了一个新的map()函数。它使用了原生的Array.map()方法实现了同样的功能，代码更加简洁和优雅。

## 高阶函数的示例

现在我们来看一些常见的高阶函数例子，以及它们如何用于实现通用的行为。

### forEach()

forEach()是一个很常见的高阶函数，它用于遍历数组。我们可以使用它将一个函数应用于数组的每个元素：

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
```

这将会打印数组中的每个数字。

### filter()

filter()是另一个常见的高阶函数，它用于过滤数组。我们可以使用它筛选出我们想要的元素：

```javascript
const people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 20}
];
const adults = people.filter(person => person.age >= 25);
console.log(adults);
```

这将会输出年龄大于或等于25岁的人的信息。

### reduce()

reduce()是一个非常强大的高阶函数，它可以从一个数组中提取出一个值。我们可以使用它来计算数组的平均值、求和等操作：

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
```

这将会输出数组的总和5。

## 总结

高阶函数是一个非常有用和强大的概念。它们允许我们编写更加灵活和可重用的代码。在本文中，我们探讨了高阶函数的概念和实现方法，并给出了一些实际例子。当您编写JavaScript代码时，请记得考虑使用高阶函数来提高代码的可维护性和灵活性。