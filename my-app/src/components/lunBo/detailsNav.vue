<template>
<div id="show">
    <div id="zhezhao" v-if="!bool" @click="funa()"></div> 
    <!-- 物品导航 -->
    <div id="bigbox" v-if="bool">
        <div id="box">
            <div id="box1">
                <span>新鲜蔬菜</span>
                <span>时令水果</span>
                <span>海鲜水产</span>
                <span>肉禽蛋</span>
                <span>乳饮冰淇淋</span>
                <span>酒水饮料</span>
                <span>餐饮烘焙</span>
                <span>粮油素食</span>
                <span>休闲零食</span>
                <span>美妆百货</span>
            </div>
        </div>
    </div>
    <!-- 点击展开 -->
   <img src="../../../static/img/jiantou.png" @click="fun()" v-if="bool">
      
   <!-- 展开的导航 -->
   <div id="nav" v-else >
        <span>新鲜蔬菜</span>
        <span>时令水果</span>
        <span>海鲜水产</span>
        <span>肉禽蛋</span>
        <span>乳饮冰淇淋</span>
        <span>酒水饮料</span>
        <span>餐饮烘焙</span>
        <span>粮油素食</span>
        <span>休闲零食</span>
        <span>美妆百货</span>
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
        fun(){
            this.bool=false
            // var mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            // document.addEventListener("touchmove",mo,false);//禁止页面滑动

        },
        funa(){
            this.bool=true
            // var mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            // document.removeEventListener("touchmove",mo,false);

        }
    }
}
</script>
<style scoped>
#show{
    /* position: relative; */
     position: sticky;
     top:0.8rem;
}
#bigbox{
    background-color:rgb(0, 189, 247);
    overflow: hidden;
    z-index: 30;
    
}
#box{
    overflow: auto;
}
#box1{
    width: 15rem;
    height: 0.6rem;
    line-height: 0.02rem;
    /* margin-top: 0.4rem; */

}
span{
    height:0.6rem ;
    font-size: 0.2rem;
     margin-left: 0.2rem;
     /* margin-top: -0.1rem; */
}
img{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top:0;
    right: 0;
}
#nav{
    position: absolute;
    margin-top: -0.1rem;
    background-color:rgb(0, 189, 247);
     z-index: 40;
}
#nav span{
    display: inline-block;
    width: 2rem;
    line-height: 0.5rem;
    text-align: center;
}
#zhezhao{
    width: 100%;
    height: 30rem;
    position: absolute;
    top:0rem;
    background-color: black;
    opacity: 0.5;
    z-index: 30;
}
</style>

