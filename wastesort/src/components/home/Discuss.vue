<template>
  <div class="dis_container">
    <p class="title-line">
      <span v-if="true" class="to-top">置顶</span>
      <span class="dis-title">关于近期服务器故障的说明</span>
      <span v-if="true" class="key-word">求助</span>
    </p>
    <div class="sec-part">
      <!-- 评论左边文字部分 -->
      <div class="leftside">
        <!-- 评论文字主体 -->
        <p
          class="dis-font"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, fuga! Nihil vel sequi deserunt veniam! Veniam ratione quisquam sit. Impedit corporis non a officia officiis ducimus laboriosam laudantium ex corrupti!</p>
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
      <div class="rightside" v-if="true">
        <img v-if="true" :src="require('../../assets/discuss/u181.png')" alt />
      </div>
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
.dis_container {
  width: 100%;
}

.dis_container > .title-line {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}

.dis_container > .title-line > .to-top {
  display: block;
  width: 36px;
  height: 16px;
  line-height: 16px;
  background: rgba(255, 94, 129, 1);
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-right: 4px;
}

/* 评论标题文字 */
.dis_container > .title-line > .dis-title {
  font-size: 14px;
  margin-right: 15px;
  height: 19px;
  line-height: 19px;
  font-weight: bold;
}

/* 关键字 */
.dis_container > .title-line > .key-word {
  display: block;

  width: 40px;
  height: 19px;
  background: #dfa32d;
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}

/* 评论内容 -容器*/
.sec-part {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100px;
}
.leftside {
  width: 60%;
  height: 100%;
}

/* 文字内容 */
.dis-font {
  height: 50px;
  width: 100%;
  text-overflow: ellipsis; 
  overflow: hidden;
}
/* 评论中的图片 */
.rightside {
  width: 40%;
  height: 96px;
}
</style>