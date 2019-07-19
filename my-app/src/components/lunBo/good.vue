<template>
    <div>
       <ul>
           <li id="bo"><img :src="imgurl"/></li>
           <li>{{title}}</li>
           <li class="tejia">特价</li>
           <li class="outprice">{{outprice}}</li>
           <li class="box2">
               <span class="sp1">￥</span>
               <span class="sp2">{{price}}</span>
               /份
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
        car:String
    }
}
</script>
<style scoped>
div{
   width: 2.3rem;
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
    /* display: block; */
    width: 100%;
    height:100%;
    
}
.box2 img{
    width: 0.4rem;
    height: 0.4rem;
    margin-top: -0.2rem;
    vertical-align: -webkit-baseline-middle
}
.tejia{
    width: 0.6rem;
    text-align: center;
    color:red;
    border: 1px solid red;
}
.box2{
    font-size: 14px;
    color:#afafaf;
}
.outprice{
    color:#bfbfbf;
    text-decoration:line-through;
}
.sp1,.sp2{
    color:red;
}
/* .sp1{
    margin-left: -0.6rem;
} */
</style>
