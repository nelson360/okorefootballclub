import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from '/src/components/HeaderComponent.vue'

import AdminComponent from '/src/MyAdmin/AdminComponent.vue'
import BlogComponent from '/src/components/BlogComponent.vue'
import PlayersComponent from '/src/components/PlayersComponent.vue'
import ScheduleComponent from '/src/components/ScheduleComponent.vue'
import MediaComponent from '/src/components/MediaComponent.vue'
import ContactComponent from '/src/components/ContactComponent.vue'
import AboutComponent from '/src/components/AboutComponent.vue'
import HomeComponent from '/src/components/HomeComponent.vue'
import PlayerComponent from '/src/components/PlayerComponent2021.vue'

const routes = [
    {
      path: '/',
      //name: 'home',
      component: HeaderComponent
    },
    {
      path: '/AboutComponent',
      //name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:AdminComponent
    },
    {
      path: '/BlogComponent',
      //name: 'CartComponent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BlogComponent
    },
    {
      path: '/PlayersComponent',
      //name: 'AdminPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PlayersComponent
    },
    {
    path: '/ScheduleComponent',
    //name: 'AdminPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ScheduleComponent
    },
    {
    path: '/MediaComponent',
    //name: 'AdminPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MediaComponent
    },
    {
    path: '/ContactComponent',
    //name: 'AdminPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContactComponent
    },
    {
        path: '/AboutComponent',
        //name: 'AdminPage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: AboutComponent
        },
        {
          path: '/HomeComponent',
          component: HomeComponent
        },{
          path:'/PlayerComponent',
          component:PlayerComponent
        }
  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router