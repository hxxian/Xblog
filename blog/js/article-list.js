$(function () {

    var typeId = getQueryVariable('typeId');
    let typeName = decodeURI(getQueryVariable('typeName'))

    var vue = new Vue({
        el: '#bloger',
        data: {
            currTypeName: '所有文章',
            typeList: [],
            titleList: [],
            showType: false,
            closeTypeTag: 0
        },
        methods: {
            loadArticleType: function () {
                loadArticleTypes().then((data) => {
                    this.typeList = data;
                })
            },
            loadArticleTitle: function () {
                let tid = typeId ? typeId : 0;
                if (typeName && typeName != 'false') {
                    this.currTypeName = typeName;
                }
                loadArticleTitlesByTypeId(tid, 1).then((data) => {
                    this.titleList = data;
                });
            },
            getTitlesForType: function (typeName, typeId) {
                loadArticleTitlesByTypeId(typeId, 1).then((data) => {
                    this.titleList = data;
                    this.currTypeName = typeName;
                    // this.$forceUpdate();
                })
            },
            showArticleType: function () {
                this.showType = !this.showType;
                if (!this.showType) {
                    this.closeTypeTag = 1;
                } else {
                    this.closeTypeTag = 2;
                }
            },
            gotoArticle: function (articleId) {
                window.location.href = "./article.html?articleId=" + articleId;
            }
        }
    })

    vue.loadArticleTitle();
    vue.loadArticleType();

})