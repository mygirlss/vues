import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/public/components/HelloWorld'
import SloftSlo from '@/public/components/SloftSlo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SloftSlo',
      name: 'SloftSlo',
      component: SloftSlo
    },
  ]
})
