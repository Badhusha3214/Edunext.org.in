import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Terms from '@/views/TermsConditions.vue'
import Privacy from '@/views/PrivacyView.vue'
import We from '../views/We.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/Privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/about',
      name: 'we',
      component: We
    }
  ]
})

export default router
