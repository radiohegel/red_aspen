import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import App from '../app.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: "home",
			component: App
		}
	]
})