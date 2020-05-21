// import nav - menu from '../components/nav-menu'


$(function() {
	
	navTopHideAndScrollShow();
	
})

function navTopHideAndScrollShow() {
	$(window).scroll(function() {
		let scrollPos = $(window).scrollTop();
		if (scrollPos > 0) {
			$(".nav-top").removeClass("none");
			$(".nav-top").removeClass("nav-top-hide");
			$(".nav-top").addClass("nav-top-show");
			
			scrollShow($(".back-top-box"));
			scrollShow($("back-top-img"));
		} else {
			$(".nav-top").removeClass("nav-top-show");
			$(".nav-top").addClass("nav-top-hide");
			
			scrollHide($(".back-top-box"));
			scrollHide($(".back-top-img"));
		}
	});
}

function scrollShow(el) {
	el.removeClass("none");
	el.removeClass("fade-hide");
	el.addClass("fade-show");
}

function scrollHide(el) {
	el.removeClass("fade-show");
	el.addClass("fade-hide");
}

/**
 * 毫秒时间戳转
 * 
 * @param {Object} timestemp
 */
function formatDate(timestemp) { 
	let date = new Date(timestemp);
    let y = date.getFullYear();
    let M = date.getMonth() + 1; // 注意js里的月要加1 
    let d = date.getDate();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds();
    
	let arr = new Array(y, M, d, h, m, s);
    return arr; 
} 

/**
 * 获取url路径中指定参数的值
 * 
 * @param {Object} variable
 */
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}