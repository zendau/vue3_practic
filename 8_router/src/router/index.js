import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Mail from '../views/Mail.vue'
import Login from '../views/Login.vue'
import Forget from '../views/Forget.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    alias: "/"
  },
  {
    path: '/mail/:id?',
    name: 'mail',
    component: Mail,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
