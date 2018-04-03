import Vue from 'vue'
import Router from 'vue-router'
import markdown from '@/components/Markdown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'markdown',
      component: markdown
    }
  ]
})
