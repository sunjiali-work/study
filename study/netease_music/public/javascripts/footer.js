/*
 引入footer.js文件
 1.通过get请求，向服务器请求footer。html静态资源
 2.获取到服务器返回的footer.html后，再查找footer元素对象。往footer的innerHTML中添加页脚内容
 3.再查找head标签，往里添加新元素link，引入footer.css
 */


$(function () {


    function callBack(result) {
        // 获取footer标签对象
        var footer = document.getElementsByTagName("footer")[0];
        footer.innerHTML = result;

        // 创建一个新对象
        var newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.href = "stylesheets/footer.css";
        //获取head标签对象
        var head = document.getElementsByTagName("head")[0];
        // 往header中添加link，引入footer.css
        head.appendChild(newLink);
    }

    //向服务器请求footer.html资源
    //获取到服务器的资源后，再执行footer元素的内容插入操作
    requests.getFooter(callBack);
});

