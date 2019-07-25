<template>
<!-- 全部订单路由 -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order></No_order> 
        </div>
        <!-- <p v-else>全部订单</p> -->
        <div v-else>
            <Stay :data="arrOrderno"></Stay>
            <Successfully :data="arrOrder"></Successfully>
        </div>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
import Stay from '../components/order/stay'
import Successfully from '../components/order/successfully'
export default {
    components:{
        Order,
        No_order,
        Stay,
        Successfully
    },
    data(){
        return{
            bool:true,
            arrOrder:[],
            arrOrderno:[]
        }
    },
    mounted() {
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            this.arrOrder=ok.data.my_order;
             this.arrOrderno=ok.data.my_orderno;
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
