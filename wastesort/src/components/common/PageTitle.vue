<template>
    <div class="page_title">
      <div>
        <span>{{titlename}}</span>
        <div class="page_title_icon">
          <router-link to class="title_icon">
            <img :src="require('../../assets/home/u23.png')" />
          </router-link>
          <router-link to class="title_icon">
            <img :src="require('../../assets/home/u22.png')" />
          </router-link>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    titlename: String
  }
};
</script>
<style scoped>


.page_title {
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  background: rgba(62, 210, 226, 1);
}
.page_title > div {
  width: 90%;
  margin: 0 auto;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 顶部文字 */
.page_title > div > span {
  font-size: 20px;
  line-height: 20px;
  color: #fff;
  font-weight: bold;
}

.page_title > div > .page_title_icon {
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>