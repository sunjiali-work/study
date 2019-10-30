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
  margin-bottom:30px;
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