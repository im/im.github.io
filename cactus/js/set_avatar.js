window.onload = function () {
    const img = document.querySelector('.avatar')

    new BreathingHalftone(img, {
        dotSize: 1 / 150,
        //点的大小
        //作为图像对角线的一小部分
        //较小的点=较多的点=性能较差

        dotSizeThreshold: 0.05,
        //隐藏小于百分比的点

        initVelocity: 0.1,
        //点开始增长的速度

        oscPeriod: 3,
        //点大小振荡或“呼吸”周期的持续时间（以秒为单位）

        oscAmplitude: 0.2,
        //振荡变化百分比

        // ----- color & layout ----- //

        isAdditive: false,
        //添加剂是带有RGB点的黑色，

        //减法为带有CMK点的白色

        isRadial: false,
        //启用径向网格布局

        channels: ['red', 'green', 'blue'],
        //点层

        //'lum'是另一个受支持的通道，以实现亮度

        isChannelLens: true,
        //禁用位移时更改点的大小

        // ----- behavior ----- //

        friction: 0.06,
        //较低的点使点更容易移动，较高的点使点更难

        hoverDiameter: 0.2,
        //悬停效果的大小

        //作为图像对角线的一小部分

        hoverForce: 0.01,
        //悬停效果的力量

        //负值会拉入点，正值会拉出

        activeDiameter: 0.6,
        //点击/点击效果的大小

        //作为图像对角线的一小部分

        activeForce: 0.01,
        //悬停效果的力量

        //负值会拉入点，正值会拉出
    })
}
