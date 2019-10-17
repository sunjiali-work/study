<template>
  <div class="container" :style="conStyle">
    <!-- 头部标签 -->
    <p class="pageTitle">
      <span>登录</span>
    </p>
    <!-- <div class="space"></div> -->
    <div class="content">
      <div class="inputCon">
        <!-- 手机号 -->

        <mt-field class="loginInput" placeholder="请输入手机号"></mt-field>

        <mt-field class="loginInput" placeholder="请输入验证码"></mt-field>
        <a href="javascript:;">发送验证码</a>

        <p>
          <span>登录表示用户同意</span>
          <a>用户注册协议</a>
        </p>
      </div>
      <div class="btns">
        <button>登录</button>
        <button>取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      conStyle: {
        height: screen.height + "px"
      }
    };
  },
  methods: {
    /*让容器的高等于屏幕的高 */
    setHeight() {
      // 获取屏幕的高度
      // 给本页面的容器设置宽高
      this.conStyle.height = screen.height + "px";
    }
  },
  created() {
    this.setHeight();
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: #2bcddd;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pageTitle {
  font-size: 24px;
  width: 80%;
  text-align: left;
}
.pageTitle > span {
  display: inline-block;
  height: 31px;
  line-height: 37px;
  font-weight: bold;
  border-bottom: 3px solid #ff5e81;
  color: #ff5e81;
  font-size: 24px;
}

.container > .content {
  width: 80%;
  height: 80%;
  background: white;
  border: none;
  margin-top: -15%;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
}

/* 手机号/验证码 */
.inputCon {
}
</style>