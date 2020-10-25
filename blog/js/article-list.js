$(function() {

	var typeId = getQueryVariable('typeId');
	let typeName = decodeURI(getQueryVariable('typeName'))

	var vue = new Vue({
		el: '#bloger',
		data: {
			currTypeName: '所有文章',
			currTypeId: typeId ? typeId : 0,
			typeList: [],
			titleList: [],
			showType: false,
			closeTypeTag: 0,
			currPage: 1,
			minPage: 1,
			maxPage: 999
		},
		methods: {
			loadArticleType: function() {
				loadArticleTypes().then((data) => {
					this.typeList = data;
					this.typeList.inser
				})
			},
			loadArticleTitle: function() {
				console.log(this.currTypeId);
				
				if (typeName && typeName != 'false') {
					this.currTypeName = typeName;
				}
				loadArticleTitlesByTypeId(this.currTypeId, this.currPage).then((data) => {
					if (data) {
						this.titleList = data;
						return;
					}
					this.maxPage = this.currPage - 1;
				});
			},
			getTitlesForType: function(typeName, typeId) {
				this.currPage = this.minPage;
				this.maxPage = 999;
				
				loadArticleTitlesByTypeId(typeId, this.currPage).then((data) => {
					this.titleList = data;
					this.currTypeName = typeName;
					this.currTypeId = typeId;
				})
			},
			showArticleType: function() {
				this.showType = !this.showType;
				if (!this.showType) {
					this.closeTypeTag = 1;
				} else {
					this.closeTypeTag = 2;
				}
			},
			prePage: function() {
				this.currPage--;
				if (this.currPage < this.minPage) {
					this.currPage = this.minPage;
					return;
				}
				if (this.currPage <= 0) {
					this.currPage = this.minPage;
				}
				this.loadArticleTitle();
			},

			nextPage: function() {
				this.currPage++;
				if (this.currPage > this.maxPage) {
					this.currPage = this.maxPage;
					return;
				}

				this.loadArticleTitle();
			},
			gotoArticle: function(articleId) {
				window.location.href = "./article.html?articleId=" + articleId;
			}
		}
	})

	vue.loadArticleTitle();
	vue.loadArticleType();

})
