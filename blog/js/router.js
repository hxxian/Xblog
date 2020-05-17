var DEBUG = true;
var basePath = DEBUG ? "http://127.0.0.1:8181/" : "";

/**
 * 查看文章详情
 * 
 * @param {Object} aid
 */
function loadArticleById(aid) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: basePath + 'admin/article/info/' + aid,
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