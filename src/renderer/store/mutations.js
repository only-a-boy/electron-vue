import * as types from './mutation-types'
import { router, asyncRouterMap } from './../router/index'

const mutations = {
  [types.SET_MENU] (state, name) {
    state.currentMenu = name
  },
  [types.SET_AUTH_TOKEN] (state, token) {
    state.authToken = token
  },
  [types.SET_USER_INFO] (state, info) {
    state.userInfo = info
  },
  [types.SET_USER_ROUTES] (state, menus) {
    // 生成用户路由表
    state.userRoutes = asyncRouterMap.filter(route => {
      return menus.some(menu => menu.name === route.name)
    })
    router.addRoutes(state.userRoutes)
  }
}

export default mutations
