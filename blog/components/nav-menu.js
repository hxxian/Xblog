$(function() {
	Vue.component('nav-menu', {
		data: function() {
			return {
				menus: [
					{
						menuName: "首页"
					},
					{
						menuName: "文章"
					},
					{
						menuName: "博客动态"
					},
					{
						menuName: "关于我"
					}
				]
			}
		},
		methods: {
			menuItemMouseIn: function() {
				$(".menu-item-line").addClass("menu-item-line-show");
			},
			menuItemMouseLeave: function() {
				$(".menu-item-line").removeClass("menu-item-line-show");
			}
		},
		template: html
	})
})

var html =
	'<div class="nav-top none">' +
	'	<img src="img/blog-logo.png" class="logo-img" />' +
	'	<div class="menu">' +
	'		<div v-for="(m, idx) in menus" class="menu-item" @mouseenter="menuItemMouseIn()" @mouseleave="menuItemMouseLeave()">' +
	'			<span>{{m.menuName}}</span>' +
	'			<span class="menu-item-line"></span>' +
	'		</div>' +
	'	</div>' +
	'</div>';
