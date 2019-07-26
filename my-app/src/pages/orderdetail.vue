<template>
    <div class="big">
        <div class="head">
            <span @click="fun()">&lt;</span>
            <h3>订单详情</h3>
            <router-link to="/consult"> <b class="iconfont icon-kefu c_icon"></b></router-link>
        </div>
        <div class="static">
            <p>{{arrbool}}</p>
            <!-- <p v-if="static='1'">待付款</p>
            <p v-else>待配送</p> -->
            <img src="../../static/no_orderimg/orderdetail.png" alt="">
        </div>
        <div class="det">
            <Stay :data="arrOrder"></Stay>
        </div>
        <div class="tall">
            <i>应付金额合计</i>
            <strong>￥9999</strong>
        </div>
        <div class="tall">
            <i>发票</i>
            <i>订单完成后，可补开</i>
        </div>
        <div class="tall">
            <i>下单时间</i>
            <i>00000000</i>
        </div>
        <div class="tall">
            <i>订单编号</i>
            <i>11111</i>
        </div>
        <div class="last">
            ——猜你喜欢
                <span class="span">.EXPLORE——</span>
        </div>
        <div class="like">
            <Indexlist v-for="(v,i) in arrMylike" :key="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span" class="like2"></Indexlist>
        </div>
    </div>
</template>
<script>
import Stay from '../components/order/stay'
import Indexlist from '../components/index/indexlist'
export default {
    data(){
        return{
            arrbool:"",
            arrOrder:[],
            arrMylike:[],
        }
    },
    components:{
        Stay,
        Indexlist
    },
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
    mounted() {
        var osel= this.$route.params.osel
        // var ostatic=this.$route.params.ostatic
        this.axios({
            url:"/link/cpydata",
            method:"get",
            params:{"number":osel}
        }).then((ok)=>{
            this.arrOrder=ok.data.my_order;
            if(ok.data.my_order[0].sta){
                this.arrbool="已支付"
            }else{
                this.arrbool="待支付"
            }
            this.arrMylike=ok.data.my_like
        })
    },
}
</script>
<style scoped>
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
img{
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
.span{
    color: #a6c1d4;
    font-size: .26rem;
}
</style>
