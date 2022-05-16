import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trending from '../views/Trending.vue'
import Subscriptions from '../views/Subscriptions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending,
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions,
  },
]

const router = new VueRouter({
  routes,
})

export default router
