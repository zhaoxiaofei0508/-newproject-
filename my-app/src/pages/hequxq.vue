<template>
<div>
    <div v-if="loading">
        <Loading ></Loading>
    </div>
    <div v-else>
        <!-- nav -->
            <div id="z3">
                <span @click="fun1()">&lt;</span>
                <p>{{getdas[0].title}}</p>
                <img src="../../static/img/h14.png" @click="func()">
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
            <b @click="fun()" v-if="!bool" class="duo">查看全文</b>
            <img :src="getdas[0].imgurl" alt="">
            <!-- 购买详情 -->
            <div class="z2" @click="funz(getdas[0].Tuijianid)">
                <img :src="getdas[0].imgurl">
                <div>
                    <span>{{getdas[0].tuijianxiangqing}}</span>
                    <i>{{getdas[0].tuijianjiaqian}}</i>
                </div>
                </div>
            <!-- 评论详情 -->
            <div class="round">
                <Hqxq :newgetdas="getarr"></Hqxq>
            </div>   
        </div>
    </div>
    <!-- 分享 -->      
</div>
<div v-show="boola" id="zhezhao">
        <div id="boxBig" @click="fund()"></div>
        <div id="boxa"> 
            <div id="box1a">
                <div><img src="../../static/img/weia.png"><p>微信</p></div>
                <div><img src="../../static/img/weib.png"><p>朋友圈</p></div>
                <div><img src="../../static/img/weic.png" ><p>盒口令</p></div>
                <div><img src="../../static/img/qq.png" ><p>QQ</p></div>
            </div>
            <div id="box2a">
                <div><img src="../../static/img/weibo.png"><p>微博</p></div>
                <div class="diva"><img src="../../static/img/feiding.png"><p>钉钉</p></div>
            </div>
            <p id="box3" @click="funyyzd()">取消</p>
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
            // ida:"",
            bool:false,
            getdas:"",
            loading: true,
            boola:false,
            getarr:[]
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
        func(){
            this.boola=true   
            document.body.style.overflow='hidden';
        },
        fund(){
            this.boola =false 
            document.body.style.overflow='';//出现滚动条  
        },
        funyyzd(){
            this.boola =false
            document.body.style.overflow='';//出现滚动条
            },
        funz(id){
            // this.axios({
            //     url:"",
            //     method: "get",
            // })
            this.$router.push("/details/"+id)
            
        },
        
    },

    created(){
        let that=this
        setTimeout(function(){
            that.loading=false//loading
        },1000)

        this.axios({
           url:"http://39.97.247.47:9999/findByid",
            method: "get",
            params:{"id":1},
        }).then((ok)=>{
            console.log(ok)
            this.getdas = ok.data

            // this.ida=this.$route.params.id; 
            // this.hequ=ok.data.hqsh
            // this.getdas = this.hequ.filter((v,i)=>{
            //     if(this.ida==v.id){
            //         return v
            //     }
            // })   
        })
         this.axios({
           url:"http://39.97.247.47:9999/findBylid",
            method: "get",
            params:{"lid":1},
        }).then((ok)=>{
            console.log(ok)
            this.getarr = ok.data
        })
        // getarr
    },
   
}
</script>
<style scoped>
    .round{
       padding: 0 0.3rem;
       
    }
 .zxf1{
        height: 1rem;
        line-height: 1rem;
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
        position: relative;
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
        width: 94%;
        height: 100%;
        padding: 0 0.2rem;
    }
    .z1>span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #494949;
        padding: 0 0.2rem;
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
        padding: 0 0.2rem;
    }
    .duo{
        font-size: 0.33rem;
        display: inline-block;
        position: absolute;
        top:4.3rem;
        right: 0.3rem;
        color: rgb(89, 230, 61);
    }
    .z2{
        /* width: 100%; */
        height: 1.5rem;
        overflow: hidden;
        margin: 0 0.2rem;
        background: rgb(172, 124, 124);
        box-sizing: border-box;
        box-shadow: 2px 3px 10px rgb(31, 170, 212);
        border-radius: 0.5rem;
        animation: myfirst 5s linear 1s infinite alternate;
        /* Firefox: */
        -moz-animation: myfirst 5s linear 1s infinite alternate;
        /* Safari 和 Chrome: */
        -webkit-animation: myfirst 5s linear 1s infinite alternate;
        /* Opera: */
        -o-animation: myfirst 5s linear 1s infinite alternate;
    }
    @keyframes myfirst
    {
    from {background: rgb(206, 89, 109);}
    to {background: yellow;}
    }

    @-moz-keyframes myfirst /* Firefox */
    {
    from {background: rgb(206, 89, 109);}
    to {background: yellow;}
    }

    @-webkit-keyframes myfirst /* Safari 和 Chrome */
    {
    from {background: rgb(206, 89, 109);}
    to {background: yellow;}
    }

    @-o-keyframes myfirst /* Opera */
    {
    from {background: rgb(206, 89, 109);}
    to {background: yellow;}
    }
    .z2>img{
        width: 13%;
        height: 55%;
        border-radius: 50%;
        float: left;
        padding: 0 0.5rem;
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
        font-style: normal;
    }
    #z3{
        width: 100%;
        height: 0.8rem;
        display: flex;
        justify-content: space-around;
        line-height: 0.8rem;
        background-color: rgb(54, 114, 226);
        position: fixed;
        top: 0;
        z-index: 9;
    }
    #z3>span{
        color: aliceblue;
        font-size: 0.5rem;
    }
    #z3>p{
        
        font-size: 0.3rem;
        color: aliceblue; 
        /* line-height: 0.8rem;
        height: 0.8rem;   */
    }
    #z3>img{
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        margin-top: 0.2rem;
    }
    #boxBig{
    width: 100%;
    height: 100rem;
    position: absolute;
    top: 0;
    background-color:black;
    z-index: 10;
    opacity: 0.6;
}
 #boxa{
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom:0;
    background-color: #fff;
    z-index: 20;
    
}
#box1a{
    width: 80%;
    height: 38%;
    margin: 0 0.7rem;
    display: flex;
    justify-content: space-around;
}

#box2a{
    width: 80%;
    height: 38%;
     margin: 0 0.7rem;
     display: flex;
}
#box2a div{
    margin-left: 0.3rem;
}
#box2a>.diva{
    margin-left: 0.72rem;
} 
img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.4rem;
}
#boxa p{
    font-size:14px;
    color:black;
    text-align: center;
    margin-top: -0.26rem;
}
#box3{
    width: 100%;
    height: 20%;
    border-top:1px solid #afafaf;
    line-height: 1.2rem;
    font-size: 18px;
    margin-top: 0;
}
</style>