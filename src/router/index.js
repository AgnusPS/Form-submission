import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'details',
      component: DetailsView
    },
  ]
})

export default router
