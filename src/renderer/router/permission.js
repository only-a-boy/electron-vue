import { router } from '@/router'
import store from './../store'
import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.token) {
      Message({message: '抱歉!您没有权限', type: 'error'})
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.onError(error => console.log(error));
