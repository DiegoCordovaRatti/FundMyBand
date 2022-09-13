import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
const Home = () => import('../views/Home.vue')
const ListaBandas = () => import('../views/ListaBandas.vue')
const Banda = () => import('../views/Banda.vue')
const Usuario = () => import('../views/Usuario.vue')
const Ingresa = () => import('../views/Ingresa.vue')

Vue.use(VueRouter)

// some routes can only be accessed by signing in
const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guardRoutes: true,
    }
  },
  {
    path: '/lista-bandas',
    name: 'ListaBandas',
    component: ListaBandas,
    meta: {
      guardRoutes: true,
    }
  },
  {
    path: '/banda/:id/:thisbanda',
    name: 'Banda',
    component: Banda,
    meta: {
      guardRoutes: true,
    }
  },
  {
    path: '/mi-cuenta/:usuario',
    name: 'Usuario',
    component: Usuario,
    meta: {
      guardRoutes: true,
    }
  },
  // default route when not signed in
  {
    path: '/ingresa',
    name: 'Ingresa',
    component: Ingresa
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 
router.beforeEach((to, from, next) => {
  let userData = store.getters.data;
  let authRequired = to.matched.some((route) => route.meta.guardRoutes);
  // if there is no signed in user, they will be redirected to 'Ingresa' view
  if (!userData && authRequired) {
    next("/ingresa");
  } 
  // if the user is signed in, they will be redirected to 'Home' view
  else if (userData && !authRequired) {
    next("/");
  } else {
    next();
  }
});

export default router
