<template>
<!-- 待评价路由 -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order ></No_order>
        </div>
        <p v-else>待评价</p>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
export default {
    data(){
        return{
            bool:true
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
