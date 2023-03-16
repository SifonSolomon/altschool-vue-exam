import { createRouter, createWebHistory } from 'vue-router'
import Counter from '@/components/CounterApp.vue'
import NotFound from '@/components/NotFound.vue'
import HomeApp from '@/components/HomeApp.vue'




const routes = [
    {
        path: '/',
        name: 'HomeApp',
        component: HomeApp
      },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '/:path(.*)',
    name: NotFound,
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes

  
});



export default router