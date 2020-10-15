import Vue from 'vue'
import App from './App.vue'
import { store } from './vuex/store';
import { BootstrapVue } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld';
import AppMovies from './components/AppMovies';
import MovieForm from './components/MovieForm';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/movies', component: AppMovies },
  { path: '/add-movie', component: MovieForm },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
