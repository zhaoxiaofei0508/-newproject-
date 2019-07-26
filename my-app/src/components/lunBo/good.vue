<template>
    <div >
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
        outprice:Number,
        price:Number,
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
    methods: {
         fun(id){
            this.$router.push("/details/"+id)
            
        }
    },
  
}
</script>
<style scoped>
div{
   width: 2.6rem;
    height: 3.8rem;
    background-color: #fff;
    border-radius: 2px;
    margin: 0.4rem 0 0 0.14rem ;
    float: left;
    box-shadow: 2px 2px 4px black;
}
li{
    font-size: 10px;
}
#bo{
    width: 100%;
    height: 1.8rem;
    margin-top: 0rem;
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
    font-family: FZYaoti;

}
.tejia{
    width: 2.4rem;
    height: 0.4rem;
    margin: 0 auto;
    color:red;
    margin-top: 0.2rem;

    
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
    font-size: 10px;
}
.sp2{
    margin-left: -0.14rem;
    font-size: 16px;
}
.sp3{
    display: inline-block;
    width: 0.96rem;
     font-size: 0.04rem;
}
</style>
