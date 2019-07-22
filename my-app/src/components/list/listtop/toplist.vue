<template>
<div>
        <div class="h-top">
            <div class="img2" :class="bor===id?'img1':''" @click="bor=id">
            <img :src="topimg" alt="">
            </div>
            <div class="h-a">{{toptitle}}</div>
        </div>
</div>
        
</template>
<script>
export default {
    data() {
        return {
            id:'',
            bor:0
        }
    },
    props:{
        topimg:String,
        toptitle:String,
        imgid:String

    },
    extends:{
       
    },
    mounted() {
        this.id =this.$route.query.id;
        console.log(this.id);
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
.img1{
    width: .8rem;
    height:.8rem;
    border-radius: 50%;
    /* background: red; */
    border: 1px solid red;
    overflow: hidden;
}
.img2{
    width: .8rem;
    height:.8rem;
    border-radius: 50%;
    
    /* background: red; */
    border: '';
    overflow: hidden;
}


.h-top div{
    text-align: center;
    line-height: .2rem;
    color: gray;
    font-size: .2rem;

}

</style>