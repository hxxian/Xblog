$(function() {
	
	var comment = new Vue({
		el: '#bloger',
		data: {
			replyShow: false,
		},
		methods: {
			itemMouseEnter: function(idx) {
				this.replyShow = true;
				console.log("=======")
			},
			itemMouseLeave: function(idx) {
				this.replyShow = false;
				console.log("-------")
			}
		}
	})
	
})