import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase"

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from "../views/Products.vue"
import Register from "../views/Register.vue"

Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: {
				path: '/home'
			}
		},
		// needs no authentication
		{
			path: '/home',
			name: "Home",
			component: Home
		},
		{
			path: '/about',
			name: "About",
			component: About
		},
		{
			path: '/register',
			name: "Register",
			component: Register
		},
		// needs authentication
		{
			path: '/dashboard',
			name: "Dashboard",
			component: Dashboard,
			meta: {
				authenticated: true
			}
		},
		{
			path: '/products',
			name: "Products",
			component: Products,
			meta: {
				authenticated: true
			}
		},		
	]
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.authenticated)) {
		firebase.auth().onAuthStateChanged(function(user) {
			if(!user) {
				next({
					path: '/'
				})
			} else {
				next()
			}
		})
	} else {
		next()
	}
})

export default router
