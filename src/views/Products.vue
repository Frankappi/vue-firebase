<template>
	<div class="products">
		<div class="container">
			<addProduct />
			<div class="col-md-12 col-12">
				<div class="card bg-info text-white">
					<div class="card-header">
						<h2>Products</h2>
					</div>
					<div class="card-body">
						<p>
							this is the productpage
						</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4" v-for="(product, idx) in products" :key="idx">
					<div class="card bg-warning text-white">
						<div class="card-header">
							<p>{{ product.data.name }}</p>
						</div>
						<!-- <img :src="product.image"> -->
						<div class="card-body">
							<p>{{ product.data.description }}</p>
							<p>{{ product.data.price }}</p>
							<hr>
							<p>Stock: {{ product.data.quantity }}</p>
						</div>            
					</div>
				</div>	
			</div>
		</div>		
	</div>
</template>

<script>
import AddProduct from '../components/addProduct.vue'
import singleProduct from "../components/Product.vue"
import { mapGetters } from "vuex"

import firebase from "../firebaseConfig"
const db = firebase.firestore();
export default {
	name: "Products",
	data() {
		return {
			products: []
		}
	},
	methods: {
		
	},
	components: {
		AddProduct,
		singleProduct
	},
	computed: {
		...mapGetters({
            product: "product"
        })
	},
	firestore() {
		return {
			products: db.collection("./products")
		}
	}
}
</script>

<style scoped>
.products {
	background-color: #00A170;
	min-height: 100vh;
	width: 100%;
	padding: 100px 15px 30px 15px;
}
</style>