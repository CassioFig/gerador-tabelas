import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from "../views/index/Index.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		component: Index
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
