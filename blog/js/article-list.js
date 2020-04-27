$(function() {
	
	var article = new Vue({
		el: '#bloger',
		data: {
			showType: false
		},
		methods: {
			showArticleType: function() {
				this.showType = !this.showType;
			}
		}
	})
	
})