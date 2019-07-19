<template>

        <div>
              <Top></Top> 
              <div class="ssvs"></div> 
            <div class="lol" v-if="bool">
            
            <img src="../../static/img/11.png">
            <p>购物车无商品</p><br>
            <p class="ol">饿即是空，空即是饿</p>

              

               <Liebiao></Liebiao>


            </div>
         

           <div v-else>

            <div   v-for="(v,i) in obj"  :key="i">
           

             <img :src="v.img">
             <p>{{v.price}}}</p>
             <p>{{v.title}}</p>


            </div>
                   
             
            </div>
           <Fuvs></Fuvs>

        </div>
</template>
<script>
import Liebiao from "../components/liebiaovs"
import Fuvs from "../components/fuvs"
import Top from "../components/topbar"
export default {
     components:{Fuvs,Top,Liebiao},
     data(){
         return {obj:[],
         bool:true
         }
     },
     mounted() {

        this.axios({
          url:"/line/date",
          method:"get"
        }).then((val)=>{
           
            //    console.log(val.data.arr)
            if(val.data.arr==""){
                 this.bool=true
                
            }else{
                this.bool=true
            }
            
              this.obj=val.data.arr
                  // this.bool=false;
        })
     },
     
    
}
</script>
<style scoped>
.lol{text-align:center;font-size:.4rem}
.lol img{width:3rem}
.ol{font-size:.1rem}
img{width:1.5rem}
.ssvs{height:1.6rem}
.zjvs{height:auto;background:hsla(0, 0%, 19%, 0.08)}
</style>