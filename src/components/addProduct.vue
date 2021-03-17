<template>
    <div class="add-product">
        <div class="col-md-12">
            <div class="card bg-dark text-white">
                <div class="card-header">
                    <h5>Add a Product</h5>
                    <transition name="slide-in" mode="out-in">
                        <div class="alert bg-success" v-if="added">
                            <p>Product Successfully added!</p>
                        </div>
                    </transition>      
                </div>
                <div class="card-body">
                    <form @submit.prevent="addProduct()">
                        <div class="form-group">
                            <input type="text" v-model="productName" class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <textarea v-model="productDescription" rows="5" class="form-control" placeholder="Description"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="number" v-model="productQuantity" class="form-control" placeholder="Quantity">
                        </div>
                        <div class="form-group">
                            <input type="number" v-model="productPrice" class="form-control" placeholder="Price">
                        </div>
                        <button class="btn btn-block btn-success" @click="addProduct()">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProductDataService from "../collections/productCollection";
export default {
    name: "add-product",
    data() {
        return {
            productName: '',
            productDescription: [],
            productQuantity: null,
            productPrice: null,
            added: false
        }
    },
    methods: {
        ...mapActions(["SET_PRODUCT"]),
        addProduct() {
            if(this.productName != '' && this.productDescription != '' && this.productQuantity != null && this.productPrice != null) {
                var data = {
                    name: this.productName,
                    description: this.productDescription,
                    quantity: this.productQuantity,
                    price: this.productPrice
                };
                ProductDataService.create(data).then(() => {
                    this.data = "SET_PRODUCT"
                    this.added = true
                    this.productName = ''
                    this.productDescription = ''
                    this.productQuantity = null
                    this.productPrice = null
                });
                
            }
        }
    }
}
</script>

<style scoped>
.add-product {
    position: fixed;
    top: 15%;
    left: 2%;
}
</style>