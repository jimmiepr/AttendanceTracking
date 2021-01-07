import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";
import CheckIn from "@/views/CheckIn";
import Report from "@/views/Report";
import SubmitPetition from '@/views/SubmitPetition';  
import Petition from '@/views/Petition';  
import ForgotPassword from '@/views/ForgotPassword';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/check-in',
    name: 'CheckIn',
    component: CheckIn
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/petition',
    name: 'Petition',
    component: Petition
  },
  {
    path: '/submit-petition/:id',
    name: 'SubmitPetition',
    component: SubmitPetition
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
