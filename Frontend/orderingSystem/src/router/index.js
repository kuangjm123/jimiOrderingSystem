import Vue from 'vue';
import VueRouter from 'vue-router';
import login from './components/login.vue';
import userHome from '../view/userView/userHome.vue';
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

Vue.use(VueRouter);

const routes = [
  { path: '/login', 
  component: login },
  {
    path:'/userHome',
    component:userHome
  }
];

const router = new VueRouter({
  routes
});

export default router;
