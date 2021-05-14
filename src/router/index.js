import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

import { checkAuthentication } from './navigation-guards'

// ===== AUTH ROUTES =====
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import ForgetPassword from '../views/auth/forget-password.vue'
import ChangePassword from '../views/auth/change-password.vue'
import SendValidationEmail from '../views/auth/send-validation-email.vue'

// ===== USER ROUTES =====
import UserProfile from '../views/user/profile.vue'

// ===== FACULTY ROUTES =====
import FacultyList from '../views/faculty/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // ===== AUTH ROUTES REGISTRATION =====
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/send-validation-email',
    name: 'SendValidationEmail',
    component: SendValidationEmail
  },
  {
    path: '/auth/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/auth/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  // ===== AUTH ROUTES REGISTRATION =====
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: UserProfile,
    beforeEnter: checkAuthentication
  },
  // ===== FACULTY ROUTES REGISTRATION =====
  {
    path: '/faculty/list',
    name: 'FacultyList',
    component: FacultyList,
    beforeEnter: checkAuthentication
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
