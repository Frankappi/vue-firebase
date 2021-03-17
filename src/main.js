import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "./firebaseConfig.js"

// Bootstrap V4
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faHome)
library.add(faUsers)
library.add(faTag)
library.add(faCogs)
library.add(faUserPlus)
library.add(faCartArrowDown)
library.add(faSignInAlt)
library.add(faSignOutAlt)
library.add(faUserCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
	store.dispatch("fetchUser", user);
	
});

new Vue({
	router,
	store,
	render: function (h) { return h(App) }
}).$mount('#app')
