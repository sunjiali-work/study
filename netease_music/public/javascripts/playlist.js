window.addEventListener('load', function () {

//进入当前页面后，二级导航选中中默认选中“歌单”,去除其他菜单的选中样式
    activeBar();



});


/*进入当前页面后，二级导航选中中默认选中“歌单”,去除其他菜单的选中样式
* 1.查找到当前“歌单”的元素对象
* 2.给该元素的class属性添加active属性
* 3.查找到其他菜单选项中带active class属性的元素
* 4.去掉除了其他菜单元素中的active 的class属性
* */

function activeBar() {
    //获取二级菜单中其他包含active 的class属性的li元素对象
    //var otherActiveItem = document.querySelector(".sndnav_list>li.active");
    //去掉active的class属性
    $(".sndnav_list>li.active").removeClass("active");
//给当前所在的菜单li添加active属性
    var toplistBar = document.querySelector(".sndnav_list>li:nth-child(3)");
    console.log(toplistBar);
    if ((toplistBar.className).indexOf("active") < 0) {
        toplistBar.className += " active";
    }

}
