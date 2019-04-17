<template>
    <el-dropdown @command="_command">
        <el-button type="primary">
            {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='manageUsers'>管理用户</el-dropdown-item>
            <el-dropdown-item command='manageTenants'>管理租户</el-dropdown-item>
            <el-dropdown-item command='serverInformation'>服务信息</el-dropdown-item>
            <el-dropdown-item command='sitewhere'>SiteWhere网站</el-dropdown-item>
            <el-dropdown-item command='documentation'>文档</el-dropdown-item>
            <el-dropdown-item command='logout'>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        name: {
          type: String,
          default: '管理员'
        }
      };
    },
    mounted () {
      this.name = this.userName() || '管理员'
    },
    methods: {
      _command (name) {
        if (name === 'logout') {
          this.$router.push({path: '/'})
          this.SET_AUTH_TOKEN('')
          this.SET_USER_INFO({})
        } else {
          alert(name);
        }
      },
      ...mapGetters([
        'userName'
      ]),
      ...mapMutations([
        'SET_AUTH_TOKEN', 'SET_USER_INFO'
      ])
    }
  }
</script>

<style>
</style>
