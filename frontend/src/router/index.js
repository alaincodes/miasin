import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/Homepage.vue'
import UserPost from '@/views/UserPost.vue'
import AboutPage from '@/views/AboutIt.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/user-post', name: 'UserPost', component: UserPost },
  { path: '/about', name: 'About', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
