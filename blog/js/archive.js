$(function() {

	var archive = new Vue({
		el: '#bloger',
		data: {
			weeks: [],
			archiveGroups: []
		},
		methods: {
			loadData: function() {
				loadArchiveData().then((data) => {
					this.archiveGroups = data;
					if (this.archiveGroups) {
						for (let i = 0; i < this.archiveGroups.length; i++) {
							let date = this.archiveGroups[i].dateGroup.split('-')
							this.archiveGroups[i].dateGroup = date[0] + "年" + date[1] + "月";
							for (let j = 0; j < this.archiveGroups[i].articleTitles.length; j++) {
								let dateArr = formatDate(this.archiveGroups[i].articleTitles[j].publishTime);
								
								this.archiveGroups[i].articleTitles[j].publishTime 
								= appendZero(dateArr[1]) + "-" + appendZero(dateArr[2]);
							}
						}
					}
				})
			},
			gotoArticleDetail: function(aid) {
				window.location.href = "./article.html?articleId=" + aid;
			}
		}
	})

	archive.weeks = getWeeksOfYear();
	archive.loadData();
})

function getWeeksOfYear() {
	let obj = {
		'date': '2020-05-01',
		'content': 'test op'
	}
	let weeks = [];
	for (var i = 0; i < 52; i++) {
		weeks[i] = obj;
	}
	return weeks;
}
