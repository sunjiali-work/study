<template>
  <!-- 附近 -->
  <div class="near_container">
  <baidu-map class="bm-view" :style="mapStyle" :center="center" :zoom="zoom" @ready="handler"></baidu-map> 
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      mapStyle: {
        //地图容器的样式
        height: screen.height - 42 + "px"
      }
    };
  },
  methods: {
    handler({ BMap, map }) {
     
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
      this.pinchToZoom = true;
   
    }
  }
};
</script>
<style  scoped>
.near_container {
  width: 100%;
  height: 100%;
}
.bm-view {
  width: 100%;
  height: 300px;
}
</style>