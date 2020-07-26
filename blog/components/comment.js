$(function () {
    var articleId = getQueryVariable('articleId');
    Vue.component('comment', {
        data: function () {
            return {
                nickname: '',
                website: '',
                email: '',
                commentContent: '',
                currCommentId: 0,
                commentSessions: [],
                mouseEnterCommentId: 0,
                currSelectCommentId: 0,
                replyNickname: '',
                replyEmail: '',
                replyWebsite: '',
                replyContent: ''
            }
        },
        methods: {
            itemMouseEnter: function (commentId) {
                this.mouseEnterCommentId = commentId;
            },
            itemMouseLeave: function (commentId) {
                this.mouseEnterCommentId = 0;
            },
            showReplyBox: function (commentId) {
                this.currSelectCommentId = commentId;
                $(".bottom-send-box").removeClass("top-leave");
                $(".bottom-send-box").addClass("bottom-enter");
            },
            hideReplyBox: function () {
                this.currSelectCommentId = 0;

                $(".bottom-send-box").removeClass("bottom-enter");
                $(".bottom-send-box").addClass("top-leave");
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
                        this.getComments();
                    }
                })
            },
            replyComment: function () {
                let data = {
                    articleId: articleId,
                    replyCommentId: this.currSelectCommentId,
                    nickname: this.replyNickname,
                    email: this.replyEmail,
                    website: this.replyWebsite,
                    content: this.replyContent
                }

                addComment(data).then(res => {
                    // 发表评论成功
                    if (res) {
                        // TODO 重新加载回复列表
                        $(".bottom-send-box").removeClass("bottom-enter");
                        $(".bottom-send-box").addClass("top-leave");
                        this.getComments();
                    }
                })
            },
            getComments: function () {
                if (!articleId) {
                    articleId = 0;
                }
                loadComments(articleId).then(res => {
                    if (res) {
                        this.commentSessions = res.data;
                    }
                })
            }
        },
        mounted() {
            window.getComments = this.getComments;
        },
        template: commentHtml
    })

})

var commentHtml =
    `
            <div class="comment-container">
                <!-- 填写评论信息 -->
                <div class="comment-send-box col-lg-12">
                    <div class="comment-inputs">
                        <div class="flex-row content-between">
                            <input class="form-control" v-model="nickname" placeholder="*昵称"/>
                            <input class="form-control" v-model="email" placeholder="*电子邮件"/>
                            <input class="form-control" v-model="website" placeholder="个人站点"/>
                        </div>
                        <textarea v-model="commentContent" class="form-control col-lg-12" rows="4"
                                  placeholder="*如有疑问或者建议,欢迎你的留言哦~博主会通过你留下的邮件回复你哦!如果你有个人站点,可以留下互相友情链接哦!"></textarea>
                        <div class="submit-box">
                            <button @click="submitComment()" class="btn btn-default">提交</button>
                        </div>
                    </div>
                </div>

                <!-- 评论 -->
                <div class="comment-list-box col-lg-12" id="comment">
                    <div class="empty-comment">
                        <span v-if="!commentSessions">暂无评论~</span>
                    </div>
                    <div class="comments-session" v-for="s in commentSessions">
                        <div class="comment-item" v-for="(c, idx) in s.comments" @mouseenter="itemMouseEnter(c.commentId)" @mouseleave="itemMouseLeave(0)">
                            <img :src="c.avatarUrl ? c.avatarUrl : 'img/me.jpg'" />
                            <div class="link-line" v-if="idx < s.comments.length - 1">

                            </div>

                            <div class="reply-btn-box" @click="showReplyBox(c.commentId)">
                                <span class="item-reply-btn reply-btn">回复</span>
                            </div>

                            <div class="comment-infos">
                                <p class="nickname">{{c.nickname}}</p>
                                <p class="time">{{c.gmtCreate}}&nbsp;&nbsp;&nbsp;&nbsp;#{{c.commentId}}</p>
                                <p class="content">{{c.content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 底部弹出评论 -->
            <div class="bottom-send-box">
                <div class="comment-container">
                    <div class="comment-send-box col-lg-12">
<!--                        <img src="img/me.jpg"/>-->
                        <div class="comment-inputs">
                            <div class="flex-row content-between">
                                <input v-model="replyNickname" class="form-control" placeholder="*昵称"/>
                                <input v-model="replyEmail" class="form-control" placeholder="*电子邮件"/>
                                <input v-model="replyWebsite" class="form-control" placeholder="个人站点"/>
                            </div>
                            <textarea v-model="replyContent" class="form-control col-lg-12" rows="4" placeholder="*撰写评论..."></textarea>
    
                            <div class="submit-box">
                                <button class="btn btn-default cancel-reply" @click="hideReplyBox()">取消回复</button>
                                <button class="btn btn-default" @click="replyComment()">回复</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            

    `;