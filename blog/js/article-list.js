$(function() {
	
	var article = new Vue({
		el: '#bloger',
		data: {
			showType: false,
			closeTypeTag: 0
		},
		methods: {
			showArticleType: function() {
				this.showType = !this.showType;
				if (!this.showType) {
					this.closeTypeTag = 1;
				} else {
					this.closeTypeTag = 2;
				}
			},
			gotoArticle: function() {
				window.location.href = "./article.html";
			}
		}
	})
	
})