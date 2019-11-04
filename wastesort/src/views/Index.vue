<template>
  <!-- 首页 -->
  <div class="area" :style="screenSty">
    <!-- 页面头部 -->
    <pagetitle :titlename="titleName"></pagetitle>

    <!-- 当页面滚动过一定距离，页面头部就显示当前页面名称 -->
    <!-- 给当前页面绑定滚动事件，判断滚动距离 -->
    <!-- 如果==某个距离值，就隐藏日期，显示首页名称 -->
    <!-- 如果<某个距离值，就显示日期，隐藏头部 -->
    <!-- 当页面滚动的距离未超过指定距离，就显示日期 -->
    <!-- 主体 -->

    <div class="homecon">
      <!-- 垃圾收集时间 -->
      <div class="sort_time">
        <div class="dry_time">
          <p>干垃圾</p>
          <p>7:30-8:30</p>
        </div>
        <div class="wet_time">
          <p>
            <span class="special_wettime">晚上</span>&nbsp;
            <span>湿垃圾</span>
          </p>
          <p>19:00-20:00</p>
        </div>
      </div>
      <!-- 轮播图 -->
      <swipe :swipelist="swipeList"></swipe>
      <!-- <mt-swipe :show-indicators="false" class="waste_carousel">
        <mt-swipe-item>
          <img :src="require('../assets/home/u59.png')" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="require('../assets/home/u60.png')" alt />
        </mt-swipe-item>
      </mt-swipe>-->
      <!-- 顶部导航按钮 -->
      <ul class="navBtnArea">
        <fonticonbtn v-for="(navbtn,i) of navBtnList" :key="i" :navbtn="navbtn"></fonticonbtn>
      </ul>
      <!-- 限时兑换标题 -->
      <change-in-time :restTime="restTime"></change-in-time>
      <!-- <div class="change_intime">
        <div class="change_title">
          <p>
            <i></i>
            <span>限时兑换</span>
          </p>
          <span>{{this.restTime}}</span>
        </div>
        <router-link to class="moreLink">更多</router-link>
      </div>-->

      <!-- 限时兑换商品 -->
      <div class="time_banner">
        <transproduct></transproduct>
      </div>
      <!-- 热门讨论 -->
      <div class="change_intime hot_discuss">
        <div class="change_title">
          <p>
            <i class></i>
            <span>热门讨论</span>
          </p>
        </div>
        <router-link to class="moreLink">更多</router-link>
      </div>

      <!-- 一条讨论 -->
      <div class="discuss_list">
        <discuss></discuss>
        <discuss></discuss>
      </div>
    </div>
  </div>
</template>

<script>
import Fonticonbtn from "../components/home/Fonticonbtn.vue"; //字体图标组件
import TransProduct from "../components/common/TransProduct.vue"; //兑换商品滚动区域的组件
import Disucss from "../components/home/Discuss.vue"; //评论组件
import Pagetitle from "../components/common/PageTitle.vue"; //页面顶部组件
import Swipe from "../components/common/Swipe.vue"; //轮播图
import ChangeInTime from "../components/common/ChangeInTime.vue"; //引入倒计时的兑换商标组件
export default {
  data() {
    return {
      screenSty: {
        width: screen.width + "px"
        // height: screen.height + "px"
      },
      swipeList: [
        //轮播图列表
        {
          imgSrc: require("../assets/home/u59.png")
        },
        {
          imgSrc: require("../assets/home/u60.png")
        }
      ],
      titleName: "星期一", //页面顶部的title
      restTime: "01:01:00", //用于倒计时

      navBtnList: [
        //底部导航菜单
        {
          imgSrc: require("../assets/home/calendar.png"),
          font: "投放日历",
          pageLink: "/throw"
        },
        {
          imgSrc: require("../assets/home/u122.png"),
          font: "上门回收",
          pageLink: ""
        },
        {
          imgSrc: require("../assets/home/u125.png"),
          font: "垃圾识别",
          pageLink: ""
        },
        {
          imgSrc: require("../assets/home/u128.png"),
          font: "每日签到",
          pageLink: ""
        }
      ]
    };
  },
  mounted: function() {
    this.changeTime();
  },
  methods: {
    //倒计时
    changeTime() {
      /**
       把时间转化为秒
       1.通过：分割字符串，并转化为整数
       2.将小时、分数分别乘以*60分钟，*60秒，+最后一个整数描述
       就将时间转化为秒
       3.用周期性定时器循环-1秒
       计算小时
       1.剩余秒数除以3600秒（1小时=3600秒）
       2.得到商和余数
       3.parseInt() 获取到整数类型的商，不用四舍五入
       4.取余 %
       5.判断是否小于<10,<10，加0
         


       计算分钟
       1.计算分钟：之前取余的数除以60秒，parseInt() 获取到整数类型的商，不用四舍五入
       2.取余
       3.判断结果是否<10，小于10,前面就加0

       计算秒
       1.之前取余的数，是否<10，小于10,前面就加0
       

       */

      var timer = setInterval(() => {
        var [seconds, minute, hour] = [0, 0, 0];
        var timeArr = this.restTime.split(":");
        hour = parseInt(timeArr[0]);
        minute = parseInt(timeArr[1]);
        seconds = parseInt(timeArr[2]);
        var total = hour * 60 * 60 + minute * 60 + seconds;
        if (total == 1) {
          clearInterval(timer);
        }
        total -= 1;
        hour = parseInt(total / (60 * 60));
        minute = parseInt((total % (60 * 60)) / 60);
        seconds = parseInt((total % (60 * 60)) % 60);
        hour == 0 ? "00" : hour < 10 ? "0" + hour : hour;
        minute == 0 ? "00" : minute < 10 ? "0" + minute : minute;
        seconds == 0 ? "00" : seconds;
        if (hour < 10) {
          hour = "0" + hour;
        }

        if (minute < 10) {
          minute = "0" + minute;
        }

        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        this.restTime = `${hour}:${minute}:${seconds}`;
      }, 1000);
    }
  },

  components: {
    fonticonbtn: Fonticonbtn,
    pagetitle: Pagetitle,
    discuss: Disucss,
    transproduct: TransProduct,
    swipe: Swipe, //轮播图
    changeInTime: ChangeInTime //倒计时组件
  }
};
</script>
<style scoped>
/* 页面容器 */
.area {
  background: url(../assets/home/u19.png) no-repeat;
  background-position: 0 -70px;
  /* position:relative; */
}

.homecon {
  width: 90%;
  /* height: 100%; */
  margin: 0 auto;
}

/* 垃圾分类时间 */
.homecon > .sort_time {
  width: 100%;
  height: 64px;
  margin-top: 55px;
  background: #85e3ed;
  display: flex;
  justify-content: left;
  align-items: center;
  border: #85e3ed;
  border-radius: 5px;
  color: #fff;
  font-size: 13px;
  line-height: 17px;
}
.homecon > .sort_time > .dry_time,
.homecon > .sort_time > .wet_time {
  width: 50%;
  height: 100%;
  padding-left: 25px;
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.special_wettime {
  display: inline-block;
  background: rgba(254, 94, 117, 1);
  width: 35px;
  height: 19px;
  line-height: 19px;
  text-align: center;
  border-radius: 2px;
}

/* 顶部导航按钮 */
.navBtnArea {
  list-style: none;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 8px solid #ecfdfa;
}

.time_banner {
  width: 100%;
  height: 165px;
  overflow: hidden;
  border-bottom: 8px solid #ecfdfa;
}
.change_intime {
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
}
.change_intime > .change_title {
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 16px;
}

.change_intime > .change_title > p {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.change_intime > .change_title > p > i {
  display: block;
  height: 12px;
  width: 0;
  border: 2px solid rgba(62, 210, 228, 1);
}

.change_intime > .change_title > p > span {
  display: block;
  height: 19px;
  line-height: 16px;
  font-size: 14px;
  font-weight: bold;
}

.change_intime > .change_title > span:last-child {
  display: block;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #333;
}

.change_intime > .moreLink {
  font-size: 12px;
  line-height: 16px;
  color: #ccc;
}

/* .discuss-title {
  width: 100%;
  height: 33px;
} */
/* 热门讨论 title */
.hot_discuss > .change_title > p > i {
  display: block;
  height: 12px;
  width: 0;
  border: 2px solid rgba(255, 94, 129, 1);
}
</style>