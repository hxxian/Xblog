$(function() {
	
	var articleId = getQueryVariable('articleId');
	
	var vue = new Vue({
		el: '#bloger',
		data: {
			aMonth: 0,
			aDay: 0,
			publishDate: "",
			typeName: "",
			articleTitle: "",
			articleContent: "",
			readCount: 0,
			showType: false,
			closeTypeTag: 0,
			replyShow: false,
			readyReply: false,
			replyBtnText: "回复",
			nickname: '',
			website: '',
			email: '',
			commentContent: '',
			currCommentId: 0,
			commentSessions: [],
			mouseEnterCommentId: 0,
			currSelectCommentId: 0,
			replyShow: false,
			readyReply: false,
			replyBtnText: "回复"
		},
		methods: {
			loadArticle: function() {
				layer.load(0, {shade: false});
				if (!articleId) {
					articleId = 11;
				}
				loadArticleById(articleId).then((data) => {
					this.typeName = data.typeName;
					this.articleTitle = data.title;
					this.articleContent = data.content;
					this.readCount = data.readCount;
					let times = formatDate(data.publishTimestamp);
					if (times) {
						this.aMonth = appendZero(times[1]);
						this.aDay = appendZero(times[2]);
						this.publishDate = times[0] + "-" + appendZero(times[1]) + "-" + appendZero(times[2]);
					}
					layer.closeAll('loading');
					
					document.title = data.title;
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
			itemMouseEnter: function(commentId) {
				this.mouseEnterCommentId = commentId;
			},
			itemMouseLeave: function(commentId) {
				this.mouseEnterCommentId = 0;
			},
			showReplyBox: function(commentId) {
				if (this.readyReply) {
					this.currSelectCommentId = 0;
					this.hideReplyBox();
					return;
				}
				this.currSelectCommentId = commentId;
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
			},
			submitComment: function () {
				let data = {
					articleId: articleId,
					replyCommentId: this.currCommentId,
					nickname: this.nickname,
					email: this.email,
					website: this.website,
					content: this.commentContent
				}

				addComment(data).then(res => {
					// 发表评论成功
					if (res) {
						console.log(res)
					}
				})
			},
			loadComments: function () {
				loadComments(articleId).then(res => {
					console.log(res);
					if (res) {
						this.commentSessions = res.data;
					}
				})
			}
		}
	})
	
	vue.loadArticle();
	vue.loadComments();
})