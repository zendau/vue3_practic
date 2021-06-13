import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserList from '../components/UserList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Users',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
