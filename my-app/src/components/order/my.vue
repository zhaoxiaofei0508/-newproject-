<template>
    <div class="box">
        <div class="top">
            <h3>我的订单</h3>
            <router-link to="/allorder"><p>查看更多订单></p></router-link>
        </div>
        <div>
            <Myitem v-for="(v,i) in arr" :key="i" :url="v.url" :title="v.title" :linkTo="v.linkTo"></Myitem>
        </div>
    </div>
</template>
<script>
import Myitem from './myitem'
export default {
    components:{
        Myitem
    },
    data(){
        return {
            arr:[
                {title:"待付款",url:"../../../static/no_orderimg/img/1.png",linkTo:"/payment"},
                {title:"待配送",url:"../../../static/no_orderimg/img/2.png",linkTo:"/pdelivery"},
                {title:"待收货",url:"../../../static/no_orderimg/img/3.png",linkTo:"/preceipt"},
                {title:"待评价",url:"../../../static/no_orderimg/img/4.png",linkTo:"/comment"}
            ]
        }   
    },
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 2.52rem;
    background-color: white;
}
.top{
    display:flex;
    justify-content: space-between;
    padding: 10px; 
    border-bottom:1px solid #ededed;
   
}
h3{
    font-size: .32rem;
}
p{
    font-size: .26rem; 
    color:#c9c9c9;
}
a{
    text-decoration: none;
}
</style>
