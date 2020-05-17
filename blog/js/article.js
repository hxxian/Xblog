$(function() {
	
	var vue = new Vue({
		el: '#bloger',
		data: {
			articleTitle: "",
			articleContent: "",
			showType: false,
			closeTypeTag: 0,
			replyShow: false,
			readyReply: false,
			replyBtnText: "回复"
		},
		methods: {
			loadArticle: function() {
				let that = this;
				loadArticleById(6).then((data) => {
					that.articleTitle = data.title;
					that.articleContent = data.content;
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
			itemMouseEnter: function(idx) {
				this.replyShow = true;
			},
			itemMouseLeave: function(idx) {
				this.replyShow = false;
			},
			showReplyBox: function() {
				if (this.readyReply) {
					this.hideReplyBox();
					return;
				}
				this.readyReply = true;
				this.replyBtnText = "取消回复";
				$(".bottom-send-box").removeClass("top-leave");
				$(".bottom-send-box").addClass("bottom-enter");
				
				$(".item-reply-btn").removeClass("reply-btn");
				$(".item-reply-btn").addClass("cancel-reply");
			},
			hideReplyBox: function() {
				this.readyReply = false;
				this.replyBtnText = "回复";
				$(".bottom-send-box").removeClass("bottom-enter");
				$(".bottom-send-box").addClass("top-leave");
				
				$(".item-reply-btn").removeClass("cancel-reply");
				$(".item-reply-btn").addClass("reply-btn");
			}
		}
	})
	
	vue.loadArticle();
})