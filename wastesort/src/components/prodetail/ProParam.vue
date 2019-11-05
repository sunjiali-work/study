<template>
  <div>
    <!-- 商品参数 -->
    <item-bar-title  :barName="barName"></item-bar-title>
    <p class="param-item">
      <span>件数</span>
      <span>{{pro.count}}件</span>
    </p>
    <p class="param-item">
      <span>材质</span>
      <span>{{pro.material}}</span>
    </p>
    <p class="param-item">
      <span>风格</span>
      <span>{{pro.style}}</span>
    </p>
  </div>
</template>
<script>
import ItemBarTitle from "../common/ItemBarTitle";
export default {
  data() {
    return {
      barName: "商品参数"
    };
  },
  props: {
    pro: Object
  },
  components: {
    ItemBarTitle
  }
};
</script>
<style  scoped>
.param-item {
  width: 100%;
  height: 3.33rem;
  display: flex;
  align-items: center;
  justify-content: left;
}

.param-item > span:first-child {
  width: 5.9rem;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.param-item > span:last-child {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>