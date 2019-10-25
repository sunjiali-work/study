<template>
  <ul
    class="ulpros"
    @touchstart="moveStart"
    @touchend="moveStop"
    @touchmove="moveImgs"
    :style="ulStyle"
  >
    <product v-for="(product,i) of productList" :key="i" :goods="product"></product>
    <router-link to class="moreproduct">
      <p>查</p>
      <p>看</p>
      <p>更</p>
      <p>多</p>
    </router-link>
  </ul>
</template>
<script>
import Product from "./Product.vue";
export default {
  data() {
    return {
      productList: [
        {
          imgUrl: require("../../assets/change_product/1.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        },
        {
          imgUrl: require("../../assets/change_product/2.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        },
        {
          imgUrl: require("../../assets/change_product/3.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        },
        {
          imgUrl: require("../../assets/change_product/4.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        },
        {
          imgUrl: require("../../assets/change_product/5.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        },
        {
          imgUrl: require("../../assets/change_product/5.png"),
          nowmoney: "125" + "币",
          oldmoney: "100"
        }
      ], //商品列表

      maxLeft: -15, //限时兑换商品margin-left的最大值
      minLeft: -310, //限时兑换商品margin-left的最小值
      clientX1: 0, // 鼠标所在位置的clientX坐标
      clientX2: 0,
      canMove: false, //是否能移动
      marLeft: -15, //限时兑换商品的margin-left的数值部分，去掉“px”
      ulStyle: {
        marginLeft: "-15px"
      }
    };
  },
  methods: {
    moveStop($event) {
      this.canMove = false;
    },
    moveStart($event) {
      //判断是否是鼠标左键
      this.canMove = true;
      this.clientX1 = $event.touches[0].clientX; //记录鼠标左键按下时的x坐标
    },
    // 移动商品图片
    moveImgs($event) {
      // console.log("move:"+$event.touches[0])
      //
      // 鼠标移入ul区域，并按下鼠标，
      // 获取这时鼠标的clientX，clinetY坐标，开始移动鼠标后停下，记录移动后停下新的clientX和clientY
      // 鼠标移动的距离就是：gap=(now.clientX-old.clientX)
      // 然后ul 原有的margin-left的值+gap，就是最新的margin-left了
      // 鼠标移动后，计算的margin-left如果小于最小值，margin-left就等于最小值 （移动到最左边）
      // margin-left如果大于最大值，margin-left就等于最大值。（移动到最右边）
      //更新clientX1 的值，方便下一次判断
      //如果当前元素是ul元素
      $event.preventDefault(); //阻止默认行为
      var node = $event.touches[0].target;

      // if (node.nodeName == "UL") {
      if (this.canMove) {
        //获取移动后最新的鼠标所在位置的x坐标
        this.clientX2 = $event.touches[0].clientX;
        //计算移动了多少距离：
        var gap = this.clientX2 - this.clientX1;
        //对ul的margin-left进行更新，让其移动
        this.marLeft += gap;
        if (this.marLeft < this.minLeft) {
          // 鼠标移动后，计算的margin-left如果小于最小值，margin-left就等于最小值 （移动到最左边）
          this.marLeft = this.minLeft;
        }

        if (this.marLeft > this.maxLeft) {
          // margin-left如果大于最大值，margin-left就等于最大值。（移动到最右边）
          this.marLeft = this.maxLeft;
        }
        // console.log(this.marLeft);
        this.ulStyle.marginLeft = this.marLeft + "px";
        this.clientX1 = this.clientX2;
      }
      //  }
    }
  },

  components: {
    product: Product
  }
};
</script>
<style  scoped>
/* 商品滚动图 */
.ulpros {
  list-style: none;
  margin-left: -15px;
  height: 150px;
  padding-bottom: 8px;

  width: 900px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: nowrap;
}

.moreproduct {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30px;
  height: 127px;
}

.moreproduct > p {
  width: 30px;
  height: 16px;
  color: #333;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
}
</style>
