<template>
    <div>
        <div v-for="(v,i) in sumarr" :key="i">
            <Conlist :title="v.details_title" :content="v.content" :price="v.price" :imgurl="v.images.img1"></Conlist>
        </div>
    </div>
</template>
<script>
import Conlist from '../listtop/conlist'
export default {
    data() {
        return {
             sumarr:[]
        }
    },
    extends:{
       
    },
    components:{
        Conlist
    },
    created() {
         this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                 //get发送数据方式
            }).then((ok)=>{
                this.sumarr = ok.data.fruit[0].special_offer;
                console.log(this.sumarr)
                
            })
    },
    
}
</script>
<style scoped>

</style>