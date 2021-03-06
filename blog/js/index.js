$(function() {
	
	var mainVue = new Vue({
		el: '#bloger',
		data: {
			diaryContent: "博主比较懒，什么都没有留下...",
			diaryDate: '',
			articles: [],
			titles: [],
			articleTypes: []
		},
		methods: {
			loadData: function() {
				loadHomeData().then(data => {
					console.log(data)
					let diaryTime = data.diaryTimestamp;
					let date = formatDate(diaryTime);
					this.diaryDate = date[0] + '年' + appendZero(date[1]) + '月' + appendZero(date[2]) + '日'
					this.diaryContent = data.diaryContent;
					this.articles = data.articles;
					this.titles = data.articleTitles;
					this.articleTypes = data.articleTypes;
					// console.log(this.titles)
					for (let i = 0; i < this.articles.length; i++) {
						let times = formatDate(this.articles[i].publishTimestamp)
						this.articles[i]['formatTime'] = times[1] + '月 ' + times[2] + ', ' + times[0]; 
					}
					
					for (var i = 0; i < this.titles.length; i++) {
						let times = formatDate(this.titles[i].publishTime)
						this.titles[i]['formatTime'] = times[0] + '/' + times[1] + '/' + times[2]; 
					}
				})
			},
			gotoArticleDetail: function(articleId) {
				window.location.href = "./article.html?articleId=" + articleId;
			},
			gotoArticleList: function (typeId, typeName) {
				window.location.href = "./article-list.html?typeId=" + typeId + "&typeName=" + encodeURI(typeName);
			}
		}
	})
	
	mainVue.loadData();

})