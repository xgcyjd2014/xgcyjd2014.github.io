---
layout: base
title: 首页
---

<!-- 首页内容 -->
<h1>这是首页内容</h1>

<ul id="post-list">
	{% for post in site.posts %}
		{% if count <= 12 %}
		<li>
			<a href="javascript:;">
				<img src="" alt="">
			</a>
		</li>
		{% endif %}
	{% endfor %}
</ul>
