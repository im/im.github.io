---
    {
  "title": " JavaScript 实现复制粘贴",
  "tags": [
    "javascript"
  ],
  "date": "2019-06-25",
  "categories": [
    "javascript"
  ]
}
---
    
## 实现思路

## html:

```html
<button onclick="copyToClip('内容')">Copy</button>
```

## javascript:

```javascript
/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content, message) {
    var aux = document.createElement('input')
    aux.setAttribute('value', content)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
    if (message == null) {
        alert('复制成功')
    } else {
        alert(mesage)
    }
}
```

<!--more-->
## (clipboard.js)[https://clipboardjs.com/]

直接引用： `<script src="dist/clipboard.min.js"></script>`

包： `npm install clipboard --save `，然后 `import Clipboard from 'clipboard'`

## html:

```html
<input id="demoInput" value="hello world" />
<button class="btn" data-clipboard-target="#demoInput">点我复制</button>
```

## javascript:

```javascript
import Clipboard from 'clipboard'
const btnCopy = new Clipboard('btn')
```

