import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import theme from '@/components/theme'
import article from '@/components/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/theme',
      name: 'theme',
      component: theme
    },{
      path: '/article',
      name: 'article',
      component: article
    }

  ]
})
