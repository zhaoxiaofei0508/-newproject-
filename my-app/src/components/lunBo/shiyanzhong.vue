<template>
    <div :style="{backgroundColor:color}">
        <Tubiao :title="title"></Tubiao>
        <div class="box2">
            <div class="box1">
                <Good v-for="(v,i) in good" 
                :key="i" :imgurl="v.imgurl" 
                :title="v.title" 
                :outprice="v.outprice" 
                :price="v.price" 
                :car="v.car" 
                :type="v.type" 
                :tejia="v.tejia" 
                :border="v.num"></Good>

            </div>

        </div>  
    </div>
</template>

<script>


import Good from "./good"
import Tubiao from "./tubiao"
export default {
    components:{     
        Good,
        Tubiao
      
    },
    props:{
        color:String,
        good:Array,
        title:String
    },
    
    
}
</script>
<style scoped>
.yyzbox{
    /* border:1px solid black; */
    overflow: hidden;
}
.box1{
   width: 24.8rem;
   height: 7rem;
  
}
.box2{
   overflow:auto;

}


</style>
