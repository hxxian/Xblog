$(function ($) {
    Vue.component('float-nav-menu', {
        data: function () {
            return {
                showSlideMenu: false,
                menus: [
                    {
                        menuName: "首页",
                        linkPage: "index.html",
                        icon: "glyphicon glyphicon-home"
                    },
                    {
                        menuName: "文章",
                        linkPage: "article-list.html",
                        icon: "glyphicon glyphicon-list-alt"
                    },
                    {
                        menuName: "归档",
                        linkPage: "archive.html",
                        icon: "glyphicon glyphicon-tasks"
                    },
                    {
                        menuName: "关于我",
                        linkPage: "about-me.html",
                        icon: "glyphicon glyphicon-user"
                    }
                ],
            }
        },
        methods: {
            gotoPage: function(idx) {
                if (this.menus[idx] && this.menus[idx].linkPage) {
                    window.location.href = "./" + this.menus[idx].linkPage
                }
            },
            showMenu: function () {
                this.showSlideMenu = !this.showSlideMenu;
                if (this.showSlideMenu) {
                    $(".sidebar-menu-container").removeClass("slide-menu-hide");
                    $(".sidebar-menu-container").addClass("slide-menu-show");

                    // $(".sidebar-menu-container").removeClass("hide");
                    // $(".sidebar-menu-container").addClass("show");
                } else {
                    $(".sidebar-menu-container").removeClass("slide-menu-show");
                    $(".sidebar-menu-container").addClass("slide-menu-hide");

                    // $(".sidebar-menu-container").removeClass("show");
                    // $(".sidebar-menu-container").addClass("hide");
                }

            }
        },
        template: floatMenu
    })

})

var floatMenu =
    `<div class="footer-menu">
        <div class="radius-menu">
            <span @click="showMenu()" class="glyphicon glyphicon-menu-hamburger"></span>
            <span class="side-title">浮晓悠羡</span>
        </div>
        <div class="sidebar-menu-container">
    
            <div class="sidebar-menu">
                <div v-for="(m, idx) in menus" class="sidemenu-item" @click="gotoPage(idx)">
                    <span :class="m.icon"></span>
                    <span class="menu-name">{{m.menuName}}</span>
                </div>
            </div>
            <div class="slide-menu-shadow"></div>
        </div>
    </div>`;