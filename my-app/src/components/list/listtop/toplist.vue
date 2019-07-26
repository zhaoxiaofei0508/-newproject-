<template>
<div>
        <div class="h-top">
            <div class="img2">
            <img :src="topimg" alt="">
            </div>
            <div id="h-a">{{toptitle}}</div>
        </div>
</div>
        
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props:{
        topimg:String,
        toptitle:String,
        imgid:Number

    },
   methods: {
   },
   
      
}
</script>
<style scoped>
/* .h-mast{
    display: flex;
} */
.h-top{
    width: 1rem;
    height: 1rem;  
}
img{
    width: 100%;
    height: 100%;
}

.img2{
    width: .8rem;
    height:.8rem;
    border-radius: 50%;
    overflow: hidden;
}
.h-top div{
    text-align: center;
    line-height: .2rem;
    color: gray;
    font-size: .2rem;
    /* margin-top: .04rem; */
    margin-left: .015rem;

}
#h-a{
    line-height: .5rem; 
}
</style>