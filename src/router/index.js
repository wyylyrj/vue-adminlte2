import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Starter from '@/components/Starter'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/',
      name: 'Starter',
      component: Starter
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
