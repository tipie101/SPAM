import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import TechIT from '../components/TechIT'
import TutsTheory from '../components/TutsTheory'
import Info from '../components/Info'
import ArtDesign from '../components/ArtDesign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TutsTheory',
      name: 'tutorials & theory',
      component: TutsTheory
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/ArtDesign',
      name: 'art & design',
      component: ArtDesign
    },
    {
      path: '/TechIT',
      name: 'tech & it',
      component: TechIT
    },
  ]
})
