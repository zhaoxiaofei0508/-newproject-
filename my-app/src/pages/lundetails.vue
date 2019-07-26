<template>
    <div :style="{backgroundColor:lunmiddle.color}">
        <Loading v-if="bool"></Loading>
        <div class="box" v-else>
            <LunBoTop :text="lundetailstop.title" :feixing="lundetailstop.imgurla" :shopping1="lundetailstop.imgurlb"></LunBoTop>
            <Lunmiddle  :img="lunmiddle.imgurl" ></Lunmiddle>
            <Video :imgurl="video[0].imgurl"></Video>
            <Shiyanzhong :good="goods"  :title="lundetailstop.title"></Shiyanzhong>
            <DetailsNav></DetailsNav>
            <Shiyanzhong :good="goods"  :title="lundetailstop.title"></Shiyanzhong>
            <Video :imgurl="video[1].imgurl"></Video>
            <Shiyanzhong :good="goods" :title="lundetailstop.title"></Shiyanzhong>
            <Shiyanzhong :good="goods" :title="lundetailstop.title"></Shiyanzhong>   
            <Video :imgurl="video[2].imgurl"></Video>

        </div>
    </div>
   
</template>
<script>
import LunBoTop from "../components/lunbo/lunBoTop"
import Lunmiddle from "../components/lunbo/lunmiddle"
import Shiyanzhong from "../components/lunbo/shiyanzhong"
import DetailsNav from "../components/lunbo/detailsNav"
import Loading from "../components/hqsh2/loading"
import Video from "../components/lunbo/video"
export default {
    data(){
        return {
            lundetailstop:[],
            lunmiddle:[],
            goods:[],
            bool:true,
            video:String
            
        }
    },
    components:{
        LunBoTop,
        Lunmiddle,
        Shiyanzhong,
        DetailsNav,
        Loading,
        Video
        
    },
   
    created(){
       
        setTimeout(()=>{
            this.bool=false

        },1000)
        this.axios({
            url:"/lun/details", 
            method:"get",   
        }).then((ok)=>{
            this.lundetailstop=ok.data.xiaRi[0].lundetailstop[0]
            this.lunmiddle=ok.data.xiaRi[1].lunmiddle[0]
            this.video=ok.data.xiaRi[3].video
            

        }),
        
         this.axios({
            url:"http://39.97.247.47:9999/carousle/findAll", 
            method:"get",   
        }).then((ok)=>{
            this.goods=ok.data
            console.log(ok);
            
        })

    }
   
   
}
</script>
<style scoped>
</style>