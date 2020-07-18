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
							// this.archiveGroups[i].dateGroup = date[0] + "年" + date[1] + "月";
							this.archiveGroups[i].dateGroup = date[0];
							this.archiveGroups[i].dateMonth = appendZero(date[1]);
							for (let j = 0; j < this.archiveGroups[i].articleTitles.length; j++) {
								let dateArr = formatDate(this.archiveGroups[i].articleTitles[j].publishTime);
								
								this.archiveGroups[i].articleTitles[j].publishTime 
								= appendZero(dateArr[1]) + "-" + appendZero(dateArr[2]);
							}
						}
					}
				});

				loadContribution().then(res => {
					let weeks = res.data.weeks;
					for (let i = 0; i < weeks.length; i++) {
						for (let j = 0; j < weeks[i].daysOfWeek.length; j++) {
							let core = weeks[i].daysOfWeek[j].core;
							weeks[i].daysOfWeek[j].bgColor = getBackgroundColor(core);

							let dayArr = formatDate(weeks[i].daysOfWeek[j].timestamp);

							weeks[i].daysOfWeek[j].title = weeks[i].daysOfWeek[j].contributeCount
								+ ' activity on ' + dayArr[2] + ", " + dayArr[1] + ", " + dayArr[0];
						}
					}
					this.weeks = weeks;
				})
			},
			showDayItemInfo: function(id) {
			},
			hideDayItemInfo: function() {
			},
			gotoArticleDetail: function(aid) {
				window.location.href = "./article.html?articleId=" + aid;
			}
		}
	})

	archive.loadData();
})

function getBackgroundColor(core) {
	if (core <=0 ) {
	    return '#ffffff';
	} else if (core <= 25) {
	    return '#c6e48b';
	} else if (core <= 50) {
		return '#7bc96f';
	} else if (core <= 75) {
		return '#239a3b';
	} else {
		return '#196127';
	}
}
