import { createRouter, createWebHistory } 
from 'vue-router'
import * as yup from 'yup';

const schema = yup.object({
  nombre: yup.string().required(),
  email: yup.string().email().required(),
});





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
  
    component: () => import('../modules/contador/components/contador.vue')
  },
  { 
    path:'/ListaDeTareas',
    name:'ListaDeTareas',
  
    component: () => import('../modules/ListaDeTareas/components/ListaDeTareas.vue')
    
  },
{ 
    path:'/registrar',
    name:'registrar',
  
    component: () => import('../modules/registro/views/RegistrarView.vue')
    
  }
] 


})

export default router
