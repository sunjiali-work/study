<template>
  <div>
    <item-bar-title :barName="barName"></item-bar-title>
    <!-- 服务 -->
    <p class="service-item">
      <span>服务</span>
      <span>{{pro.service}}</span>
    </p>
    <!-- 说明 -->
    <p class="service-item">
      <span>说明</span>
      <span>{{pro.descr}}</span>
    </p>
    <!-- 选择 -->
    <p class="service-item">
      <span>选择</span>
      <button>{{pro.types[1]["color"]}}&nbsp;【{{pro.types[1]["size"]}}】</button>
    </p>
  </div>
</template>
<script>
import ItemBarTitle from "../common/ItemBarTitle";
export default {
  data() {
    return {
      barName: "服务详情"
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
.service-item {
  width: 100%;
  height: 3.33rem;
  display: flex;
  align-items: center;
  justify-content: left;
}

.service-item > span:first-child {
  width: 5.9rem;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.service-item > span:last-child {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
div > .service-item:last-child > button {
  outline: none;
  border: none;
  background: #fff;
  font-size: 14px;
  font-weight: bold;
  color: #ff5e81;
}
</style>