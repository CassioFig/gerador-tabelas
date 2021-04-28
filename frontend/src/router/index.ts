import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from "../views/index/Index.vue"
import Table from "../views/table/Table.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/table',
		name: 'Table',
		component: Table
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
