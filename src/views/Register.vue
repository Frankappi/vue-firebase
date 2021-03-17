<template>
    <div class="registration">
        <div class="col-md-3 mx-auto my-5">
            <div class="card bg-info text-white">
                <div class="card-header">
                    <h4>Register here</h4>
                    <p>
                        And you can enjoy the store and all its features
                    </p>
                    <div v-if="error" class="alert alert-warning">{{error}}</div>
                    <div class="card-header bg-success text-white" v-if="user.loggedIn">
                        <p>
                            Thank you for regestration {{ user.data.displayName }}, enjoy shopping
                        </p>
                    </div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="signup">
                        <div class="form-group">
                            <input type="text" v-model="rgname" class="form-control" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="rgemail" class="form-control" placeholder="Enter e-mail">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="rgpassword" class="form-control" placeholder="Enter password">
                        </div>
                        <hr>
                        <button @click="signup()" class="btn btn-block btn-success">Register</button>
                    </form>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import firebase from "firebase"
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            rgemail: '',
            rgpassword: '',
            rgname: '',
            showForms: true,
            error: null
        }
    },
    computed: {
        ...mapGetters({
            user: "user"
        })
    },
    methods: {
        signup() {
            if(this.rgemail != '' && this.rgpassword != '') {
                firebase.auth().createUserWithEmailAndPassword(this.rgemail, this.rgpassword).then(data => {                    
                    data.user.updateProfile({
                        displayName: this.rgname
                    })
                })
                .then(() => {
                    this.showForms = false
                    this.rgname = ''
                    this.rgemail = ''
                    this.rgpassword = ''
                })
            } else {
                this.error = "All fields required"
            }
        }
    }
}
</script>

<style scoped>
.registration {
	background-color: #6c757d;
	min-height: 100vh;
	width: 100%;
	padding: 100px 15px 30px 15px;
}
.btn {
    color: white;
}
</style>