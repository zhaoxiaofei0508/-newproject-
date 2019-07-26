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
            url:"http://39.97.247.47:9999//order/showAllOrderByuserId",
            method:"get",
            params:{userId:"666"}
        }).then((ok)=>{
            let index=0
            let arr=[]
            ok.data.forEach((v,i)=>{
                if(v.orderState==1){
                    arr[index]=v;
                     index++;
                }
                return arr
            });
            this.arrOrder=arr
            console.log(this.arrOrder)
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
