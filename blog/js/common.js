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
		} else {
			$(".nav-top").removeClass("nav-top-show");
			$(".nav-top").addClass("nav-top-hide");
		}
	});
}
