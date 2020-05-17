$(function() {
	
	var typeId = getQueryVariable('typeId');
	
	var vue = new Vue({
		el: '#bloger',
		data: {
			currTypeName: '所有文章',
			typeList: [],
			titleList: [],
			showType: false,
			closeTypeTag: 0
		},
		methods: {
			loadArticleType: function() {
				loadArticleTypes().then((data) => {
					this.typeList = data;
				})
			},
			loadArticleTitle: function() {
				let tid = typeId ? typeId : 0;
				loadArticleTitlesByTypeId(tid, 1).then((data) => {
					this.titleList = data;
				});
			},
			showArticleType: function() {
				this.showType = !this.showType;
				if (!this.showType) {
					this.closeTypeTag = 1;
				} else {
					this.closeTypeTag = 2;
				}
			},
			gotoArticle: function(articleId) {
				window.location.href = "./article.html?articleId=" + articleId;
			}
		}
	})
	
	vue.loadArticleTitle();
	vue.loadArticleType();
	
})