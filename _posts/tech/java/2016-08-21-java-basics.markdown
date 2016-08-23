---
layout: post
title: Java知识集锦
author: ZhaoJun
tagpic: java.png
description: 关于java的一些基础
category: java
keywords: 技术,java
---

## Java 位运算

java 位运算这部分知识比较基础，且枯燥，但是还是有比较高的研究价值，所以和大家分享一些自己总结的干货

### 如何进行整型赋值

```java
byte  short   int   long  符号位(1)+数值位(n-1)
   8     16   32    64
   int num1 = 25;         //10进制赋值            DEC
   Int num2=025；        //8进制赋值             OCT
   Int num3=0x25         //16进制赋值            HEX
   Int num4=0b1011       //2进制赋值 jdk7.0       BIN
```

### 如何进行浮点型赋值

浮点型 包括符号位+幂指位+数值位

```java
float
  32(1+8+32)                       F/f
Double
  64(1*11+52)                       D/d
67.25 =>
     得到符号位：0
     整数部分：64+2+1=1000011
     小数部分：0.01
     1000011.01=>科学计数法:1.00001101*2(6)
幂指位：01111111=127+6 =133=128+4+1=10000101
数值位23：00001101000000000000000
0 10000101  00001101000000000000000
```

看完上面的知识，我们来分析一个小问题

问：计算机当中 2.0-1.1等于多少？ 为什么？ 如何解决？


答：

0.8999999999             

是因为计算机里无法精确的存储浮点类型的数据所造成的      我们如果想精确地来计算出这个数值，只需要每个数值向左位移一位就可以，把它们先变成整数，最后结果再右移一位即可

##  ^(按位运算符)

下面是一个按位运算的实例

```java
8&5=>0
1000
&0101
0000
```

下面是按位运算需要注意的一些细节和问题

1.当一个正数%2的n次方数的时候 将完全等价于&（这个2的n次方数-1）

```java
%2        %4     &8     %16        %32
&1        &3     &7     &15        &31 
```

2.当实现权限控制模块的时候

```java
Unix:
     1 代表执行权限
     2 代表写入权限
     3 代表读取权限
Java当中修饰符：public=1 static 8     public static  = 1+8  static public = 8+1
```
           
3.如何不借助第三块空间交换两个变量的值

```java

Int a=3
Int b=5
a=a^b;
b=a^b;
a=a^b;
//a=5  b=3
```


4.计算机当中如何最高效的求出2的3次方

```java       
*2     *4      *8     *16       *32
<<1    <<2      <<3    <<4      <<5
/2     /4       /8      /16       /32
>>1     >>2     >>3    >>4       >>5
```

### 基础细节


* 结合安位运算符和位移运算符能够进行简单的图形图形处理
* 纯粹的java当中数值不能给boolean赋值

## 封装、继承、多态     

Java 最基础的标志，如果这都不会，证明作为一个Java 程序员很失败

核心就是为了让代码的复用率提升

在你日后写代码的每一天当中  只要涉及到代码重用  应当考虑继承实现

### 方法重载覆盖

封装：Encapsulation
用 private将不想被外界访问的属性和方法隐藏起来

封装对人类的开发者和使用者都有好处

* 对于类的开发者：能够让数据得到保密，得到隐藏  从而更加安全

* 对人类的使用者：能够让使用者将精力 全部集中在核心业务逻辑上

注意: 类的开发应当高内聚，低耦合

### 内聚和耦合

* 内聚：独立完成功能的能力
* 耦合：模块与模块之间的依赖关系，耦合无处不在

### 关于私有属性的一个小问题   

问：
子类继承父类的时候，关于父类的私有属性：
有没有继承 能不能继承  算不算继承？

答：

私有属性在子类的存储空间当中它是切实存在的
但是由于java当中创建对象的流程所决定的
但是不能继续使用了 因此不能算作继承得到的

## 多态 (polymorphism)

1.多态的定义：指允许不同类的对象对同一消息做出响应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式。（发送消息就是函数调用）

2.实现多态的技术称为：动态绑定（dynamic binding），是指在执行期间判断所引用对象的实际类型，根据其实际的类型调用其相应的方法。

3.多态的作用：消除类型之间的耦合关系。

### 静态多态

指的是java当中的方法重载

### 动态多态

一个对象总有多种称呼它的类型 - 一个事物总有多种存在的形态

动态多态出现肯定会伴随这一种语法：

* 父类类型=子类对象:
* 接口类型 =实现类对象：

多态指的是子类对象 可以直接赋给父类变量，但运行时依然表现出子类的行为特征，这意味着同一个类型的对象在执行同一个方法时，可能表现出多种行为特征

### 多态需要注意什么？

对象是在内存当中客观存在的  不会因为改变称呼它的类型而发生任何变化
但是编译器看等号左边的类型来进行语法检查

### 多态存在的价值？

* 能够让先开发完成的类型在不做任何修改的情况下 跟之后开发出来的新类型结合起来使用 而且不用做任何修改
* 多态的存在还能够降低人和人甚至组和组之间的耦合关系

### 方法重载

发生在同一个类型当中，需要注意的是：

1. 方法名字必须相同
2. 类型肯定不同

3. 参数列表必须不同

	* 参数类型不同
	* 参数个数不同
	* 参数顺序不同

4.参数名字不同（不能算作参数不同）

5.形参的名字根本不会在.class文件当中保存  只会以代号的形式保存。

6.只要让你判断方法重载，你就一定需要把大部分的注意力方法参数列表上，参数列表必须不一样。运行之前扫一眼方法名

7.重载发生在有继承关系的父类和子类自间 而且是子类类型当中
子类继承得到父类的方法之后  觉得方法实现已经不满足时代对新一代的要求了  于是重新给出了方法实现

首先我们先了一个具体表格清单：

| 脑袋 | 躯干 | 尾巴 |
| ---- |:---:|---:|
| 修饰符 | 返回类型+方法名+参数列表 | 异常声明 |
| Public | void aVeryLongMethodname(int args) | throwsException |

需要注意的是：

1. 脑袋不能越变越小
2. 躯干必须完全相同
3. 尾巴不能越变越大

具体实现: 

```java
public demo(){}
public demo(int i){}
```



## JCF集合框架

JCF实例演示：

```java
//java当中的集合只允许存放引用类型对象
 Boolean data1=null;
 boolean data2=data1;  //data1.booleanValue();
 System.out.println(data1);
                Email: 669688@qq.com   
                 963363:公益式
```


### ArrayList

ArrayList重点：

Jdk    7.0之前 扩容机制：*3/2+1      7.0和8.0  扩容机制： old+(old>>1)  1.5

如何消除ArrayList多余的空间

```java
//再添加 元素完成之后   底层的数组元素个数  未必和实际元素个数相同   所以学会使用list.trimToSize()。

nanoTime(); //纳秒为单位。

ArrayList<Object> list = new ArrayList<>();

list.ensureCapacity(size);//没法在构造方法创建对象的时候确定元素个数

// Foreach 的底层还是用迭代器实现的,在使用迭代器遍历ArrayList的过程当中   绝对不允许对集合整体进行任何添加删除操作（除了未遂的）

//ConcurrentModificationException =>并发修改异常
```


在使用迭代器遍历ArrayList的过程当中   
绝对不允许对集合整体进行任何添加删除操作（除了未遂的）

```java
Import java.util.*;
Import java.util.concurrent.*;

//ConcurrentModificationException =>并发修改异常
//5.0之前  必须使用迭代器的remove方法删除
//5.0之后  可以使用CopyOnWriteArrayList
public class TestArrayList5{
    public static void main(String[] args){
       List<Integer> list = new ArrayList<>(5);
       Collections.addAll(list,1,2,3,4,5);
        //我的需求要求删除所有小于3的元素

       Iterator<Integer> car = list.iterator();
        While(car.hasNext()){
            Integer num =  car.next();
             If(num<3){
            list.remove(num);//ConcurrentModificationException
           //car.remove();//删除那个隐形的光标所指向的货物（解决办法）
            }
        }
        System.out.println(list.size());
    }
}
```

jdk8 lmbda 实现

```java
//jdk8 lmbda
Import java.util.*
Public class TestArrayList8{
Public static void main(String[] args){
     List<Integer> list  = new ArrayList<>(5);
     Collections.addAll(list,98,67,53,96,100,35);
     List.stream().filter(e->e>=60).sorted((Integer i1,Integer i2) -> i2 -i1).forEach(System.out::println)
}
}
```

### LinkedList

采用双向循环链表实现
新元素的下一个指向header
新元素的上一个指向header的上一个
新元素的下一个的上一个指向新元素本身
新元素的上一个的下一个指向新元素本身

在jdk6.0中是使用Entry来表示的
在jdk7.0中是使用Node来表示的

### HashSet

HashSet所谓的唯一应当理解为：“唯一”

程序员如何定义hashCode()   equals()两个方法，将决定这HashSet如何判定唯一的

其实 HashSet 判定唯一根本不是两个步骤  而是三个步骤

```java
*hashCode() == equals()
hashCode&&(==|| equals())
```

需要注意的是：

1 不要相信你的眼睛，你的眼睛经常欺骗你的心 
2 “唯一”特殊的    hashcode equals
3 不覆盖 hashcode  的方法 就会直接继承Object对象里的hashcode  方法 直接将内存地址生成hashcode编码

### HashMap

主旨：
键是什么样的键  => 先入为主的键
值是什么样的值 => 后来替换的值

HashSet的remove():同样尊重hashCode  == equals  三个比较步骤   只不过结论相反
Add(): 认定 重复元素  那么就不添加了
Remove():认定相同元素   才能进行删除操作

分组组数*加载因子 =（threshold） = 哈希表能Hold住多少个元素
HashSet<String> set = new HashSet<>(16,0.75F)   // 分组组数，加载因子

不要在使用迭代器遍历HashSet的过程中   对集合（set） 整体进行 add() remove()的操作//否则会触发并发修改异常ConcucrentModificationException

如果需求一定要去删除  那么使用迭代器的remove()方法

Hash和散列表之间的关系：
HashSet 哈希表 -> Hashtable ->散列表


学习重点：
1. HashSet的基本用法（无序 唯一）
2. Hash所谓的唯一  不是真正的唯一 取决于程序元如何定义hashCode() equals()
3. HashSet验证唯一的机制其实是三个比较步骤   hashCode()==equals()
4. HashSet添加元素的时候如果认定了重复元素  那么直接舍弃
5. HashSet删除元素同样尊重三步比较步骤
6. HashSet构造方法 的两个参数（分组组数，加载因子） 对于性能和效率的影响
7. HashSet千万不要在添加元素之后尝试修改参与生成哈希码的属性
8. HashSet千万不要在使用迭代器遍历的过程中  对set 整体进行  添加 和删除 操作（ConcucrrentHashMap）
9. HashSet 内存布局示意图

HashMap的原理：详见JDK源码

### Cookie的优点

使用 Cookie 的优点为：

* 可配置到期规则 Cookie 可以在浏览器会话结束时到期，或者可以在客户端计算机上无限期存在，这取决于客户端的到期规则。

* 不需要任何服务器资源 Cookie 存储在客户端并在发送后由服务器读取。

* 简单性 Cookie 是一种基于文本的轻量结构，包含简单的键值对。

* 数据持久性 虽然客户端计算机上 Cookie 的持续时间取决于客户端上的 Cookie 过期处理和用户干预，Cookie 通常是客户端上持续时间最长的数据保留形式。

使用 Cookie 的缺点为：

* 大小受到限制 大多数浏览器对 Cookie 的大小有 4096 字节的限制，尽管在当今新的浏览器和客户端设备版本中，支持 8192 字节的 Cookie 大小已愈发常见。

* 用户配置为禁用 有些用户禁用了浏览器或客户端设备接收 Cookie 的能力，因此限制了这一功能。

* 潜在的安全风险 Cookie 可能会被篡改。用户可能会操纵其计算机上的 Cookie，这意味着会对安全性造成潜在风险或者导致依赖于 Cookie 的应用程序失败。另外，虽然 Cookie 只能被将它们发送到客户端的域访问，历史上黑客已经发现从用户计算机上的其他域访问 Cookie 的方法。您可以手动加密和解密Cookie，但这需要额外的编码，并且因为加密和解密需要耗费一定的时间而影响应用程序的性能。

### localStorage

Cookie 和 html5 localStorage 的比较

* localStorage一般只能存5m。
* 老的浏览器不支持HTML5。
* 有些浏览器如果使用‘无痕浏览模式‘会禁用localStorage的setItem方法。

LocalStorage 优点：容量大，易用，原生支持

缺点：兼容性问题（IE8以下的版本不支持） | 安全性也差，不适用于保存敏感的数据。

### Java内存的回收机制

Java的内存回收机制：
 Java的垃圾回收机制是Java虚拟机提供的能力，用于在空闲时间以不定时的方式动态回收无任何引用的对象
占据的内存空间。需要注意的是：垃圾回收回收的是无任何引用的对象占据的内存空间而不是对象本身，

