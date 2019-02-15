import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SloftSlo from '@/components/SloftSlo'

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
