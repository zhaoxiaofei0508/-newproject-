<template>
    <div class="box">
        <img src="../../../static/no_orderimg/no_order.png" alt="">
        <p>无订单</p>
        <span>"还没有订单，快点忙里偷闲下一单"</span>
        <a href="/index">去逛逛</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    text-align: center;
}
img{
    width: 6rem;
}
p{
    font-size: .34rem;
}
span{
    display: block;
    font-size: .24rem;
    color: #8d8d8d;
}
a{
    display: inline-block;
    width: 2rem;
    text-decoration: none;
    border: 1px solid #e1e1e1;
    border-radius: 40px;
    font-size:  .24rem;
    color: black;
    text-align: center;
}
</style>
