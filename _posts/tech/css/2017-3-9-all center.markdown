---
layout: post
title: CSS居中完全指南
author: 倪云港
tagpic: css.jpg
description: 居中解决方案
category: css
keywords: 技术, css
---

## 水平居中

### inline 或 inline-* 类型

可以轻松的在一个block元素中水平居中一个 inline 元素，以下代码对 inline，inline-block，inline-table 和 inline-flex 等有效

```
  .parent {
    text-align: center;
  }
```
### block 类型

若block元素设置了固定宽度，可以使用元素的margin水平方向的值为auto的方法实现水平居中

```
  .child {
    width: 300px;
    margin: 0 auto;
  }
```
### 多个 block 类型

①通过 inline-block 实现

```
  .parent {
    text-align: center;
  }
  .child {
    display: inline-block;
    text-align: left;
  }
```

②通过 flexbox 实现

```
  .parent {
    display: flex;
    justify-content: center;
  }
```

## 垂直居中

### inline 或 inline-* 类型

#### 单行

①可以简单的用设置相同的上下 padding 值达到垂直居中的目的。

```
  .center {
    pading-top: 30px;
    padding-bottom: 30px;
  }
```

②也可以设置 line-height 等于 height来达到目的。

```
  .center {
    height: 100px;
    line-height: 100px;
    white-space: nowrap;
  }
```

#### 多行

① 相同的上下 padding 也可以适用于此种情况。

② 将该元素的父元素的 dispaly 设置为 table ，同时该元素的 dispaly 设置为 table-cell，然后设置 vertical-align。

```
  .parent {
    display: table;
    width: 200px;
    height: 400px;
  }
  .child {
    display: table-cell;
    vertical-align: middle;
  }
```

③ 使用 flexbox,一个单独的 flexbox 子元素可以轻易的在其父元素中居中。谨记，这种方法需要父元素有固定的高度。

```
  .parent {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
  }
```

④ 使用“幽灵元素”技术，这种方法采用伪元素 ::before 撑开高度 ，文字垂直居中。

```
  .parent {
    position: relative;
  }
  .parent::before {
    content: " ";
    display: inline-block;
    height: 100%;
    width: 1%;
    vertical-align: middle;
  }
  .child {
    display: inline-block;
    vertical-align: middle;
  }
```

### block 类型

#### 已知元素高度

```
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    height: 100px;
    margin-top: -50px;
  }
```

#### 未知元素高度
①
```
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
```

②使用 flexbox 
```
  .parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
```

## 全屏居中
①
```
  .parent {
    position: relative;
  }
  .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
```

②flexbox
```
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

[原文链接](http://niyungang.com/%E6%8A%80%E6%9C%AF/2017/03/09/all-center.html)