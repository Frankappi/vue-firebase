<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-md-4 col-6">
                <div class="card bg-success text-white">
                    <div class="card-header">
                        <h4>Account info</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item bg-success">Display name: {{ user.data.displayName }}</li>
                            <li class="list-group-item bg-success">E-mail: {{ user.data.email }}</li>
                            <li class="list-group-item bg-success text-center">
                                <div class="btn-group">
                                    <button class="btn btn-warning">Chance Password</button>
                                    <button class="btn btn-danger">Delete Account</button>
                                </div>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-6">
                <div class="card bg-warning text-white">
                    <div class="card-header">
                        <h4>Orders info</h4>
                    </div>
                    <div class="card-body">
                        <p>
                            This is the card with the order info
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-6">
                <div class="card bg-danger text-white">
                    <div class="card-header">
                        <h4>Support</h4>
                    </div>
                    <div class="card-body">
                        <p>
                            Here you can find help for a lot of things
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "dashboard",
    data() {
        return {
            
        }        
    },
    components: {

    },
    computed: {
        ...mapGetters({
            user: "user"
        })
    },
    methods: {
        
    }
}
</script>

<style scoped>
.dashboard {
	background-color: #0072B5;
	min-height: 100vh;
	width: 100%;
	padding: 100px 15px 30px 15px;
}
.btn, .btn:hover {
    color: white;
}
</style>