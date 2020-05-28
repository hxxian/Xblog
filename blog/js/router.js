var DEBUG = false;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "http://47.107.141.186:8080/xbloger/";

/**
 * 加载归档页数据
 */
function loadArchiveData() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'article/archives',
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				},
				404: function() {
					reject()
				}
			}
		})
	})
}

/**
 * 加载首页数据
 */
function loadHomeData() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'home/',
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				},
				404: function() {
					reject()
				}
			}
		})
	})
}

/**
 * 查看文章详情
 * 
 * @param {Object} aid
 */
function loadArticleById(aid) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'article/info/' + aid,
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				}
			}
		})
	})
}

/**
 * 查询文章分类
 */
function loadArticleTypes() {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: basePath + 'article/type/list',
			type: 'get',
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				}
			}
		})
	})
}

/**
 * 查询指定文章类型ID的文章标题列表
 * 
 * @param {Object} typeId
 * @param {Object} page
 */
function loadArticleTitlesByTypeId(typeId, page) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'article/page/' + page,
			type: 'get',
			data: {
				typeId, typeId
			},
			dataType: 'json',
			statusCode: {
				200: function(data) {
					resolve(data)
				}
			}
		})
	})
}