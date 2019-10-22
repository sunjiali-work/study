<template>
  <div class>
    <p class="title-line">
      <span v-if="true">置顶</span>
      <span>关于近期服务器故障的说明</span>
      <span v-if="true">求助</span>
    </p>
    <div>
      <!-- 评论左边文字部分 -->
      <div>
        <!-- 评论文字主体 -->
        <p class="dis-font"></p>
        <!-- 评论数量、时间 -->
        <div class="dis-foot">
          <!-- 评论数量 -->
          <div class="dis-count">
            <img :src="require('../../assets/discuss/u167.png')" alt />
            <span>25684</span>
          </div>
          <!-- 日期 -->
          <span>2019-02-23</span>
        </div>
      </div>
      <!-- 评论右边 -->
      <img v-if="true" :src="require('../../assets/discuss/u181.png')" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>