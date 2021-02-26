---
title: css position 有那些属性？ 都相对于谁定位？
date: 2018-06-03
tags:
    - css
    - interview
categories:
    - front end
thumbnail: https://i.picsum.photos/id/33/1200/700.jpg
share:
    type: sharejs
    ites: ['qzone', 'qq', 'weibo','wechat', 'douban']
---

### position 有那些属性？

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |

<!-- more -->

### 都相对于谁定位？

**absolute**

他的意思是绝对定位，他是参照浏览器的左上角，配合TOP、RIGHT、BOTTOM、LEFT(下面简称TRBL)进行定位，在没有设定TRBL，默认依据父级的做标原始点为原始点。如果设定TRBL并且父级没有设定position属性，那么当前的absolute则以浏览器左上角为原始点进行定位，位置将由TRBL决定。

**relative**

他的意思是绝对相对定位，他是参照父级的原始点为原始点，无父级则以BODY的原始点为原始点，配合TRBL进行定位，当父级内有padding等CSS属性时，当前级的原始点则参照父级内容区的原始点进行定位。

relative没有跳出文本流，定位是相对于父级和兄弟节点。absolute跳出文本流，是相对于父级且带有定位，如果父级没有定位属性，那么就会往上一级再找是否带定位，找到顶级之后如果还没有定位，就以body定位。 
