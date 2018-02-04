import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactPage from '../pages/ContactPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: "home",
			component: HomePage
		},
		{
			path: '/contact',
			name: "contact",
			component: ContactPage
		}
	]
})