$(function() {
	Vue.component('nav-menu', {
		data: function() {
			return {
				menus: [{
						menuName: "首页",
						linkPage: "index.html"
					},
					{
						menuName: "文章",
						linkPage: "article-list.html"
					},
					{
						menuName: "博客动态",
						linkPage: "archive.html"
					},
					{
						menuName: "关于我",
						linkPage: "about-me.html"
					}
				],
				currentIdx: -1
			}
		},
		methods: {
			gotoPage: function(idx) {
				if (this.menus[idx] && this.menus[idx].linkPage) {
					window.location.href = "./" + this.menus[idx].linkPage
				}
			},
			menuItemMouseIn: function(idx) {
				this.currentIdx = idx;
			},
			menuItemMouseLeave: function(idx) {
				this.currentIdx = -1;
			}
		},
		template: html
	})
})

var html =
	'<div class="nav-top none">' +
	'	<img src="img/logo2.jpg" class="logo-img" />' +
	'	<div class="menu">' +
	'		<div v-for="(m, idx) in menus" class="menu-item" @click="gotoPage(idx)" @mouseenter="menuItemMouseIn(idx)" @mouseleave="menuItemMouseLeave(idx)">' +
	'			<span>{{m.menuName}}</span>' +
	'			<span class="menu-item-line" v-bind:class="{\'menu-item-line-show\': idx == currentIdx}"></span>' +
	'		</div>' +
	'	</div>' +
	'</div>';

