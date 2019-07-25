<template>
    <div>
        <span :class="starcal" class="iconfont icon-xingxing"></span>
        <span :class="starcal" class="iconfont icon-xingxing"></span>
        <span :class="starcal" class="iconfont icon-xingxing"></span>
        <span :class="starcal" class="iconfont icon-xingxing"></span>
        <span :class="starcal" class="iconfont icon-xingxing"></span>
    </div>
</template>
<script>
export default {
   data() {
       return {
           
       }
   },
   props:{
       starnum:Number,
       starcal:String
   },
   mounted() {
    //    console.log(this.starcal)
       let stararr=document.querySelectorAll("."+this.starcal+"")
       for(let i=0;i<stararr.length;i++){
           if(i<this.starnum){
               stararr[i].style.color="yellow"
           }
       }
       
   },
}
</script>
<style  scoped>
    .icon-xingxing{
        font-size: 0.1rem;
    }
</style>