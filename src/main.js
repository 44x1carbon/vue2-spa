import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import SearchPage from './pages/search.vue'
import JoinedPage from './pages/joined.vue'
import HoldingPage from './pages/holding.vue'
import EventDetailPage from './pages/event-detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [   
    { path: '/', redirect: '/search' },   
    { path: '/search', component: SearchPage },
    { path: '/joined', component: JoinedPage },  
    { path: '/holding', component: HoldingPage },
    { path: '/event/:id', component: EventDetailPage }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
