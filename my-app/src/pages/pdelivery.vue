<template>
<!--待配送路由  -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order ></No_order>
        </div>
        <!-- <p v-else>待配送</p> -->
        <div v-else> 
            <Successfully :data="arrOrder"></Successfully>
        </div>
    </div>
</template>
<script>
import Order from '../components/order/order'
import No_order from '../components/order/no_order'
import Successfully from '../components/order/successfully'
export default {
    data(){
        return{
            bool:true,
            arrOrder:[]
        }
    },
    components:{
        Order,
        No_order,
        Successfully
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
