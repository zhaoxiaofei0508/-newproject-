<template>
    <div class="box">
        <img :src="img" >
    </div>
</template>

<script>
export default {
    props:{
        img:String, 
    }
}
</script>

<style scoped>
.box{
    margin-top: 0.8rem;
    height: 360px;
}
    img{
        width: 100%;
        height: 100%;

    }
</style>

