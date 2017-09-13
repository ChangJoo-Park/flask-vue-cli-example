import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Main from '@/pages/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/app',
      name: 'Main',
      component: Main
    }
  ]
})
