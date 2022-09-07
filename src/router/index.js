import Vue from 'vue'
import VueRouter from 'vue-router'
// import auth from '../firebase/authentification'
import store from '../store/index'
const Home = () => import('../views/Home.vue')
const ListaBandas = () => import('../views/ListaBandas.vue')
const Banda = () => import('../views/Banda.vue')
const Usuario = () => import('../views/Usuario.vue')
const Ingresa = () => import('../views/Ingresa.vue')
const Administrar = () => import('../views/Administrar.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      guardRoutes: true,
    }
  },
  {
    path: '/lista-bandas',
    name: 'ListaBandas',
    component: ListaBandas,
    meta:{
      guardRoutes: true,
    }
  },
  {
    path: '/banda/:id/:thisbanda',
    name: 'Banda',
    component: Banda,
    meta:{
      guardRoutes: true,
    }
  },
  {
    path: '/mi-cuenta/:usuario',
    name: 'Usuario',
    component: Usuario,
    meta:{
      guardRoutes: true,
    }
  },
  {
    path: '/ingresa',
    name: 'Ingresa',
    component: Ingresa
  },
  {
    path: '/administrar',
    name: 'Administrar',
    component: Administrar,
    meta:{
      guardRoutes: true,
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let email = store.getters.data; 
  let authRequired = to.matched.some((route) => route.meta.guardRoutes);
  if (!email && authRequired) {
    next("/ingresa");
  } else if (email && !authRequired) {
    next("/");
  } else {
    next();
  }
});

export default router
