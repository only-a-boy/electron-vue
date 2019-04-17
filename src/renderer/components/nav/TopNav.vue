<template>
<div>
  <el-header>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <img id="logo" src="~@/assets/images/logo.png" alt="electron-vue">
      <el-menu-item index="line">
          站点
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">设备</template>
          <el-menu-item index="electron">
            规格
          </el-menu-item>
          <el-submenu index="2-2">
            <template slot="title">规格</template>
            <el-menu-item index="vue">
              设备
            </el-menu-item>
            <el-menu-item index="vue-router">
              设备组
            </el-menu-item>
          </el-submenu>
      </el-submenu>
      <el-menu-item index="assets">资产</el-menu-item>
      <el-menu-item index="">批量</el-menu-item>
      <el-menu-item index="schedules">定时任务</el-menu-item>
      <el-menu-item index="station">3D车站</el-menu-item>
      <el-menu-item index="test">画布</el-menu-item>
      <logout></logout>
    </el-menu>
  </el-header>
  
  <el-main>
    <router-view></router-view>
  </el-main>
</div>
    
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import Logout from '@/components/login/Logout'

  export default {
    data() {
      return {
        activeIndex: 'line'
      };
    },
    computed: {
      ...mapGetters([
        'currentMenu'
      ])
    },
    methods: {
      handleSelect(key, keyPath) {
        this.SET_MENU(key)
        this.$router.push({path: key})
      },
      ...mapMutations([
        'SET_MENU'
      ])
    },
    components: { Logout }
  }
</script>

<style>
    .el-dropdown {
        margin: 10px 20px 0 0;
        float: right;
    }

    #logo {
        height: auto;
        margin: 12px 0 0 15px;
        width: 180px;
        float: left;
    }
</style>
