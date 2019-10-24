<template>
  <div class="page-wrap">
    <!-- 子面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="home">
        <home></home>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">2222222</mt-tab-container-item>
      <mt-tab-container-item id="tab-container3"></mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航 -->
    <mt-tabbar v-model="active" class="bottbar" fixed>
      <mt-tab-item id="home" @click.native="changeState(0)">
        <tabicon
          slot="icon"
          :focused="list[0].isSelect"
          :defaultImg="require('../assets/default/shouye.png')"
          :selectedImg="require('../assets/selected/shouye.png')"
        ></tabicon>
      </mt-tab-item>
      <mt-tab-item id="near" @click.native="changeState(1)">
        <tabicon
          slot="icon"
          :focused="list[1].isSelect"
          :defaultImg="require('../assets/default/fujin.png')"
          :selectedImg="require('../assets/selected/fujin.png')"
        ></tabicon>
      </mt-tab-item>
      <mt-tab-item id="arcamero" @click.native="changeState(2)">
        <tabicon
          slot="icon"
          :focused="list[2].isSelect"
          :defaultImg="require('../assets/default/ar.png')"
          :selectedImg="require('../assets/selected/ar.png')"
        ></tabicon>
      </mt-tab-item>
      <mt-tab-item id="exchange" @click.native="changeState(3)">
        <tabicon
          slot="icon"
          :focused="list[3].isSelect"
          :defaultImg="require('../assets/default/shangcheng.png')"
          :selectedImg="require('../assets/selected/shangcheng.png')"
        ></tabicon>
      </mt-tab-item>
      <mt-tab-item id="mypage" @click.native="changeState(4)">
        <tabicon
          slot="icon"
          :focused="list[4].isSelect"
          :defaultImg="require('../assets/default/53.png')"
          :selectedImg="require('../assets/selected/53.png')"
        ></tabicon>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
//引入字体图标子组件
import Tabicon from "../components/index/TabIcon.vue";
import Home from "./Home.vue";
export default {
  data() {
    return {
      active: "home",
      list: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    
    changeState(num) {
      // 功能：切换页面
      //num 代表的是要切换第几个导航页面
      for (var i = 0; i < this.list.length; i++) {
        if (i == num) {
          this.list[i].isSelect = true;
        } else {
          this.list[i].isSelect = false;
        }
      }
    }
  },
  components: {
    tabicon: Tabicon,
    home: Home
  }
};
</script>
<style  scoped>
.page-wrap {
  overflow: auto;
  padding-bottom: 42px;
}
.bottbar {
  height: 42px;
  display: flex;
  align-items: center;
  /* position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0; */
}

.bottbar img {
  width: 30px;
  height: 30px;
}
</style>