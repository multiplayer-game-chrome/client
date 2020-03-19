import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import GamePage from '../views/GamePage'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      title: 'Tic-Tac-Toe insert username'
    }
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage,
    meta: {
      requiresAuth: true,
      title: 'Tic-Tac-Toe play game'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.username) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
