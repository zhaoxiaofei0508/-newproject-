<template>
    <div class="box">
        <img src="../../../static/no_orderimg/no_address.png" alt="">
        <p>无收货地址</p>
        <span>"不要捉迷藏哦，快快把地址告诉我"</span>
        <router-link to="/add_address"><strong>添加地址</strong></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    text-align: center;
    margin-top: 2rem;
}
img{
    width: 5rem;
}
p{
    font-size: .34rem;
}
span{
    display: block;
    font-size: .24rem;
    color: #8d8d8d;
}
strong{
    display: inline-block;
    width: 3rem;
    border-radius: 40px;
    font-size:  .36rem;
    color: white;
    text-align: center;
    background: #26a3ff;
    font-weight: normal;
}
</style>
