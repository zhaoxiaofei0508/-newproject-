<template>
<div>
    <div id="boxBig"></div>
    <div id="box">
        <div id="box1">
            <div><img src="../../../static/img/weia.png"><p>微信</p></div>
            <div> <img src="../../../static/img/weib.png"><p>朋友圈</p></div>
            <div><img src="../../../static/img/weic.png" ><p>盒口令</p></div>
            <div><img src="../../../static/img/qq.png" ><p>QQ</p></div>
        </div>
        <div id="box2">
            <div><img src="../../../static/img/weibo.png"><p>微博</p></div>
            <div><img src="../../../static/img/feiding.png"><p>钉钉</p></div>
        </div>
        <p id="box3" @click="funyyzd()">取消</p>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            bool:true
        }
    },
    methods:{
        funyyzd(){
            this.bool=false
        }
    }
}
</script>
<style scoped>
#box{
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom:0;
    background-color: #fff;
    
}
#box1{
    width: 80%;
    height: 38%;
    margin: 0 0.7rem;
    display: flex;
    justify-content: space-around;

}
#box2{
    width: 80%;
    height: 38%;
     margin: 0 0.7rem;
     display: flex;
}
#box2 div{
    margin-left: 0.5rem;
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
    margin-top: -0.4rem;
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
    height: 10rem;
    background-color: #afafaf;
    z-index: 1000;
    /* display: none; */
    opacity: 0.6;
}
</style>

