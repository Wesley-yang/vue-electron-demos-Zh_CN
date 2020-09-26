import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home'),
    children:[
      {
        path:"/winconfig",
        component:() => import('@/views/win/win-config')
      },
      {
        path:"/navigation",
        component:()=> import('@/views/menu/navigation.vue')
      },
      {
        path:"/rightclickmenu",
        component:()=> import('@/views/menu/right-click-menu.vue')
      },
      {
        path:"/keyboard",
        component:()=> import('@/views/menu/key-board.vue')
      },
      {
        path:"/tray",
        component:()=> import('@/views/menu/tray.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
