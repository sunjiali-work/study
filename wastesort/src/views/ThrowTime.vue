<template>
  <!--投放日历-->
  <div class="throw-container">
    <!-- 返回按钮 -->
    <div class="backCon">
      <a href="javascript:;" class="goback"></a>
      <span>{{year}}年{{month}}月</span>
    </div>
    <div class="content">
      <!-- 日历 -->
      <calendar></calendar>
      <!-- 今日投放 -->
      <div></div>
      <!-- 明日投放 -->
      <div class="throw-day">
        <div class="day-title">
          <i class="day-sign1"></i>
          <span>今日投放</span>
        </div>
        <div class="throw-daytime">
          <p>
            <span>7:30-8:30</span>
            <span>湿垃圾</span>
          </p>
          <p>
            <span>19:00-20:00</span>
            <span>干垃圾</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Calendar from "../components/common/Calendar.vue";
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    };
  },
  components: {
    calendar: Calendar
  }
};
</script>
<style  scoped>
/* 投放时间表容器 */
.throw-day {
  width: 100%;
  height:120px;
  margin-top: 25px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
}

.throw-container {
  width: 375px;
  height: 667px;
  background: url(../assets/home/u19.png) no-repeat;
  background-position: 0 -70px;
}

.backCon {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: nowrap;
  margin-bottom: 30px;
}

/* 返回按钮 */

.goback {
  width: 38px;
  height: 55px;

  background: url(../assets/throw/u1039.png) no-repeat;
  background-position: 50% 50%;
}

.goback + span {
  color: #fff;
  font-weight: bold;

  height: 26.4px;
  width: 50%;
  font-size: 20px;
}

.content {
  width: 89.3%;
  height: 300px;
  margin: 0 auto;
}
.content:before {
  display: table;
  content: "";
}
</style>