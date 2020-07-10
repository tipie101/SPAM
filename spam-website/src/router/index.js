import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Events from '../components/Events'
import Info from '../components/Info'
import Upcoming from '../components/Upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
  ]
})
