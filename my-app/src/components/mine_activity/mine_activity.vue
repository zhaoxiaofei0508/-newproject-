<template>
<div class="cont">
    <div class="box">
        <img :src="oimg" alt="">
        <div class="right">
            <h3>{{title}}</h3>
            <span>{{describe}}</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:{
        oimg:String,
        title:String,
        describe:String
    },
}
</script>
<style scoped>
/* .cont{
    background-color: white;
    height: 1.5rem;
} */
.box{
    width: 40%;
    float: left;
    margin: 10px 15px 10px;
}
img{
    float: left;
    width: 1.2rem;
    /* height:  1.2rem; */
}
.right{
    display: flex;
    flex-direction: column;
    text-align: center;
}
h3{
    font-size: .32rem;
}
span{
    font-size: .26rem; 
    color:#c9c9c9;
}
</style>
