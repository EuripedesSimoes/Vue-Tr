import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/peidos',
    name: 'Pedidoos',
    component: () => import('../views/PedidosView.vue')
  },
  // {
  // path: '/btn1',
  // name: 'bnt1',
  // component: () => import('../views/Btn1View.vue')
  // },
  // {
  // path: '/btn2',
  // name: 'bnt2',
  // component: () => import('../views/Btn2View.vue')
  // },
  // {
  // path: '/btn3',
  // name: 'bnt3',
  // component: () => import('../views/Btn3View.vue')
  // },
  // {
  //   path: '/BurgerPage',
  //   name: 'BurgerPage',
  //   component: () => import('../views/PageBurger.vue')
  // },
  {
    path: '/burgerPage',
    name: 'burgerPage',
    component: () => import('../views/PageLunchs/PageBurger.vue')
  },
  {
    path: '/pizzaPage',
    name: 'pizzaPage',
    component: () => import('../views/PageLunchs/PagePizza.vue')
  },
  {
    path: '/hotPage',
    name: 'hotPage',
    component: () => import('../views/PageLunchs/PageHotdog.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
