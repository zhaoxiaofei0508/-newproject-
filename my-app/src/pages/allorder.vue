<template>
<!-- 全部订单路由 -->
    <div>
        <Order></Order>
        <!-- <div v-show="bool">
            <Loading></Loading>
        </div> -->
        <div v-if="!arrOrder">
            <No_order ></No_order>
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
// import Loading from '../components/mine/loading'
import No_order from '../components/order/no_order'
import Stay from '../components/order/stay'
import Successfully from '../components/order/successfully'
export default {
    components:{
        Order,
        // Loading,
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
        var ouserid=localStorage.userid
        this.axios({
            
            url:"http://39.97.247.47:9999//order/showAllOrderByuserId",
            method:"get",
            params:{userId:'1'}
        }).then((ok)=>{
            console.log(ok.data)
            // 已支付
            let index=0
            let arr=[]
            ok.data.forEach((v,i)=>{
                if(v.orderState==1){
                    arr[index]=v;
                     index++;
                }
                return arr
            });
            // 二维数组筛选数据
            var arrtwobigindex=0;
            var arrtwosmallindex=0;
            let Arr=new Array();
            Arr[0]=new Array();
            Arr[0][0]=arr[0] 
            for(let i=0;i<arr.length-1;i++){
                if(arr[i].orderId==arr[i+1].orderId){
                    arrtwosmallindex++;
                    console.log(arrtwobigindex,arrtwosmallindex+"1")
                    Arr[arrtwobigindex][arrtwosmallindex]=arr[i+1]
                }else{
                    var arrtwosmallindex=0;
                    arrtwobigindex++;
                    Arr[arrtwobigindex]=new Array();
                    Arr[arrtwobigindex][arrtwosmallindex]=arr[i+1] 
                }
            }
            this.arrOrder=Arr
            console.log(this.arrOrder)
            // 未支付
             let indexno=0
            let arrno=[]
            ok.data.forEach((v,i) => {
                if(v.orderState==0){
                     arrno[indexno]=v;
                     indexno++;
                }
                return arrno
            });
             // 二维数组筛选数据
            var arrtwobigindex=0;
            var arrtwosmallindex=0;
            let Arrno=new Array();
            Arrno[0]=new Array();
            Arrno[0][0]=arrno[0] 
            for(let i=0;i<arrno.length-1;i++){
                if(arrno[i].orderId==arrno[i+1].orderId){
                    arrtwosmallindex++;
                    // console.log(arrtwobigindex,arrtwosmallindex+"1")
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
            // this.bool=false;
        })
    },
}
</script>
<style scoped>

</style>
