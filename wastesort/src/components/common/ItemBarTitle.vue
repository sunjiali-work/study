<template>
  <p class="bar-title">
    <i></i>
    <span>{{barName}}</span>
  </p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    barName: String

  }
};
</script>
<style scoped>
.bar-title {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0;
}
.bar-title > i {
  width: 4px;
  height: 16px;
  background: rgba(255, 94, 129, 1);
  border-radius: 2px;
  margin-right: 5px;
}
.bar-title > span {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}
</style>