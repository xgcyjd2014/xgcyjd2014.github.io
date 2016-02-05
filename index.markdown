---
layout: base
title: 首页
---
<!-- 平铺大背景轮播 -->
<nav>
		
</nav>
<!-- 首页内容 -->

<section class="clearfix">
	<!-- 不用在html 中添加li 每发表一篇博文就会自动添加一个li -->
	<ul id="post-list" >
	{% for post in site.posts %}
		{% assign count=count | plus:1 %}
		{% assign num = 12 %}
		{% if count <= num %}
		<li class="post-list-li">
			<div class="post-tag">
			<!-- post.id /Y/M/D/name -->
			{% assign paths = post.id | split: '/' %}
			 	<!-- tagpic要给对，图片裁切成 280*250 -->
			 	<!-- tagpic（带后缀名） -->
				<a href="{{ post.url }}" target="_blank">
					<img src="/assets/img/index/post-list-imgs/{{ post.tagpic }}" alt="{{ paths[4] }}">
				</a>
			</div>
			<div class="line"></div>
			<div class="post-tag-description">
				<h1 class="post-tag-title">
					<!-- 不同tag类型使用不同颜色 -->
					{% if post.tag == "css" %}
						<a class="css-title" href="{{ post.url }}" target="_blank">{{ post.title }}</a>
					{% endif %}
					{% if post.tag == "html" %}
						<a class="html-title" href="{{ post.url }}" target="_blank">{{ post.title }}</a>
					{% endif %} 
					{% if post.tag == "other"%}
						<a class="other-title" href="{{ post.url }}" target="_blank">{{ post.title }}</a>
					{% endif %}
				</h1>
				<h2 class="post-tag-author-date">
					<span class="remark"><a href="javascript:;" target="_blank">{{ post.author }}</a> 发布于{{ post.date | %Y%M | date_to_string }}</span>
				</h2>
				<div class="post-tag-short-line"></div>
				<p>{{ post.description }}</p>
			</div>
		</li>
		{% endif %}
	{% endfor %}
	</ul>
	<section id="page-sidebar">
	<!-- 分类列表 点击获得所有的相关博文 -->
		<ul id="classify-list" >
			{{ site.postes }}
				<li class="classify-lis">
					<a href="javascript:;">{{ post.tag }}</a>
				</li>
		</ul>
		<div class="line"></div>
		<div id="base-Quick-Response">
			<div class="base-Quick-img"></div>
		</div>
	</section>
</section>
