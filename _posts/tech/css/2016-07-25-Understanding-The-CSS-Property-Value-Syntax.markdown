---
layout: post
title: Understanding The CSS Property Value Syntax 
author: Xukm
tagpic: css.jpg
description: 深入理解W3C 标准下Css属性语法
category: css
keywords: 技术,css,w3c
---


W3C组织使用了一套特定语法，来为所有CSS属性定义可能的值。本文将讲解这一套语法，让你能准确使用CSS文档中的属性值。 [阅读原文 »](https://www.smashingmagazine.com/2016/05/understanding-the-css-property-value-syntax/)

## 理解 CSS 属性值语法

W3C 使用特定的语法来定义所有可能在 CSS 属性中使用的值。如果你曾经看过 CSS 规范，你可能已经见过这种语法的使用 [比如 `border-image-slice` 语法](https://www.w3.org/TR/css3-border/#the-border-image-slice)。
让我们来看看：

```css
 <'border-­image-­slice'> = [<number> | <percentage>]{1,4} && fill?
```

这个语法可能很难理解-如果你不知道其中的各个符号和他们是怎样生效的话。但是，这是值得花时间去学习的。如果你理解了 W3C 是怎样定义这些属性值，你就能理解 W3C 的任何 [CSS 规范](https://www.w3.org/Style/CSS/specs.en.html)。

![shootpic](https://media-mediatemple.netdna-ssl.com/wp-content/uploads/2016/05/understanding-syntax-image-opt.jpg)


## 巴科斯范式

我们将从巴科斯范式开始，因为这会帮助我们理解 W3C 的属性值语法。

[巴科斯范式](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)（ BNF ）

什么是巴科斯范式？

> 是一种用来描述计算机语言语法的符号集。他的设计是明确的，所以对于如何表示语言这方面不存在分歧或歧义。
  大范围的扩展和编译版本的巴科斯范式如今被使用，包括[扩展巴科斯范式](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form)（ EBNF ）和[扩充巴科斯范式](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_Form)（ ABNF ）。

一个 BNF 规范是一组按照下面的方式书写的规则：

```html
<symbol>  ::=  __expression__
```
左边的部分总是一个非终结符，随后是一个 `::=` 符号，这个符号的意思是“可以被替换为”。右边是一个 `__expression__` ,包含一个或更多用来推导左边符号的含义的符号。
BNF 的基本规范说，“左边的任何都可以被右边的替换”。

## 非终结符和终结符
非终结符是可以被替换或再细分的符号。在 BNF 中，非终端符出现在 `< >` 中。在下面的例子中，`<integer>`和`<digit>`是非终端符。

```html
<integer>  ::=  <digit> | <digit><integer>
```

终结符就代表一个值不可被替换或者再细分。在下面的例子中，所有的数值都是终结符。

```html
<digit>  ::=  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

## CSS 属性值语法

虽然 W3C 的 CSS 属性值语法是基于 BNF 的概念，但它还是有差异的。相似之处在于它开始于非终结符，不同之处在于它使用“组合值”这种表达式来描述符号。
在下面的例子中，`<line-width>`是一个非终结符，`<length>`，`thin`，`medium` 和 `thick` 就是组合值。

```html
<line-­width>  =  <length> | thin | medium | thick
```

## 组合值

有四种类型的组合值：关键词，基本数据类型，属性数据类型和非属性数据类型。

### 1.关键词

关键词出现时不带引号或者尖括号。它们被用作属性值。因为它们不能被替换或者进一步细分，所以它们是终结符。在下面的例子中，`thin` ，`medium` 和 `thick` 都是关键词。这意味着它们可以被用作我们 CSS 中的值。
```
<line-­width>  =  <length> | thin | medium | thick
```

### 2.基本数据类型

基本数据类型定义核心值，如`<length>`和`<color>`。它们是非终结值因为它们可以被实际的长度值或者颜色值来替换。在下面的例子中，`<color>`符号是一个基本数据类型。

```html
<'background-color'>  =  <color>
```

这个`<color>`在我们的 CSS 中可以被一个真实的颜色值替换，使用一个关键词，一个扩展的关键词，一个 RGB 颜色值，RGBA 值，HSL 或者 HSLA 值，或者 `transparent` 这个关键词。

```css
.example { background-color: red; }
.example { background-color: honeydew; }
.example { background-color: rgb(50%,50%,50%); }
.example { background-color: rgba(100%,100%,100%,.5); }
.example { background-color: hsl(280,100%,50%); }
.example { background-color: hsla(280,100%,50%,0.5); }
.example { background-color: transparent; }
```

### 3.属性数据类型
属性数据类型是一个用来定义属性真实值的一个非终结符号。它用尖括号包住属性的名字(使用引号包住)。在下面的例子中，`<'border-width'>`字符是一个属性数据类型。

```html
<'border-­width'>  =  <line-­width>{1,4}
```

属性数据类型可能会直接作为属性出现在我们的 CSS 中。在下面的例子中，`border-width`属性就被用来为`.example`类名定义一个 2px 的边框。

```html
.example { border-width: 2px; }
```

### 4.非属性数据类型

非属性数据类型是一个和属性名称不相同的非终结符。然而，它定义了某个属性的各方面。举例来说，`<line-width>`不是一个属性，但是它是一个定义了各种`<border>`属性的数据类型。

```html
<line-­width>  =  <length> | thin | medium | thick
<'border-­width'>  =  <line-­width>{1,4}
```

## 组合值选择符

组合值可以通过下面五种方法之一被用到属性值选择符中。

### 1.相邻值

组合值中一个接着一个的写法意味着这些值都必须以给定的顺序出现。在下面的例子中，这种语法列出了3个不同的值：`value1` ， `value2` 和 `value3` 。在 CSS 规则中，这三个值以正确的顺序出现在属性语法中才是有效的。

```css
/* Component arrangement: all in given order */
<'property'> = value1 value2 value3

/* Example */
.example { property: value1 value2 value3; }

```

### 2.`&&`

用两个&符号（`&&`）分离的两个或者多个值意味着它们必须出现，以任何顺序。在下面的例子中，这种语法列出两个值，通过 && 分离。CSS 规则表明这两个值必须都要出现但是可能是任何顺序出现。

```css
/* Component arrangement: all, in any order */
<'property'> = value1 && value2

/* Examples */
.example { property: value1 value2; }
.example { property: value2 value1; }
```

### 3.`|`

用 `|` 符号分离的两个或者多个值意味着它们中的一个必须出现。在下面的例子中，这种语法列出 3 个值，通过 | 分离。下面的 CSS 规则展示了 3 种可能的选择。

```css
/* Component arrangement: one of them must occur */
<'property'> = value1 | value2 | value3

/* Examples */
.example { property: value1; }
.example { property: value2; }
.example { property: value3; }
```

### 4.`||`

用 `||` 分离的两个或者多个值意味着它们中的一个或者多个必须出现，以任意的顺序。在下面的例子中，这种语法列出了 3 个值，它们通过 || 分离。当你写 CSS 规则来匹配这个语法时，有很多可用的选择 - 你可以使用一个，两个，或者三个值，以任意的顺序。

```css
/* Component arrangement: one or more in any order */
<'property'> = value1 || value2 || value3

/* Examples */
.example { property: value1; }
.example { property: value2; }
.example { property: value3; }
.example { property: value1 value2; }
.example { property: value1 value2 value3; }
...etc
```

### 5.`[]`

用 `[]` 包围的两个或者多个值意味着组件内部是一个单独的分组。在下面的例子中，这种语法列出了 3 个值，但是其中两个出现在 [] 内，所以它们是一个单独的分组。在 CSS 规则中有两个选择是可用的：`value1` 和 `value3` 或者 `value2` 和 `value3`。

```css
/* Component arrangement: a single grouping */
<'property'> = [ value1 | value2 ] value3

/* Examples */
.example { property: value1 value3; }
.example { property: value2 value3; }
```

## 组合值叠加

组合值也可以使用下面的 8 种方法被叠加。

### 1.`?`

`?` 表示前置类型，一个词或一个组可以选择出现零次或者出现一次。在下面的例子中，第二个值被放在[]里面和一个','在一起。放在这一组后面的 `?` 意味着 value1 必须出现，但是我们也可以使用 `value1` 和 `value2` ，用逗号分隔。

```css
/* Component multiplier: zero or one time */
<'property'> = value1 [, value2 ]?

/* Examples */
.example { property: value1; }
.example { property: value1, value2; }
```

### 2.`*`

`*` 表示前置类型，一个词或一个组出现零次或者多次。在下面的例子中，第二个值被放在[]里面和一个','在一起。放在这一组后面的 `*` 意味着 value1必须出现，但是我们也可以使用任意次 `<value2>`，用逗号分隔。

```css
/* Component multiplier: zero or more times */
<'property'> = value1 [, <value2> ]*

/* Examples */
.example { property: value1; }
.example { property: value1, <value2>; }
.example { property: value1, <value2>, <value2>; }
.example { property: value1, <value2>, <value2>, <value2>; }
...etc
```

### 3.`+`

`+` 表示前置类型，一个词或一个组可以选择出现一次或者出现多次。在下面的例子中，value后面的 `+` 意味着 `<value>` 可以出现一次或者多次 - 不需要逗号分隔。

```css
/* Component multiplier: one or more times */
<'property'> = <value>+

/* Examples */
.example { property: <value>; }
.example { property: <value> <value>; }
.example { property: <value> <value> <value>; }
...etc
```

### 4.`{ A }`

`{}` 中包含一个单一的数字表示前置类型，一个词或一个组出现 `A`次。在下面的例子中，value的实例必须出现两次，以便使声明有效。

```css
/* Component multiplier: occurs A times */
<'property'> = <value>{2}

/* Examples */
.example { property: <value> <value>; }
```

### 5. `{A, B}`

`{}`中包含两个以逗号分隔的数字对表示前置类型，一个词或一个组出现至少 `A` 次，至多 `B` 次。在下面的例子中，`value`出现至少一次，至多三次用来定义这个属性，这些值不需要用逗号分隔。

### 6.{A,}

这里的 `B` 可以省略，代表至少出现一次，对于上限没有限制。在下面的例子中，`value`至少出现一次，但是也可以增加任意数量`value`。这些值不需要用逗号分隔。

### 7.`#`

`#` 表示前置类型，一个词或者一个组出现一次或者多次，用逗号分隔。在下面的例子中，可以使用一个或者多个`value`，每个由逗号分隔。

### 8.`!`

一个组后面的 ! 表示这个组是必需的并且至少产生一个值。在下面的例子中，这种语法列出了 3 个值，通过 `|` 分隔。下面的 CSS 规则展示了三种可能的选择：

```css
/* Component multiplier: required group, at least one value */
<'property'> = value1 [ value2 | value3 ]!

/* Examples */
.example { property: value1 value2; }
.example { property: value1 value3; }
```

## '<text-shadow>'语法：一个例子

让我们来看看 `<\'text-shadow\'>`这个属性作为例子。让我们来看看[规范](https://www.w3.org/TR/css-text-decor-3/#text-shadow-property)中是如何定义这个属性的：

```css
<'text-shadow'> = none | [ <length>{2,3} && <color>? ]#
```

我们可以分解这些符号：
    
1. `|` 代表我们可以使用关键词 `none` 或组 `[]`
2. `#` 代表我们可以使用一次或多次这个组，用逗号分隔。
3. 在组的内部，`{2,3}`代表我们可以使用两到三个`<length>`
4. `&&` 代表我们必需包含所有的值，但是它们可以是任意顺序。
5. 仅仅是为了更加微妙，`<color>`后面包括一个 `? `，这意味着它可以出现零次或一次。

用通俗的语言，这可以写成如下：


不指定或指定一个或多个组，这个组包含 2 - 3 
个表示长度的值和一个可选额颜色值。长度值和颜色值可以写成任意顺序。 

这意味着我们用不同的方式来写我们的 `text-shadow` 属性。举例来说，我们可以设置 `text-shadow` 属性为 `none`:

```css
.example { text-shadow: none; }
```
我们可以只写两个长度值，这意味着我们将设定阴影的水平和垂直偏移，但是没有模糊半径或者颜色值。
因为没有设置模糊半径，初始值是 0；所以，阴影是尖锐的。颜色没有定义，文本的颜色将用于阴影的颜色。

```css
.example { text-shadow: 10px 10px; }
```

如果我们使用 3 个长度值，我们就为阴影设置了模糊半径，水平和垂直偏移。

```css
.example { text-shadow: 10px 10px 10px; }
```

我们可以包含一个颜色值，它可以放在两个或者三个长度值的前面或后面。在下面的例子中，红色的颜色值可以被放在一组值的任一端。

```css
.example { text-shadow: 10px 10px 10px red; }
.example { text-shadow: red 10px 10px 10px; }
```

最后，我们可以包含多个`text-shadow`，写成逗号分隔的组。阴影效果将从前到后被应用：第一个阴影在上面，其他的在后面。阴影不能覆盖文字本身。在下面的例子中，红色的阴影将作用在绿黄色阴影上方。

```css
.example {
    text-shadow:
        10px 10px red,
        -20px -20px 5px lime;
}
```

## 总结

如果你写 CSS 为生，了解如何正确地写有效的 CSS 属性值是非常重要的。一旦你理解了不同值之间是怎样组合叠加的， CSS 的属性值语法就变得更加容易理解。然后就更容易阅读各种规则，写有效的 CSS.

为了进一步阅读，请查看以下网站：

[“Value Definition Syntax” in “CSS Values and Units Module Level 3,”](https://www.w3.org/TR/css3-values/#value-defs)

[“CSS Reference,”](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) Mozilla Developer Network

[“How to Read W3C Specs,”](http://alistapart.com/article/readspec) J. David Eisenberg, A List Apart