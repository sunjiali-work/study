<template>
  <!-- 兑换商城 -->
  <div class="change-container">
    <!-- 页面顶部 -->
    <pagetitle :titlename="titleName"></pagetitle>
    <div class="content">
      <!-- 轮播图 -->
      <swipe :swipelist="swipeList" class="title-time"></swipe>

      <!-- 限时兑换title -->
      <change-in-time :restTime="restTime"></change-in-time>
      <!-- 限时兑换商品滚动区域 -->
      <div class="time_banner">
        <transproduct></transproduct>
      </div>
      <!-- 近期热门兑换的title -->
      <div class="change_intime hot_product">
        <div class="change_title">
          <p>
            <i class></i>
            <span>近期热门</span>
          </p>
        </div>
        <router-link to class="moreLink">更多</router-link>
      </div>

      <!-- 近期热门商品滚动区域 -->
      <div class="time_banner">
        <transproduct></transproduct>
      </div>
      <!-- 猜你喜欢的title -->
      <div class="change_intime hot_product">
        <div class="change_title">
          <p>
            <i class></i>
            <span>猜你喜欢</span>
          </p>
        </div>
      </div>

      <!-- 猜你喜欢的商品列表 -->

      <product-list ></product-list> 
      <!-- 没有更多 -->
      <no-more></no-more>
    </div>
  </div>
</template>
<script>
import Pagetitle from "../components/common/PageTitle.vue";
import Swipe from "../components/common/Swipe.vue";
import ChangeInTime from "../components/common/ChangeInTime.vue";
import TransProduct from "../components/common/TransProduct.vue"; //兑换商品滚动区域的组件
import ProductList from "../components/product/ProductList.vue"; //兑换商品滚动区域的组件
import NoMore from "../components/common/NoMore.vue";//没有更多了

export default {
  data() {
    return {
      titleName: "兑换商城",
      restTime: "12:00:00",
      swipeList: [
        //轮播图列表
        {
          imgSrc: require("../assets/home/u59.png")
        },
        {
          imgSrc: require("../assets/home/u60.png")
        }
      ]
 
    };
  },
  components: {
    pagetitle: Pagetitle,
    swipe: Swipe,
    ChangeInTime: ChangeInTime,
    transproduct: TransProduct,
    productList: ProductList, //猜你喜欢的商品列表
    NoMore //没有更多了
  }
};
</script>
<style scoped>
/* 页面容器 */
.change-container {
  background: url(../assets/home/u19.png) no-repeat;
  background-position: 0 -70px;
  /* width: 100%; */
  width:100vw;
}

/* 页面主体内容 */
.change-container > .content {
  width: 90vw;
  margin: 0 auto;
  padding-top: 45px;
  overflow: auto;
}
/* 第一条浅绿色的分隔标记 */
.title-time {
  border-bottom: 10px solid #ecfdfa;
  margin: 0 auto;
}
/* 轮播图 */
.time_banner {
  width: 100%;
  height: 165px;
  overflow: hidden;
  border-bottom: 8px solid #ecfdfa;
}

/* 限时兑换商品 */
.change_intime {
  width: 100%;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
}
.change_intime > .change_title {
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 16px;
}

.change_intime > .change_title > p {
  width: 54%;
  display: flex;
  justify-content: space-between;
}
.change_intime > .change_title > p > i {
  display: block;
  height: 12px;
  width: 0;
  border: 2px solid rgba(62, 210, 228, 1);
}

.change_intime > .change_title > p > span {
  display: block;
  height: 19px;
  line-height: 16px;
  font-size: 14px;
  font-weight: bold;
}

.change_intime > .change_title > span:last-child {
  display: block;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #333;
}

.change_intime > .moreLink {
  font-size: 12px;
  line-height: 16px;
  color: #ccc;
}

/* 近期热门 */
.hot_product > .change_title > p > i {
  display: block;
  height: 12px;
  width: 0;
  border: 2px solid rgba(255, 94, 129, 1);
}


</style>