import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'
import CreateTaskVue from '@/views/CreateTask.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'task',
      component: TaskDetailView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateTaskVue
    },
    {
      path: '/update/:id',
      name: 'update',
      component: CreateTaskVue
    },
  ]
})

export default router
