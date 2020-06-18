$(function ($) {
    Vue.component('float-nav-menu', {
        data: function () {
            return {}
        },
        template: floatMenu
    })

})

var floatMenu =
    '<div class="radius-menu">' +
    '    <nav id="gooey-v">' +
    '       <input type="checkbox" class="menu-open" name="menu-open4" id="menu-open4"/>' +
    '       <label class="open-button" for="menu-open4">' +
    '               <span class="burger burger-1"></span>' +
    '               <span class="burger burger-2"></span>' +
    '               <span class="burger burger-3"></span>' +
    '           </label>' +
    '           <a href="index.html" title="首页" class="gooey-menu-item"><span class="glyphicon glyphicon-home"></span> </a>' +
    '           <a href="article-list.html" title="文章" class="gooey-menu-item"><span class="glyphicon glyphicon-list-alt"></span> </a>' +
    '           <a href="archive.html" title="归档" class="gooey-menu-item"><span class="glyphicon glyphicon-tasks"></span> </a>' +
    '           <a href="about-me.html" title="关于我" class="gooey-menu-item"><span class="glyphicon glyphicon-user"></span> </a>' +
    '   </nav>' +
    '</div>';