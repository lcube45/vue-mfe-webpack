import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/team-blue',
      children: [
        { path: '', component: HomeView},
        { path: 'page1', component: () => import('../views/Page1View.vue')},
      ]
    },
  ]
})

export default router
