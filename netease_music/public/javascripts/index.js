window.addEventListener("load", function () {

    /*榜单的歌曲列表的每一首歌- 按钮组-动态显示或隐藏*/
    showSongListBtn();

    /*
     回到顶部
     当页面发生滚动，滚动到一定距离时，会显示“回到顶部”按钮，小于指定距离，就隐藏按钮
     1.先给“回到顶部”按钮设置隐藏
     2.给window发生滚动，给window绑定onscroll事件。
     3.获取当前页面的滚动距离
     4.判断滚动距离是否到指定距离
     5.查找按钮元素对象
     6.如果滚动到指定距离，就显示按钮
     7.如果没滚动到指定距离，就隐藏按钮*/
    window.addEventListener('scroll', backBtnToggle);

    /*  回到页面顶部（点击“回到顶部按钮”，页面就回到了顶部。）
     1.获取按钮对象
     2.点击按钮，给按钮绑定click事件
     3.获取页面已滚动了多少距离
     4.滚回到顶部，给window对象的scrollBy函数在垂直方向设置要向上滚回顶部的距离（负数）*/
    var btn = document.getElementsByClassName("comback_top")[0];
    btn.addEventListener('onclick', backTop);

});




/*当鼠标划过榜单的歌曲列表时，
 显示/隐藏播放、收藏的按钮组*/

function showSongListBtn() {
    /*  给榜单的每一行绑定hover和mouseleave事件
     1.得到ol标签
     2.获得ol所有的子节点
     3.循环遍历子节点
     4.给子节点绑定两个事件
     5.给事件设置相应的处理函数*/


    var ol_list = document.getElementsByClassName("top_songs_list");//得到三个同名的ol列表数组

    //遍历每个ol有序列表

    for (var i = 0; i < ol_list.length; i++) {//循环遍历同名的ol有序列表
        var items = ol_list[i].children;//获得其中的一个ol列表下的所有子节点li的集合
        for (var j = 0; j < items.length; j++) {//循环下面的每个li
            var li = items[j];//获取当前的li
//利用事件冒泡原理，给li元素绑定事件

            /*
             当鼠标悬停在li上时,无论悬停在哪个子元素，都会发生以下活动：
             1.a元素宽度变窄，显示按钮组
             2.按钮组显示
             3.但当鼠标悬停在按钮组内部的具体某个图标上时，图标的css效果发生变化，这部分可用css的伪类元素hover来实现
             */

            li.addEventListener('mouseover', function (e) {

                var actionContainer = this.querySelector(".top_item_action");//获取按钮组容器
                //带歌名的a元素
                var a = this.children[1];
                //鼠标悬停时，a元素的样式发生变化
                a.className += " hover";
                //鼠标悬停时，按钮组的容器显示
                actionContainer.className += " hover";


            });
            li.addEventListener('mouseout', function (e) {
                var actionContainer = this.querySelector(".top_item_action");//获取按钮组容器

                //带歌名的a元素
                var a = this.children[1];
                //鼠标移除时，a元素的样式发生变化，失去hover的class属性所对应的css效果
                a.className = a.className.replace(/\s+(hover)/g, "");

                //鼠标悬停时，按钮组的容器隐藏，失去hover的class属性所对应的css效果，因此要去掉hover 这个class属性
                actionContainer.className = actionContainer.className.replace(/\s+(hover)/g, "");


            });


        }


    }

}


//获取页面当前已滚动的距离，并滚回顶部
/*
 滚回页面顶部
 3.获取页面已滚动了多少距离
 4.滚回到顶部，给window对象的scrollBy函数在垂直方向设置要向上滚回顶部的距离（负数）*/
function backTop() {
    //获取已滚动的距离
    var distance = document.body.scrollTop || document.documentElement.scrollTop;

    window.scrollBy(0, -distance);

}

//显示或隐藏回到顶部的按钮
function backBtnToggle() {
    //获取当前滚动的距离
    var distance = document.body.scrollTop || document.documentElement.scrollTop;

    //获取回到顶部按钮
    var btn = document.getElementsByClassName("comback_top")[0];
    if (distance > 200) {

        btn.style.display = "block";

    } else {
        btn.style.display = "none";
    }

}
