import Vue from 'vue'
import VueRouter from 'vue-router'
import Radar from "@/components/Radar";
import MainPage from "@/components/MainPage";
import AdoptPokemon from "@/components/AdoptPokemon";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/adopt',
    name: 'AdoptPokemon',
    component: AdoptPokemon
  },
  {
    path: '/radar',
    name: 'Radar',
    component: Radar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
