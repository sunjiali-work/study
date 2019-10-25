<template>
  <!-- 限时兑换-倒计时-标题栏 -->
  <div class="change_intime">
    <div class="change_title">
      <p>
        <i></i>
        <span>限时兑换</span>
      </p>
      <span>{{restTime}}</span>
    </div>
    <router-link to class="moreLink">更多</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
 
  props: {
    restTime: String
  }
};
</script>
<style scoped>
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
</style>