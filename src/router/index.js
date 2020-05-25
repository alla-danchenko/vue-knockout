import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from '../components/Users';
import About from '../components/About';

Vue.use(VueRouter)

export default new VueRouter({
  base: "/vue-knockout/",
  mode: 'history',
  routes:[
    {
      name: "users",
      component:Users,
      path:'/users'
    },
    {
      name: "about",
      component:About,
      path:'/about'
    },
    { path: "*", redirect: "/users" }
  ]
})
