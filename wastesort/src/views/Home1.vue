<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

      <!-- 头部标签 -->
    <mt-navbar class="page-part" :selected.sync="selected">
      <mt-tab-item id="1">登录</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container :active.sync="selected">
      <mt-tab-item id="1">
        <div class="container">
          <div class="inputCon">
            <!-- 手机号 -->
            <div class="loginContainer">
              <input type="text" class="loginInput" placeholder="请输入手机号" />
            </div>
            <div class="loginContainer">
              <input type="text" class="loginInput" placeholder="请输入验证码" />
              <a href="javascript:;">发送验证码</a>
            </div>
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
      </mt-tab-item>
    </mt-tab-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
