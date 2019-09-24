window.addEventListener("load", function () {
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
});