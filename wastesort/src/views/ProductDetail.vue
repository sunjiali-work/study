<template>
  <div class="pro-container">
    <!-- 页面标题 -->
    <div class="page-title" v-show="false">
      <div>
        <router-link to="/index" class="goback"></router-link>
        <span>商品详情</span>
      </div>
      <!-- 购物车图标 -->
      <router-link to="cart" class="cart"></router-link>
    </div>
    <!-- 轮播图 容器-->
    <div class="banner-area">
      <!-- 返回 -->
      <router-link to="/index" class="goback2"></router-link>
      <!-- 轮播图 -->
      <div class="banner">
        <pro-swipe :productImgs="productImgs"></pro-swipe>
      </div>
      <!-- 购物车图标 -->
      <router-link to="cart" class="cart2"></router-link>
    </div>
    <!-- 商品简介 -->
    <div class="short-intro">
      <!-- 商品名称 -->
      <p class="proname">创意卫浴五件套 欧式高档卫生间洗漱杯套装浴室用品刷牙杯漱口杯</p>
      <!-- 价格 -->
      <p class="proprice">
        <span class="dis-price">250币</span>
        <span class="old-price">300币</span>
      </p>
      <!-- 抢购结束时间 -->
      <p class="rest-time">
        <span>距离抢购结束</span>
        <span>{{restTime}}</span>
      </p>
      <p></p>
    </div>
    <!-- 服务详情 -->
    <service-bar class="service-detail" :pro="pro"></service-bar>
    <!-- 商品参数 -->
    <pro-param :pro="pro" class="pro-param" ></pro-param>
    <!-- 商品详情 -->
    <!-- 猜你喜欢 -->
    <!-- 没有更多内容了 -->
    <!-- 立即购买 -->
  </div>
</template>
<script>
// 商品详情页轮播图
import ProSwipe from "../components/product/ProSwipe";
import calRestTime from "../js/calRestTime";
import ServiceBar from "../components/prodetail/ServiceDetail"; //服务详情

import ProParam from "../components/prodetail/ProParam"; // 商品参数
export default {
  data() {
    return {
      pro: {
        count: 5,
        material: "树脂、铜",
        style: "欧式",
        service: "24小时内送货 · 15天退货",
        descr: "假一赔十 丨 7天无理由退货",
        types: [
          {
            typename: "套餐A",
            typeId: "xxA",
            size: "10cm",
            color: "淡黄色"
          },
          {
            typename: "套餐B",
            typeId: "xxB",
            size: "10cm",
            color: "淡白色"
          },
          {
            typename: "套餐C",
            typeId: "xxC",
            size: "10cm",
            color: "淡棕色"
          },
          {
            typename: "套餐D",
            typeId: "xxD",
            size: "10cm",
            color: "淡绿色"
          }
        ],
        chosen: 1
      },
      restTime: "15:00:00",
      productImgs: [
        { path: require("../assets/prodetail/1.png") },
        { path: require("../assets/prodetail/2.png") },
        { path: require("../assets/prodetail/3.png") },
        { path: require("../assets/prodetail/4.png") }
      ]
    };
  },
  mounted() {
    calRestTime.changeTime.apply(this);
  },
  components: {
    ProSwipe,
    ServiceBar,
    ProParam
  }
};
</script>
<style  scoped>
/* 容器 */
.pro-container {
  width: 100 vw;
  height: 100 vh;
}

.page-title {
  width: 100%;
  height: 4.5rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #2bcddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9px;
}
.page-title > div {
  display: flex;
  justify-content: left;
  align-items: center;
}
.page-title > div > .goback {
  width: 3.2rem;
  height: 4rem;
  background: url(../assets/throw/u1039.png) no-repeat;
  background-position: 60% 50%;
}

.page-title > div > span {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}

/* 购物车 */
.page-title .cart {
  width: 2.1rem;
  height: 1.4rem;
  background: url(../assets/prodetail/u3941.png) no-repeat;
  background-position: 60% 50%;
  background-size: contain;
  margin-right: 1rem;
}

/* 轮播图容器 */

.banner-area {
  /* border: 1px solid red; */
  width: 100%;
  height: 28.2rem;
  /* margin-top: ; */
}

/* 轮播图 */
.banner {
  width: 100%;
  height: 100%;
  position: relative;
}

.goback2,
.cart2 {
  display: inline-block;
  width: 2.3rem;
  height: 2.3rem;
  position: absolute;
  top: 2rem;
}
/* 轮播图区域的回退图标 */
.banner-area .goback2 {
  background: url(../assets/prodetail/u4004.png) no-repeat;
  background-position: 50% 50%;
  z-index: 2;
  left: 1.5rem;
}
/* 轮播图区域的购物车图标 */
.banner-area .cart2 {
  background: url(../assets/prodetail/u3941.png) no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  z-index: 2;
  right: 1.5rem;
}

/* 商品简介、服务详情 */
.short-intro,
.service-detail,.pro-param {
  /* margin-top: 10px; */
  width: 100%;
  /* height: 7rem; */
  padding: 0 1.66rem;
  border-bottom: 8px solid #ecfdfa;
}

/* 商品名称 */
.short-intro > .proname {
  height: 4.9rem;
  padding: 15px 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
/* 商品价格 */

.short-intro > .proprice {
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
}

/* 折扣价 */
.short-intro > .proprice > .dis-price {
  font-size: 20px;
  font-weight: bold;
  color: #ff5e81;
  margin-right: 1rem;
}

/* 原价 */
.short-intro > .proprice > .old-price {
  color: #ccc;
  font-size: 14px;
  font-weight: bold;
  text-decoration: line-through;
}
.short-intro > .rest-time {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
}
.short-intro > .rest-time > span:first-child {
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  margin-right: 1.24rem;
}

.short-intro > .rest-time > span:last-child {
  font-size: 12px;
  color: #ff5e81;
}
</style>