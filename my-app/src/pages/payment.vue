<template>
<!-- 代付款路由 -->
    <div>
        <Order></Order>
        <div v-if="bool">
            <No_order ></No_order>
        </div>
        <!-- <p v-else>代付款</p> -->
        <div v-else>
            <Stay :data="arrOrderno"></Stay>
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
            arrOrderno:[],
        }
    },
    components:{
        Order,
        No_order,
        Stay
    },
    mounted() {
         this.axios({
            url:"http://39.97.247.47:9999//order/showAllOrderByuserId",
            method:"get",
            params:{userId:"666"}
        }).then((ok)=>{
            let indexno=0
            let arrno=[]
            ok.data.forEach((v,i) => {
                if(v.orderState==0){
                     arrno[indexno]=v;
                     indexno++;
                }
                return arrno
            });
             this.arrOrderno=arrno
             console.log(this.arrOrderno)
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
