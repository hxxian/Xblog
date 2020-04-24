$(function() {
	Vue.component('nav-menu', {
		data: function() {
			return {}
		},
		template: html
	})
	// new Vue({
	// 	el: '#bloger'
	// })
})

var html =
	'<div class="nav-top none">' +
	'	<img src="img/blog-logo.png" class="logo-img" />' +
	'	<div class="menu">' +
	'		<div class="menu-item">' +
	'			<span>首页</span>' +
	'			<span class="selected"></span>' +
	'		</div>' +
	'		<div class="menu-item">' +
	'			<span>文章</span>' +
	'			<span class="selected"></span>' +
	'		</div>' +
	'		<div class="menu-item">' +
	'			<span>博客动态</span>' +
	'			<span class="selected"></span>' +
	'		</div>' +
	'		<div class="menu-item">' +
	'			<span>关于我</span>' +
	'			<span class="selected"></span>' +
	'		</div>' +
	'	</div>' +
	'</div>';
