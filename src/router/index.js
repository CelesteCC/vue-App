import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mine from '@/components/mine'
import index from '@/components/index'
import course from '@/components/course'
import custome from '@/components/custome'
import selfinfo from '@/components/selfinfo'
import musicList from '@/components/musicList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'Hello',
      component: Hello,
      children:[
        { path: '/', component: index },
        { path: '/course', component: course },
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
    }
  ]
})
