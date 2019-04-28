import Vue from 'vue'
import Router from 'vue-router'
import Venues from './components/Venues'
import Events from './components/Events'
import Bands from './components/Bands'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'events',
      component: Events
    },
    {
      path: '/bands',
      name: 'bands',
      component: Bands
    },
    {
      path: '/venues',
      name: 'venues',
      component: Venues
    }
  ]
})
