---
    {"title":"编写JavaScript的10个小技巧","tags":["javascript"],"date":"","categories":["javascript"],"cover":"https://cdn.jsdelivr.net/gh/im/oss@master/gallery/36.svg","thumbnail":"https://cdn.jsdelivr.net/gh/im/oss@master/gallery/36.svg"}
---
# 编写JavaScript的10个小技巧
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

 