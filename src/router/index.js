import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      public: true
    }
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
    path: '/login',
    name: 'Login',    
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public: true
    }
  },

  {
    path: '/acceso',
    name: 'Acceso',    
    component: () => import(/* webpackChunkName: "acceso" */ '../views/Acceso.vue'),
    meta:{
      auth: true
    },
    children:[{
      path: 'categoria',
      name: 'Categoria',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
      meta:{
        auth: true
      }
    },
    {
      path: 'articulo',
      name: 'Articulo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
      meta:{
        auth: true
      }
    },
    {
      path: 'usuario',
      name: 'Usuario',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
      meta:{
        auth: true
      }
    },]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next) =>{
  if(to.matched.some(record => record.meta.public)){
    next();
  }else if (store.state.usuario){
    if(to.matched.some(record => record.meta.auth)){
      console.log(store.state.usuario);
      next();
    }
  }else{
      next({name:'Login'})
  }
})
//     // if(store.sate.user && store.state.user.rol === 'Administrador'){
//     //   next();
//     // }else{
//     //   // mandarlo algun lado
//     // }
//     if(store.sate.user){
//       next();
//     }else{
//       next({name:'Login'});
//     }
//   }else{
//     next();
//   }
// })

export default router
