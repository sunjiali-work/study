<template>
  <!-- 猜你喜欢 -->
  <div>
    <!-- 标题 -->
    <item-bar-title :barName="barName"></item-bar-title>
    <!-- 商品列表 -->
    <product-list></product-list>
  </div>
</template>
<script>
import ItemBarTitle from "../common/ItemBarTitle";
import ProductList from "../product/ProductList"; //猜你喜欢的商品列表
export default {
  data() {
    return {
      barName: "猜你喜欢"
    };
  },
  components: {
    ItemBarTitle,
    ProductList
  }
};
</script>
<style scoped>
</style>