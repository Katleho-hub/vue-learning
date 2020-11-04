import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
