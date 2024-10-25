import { createRouter, createWebHistory } from 'vue-router';

import LayoutAuth from '@/Shared/components/LayoutAuth.vue';
import Login from '@/modules/Login/views/Login.vue';
import Register from '@/modules/Register/views/Register.vue';

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    component: LayoutAuth,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
