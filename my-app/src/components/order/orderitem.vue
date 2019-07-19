<template>
    <!-- <div class="item"> -->
        <router-link :to="linkTo" :class="calssname">
            <strong>{{otitle}}</strong>
        </router-link>
    <!-- </div> -->
</template>
<script>
export default {
    props:{
        otitle:String,
        linkTo:String,
        calssname:String
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
strong{
    font-weight: 400;
    font-size: .26rem;
    line-height:.26rem ;
}
a{
    text-decoration: none;
    color: black;
}
 .router-link-active{
     color: #02b0ff;
    border-bottom: 2px solid #02b0ff;
 }
</style>
