import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/team-blue',
      children: [
        { path: '', component: () => import('team_blue/TeamBlueHome')},
        { path: 'page1', component: () => import('team_blue/TeamBluePage1')},
      ]      
    },
  ]
})

export default router
