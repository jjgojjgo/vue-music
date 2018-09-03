import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/recommend/recommend'
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/recommend',
    component: Recommend
  }, {
    path: '/singer',
    component: Singer
  }, {
    path: '/rank',
    component: Rank
  }, {
    path: '/',
    redirect: '/recommend'
  }]
})
