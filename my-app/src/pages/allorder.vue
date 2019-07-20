<template>
<!-- 全部订单路由 -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order></No_order> 
        </div>
        <!-- <p v-else>全部订单</p> -->
        <div v-else>
            <All_order :data="arrOrder"></All_order>
        </div>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
import All_order from '../components/order/all_order'
export default {
    components:{
        Order,
        No_order,
        All_order
    },
    data(){
        return{
            bool:true,
            arrOrder:[],
        }
    },
    mounted() {
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            this.arrOrder=ok.data.my_order;
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
