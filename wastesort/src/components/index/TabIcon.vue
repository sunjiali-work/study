<template>
  <div>
    <img :src="focused?selectedImg:defaultImg" class="imgStyle" />
  </div>
</template>
<script>
export default {
  props: {
    focused: true,
    defaultImg: { default: "" },
    selectedImg: { default: "" }
  }
};
</script>
<style scoped>
.imgStyle {
  width: 30px;
  height: 30px;
}
</style>