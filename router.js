import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from '/src/components/HeaderComponent.vue'
//import AboutComponent from '/src/AboutComponent.vue'
//import QualificationComponent from '/src/QualificationComponent.vue'
//import ContactComponent from '/src/ContactComponent.vue'
import AdminComponent from '/src/MyAdmin/AdminComponent.vue'
import BloggComponent from '/src/components/BloggComponent.vue'
import PlayersComponent from '/src/components/PlayersComponent.vue'
import ScheduleComponent from '/src/components/ScheduleComponent.vue'
import MediaComponent from '/src/components/MediaComponent.vue'
import ContactComponent from '/src/components/ContactComponent.vue'
import AboutComponent from '/src/components/AboutComponent.vue'

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
      path: '/BloggComponent',
      //name: 'CartComponent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BloggComponent
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
        }
  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router