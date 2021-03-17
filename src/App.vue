<template>
	<div id="app">
		<Navbar />
		<transition name="page" mode="out-in">
			<router-view></router-view>
		</transition>
		<shoppingCart v-if="user.loggedIn" />
	</div>
</template>

<script>
import Navbar from "./components/NavBar"
import shoppingCart from "./components/shoppingCart"
import { mapGetters } from "vuex";
export default {
	name: "app",
	data() {
		return {
			
		}
	},
	components: {
		Navbar,
		shoppingCart
	},
	computed: {
        ...mapGetters({
            user: "user"
        })
    },
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: #6c757d;
}

p {
    margin: 0!important;
}

.page-enter-active, .page-leave-active {
	transition: opacity .4s, transform .4s;
}
.page-enter, .page-leave-to {
	/* transform: translateY(-10%); */
	transform: scale(.9);
	opacity: 0;
}

.slide-in-enter-active, .slide-in-leave-active {
	transition: opacity .3s, transform .3s;
}
.slide-in-enter, .slide-in-leave-to {
	transform: translateY(10%);
	opacity: 0;
}
</style>
