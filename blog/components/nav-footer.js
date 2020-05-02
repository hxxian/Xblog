$(function() {
	Vue.component('nav-footer', {
		data: function() {
			return {}
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
	'		<p>©2020-xxxx xxxx备 xxxxxxxxx号 公网安备 xxxxxxxxxx号</p> ' +
	'	</div> ' +
	'</div> ';