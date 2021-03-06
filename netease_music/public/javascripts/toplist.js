window.addEventListener('load', function () {

    //动态显示歌曲列表的按钮组
    showSongListBtn();


});





/**
 动态显示歌曲列表每一首的按钮组（播放、收藏、添加到播放列表）

 当鼠标悬停在tr上时，就显示按钮组，并隐藏时间
 无论鼠标悬停在哪一列上，tr都会显示按钮组，并隐藏时间

 1.获取tbody下面的行，得到一个tr元素集合
 2.循环遍历tr，给每个tr绑定一个鼠标移入事件
 3.查找按钮组元素对象和span元素对象
 4.给按钮组元素对象的class属性添加“hover”
 给span元素的class属性移除hover


 鼠标移除行时，则显示span，隐藏按钮组
 那就给span的class属性去除hover
 给按钮组元素的class添加hover
 * */
function showSongListBtn() {
    var table = document.getElementsByClassName("songs_list")[0];
    var tbody = table.tBodies[0];
    var rows = tbody.rows;
    for (var i = 0; i < rows.length; i++) {
        var tr = rows[i];//获取每一个tr元素对象
        tr.addEventListener('mouseover', function () {
//给当前的tr对象绑定事件，要获取按钮组也是当前tr里面的按钮组，所以要用this
            //获取按钮组容器对象
            var btnCon = this.querySelector(".play_action");

//            获取当前tr里的span元素（时间）
            var timeSpan = this.querySelector(".play_time");

            btnCon.className += " hover";
            timeSpan.className += " hover";

        });
        tr.addEventListener('mouseout', function () {
            //给当前的tr对象绑定事件，要获取按钮组也是当前tr里面的按钮组，所以要用this
            //获取按钮组容器对象
            var btnCon = this.querySelector(".play_action");

//            获取当前tr里的span元素（时间）
            var timeSpan = this.querySelector(".play_time");
            // if(/\s+(hover)/.test(tr.className))
            btnCon.className = btnCon.className.replace(/\s+(hover)/, "");
            timeSpan.className = timeSpan.className.replace(/\s+(hover)/, "");
        });
    }
}