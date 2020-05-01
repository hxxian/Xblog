$(function() {

	var archive = new Vue({
		el: '#bloger',
		data: {
			weeks: []
		},
		methods: {

		}
	})

	archive.weeks = getWeeksOfYear();

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
