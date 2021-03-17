<template>
    <div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "product",
    computed: {
        ...mapGetters({product: "product"})
    }
}
</script>