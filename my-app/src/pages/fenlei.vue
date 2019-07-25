<template>
    <div>
        <div class="h-list-top">
            <div class="top-title">
                 <span>分类</span> 
                  <router-link to="/mysearch">
                    <div class="top-img">
                    
                        <img src="../../static/no_orderimg/h_sou.png" alt="">
                    </div>

                </router-link>
            </div>

        </div>
        <Fuvs :colorindex=Colorqita :colorfenlei=Colorfenlei :colorhq=Colorqita :colorshopcar=Colorqita :colormy=Colorqita></Fuvs>
        <div class="h-list-coment">
            <div class="wfll" v-for="(v,i) in arrr"  :key="i" @click="listindex(v.categoriesId)">
                <router-link :to="{path:'/list',query:{id:v.categoriesId}}">
                 <!-- // 模拟数据 -->
                <!-- <div class="wfqq"><img :src="v.img" alt=""></div>
                <div class="wfww">{{v.title}}</div> -->
                 <!-- // 后台数据 -->
                 <div class="wfqq"><img :src="v.img" alt=""></div>
                <div class="wfww">{{v.categoriesName}}</div>
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
            Colorfenlei:"color:#09bffe;box-shadow:0px 2px 6px #666;",
            Colorqita:"color:black",
            arrr:[]
        }
    },
    created(){
        // 模拟数据
        // this.axios({
        //   url:"/link/healer/hdata",
        //   method:"get"
        // }).then((ok)=>{
        //       this.arrr=ok.data
        // })


        // 后台数据
         this.axios({
          url:"http://39.97.247.47:9999/categories/findAll",
          method:"get"
        }).then((ok)=>{
            console.log(ok)
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
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.5rem;
    background: rgb(84, 200, 253);
}
.h-list-coment{
    margin-top: 1.5rem;
}
.top-title span{
    display: inline-block;
    width: 90%;
    text-align: center;
    color: #fff;
    font-size: .4rem;
    margin-left: .3rem;
}
.top-img{
    width: 10%;

    /* display: inline-block; */
    float: right;
    margin-top: -1.1rem;
    z-index: 1;
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