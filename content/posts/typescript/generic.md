---
title: TypeScript泛型
date: "2023-06-28"
tags: [ "typescript"]
categories:
  - 技术笔记
---


## 什么是泛型？ 

泛型是一种在编程语言中用于创建可重用代码的工具。它允许我们在定义函数、类或接口时延迟指定具体类型，而是在使用时动态地传入类型参数。

## 泛型函数 📝

在TypeScript中，我们可以使用泛型来创建可接受不同类型参数的函数。下面是一个简单的例子：

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("Hello, TypeScript! 🚀");
console.log(result); // 输出：Hello, TypeScript! 🚀
```

在上面的例子中，我们定义了一个identity函数，它接受一个参数arg并返回该参数。使用`<T>`语法来指定泛型类型，并在函数体中使用该类型。

在调用函数时，我们可以明确指定泛型类型，也可以让TypeScript根据传入的参数自动推断出类型。

**常见场景：** 泛型函数常用于处理各种类型的输入，并返回相同类型的输出。例如，数组的`map`和`filter`方法就是使用泛型函数来实现的。

## 泛型类 🏢

除了函数，我们还可以创建泛型类。泛型类允许我们在类的定义中使用泛型类型。下面是一个示例：

```typescript
class Container<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let container = new Container<number>(42);
console.log(container.getValue()); // 输出：42
```

在上面的例子中，我们定义了一个Container类，它接受一个泛型类型参数T，并在构造函数中接受一个参数value。通过泛型类型，我们可以在类中使用该类型，并在实例化时传入具体类型。

**常见场景：** 泛型类常用于创建可重用的数据结构，例如栈、队列等。通过使用泛型类，我们可以在编写通用的数据结构时，不限制特定的数据类型。

## 泛型约束 🚧

有时候，我们希望对泛型进行一些限制，以确保只能传入特定类型。这时可以使用泛型约束。下面是一个示例：

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log("Length of arg: " + arg.length);
  return arg;
}

let result = loggingIdentity("Hello 👋");
console.log(result); // 输出：Hello 👋
```

在上面的例子中，我们定义了一个Lengthwise接口，它包含一个length属性。然后我们定义了一个loggingIdentity函数，它接受一个泛型参数T，并使用extends关键字对泛型进行约束，要求T必须实现Lengthwise接口。这样我们就可以在函数体中访问arg的length属性。

**常见场景：** 泛型约束常用于对泛型类型进行更精确的类型限制，以确保传入的参数具有特定的属性或方法。

## 泛型与工具类型的结合 🛠️

TypeScript提供了一些内置的工具类型（Utility Types），可以与泛型一起使用，以进一步增强泛型的能力。

**常见工具类型：**

- `Partial<T>`：将类型T的所有属性设为可选。
- `Readonly<T>`：将类型T的所有属性设为只读。
- `Pick<T, K>`：从类型T中选择指定的属性K。
- `Omit<T, K>`：从类型T中排除指定的属性K。
- `Record<K, T>`：创建一个具有指定类型T的属性K的对象。
- `Exclude<T, U>`：从类型T中排除可以赋值给类型U的类型。
- `Extract<T, U>`：从类型T中提取可以赋值给类型U的类型。
- `NonNullable<T>`：从类型T中排除null和undefined。

这些工具类型可以与泛型一起使用，以便更灵活地处理类型。

**常见场景：** 泛型与工具类型的结合常用于处理复杂的类型转换、属性选择和排除等操作。