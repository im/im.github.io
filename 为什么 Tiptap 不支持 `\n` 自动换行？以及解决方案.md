---
title: 为什么 Tiptap 不支持 `\n` 自动换行？以及解决方案
---

在使用 [Tiptap](https://tiptap.dev) 编辑器时，你可能会遇到一个问题：

> 当你从外部粘贴或输入的文本中包含 `\n`（换行符）时，编辑器里并不会换行，而是把所有文字合并在同一行。

---

## 原因分析

Tiptap 基于 [ProseMirror](https://prosemirror.net) 构建，而 ProseMirror 在解析粘贴内容时有两个特点：

1. **优先解析 `text/html`**  
   如果剪贴板中同时存在 HTML 和纯文本，Tiptap 会优先用 HTML 版本来解析。这意味着如果 HTML 里没有 `<br>` 或段落标签，换行符信息会丢失。
   
2. **纯文本模式会忽略 `\n`**  
   即使使用 `text/plain`，ProseMirror 也会把 `\n` 当作普通空格处理，不会渲染为换行。  
   编辑器中真正的换行是由 **`hardBreak` 节点** 或 **段落节点（`paragraph`）** 表示的，不会直接用 `\n` 渲染。

因此，如果我们想让 `\n` 显示为换行，就必须把它转成 Tiptap 可识别的 **硬换行节点**。

---

## 解决方案：`HardBreak` + 自定义 `handlePaste`

### 1. 启用 `HardBreak` 扩展
`HardBreak` 节点是 Tiptap 专门用来表示**行内换行**的节点，类似 HTML 的 `<br>`。

```js
import StarterKit from '@tiptap/starter-kit'
import HardBreak from '@tiptap/extension-hard-break'

const editor = new Editor({
  extensions: [
    StarterKit,
    HardBreak.configure({
      HTMLAttributes: { class: 'hard-break' },
    }),
  ],
})
````

---

### 2. 接管 `handlePaste`，将 `\n` 转成 `hardBreak`

```js
import { Extension } from '@tiptap/core'

const PasteWithHardBreak = Extension.create({
  name: 'pasteWithHardBreak',

  addProseMirrorPlugins() {
    return [
      new this.editor.view.Plugin({
        props: {
          handlePaste: (view, event) => {
            const clipboardData = event.clipboardData
            if (!clipboardData) return false

            // 强制使用 text/plain，绕过默认的 text/html 解析
            const text = clipboardData.getData('text/plain')
            if (!text) return false

            const { state, dispatch } = view
            const { schema, tr } = state

            const nodes = []
            text.split('\n').forEach((line, index, arr) => {
              if (line) {
                nodes.push(schema.text(line))
              }
              if (index !== arr.length - 1) {
                // 在每行之间插入一个硬换行节点
                nodes.push(schema.nodes.hardBreak.create())
              }
            })

            const fragment = schema.nodes.paragraph.create(null, nodes)
            dispatch(tr.replaceSelectionWith(fragment))
            return true // 阻止默认粘贴行为
          }
        }
      })
    ]
  }
})
```

---

### 3. 注册扩展

```js
const editor = new Editor({
  extensions: [
    StarterKit,
    HardBreak.configure({
      HTMLAttributes: { class: 'hard-break' },
    }),
    PasteWithHardBreak, // 自定义的粘贴换行插件
  ],
})
```

---

## 效果对比

假设剪贴板内容为：

```
Hello
World
```

* **默认 Tiptap**
  粘贴后显示：`Hello World`

* **使用解决方案**
  粘贴后显示：

  ```
  Hello
  World
  ```

---

## 总结

* **不能换行的原因**：

  * 粘贴时，Tiptap 默认优先使用 `text/html` 解析；
  * 在 `text/plain` 模式下，`\n` 会被当作普通空格处理。
* **解决方案**：

  * 启用 `HardBreak` 扩展；
  * 接管 `handlePaste`，强制使用 `text/plain` 并手动将 `\n` 转成 `hardBreak` 节点。

通过这个方式，就能让 Tiptap 在粘贴时正确处理 `\n`，实现符合预期的换行效果。

```
