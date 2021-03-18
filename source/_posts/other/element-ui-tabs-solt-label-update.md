---
title: element-ui tabs的label slot不能及时动态更新
date: 2021-03-18
categories:
    - other
cover: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/28.svg
thumbnail: https://cdn.jsdelivr.net/gh/im/oss@master/gallery/28.svg
---

[https://github.com/ElemeFE/element/issues/2934](https://github.com/ElemeFE/element/issues/2934)

## 问题

```js
var Main = {
    template: `
<el-tabs type="border-card">
 <el-tab-pane :name="index" v-for="(item, index) in tabs">
     <span slot="label">{{ item.name }}</span>
     <div>
     	{{ item.name }}
      <input type="text" v-model="item.name" name="name"/>
     </div>
  </el-tab-pane>
</el-tabs>
  `,
    data() {
        return {
            tabs: [
                {
                    name: 'tab1',
                    content: 'Content Tab1',
                },
                {
                    name: 'tab2',
                    content: 'Content Tab2',
                },
                {
                    name: 'tab3',
                    content: 'Content Tab3',
                },
            ],
        }
    },
}

new Vue({
    el: '#app',
    render: (h) => h(Main)
})
```

## 解决方法

```html
<el-tabs>, like <el-tabs ref="tabs">
```

```js
this.$refs.tabs.$refs.nav.$forceUpdate();
```
