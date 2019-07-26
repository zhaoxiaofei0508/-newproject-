<template>
    <div :style="{backgroundColor:color}">
        <Tubiao :title="title"></Tubiao>
        <div class="box2">
            <div class="box1">
                <div  v-for="(v,i) in good"  :key="i" @click="fun(v.itemsId)">
                    <Good
                        @click="fun(v.id)"
                        :imgurl="v.imgurl" 
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
    methods: {
        fun(id){
           this.$router.push("/details/"+id)
        }
    },
}
</script>
<style scoped>
.yyzbox{
    overflow: hidden;
}
.box1{
   width: 24.8rem;
   height: 8.8rem;
  
}
.box2{
   overflow:auto;

}


</style>
