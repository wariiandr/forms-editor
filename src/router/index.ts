import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'FormList',
    component: () => import('../views/FormListView.vue')
  },
  {
    path: '/editor/:id',
    name: 'Editor',
    component: () => import('../views/EditorView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
