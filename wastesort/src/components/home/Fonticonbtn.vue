<template>
  <li>
    <router-link :to="navbtn.pageLink" class="icon_link">
      <img :src="navbtn.imgSrc" alt />
      <p>{{navbtn.font}}</p>
    </router-link>
  </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    navbtn: Object
  },
  created() {
   
  }
};
</script>
<style  scoped>
.icon_link {
  display: block;
  width: 58px;
  text-align: center;
}

.icon_link > img {
  /* display: inline-block; */
  width: 28px;
  height: 28px;
  /* margin: 0 auto; */
}

.icon_link > p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}
</style>