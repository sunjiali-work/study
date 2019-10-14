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

    changeCarouselItem();//播放轮播图

});
//播放轮播图
/*window.addEventListener('load', function(){
    changeCarouselItem();//播放轮播图
});*/

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

/*
移动到哪站图片

给什么数字，就跳到第几张图片，用变量to来表示要调到第几张图片，to为0时，表示第一张图片
to为负值时，就往左跳，margin-left就递减
to为正数时，就向右跳，margin-left就递增

1.获取每张图片的宽度
2.获取共有多少张图片
3.判断用户是否指定了跳到第几张图片，如果没指定当前to为underfined，
设置一个变量x代表当前图片的下标，如果用户没给，x=x+1,默认就跳一张
4.如果用户指定了参数to，那么就把to赋值给x，更新x的取值，让之前的所在位置变为新位置to
5.计算margin-left=-x*width+"px";
6. A.跳到最后一张时，x=count时，就代表最后一张（最后一张和第一张图片是一样的），马上又要从第一张开始轮播回来，所以这时，x要重置为0.同时，从最后倒数第二张渐渐逐渐过渡最后一张,等完全过渡到最后一张了，
B.要去掉ul的transition的class属性，然后把margin-left改为0，迅速跳到第一张，这个过程期间没有过度，是个迅速的过程
C.当x=count，最后一张时，是没有小圆点的。因此程序不用再向下执行

7.跳到第一张后，要慢慢调到第2张，所以当x=0时，就要给ul添加transition属性
8.当ul变化时，下面小圆点的样式也跟着变化，当前x为几，对应的就是第几个小圆点被选中。
  A.先要清除其他小圆点的active 属性
  B.再给对应图片的所属小圆点添加active的class属性

*/

function changeCarouselItem() {

    var width = 730;
    var count = 9;
    var duration = 500;
    var x = 0;//x为正在播放的当前图片的下标，默认都是从第一张照片开始播放的，所以x为0
    var ulImgs = document.getElementById("ul-imgs");
    var ulIds = document.getElementsByClassName("ul-ids")[0];
    //获取所有小圆点的集合
    var pointList = ulIds.getElementsByTagName("li");
    var lbtn = document.getElementById("leftBtn");
    var rbtn = document.getElementById("rightBtn");
    rbtn.onclick = function () {
        moveTo();
    }

}

function moveTo(to) {
    console.log(33333)
    if (to == undefined) {
        to = x + 1;
    }


    if (x == 0) {
        ulImgs.className = "transition";
    }

    if (x == count) {
        x = 0;
        setTimeout(() => {
            ulImgs.className = "";
            ulImgs.style.marginLeft = "0px";
        }, duration);
        return;
    }
    x = to;

    ulImgs.style.marginLeft = `-${x * width}px;`;


    // 先清除所有的小圆点样式
    for (var li of pointList) {
        li.className = "";
    }

    //再给当前播放的图片对应的小圆点添加active属性
    pointList[x].className = "active";
}
