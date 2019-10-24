<template>
  <!-- 兑换商城 -->
  <div class="change-container">
    <!-- 页面顶部 -->
    <pagetitle :titlename="titleName"></pagetitle>
    <!-- 轮播图 -->
    <!-- 限时兑换title -->
    <!-- 限时兑换商品滚动区域 -->
    <!-- 近期热门兑换的title -->
    <!-- 猜你喜欢的商品列表 -->
  </div>
</template>
<script>
import Pagetitle from "../components/common/PageTitle.vue";
export default {
  data() {
    return {
        titleName:"兑换商城"
    };
  },
  components: {
    pagetitle: Pagetitle
  }
};
</script>
<style scoped>
</style>