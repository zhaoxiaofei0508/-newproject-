<template>
    <div class="ddvs"  style="background:hsla(0, 0%, 19%, 0.08);">

    <Lie  v-for="(v,i) in obj"  :key="i" :img="v.img" :title="v.title" :price="v.price" class="lpl" :id="v.id"></Lie>
        
    </div>
</template>


<script>
import Lie from "./liebiaozi"
export default {
    components:{
            Lie
    },
    data(){
        return{
            obj:[]
        }
    },

    created(){
                 this.axios({
          url:"/line/date",
          method:"get"
        }).then((val)=>{
              this.obj=val.data.arr
        })

    }
}
</script>


<style scoped>
.lpl{display:inline-block;}
</style>

