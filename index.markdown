---
layout: base
title: 首页
---
<!-- 基地介绍 -->
<nav class="introduce">
	<h1 class="introduce-title">博文聚合</h1>
	<h1 class="introduce-title-en">Article Aggregate</h1>
</nav>
<!-- 首页内容 -->

<section class="index-box clearfix">
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

<section id="map">
	<div id="allmap"></div>
	<div id="mark-map"></div>
	<canvas id="path-text" width="600" height="200"></canvas>
	<canvas id="content-us"></canvas>
	<div id="map-content">
		<ul id="map-content-list">
			<li>
				<a href="https://github.com/xgcyjd2014" target="_blank">
					<i class="fa fa-github"></i>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<i class="fa fa-envelope-o"></i>
				</a>
				<div class="directions">hdxgcyjd1314@163.com</div>
			</li>
			<li>
				<a href="javascript:;">
					<i class="fa fa-phone"></i>
				</a>
				<!-- <div class="directions"></div> -->
			</li>
		</ul>
	</div>
</section>


<script src="/assets/js/easeljs-0.8.2.min.js"></script>
<script src="/assets/js/EasePack.min.js"></script>
<script src="/assets/js/TweenLite.min.js"></script>
<script src="/assets/js/requestAnimationFrame.js"></script>
<script src="/assets/js/text-pixel.js"></script>
