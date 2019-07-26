<template>
<div id="divs">
    <div class="box">
        <div class="box1"> 
            <span class="sp1" @click="fun()">&lt;</span>
            <span class="sp2">{{text}}</span>
        </div>
        <div class="box2">
            <img :src="feixing" @click="funyyzb()">
            <img :src="shopping1" @click="funyyza()"> 
        </div> 
        <!-- <feixing :style="{display:bool}"></feixing> -->
    </div>

    <div v-show="bool" id="zhezhao">
        <div id="boxBig"></div>
        <div id="boxa"> 
            <div id="box1a">
                <div><img src="../../../static/img/weia.png"><p>微信</p></div>
                <div> <img src="../../../static/img/weib.png"><p>朋友圈</p></div>
                <div><img src="../../../static/img/weic.png" ><p>盒口令</p></div>
                <div><img src="../../../static/img/qq.png" ><p>QQ</p></div>
            </div>
            <div id="box2a">
                <div><img src="../../../static/img/weibo.png"><p>微博</p></div>
                <div class="diva"><img src="../../../static/img/feiding.png"><p>钉钉</p></div>
            </div>
            <p id="box3" @click="funyyzd()">取消</p>
        </div>
    </div>
</div>
    
</template>

<script>
// import feixing from "./feiXing"
export default {
    data(){
        return {
            bool:false,
        }
    },
    props:{
        text:String,
        feixing:String,
        shopping1:String
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        funyyza(){
            this.$router.push("/carshop")
        },
        funyyzb(){
            
            this.bool=true
            // var mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            // document.addEventListener("touchmove",mo,false);//禁止页面滑动


        },
        funyyzd(){
            this.bool =false
            // var mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            // document.removeEventListener("touchmove",mo,false);
        }

    },
    // components:{
    //     feixing
    // }
}
</script>
<style scoped>
/* #divs{
    position: relative;
    width: 100%;
    height: 100%;
} */
    .box{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        position: fixed;
        top: 0;
        background-color: #fff;
        z-index: 1;
    }
    .box>div{
        float: left;
    }
    .sp1{
       font-size: 0.4rem;
       color:#afafaf;
       margin-left: 0.2rem;
    }
    .sp2{
         margin-left: 0.2rem;
         color:#404040;
    }
    .box2{
        margin-left: 4rem;
    }
    .box2 img{
        display: inline-block;
        width: 0.35rem;
        height: 0.32rem;
        vertical-align: middle;
        margin: -0.04rem 0 0 0.2rem;

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
p{
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

#boxBig{
    width: 100%;
    height: 100000rem;
    position: absolute;
    top: 0;
    background-color:black;
    z-index: 10;
    opacity: 0.6;
}
</style>

