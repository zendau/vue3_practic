import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import New from "../views/New.vue"
import Task from '../views/Task.vue'
import Sandbox from "../components/sandbox.vue"

const routes = [
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    alias: "/"
  },
  {
    path: "/new",
    name: "New",
    component: New
  },
  {
    path: "/task/:id?",
    name: "Task",
    component: Task
  },
  {
    path: "/sandbox",
    component: Sandbox
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active"
})

export default router
