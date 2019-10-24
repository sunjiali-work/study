<template>
  <div class="dis_container">
    <p class="title-line">
      <span v-if="isTop" class="to-top">置顶</span>
      <span class="dis-title">关于近期服务器故障的说明</span>
      <span v-if="keyWord" class="key-word">求助</span>
    </p>
    <div class="sec-part">
      <!-- 评论左边文字部分 -->
      <div class="leftside">
        <!-- 评论文字主体 -->
        <p
          class="dis-font"
        >Lorem ipsum dolor 你是哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急ddddd顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急ddddd顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶斤计较急急急急急急急急急急急急急急急斤斤计较急急急急急急急急急急急急急急急ddddd顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶</p>
        <!-- 评论数量、时间 -->
        <div class="dis-foot">
          <!-- 评论数量 -->
          <router-link to class="dis-count">
            <img :src="require('../../assets/discuss/u167.png')" alt class="comSign" />
            <span>25684</span>
          </router-link>
          <!-- 日期 -->
          <span>2019-02-23</span>
        </div>
      </div>
      <!-- 评论右边 -->
      <div class="rightside" v-if="hasImg">
        <img v-if="true" :src="require('../../assets/discuss/u181.png')" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTop: true, //是置顶
      keyWord: "xx", //取值为underfined时候（没有关键字时），是false
      hasImg: false, //有图片时
      // 有图片时，评论的容器显示这个样式
      comStyWithImg: {
        //没有图片时，只显示两行
        maxHeight: "3rem"
      },
      comStyNoImg: {
        //有图片时显示这个样式
        maxHeight: "2rem"
      },

      // 评论数量和文字的共同的父容器
      faStyWithImg: {
        width: "58%",
        marginRight: "2%"
      },
      faStyNoImg: {
        width: "100%"
      }
    };
  }
};
</script>
<style scoped>
.dis_container {
  width: 100%;
  padding: 3%;
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
  margin: 8px 0;
  overflow: hidden;
  /* height:100px; */
}
.leftside {
  width: 100%;

  height: 100%;
}

/* 文字内容 */
.dis-font {
  font-size: 12px;
  line-height: 1rem;
  width: 100%;
  max-height: 2rem;
  overflow: hidden;
  position: relative;
}

.dis-font:before {
  content: "......";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1rem;
  width: 2rem;
  padding-left: 3px;
  box-sizing: border-box;
  z-index: 1;
  background: #fff;
}

.dis-font:after {
  content: "";
  display: inline-block;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: white;
}

/* 评论数量旁边的图片icon */
.comSign {
  margin-right: 5px;
}

/* 最后的评论数量和发表日期行 */
.dis_container .dis-foot {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}
/* 评论中的图片 */
.rightside {
  width: 40%;
  height: 96px;
  overflow: hidden;
  position: relative;
}

.rightside img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>