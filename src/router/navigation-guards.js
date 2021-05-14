import Vue from 'vue'

import store from '../store'
import { checkAuthentication as checkAuth } from '../apis/auth'

export const checkAuthentication = async (to, from, next) => {
  try {
    const token = Vue.$cookies.get('access-token')
    await checkAuth(token)
    store.dispatch('auth/setLogin', { status: true, accessToken: token })
    next()
  } catch (error) {
    store.dispatch('auth/setLogin', { status: false })
    next({ name: 'Login' })
  }
}
