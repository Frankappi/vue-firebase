<template>
    <div>        
        <button type="button" class="btn set-link" @click="showForm =! showForm">
            <font-awesome-icon icon="sign-in-alt" />
        </button>
        <router-link to="/register" class="btn set-link">
            <font-awesome-icon icon="user-plus" />
        </router-link>

        <transition name="slide-in" mode="out-in">
            <div class=" lg-form" v-if="showForm">
                <div class="card bg-dark text-white">
                    <div class="card-header">
                        <h4>Start shopping</h4>
                        <div v-if="error" class="alert alert-info">{{error}}</div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <input type="text" v-model="lgemail" class="form-control" placeholder="E-mail">
                            </div>
                            <br>
                            <div class="form-group">
                                <input type="password" v-model="lgpassword" class="form-control" placeholder="*********">
                            </div>
                            <hr>
                            <button class="btn btn-block btn-success" @click="login()" @keyup.enter="login()">Login</button>
                        </form>                                    
                    </div>                
                </div>                
            </div>
        </transition>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "login-form",
    data() {
        return {
            lgemail: '',
            lgpassword: '',
            showForm: false,
            error: null
        }
    },
    methods: {
        login() {
            if(this.lgemail != '' && this.lgpassword != '') {
                firebase.auth().signInWithEmailAndPassword(this.lgemail, this.lgpassword).then(() => {
                    this.showForm = false
                    this.$router.replace({
                        path: "/products"
                    })
                }).catch(err => {
                    this.error = "Something went wrong"
                })
            } else {
                this.error = "E-mail and password please"
            }
        },
    }
}
</script>

<style scoped>
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
.lg-form {
    position: fixed;
    top: 12%;
    z-index: 9999;
}
</style>