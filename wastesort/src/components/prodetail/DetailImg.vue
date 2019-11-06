<template>
  <!-- 商品详情 -->
  <div>
    <!-- 标题 -->
    <div class="detail-title">
      <item-bar-title :barName="barName"></item-bar-title>
    </div>
    <div class="detail-con">
      <img :src="item.path" alt v-for="(item,i) of pro.detailImgs" :key="i" />
    </div>
  </div>
</template>
<script>
import ItemBarTitle from "../common/ItemBarTitle";
export default {
  data() {
    return {
      barName: "商品详情"
    };
  },
  components: {
    ItemBarTitle
  },
  props: {
    pro: Object
  }
};
</script>
<style scoped>
.detail-title {
  /* margin-top: 10px; */
  width: 100%;
  /* height: 7rem; */
  padding: 0 1.66rem;
}
.detail-con,
.detail-con > img {
  width: 100%;
}

.detail-con {
  border-bottom: 8px solid #ecfdfa;
}
</style>