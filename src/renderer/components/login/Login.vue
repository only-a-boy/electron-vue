<template>
    <div class="login-container">
        <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
                 label-width="0px"
                 class="card-box login-form">
            <h3 class="title">登录</h3>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" :type="pwdType" v-model="loginForm.password"
                          autoComplete="on"
                          placeholder="密码">
                </el-input>
                <span class="show-pwd" @click="showPwd"></span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="_login">
                    登录
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" style="width:100%;" :loading="loading" @click.native.prevent="__customerLogin">
                    游客登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import { login } from '../../api/home'
  import { mapMutations } from 'vuex'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!value || value.trim().length < 1) {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (!value || value.trim().length < 1) {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password'
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      _login() {
        login(this.loginForm, (data) => {
          this.SET_AUTH_TOKEN(data.token)
          this.SET_USER_INFO(data)
          this.$router.push({ path: 'home' })
        })
      },
      __customerLogin() {
        this.$router.push({ path: 'home' })
      },
      ...mapMutations([
        'SET_AUTH_TOKEN', 'SET_USER_INFO'
      ])
    }
  }
</script>

<style>
    .title {
        text-align: center;
    }

    .login-container {
        width: 80%;
        margin-left: 10%;
    }
</style>