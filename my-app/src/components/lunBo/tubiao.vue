<template>
    <div>
        <img src="../../../static/img/tubiao.gif">
        <span>{{title}}</span>
        <img src="../../../static/img/tubiao1.png" >
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style scoped>
div{
    text-align: center;
    line-height: 0.4rem;
}
img{
    width: 2rem;
    height: 0.4rem;
    vertical-align: middle;
    margin-top: 0.3rem;
}
span{
    font-size: 0.3rem;
    color:#fff;
}
</style>

