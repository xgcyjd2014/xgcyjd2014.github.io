---
layout: post
title: '归并算法'
author: 季智成
description: algorithm
tagpic: algorithm.jpg
category: other 
---
归并算法主要思想是递归
请想象有八张罗在一起背朝你的扑克牌

### 分解
首先将八张牌依次从左到右并排排列（保持背朝你的方式），

### 解决
然后两两一组左向右分为四组，将每组牌从小到大排好序，

### 合并
将四组牌自左向右合为两组，再将两组牌合为一组

## C++实现如下

```
#include<iostream>

void Merge_sort(int* a, int p, int r);
void Merge(int* a, int p, int q, int r);

int main()
{
	int a[10] = { 12,18,-23,987,16,1321,-48,-94,1,79 };
	Merge_sort(a, 0, 9);
	for (int i = 0; i < 10; i++)
		std::cout << a[i]<<' ';

	return 0;
}

void Merge_sort(int* a, int p, int r)
{
	if (p < r)
	{
		int q = (p + r) / 2;
		Merge_sort(a, p, q);
		Merge_sort(a, q + 1, r);
		Merge(a, p, q, r);
	}
}

void Merge(int* a, int p, int q, int r)
{
	if (p == q)	
	{
		if (a[p] > a[r])	//p实际上等于r-1， 如果前一个数比后一个数大就交换，实质上就是升序排列
		{
			int t = a[r];
			a[r] = a[p];
			a[p] = t;
		}
	}
	else	//p到r存在两张以上的牌，也就是两堆牌进行合并，每次取一张牌，将比较出来的最小牌放入新数组的末尾
	{
		int c[100] = { 0 };
		int i = 0, j = 0, k=0;
		for(i=p, j=q+1, k=0; i<=q && j<=r; k++)	//注意终止条件，存在一堆牌先空的可能性
		{ 
			if (a[i] < a[j])
			{
				c[k] = a[i];
				i++;
			}
			else
			{
				c[k] = a[j];
				j++;
			}
		}
		if (i > q && j <= r)	//由于非空的那堆牌已经非降序排列完毕，所以直接将它放入已排序牌的尾部即可
		{
			for (; j <= r; k++, j++)
				c[k] = a[j];
		}
		else if (j > r && i <= q)
		{
			for (; i <= q; k++, i++)
				c[k] = a[i];
		}

		for (int i = p; i <= r; i++)
			a[i] = c[i - p];
	}

}
```
