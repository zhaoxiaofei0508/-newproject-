<template>
    <div class="Indexlist">
        <img class="Indexlistimg" :src="ShopImg">
        <div class="IndexlistBox">
            <h1>{{ShopTitle}}</h1>
            <p>{{ShopDetails}}</p>
            <div class="Indexlistbox">
                <span>{{ShopPrice}}</span>
                <i class="iconfont icon-gouwuche" @touchstart="touchstart" @click="shopcaradd(shopindex)"><span :class="shopclass" v-show="shopbool" class="smallbox"></span></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shopcarnum:0,
            x:0,
            y:0,
            shopbool:false
        }
    },
    props:{
        ShopImg:String,
        ShopTitle:String,
        ShopPrice:String,
        ShopDetails:String,
        shopindex:Number,
        shopclass:String
    },
    methods:{
        touchstart(e){
            this.x=e.targetTouches[0].clientX 
            this.y=e.targetTouches[0].clientY
        },
        shopcaradd(i){
            this.shopbool=true
            let num=sessionStorage.getItem('watchStorage');
            num++;
            this.resetSetItem('watchStorage',num);
            let X=document.documentElement.clientWidth ||  document.body.clientWidth;  //可视窗口大小
            let Y=document.documentElement.clientHeight || document.body.clientHeight;
            let x=this.x           //鼠标位置
            let y=this.x
            let getsmallbox=document.querySelectorAll("."+this.shopclass)
            let Xlenght=getsmallbox[i].offsetLeft //元素初始位置
            let Ylenght=getsmallbox[i].offsetTop
            let xlenght=X-x;
            let ylenght=Y-y;
            let aaa=0;
            let jiansu=xlenght/5
            let that=this
            if(x>X/2){
                let weiyi=200-xlenght 
                let jiansuweiyi=weiyi/10
                let time=setInterval(function(){
                        jiansuweiyi=jiansuweiyi*0.9
                        getsmallbox[i].style.left=getsmallbox[i].offsetLeft-jiansuweiyi+"px";
                        getsmallbox[i].style.top=getsmallbox[i].offsetTop+ylenght/10+"px";
                        if(Xlenght-getsmallbox[i].offsetLeft>weiyi){
                            clearInterval(time)
                            that.shopbool=false
                            getsmallbox[i].style.left=Xlenght
                            getsmallbox[i].style.top=Ylenght
                        }
                        if(getsmallbox[i].offsetTop-Ylenght>ylenght-100){
                            clearInterval(time)
                            that.shopbool=false
                            getsmallbox[i].style.left=Xlenght
                            getsmallbox[i].style.top=Ylenght
                        }
            },50) 
            }else{
                let time=setInterval(function(){
                        jiansu=jiansu*0.6
                        getsmallbox[i].style.left=getsmallbox[i].offsetLeft+jiansu+"px";
                        getsmallbox[i].style.top=getsmallbox[i].offsetTop+ylenght/10+"px";
                        if(getsmallbox[i].offsetLeft-Xlenght>xlenght-100){
                            clearInterval(time)
                            that.shopbool=false
                            getsmallbox[i].style.left=Xlenght
                            getsmallbox[i].style.top=Ylenght
                        }
                        if(getsmallbox[i].offsetTop-Ylenght>ylenght-100){
                            clearInterval(time)
                            that.shopbool=false
                            getsmallbox[i].style.left=Xlenght
                            getsmallbox[i].style.top=Ylenght
                        }
                        },50)
            }
        }
    },
}
</script>
<style scoped>
.Indexlist{
    width: 47%;
    margin:0.2rem 1.5% 0;
    float: left;
    background: white;
    border-radius: 0.2rem;
}
.IndexlistBox{
    padding: 0.14rem 0.2rem 5px;
}
.Indexlist .Indexlistimg{
    display: block;
    width: 100%;
}
.Indexlist h1{
    font-size: 0.20rem;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    font-weight: 100;
}
.Indexlist p{
    font-size: 0.20rem;
    height: 0.24rem;
    line-height: 0.24rem;
    overflow: hidden;
    color: #a9a9a9;
}
.Indexlistbox{
    height: 0.7rem;
    display: flex;
    line-height: 0.7rem;
    justify-content: space-between;
}
.Indexlistbox span{
    font-size: 0.2rem;
    font-weight: 600;
    color:#fe5c4f;
}
.Indexlistbox i{
    display: block;
    margin-top: 0.15rem;
    border-radius: 50%;
    background: #09bffe;
    width: 0.5rem;
    height: 0.5rem;
    color: white;
    line-height: 0.5rem;
    text-align: center;
    position: relative;
}
.Indexlistbox .smallbox{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #09bffe;
        position:absolute;
        top:0.12rem;
        left:0.13rem;
        z-index: 11;
}
</style>
