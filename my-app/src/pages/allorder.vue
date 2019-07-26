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
    created() {
        // var osel= this.$route.params.osel
        // this.axios({
        //     url:"/link/cpydata",
        //     method:"get",
        //     // params:{"number":1}
        // }).then((ok)=>{
        //     this.arrOrder=ok.data.my_order;
        //      this.arrOrderno=ok.data.my_orderno;
        //     this.bool=false;
        // })
        // this.axios({
        //     url:"http://39.97.247.47:9999//order/findOrderByorderId",
        //     method:"get",
        //     params:{userId:"666",orderState:"0"}
        // }).then((ok)=>{
        //     console.log(ok.data)
        //     this.arrOrderno=ok.data;
        //     //  this.arrOrderno=ok.data.my_orderno;
        //     this.bool=false;
        // })
        // this.axios({
        //     url:"http://39.97.247.47:9999//order/findOrderByorderId",
        //     method:"get",
        //     params:{userId:"666",orderState:"1"}
        // }).then((ok)=>{
        //     console.log(ok.data)
        //     this.arrOrder=ok.data;
        //     //  this.arrOrderno=ok.data.my_orderno;
        //     this.bool=false;
        // })
        this.axios({
            url:"http://39.97.247.47:9999//order/showAllOrderByuserId",
            method:"get",
            params:{userId:"666"}
        }).then((ok)=>{
            console.log(ok.data)
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
