# dppx 全面指南：高分屏时代的像素度量

## dppx 是什么？
**dppx（dots per CSS pixel）**：每个 **CSS 像素** 对应多少个 **设备像素**。  
- 普通屏：**1dppx**（1 CSS 像素 ≈ 1 设备像素）  
- 高分屏：**2dppx / 3dppx**（1 CSS 像素 ≈ 2 或 3 设备像素）

📌 **记住**：dppx ≈ `window.devicePixelRatio`，但 dppx 是 **CSS 单位**，DPR 是 **JS 属性**。


## 与 px / DPR / dpi / dpcm 的关系

| 单位 | 含义            | 关系                    |
| ---- | --------------- | ----------------------- |
| px   | CSS 抽象像素    | 布局基准                |
| DPR  | 设备像素比      | 设备像素 ÷ CSS 像素     |
| dppx | 每 CSS 像素点数 | 数值≈DPR                |
| dpi  | 每英寸点数      | `dpi = dppx × 96`       |
| dpcm | 每厘米点数      | `dpcm ≈ dppx × 37.7953` |

**换算公式**  
```

1dppx = 96dpi ≈ 37.7953dpcm

````


## 3. 为什么要关心 dppx？
- **清晰度**：高分屏需要更高分辨率资源  
- **性能**：低密度屏无需加载大图  
- **一致体验**：按需投放资源


## 核心用法

### 媒体查询
```css
@media (min-resolution: 2dppx) {
  .logo { background-image: url('/img/logo@2x.png'); }
}
````

> 推荐用 dppx，而不是 192dpi 这样的倍数。

### `image-set()` 背景图

```css
.hero {
  background-image: image-set(
    url('/img/hero@1x.jpg') 1x,
    url('/img/hero@2x.jpg') 2x,
    url('/img/hero@3x.jpg') 3x
  );
}
```

### `<img srcset>`

```html
<img
  src="/img/card@1x.png"
  srcset="/img/card@1x.png 1x, /img/card@2x.png 2x, /img/card@3x.png 3x"
  alt="card"
/>
```

### Canvas 清晰渲染

```js
const dpr = window.devicePixelRatio || 1;
canvas.width  = rect.width  * dpr;
canvas.height = rect.height * dpr;
ctx.scale(dpr, dpr);
```



## 实战建议

* 位图导出 `@1x/@2x/@3x`
* 图标优先用 SVG
* 背景图用 `image-set()`，内容图用 `srcset`
* 注意浏览器/系统缩放会影响 dppx



## 常见问题

**Q：dppx 是图片尺寸吗？**

A：不是，是密度单位。

**Q：为什么普通屏也触发了 2dppx？**

A：可能是浏览器缩放导致 DPR>1。

**Q：打印用 dppx 还是 dpi？**

A：打印用 dpi，可按 `1dppx = 96dpi` 转换。



## 速查表

| 屏幕类型 | 媒体查询                  |
| -------- | ------------------------- |
| 1×       | `(min-resolution: 1dppx)` |
| 2×       | `(min-resolution: 2dppx)` |
| 3×       | `(min-resolution: 3dppx)` |



## 可抄用代码

```css
.card {
  background: center/cover no-repeat url('/img/card@1x.jpg');
  background-image: image-set(
    url('/img/card@1x.jpg') 1x,
    url('/img/card@2x.jpg') 2x,
    url('/img/card@3x.jpg') 3x
  );
}

@media (min-resolution: 2dppx) {
  .card { background-image: url('/img/card@2x.jpg'); }
}
@media (min-resolution: 3dppx) {
  .card { background-image: url('/img/card@3x.jpg'); }
}
```



💡 **总结**
dppx 是“当前环境的像素密度刻度”，用它 + `image-set` / `srcset`，在不同屏幕上做到 **既清晰又省流量**。

