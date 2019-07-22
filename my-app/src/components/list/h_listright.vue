<template>
    <div>
        <div v-for="(v,i) in Reinghtarr" :key="i" @click="details(v.id)">
            <Conlist :title="v.details_title" :content="v.content" :price="v.price" :imgurl="v.images.img1" ></Conlist>
        </div>
    </div>
</template>
<script>
import Conlist from './listtop/conlist'
export default {
    data() {
        return {
             
        }
    },
    props:{
        Reinghtarr:Array
    },
    components:{
        Conlist
    },
    methods:{
        details(id){
            this.$router.push("/details/"+id)
            
        }
    }
   
    
}
</script>
<style scoped>

</style>