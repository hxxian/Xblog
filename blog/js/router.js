var DEBUG = false;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "https://www.hxxian.cn:448/xbloger/";

/**
 * 加载博客活动动态数据
 *
 * @returns {Promise<unknown>}
 */
function loadContribution() {
	return getJson('contribution/list', {})
}

/**
 * 加载归档页数据
 */
function loadArchiveData() {
	return getJson('article/archives', {});
}

/**
 * 加载首页数据
 */
function loadHomeData() {
	return getJson('home/', {});
}

/**
 * 查看文章详情
 * 
 * @param {Object} aid
 */
function loadArticleById(aid) {
	return getJson('article/info/' + aid, {});
}

/**
 * 查询文章分类
 */
function loadArticleTypes() {
	return getJson('article/type/list', {});
}

/**
 * 查询指定文章类型ID的文章标题列表
 * 
 * @param {Object} typeId
 * @param {Object} page
 */
function loadArticleTitlesByTypeId(typeId, page) {
	let data = {
			typeId, typeId
		}
	return getJson('article/page/' + page, data);
}

function getJson(url, data) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + url,
			type: 'get',
			dataType: 'json',
			data: data,
			statusCode: {
				200: function(res) {
					resolve(res);
				},
				404: function() {
					resolve(false);
				}
			}
		})
	});
}