// 引入vue-router对象
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

/**
 * 定义路由数组
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
];

/**
 * 创建路由
 */
const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory("/"),
  // history:createWebHashHistory("/#"),
  routes,
});

/**
 * 输出对象
 */
export default router;