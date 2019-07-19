<template>
    <div class="ddvs">

    <Lie  v-for="(v,i) in obj"  :key="i" :img="v.img" :title="v.title" :price="v.price"></Lie>
        
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

</style>

