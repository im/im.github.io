---
title: 鼠标指针样式
tags:
    - css
categories:
    - front end
thumbnail: https://i.picsum.photos/id/30/1200/700.jpg
---


* <span style="cursor:default">Default（默认）</span> <br />
* <span style="cursor:auto">Auto（自动）</span> <br />
* <span style="cursor:crosshair"> Crosshair（十字准星）</span><br />
* <span style="cursor:pointer">Pointer（手形）</span><br />
<!-- more -->
* <span style="cursor:move">Move（可移动对象）</span><br />
* <span style="cursor:e-resize">e-resize（向右改变大小）</span><br />
* <span style="cursor:ne-resize">ne-resize（向右上改变大小）</span><br />
* <span style="cursor:nw-resize">nw-resize（向左上改变大小）</span><br />
* <span style="cursor:n-resize">n-resize（向上改变大小）</span><br />
* <span style="cursor:se-resize">se-resize（向右下改变大小）</span><br />
* <span style="cursor:sw-resize">sw-resize（向左下改变大小）</span><br />
* <span style="cursor:s-resize">s-resize（向下改变大小）</span><br />
* <span style="cursor:w-resize">w-resize（向左改变大小）</span><br />
* <span style="cursor:text">text（文字/编辑）</span><br />
* <span style="cursor:wait">wait（等待/沙漏）</span><br />
* <span style="cursor:help">help（帮助）</span>
* <span style="cursor:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII='),auto;">自定义1</span><br/>
* <span style="cursor:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC') 14 0,pointer;">自定义2</span>



###  代码

```html
<span style="cursor:auto">Auto</span><br />
<span style="cursor:crosshair">Crosshair</span><br />
<span style="cursor:default">Default</span><br />
<span style="cursor:pointer">Pointer</span><br />
<span style="cursor:move">Move</span><br />
<span style="cursor:e-resize">e-resize</span><br />
<span style="cursor:ne-resize">ne-resize</span><br />
<span style="cursor:nw-resize">nw-resize</span><br />
<span style="cursor:n-resize">n-resize</span><br />
<span style="cursor:se-resize">se-resize</span><br />
<span style="cursor:sw-resize">sw-resize</span><br />
<span style="cursor:s-resize">s-resize</span><br />
<span style="cursor:w-resize">w-resize</span><br />
<span style="cursor:text">text</span><br />
<span style="cursor:wait">wait</span><br />
<span style="cursor:help">help</span>
<span style="cursor:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII='),auto;">自定义1</span><br/>
<span style="cursor:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC') 14 0,pointer;">自定义2</span>
```