<template>
  <!-- 轮播图 -->
  <mt-swipe :show-indicators="false" class="waste_carousel">
    <mt-swipe-item v-for="(item,i) of swipelist" :key="i">
      <router-link to>
        <img :src="item.imgSrc" alt />
      </router-link>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    swipelist: Array
  }
};
</script>
<style scoped>
.waste_carousel {
  height: 120px;
  margin: 18px auto;
}
</style>