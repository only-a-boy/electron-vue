<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          这里只会有一些介绍
        </span>
        <system-information></system-information>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">介绍</div>
          <p>
              如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。
          </p>
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">调研内容</button><br><br>
        </div>
        <div class="doc">
          <div class="title alt">Other Documentation</div>

          <button class="alt"><router-link to="/electron">Electron</router-link></button>
          <button class="alt"><router-link to="/home">Vue.js</router-link></button>
        </div>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        console.log(link)
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 40px 80px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }

  a {
      text-decoration: none;
      color: cornflowerblue;
  }
</style>
