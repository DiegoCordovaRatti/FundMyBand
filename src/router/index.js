import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const ListaBandas = () => import('../views/ListaBandas.vue')
const Banda = () => import('../views/Banda.vue')
const Usuario = () => import('../views/Usuario.vue')
const SignUp = () => import('../views/SignUp.vue')
const SignIn = () => import('../views/SignIn.vue')
const Administrar = () => import('../views/Administrar.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista-bandas',
    name: 'ListaBandas',
    component: ListaBandas
  },
  {
    path: '/banda/:id/:thisbanda',
    name: 'Banda',
    component: Banda
  },
  {
    path: '/mi-cuenta/:usuario',
    name: 'Usuario',
    component: Usuario
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/administrar',
    name: 'Administrar',
    component: Administrar,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
