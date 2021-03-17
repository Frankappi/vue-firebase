import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			loggedIn: false,
			data: null
		},
		product: {
			data: []
		},
		cart: []
	},
	getters: {
		user(state) {
			return state.user
		},
		product(state) {
			return state.product
		},
		total: state => {
			if(state.cart.length > 0) {
				return state.cart.map(product => product.price).reduce((total, amount) => total + amount);
			}
		}
	},
	mutations: {
		SET_LOGGED_IN(state, value) {
			state.user.loggedIn = value;
		},
		SET_USER(state, data) {
			state.user.data = data;
		},
		SET_PRODUCT(state, data) {
			state.product.data = data;
		},
		addToCart(state, payload) {
			return state.cart.push(payload);
		}
	},
	actions: {
		fetchUser({ commit }, user) {
			commit("SET_LOGGED_IN", user !== null);
			if(user) {
				commit("SET_USER", {
					displayName: user.displayName,
					email: user.email
				});
			} else {
				commit("SET_USER", null);
			}
		},
		addProduct({ commit }, product) {
			commit("SET_PRODUCT", {
				name: product.name,
				description: product.description,
				quantity: product.quantity,
				price: product.price
			});
		},
	}
})
