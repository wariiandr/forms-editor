import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FormList',
    component: () => import('../views/FormListView.vue')
  },
  {
    path: '/creating',
    name: 'FormCreating',
    component: () => import('../views/FormCreatingView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
