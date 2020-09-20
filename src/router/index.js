import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about/About.vue'
import A from '../views/about/aboutChild/A.vue'
import B from '../views/about/aboutChild/B.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    children: [
      {
        path: '',
        component: A
      },
      {
        path: 'aaa',
        component: A
      },
      {
        path: 'bbb',
        component: B
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
