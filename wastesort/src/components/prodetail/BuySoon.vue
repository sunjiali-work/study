<template>
  <div class="buysoon">
    <!-- 收藏/添加到购物车 -->
    <div class="add-fav">
      <button>
        <img :src="require('../../assets/prodetail/gouwuche.png')" alt />
      </button>
      <!-- 分隔线 -->
      <img :src="require('../../assets/prodetail/split.png')" alt />
      <button @click="changeStar">
        <img :src="!isFav?starSrc:starAddedSrc" alt />
      </button>
    </div>
    <!-- 立即购买按钮 -->

    <button class="buy-btn">立即购买</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFav: false,
      starSrc: require("../../assets/prodetail/star.png"),
      starAddedSrc: require("../../assets/prodetail/star2.png")
    };
  },
  methods: {
    changeStar() {
      //是否收藏
      if (this.isFav) {
        this.isFav = false;
      } else {
        this.isFav = true;
      }
    }
  },
  created() {}
};
</script>
<style scoped>
.buysoon {
  width: 100%;
  height: 80px;
  position: fixed; /*固定在页面底部，不会随滚动条变化而变化*/
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: left;
}

.buysoon > .add-fav {
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
}
/* 添加到购物车/收藏按钮 */
.buysoon > .add-fav > button {
  width: 49%;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
}

.add-fav > img {
  width: 2%;
  height: 50%;
}
/* 添加到购物车/收藏按钮-图片 */
.buysoon > .add-fav > button > img {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 立即购买按钮 */
.buysoon > .buy-btn {
  width: 50%;
  height: 100%;
  outline: none;
  border: none;
  background: rgba(43, 205, 221, 1);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>