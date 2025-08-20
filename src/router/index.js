import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*{
    path: '/',
    name: 'honme',
    component: Homeview
  },
  */
  { 
    path:'/contador',
    name:'contador',
  
    component: () => import('../components/contador.vue')
  },
  { 
    path:'/ListaDeTareas',
    name:'ListaDeTareas',
  
    component: () => import('../components/ListaDeTareas.vue')
  }
] 


})

export default router


