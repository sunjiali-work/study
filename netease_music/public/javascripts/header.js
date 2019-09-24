/**
 * Created by web on 2019/8/27.
 */
/*鼠标移入登录按钮区域，就出现下拉列表*/

//要在window.domContentLoaded事件里写js代码，等DOM内容加载完以后，就执行页面操作。

$(function () {

    /*从服务器中获取header.html中的内容，并替换index.html中的header标签，并在index.html的head标签中插入link元素，引入header.css
     1.写ajaz请求获取header内容
     2.获取内容后，找到header元素对象
     3.往header元素的innerHTML中插入内容
     4.找到head元素，往其中插入link，引入css标记*/


    function callBack(result) {
        var header = document.getElementsByTagName("header")[0];
        header.innerHTML = result;
        var head = document.getElementsByTagName("head")[0];
        //创建一个新元素,引入header.css文件
        var newLink = document.createElement("link");
        newLink.href = "stylesheets/header.css";
        newLink.rel = "stylesheet";
        head.appendChild(newLink);


    }

    requests.getHeader(callBack);

    /*

     $(".nav_person_title").hover(function () {
     $(".nav_person_area").css("display", "block");
     });

     /!*登录选项的下拉列表鼠标移开时，就隐藏*!/

     $(".nav_person").mouseleave(function () {

     $(".nav_person_area").css("display", "none");
     });
     */

    /*鼠标移入登录按钮区域，就出现下拉列表*/


});

//手风琴导航，是鼠标悬停和移除事件时，才会出现或隐藏下拉菜单。需要基于css来操作。因此要等页面完全加载完成后，才能绑定事件
$(window).load(function () {

    $(".nav_person_title").mouseover(function () {
        $(".nav_person_list").css("display", "block");
    });

    /*登录选项的下拉列表鼠标移开时，就隐藏*/

    $(".nav_person").mouseleave(function () {

        $(".nav_person_list").css("display", "none");
    });

});
