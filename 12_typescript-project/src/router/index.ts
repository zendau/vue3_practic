import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import store from "../store/index"

import Messages from "../components/Messages.vue"
import Requests from "../components/Requests.vue"
import theAuth from "../components/theAuth.vue"
import theHelp from "../components/theHelp.vue"
import theRequest from "../components/Requests/theRequest.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'theAuth',
    component: theAuth,
    alias: "/auth",
    meta: {
      layout: "main",
      login: false
    }
  },
  {
    path: "/requests",
    name: "Requests",
    component: Requests,
    meta: {
      layout: "auth",
      login: true
    }
  },
  {
    path: "/req/:id",
    name: "req",
    component: theRequest,
    meta: {
      layout: "auth",
      login: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  const userStatus = store.getters['auth/userStatus']

  if (to.path === "/") {
    if (userStatus) {
      next("/requests")
    } else {
      next()
    }
  } else {
    if (to.meta.login && userStatus) {
      next()
    } else {
      next({
        path: "/",
        query: {
          error: "noAuth"
        }
      })
    }
  }

})

export default router
