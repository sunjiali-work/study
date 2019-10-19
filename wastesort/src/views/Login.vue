<template>
  <div class="container" :style="conStyle">
    <!-- 头部标签 -->
    <!-- <p class="pageTitle">
      <span>登录</span>
    </p>-->

    <div class="content">
      <div class="formCon">
        <!-- 手机号 -->

        <div class="inputCon">
          <mt-field class="loginInput" placeholder="请输入手机号"></mt-field>
        </div>
        <div class="inputCon codeInput">
          <mt-field class="loginInput" placeholder="请输入验证码"></mt-field>
          <a class="validCode" href="javascript:;">发送验证码</a>
        </div>
        <p>
          <span>登录表示用户同意</span>&nbsp;
          <router-link to="" class="agreement">&lt;&lt;用户注册协议&gt;&gt;</router-link>
        </p>
      </div>
      <!-- 按钮组 -->
      <div class="btns">
        <mt-button class="btn1">登录</mt-button>
        <mt-button class="btn2">取消</mt-button>
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
  height: 82%;
  background: #fff;
  border: none;
  /* margin-top: -15%;
   */

  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.formCon {
  height: 400px;
  width: 275px;
  text-align: left;
  background: url(../assets/login/1.png) no-repeat;
  background-position: 50% 10%;
}

.inputCon:first-child {
  margin-top: 100px;
}

.inputCon {
  width: 275px;
  height: 48.98px;
  margin: 0 auto;
}

.codeInput {
  position: relative;
}

/* 手机号/验证码 */
.loginInput {
  width: 275px;
  height: 48.98px;
  outline-style: none;
  border-color: transparent;
  padding: 1px;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #ff6687;
}

.validCode {
  display: inline-block;
  width: 60px;
  height: 16px;
  line-height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -8px;
  /* margin-left: 0; */
  color: #ff6687;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
}

.formCon > p {
  width: 275px;
  height: 50px;
  line-height: 50px;
}
/* 协议前 */
.formCon > p > span {
  color: #ccc;
  font-size: 12px;
}

/* 协议连接 */
.formCon > p > .agreement {
  color: #ff5e81;
  font-size: 12px;
}

.formCon > p > .agreement:hover{
  cursor: pointer;
}

/* 按钮组 */
.container .btns {
  width: 275px;
}

.btns > .btn1,
.btns > .btn2 {
  height: 40px;
  width: 100%;
  border-radius: 150px;
  font-size: 16px;
}

.btns > .btn1 {
  background: rgba(255, 94, 129, 1);
  color: #fff;
}

.btns > .btn2 {
  margin-top: 10px;
  border: 1px solid rgba(255, 94, 129, 1);
  background: #fff;
}
</style>