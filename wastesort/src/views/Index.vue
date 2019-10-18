<template>
  <div>
    <!-- 子面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
       
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
       
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航 -->
    <mt-tabbar v-model="active" class="bottbar">
      <mt-tab-item id="index" @click.native="changeState(0)">
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
export default {
  data() {
    return {
      active: "index",
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
    tabicon: Tabicon
  }
};
</script>
<style  scoped>
.bottbar {
  height: 60px;
  display: flex;
  align-items: center;
}

.bottbar img {
  width: 30px;
  height: 30px;
}
</style>