<template>
    <div class="box">
        <LunBoTop :text="lundetailstop.title" :feixing="lundetailstop.imgurla" :shopping1="lundetailstop.imgurlb"></LunBoTop>
        <Lunmiddle  :img="lunmiddle.imgurl" ></Lunmiddle>
        
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <DetailsNav></DetailsNav>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
        <Shiyanzhong :good="goods" :color="lunmiddle.color" :title="lundetailstop.title"></Shiyanzhong>
    </div>
</template>
<script>
import LunBoTop from "../components/lunbo/lunBoTop"
import Lunmiddle from "../components/lunbo/lunmiddle"
import Shiyanzhong from "../components/lunbo/shiyanzhong"
import DetailsNav from "../components/lunbo/detailsNav"
export default {
    data(){
        return {
            lundetailstop:[],
            lunmiddle:[],
            goods:[],
            
        }
    },
    components:{
        LunBoTop,
        Lunmiddle,
        Shiyanzhong,
        DetailsNav
        
    },
   
    created(){
        this.axios({
            url:"/lun/details", 
            method:"get",   
        }).then((ok)=>{
            this.lundetailstop=ok.data.xiaRi[0].lundetailstop[0]
            this.lunmiddle=ok.data.xiaRi[1].lunmiddle[0]
            this.goods=ok.data.xiaRi[2].goods
            
        })
    }
   
   
}
</script>
<style scoped>
</style>