<template>
    <div>
         <div v-for="(v,i) in newgetdas[0].Lifearr" :key="i">
            <div class="f1">
                <div id="wf1"><img :src="v.Lifearrimgurl" alt=""></div>
                <div class="wf2">
                    <div class="f3">{{v.Lifearrname}}</div>
                    <div class="f4">{{v.Lifearryuefen}}</div>
                </div>
                <div class="wf3">
                        <div>...</div>
                </div>
            </div>
            <div class="wf4">
                <img v-for="(v,i) in v.Lifearrimgarr" :key="i" :src="v.img1" alt="">
            </div>
            <div class="wf5">
                <p>{{v.Lifearrxing1}}</p>
            </div>
            <div class="z1">        
                <strong class="shengluehao" @click="fun(i)" style="-webkit-line-clamp:3;-webkit-box-orient:vertical;">{{v.Lifearrcontent}}</strong>
                <b  @click="fun(i)"  class="duo1">查看全文</b>   
            </div>
            <div class="z6">{{v.Lifearrspan}}</div>
            <div class="z5">
                <div class="z4">
                <span class="iconfont icon-fenxiang" @click="funa()"></span>
                <span class="iconfont icon-dianzan" ></span>
                <span class="iconfont icon-liuyan"></span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newgetdas:Array
    },
    data(){
        return{    
            bool:true,
        }
    },
    methods:{
        fun(index){
                let barr=document.querySelectorAll(".shengluehao")
                let aarr=document.querySelectorAll(".duo1")
                if(barr[index].style.WebkitLineClamp=="3"){
                    barr[index].style.WebkitLineClamp=""
                    barr[index].style.WebkitBoxOrient=""
                    aarr[index].innerHTML="收起"
                }else{
                    barr[index].style.WebkitLineClamp="3"
                    barr[index].style.WebkitBoxOrient="vertical"
                    aarr[index].innerHTML="查看全文"
                    
                }
        },
        funa(){
           
        }
    }

}
    
</script>

<style scoped>
    .f1{
        width: 100%;
        overflow: hidden;
        margin-top: 1rem;
    }
    #wf1{
        float: left;
        width: 1rem;
        height:1rem ;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 0.4rem;
    }
    #wf1>img{
        width: 100%;
        height: 100%;
        float: left;
    }
    .f3{
        font-size: 0.3rem;
    }
    .f4{
        font-size: 0.1rem;
    }
    .wf2{
        float: left;
        padding: 0.2rem 0 0 0.2rem ;
    }
    .wf3{
        float: right;
        font-size: 0.5rem; 
        color: #ccc; 
    }
    .wf4{
        width: 100%;
        height: 4rem;
        text-align: center;
        margin-top: 0.3rem;
    }
    .wf4>img{
        width: 28%;
        height: 46%;
        padding: 0 0.1rem;
        border-radius: 0.3rem;
    }
    .wf5{
        height: 1.5rem;
        font-size: 0.3rem;
    }
    .wf5>p{
        width: 49%;
        padding: 0 0.4rem;
    }

    .wfe{
        font-size: 0.3rem;
        color: #ccc;
    }
    .z4{  
        height: 1rem;
        float: right;
        line-height: 1rem;
        margin-right: 0.3rem;
    }
    .z4>span{
        height: 1rem;
        display: inline-block;
    }
    .z5{
        height: 1rem;
    }
    .z6{
        padding: 0 0.35rem;
        font-size: 0.2rem;
        color: #ccc;
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
        padding: 0 0.2rem;
        /* height: 5rem; */
    }
    .z1>strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #494949;
        line-height: 0.5rem;
        display: -webkit-box; 
        overflow: hidden;
        padding: 0 0.35rem;
    }
    .duo1{
        font-size: 0.3rem;
        display: inline-block;
        position: absolute;
        margin-top: 0rem;
        right: 0.1rem;
        color: aqua;
        margin-right: 0.2rem;
    }
</style>
