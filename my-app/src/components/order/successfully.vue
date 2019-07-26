<template>
    <div class="box">
        <div v-for="(v,i) in newdata" :key="i" >
            <div class="top" @click="jump(v[0].orderId)">
                <p >订单号：{{v[0].orderId}}</p>
                <span>已支付</span>
            </div>
            <div v-for="(v,i) in newdata[i]" :key="i" >
            <div class="des" @click="jump(v.orderId)">
                <img :src="v.orderProductPhoto" alt="">
                <p class="detail">{{v.orderProductMonicker}}</p>
                <div class="sum">
                    <span class="allNum">共 {{v.orderProductNumber}} 件商品</span>
                    <b>&gt;</b>
                </div>
            </div>
            <div class="to">
                <p class="total">单价：<span class="price">￥{{v.orderProductPrice}}</span></p>
                <p class="total">合计：<span class="price">￥{{v.orderProductPrice*v.orderProductNumber}}</span></p>
            </div>
            </div>
            <div class="cpy">
                <p class="total">合计：<span class="price2">￥{{v[0].orderPrice}}</span></p>
            </div>
            
            <div class="all">
                <p class="order">查看物流</p>
                <!-- <p v-show="bool">{{v[0].orderLogistics}}</p> -->
                <router-link to="/index"><p class="order last">再来一单</p></router-link>
            </div>
            </div>
        </div>         
    <!-- </div> -->
</template>
<script>
export default {
 
    name:"all_order",
    props:["data"],
    data(){
        return {
            // newdata:this.data,
            bool:false,

        }
    },
    computed:{
        newdata(){
            return this.data
        }
    },
    methods: {
        fun(i){
            this.bool=!this.bool;
        },
        jump(text){
            // this.$router.push("/orderdetail")
            // console.log(text)
            this.$router.push("/orderdetail/"+text)
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
    height: .9rem;
    line-height: .9rem;
}
.price{
    font-size: .2rem;
    color: #e47f84;
}
.total .price2{
    font-size: .4rem;
    color: #e47f84;
}
.all{
    display: flex;
    justify-content: flex-end;
    height: 1.2rem;
    align-items: center;
    background-color: #fafafa;
    margin-bottom: .5rem;
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
.des .detail{
    width: 50%;
    margin-left: 10px;
}
.cpy{
    height: .9rem;
    display: flex;
    justify-content:  flex-end;
}
</style>
