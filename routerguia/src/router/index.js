import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Parametro from "../views/Parametro.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: () => import("../views/Cadastro.vue"),
    children: [
      {
        path: "pessoa",
        name: "Pessoa",
        component: () => import("../views/About.vue")
      }
    ]
  },
  {
    path: "/parametro/:dado", //:dado indica que é necessário passar o parametro chamado dado
    name: "Parametro",
    component: Parametro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
