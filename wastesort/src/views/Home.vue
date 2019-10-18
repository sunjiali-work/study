<template>
  <div class="area">
    <div class="container" :style="screenSty">
      <!-- 页面头部 -->
      <div class="page_title">
        <span>{{titleName}}</span>

        <div>
          <router-link to>
            <img :src="require('../assets/index/u23.png')" />
          </router-link>
          <router-link to>
            <img :src="require('../assets/index/u22.png')" />
          </router-link>
        </div>
      </div>
      <!-- 当页面滚动过一定距离，页面头部就显示当前页面名称 -->
      <!-- 给当前页面绑定滚动事件，判断滚动距离 -->
      <!-- 如果==某个距离值，就隐藏日期，显示首页名称 -->
      <!-- 如果<某个距离值，就显示日期，隐藏头部 -->
      <!-- 当页面滚动的距离未超过指定距离，就显示日期 -->
      <!-- 主体 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenSty:{
        width:screen.height
      },
      titleName: "星期一"
    };
  }
};
</script>
<style scoped>

/* 页面容器 */
.container {
  width: 80%;
  
}
.page_title {
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(43, 205, 221);
}
</style>