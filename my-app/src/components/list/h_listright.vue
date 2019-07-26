<template>
    <div>
        <div v-for="(v,i) in Reinghtarr" :key="i" @click="details(v.productId)">
            <Conlist :title="v.productName" :content="v.productContent" :price="v.productPrice" :imgurl="v.productDetailsImages" :product ="v.productId"></Conlist>
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