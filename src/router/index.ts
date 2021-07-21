import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ToDoList from '../views/ToDoList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ToDoList',
    component: ToDoList
  },
  {
    path: '/analytics',
    name: 'Analytics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Analytics.vue')
  },
  {
    path: '/ringtones',
    name: 'Ringtones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ringtones.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
