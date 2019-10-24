<template>
  <!-- 轮播图 -->
  <mt-swipe :show-indicators="false" class="waste_carousel">
    <mt-swipe-item v-for="(item,i) of swipelist" :key="i">
      <router-link to>
        <img :src="`${require(item.imgSrc)}`" alt />
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
</style>