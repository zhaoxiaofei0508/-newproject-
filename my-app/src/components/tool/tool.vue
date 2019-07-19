<template>
    <div>
        <Myitem v-for="(v,i) in arr" :key="i" :title="v.title" :url="v.url" :linkTo="v.linkTo"></Myitem>
    </div>
</template>
<script>
import Myitem from '../order/myitem'
export default {
    components:{
        Myitem
    },
    data(){
        return {
            arr:[
                {title:"盒马X会员",url:"../../../static/no_orderimg/img/5.png",linkTo:"/#"},
                {title:"0元吃水果",url:"../../../static/no_orderimg/img/6.png",linkTo:"/#"},
                {title:"邀请有礼",url:"../../../static/no_orderimg/img/7.png",linkTo:"/#"},
                {title:"盒马门店",url:"../../../static/no_orderimg/img/8.png",linkTo:"/#"},
                {title:"客服小蜜",url:"../../../static/no_orderimg/img/9.png",linkTo:"/#"},
                {title:"收藏",url:"../../../static/no_orderimg/img/10.png",linkTo:"/#"},
                {title:"开发票",url:"../../../static/no_orderimg/img/11.png",linkTo:"/#"},
                {title:"兑换优惠券",url:"../../../static/no_orderimg/img/12.png",linkTo:"/#"}
            ]
        }   
    },
}
</script>
<style scoped>

</style>
