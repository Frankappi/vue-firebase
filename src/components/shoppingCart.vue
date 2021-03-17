<template>
    <div>
        <button type="button" class="btn cart-btn" @click="showCart =! showCart">
            <font-awesome-icon icon="cart-arrow-down" />
        </button>

        <transition name="slide-in" mode="out-in">
            <div class="shopping-cart" v-if="showCart">
                <div class="card bg-secondary text-white" >
                    <div class="card-header">
                        <h6>Shopping Cart</h6>
                    </div>
                    <div class="card-body">
                        <div v-if="emptyCart != emptyCart">
                            <p>No. of products: {{ cart.length }}</p>
                            <p>Total: $ {{ total }}</p>
                        </div>
                        <div v-else>
                            <div class="card bg-warning text-white">
                                <p>The Cart is empty, start shopping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </transition>
    </div>
</template>

<script>
export default {
    name: "shopping-cart",
    props: ['cart', 'total'],
    data() {
        return {
            emptyCart: true,
            showCart: false,
        }
    }
}
</script>

<style scoped>
.cart-btn {
    position: fixed;
    z-index: 9999;
    bottom: 5%;
    left: 5%;
    font-size: 18pt;
    color: white;
    background-color: #343a40;
    border: none;
    border-radius: 50%;
}
.cart-btn:hover {
    background-color: green;
    color: white;
}
.cart-btn:focus {
    border: none;
    outline-color: transparent;
    box-shadow: none;
}
.shopping-cart {
    position: fixed;
    bottom: 15%;
    left: 2%;
    z-index: 9999;
}
</style>