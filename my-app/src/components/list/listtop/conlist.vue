<template>
    <div class="wf">
        <div class="wfaaa">
            <img :src="imgurl" alt="">
        </div>
        <div class="wfbbb">
            <div class="wfa1">{{title}}</div>
            <div class="wfddd">{{content}}</div>
            <div>
                <div class="wfp">{{price}}</div>
                <div class="wfl" @click.stop="shpping(product)">
                    <img src="../../../../static/img/h-cart.png" alt="">
                    </div>
            </div>

        </div>
     
      
    </div>
</template>

<script>

export default {
    props:{
        title:String,
        content:String,
        price:String,
        imgurl:String,
        product:Number

    },
    methods: {
       shpping(product){
           var num  = 1
        //    console.log(product);
         this.$router.push({num:1,id:product}) 
        //  this.$router.push("/carshop/"+num+"/"+product)

       }
    },
    
}
</script>
<style scoped>
.wf{
    height: 2rem;
    margin-top: .2rem;
}
.wfaaa{
    width: 40%;
    height: 2rem;
    float: left;
}
.wfaaa img{
    width: 90%;
    height: 90%;
    margin-top: .1rem;
    margin-left: .1rem;
}
.wfbbb{
    float: left;
    width: 58%;
    border-bottom: 1px solid rgb(241, 241, 241);
    margin-right: .1rem;
    padding-bottom: .4rem;


}
.wfa1{
    width: 100%;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.wfddd{
    height: 0.4rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.25rem;
    color: #ccc;
    margin-top: .12rem;
}
.wfp{
    font-size: 0.28rem;
    color: red;
    float: left;
    margin-top:0.2rem;

}
.wfl{
    width: 0.6rem;
    height: 0.6rem;
    float: right;
    margin-top: -20px;

}
.wfl img{
    width: 100%;
    height: 100%;
    z-index: 11;

}
</style>
