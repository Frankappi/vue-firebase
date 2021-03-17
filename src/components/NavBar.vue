<template>
    <div>
        <!-- tablet and desktop navbar -->
        <nav class="navbar navbar-expand-md fixed-top">
            <div class="container">
                <div class="d-none d-md-flex">
                    <router-link to="/" class="navbar-brand">Vue Firebase</router-link>   
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item" v-if="user.loggedIn">
                            <router-link to="/products" class="nav-link">Products</router-link>
                        </li>
                    </ul>
                </div>
                <div class="d-block d-sm-none">
                    <div class="row">
                        <div class="col-4 justify-content-center">
                            <router-link to="/" class="btn set-link">
                                <font-awesome-icon icon="home" />
                            </router-link> 
                        </div>
                        <div class="col-4 justify-content-center">
                            <router-link to="/about" class="btn set-link">
                                <font-awesome-icon icon="users" />
                            </router-link>
                        </div>
                        <div class="col-4 justify-content-center">
                            <router-link to="/products" class="btn set-link" v-if="user.loggedIn">
                                <font-awesome-icon icon="tag" />
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="my-2 my-lg-0">
                    <div v-if="!user.loggedIn">
                        <loginForm />                                               
                    </div>
                    <div v-if="user.loggedIn">
                        <router-link to="/dashboard" class="btn set-link">
                            <font-awesome-icon icon="user-cog" />
                        </router-link>
                        <button type="button" class="btn set-link" @click="logout()">
                            <font-awesome-icon icon="sign-out-alt" />
                        </button>               
                    </div>
                </div>                
            </div>
        </nav>
    </div>
</template>

<script>
import loginForm from "./LoginForm"
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
    name: "navbar",
    data() {
        return {
            // isLoggedIn: false,            
        }
    },
    components: {
        loginForm
    },
    computed: {
        ...mapGetters({
            user: "user"
        })
    },
    methods: {        
        logout() {
            firebase.auth().signOut().then(() => {
                this.isLoggedIn = false
                this.setForms = false
            })            
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #363945;
}
.nav-link, .navbar-brand {
    color: white;
    font-weight: bold;
    transition: 0.2s;
}

.nav-link:hover, .navbar-brand:hover {
    color: #17a2b8;
    font-weight: bold;
    transition: 0.2s;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
    color:#17a2b8;
}
.nav-item a.router-link-exact-active {
  	color: #17a2b8;
}
.mob-link {
    color: white;
    font-size: 12pt;
    font-weight: bold;
    padding: 15px;
    background-color: transparent;
    border: none;
}
.set-link {
    background-color: transparent;
    border: none;
    color: gray;
    font-size: 18pt;
}
.set-link:focus, .set-link:hover {
    border: none;
    outline-color: transparent;
    box-shadow: none;
    color: #17a2b8;
}
.set-link.router-link-exact-active {
    color: #17a2b8;
}
.switch-link {
    background-color: transparent;
    border: none;
    color: #28a745;
    font-size: 16pt;
}
.switch-link:focus, .switch-link:hover {
    border: none;
    outline-color: transparent;
    box-shadow: none;
    color: #17a2b8;
}
.switch-link.router-link-exact-active {
    color: #17a2b8;
}
</style>