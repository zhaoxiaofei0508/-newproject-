<template>
<div>
    <div v-if="loading">
        <Loading ></Loading>
    </div>
    <div v-else >
        <!-- nav -->
            <div id="z3">
                <span @click="fun1()">&lt;</span>
                <p>{{getdas[0].title}}</p>
                <img src="../../static/img/h14.png">
            </div>

        <!-- 详情 -->
    <div>
        <div class="zxf1">
            <img src="../../static/img/h1.png" alt="as">
            <span class="zxf3">{{getdas[0].title}}</span>
        </div> 
        <!-- 全文打开 -->
        <div class="z1">
            <span v-if="bool" @click="funa()">{{getdas[0].content}}</span>
            <strong v-else @click="funb()">{{getdas[0].content}}</strong>
            <b @click="fun()" v-if="!bool" class="duo">全文</b>
            <img :src="getdas[0].imgurl" alt="">
            <!-- 购买详情 -->
            <div class="z2" @click="funz(getdas[0].Tuijianid)">
                <img :src="getdas[0].imgurl">
                <div>
                    <span>{{getdas[0].Tuijianxiangqing}}</span>
                    <i>{{getdas[0].Tuijianjiaqian}}</i>
                </div>
            </div>
            <!-- 评论详情 -->
            <Hqxq :newgetdas="getdas"></Hqxq>
        </div>
  
    </div>
        
</div>
</div>   

</template>
<script>
import Hqxq from "../components/hqsh2/hqxq"
import Loading from "../components/hqsh2/loading"
export default {
    components:{
        Hqxq,
        Loading
    },
    data(){
        return{
            hequ:[],
            ida:"",
            bool:false,
            getdas:"",
            loading:"true"
        }
    },
    methods:{
        fun1(){
            this.$router.go(-1)
        },
        fun(){
            this.bool=true;
        },
        funa(){
            this.bool=false;
        },
        funb(){
            this.bool=true;
        },

        funz(id){
            this.axios({
                url:"",
                method: "get",
            })
            this.$router.push("/details")
        }
    },

    created(){
        this.axios({
            url:"/link/zxf/data",
            method: "get",
        }).then((ok)=>{
            // console.log(ok)
            this.ida=this.$route.params.id; 
            this.loading=false//loading
            this.hequ=ok.data.hqsh
            this.getdas = this.hequ.filter((v,i)=>{
                if(this.ida==v.id){
                    return v
                }
            })   
        //     console.log(this.getdas)
        
        //    console.log(this.hequ)
           
        })
    },
   
}
</script>
<style scoped>

 .zxf1{
        height: 1rem;
        line-height: 1rem;
        margin: 0 0.5rem;
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .zxf1>img{
        width: 0.5rem;
        height: 0.5rem;
        margin-top: 0.2rem;
    }
    .zxf3{
        font-size: 0.3rem;
        display: inline-block;
        margin: 0 
    } 
    .z1{
        height: 3rem;
    }
    .z1>img{
        width: 100%;
        height: 100%;
    }
    .z1>span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #494949;
        /* height: 5rem; */
    }
    .z1>strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #494949;
        line-height: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        /* height: 7rem;  */
    }
    .duo{
        font-size: 0.4rem;
        display: inline-block;
        position: absolute;
        top:3.9rem;
        right: 0.1rem;
        color: aqua;
    }
    .z2{
        width: 100%;
        height: 1.5rem;
        overflow: hidden;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .z2>img{
        width: 13%;
        height: 50%;
        border-radius: 50%;
        float: left;
        padding: 0.3rem 0;
    }
    .z2>div>span{
        display:block;
        font-size: 0.3rem;
        padding: 0.2rem 1.5rem;
    }
    .z2>div>i{
        font-size: 0.3rem;
         display:block;
         color: red;
        padding: 0 1.5rem;
    }
    #z3{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        line-height: 1rem;
        background-color: rgb(54, 114, 226);
        position: fixed;
        top: 0;
        z-index: 9999;
    }
    #z3>span{
        color: aliceblue;
        font-size: 0.5rem;
    }
    #z3>p{
        font-size: 0.3rem;
        color: aliceblue;   
    }
    #z3>img{
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        margin-top: 0.3rem;
    }
   
</style>