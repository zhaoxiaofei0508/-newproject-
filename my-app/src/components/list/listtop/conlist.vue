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
                <div class="wfl" @click=fun9()>
                    <!-- <img src="../../../static/img/h-cart.png" alt=""> -->
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
        imgurl:String

    },
    methods: {
       
    },
    
}
</script>
<style scoped>
.wf{
    height: 2rem;
}
.wfaaa{
    width: 40%;
    height: 2rem;
    float: left;
}
.wfaaa img{
    width: 100%;
    height: 100%;
}
.wfbbb{
    float: left;
    width: 60%;

}
.wfa1{
    font-size: 0.3rem;
}
.wfddd{
    height: 0.4rem;
    width: 100%;
    overflow: hidden;
    font-size: 0.3rem;
    color: #ccc;
}
.wfp{
    font-size: 0.4rem;
    color: red;
    float: left;
    margin-top:0.2rem;
}
.wfl{
    width: 0.6rem;
    height: 0.6rem;
    float: right;
}
.wfl img{
    width: 100%;
    height: 100%;
}
</style>
