$(function() {
	// var strPath = window.document.location.pathname;
	// var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
	// var url = "http://" + window.location.host + postPath + "/";
	Vue.component('nav-footer', {
		data: function() {
			return {}
		},
		methods: {
			gotoGWBeian: function() {
					window.open("http://www.beian.gov.cn/portal/registerSystemInfo")
			},
			gotoICPSystem: function() {
				// window.location.href = "http://www.beian.miit.gov.cn/publish/query/indexFirst.action";
				window.open("http://www.beian.miit.gov.cn");
			},
			gotoContact: function(type) {
				// 1 - github, 2 - csdn, 3 - wehcat, 4 - QQ, 5 - email
				if (type == 1) {
					window.open("https://github.com/hxxian");
				} else if (type == 2) {
					window.open("https://me.csdn.net/h_xiao_x");
				} else if (type == 3) {
					layer.photos({
						photos: wxqrcode,
						anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机
					});
				} else if (type == 4) {
					layer.photos({
						photos: qqQrcode,
						anim: 0 //0-6的选择，指定弹出图片动画类型，默认随机
					});
				}
				else if (type == 5) {
					layer.tips('363756222@qq.com', '#me-email', {
						tips: [1, '#0FA6D8']
					});
				}
			}
		},
		template: footer
	})
})

var footer =
	'<div class="nav-footer"> ' +
	'	<div class="link-container"> ' +
	'		<div class="qrcode"> ' +
	'			<img src="img/qrcode.jpg"> ' +
	'			<span>关注微信公众号</span> ' +
	'		</div> ' +
	'		<div class="nav-contact-box"> ' +
	'			<div @click="gotoContact(1)" title="跳转博主GitHub主页" class="nav-contact-item"> ' +
	'				<img src="img/github.png"> ' +
	'			</div> ' +
	'			<div @click="gotoContact(2)" title="跳转博主CSDN主页" class="nav-contact-item"> ' +
	'				<img src="img/csdn.png"> ' +
	'			</div> ' +
	'			<div @click="gotoContact(3)" class="nav-contact-item"> ' +
	'				<img src="img/wechat.png"> ' +
	'			</div> ' +
	'			<div @click="gotoContact(4)" class="nav-contact-item"> ' +
	'				<img src="img/QQ.png"> ' +
	'			</div> ' +
	'			<div @click="gotoContact(5)" title="Email" id="me-email" class="nav-contact-item"> ' +
	'				<img src="img/email.png"> ' +
	'			</div> ' +
	'		</div> ' +
	'	</div> ' +
	'	<div class="record-info flex-row content-center"> ' +
	'		©2020-浮晓悠羡&nbsp;&nbsp;&nbsp;<span class="icp" @click="gotoICPSystem()">粤ICP备&nbsp;20036399号</span> ' +
	'		<img src="img/beian_icon.png"/><span class="icp" @click="gotoGWBeian()">粤公网安备 44010602008182号</span>' +
	'	</div> ' +
	'</div> ';
// <img src="img/beian_icon.png"/>粤公网安备 44010602008182号
var wxqrcode = {
	"title": "微信二维码", 
	"id": 1, 
	"start": 0, 
	"data": [ 
		{
			"alt": "加微信申请要备注一下哦",
			"pid": 1, //图片id
			"src": "https://www.hxxian.cn/static/bloger/image/wechat_qrcode.jpg", //原图地址
			"thumb": "https://www.hxxian.cn/static/bloger/image/wechat_qrcode_thumb.jpg" //缩略图地址
		}
	]
}

var qqQrcode = {
	"title": "QQ二维码", 
	"id": 2, 
	"start": 0, 
	"data": [ 
		{
			"alt": "加QQ申请要备注一下哦",
			"pid": 1, //图片id
			"src": "https://www.hxxian.cn/static/bloger/image/qq_qrcode.jpg", //原图地址
			"thumb": "https://www.hxxian.cn/static/bloger/image/qq_qrcode_thumb.jpg" //缩略图地址
		}
	]
}
