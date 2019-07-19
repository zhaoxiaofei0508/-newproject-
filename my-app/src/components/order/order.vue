<template>
    <div>
        <div class="ohead">
            <router-link to="/my_mine"><span>&lt;</span></router-link>
            <h3>我的订单</h3>
        </div>
        <div class="ocont">
            <Orderitem  v-for="(v,i) in arr" :key="i" :otitle="v.title" :linkTo="v.url"></Orderitem>
        </div>
    </div>
</template>
<script>
import Orderitem from './orderitem'
export default {
    components:{
        Orderitem
    },
    data(){
        return {
            arr:[
                {title:"全部订单",url:"/allorder"},
                {title:"待付款",url:"/payment"},
                {title:"待配送",url:"/pdelivery"},
                {title:"待收货",url:"/preceipt"},
                {title:"待评价",url:"/comment"}
            ],
            changecolor:true
        }
    },
    methods: {},
}
</script>

<style scoped>
.ohead{
    /* display: flex; */
    /* flex-direction: row; */
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
}
span{
    float: left;
    font-size: .5rem;
    color: #3b9ada;
    margin-left: 10px;
}
h3{
    float: left;
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
    margin-left: 2.7rem;
}
.ocont{
    display:flex;
    justify-content: space-around;
    /* align-items: center; */
    border-bottom: 1px solid #dedede;
}
</style>
