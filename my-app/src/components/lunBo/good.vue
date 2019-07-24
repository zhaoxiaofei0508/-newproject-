<template>
    <div>
       <ul>
           <li id="bo"><img :src="imgurl"/></li>
           <li id="jieshao">{{title}}</li>
           <li class="tejia" ><span :style="border?red:transparent">{{tejia}}</span></li>
           <li class="outprice">{{outprice}}</li>
           <li class="box2">
               <span class="sp1">￥</span>
               <span class="sp2">{{price}}</span>
               <span class="sp3">{{type}}</span>
               <img :src="car">
           </li>
       </ul>
       
    </div>
</template>
<script>
export default {
    props:{
        imgurl:String,
        title:String,
        outprice:String,
        price:String,
        car:String,
        type:String,
        tejia:String,
        border:Number
    },
   data(){
       return {
           red:"borderColor:red",
           transparent:"borderColor:transparent"
       }
   },
  
}
</script>
<style scoped>
div{
   width: 2.6rem;
    height: 3.8rem;
    background-color: #fff;
    border-radius: 4px;
    margin: 0.14rem 0 0 0.14rem ;
    float: left;
}
li{
    font-size: 10px;
}
#bo{
    width: 2.2rem;
    height: 1.5rem;
    margin-top: 0.4rem;
}
#bo img{
    width: 100%;
    height:100%;
    
}
.box2 img{
    width: 0.4rem;
    height: 0.4rem;
    margin-top: -0.2rem;
    vertical-align: -webkit-baseline-middle;
    
}
#jieshao{
    margin: 0 auto;
    width: 2.4rem;
    height: 0.64rem;

}
.tejia{
    width: 2.4rem;
    height: 0.4rem;
    margin: 0 auto;
    color:red;
    
}
.tejia span{
    border:1px solid;
}
.box2{
    width: 2.4rem;
    margin: 0 auto;
    font-size: 14px;
    color:#afafaf;
}
.outprice{
     width: 2.4rem;
    color:#bfbfbf;
    text-decoration:line-through;
    margin: 0 auto;
}
.sp1,.sp2{
    color:red;
}
.sp1{
    font-size: 6px;
}
.sp2{
    margin-left: -0.14rem;
    font-size: 10px;
}
.sp3{
    display: inline-block;
    width: 0.96rem;
     font-size: 0.04rem;
}
</style>
