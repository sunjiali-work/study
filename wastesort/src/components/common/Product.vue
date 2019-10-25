<template>
  <li class="goods_item">
    <router-link to class="goods_link">
      <!-- require('../../assets/product/1.png') -->
      <img :src="goods.imgUrl" alt class="goods_img" />
      <p class="nowmoney">{{goods.nowmoney}}</p>
      <p class="oldmoney">{{goods.oldmoney}}</p>
    </router-link>
  </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    goods: Object
  }
};
</script>
<style scoped>
.goods_item {
  width: 100px;
  height: 127px;
}

.goods_link {
  display: block;
  width: 100px;
  height: 127px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 现在的金币 */
.nowmoney {
  font-size: 14px;
  height: 19px;
  line-height: 19px;
  text-align: center;
}
.oldmoney {
  font-size: 12px;
  color: #333;
  height: 16px;
  line-height: 16px;
  text-decoration: line-through;
}

.goods_img {
  width: 100px;
  height: 100px;
}
</style>