$(function() {
	Vue.component('nav-footer', {
		data: function() {
			return {}
		},
		methods: {
			gotoICPSystem: function() {
				// window.location.href = "http://www.beian.miit.gov.cn/publish/query/indexFirst.action";
				window.location.href = "http://www.beian.miit.gov.cn";
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
	'			<div class="nav-contact-item"> ' +
	'				<img src="img/github.png"> ' +
	'			</div> ' +
	'			<div class="nav-contact-item"> ' +
	'				<img src="img/csdn.png"> ' +
	'			</div> ' +
	'			<div class="nav-contact-item"> ' +
	'				<img src="img/wechat.png"> ' +
	'			</div> ' +
	'			<div class="nav-contact-item"> ' +
	'				<img src="img/QQ.png"> ' +
	'			</div> ' +
	'			<div class="nav-contact-item"> ' +
	'				<img src="img/email.png"> ' +
	'			</div> ' +
	'		</div> ' +
	'	</div> ' +
	'	<div class="record-info flex-row content-center"> ' +
	'		©2020-浮晓悠羡&nbsp;&nbsp;&nbsp;<span class="icp" @click="gotoICPSystem()">粤ICP备&nbsp;20036399号</span> <img src="img/beian_icon.png"/>公网安备 xxxxxxxxxx号 ' +
	'	</div> ' +
	'</div> ';