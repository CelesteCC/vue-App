import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import vuex from 'vuex'
import Hello from '@/components/Hello'
import mine from '@/components/mine'
import index from '@/components/index'
import course from '@/components/course'
import custome from '@/components/custome'
import selfinfo from '@/components/selfinfo'
import musicList from '@/components/musicList'
import albuminfo from '@/components/albuminfo'
import search from '@/components/search'
import singer from '@/components/singer'
import radioPlay from '@/components/radioPlay'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(vuex)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Hello',
      component: Hello,
      children:[
        { path: '/index', component: index },
        { path: '/', component: course },
        { path: '/custome', component: custome },
        { path: '/mine', component: mine }
      ]
    },{
      path: '/selfinfo',
      name:'selfinfo',
      component: selfinfo
    },{
      path: '/musicList',
      name:'musicList',
      component: musicList
    },{
      path: '/albuminfo',
      name:'albuminfo',
      component: albuminfo
    },{
      path: '/search',
      name:'search',
      component: search
    },{
      path: '/singer',
      name:'singer',
      component: singer
    },{
      path: '/radioPlay',
      name:'radioPlay',
      component: radioPlay
    }
  ]
})
