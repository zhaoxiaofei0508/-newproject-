<template>
  <div class="dd" >
 

           <Zivs   v-for="(v,i) in obj"  :key="i" :title="v.title" :img="v.img" :link="v.link"></Zivs>
           
           
  </div>
</template>
<script>
import Zivs from "./zivs"
export default {
     data(){

            return{obj:[]
            }},

            
      components:{Zivs},

    created(){
        
        this.axios({
          url:"/link/data",
          method:"get"
        }).then((val)=>{
               this.obj=val.data.arr
               console.log(val.data)
              
                  // this.bool=false;
        })
        //  this.obj=this.$route.params.id
    },   
            }
  
 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dd{
height:1.4rem;
  
border-top:1px solid red;
bottom:0px;
background:white;
position:fixed;
width:100%;
text-align:center;

}
</style>
