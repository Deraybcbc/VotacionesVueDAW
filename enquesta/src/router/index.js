import { createRouter, createWebHistory } from 'vue-router'
import Votacions from '../components/VotacionsScreen.vue'
import Login from '@/views/loginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/votacion',
      name: 'votacion',
      component: Votacions,
    },
  ],
})

export default router
