<template>
  <!-- 商品列表 -->
  <div class="product-list">
    <!-- 一个商品-容器 -->
    <div class="product-item" v-for="(item,i) in productList" :key="i">
      <!-- 商品链接 -->
      <router-link to class="product-link">
        <div class="product-info">
          <!-- 商品图片 -->
          <img :src="require('../../assets/product/1.png')" alt class="product-img" />
          <!-- 商品名称 -->
          <p class="product-name">{{item.name}}</p>
        </div>
        <!-- 商品价格 -->
        <p class="product-price">{{item.price}}币</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    productList: Array
  }
};
</script>
<style  scoped>
/* 商品列表 */
.product-list {
  margin: 15px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgb(251, 251, 251);
}

/* 一个商品容器 */

.product-item {
  width: 13.5rem;
  height:20rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
  /* border: 1px solid red; */
  overflow: hidden;
  margin-bottom: 1.66rem;
}

/* 商品链接 */
.product-link {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
/* 商品信息 */
.product-info {
  width: 100%;
  height: 208px;
  overflow: hidden;
  text-align: left;
}
/* 商品图片 */
.product-img {
  width: 17.33rem;
  height: 17.33rem;
}

/* 商品名字 */
.product-name {
  width: 100%;
  height: 2.91rem;
  margin-top: 2px;
  padding: 0 7px;
  line-height: 17px;
  font-size: 14px;
  color: #888;
  overflow: hidden;
}
/* 商品价格 */
.product-price {
  width: 12.58rem;
  height: 19px;
  margin-top: -8px;
  font-size: 14px;
  line-height: 19px;
  color: #333;
  font-weight: bold;
}
</style>