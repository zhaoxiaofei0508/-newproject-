<template>
    <div>
        <Top></Top>
        <div class="wfoo"></div>
        <Fuvs></Fuvs>
        <div>
            <div class="wfll" v-for="(v,i) in arrr"  :key="i" >
                <router-link :to="{path:'/list',query:{id:v.id}}">
                <div class="wfqq"><img :src="v.img" alt=""></div>
                <div class="wfww">{{v.title}}</div>
                </router-link>
            </div>
             <!-- <div v-for="(v,i) in arrr" :key="i" class="wfll" @click="nav(v.id)">
            <Toplist :topimg='v.img' :toptitle="v.title"></Toplist>
            </div> -->
        </div>

       
    </div>
</template>
<script>
import Top from "../components/topbar"
import Fuvs from "../components/fuvs"
 import Toplist from '../components/list/listtop/toplist'
export default {
       components:{
           Fuvs,
           Top,
           Toplist
        },
       data(){
        return{
            arrr:[]
        }
    },
    created(){
        this.axios({
          url:"/link/healer/hlist",
          method:"get"
        }).then((ok)=>{
            console.log(ok.data)
              this.arrr=ok.data
        })

    }
}
</script>
<style scoped>
 .wfoo{
    width: 100%;
    height: 1.6rem;
    margin-bottom: 1rem;
}
.wfll{
    width: 22.2%;
    height: 2rem;
    float: left;
    margin-left: .18rem;
}
.wfqq{
    width: 100%;
    height: 1.5rem;
}
img{
    width: 100%;
    height: 100%;
}
.wfww{
    font-size: 0.3rem;
    text-align: center;
} 
</style>