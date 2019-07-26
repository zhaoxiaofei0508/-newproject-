<template>
    <div class="box">
        <div v-for="(v,i) in newdata" :key="i" >
            <div class="top" @click="jump(v)">
                <p >订单号：{{v.orderId}}</p>
                <span>待支付</span>
            </div>
            <div class="des" @click="jump(v)">
                <img :src="v.orderProductPhoto" alt="">
                <p>{{v.orderProductMonicker}}</p>
                <!-- <img src="../../../static/no_orderimg/no_order.png" alt=""> -->
                <div class="sum">
                    <span class="allNum">共 {{v.num}} 件商品</span>
                    <b>&gt;</b>
                </div>
            </div>
            <div class="to">
                <p class="total">单价：<span class="price">￥{{v.orderProductPrice}}</span></p>
                <p class="total">合计：<span class="price">￥{{v.orderPrice}}</span></p>
            </div>
            
            <div class="all">
                <p class="order" @click="fun(i)">取消订单</p>
                <router-link to="/#"><p class="order last">继续支付</p></router-link>
            </div>
        </div>         
    </div>
</template>
<script>
export default {
 
    name:"all_order",
    props:["data"],
    data(){
        return {
            // newdata:this.data,
            // bool:true,

        }
    },
    computed:{
        newdata(){
            return this.data
        }
    },
    methods: {
        fun(i){
            // splice((index,len,[item]))删除
            this.newdata.splice(i,1);
        },
        jump(text){
            // this.$router.push("/orderdetail")
            // console.log(text)
            this.$router.push("/orderdetailno/"+text.orderId)
        }
    },
    mounted(){
        // console.log(this.newdata)
    }
}
</script>
<style scoped>
.box{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
p{
    float: left;
    font-size: .2rem;
    color: #525252;
}
span{
    float: right;
    font-size: .2rem;
    color: #6eb6cf;
}
.top{
    height: .7rem;
    line-height: .7rem;
    margin-bottom: 10px;
}
.des{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
}
img{
    width: 1.4rem;
    height:1.3rem;
    /* float: left; */
}
.sum{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.allNum{
    font-size: .22rem;
    color: #b0b0b0;
    margin-right: 7px;
}
b{
    font-size: .3rem;
    color:#9f9f9f;
}
.to{
    height: .9rem;
    display: flex;
    justify-content: space-between;
}
.total{
    /* float: right; */
    height: .9rem;
    line-height: .9rem;
}
.price{
    font-size: .4rem;
    color: #e47f84;
}
.all{
    display: flex;
    justify-content: flex-end;
    height: 1.2rem;
    align-items: center;
    background-color: #fafafa;
}
.order{
    width: 1.4rem;
    height: .5rem;
    border:1px solid #e9e9e9;
    border-radius: 20px;
    text-align: center;
    line-height: .5rem;
    margin-right: 10px;
}
.last{
    color: #98cef1;
    border:1px solid #98cef1;
}
</style>
