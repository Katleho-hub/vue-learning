import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import store from '@/store';

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


router.beforeEach(async() => {
  // get users from users
  const users = store.state.users;

  if(!users){
    // dispatch calls the action in the store || pass in the action name i.e. loadUsers & some data
    // commit calls the mutation in the store
    await store.dispatch('loadUsers');
  }

})
export default router
