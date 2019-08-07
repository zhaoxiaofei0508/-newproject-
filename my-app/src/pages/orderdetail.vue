<template>
<div>
        <div v-show="bool">
            <Loading></Loading>
        </div>

    <div class="big">
        <div class="head">
            <span @click="fun()">&lt;</span>
            <h3>订单详情</h3>
            <router-link to="/consult"> <b class="iconfont icon-kefu c_icon"></b></router-link>
        </div>
        <div class="static">
            <p>已支付</p>
            <img src="../../static/no_orderimg/orderdetail.png" alt="">
        </div>
            <div class="Box" v-for="(v,i) in arrOrder" :key="i">
                <div class="box1">
                    <img :src="v.photo"/>
                </div>
                <div class="box2">
                    <h3>{{v.monicker}}</h3>
                    <span>单价:&yen;{{v.price}}</span>
                    <p>数量：{{v.number}}</p>
                </div>
                <div class="box3">
                    <span>总价:&yen;{{v.price*v.number}}</span>
                </div>
            </div>
            <div class="tall">
                <i>应付金额合计</i>
                <strong>￥{{sum}}</strong>
            </div>
            <div class="tall">
                <i>发票</i>
                <i>订单完成后，可补开</i>
            </div>
            <div class="tall">
                <i>订单编号</i>
                <i>{{orderid}}</i>
                <!-- <i>{{arrOrder[0].oid}}</i> -->
            </div>
            <div class="last">
                ——猜你喜欢
                    <span class="Span">.EXPLORE——</span>
            </div>
            <div class="like">
                <Indexlist v-for="(v,i) in arrMylike" :key="i" :ShopImg="v.productDetailsImages" :shopId="v.productId" :ShopTitle="v.productContent" :ShopDetails="v.productComment" :ShopPrice="v.productPrice" class="like2"></Indexlist>
            </div>
        </div>
</div>
</template>
<script>
import Stay from '../components/order/stay'
import Indexlist from '../components/index/indexlist'
import Loading from '../components/mine/loading'
export default {
    data(){
        return{
            arrbool:"",
            arrOrder:[],
            arrMylike:[],
            orderid:"",
            sum:0,
            bool:true
        }
    },
    components:{
        Stay,
        Indexlist,
        Loading
    },
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
    created(){
         //猜你喜欢
          this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findAll",
            method:"get"
        }).then((ok)=>{
            console.log(ok.data)
            this.arrMylike=ok.data
            this.bool=false;
        })

        var osel= this.$route.params.sel
        console.log(osel)
        // var ostatic=this.$route.params.ostatic
        this.axios({
            url:"http://39.97.247.47:9999//order/findOrderProductByOId",
            method:"get",
            params:{oId:osel}
        }).then((ok)=>{
            this.arrOrder=ok.data;
            // console.log(ok.data)
             // 计算订单总价
            for(var i=0;i<this.arrOrder.length;i++){
                 var pr=this.arrOrder[i].price
                 var nu=this.arrOrder[i].number
                 this.sum+=pr*nu;
                 var or=this.arrOrder[i].oid
            }
            // 订单编号
            this.orderid=or;
            // console.log(this.sum);
            // this.arrMylike=ok.data.my_like
            this.bool=false;
        })
        // // 猜你喜欢
        //  this.axios({
        //     url:"/link/cpydata",
        //     method:"get"
        // }).then((ok)=>{
        //     // console.log(ok.data.my_like);
        //     this.arrMylike=ok.data.my_like
        //     this.bool=false;
        // })
    },
}
</script>
<style scoped>
.Box{
    width:100%;
    display:flex;
}
.box1{
    display: flex;
    justify-content: center;
    align-items: center;
    width:20%;
}
.box1 img{
    display: block;
    width: 1rem;
    height:1rem ;
}
.box2{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding:0.2rem 0.1rem; 
    width:60%;
}
.box2 h3{
    height:0.6rem;
    line-height:0.3rem;
    font-weight:100;
    font-size:0.3rem;
    overflow: hidden;
    color:#b4b4b4;
}
.box2 span{
    display: block;
    height:0.4rem;
    line-height:0.4rem;
    font-size:0.3rem;
    overflow: hidden;
    color:#b4b4b4;
    margin-bottom: 10px;
}
.box2 p{
    margin: 0;
    display: block;
    height:0.4rem;
    line-height:0.4rem;
    font-size:0.3rem;
    overflow: hidden;
    color:#b4b4b4;
}
.box3{
    width:20%;
}
.box3 span{
    display: block;
    height:1.4rem;
    line-height:1.4rem;
    font-size:0.3rem;
    overflow: hidden;
}
.head{
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 .1rem;
    position: fixed;
    top: 0;
}
b{
    font-weight: normal;
}
span{
    /* float: left; */
    font-size: .5rem;
}
h3{
    /* float: left; */
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
    /* margin-left: 2.7rem; */
}
a{
    line-height: .81rem;
    margin-bottom: .2rem;
}
.static{
    height:2.45rem ;
    background-color: #0db6fb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .81rem;
}
.static img{
    float: right;
    height: 2.45rem;
}
p{
    font-size: .4rem;
    color: white;
    margin-left: .1rem;
}
.tall{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    /* background: #fafafa; */
}
strong{
    font-size: .24rem;
    color:red;
}
i{
    font-style:normal;
    font-size: .24rem;
}
.last{
    height: .6rem;
    font-size: .26rem;
    color: #b4b4b4;
    text-align: center;
    line-height: .6rem;
}
.Span{
    color: #a6c1d4;
    font-size: .26rem;
}
</style>
