<template>
<!--待配送路由  -->
    <div>
        <Order></Order>
        <div v-show="bool">
            <Loading></Loading>
        </div>
        <div v-if="!arrOrder">
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
import Loading from '../components/mine/loading'
import Successfully from '../components/order/successfully'
export default {
    data(){
        return{
            bool:true,
            arrOrder:[],
            // orderlist:[]
        }
    },
    components:{
        Order,
        No_order,
        Loading,
        Successfully,
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
            var arrtwobigindex=0;
            var arrtwosmallindex=0;
            let Arr=new Array();
            Arr[0]=new Array();
            Arr[0][0]=arr[0] 
            for(let i=0;i<arr.length-1;i++){
                if(arr[i].orderId==arr[i+1].orderId){
                    arrtwosmallindex++;
                    // console.log(arrtwobigindex,arrtwosmallindex+"1")
                    Arr[arrtwobigindex][arrtwosmallindex]=arr[i+1]
                }else{
                    var arrtwosmallindex=0;
                    arrtwobigindex++;
                    Arr[arrtwobigindex]=new Array();
                    Arr[arrtwobigindex][arrtwosmallindex]=arr[i+1] 
                }
            }
            this.arrOrder=Arr
            // console.log(this.arrOrder)
            this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
