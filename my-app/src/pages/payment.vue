<template>
<!-- 代付款路由 -->
    <div>
        <Order></Order>
         <div v-show="bool">
            <Loading></Loading>
        </div>
        <div v-if="!arrOrderno">
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
import Loading from '../components/mine/loading'
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
        Loading,
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
            var arrtwobigindex=0;
            var arrtwosmallindex=0;
            let Arrno=new Array();
            Arrno[0]=new Array();
            Arrno[0][0]=arrno[0] 
            for(let i=0;i<arrno.length-1;i++){
                if(arrno[i].orderId==arrno[i+1].orderId){
                    arrtwosmallindex++;
                    console.log(arrtwobigindex,arrtwosmallindex+"1")
                    Arrno[arrtwobigindex][arrtwosmallindex]=arrno[i+1]
                }else{
                    var arrtwosmallindex=0;
                    arrtwobigindex++;
                    Arrno[arrtwobigindex]=new Array();
                    Arrno[arrtwobigindex][arrtwosmallindex]=arrno[i+1] 
                }
            }
             this.arrOrderno=Arrno
             console.log(this.arrOrderno)
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
