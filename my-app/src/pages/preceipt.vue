<template>
<!--待收货路由  -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order ></No_order>
        </div>
        <p v-else>待收货</p>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
export default {
    data(){
        return{
            bool:false
        }
    },
    components:{
        Order,
        No_order
    }
}
</script>
<style scoped>

</style>
