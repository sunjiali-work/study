<template>
  <div class="items-con">
    <van-swipe @change="onChange" class="items" indicator-color="#2bcddd" :autoplay="3000">
      <van-swipe-item v-for="(item,i) of productImgs" :key="i" class="img-item">
        <img :src="item.path" />
      </van-swipe-item>
    </van-swipe>
    <div class="indicator">{{ current + 1 }}/4</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  props: {
    productImgs: Array
  }
};
</script>
<style  scoped>
.items-con {
  position: relative;
}
.items,
.img-item {
  width: 100%;
  height: 28rem;
}
.img-item {
  border-radius: 6px;
  overflow: hidden;
}
.img-item > img {
  width: 100%;
  height: 100%;
}

.indicator {
  width: 4rem;
  height: 1.5rem;
  bottom: 0.5rem;
  right: 3rem;
  position: absolute;
  border-radius: 10px;
  background: #000;
  font-size: 12px;
  color: #fff;
  text-align: center;
  opacity: 0.3;
}
</style>
