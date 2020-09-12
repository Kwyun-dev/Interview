<template>
    <div id="app">
        <div id="header">
          <div class="logo"></div>
          <!-- https://img3.doubanio.com/f/ark/e5ba4576facb8314d5164025be4204b9b0ba0aec/pics/logo/nav.svg -->
          <div class="guide">
              <ul>
                  <li class="classification">
                      <a href="#">分类</a>
                  </li>
                  <li class="search">
                      <a href="#">查找</a>
                  </li>
              </ul>
          </div>
          <div class="navigation">
              <ul>
                  <li><a href="#">原创首页</a></li>
                  <li><a href="#">排行</a></li>
                  <li><a href="#">悬疑</a></li>
                  <li><a href="#">女性</a></li>
                  <li><a href="#">幻想</a></li>
                  <li><a href="#">文艺</a></li>
                  <li><a href="#">历史</a></li>
                  <li><a href="#">唱片拉力赛</a></li>
              </ul>
          </div>
          <div class="user">
              <ul>
                  <li><button id="login">登录</button></li>
                  <li><button id="register">注册</button></li>
              </ul>
          </div>
      </div>
      <router-view class="content"/>
    </div>
</template>

<script>
export default {
name: 'App'
}
</script>

<style>
body, ul, li {
  margin: 0;
  padding: 0;
}
body {
  background: var(--blue5);
}

.content {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
/* text-align: center;
color: #2c3e50;
margin-top: 60px; */
width: 80%;
margin: 0 auto;
}

ul li {
      display: inline-block;
      font-size: 13px;
  }
  a {
      text-decoration: none;
      color: #000000;
  }

  #header {
      overflow: hidden;
      box-shadow: 0.5px 0.5px 1px #888888;
      height: 60px;
      line-height: 60px;
  }
  #header > div {
      /* float: left; */
      display: inline-block;
  }
  #header .user {
      float: right;
      margin-right: 20px;
  }

  .guide {
      margin: 0 20px;
  }

  .navigation ul li {
      margin: 0 10px;
  }
  .navigation ul li a {
      display: inline-block;
      height: 55px;
  }
  .navigation ul li a:hover {
      border-bottom: 1px solid #000000;
  }
</style>
