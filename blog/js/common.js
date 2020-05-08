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