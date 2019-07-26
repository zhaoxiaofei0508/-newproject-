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
                <div class="ball-container">
                    
                </div>
                <div class="wfl" @click.stop="shpping(product)">
                    <img src="../../../../static/img/h-cart.png" alt="">
                </div>

            </div>

        </div>
     
      
    </div>
</template>

<script>

export default {
    data() {
        return {
          
        }
    },
    props:{
        title:String,
        content:String,
        price:Number,
        imgurl:String,
        product:Number

    },
    methods: {    
       shpping(product,el){

            let num=sessionStorage.getItem('watchStorage');
            num++;
            this.resetSetItem('watchStorage',num);
           var userId = localStorage.userid;
           console.log(userId);
         var param=new URLSearchParams();
            param.append("productId",product);
            param.append("num",1);
            param.append("userId",userId);
            this.axios({
            url:"http://39.97.247.47:9999/shop/save",
            method:"post",
            // post发送数据的时候使用data属性
            data:param
        }).then((ok)=>{
            // console.log(ok.data);
            if(ok.data==0){
            }
                })
       }
    },
}
</script>
<style scoped>

.fade{
    opacity:0;
}
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
