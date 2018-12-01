---
layout: post
title: 文字流光效果
author: 倪云港
tagpic: css.jpg
description: 了解linear-gradient属性及效果展示
category: css
keywords: 技术, css, 动画
---

纯CSS即可实现文字流光动态功能。

主要是用背景的属性来实现。

## 实现文字流光效果使用的属性：
```css
background-image: -webkit-linear-gradient(left, red, yellow 25%, blue 50%, green 75%, red 100%); 渐变背景，此处为能无缝拼接的渐变 即0~100%

color: transparent;   文字填充色为透明。

-webkit-text-fill-color: transparent;    

-webkit-background-clip: text; 背景剪裁为文字，相当于用背景填充文字 CSS3新属性。

-webkit-background-size: 200% 100%; 背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间。

-webkit-animation
```
## 兼容性：

IE浏览器不支持-webkit-text-fill-color,因此，该效果在IE浏览器中无法正常运行。

## codepen展示：

<iframe height='265' scrolling='no' title='CSS文字流光效果' src='//codepen.io/niyungang/embed/oZBNxa/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/niyungang/pen/oZBNxa/'>CSS文字流光效果</a> by 倪云港 (<a href='http://codepen.io/niyungang'>@niyungang</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>