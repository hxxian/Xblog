$(function() {
	
	var aboutVue = new Vue({
		el: '#bloger',
		data: {
			diaryContent: "博主比较懒，什么都没有留下...",
			diaryDate: ''
		},
		methods: {
			loadData: function () {
				getLatestDiary().then((res) => {
					console.log(res);

					this.diaryContent = res.data.content;
					let diaryTime = res.data.timestamp;
					let date = formatDate(diaryTime);
					this.diaryDate = date[0] + '年' + appendZero(date[1]) + '月' + appendZero(date[2]) + '日';

					console.log(this.diaryContent)
					console.log(this.diaryDate)
				})
			}
		}
	})

	aboutVue.loadData();
	getComments();

})