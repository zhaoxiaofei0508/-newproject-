<template>
    <div>
        <video  controls  >
             <source :src="imgurl" type="video/mp4">
        </video>

    </div>
</template>
<script>
export default {
    props:{
        imgurl:String
    }
}
</script>

<style scoped>
div{
    width: 100%;
    height: 4rem;
     line-height: 4rem;
   text-align: center;
    
}
    video{
        width: 100%;
        height: 3.1rem;
        margin-top: 0.6rem;
       


    }
</style>

