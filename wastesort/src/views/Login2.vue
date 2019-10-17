<template>
  <div>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab-container1">外卖</mt-tab-item>
      <mt-tab-item id="tab-container2">订单</mt-tab-item>
      <mt-tab-item id="tab-container3">发现</mt-tab-item>
      <mt-tab-item id="tab-container4">我的</mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" :title="'tab-container1 ' +n" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" :title="'tab-container2 ' + n" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" :title="'tab-container3 ' + n" :key="n"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return { active: "tab-container1" };
  }
};
</script>
<style scoped>
</style>