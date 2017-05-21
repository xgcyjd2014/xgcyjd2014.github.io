---
layout: post
title: Console
author: 倪云港
tagpic: css.jpg
description: 了解console
category: javascript
keywords: 技术, javascript, console
---

## 打印字符串

```js
    console.log("I am a 凡人");
```

## 打印提示消息

```js
	console.info("Yes, you are a 凡人");
```

## 打印警告消息

```js
	console.warn("凡人你居然敢窥视我");
```

## 打印错误消息

```js
	console.error("天兵天将，把这个凡人给我打入地狱");
```

## 打印调试信息

```js
	console.debug("我就是传说中的debug");
```

综合对比效果图：

![pic](http://niyungang.github.io/assets/img/console1.png)

## 查看所有方法

console.log 除了能打印字符串外，还能打印出对象，我们可以利用 console.log 打印自己。

```js
    console.log(console);
```

![pic](http://niyungang.github.io/assets/img/console2.png)

## 清理控制台

1.

```js
    console.clear();
```

2.

```js
    clear();
```

3.

使用快捷键。Mac cmd + k ，Win ctrl + l（chrome浏览器）。

## 分组

```js
    console.group('凡人');
    console.log("手");
    console.log("脚");
    console.groupEnd();

    console.group('神');
    console.log("法力无边");
    console.log("腾云架雾");
    console.groupEnd();
```

![pic](http://niyungang.github.io/assets/img/console3.png)

## 查看对象信息

有时候我们需要打印出对象信息,可以使用 console.log 来进行简单的输出。

```js
    var person = {
      head: 1,
      hand: 2,
      leg: 2
    };
    console.log(person);
```

![pic](http://niyungang.github.io/assets/img/console4.png)

可是这个显示得好丑，我们这个时候就可以使用传说中的神器 console.table 来帮助我们清楚的显示 关联数组信息。

```js
    var data = [
        {
            '姓名': '张三', 
            '性别': '男'
        },
        {
            '姓名': '李四',
            '数量': 1
        }
    ];
    console.table(data);
```

![pic](http://niyungang.github.io/assets/img/console5.png)

但是如果想要看详细的对象信息，我们可以使用 console.dir，将一个 JavaScript 对象的所有属性和属性值显示成一个可交互的列表，它还能打印出函数等。

```js
    console.dir(clear);
```

如果想看某个节点中的html代码，我们可以用 console.dirxml 来查看页面中对应元素的 html/xml 内容。

html代码:

```js
    <div id='person'>
      <p>I am a 凡人</p>
    </div>
```

js代码:

```js
    var person = document.getElementById('person');
    console.dirxml(person)；
```

## 性能测试

不服？跑个分。有时候，我们也需要对代码跑个分。这个时候，我们可以使用console.time和console.timeEnd，他们可以记录代码运行所花费的时间。

```js
    console.time("神机妙算");
    (function () {
        for(var i = 0; i < 10; i++) {
            var sum = (function () {
                var flog = 0;
                for(var i = 0; i < 10; i++) {
                    flog+=i;
                }
            })();
        }
    })();
    console.timeEnd("神机妙算");
```

啊咧咧？你这个顶多就是 计时器 怎么能说是 性能测试 。客官别急，我们这还有一个叫做 console.profile 和 console.profileEnd 姐妹呢~~

```js
    console.profile("神机妙算");
    (function () {
        for(var i = 0; i < 10; i++) {
            var sum = (function () {
                var flog = 0;
                for(var i = 0; i < 10; i++) {
                    flog+=i;
                }
            })();
        }
    })();
    console.profileEnd("神机妙算");
```

输出会显示在 profile

什么还是不够？你还想知道运行时的结果栈？可以可以，我们这还有一位 console.trace 哦。他可以看透大你的一举一动哦。

```js
    function add(num) {
        if (0 < num) {
            console.trace("现在num的值为", num);
            return num + add(num - 1);
        } else {
            return 0;
        }
    }

    var a =3;
    add(3);
```

![pic](http://niyungang.github.io/assets/img/console6.png)

## 判断真假

console.assert() 方法可以在其第一个参数为 false 时有条件地显示错误字符串（其第二个参数）。

```js
    console.assert(1 == 1);
    console.assert(1 == 0);
    console.assert(!(1 == 0));
```

![pic](http://niyungang.github.io/assets/img/console7.png)

## 统计次数

有时候我们需要统计一个函数或者被调用了几次，我们通常会增加一个变量 count 来记录，然后在控制台中查看。这样相当的麻烦，我们可以使用 console.count 函数来帮忙我们记录次数，并输出。

```js
    function hi(name) {
        console.count(name);
        return "hi " + name;
    }

    for(var i = 0; i < 10; i++) {
        if(i < 4) {
            hi("person");
        } else {
            hi("god");
        }
    }
```

![pic](http://niyungang.github.io/assets/img/console8.png)

## 占位符

浏览器提供了这么一个API：第一个参数可以包含一些格式占位符比如%c，console.log方法将依次用后面的参数替换占位符，然后再进行输出。

%c --> 根据后面提供的css样式格式化字符串

%s --> 字符串

%d or %i --> 整数

%f --> 浮点数

%o --> 可展开的DOM

%O --> 列出DOM的属性

使用%c占位符时，对应的后面的参数必须是CSS语句，用来对输出内容进行CSS渲染。于是，利用%c配合CSS可以做出吊炸天的效果，比如背景色、字体颜色渐变、字体3D效果、图片等，情况允许再用颜文字、emoji卖个萌，萌萌哒~

## 字符画

ASCII Generator使用方法如下：

1.首先载入图片，然后调节大小、字体、亮度对比度、抖动程度，直到自己满意后，将其复制出来：

![pic](http://niyungang.github.io/assets/img/console9.png)

2.复制到sublime中，将每行开头的换行删除，且替换成\n。最后只有一行代码，即保证没有换行。

3.最后再丢到console.log("")代码中即可，当然，也可以添加结合%c做出更酷炫的效果。

现在就打开浏览器F12的console看看吧。

[原文链接](http://niyungang.com/%E6%8A%80%E6%9C%AF/2017/03/05/console.html)