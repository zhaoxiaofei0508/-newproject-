<template>
<!-- 代付款路由 -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order ></No_order>
        </div>
        <!-- <p v-else>代付款</p> -->
        <div v-else>
            <Stay :data="arrOrder"></Stay>
        </div>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
import Stay from '../components/order/stay'
export default {
    data(){
        return{
            bool:true,
            arrOrder:[],
        }
    },
    components:{
        Order,
        No_order,
        Stay
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
