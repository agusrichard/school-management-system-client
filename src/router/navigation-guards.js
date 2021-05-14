import Vue from 'vue'
import { checkAuthentication as checkAuth } from '../apis/auth'

export const checkAuthentication = async (to, from, next) => {
  try {
    const token = Vue.$cookies.get('access-token')
    const result = await checkAuth(token)
    console.log('result', result)
    next()
  } catch (error) {
    next({ name: 'Login' })
  }
}
