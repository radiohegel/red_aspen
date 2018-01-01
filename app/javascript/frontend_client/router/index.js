import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: "home",
			component: HomePage
		}
	]
})