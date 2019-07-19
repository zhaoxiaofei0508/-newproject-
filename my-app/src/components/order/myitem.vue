<template>
    <router-link :to="linkTo">
        <div class="item">
            <img :src="url" alt="">
            <span>{{title}}</span>
        </div>
    </router-link>
</template>
<script>
export default {
    props:{
        url:String,
        title:String,
        linkTo:String
    }
}
</script>
<style scoped>
    .item{
        width: 25%;
        float: left;
        text-align: center;
        margin-bottom:10px;
    }
    span{
        display: block;
        font-size: .26rem; 
        color:#c9c9c9;
    }
    i{
        font-size: .6rem;
        color: #0eaeff;
    }
    img{
        width: .6rem;
    }
</style>