<template>
    <div>
        <div v-for="(v,i) in Reinghtarr" :key="i">
            <Conlist :title="v.details_title" :content="v.content" :price="v.price" :imgurl="v.images.img1" ></Conlist>
        </div>
    </div>
</template>
<script>
import Conlist from './listtop/conlist'
export default {
    data() {
        return {
             ReinghtArr:[]
        }
    },
    props:{
        Reinghtarr:Array
    },
//   created() {
//         var Leftid=localStorage.LeftId
//         console.log(Leftid)
//         this.axios({
//                 url:"/link/healer/hdata",//get发送数据方式
//                 method:"get",
//                 //  params:{id:Left}
//                  //get发送数据方式
//             }).then((ok)=>{
//                 this.ReinghtArr= ok.data.filter((v,i)=>{
//                     if(v.id==Leftid){
//                         return v
//                     }
//                 });
//                 console.log(this.ReinghtArr)
//             })
//    },
    components:{
        Conlist
    },
   
    
}
</script>
<style scoped>

</style>