$(function() {
	
	var mainVue = new Vue({
		el: '#bloger',
		data: {
			diaryContent: "博主比较懒，什么都没有留下...",
			articles: [],
			titles: []
		},
		methods: {
			loadData: function() {
				loadHomeData().then(data => {
					this.diaryContent = data.diaryContent;
					this.articles = data.articles;
					this.titles = data.articleTitles;
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
			}
		}
	})
	
	mainVue.loadData();

})