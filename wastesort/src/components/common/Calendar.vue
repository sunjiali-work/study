<template>
  <!--投放日历-->
  <div class="container">
    <dir class="content">
      <div class="calendar">
        <div class="week">一</div>
        <div class="week">二</div>
        <div class="week">三</div>
        <div class="week">四</div>
        <div class="week">五</div>
        <div class="week">六</div>
        <div class="week">七</div>
        <div class="date">
          <button class="date-btn"></button>
        </div>
      </div>
    </dir>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {}
};
</script>
<style  scoped>
.container {
  width: 375px;
  height: 667px;
}

.content {
  width: 89.3%;
  height: 311px;
}

/* 日历的容器 */
.calendar {
  width: 100%;
  height: 310px;
}

/* 日期容器 ,周几*/
.date,
.week {
  width: 12.8%;
  height: 48px;
}

/* 日期按钮 */
.date-btn {
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>