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
					<a class="{{ post.category }}-title" href="{{ post.url }}" target="_blank">{{ post.title }}</a>
				</h1>
				<h2 class="post-tag-author-date">
					<span class="remark"><a href="javascript:;" class='{{ post.author }}' target="_blank">{{ post.author }}</a> 发布于{{ post.date | %Y%M | date_to_string }}</span>
				</h2>
				<div class="post-tag-short-line"></div>
				<p>{{ post.description }}</p>
			</div>
		</li>
		{% endif %}
	{% endfor %}
	</ul>
	<section id="page-sidebar">	
		<h1 class="classify-list-title">分类标签</h1>
		<h1 class="classify-list-title-en">Tags Of Posts-List</h1>
		<!-- 分类列表 点击获得所有的相关博文 -->
		<ul id="classify-list" >
			<li class="classify-lis clearfix">
				<a href="javascript:;" target="_blank">全部</a>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</li>
			{% for category in site.categories %}
			<li class="classify-lis clearfix">
				<a href="javascript:;" target="_blank">{{ category[0] }}</a>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</li>	
			{% endfor %}
		</ul>
		<div class="line"></div>
		<div id="base-Quick-Response">
			<div class="base-Quick-img"></div>
		</div>
		<h1>扫一扫微信公众号码，获知更多IT知识</h1>
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
					<div class="directions">hdxgcyjd1314@163.com</div>
				</a>
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