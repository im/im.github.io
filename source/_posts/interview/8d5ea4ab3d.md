---
    {
  "title": " 6 . 写一个方法去掉字符串中的空格",
  "tags": [
    "interview",
    "everyday"
  ],
  "date": "2020-08-11",
  "categories": [
    "interview"
  ]
}
---
    
## 描述

写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格 

<!--more-->
## 解答

```js
const str = "  s t  r  ";

const POSITION = Object.freeze({
    left: Symbol(),
    right: Symbol(),
    both: Symbol(),
    center: Symbol(),
    all: Symbol()
});

function trim(str, position = POSITION.both) {
    if (!!POSITION[position]) throw new Error("unexpected position value");

    switch (position) {
        case POSITION.left:
            str = str.replace(/^\s+/, "");
            break;
        case POSITION.right:
            str = str.replace(/\s+$/, "");
            break;
        case POSITION.both:
            str = str.replace(/^\s+/, "").replace(/\s+$/, "");
            break;
        case POSITION.center:
            while (str.match(/\w\s+\w/)) {
                str = str.replace(/(\w)(\s+)(\w)/, `$1$3`);
            }
            break;
        case POSITION.all:
            str = str.replace(/\s/g, "");
            break;
        default:
    }

    return str;
}

const result = trim(str);

console.log(`|${result}|`); //  |s t  r|
```




