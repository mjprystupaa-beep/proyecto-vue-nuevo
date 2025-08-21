import { createRouter, createWebHistory } 
from 'vue-router'

import contador from '@/modelus/contador/components/contador.vue'
import ListaDeTareas from '@/modelus/ListaDeTareas/components/ListaDeTareas.vue'  

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
  
    component: () => import('../modelus/contador/components/contador.vue')
  },
  { 
    path:'/ListaDeTareas',
    name:'ListaDeTareas',
  
    component: () => import('../modelus/ListaDeTareas/components/ListaDeTareas.vue')
    
  },
  {
    path:'/registrar',
    name:'registrar',
  
    component: () => import('../modelus/registro/views/registrarView.vue')
    
  },
] 


})

export default router


