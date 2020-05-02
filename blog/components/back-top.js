$(function() {
	Vue.component('back-top', {
		data: function() {
			return {}
		},
		methods: {
			toTop: function() {
				window.scrollTo(0,0);
			}
		},
		template: backTop
	})
})

var backTop = 
	'<div @click="toTop()" class="back-top-box" title="返回顶部"> ' +
	'	<img src="img/back-top.png">' +
	'</div>';