/**
 * Created by web on 2019/8/27.
 */
/*鼠标移入登录按钮区域，就出现下拉列表*/

//要在window.domContentLoaded事件里写js代码，等DOM内容加载完以后，就执行页面操作。

$(function () {

    /*
     第一步：获取头部
     从服务器中获取header.html中的内容，并替换index.html中的header标签，并在index.html的head标签中插入link元素，引入header.css
     1.写ajaz请求获取header内容
     2.获取内容后，找到header元素对象
     3.往header元素的innerHTML中插入内容
     4.找到head元素，往其中插入link，引入css标记


     第二步：根据当前页面的地址，决定选中二级导航栏中哪个菜单。默认是“推荐”
     */


    function callBack(result) {
        //    第一步：获取头部
        var header = document.getElementsByTagName("header")[0];
        header.innerHTML = result;
        var head = document.getElementsByTagName("head")[0];
        //创建一个新元素,引入header.css文件
        var newLink = document.createElement("link");
        newLink.href = "stylesheets/header.css";
        newLink.rel = "stylesheet";
        head.appendChild(newLink);

        // 第二步：头部文件加载完成后，根据当前页面的地址，决定选中二级导航栏中哪个菜单。默认是“推荐”
        selectBar();

        //第三步，header.html的css、DOM加载完成后，再根据鼠标移入移出，再进行当前登录选项列表是显示还是隐藏的绑定事件
        showLoginList();

    }

    //根据浏览器当前页面的网页地址，控制选中哪个二级导航中的菜单项
    function selectBar() {
        //定义一个对象来管理地址栏和二级导航栏中菜单项在ul中的下标的对应关系，根据当前浏览器地址栏中的地址，来控制二级导航菜单的选中项
        var pageNav = {
            index: 1,
            toplist: 2,
            playlist: 3,
            djradio: 4,
            artist: 5,
            album: 6
        };
        //获取当前地址栏中的网页地址
        //然后根据当前地址，判断应该给二级导航中哪个菜单加“选中”的背景样式
        var urlStr = location.href;

        //循环遍历，判断是哪个网页
        for (var key in pageNav) {
            if (urlStr.indexOf(key + "") > -1) {

                activeBar(pageNav[key]);//pageNav[key] 就是基于地址和二级菜单在ul中的下标索引的映射关系，根据当前地址来获取到当前页面对应的菜单在ul中是第几个菜单项

            }
        }

    }

    /*进入当前页面后，二级导航选中中默认选中“歌单”,去除其他菜单的选中样式
     * 1.查找到当前“歌单”的元素对象
     * 2.给该元素的class属性添加active属性
     * 3.查找到其他菜单选项中带active class属性的元素
     * 4.去掉除了其他菜单元素中的active 的class属性
     * */

    function activeBar(num) {
        //获取二级菜单中其他包含active 的class属性的li元素对象
        //var otherActiveItem = document.querySelector(".sndnav_list>li.active");
        //去掉active的class属性
        $(".sndnav_list>li.active").removeClass("active");
//给当前所在的菜单li添加active属性
        var toplistBar = document.querySelector(".sndnav_list>li:nth-child(" + num + ")");

        if ((toplistBar.className).indexOf("active") < 0) {
            toplistBar.className += " active";
        }

    }


    /**定义一个对象来管理地址栏和二级导航栏的对应关系，根据当前浏览器地址栏中的地址，来控制二级导航菜单的选中项

     1.获取浏览器当前页面的地址
     2.处理地址信息
     3.映射
     */

    requests.getHeader(callBack);


});

//手风琴导航，是鼠标悬停和移除事件时，才会出现或隐藏下拉菜单。需要基于css来操作。因此要等页面完全加载完成后，才能绑定事件

//注意事项：显示或隐藏登录选项的下拉列表也要在 获取网页头部的ajax请求完成后，才能获取到header.html中的元素对象，从而对齐执行进一步的隐藏或显示操作，所以要写在ajax的回调函数中
function showLoginList() {
    $(window).load(function () {

        $(".nav_person_title").mouseover(function () {
            $(".nav_person_list").css("display", "block");
        });

        /*登录选项的下拉列表鼠标移开时，就隐藏*/

        $(".nav_person").mouseleave(function () {

            $(".nav_person_list").css("display", "none");
        });

    });
}

