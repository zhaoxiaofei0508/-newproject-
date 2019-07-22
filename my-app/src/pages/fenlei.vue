<template>
    <div>
        <div class="h-list-top">
            <div class="top-title">
                 <span>分类</span> 
            <router-link to="/mysearch">
            <img src="../../static/no_orderimg/search.png" alt=""></router-link>
            </div>

        </div>
        <Fuvs></Fuvs>
        <div>
            <div class="wfll" v-for="(v,i) in arrr"  :key="i" @click="listindex(v.id)">
                <router-link :to="{path:'/list',query:{id:v.id,}}">
                <div class="wfqq"><img :src="v.img" alt=""></div>
                <div class="wfww">{{v.title}}</div>
                </router-link>
            </div>
        </div>

       
    </div>
</template>
<script>
import Fuvs from "../components/fuvs"
 import Toplist from '../components/list/listtop/toplist'
export default {
       components:{
           Fuvs,
           Toplist
        },
       data(){
        return{
            arrr:[]
        }
    },
    created(){
        this.axios({
          url:"/link/healer/hdata",
          method:"get"
        }).then((ok)=>{
              this.arrr=ok.data
        })
    },
    methods: {
        listindex(abc){
            console.log(abc)
             localStorage.Listid=abc
        }
    },
}
</script>
<style scoped>

.h-list-top{
    width: 100%;
    height: 1.5rem;
    background: rgb(84, 200, 253);
}
.top-title span{
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: .4rem;
}
.top-title a {
    /* display: inline-block; */
    float: right;
    margin-top: -1.1rem;
}
 .wfoo{
    width: 100%;
    /* height: 1.6rem; */
    margin-bottom: 1rem;
}
.wfll{
    /* width: 22.2%; */
    height: 2rem;
    float: left;
    margin-left: .75rem;
    margin-top: .22rem
}
.wfqq{
    width: 1.5rem;
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